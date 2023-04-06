const Joi = require("joi");

class PosCartModel {
  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static PromiseTimestamp() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static ShipmentPromise() {
    return Joi.object({
      timestamp: PosCartModel.PromiseTimestamp(),

      formatted: PosCartModel.PromiseFormatted(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),

      offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: PosCartModel.FreeGiftItem(),

      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
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
      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      ownership: PosCartModel.Ownership(),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      add_on: Joi.number(),

      marked: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: PosCartModel.ProductPrice(),

      base: PosCartModel.ProductPrice(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
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
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

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
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),
    });
  }

  static CartProduct() {
    return Joi.object({
      name: Joi.string().allow(""),

      item_code: Joi.string().allow("").allow(null),

      net_quantity: PosCartModel.NetQuantity(),

      brand: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      images: Joi.array().items(PosCartModel.ProductImage()),

      action: PosCartModel.ProductAction(),

      slug: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

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
      quantity: Joi.number(),

      extra_meta: Joi.any(),

      price: PosCartModel.ArticlePriceInfo(),

      size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      store: PosCartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      type: Joi.string().allow(""),

      seller: PosCartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
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
      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      quantity: Joi.number(),

      coupon_message: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      price: PosCartModel.ProductPriceInfo(),

      product: PosCartModel.CartProduct(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      article: PosCartModel.ProductArticle(),

      availability: PosCartModel.ProductAvailability(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      key: Joi.string().allow(""),

      is_set: Joi.boolean(),

      promo_meta: PosCartModel.PromoMeta(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),
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
      value: Joi.number(),

      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      mrp_total: Joi.number(),

      discount: Joi.number(),

      vog: Joi.number(),

      delivery_charge: Joi.number(),

      coupon: Joi.number(),

      total: Joi.number(),

      fynd_cash: Joi.number(),

      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      you_saved: Joi.number(),

      gst_charges: Joi.number(),

      cod_charge: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: PosCartModel.CouponBreakup(),

      loyalty_points: PosCartModel.LoyaltyPoints(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      raw: PosCartModel.RawBreakup(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      currency: PosCartModel.CartCurrency(),

      pan_no: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      pan_config: Joi.any(),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      seller_id: Joi.number(),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      pos: Joi.boolean(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      store_id: Joi.number(),

      display: Joi.string().allow(""),

      item_id: Joi.number(),

      _custom_json: Joi.any(),

      article_assignment: Joi.any(),
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

      message: Joi.string().allow(""),

      cart: PosCartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      item_id: Joi.number(),

      _custom_json: Joi.any(),

      item_index: Joi.number(),
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
      current: Joi.number(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),
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
      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      quantity: Joi.number(),

      margin: Joi.number(),

      price: PosCartModel.OfferPrice(),

      total: Joi.number(),

      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),

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
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      name: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      country_iso_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      country_phone_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      meta: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      state: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      id: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      pii_masking: Joi.boolean(),

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
      is_updated: Joi.boolean(),

      success: Joi.boolean(),

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
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
      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      title: Joi.string().allow(""),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      coupon_validity: PosCartModel.CouponValidity(),

      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      dp_id: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),

      promise: PosCartModel.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      fulfillment_id: Joi.number(),

      shipment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      error: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),
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

  static CartCheckoutCustomMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
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
      extra_meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      payment_params: Joi.any().allow(null),

      pos: Joi.boolean(),

      delivery_address: Joi.any(),

      order_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),

      ordering_store: Joi.number().allow(null),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      staff: PosCartModel.StaffCheckout(),

      meta: Joi.any(),

      billing_address: Joi.any(),

      merchant_code: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      files: Joi.array().items(PosCartModel.Files()),
    });
  }

  static CheckCart() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      store_emps: Joi.array().items(Joi.any()),

      error_message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      breakup_values: PosCartModel.CartBreakup(),

      cod_available: Joi.boolean(),

      cod_charges: Joi.number(),

      coupon_text: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      success: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      store_code: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      user_type: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      cart: PosCartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      order_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      success: Joi.boolean(),
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
      pickup_stores: Joi.array().items(Joi.number()),

      available_modes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      pincode: Joi.number(),

      uid: Joi.number(),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),

      id: Joi.number(),
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

      meta: Joi.any(),

      user: Joi.any(),

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      comment: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

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
