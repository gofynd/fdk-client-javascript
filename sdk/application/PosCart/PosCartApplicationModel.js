const Joi = require("joi");

class PosCartModel {
  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
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
      formatted: PosCartModel.PromiseFormatted(),

      timestamp: PosCartModel.PromiseTimestamp(),
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
      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      vog: Joi.number(),

      gst_charges: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      convenience_fee: Joi.number(),

      coupon: Joi.number(),

      you_saved: Joi.number(),

      discount: Joi.number(),

      mrp_total: Joi.number(),

      total: Joi.number(),

      subtotal: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      value: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: PosCartModel.LoyaltyPoints(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      raw: PosCartModel.RawBreakup(),

      coupon: PosCartModel.CouponBreakup(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: PosCartModel.ProductPrice(),

      converted: PosCartModel.ProductPrice(),
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
      price: PosCartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      store: PosCartModel.BaseInfo(),
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

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      slug: Joi.string().allow(""),

      brand: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),

      action: PosCartModel.ProductAction(),

      images: Joi.array().items(PosCartModel.ProductImage()),
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

      promotion_type: Joi.string().allow(""),

      ownership: PosCartModel.Ownership(),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      offer_text: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),
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

  static CartProductInfo() {
    return Joi.object({
      availability: PosCartModel.ProductAvailability(),

      price: PosCartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      article: PosCartModel.ProductArticle(),

      parent_item_identifiers: Joi.any(),

      bulk_offer: Joi.any(),

      quantity: Joi.number(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      product: PosCartModel.CartProduct(),

      discount: Joi.string().allow(""),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      key: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      promo_meta: PosCartModel.PromoMeta(),

      coupon_message: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      checkout_mode: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      display: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      pos: Joi.boolean(),

      article_id: Joi.string().allow(""),

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
      success: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

      partial: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      item_index: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      article_id: Joi.string().allow(""),
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
      success: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

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
      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      is_applicable: Joi.boolean(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_next: Joi.boolean(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),

      total: Joi.number(),
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
      marked: Joi.number(),

      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      price: PosCartModel.OfferPrice(),

      margin: Joi.number(),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      best: Joi.boolean(),

      total: Joi.number(),

      auto_applied: Joi.boolean(),
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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      address: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      google_map_point: Joi.any(),

      country_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      meta: Joi.any(),

      city: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      state: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area: Joi.string().allow(""),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(PosCartModel.Address()),
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
      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      is_updated: Joi.boolean(),

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
      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      discount: Joi.number(),

      valid: Joi.boolean(),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),

      coupon_validity: PosCartModel.CouponValidity(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      promise: PosCartModel.ShipmentPromise(),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      shipments: Joi.number(),

      fulfillment_id: Joi.number(),

      shipment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      error: Joi.boolean(),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      uid: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.number(),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      shipment_type: Joi.string().allow("").required(),

      quantity: Joi.number(),

      article_uid: Joi.string().allow("").required(),
    });
  }

  static UpdateCartShipmentRequest() {
    return Joi.object({
      shipments: Joi.array()
        .items(PosCartModel.UpdateCartShipmentItem())
        .required(),
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
      first_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
    });
  }

  static Files() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      delivery_address: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),

      payment_identifier: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      order_type: Joi.string().allow("").required(),

      staff: PosCartModel.StaffCheckout(),

      merchant_code: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      payment_mode: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      files: Joi.array().items(PosCartModel.Files()),

      extra_meta: Joi.any(),

      meta: Joi.any(),

      aggregator: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      pos: Joi.boolean(),
    });
  }

  static CheckCart() {
    return Joi.object({
      comment: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      currency: PosCartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      success: Joi.boolean(),

      cod_charges: Joi.number(),

      order_id: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      cart_id: Joi.number(),

      breakup_values: PosCartModel.CartBreakup(),

      cod_available: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: PosCartModel.CheckCart(),

      payment_confirm_url: Joi.string().allow(""),

      data: Joi.any(),

      callback_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      uid: Joi.number(),

      address: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      id: Joi.number(),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),
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
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      source: Joi.any(),

      token: Joi.string().allow(""),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      comment: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      breakup_values: PosCartModel.CartBreakup(),
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
