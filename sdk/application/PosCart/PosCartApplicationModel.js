const Joi = require("joi");

class PosCartModel {
  static RawBreakup() {
    return Joi.object({
      gst_charges: Joi.number(),

      mrp_total: Joi.number(),

      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      cod_charge: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      discount: Joi.number(),

      fynd_cash: Joi.number(),

      delivery_charge: Joi.number(),

      you_saved: Joi.number(),

      coupon: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      value: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      coupon_value: Joi.number(),

      uid: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.number(),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      total: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),
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
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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
      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      action: PosCartModel.ProductAction(),

      brand: PosCartModel.BaseInfo(),

      item_code: Joi.string().allow("").allow(null),

      slug: Joi.string().allow(""),

      images: Joi.array().items(PosCartModel.ProductImage()),

      type: Joi.string().allow(""),

      net_quantity: PosCartModel.NetQuantity(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      add_on: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: PosCartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
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
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      amount: Joi.number(),

      promotion_group: Joi.string().allow(""),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      promotion_type: Joi.string().allow(""),

      ownership: PosCartModel.Ownership(),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
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
      price: PosCartModel.ArticlePriceInfo(),

      store: PosCartModel.BaseInfo(),

      _custom_json: Joi.any(),

      size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      seller: PosCartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      product: PosCartModel.CartProduct(),

      availability: PosCartModel.ProductAvailability(),

      price: PosCartModel.ProductPriceInfo(),

      promo_meta: PosCartModel.PromoMeta(),

      key: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      discount: Joi.string().allow(""),

      message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      coupon_message: Joi.string().allow(""),

      quantity: Joi.number(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      is_set: Joi.boolean(),

      parent_item_identifiers: Joi.any(),

      article: PosCartModel.ProductArticle(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      breakup_values: PosCartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      pan_config: Joi.any(),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      display: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      pos: Joi.boolean(),

      store_id: Joi.number(),

      extra_meta: Joi.any(),

      article_assignment: Joi.any(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      parent_item_identifiers: Joi.any(),

      seller_id: Joi.number(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.AddProductCart()),

      new_cart: Joi.boolean(),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      cart: PosCartModel.CartDetailResponse(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

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
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      total_item_count: Joi.number(),

      total: Joi.number(),

      current: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),
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

  static OfferPrice() {
    return Joi.object({
      marked: Joi.number(),

      bulk_effective: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      margin: Joi.number(),

      price: PosCartModel.OfferPrice(),

      auto_applied: Joi.boolean(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      best: Joi.boolean(),

      quantity: Joi.number(),
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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      country_phone_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      country_iso_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      country_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      google_map_point: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      state: Joi.string().allow(""),
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

      is_updated: Joi.boolean(),

      success: Joi.boolean(),

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
      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),

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
      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      shipment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      promise: PosCartModel.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      dp_options: Joi.any().allow(null),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      order_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      breakup_values: PosCartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      error: Joi.boolean(),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
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

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),
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
      pick_at_store_uid: Joi.number().allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      pos: Joi.boolean(),

      billing_address: Joi.any(),

      payment_params: Joi.any().allow(null),

      files: Joi.array().items(PosCartModel.Files()),

      billing_address_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      payment_auto_confirm: Joi.boolean(),

      staff: PosCartModel.StaffCheckout(),

      aggregator: Joi.string().allow(""),

      delivery_address: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      meta: Joi.any(),

      extra_meta: Joi.any(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      payment_mode: Joi.string().allow("").required(),

      ordering_store: Joi.number().allow(null),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      breakup_values: PosCartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      is_valid: Joi.boolean(),

      error_message: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      store_code: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      cod_available: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      success: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cod_charges: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      user_type: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      cart: PosCartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      success: Joi.boolean(),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
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
      area_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      id: Joi.number(),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.number(),

      area: Joi.string().allow(""),

      pincode: Joi.number(),

      name: Joi.string().allow(""),

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
      token: Joi.string().allow(""),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      source: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      breakup_values: PosCartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
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
