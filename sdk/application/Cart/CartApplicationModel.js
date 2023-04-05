const Joi = require("joi");

class CartModel {
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

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),
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
      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      name: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      uid: Joi.number(),

      brand: CartModel.BaseInfo(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      action: CartModel.ProductAction(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
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
      converted: CartModel.BasePrice(),

      base: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      store: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      extra_meta: Joi.any(),

      size: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      seller: CartModel.BaseInfo(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      type: Joi.string().allow(""),
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
      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      ownership: CartModel.Ownership(),

      article_quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      discount: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      product: CartModel.CartProduct(),

      price_per_unit: CartModel.ProductPriceInfo(),

      article: CartModel.ProductArticle(),

      price: CartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      bulk_offer: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      promo_meta: CartModel.PromoMeta(),

      message: Joi.string().allow(""),

      quantity: Joi.number(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      parent_item_identifiers: Joi.any(),

      key: Joi.string().allow(""),
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

  static RawBreakup() {
    return Joi.object({
      convenience_fee: Joi.number(),

      coupon: Joi.number(),

      discount: Joi.number(),

      cod_charge: Joi.number(),

      mrp_total: Joi.number(),

      gst_charges: Joi.number(),

      delivery_charge: Joi.number(),

      you_saved: Joi.number(),

      vog: Joi.number(),

      subtotal: Joi.number(),

      total: Joi.number(),

      fynd_cash: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
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
      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      store_id: Joi.number(),

      extra_meta: Joi.any(),

      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      item_size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      item_id: Joi.number(),

      pos: Joi.boolean(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

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

      partial: Joi.boolean(),

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      item_id: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),
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
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      total_item_count: Joi.number(),

      current: Joi.number(),

      total: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      is_applied: Joi.boolean(),

      title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_value: Joi.number(),
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

      effective: Joi.number(),

      marked: Joi.number(),

      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      best: Joi.boolean(),

      price: CartModel.OfferPrice(),

      margin: Joi.number(),

      quantity: Joi.number(),

      total: Joi.number(),

      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      name: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      country_code: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      user_id: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      area: Joi.string().allow(""),

      meta: Joi.any(),

      country: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_active: Joi.boolean(),

      phone: Joi.string().allow(""),

      google_map_point: Joi.any(),

      id: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
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

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

      is_updated: Joi.boolean(),
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
      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      discount: Joi.number(),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
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
      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      shipment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      fulfillment_id: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      id: Joi.string().allow(""),

      error: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      cart_id: Joi.number(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutCustomMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutDetailRequest() {
    return Joi.object({
      delivery_address: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      meta: Joi.any(),

      extra_meta: Joi.any(),

      staff: CartModel.StaffCheckout(),

      aggregator: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      ordering_store: Joi.number().allow(null),

      payment_params: Joi.any().allow(null),

      callback_url: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(CartModel.CartCheckoutCustomMeta()),

      billing_address: Joi.any(),

      merchant_code: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),
    });
  }

  static CheckCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      error_message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cod_available: Joi.boolean(),

      cod_charges: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      cod_message: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      user_type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      success: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      last_modified: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      data: Joi.any(),

      cart: CartModel.CheckCart(),
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
      meta: Joi.any(),

      token: Joi.string().allow(""),

      user: Joi.any(),

      source: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      shared_cart_details: CartModel.SharedCartDetails(),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      last_modified: Joi.string().allow(""),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
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

      description: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

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

  static CurrencyInfo() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static LadderPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      offer_price: Joi.number(),
    });
  }

  static LadderOfferItem() {
    return Joi.object({
      max_quantity: Joi.number(),

      price: CartModel.LadderPrice(),

      margin: Joi.number(),

      min_quantity: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static LadderPriceOffer() {
    return Joi.object({
      id: Joi.string().allow(""),

      offer_prices: Joi.array().items(CartModel.LadderOfferItem()),

      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

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
