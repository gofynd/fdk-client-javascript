const Joi = require("joi");

class CartModel {
  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      total: Joi.number(),

      is_applied: Joi.boolean(),

      applicable: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      fynd_cash: Joi.number(),

      cod_charge: Joi.number(),

      subtotal: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      convenience_fee: Joi.number(),

      mrp_total: Joi.number(),

      you_saved: Joi.number(),

      coupon: Joi.number(),

      vog: Joi.number(),

      gst_charges: Joi.number(),

      discount: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      title: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      uid: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      type: Joi.string().allow(""),

      code: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      value: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: CartModel.LoyaltyPoints(),

      raw: CartModel.RawBreakup(),

      coupon: CartModel.CouponBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),
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
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
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

      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: CartModel.FreeGiftItem(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      ownership: CartModel.Ownership(),

      promotion_group: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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

      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      categories: Joi.array().items(CartModel.CategoryInfo()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      type: Joi.string().allow(""),

      net_quantity: CartModel.NetQuantity(),

      images: Joi.array().items(CartModel.ProductImage()),

      brand: CartModel.BaseInfo(),

      item_code: Joi.string().allow("").allow(null),
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
      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      seller: CartModel.BaseInfo(),

      store: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      price: CartModel.ArticlePriceInfo(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      key: Joi.string().allow(""),

      is_set: Joi.boolean(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      coupon_message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      price_per_unit: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      discount: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      availability: CartModel.ProductAvailability(),

      product: CartModel.CartProduct(),

      identifiers: CartModel.CartProductIdentifer().required(),

      message: Joi.string().allow(""),

      article: CartModel.ProductArticle(),
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

  static CartDetailResponse() {
    return Joi.object({
      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      pan_config: Joi.any(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      article_assignment: Joi.any(),

      store_id: Joi.number(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      display: Joi.string().allow(""),

      seller_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      pos: Joi.boolean(),

      _custom_json: Joi.any(),

      item_id: Joi.number(),
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
      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

      _custom_json: Joi.any(),

      item_id: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),
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

      message: Joi.string().allow(""),

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

  static PageCoupon() {
    return Joi.object({
      has_next: Joi.boolean(),

      total: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      is_applicable: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static OfferPrice() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      margin: Joi.number(),

      quantity: Joi.number(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      auto_applied: Joi.boolean(),

      price: CartModel.OfferPrice(),

      best: Joi.boolean(),
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
      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      email: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      meta: Joi.any(),

      phone: Joi.string().allow(""),

      address: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      is_active: Joi.boolean(),

      city: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      country_phone_code: Joi.string().allow(""),

      area: Joi.string().allow(""),
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

      id: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),

      is_updated: Joi.boolean(),

      success: Joi.boolean(),
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

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),
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
      dp_id: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      dp_options: Joi.any().allow(null),

      promise: CartModel.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shipments: Joi.number(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      cart_id: Joi.number(),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      error: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      delivery_address: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      staff: CartModel.StaffCheckout(),

      address_id: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      billing_address_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      merchant_code: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      meta: Joi.any(),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      billing_address: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      callback_url: Joi.string().allow("").allow(null),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      uid: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      cart_id: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      user_type: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      cod_charges: Joi.number(),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      success: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      gstin: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      delivery_charges: Joi.number(),

      currency: CartModel.CartCurrency(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      order_id: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),
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

      meta: Joi.any(),

      user: Joi.any(),

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      shared_cart_details: CartModel.SharedCartDetails(),

      delivery_promise: CartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),
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
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      discount_rules: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.any(),

      description: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
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

      currency_code: Joi.string().allow(""),

      offer_price: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      margin: Joi.number(),

      min_quantity: Joi.number(),

      type: Joi.string().allow(""),

      max_quantity: Joi.number(),

      price: CartModel.LadderPrice(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      discount_rules: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      offer_text: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      buy_rules: Joi.any(),

      description: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),
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
