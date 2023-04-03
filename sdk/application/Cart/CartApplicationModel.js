const Joi = require("joi");

class CartModel {
  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      base: CartModel.BasePrice(),

      converted: CartModel.BasePrice(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductArticle() {
    return Joi.object({
      type: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      store: CartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      selling: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),

      raw_offer: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      url: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      action: CartModel.ProductAction(),

      type: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      images: Joi.array().items(CartModel.ProductImage()),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      article: CartModel.ProductArticle(),

      promo_meta: CartModel.PromoMeta(),

      parent_item_identifiers: Joi.any(),

      price: CartModel.ProductPriceInfo(),

      discount: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      identifiers: CartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),

      availability: CartModel.ProductAvailability(),

      is_set: Joi.boolean(),

      bulk_offer: Joi.any(),

      product: CartModel.CartProduct(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      type: Joi.string().allow(""),

      code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      vog: Joi.number(),

      cod_charge: Joi.number(),

      gst_charges: Joi.number(),

      fynd_cash: Joi.number(),

      delivery_charge: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      subtotal: Joi.number(),

      total: Joi.number(),

      mrp_total: Joi.number(),

      you_saved: Joi.number(),

      coupon: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: CartModel.CouponBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),
    });
  }

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
      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      pos: Joi.boolean(),

      display: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      seller_id: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      article_assignment: Joi.any(),

      quantity: Joi.number(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),

      new_cart: Joi.boolean(),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      partial: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      item_index: Joi.number(),

      quantity: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_size: Joi.string().allow(""),
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
      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      max_discount_value: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      current: Joi.number(),

      has_next: Joi.boolean(),

      total: Joi.number(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static GetCouponResponse() {
    return Joi.object({
      available_coupon_list: Joi.array().items(CartModel.Coupon()),

      page: CartModel.PageCoupon(),
    });
  }

  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),
    });
  }

  static OfferPrice() {
    return Joi.object({
      bulk_effective: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      price: CartModel.OfferPrice(),

      best: Joi.boolean(),

      quantity: Joi.number(),

      auto_applied: Joi.boolean(),

      total: Joi.number(),

      margin: Joi.number(),
    });
  }

  static OfferSeller() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static BulkPriceOffer() {
    return Joi.object({
      offers: Joi.array().items(CartModel.OfferItem()),

      seller: CartModel.OfferSeller(),
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
      state: Joi.string().allow(""),

      is_active: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      area: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      city: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      google_map_point: Joi.any(),

      geo_location: CartModel.GeoLocation(),

      email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      meta: Joi.any(),

      country_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(CartModel.Address()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_updated: Joi.boolean(),

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
    });
  }

  static DeleteAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      is_deleted: Joi.boolean(),
    });
  }

  static SelectCartAddressRequest() {
    return Joi.object({
      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      valid: Joi.boolean(),

      title: Joi.string().allow(""),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      success: Joi.boolean().required(),

      coupon_validity: CartModel.CouponValidity(),

      message: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      order_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      box_type: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),

      fulfillment_id: Joi.number(),

      shipments: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      dp_id: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      error: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      uid: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),
    });
  }

  static CartCheckoutCustomMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      payment_mode: Joi.string().allow("").required(),

      meta: Joi.any(),

      extra_meta: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      billing_address: Joi.any(),

      ordering_store: Joi.number().allow(null),

      staff: CartModel.StaffCheckout(),

      delivery_address: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      id: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      cod_charges: Joi.number(),

      uid: Joi.string().allow(""),

      success: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      cart_id: Joi.number(),

      store_code: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      gstin: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      error_message: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      user_type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cod_message: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      cart: CartModel.CheckCart(),

      app_intercept_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      success: Joi.boolean(),

      order_id: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      delivery_slots: Joi.any(),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),
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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),

      user: Joi.any(),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.number(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      shared_cart_details: CartModel.SharedCartDetails(),

      uid: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      cart: CartModel.SharedCart(),

      error: Joi.string().allow(""),
    });
  }

  static FreeGiftItems() {
    return Joi.object({
      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      buy_rules: Joi.any(),

      valid_till: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      promotion_group: Joi.string().allow(""),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),
    });
  }

  static PromotionOffersResponse() {
    return Joi.object({
      available_promotions: Joi.array().items(CartModel.PromotionOffer()),
    });
  }

  static OperationErrorResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static CurrencyInfo() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static LadderPrice() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      offer_price: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      min_quantity: Joi.number(),

      type: Joi.string().allow(""),

      price: CartModel.LadderPrice(),

      max_quantity: Joi.number(),

      margin: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      buy_rules: Joi.any(),

      valid_till: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      promotion_group: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),
    });
  }

  static LadderPriceOffers() {
    return Joi.object({
      currency: CartModel.CurrencyInfo(),

      available_offers: Joi.array().items(CartModel.LadderPriceOffer()),
    });
  }
}
module.exports = CartModel;
