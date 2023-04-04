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
      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),
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

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      uid: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      message: Joi.string().allow(""),

      coupon_value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      you_saved: Joi.number(),

      subtotal: Joi.number(),

      vog: Joi.number(),

      delivery_charge: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      cod_charge: Joi.number(),

      gst_charges: Joi.number(),

      total: Joi.number(),

      mrp_total: Joi.number(),

      discount: Joi.number(),

      fynd_cash: Joi.number(),
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
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
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

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      item_code: Joi.string().allow("").allow(null),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      net_quantity: CartModel.NetQuantity(),

      action: CartModel.ProductAction(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      add_on: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      base: CartModel.BasePrice(),

      converted: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      store: CartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      seller: CartModel.BaseInfo(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      extra_meta: Joi.any(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      raw_offer: Joi.any(),

      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      free_gift_item_details: CartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
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
      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      ownership: CartModel.Ownership(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      coupon_message: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      is_set: Joi.boolean(),

      product: CartModel.CartProduct(),

      message: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      discount: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      article: CartModel.ProductArticle(),

      quantity: Joi.number(),

      price_per_unit: CartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      bulk_offer: Joi.any(),

      key: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      breakup_values: CartModel.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      pan_no: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      pan_config: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      article_assignment: Joi.any(),

      display: Joi.string().allow(""),

      seller_id: Joi.number(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      pos: Joi.boolean(),

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

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_index: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),
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

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),
    });
  }

  static DeleteCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

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
      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_previous: Joi.boolean(),

      total: Joi.number(),

      current: Joi.number(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),
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

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      bulk_effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      margin: Joi.number(),

      auto_applied: Joi.boolean(),

      total: Joi.number(),

      price: CartModel.OfferPrice(),

      best: Joi.boolean(),

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
      created_by_user_id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      country_iso_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      meta: Joi.any(),

      user_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      phone: Joi.string().allow(""),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(CartModel.Address()),

      pii_masking: Joi.boolean(),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),

      success: Joi.boolean(),

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
      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      discount: Joi.number(),

      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),
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
      dp_options: Joi.any().allow(null),

      fulfillment_id: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shipment_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      shipments: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      error: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      buy_now: Joi.boolean(),

      cart_id: Joi.number(),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),
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
      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      delivery_address: Joi.any(),

      merchant_code: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      address_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      billing_address: Joi.any(),

      meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      extra_meta: Joi.any(),

      payment_params: Joi.any().allow(null),

      staff: CartModel.StaffCheckout(),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      cod_available: Joi.boolean(),

      order_id: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      error_message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      success: Joi.boolean(),

      delivery_charges: Joi.number(),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charge_order_value: Joi.number(),

      coupon_text: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      uid: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cod_charges: Joi.number(),

      message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      order_id: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      app_intercept_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

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
      source: Joi.any(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      user: Joi.any(),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      shared_cart_details: CartModel.SharedCartDetails(),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.number(),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      uid: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
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

      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      description: Joi.string().allow(""),

      buy_rules: Joi.any(),

      id: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

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

      currency_code: Joi.string().allow(""),

      offer_price: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      margin: Joi.number(),

      min_quantity: Joi.number(),

      price: CartModel.LadderPrice(),

      max_quantity: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      calculate_on: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      description: Joi.string().allow(""),

      buy_rules: Joi.any(),

      id: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      valid_till: Joi.string().allow(""),
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
