const Joi = require("joi");

class PosCartModel {
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

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      total: Joi.number(),

      applicable: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      code: Joi.string().allow(""),

      value: Joi.number(),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      uid: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      delivery_charge: Joi.number(),

      coupon: Joi.number(),

      total: Joi.number(),

      gift_card: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      discount: Joi.number(),

      convenience_fee: Joi.number(),

      fynd_cash: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      you_saved: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),

      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),
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

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
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
      base: PosCartModel.BasePrice(),

      converted: PosCartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      identifier: Joi.any(),

      extra_meta: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      is_gift_visible: Joi.boolean(),

      parent_item_identifiers: Joi.any(),

      cart_item_meta: Joi.any(),

      quantity: Joi.number(),

      store: PosCartModel.BaseInfo(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gift_card: Joi.any(),

      seller: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      price: PosCartModel.ArticlePriceInfo(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),
    });
  }

  static CouponDetails() {
    return Joi.object({
      discount_single_quantity: Joi.number(),

      discount_total_quantity: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      selling: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: PosCartModel.ProductPrice(),

      converted: PosCartModel.ProductPrice(),
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

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),

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

      raw_offer: Joi.any(),

      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promotion_type: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      offer_text: Joi.string().allow(""),

      amount: Joi.number(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      brand: PosCartModel.BaseInfo(),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      name: Joi.string().allow(""),

      teaser_tag: PosCartModel.Tags(),

      tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.number(),

      action: PosCartModel.ProductAction(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      _custom_json: Joi.any(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      item_code: Joi.string().allow("").allow(null),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      key: Joi.string().allow(""),

      article: PosCartModel.ProductArticle(),

      availability: PosCartModel.ProductAvailability(),

      bulk_offer: Joi.any(),

      coupon: PosCartModel.CouponDetails(),

      parent_item_identifiers: Joi.any(),

      coupon_message: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      is_set: Joi.boolean(),

      promo_meta: PosCartModel.PromoMeta(),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      message: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),

      product: PosCartModel.CartProduct(),

      price: PosCartModel.ProductPriceInfo(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      breakup_values: PosCartModel.CartBreakup(),

      pan_config: Joi.any(),

      currency: PosCartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      pan_no: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      store_id: Joi.number(),

      display: Joi.string().allow(""),

      seller_id: Joi.number(),

      article_id: Joi.string().allow(""),

      article_assignment: Joi.any(),

      item_id: Joi.number(),

      pos: Joi.boolean(),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
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
      success: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      item_id: Joi.number(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

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
      current: Joi.number(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),
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
      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      total: Joi.number(),

      best: Joi.boolean(),

      margin: Joi.number(),

      auto_applied: Joi.boolean(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),

      price: PosCartModel.OfferPrice(),
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
      city: Joi.string().allow(""),

      id: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      meta: Joi.any(),

      area_code_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      google_map_point: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      is_active: Joi.boolean(),

      country_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      email: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
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
      is_deleted: Joi.boolean(),

      id: Joi.string().allow(""),
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

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

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
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),

      coupon_validity: PosCartModel.CouponValidity(),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      fulfillment_id: Joi.number(),

      shipment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      promise: PosCartModel.ShipmentPromise(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      order_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      error: Joi.boolean(),

      gstin: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      currency: PosCartModel.CartCurrency(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),
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

  static Files() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      extra_meta: Joi.any(),

      delivery_address: Joi.any(),

      aggregator: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      address_id: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      merchant_code: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),

      meta: Joi.any(),

      billing_address: Joi.any(),

      payment_params: Joi.any().allow(null),

      billing_address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      staff: PosCartModel.StaffCheckout(),

      files: Joi.array().items(PosCartModel.Files()),

      order_type: Joi.string().allow("").required(),

      pos: Joi.boolean(),

      ordering_store: Joi.number().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      id: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      store_code: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      error_message: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      currency: PosCartModel.CartCurrency(),

      delivery_charges: Joi.number(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_charge_order_value: Joi.number(),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      user_type: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      success: Joi.boolean(),

      cod_available: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      restrict_checkout: Joi.boolean(),

      cod_charges: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      cart: PosCartModel.CheckCart(),

      app_intercept_url: Joi.string().allow(""),

      data: Joi.any(),

      callback_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
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

      pick_up_customer_details: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      gift_details: PosCartModel.ArticleGiftDetail(),
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
      area_code_slug: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      id: Joi.number(),

      phone: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country: Joi.string().allow(""),
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
      source: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      token: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      id: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      breakup_values: PosCartModel.CartBreakup(),

      currency: PosCartModel.CartCurrency(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),
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
