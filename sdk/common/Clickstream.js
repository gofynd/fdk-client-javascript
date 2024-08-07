const Clickstream = require("@gofynd/flick");
const { Logger } = require("../common/Logger");

/**
 * Safely extracts a value from an Object of n-depth
 *
 * @author Nikhil Kakade
 * @param {function} fn
 * @param {any} [defaultValue] - Null
 * @returns {any}
 */
const sg = function safeGet(fn, defaultValue = null) {
  try {
    return fn();
  } catch (err) {
    return defaultValue;
  }
};
/**
 * Safely extracts search query and click position
 *
 * @author Hitendra Singh
 * @param {Object} [defaultValue] - Utm_params
 * @returns {Object} - Query and position
 */
const fetchPositionAndQuery = function (utm_params) {
  if (!utm_params || !Object.keys(utm_params).length) {
    return {
      query: null,
      position: null,
    };
  }
  const decodedUri = utm_params.utm_content
    ? atob(utm_params.utm_content)
    : null;
  if (decodedUri && utm_params.utm_medium === "search") {
    const parts = decodedUri.split(":::");
    return {
      query: parts[0] || null,
      position: parts[1] || null,
    };
  }
  return {
    query: null,
    position: null,
  };
};
if (typeof window != "undefined") {
  window.FPI.event.on("user.login", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    Clickstream.identify(eventData["user_id"], {
      event_type: "identity",
      email: sg(() => eventData["email"]),
      phone: sg(() => eventData["phone_number"]),
      login_value: sg(() => eventData["login_value"]),
      method: sg(() => eventData["method"]),
    }).catch((err) => {
      Logger({ level: "ERROR", message: err });
    });
  });

  window.FPI.event.on("user.update", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    Clickstream.identify(eventData["used_id"], {
      event_type: "identity",
      email: sg(() => eventData["email"]),
      phone: sg(() => eventData["phone_number"]),
      method: sg(() => eventData["method"]),
    }).catch((err) => {
      Logger({ level: "ERROR", message: err });
    });
  });

  window.FPI.event.on("user.logout", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    Clickstream.sendEvent("user_logout", { event_type: "identity" }).catch(
      (err) => {
        Logger({ level: "ERROR", message: err });
      }
    );
    Clickstream.reset().catch((err) => {
      Logger({ level: "ERROR", message: err });
    });
  });

  window.FPI.event.on("wishlist.add", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    const payload = {
      wishlist_name: "TODO",
      wishlist_id: "TODO",
      event_type: "engagement",
      product_id: sg(() => eventData.item["uid"]),
      brand: sg(() => eventData.item.brand["name"]),
      l3_category: sg(() => eventData.item.categories[0]["name"]),
      mrp: sg(() => eventData.item.price.marked.max),
      quantity: "TODO",
      esp: sg(() => eventData.item.price.effective.min),
      currency: sg(() => eventData.item.price.effective.currency_code),
      value: "TODO",
      source_url: "TODO",
    };
    const queryResult = fetchPositionAndQuery(eventData.utm_params);
    Clickstream.sendEvent("product_wishlist_add", {
      ...payload,
      ...queryResult,
    })
      .then((resp) => {
        Logger({ level: "DEBUG", message: "Click event sent" });
      })
      .catch((err) => {
        Logger({ level: "ERROR", message: err });
      });
  });

  window.FPI.event.on("wishlist.remove", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    Clickstream.sendEvent("product_wishlist_remove", {
      wishlist_name: "TODO",
      wishlist_id: "TODO",
      event_type: "engagement",
      product_id: sg(() => eventData.item["uid"]),
      brand: sg(() => eventData.item.brand["name"]),
      l3_category: sg(() => eventData.item.categories[0]["name"]),
      mrp: sg(() => eventData.item.price.marked.max),
      quantity: "TODO",
      esp: sg(() => eventData.item.price.effective.min),
      currency: sg(() => eventData.item.price.effective.currency_code),
      value: "TODO",
      source_url: "TODO",
    })
      .then((resp) => {
        Logger({ level: "DEBUG", message: "Click event sent" });
      })
      .catch((err) => {
        Logger({ level: "ERROR", message: err });
      });
  });

  window.FPI.event.on("cart.newProduct", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    const payload = {
      cart_id: eventData.cart_id,
      event_type: "engagement",
      product_id: sg(() => eventData.products[0]["uid"]),
      article_id: sg(() => eventData.products[0]["article"]["uid"]),
      brand: sg(() => eventData.products[0]["brand"]["name"]),
      l3_category: sg(() => eventData.products[0]["category"]["name"]),
      l1_category: "TODO",
      currency: sg(() => eventData.products[0]["price"]["currency_code"]),
      price: sg(() => eventData.products[0]["price"]["selling"]),
      quantity: sg(() => eventData.products[0]["quantity"]["current"]),
      source_url: "TODO",
      position: null,
      query: null,
      value: "TODO",
    };
    const queryResult = fetchPositionAndQuery(eventData.utm_params);
    Clickstream.sendEvent("add_to_cart", { ...payload, ...queryResult })
      .then((resp) => {
        Logger({ level: "DEBUG", message: "Click event sent" });
      })
      .catch((err) => {
        Logger({ level: "ERROR", message: err });
      });
  });

  window.FPI.event.on("cart.remove", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    Clickstream.sendEvent("remove_from_cart", {
      cart_id: eventData.cart_id,
      event_type: "engagement",
      product_id: sg(() => eventData.products[0]["uid"]),
      brand: sg(() => eventData.products[0]["brand"]["name"]),
      l3_category: sg(() => eventData.products[0]["category"]["name"]),
      l1_category: "TODO",
      currency: sg(() => eventData.products[0]["price"]["currency_code"]),
      price: sg(() => eventData.products[0]["price"]["selling"]),
      quantity: sg(() => eventData.products[0]["quantity"]["current"]),
      source_url: "TODO",
      position: null,
      value: "TODO",
    })
      .then((resp) => {
        Logger({ level: "DEBUG", message: "Click event sent" });
      })
      .catch((err) => {
        Logger({ level: "ERROR", message: err });
      });
  });

  window.FPI.event.on("order.processed", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    Clickstream.sendEvent("order_complete", {
      event_type: "conversion",
      ...eventData,
    })
      .then((resp) => {
        Logger({ level: "DEBUG", message: "Click event sent" });
      })
      .catch((err) => {
        Logger({ level: "ERROR", message: err });
      });
  });

  window.FPI.event.on("refund.success", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    Clickstream.sendEvent("order_refunded", {
      event_type: "conversion",
      ...eventData,
    })
      .then((resp) => {
        Logger({ level: "DEBUG", message: "Click event sent" });
      })
      .catch((err) => {
        Logger({ level: "ERROR", message: err });
      });
  });

  window.FPI.event.on("order.checkout", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    Clickstream.sendEvent("order_checkout", {
      event_type: "conversion",
      cart_id: eventData.cart_id,
      cart_total: sg(() => eventData.breakup_values_raw["mrp_total"]),
      items: sg(() => eventData.products.lenght),
      shipping: sg(() => eventData.breakup_values_raw["delivery_charge"]),
      tax: sg(() => eventData.breakup_values_raw["gst_charges"]),
      order_total: sg(() => eventData.breakup_values_raw["total"]),
      currency: sg(() => eventData.products[0]["price"]["currency_code"]),
      products: eventData.products.map((p) => {
        return {
          product_id: p.uid,
          l3_category: sg(() => p.category["name"]),
          l1_category: "TODO",
          quantity: sg(() => p.quantity["current"]),
          price: sg(() => p.price["marked"]),
          value: sg(() => p.price["effective"]),
          currency: sg(() => p.price["currency_code"]),
          article_id: sg(() => p.article["uid"]),
        };
      }),
    })
      .then((resp) => {
        Logger({ level: "DEBUG", message: "Click event sent" });
      })
      .catch((err) => {
        Logger({ level: "ERROR", message: err });
      });
  });

  window.FPI.event.on("product_list.view", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    Clickstream.sendEvent("product_listing", {
      event_type: "impression",
      query: sg(() => eventData.slug["q"]),
      products: eventData.items.map((p) => {
        return {
          product_id: p.uid,
          name: p.name,
          currency: sg(() => p.price["effective"]["currency_code"]),
          mrp: sg(() => p.price["effective"]["max"]),
          esp: sg(() => p.price["effective"]["min"]),
          source_url: p.url,
          brand: sg(() => p.brand["name"]),
        };
      }),

      item_total: sg(() => eventData["page"]["item_total"]),
    });
  });

  window.FPI.event.on("product.view", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    const payload = {
      event_type: "click",
      product_id: sg(() => eventData.product["uid"]),
      currency: sg(() => eventData.product.price["currency_code"]),
      brand: sg(() => eventData.product.brand["name"]),
      l3_category: sg(() => eventData.product.l3_category),
      mrp: sg(() => eventData.product.price.max),
      esp: sg(() => eventData.product.price.min),
      l1_category: sg(() => eventData.product.l1_category),
      source_url: sg(() => eventData.product.source_url),
      quantity: sg(() => eventData.product.sizes[0]["quantity"]),
      position: null,
      query: null,
    };
    const queryResult = fetchPositionAndQuery(eventData.utm_params);
    Clickstream.sendEvent("product_view", { ...payload, ...queryResult })
      .then((resp) => {
        Logger({ level: "DEBUG", message: "Click event sent" });
      })
      .catch((err) => {
        Logger({ level: "ERROR", message: err });
      });
  });

  window.FPI.event.on("search.products", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    const payload = {
      event_type: "search",
      query: eventData.search_text,
      products: [],
      item_total: null,
    };
    //filter eventData.data to find the products array and item total
    const products = eventData.data
      .filter((item) => {
        if ((item["type"] === "product" && item.categories) || item.product)
          return true;
      })
      .map((product) => {
        return product.display || product.name;
      });
    const item_total = sg(() => eventData.page["item_total"]);
    if (payload.query) {
      //only if query is present
      Clickstream.sendEvent("product_search", {
        ...payload,
        products,
        item_total,
      })
        .then((resp) => {
          Logger({ level: "DEBUG", message: "Click event sent" });
        })
        .catch((err) => {
          Logger({ level: "ERROR", message: err });
        });
    }
  });

  window.FPI.event.on("product_list.filter", (eventData) => {
    Logger({ level: "DEBUG", message: eventData });
    // Clickstream.sendEvent("add_to_cart", { event_type: "conversion", product_uid: eventData.products[0]['uid'], user_id: eventData.user['user_id'], brand: eventData.products[0]['brand']['name'], category: eventData.products[0]['category']['name'], currency: eventData.products[0]['price']['currency_code'], price: eventData.products[0]['price']['selling'], quantity: eventData.products[0]['quantity']['current'], cart: [] }).then((resp) => {
    //   console.log("Event sent succesfully")
    // }).catch(err => {
    //   console.error(err)
    // })
  });
}
