const Joi = require("joi");

class CartModel {
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

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      images: Joi.array().items(CartModel.ProductImage()),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      brand: CartModel.BaseInfo(),

      action: CartModel.ProductAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      uid: Joi.number(),
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
      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_id: Joi.number(),
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

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      raw_offer: Joi.any(),

      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

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
      quantity: Joi.number(),

      store: CartModel.BaseInfo(),

      size: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      seller: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      availability: CartModel.ProductAvailability(),

      promo_meta: CartModel.PromoMeta(),

      quantity: Joi.number(),

      coupon_message: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      key: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      price: CartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      is_set: Joi.boolean(),

      price_per_unit: CartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      bulk_offer: Joi.any(),

      discount: Joi.string().allow(""),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      value: Joi.number(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      convenience_fee: Joi.number(),

      fynd_cash: Joi.number(),

      you_saved: Joi.number(),

      subtotal: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charge: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      mrp_total: Joi.number(),

      discount: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),
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

  static CartBreakup() {
    return Joi.object({
      coupon: CartModel.CouponBreakup(),

      raw: CartModel.RawBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      loyalty_points: CartModel.LoyaltyPoints(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      item_id: Joi.number(),

      article_assignment: Joi.any(),

      display: Joi.string().allow(""),

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
      extra_meta: Joi.any(),

      quantity: Joi.number(),

      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      item_id: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),
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
      current: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      total_item_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      is_applicable: Joi.boolean(),

      is_applied: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      coupon_value: Joi.number(),
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
      currency_code: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      quantity: Joi.number(),

      best: Joi.boolean(),

      price: CartModel.OfferPrice(),

      margin: Joi.number(),

      total: Joi.number(),

      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      state: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      area_code_slug: Joi.string().allow(""),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      checkout_mode: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      is_active: Joi.boolean(),

      area_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      _custom_json: Joi.any(),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      google_map_point: Joi.any(),
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
      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),

      success: Joi.boolean(),
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
      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

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
      shipments: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      dp_id: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),

      order_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      cart_id: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      error: Joi.boolean(),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
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

      staff: CartModel.StaffCheckout(),

      callback_url: Joi.string().allow("").allow(null),

      id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      meta: Joi.any(),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      delivery_address: Joi.any(),

      ordering_store: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),

      billing_address_id: Joi.string().allow(""),

      billing_address: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      delivery_charge_order_value: Joi.number(),

      cart_id: Joi.number(),

      currency: CartModel.CartCurrency(),

      delivery_charges: Joi.number(),

      cod_available: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cod_charges: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      user_type: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      callback_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      data: Joi.any(),

      success: Joi.boolean(),

      app_intercept_url: Joi.string().allow(""),
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
      source: Joi.any(),

      meta: Joi.any(),

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shared_cart_details: CartModel.SharedCartDetails(),

      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      cart_id: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      uid: Joi.string().allow(""),
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
      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_id: Joi.number(),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      buy_rules: Joi.any(),

      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      description: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      valid_till: Joi.string().allow(""),
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
      currency_code: Joi.string().allow(""),

      offer_price: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      max_quantity: Joi.number(),

      price: CartModel.LadderPrice(),

      min_quantity: Joi.number(),

      margin: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      buy_rules: Joi.any(),

      calculate_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      description: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      valid_till: Joi.string().allow(""),

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
