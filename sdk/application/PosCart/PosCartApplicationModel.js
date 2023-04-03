const Joi = require("joi");

class PosCartModel {
  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
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

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      coupon: Joi.number(),

      you_saved: Joi.number(),

      fynd_cash: Joi.number(),

      convenience_fee: Joi.number(),

      cod_charge: Joi.number(),

      discount: Joi.number(),

      mrp_total: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      gst_charges: Joi.number(),

      subtotal: Joi.number(),

      vog: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: PosCartModel.LoyaltyPoints(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      raw: PosCartModel.RawBreakup(),

      coupon: PosCartModel.CouponBreakup(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

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

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

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

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductArticle() {
    return Joi.object({
      price: PosCartModel.ArticlePriceInfo(),

      quantity: Joi.number(),

      store: PosCartModel.BaseInfo(),

      seller: PosCartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      type: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),
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
      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: PosCartModel.FreeGiftItem(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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
      images: Joi.array().items(PosCartModel.ProductImage()),

      brand: PosCartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      action: PosCartModel.ProductAction(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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

  static CartProductInfo() {
    return Joi.object({
      price: PosCartModel.ProductPriceInfo(),

      coupon_message: Joi.string().allow(""),

      promo_meta: PosCartModel.PromoMeta(),

      bulk_offer: Joi.any(),

      article: PosCartModel.ProductArticle(),

      key: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      is_set: Joi.boolean(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      discount: Joi.string().allow(""),

      product: PosCartModel.CartProduct(),

      quantity: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      availability: PosCartModel.ProductAvailability(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      store_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article_assignment: Joi.any(),

      pos: Joi.boolean(),

      seller_id: Joi.number(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      display: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_size: Joi.string().allow(""),

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
      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),
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
      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      total_item_count: Joi.number(),

      current: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      sub_title: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      max_discount_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      is_applicable: Joi.boolean(),

      coupon_value: Joi.number(),
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

      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      price: PosCartModel.OfferPrice(),

      margin: Joi.number(),

      auto_applied: Joi.boolean(),

      total: Joi.number(),

      best: Joi.boolean(),

      type: Joi.string().allow(""),

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
      tags: Joi.array().items(Joi.string().allow("")),

      id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      user_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      area_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      is_default_address: Joi.boolean(),

      country_code: Joi.string().allow(""),

      _custom_json: Joi.any(),

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
      id: Joi.string().allow(""),

      success: Joi.boolean(),

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
      is_deleted: Joi.boolean(),

      id: Joi.string().allow(""),
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
      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),
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
      order_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      fulfillment_id: Joi.number(),

      shipments: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      promise: PosCartModel.ShipmentPromise(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      error: Joi.boolean(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      currency: PosCartModel.CartCurrency(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      uid: Joi.string().allow(""),
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

  static CartCheckoutCustomMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),
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

      _id: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      ordering_store: Joi.number().allow(null),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      pos: Joi.boolean(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      id: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      aggregator: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      order_type: Joi.string().allow("").required(),

      files: Joi.array().items(PosCartModel.Files()),

      pick_at_store_uid: Joi.number().allow(null),

      callback_url: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      staff: PosCartModel.StaffCheckout(),

      delivery_address: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      success: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      user_type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      order_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      delivery_charges: Joi.number(),

      cod_charges: Joi.number(),

      message: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      error_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      breakup_values: PosCartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      app_intercept_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      order_id: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

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
      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      pincode: Joi.number(),

      area: Joi.string().allow(""),

      id: Joi.number(),

      uid: Joi.number(),

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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      source: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      token: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

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
