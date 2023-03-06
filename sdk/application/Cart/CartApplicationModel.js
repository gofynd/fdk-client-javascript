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

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      delivery_charge: Joi.number(),

      you_saved: Joi.number(),

      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      total: Joi.number(),

      discount: Joi.number(),

      fynd_cash: Joi.number(),

      mrp_total: Joi.number(),

      coupon: Joi.number(),

      gst_charges: Joi.number(),

      cod_charge: Joi.number(),

      vog: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
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

      raw: CartModel.RawBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      loyalty_points: CartModel.LoyaltyPoints(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),

      raw_offer: Joi.any(),

      offer: Joi.any(),
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
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      ownership: CartModel.Ownership(),

      promotion_name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      selling: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      base: CartModel.BasePrice(),

      converted: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      store: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      extra_meta: Joi.any(),

      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),
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

      secure_url: Joi.string().allow(""),

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

      type: Joi.string().allow(""),

      query: CartModel.ActionQuery(),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CartProduct() {
    return Joi.object({
      net_quantity: CartModel.NetQuantity(),

      images: Joi.array().items(CartModel.ProductImage()),

      action: CartModel.ProductAction(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      uid: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      bulk_offer: Joi.any(),

      coupon_message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      identifiers: CartModel.CartProductIdentifer().required(),

      price: CartModel.ProductPriceInfo(),

      article: CartModel.ProductArticle(),

      discount: Joi.string().allow(""),

      is_set: Joi.boolean(),

      key: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      availability: CartModel.ProductAvailability(),

      product: CartModel.CartProduct(),

      message: Joi.string().allow(""),

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

  static CartDetailResponse() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      breakup_values: CartModel.CartBreakup(),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      checkout_mode: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),

      display: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      pos: Joi.boolean(),

      seller_id: Joi.number(),

      article_id: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      quantity: Joi.number(),
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

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      extra_meta: Joi.any(),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

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

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      is_applicable: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      message: Joi.string().allow(""),

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

  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static OfferPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      auto_applied: Joi.boolean(),

      price: CartModel.OfferPrice(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      best: Joi.boolean(),

      quantity: Joi.number(),

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
      country_phone_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      meta: Joi.any(),

      phone: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      area: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

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
      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),

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
      cart_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      discount: Joi.number(),

      valid: Joi.boolean(),

      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
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

      items: Joi.array().items(CartModel.CartProductInfo()),

      shipments: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      last_modified: Joi.string().allow(""),

      error: Joi.boolean(),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      uid: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),
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
      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      billing_address: Joi.any(),

      aggregator: Joi.string().allow(""),

      extra_meta: Joi.any(),

      meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      billing_address_id: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),

      delivery_address: Joi.any(),

      address_id: Joi.string().allow(""),

      staff: CartModel.StaffCheckout(),
    });
  }

  static CheckCart() {
    return Joi.object({
      success: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      last_modified: Joi.string().allow(""),

      cod_charges: Joi.number(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      checkout_mode: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      cod_available: Joi.boolean(),

      is_valid: Joi.boolean(),

      user_type: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      error_message: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      store_code: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      gstin: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      message: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),

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
      token: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),

      user: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      checkout_mode: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),
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
      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      discount_rules: Joi.array().items(Joi.any()),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.any(),

      description: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

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
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static LadderPrice() {
    return Joi.object({
      marked: Joi.number(),

      offer_price: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      price: CartModel.LadderPrice(),

      type: Joi.string().allow(""),

      min_quantity: Joi.number(),

      max_quantity: Joi.number(),

      margin: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      discount_rules: Joi.array().items(Joi.any()),

      promotion_group: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      buy_rules: Joi.any(),

      description: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),
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
