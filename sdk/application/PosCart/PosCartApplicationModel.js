const Joi = require("joi");

class PosCartModel {
  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      title: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),
    });
  }

  static RawBreakup() {
    return Joi.object({
      convenience_fee: Joi.number(),

      vog: Joi.number(),

      subtotal: Joi.number(),

      you_saved: Joi.number(),

      gst_charges: Joi.number(),

      gift_card: Joi.number(),

      total: Joi.number(),

      fynd_cash: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      coupon: Joi.number(),

      cod_charge: Joi.number(),

      mrp_total: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: PosCartModel.CouponBreakup(),

      raw: PosCartModel.RawBreakup(),

      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      loyalty_points: PosCartModel.LoyaltyPoints(),
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
      selling: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: PosCartModel.ProductPrice(),

      converted: PosCartModel.ProductPrice(),
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
      base: PosCartModel.BasePrice(),

      converted: PosCartModel.BasePrice(),
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
      parent_item_identifiers: Joi.any(),

      price: PosCartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      cart_item_meta: Joi.any(),

      type: Joi.string().allow(""),

      seller: PosCartModel.BaseInfo(),

      extra_meta: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      gift_card: Joi.any(),

      is_gift_visible: Joi.boolean(),

      identifier: Joi.any(),

      store: PosCartModel.BaseInfo(),

      size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),
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

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      free_gift_item_details: PosCartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_group: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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

  static Tags() {
    return Joi.object({
      tags: Joi.any(),
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
      uid: Joi.number(),

      brand: PosCartModel.BaseInfo(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      images: Joi.array().items(PosCartModel.ProductImage()),

      tags: Joi.array().items(Joi.string().allow("")),

      action: PosCartModel.ProductAction(),

      item_code: Joi.string().allow("").allow(null),

      teaser_tag: PosCartModel.Tags(),

      _custom_json: Joi.any(),

      name: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CouponDetails() {
    return Joi.object({
      discount_single_quantity: Joi.number(),

      code: Joi.string().allow(""),

      discount_total_quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      price: PosCartModel.ProductPriceInfo(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      article: PosCartModel.ProductArticle(),

      message: Joi.string().allow(""),

      availability: PosCartModel.ProductAvailability(),

      coupon_message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      product: PosCartModel.CartProduct(),

      promo_meta: PosCartModel.PromoMeta(),

      bulk_offer: Joi.any(),

      quantity: Joi.number(),

      key: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      coupon: PosCartModel.CouponDetails(),

      is_set: Joi.boolean(),

      price_per_unit: PosCartModel.ProductPriceInfo(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      currency: PosCartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      pan_config: Joi.any(),

      breakup_values: PosCartModel.CartBreakup(),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      seller_id: Joi.number(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      pos: Joi.boolean(),

      article_assignment: Joi.any(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      store_id: Joi.number(),

      display: Joi.string().allow(""),

      item_id: Joi.number(),
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
      partial: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

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

  static Coupon() {
    return Joi.object({
      coupon_value: Joi.number(),

      title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),
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

  static OfferPrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      bulk_effective: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      price: PosCartModel.OfferPrice(),

      type: Joi.string().allow(""),

      auto_applied: Joi.boolean(),

      total: Joi.number(),

      quantity: Joi.number(),

      best: Joi.boolean(),

      margin: Joi.number(),
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
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static Address() {
    return Joi.object({
      state: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      area_code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      address: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      google_map_point: Joi.any(),
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

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

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

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      discount: Joi.number(),

      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),
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
      promise: PosCartModel.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      dp_options: Joi.any().allow(null),

      order_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      shipment_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      currency: PosCartModel.CartCurrency(),

      breakup_values: PosCartModel.CartBreakup(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      error: Joi.boolean(),

      cart_id: Joi.number(),

      uid: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
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

  static StaffCheckout() {
    return Joi.object({
      employee_code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
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
      staff: PosCartModel.StaffCheckout(),

      payment_params: Joi.any().allow(null),

      payment_mode: Joi.string().allow("").required(),

      meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      files: Joi.array().items(PosCartModel.Files()),

      payment_identifier: Joi.string().allow("").allow(null),

      pick_at_store_uid: Joi.number().allow(null),

      extra_meta: Joi.any(),

      aggregator: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),

      delivery_address: Joi.any(),

      pos: Joi.boolean(),

      billing_address: Joi.any(),

      payment_auto_confirm: Joi.boolean(),
    });
  }

  static CheckCart() {
    return Joi.object({
      breakup_values: PosCartModel.CartBreakup(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      uid: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      store_emps: Joi.array().items(Joi.any()),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      cod_charges: Joi.number(),

      buy_now: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      store_code: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      order_id: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      gstin: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      cart: PosCartModel.CheckCart(),

      order_id: Joi.string().allow(""),
    });
  }

  static GiftDetail() {
    return Joi.object({
      is_gift_applied: Joi.boolean(),

      gift_message: Joi.string().allow(""),
    });
  }

  static ArticleGiftDetail() {
    return Joi.object({
      article_id: PosCartModel.GiftDetail(),
    });
  }

  static CartMetaRequest() {
    return Joi.object({
      gift_details: PosCartModel.ArticleGiftDetail(),

      pick_up_customer_details: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
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

      uid: Joi.number(),

      id: Joi.number(),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

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
      meta: Joi.any(),

      user: Joi.any(),

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      breakup_values: PosCartModel.CartBreakup(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      uid: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
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
