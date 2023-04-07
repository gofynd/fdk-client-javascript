const Joi = require("joi");

class CartModel {
  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),
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

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      add_on: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      converted: CartModel.BasePrice(),

      base: CartModel.BasePrice(),
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
      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      price: CartModel.ArticlePriceInfo(),

      extra_meta: Joi.any(),

      store: CartModel.BaseInfo(),

      seller: CartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),
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

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      action: CartModel.ProductAction(),

      type: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      net_quantity: CartModel.NetQuantity(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      item_code: Joi.string().allow("").allow(null),

      brand: CartModel.BaseInfo(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),

      offer: Joi.any(),

      raw_offer: Joi.any(),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: CartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      offer_text: Joi.string().allow(""),

      amount: Joi.number(),

      ownership: CartModel.Ownership(),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_group: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      price_per_unit: CartModel.ProductPriceInfo(),

      availability: CartModel.ProductAvailability(),

      bulk_offer: Joi.any(),

      key: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      is_set: Joi.boolean(),

      coupon_message: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      product: CartModel.CartProduct(),

      price: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      message: Joi.string().allow(""),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      total: Joi.number(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      sub_title: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),

      value: Joi.number(),

      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),
    });
  }

  static RawBreakup() {
    return Joi.object({
      you_saved: Joi.number(),

      convenience_fee: Joi.number(),

      fynd_cash: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),

      discount: Joi.number(),

      subtotal: Joi.number(),

      cod_charge: Joi.number(),

      delivery_charge: Joi.number(),

      mrp_total: Joi.number(),
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

  static CartDetailResponse() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      pan_no: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pan_config: Joi.any(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),

      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      quantity: Joi.number(),

      pos: Joi.boolean(),

      store_id: Joi.number(),

      article_id: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      display: Joi.string().allow(""),

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

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),

      item_size: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      item_index: Joi.number(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),
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
      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static DeleteCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),

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

      title: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      is_applicable: Joi.boolean(),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),
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

  static OfferSeller() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static OfferPrice() {
    return Joi.object({
      bulk_effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      auto_applied: Joi.boolean(),

      total: Joi.number(),

      best: Joi.boolean(),

      quantity: Joi.number(),

      margin: Joi.number(),

      price: CartModel.OfferPrice(),
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
      city: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      state: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      address: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      area_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      geo_location: CartModel.GeoLocation(),

      checkout_mode: Joi.string().allow(""),
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
      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

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
      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),

      discount: Joi.number(),
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
      fulfillment_id: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      currency: CartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      error: Joi.boolean(),

      comment: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

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
      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      callback_url: Joi.string().allow("").allow(null),

      staff: CartModel.StaffCheckout(),

      payment_identifier: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      billing_address: Joi.any(),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      extra_meta: Joi.any(),

      delivery_address: Joi.any(),

      payment_params: Joi.any().allow(null),

      ordering_store: Joi.number().allow(null),

      address_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      cod_charges: Joi.number(),

      success: Joi.boolean(),

      cod_available: Joi.boolean(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      coupon_text: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      breakup_values: CartModel.CartBreakup(),

      user_type: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cod_message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      cart_id: Joi.number(),

      store_code: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      cart: CartModel.CheckCart(),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      data: Joi.any(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      checkout_mode: Joi.string().allow(""),

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
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      source: Joi.any(),

      user: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      shared_cart_details: CartModel.SharedCartDetails(),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
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
      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      description: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      buy_rules: Joi.any(),

      valid_till: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      offer_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),
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
      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      offer_price: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      max_quantity: Joi.number(),

      min_quantity: Joi.number(),

      margin: Joi.number(),

      price: CartModel.LadderPrice(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      description: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      buy_rules: Joi.any(),

      valid_till: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      offer_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),
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
