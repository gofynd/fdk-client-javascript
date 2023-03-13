const Joi = require("joi");

class CartModel {
  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      selling: Joi.number(),

      add_on: Joi.number(),
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
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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

      price: CartModel.ArticlePriceInfo(),

      size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      store: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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
      item_code: Joi.string().allow("").allow(null),

      net_quantity: CartModel.NetQuantity(),

      action: CartModel.ProductAction(),

      images: Joi.array().items(CartModel.ProductImage()),

      brand: CartModel.BaseInfo(),

      uid: Joi.number(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
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

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      ownership: CartModel.Ownership(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_type: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      price: CartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      parent_item_identifiers: Joi.any(),

      article: CartModel.ProductArticle(),

      identifiers: CartModel.CartProductIdentifer().required(),

      key: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      product: CartModel.CartProduct(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      discount: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      quantity: Joi.number(),

      coupon_message: Joi.string().allow(""),

      is_set: Joi.boolean(),
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
      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      uid: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      mrp_total: Joi.number(),

      you_saved: Joi.number(),

      coupon: Joi.number(),

      gst_charges: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      vog: Joi.number(),

      subtotal: Joi.number(),

      convenience_fee: Joi.number(),
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

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      display: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      item_id: Joi.number(),

      seller_id: Joi.number(),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      store_id: Joi.number(),

      quantity: Joi.number(),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      item_id: Joi.number(),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

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
      has_next: Joi.boolean(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      total_item_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      is_applicable: Joi.boolean(),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      price: CartModel.OfferPrice(),

      margin: Joi.number(),

      best: Joi.boolean(),

      auto_applied: Joi.boolean(),

      quantity: Joi.number(),

      total: Joi.number(),

      type: Joi.string().allow(""),
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
      area_code_slug: Joi.string().allow(""),

      google_map_point: Joi.any(),

      address: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      country_iso_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      meta: Joi.any(),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      is_active: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      is_default_address: Joi.boolean(),

      area_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_updated: Joi.boolean(),

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
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
      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),
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
      promise: CartModel.ShipmentPromise(),

      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      items: Joi.array().items(CartModel.CartProductInfo()),

      order_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      fulfillment_id: Joi.number(),

      shipments: Joi.number(),

      shipment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      error: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      last_modified: Joi.string().allow(""),

      message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),
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

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),

      meta: Joi.any(),

      merchant_code: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),

      extra_meta: Joi.any(),

      delivery_address: Joi.any(),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      staff: CartModel.StaffCheckout(),

      payment_params: Joi.any().allow(null),

      aggregator: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static CheckCart() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      cod_available: Joi.boolean(),

      delivery_charges: Joi.number(),

      coupon_text: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      cod_charges: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      success: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      cart: CartModel.CheckCart(),

      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

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

      source: Joi.any(),

      user: Joi.any(),

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      currency: CartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),
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

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      description: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      valid_till: Joi.string().allow(""),

      buy_rules: Joi.any(),
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
      currency_symbol: Joi.string().allow(""),

      offer_price: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      price: CartModel.LadderPrice(),

      margin: Joi.number(),

      min_quantity: Joi.number(),

      max_quantity: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      calculate_on: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      description: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      promotion_group: Joi.string().allow(""),

      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      valid_till: Joi.string().allow(""),

      buy_rules: Joi.any(),
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
