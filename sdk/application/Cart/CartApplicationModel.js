const Joi = require("joi");

class CartModel {
  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
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
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CartProduct() {
    return Joi.object({
      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      uid: Joi.number(),

      action: CartModel.ProductAction(),

      brand: CartModel.BaseInfo(),

      type: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),
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

      extra_meta: Joi.any(),

      size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      price: CartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      store: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),
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

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      selling: Joi.number(),

      marked: Joi.number(),

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

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      product: CartModel.CartProduct(),

      availability: CartModel.ProductAvailability(),

      is_set: Joi.boolean(),

      article: CartModel.ProductArticle(),

      message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      discount: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      identifiers: CartModel.CartProductIdentifer().required(),

      key: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),
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

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      description: Joi.string().allow(""),

      total: Joi.number(),

      is_applied: Joi.boolean(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      cod_charge: Joi.number(),

      discount: Joi.number(),

      total: Joi.number(),

      delivery_charge: Joi.number(),

      mrp_total: Joi.number(),

      gst_charges: Joi.number(),

      fynd_cash: Joi.number(),

      vog: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      you_saved: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      raw: CartModel.RawBreakup(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),

      extra_meta: Joi.any(),

      pos: Joi.boolean(),

      article_id: Joi.string().allow(""),

      store_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_id: Joi.number(),

      display: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      parent_item_identifiers: Joi.any(),
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

      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      extra_meta: Joi.any(),

      article_id: Joi.string().allow(""),

      item_id: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),
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

      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),
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

      coupon_code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      is_applicable: Joi.boolean(),

      coupon_value: Joi.number(),

      expires_on: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      current: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),
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
      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      best: Joi.boolean(),

      auto_applied: Joi.boolean(),

      total: Joi.number(),

      price: CartModel.OfferPrice(),

      quantity: Joi.number(),

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
      city: Joi.string().allow(""),

      _custom_json: Joi.any(),

      country: Joi.string().allow(""),

      is_active: Joi.boolean(),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      state: Joi.string().allow(""),

      meta: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      landmark: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),
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

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
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
      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),

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
      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shipments: Joi.number(),

      order_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      error: Joi.boolean(),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      currency: CartModel.CartCurrency(),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
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
      aggregator: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      extra_meta: Joi.any(),

      staff: CartModel.StaffCheckout(),

      meta: Joi.any(),

      delivery_address: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),

      billing_address_id: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow("").allow(null),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static CheckCart() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_order_value: Joi.number(),

      restrict_checkout: Joi.boolean(),

      success: Joi.boolean(),

      cod_charges: Joi.number(),

      cart_id: Joi.number(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      user_type: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charges: Joi.number(),

      order_id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      source: Joi.any(),

      token: Joi.string().allow(""),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      shared_cart_details: CartModel.SharedCartDetails(),

      restrict_checkout: Joi.boolean(),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),
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
      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      description: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      promotion_group: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      buy_rules: Joi.any(),

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

  static LadderPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      offer_price: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      max_quantity: Joi.number(),

      price: CartModel.LadderPrice(),

      min_quantity: Joi.number(),

      type: Joi.string().allow(""),

      margin: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      calculate_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      promotion_group: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      buy_rules: Joi.any(),

      id: Joi.string().allow(""),
    });
  }

  static CurrencyInfo() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
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
