const Joi = require("joi");

class PosCartModel {
  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      value: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      is_applied: Joi.boolean(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      total: Joi.number(),

      applicable: Joi.number(),

      is_applied: Joi.boolean(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      delivery_charge: Joi.number(),

      coupon: Joi.number(),

      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      cod_charge: Joi.number(),

      mrp_total: Joi.number(),

      discount: Joi.number(),

      gst_charges: Joi.number(),

      you_saved: Joi.number(),

      fynd_cash: Joi.number(),

      total: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      coupon: PosCartModel.CouponBreakup(),

      loyalty_points: PosCartModel.LoyaltyPoints(),

      raw: PosCartModel.RawBreakup(),
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
      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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
      store: PosCartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      seller: PosCartModel.BaseInfo(),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      size: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      price: PosCartModel.ArticlePriceInfo(),
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
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),
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
      uid: Joi.number(),

      net_quantity: PosCartModel.NetQuantity(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      slug: Joi.string().allow(""),

      brand: PosCartModel.BaseInfo(),

      action: PosCartModel.ProductAction(),

      item_code: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: PosCartModel.ProductPrice(),

      converted: PosCartModel.ProductPrice(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: PosCartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      amount: Joi.number(),

      promotion_group: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      ownership: PosCartModel.Ownership(),

      offer_text: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      identifiers: PosCartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article: PosCartModel.ProductArticle(),

      key: Joi.string().allow(""),

      message: Joi.string().allow(""),

      product: PosCartModel.CartProduct(),

      bulk_offer: Joi.any(),

      coupon_message: Joi.string().allow(""),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      promo_meta: PosCartModel.PromoMeta(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      discount: Joi.string().allow(""),

      availability: PosCartModel.ProductAvailability(),

      is_set: Joi.boolean(),

      price: PosCartModel.ProductPriceInfo(),
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

  static CartDetailResponse() {
    return Joi.object({
      breakup_values: PosCartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      pan_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      article_assignment: Joi.any(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      store_id: Joi.number(),

      article_id: Joi.string().allow(""),

      display: Joi.string().allow(""),

      seller_id: Joi.number(),

      extra_meta: Joi.any(),

      pos: Joi.boolean(),

      _custom_json: Joi.any(),

      item_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
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

      partial: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

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

  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      is_applied: Joi.boolean(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_next: Joi.boolean(),

      current: Joi.number(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),

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

  static OfferPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      bulk_effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      quantity: Joi.number(),

      auto_applied: Joi.boolean(),

      margin: Joi.number(),

      best: Joi.boolean(),

      type: Joi.string().allow(""),

      total: Joi.number(),

      price: PosCartModel.OfferPrice(),
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
      state: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      area_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      city: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      google_map_point: Joi.any(),

      phone: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      meta: Joi.any(),

      country: Joi.string().allow(""),

      is_active: Joi.boolean(),

      user_id: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      id: Joi.string().allow(""),
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
      is_updated: Joi.boolean(),

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

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
      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      discount: Joi.number(),
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
      promise: PosCartModel.ShipmentPromise(),

      dp_id: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      fulfillment_id: Joi.number(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      shipments: Joi.number(),

      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      error: Joi.boolean(),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      id: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),
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
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      aggregator: Joi.string().allow(""),

      delivery_address: Joi.any(),

      extra_meta: Joi.any(),

      pos: Joi.boolean(),

      payment_mode: Joi.string().allow("").required(),

      billing_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      billing_address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      files: Joi.array().items(PosCartModel.Files()),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      pick_at_store_uid: Joi.number().allow(null),

      payment_params: Joi.any().allow(null),

      staff: PosCartModel.StaffCheckout(),
    });
  }

  static CheckCart() {
    return Joi.object({
      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      cod_available: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charges: Joi.number(),

      order_id: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      cod_charges: Joi.number(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      cart_id: Joi.number(),

      user_type: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      store_code: Joi.string().allow(""),

      success: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      data: Joi.any(),

      success: Joi.boolean(),

      cart: PosCartModel.CheckCart(),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),

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
      state: Joi.string().allow(""),

      pincode: Joi.number(),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      country: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      id: Joi.number(),

      area_code_slug: Joi.string().allow(""),
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

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      breakup_values: PosCartModel.CartBreakup(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      delivery_charge_info: Joi.string().allow(""),

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
