const Joi = require("joi");

class CartModel {
  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
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
      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      code: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),
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

  static RawBreakup() {
    return Joi.object({
      mrp_total: Joi.number(),

      gst_charges: Joi.number(),

      you_saved: Joi.number(),

      cod_charge: Joi.number(),

      total: Joi.number(),

      subtotal: Joi.number(),

      discount: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      delivery_charge: Joi.number(),

      coupon: Joi.number(),

      fynd_cash: Joi.number(),
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

  static CartBreakup() {
    return Joi.object({
      coupon: CartModel.CouponBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      effective: Joi.number(),

      selling: Joi.number(),

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

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),

      offer: Joi.any(),

      raw_offer: Joi.any(),
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
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),
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
      buy_rules: Joi.array().items(CartModel.BuyRules()),

      amount: Joi.number(),

      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      ownership: CartModel.Ownership(),

      offer_text: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),
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
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      store: CartModel.BaseInfo(),

      seller: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      extra_meta: Joi.any(),

      size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: CartModel.ActionQuery(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      item_code: Joi.string().allow("").allow(null),

      slug: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      net_quantity: CartModel.NetQuantity(),

      uid: Joi.number(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),
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

      quantity: Joi.number(),

      price_per_unit: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      article: CartModel.ProductArticle(),

      price: CartModel.ProductPriceInfo(),

      discount: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      coupon_message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      message: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      key: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      identifiers: CartModel.CartProductIdentifer().required(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      pan_config: Joi.any(),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      seller_id: Joi.number(),

      pos: Joi.boolean(),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_assignment: Joi.any(),

      store_id: Joi.number(),

      _custom_json: Joi.any(),
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

      success: Joi.boolean(),

      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      quantity: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      _custom_json: Joi.any(),
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
      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      is_applicable: Joi.boolean(),

      coupon_value: Joi.number(),

      title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

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
      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      best: Joi.boolean(),

      auto_applied: Joi.boolean(),

      total: Joi.number(),

      margin: Joi.number(),

      price: CartModel.OfferPrice(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),
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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      is_active: Joi.boolean(),

      user_id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      created_by_user_id: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      area_code_slug: Joi.string().allow(""),
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

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      id: Joi.string().allow(""),

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
      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      discount: Joi.number(),

      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      display_message_en: Joi.string().allow("").allow(null),
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

      promise: CartModel.ShipmentPromise(),

      shipment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      fulfillment_id: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      error: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),
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
      billing_address_id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      staff: CartModel.StaffCheckout(),

      merchant_code: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      billing_address: Joi.any(),

      payment_params: Joi.any().allow(null),

      delivery_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      extra_meta: Joi.any(),

      aggregator: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      meta: Joi.any(),

      payment_auto_confirm: Joi.boolean(),
    });
  }

  static CheckCart() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      cod_charges: Joi.number(),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      error_message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      success: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      uid: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charges: Joi.number(),

      is_valid: Joi.boolean(),

      order_id: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      data: Joi.any(),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
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
      items: Joi.array().items(CartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      uid: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),
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

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      buy_rules: Joi.any(),

      id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      description: Joi.string().allow(""),
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

      effective: Joi.number(),

      offer_price: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      margin: Joi.number(),

      price: CartModel.LadderPrice(),

      max_quantity: Joi.number(),

      min_quantity: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      buy_rules: Joi.any(),

      id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      calculate_on: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      description: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),
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
