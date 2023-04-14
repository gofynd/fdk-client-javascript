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

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      add_on: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),
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

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static Tags() {
    return Joi.object({
      tags: Joi.any(),
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
      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      slug: Joi.string().allow(""),

      uid: Joi.number(),

      brand: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      teaser_tag: CartModel.Tags(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      item_code: Joi.string().allow("").allow(null),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      action: CartModel.ProductAction(),
    });
  }

  static CouponDetails() {
    return Joi.object({
      code: Joi.string().allow(""),

      discount_single_quantity: Joi.number(),

      discount_total_quantity: Joi.number(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),

      offer: Joi.any(),

      raw_offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),
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

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      amount: Joi.number(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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
      seller: CartModel.BaseInfo(),

      store: CartModel.BaseInfo(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      identifier: Joi.any(),

      is_gift_visible: Joi.boolean(),

      parent_item_identifiers: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      cart_item_meta: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      gift_card: Joi.any(),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      identifiers: CartModel.CartProductIdentifer().required(),

      price_per_unit: CartModel.ProductPriceInfo(),

      discount: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      bulk_offer: Joi.any(),

      product: CartModel.CartProduct(),

      coupon_message: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon: CartModel.CouponDetails(),

      key: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      availability: CartModel.ProductAvailability(),

      promo_meta: CartModel.PromoMeta(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      quantity: Joi.number(),

      article: CartModel.ProductArticle(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      you_saved: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      fynd_cash: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      discount: Joi.number(),

      coupon: Joi.number(),

      subtotal: Joi.number(),

      gift_card: Joi.number(),

      convenience_fee: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      coupon_type: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      value: Joi.number(),

      max_discount_value: Joi.number(),

      code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),
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
      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),

      coupon: CartModel.CouponBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      pan_config: Joi.any(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      article_assignment: Joi.any(),

      parent_item_identifiers: Joi.any(),

      display: Joi.string().allow(""),

      store_id: Joi.number(),

      seller_id: Joi.number(),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
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
      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

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
      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),

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
      total: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      max_discount_value: Joi.number(),

      coupon_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

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
      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      bulk_effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      best: Joi.boolean(),

      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),

      total: Joi.number(),

      price: CartModel.OfferPrice(),

      margin: Joi.number(),

      quantity: Joi.number(),
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
      landmark: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      city: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      phone: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      is_active: Joi.boolean(),

      google_map_point: Joi.any(),

      area_code: Joi.string().allow(""),
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

      success: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

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

      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      valid: Joi.boolean(),

      code: Joi.string().allow("").allow(null),

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

      order_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),

      dp_id: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      error: Joi.boolean(),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      billing_address: Joi.any(),

      staff: CartModel.StaffCheckout(),

      merchant_code: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow(""),

      delivery_address: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow("").required(),

      address_id: Joi.string().allow(""),

      meta: Joi.any(),

      payment_params: Joi.any().allow(null),

      payment_auto_confirm: Joi.boolean(),

      extra_meta: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      uid: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      cod_charges: Joi.number(),

      currency: CartModel.CartCurrency(),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      user_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      store_emps: Joi.array().items(Joi.any()),

      message: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      comment: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      cod_message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      error_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      order_id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      data: Joi.any(),
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
      gift_details: CartModel.ArticleGiftDetail(),

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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      uid: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shared_cart_details: CartModel.SharedCartDetails(),

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
      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      discount_rules: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      buy_rules: Joi.any(),

      description: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static LadderPrice() {
    return Joi.object({
      effective: Joi.number(),

      offer_price: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      max_quantity: Joi.number(),

      min_quantity: Joi.number(),

      price: CartModel.LadderPrice(),

      margin: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      discount_rules: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      buy_rules: Joi.any(),

      description: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),

      valid_till: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      calculate_on: Joi.string().allow(""),
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
