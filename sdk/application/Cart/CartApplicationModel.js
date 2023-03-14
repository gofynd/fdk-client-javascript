const Joi = require("joi");

class CartModel {
  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CouponDetails() {
    return Joi.object({
      discount_single_quantity: Joi.number(),

      code: Joi.string().allow(""),

      discount_total_quantity: Joi.number(),
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

  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),
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

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      offer_text: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
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
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),
    });
  }

  static Tags() {
    return Joi.object({
      tags: Joi.any(),
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

  static CartProduct() {
    return Joi.object({
      images: Joi.array().items(CartModel.ProductImage()),

      uid: Joi.number(),

      action: CartModel.ProductAction(),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      teaser_tag: CartModel.Tags(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      brand: CartModel.BaseInfo(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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
      is_gift_visible: Joi.boolean(),

      uid: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      cart_item_meta: Joi.any(),

      gift_card: Joi.any(),

      identifier: Joi.any(),

      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      seller_identifier: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      promo_meta: CartModel.PromoMeta(),

      coupon: CartModel.CouponDetails(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      bulk_offer: Joi.any(),

      key: Joi.string().allow(""),

      quantity: Joi.number(),

      price_per_unit: CartModel.ProductPriceInfo(),

      coupon_message: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      discount: Joi.string().allow(""),

      message: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      identifiers: CartModel.CartProductIdentifer().required(),

      price: CartModel.ProductPriceInfo(),

      availability: CartModel.ProductAvailability(),

      parent_item_identifiers: Joi.any(),

      is_set: Joi.boolean(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      uid: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      value: Joi.number(),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      is_applied: Joi.boolean(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      is_applied: Joi.boolean(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),

      coupon: Joi.number(),

      total: Joi.number(),

      vog: Joi.number(),

      subtotal: Joi.number(),

      gift_card: Joi.number(),

      discount: Joi.number(),

      convenience_fee: Joi.number(),

      gst_charges: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_cash: Joi.number(),

      you_saved: Joi.number(),

      mrp_total: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: CartModel.CouponBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
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

  static CartDetailResponse() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      store_id: Joi.number(),

      article_id: Joi.string().allow(""),

      article_assignment: Joi.any(),

      pos: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      display: Joi.string().allow(""),

      seller_id: Joi.number(),

      parent_item_identifiers: Joi.any(),
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

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

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
      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),

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
      total: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),

      current: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow(""),

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
      marked: Joi.number(),

      bulk_effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      total: Joi.number(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),

      margin: Joi.number(),

      auto_applied: Joi.boolean(),

      price: CartModel.OfferPrice(),

      best: Joi.boolean(),
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
      is_active: Joi.boolean(),

      country_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      area_code_slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      address: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      name: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

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
      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

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
      fulfillment_id: Joi.number(),

      promise: CartModel.ShipmentPromise(),

      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),

      error: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      is_valid: Joi.boolean(),

      buy_now: Joi.boolean(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      staff: CartModel.StaffCheckout(),

      payment_params: Joi.any().allow(null),

      billing_address: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),

      extra_meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),

      meta: Joi.any(),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      delivery_address: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      success: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      cart_id: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      cod_charges: Joi.number(),

      buy_now: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static GiftDetail() {
    return Joi.object({
      is_gift_applied: Joi.boolean(),

      gift_message: Joi.string().allow(""),
    });
  }

  static ArticleGiftDetail() {
    return Joi.object({
      article_id: CartModel.GiftDetail(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),

      gift_details: CartModel.ArticleGiftDetail(),
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

      created_on: Joi.string().allow(""),

      source: Joi.any(),

      token: Joi.string().allow(""),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      shared_cart_details: CartModel.SharedCartDetails(),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),
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
      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      discount_rules: Joi.array().items(Joi.any()),

      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      id: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      buy_rules: Joi.any(),

      promotion_group: Joi.string().allow(""),
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
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      offer_price: Joi.number(),

      effective: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      margin: Joi.number(),

      min_quantity: Joi.number(),

      max_quantity: Joi.number(),

      price: CartModel.LadderPrice(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      discount_rules: Joi.array().items(Joi.any()),

      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      id: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      buy_rules: Joi.any(),

      calculate_on: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),
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
