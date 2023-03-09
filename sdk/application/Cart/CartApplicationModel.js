const Joi = require("joi");

class CartModel {
  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      total: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      type: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      value: Joi.number(),

      coupon_value: Joi.number(),

      uid: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      gst_charges: Joi.number(),

      subtotal: Joi.number(),

      coupon: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      total: Joi.number(),

      you_saved: Joi.number(),

      fynd_cash: Joi.number(),

      discount: Joi.number(),

      vog: Joi.number(),

      convenience_fee: Joi.number(),

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
      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),
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

  static CartProduct() {
    return Joi.object({
      categories: Joi.array().items(CartModel.CategoryInfo()),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      uid: Joi.number(),

      action: CartModel.ProductAction(),

      brand: CartModel.BaseInfo(),

      name: Joi.string().allow(""),

      net_quantity: CartModel.NetQuantity(),
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

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

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

  static ProductArticle() {
    return Joi.object({
      store: CartModel.BaseInfo(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      size: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: CartModel.BaseInfo(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: CartModel.FreeGiftItem(),
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
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),

      ownership: CartModel.Ownership(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),
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

      effective: Joi.number(),

      selling: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      product: CartModel.CartProduct(),

      coupon_message: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),

      bulk_offer: Joi.any(),

      parent_item_identifiers: Joi.any(),

      availability: CartModel.ProductAvailability(),

      article: CartModel.ProductArticle(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      key: Joi.string().allow(""),

      is_set: Joi.boolean(),

      discount: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      price_per_unit: CartModel.ProductPriceInfo(),

      price: CartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),
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

  static CartDetailResponse() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      pan_no: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      pos: Joi.boolean(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      store_id: Joi.number(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      seller_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_size: Joi.string().allow(""),

      article_assignment: Joi.any(),
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
      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      identifiers: CartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      item_index: Joi.number(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),
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

  static Coupon() {
    return Joi.object({
      title: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      expires_on: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      current: Joi.number(),

      total_item_count: Joi.number(),
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
      marked: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      quantity: Joi.number(),

      type: Joi.string().allow(""),

      margin: Joi.number(),

      total: Joi.number(),

      auto_applied: Joi.boolean(),

      best: Joi.boolean(),

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
      state: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),

      is_active: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address: Joi.string().allow(""),

      id: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      geo_location: CartModel.GeoLocation(),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      google_map_point: Joi.any(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),
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
      id: Joi.string().allow(""),

      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),

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

      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      title: Joi.string().allow(""),

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
      fulfillment_id: Joi.number(),

      shipments: Joi.number(),

      order_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),

      shipment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      error: Joi.boolean(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      currency: CartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      cart_id: Joi.number(),

      coupon_text: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),
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

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      payment_identifier: Joi.string().allow("").allow(null),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      aggregator: Joi.string().allow(""),

      billing_address: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      ordering_store: Joi.number().allow(null),

      extra_meta: Joi.any(),

      meta: Joi.any(),

      delivery_address: Joi.any(),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      staff: CartModel.StaffCheckout(),
    });
  }

  static CheckCart() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      user_type: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      cod_available: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      cart_id: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      store_code: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      delivery_charge_order_value: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      error_message: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      message: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      cod_charges: Joi.number(),

      success: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      app_intercept_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      comment: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      checkout_mode: Joi.string().allow(""),

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
      source: Joi.any(),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      cart_id: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      shared_cart_details: CartModel.SharedCartDetails(),

      coupon_text: Joi.string().allow(""),

      uid: Joi.string().allow(""),

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
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.any(),

      id: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

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
      marked: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      offer_price: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      max_quantity: Joi.number(),

      margin: Joi.number(),

      price: CartModel.LadderPrice(),

      min_quantity: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      calculate_on: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.any(),

      id: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

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
