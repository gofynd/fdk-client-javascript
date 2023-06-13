const Joi = require("joi");

class PosCartModel {
  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }
  static AddCartDetailResponse() {
    return Joi.object({
      cart: PosCartModel.CartDetailResponse(),
      message: Joi.string().allow(""),
      partial: Joi.boolean(),
      success: Joi.boolean(),
    });
  }
  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.AddProductCart()),
    });
  }
  static AddProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),
      article_assignment: Joi.any(),
      article_id: Joi.string().allow(""),
      display: Joi.string().allow(""),
      extra_meta: Joi.any(),
      item_id: Joi.number(),
      item_size: Joi.string().allow(""),
      parent_item_identifiers: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.string().allow(""))
      ),
      pos: Joi.boolean(),
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
      quantity: Joi.number(),
      seller_id: Joi.number(),
      store_id: Joi.number(),
    });
  }
  static Address() {
    return Joi.object({
      address: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      area_code: Joi.string().allow(""),
      area_code_slug: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      geo_location: PosCartModel.GeoLocation(),
      google_map_point: Joi.any(),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_default_address: Joi.boolean(),
      landmark: Joi.string().allow(""),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      state: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      user_id: Joi.string().allow(""),
    });
  }
  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),
      free_gift_item_details: PosCartModel.FreeGiftItem(),
      parent_item_identifier: Joi.string().allow(""),
      quantity: Joi.number(),
    });
  }
  static AppliedPromotion() {
    return Joi.object({
      amount: Joi.number(),
      applied_free_articles: Joi.array().items(
        PosCartModel.AppliedFreeArticles()
      ),
      article_quantity: Joi.number(),
      buy_rules: Joi.array().items(PosCartModel.BuyRules()),
      discount_rules: Joi.array().items(PosCartModel.DiscountRulesApp()),
      mrp_promotion: Joi.boolean(),
      offer_text: Joi.string().allow(""),
      ownership: PosCartModel.Ownership(),
      promo_id: Joi.string().allow(""),
      promotion_group: Joi.string().allow(""),
      promotion_name: Joi.string().allow(""),
      promotion_type: Joi.string().allow(""),
    });
  }
  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),
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
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
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
  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),
      item_criteria: Joi.any(),
    });
  }
  static CartBreakup() {
    return Joi.object({
      coupon: PosCartModel.CouponBreakup(),
      display: Joi.array().items(PosCartModel.DisplayBreakup()),
      loyalty_points: PosCartModel.LoyaltyPoints(),
      raw: PosCartModel.RawBreakup(),
    });
  }
  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }
  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),
      callback_url: Joi.string().allow(""),
      cart: PosCartModel.CheckCart(),
      data: Joi.any(),
      message: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      payment_confirm_url: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
    });
  }
  static CartDeliveryModesResponse() {
    return Joi.object({
      available_modes: Joi.array().items(Joi.string().allow("")),
      pickup_stores: Joi.array().items(Joi.number()),
    });
  }
  static CartDetailResponse() {
    return Joi.object({
      applied_promo_details: Joi.array().items(PosCartModel.AppliedPromotion()),
      breakup_values: PosCartModel.CartBreakup(),
      buy_now: Joi.boolean(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: PosCartModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: PosCartModel.ShipmentPromise(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(PosCartModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
    });
  }
  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }
  static CartMetaMissingResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),
    });
  }
  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      pick_up_customer_details: Joi.any(),
    });
  }
  static CartMetaResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      billing_address: Joi.any(),
      billing_address_id: Joi.string().allow(""),
      callback_url: Joi.string().allow("").allow(null),
      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),
      delivery_address: Joi.any(),
      extra_meta: Joi.any(),
      files: Joi.array().items(PosCartModel.Files()),
      merchant_code: Joi.string().allow(""),
      meta: Joi.any(),
      order_type: Joi.string().allow("").required(),
      ordering_store: Joi.number().allow(null),
      payment_auto_confirm: Joi.boolean(),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_mode: Joi.string().allow("").required(),
      payment_params: Joi.any().allow(null),
      pick_at_store_uid: Joi.number().allow(null),
      pos: Joi.boolean(),
      staff: PosCartModel.StaffCheckout(),
    });
  }
  static CartProduct() {
    return Joi.object({
      action: PosCartModel.ProductAction(),
      brand: PosCartModel.BaseInfo(),
      categories: Joi.array().items(PosCartModel.CategoryInfo()),
      images: Joi.array().items(PosCartModel.ProductImage()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }
  static CartProductInfo() {
    return Joi.object({
      article: PosCartModel.ProductArticle(),
      availability: PosCartModel.ProductAvailability(),
      bulk_offer: Joi.any(),
      coupon_message: Joi.string().allow(""),
      delivery_promise: PosCartModel.ShipmentPromise(),
      discount: Joi.string().allow(""),
      identifiers: PosCartModel.CartProductIdentifer().required(),
      is_set: Joi.boolean(),
      key: Joi.string().allow(""),
      message: Joi.string().allow(""),
      moq: Joi.any(),
      parent_item_identifiers: Joi.any(),
      price: PosCartModel.ProductPriceInfo(),
      price_per_unit: PosCartModel.ProductPriceInfo(),
      product: PosCartModel.CartProduct(),
      promo_meta: PosCartModel.PromoMeta(),
      promotions_applied: Joi.array().items(PosCartModel.AppliedPromotion()),
      quantity: Joi.number(),
    });
  }
  static CartShipmentsResponse() {
    return Joi.object({
      breakup_values: PosCartModel.CartBreakup(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: PosCartModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: PosCartModel.ShipmentPromise(),
      error: Joi.boolean(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      shipments: Joi.array().items(PosCartModel.ShipmentResponse()),
      uid: Joi.string().allow(""),
    });
  }
  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static CheckCart() {
    return Joi.object({
      breakup_values: PosCartModel.CartBreakup(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      cod_available: Joi.boolean(),
      cod_charges: Joi.number(),
      cod_message: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: PosCartModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_charge_order_value: Joi.number(),
      delivery_charges: Joi.number(),
      delivery_promise: PosCartModel.ShipmentPromise(),
      error_message: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(PosCartModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      store_code: Joi.string().allow(""),
      store_emps: Joi.array().items(Joi.any()),
      success: Joi.boolean(),
      uid: Joi.string().allow(""),
      user_type: Joi.string().allow(""),
    });
  }
  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),
      coupon_type: Joi.string().allow("").allow(null),
      coupon_value: Joi.number(),
      description: Joi.string().allow("").allow(null),
      expires_on: Joi.string().allow(""),
      is_applicable: Joi.boolean(),
      is_applied: Joi.boolean(),
      max_discount_value: Joi.number(),
      message: Joi.string().allow(""),
      minimum_cart_value: Joi.number(),
      sub_title: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),
      coupon_type: Joi.string().allow("").allow(null),
      coupon_value: Joi.number(),
      description: Joi.string().allow("").allow(null),
      is_applied: Joi.boolean(),
      max_discount_value: Joi.number(),
      message: Joi.string().allow(""),
      minimum_cart_value: Joi.number(),
      sub_title: Joi.string().allow("").allow(null),
      title: Joi.string().allow("").allow(null),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      discount: Joi.number(),
      display_message_en: Joi.string().allow("").allow(null),
      title: Joi.string().allow(""),
      valid: Joi.boolean(),
    });
  }
  static DeleteAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_deleted: Joi.boolean(),
    });
  }
  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
      offer: Joi.any(),
      raw_offer: Joi.any(),
    });
  }
  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      display: Joi.string().allow(""),
      key: Joi.string().allow(""),
      message: Joi.array().items(Joi.string().allow("")),
      value: Joi.number(),
    });
  }
  static Files() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),
      item_id: Joi.number(),
      item_images_url: Joi.array().items(Joi.string().allow("")),
      item_name: Joi.string().allow(""),
      item_price_details: Joi.any(),
      item_slug: Joi.string().allow(""),
    });
  }
  static GeoLocation() {
    return Joi.object({
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }
  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(PosCartModel.Address()),
      pii_masking: Joi.boolean(),
    });
  }
  static GetCouponResponse() {
    return Joi.object({
      available_coupon_list: Joi.array().items(PosCartModel.Coupon()),
      page: PosCartModel.PageCoupon(),
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
  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),
      description: Joi.string().allow(""),
      is_applied: Joi.boolean(),
      total: Joi.number(),
    });
  }
  static OfferItem() {
    return Joi.object({
      auto_applied: Joi.boolean(),
      best: Joi.boolean(),
      margin: Joi.number(),
      price: PosCartModel.OfferPrice(),
      quantity: Joi.number(),
      total: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static OfferPrice() {
    return Joi.object({
      bulk_effective: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
    });
  }
  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow(""),
      payable_category: Joi.string().allow(""),
    });
  }
  static PageCoupon() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      total: Joi.number(),
      total_item_count: Joi.number(),
    });
  }
  static PaymentCouponValidate() {
    return Joi.object({
      coupon_validity: PosCartModel.CouponValidity(),
      message: Joi.string().allow(""),
      success: Joi.boolean().required(),
    });
  }
  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),
      enabled: Joi.boolean(),
      payment_identifier: Joi.string().allow(""),
    });
  }
  static PickupStoreDetail() {
    return Joi.object({
      address: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      area_code: Joi.string().allow(""),
      area_code_slug: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      email: Joi.string().allow(""),
      id: Joi.number(),
      landmark: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static ProductAction() {
    return Joi.object({
      query: PosCartModel.ActionQuery(),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static ProductArticle() {
    return Joi.object({
      _custom_json: Joi.any(),
      extra_meta: Joi.any(),
      identifier: Joi.any(),
      parent_item_identifiers: Joi.any(),
      price: PosCartModel.ArticlePriceInfo(),
      product_group_tags: Joi.array().items(Joi.string().allow("")),
      quantity: Joi.number(),
      seller: PosCartModel.BaseInfo(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      store: PosCartModel.BaseInfo(),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }
  static ProductAvailability() {
    return Joi.object({
      available_sizes: Joi.array().items(
        PosCartModel.ProductAvailabilitySize()
      ),
      deliverable: Joi.boolean(),
      is_valid: Joi.boolean(),
      other_store_quantity: Joi.number(),
      out_of_stock: Joi.boolean(),
      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ProductAvailabilitySize() {
    return Joi.object({
      display: Joi.string().allow(""),
      is_available: Joi.boolean(),
      value: Joi.string().allow(""),
    });
  }
  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
      selling: Joi.number(),
    });
  }
  static ProductPriceInfo() {
    return Joi.object({
      base: PosCartModel.ProductPrice(),
      converted: PosCartModel.ProductPrice(),
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
  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),
      convenience_fee: Joi.number(),
      coupon: Joi.number(),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_cash: Joi.number(),
      gst_charges: Joi.number(),
      mrp_total: Joi.number(),
      subtotal: Joi.number(),
      total: Joi.number(),
      vog: Joi.number(),
      you_saved: Joi.number(),
    });
  }
  static RewardPointRequest() {
    return Joi.object({
      points: Joi.boolean().required(),
    });
  }
  static SaveAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_default_address: Joi.boolean(),
      success: Joi.boolean(),
    });
  }
  static SelectCartAddressRequest() {
    return Joi.object({
      billing_address_id: Joi.string().allow(""),
      cart_id: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }
  static SharedCart() {
    return Joi.object({
      breakup_values: PosCartModel.CartBreakup(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: PosCartModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: PosCartModel.ShipmentPromise(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(PosCartModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      payment_selection_lock: PosCartModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      shared_cart_details: PosCartModel.SharedCartDetails(),
      uid: Joi.string().allow(""),
    });
  }
  static SharedCartDetails() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      meta: Joi.any(),
      source: Joi.any(),
      token: Joi.string().allow(""),
      user: Joi.any(),
    });
  }
  static SharedCartResponse() {
    return Joi.object({
      cart: PosCartModel.SharedCart(),
      error: Joi.string().allow(""),
    });
  }
  static ShipmentPromise() {
    return Joi.object({
      formatted: PosCartModel.PromiseFormatted(),
      timestamp: PosCartModel.PromiseTimestamp(),
    });
  }
  static ShipmentResponse() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),
      dp_id: Joi.string().allow("").allow(null),
      dp_options: Joi.any().allow(null),
      fulfillment_id: Joi.number(),
      fulfillment_type: Joi.string().allow(""),
      items: Joi.array().items(PosCartModel.CartProductInfo()),
      order_type: Joi.string().allow(""),
      promise: PosCartModel.ShipmentPromise(),
      shipment_type: Joi.string().allow(""),
      shipments: Joi.number(),
    });
  }
  static StaffCheckout() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      employee_code: Joi.string().allow(""),
      first_name: Joi.string().allow("").required(),
      last_name: Joi.string().allow("").required(),
      user: Joi.string().allow("").required(),
    });
  }
  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.PickupStoreDetail()),
    });
  }
  static UpdateAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_default_address: Joi.boolean(),
      is_updated: Joi.boolean(),
      success: Joi.boolean(),
    });
  }
  static UpdateCartDetailResponse() {
    return Joi.object({
      cart: PosCartModel.CartDetailResponse(),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static UpdateCartPaymentRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      aggregator_name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_mode: Joi.string().allow(""),
    });
  }
  static UpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.UpdateProductCart()),
      operation: Joi.string().allow("").required(),
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
  static UpdateProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),
      article_id: Joi.string().allow(""),
      extra_meta: Joi.any(),
      identifiers: PosCartModel.CartProductIdentifer().required(),
      item_id: Joi.number(),
      item_index: Joi.number(),
      item_size: Joi.string().allow(""),
      parent_item_identifiers: Joi.any(),
      quantity: Joi.number(),
    });
  }
}
module.exports = PosCartModel;
