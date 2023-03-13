const Joi = require("joi");

class PosCartModel {
  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      type: Joi.string().allow(""),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      seller: PosCartModel.BaseInfo(),

      _custom_json: Joi.any(),

      size: Joi.string().allow(""),

      store: PosCartModel.BaseInfo(),

      price: PosCartModel.ArticlePriceInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      add_on: Joi.number(),

      marked: Joi.number(),
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
      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: PosCartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

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
      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      ownership: PosCartModel.Ownership(),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_group: Joi.string().allow(""),

      amount: Joi.number(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),
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

  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      brand: PosCartModel.BaseInfo(),

      action: PosCartModel.ProductAction(),

      net_quantity: PosCartModel.NetQuantity(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      item_code: Joi.string().allow("").allow(null),

      uid: Joi.number(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      article: PosCartModel.ProductArticle(),

      promo_meta: PosCartModel.PromoMeta(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      price: PosCartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      product: PosCartModel.CartProduct(),

      availability: PosCartModel.ProductAvailability(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      is_set: Joi.boolean(),

      message: Joi.string().allow(""),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),
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

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      type: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      value: Joi.number(),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),

      code: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      delivery_charge: Joi.number(),

      fynd_cash: Joi.number(),

      subtotal: Joi.number(),

      you_saved: Joi.number(),

      discount: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      total: Joi.number(),

      gst_charges: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),
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

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      pan_no: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_promise: PosCartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      store_id: Joi.number(),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_assignment: Joi.any(),

      pos: Joi.boolean(),

      item_id: Joi.number(),

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
      cart: PosCartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      partial: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

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
      coupon_type: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      is_applicable: Joi.boolean(),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applied: Joi.boolean(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      has_next: Joi.boolean(),
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
      currency_code: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      quantity: Joi.number(),

      margin: Joi.number(),

      price: PosCartModel.OfferPrice(),

      total: Joi.number(),

      best: Joi.boolean(),

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
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      geo_location: PosCartModel.GeoLocation(),

      address_type: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      area: Joi.string().allow(""),

      address: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      area_code_slug: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      country_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      id: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),
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
      id: Joi.string().allow(""),

      success: Joi.boolean(),

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
      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

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
      coupon_validity: PosCartModel.CouponValidity(),

      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.CartProductInfo()),

      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      shipments: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      promise: PosCartModel.ShipmentPromise(),

      dp_options: Joi.any().allow(null),

      fulfillment_id: Joi.number(),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      delivery_promise: PosCartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      error: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),
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
      delivery_address: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      staff: PosCartModel.StaffCheckout(),

      aggregator: Joi.string().allow(""),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      order_type: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      ordering_store: Joi.number().allow(null),

      pos: Joi.boolean(),

      merchant_code: Joi.string().allow(""),

      extra_meta: Joi.any(),

      address_id: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      pick_at_store_uid: Joi.number().allow(null),

      files: Joi.array().items(PosCartModel.Files()),

      payment_identifier: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      delivery_promise: PosCartModel.ShipmentPromise(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      success: Joi.boolean(),

      user_type: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charges: Joi.number(),

      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charge_order_value: Joi.number(),

      cod_charges: Joi.number(),

      coupon_text: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      id: Joi.string().allow(""),

      error_message: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      success: Joi.boolean(),

      data: Joi.any(),

      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

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
      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      id: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      uid: Joi.number(),
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

      meta: Joi.any(),

      source: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      delivery_promise: PosCartModel.ShipmentPromise(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      breakup_values: PosCartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

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
