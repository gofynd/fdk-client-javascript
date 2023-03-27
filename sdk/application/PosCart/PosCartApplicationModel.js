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

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      add_on: Joi.number(),
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
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),

      raw_offer: Joi.any(),

      offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: PosCartModel.FreeGiftItem(),
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
      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      offer_text: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),
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
      images: Joi.array().items(PosCartModel.ProductImage()),

      brand: PosCartModel.BaseInfo(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      action: PosCartModel.ProductAction(),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
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

      price: PosCartModel.ArticlePriceInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      store: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      seller: PosCartModel.BaseInfo(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      identifiers: PosCartModel.CartProductIdentifer().required(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      price: PosCartModel.ProductPriceInfo(),

      product: PosCartModel.CartProduct(),

      article: PosCartModel.ProductArticle(),

      bulk_offer: Joi.any(),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      is_set: Joi.boolean(),

      promo_meta: PosCartModel.PromoMeta(),

      parent_item_identifiers: Joi.any(),

      key: Joi.string().allow(""),

      availability: PosCartModel.ProductAvailability(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),

      applicable: Joi.number(),

      total: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      delivery_charge: Joi.number(),

      total: Joi.number(),

      subtotal: Joi.number(),

      you_saved: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      discount: Joi.number(),

      coupon: Joi.number(),

      mrp_total: Joi.number(),

      gst_charges: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      key: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      title: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: PosCartModel.LoyaltyPoints(),

      raw: PosCartModel.RawBreakup(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      coupon: PosCartModel.CouponBreakup(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      buy_now: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      pos: Joi.boolean(),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      article_id: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_assignment: Joi.any(),

      display: Joi.string().allow(""),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.AddProductCart()),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      cart: PosCartModel.CartDetailResponse(),

      partial: Joi.boolean(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      identifiers: PosCartModel.CartProductIdentifer().required(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      item_index: Joi.number(),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

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

  static PageCoupon() {
    return Joi.object({
      has_next: Joi.boolean(),

      total: Joi.number(),

      current: Joi.number(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      title: Joi.string().allow(""),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      expires_on: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),
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
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      price: PosCartModel.OfferPrice(),

      total: Joi.number(),

      margin: Joi.number(),

      best: Joi.boolean(),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      auto_applied: Joi.boolean(),
    });
  }

  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      google_map_point: Joi.any(),

      state: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      email: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

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
      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      code: Joi.string().allow("").allow(null),

      next_validation_required: Joi.boolean().allow(null),

      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),

      coupon_validity: PosCartModel.CouponValidity(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      promise: PosCartModel.ShipmentPromise(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      order_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      cart_id: Joi.number(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      id: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      error: Joi.boolean(),
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

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
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
      pos: Joi.boolean(),

      staff: PosCartModel.StaffCheckout(),

      files: Joi.array().items(PosCartModel.Files()),

      extra_meta: Joi.any(),

      meta: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      payment_identifier: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      billing_address: Joi.any(),

      address_id: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),

      ordering_store: Joi.number().allow(null),

      delivery_address: Joi.any(),

      payment_params: Joi.any().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      cart_id: Joi.number(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      success: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      user_type: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      order_id: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_charge_order_value: Joi.number(),

      delivery_charges: Joi.number(),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      cod_charges: Joi.number(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      store_code: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      cod_message: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      error_message: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      data: Joi.any(),

      cart: PosCartModel.CheckCart(),
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
      store_code: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      id: Joi.number(),

      address: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

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

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      cart_id: Joi.number(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      id: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      breakup_values: PosCartModel.CartBreakup(),
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
