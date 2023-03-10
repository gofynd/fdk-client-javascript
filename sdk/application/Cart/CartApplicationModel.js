const Joi = require("joi");

class CartModel {
  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),

      total: Joi.number(),

      applicable: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      vog: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      convenience_fee: Joi.number(),

      coupon: Joi.number(),

      gst_charges: Joi.number(),

      mrp_total: Joi.number(),

      subtotal: Joi.number(),

      you_saved: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      sub_title: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      type: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),
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
      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
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

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      effective: Joi.number(),
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

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

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

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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
      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      ownership: CartModel.Ownership(),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      offer_text: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      query: CartModel.ActionQuery(),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      net_quantity: CartModel.NetQuantity(),

      slug: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      action: CartModel.ProductAction(),
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
      converted: CartModel.BasePrice(),

      base: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      quantity: Joi.number(),

      store: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: CartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      size: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      quantity: Joi.number(),

      price_per_unit: CartModel.ProductPriceInfo(),

      key: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      message: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      product: CartModel.CartProduct(),

      bulk_offer: Joi.any(),

      article: CartModel.ProductArticle(),

      parent_item_identifiers: Joi.any(),

      availability: CartModel.ProductAvailability(),

      coupon_message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      discount: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      seller_id: Joi.number(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      item_size: Joi.string().allow(""),

      article_assignment: Joi.any(),

      display: Joi.string().allow(""),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

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
      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      extra_meta: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),
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
      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

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
      is_applicable: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      expires_on: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total: Joi.number(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

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

  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      quantity: Joi.number(),

      price: CartModel.OfferPrice(),

      auto_applied: Joi.boolean(),

      best: Joi.boolean(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      margin: Joi.number(),
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
      checkout_mode: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      is_active: Joi.boolean(),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      meta: Joi.any(),

      is_default_address: Joi.boolean(),

      country_phone_code: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      google_map_point: Joi.any(),

      created_by_user_id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(CartModel.Address()),
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
      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      discount: Joi.number(),

      code: Joi.string().allow("").allow(null),
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
      shipment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      fulfillment_id: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      error: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      cart_id: Joi.number(),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),
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
      extra_meta: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),

      staff: CartModel.StaffCheckout(),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      meta: Joi.any(),

      payment_params: Joi.any().allow(null),

      payment_mode: Joi.string().allow("").required(),

      payment_auto_confirm: Joi.boolean(),

      billing_address_id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      delivery_address: Joi.any(),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      delivery_charge_order_value: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      restrict_checkout: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cod_charges: Joi.number(),

      error_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      cod_message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      success: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      store_code: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart_id: Joi.number(),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow(""),

      data: Joi.any(),

      callback_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

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
      meta: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),

      user: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      currency: CartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      cart_id: Joi.number(),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),
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

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      valid_till: Joi.string().allow(""),

      description: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      buy_rules: Joi.any(),

      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
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
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static LadderPrice() {
    return Joi.object({
      offer_price: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      price: CartModel.LadderPrice(),

      max_quantity: Joi.number(),

      type: Joi.string().allow(""),

      margin: Joi.number(),

      min_quantity: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      valid_till: Joi.string().allow(""),

      description: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      buy_rules: Joi.any(),

      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

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
