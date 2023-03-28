const Joi = require("joi");

class CartModel {
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

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
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

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

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
      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      uid: Joi.number(),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      brand: CartModel.BaseInfo(),

      item_code: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      net_quantity: CartModel.NetQuantity(),

      images: Joi.array().items(CartModel.ProductImage()),

      action: CartModel.ProductAction(),

      name: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
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
      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),
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

  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      ownership: CartModel.Ownership(),

      amount: Joi.number(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

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
      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),
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

      quantity: Joi.number(),

      bulk_offer: Joi.any(),

      availability: CartModel.ProductAvailability(),

      product: CartModel.CartProduct(),

      identifiers: CartModel.CartProductIdentifer().required(),

      price_per_unit: CartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      discount: Joi.string().allow(""),

      is_set: Joi.boolean(),

      key: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      article: CartModel.ProductArticle(),

      promo_meta: CartModel.PromoMeta(),

      coupon_message: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      fynd_cash: Joi.number(),

      cod_charge: Joi.number(),

      coupon: Joi.number(),

      gst_charges: Joi.number(),

      total: Joi.number(),

      discount: Joi.number(),

      vog: Joi.number(),

      delivery_charge: Joi.number(),

      you_saved: Joi.number(),

      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      mrp_total: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      total: Joi.number(),

      applicable: Joi.number(),

      is_applied: Joi.boolean(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      coupon_value: Joi.number(),

      is_applied: Joi.boolean(),

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

  static CartDetailResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      pan_config: Joi.any(),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      _custom_json: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      article_assignment: Joi.any(),

      pos: Joi.boolean(),

      store_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),
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

      cart: CartModel.CartDetailResponse(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      _custom_json: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),
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
      has_previous: Joi.boolean(),

      total: Joi.number(),

      total_item_count: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      sub_title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      coupon_value: Joi.number(),

      is_applicable: Joi.boolean(),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),
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

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      quantity: Joi.number(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      price: CartModel.OfferPrice(),

      margin: Joi.number(),

      best: Joi.boolean(),

      auto_applied: Joi.boolean(),
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
      country_code: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      meta: Joi.any(),

      landmark: Joi.string().allow(""),

      id: Joi.string().allow(""),

      area: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      country_phone_code: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      email: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      checkout_mode: Joi.string().allow(""),

      name: Joi.string().allow(""),

      google_map_point: Joi.any(),

      geo_location: CartModel.GeoLocation(),
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
      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

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
      payment_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      discount: Joi.number(),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),
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
      fulfillment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      dp_options: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      fulfillment_id: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_promise: CartModel.ShipmentPromise(),

      error: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      cart_id: Joi.number(),

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
      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      extra_meta: Joi.any(),

      delivery_address: Joi.any(),

      billing_address: Joi.any(),

      staff: CartModel.StaffCheckout(),

      payment_identifier: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      merchant_code: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),
    });
  }

  static CheckCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      user_type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      success: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      buy_now: Joi.boolean(),

      order_id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      store_emps: Joi.array().items(Joi.any()),

      items: Joi.array().items(CartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      cod_charges: Joi.number(),

      breakup_values: CartModel.CartBreakup(),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      error_message: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      success: Joi.boolean(),

      cart: CartModel.CheckCart(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      shared_cart_details: CartModel.SharedCartDetails(),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),
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

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      description: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      buy_rules: Joi.any(),

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

      currency_code: Joi.string().allow(""),

      offer_price: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      min_quantity: Joi.number(),

      type: Joi.string().allow(""),

      price: CartModel.LadderPrice(),

      margin: Joi.number(),

      max_quantity: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      description: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      buy_rules: Joi.any(),

      discount_rules: Joi.array().items(Joi.any()),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      id: Joi.string().allow(""),
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
