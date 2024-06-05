/**
 * Mixpanel Event Tracking Initializer
 */
(function (f, b) {
  if (!b.__SV) {
    var e, g, i, h;
    window.mixpanel = b;
    b._i = [];
    b.init = function (e, f, c) {
      function g(a, d) {
        var b = d.split(".");
        2 == b.length && ((a = a[b[0]]), (d = b[1]));
        a[d] = function () {
          a.push([d].concat(Array.prototype.slice.call(arguments, 0)));
        };
      }
      var a = b;
      "undefined" !== typeof c ? (a = b[c] = []) : (c = "mixpanel");
      a.people = a.people || [];
      a.toString = function (a) {
        var d = "mixpanel";
        "mixpanel" !== c && (d += "." + c);
        a || (d += " (stub)");
        return d;
      };
      a.people.toString = function () {
        return a.toString(1) + ".people (stub)";
      };
      i =
        "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(
          " "
        );
      for (h = 0; h < i.length; h++) g(a, i[h]);
      var j = "set set_once union unset remove delete".split(" ");
      a.get_group = function () {
        function b(c) {
          d[c] = function () {
            call2_args = arguments;
            call2 = [c].concat(Array.prototype.slice.call(call2_args, 0));
            a.push([e, call2]);
          };
        }
        for (
          var d = {},
            e = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)),
            c = 0;
          c < j.length;
          c++
        )
          b(j[c]);
        return d;
      };
      b._i.push([e, f, c]);
    };
    b.__SV = 1.2;
    e = f.createElement("script");
    e.type = "text/javascript";
    e.async = !0;
    e.src =
      "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL
        ? MIXPANEL_CUSTOM_LIB_URL
        : "file:" === f.location.protocol &&
          "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)
        ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
        : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
    g = f.getElementsByTagName("script")[0];
    g.parentNode.insertBefore(e, g);
  }
})(document, window.mixpanel || []);

// mixpanel.init("1e8f3dbc29a04e9ae06ef45a4e721309", {
//   debug: true,
//   track_pageview: true,
//   persistence: "localStorage",
// });

/**
 * Mixpanel Event Tracking Configuration Array
 *
 * FORMAT:
 *   {
 *      key: "event-key",
 *      eventName: "Event Name",
 *      eventHasParameters: true,
 *      needsAPIData: true,
 *      needsElementData: true,
 *      needsConstData: true,
 *      needsNativeCodeData: true,
 *      apiUrl: "api-url",
 *      apiDataMap: {},
 *      elementDataMap: {},
 *      constDataMap: {},
 *      customFunction: false
 *   }
 *
 * FORMAT FIELDS EXAPAINATION:
 *   key: "Key of the event which is the value that we put in the value of the attribute 'data-foxtale-event'.",
 *   eventName: "Event Name that will showed in the mixpanel dashboard.",
 *   eventHasParameters: "flag to check if the event has parameters or not, if this is false, then all type of parameter flags are false for this event ( needsAPIData, needsElementData, needsConstData, needsNativeCodeData ).",
 *   needsAPIData: "flag to check if the event needs api data or not ( this is to decide whether we need to make an AJAX call or not ).",
 *   needsElementData: "flag to check if the event needs element data or not ( this is to decide whether we need to fetch data from other attributes of the element or not ).",
 *   needsConstData: "flag to check if the event needs const data or not ( this is to decide whether we need any constant data or not ).",
 *   needsNativeCodeData: "this is to decide whether we need any native code ( that we fetch from the liquid code directly and pass it with combining value of 'data-foxtale-event attribute`s actual value'data or not. ( we send this data as this format as data-foxtale-event`s value : {data-foxtale-event-key-name}--{native-code-value-1}--{native-code-value-2} and like this ).",
 *   apiDataMap: if the needsAPIData flag is true, then this will contain the data that we use to map the api response to the response needed to send to the event.
 *   apiUrl: if the needsAPIData flag is true, then this will contain the api url to make the AJAX call.
 *   elementDataMap: if the needsElementData flag is true, then this will contain the data that we use to map the element data to the response needed to send to the event.
 *   constDataMap: if the needsConstData flag is true, then this will contain the actual constant data to send to the event.
 *   customFunction: this is the flag, that we need if any event does not fall under this dynamic configuration and needs it custom way in any part, like in different api response mapping, different api call, different element after fetching the main one, and so on. ( this flag is there to just keep the functionality running till we found the way to fit this in the dynamic structure too ).
 */
