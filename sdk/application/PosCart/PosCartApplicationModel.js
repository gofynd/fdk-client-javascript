const Joi = require("joi");

class PosCartModel {
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
      coupon: Joi.number(),

      total: Joi.number(),

      convenience_fee: Joi.number(),

      you_saved: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      discount: Joi.number(),

      gst_charges: Joi.number(),

      subtotal: Joi.number(),

      vog: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_cash: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      code: Joi.string().allow(""),

      value: Joi.number(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),
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
      raw: PosCartModel.RawBreakup(),

      coupon: PosCartModel.CouponBreakup(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      loyalty_points: PosCartModel.LoyaltyPoints(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      base: PosCartModel.BasePrice(),

      converted: PosCartModel.BasePrice(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      price: PosCartModel.ArticlePriceInfo(),

      seller: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      store: PosCartModel.BaseInfo(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),
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

      effective: Joi.number(),

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: PosCartModel.ProductPrice(),

      converted: PosCartModel.ProductPrice(),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      query: PosCartModel.ActionQuery(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      brand: PosCartModel.BaseInfo(),

      name: Joi.string().allow(""),

      images: Joi.array().items(PosCartModel.ProductImage()),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      action: PosCartModel.ProductAction(),
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

      ownership: PosCartModel.Ownership(),

      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      promo_meta: PosCartModel.PromoMeta(),

      article: PosCartModel.ProductArticle(),

      coupon_message: Joi.string().allow(""),

      availability: PosCartModel.ProductAvailability(),

      parent_item_identifiers: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      price: PosCartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      discount: Joi.string().allow(""),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      quantity: Joi.number(),

      product: PosCartModel.CartProduct(),

      message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),
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
      checkout_mode: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      id: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      currency: PosCartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      item_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      display: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      quantity: Joi.number(),

      store_id: Joi.number(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.AddProductCart()),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      partial: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      item_id: Joi.number(),

      extra_meta: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static UpdateCartRequest() {
    return Joi.object({
      operation: Joi.string().allow("").required(),

      items: Joi.array().items(PosCartModel.UpdateProductCart()),
    });
  }

  static UpdateCartDetailResponse() {
    return Joi.object({
      cart: PosCartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

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
      is_applicable: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      has_next: Joi.boolean(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),
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

  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static OfferPrice() {
    return Joi.object({
      bulk_effective: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      total: Joi.number(),

      price: PosCartModel.OfferPrice(),

      margin: Joi.number(),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      auto_applied: Joi.boolean(),

      best: Joi.boolean(),
    });
  }

  static BulkPriceOffer() {
    return Joi.object({
      seller: PosCartModel.OfferSeller(),

      offers: Joi.array().items(PosCartModel.OfferItem()),
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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      google_map_point: Joi.any(),

      area_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      address: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      country_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      is_active: Joi.boolean(),

      id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(PosCartModel.Address()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

      id: Joi.string().allow(""),

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
      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      discount: Joi.number(),

      title: Joi.string().allow(""),
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
      fulfillment_id: Joi.number(),

      dp_options: Joi.any().allow(null),

      fulfillment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      shipment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      box_type: Joi.string().allow("").allow(null),

      promise: PosCartModel.ShipmentPromise(),

      dp_id: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      error: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      id: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
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

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static Files() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      delivery_address: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      staff: PosCartModel.StaffCheckout(),

      payment_identifier: Joi.string().allow("").allow(null),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      order_type: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      files: Joi.array().items(PosCartModel.Files()),

      pos: Joi.boolean(),

      ordering_store: Joi.number().allow(null),

      callback_url: Joi.string().allow("").allow(null),

      pick_at_store_uid: Joi.number().allow(null),

      extra_meta: Joi.any(),

      billing_address: Joi.any(),

      payment_params: Joi.any().allow(null),

      meta: Joi.any(),

      aggregator: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static CheckCart() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      cart_id: Joi.number(),

      delivery_charges: Joi.number(),

      order_id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      cod_message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      store_code: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      error_message: Joi.string().allow(""),

      message: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      success: Joi.boolean(),

      cod_charges: Joi.number(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      cod_available: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      success: Joi.boolean(),

      data: Joi.any(),

      app_intercept_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      message: Joi.string().allow(""),
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

  static CartDeliveryModesResponse() {
    return Joi.object({
      available_modes: Joi.array().items(Joi.string().allow("")),

      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      pincode: Joi.number(),

      name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      id: Joi.number(),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      uid: Joi.number(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.PickupStoreDetail()),
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

      user: Joi.any(),

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      cart_id: Joi.number(),

      buy_now: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),
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
