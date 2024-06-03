
// <!-- Gokwik Code don't delete start-->
// <script>
//   if (document.getElementById("email") && document.getElementById("email").value && document.getElementById("order_number") && document.getElementById("order_number").value) {
//       document.querySelector('form > div.section__content > div > button.btn').click();
//   }
// </script>
// <!-- Gokwik Code don't delete end-->


// <script text="text/javascript">
//   if(localStorage.getItem('orderType')==='gokwik'){

//   /**
//  * Mixpanel Event Tracking Initializer
//  */
    
//   (function (f, b) {
//       if (!b.__SV) {
//         var e, g, i, h;
//         window.mixpanel = b;
//         b._i = [];
//         b.init = function (e, f, c) {
//           function g(a, d) {
//             var b = d.split(".");
//             2 == b.length && ((a = a[b[0]]), (d = b[1]));
//             a[d] = function () {
//               a.push([d].concat(Array.prototype.slice.call(arguments, 0)));
//             };
//           }
//           var a = b;
//           "undefined" !== typeof c ? (a = b[c] = []) : (c = "mixpanel");
//           a.people = a.people || [];
//           a.toString = function (a) {
//             var d = "mixpanel";
//             "mixpanel" !== c && (d += "." + c);
//             a || (d += " (stub)");
//             return d;
//           };
//           a.people.toString = function () {
//             return a.toString(1) + ".people (stub)";
//           };
//           i =
//             "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(
//               " "
//             );
//           for (h = 0; h < i.length; h++) g(a, i[h]);
//           var j = "set set_once union unset remove delete".split(" ");
//           a.get_group = function () {
//             function b(c) {
//               d[c] = function () {
//                 call2_args = arguments;
//                 call2 = [c].concat(Array.prototype.slice.call(call2_args, 0));
//                 a.push([e, call2]);
//               };
//             }
//             for (
//               var d = {},
//                 e = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)),
//                 c = 0;
//               c < j.length;
//               c++
//             )
//               b(j[c]);
//             return d;
//           };
//           b._i.push([e, f, c]);
//         };
//         b.__SV = 1.2;
//         e = f.createElement("script");
//         e.type = "text/javascript";
//         e.async = !0;
//         e.src =
//           "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL
//             ? MIXPANEL_CUSTOM_LIB_URL
//             : "file:" === f.location.protocol &&
//               "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)
//             ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
//             : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
//         g = f.getElementsByTagName("script")[0];
//         g.parentNode.insertBefore(e, g);
//       }
//     })(document, window.mixpanel || []);
  
//   mixpanel.init("1e8f3dbc29a04e9ae06ef45a4e721309", {
//     debug: true,
//     track_pageview: false,
//     persistence: "localStorage",
//   });

//   // Setting up distinct id of the user if it is logged in
//   const mixpanelDistinctId = JSON.parse(localStorage.getItem("mp_distinct_id"))
//   console.log("mp_distinct_id", mixpanelDistinctId);

//   if (mixpanelDistinctId) {

//     console.log("mixpanel device id to target: ", mixpanelDistinctId)
//     mixpanel.identify(mixpanelDistinctId);
  
//   }

//   mixpanel.people.set_once({
//       last_updated: new Date(),
//     });
    

//   mixpanel.people.set({
//       "$email": "{{order.customer.email}}",
//       "$first_name": "{{order.customer.first_name}}",
//       "$last_name": "{{order.customer.last_name}}",
//   });

// // console.log('email',  "{{order.customer.email}}");
// // console.log('first name',  "{{order.customer.first_name}}");
// // console.log('last name', "{{order.customer.last_name}}");
// // console.log('Shopify ID', "{{http://order.customer.id}}");
// // console.log('order checkout token', "{{order.checkoutToken}}");
// // console.log('order checkout token', "{{order}}");
// // console.log('order checkout token', {{order[note_attributes]["gokwik_cid"] }});

