$(document).ready(function(){$(".faq_ans").hide();$(".faq_item > .faq_que").on("click",function(){if($(this).hasClass("faq-active")){$(this).removeClass("faq-active");$(this).parent().removeClass("active");$(this).siblings(".faq_ans").slideUp(200);}else{$(".faq_item > .faq_que").removeClass("faq-active");$(".faq_item").removeClass("active");$(this).addClass("faq-active");$(this).parent().addClass("active")
$(".faq_ans").slideUp(200);$(this).siblings(".faq_ans").slideDown(200);}});});$(document).ready(function(){$('#mainNav li a').on('click',function(e){e.preventDefault();var target=$(this).attr("href");var top=($(target).offset()||{"top":NaN}).top;if(isNaN(top)){$('#mainNav li.active').removeClass('active');$(this).parent().next('li').addClass('active');target=$(this).parent().next('li').find('a').attr('href');$('html, body').animate({scrollTop:$(target).offset().top-$('#shopify-section-header-inline').height()},600);}else{$('html, body').animate({scrollTop:$(target).offset().top-$('#shopify-section-header-inline').height()});console.log($('#shopify-section-header-inline').height());}
location.hash=target;return false;});});$(window).scroll(function(){var scrollDistance=$(window).scrollTop()+80;$('.ig-alphabet').each(function(i){if($(this).position().top<=scrollDistance){var currentid=$(this).attr('id');var activeItem=$("#mainNav li a[href*=\\#"+currentid+"]")
if($(activeItem)){$('#mainNav li.active').removeClass('active');$(activeItem).parent().addClass('active');}}});}).scroll();$(document).ready(function(){$(".val-pr-add-to").appendTo(".val-pr-add-to-cart");});$(document).ready(function(){$(".t4s-swatch__option_cust div.t4s-swatch__item:last").after("<div id='combobtn' style='height: 53px;width: 25%;font-size: 13px;padding-top: 18px;' class='t4s-swatch__item'>Combos</div>");$("#combobtn").click(function(){$("html, body").animate({scrollTop:$("#best-with").offset().top-100},1500);});});var _learnq=_learnq||[];function addedToCart(){fetch(`${window.location.origin}/cart.js`).then(res=>res.clone().json().then(data=>{var cart={total_price:data.total_price / 100,$value:data.total_price / 100,total_discount:data.total_discount,original_total_price:data.original_total_price / 100,items:data.items}
_learnq.push(['track','Added to Cart',cart])}))}
(function(ns,fetch){ns.fetch=function(){const response=fetch.apply(this,arguments);response.then(res=>{if([`${window.location.origin}/cart/add.js`,`${window.location.origin}/cart/update.js`,`${window.location.origin}/cart/change.js`].includes(res.url)){$.ajax({type:'GET',url:'/cart.js',cache:false,dataType:'json',success:function(cart){addedToCart();setTimeout(function(){$(".mfp-wrap.cart-popup-wrapper").css({"top":"0","position":"fixed"});var overflowY='hidden';if($("html").css('overflow')=='hidden')
$("html").removeAttr('style');if(window.location.href.indexOf("/products/")>-1){if(window.location.href.indexOf("/products/retinol-anti-ageing-night-serum")>-1){$("html, body").animate({scrollTop:$(".tab-slider-main").offset().top-100},1500);}else{$(function(){var target=$('.foxtale_scroll');if(target.length){$('html,body').animate({scrollTop:target.offset().top-100},1000);}});}}},500);if(((cart.total_price / 100)>1)){$('.top_cart_text').html('Free Shipping + Free Sachet');}else{$('.top_cart_text').html('Free Shipping + Free Sachet');}}});}});return response}}(window,window.fetch));$(document).ready(function(){if(window.location.hash){$(".vitC_faq .faq_que").click();}});function openCity(evt,cityName){let i,x,tablink;x=document.getElementsByClassName("tabcontent");for(i=0;i<x.length;i++){x[i].style.display="none";}
tablink=document.getElementsByClassName("tablinks");for(i=0;i<x.length;i++){tablink[i].className=tablink[i].className.replace(" active","");}
document.getElementById(cityName).style.display="block";evt.currentTarget.className+=" active";}
$(document).ready(function(){$('.tab-slider-hp #tab-1').show();function tabCustom(evt,id){$('.tab-slider-hp .tabcontent').each(function(){$(this).hide();$(this).removeClass('active');$(this).css('visibility','hidden');});$('.tablinks').removeClass('active');$('#'+id).show();$(evt.currentTarget).addClass('active');$('#'+id).addClass('active');setTimeout(function(){$('#'+id).css('visibility','visible');},1000);}
$('.tab-slider-hp .tablinks').on('click',function(evt){evt.preventDefault();var id=$(this).data('tab');tabCustom(evt,id);});});if($(window).width()<600){$(function(){$('footer .widget_nav_menu .widget-title').each(function(){$(this).click(function(){$(this).toggleClass('active');$(this).next().slideToggle();});});});}
if($(window).width()<1025){$(()=>{$(".template-collection .t4s-section-filter").insertBefore($(".t4s-dropdown__sortby")).css("display","block");});}
$(()=>{$('.unique-section-dropdown').each(function(){$(this).click(function(){if($(this).find('.unique-section-dropdown-innr').hasClass('active')){$(this).find('.unique-section-dropdown-innr').removeClass('active');$(this).find('.unique-section-dropdown-content').removeClass('active-unique');}else{$('.unique-section-dropdown').find('.unique-section-dropdown-innr').removeClass('active');$('.unique-section-dropdown').find('.unique-section-dropdown-content').removeClass('active-unique');$(this).find('.unique-section-dropdown-innr').addClass('active');$(this).find('.unique-section-dropdown-content').addClass('active-unique');}});});});$(()=>{$('.pr-variant .t4s-swatch__item').each(function(){$(this).click(function(){let data_id=$(this).attr("data-id");let id=$(this).parents('.product-info').attr("data-pr-id");let data_comp=$(this).attr("data-comp");let data_value=$(this).attr("data-value");let data_handle=$(this).parents('.product-innr').siblings(".shop-all-qty-cart-btn").attr("data-handle");if(!$(this).hasClass('active')){$('.product-info[data-pr-id='+id+'] .t4s-swatch__item').removeClass('active');$('.product-info[data-pr-id='+id+'] .t4s-product-price').removeClass('active').trigger('classChange');$('.product-info[data-pr-id='+id+'] .discount-price').removeClass('active').trigger('classChange');$(this).addClass('active');$('.product-info[data-pr-id='+id+'] .'+data_comp).addClass('active').trigger('classChange');}
$('.shop-all-qty-cart-btn[data-handle='+data_handle+'] .fx-custom-btn-dark').attr("data-variant-id",data_id);});});});$(()=>{$('.about-chapter').each(function(){let data_id=$(this).attr('data-id');let id=$("#"+data_id);$('.desktop-chapter-banner').hide();$(this).click(function(){if($(this).hasClass('active')){$(this).removeClass('active');$(id).removeClass('active');$(id).children().fadeOut();$(this).parent().find('.about-banner-mob').removeClass('active');$(this).parent().find('.about-banner-mob').slideUp();}else{$('.about-chapter').removeClass('active');$('.about-chapter-banner').removeClass('active');$('.about-banner-mob').removeClass('active');$('.desktop-chapter-banner').hide();$('.about-banner-mob').hide();$(this).addClass('active');$(this).parent().find('.about-banner-mob').addClass('active');$(this).parent().find('.about-banner-mob').slideDown();$(id).addClass('active');$(id).children().show();}
if(window.outerWidth>767&&$(this).hasClass('active')){$('html, body').animate({scrollTop:$('body').offset().top},700);}
if(window.outerWidth<767){$('html, body').animate({scrollTop:$('.active').offset().top-100},700);}});});$('.about-banner-mob').hide();$('.about-chapter-banner').click(function(){$(this).removeClass('active');$(this).children().fadeOut(800);$('.about-chapter').removeClass('active');});$('.about-banner-mob').click(function(){let self=$(this);let scrollParent=self.parent();$('html,body').animate({scrollTop:scrollParent.offset().top-100},700);setTimeout(function(){self.removeClass('active');$('.about-chapter').removeClass('active');self.slideUp();},700)})});$(()=>{setTimeout(function(){$('<span class="tap-see-reviews">(Tap to see all reviews)</span>').appendTo('.pr-review .review_product');$('.tap-see-reviews').click(function(){$('.pr-review .fera-productReviewsSummary').trigger('click');});if($('.fera-productReviewsSummary-content [data-rating="0.0"]')){$('.fera-productReviewsSummary-content [data-rating="0.0"]').parents('.pr-review').hide();}},1500);});$(()=>{customerAddressForm=function(){var e=$("#AddressNewForm"),s=$("#AddressNewButton");e.length&&(Shopify&&new Shopify.CountryProvinceSelector("AddressCountryNew","AddressProvinceNew",{hideElement:"AddressProvinceContainerNew"}),$(".address-country-option").each(function(){var e=$(this).data("form-id"),s="AddressCountry_"+e,t="AddressProvince_"+e,r="AddressProvinceContainer_"+e;new Shopify.CountryProvinceSelector(s,t,{hideElement:r})}),$(".address-new-toggle").on("click",function(){var t="true"===s.attr("aria-expanded");e.toggleClass("hide"),s.attr("aria-expanded",!t).focus()}),$(".address-edit-toggle").on("click",function(){var e=$(this).data("form-id"),s=$("#EditFormButton_"+e),t=$("#EditAddress_"+e),r="true"===s.attr("aria-expanded");t.toggleClass("hide"),s.attr("aria-expanded",!r).focus()}),$(".address-delete").on("click",function(){var e=$(this),s=e.data("target");confirm(e.data("confirm-message")||"Are you sure you wish to delete this address?")&&Shopify.postLink(s,{parameters:{_method:"delete"}})}))}
customerAddressForm();})
setTimeout(function(){$(".collection-tabbing-btn").css("visibility","visible");},700)
$(document).ready(function(){$('.collection-tabbing').hide();let data_collection=$('.t4s-row').children(".t4s-main-collection-page").attr("data-collection-url");$('.collection-tabbing').each(function(){let data_collection_2=$(this).attr("data-collection-urls");if(data_collection===data_collection_2){$(this).show();window.onload=function(){document.querySelector(".collection-active").click();};$(".collection-tabbing-single").click(function(){$(".t4s-pagination-wrapper").hide();$(".t4s-product").show();$(".t4s-product-price .t4s-price-from").parents(".t4s-product").addClass('collection-tab-active-first');$(".t4s-product-price ins").parents(".t4s-product").removeClass('collection-tab-active-second').css("display","none");$(this).addClass("collection-active");$('.collection-tabbing-double').removeClass("collection-active");$('.t4s-products .t4s-product .t4s-product-info__inner .fx-your-travel-skincare-besties').parents(".t4s-product").hide();});$(".collection-tabbing-double").click(function(){$(".t4s-pagination-wrapper").show();$(".t4s-product").show();$(".t4s-products .t4s-product:nth-child(16)").show();$(".t4s-product-price ins.dcba").parents(".t4s-product").addClass('collection-tab-active-second');$(".t4s-product-price .t4s-price-from").parents(".t4s-product").removeClass('collection-tab-active-first').css("display","none");$(this).addClass("collection-active");$('.collection-tabbing-single').removeClass("collection-active");});}});});$(document).ready(function(){$('.template-collection .t4s-dropdown .t4s-dropdown__content button').click(function(){setTimeout(function(){$(".template-collection .collection-tabbing .collection-tabbing-btn.collection-active").click();},1000);});});(function($){$(document).ready(function(){var bottomSheet=$('.bottom-sheet');var bottomSheetTrigger=$('.bottom-sheet-trigger');bottomSheetTrigger.on('click',function(){var currentBottomSheet=$(this).next('.bottom-sheet');bottomSheet.not(currentBottomSheet).removeClass('open');currentBottomSheet.toggleClass('open');});$(window).on('click',function(event){if(!bottomSheet.is(event.target)&&!bottomSheetTrigger.is(event.target)&&bottomSheet.has(event.target).length===0){bottomSheet.removeClass('open');}});setTimeout(function(){$(".template-collection .bottom-sheet .button-list li a").each(function(){$(this).click(function(){$(".template-collection .bottom-sheet .button-list li a").removeClass("is--clicked");let datacomp1=$(this).attr('data-value');$(this).addClass("is--clicked");let dataValues1=[...new Set($('.template-collection .t4s-facet-content .t4s-current-scrollbar li').map(function(){return $(this).attr('data-values');}).get())];let dataObject={};dataValues1.forEach(function(value,index){dataObject['value'+(index+1)]=value;});let datacomp=datacomp1.replace(/\s/g,"").split(",");let dataObject1=Object.values(dataObject).map(function(value){return value.charAt(0).toUpperCase()+value.slice(1);});datacomp.forEach(function(value){let elements=$('.template-collection .t4s-facet-content .t4s-current-scrollbar li[data-values="'+value.toLowerCase()+'"]');if(elements.hasClass('is--selected')){elements.removeClass('is--selected');}else{elements.addClass('is--selected');elements.click();$('.template-collection .t4s-facet-content .t4s-current-scrollbar li[data-values="'+value.toLowerCase()+'"] a').click();}});});});},3000);});})(jQuery);let data=document.querySelector(".t4s-dropdown");data.firstElementChild.style.padding="padding: 5px 30px";let newSort=document.querySelector(".t4s-d-md-none").innerHTML="Sort";$(document).ready(function(){$(".bottom-sheet-trigger").click(function(){$(".t4s-close-overlay").css("background-color","rgba(0,0,0,0)");})})
$(document).ready(function(){$(".btn-sheet1").click(function(){$(this).toggleClass("UpArrow");$(".btn-sheet2").removeClass("UpArrow");})})
$(document).ready(function(){$(".btn-sheet2").click(function(){$(this).toggleClass("UpArrow");$(".btn-sheet1").removeClass("UpArrow");})})
$(document).ready(function(){$(".button-list li button a").click(function(){$("html").removeClass("t4s-lock-scroll");})})
$(document).ready(function(){$(".btop").click(function(){$(".bottom-sheet").removeClass("open");$(".btn-sheet1").removeClass("UpArrow");})})
$(document).ready(function(){$(".s-top").click(function(){$(".bottom-sheet").removeClass("open");$(".btn-sheet2").removeClass("UpArrow");})})
$(document).ready(function(){$('.bottom-sheet-trigger.fa-chevron-down').click(function(){$(this).parent('.UpArrow').siblings('.bottom-sheet').toggleClass('open');});});function updateMiniCartQuantityCount(quantity){$('#mini-cart .cart-quantity').text(quantity);}
$(document).ready(function(){$(document).on('click','.addtocarthp',function(e){setTimeout(function(){e.preventDefault();var products=$('.tabcontents:visible').find('.products-grid-item');var alertedProducts=new Set();var productIds=[];products.each(function(index){var productContainer=$(this);var addToCartButton=productContainer.find('.t4s-pr-addtocart');var variantId=addToCartButton.data('variant-id');if(productContainer.is(':visible')){if(productIds.indexOf(variantId)===-1){productIds.push(variantId);alertedProducts.add(productIds);}}});var quantity=1;var currentIndex=0;function addProductToCart(){if(currentIndex>=productIds.length){$.getJSON('/cart.js',function(cart){updateMiniCartQuantityCount(cart.item_count);});return;}
var productId=productIds[currentIndex];$.ajax({type:'POST',url:'/cart/add.js',dataType:'json',data:{id:productId,quantity:quantity},success:function(){currentIndex++;addProductToCart();}});setTimeout(function(){jQuery.getJSON('/cart.js',function(cart){let cartData=cart.items;document.dispatchEvent(new CustomEvent('cart:build',{bubbles:true}));document.dispatchEvent(new CustomEvent('cart:refresh',{bubbles:true,detail:cartData}));});},100);}
addProductToCart();},100);});$(document).on('ajaxError',function(e,xhr,settings){if(settings.url==='/cart/add.js'&&xhr.responseJSON&&xhr.responseJSON.description==='Required parameter missing or invalid: id'){e.preventDefault();e.stopPropagation();}});});$(document).ready(function(){$(".addtocarthp").click(function(){$(".t4s-mini_cart__item.cart_item_43565338427639.t4s-d-flex.t4s-align-items-center.t4s-pr.t4s-oh.class-gift").css("display","block !important");});});$(document).ready(function(){var originalPushState=history.pushState;history.pushState=function(){setTimeout(()=>{$('.template-collection .collection-tabbing .collection-tabbing-btn').each(function(){if($(this).hasClass('collection-active')){$(this).click();}});},1000);return originalPushState.apply(history,arguments);};});let getDate=document.querySelector(".t4s-countdown-enabled").innerHTML;let new_getDate=getDate.substring(2)
console.log(new_getDate)
$(document).ready(function(){$('.leftz-fc ul li:first-child a').click(function(){$(this).addClass("intro");});});
