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
  
  mixpanel.init("870b72f7101d6cff39515fddb9874ded", {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  });

  // Setting up distinct id of the user if it is logged in
  const mixpanelLocalStorageObject = JSON.parse(localStorage.getItem("mp_870b72f7101d6cff39515fddb9874ded_mixpanel"));
  const mixpanelDistinctId = localStorage.getItem("mixpanel_distinct_id") || mixpanelLocalStorageObject?.["distinct_id"]
  const kwikPassCustomerId = localStorage.getItem("kp_customer_id")
  console.log("kwikPassCustomerId: ", kwikPassCustomerId);
  console.log("mixpanel_distinct_id", mixpanelDistinctId);
  console.log("mixpanelLocalStorageObject?.['distinct_id']: ", mixpanelLocalStorageObject)?.["distinct_id"]
  console.log("mixpanel local storage object", mixpanelLocalStorageObject);
  // if (mixpanelDistinctId || mixpanelLocalStorageObject?.["distinct_id"]) {
  //   identifyAndSetProfile(mixpanelDistinctId || mixpanelLocalStorageObject?.["distinct_id"], {});

  if (mixpanelDistinctId) {
    mixpanel.identify(mixpanelDistinctId);
  }
  mixpanel.people.set_once({
    last_updated: new Date(),
  });
  
  /**
   * Attaching event listeners based on configuration
   */
  function setupEventListeners() {
    // this sesction is for coupon code event tracking

    // const elementArray = Array.from(
    //   document.querySelectorAll(`[aria-label="Apply Discount Code"]`)
    // );
  
    // elementArray.forEach((element) => {
    //   element.addEventListener("click", (event) => {
    //       const parentElement = element.parentElement;
  
    //       const inputEleForDiscountCodeValue = parentElement.querySelector(`[name="reductions"]`);
  
    //       const dicountCodeValue = inputEleForDiscountCodeValue.value;
  
    //       console.log("discountCodeValue: ", dicountCodeValue);
  
    //       element.setAttribute("abcd", true);
         
    //      mixpanel.track("Coupon Code Applied", {
    //           "dicountCodeValue": dicountCodeValue
    //       });
    //   })
    // });

    ////////////////////////////////////////////////////////

    // this section is for pay now event tracking

    // const payNowButtonDiv = document.getElementById("pay-button-container");

    // if (payNowButtonDiv) {

    //     const payNowButton = payNowButtonDiv.querySelector(`[type="submit"]`);

    //     payNowButton.addEventListener("click", (event) => {

    //         mixpanel.track("Pay Now Button Clicked", {
    //             "Event": event,
    //             "Page URL": window.location.href,
    //             "Referrer": document.referrer
    //         })
    //     })
    // }

    ////////////////////////////////////////////////////////

    // this section is for tracking thank you page

    // const thankYouPageTrackerDiv = document.querySelector(`[data-step="thank_you"]`);
    const currentUrl = window.location.href

    // if (currentUrl.includes("thank_you")) {

        let order_id = "{{ order.id }}";
        let couponCode = null;
        let saleAmount = "{{ order.total_price | money_without_currency }}" || "0";
        let currency = "{{ order.shop.currency }}" || "undefined";
        let orderNumber = "{{ order.order_number }}" || "0";
        let orderSubtotalPrice = "{{ order.items_subtotal_price }}" || "0";
        let orderTotalPrice = "{{ order.original_total_price }}";
        let orderPrice = "{{ order.tax_price }}";
        let orderItemsQuantity = "{{ order.item_count }}";
        let orderLineItems = {{ order.line_items | json }};
        let puchasedProductIds = [];
        let purchasedProductQuantities = [];
        let purchasedProductPrices = [];
        let purchasedProductSkus = [];
        let purchasedProductVariants = [];
        let billingAddress = "{{ order.billing_address }}";
        let shippingAddress = "{{ order.shipping_address }}";
        let orderStatusUrl = "{{ order.order_status_url }}";
        let orderJsonString = [];
        let cartData = null;

        // $.ajax({
        //   url: "https://quickstart-a353a111.myshopify.com" + "/cart.js",
        //   type: "GET",
        //   dataType: "json",
        //   async: false, // This makes the AJAX call synchronous
        //   success: function (data) {
        //     console.log("data from ajax query: ", data);
    
        //     cartData = JSON.stringify(data);
        //   },
        //   error: function (error) {
        //     console.log("Error fetching product data:", error);
        //   },
        // });


        for(let i = 0; i < orderLineItems.length; i++) {
          orderJsonString.push(JSON.stringify(orderLineItems[i]))
          puchasedProductIds.push(orderLineItems[i].id);
          purchasedProductQuantities.push(orderLineItems[i].quantity);
          purchasedProductPrices.push(orderLineItems[i].price);
          purchasedProductSkus.push(orderLineItems[i].sku);
          purchasedProductVariants.push(orderLineItems[i].variant_id);
        }

        if("{{ order }}") {
            couponCode = `{{ order.discount_applications[0].title | replace: "'", "" | replace: "\", "" }}` || null;
        }
        else if("{{ checkout }}") {
            couponCode = `{{ checkout.discount_applications[0].title | replace: "'", "" | replace: "\", "" }}` || 'null';
        }

        // mixpanel.track("Order Placed Successfully", {
            // "order_id": order_id,
            // "couponCode": couponCode || null,
            // "saleAmount": saleAmount || "0",
            // "currency": currency || "undefined",
            // "orderNumber": orderNumber || "0",
        // });

        mixpanel.track("Purchased", {
          "order_id": order_id,
          "couponCode": couponCode || null,
          "saleAmount": saleAmount || "0",
          "currency": currency || "undefined",
          "orderNumber": orderNumber || "0",
          "orderSubtotalPrice": orderSubtotalPrice || "0",
          "orderTotalPrice": orderTotalPrice || "0",
          "orderPrice": orderPrice || "0",
          "orderItemsQuantity": orderItemsQuantity || "0",
          "orderLineItems": orderLineItems || null,
          "puchasedProductIds": puchasedProductIds || null,
          "purchasedProductQuantities": purchasedProductQuantities || null,
          "purchasedProductPrices": purchasedProductPrices || null,
          "purchasedProductSkus": purchasedProductSkus || null,
          "purchasedProductVariants": purchasedProductVariants || null,
          "billingAddress": billingAddress || null,
          "shippingAddress": shippingAddress || null,
          "orderStatusUrl": orderStatusUrl || null,
          "cartData": cartData || null,
          "orderJsonString": orderJsonString || null,
        });
    // }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Checkout Script is getting executed");
    setupEventListeners();
  });


  ///////////////////////////////////////////////////////////////////////////////////


  