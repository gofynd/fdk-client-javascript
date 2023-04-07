const Joi = require("joi");

class CartModel {
  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      brand: CartModel.BaseInfo(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      action: CartModel.ProductAction(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),
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
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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

      ownership: CartModel.Ownership(),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      offer_text: Joi.string().allow(""),

      amount: Joi.number(),
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
      converted: CartModel.BasePrice(),

      base: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      type: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      seller: CartModel.BaseInfo(),

      quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      product: CartModel.CartProduct(),

      price_per_unit: CartModel.ProductPriceInfo(),

      bulk_offer: Joi.any(),

      availability: CartModel.ProductAvailability(),

      promo_meta: CartModel.PromoMeta(),

      identifiers: CartModel.CartProductIdentifer().required(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      discount: Joi.string().allow(""),

      is_set: Joi.boolean(),

      parent_item_identifiers: Joi.any(),

      key: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      quantity: Joi.number(),

      article: CartModel.ProductArticle(),
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

  static CouponBreakup() {
    return Joi.object({
      uid: Joi.string().allow(""),

      value: Joi.number(),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      coupon: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      discount: Joi.number(),

      fynd_cash: Joi.number(),

      you_saved: Joi.number(),

      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),
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

  static CartBreakup() {
    return Joi.object({
      coupon: CartModel.CouponBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_promise: CartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      pos: Joi.boolean(),

      store_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

      item_id: Joi.number(),

      quantity: Joi.number(),

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
      message: Joi.string().allow(""),

      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

      extra_meta: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      quantity: Joi.number(),

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

  static Coupon() {
    return Joi.object({
      minimum_cart_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      title: Joi.string().allow(""),

      coupon_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total: Joi.number(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      current: Joi.number(),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static OfferPrice() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      total: Joi.number(),

      best: Joi.boolean(),

      auto_applied: Joi.boolean(),

      margin: Joi.number(),

      type: Joi.string().allow(""),

      price: CartModel.OfferPrice(),

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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      google_map_point: Joi.any(),

      address: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      meta: Joi.any(),

      country_iso_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      country: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      area_code_slug: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),

      is_active: Joi.boolean(),
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

      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

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
      dp_id: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      items: Joi.array().items(CartModel.CartProductInfo()),

      order_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      shipments: Joi.number(),

      promise: CartModel.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      checkout_mode: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      uid: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      error: Joi.boolean(),

      buy_now: Joi.boolean(),
    });
  }

  static CartCheckoutCustomMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      extra_meta: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      payment_mode: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      address_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      callback_url: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      billing_address: Joi.any(),

      delivery_address: Joi.any(),

      aggregator: Joi.string().allow(""),

      staff: CartModel.StaffCheckout(),

      billing_address_id: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      checkout_mode: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charges: Joi.number(),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      error_message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      success: Joi.boolean(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      cod_available: Joi.boolean(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      cod_charges: Joi.number(),

      gstin: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      user_type: Joi.string().allow(""),

      buy_now: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      app_intercept_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      checkout_mode: Joi.string().allow(""),
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
      token: Joi.string().allow(""),

      user: Joi.any(),

      source: Joi.any(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      checkout_mode: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),
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
      description: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
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
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static LadderPrice() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      offer_price: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      min_quantity: Joi.number(),

      margin: Joi.number(),

      type: Joi.string().allow(""),

      max_quantity: Joi.number(),

      price: CartModel.LadderPrice(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      description: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      valid_till: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
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
