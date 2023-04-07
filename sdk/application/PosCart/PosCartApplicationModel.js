const Joi = require("joi");

class PosCartModel {
  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

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
      _custom_json: Joi.any(),

      quantity: Joi.number(),

      seller: PosCartModel.BaseInfo(),

      price: PosCartModel.ArticlePriceInfo(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      store: PosCartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      item_code: Joi.string().allow("").allow(null),

      images: Joi.array().items(PosCartModel.ProductImage()),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      action: PosCartModel.ProductAction(),

      net_quantity: PosCartModel.NetQuantity(),

      brand: PosCartModel.BaseInfo(),

      slug: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      effective: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: PosCartModel.ProductPrice(),

      base: PosCartModel.ProductPrice(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      offer: Joi.any(),

      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: PosCartModel.FreeGiftItem(),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      ownership: PosCartModel.Ownership(),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      is_set: Joi.boolean(),

      article: PosCartModel.ProductArticle(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      message: Joi.string().allow(""),

      product: PosCartModel.CartProduct(),

      price: PosCartModel.ProductPriceInfo(),

      bulk_offer: Joi.any(),

      coupon_message: Joi.string().allow(""),

      availability: PosCartModel.ProductAvailability(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      key: Joi.string().allow(""),

      promo_meta: PosCartModel.PromoMeta(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      coupon_value: Joi.number(),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      value: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      total: Joi.number(),

      applicable: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      delivery_charge: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      mrp_total: Joi.number(),

      total: Joi.number(),

      subtotal: Joi.number(),

      gst_charges: Joi.number(),

      coupon: Joi.number(),

      fynd_cash: Joi.number(),

      you_saved: Joi.number(),

      vog: Joi.number(),

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

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
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

  static CartDetailResponse() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      pan_config: Joi.any(),

      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      seller_id: Joi.number(),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      pos: Joi.boolean(),

      item_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_assignment: Joi.any(),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      store_id: Joi.number(),
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

      success: Joi.boolean(),

      partial: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      item_index: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),
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

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_next: Joi.boolean(),

      total_item_count: Joi.number(),

      current: Joi.number(),

      total: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      is_applicable: Joi.boolean(),

      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),
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
      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      margin: Joi.number(),

      quantity: Joi.number(),

      price: PosCartModel.OfferPrice(),

      total: Joi.number(),

      type: Joi.string().allow(""),

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
      address: Joi.string().allow(""),

      google_map_point: Joi.any(),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      meta: Joi.any(),

      area_code_slug: Joi.string().allow(""),

      city: Joi.string().allow(""),

      is_active: Joi.boolean(),

      area: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
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

      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      display_message_en: Joi.string().allow("").allow(null),

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
      order_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      shipments: Joi.number(),

      promise: PosCartModel.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      error: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      cart_id: Joi.number(),
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
      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      order_type: Joi.string().allow("").required(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      payment_params: Joi.any().allow(null),

      payment_auto_confirm: Joi.boolean(),

      files: Joi.array().items(PosCartModel.Files()),

      delivery_address: Joi.any(),

      meta: Joi.any(),

      pick_at_store_uid: Joi.number().allow(null),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      staff: PosCartModel.StaffCheckout(),

      billing_address: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      payment_identifier: Joi.string().allow("").allow(null),

      ordering_store: Joi.number().allow(null),

      aggregator: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      cod_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      error_message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      success: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      gstin: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      delivery_promise: PosCartModel.ShipmentPromise(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      cod_charges: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      order_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      breakup_values: PosCartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      cart_id: Joi.number(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      success: Joi.boolean(),

      order_id: Joi.string().allow(""),
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
      available_modes: Joi.array().items(Joi.string().allow("")),

      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.number(),

      email: Joi.string().allow(""),

      id: Joi.number(),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),
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
      user: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),

      meta: Joi.any(),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      uid: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      cart_id: Joi.number(),
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