const eventConfig = [
  {
    key: "shop-now-banner-click-event",
    eventName: "Shop Now Banner Clicked",
    eventHasParameters: true,
    needsAPIData: false,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {},
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
  {
    key: "cart-viewed",
    eventName: "Viewed cart",
    eventHasParameters: true,
    needsAPIData: true,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {
      // "cartItemId": "",
      // "cartItemSku": "",
      // "cartItemTitle": "",
      // "cartItemQuantity": "",
      // "cartItemVarient": ""
      cartTotal: "total_price",
      cartDiscounts: "total_discount",
      cartItemCount: "item_count"
    },
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: true,
  },
  {
    key: "cart-item-viewed",
    eventName: "Viewed cart item",
    eventHasParameters: true,
    needsAPIData: true,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {
      // cartItemId: "id",
      // cartItemSku: "sku",
      // cartItemTitle: "title",
      // // cartItemQuantity: "",
      // cartItemVarient: "varient_id",
      // cartTotal: "total_price",
      // cartDiscounts: "total_discount",
      // cartItemCount: "item_count"
      productName: "handle",
      productUrl: "url",
      productPrice: "price",
      category: "product_type",
      varientSku: "sku",
      productAvailabe: "available",
      productMaxPrice: "price_max",
      productMinPrice: "price_min",
      productTitle: "title",
      tags: "tags",
    },
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: true,
  },
  {
    key: "logo-click-event",
    eventName: "Foxtale Logo Clicked",
    eventHasParameters: true,
    needsAPIData: false,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: false,
    apiDataMap: {},
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
  {
    key: "logout-click-event",
    eventName: "Logged Out",
    eventHasParameters: true,
    needsAPIData: false,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {},
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
  {
    key: "product-click-event",
    eventName: "Viewed Product",
    eventHasParameters: true,
    needsAPIData: true,
    needsElementData: true,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {
      productName: "handle",
      productUrl: "url",
      productPrice: "price",
      category: "product_type",
      varientSku: "sku",
      productAvailabe: "available",
      productMaxPrice: "price_max",
      productMinPrice: "price_min",
      productTitle: "title",
      tags: "tags",
    },
    elementDataMap: {
      // apiUrlForData: "href",
    },
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: true,
  },
  {
    key: "product-search-event",
    eventName: "Product Search",
    eventHasParameters: true,
    needsAPIData: false,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {},
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
  {
    key: "view-more-click-event",
    eventName: "Viewed Collection",
    eventHasParameters: true,
    needsAPIData: false,
    needsElementData: true,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {},
    elementDataMap: {
      // collectionUrl: "href",
    },
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
  {
    key: "add-to-cart-click-event",
    eventName: "Added to cart",
    eventHasParameters: true,
    needsAPIData: true,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {
      productName: "handle",
      productUrl: "url",
      productPrice: "price",
      category: "product_type",
      varientSku: "sku",
      productAvailabe: "available",
      productMaxPrice: "price_max",
      productMinPrice: "price_min",
      productTitle: "title",
      tags: "tags",
    },
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: true,
  },
  {
    key: "remove-from-cart-click-event",
    eventName: "Removed from cart",
    eventHasParameters: true,
    needsAPIData: true,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {
      productName: "handle",
      productUrl: "url",
      productPrice: "price",
      category: "product_type",
      varientSku: "sku",
      productAvailabe: "available",
      productMaxPrice: "price_max",
      productMinPrice: "price_min",
      productTitle: "title",
      tags: "tags",
    },
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: true,
  },
  {
    key: "buy-now-button-click-event",
    eventName: "Clicked Dynamic Checkout Button",
    eventHasParameters: true,
    needsAPIData: true,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {
      productName: "handle",
      productUrl: "url",
      productPrice: "price",
      category: "product_type",
      varientSku: "sku",
      productAvailabe: "available",
      productMaxPrice: "price_max",
      productMinPrice: "price_min",
      productTitle: "title",
      tags: "tags",
    },
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
  {
    key: "shop-by-concern-click-event",
    eventName: "Viewed Collection",
    eventHasParameters: true,
    needsAPIData: false,
    needsElementData: true,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {},
    elementDataMap: {
      // collectionUrl: "href",
    },
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
  {
    key: "info-section-click-event",
    eventName: "Viewed Collection",
    eventHasParameters: true,
    needsAPIData: false,
    needsElementData: true,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {},
    elementDataMap: {
      // collectionUrl: "href",
    },
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
  {
    key: "routine-section-click-event",
    eventName: "Routine Section Clicked",
    eventHasParameters: true,
    needsAPIData: false,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {},
    elementDataMap: {
      // collectionUrl: "href",
    },
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
  // {
  //   key: "add-all-to-cart-click-event",
  //   eventName: "Add All To Cart",
  //   eventHasParameters: true,
  //   needsAPIData: false,
  //   needsElementData: false,
  //   needsConstData: true,
  //   needsNativeCodeData: true,
  //   apiDataMap: {},
  //   elementDataMap: {},
  //   constDataMap: {
  //     source: source == 'index' ? 'home-page' : source,
  //   },
  //   customFunction: false,
  // },
  {
    key: "the-fox-tales-section-click-event",
    eventName: "The FoxTales Clicked",
    eventHasParameters: true,
    needsAPIData: false,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {},
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
  {
    key: "navigation-section-click-event",
    eventName: "Navigation Section Clicked",
    eventHasParameters: true,
    needsAPIData: false,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {},
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
  {
    key: "cart-quantity-change-event",
    eventName: "Cart Quantity Changed",
    eventHasParameters: true,
    needsAPIData: true,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {},
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: true,
  },
  {
    key: "announcement-section-click-event",
    eventName: "Announcement Section Clicked",
    eventHasParameters: true,
    needsAPIData: false,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: false,
    apiDataMap: {},
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
  {
    key: "filter-select-event",
    eventName: "Filter Section Selected",
    eventHasParameters: true,
    needsAPIData: false,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: true,
    apiDataMap: {},
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
  {
    key: "begin-checkout",
    eventName: "Started Checkout",
    eventHasParameters: true,
    needsAPIData: false,
    needsElementData: false,
    needsConstData: true,
    needsNativeCodeData: false,
    apiDataMap: {},
    elementDataMap: {},
    constDataMap: {
      source: source == 'index' ? 'home-page' : source,
    },
    customFunction: false,
  },
];

const observationConfig = [
  {
    parentElementQuery: "#t4s-menu-drawer",
  },
  {
    parentElementQuery: "#t4s-mini_cart",
  },
  // {
  //   parentElementQuery: ".t4s-site-nav__cart",
  // },
  {
    parentElementQuery: ".pairProduct-grid-item",
  },
  {
    parentElementQuery: ".stc-mixpanel-adc-buyn-parent-class",
  },
  {
    parentElementQuery: ".t4s-sticky-atc", // Can also add these: "t4s-pf t4s-b-0 t4s-l-0 t4s-r-0 t4s-op-0 t4s-pe-none is--shown"
  },
  {
    parentElementQuery: "#shopify-section-search-hidden",
  }
];


// function identifyAndSetProfile(distinctId, properties) {
//   const projectToken = "870b72f7101d6cff39515fddb9874ded"; // Replace with your actual Mixpanel project token

//   // Prepare the data for the identify call
//   const userData = {
//       "$token": projectToken,
//       "$distinct_id": distinctId,
//       "$set_once": { ...properties, "last_updated": new Date().toISOString() }
//   };

//   console.log("user data from identifyAndSetProfile: ", JSON.stringify(userData))

//   const base64UserData = btoa(JSON.stringify(userData));

//   fetch('https://api.mixpanel.com/engage?data=' + base64UserData, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//       }
//   })
//   .then(response => response.text())
//   .then(result => console.log('Mixpanel profile update response:', result))
//   .catch(error => console.error('Error updating profile in Mixpanel:', error));
// }

// // Mixpanel REST API to indentify the user
// function identifyAndSetProfile(newDeviceId, identifiedUserId) {
//   // const options = {
//   //   method: 'POST',
//   //   headers: {accept: 'text/plain', 'content-type': 'application/x-www-form-urlencoded'},
//   //   body: new URLSearchParams({
//   //     data: `{\n      "event": "$identify",\n      "properties": {\n          "$identified_id": ${identifiedUserId},\n          "$anon_id": ${newDeviceId},\n          "token": "870b72f7101d6cff39515fddb9874ded"\n      }\n}\n`
//   //   })
//   // };
//   // const options = {
//   //   method: 'POST',
//   //   headers: {accept: 'application/json', 'content-type': 'application/json'},
//   //   body: JSON.stringify([
//   //     {
//   //       event: '$merge',
//   //       properties: {
//   //         $distinct_ids: ['$device:87215053-a3c9-4fce-bfe6-77c5014e058d', '7421526966519']
//   //       }
//   //     }
//   //   ])
//   // };
//   const data = {
//     "event": "$create_alias",
//     "properties": {
//       "distinct_id": newDeviceId,
//       "alias": identifiedUserId,
//       "token": "870b72f7101d6cff39515fddb9874ded"
//     }
//   }

//   const base64Data = Buffer.from(JSON.stringify(data)).toString('base64');

//   const options = {
//     method: 'POST',
//     headers: {accept: 'text/plain', 'content-type': 'application/x-www-form-urlencoded'},
//     body: new URLSearchParams({
//       data: base64Data, //`{\n    "event": "$create_alias",\n    "properties": {\n        "distinct_id": ${newDeviceId},\n        "alias": ${identifiedUserId},\n        "token": "870b72f7101d6cff39515fddb9874ded"\n    }\n}\n`,
//     })
//   };
  
//   // fetch('https://api.mixpanel.com/track#create-identity', options)
//   // fetch('https://api.mixpanel.com/import?strict=1&project_id=3274471', options)
//   fetch('https://api.mixpanel.com/track#identity-create-alias', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// }

// Setting up distinct id of the user if it is logged in
const mixpanelLocalStorageObject = JSON.parse(localStorage.getItem("mp_870b72f7101d6cff39515fddb9874ded_mixpanel"));
let mixpanelDistinctId = JSON.parse(localStorage.getItem("mp_distinct_id"));

if (!mixpanelDistinctId) {
  const randomGeneratedDistinctId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  localStorage.setItem('mp_distinct_id', JSON.stringify(randomGeneratedDistinctId));
  mixpanelDistinctId = randomGeneratedDistinctId;
}

const kwikPassCustomerId = localStorage.getItem("kp_customer_id")

console.log("kwikPassCustomerId: ", kwikPassCustomerId);
console.log("mp_distinct_id", mixpanelDistinctId);

mixpanel.init("1e8f3dbc29a04e9ae06ef45a4e721309", {
  debug: true,
  track_pageview: false,
  persistence: "localStorage",
});

mixpanel.identify(mixpanelDistinctId);

// console.log("mixpanelLocalStorageObject?.['distinct_id']: ", mixpanelLocalStorageObject)?.["distinct_id"]
// console.log("mixpanel local storage object", mixpanelLocalStorageObject);
// if (mixpanelDistinctId || mixpanelLocalStorageObject?.["distinct_id"]) {
//   identifyAndSetProfile(mixpanelDistinctId || mixpanelLocalStorageObject?.["distinct_id"], {});
// }

// if (kwikPassCustomerId) {
//   console.log('kwikPassCustomerId', kwikPassCustomerId)
//   // mixpanel.identify(kwikPassCustomerId);
//   localStorage.setItem("mp_distinct_id", kwikPassCustomerId);
//   mixpanelDistinctId = kwikPassCustomerId
// }
// mixpanel.people.set_once({
//   last_updated: new Date(),
// });


/////////////////////////////////////// Section to get and store UTM parameters if there are any /////////////////////////////////////////////

// function getUTMParams() {
//   const params = {};
//   const queryString = window.location.search.substring(1);
//   const regex = /([^&=]+)=([^&]*)/g;
//   let match;
//   try {
//       while (match = regex.exec(queryString)) {
//           params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
//       }
//   } catch (error) {
//       console.error('Error capturing UTM parameters:', error);
//   }
//   return params;
// }

function getUTMParams() {
  try {
     const params = {};
     const queryString = window.location.search?.substring(1);

     if (queryString) {
       
       const uriComponentsString = queryString.split('?');

       if (uriComponentsString.length > 1 ) {
         const uriParameters = uriComponentsString?.[1]?.split('&');
  
         if (uriParameters.length) {
           for ( let itr = 0; itr < uriParameters.length; itr ++ ) {
             const singleParamStringKeyValuePair = uriParameters?.[itr]?.split('=');
    
             params[singleParamStringKeyValuePair[0]] = singleParamStringKeyValuePair[1];
           }
         } else {
           return {};
         }
       } else {
         return {};
       }
     } else {
       return {};
    }

    return params;
    
  } catch (error) {
      console.error('Error capturing UTM parameters:', error);
      return {};
  }
}
  

function storeUTMParams() {
  const params = getUTMParams();
  
  // Mapping UTM parameters to the names from the screenshot
  const mappedParams = {
      utm_source: params?.utm_source || null,
      utm_medium: params?.utm_medium || null,
      utm_campaign: params?.utm_campaign || null,
      utm_term: params?.utm_term || null,
      utm_content: params?.utm_content || null
  };
  
  // Store the mapped parameters in local storage with error handling
  try {
      if (mappedParams.utm_source) localStorage.setItem('utm_source', mappedParams.utm_source);
      if (mappedParams.utm_medium) localStorage.setItem('utm_medium', mappedParams.utm_medium);
      if (mappedParams.utm_campaign) localStorage.setItem('utm_campaign', mappedParams.utm_campaign);
      if (mappedParams.utm_term) localStorage.setItem('utm_term', mappedParams.utm_term);
      if (mappedParams.utm_content) localStorage.setItem('utm_content', mappedParams.utm_content);
  } catch (error) {
      console.error('Error storing UTM parameters in local storage:', error);
  }
}

function getStoredUTMParams() {
  let utmParams = {};
  try {
      utmParams = {
          "utm_source": localStorage.getItem('utm_source'),
          "utm_medium": localStorage.getItem('utm_medium'),
          "utm_campaign": localStorage.getItem('utm_campaign'),
          "utm_term": localStorage.getItem('utm_term'),
          "utm_content": localStorage.getItem('utm_content')
      };
  } catch (error) {
      console.error('Error retrieving UTM parameters from local storage:', error);
  }
  return utmParams;
}


// Call this function on page load
storeUTMParams();

///////////////////////////////////////////////////////////////////////////////////////////////

function getBrowserInfo() {
  var ua = navigator.userAgent, tem,
      matchTest = ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*(\d+)/i) || [];
  if (/trident/i.test(matchTest[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return { name: 'IE', version: (tem[1] || '') };
  }
  if (matchTest[1] === 'Chrome') {
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) return { name: tem.slice(1)[0].replace('OPR', 'Opera'), version: tem.slice(1)[1] };
  }
  matchTest = matchTest[2] ? [matchTest[1], matchTest[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) matchTest.splice(1, 1, tem[1]);
  return {
      name: matchTest[0],
      version: matchTest[1]
  };
}

function getOS() {
  var os = 'Unknown';
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/windows phone/i.test(userAgent)) {
      os = "Windows Phone";
  } else if (/android/i.test(userAgent)) {
      os = "Android";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      os = "iOS";
  } else if (/Macintosh/.test(userAgent)) {
      os = "MacOS";
  } else if (/Windows/.test(userAgent)) {
      os = "Windows";
  } else if (/Linux/.test(userAgent)) {
      os = "Linux";
  }

  return os;
}

async function getDefaultPropertiesAndStore() {
  var browserInfo = getBrowserInfo();

  var defaultProperties = {
      // "API Endpoint": "api-js.mixpanel.com",
      // "API Timestamp": Date.now(),
      "Browser": browserInfo.name,
      "Browser Version": browserInfo.version,
      "Current URL": window.location.href,
      "Device": navigator.userAgent.match(/(mobile|android|tablet|ipad|iphone|ipod)/i) ? 'Mobile' : 'Desktop',
      "Insert ID": Math.random().toString(36).substr(2, 9),
      // "Library Version": "2.51.0",
      // "Mixpanel Library": "web",
      "Operating System": getOS(),
      "Screen Height": window.screen.height,
      "Screen Width": window.screen.width,
      // "Sent By Library Version": "2.51.0"
  };

  var locationInfo = {};

  try {

    var locationData = (await fetch('https://ipinfo.io/json')).json();

    locationInfo = { 
      "$city": response.city, 
      "$region": response.region, 
      "$country": response.country 
    }
        .catch(() => (
          locationInfo = { 
            "$city": 'Unknown', 
            "$region": 'Unknown', 
            "$country": 'Unknown' 
          })
        );

      localStorage.setItem("defaultProperties", JSON.stringify(defaultProperties));
    
      } catch (error) {
        
      }
}

getDefaultPropertiesAndStore();

// Mixpael REST API for tracking the events
function trackEvent(eventName, properties) {
  const projectToken = "1e8f3dbc29a04e9ae06ef45a4e721309";

  // if (kwikPassCustomerId) {
  //   identifyAndSetProfile(mixpanelDistinctId, kwikPassCustomerId);
  // }
  
  const utmProperties = getStoredUTMParams();
  const defaultProperties = JSON.parse(localStorage.getItem("defaultProperties")) || {};

  const data = {
      event: eventName,
      properties: {
          token: projectToken,
          "distinct_id": mixpanelDistinctId,
          ...defaultProperties,
          ...utmProperties,
          ...properties,
      }
  };

  const base64Data = btoa(JSON.stringify(data));

  fetch('https://api.mixpanel.com/track?data=' + base64Data, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'  // This header can be adjusted if needed
      }
  })
  .then(response => response.text())
  .then(result => console.log('Mixpanel track event response:', result))
  .catch(error => console.error('Error posting event to Mixpanel:', error));
}

window.trackMixpanelEvent = trackEvent;

//////////////// Here Starts The Mixpanel Event Tracking Code ///////////////////

/**
 * Function to get the Maping of Native code data from the 'foxtale-event-attr-' pre added attributes,
 * which will be used to map the native code data to the response needed to send to the event
 */
function getNativeCodeDataForEventFromElement(element) {

  const regex = /foxtale-event-attr-(.*)/;
  const attributes = element.attributes; // Get all the attributes of the element
  const customAttributes = {}; // Create an object to store the attributes
  
  // Loop through all the attributes
  for (let i = 0; i < attributes.length; i++) {
    const attr = attributes[i];
    const match = attr.name.match(regex);

    // console.log("match for attr: ", match, attr);


    // Check if the attribute starts with "cust-attr"
    if (match) {

      // Split the attribute name to get the key and value
      const [ key, value ] = [ match[1], attr.value ]; // value after the match of regex, in this case the "Actual Key Name To Put In Properties" of the from the attr key

      // Store the key-value pair in the customAttributes object
      customAttributes[key] = value;

    }

    // console.log("customAttributes: ", customAttributes);
  }

  // Return the customAttributes object
  return customAttributes;
}

/**
 * this is the mapping that is used to get the custom function in case of the "customFunction" enabled event
 */
const eventsToCustomFunctionMap = {
  "add-to-cart-click-event": getProductDetails,
  "remove-from-cart-click-event": getProductDetails,
  "product-click-event": getProductDetails,
  "cart-quantity-change-event": getProductDetails,
  "cart-viewed": getCartDetails,
  "cart-item-viewed": getProductDetails,
};

/****************************************************************************************************/
/**
 * All custom functions definitions should go here
 */
function getProductDetails(
  config,
  element = null,
) {
  let apiResData = {};
  let nativeCodeDataForEventFromElement = {};
  const elementDataMap = config.elementDataMap || {};
  const constDataMap = config.constDataMap || {};
  const needsNativeCodeData = config.needsNativeCodeData;

  const latestProductDetailsForParameters = {};

  if (elementDataMap && Object.keys(elementDataMap).length > 0) {
    for (const [mpProp, elementProp] of Object.entries(elementDataMap)) {
      latestProductDetailsForParameters[mpProp] =
        element.getAttribute(elementProp);
    }
  }

  if (constDataMap && Object.keys(constDataMap).length > 0) {
    for (const [mpProp, constProp] of Object.entries(constDataMap)) {
      latestProductDetailsForParameters[mpProp] = constProp;
    }
  }

  if (needsNativeCodeData) {
    nativeCodeDataForEventFromElement = getNativeCodeDataForEventFromElement(element);

    for (const [mpProp, nativeProp] of Object.entries(
      nativeCodeDataForEventFromElement
    )) {
      latestProductDetailsForParameters[mpProp] = nativeProp;
    }
  }

  if (config.needsAPIData) {
    $.ajax({
      url: config.apiUrl
        ? config.apiUrl
        : "" || latestProductDetailsForParameters?.['api-url-for-data']
        ? "https://foxtale.in" +
          latestProductDetailsForParameters?.['api-url-for-data']
        : "" || latestProductDetailsForParameters.productHandle
        ? "https://foxtale.in/products/" +
          latestProductDetailsForParameters.productHandle
        : "",
      type: "GET",
      dataType: "json",
      async: false, // This makes the AJAX call synchronous
      success: function (data) {
        console.log("data from ajax query: ", data);

        apiResData = data;
      },
      error: function (error) {
        console.log("Error fetching product data:", error);
      },
    });
  }

  var latestAddedProductItem = apiResData?.product;

  for (const [mpProp, apiProp] of Object.entries(config.apiDataMap)) {
    latestProductDetailsForParameters[mpProp] = latestAddedProductItem[apiProp];

    if (["price", "sku"].includes(apiProp)) {
      latestProductDetailsForParameters[mpProp] =
        latestAddedProductItem.variants[0][apiProp];
    }

    if (apiProp == "url") {
      latestProductDetailsForParameters[mpProp] =
        nativeCodeDataForEventFromElement["api-url-for-data"];
    }
  }

  // cart details when product is getting clicked and events are like add-to-cart

  if ( config.key == "add-to-cart-click-event" || config.key == "remove-from-cart-click-event" || config.key == "cart-quantity-change-event") {
    if (config.needsAPIData) {
      $.ajax({
        url: "https://foxtale.in" + "/cart.js",
        type: "GET",
        dataType: "json",
        async: false, // This makes the AJAX call synchronous
        success: function (data) {
          console.log("data from ajax query: ", data);
  
          latestProductDetailsForParameters['cart'] = JSON.stringify(data);
        },
        error: function (error) {
          console.log("Error fetching product data:", error);
        },
      });
    }
  }

  return latestProductDetailsForParameters;
}

function getCartDetails(
  config,
  element = null,
) {
  let apiResData = {};
  let nativeCodeDataForEventFromElement = {};
  const elementDataMap = config.elementDataMap || {};
  const constDataMap = config.constDataMap || {};
  const needsNativeCodeData = config.needsNativeCodeData;

  const latestCartDataForParameteres = {};

  if (elementDataMap && Object.keys(elementDataMap).length > 0) {
    for (const [mpProp, elementProp] of Object.entries(elementDataMap)) {
      latestCartDataForParameteres[mpProp] =
        element.getAttribute(elementProp);
    }
  }

  if (constDataMap && Object.keys(constDataMap).length > 0) {
    for (const [mpProp, constProp] of Object.entries(constDataMap)) {
      latestCartDataForParameteres[mpProp] = constProp;
    }
  }

  if (needsNativeCodeData) {
    nativeCodeDataForEventFromElement = getNativeCodeDataForEventFromElement(element);

    for (const [mpProp, nativeProp] of Object.entries(
      nativeCodeDataForEventFromElement
    )) {
      latestCartDataForParameteres[mpProp] = nativeProp;
    }
  }

  if (config.needsAPIData) {
    $.ajax({
      url: config.apiUrl
        ? config.apiUrl
        : "" || latestCartDataForParameteres?.['api-url-for-data']
        ? "https://foxtale.in" +
          latestCartDataForParameteres?.['api-url-for-data']
        : "" || latestCartDataForParameteres.productHandle,
      type: "GET",
      dataType: "json",
      async: false, // This makes the AJAX call synchronous
      success: function (data) {
        console.log("data from ajax query: ", data);

        apiResData = data;
      },
      error: function (error) {
        console.log("Error fetching product data:", error);
      },
    });
  }

  var latestCartData = apiResData;

  for (const [mpProp, apiProp] of Object.entries(config.apiDataMap)) {
    latestCartDataForParameteres[mpProp] = latestCartData[apiProp];

    // if (["price", "sku"].includes(apiProp)) {
    //   latestProductDetailsForParameters[mpProp] =
    //     latestAddedProductItem.variants[0][apiProp];
    // }

    // if (apiProp == "url") {
    //   latestProductDetailsForParameters[mpProp] =
    //     nativeCodeDataForEventFromElement["api-url-for-data"];
    // }
  }

  return latestCartDataForParameteres;
}
/****************************************************************************************************/

/**
 * Mapping for event configuration to get the config of events based on their key in O(1) ( in average case obviously, but that is good enough for us for now )
 */
var eventConfigMap = new Map();
for (const config of eventConfig) {
  eventConfigMap.set(config.key, config);
}

/**
 * Function to track events with Mixpanel
 */
function trackMixpanelEvent(eventName, properties = {}) {
  if (window.mixpanel) {
    // window.mixpanel.track(eventName, properties);
    trackEvent(eventName, properties);
  } else {
    console.error("Mixpanel is not initialized.");
  }
}

/**
 * Function to fetch data from API and send event to mixpanel
 */
async function getEventsParameterAndTriggerEvent(element = null, config) {
  try {
    let eventProperties = {};
    let apiResData = {};
    let nativeCodeDataForEventFromElement = {};

    if (config.customFunction) {
      eventProperties = eventsToCustomFunctionMap[config.key](
        config,
        element
      );
    
    } else {
      
      if (config.needsElementData) {
        for (const [mpProp, elementProp] of Object.entries(
          config.elementDataMap
        )) {
          eventProperties[mpProp] = element.getAttribute(elementProp);
        }
      }

      if (config.needsConstData) {
        for (const [mpProp, constProp] of Object.entries(config.constDataMap)) {
          eventProperties[mpProp] = constProp;
        }
      }

      if (config.needsNativeCodeData) {
        nativeCodeDataForEventFromElement = getNativeCodeDataForEventFromElement(element);

        for (const [mpProp, nativeProp] of Object.entries(
          nativeCodeDataForEventFromElement
        )) {
          eventProperties[mpProp] = nativeProp;
        }
      }

      if (config.needsAPIData) {
        $.ajax({
          url: config.apiUrl
            ? config.apiUrl
            : "" || eventProperties?.['api-url-for-data']
            ? "https://foxtale.in" +
              nativeCodeDataForEventFromElement?.['api-url-for-data']
            : "" || eventProperties.productHandle
            ? "https://foxtale.in/products/" +
              nativeCodeDataForEventFromElement.productHandle
            : "",
          type: "GET",
          dataType: "json",
          async: false, // This makes the AJAX call synchronous
          success: function (data) {
            console.log("data from ajax query: ", data);

            apiResData = data;
          },
          error: function (error) {
            console.log("Error fetching product data:", error);
          },
        });
      }

      for (const [mpProp, apiProp] of Object.entries(config.apiDataMap)) {
        eventProperties[mpProp] = apiResData[apiProp];
      }
    }

    trackMixpanelEvent(config.eventName, eventProperties);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

/**
 * element and event listner against it, this map is used to manage all the event listeners that we have attached within our system
 */
const eventListenersMap = new Map();

function eventListenerForElement(eventConfigForElement, element) {
  if (eventConfigForElement.eventHasParameters) {
    getEventsParameterAndTriggerEvent(element, eventConfigForElement);
  } else {
    trackMixpanelEvent(eventConfigForElement?.eventName);
  }
}

function addEventListenerToElementAndManageItsMap(element, newListener) {
  // Check if there's already a listener registered
  const existingListener = eventListenersMap.has(element)
    ? eventListenersMap.get(element)
    : null;

  if (!existingListener) {
    // Add the new listener
    element.addEventListener("click", newListener);
    // console.log('Added new listener for element', element);

    // Update the map with the new listener
    eventListenersMap.set(element, newListener);
  }
}

/**
 * Attaching event listeners based on configuration
 */
function setupEventListeners() {
  // Here we are splitting the event key from data-foxtale-event from the parameters we need from the shopify liquid code.
  const elementArray = Array.from(
    document.querySelectorAll("[data-foxtale-event]")
  );

  elementArray.forEach((element) => {
    if (!element.dataset.tracked) {
      element.dataset.tracked = "true"; // Set a flag to indicate tracking has been initialized

      try {
        setupEventListenerForElement(element);
      } catch (error) {
        element.dataset.tracked = "false";
        // console.error("Error tracking element:", element, "Error: ", error);
      }
    } else {
      // console.log(`Event listener already added for ${eventName} on`, element);
    }
  });
}

/**
 * Attach event listner to a single element
 */
function setupEventListenerForElement(element) {
  const dataFoxtaleEventKey = element.getAttribute("data-foxtale-event")

  let eventConfigForElement = eventConfigMap.get(dataFoxtaleEventKey);

  addEventListenerToElementAndManageItsMap(element, () => {
    eventListenerForElement(eventConfigForElement, element);
    
    // // TEMP_FIX: for 'view cart' pop up component
    // if ( dataFoxtaleEventKey === 'add-to-cart-click-event' ) {
    //   setupObserverForLazyComponentsWhichDoNotHaveStaticallyLoadedParent();
    // }
  });

}

/**
 * This is the list of observers that has all the observers for the dynamic parent componenents that we need to handle.
 *
 * NEED: this is needed for cleaning all the previous observers at each "DOMContentLoaded" and attach new one only for those dynamic parent elements that are currently present in the DOM.
 */

let observers = [];

/**
 * Configuration for dynamic components to handle interaction with them ( this is for the componenets that lazily loads or is not loaded at the time of page load or on scroll etc. )
 */

function handleDynamicComponentInteraction(parentElementQuery) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          // console.log("child nodes: ", node.childNodes)
          if (node.nodeType === 1 && !eventListenersMap.has(node)) {
            if ( node.matches("#t4s-search-hidden") ) {
              console.log("matched the search")
            }
            // console.log('New node added, setting up events:', node);
            const parentComponentUsedForMutation = document.querySelector(parentElementQuery);
            elementsWithFoxtaleEventAttribute =
            parentComponentUsedForMutation.querySelectorAll("[data-foxtale-event]");

            elementsWithFoxtaleEventAttribute.forEach((el) => {
              // console.log('element for event:', el);
              setupEventListenerForElement(el);
            });
          }
        });
      }
    });
  });

  /**
   * Start observing the parent component by configuration using mutaion observer
   */
  const parentComponent = document.querySelector(parentElementQuery);

  if (parentComponent) {
    observer.observe(parentComponent, {
      childList: true, // observe direct children
      subtree: true, // and lower descendants too
    });

    observers.push(observer);
  }
}


/*********************************************** TEMP_FIX_FOR_LAZY_LOADED_COMPONENTS_WITHOUT_STATICALLY_LOADED_PARENT_START ****************************************************/

// this section is logical TEMP FIX for the dynamic components whoose top most parent have the dynamic nature too

function setupObserverForLazyComponentsWhichDoNotHaveStaticallyLoadedParent() {
  const bodyObserverForMiniCart = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
              if (node.nodeType === 1 && node.matches('#t4s-mini_cart')) { // check for the componenet, which do not have the parent which do not load lazily
                observationConfig.forEach((config) => {
                  console.log("here in the observation config loop for cart/view cart component")
                  handleDynamicComponentInteraction(config.parentElementQuery);
                });

                // for current dynamic parent, we will set events too when it is getting detected at first time
                elementsWithFoxtaleEventAttribute = node.querySelectorAll("[data-foxtale-event]");

                elementsWithFoxtaleEventAttribute.forEach((el) => {
                  setupEventListenerForElement(el);
                });

                bodyObserverForMiniCart.disconnect(); // Optional: Disconnect after the cart is found
                console.log("The old logical temp fix used observer disconnected ( the body one ).")
              }
          });
      });
  });

  bodyObserverForMiniCart.observe(document.body, { childList: true, subtree: true }); // Observe the body for added elements
  console.log("The old logical temp fix used observer connected ( the body one ).")




  const bodyObserverForHiddenSearch = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1 && node.matches('#shopify-section-search-hidden')) { // check for the componenet, which do not have the parent which do not load lazily

              observationConfig.forEach((config) => {
                handleDynamicComponentInteraction(config.parentElementQuery);
              });

              // for current dynamic parent, we will set events too when it is getting detected at first time
              elementsWithFoxtaleEventAttribute = node.querySelectorAll("[data-foxtale-event]");

              elementsWithFoxtaleEventAttribute.forEach((el) => {
                setupEventListenerForElement(el);
              });

              bodyObserverForHiddenSearch.disconnect(); // Optional: Disconnect after the cart is found
              console.log("The old logical temp fix used observer disconnected ( the body one ).")
            }
        });
    });
  }) 

  bodyObserverForHiddenSearch.observe(document.body, { childList: true, subtree: true }); // Observe the body for added elements
  console.log("The old logical temp fix used observer connected ( the body one ).")





  const bodyObserverForStickyPdpAdcBuyN = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          // console.log("added node tracked by body mutaion observer: ", node)
            if (node.nodeType === 1 && node.matches('.stc-mixpanel-adc-buyn-parent-class')) { // check for the componenet, which do not have the parent which do not load lazily

              observationConfig.forEach((config) => {
                handleDynamicComponentInteraction(config.parentElementQuery);
              });

              // for current dynamic parent, we will set events too when it is getting detected at first time
              elementsWithFoxtaleEventAttribute = node.querySelectorAll("[data-foxtale-event]");

              elementsWithFoxtaleEventAttribute.forEach((el) => {
                setupEventListenerForElement(el);
              });

              bodyObserverForStickyPdpAdcBuyN.disconnect(); // Optional: Disconnect after the cart is found
              console.log("The old logical temp fix used observer disconnected ( the body one ).")
            }
        });
    });
  }) 

  bodyObserverForStickyPdpAdcBuyN.observe(document.body, { childList: true, subtree: true }); // Observe the body for added elements
  console.log("The old logical temp fix used observer connected ( the body one ).")
}

