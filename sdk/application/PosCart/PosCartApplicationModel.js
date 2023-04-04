const Joi = require("joi");

class PosCartModel {
  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      applicable: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      total: Joi.number(),

      mrp_total: Joi.number(),

      delivery_charge: Joi.number(),

      gst_charges: Joi.number(),

      you_saved: Joi.number(),

      cod_charge: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      subtotal: Joi.number(),

      vog: Joi.number(),

      fynd_cash: Joi.number(),

      discount: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      value: Joi.number(),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      title: Joi.string().allow("").allow(null),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      loyalty_points: PosCartModel.LoyaltyPoints(),

      raw: PosCartModel.RawBreakup(),

      coupon: PosCartModel.CouponBreakup(),
    });
  }

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

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
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
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      action: PosCartModel.ProductAction(),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow("").allow(null),

      images: Joi.array().items(PosCartModel.ProductImage()),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      brand: PosCartModel.BaseInfo(),

      net_quantity: PosCartModel.NetQuantity(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: PosCartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      ownership: PosCartModel.Ownership(),

      promo_id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      add_on: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: PosCartModel.ProductPrice(),

      base: PosCartModel.ProductPrice(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
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
      parent_item_identifiers: Joi.any(),

      store: PosCartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      price: PosCartModel.ArticlePriceInfo(),

      size: Joi.string().allow(""),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      seller: PosCartModel.BaseInfo(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      product: PosCartModel.CartProduct(),

      parent_item_identifiers: Joi.any(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      availability: PosCartModel.ProductAvailability(),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      is_set: Joi.boolean(),

      price: PosCartModel.ProductPriceInfo(),

      coupon_message: Joi.string().allow(""),

      promo_meta: PosCartModel.PromoMeta(),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      article: PosCartModel.ProductArticle(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      message: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      pan_config: Joi.any(),

      restrict_checkout: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),
    });
  }

  static AddProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      article_assignment: Joi.any(),

      article_id: Joi.string().allow(""),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      pos: Joi.boolean(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      new_cart: Joi.boolean(),

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
      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),
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
      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static OfferPrice() {
    return Joi.object({
      bulk_effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      total: Joi.number(),

      quantity: Joi.number(),

      best: Joi.boolean(),

      auto_applied: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

      type: Joi.string().allow(""),

      margin: Joi.number(),
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
      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      is_active: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      country: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      meta: Joi.any(),

      google_map_point: Joi.any(),

      is_default_address: Joi.boolean(),

      user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(PosCartModel.Address()),

      pii_masking: Joi.boolean(),
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
      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

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
      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      aggregator_name: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      title: Joi.string().allow(""),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      coupon_validity: PosCartModel.CouponValidity(),

      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      shipment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      promise: PosCartModel.ShipmentPromise(),

      fulfillment_id: Joi.number(),

      order_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      currency: PosCartModel.CartCurrency(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      error: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      quantity: Joi.number(),

      article_uid: Joi.string().allow("").required(),

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
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),
    });
  }

  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      payment_auto_confirm: Joi.boolean(),

      ordering_store: Joi.number().allow(null),

      files: Joi.array().items(PosCartModel.Files()),

      extra_meta: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      delivery_address: Joi.any(),

      staff: PosCartModel.StaffCheckout(),

      billing_address: Joi.any(),

      address_id: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      aggregator: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      meta: Joi.any(),

      pos: Joi.boolean(),

      callback_url: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow("").required(),
    });
  }

  static CheckCart() {
    return Joi.object({
      store_emps: Joi.array().items(Joi.any()),

      comment: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      delivery_charge_order_value: Joi.number(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      error_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      cod_charges: Joi.number(),

      store_code: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      success: Joi.boolean(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      breakup_values: PosCartModel.CartBreakup(),

      currency: PosCartModel.CartCurrency(),

      order_id: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

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

  static CartDeliveryModesResponse() {
    return Joi.object({
      available_modes: Joi.array().items(Joi.string().allow("")),

      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      city: Joi.string().allow(""),

      id: Joi.number(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      uid: Joi.number(),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      source: Joi.any(),

      user: Joi.any(),

      meta: Joi.any(),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      comment: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      breakup_values: PosCartModel.CartBreakup(),

      currency: PosCartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),
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
