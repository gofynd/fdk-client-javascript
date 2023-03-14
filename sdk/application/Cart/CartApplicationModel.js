const Joi = require("joi");

class CartModel {
  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      convenience_fee: Joi.number(),

      gst_charges: Joi.number(),

      subtotal: Joi.number(),

      coupon: Joi.number(),

      total: Joi.number(),

      you_saved: Joi.number(),

      vog: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_cash: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),
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

  static CouponBreakup() {
    return Joi.object({
      title: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      uid: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      coupon: CartModel.CouponBreakup(),
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

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      add_on: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
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
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

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

      extra_meta: Joi.any(),

      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      quantity: Joi.number(),

      price: CartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      parent_item_identifiers: Joi.any(),

      size: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      brand: CartModel.BaseInfo(),

      action: CartModel.ProductAction(),

      name: Joi.string().allow(""),

      net_quantity: CartModel.NetQuantity(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      type: Joi.string().allow(""),

      item_code: Joi.string().allow("").allow(null),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      item_criteria: Joi.any(),

      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: CartModel.FreeGiftItem(),

      quantity: Joi.number(),

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

  static AppliedPromotion() {
    return Joi.object({
      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_group: Joi.string().allow(""),

      ownership: CartModel.Ownership(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      promo_meta: CartModel.PromoMeta(),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      quantity: Joi.number(),

      price: CartModel.ProductPriceInfo(),

      article: CartModel.ProductArticle(),

      discount: Joi.string().allow(""),

      is_set: Joi.boolean(),

      identifiers: CartModel.CartProductIdentifer().required(),

      product: CartModel.CartProduct(),

      availability: CartModel.ProductAvailability(),

      parent_item_identifiers: Joi.any(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      price_per_unit: CartModel.ProductPriceInfo(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      pan_config: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      pan_no: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),

      pos: Joi.boolean(),

      item_size: Joi.string().allow(""),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),

      store_id: Joi.number(),

      seller_id: Joi.number(),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),
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

      cart: CartModel.CartDetailResponse(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),
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

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
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
      title: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      is_applicable: Joi.boolean(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      total_item_count: Joi.number(),

      current: Joi.number(),

      total: Joi.number(),
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
      marked: Joi.number(),

      bulk_effective: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      best: Joi.boolean(),

      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      price: CartModel.OfferPrice(),

      margin: Joi.number(),

      total: Joi.number(),
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
      country: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      area: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      address_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_by_user_id: Joi.string().allow(""),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      area_code_slug: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      meta: Joi.any(),

      geo_location: CartModel.GeoLocation(),

      state: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),
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
      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      coupon_validity: CartModel.CouponValidity(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      fulfillment_id: Joi.number(),

      order_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      promise: CartModel.ShipmentPromise(),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      items: Joi.array().items(CartModel.CartProductInfo()),

      dp_id: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart_id: Joi.number(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      uid: Joi.string().allow(""),

      error: Joi.boolean(),
    });
  }

  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      delivery_address: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      extra_meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      billing_address: Joi.any(),

      ordering_store: Joi.number().allow(null),

      payment_params: Joi.any().allow(null),

      meta: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow(""),

      staff: CartModel.StaffCheckout(),
    });
  }

  static CheckCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      cod_charges: Joi.number(),

      order_id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      user_type: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cod_available: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      error_message: Joi.string().allow(""),

      cart_id: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      cod_message: Joi.string().allow(""),

      success: Joi.boolean(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      delivery_charges: Joi.number(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CheckCart(),

      data: Joi.any(),

      callback_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),
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
      token: Joi.string().allow(""),

      user: Joi.any(),

      source: Joi.any(),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shared_cart_details: CartModel.SharedCartDetails(),

      coupon_text: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

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
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      valid_till: Joi.string().allow(""),

      buy_rules: Joi.any(),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

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

  static LadderPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      offer_price: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      price: CartModel.LadderPrice(),

      min_quantity: Joi.number(),

      margin: Joi.number(),

      max_quantity: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      valid_till: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      buy_rules: Joi.any(),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),
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