// const requestOptions = {
//   method: "GET",
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Accept": "*/*"
//   },
//   redirect: "follow"
// };

// let fetchOrderApiUrl = 'https://2x0e0bw0l5.execute-api.us-east-1.amazonaws.com/dev/foxtale-order-api?orderId=' + {{order.id}};

// fetch(fetchOrderApiUrl, requestOptions)
//   .then((response) => response.json())
//   .then(data => {

//     console.log("from foxtale order getting api: ", data);

//     let orderObj = data?.order;


//     let orderObjectNotesAttributes = [];
//     let orderLineItems = orderObj.line_items || [];
//     let orderDiscountApplications = [];
//     let orderJsonString = [];
//     let purchasedProductIds = [];
//     let purchasedProductQuantities = [];
//     let purchasedProductPrices = [];
//     let purchasedProductSkus = [];
//     let purchasedProductVariants = [];
//     let purchasedProductTypes = [];
//     let purchasedProductTitles = [];
//     let purchasedProductVendors = [];
//     let totalDiscounts = 0;
//     let totalDiscountNames = [];
//     let noteAttributesObj = {};
//     let shippingJson = orderObj.shipping_address || {};
//     let billingJson = orderObj.billing_address || {};
//     let shippingAddress = Object.values(shippingJson).join(',');
//     let billingAddress = Object.values(billingJson).join(',');
//     let cartData = null;
//     let discountCodesArray = orderObj.discount_codes || [];
//     let dicountCodes = "";
//     let paymentGatewayNamesArr = orderObj.payment_gateway_names || [];
//     let paymentGatewayNames = paymentGatewayNamesArr.join(',') || null;
//     let orderTags = orderObj.tags || "";

//     orderObjectNotesAttributes = orderObj?.note_attributes;
//     orderDiscountApplications = orderObj?.discount_applications;
    
//     for(let i = 0; i < orderLineItems.length; i++) {
//       orderJsonString.push(JSON.stringify(orderLineItems[i]))
//       purchasedProductIds.push(orderLineItems[i].id);
//       purchasedProductQuantities.push(orderLineItems[i].quantity);
//       purchasedProductPrices.push(orderLineItems[i].price);
//       purchasedProductSkus.push(orderLineItems[i].sku);
//       purchasedProductVariants.push(orderLineItems[i].variant_id);
//       purchasedProductTypes.push(orderLineItems[i].product?.type);
//       purchasedProductTitles.push(orderLineItems[i].title);
//       purchasedProductVendors.push(orderLineItems[i].vendor);
//     }

//     for (let i = 0; i < orderDiscountApplications.length; i++) {
//       totalDiscounts += orderDiscountApplications[i].value
//       totalDiscountNames.push(orderDiscountApplications[i].title)
//     }

//     if ((Object.keys(orderObj)).length > 0 || orderObjectNotesAttributes.length > 0) {

//       for ( let i = 0; i < orderObjectNotesAttributes.length; i++ ) {
//         noteAttributesObj[orderObjectNotesAttributes[i].name] = orderObjectNotesAttributes[i].value;
//       }
//     }

//     if (discountCodesArray.length > 0) {
//       for (let i = 0; i < discountCodesArray.length; i++) {
//         dicountCodes += discountCodesArray[i].code;
//       }
//     }

//     mixpanel.track("Purchased", {
//       "distinct_id": mixpanelDistinctId,
//       "$source": "Vendo - Shopify Data Intelligence",
//       "$current_url": orderObj.order_status_url,
//       "Location ID": orderObj.location_id || "",
//       "Source Name": orderObj.source_name || "",
//       "Order ID": orderObj.id,
//       "Discount Codes": dicountCodes || "",
//       "Accepts Marketing": orderObj.buyer_accepts_marketing,
//       "Payment Gateway Names": paymentGatewayNames || "",
//       "Customer Locale": orderObj.customer_locale || "",
//       "Total Discount": totalDiscounts || "0",
//     //   "Total Discount Names": totalDiscountNames || "",
//       "Sale Amount": orderObj.total_price || "0",
//       "Currency": orderObj.currency || "",
//       "Order Number": orderObj.order_number,
//       "Order Subtotal": orderObj.subtotal_price,
//       "Order Total": orderObj.total_price,
//       "Total Tax": orderObj.tax_price,
//       "Product Quantity": orderLineItems?.length || 0,
//       "Order Line Items": orderLineItems || [],
//       "Purchased product ids": purchasedProductIds || [],
//       "Purchased product quantities": purchasedProductQuantities || [],
//       "Purchased product prices": purchasedProductPrices || [],
//       "Purchased product skus": purchasedProductSkus || [],
//       "Purchased product varients": purchasedProductVariants || [],
//       "Purchased product types": purchasedProductTypes || [],
//       "Purchased product titles": purchasedProductTitles || [],
//       "Purchased product vendors": purchasedProductVendors || [],
//       "Billing Address": billingAddress || "",
//       "Shipping Address": shippingAddress || "",
//       "Shipping Price": orderObj.shipping_price || 0,
//       "Checkout Token": orderObj.checkoutToken || "",
//       "Shipping Methods": "",
//       "Tags": orderTags || "",
//       "Order Status Url": orderObj.order_status_url || "",
//       // "Cart Data": cartData || "",
//       "Order json string": orderJsonString || "",
//       "Cart": cartData || "",
//       ...noteAttributesObj
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching order details:', error);
//   }
// );
// }
// </script>

// <script type="text/javascript">
//   if (localStorage.getItem("utm_source") !== null && localStorage.getItem("utm_source").toLowerCase() !== 'facebook' && localStorage.getItem("utm_source").toLowerCase() !== 'google'){
//     localStorage.removeItem("utm_source");
//     var afstatus=1;
//     var afid={{ order.order_number | replace: "#","" }};
//     var afprice={{ order.total_net_amount | divided_by: 100.0 | replace: ",","" }};
//     var custom_field1={{ order.total_net_amount | divided_by: 100.0 | replace: ",","" }};
//     var afgoal={% if order.customer.orders_count == 1 %}true{%else%}false{%endif%};
//     }
// </script>
// <script language="javascript" type="text/javascript" src="https://foxtale.g2afse.com/track.js"></script>

// <script>
//   const logos = document.getElementsByClassName('logo')
// const logoImage0 = logos[0]
// const logoImage1 = logos[1]
//   logoImage1.setAttribute('style', 'cursor: pointer')
//   logoImage0.addEventListener('click', () => {
//       window.location.href = 'https://foxtale.in'
//   })
// logoImage1.addEventListener('click', () => {
//       window.location.href = 'https://foxtale.in'
//   })
// </script>


// {% if checkout.email %}<br><div id="stamped-reviews-widget" data-widget-type="rewards-referral-modal" data-style-color-background="#fabbbb" data-style-color-button="#d45500" data-style-color-link="#ff0000" data-customer-email="{{order.email}}" data-customer-first-name="{{customer.first_name}}"></div><br>{% endif %}

// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//   })(window,document,'script','dataLayer','GTM-MW5TFJM');</script>
// <!-- End Google Tag Manager -->

// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-214444346-1"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'UA-214444346-1');
// </script>





// <!-- Global site tag (gtag.js) - Google Ads: 10819339486 -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10819339486"></script>
// <script>
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('set', 'user_data', {"email": user_email});
// gtag('config', 'AW-10819339486', {'allow_enhanced_conversions': true});
// </script>
// {% if first_time_accessed %}
// <script>
// var enhanced_conversion_data = {
//   "first_name": "{{ checkout.billing_address.first_name }}",
//   "last_name": "{{ checkout.billing_address.last_name }}",
//   "home_address": {
//     "street": "{{ checkout.billing_address.street }}",
//     "city": "{{ checkout.billing_address.city }}",
//     "region": "{{ checkout.billing_address.province }}",
//     "postal_code": "{{ checkout.billing_address.zip }}",
//     "country": "{{ checkout.billing_address.country_code }}"
//   }
// }
// if("{{ checkout.email }}"){
//  enhanced_conversion_data.email = "{{ checkout.email }}";
// }
// if("{{ checkout.billing_address.phone }}"){
//  enhanced_conversion_data.phone_number = "{{ checkout.billing_address.phone }}";
// }

// var user_email = "{{ checkout.email }}";
// </script>
// <!-- Event snippet for Test conversion page -->
// <script>
// gtag('event', 'conversion', {
//   'send_to': 'AW-10819339486/bzKsCMG_zMUDEN6JiKco',
//   'value': {{ checkout.total_price | divided_by: 100.0 }},
//   'currency': '{{ currency }}',
//   'transaction_id': '{{ order_number }}'
// });
// </script>
// {% endif %}

// <!-- google dynamic remarketing tag for order confirmation page -->
// <script type="text/javascript">
// var event_name="purchase"
// var id = new Array();
// {% for line_item in order.line_items %} 
// id.push('shopify_IN_{{line_item.product.id}}_{{line_item.variant.id}}');
//  {% endfor %}
//  var google_tag_params = {
//    ecomm_prodid: id,
//    ecomm_pagetype: 'purchase',
//    ecomm_totalvalue: parseFloat('{{ order.subtotal_price | money_without_currency | remove: ","}}')
//  };
// </script>
// <script>
// gtag('event',event_name, {
//   'ecomm_prodid':window.google_tag_params.ecomm_prodid,
//   'ecomm_pagetype':window.google_tag_params.ecomm_pagetype,
//   'ecomm_totalvalue':window.google_tag_params.ecomm_totalvalue,
//   'id': google_tag_params.ecomm_prodid, 
//   'google_business_vertical': 'retail',
//   'value': window.google_tag_params.ecomm_totalvalue
// });
// </script>


// <!-- Google Shopping Ads Review Start -->
// <script src="https://apis.google.com/js/platform.js?onload=renderOptIn" async defer></script>
// <script>
//   window.renderOptIn = function() {
//       window.gapi.load('surveyoptin', function() {
//       window.gapi.surveyoptin.render(
//           {
//           // REQUIRED FIELDS
//           "merchant_id": "537889495",
//           "order_id": "{{order.order_number }}",
//           "email": "{{ order.customer.email }}",
//           "delivery_country": "+91",
//           "estimated_delivery_date": "{% assign seconds = 14 | times: 24 | times: 60 | times: 60 %}{{ order.customer.last_order.created_at | date: "%s" | plus: seconds | date: "%Y-%m-%d" }}"
//           });
//       });
//   }
// </script>
// <!-- Google Shopping Ads Review End -->

// <!-- Snap Pixel Code -->
// <script type='text/javascript'>
// (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
// {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
// a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
// r.src=n;var u=t.getElementsByTagName(s)[0];
// u.parentNode.insertBefore(r,u);})(window,document,
// 'https://sc-static.net/scevent.min.js');
// snaptr('init', 'd68c6eee-a5cb-47f2-9480-dd78574f30c4', {
// 'user_email': '{{ order.customer.email }}'
// });
// snaptr('track', 'PAGE_VIEW');
// </script>
// <!-- End Snap Pixel Code -->

// <!-- Gokwik code block -->
// <script>
// if(localStorage.getItem('orderType')==='gokwik'){
// var enhanced_conversion_data = {
//   "first_name": "{{ order.customer.first_name }}",
//   "last_name": "{{ order.customer.last_name }}",
//   "home_address": {
//     "street": "{{order.billing_address.street }}",
//     "city": "{{ order.billing_address.city }}",
//     "region": "{{ order.billing_address.province }}",
//     "postal_code": "{{ order.billing_address.zip }}",
//     "country": "{{order.billing_address.country_code }}"
//   }
// }
// if("{{ order.email}}"){
//   enhanced_conversion_data.email = "{{ order.email }}";
// }
// if("{{ order.billing_address.phone }}"){
//   enhanced_conversion_data.phone_number = "{{ order.billing_address.phone}}";
// }
// }
// </script>

// <script>
// if(localStorage.getItem('orderType')==='gokwik'){
// gtag('event', 'conversion', {
//   'send_to': 'AW-10819339486/bzKsCMG_zMUDEN6JiKco',
//   'value': {{ order.total_price | divided_by: 100.0 }},
//   'currency': '{{ order.shop.currency }}',
//   'transaction_id': '{{ order.order_number }}'
// });
// }
// localStorage.removeItem('orderType');
// </script>
// <!-- Gokwik code block end -->

// <!--Influencer Bit Starts -->
// <div id="influencerbit-widget"></div>
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
// <script type="text/javascript">
// (function (w,d,s,o,f,js,fjs) {
// w['IB-Widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
// js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
// js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
// }(window, document, 'script', 'ib', 'https://influencerbit-shopify-checkout.netlify.app/widget.min.js'));
// (function initIB() {
// var customerEmail = '{{customer.email}}';var customerId = '{{customer.id}}'; var customerPhone = '{{customer.phone}}';
// var shippingPhone = '{{shipping_address.phone}}'; var billingPhone = '{{billing_address.phone}}';
// var phone = customerPhone || shippingPhone || billingPhone;
// ib('init', { brand_id: "kWZ1cxvX86gTxrmd32DDK8fZNocqP1pm", cust_email: customerEmail, cust_phone: phone, cust_shopify_id: customerId });
// }());
// </script>
// <!--Influencer Bit Ends -->




// <!--Wishlink -->
// <script>
//     const YT_UTM_SOURCE = "youtube";
//     const YT_UTM_MEDIUM = "product_shelf";
//     const DOMAIN = 'https://api.wishlink.com/api'; //MAKE SURE DOMAIN IS CORRECT
//     const PIXEL_URL = `${DOMAIN}/markSale?`;
//     const PIXEL_ERROR_URL = `${DOMAIN}/markSalePixelError?`;
//     const PLATFORM = 'Foxtale'; //MAKE SURE PLATFORM IS CORRECT

//     let atgSessionId = null;
//     let productTitles = null;
//     let couponCode = null;
//     let saleAmount = null;
//     let currency = null;
//     let orderNumber = null;
//     let orderIdShopify = null;
//     let numOrders = null;
//     let items = null;

//     let utm_source = null;
//     let utm_medium = null;
//     let utm_campaign = null;
//     let utm_term = null;
//     let utm_content = null;
//     let click_time = null;
//     let srsltid = null;

//     let queryParams = {
//         atgSessionId: atgSessionId,
//         platform: PLATFORM,
//         orderId: orderNumber,
//         orderIdShopify: orderIdShopify,
//         saleAmount: saleAmount,
//         currency: currency,
//         items: productTitles,
//         couponCode: couponCode,
//         numOrders: numOrders
//     };

//   
//     function isYtUtm(utm_source, utm_medium){
//         return (utm_source === YT_UTM_SOURCE) && (utm_medium === YT_UTM_MEDIUM);
//     }

//     function addPixel(id, url){
//         const img = document.createElement('img');
//         img.setAttribute('src', url);
//         img.setAttribute('id', id);
//         img.setAttribute('width', '1');
//         img.setAttribute('height', '1');
//         document.body.appendChild(img);
//     }

//     try{
//         atgSessionId = localStorage.getItem('atgSessionId');
//         utm_source = localStorage.getItem('wl_utm_source');
//         utm_medium = localStorage.getItem('wl_utm_medium');

//         {% if order %}
//             couponCode = '{{ order.discount_applications[0].title | replace: "'", "" | replace: "\", "" }}' || null;
//         {% elsif checkout %}
//             couponCode = '{{ checkout.discount_applications[0].title | replace: "'", "" | replace: "\", "" }}' || 'null';
//         {% endif %}

//         if(atgSessionId || couponCode || isYtUtm(utm_source, utm_medium)){
//             {% if order %}
//                 productTitles = '~';
//                 {% for line_item in order.line_items %}
//                     productTitles += '{{ line_item.product.title | replace: "'", "" | replace: "\", ""  }}**{{ line_item.quantity }}~';
//                 {% endfor %}

//                 numOrders = '{{ order.customer.orders_count }}' || 0;
//                 saleAmount = '{{ order.total_price | money_without_currency }}' || 0;
//                 currency = '{{ order.shop.currency }}' || 'undefined';
//                 orderNumber = '{{ order.order_number }}' || '0';
//                 orderIdShopify = '{{order.id}}' || '0';

//             {% elsif checkout %}
//                 productTitles = '~';
//                 {% for line_item in checkout.line_items %}
//                     productTitles += '{{ line_item.product.title | replace: "'", "" | replace: "\", ""  }}**{{ line_item.quantity }}~';
//                 {% endfor %}

//                 numOrders = '{{ customer.orders_count }}' || 0;
//                 saleAmount = '{{ total_price | money_without_currency }}' || 0;
//                 currency = '{{ currency }}' || 'undefined';
//                 orderNumber = '{{ checkout.order_number }}' || '0';
//                 orderIdShopify = '{{checkout.order_id}}' || '0';

//             {% endif %}

//             queryParams = {
//                 ...queryParams,
//                 atgSessionId: atgSessionId,
//                 platform: PLATFORM,
//                 orderId: orderNumber,
//                 orderIdShopify: orderIdShopify,
//                 saleAmount: saleAmount,
//                 currency: currency,
//                 items: productTitles,
//                 couponCode: couponCode,
//                 numOrders: numOrders
//             }

//             if(isYtUtm(utm_source, utm_medium)){
//                 utm_term = localStorage.getItem('wl_utm_term');
//                 utm_content = localStorage.getItem('wl_utm_content');
//                 utm_campaign = localStorage.getItem('wl_utm_campaign');
//                 click_time = localStorage.getItem('wl_click_time');
//                 srsltid = localStorage.getItem('wl_srsltid');
//                 queryParams = {
//                     ...queryParams,
//                     utm_source: utm_source,
//                     utm_medium: utm_medium,
//                     utm_campaign: utm_campaign,
//                     utm_term: utm_term,
//                     utm_content: utm_content,
//                     srsltid: srsltid,
//                     click_time: click_time
//                 }
//             }

//             let queryString = new URLSearchParams(queryParams).toString();
//             let finalURL = `${PIXEL_URL}${queryString}`;
//             addPixel('wl-pixel', finalURL);

//             localStorage.removeItem('atgSessionId');
//             localStorage.removeItem('wl_utm_source');
//             localStorage.removeItem('wl_utm_medium');
//             localStorage.removeItem('wl_utm_term');
//             localStorage.removeItem('wl_utm_content');
//             localStorage.removeItem('wl_utm_campaign');
//             localStorage.removeItem('wl_click_time');
//             localStorage.removeItem('wl_srsltid');
//             
//         }
//     }
//     catch(error){
//         queryParams = {
//             ...queryParams,
//             errorMessage: error.message,
//             stackTrace: error.stack,
//             userAgent: navigator.userAgent
//         }
//         let queryString = new URLSearchParams(queryParams).toString();
//         let finalURL = `${PIXEL_ERROR_URL}${queryString}`;
//         addPixel('wl-error-pixel', finalURL)
//     }
// </script>




// <!-- Start VWO Async SmartCode -->
// <script type='text/javascript' id='vwoCode'>
//     window._vwo_code=window._vwo_code || (function() {
//     var account_id=679471,
//     version=1.4,
//     settings_tolerance=2000,
//     library_tolerance=2500,
//     use_existing_jquery=false,
//     is_spa=1,
//     hide_element='body',
//     /* DO NOT EDIT BELOW THIS LINE */
//     f=false,d=document,vwoCodeEl=document.querySelector('#vwoCode'),code={use_existing_jquery:function(){return use_existing_jquery},library_tolerance:function(){return library_tolerance},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=d.createElement('script');t.fetchPriority='high';t.src=e;t.type='text/javascript';t.innerText;t.onerror=function(){_vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(t)},getVersion:function(){return version},getMatchedCookies:function(e){var t=[];if(document.cookie){t=document.cookie.match(e)||[]}return t},getCombinationCookie:function(){var e=code.getMatchedCookies(/(?:^|;)\s?(_vis_opt_exp_\d+_combi=[^;$]*)/gi);e=e.map(function(e){try{var t=decodeURIComponent(e);if(!/_vis_opt_exp_\d+_combi=(?:\d+,?)+\s*$/.test(t)){return''}return t}catch(e){return''}});var i=[];e.forEach(function(e){var t=e.match(/([\d,]+)/g);t&&i.push(t.join('-'))});return i.join('|')},init:function(){window.settings_timer=setTimeout(function(){_vwo_code.finish()},settings_tolerance);var e=d.createElement('style'),t=hide_element?hide_element+'{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}':'',i=d.getElementsByTagName('head')[0];e.setAttribute('id','_vis_opt_path_hides');vwoCodeEl&&e.setAttribute('nonce',vwoCodeEl.nonce);e.setAttribute('type','text/css');if(e.styleSheet)e.styleSheet.cssText=t;else e.appendChild(d.createTextNode(t));i.appendChild(e);var n=this.getCombinationCookie();this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+ +is_spa+'&vn='+version+(n?'&c='+n:''));return settings_timer}};window._vwo_settings_timer = code.init();return code;}());
//     </script>
//     <!-- End VWO Async SmartCode -->
//     <!-- Start: VWO Revenue metric -->
//     <script>
//     {% assign _vis_opt_revenue = order.total_price | divided_by: 100.0 %}
//     // Do not change anything in the following two lines
//     window.VWO = window.VWO || [];
//     VWO.event = VWO.event || function () {VWO.push(["event", ...arguments])};
//     // Replace the property values with your actual values
//     VWO.event("revenue", {
//       "order-value": {{ _vis_opt_revenue }}
//     });
//     VWO.event('purchase', {
//           'value':{{ _vis_opt_revenue }}
//       })
//     </script>
//     <!-- End: VWO Revenue metric -->
//     <script type="text/javascript">
//       window.VWO = window.VWO || [];
//       window.VWO.push(['track.revenueConversion',{{ _vis_opt_revenue }}]);
//     window.VWO.push(['track.goalConversion',3]);
//     </script>



