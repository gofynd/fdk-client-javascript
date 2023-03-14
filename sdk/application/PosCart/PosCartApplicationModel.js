const Joi = require("joi");

class PosCartModel {
  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      delivery_charge: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      mrp_total: Joi.number(),

      subtotal: Joi.number(),

      coupon: Joi.number(),

      discount: Joi.number(),

      you_saved: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      convenience_fee: Joi.number(),

      gst_charges: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      is_applied: Joi.boolean(),

      value: Joi.number(),

      code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),
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
      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      raw: PosCartModel.RawBreakup(),

      coupon: PosCartModel.CouponBreakup(),

      loyalty_points: PosCartModel.LoyaltyPoints(),
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
      query: PosCartModel.ActionQuery(),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      net_quantity: PosCartModel.NetQuantity(),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      brand: PosCartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      images: Joi.array().items(PosCartModel.ProductImage()),

      item_code: Joi.string().allow("").allow(null),

      action: PosCartModel.ProductAction(),

      name: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: PosCartModel.FreeGiftItem(),

      quantity: Joi.number(),
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

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
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

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      promotion_group: Joi.string().allow(""),

      ownership: PosCartModel.Ownership(),

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promotion_name: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: PosCartModel.ProductPrice(),

      converted: PosCartModel.ProductPrice(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),
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
      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      seller: PosCartModel.BaseInfo(),

      price: PosCartModel.ArticlePriceInfo(),

      quantity: Joi.number(),

      store: PosCartModel.BaseInfo(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      message: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      product: PosCartModel.CartProduct(),

      coupon_message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      key: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      availability: PosCartModel.ProductAvailability(),

      promo_meta: PosCartModel.PromoMeta(),

      is_set: Joi.boolean(),

      price: PosCartModel.ProductPriceInfo(),

      article: PosCartModel.ProductArticle(),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      price_per_unit: PosCartModel.ProductPriceInfo(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      pan_config: Joi.any(),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      last_modified: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_assignment: Joi.any(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      seller_id: Joi.number(),

      item_id: Joi.number(),

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
      message: Joi.string().allow(""),

      partial: Joi.boolean(),

      success: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      extra_meta: Joi.any(),

      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      coupon_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      max_discount_value: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      current: Joi.number(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

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
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static OfferPrice() {
    return Joi.object({
      bulk_effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      auto_applied: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

      best: Joi.boolean(),

      quantity: Joi.number(),

      total: Joi.number(),

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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      area: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      meta: Joi.any(),

      is_default_address: Joi.boolean(),

      area_code_slug: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      user_id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
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

      id: Joi.string().allow(""),

      is_updated: Joi.boolean(),

      success: Joi.boolean(),
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
      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),
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
      order_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      promise: PosCartModel.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      breakup_values: PosCartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      last_modified: Joi.string().allow(""),
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

  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
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
      order_type: Joi.string().allow("").required(),

      meta: Joi.any(),

      aggregator: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow("").required(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      pos: Joi.boolean(),

      payment_auto_confirm: Joi.boolean(),

      callback_url: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),

      merchant_code: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      staff: PosCartModel.StaffCheckout(),

      address_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      files: Joi.array().items(PosCartModel.Files()),

      billing_address_id: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      pick_at_store_uid: Joi.number().allow(null),

      delivery_address: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      success: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      store_code: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charge_order_value: Joi.number(),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      currency: PosCartModel.CartCurrency(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      cod_charges: Joi.number(),

      order_id: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      user_type: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      cod_message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      data: Joi.any(),

      cart: PosCartModel.CheckCart(),

      success: Joi.boolean(),

      app_intercept_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

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
      pickup_stores: Joi.array().items(Joi.number()),

      available_modes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      country: Joi.string().allow(""),

      area: Joi.string().allow(""),

      id: Joi.number(),

      landmark: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      address: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      user: Joi.any(),

      meta: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      buy_now: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      currency: PosCartModel.CartCurrency(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),
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