// Call this function early in the page load or when you expect the cart could be loaded
setupObserverForLazyComponentsWhichDoNotHaveStaticallyLoadedParent();

/*********************************************** TEMP_FIX_FOR_LAZY_LOADED_COMPONENTS_WITHOUT_STATICALLY_LOADED_PARENT_END ****************************************************/

/**
 * Default shopify pages to event names for that page when it's visited map
 */
const defaultPageToPageEvent = {
  'index': "Viewed Homepage",
  'collection': "Viewed Collection",
  'product': 'Viewed Product'
}

/**
 * Attaching event listener on "DOMContentLoaded" event to trigger our application logic on that event
 */
document.addEventListener("DOMContentLoaded", function () {
  setupEventListeners();

  /**
   * Clean up previous observers
   */
  observers.forEach((observer) => observer.disconnect());
  observers = []; // Clear the array to start fresh

  /**
   * Function to handle the intersection changes
   */
  observationConfig.forEach((config) => {
    handleDynamicComponentInteraction(config.parentElementQuery);
  });

  /**
   * Fire event of home page viewed, if the current page is 'index' page
   */

  if ( window.page_type ) {
    const properties = {};
    
    // const urlComponenetsForPage = window.page_type.split('/');

    const urlComponenetsForPage = window.location.href.split('/');

    properties['page_name'] = urlComponenetsForPage[urlComponenetsForPage.length - 1];
    properties['page_url'] = window.location.href;
    properties['page_type'] = window.page_type;
    properties['source'] = source;

      if ( defaultPageToPageEvent?.[window.page_type] ) {
        trackEvent(defaultPageToPageEvent[window.page_type], properties);
      } else {
        trackEvent('The Foxtale Pages', properties);
      }
  }
});
setTimeout(function() {
  var mixpanelDistinctIdAttributes = {'distinct_id': mixpanelDistinctId };
  $.ajax({
    type: 'POST',
    url: '/cart/update.js',
    data: {
      attributes : mixpanelDistinctIdAttributes
    },
    dataType: 'json',
    success: function(cart) {
      console.log('Cart note updated:', cart.note);
    },
    error: function(XMLHttpRequest, textStatus) {
      console.error('Failed to update cart note:', textStatus);
    }
  });
}, 1500);