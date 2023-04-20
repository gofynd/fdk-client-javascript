const Joi = require("joi");

class PosCartModel {
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

  static DisplayBreakup() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),
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

  static RawBreakup() {
    return Joi.object({
      discount: Joi.number(),

      cod_charge: Joi.number(),

      coupon: Joi.number(),

      mrp_total: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_cash: Joi.number(),

      you_saved: Joi.number(),

      total: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      gst_charges: Joi.number(),

      subtotal: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      value: Joi.number(),

      type: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      loyalty_points: PosCartModel.LoyaltyPoints(),

      raw: PosCartModel.RawBreakup(),

      coupon: PosCartModel.CouponBreakup(),
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
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      marked: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: PosCartModel.ProductPrice(),

      base: PosCartModel.ProductPrice(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

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
      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),
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

  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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

  static CartProduct() {
    return Joi.object({
      uid: Joi.number(),

      brand: PosCartModel.BaseInfo(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      action: PosCartModel.ProductAction(),

      name: Joi.string().allow(""),
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
      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      seller: PosCartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      store: PosCartModel.BaseInfo(),

      price: PosCartModel.ArticlePriceInfo(),

      type: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      message: Joi.string().allow(""),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      discount: Joi.string().allow(""),

      is_set: Joi.boolean(),

      parent_item_identifiers: Joi.any(),

      availability: PosCartModel.ProductAvailability(),

      product: PosCartModel.CartProduct(),

      promo_meta: PosCartModel.PromoMeta(),

      coupon_message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      price: PosCartModel.ProductPriceInfo(),

      quantity: Joi.number(),

      article: PosCartModel.ProductArticle(),

      key: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      is_valid: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      store_id: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_id: Joi.number(),

      article_assignment: Joi.any(),

      article_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      cart: PosCartModel.CartDetailResponse(),

      success: Joi.boolean(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      item_id: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      article_id: Joi.string().allow(""),

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

      cart: PosCartModel.CartDetailResponse(),

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
      message: Joi.string().allow(""),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_code: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      total_item_count: Joi.number(),

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
      marked: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      margin: Joi.number(),

      type: Joi.string().allow(""),

      total: Joi.number(),

      best: Joi.boolean(),

      auto_applied: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

      quantity: Joi.number(),
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
      _custom_json: Joi.any(),

      country_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      meta: Joi.any(),

      is_default_address: Joi.boolean(),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      state: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      city: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      google_map_point: Joi.any(),

      name: Joi.string().allow(""),
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
      is_updated: Joi.boolean(),

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

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
      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      discount: Joi.number(),

      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      coupon_validity: PosCartModel.CouponValidity(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      shipments: Joi.number(),

      dp_options: Joi.any().allow(null),

      fulfillment_type: Joi.string().allow(""),

      promise: PosCartModel.ShipmentPromise(),

      fulfillment_id: Joi.number(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      shipment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      error: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),
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

  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
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
      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      payment_mode: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      address_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      billing_address: Joi.any(),

      staff: PosCartModel.StaffCheckout(),

      merchant_code: Joi.string().allow(""),

      pos: Joi.boolean(),

      meta: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow("").allow(null),

      pick_at_store_uid: Joi.number().allow(null),

      ordering_store: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),

      aggregator: Joi.string().allow(""),

      extra_meta: Joi.any(),

      order_type: Joi.string().allow("").required(),

      files: Joi.array().items(PosCartModel.Files()),

      delivery_address: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      breakup_values: PosCartModel.CartBreakup(),

      cod_available: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      gstin: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      currency: PosCartModel.CartCurrency(),

      delivery_charge_order_value: Joi.number(),

      error_message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charges: Joi.number(),

      cod_charges: Joi.number(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      store_code: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      success: Joi.boolean(),

      data: Joi.any(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      comment: Joi.string().allow(""),

      delivery_slots: Joi.any(),

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
      uid: Joi.number(),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      id: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      phone: Joi.string().allow(""),

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
      source: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      meta: Joi.any(),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      is_valid: Joi.boolean(),
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
