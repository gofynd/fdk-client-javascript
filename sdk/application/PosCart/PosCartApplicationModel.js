const Joi = require("joi");

class PosCartModel {
  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      value: Joi.number(),

      is_applied: Joi.boolean(),
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

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      applicable: Joi.number(),

      total: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      gst_charges: Joi.number(),

      coupon: Joi.number(),

      you_saved: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charge: Joi.number(),

      vog: Joi.number(),

      fynd_cash: Joi.number(),

      mrp_total: Joi.number(),

      total: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: PosCartModel.CouponBreakup(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      loyalty_points: PosCartModel.LoyaltyPoints(),

      raw: PosCartModel.RawBreakup(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
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

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: PosCartModel.ProductPrice(),

      converted: PosCartModel.ProductPrice(),
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

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      slug: Joi.string().allow(""),

      action: PosCartModel.ProductAction(),

      brand: PosCartModel.BaseInfo(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      uid: Joi.number(),

      images: Joi.array().items(PosCartModel.ProductImage()),
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
      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      ownership: PosCartModel.Ownership(),

      mrp_promotion: Joi.boolean(),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      base: PosCartModel.BasePrice(),

      converted: PosCartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      type: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      seller: PosCartModel.BaseInfo(),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      store: PosCartModel.BaseInfo(),

      price: PosCartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      coupon_message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      availability: PosCartModel.ProductAvailability(),

      parent_item_identifiers: Joi.any(),

      message: Joi.string().allow(""),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      key: Joi.string().allow(""),

      product: PosCartModel.CartProduct(),

      discount: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      price: PosCartModel.ProductPriceInfo(),

      bulk_offer: Joi.any(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      article: PosCartModel.ProductArticle(),

      promo_meta: PosCartModel.PromoMeta(),

      quantity: Joi.number(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      breakup_values: PosCartModel.CartBreakup(),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      currency: PosCartModel.CartCurrency(),

      comment: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      seller_id: Joi.number(),

      pos: Joi.boolean(),

      store_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      article_assignment: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      display: Joi.string().allow(""),

      quantity: Joi.number(),
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

      partial: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),
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
      title: Joi.string().allow(""),

      coupon_value: Joi.number(),

      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applicable: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      is_applied: Joi.boolean(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      total_item_count: Joi.number(),

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

  static OfferPrice() {
    return Joi.object({
      bulk_effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      margin: Joi.number(),

      type: Joi.string().allow(""),

      auto_applied: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

      total: Joi.number(),

      best: Joi.boolean(),

      quantity: Joi.number(),
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
      geo_location: PosCartModel.GeoLocation(),

      area_code: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      meta: Joi.any(),

      area_code_slug: Joi.string().allow(""),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      phone: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
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

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      id: Joi.string().allow(""),

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
      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      display_message_en: Joi.string().allow("").allow(null),

      discount: Joi.number(),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      success: Joi.boolean().required(),

      coupon_validity: PosCartModel.CouponValidity(),

      message: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),

      order_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      promise: PosCartModel.ShipmentPromise(),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      error: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),
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

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

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

  static Files() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      billing_address_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      billing_address: Joi.any(),

      delivery_address: Joi.any(),

      meta: Joi.any(),

      address_id: Joi.string().allow(""),

      staff: PosCartModel.StaffCheckout(),

      payment_mode: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),

      pos: Joi.boolean(),

      aggregator: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      order_type: Joi.string().allow("").required(),

      ordering_store: Joi.number().allow(null),

      files: Joi.array().items(PosCartModel.Files()),

      merchant_code: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      delivery_charges: Joi.number(),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      user_type: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      success: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      cod_charges: Joi.number(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: PosCartModel.CheckCart(),

      app_intercept_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),
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
      pickup_stores: Joi.array().items(Joi.number()),

      available_modes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      area: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      id: Joi.number(),

      store_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      uid: Joi.number(),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),
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
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      user: Joi.any(),

      source: Joi.any(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      shared_cart_details: PosCartModel.SharedCartDetails(),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      cart: PosCartModel.SharedCart(),
    });
  }
}
module.exports = PosCartModel;
