const Joi = require("joi");

class PosCartModel {
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

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      uid: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      fynd_cash: Joi.number(),

      vog: Joi.number(),

      gift_card: Joi.number(),

      delivery_charge: Joi.number(),

      convenience_fee: Joi.number(),

      you_saved: Joi.number(),

      discount: Joi.number(),

      subtotal: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      coupon: Joi.number(),

      total: Joi.number(),

      gst_charges: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(PosCartModel.DisplayBreakup()),

      coupon: PosCartModel.CouponBreakup(),

      loyalty_points: PosCartModel.LoyaltyPoints(),

      raw: PosCartModel.RawBreakup(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static Tags() {
    return Joi.object({
      tags: Joi.any(),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: PosCartModel.ActionQuery(),
    });
  }

  static CartProduct() {
    return Joi.object({
      slug: Joi.string().allow(""),

      teaser_tag: PosCartModel.Tags(),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      images: Joi.array().items(PosCartModel.ProductImage()),

      name: Joi.string().allow(""),

      categories: Joi.array().items(PosCartModel.CategoryInfo()),

      tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      brand: PosCartModel.BaseInfo(),

      action: PosCartModel.ProductAction(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CouponDetails() {
    return Joi.object({
      discount_single_quantity: Joi.number(),

      code: Joi.string().allow(""),

      discount_total_quantity: Joi.number(),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      is_gift_visible: Joi.boolean(),

      identifier: Joi.any(),

      cart_item_meta: Joi.any(),

      gift_card: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      seller: PosCartModel.BaseInfo(),

      store: PosCartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      price: PosCartModel.ArticlePriceInfo(),

      extra_meta: Joi.any(),

      type: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      size: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

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

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      free_gift_item_details: PosCartModel.FreeGiftItem(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      offer: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      buy_rules: Joi.array().items(PosCartModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_group: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      is_set: Joi.boolean(),

      promo_meta: PosCartModel.PromoMeta(),

      discount: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      product: PosCartModel.CartProduct(),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),

      coupon: PosCartModel.CouponDetails(),

      article: PosCartModel.ProductArticle(),

      availability: PosCartModel.ProductAvailability(),

      key: Joi.string().allow(""),

      price: PosCartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),

      price_per_unit: PosCartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      pos: Joi.boolean(),

      item_id: Joi.number(),

      display: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      article_assignment: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),
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

      success: Joi.boolean(),

      partial: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      identifiers: PosCartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),
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

      has_previous: Joi.boolean(),

      current: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      description: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

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
      effective: Joi.number(),

      bulk_effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
    });
  }

  static OfferItem() {
    return Joi.object({
      best: Joi.boolean(),

      margin: Joi.number(),

      quantity: Joi.number(),

      total: Joi.number(),

      price: PosCartModel.OfferPrice(),

      auto_applied: Joi.boolean(),

      type: Joi.string().allow(""),
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

      is_active: Joi.boolean(),

      landmark: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      country_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      geo_location: PosCartModel.GeoLocation(),

      area_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      meta: Joi.any(),

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
      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),
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
      fulfillment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      shipments: Joi.number(),

      fulfillment_id: Joi.number(),

      dp_options: Joi.any().allow(null),

      items: Joi.array().items(PosCartModel.CartProductInfo()),

      promise: PosCartModel.ShipmentPromise(),

      box_type: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      currency: PosCartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      breakup_values: PosCartModel.CartBreakup(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      cart_id: Joi.number(),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),

      error: Joi.boolean(),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),
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

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

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
      pick_at_store_uid: Joi.number().allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      ordering_store: Joi.number().allow(null),

      payment_params: Joi.any().allow(null),

      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      billing_address: Joi.any(),

      delivery_address: Joi.any(),

      extra_meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      pos: Joi.boolean(),

      staff: PosCartModel.StaffCheckout(),

      order_type: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),

      meta: Joi.any(),

      files: Joi.array().items(PosCartModel.Files()),
    });
  }

  static CheckCart() {
    return Joi.object({
      success: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      delivery_charges: Joi.number(),

      order_id: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      cart_id: Joi.number(),

      cod_charges: Joi.number(),

      coupon_text: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      data: Joi.any(),

      app_intercept_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

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
      pick_up_customer_details: Joi.any(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

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
      email: Joi.string().allow(""),

      country: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      id: Joi.number(),

      state: Joi.string().allow(""),

      uid: Joi.number(),

      area_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      area: Joi.string().allow(""),

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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      user: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      breakup_values: PosCartModel.CartBreakup(),

      message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      shared_cart_details: PosCartModel.SharedCartDetails(),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      currency: PosCartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      delivery_promise: PosCartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_selection_lock: PosCartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      items: Joi.array().items(PosCartModel.CartProductInfo()),
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
