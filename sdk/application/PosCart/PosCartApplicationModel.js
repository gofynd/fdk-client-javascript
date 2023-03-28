const Joi = require("joi");

class PosCartModel {
  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: PosCartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),
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
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      ownership: PosCartModel.Ownership(),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      selling: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: PosCartModel.ProductPrice(),

      converted: PosCartModel.ProductPrice(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),
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
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CartProduct() {
    return Joi.object({
      uid: Joi.number(),

      type: Joi.string().allow(""),

      net_quantity: PosCartModel.NetQuantity(),

      item_code: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      action: PosCartModel.ProductAction(),

      slug: Joi.string().allow(""),

      brand: PosCartModel.BaseInfo(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

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

  static ProductArticle() {
    return Joi.object({
      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      price: PosCartModel.ArticlePriceInfo(),

      store: PosCartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      seller: PosCartModel.BaseInfo(),

      quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      bulk_offer: Joi.any(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      discount: Joi.string().allow(""),

      message: Joi.string().allow(""),

      price: PosCartModel.ProductPriceInfo(),

      coupon_message: Joi.string().allow(""),

      availability: PosCartModel.ProductAvailability(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      key: Joi.string().allow(""),

      promo_meta: PosCartModel.PromoMeta(),

      is_set: Joi.boolean(),

      product: PosCartModel.CartProduct(),

      article: PosCartModel.ProductArticle(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      description: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),
    });
  }

  static RawBreakup() {
    return Joi.object({
      fynd_cash: Joi.number(),

      cod_charge: Joi.number(),

      discount: Joi.number(),

      convenience_fee: Joi.number(),

      mrp_total: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      you_saved: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      subtotal: Joi.number(),

      coupon: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      total: Joi.number(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

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

  static CartDetailResponse() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      pan_config: Joi.any(),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      pan_no: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),

      item_id: Joi.number(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      _custom_json: Joi.any(),

      seller_id: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      display: Joi.string().allow(""),

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
      partial: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: PosCartModel.CartDetailResponse(),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

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
      message: Joi.string().allow(""),

      cart: PosCartModel.CartDetailResponse(),

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

      coupon_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      expires_on: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),

      sub_title: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      total: Joi.number(),

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
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

      bulk_effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      best: Joi.boolean(),

      margin: Joi.number(),

      type: Joi.string().allow(""),

      auto_applied: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

      total: Joi.number(),

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
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      area_code: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      geo_location: PosCartModel.GeoLocation(),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      area: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      meta: Joi.any(),

      id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_active: Joi.boolean(),
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

      is_updated: Joi.boolean(),

      id: Joi.string().allow(""),

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
      cart_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      valid: Joi.boolean(),

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
      dp_id: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),

      shipment_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      promise: PosCartModel.ShipmentPromise(),

      fulfillment_id: Joi.number(),

      order_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      error: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      cart_id: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),
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
      payment_mode: Joi.string().allow("").required(),

      payment_auto_confirm: Joi.boolean(),

      callback_url: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      address_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      files: Joi.array().items(PosCartModel.Files()),

      staff: PosCartModel.StaffCheckout(),

      extra_meta: Joi.any(),

      pick_at_store_uid: Joi.number().allow(null),

      meta: Joi.any(),

      delivery_address: Joi.any(),

      order_type: Joi.string().allow("").required(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      billing_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow(""),

      pos: Joi.boolean(),

      payment_params: Joi.any().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      currency: PosCartModel.CartCurrency(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      comment: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      buy_now: Joi.boolean(),

      cart_id: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_promise: PosCartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      success: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      cod_charges: Joi.number(),

      cod_available: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      data: Joi.any(),

      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: PosCartModel.CheckCart(),

      app_intercept_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

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
      country: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      uid: Joi.number(),

      pincode: Joi.number(),

      address: Joi.string().allow(""),

      id: Joi.number(),

      store_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
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

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      source: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      currency: PosCartModel.CartCurrency(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      cart_id: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
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
