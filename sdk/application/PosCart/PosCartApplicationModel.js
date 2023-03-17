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

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),
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

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      ownership: PosCartModel.Ownership(),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      offer_text: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      selling: Joi.number(),

      marked: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: PosCartModel.ProductPrice(),

      base: PosCartModel.ProductPrice(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      converted: PosCartModel.BasePrice(),

      base: PosCartModel.BasePrice(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductArticle() {
    return Joi.object({
      size: Joi.string().allow(""),

      quantity: Joi.number(),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price: PosCartModel.ArticlePriceInfo(),

      extra_meta: Joi.any(),

      seller: PosCartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      store: PosCartModel.BaseInfo(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

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
      url: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
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
      item_code: Joi.string().allow("").allow(null),

      brand: PosCartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      action: PosCartModel.ProductAction(),

      net_quantity: PosCartModel.NetQuantity(),

      name: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      identifiers: PosCartModel.CartProductIdentifer().required(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      quantity: Joi.number(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      promo_meta: PosCartModel.PromoMeta(),

      discount: Joi.string().allow(""),

      article: PosCartModel.ProductArticle(),

      message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      availability: PosCartModel.ProductAvailability(),

      bulk_offer: Joi.any(),

      is_set: Joi.boolean(),

      product: PosCartModel.CartProduct(),

      price: PosCartModel.ProductPriceInfo(),

      coupon_message: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      delivery_charge: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      you_saved: Joi.number(),

      coupon: Joi.number(),

      cod_charge: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      gst_charges: Joi.number(),

      mrp_total: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      description: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      value: Joi.number(),

      minimum_cart_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: PosCartModel.LoyaltyPoints(),

      raw: PosCartModel.RawBreakup(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      coupon: PosCartModel.CouponBreakup(),
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
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      pan_config: Joi.any(),

      comment: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      display: Joi.string().allow(""),

      article_assignment: Joi.any(),

      quantity: Joi.number(),

      store_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      _custom_json: Joi.any(),

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
      success: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      _custom_json: Joi.any(),
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

  static Coupon() {
    return Joi.object({
      description: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      is_applicable: Joi.boolean(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

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
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static OfferPrice() {
    return Joi.object({
      effective: Joi.number(),

      bulk_effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      margin: Joi.number(),

      auto_applied: Joi.boolean(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),

      best: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

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
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      landmark: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      address_type: Joi.string().allow(""),

      google_map_point: Joi.any(),

      area_code: Joi.string().allow(""),

      meta: Joi.any(),

      country_iso_code: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),
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
      is_deleted: Joi.boolean(),

      id: Joi.string().allow(""),
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
      aggregator_name: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      display_message_en: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),
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
      fulfillment_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      promise: PosCartModel.ShipmentPromise(),

      dp_id: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      cart_id: Joi.number(),

      currency: PosCartModel.CartCurrency(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      restrict_checkout: Joi.boolean(),

      error: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),
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

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),
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

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      aggregator: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      extra_meta: Joi.any(),

      delivery_address: Joi.any(),

      payment_params: Joi.any().allow(null),

      callback_url: Joi.string().allow("").allow(null),

      ordering_store: Joi.number().allow(null),

      order_type: Joi.string().allow("").required(),

      staff: PosCartModel.StaffCheckout(),

      billing_address_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      pick_at_store_uid: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),

      merchant_code: Joi.string().allow(""),

      billing_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      address_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      files: Joi.array().items(PosCartModel.Files()),
    });
  }

  static CheckCart() {
    return Joi.object({
      delivery_promise: PosCartModel.ShipmentPromise(),

      store_emps: Joi.array().items(Joi.any()),

      breakup_values: PosCartModel.CartBreakup(),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      cart_id: Joi.number(),

      order_id: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      store_code: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      user_type: Joi.string().allow(""),

      success: Joi.boolean(),

      cod_charges: Joi.number(),

      error_message: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      success: Joi.boolean(),

      data: Joi.any(),

      order_id: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

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

      store_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      id: Joi.number(),

      uid: Joi.number(),

      phone: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country: Joi.string().allow(""),

      email: Joi.string().allow(""),
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
      meta: Joi.any(),

      token: Joi.string().allow(""),

      user: Joi.any(),

      created_on: Joi.string().allow(""),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      cart_id: Joi.number(),

      currency: PosCartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),
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
