const Joi = require("joi");

class PosCartModel {
  static FreeGiftItem() {
    return Joi.object({
      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),
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

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

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

  static AppliedPromotion() {
    return Joi.object({
      amount: Joi.number(),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
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

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      effective: Joi.number(),

      selling: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: PosCartModel.ProductPrice(),

      converted: PosCartModel.ProductPrice(),
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
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),
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
      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      type: Joi.string().allow(""),

      size: Joi.string().allow(""),

      seller: PosCartModel.BaseInfo(),

      price: PosCartModel.ArticlePriceInfo(),

      store: PosCartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      brand: PosCartModel.BaseInfo(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      slug: Joi.string().allow(""),

      action: PosCartModel.ProductAction(),

      uid: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      coupon_message: Joi.string().allow(""),

      promo_meta: PosCartModel.PromoMeta(),

      message: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      availability: PosCartModel.ProductAvailability(),

      price: PosCartModel.ProductPriceInfo(),

      article: PosCartModel.ProductArticle(),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      is_set: Joi.boolean(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      product: PosCartModel.CartProduct(),

      quantity: Joi.number(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
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

  static CouponBreakup() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      coupon: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      mrp_total: Joi.number(),

      gst_charges: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      vog: Joi.number(),

      convenience_fee: Joi.number(),

      you_saved: Joi.number(),

      discount: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: PosCartModel.LoyaltyPoints(),

      coupon: PosCartModel.CouponBreakup(),

      raw: PosCartModel.RawBreakup(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),
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

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      currency: PosCartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      pos: Joi.boolean(),

      display: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_assignment: Joi.any(),

      store_id: Joi.number(),

      item_id: Joi.number(),

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

      partial: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      item_id: Joi.number(),

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
      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      message: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      is_applied: Joi.boolean(),

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

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      type: Joi.string().allow(""),

      total: Joi.number(),

      auto_applied: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

      margin: Joi.number(),

      best: Joi.boolean(),

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
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      geo_location: PosCartModel.GeoLocation(),

      _custom_json: Joi.any(),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      is_active: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      google_map_point: Joi.any(),

      area_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

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
      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

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

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      shipments: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      fulfillment_id: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      uid: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      error: Joi.boolean(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

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
      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      aggregator: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      files: Joi.array().items(PosCartModel.Files()),

      payment_mode: Joi.string().allow("").required(),

      pos: Joi.boolean(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      delivery_address: Joi.any(),

      payment_params: Joi.any().allow(null),

      staff: PosCartModel.StaffCheckout(),

      meta: Joi.any(),

      order_type: Joi.string().allow("").required(),

      billing_address: Joi.any(),

      ordering_store: Joi.number().allow(null),

      extra_meta: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      id: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      success: Joi.boolean(),

      error_message: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),

      cart_id: Joi.number(),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      currency: PosCartModel.CartCurrency(),

      delivery_charge_order_value: Joi.number(),

      cod_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      cod_charges: Joi.number(),

      message: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      app_intercept_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      delivery_slots: Joi.any(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

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
      pickup_stores: Joi.array().items(Joi.number()),

      available_modes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      uid: Joi.number(),

      id: Joi.number(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

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
      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      source: Joi.any(),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      uid: Joi.string().allow(""),
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