// <script type="text/javascript">(function(){var a=document.createElement("iframe");a.setAttribute("src","https://paytm43.gotrackier.com/pixel?adid=64704d70d71fd51f0807c0d9&txn_id=txn_id={{ order_number }}&sale_amount={{ total_price | money_without_currency }}&currency=INR&sub4=");a.style.width="1";a.style.height="1";document.body.appendChild(a)})();</script>

// <script type="text/javascript">
// window.goaffpro_order = {
//     id:{{ order.name | replace: "#","" }}
// }
// if(typeof window.goaffproTrackConversion !== "undefined"){
//   window.goaffproTrackConversion(window.goaffpro_order)
// }
// </script>

// <!-- start Goaffpro -->
// <script type="text/javascript" src="https://api.goaffpro.com/loader.js?shop=foxtale-consumer.myshopify.com"></script><script type="text/javascript">goaffproTrackConversion('last_order')</script>
// <!-- End -->
// <script>
//  let field = '';
// if(document.querySelector('form').action.includes('authenticate')){
//   field =document.querySelector('form');
//   const emailField = document.getElementById('email');
//   const orderIdField = document.getElementById('order_number');
//   if (emailField?.value && orderIdField?.value) {
//     field && field.submit();
//   }
// }
// </script>



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

mixpanel.init("1e8f3dbc29a04e9ae06ef45a4e721309", {
  debug: true,
  track_pageview: false,
  persistence: "localStorage",
});

