const Joi = require("joi");

class CartModel {
  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
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
      coupon_value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      uid: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),
    });
  }

  static RawBreakup() {
    return Joi.object({
      coupon: Joi.number(),

      you_saved: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      delivery_charge: Joi.number(),

      gift_card: Joi.number(),

      mrp_total: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      discount: Joi.number(),

      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      gst_charges: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: CartModel.CouponBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),
    });
  }

  static CouponDetails() {
    return Joi.object({
      discount_total_quantity: Joi.number(),

      discount_single_quantity: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static Tags() {
    return Joi.object({
      tags: Joi.any(),
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

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
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
      brand: CartModel.BaseInfo(),

      teaser_tag: CartModel.Tags(),

      type: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      name: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      tags: Joi.array().items(Joi.string().allow("")),

      item_code: Joi.string().allow("").allow(null),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
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

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),
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
      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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
      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      type: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      gift_card: Joi.any(),

      is_gift_visible: Joi.boolean(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.any(),

      cart_item_meta: Joi.any(),

      seller: CartModel.BaseInfo(),

      seller_identifier: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),
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
      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),
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
      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      coupon: CartModel.CouponDetails(),

      parent_item_identifiers: Joi.any(),

      product: CartModel.CartProduct(),

      identifiers: CartModel.CartProductIdentifer().required(),

      price: CartModel.ProductPriceInfo(),

      article: CartModel.ProductArticle(),

      is_set: Joi.boolean(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      availability: CartModel.ProductAvailability(),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      message: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      coupon_message: Joi.string().allow(""),
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
      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      pan_config: Joi.any(),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      article_assignment: Joi.any(),

      item_id: Joi.number(),

      store_id: Joi.number(),

      display: Joi.string().allow(""),

      pos: Joi.boolean(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),
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

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      extra_meta: Joi.any(),

      item_index: Joi.number(),

      item_id: Joi.number(),

      quantity: Joi.number(),

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

      success: Joi.boolean(),

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
      coupon_value: Joi.number(),

      title: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      expires_on: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      is_applicable: Joi.boolean(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      current: Joi.number(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

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
      bulk_effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      best: Joi.boolean(),

      price: CartModel.OfferPrice(),

      type: Joi.string().allow(""),

      auto_applied: Joi.boolean(),

      total: Joi.number(),

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
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      address: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      google_map_point: Joi.any(),

      is_active: Joi.boolean(),

      phone: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      meta: Joi.any(),

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

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      is_updated: Joi.boolean(),
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

      cart_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      discount: Joi.number(),

      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),
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

      promise: CartModel.ShipmentPromise(),

      fulfillment_id: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shipment_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      error: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      currency: CartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      delivery_promise: CartModel.ShipmentPromise(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      extra_meta: Joi.any(),

      merchant_code: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      billing_address: Joi.any(),

      delivery_address: Joi.any(),

      meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),

      staff: CartModel.StaffCheckout(),

      billing_address_id: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      cod_message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      error_message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      delivery_charges: Joi.number(),

      store_code: Joi.string().allow(""),

      cod_charges: Joi.number(),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      success: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      user_type: Joi.string().allow(""),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow(""),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      message: Joi.string().allow(""),

      data: Joi.any(),

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

      meta: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      currency: CartModel.CartCurrency(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),
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

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      discount_rules: Joi.array().items(Joi.any()),

      description: Joi.string().allow(""),

      buy_rules: Joi.any(),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static LadderPrice() {
    return Joi.object({
      offer_price: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      price: CartModel.LadderPrice(),

      min_quantity: Joi.number(),

      margin: Joi.number(),

      max_quantity: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      discount_rules: Joi.array().items(Joi.any()),

      description: Joi.string().allow(""),

      buy_rules: Joi.any(),

      calculate_on: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

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
