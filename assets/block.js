const TYPE_ATTRIBUTE = 'javascript/blocked';
const patterns = {
    blacklist: window.YETT_BLACKLIST,
};
const observer_blockUnblock = new MutationObserver(mutations => {
    for (let i = 0; i < mutations.length; i++) {
        const {
            addedNodes
        } = mutations[i];
        for (let i = 0; i < addedNodes.length; i++) {
            const node = addedNodes[i];
            if (node.nodeType === 1 && node.tagName === 'SCRIPT') {
                const src = node.src;
                if (isOnBlacklist(src)) {
                    backupScripts.blacklisted.push([node, node.type]);
                    node.type = TYPE_ATTRIBUTE;
                    const beforeScriptExecuteListener = function(event) {
                        if (node.getAttribute('type') === TYPE_ATTRIBUTE) {
                            event.preventDefault();
                            node.removeEventListener('beforescriptexecute', beforeScriptExecuteListener);
                        }
                    };
                    node.addEventListener('beforescriptexecute', beforeScriptExecuteListener);
                    node.parentElement && node.parentElement.removeChild(node);
                } else {
                    node.async = true;
                    node.fetchpriority = "low";
                }
            }
        }
    }
});
observer_blockUnblock.observe(document.documentElement, {
    childList: true,
    subtree: true
});
const isOnBlacklist = (src) => (src && patterns.blacklist && patterns.blacklist.some(pattern => new RegExp(pattern).test(src)));
const createElementBackup = document.createElement;
document.createElement = function(...args) {
    if (args[0].toLowerCase() !== 'script')
        return createElementBackup.bind(document)(...args);
    const scriptElt = createElementBackup.bind(document)(...args);
    try {
        Object.defineProperty(scriptElt, 'src', {
            set(value) {
                if (isOnBlacklist(value)) {
                    scriptElt.type = TYPE_ATTRIBUTE;
                } else {
                    scriptElt.async = true;
                    scriptElt.fetchpriority = "low";
                }
                Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src').set.call(scriptElt, value);
            }
        });
        Object.defineProperty(scriptElt, 'type', {
            get() {
                if (scriptElt.getAttribute('type') === TYPE_ATTRIBUTE || isOnBlacklist(scriptElt.src)) {
                    return null;
                }
                return Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'type').get.call(scriptElt);
            },
            set(value) {
                const typeValue = isOnBlacklist(scriptElt.src) ? TYPE_ATTRIBUTE : value;
                Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'type').set.call(scriptElt, typeValue);
            }
        });
    } catch (error) {
        console.warn('Yett: unable to prevent script execution for script src ', scriptElt.src, '.\n', 'A likely cause would be because you are using a third-party browser extension that monkey patches the "document.createElement" function.');
    }
    return scriptElt;
};