// Setting up distinct id of the user if it is logged in
const mixpanelDistinctId = JSON.parse(localStorage.getItem("mp_distinct_id"))
console.log("mp_distinct_id", mixpanelDistinctId);

if (mixpanelDistinctId) {

  console.log("mixpanel device id to target: ", mixpanelDistinctId)
  mixpanel.identify(mixpanelDistinctId);

}

mixpanel.people.set_once({
    last_updated: new Date(),
  });
  

mixpanel.people.set({
    "$email": "{{order.customer.email}}",
    "$first_name": "{{order.customer.first_name}}",
    "$last_name": "{{order.customer.last_name}}",
});

// console.log('email',  "{{order.customer.email}}");
// console.log('first name',  "{{order.customer.first_name}}");
// console.log('last name', "{{order.customer.last_name}}");
// console.log('Shopify ID', "{{http://order.customer.id}}");
// console.log('order checkout token', "{{order.checkoutToken}}");
// console.log('order checkout token', "{{order}}");
// console.log('order checkout token', {{order[note_attributes]["gokwik_cid"] }});

const requestOptions = {
method: "GET",
headers: {
  "Access-Control-Allow-Origin": "*",
  "Accept": "*/*"
},
redirect: "follow"
};

let fetchOrderApiUrl = 'https://2x0e0bw0l5.execute-api.us-east-1.amazonaws.com/dev/foxtale-order-api?orderId=' + {{order.id}};

