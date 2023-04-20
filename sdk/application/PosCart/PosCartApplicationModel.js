const Joi = require("joi");

class PosCartModel {
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
      store: PosCartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      extra_meta: Joi.any(),

      identifier: Joi.any(),

      parent_item_identifiers: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      size: Joi.string().allow(""),

      is_gift_visible: Joi.boolean(),

      price: PosCartModel.ArticlePriceInfo(),

      gift_card: Joi.any(),

      cart_item_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      seller: PosCartModel.BaseInfo(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
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
      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
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
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

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

  static AppliedPromotion() {
    return Joi.object({
      promotion_group: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      amount: Joi.number(),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),
    });
  }

  static CouponDetails() {
    return Joi.object({
      code: Joi.string().allow(""),

      discount_single_quantity: Joi.number(),

      discount_total_quantity: Joi.number(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

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
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static Tags() {
    return Joi.object({
      tags: Joi.any(),
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

      url: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),
    });
  }

  static CartProduct() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      uid: Joi.number(),

      item_code: Joi.string().allow("").allow(null),

      slug: Joi.string().allow(""),

      brand: PosCartModel.BaseInfo(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      teaser_tag: PosCartModel.Tags(),

      action: PosCartModel.ProductAction(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      article: PosCartModel.ProductArticle(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      coupon_message: Joi.string().allow(""),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      is_set: Joi.boolean(),

      parent_item_identifiers: Joi.any(),

      coupon: PosCartModel.CouponDetails(),

      availability: PosCartModel.ProductAvailability(),

      price: PosCartModel.ProductPriceInfo(),

      key: Joi.string().allow(""),

      message: Joi.string().allow(""),

      product: PosCartModel.CartProduct(),

      quantity: Joi.number(),

      promo_meta: PosCartModel.PromoMeta(),

      discount: Joi.string().allow(""),

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

  static RawBreakup() {
    return Joi.object({
      mrp_total: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),

      fynd_cash: Joi.number(),

      you_saved: Joi.number(),

      vog: Joi.number(),

      cod_charge: Joi.number(),

      gift_card: Joi.number(),

      subtotal: Joi.number(),

      delivery_charge: Joi.number(),

      gst_charges: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      coupon_type: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      value: Joi.number(),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      total: Joi.number(),

      is_applied: Joi.boolean(),

      applicable: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),
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

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      pan_config: Joi.any(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      store_id: Joi.number(),

      extra_meta: Joi.any(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_id: Joi.string().allow(""),

      display: Joi.string().allow(""),

      article_assignment: Joi.any(),

      item_id: Joi.number(),

      pos: Joi.boolean(),

      quantity: Joi.number(),
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

      partial: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

      item_id: Joi.number(),

      quantity: Joi.number(),
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
      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_value: Joi.number(),

      description: Joi.string().allow("").allow(null),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total: Joi.number(),

      has_next: Joi.boolean(),

      total_item_count: Joi.number(),

      current: Joi.number(),

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

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      total: Joi.number(),

      margin: Joi.number(),

      price: PosCartModel.OfferPrice(),

      auto_applied: Joi.boolean(),

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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      area_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      country_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      google_map_point: Joi.any(),

      meta: Joi.any(),

      created_by_user_id: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),
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
      is_default_address: Joi.boolean(),

      is_updated: Joi.boolean(),

      id: Joi.string().allow(""),

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
      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      discount: Joi.number(),
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
      fulfillment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      box_type: Joi.string().allow("").allow(null),

      promise: PosCartModel.ShipmentPromise(),

      shipments: Joi.number(),

      shipment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
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
      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
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
      merchant_code: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      extra_meta: Joi.any(),

      staff: PosCartModel.StaffCheckout(),

      address_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      payment_mode: Joi.string().allow("").required(),

      pos: Joi.boolean(),

      files: Joi.array().items(PosCartModel.Files()),

      ordering_store: Joi.number().allow(null),

      pick_at_store_uid: Joi.number().allow(null),

      billing_address: Joi.any(),

      payment_params: Joi.any().allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      delivery_address: Joi.any(),

      meta: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      cod_charges: Joi.number(),

      order_id: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      store_code: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charges: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      success: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      error_message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      callback_url: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      app_intercept_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      data: Joi.any(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static GiftDetail() {
    return Joi.object({
      gift_message: Joi.string().allow(""),

      is_gift_applied: Joi.boolean(),
    });
  }

  static ArticleGiftDetail() {
    return Joi.object({
      article_id: PosCartModel.GiftDetail(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      gift_details: PosCartModel.ArticleGiftDetail(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

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
      country: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      uid: Joi.number(),

      area: Joi.string().allow(""),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      city: Joi.string().allow(""),
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
      restrict_checkout: Joi.boolean(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      currency: PosCartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),
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
