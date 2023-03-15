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
      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),
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

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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

  static CartProduct() {
    return Joi.object({
      uid: Joi.number(),

      action: PosCartModel.ProductAction(),

      net_quantity: PosCartModel.NetQuantity(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      item_code: Joi.string().allow("").allow(null),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      slug: Joi.string().allow(""),

      brand: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      selling: Joi.number(),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: PosCartModel.ProductPrice(),

      base: PosCartModel.ProductPrice(),
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
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),

      raw_offer: Joi.any(),

      offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: PosCartModel.FreeGiftItem(),

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

  static AppliedPromotion() {
    return Joi.object({
      ownership: PosCartModel.Ownership(),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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
      seller: PosCartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),

      price: PosCartModel.ArticlePriceInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      store: PosCartModel.BaseInfo(),

      quantity: Joi.number(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
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

  static CartProductInfo() {
    return Joi.object({
      discount: Joi.string().allow(""),

      product: PosCartModel.CartProduct(),

      is_set: Joi.boolean(),

      price: PosCartModel.ProductPriceInfo(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      coupon_message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      article: PosCartModel.ProductArticle(),

      quantity: Joi.number(),

      message: Joi.string().allow(""),

      availability: PosCartModel.ProductAvailability(),

      promo_meta: PosCartModel.PromoMeta(),

      key: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      bulk_offer: Joi.any(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
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

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      uid: Joi.string().allow(""),

      code: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      value: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      total: Joi.number(),

      coupon: Joi.number(),

      discount: Joi.number(),

      you_saved: Joi.number(),

      mrp_total: Joi.number(),

      delivery_charge: Joi.number(),

      gst_charges: Joi.number(),

      fynd_cash: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      subtotal: Joi.number(),

      cod_charge: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: PosCartModel.LoyaltyPoints(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      coupon: PosCartModel.CouponBreakup(),

      raw: PosCartModel.RawBreakup(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      currency: PosCartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      pan_config: Joi.any(),

      pan_no: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),

      article_assignment: Joi.any(),

      seller_id: Joi.number(),

      _custom_json: Joi.any(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      pos: Joi.boolean(),

      store_id: Joi.number(),
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
      partial: Joi.boolean(),

      success: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

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

  static PageCoupon() {
    return Joi.object({
      total: Joi.number(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      is_applicable: Joi.boolean(),
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
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      margin: Joi.number(),

      total: Joi.number(),

      price: PosCartModel.OfferPrice(),

      auto_applied: Joi.boolean(),

      best: Joi.boolean(),

      type: Joi.string().allow(""),

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
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      state: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      is_default_address: Joi.boolean(),

      meta: Joi.any(),

      phone: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      google_map_point: Joi.any(),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      area: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      checkout_mode: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),
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

      success: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

      id: Joi.string().allow(""),

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
      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      message: Joi.string().allow(""),

      coupon_validity: PosCartModel.CouponValidity(),

      success: Joi.boolean().required(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      promise: PosCartModel.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      dp_options: Joi.any().allow(null),

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      shipments: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      error: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      currency: PosCartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      uid: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),
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

  static Files() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
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
      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      extra_meta: Joi.any(),

      pick_at_store_uid: Joi.number().allow(null),

      files: Joi.array().items(PosCartModel.Files()),

      meta: Joi.any(),

      pos: Joi.boolean(),

      payment_identifier: Joi.string().allow("").allow(null),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      order_type: Joi.string().allow("").required(),

      address_id: Joi.string().allow(""),

      billing_address: Joi.any(),

      payment_params: Joi.any().allow(null),

      billing_address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      staff: PosCartModel.StaffCheckout(),

      callback_url: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      ordering_store: Joi.number().allow(null),

      aggregator: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      delivery_address: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      store_emps: Joi.array().items(Joi.any()),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      cod_message: Joi.string().allow(""),

      cart_id: Joi.number(),

      user_type: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      cod_charges: Joi.number(),

      delivery_charges: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      success: Joi.boolean(),

      order_id: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      uid: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      data: Joi.any(),

      order_id: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

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
      available_modes: Joi.array().items(Joi.string().allow("")),

      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      id: Joi.number(),

      pincode: Joi.number(),

      address: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      user: Joi.any(),

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      uid: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),
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
