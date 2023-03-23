const Joi = require("joi");

class PosCartModel {
  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      selling: Joi.number(),

      effective: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
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
      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

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

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
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

  static CartProduct() {
    return Joi.object({
      uid: Joi.number(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      type: Joi.string().allow(""),

      action: PosCartModel.ProductAction(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      net_quantity: PosCartModel.NetQuantity(),

      brand: PosCartModel.BaseInfo(),

      item_code: Joi.string().allow("").allow(null),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),
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
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

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

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      seller: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),

      size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      price: PosCartModel.ArticlePriceInfo(),

      store: PosCartModel.BaseInfo(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
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
      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: PosCartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      ownership: PosCartModel.Ownership(),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      promo_id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      quantity: Joi.number(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      availability: PosCartModel.ProductAvailability(),

      parent_item_identifiers: Joi.any(),

      key: Joi.string().allow(""),

      product: PosCartModel.CartProduct(),

      promo_meta: PosCartModel.PromoMeta(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      bulk_offer: Joi.any(),

      article: PosCartModel.ProductArticle(),

      message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      coupon_message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      discount: Joi.string().allow(""),

      price: PosCartModel.ProductPriceInfo(),
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

  static RawBreakup() {
    return Joi.object({
      you_saved: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),

      mrp_total: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      gst_charges: Joi.number(),

      delivery_charge: Joi.number(),

      discount: Joi.number(),

      cod_charge: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),
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
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      minimum_cart_value: Joi.number(),

      uid: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      coupon_value: Joi.number(),

      value: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: PosCartModel.RawBreakup(),

      loyalty_points: PosCartModel.LoyaltyPoints(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      coupon: PosCartModel.CouponBreakup(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      pan_config: Joi.any(),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      _custom_json: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      article_assignment: Joi.any(),

      extra_meta: Joi.any(),

      display: Joi.string().allow(""),

      pos: Joi.boolean(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

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
      partial: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      extra_meta: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      _custom_json: Joi.any(),

      item_size: Joi.string().allow(""),
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
      minimum_cart_value: Joi.number(),

      max_discount_value: Joi.number(),

      is_applicable: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total: Joi.number(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),

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

  static OfferPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      quantity: Joi.number(),

      total: Joi.number(),

      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),

      best: Joi.boolean(),

      margin: Joi.number(),

      price: PosCartModel.OfferPrice(),
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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      geo_location: PosCartModel.GeoLocation(),

      country_code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      area_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      city: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      meta: Joi.any(),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

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
      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      is_updated: Joi.boolean(),

      success: Joi.boolean(),

      id: Joi.string().allow(""),
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
      cart_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      aggregator_name: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),
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
      box_type: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),

      order_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      promise: PosCartModel.ShipmentPromise(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      currency: PosCartModel.CartCurrency(),

      error: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      message: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      uid: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      buy_now: Joi.boolean(),
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

  static Files() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutCustomMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      callback_url: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").allow(null),

      files: Joi.array().items(PosCartModel.Files()),

      staff: PosCartModel.StaffCheckout(),

      aggregator: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      address_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      delivery_address: Joi.any(),

      pos: Joi.boolean(),

      billing_address_id: Joi.string().allow(""),

      meta: Joi.any(),

      billing_address: Joi.any(),

      ordering_store: Joi.number().allow(null),

      pick_at_store_uid: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static CheckCart() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      id: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      error_message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      cart_id: Joi.number(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      uid: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      cod_charges: Joi.number(),

      store_code: Joi.string().allow(""),

      success: Joi.boolean(),

      comment: Joi.string().allow(""),

      buy_now: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      data: Joi.any(),
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
      uid: Joi.number(),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

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

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      source: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      currency: PosCartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      cart_id: Joi.number(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      buy_now: Joi.boolean(),
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
