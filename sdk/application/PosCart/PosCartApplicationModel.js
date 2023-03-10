const Joi = require("joi");

class PosCartModel {
  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),

      raw_offer: Joi.any(),

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
      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),
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
      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      promotion_group: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      offer_text: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),
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

      query: PosCartModel.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      slug: Joi.string().allow(""),

      images: Joi.array().items(PosCartModel.ProductImage()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: PosCartModel.ProductAction(),

      brand: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
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

      type: Joi.string().allow(""),

      store: PosCartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      seller: PosCartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      price: PosCartModel.ArticlePriceInfo(),

      size: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

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

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      quantity: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      availability: PosCartModel.ProductAvailability(),

      coupon_message: Joi.string().allow(""),

      message: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      product: PosCartModel.CartProduct(),

      article: PosCartModel.ProductArticle(),

      is_set: Joi.boolean(),

      parent_item_identifiers: Joi.any(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      price: PosCartModel.ProductPriceInfo(),

      promo_meta: PosCartModel.PromoMeta(),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),
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

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      code: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
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

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      gst_charges: Joi.number(),

      delivery_charge: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      total: Joi.number(),

      fynd_cash: Joi.number(),

      cod_charge: Joi.number(),

      you_saved: Joi.number(),

      coupon: Joi.number(),

      mrp_total: Joi.number(),

      vog: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: PosCartModel.CouponBreakup(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      loyalty_points: PosCartModel.LoyaltyPoints(),

      raw: PosCartModel.RawBreakup(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      item_id: Joi.number(),

      store_id: Joi.number(),

      pos: Joi.boolean(),

      article_assignment: Joi.any(),

      display: Joi.string().allow(""),

      seller_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_size: Joi.string().allow(""),

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
      partial: Joi.boolean(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      item_id: Joi.number(),

      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),
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

  static PageCoupon() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      total: Joi.number(),

      current: Joi.number(),

      total_item_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      is_applied: Joi.boolean(),

      title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      message: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      max_discount_value: Joi.number(),

      coupon_value: Joi.number(),

      expires_on: Joi.string().allow(""),
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
      effective: Joi.number(),

      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      quantity: Joi.number(),

      best: Joi.boolean(),

      margin: Joi.number(),

      total: Joi.number(),

      auto_applied: Joi.boolean(),

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
      meta: Joi.any(),

      country_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      address_type: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      city: Joi.string().allow(""),

      _custom_json: Joi.any(),

      phone: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      checkout_mode: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      address: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),
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
      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      code: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

      discount: Joi.number(),
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
      items: Joi.array().items(PosCartModel.CartProductInfo()),

      shipment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      shipments: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      promise: PosCartModel.ShipmentPromise(),

      dp_options: Joi.any().allow(null),

      fulfillment_id: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error: Joi.boolean(),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),
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

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
    });
  }

  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      meta: Joi.any(),

      address_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      delivery_address: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      pos: Joi.boolean(),

      files: Joi.array().items(PosCartModel.Files()),

      pick_at_store_uid: Joi.number().allow(null),

      billing_address: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),

      merchant_code: Joi.string().allow(""),

      staff: PosCartModel.StaffCheckout(),

      callback_url: Joi.string().allow("").allow(null),

      extra_meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      aggregator: Joi.string().allow(""),

      id: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),
    });
  }

  static CheckCart() {
    return Joi.object({
      error_message: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      currency: PosCartModel.CartCurrency(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      delivery_charge_order_value: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      restrict_checkout: Joi.boolean(),

      order_id: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      success: Joi.boolean(),

      comment: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      user_type: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      cart_id: Joi.number(),

      cod_message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cod_charges: Joi.number(),

      store_code: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      data: Joi.any(),

      cart: PosCartModel.CheckCart(),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_slots: Joi.any(),
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
      phone: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      id: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      pincode: Joi.number(),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
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

      source: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      coupon_text: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

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
