const Joi = require("joi");

class CartModel {
  static PromiseTimestamp() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      max: Joi.string().allow(""),

      min: Joi.string().allow(""),
    });
  }

  static ShipmentPromise() {
    return Joi.object({
      timestamp: CartModel.PromiseTimestamp(),

      formatted: CartModel.PromiseFormatted(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),

      mrp_total: Joi.number(),

      coupon: Joi.number(),

      delivery_charge: Joi.number(),

      convenience_fee: Joi.number(),

      total: Joi.number(),

      you_saved: Joi.number(),

      discount: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      code: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      query: CartModel.ActionQuery(),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CartProduct() {
    return Joi.object({
      categories: Joi.array().items(CartModel.CategoryInfo()),

      name: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      action: CartModel.ProductAction(),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      converted: CartModel.BasePrice(),

      base: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      store: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: CartModel.BaseInfo(),

      size: Joi.string().allow(""),

      type: Joi.string().allow(""),

      extra_meta: Joi.any(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: CartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promo_id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      product: CartModel.CartProduct(),

      coupon_message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      article: CartModel.ProductArticle(),

      availability: CartModel.ProductAvailability(),

      is_set: Joi.boolean(),

      price: CartModel.ProductPriceInfo(),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      price_per_unit: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      key: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static AddProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      article_assignment: Joi.any(),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      pos: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_id: Joi.string().allow(""),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),

      store_id: Joi.number(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      new_cart: Joi.boolean(),

      items: Joi.array().items(CartModel.AddProductCart()),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      extra_meta: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),
    });
  }

  static UpdateCartRequest() {
    return Joi.object({
      operation: Joi.string().allow("").required(),

      items: Joi.array().items(CartModel.UpdateProductCart()),
    });
  }

  static UpdateCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_next: Joi.boolean(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      total_item_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),
    });
  }

  static GetCouponResponse() {
    return Joi.object({
      page: CartModel.PageCoupon(),

      available_coupon_list: Joi.array().items(CartModel.Coupon()),
    });
  }

  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),
    });
  }

  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static OfferPrice() {
    return Joi.object({
      effective: Joi.number(),

      bulk_effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      best: Joi.boolean(),

      margin: Joi.number(),

      price: CartModel.OfferPrice(),

      quantity: Joi.number(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      auto_applied: Joi.boolean(),
    });
  }

  static BulkPriceOffer() {
    return Joi.object({
      seller: CartModel.OfferSeller(),

      offers: Joi.array().items(CartModel.OfferItem()),
    });
  }

  static BulkPriceResponse() {
    return Joi.object({
      data: Joi.array().items(CartModel.BulkPriceOffer()),
    });
  }

  static RewardPointRequest() {
    return Joi.object({
      points: Joi.boolean().required(),
    });
  }

  static GeoLocation() {
    return Joi.object({
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      name: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      area_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      _custom_json: Joi.any(),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      is_active: Joi.boolean(),

      is_default_address: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      google_map_point: Joi.any(),

      user_id: Joi.string().allow(""),

      meta: Joi.any(),

      id: Joi.string().allow(""),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(CartModel.Address()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

      is_updated: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static DeleteAddressResponse() {
    return Joi.object({
      is_deleted: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static SelectCartAddressRequest() {
    return Joi.object({
      cart_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      discount: Joi.number(),

      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      coupon_validity: CartModel.CouponValidity(),

      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      dp_options: Joi.any().allow(null),

      shipment_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      order_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      dp_id: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      error: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      restrict_checkout: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutCustomMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      staff: CartModel.StaffCheckout(),

      payment_params: Joi.any().allow(null),

      callback_url: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      payment_mode: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),

      delivery_address: Joi.any(),

      ordering_store: Joi.number().allow(null),

      extra_meta: Joi.any(),

      aggregator: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      cod_charges: Joi.number(),

      uid: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      restrict_checkout: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_charges: Joi.number(),

      cod_message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      error_message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      success: Joi.boolean(),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      data: Joi.any(),

      callback_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CheckCart(),

      order_id: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      delivery_slots: Joi.any(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static CartMetaResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartMetaMissingResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetShareCartLinkRequest() {
    return Joi.object({
      meta: Joi.any(),

      id: Joi.string().allow(""),
    });
  }

  static GetShareCartLinkResponse() {
    return Joi.object({
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      token: Joi.string().allow(""),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      uid: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      cart: CartModel.SharedCart(),
    });
  }

  static FreeGiftItems() {
    return Joi.object({
      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      discount_rules: Joi.array().items(Joi.any()),

      promotion_group: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.any(),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),
    });
  }

  static PromotionOffersResponse() {
    return Joi.object({
      available_promotions: Joi.array().items(CartModel.PromotionOffer()),
    });
  }

  static OperationErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static LadderPrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      offer_price: Joi.number(),

      marked: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      max_quantity: Joi.number(),

      margin: Joi.number(),

      price: CartModel.LadderPrice(),

      min_quantity: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      discount_rules: Joi.array().items(Joi.any()),

      promotion_group: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.any(),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      calculate_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),
    });
  }

  static CurrencyInfo() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static LadderPriceOffers() {
    return Joi.object({
      available_offers: Joi.array().items(CartModel.LadderPriceOffer()),

      currency: CartModel.CurrencyInfo(),
    });
  }
}
module.exports = CartModel;
