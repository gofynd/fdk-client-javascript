const Joi = require("joi");

class CartModel {
  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
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

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
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
      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      brand: CartModel.BaseInfo(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      type: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      action: CartModel.ProductAction(),

      name: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      offer_text: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      ownership: CartModel.Ownership(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

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
      store: CartModel.BaseInfo(),

      seller: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      type: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      parent_item_identifiers: Joi.any(),

      size: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      identifiers: CartModel.CartProductIdentifer().required(),

      product: CartModel.CartProduct(),

      discount: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      key: Joi.string().allow(""),

      quantity: Joi.number(),

      availability: CartModel.ProductAvailability(),

      message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      is_set: Joi.boolean(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      promo_meta: CartModel.PromoMeta(),

      price: CartModel.ProductPriceInfo(),

      coupon_message: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
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

  static RawBreakup() {
    return Joi.object({
      total: Joi.number(),

      gst_charges: Joi.number(),

      you_saved: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      vog: Joi.number(),

      mrp_total: Joi.number(),

      coupon: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      subtotal: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      value: Joi.number(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),
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

  static CartDetailResponse() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      article_id: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      pos: Joi.boolean(),

      quantity: Joi.number(),

      store_id: Joi.number(),

      article_assignment: Joi.any(),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

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

      success: Joi.boolean(),

      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

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
      total: Joi.number(),

      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applicable: Joi.boolean(),

      message: Joi.string().allow(""),

      coupon_value: Joi.number(),

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

  static OfferPrice() {
    return Joi.object({
      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      total: Joi.number(),

      margin: Joi.number(),

      quantity: Joi.number(),

      best: Joi.boolean(),

      price: CartModel.OfferPrice(),

      type: Joi.string().allow(""),

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
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      is_active: Joi.boolean(),

      geo_location: CartModel.GeoLocation(),

      area_code_slug: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      id: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      google_map_point: Joi.any(),

      address: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      meta: Joi.any(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      name: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      email: Joi.string().allow(""),
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
      is_updated: Joi.boolean(),

      success: Joi.boolean(),

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
      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

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

      coupon_validity: CartModel.CouponValidity(),

      success: Joi.boolean().required(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      order_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),

      fulfillment_id: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      checkout_mode: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      cart_id: Joi.number(),

      uid: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      error: Joi.boolean(),
    });
  }

  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      billing_address: Joi.any(),

      ordering_store: Joi.number().allow(null),

      callback_url: Joi.string().allow("").allow(null),

      extra_meta: Joi.any(),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      delivery_address: Joi.any(),

      payment_params: Joi.any().allow(null),

      payment_auto_confirm: Joi.boolean(),

      address_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      meta: Joi.any(),

      aggregator: Joi.string().allow(""),

      staff: CartModel.StaffCheckout(),
    });
  }

  static CheckCart() {
    return Joi.object({
      delivery_charges: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      error_message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cod_charges: Joi.number(),

      cart_id: Joi.number(),

      cod_message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      checkout_mode: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      success: Joi.boolean(),

      cod_available: Joi.boolean(),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      store_code: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      order_id: Joi.string().allow(""),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

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

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      token: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      shared_cart_details: CartModel.SharedCartDetails(),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      cart: CartModel.SharedCart(),
    });
  }

  static PromotionOffer() {
    return Joi.object({
      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CurrencyInfo() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static LadderPrice() {
    return Joi.object({
      offer_price: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      max_quantity: Joi.number(),

      type: Joi.string().allow(""),

      price: CartModel.LadderPrice(),

      margin: Joi.number(),

      min_quantity: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      promotion_group: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
