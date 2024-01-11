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
    Clickstream.sendEvent("product_wishlist", {
      event_type: "click",
      product_uid: eventData.item["uid"],
      user_id: eventData.user["id"],
      brand: eventData.item.brand["name"],
      category: eventData.item.categories[0]["name"],
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
      event_type: "conversion",
      product_uid: eventData.products[0]["uid"],
      user_id: eventData.user["user_id"],
      brand: eventData.products[0]["brand"]["name"],
      category: eventData.products[0]["category"]["name"],
      currency: eventData.products[0]["price"]["currency_code"],
      price: eventData.products[0]["price"]["selling"],
      quantity: eventData.products[0]["quantity"]["current"],
      cart: [],
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
    Clickstream.sendEvent("purchase_complete", {
      event_type: "conversion",
      product_uid: eventData.order_data.items.shipments[0].bags[0].item["id"],
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
      product_uid: eventData.product["uid"],
      user_id: eventData.user["user_id"],
      currency: eventData.product.price["currency"],
      brand: eventData.product.brand["name"],
      category: eventData.product.category["name"],
    })
      .then((resp) => {
        console.log("Event sent succesfully");
      })
      .catch((err) => {
        console.error(err);
      });
  });

  window.FPI.event.on("search.products", (eventData) => {
    console.log(eventData);
    Clickstream.sendEvent("search", {
      screen: eventData.screen,
      screen_view: eventData.screen_view,
      search_text: eventData.search_text,
    })
      .then((resp) => {
        console.log("Event sent succesfully");
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
