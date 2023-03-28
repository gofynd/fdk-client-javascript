const Joi = require("joi");

class PosCartModel {
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

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      marked: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: PosCartModel.ProductPrice(),

      base: PosCartModel.ProductPrice(),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      images: Joi.array().items(PosCartModel.ProductImage()),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      type: Joi.string().allow(""),

      action: PosCartModel.ProductAction(),

      name: Joi.string().allow(""),

      brand: PosCartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),
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
      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      ownership: PosCartModel.Ownership(),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
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
      price: PosCartModel.ArticlePriceInfo(),

      size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),

      seller: PosCartModel.BaseInfo(),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      store: PosCartModel.BaseInfo(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),
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
      price: PosCartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      product: PosCartModel.CartProduct(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      availability: PosCartModel.ProductAvailability(),

      discount: Joi.string().allow(""),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      article: PosCartModel.ProductArticle(),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      coupon_message: Joi.string().allow(""),

      promo_meta: PosCartModel.PromoMeta(),

      is_set: Joi.boolean(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      gst_charges: Joi.number(),

      total: Joi.number(),

      subtotal: Joi.number(),

      cod_charge: Joi.number(),

      discount: Joi.number(),

      coupon: Joi.number(),

      fynd_cash: Joi.number(),

      vog: Joi.number(),

      mrp_total: Joi.number(),

      convenience_fee: Joi.number(),

      you_saved: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      applicable: Joi.number(),

      total: Joi.number(),

      is_applied: Joi.boolean(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.number(),

      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),

      code: Joi.string().allow(""),
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

  static CartDetailResponse() {
    return Joi.object({
      delivery_promise: PosCartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      article_assignment: Joi.any(),

      _custom_json: Joi.any(),

      pos: Joi.boolean(),

      article_id: Joi.string().allow(""),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      item_id: Joi.number(),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
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

      message: Joi.string().allow(""),

      cart: PosCartModel.CartDetailResponse(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      identifiers: PosCartModel.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      item_index: Joi.number(),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      item_id: Joi.number(),

      extra_meta: Joi.any(),
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

      message: Joi.string().allow(""),

      cart: PosCartModel.CartDetailResponse(),
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

      current: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      total_item_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      coupon_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow(""),
    });
  }

  static GetCouponResponse() {
    return Joi.object({
      page: PosCartModel.PageCoupon(),

      available_coupon_list: Joi.array().items(PosCartModel.Coupon()),
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
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      bulk_effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      price: PosCartModel.OfferPrice(),

      total: Joi.number(),

      margin: Joi.number(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),

      best: Joi.boolean(),

      auto_applied: Joi.boolean(),
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
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      area_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      city: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      meta: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      state: Joi.string().allow(""),

      is_active: Joi.boolean(),

      country_code: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      country: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),
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

      is_default_address: Joi.boolean(),

      is_updated: Joi.boolean(),
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
      payment_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      title: Joi.string().allow(""),
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

      dp_options: Joi.any().allow(null),

      fulfillment_id: Joi.number(),

      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      breakup_values: PosCartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error: Joi.boolean(),

      buy_now: Joi.boolean(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      article_uid: Joi.string().allow("").required(),

      shipment_type: Joi.string().allow("").required(),

      quantity: Joi.number(),
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
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static Files() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      billing_address: Joi.any(),

      extra_meta: Joi.any(),

      order_type: Joi.string().allow("").required(),

      pick_at_store_uid: Joi.number().allow(null),

      ordering_store: Joi.number().allow(null),

      meta: Joi.any(),

      delivery_address: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      payment_params: Joi.any().allow(null),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      payment_identifier: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      pos: Joi.boolean(),

      files: Joi.array().items(PosCartModel.Files()),

      staff: PosCartModel.StaffCheckout(),

      aggregator: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      cod_available: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      last_modified: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart_id: Joi.number(),

      success: Joi.boolean(),

      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_charge_order_value: Joi.number(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      user_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      uid: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      cod_charges: Joi.number(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      comment: Joi.string().allow(""),

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
      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      id: Joi.number(),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.number(),

      area_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      pincode: Joi.number(),

      phone: Joi.string().allow(""),
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
      user: Joi.any(),

      meta: Joi.any(),

      source: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      uid: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),
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
