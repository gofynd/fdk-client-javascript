const Joi = require("joi");

class CartModel {
  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }
  static AddCartDetailResponse() {
    return Joi.object({
      cart: CartModel.CartDetailResponse(),
      message: Joi.string().allow(""),
      partial: Joi.boolean(),
      success: Joi.boolean(),
    });
  }
  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),
    });
  }
  static AddProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),
      article_assignment: Joi.any(),
      article_id: Joi.string().allow(""),
      display: Joi.string().allow(""),
      extra_meta: Joi.any(),
      item_id: Joi.number(),
      item_size: Joi.string().allow(""),
      parent_item_identifiers: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.string().allow(""))
      ),
      pos: Joi.boolean(),
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
      quantity: Joi.number(),
      seller_id: Joi.number(),
      store_id: Joi.number(),
    });
  }
  static Address() {
    return Joi.object({
      address: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      area_code: Joi.string().allow(""),
      area_code_slug: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      geo_location: CartModel.GeoLocation(),
      google_map_point: Joi.any(),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_default_address: Joi.boolean(),
      landmark: Joi.string().allow(""),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      state: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      user_id: Joi.string().allow(""),
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
  static AppliedPromotion() {
    return Joi.object({
      amount: Joi.number(),
      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),
      article_quantity: Joi.number(),
      buy_rules: Joi.array().items(CartModel.BuyRules()),
      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),
      mrp_promotion: Joi.boolean(),
      offer_text: Joi.string().allow(""),
      ownership: CartModel.Ownership(),
      promo_id: Joi.string().allow(""),
      promotion_group: Joi.string().allow(""),
      promotion_name: Joi.string().allow(""),
      promotion_type: Joi.string().allow(""),
    });
  }
  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),
    });
  }
  static ArticlePriceInfo() {
    return Joi.object({
      base: CartModel.BasePrice(),
      converted: CartModel.BasePrice(),
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
      currency_symbol: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
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
  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),
      item_criteria: Joi.any(),
    });
  }
  static CartBreakup() {
    return Joi.object({
      coupon: CartModel.CouponBreakup(),
      display: Joi.array().items(CartModel.DisplayBreakup()),
      loyalty_points: CartModel.LoyaltyPoints(),
      raw: CartModel.RawBreakup(),
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
      address_id: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      billing_address: Joi.any(),
      billing_address_id: Joi.string().allow(""),
      callback_url: Joi.string().allow("").allow(null),
      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),
      delivery_address: Joi.any(),
      extra_meta: Joi.any(),
      merchant_code: Joi.string().allow(""),
      meta: Joi.any(),
      order_type: Joi.string().allow(""),
      ordering_store: Joi.number().allow(null),
      payment_auto_confirm: Joi.boolean(),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_mode: Joi.string().allow("").required(),
      payment_params: Joi.any().allow(null),
      staff: CartModel.StaffCheckout(),
    });
  }
  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),
      callback_url: Joi.string().allow(""),
      cart: CartModel.CheckCart(),
      data: Joi.any(),
      message: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      payment_confirm_url: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
    });
  }
  static CartDetailResponse() {
    return Joi.object({
      applied_promo_details: Joi.array().items(CartModel.AppliedPromotion()),
      breakup_values: CartModel.CartBreakup(),
      buy_now: Joi.boolean(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: CartModel.ShipmentPromise(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      payment_selection_lock: CartModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
    });
  }
  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }
  static CartMetaMissingResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),
    });
  }
  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),
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
  static CartProduct() {
    return Joi.object({
      action: CartModel.ProductAction(),
      brand: CartModel.BaseInfo(),
      categories: Joi.array().items(CartModel.CategoryInfo()),
      images: Joi.array().items(CartModel.ProductImage()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }
  static CartProductInfo() {
    return Joi.object({
      article: CartModel.ProductArticle(),
      availability: CartModel.ProductAvailability(),
      bulk_offer: Joi.any(),
      coupon_message: Joi.string().allow(""),
      delivery_promise: CartModel.ShipmentPromise(),
      discount: Joi.string().allow(""),
      identifiers: CartModel.CartProductIdentifer().required(),
      is_set: Joi.boolean(),
      key: Joi.string().allow(""),
      message: Joi.string().allow(""),
      moq: Joi.any(),
      parent_item_identifiers: Joi.any(),
      price: CartModel.ProductPriceInfo(),
      price_per_unit: CartModel.ProductPriceInfo(),
      product: CartModel.CartProduct(),
      promo_meta: CartModel.PromoMeta(),
      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),
      quantity: Joi.number(),
    });
  }
  static CartShipmentsResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: CartModel.ShipmentPromise(),
      error: Joi.boolean(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      payment_selection_lock: CartModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      shipments: Joi.array().items(CartModel.ShipmentResponse()),
      uid: Joi.string().allow(""),
    });
  }
  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static CheckCart() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      cod_available: Joi.boolean(),
      cod_charges: Joi.number(),
      cod_message: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_charge_order_value: Joi.number(),
      delivery_charges: Joi.number(),
      delivery_promise: CartModel.ShipmentPromise(),
      error_message: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      payment_selection_lock: CartModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      store_code: Joi.string().allow(""),
      store_emps: Joi.array().items(Joi.any()),
      success: Joi.boolean(),
      uid: Joi.string().allow(""),
      user_type: Joi.string().allow(""),
    });
  }
  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),
      coupon_type: Joi.string().allow("").allow(null),
      coupon_value: Joi.number(),
      description: Joi.string().allow("").allow(null),
      expires_on: Joi.string().allow(""),
      is_applicable: Joi.boolean(),
      is_applied: Joi.boolean(),
      max_discount_value: Joi.number(),
      message: Joi.string().allow(""),
      minimum_cart_value: Joi.number(),
      sub_title: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),
      coupon_type: Joi.string().allow("").allow(null),
      coupon_value: Joi.number(),
      description: Joi.string().allow("").allow(null),
      is_applied: Joi.boolean(),
      max_discount_value: Joi.number(),
      message: Joi.string().allow(""),
      minimum_cart_value: Joi.number(),
      sub_title: Joi.string().allow("").allow(null),
      title: Joi.string().allow("").allow(null),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      discount: Joi.number(),
      display_message_en: Joi.string().allow("").allow(null),
      title: Joi.string().allow(""),
      valid: Joi.boolean(),
    });
  }
  static CurrencyInfo() {
    return Joi.object({
      code: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
    });
  }
  static DeleteAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_deleted: Joi.boolean(),
    });
  }
  static DeleteCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
      offer: Joi.any(),
      raw_offer: Joi.any(),
    });
  }
  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      display: Joi.string().allow(""),
      key: Joi.string().allow(""),
      message: Joi.array().items(Joi.string().allow("")),
      value: Joi.number(),
    });
  }
  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),
      item_id: Joi.number(),
      item_images_url: Joi.array().items(Joi.string().allow("")),
      item_name: Joi.string().allow(""),
      item_price_details: Joi.any(),
      item_slug: Joi.string().allow(""),
    });
  }
  static FreeGiftItems() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),
      item_id: Joi.number(),
      item_images_url: Joi.array().items(Joi.string().allow("")),
      item_name: Joi.string().allow(""),
      item_price_details: Joi.any(),
      item_slug: Joi.string().allow(""),
    });
  }
  static GeoLocation() {
    return Joi.object({
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }
  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(CartModel.Address()),
      pii_masking: Joi.boolean(),
    });
  }
  static GetCouponResponse() {
    return Joi.object({
      available_coupon_list: Joi.array().items(CartModel.Coupon()),
      page: CartModel.PageCoupon(),
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
  static LadderOfferItem() {
    return Joi.object({
      margin: Joi.number(),
      max_quantity: Joi.number(),
      min_quantity: Joi.number(),
      price: CartModel.LadderPrice(),
      type: Joi.string().allow(""),
    });
  }
  static LadderPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
      offer_price: Joi.number(),
    });
  }
  static LadderPriceOffer() {
    return Joi.object({
      buy_rules: Joi.any(),
      calculate_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      discount_rules: Joi.array().items(Joi.any()),
      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),
      id: Joi.string().allow(""),
      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),
      offer_text: Joi.string().allow(""),
      promotion_group: Joi.string().allow(""),
      valid_till: Joi.string().allow(""),
    });
  }
  static LadderPriceOffers() {
    return Joi.object({
      available_offers: Joi.array().items(CartModel.LadderPriceOffer()),
      currency: CartModel.CurrencyInfo(),
    });
  }
  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),
      description: Joi.string().allow(""),
      is_applied: Joi.boolean(),
      total: Joi.number(),
    });
  }
  static OfferItem() {
    return Joi.object({
      auto_applied: Joi.boolean(),
      best: Joi.boolean(),
      margin: Joi.number(),
      price: CartModel.OfferPrice(),
      quantity: Joi.number(),
      total: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static OfferPrice() {
    return Joi.object({
      bulk_effective: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
    });
  }
  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static OperationErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow(""),
      payable_category: Joi.string().allow(""),
    });
  }
  static PageCoupon() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      total: Joi.number(),
      total_item_count: Joi.number(),
    });
  }
  static PaymentCouponValidate() {
    return Joi.object({
      coupon_validity: CartModel.CouponValidity(),
      message: Joi.string().allow(""),
      success: Joi.boolean().required(),
    });
  }
  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),
      enabled: Joi.boolean(),
      payment_identifier: Joi.string().allow(""),
    });
  }
  static ProductAction() {
    return Joi.object({
      query: CartModel.ActionQuery(),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static ProductArticle() {
    return Joi.object({
      _custom_json: Joi.any(),
      extra_meta: Joi.any(),
      identifier: Joi.any(),
      parent_item_identifiers: Joi.any(),
      price: CartModel.ArticlePriceInfo(),
      product_group_tags: Joi.array().items(Joi.string().allow("")),
      quantity: Joi.number(),
      seller: CartModel.BaseInfo(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      store: CartModel.BaseInfo(),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }
  static ProductAvailability() {
    return Joi.object({
      available_sizes: Joi.array().items(CartModel.ProductAvailabilitySize()),
      deliverable: Joi.boolean(),
      is_valid: Joi.boolean(),
      other_store_quantity: Joi.number(),
      out_of_stock: Joi.boolean(),
      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ProductAvailabilitySize() {
    return Joi.object({
      display: Joi.string().allow(""),
      is_available: Joi.boolean(),
      value: Joi.string().allow(""),
    });
  }
  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
      selling: Joi.number(),
    });
  }
  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),
      converted: CartModel.ProductPrice(),
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
  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static PromotionOffer() {
    return Joi.object({
      buy_rules: Joi.any(),
      description: Joi.string().allow(""),
      discount_rules: Joi.array().items(Joi.any()),
      free_gift_items: Joi.array().items(CartModel.FreeGiftItems()),
      id: Joi.string().allow(""),
      offer_text: Joi.string().allow(""),
      promotion_group: Joi.string().allow(""),
      valid_till: Joi.string().allow(""),
    });
  }
  static PromotionOffersResponse() {
    return Joi.object({
      available_promotions: Joi.array().items(CartModel.PromotionOffer()),
    });
  }
  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),
      convenience_fee: Joi.number(),
      coupon: Joi.number(),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_cash: Joi.number(),
      gst_charges: Joi.number(),
      mrp_total: Joi.number(),
      subtotal: Joi.number(),
      total: Joi.number(),
      vog: Joi.number(),
      you_saved: Joi.number(),
    });
  }
  static RewardPointRequest() {
    return Joi.object({
      points: Joi.boolean().required(),
    });
  }
  static SaveAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_default_address: Joi.boolean(),
      success: Joi.boolean(),
    });
  }
  static SelectCartAddressRequest() {
    return Joi.object({
      billing_address_id: Joi.string().allow(""),
      cart_id: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }
  static SharedCart() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: CartModel.ShipmentPromise(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      payment_selection_lock: CartModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      shared_cart_details: CartModel.SharedCartDetails(),
      uid: Joi.string().allow(""),
    });
  }
  static SharedCartDetails() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      meta: Joi.any(),
      source: Joi.any(),
      token: Joi.string().allow(""),
      user: Joi.any(),
    });
  }
  static SharedCartResponse() {
    return Joi.object({
      cart: CartModel.SharedCart(),
      error: Joi.string().allow(""),
    });
  }
  static ShipmentPromise() {
    return Joi.object({
      formatted: CartModel.PromiseFormatted(),
      timestamp: CartModel.PromiseTimestamp(),
    });
  }
  static ShipmentResponse() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),
      dp_id: Joi.string().allow("").allow(null),
      dp_options: Joi.any().allow(null),
      fulfillment_id: Joi.number(),
      fulfillment_type: Joi.string().allow(""),
      items: Joi.array().items(CartModel.CartProductInfo()),
      order_type: Joi.string().allow(""),
      promise: CartModel.ShipmentPromise(),
      shipment_type: Joi.string().allow(""),
      shipments: Joi.number(),
    });
  }
  static StaffCheckout() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      employee_code: Joi.string().allow(""),
      first_name: Joi.string().allow("").required(),
      last_name: Joi.string().allow("").required(),
      user: Joi.string().allow("").required(),
    });
  }
  static UpdateAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_default_address: Joi.boolean(),
      is_updated: Joi.boolean(),
      success: Joi.boolean(),
    });
  }
  static UpdateCartDetailResponse() {
    return Joi.object({
      cart: CartModel.CartDetailResponse(),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static UpdateCartPaymentRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      aggregator_name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_mode: Joi.string().allow(""),
    });
  }
  static UpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.UpdateProductCart()),
      operation: Joi.string().allow("").required(),
    });
  }
  static UpdateProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),
      article_id: Joi.string().allow(""),
      extra_meta: Joi.any(),
      identifiers: CartModel.CartProductIdentifer().required(),
      item_id: Joi.number(),
      item_index: Joi.number(),
      item_size: Joi.string().allow(""),
      parent_item_identifiers: Joi.any(),
      quantity: Joi.number(),
    });
  }
}
module.exports = CartModel;
