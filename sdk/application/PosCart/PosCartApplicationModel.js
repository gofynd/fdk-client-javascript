const Joi = require("joi");

class PosCartModel {
  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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

      net_quantity: PosCartModel.NetQuantity(),

      name: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      action: PosCartModel.ProductAction(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      uid: Joi.number(),

      item_code: Joi.string().allow("").allow(null),

      brand: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),
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

  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      free_gift_item_details: PosCartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      amount: Joi.number(),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      ownership: PosCartModel.Ownership(),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      marked: Joi.number(),

      selling: Joi.number(),
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
      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

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

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

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
      size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: PosCartModel.BaseInfo(),

      extra_meta: Joi.any(),

      price: PosCartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      store: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      product: PosCartModel.CartProduct(),

      discount: Joi.string().allow(""),

      is_set: Joi.boolean(),

      key: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      bulk_offer: Joi.any(),

      price: PosCartModel.ProductPriceInfo(),

      availability: PosCartModel.ProductAvailability(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      promo_meta: PosCartModel.PromoMeta(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),

      article: PosCartModel.ProductArticle(),

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

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      value: Joi.number(),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      uid: Joi.string().allow(""),

      code: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      description: Joi.string().allow("").allow(null),
    });
  }

  static RawBreakup() {
    return Joi.object({
      total: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      subtotal: Joi.number(),

      cod_charge: Joi.number(),

      you_saved: Joi.number(),

      mrp_total: Joi.number(),

      coupon: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      convenience_fee: Joi.number(),

      fynd_cash: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      is_applied: Joi.boolean(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: PosCartModel.CouponBreakup(),

      raw: PosCartModel.RawBreakup(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      loyalty_points: PosCartModel.LoyaltyPoints(),
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

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      pan_config: Joi.any(),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      pan_no: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),

      _custom_json: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      store_id: Joi.number(),

      display: Joi.string().allow(""),

      pos: Joi.boolean(),

      seller_id: Joi.number(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),
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

      partial: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),
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
      total: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      title: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),
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

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      total: Joi.number(),

      best: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

      margin: Joi.number(),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      auto_applied: Joi.boolean(),
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
      state: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      meta: Joi.any(),

      country_iso_code: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      google_map_point: Joi.any(),

      user_id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area: Joi.string().allow(""),

      id: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

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
      id: Joi.string().allow(""),

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),

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

      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),
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
      items: Joi.array().items(PosCartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),

      shipment_type: Joi.string().allow(""),

      promise: PosCartModel.ShipmentPromise(),

      fulfillment_id: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      currency: PosCartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      error: Joi.boolean(),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      quantity: Joi.number(),

      shipment_type: Joi.string().allow("").required(),

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
      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
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

      payment_auto_confirm: Joi.boolean(),

      pick_at_store_uid: Joi.number().allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      address_id: Joi.string().allow(""),

      staff: PosCartModel.StaffCheckout(),

      merchant_code: Joi.string().allow(""),

      billing_address: Joi.any(),

      delivery_address: Joi.any(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      extra_meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      callback_url: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      pos: Joi.boolean(),

      files: Joi.array().items(PosCartModel.Files()),

      order_type: Joi.string().allow("").required(),
    });
  }

  static CheckCart() {
    return Joi.object({
      currency: PosCartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      success: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      cod_message: Joi.string().allow(""),

      cod_charges: Joi.number(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      cod_available: Joi.boolean(),

      gstin: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      user_type: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charges: Joi.number(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      callback_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),

      data: Joi.any(),

      order_id: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

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
      pickup_stores: Joi.array().items(Joi.number()),

      available_modes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      id: Joi.number(),

      address: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      uid: Joi.number(),

      area_code_slug: Joi.string().allow(""),

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
      meta: Joi.any(),

      user: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      currency: PosCartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),
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
