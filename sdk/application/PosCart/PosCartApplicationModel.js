const Joi = require("joi");

class PosCartModel {
  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
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

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),

      raw_offer: Joi.any(),
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
      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      free_gift_item_details: PosCartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      ownership: PosCartModel.Ownership(),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      offer_text: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      type: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      images: Joi.array().items(PosCartModel.ProductImage()),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      net_quantity: PosCartModel.NetQuantity(),

      brand: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),

      action: PosCartModel.ProductAction(),

      name: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: PosCartModel.ProductPrice(),

      base: PosCartModel.ProductPrice(),
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
      converted: PosCartModel.BasePrice(),

      base: PosCartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      seller: PosCartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      store: PosCartModel.BaseInfo(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      price: PosCartModel.ArticlePriceInfo(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      key: Joi.string().allow(""),

      promo_meta: PosCartModel.PromoMeta(),

      message: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      bulk_offer: Joi.any(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      quantity: Joi.number(),

      product: PosCartModel.CartProduct(),

      discount: Joi.string().allow(""),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      article: PosCartModel.ProductArticle(),

      coupon_message: Joi.string().allow(""),

      price: PosCartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      availability: PosCartModel.ProductAvailability(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      applicable: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      value: Joi.number(),

      type: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      total: Joi.number(),

      mrp_total: Joi.number(),

      vog: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_cash: Joi.number(),

      discount: Joi.number(),

      convenience_fee: Joi.number(),

      you_saved: Joi.number(),

      cod_charge: Joi.number(),

      gst_charges: Joi.number(),

      subtotal: Joi.number(),

      coupon: Joi.number(),
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

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      pos: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      store_id: Joi.number(),

      seller_id: Joi.number(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      article_assignment: Joi.any(),
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

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),
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
      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      coupon_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      total_item_count: Joi.number(),
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
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      margin: Joi.number(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      best: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

      auto_applied: Joi.boolean(),
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
      landmark: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      meta: Joi.any(),

      area: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      user_id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      country_iso_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

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
      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

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

      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),
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

      coupon_validity: PosCartModel.CouponValidity(),

      success: Joi.boolean().required(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.CartProductInfo()),

      shipments: Joi.number(),

      dp_options: Joi.any().allow(null),

      fulfillment_id: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      promise: PosCartModel.ShipmentPromise(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      delivery_promise: PosCartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      error: Joi.boolean(),

      cart_id: Joi.number(),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      buy_now: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
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

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      billing_address_id: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      staff: PosCartModel.StaffCheckout(),

      order_type: Joi.string().allow("").required(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      address_id: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),

      files: Joi.array().items(PosCartModel.Files()),

      payment_params: Joi.any().allow(null),

      delivery_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      extra_meta: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      ordering_store: Joi.number().allow(null),

      pos: Joi.boolean(),

      billing_address: Joi.any(),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      delivery_promise: PosCartModel.ShipmentPromise(),

      delivery_charge_order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      store_code: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      delivery_charges: Joi.number(),

      cod_charges: Joi.number(),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      user_type: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      cod_available: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      breakup_values: PosCartModel.CartBreakup(),

      success: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      data: Joi.any(),

      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

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
      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      id: Joi.number(),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      uid: Joi.number(),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      token: Joi.string().allow(""),

      source: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      delivery_promise: PosCartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      breakup_values: PosCartModel.CartBreakup(),
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
