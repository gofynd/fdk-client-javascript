const Joi = require("joi");

class CartModel {
  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      applicable: Joi.number(),

      total: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      uid: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      max_discount_value: Joi.number(),

      type: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),
    });
  }

  static RawBreakup() {
    return Joi.object({
      total: Joi.number(),

      coupon: Joi.number(),

      mrp_total: Joi.number(),

      fynd_cash: Joi.number(),

      vog: Joi.number(),

      convenience_fee: Joi.number(),

      you_saved: Joi.number(),

      discount: Joi.number(),

      subtotal: Joi.number(),

      gst_charges: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charge: Joi.number(),
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

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),
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
      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

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

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
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

  static AppliedPromotion() {
    return Joi.object({
      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      amount: Joi.number(),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      ownership: CartModel.Ownership(),

      promotion_group: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      article_quantity: Joi.number(),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      base: CartModel.BasePrice(),

      converted: CartModel.BasePrice(),
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
      price: CartModel.ArticlePriceInfo(),

      parent_item_identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      _custom_json: Joi.any(),

      size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      images: Joi.array().items(CartModel.ProductImage()),

      uid: Joi.number(),

      net_quantity: CartModel.NetQuantity(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      item_code: Joi.string().allow("").allow(null),

      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      price: CartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      coupon_message: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      availability: CartModel.ProductAvailability(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      article: CartModel.ProductArticle(),

      key: Joi.string().allow(""),

      message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      is_set: Joi.boolean(),

      discount: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      price_per_unit: CartModel.ProductPriceInfo(),

      product: CartModel.CartProduct(),

      quantity: Joi.number(),
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

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      pan_config: Joi.any(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      gstin: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      pos: Joi.boolean(),

      extra_meta: Joi.any(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      seller_id: Joi.number(),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      display: Joi.string().allow(""),

      article_assignment: Joi.any(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
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

      partial: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      _custom_json: Joi.any(),
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

      message: Joi.string().allow(""),

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

  static PageCoupon() {
    return Joi.object({
      has_next: Joi.boolean(),

      total_item_count: Joi.number(),

      total: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      max_discount_value: Joi.number(),

      title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      is_applicable: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),
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
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      bulk_effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      price: CartModel.OfferPrice(),

      total: Joi.number(),

      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),

      best: Joi.boolean(),

      margin: Joi.number(),

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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      google_map_point: Joi.any(),

      is_default_address: Joi.boolean(),

      country_phone_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      meta: Joi.any(),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      country: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      phone: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

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

      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
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
      success: Joi.boolean().required(),

      coupon_validity: CartModel.CouponValidity(),

      message: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),

      fulfillment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),

      shipments: Joi.number(),

      shipment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      error: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

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
      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      aggregator: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      extra_meta: Joi.any(),

      payment_params: Joi.any().allow(null),

      payment_mode: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      payment_auto_confirm: Joi.boolean(),

      delivery_address: Joi.any(),

      staff: CartModel.StaffCheckout(),

      billing_address: Joi.any(),

      address_id: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      cod_charges: Joi.number(),

      message: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      success: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      error_message: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      store_code: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_charges: Joi.number(),

      id: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      currency: CartModel.CartCurrency(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),
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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      id: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      shared_cart_details: CartModel.SharedCartDetails(),
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

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      buy_rules: Joi.any(),

      id: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      description: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),
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
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      offer_price: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      price: CartModel.LadderPrice(),

      type: Joi.string().allow(""),

      max_quantity: Joi.number(),

      min_quantity: Joi.number(),

      margin: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      buy_rules: Joi.any(),

      id: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      description: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      discount_rules: Joi.array().items(Joi.any()),
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
