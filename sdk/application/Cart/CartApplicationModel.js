const Joi = require("joi");

class CartModel {
  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),

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

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),
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

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),

      offer: Joi.any(),

      item_criteria: Joi.any(),
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
      offer_text: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      mrp_promotion: Joi.boolean(),

      promotion_group: Joi.string().allow(""),

      article_quantity: Joi.number(),

      ownership: CartModel.Ownership(),

      amount: Joi.number(),
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
      seller: CartModel.BaseInfo(),

      quantity: Joi.number(),

      store: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      type: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      size: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      net_quantity: CartModel.NetQuantity(),

      action: CartModel.ProductAction(),

      brand: CartModel.BaseInfo(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      name: Joi.string().allow(""),
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

  static CartProductInfo() {
    return Joi.object({
      is_set: Joi.boolean(),

      message: Joi.string().allow(""),

      quantity: Joi.number(),

      promo_meta: CartModel.PromoMeta(),

      identifiers: CartModel.CartProductIdentifer().required(),

      discount: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      key: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      article: CartModel.ProductArticle(),

      price_per_unit: CartModel.ProductPriceInfo(),

      product: CartModel.CartProduct(),

      availability: CartModel.ProductAvailability(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      fynd_cash: Joi.number(),

      coupon: Joi.number(),

      cod_charge: Joi.number(),

      delivery_charge: Joi.number(),

      gst_charges: Joi.number(),

      subtotal: Joi.number(),

      total: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      discount: Joi.number(),

      mrp_total: Joi.number(),

      you_saved: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      total: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      coupon_value: Joi.number(),

      value: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      coupon: CartModel.CouponBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      buy_now: Joi.boolean(),

      pan_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      store_id: Joi.number(),

      quantity: Joi.number(),

      pos: Joi.boolean(),

      seller_id: Joi.number(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      article_assignment: Joi.any(),

      item_size: Joi.string().allow(""),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),
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

      partial: Joi.boolean(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      quantity: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

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

      has_previous: Joi.boolean(),

      total: Joi.number(),

      total_item_count: Joi.number(),

      current: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_value: Joi.number(),

      message: Joi.string().allow(""),

      title: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      is_applicable: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),
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

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      bulk_effective: Joi.number(),

      effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      best: Joi.boolean(),

      quantity: Joi.number(),

      margin: Joi.number(),

      auto_applied: Joi.boolean(),

      price: CartModel.OfferPrice(),

      type: Joi.string().allow(""),

      total: Joi.number(),
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
      geo_location: CartModel.GeoLocation(),

      area: Joi.string().allow(""),

      address: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      meta: Joi.any(),

      area_code: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      checkout_mode: Joi.string().allow(""),

      is_active: Joi.boolean(),

      google_map_point: Joi.any(),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

      is_updated: Joi.boolean(),
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

      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      discount: Joi.number(),
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
      items: Joi.array().items(CartModel.CartProductInfo()),

      promise: CartModel.ShipmentPromise(),

      fulfillment_id: Joi.number(),

      shipments: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      fulfillment_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      error: Joi.boolean(),

      uid: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),
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
      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      ordering_store: Joi.number().allow(null),

      meta: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      payment_params: Joi.any().allow(null),

      extra_meta: Joi.any(),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      address_id: Joi.string().allow(""),

      delivery_address: Joi.any(),

      staff: CartModel.StaffCheckout(),

      payment_mode: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      billing_address: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      delivery_charges: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      cod_charges: Joi.number(),

      cart_id: Joi.number(),

      order_id: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      error_message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      success: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      store_emps: Joi.array().items(Joi.any()),

      gstin: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      restrict_checkout: Joi.boolean(),

      store_code: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      is_valid: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      cart: CartModel.CheckCart(),

      app_intercept_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      data: Joi.any(),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      user: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      shared_cart_details: CartModel.SharedCartDetails(),

      cart_id: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),
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

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      discount_rules: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      buy_rules: Joi.any(),

      promotion_group: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
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
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      offer_price: Joi.number(),

      effective: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      max_quantity: Joi.number(),

      margin: Joi.number(),

      price: CartModel.LadderPrice(),

      type: Joi.string().allow(""),

      min_quantity: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      discount_rules: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      buy_rules: Joi.any(),

      calculate_on: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      valid_till: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
