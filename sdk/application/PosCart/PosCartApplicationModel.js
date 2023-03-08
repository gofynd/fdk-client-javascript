const Joi = require("joi");

class PosCartModel {
  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

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

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      extra_meta: Joi.any(),

      store: PosCartModel.BaseInfo(),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: PosCartModel.BaseInfo(),

      price: PosCartModel.ArticlePriceInfo(),

      size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),
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

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CartProduct() {
    return Joi.object({
      action: PosCartModel.ProductAction(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      brand: PosCartModel.BaseInfo(),

      net_quantity: PosCartModel.NetQuantity(),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),

      offer: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
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
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),
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

  static AppliedPromotion() {
    return Joi.object({
      promotion_name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),

      ownership: PosCartModel.Ownership(),

      promo_id: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      promo_meta: PosCartModel.PromoMeta(),

      article: PosCartModel.ProductArticle(),

      availability: PosCartModel.ProductAvailability(),

      bulk_offer: Joi.any(),

      product: PosCartModel.CartProduct(),

      price: PosCartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      parent_item_identifiers: Joi.any(),

      coupon_message: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      discount: Joi.string().allow(""),

      quantity: Joi.number(),

      key: Joi.string().allow(""),
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

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      total: Joi.number(),

      vog: Joi.number(),

      convenience_fee: Joi.number(),

      gst_charges: Joi.number(),

      delivery_charge: Joi.number(),

      coupon: Joi.number(),

      fynd_cash: Joi.number(),

      cod_charge: Joi.number(),

      you_saved: Joi.number(),

      mrp_total: Joi.number(),

      discount: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      is_applied: Joi.boolean(),
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
      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: PosCartModel.RawBreakup(),

      coupon: PosCartModel.CouponBreakup(),

      loyalty_points: PosCartModel.LoyaltyPoints(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      pos: Joi.boolean(),

      article_id: Joi.string().allow(""),

      article_assignment: Joi.any(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      seller_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      parent_item_identifiers: Joi.any(),

      display: Joi.string().allow(""),

      store_id: Joi.number(),

      quantity: Joi.number(),

      item_id: Joi.number(),
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
      success: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

      partial: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      quantity: Joi.number(),

      item_id: Joi.number(),
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
      has_next: Joi.boolean(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      total_item_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow(""),

      is_applied: Joi.boolean(),
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
      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      auto_applied: Joi.boolean(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      best: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

      margin: Joi.number(),

      quantity: Joi.number(),
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

      created_by_user_id: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      address_type: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      country_iso_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      is_active: Joi.boolean(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      email: Joi.string().allow(""),
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
      payment_mode: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      display_message_en: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      discount: Joi.number(),

      code: Joi.string().allow("").allow(null),
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
      shipments: Joi.number(),

      shipment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      promise: PosCartModel.ShipmentPromise(),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      error: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      uid: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

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

      first_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),

      delivery_address: Joi.any(),

      address_id: Joi.string().allow(""),

      meta: Joi.any(),

      pos: Joi.boolean(),

      extra_meta: Joi.any(),

      order_type: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      ordering_store: Joi.number().allow(null),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      pick_at_store_uid: Joi.number().allow(null),

      billing_address_id: Joi.string().allow(""),

      files: Joi.array().items(PosCartModel.Files()),

      staff: PosCartModel.StaffCheckout(),

      payment_params: Joi.any().allow(null),

      callback_url: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      billing_address: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      error_message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      success: Joi.boolean(),

      gstin: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      delivery_charges: Joi.number(),

      cart_id: Joi.number(),

      currency: PosCartModel.CartCurrency(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      store_code: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      cod_charges: Joi.number(),

      message: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),

      data: Joi.any(),

      order_id: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

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
      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code: Joi.string().allow(""),

      uid: Joi.number(),

      landmark: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      id: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

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
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      source: Joi.any(),

      user: Joi.any(),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      cart_id: Joi.number(),

      currency: PosCartModel.CartCurrency(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      message: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

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
