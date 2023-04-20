const Joi = require("joi");

class CartModel {
  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      gift_card: Joi.number(),

      vog: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      cod_charge: Joi.number(),

      mrp_total: Joi.number(),

      gst_charges: Joi.number(),

      delivery_charge: Joi.number(),

      discount: Joi.number(),

      total: Joi.number(),

      you_saved: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      coupon_type: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow("").allow(null),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
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

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Tags() {
    return Joi.object({
      tags: Joi.any(),
    });
  }

  static BaseInfo() {
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

  static CartProduct() {
    return Joi.object({
      categories: Joi.array().items(CartModel.CategoryInfo()),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      item_code: Joi.string().allow("").allow(null),

      teaser_tag: CartModel.Tags(),

      brand: CartModel.BaseInfo(),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      action: CartModel.ProductAction(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CouponDetails() {
    return Joi.object({
      discount_single_quantity: Joi.number(),

      discount_total_quantity: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      selling: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

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

      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
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

      gift_card: Joi.any(),

      parent_item_identifiers: Joi.any(),

      size: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      price: CartModel.ArticlePriceInfo(),

      cart_item_meta: Joi.any(),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      identifier: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      extra_meta: Joi.any(),

      is_gift_visible: Joi.boolean(),
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
      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),

      offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      free_gift_item_details: CartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      article_quantity: Joi.number(),

      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_name: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      coupon_message: Joi.string().allow(""),

      message: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      is_set: Joi.boolean(),

      identifiers: CartModel.CartProductIdentifer().required(),

      coupon: CartModel.CouponDetails(),

      price_per_unit: CartModel.ProductPriceInfo(),

      price: CartModel.ProductPriceInfo(),

      bulk_offer: Joi.any(),

      quantity: Joi.number(),

      article: CartModel.ProductArticle(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      discount: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      key: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),
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
      breakup_values: CartModel.CartBreakup(),

      pan_config: Joi.any(),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      pos: Joi.boolean(),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      seller_id: Joi.number(),

      article_id: Joi.string().allow(""),

      article_assignment: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_size: Joi.string().allow(""),

      store_id: Joi.number(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),
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
      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      extra_meta: Joi.any(),
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
      current: Joi.number(),

      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow(""),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static OfferPrice() {
    return Joi.object({
      effective: Joi.number(),

      bulk_effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      auto_applied: Joi.boolean(),

      price: CartModel.OfferPrice(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),

      total: Joi.number(),

      best: Joi.boolean(),

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

      checkout_mode: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      phone: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      area: Joi.string().allow(""),

      google_map_point: Joi.any(),

      area_code_slug: Joi.string().allow(""),

      meta: Joi.any(),

      geo_location: CartModel.GeoLocation(),

      user_id: Joi.string().allow(""),
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

      is_updated: Joi.boolean(),

      success: Joi.boolean(),

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
      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      code: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

      discount: Joi.number(),
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
      promise: CartModel.ShipmentPromise(),

      fulfillment_id: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      order_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      fulfillment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error: Joi.boolean(),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      buy_now: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      delivery_address: Joi.any(),

      ordering_store: Joi.number().allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      staff: CartModel.StaffCheckout(),

      address_id: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      payment_auto_confirm: Joi.boolean(),

      meta: Joi.any(),

      billing_address: Joi.any(),

      extra_meta: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      comment: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      cod_charges: Joi.number(),

      error_message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      store_code: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      cod_available: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      data: Joi.any(),

      success: Joi.boolean(),

      cart: CartModel.CheckCart(),

      message: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),
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

      gift_details: CartModel.ArticleGiftDetail(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

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
      user: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),

      meta: Joi.any(),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      shared_cart_details: CartModel.SharedCartDetails(),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),
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
      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.any(),

      discount_rules: Joi.array().items(Joi.any()),

      valid_till: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),
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
      effective: Joi.number(),

      offer_price: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      max_quantity: Joi.number(),

      min_quantity: Joi.number(),

      price: CartModel.LadderPrice(),

      type: Joi.string().allow(""),

      margin: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.any(),

      discount_rules: Joi.array().items(Joi.any()),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      valid_till: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),
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
