const Joi = require("joi");

class CartModel {
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
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      selling: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
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

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      action: CartModel.ProductAction(),
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
      converted: CartModel.BasePrice(),

      base: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      type: Joi.string().allow(""),

      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      size: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      item_criteria: Joi.any(),

      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      free_gift_item_details: CartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      coupon_message: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      is_set: Joi.boolean(),

      message: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      bulk_offer: Joi.any(),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      key: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      article: CartModel.ProductArticle(),

      price: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      identifiers: CartModel.CartProductIdentifer().required(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      type: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),
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

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      fynd_cash: Joi.number(),

      cod_charge: Joi.number(),

      delivery_charge: Joi.number(),

      coupon: Joi.number(),

      total: Joi.number(),

      discount: Joi.number(),

      gst_charges: Joi.number(),

      mrp_total: Joi.number(),

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

  static CartDetailResponse() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      display: Joi.string().allow(""),

      pos: Joi.boolean(),

      quantity: Joi.number(),

      store_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article_assignment: Joi.any(),

      seller_id: Joi.number(),

      item_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      partial: Joi.boolean(),

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),
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

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_value: Joi.number(),

      title: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      message: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),
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

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      margin: Joi.number(),

      quantity: Joi.number(),

      total: Joi.number(),

      price: CartModel.OfferPrice(),

      auto_applied: Joi.boolean(),

      best: Joi.boolean(),
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
      google_map_point: Joi.any(),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      meta: Joi.any(),

      city: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      geo_location: CartModel.GeoLocation(),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      id: Joi.string().allow(""),
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

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      success: Joi.boolean(),

      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),
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

      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      valid: Joi.boolean(),

      next_validation_required: Joi.boolean().allow(null),
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
      box_type: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      promise: CartModel.ShipmentPromise(),

      fulfillment_id: Joi.number(),

      order_type: Joi.string().allow(""),

      shipments: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      error: Joi.boolean(),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      currency: CartModel.CartCurrency(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      payment_auto_confirm: Joi.boolean(),

      extra_meta: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),

      merchant_code: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      billing_address: Joi.any(),

      meta: Joi.any(),

      address_id: Joi.string().allow(""),

      staff: CartModel.StaffCheckout(),

      delivery_address: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      cod_charges: Joi.number(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      error_message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      currency: CartModel.CartCurrency(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      order_id: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      cart_id: Joi.number(),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      gstin: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      cod_message: Joi.string().allow(""),

      success: Joi.boolean(),

      id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      data: Joi.any(),

      callback_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),

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
      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      source: Joi.any(),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      shared_cart_details: CartModel.SharedCartDetails(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      currency: CartModel.CartCurrency(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      cart_id: Joi.number(),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),
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

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      buy_rules: Joi.any(),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

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

      currency_code: Joi.string().allow(""),

      offer_price: Joi.number(),

      marked: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      margin: Joi.number(),

      min_quantity: Joi.number(),

      price: CartModel.LadderPrice(),

      max_quantity: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      buy_rules: Joi.any(),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      discount_rules: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

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
