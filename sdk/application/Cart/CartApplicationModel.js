const Joi = require("joi");

class CartModel {
  static PromiseFormatted() {
    return Joi.object({
      max: Joi.string().allow(""),

      min: Joi.string().allow(""),
    });
  }

  static PromiseTimestamp() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static ShipmentPromise() {
    return Joi.object({
      formatted: CartModel.PromiseFormatted(),

      timestamp: CartModel.PromiseTimestamp(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      total: Joi.number(),

      applicable: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      type: Joi.string().allow(""),

      code: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      discount: Joi.number(),

      coupon: Joi.number(),

      mrp_total: Joi.number(),

      fynd_cash: Joi.number(),

      cod_charge: Joi.number(),

      vog: Joi.number(),

      subtotal: Joi.number(),

      total: Joi.number(),

      you_saved: Joi.number(),

      convenience_fee: Joi.number(),

      delivery_charge: Joi.number(),

      gst_charges: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(CartModel.DisplayBreakup()),

      loyalty_points: CartModel.LoyaltyPoints(),

      coupon: CartModel.CouponBreakup(),

      raw: CartModel.RawBreakup(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

      selling: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
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

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      brand: CartModel.BaseInfo(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_group: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      offer_text: Joi.string().allow(""),

      amount: Joi.number(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
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
      store: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      parent_item_identifiers: Joi.any(),

      price: CartModel.ArticlePriceInfo(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      discount: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      product: CartModel.CartProduct(),

      identifiers: CartModel.CartProductIdentifer().required(),

      promo_meta: CartModel.PromoMeta(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      quantity: Joi.number(),

      article: CartModel.ProductArticle(),

      is_set: Joi.boolean(),

      bulk_offer: Joi.any(),

      parent_item_identifiers: Joi.any(),

      price_per_unit: CartModel.ProductPriceInfo(),

      key: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static AddProductCart() {
    return Joi.object({
      display: Joi.string().allow(""),

      pos: Joi.boolean(),

      store_id: Joi.number(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      article_assignment: Joi.any(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      parent_item_identifiers: Joi.any(),
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
      partial: Joi.boolean(),

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      identifiers: CartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),
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
      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      coupon_value: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      current: Joi.number(),
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
      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      marked: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      best: Joi.boolean(),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      total: Joi.number(),

      margin: Joi.number(),

      auto_applied: Joi.boolean(),

      price: CartModel.OfferPrice(),
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
      id: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      meta: Joi.any(),

      geo_location: CartModel.GeoLocation(),

      is_active: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
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
      is_updated: Joi.boolean(),

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

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
      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      aggregator_name: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      coupon_validity: CartModel.CouponValidity(),

      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      fulfillment_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      fulfillment_id: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      dp_options: Joi.any().allow(null),

      order_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      error: Joi.boolean(),

      currency: CartModel.CartCurrency(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
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
      merchant_code: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow("").allow(null),

      ordering_store: Joi.number().allow(null),

      payment_params: Joi.any().allow(null),

      meta: Joi.any(),

      extra_meta: Joi.any(),

      delivery_address: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      staff: CartModel.StaffCheckout(),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      billing_address: Joi.any(),

      aggregator: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static CheckCart() {
    return Joi.object({
      id: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      order_id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      cod_message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_charges: Joi.number(),

      uid: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cod_available: Joi.boolean(),

      success: Joi.boolean(),

      error_message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      cod_charges: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      store_code: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      app_intercept_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      order_id: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      data: Joi.any(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      delivery_slots: Joi.any(),

      checkout_mode: Joi.string().allow(""),

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
      source: Joi.any(),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

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

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      id: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      valid_till: Joi.string().allow(""),

      description: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.any(),
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
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static LadderPrice() {
    return Joi.object({
      offer_price: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      min_quantity: Joi.number(),

      margin: Joi.number(),

      max_quantity: Joi.number(),

      price: CartModel.LadderPrice(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      id: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      calculate_on: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      description: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      promotion_group: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.any(),
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
