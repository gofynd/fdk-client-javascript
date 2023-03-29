const Joi = require("joi");

class PosCartModel {
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

      marked: Joi.number(),

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
      size: Joi.string().allow(""),

      seller: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      price: PosCartModel.ArticlePriceInfo(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      store: PosCartModel.BaseInfo(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      selling: Joi.number(),

      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: PosCartModel.ProductPrice(),

      base: PosCartModel.ProductPrice(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),
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

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),
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

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),
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

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

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

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      images: Joi.array().items(PosCartModel.ProductImage()),

      action: PosCartModel.ProductAction(),

      brand: PosCartModel.BaseInfo(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      name: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      message: Joi.string().allow(""),

      article: PosCartModel.ProductArticle(),

      coupon_message: Joi.string().allow(""),

      price: PosCartModel.ProductPriceInfo(),

      discount: Joi.string().allow(""),

      availability: PosCartModel.ProductAvailability(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      quantity: Joi.number(),

      promo_meta: PosCartModel.PromoMeta(),

      bulk_offer: Joi.any(),

      parent_item_identifiers: Joi.any(),

      is_set: Joi.boolean(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      key: Joi.string().allow(""),

      product: PosCartModel.CartProduct(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),

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

  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      you_saved: Joi.number(),

      delivery_charge: Joi.number(),

      discount: Joi.number(),

      gst_charges: Joi.number(),

      total: Joi.number(),

      vog: Joi.number(),

      mrp_total: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      subtotal: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      value: Joi.number(),

      code: Joi.string().allow(""),
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

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),
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

  static CartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      currency: PosCartModel.CartCurrency(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      display: Joi.string().allow(""),

      pos: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article_assignment: Joi.any(),

      item_id: Joi.number(),

      store_id: Joi.number(),

      article_id: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      partial: Joi.boolean(),

      success: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      item_id: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

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
      total: Joi.number(),

      total_item_count: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      message: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

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
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      auto_applied: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

      type: Joi.string().allow(""),

      margin: Joi.number(),

      total: Joi.number(),

      quantity: Joi.number(),

      best: Joi.boolean(),
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
      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      area_code_slug: Joi.string().allow(""),

      id: Joi.string().allow(""),

      state: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      google_map_point: Joi.any(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      area_code: Joi.string().allow(""),
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
      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      title: Joi.string().allow(""),

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

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),

      promise: PosCartModel.ShipmentPromise(),

      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      error: Joi.boolean(),

      comment: Joi.string().allow(""),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),
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

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

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
      extra_meta: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      pick_at_store_uid: Joi.number().allow(null),

      aggregator: Joi.string().allow(""),

      billing_address: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      address_id: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      payment_mode: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow("").allow(null),

      pos: Joi.boolean(),

      staff: PosCartModel.StaffCheckout(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      files: Joi.array().items(PosCartModel.Files()),

      meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      billing_address_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      delivery_address: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charge_info: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      cod_charges: Joi.number(),

      id: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      cart_id: Joi.number(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      currency: PosCartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      success: Joi.boolean(),

      error_message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      store_code: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      data: Joi.any(),

      order_id: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      app_intercept_url: Joi.string().allow(""),
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
      id: Joi.number(),

      state: Joi.string().allow(""),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

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
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      user: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),

      meta: Joi.any(),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      currency: PosCartModel.CartCurrency(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      cart_id: Joi.number(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),
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
