const Joi = require("joi");

class PosCartModel {
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

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      action: PosCartModel.ProductAction(),

      brand: PosCartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      images: Joi.array().items(PosCartModel.ProductImage()),

      uid: Joi.number(),
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

      currency_symbol: Joi.string().allow(""),

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
      size: Joi.string().allow(""),

      seller: PosCartModel.BaseInfo(),

      store: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),

      price: PosCartModel.ArticlePriceInfo(),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),

      item_criteria: Joi.any(),

      raw_offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),
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

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
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

  static CartProductInfo() {
    return Joi.object({
      product: PosCartModel.CartProduct(),

      discount: Joi.string().allow(""),

      message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      article: PosCartModel.ProductArticle(),

      availability: PosCartModel.ProductAvailability(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      price: PosCartModel.ProductPriceInfo(),

      promo_meta: PosCartModel.PromoMeta(),

      quantity: Joi.number(),

      is_set: Joi.boolean(),

      key: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      delivery_charge: Joi.number(),

      vog: Joi.number(),

      gst_charges: Joi.number(),

      discount: Joi.number(),

      mrp_total: Joi.number(),

      coupon: Joi.number(),

      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      fynd_cash: Joi.number(),

      you_saved: Joi.number(),

      total: Joi.number(),

      cod_charge: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      value: Joi.number(),

      is_applied: Joi.boolean(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      description: Joi.string().allow(""),

      total: Joi.number(),

      is_applied: Joi.boolean(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: PosCartModel.RawBreakup(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      coupon: PosCartModel.CouponBreakup(),

      loyalty_points: PosCartModel.LoyaltyPoints(),
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
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
    });
  }

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

  static CartDetailResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      currency: PosCartModel.CartCurrency(),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      store_id: Joi.number(),

      article_assignment: Joi.any(),

      item_id: Joi.number(),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      pos: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      quantity: Joi.number(),
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

      message: Joi.string().allow(""),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      item_id: Joi.number(),

      item_index: Joi.number(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),
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
      expires_on: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applicable: Joi.boolean(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),

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

  static OfferSeller() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static OfferPrice() {
    return Joi.object({
      bulk_effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      best: Joi.boolean(),

      type: Joi.string().allow(""),

      margin: Joi.number(),

      auto_applied: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

      quantity: Joi.number(),

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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      area_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      area: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      is_active: Joi.boolean(),

      landmark: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      address_type: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      checkout_mode: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      meta: Joi.any(),

      country: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
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

      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),
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
      aggregator_name: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),

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
      dp_options: Joi.any().allow(null),

      shipment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      shipments: Joi.number(),

      order_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      promise: PosCartModel.ShipmentPromise(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      comment: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      error: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),
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
      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      billing_address_id: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      pos: Joi.boolean(),

      merchant_code: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      billing_address: Joi.any(),

      ordering_store: Joi.number().allow(null),

      pick_at_store_uid: Joi.number().allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      files: Joi.array().items(PosCartModel.Files()),

      staff: PosCartModel.StaffCheckout(),

      payment_mode: Joi.string().allow("").required(),

      payment_auto_confirm: Joi.boolean(),

      delivery_address: Joi.any(),

      address_id: Joi.string().allow(""),

      meta: Joi.any(),

      id: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      extra_meta: Joi.any(),

      payment_params: Joi.any().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      user_type: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      cod_message: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_charge_order_value: Joi.number(),

      cod_available: Joi.boolean(),

      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      success: Joi.boolean(),

      cart_id: Joi.number(),

      restrict_checkout: Joi.boolean(),

      cod_charges: Joi.number(),

      store_code: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      cart: PosCartModel.CheckCart(),

      message: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_slots: Joi.any(),

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
      available_modes: Joi.array().items(Joi.string().allow("")),

      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      pincode: Joi.number(),

      area_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),

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

      user: Joi.any(),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      currency: PosCartModel.CartCurrency(),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      restrict_checkout: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),
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
