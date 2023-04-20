const Joi = require("joi");

class PosCartModel {
  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static CouponDetails() {
    return Joi.object({
      code: Joi.string().allow(""),

      discount_total_quantity: Joi.number(),

      discount_single_quantity: Joi.number(),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      query: PosCartModel.ActionQuery(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static Tags() {
    return Joi.object({
      tags: Joi.any(),
    });
  }

  static CartProduct() {
    return Joi.object({
      item_code: Joi.string().allow("").allow(null),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      brand: PosCartModel.BaseInfo(),

      action: PosCartModel.ProductAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      images: Joi.array().items(PosCartModel.ProductImage()),

      teaser_tag: PosCartModel.Tags(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      add_on: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
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

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),
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
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),

      offer: Joi.any(),

      raw_offer: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      store: PosCartModel.BaseInfo(),

      identifier: Joi.any(),

      quantity: Joi.number(),

      seller: PosCartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow(""),

      price: PosCartModel.ArticlePriceInfo(),

      is_gift_visible: Joi.boolean(),

      parent_item_identifiers: Joi.any(),

      type: Joi.string().allow(""),

      gift_card: Joi.any(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      extra_meta: Joi.any(),

      cart_item_meta: Joi.any(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      coupon: PosCartModel.CouponDetails(),

      product: PosCartModel.CartProduct(),

      message: Joi.string().allow(""),

      availability: PosCartModel.ProductAvailability(),

      quantity: Joi.number(),

      is_set: Joi.boolean(),

      price: PosCartModel.ProductPriceInfo(),

      promo_meta: PosCartModel.PromoMeta(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      coupon_message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      article: PosCartModel.ProductArticle(),

      key: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      max_discount_value: Joi.number(),

      code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      type: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      title: Joi.string().allow("").allow(null),

      value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),
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

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),

      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),
    });
  }

  static RawBreakup() {
    return Joi.object({
      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      gst_charges: Joi.number(),

      gift_card: Joi.number(),

      fynd_cash: Joi.number(),

      cod_charge: Joi.number(),

      mrp_total: Joi.number(),

      subtotal: Joi.number(),

      you_saved: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),
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
      pan_no: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      pan_config: Joi.any(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      pos: Joi.boolean(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_assignment: Joi.any(),

      parent_item_identifiers: Joi.any(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),

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
      cart: PosCartModel.CartDetailResponse(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      item_id: Joi.number(),

      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

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
      cart: PosCartModel.CartDetailResponse(),

      success: Joi.boolean(),

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

      total: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      current: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applicable: Joi.boolean(),

      coupon_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      title: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),
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
      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      bulk_effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static OfferItem() {
    return Joi.object({
      quantity: Joi.number(),

      total: Joi.number(),

      best: Joi.boolean(),

      price: PosCartModel.OfferPrice(),

      margin: Joi.number(),

      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),
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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      phone: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      area_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      google_map_point: Joi.any(),

      geo_location: PosCartModel.GeoLocation(),

      is_default_address: Joi.boolean(),

      country_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      meta: Joi.any(),

      id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
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
      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      discount: Joi.number(),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),
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
      fulfillment_id: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),

      shipment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      promise: PosCartModel.ShipmentPromise(),

      dp_id: Joi.string().allow("").allow(null),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      error: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),
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

  static StaffCheckout() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      billing_address: Joi.any(),

      order_type: Joi.string().allow("").required(),

      pick_at_store_uid: Joi.number().allow(null),

      merchant_code: Joi.string().allow(""),

      delivery_address: Joi.any(),

      ordering_store: Joi.number().allow(null),

      pos: Joi.boolean(),

      files: Joi.array().items(PosCartModel.Files()),

      callback_url: Joi.string().allow("").allow(null),

      staff: PosCartModel.StaffCheckout(),

      payment_identifier: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      payment_params: Joi.any().allow(null),

      payment_auto_confirm: Joi.boolean(),

      billing_address_id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      extra_meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static CheckCart() {
    return Joi.object({
      buy_now: Joi.boolean(),

      order_id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      cod_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      error_message: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      cart_id: Joi.number(),

      store_code: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      cod_charges: Joi.number(),

      success: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charges: Joi.number(),

      user_type: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      success: Joi.boolean(),

      app_intercept_url: Joi.string().allow(""),

      data: Joi.any(),

      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      message: Joi.string().allow(""),
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
      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      gift_details: PosCartModel.ArticleGiftDetail(),

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
      pickup_stores: Joi.array().items(Joi.number()),

      available_modes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      id: Joi.number(),

      area_code_slug: Joi.string().allow(""),

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
      created_on: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),

      user: Joi.any(),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      buy_now: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      currency: PosCartModel.CartCurrency(),

      cart_id: Joi.number(),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),
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
