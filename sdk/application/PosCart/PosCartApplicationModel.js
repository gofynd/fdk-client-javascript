const Joi = require("joi");

class PosCartModel {
  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
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

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),

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

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),
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

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      slug: Joi.string().allow(""),

      brand: PosCartModel.BaseInfo(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: PosCartModel.ProductAction(),

      type: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: PosCartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),

      offer: Joi.any(),
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
      amount: Joi.number(),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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
      price: PosCartModel.ArticlePriceInfo(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      store: PosCartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      seller: PosCartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      bulk_offer: Joi.any(),

      price: PosCartModel.ProductPriceInfo(),

      promo_meta: PosCartModel.PromoMeta(),

      quantity: Joi.number(),

      coupon_message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      availability: PosCartModel.ProductAvailability(),

      parent_item_identifiers: Joi.any(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      key: Joi.string().allow(""),

      product: PosCartModel.CartProduct(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      article: PosCartModel.ProductArticle(),
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
      is_applied: Joi.boolean(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      mrp_total: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      convenience_fee: Joi.number(),

      coupon: Joi.number(),

      cod_charge: Joi.number(),

      you_saved: Joi.number(),

      delivery_charge: Joi.number(),

      discount: Joi.number(),

      vog: Joi.number(),

      gst_charges: Joi.number(),

      total: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: PosCartModel.CouponBreakup(),

      loyalty_points: PosCartModel.LoyaltyPoints(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      raw: PosCartModel.RawBreakup(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      display: Joi.string().allow(""),

      seller_id: Joi.number(),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      article_assignment: Joi.any(),

      item_size: Joi.string().allow(""),

      store_id: Joi.number(),

      article_id: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      pos: Joi.boolean(),
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
      partial: Joi.boolean(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: PosCartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),
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

      has_previous: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      title: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      coupon_value: Joi.number(),

      is_applicable: Joi.boolean(),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static OfferPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      bulk_effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      price: PosCartModel.OfferPrice(),

      quantity: Joi.number(),

      best: Joi.boolean(),

      margin: Joi.number(),

      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),

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
      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      email: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      is_active: Joi.boolean(),

      _custom_json: Joi.any(),

      area: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

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
      id: Joi.string().allow(""),

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      success: Joi.boolean(),

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
      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      valid: Joi.boolean(),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      coupon_validity: PosCartModel.CouponValidity(),

      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      dp_id: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      dp_options: Joi.any().allow(null),

      promise: PosCartModel.ShipmentPromise(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      error: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      breakup_values: PosCartModel.CartBreakup(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      delivery_charge_info: Joi.string().allow(""),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),
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

  static Files() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      id: Joi.string().allow("").allow(null),

      staff: PosCartModel.StaffCheckout(),

      extra_meta: Joi.any(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      payment_params: Joi.any().allow(null),

      merchant_code: Joi.string().allow(""),

      meta: Joi.any(),

      address_id: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      delivery_address: Joi.any(),

      ordering_store: Joi.number().allow(null),

      billing_address: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      pick_at_store_uid: Joi.number().allow(null),

      order_type: Joi.string().allow("").required(),

      files: Joi.array().items(PosCartModel.Files()),

      payment_identifier: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),

      pos: Joi.boolean(),
    });
  }

  static CheckCart() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      cod_charges: Joi.number(),

      coupon_text: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_charge_order_value: Joi.number(),

      restrict_checkout: Joi.boolean(),

      success: Joi.boolean(),

      cod_available: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      delivery_charges: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      callback_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      data: Joi.any(),

      message: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      success: Joi.boolean(),

      order_id: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      delivery_slots: Joi.any(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

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
      store_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      id: Joi.number(),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      uid: Joi.number(),

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

      meta: Joi.any(),

      source: Joi.any(),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),
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
