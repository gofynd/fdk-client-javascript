const Joi = require("joi");

class CartModel {
  static RawBreakup() {
    return Joi.object({
      convenience_fee: Joi.number(),

      coupon: Joi.number(),

      total: Joi.number(),

      cod_charge: Joi.number(),

      subtotal: Joi.number(),

      mrp_total: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_cash: Joi.number(),

      vog: Joi.number(),

      gst_charges: Joi.number(),

      you_saved: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      description: Joi.string().allow(""),

      applicable: Joi.number(),

      is_applied: Joi.boolean(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_applied: Joi.boolean(),
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

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
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
      product_group_tags: Joi.array().items(Joi.string().allow("")),

      extra_meta: Joi.any(),

      seller: CartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      store: CartModel.BaseInfo(),

      size: Joi.string().allow(""),

      type: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      quantity: Joi.number(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      marked: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
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
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
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

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      brand: CartModel.BaseInfo(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      action: CartModel.ProductAction(),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),

      raw_offer: Joi.any(),

      offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: CartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      amount: Joi.number(),

      article_quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      bulk_offer: Joi.any(),

      promo_meta: CartModel.PromoMeta(),

      message: Joi.string().allow(""),

      key: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      coupon_message: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      parent_item_identifiers: Joi.any(),

      discount: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      price_per_unit: CartModel.ProductPriceInfo(),

      price: CartModel.ProductPriceInfo(),

      product: CartModel.CartProduct(),

      quantity: Joi.number(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      is_set: Joi.boolean(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static PromiseTimestamp() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
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

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      pos: Joi.boolean(),

      item_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      extra_meta: Joi.any(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      display: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      store_id: Joi.number(),

      article_assignment: Joi.any(),

      quantity: Joi.number(),
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

      message: Joi.string().allow(""),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static UpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.UpdateProductCart()),

      operation: Joi.string().allow("").required(),
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
      max_discount_value: Joi.number(),

      title: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      total_item_count: Joi.number(),
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

  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static OfferPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

      bulk_effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      margin: Joi.number(),

      total: Joi.number(),

      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),

      best: Joi.boolean(),

      price: CartModel.OfferPrice(),

      quantity: Joi.number(),
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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      city: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      is_default_address: Joi.boolean(),

      email: Joi.string().allow(""),

      meta: Joi.any(),

      _custom_json: Joi.any(),

      area_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_active: Joi.boolean(),

      country: Joi.string().allow(""),

      google_map_point: Joi.any(),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(CartModel.Address()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      is_updated: Joi.boolean(),
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
      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),

      coupon_validity: CartModel.CouponValidity(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      dp_options: Joi.any().allow(null),

      order_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      fulfillment_id: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      error: Joi.boolean(),

      last_modified: Joi.string().allow(""),
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
      _id: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      billing_address: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      merchant_code: Joi.string().allow(""),

      extra_meta: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow("").allow(null),

      ordering_store: Joi.number().allow(null),

      meta: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),

      delivery_address: Joi.any(),

      address_id: Joi.string().allow(""),

      staff: CartModel.StaffCheckout(),
    });
  }

  static CheckCart() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      order_id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charge_order_value: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      breakup_values: CartModel.CartBreakup(),

      user_type: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      cod_charges: Joi.number(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      cart: CartModel.CheckCart(),

      message: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      order_id: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),

      delivery_slots: Joi.any(),

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
      id: Joi.string().allow(""),

      meta: Joi.any(),
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
      user: Joi.any(),

      token: Joi.string().allow(""),

      meta: Joi.any(),

      source: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      shared_cart_details: CartModel.SharedCartDetails(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),
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
      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      valid_till: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.any(),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      offer_text: Joi.string().allow(""),

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
      currency_symbol: Joi.string().allow(""),

      offer_price: Joi.number(),

      marked: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      max_quantity: Joi.number(),

      margin: Joi.number(),

      type: Joi.string().allow(""),

      min_quantity: Joi.number(),

      price: CartModel.LadderPrice(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      valid_till: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.any(),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      calculate_on: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),
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
