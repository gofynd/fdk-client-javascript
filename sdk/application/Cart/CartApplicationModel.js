const Joi = require("joi");

class CartModel {
  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      convenience_fee: Joi.number(),

      coupon: Joi.number(),

      fynd_cash: Joi.number(),

      gst_charges: Joi.number(),

      you_saved: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      vog: Joi.number(),

      discount: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),

      applicable: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      type: Joi.string().allow(""),

      code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),
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

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
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
      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      store: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      add_on: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
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

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),

      quantity: Joi.number(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),

      offer: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      buy_rules: Joi.array().items(CartModel.BuyRules()),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      ownership: CartModel.Ownership(),

      promo_id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_type: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),

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

  static CartProduct() {
    return Joi.object({
      categories: Joi.array().items(CartModel.CategoryInfo()),

      type: Joi.string().allow(""),

      net_quantity: CartModel.NetQuantity(),

      item_code: Joi.string().allow("").allow(null),

      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      coupon_message: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      parent_item_identifiers: Joi.any(),

      price_per_unit: CartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      availability: CartModel.ProductAvailability(),

      promo_meta: CartModel.PromoMeta(),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      price: CartModel.ProductPriceInfo(),

      product: CartModel.CartProduct(),

      identifiers: CartModel.CartProductIdentifer().required(),

      discount: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      quantity: Joi.number(),
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

  static CartDetailResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      pan_config: Joi.any(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      display: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_id: Joi.number(),

      seller_id: Joi.number(),

      extra_meta: Joi.any(),

      store_id: Joi.number(),

      article_assignment: Joi.any(),

      quantity: Joi.number(),

      pos: Joi.boolean(),
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

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

      item_id: Joi.number(),

      extra_meta: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),
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

  static PageCoupon() {
    return Joi.object({
      has_next: Joi.boolean(),

      total: Joi.number(),

      current: Joi.number(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      expires_on: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      max_discount_value: Joi.number(),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow(""),
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

  static OfferPrice() {
    return Joi.object({
      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      total: Joi.number(),

      margin: Joi.number(),

      price: CartModel.OfferPrice(),

      best: Joi.boolean(),

      auto_applied: Joi.boolean(),

      quantity: Joi.number(),
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
      is_active: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      meta: Joi.any(),

      area_code_slug: Joi.string().allow(""),

      google_map_point: Joi.any(),

      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      email: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),

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
      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

      id: Joi.string().allow(""),
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
      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),
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
      coupon_validity: CartModel.CouponValidity(),

      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      shipments: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      promise: CartModel.ShipmentPromise(),

      dp_options: Joi.any().allow(null),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      error: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart_id: Joi.number(),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),
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

      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      ordering_store: Joi.number().allow(null),

      payment_params: Joi.any().allow(null),

      address_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      payment_mode: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      meta: Joi.any(),

      staff: CartModel.StaffCheckout(),

      payment_auto_confirm: Joi.boolean(),

      payment_identifier: Joi.string().allow("").allow(null),

      delivery_address: Joi.any(),

      extra_meta: Joi.any(),

      aggregator: Joi.string().allow(""),

      billing_address: Joi.any(),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      cod_charges: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      success: Joi.boolean(),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      gstin: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      order_id: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart_id: Joi.number(),

      id: Joi.string().allow(""),

      delivery_charges: Joi.number(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      cart: CartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),

      data: Joi.any(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

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
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      meta: Joi.any(),

      user: Joi.any(),

      source: Joi.any(),

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),

      shared_cart_details: CartModel.SharedCartDetails(),

      delivery_promise: CartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart_id: Joi.number(),

      id: Joi.string().allow(""),
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
      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      description: Joi.string().allow(""),

      buy_rules: Joi.any(),

      valid_till: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),
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

  static LadderPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      offer_price: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      margin: Joi.number(),

      price: CartModel.LadderPrice(),

      min_quantity: Joi.number(),

      max_quantity: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      description: Joi.string().allow(""),

      buy_rules: Joi.any(),

      valid_till: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      promotion_group: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),
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
