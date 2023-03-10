const Joi = require("joi");

class PosCartModel {
  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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

  static ProductArticle() {
    return Joi.object({
      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: PosCartModel.BaseInfo(),

      size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      store: PosCartModel.BaseInfo(),

      quantity: Joi.number(),

      price: PosCartModel.ArticlePriceInfo(),

      type: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),
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

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

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
      ownership: PosCartModel.Ownership(),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      amount: Joi.number(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: PosCartModel.ProductPrice(),

      base: PosCartModel.ProductPrice(),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),
    });
  }

  static CartProduct() {
    return Joi.object({
      brand: PosCartModel.BaseInfo(),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      name: Joi.string().allow(""),

      net_quantity: PosCartModel.NetQuantity(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: PosCartModel.ProductAction(),

      type: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      identifiers: PosCartModel.CartProductIdentifer().required(),

      discount: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      key: Joi.string().allow(""),

      availability: PosCartModel.ProductAvailability(),

      promo_meta: PosCartModel.PromoMeta(),

      article: PosCartModel.ProductArticle(),

      is_set: Joi.boolean(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      bulk_offer: Joi.any(),

      quantity: Joi.number(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      price: PosCartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      product: PosCartModel.CartProduct(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      value: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      gst_charges: Joi.number(),

      cod_charge: Joi.number(),

      discount: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      mrp_total: Joi.number(),

      total: Joi.number(),

      you_saved: Joi.number(),

      coupon: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),

      total: Joi.number(),

      applicable: Joi.number(),
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
      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      pan_no: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      pos: Joi.boolean(),

      article_assignment: Joi.any(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      store_id: Joi.number(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),
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

      cart: PosCartModel.CartDetailResponse(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      identifiers: PosCartModel.CartProductIdentifer().required(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),
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
      current: Joi.number(),

      has_next: Joi.boolean(),

      total_item_count: Joi.number(),

      total: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_value: Joi.number(),

      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      bulk_effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      auto_applied: Joi.boolean(),

      margin: Joi.number(),

      total: Joi.number(),

      best: Joi.boolean(),

      quantity: Joi.number(),

      price: PosCartModel.OfferPrice(),

      type: Joi.string().allow(""),
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
      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      meta: Joi.any(),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      google_map_point: Joi.any(),

      state: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      area_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      country_phone_code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
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
      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      aggregator_name: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      title: Joi.string().allow(""),
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

      fulfillment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      promise: PosCartModel.ShipmentPromise(),

      dp_id: Joi.string().allow("").allow(null),

      shipments: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      coupon_text: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      breakup_values: PosCartModel.CartBreakup(),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      error: Joi.boolean(),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      quantity: Joi.number(),

      article_uid: Joi.string().allow("").required(),

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

  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      billing_address_id: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      billing_address: Joi.any(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      extra_meta: Joi.any(),

      pick_at_store_uid: Joi.number().allow(null),

      order_type: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      meta: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      aggregator: Joi.string().allow(""),

      pos: Joi.boolean(),

      delivery_address: Joi.any(),

      files: Joi.array().items(PosCartModel.Files()),

      payment_identifier: Joi.string().allow("").allow(null),

      staff: PosCartModel.StaffCheckout(),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static CheckCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      success: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      cod_charges: Joi.number(),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      delivery_charges: Joi.number(),

      currency: PosCartModel.CartCurrency(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      store_emps: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      order_id: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

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
      pickup_stores: Joi.array().items(Joi.number()),

      available_modes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      id: Joi.number(),

      uid: Joi.number(),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),
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
      user: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      currency: PosCartModel.CartCurrency(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),
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