fetch(fetchOrderApiUrl, requestOptions)
.then((response) => response.json())
.then(data => {

  console.log("from foxtale order getting api: ", data);

  let orderObj = data?.order;


  let orderObjectNotesAttributes = [];
  let orderLineItems = orderObj.line_items || [];
  let orderDiscountApplications = [];
  let orderJsonString = [];
  let purchasedProductIds = [];
  let purchasedProductQuantities = [];
  let purchasedProductPrices = [];
  let purchasedProductSkus = [];
  let purchasedProductVariants = [];
  let purchasedProductTypes = [];
  let purchasedProductTitles = [];
  let purchasedProductVendors = [];
  let totalDiscounts = 0;
  let totalDiscountNames = [];
  let noteAttributesObj = {};
  let shippingJson = orderObj.shipping_address || {};
  let billingJson = orderObj.billing_address || {};
  let shippingAddress = Object.values(shippingJson).join(',');
  let billingAddress = Object.values(billingJson).join(',');
  let cartData = null;
  let discountCodesArray = orderObj.discount_codes || [];
  let dicountCodes = "";
  let paymentGatewayNamesArr = orderObj.payment_gateway_names || [];
  let paymentGatewayNames = paymentGatewayNamesArr.join(',') || null;
  let orderTags = orderObj.tags || "";

  orderObjectNotesAttributes = orderObj?.note_attributes;
  orderDiscountApplications = orderObj?.discount_applications;
  
  for(let i = 0; i < orderLineItems.length; i++) {
    orderJsonString.push(JSON.stringify(orderLineItems[i]))
    purchasedProductIds.push(orderLineItems[i].id);
    purchasedProductQuantities.push(orderLineItems[i].quantity);
    purchasedProductPrices.push(orderLineItems[i].price);
    purchasedProductSkus.push(orderLineItems[i].sku);
    purchasedProductVariants.push(orderLineItems[i].variant_id);
    purchasedProductTypes.push(orderLineItems[i].product?.type);
    purchasedProductTitles.push(orderLineItems[i].title);
    purchasedProductVendors.push(orderLineItems[i].vendor);
  }

  for (let i = 0; i < orderDiscountApplications.length; i++) {
    totalDiscounts += orderDiscountApplications[i].value
    totalDiscountNames.push(orderDiscountApplications[i].title)
  }

  if ((Object.keys(orderObj)).length > 0 || orderObjectNotesAttributes.length > 0) {

    for ( let i = 0; i < orderObjectNotesAttributes.length; i++ ) {
      noteAttributesObj[orderObjectNotesAttributes[i].name] = orderObjectNotesAttributes[i].value;
    }
  }

  if (discountCodesArray.length > 0) {
    for (let i = 0; i < discountCodesArray.length; i++) {
      dicountCodes += discountCodesArray[i].code;
    }
  }

  mixpanel.track("Purchased", {
    "distinct_id": mixpanelDistinctId,
    "$source": "Vendo - Shopify Data Intelligence",
    "$current_url": orderObj.order_status_url,
    "Location ID": orderObj.location_id || "",
    "Source Name": orderObj.source_name || "",
    "Order ID": orderObj.id,
    "Discount Codes": dicountCodes || "",
    "Accepts Marketing": orderObj.buyer_accepts_marketing,
    "Payment Gateway Names": paymentGatewayNames || "",
    "Customer Locale": orderObj.customer_locale || "",
    "Total Discount": totalDiscounts || "0",
  //   "Total Discount Names": totalDiscountNames || "",
    "Sale Amount": orderObj.total_price || "0",
    "Currency": orderObj.currency || "",
    "Order Number": orderObj.order_number,
    "Order Subtotal": orderObj.subtotal_price,
    "Order Total": orderObj.total_price,
    "Total Tax": orderObj.tax_price,
    "Product Quantity": orderLineItems?.length || 0,
    "Order Line Items": orderLineItems || [],
    "Purchased product ids": purchasedProductIds || [],
    "Purchased product quantities": purchasedProductQuantities || [],
    "Purchased product prices": purchasedProductPrices || [],
    "Purchased product skus": purchasedProductSkus || [],
    "Purchased product varients": purchasedProductVariants || [],
    "Purchased product types": purchasedProductTypes || [],
    "Purchased product titles": purchasedProductTitles || [],
    "Purchased product vendors": purchasedProductVendors || [],
    "Billing Address": billingAddress || "",
    "Shipping Address": shippingAddress || "",
    "Shipping Price": orderObj.shipping_price || 0,
    "Checkout Token": orderObj.checkoutToken || "",
    "Shipping Methods": "",
    "Tags": orderTags || "",
    "Order Status Url": orderObj.order_status_url || "",
    // "Cart Data": cartData || "",
    "Order json string": orderJsonString || "",
    "Cart": cartData || "",
    ...noteAttributesObj
  });
})
.catch(error => {
  console.error('Error fetching order details:', error);
}
);
}