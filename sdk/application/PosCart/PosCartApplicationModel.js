const Joi = require("joi");

class PosCartModel {
  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      ownership: PosCartModel.Ownership(),
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

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),
    });
  }

  static CartProduct() {
    return Joi.object({
      name: Joi.string().allow(""),

      brand: PosCartModel.BaseInfo(),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      images: Joi.array().items(PosCartModel.ProductImage()),

      action: PosCartModel.ProductAction(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      add_on: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: PosCartModel.ProductPrice(),

      base: PosCartModel.ProductPrice(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      converted: PosCartModel.BasePrice(),

      base: PosCartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      size: Joi.string().allow(""),

      seller: PosCartModel.BaseInfo(),

      quantity: Joi.number(),

      _custom_json: Joi.any(),

      price: PosCartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      extra_meta: Joi.any(),

      store: PosCartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      product: PosCartModel.CartProduct(),

      quantity: Joi.number(),

      promo_meta: PosCartModel.PromoMeta(),

      discount: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      key: Joi.string().allow(""),

      price: PosCartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      coupon_message: Joi.string().allow(""),

      availability: PosCartModel.ProductAvailability(),

      is_set: Joi.boolean(),

      article: PosCartModel.ProductArticle(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static PromiseTimestamp() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static ShipmentPromise() {
    return Joi.object({
      formatted: PosCartModel.PromiseFormatted(),

      timestamp: PosCartModel.PromiseTimestamp(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      you_saved: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charge: Joi.number(),

      gst_charges: Joi.number(),

      mrp_total: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      total: Joi.number(),

      description: Joi.string().allow(""),

      applicable: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      value: Joi.number(),

      code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: PosCartModel.RawBreakup(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      loyalty_points: PosCartModel.LoyaltyPoints(),

      coupon: PosCartModel.CouponBreakup(),
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
      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),

      quantity: Joi.number(),

      pos: Joi.boolean(),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      store_id: Joi.number(),

      item_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.AddProductCart()),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      cart: PosCartModel.CartDetailResponse(),

      partial: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      item_index: Joi.number(),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),
    });
  }

  static UpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.UpdateProductCart()),

      operation: Joi.string().allow("").required(),
    });
  }

  static UpdateCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      cart: PosCartModel.CartDetailResponse(),

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

      expires_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static GetCouponResponse() {
    return Joi.object({
      available_coupon_list: Joi.array().items(PosCartModel.Coupon()),

      page: PosCartModel.PageCoupon(),
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

      marked: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      best: Joi.boolean(),

      quantity: Joi.number(),

      total: Joi.number(),

      price: PosCartModel.OfferPrice(),

      auto_applied: Joi.boolean(),

      margin: Joi.number(),

      type: Joi.string().allow(""),
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
      offers: Joi.array().items(PosCartModel.OfferItem()),

      seller: PosCartModel.OfferSeller(),
    });
  }

  static BulkPriceResponse() {
    return Joi.object({
      data: Joi.array().items(PosCartModel.BulkPriceOffer()),
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
      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      landmark: Joi.string().allow(""),

      name: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      user_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      area_code_slug: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      meta: Joi.any(),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(PosCartModel.Address()),
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

      success: Joi.boolean(),

      is_updated: Joi.boolean(),

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
      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      discount: Joi.number(),

      valid: Joi.boolean(),

      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      coupon_validity: PosCartModel.CouponValidity(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.CartProductInfo()),

      fulfillment_id: Joi.number(),

      shipments: Joi.number(),

      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      order_type: Joi.string().allow(""),

      promise: PosCartModel.ShipmentPromise(),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      error: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      article_uid: Joi.string().allow("").required(),

      quantity: Joi.number(),

      shipment_type: Joi.string().allow("").required(),
    });
  }

  static UpdateCartShipmentRequest() {
    return Joi.object({
      shipments: Joi.array()
        .items(PosCartModel.UpdateCartShipmentItem())
        .required(),
    });
  }

  static Files() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
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

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      files: Joi.array().items(PosCartModel.Files()),

      billing_address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),

      pos: Joi.boolean(),

      payment_params: Joi.any().allow(null),

      order_type: Joi.string().allow("").required(),

      payment_auto_confirm: Joi.boolean(),

      ordering_store: Joi.number().allow(null),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),

      address_id: Joi.string().allow(""),

      delivery_address: Joi.any(),

      staff: PosCartModel.StaffCheckout(),

      extra_meta: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      cod_message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      order_id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      success: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.number(),

      cod_available: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      error_message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      user_type: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      cod_charges: Joi.number(),

      store_code: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      store_emps: Joi.array().items(Joi.any()),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      data: Joi.any(),

      order_id: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

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

  static CartDeliveryModesResponse() {
    return Joi.object({
      available_modes: Joi.array().items(Joi.string().allow("")),

      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      uid: Joi.number(),

      id: Joi.number(),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.PickupStoreDetail()),
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

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      user: Joi.any(),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      cart: PosCartModel.SharedCart(),

      error: Joi.string().allow(""),
    });
  }
}
module.exports = PosCartModel;
