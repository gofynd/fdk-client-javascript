const Joi = require("joi");

class PosCartModel {
  static RawBreakup() {
    return Joi.object({
      vog: Joi.number(),

      total: Joi.number(),

      subtotal: Joi.number(),

      you_saved: Joi.number(),

      gst_charges: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_cash: Joi.number(),

      discount: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      description: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      value: Joi.number(),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),
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

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
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

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),
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

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
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

  static CartProduct() {
    return Joi.object({
      images: Joi.array().items(PosCartModel.ProductImage()),

      type: Joi.string().allow(""),

      action: PosCartModel.ProductAction(),

      net_quantity: PosCartModel.NetQuantity(),

      uid: Joi.number(),

      brand: PosCartModel.BaseInfo(),

      name: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      slug: Joi.string().allow(""),
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
      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: PosCartModel.FreeGiftItem(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      ownership: PosCartModel.Ownership(),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      parent_item_identifiers: Joi.any(),

      size: Joi.string().allow(""),

      seller: PosCartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      store: PosCartModel.BaseInfo(),

      extra_meta: Joi.any(),

      price: PosCartModel.ArticlePriceInfo(),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      price: PosCartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      availability: PosCartModel.ProductAvailability(),

      message: Joi.string().allow(""),

      product: PosCartModel.CartProduct(),

      quantity: Joi.number(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      bulk_offer: Joi.any(),

      parent_item_identifiers: Joi.any(),

      key: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      promo_meta: PosCartModel.PromoMeta(),

      discount: Joi.string().allow(""),

      article: PosCartModel.ProductArticle(),

      identifiers: PosCartModel.CartProductIdentifer().required(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      article_assignment: Joi.any(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      store_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      pos: Joi.boolean(),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),
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

      message: Joi.string().allow(""),

      partial: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      _custom_json: Joi.any(),
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
      total: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      description: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      title: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

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

  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static OfferPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      total: Joi.number(),

      quantity: Joi.number(),

      margin: Joi.number(),

      auto_applied: Joi.boolean(),

      best: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

      type: Joi.string().allow(""),
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
      area_code_slug: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      created_by_user_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      meta: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      country: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      address: Joi.string().allow(""),

      is_active: Joi.boolean(),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      id: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      google_map_point: Joi.any(),
    });
  }

  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(PosCartModel.Address()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      id: Joi.string().allow(""),

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
      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      merchant_code: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      valid: Joi.boolean(),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),
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
      fulfillment_id: Joi.number(),

      shipment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      promise: PosCartModel.ShipmentPromise(),

      dp_id: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      last_modified: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      id: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      error: Joi.boolean(),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
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
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
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
      pick_at_store_uid: Joi.number().allow(null),

      billing_address_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").allow(null),

      pos: Joi.boolean(),

      address_id: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      meta: Joi.any(),

      extra_meta: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      billing_address: Joi.any(),

      aggregator: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      payment_params: Joi.any().allow(null),

      files: Joi.array().items(PosCartModel.Files()),

      staff: PosCartModel.StaffCheckout(),

      delivery_address: Joi.any(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static CheckCart() {
    return Joi.object({
      comment: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_charges: Joi.number(),

      message: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      cod_charges: Joi.number(),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      checkout_mode: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      last_modified: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      success: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_charge_order_value: Joi.number(),

      id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      app_intercept_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      data: Joi.any(),

      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      comment: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

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
      area: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      id: Joi.number(),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

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
      source: Joi.any(),

      user: Joi.any(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      comment: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      breakup_values: PosCartModel.CartBreakup(),

      id: Joi.string().allow(""),
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
