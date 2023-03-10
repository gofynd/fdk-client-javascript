const Joi = require("joi");

class CartModel {
  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      code: Joi.string().allow(""),

      value: Joi.number(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      gst_charges: Joi.number(),

      fynd_cash: Joi.number(),

      coupon: Joi.number(),

      subtotal: Joi.number(),

      vog: Joi.number(),

      mrp_total: Joi.number(),

      total: Joi.number(),

      you_saved: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      cod_charge: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: CartModel.LoyaltyPoints(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),

      raw: CartModel.RawBreakup(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static PromiseTimestamp() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static ShipmentPromise() {
    return Joi.object({
      formatted: CartModel.PromiseFormatted(),

      timestamp: CartModel.PromiseTimestamp(),
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
      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      store: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),
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
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: CartModel.ActionQuery(),
    });
  }

  static CartProduct() {
    return Joi.object({
      categories: Joi.array().items(CartModel.CategoryInfo()),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      type: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      action: CartModel.ProductAction(),

      uid: Joi.number(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),

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
      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      amount: Joi.number(),

      offer_text: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
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

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      message: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      key: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      bulk_offer: Joi.any(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      price_per_unit: CartModel.ProductPriceInfo(),

      price: CartModel.ProductPriceInfo(),

      identifiers: CartModel.CartProductIdentifer().required(),

      availability: CartModel.ProductAvailability(),

      parent_item_identifiers: Joi.any(),

      discount: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      quantity: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      seller_id: Joi.number(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      item_id: Joi.number(),

      store_id: Joi.number(),

      display: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      article_assignment: Joi.any(),
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
      message: Joi.string().allow(""),

      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      article_id: Joi.string().allow(""),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),

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
      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      title: Joi.string().allow(""),

      coupon_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      is_applicable: Joi.boolean(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      current: Joi.number(),

      total: Joi.number(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),

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

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      margin: Joi.number(),

      best: Joi.boolean(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      price: CartModel.OfferPrice(),

      auto_applied: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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

      address_type: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_active: Joi.boolean(),

      id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      landmark: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      meta: Joi.any(),

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
      is_default_address: Joi.boolean(),

      is_updated: Joi.boolean(),

      success: Joi.boolean(),

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
      payment_mode: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      display_message_en: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      discount: Joi.number(),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      message: Joi.string().allow(""),

      coupon_validity: CartModel.CouponValidity(),

      success: Joi.boolean().required(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      shipments: Joi.number(),

      promise: CartModel.ShipmentPromise(),

      fulfillment_id: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      order_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      dp_id: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      error: Joi.boolean(),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      breakup_values: CartModel.CartBreakup(),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),
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
      payment_mode: Joi.string().allow("").required(),

      extra_meta: Joi.any(),

      staff: CartModel.StaffCheckout(),

      id: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      meta: Joi.any(),

      aggregator: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      ordering_store: Joi.number().allow(null),

      billing_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      delivery_address: Joi.any(),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      delivery_charges: Joi.number(),

      restrict_checkout: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      breakup_values: CartModel.CartBreakup(),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      cod_charges: Joi.number(),

      message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      checkout_mode: Joi.string().allow(""),

      success: Joi.boolean(),

      uid: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      order_id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      data: Joi.any(),

      callback_url: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_slots: Joi.any(),

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
      created_on: Joi.string().allow(""),

      user: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      checkout_mode: Joi.string().allow(""),

      uid: Joi.string().allow(""),
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
      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.any(),

      discount_rules: Joi.array().items(Joi.any()),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),
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
      currency_symbol: Joi.string().allow(""),

      offer_price: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      margin: Joi.number(),

      min_quantity: Joi.number(),

      type: Joi.string().allow(""),

      price: CartModel.LadderPrice(),

      max_quantity: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.any(),

      discount_rules: Joi.array().items(Joi.any()),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      description: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),
    });
  }

  static CurrencyInfo() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
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
