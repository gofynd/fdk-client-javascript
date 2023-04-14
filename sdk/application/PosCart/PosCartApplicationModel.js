const Joi = require("joi");

class PosCartModel {
  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),
    });
  }

  static CouponDetails() {
    return Joi.object({
      discount_total_quantity: Joi.number(),

      discount_single_quantity: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),

      url: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static Tags() {
    return Joi.object({
      tags: Joi.any(),
    });
  }

  static CartProduct() {
    return Joi.object({
      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      _custom_json: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      action: PosCartModel.ProductAction(),

      name: Joi.string().allow(""),

      images: Joi.array().items(PosCartModel.ProductImage()),

      type: Joi.string().allow(""),

      brand: PosCartModel.BaseInfo(),

      item_code: Joi.string().allow("").allow(null),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      teaser_tag: PosCartModel.Tags(),
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

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: PosCartModel.FreeGiftItem(),

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
      offer_text: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      amount: Joi.number(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

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
      product_group_tags: Joi.array().items(Joi.string().allow("")),

      store: PosCartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      price: PosCartModel.ArticlePriceInfo(),

      gift_card: Joi.any(),

      type: Joi.string().allow(""),

      is_gift_visible: Joi.boolean(),

      cart_item_meta: Joi.any(),

      uid: Joi.string().allow(""),

      identifier: Joi.any(),

      seller: PosCartModel.BaseInfo(),

      seller_identifier: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      availability: PosCartModel.ProductAvailability(),

      coupon: PosCartModel.CouponDetails(),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      product: PosCartModel.CartProduct(),

      parent_item_identifiers: Joi.any(),

      discount: Joi.string().allow(""),

      price: PosCartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      promo_meta: PosCartModel.PromoMeta(),

      quantity: Joi.number(),

      coupon_message: Joi.string().allow(""),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      key: Joi.string().allow(""),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      article: PosCartModel.ProductArticle(),
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
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      type: Joi.string().allow(""),

      value: Joi.number(),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      uid: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      coupon: Joi.number(),

      discount: Joi.number(),

      convenience_fee: Joi.number(),

      subtotal: Joi.number(),

      delivery_charge: Joi.number(),

      gst_charges: Joi.number(),

      cod_charge: Joi.number(),

      gift_card: Joi.number(),

      vog: Joi.number(),

      mrp_total: Joi.number(),

      fynd_cash: Joi.number(),

      you_saved: Joi.number(),

      total: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: PosCartModel.LoyaltyPoints(),

      coupon: PosCartModel.CouponBreakup(),

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

  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      buy_now: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      currency: PosCartModel.CartCurrency(),

      pan_config: Joi.any(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      display: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      seller_id: Joi.number(),

      extra_meta: Joi.any(),

      article_assignment: Joi.any(),

      item_id: Joi.number(),

      store_id: Joi.number(),

      pos: Joi.boolean(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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
      success: Joi.boolean(),

      partial: Joi.boolean(),

      cart: PosCartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      identifiers: PosCartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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

      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      title: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow(""),
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
      bulk_effective: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      margin: Joi.number(),

      price: PosCartModel.OfferPrice(),

      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),

      total: Joi.number(),

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
      is_active: Joi.boolean(),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      geo_location: PosCartModel.GeoLocation(),

      country: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      meta: Joi.any(),
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

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      is_updated: Joi.boolean(),

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
      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),

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
      dp_id: Joi.string().allow("").allow(null),

      promise: PosCartModel.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      order_type: Joi.string().allow(""),

      shipments: Joi.number(),

      shipment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      buy_now: Joi.boolean(),

      error: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),
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
      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      billing_address: Joi.any(),

      address_id: Joi.string().allow(""),

      delivery_address: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      payment_mode: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      aggregator: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      files: Joi.array().items(PosCartModel.Files()),

      pick_at_store_uid: Joi.number().allow(null),

      merchant_code: Joi.string().allow(""),

      staff: PosCartModel.StaffCheckout(),

      extra_meta: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      payment_identifier: Joi.string().allow("").allow(null),

      ordering_store: Joi.number().allow(null),

      meta: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      error_message: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      success: Joi.boolean(),

      delivery_charges: Joi.number(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      currency: PosCartModel.CartCurrency(),

      user_type: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      buy_now: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      cod_message: Joi.string().allow(""),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      cod_charges: Joi.number(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      data: Joi.any(),

      cart: PosCartModel.CheckCart(),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),
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

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

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
      available_modes: Joi.array().items(Joi.string().allow("")),

      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      area_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      pincode: Joi.number(),

      uid: Joi.number(),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),
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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      user: Joi.any(),

      source: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      buy_now: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

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
