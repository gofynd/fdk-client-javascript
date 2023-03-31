const Joi = require("joi");

class PosCartModel {
  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      add_on: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
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
      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
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

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CartProduct() {
    return Joi.object({
      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      images: Joi.array().items(PosCartModel.ProductImage()),

      net_quantity: PosCartModel.NetQuantity(),

      item_code: Joi.string().allow("").allow(null),

      uid: Joi.number(),

      action: PosCartModel.ProductAction(),

      name: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      brand: PosCartModel.BaseInfo(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_id: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: PosCartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      ownership: PosCartModel.Ownership(),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      promotion_group: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      offer_text: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      price: PosCartModel.ArticlePriceInfo(),

      store: PosCartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      seller: PosCartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      extra_meta: Joi.any(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      bulk_offer: Joi.any(),

      message: Joi.string().allow(""),

      price: PosCartModel.ProductPriceInfo(),

      coupon_message: Joi.string().allow(""),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      discount: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      availability: PosCartModel.ProductAvailability(),

      quantity: Joi.number(),

      product: PosCartModel.CartProduct(),

      is_set: Joi.boolean(),

      promo_meta: PosCartModel.PromoMeta(),

      parent_item_identifiers: Joi.any(),

      key: Joi.string().allow(""),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      article: PosCartModel.ProductArticle(),
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
      timestamp: PosCartModel.PromiseTimestamp(),

      formatted: PosCartModel.PromiseFormatted(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      coupon_value: Joi.number(),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      delivery_charge: Joi.number(),

      convenience_fee: Joi.number(),

      mrp_total: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      gst_charges: Joi.number(),

      coupon: Joi.number(),

      you_saved: Joi.number(),

      discount: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      cod_charge: Joi.number(),
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

  static DisplayBreakup() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: PosCartModel.CouponBreakup(),

      raw: PosCartModel.RawBreakup(),

      loyalty_points: PosCartModel.LoyaltyPoints(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      pan_config: Joi.any(),

      pan_no: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      pos: Joi.boolean(),

      extra_meta: Joi.any(),

      item_id: Joi.number(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      item_id: Joi.number(),
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

      success: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_value: Joi.number(),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      current: Joi.number(),

      total_item_count: Joi.number(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),
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

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      price: PosCartModel.OfferPrice(),

      auto_applied: Joi.boolean(),

      best: Joi.boolean(),

      margin: Joi.number(),

      quantity: Joi.number(),

      total: Joi.number(),
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
      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      created_by_user_id: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      meta: Joi.any(),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      google_map_point: Joi.any(),

      area_code_slug: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      country_phone_code: Joi.string().allow(""),

      email: Joi.string().allow(""),
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
      id: Joi.string().allow(""),

      is_deleted: Joi.boolean(),
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
      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),
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
      promise: PosCartModel.ShipmentPromise(),

      order_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),

      dp_id: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      cart_id: Joi.number(),

      message: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      error: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      shipment_type: Joi.string().allow("").required(),

      article_uid: Joi.string().allow("").required(),

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

  static Files() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
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
      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      delivery_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      files: Joi.array().items(PosCartModel.Files()),

      aggregator: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      pos: Joi.boolean(),

      ordering_store: Joi.number().allow(null),

      payment_params: Joi.any().allow(null),

      order_type: Joi.string().allow("").required(),

      meta: Joi.any(),

      extra_meta: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      billing_address: Joi.any(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      staff: PosCartModel.StaffCheckout(),

      pick_at_store_uid: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),

      callback_url: Joi.string().allow("").allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      success: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_promise: PosCartModel.ShipmentPromise(),

      store_emps: Joi.array().items(Joi.any()),

      coupon_text: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      cod_charges: Joi.number(),

      buy_now: Joi.boolean(),

      store_code: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      cart_id: Joi.number(),

      uid: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      cod_available: Joi.boolean(),

      gstin: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      data: Joi.any(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      checkout_mode: Joi.string().allow(""),

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
      available_modes: Joi.array().items(Joi.string().allow("")),

      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      area_code_slug: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      uid: Joi.number(),

      area_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.number(),

      id: Joi.number(),

      store_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

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
      meta: Joi.any(),

      user: Joi.any(),

      source: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      id: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_promise: PosCartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      buy_now: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      cart_id: Joi.number(),

      uid: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
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
