const Clickstream = require("flick");
if (typeof window != "undefined") {
  //Clickstream.initialize('https://api.fyndx1.de/service/application', 'gofynd')
  window.FPI.event.on("user.login", (eventData) => {
    console.log(eventData);
    Clickstream.identify(eventData["user_id"], { ...eventData }).catch(
      (err) => {
        console.error(err);
      }
    );
  });

  window.FPI.event.on("user.update", (eventData) => {
    console.log(eventData);
    Clickstream.identify(eventData["used_id"], { ...eventData }).catch(
      (err) => {
        console.error(err);
      }
    );
  });

  window.FPI.event.on("user.logout", (eventData) => {
    console.log(eventData);
    Clickstream.reset().catch((err) => {
      console.error(err);
    });
  });

  window.FPI.event.on("wishlist.add", (eventData) => {
    console.log(eventData);
    Clickstream.sendEvent("product_wishlist_add", {
      wishlist_name: "TODO",
      wishlist_id: "TODO",
      event_type: "click",
      product_id: eventData.item["uid"],
      brand: eventData.item.brand["name"],
      l3_category: eventData.item.categories[0]["name"],
      mrp: "TODO",
      quantity: "TODO",
      esp: "TODO",
      currency: "",
      value: "TODO",
      source_url: "TODO",
    })
      .then((resp) => {
        console.log("Event sent succesfully");
      })
      .catch((err) => {
        console.error(err);
      });
  });

  window.FPI.event.on("wishlist.remove", (eventData) => {
    console.log(eventData);
    Clickstream.sendEvent("product_wishlist_remove", {
      wishlist_name: "TODO",
      wishlist_id: "TODO",
      event_type: "click",
      product_id: eventData.item["uid"],
      brand: eventData.item.brand["name"],
      l3_category: eventData.item.categories[0]["name"],
      mrp: "TODO",
      quantity: "TODO",
      esp: "TODO",
      currency: "",
      value: "TODO",
      source_url: "TODO",
    })
      .then((resp) => {
        console.log("Event sent succesfully");
      })
      .catch((err) => {
        console.error(err);
      });
  });

  window.FPI.event.on("cart.newProduct", (eventData) => {
    console.log(eventData);
    Clickstream.sendEvent("add_to_cart", {
      cart_id: eventData.cart_id,
      event_type: "click",
      product_id: eventData.products[0]["uid"],
      brand: eventData.products[0]["brand"]["name"],
      l3_category: eventData.products[0]["category"]["name"],
      l1_category: "TODO",
      currency: eventData.products[0]["price"]["currency_code"],
      price: eventData.products[0]["price"]["selling"],
      quantity: eventData.products[0]["quantity"]["current"],
      source_url: "TODO",
      position: "TODO",
      value: "TODO",
    })
      .then((resp) => {
        console.log("Event sent succesfully");
      })
      .catch((err) => {
        console.error(err);
      });
  });

  window.FPI.event.on("cart.remove", (eventData) => {
    console.log(eventData);
    Clickstream.sendEvent("remove_from_cart", {
      cart_id: eventData.cart_id,
      event_type: "click",
      product_id: eventData.products[0]["uid"],
      brand: eventData.products[0]["brand"]["name"],
      l3_category: eventData.products[0]["category"]["name"],
      l1_category: "TODO",
      currency: eventData.products[0]["price"]["currency_code"],
      price: eventData.products[0]["price"]["selling"],
      quantity: eventData.products[0]["quantity"]["current"],
      source_url: "TODO",
      position: "TODO",
      value: "TODO",
    })
      .then((resp) => {
        console.log("Event sent succesfully");
      })
      .catch((err) => {
        console.error(err);
      });
  });

  window.FPI.event.on("order.processed", (eventData) => {
    console.log(eventData);
    Clickstream.sendEvent("order_complete", {
      event_type: "click",
      ...eventData,
    })
      .then((resp) => {
        console.log("Event sent succesfully");
      })
      .catch((err) => {
        console.error(err);
      });
  });

  window.FPI.event.on("refund.success", (eventData) => {
    console.log(eventData);
    Clickstream.sendEvent("order_refunded", {
      event_type: "click",
      ...eventData,
    })
      .then((resp) => {
        console.log("Event sent succesfully");
      })
      .catch((err) => {
        console.error(err);
      });
  });

  window.FPI.event.on("order.checkout", (eventData) => {
    console.log("order checkout", eventData);
    Clickstream.sendEvent("order_checkout", {
      event_type: "click",
      cart_id: eventData.cart_id,
      cart_total: eventData.breakup_values_raw["mrp_total"],
      items: eventData.products.lenght,
      shipping: eventData.breakup_values_raw["delivery_charge"],
      tax: eventData.breakup_values_raw["gst_charges"],
      order_total: eventData.breakup_values_raw["total"],
      currency: eventData.products[0]["price"]["currency_code"],
      products: eventData.products.map((p) => {
        return {
          product_id: p.uid,
          l3_category: p.category["name"],
          l1_category: "TODO",
          quantity: p.quantity["current"],
          price: p.price["marked"],
          value: p.price["effective"],
          currency: p.price["currency_code"],
        };
      }),
    })
      .then((resp) => {
        console.log("Event sent succesfully");
      })
      .catch((err) => {
        console.error(err);
      });
  });

  window.FPI.event.on("product.view", (eventData) => {
    console.log(eventData);
    Clickstream.sendEvent("product_view", {
      event_type: "click",
      product_id: eventData.product["uid"],
      currency: eventData.product.price["currency"],
      brand: eventData.product.brand["name"],
      l3_category: eventData.product.category["name"],
      mrp: eventData.price.max,
      esp: eventData.price.min,
      l1_category: "TODO",
      source_url: "TODO",
      quantity: "TODO",
      position: "TODO",
    })
      .then((resp) => {
        console.log("Event sent succesfully");
      })
      .catch((err) => {
        console.error(err);
      });
  });

  window.FPI.event.on("product_list.click", (eventData) => {
    console.log(eventData);
    // Clickstream.sendEvent("product_view", { event_type: "click", product_uid: eventData.product['uid'], user_id: eventData.user['user_id'], currency: eventData.product.price['currency'], brand: eventData.product.brand['name'], category: eventData.product.category['name'] }).then((resp) => {
    //     console.log("Event sent succesfully")
    // }).catch(err => {
    //     console.error(err)
    // })
  });

  window.FPI.event.on("search.products", (eventData) => {
    console.log(eventData);
    Clickstream.sendEvent("product_search", {
      type: "search",
      query: eventData.search_text,
    })
      .then((resp) => {
        console.log("Event sent succesfully");
      })
      .catch((err) => {
        console.error(err);
      });
  });

  window.FPI.event.on("product_list.filter", (eventData) => {
    console.log("filter product", eventData);
    // Clickstream.sendEvent("add_to_cart", { event_type: "conversion", product_uid: eventData.products[0]['uid'], user_id: eventData.user['user_id'], brand: eventData.products[0]['brand']['name'], category: eventData.products[0]['category']['name'], currency: eventData.products[0]['price']['currency_code'], price: eventData.products[0]['price']['selling'], quantity: eventData.products[0]['quantity']['current'], cart: [] }).then((resp) => {
    //   console.log("Event sent succesfully")
    // }).catch(err => {
    //   console.error(err)
    // })
  });
}
