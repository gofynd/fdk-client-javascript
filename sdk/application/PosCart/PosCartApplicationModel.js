const Joi = require("joi");

class PosCartModel {
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
      timestamp: PosCartModel.PromiseTimestamp(),

      formatted: PosCartModel.PromiseFormatted(),
    });
  }

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

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: PosCartModel.ProductPrice(),

      converted: PosCartModel.ProductPrice(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      free_gift_item_details: PosCartModel.FreeGiftItem(),

      quantity: Joi.number(),
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
      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      ownership: PosCartModel.Ownership(),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),
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

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      brand: PosCartModel.BaseInfo(),

      uid: Joi.number(),

      item_code: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      net_quantity: PosCartModel.NetQuantity(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      name: Joi.string().allow(""),

      action: PosCartModel.ProductAction(),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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
      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      size: Joi.string().allow(""),

      seller: PosCartModel.BaseInfo(),

      price: PosCartModel.ArticlePriceInfo(),

      store: PosCartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      bulk_offer: Joi.any(),

      quantity: Joi.number(),

      message: Joi.string().allow(""),

      key: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      promo_meta: PosCartModel.PromoMeta(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      is_set: Joi.boolean(),

      product: PosCartModel.CartProduct(),

      availability: PosCartModel.ProductAvailability(),

      coupon_message: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      price: PosCartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      article: PosCartModel.ProductArticle(),
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

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      delivery_charge: Joi.number(),

      vog: Joi.number(),

      mrp_total: Joi.number(),

      discount: Joi.number(),

      gst_charges: Joi.number(),

      coupon: Joi.number(),

      fynd_cash: Joi.number(),

      total: Joi.number(),

      cod_charge: Joi.number(),

      you_saved: Joi.number(),

      convenience_fee: Joi.number(),

      subtotal: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: PosCartModel.LoyaltyPoints(),

      coupon: PosCartModel.CouponBreakup(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      raw: PosCartModel.RawBreakup(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      pan_no: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      pan_config: Joi.any(),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      store_id: Joi.number(),

      article_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      display: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
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
      cart: PosCartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

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
      description: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      message: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      expires_on: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow(""),

      is_applied: Joi.boolean(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

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

  static OfferSeller() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static OfferPrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      bulk_effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      quantity: Joi.number(),

      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),

      margin: Joi.number(),

      best: Joi.boolean(),

      total: Joi.number(),

      price: PosCartModel.OfferPrice(),
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
      country_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      city: Joi.string().allow(""),

      google_map_point: Joi.any(),

      country: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      area_code_slug: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      name: Joi.string().allow(""),

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
      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

      id: Joi.string().allow(""),
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
      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

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
      shipments: Joi.number(),

      fulfillment_id: Joi.number(),

      promise: PosCartModel.ShipmentPromise(),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      order_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      error: Joi.boolean(),

      cart_id: Joi.number(),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      currency: PosCartModel.CartCurrency(),

      comment: Joi.string().allow(""),

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

  static StaffCheckout() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      payment_mode: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      extra_meta: Joi.any(),

      pos: Joi.boolean(),

      billing_address: Joi.any(),

      aggregator: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      files: Joi.array().items(PosCartModel.Files()),

      payment_params: Joi.any().allow(null),

      billing_address_id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      delivery_address: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      staff: PosCartModel.StaffCheckout(),

      pick_at_store_uid: Joi.number().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      uid: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      cod_charges: Joi.number(),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      currency: PosCartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charge_info: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      success: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      cart_id: Joi.number(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      cod_available: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      is_valid: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: PosCartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      checkout_mode: Joi.string().allow(""),

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
      area_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      id: Joi.number(),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),

      user: Joi.any(),

      source: Joi.any(),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      currency: PosCartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.number(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),
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
