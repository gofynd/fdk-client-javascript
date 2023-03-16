const Joi = require("joi");

class CartModel {
  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
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

  static CartProduct() {
    return Joi.object({
      images: Joi.array().items(CartModel.ProductImage()),

      uid: Joi.number(),

      action: CartModel.ProductAction(),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      effective: Joi.number(),

      add_on: Joi.number(),
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
      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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
      parent_item_identifiers: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),

      type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      seller: CartModel.BaseInfo(),

      store: CartModel.BaseInfo(),
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

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      ownership: CartModel.Ownership(),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      is_set: Joi.boolean(),

      product: CartModel.CartProduct(),

      parent_item_identifiers: Joi.any(),

      price: CartModel.ProductPriceInfo(),

      key: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      discount: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      article: CartModel.ProductArticle(),

      identifiers: CartModel.CartProductIdentifer().required(),

      promo_meta: CartModel.PromoMeta(),

      bulk_offer: Joi.any(),

      quantity: Joi.number(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),
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

  static RawBreakup() {
    return Joi.object({
      convenience_fee: Joi.number(),

      fynd_cash: Joi.number(),

      coupon: Joi.number(),

      subtotal: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      cod_charge: Joi.number(),

      you_saved: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      mrp_total: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),

      applicable: Joi.number(),

      total: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      value: Joi.number(),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      article_assignment: Joi.any(),

      item_id: Joi.number(),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      pos: Joi.boolean(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),

      partial: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      _custom_json: Joi.any(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),
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

  static PageCoupon() {
    return Joi.object({
      has_previous: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      bulk_effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      price: CartModel.OfferPrice(),

      type: Joi.string().allow(""),

      margin: Joi.number(),

      best: Joi.boolean(),

      total: Joi.number(),

      quantity: Joi.number(),

      auto_applied: Joi.boolean(),
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
      country_phone_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      area: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      country_iso_code: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      meta: Joi.any(),

      is_default_address: Joi.boolean(),

      phone: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      address_type: Joi.string().allow(""),
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

      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),
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
      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

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
      coupon_validity: CartModel.CouponValidity(),

      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),

      dp_options: Joi.any().allow(null),

      dp_id: Joi.string().allow("").allow(null),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      order_type: Joi.string().allow(""),

      shipments: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      currency: CartModel.CartCurrency(),

      error: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      checkout_mode: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      coupon_text: Joi.string().allow(""),
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
      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      ordering_store: Joi.number().allow(null),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      aggregator: Joi.string().allow(""),

      extra_meta: Joi.any(),

      meta: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      delivery_address: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      staff: CartModel.StaffCheckout(),

      payment_auto_confirm: Joi.boolean(),

      address_id: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      breakup_values: CartModel.CartBreakup(),

      cod_charges: Joi.number(),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      cod_message: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charges: Joi.number(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      success: Joi.boolean(),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      data: Joi.any(),

      callback_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CheckCart(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

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
      meta: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      currency: CartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),
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
      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      id: Joi.string().allow(""),

      description: Joi.string().allow(""),

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

  static CurrencyInfo() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static LadderPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      offer_price: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      price: CartModel.LadderPrice(),

      min_quantity: Joi.number(),

      max_quantity: Joi.number(),

      type: Joi.string().allow(""),

      margin: Joi.number(),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      id: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      description: Joi.string().allow(""),

      valid_till: Joi.string().allow(""),
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
