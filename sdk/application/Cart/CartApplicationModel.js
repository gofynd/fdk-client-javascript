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

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),

      gst_charges: Joi.number(),

      subtotal: Joi.number(),

      total: Joi.number(),

      vog: Joi.number(),

      mrp_total: Joi.number(),

      delivery_charge: Joi.number(),

      convenience_fee: Joi.number(),

      you_saved: Joi.number(),

      fynd_cash: Joi.number(),

      discount: Joi.number(),

      coupon: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.number(),

      code: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: CartModel.LoyaltyPoints(),

      raw: CartModel.RawBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      ownership: CartModel.Ownership(),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      offer_text: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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

  static CartProduct() {
    return Joi.object({
      type: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      uid: Joi.number(),

      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CartModel.ProductAction(),
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
      converted: CartModel.BasePrice(),

      base: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      type: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      promo_meta: CartModel.PromoMeta(),

      price: CartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      quantity: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      coupon_message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      key: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      availability: CartModel.ProductAvailability(),

      parent_item_identifiers: Joi.any(),

      product: CartModel.CartProduct(),

      discount: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      bulk_offer: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
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
      delivery_promise: CartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      store_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      pos: Joi.boolean(),

      quantity: Joi.number(),

      article_assignment: Joi.any(),

      seller_id: Joi.number(),

      article_id: Joi.string().allow(""),

      item_id: Joi.number(),

      display: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      cart: CartModel.CartDetailResponse(),

      partial: Joi.boolean(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

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

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_previous: Joi.boolean(),

      total: Joi.number(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      minimum_cart_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      title: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      message: Joi.string().allow(""),
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

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      margin: Joi.number(),

      total: Joi.number(),

      best: Joi.boolean(),

      price: CartModel.OfferPrice(),

      quantity: Joi.number(),

      auto_applied: Joi.boolean(),
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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      meta: Joi.any(),

      phone: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      address: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      google_map_point: Joi.any(),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      is_active: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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
      is_default_address: Joi.boolean(),

      is_updated: Joi.boolean(),

      success: Joi.boolean(),

      id: Joi.string().allow(""),
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
      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

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
      order_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      error: Joi.boolean(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

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

      billing_address: Joi.any(),

      merchant_code: Joi.string().allow(""),

      meta: Joi.any(),

      extra_meta: Joi.any(),

      address_id: Joi.string().allow(""),

      delivery_address: Joi.any(),

      staff: CartModel.StaffCheckout(),

      callback_url: Joi.string().allow("").allow(null),

      ordering_store: Joi.number().allow(null),

      payment_params: Joi.any().allow(null),

      billing_address_id: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow("").required(),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),
    });
  }

  static CheckCart() {
    return Joi.object({
      uid: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charge_order_value: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charges: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      user_type: Joi.string().allow(""),

      success: Joi.boolean(),

      cod_charges: Joi.number(),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      currency: CartModel.CartCurrency(),

      order_id: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      store_code: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      cart: CartModel.CheckCart(),

      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      success: Joi.boolean(),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

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
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      meta: Joi.any(),

      user: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      shared_cart_details: CartModel.SharedCartDetails(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_promise: CartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      currency: CartModel.CartCurrency(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      cart: CartModel.SharedCart(),

      error: Joi.string().allow(""),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

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

  static LadderPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

      offer_price: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      margin: Joi.number(),

      price: CartModel.LadderPrice(),

      max_quantity: Joi.number(),

      min_quantity: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      description: Joi.string().allow(""),

      id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),
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
