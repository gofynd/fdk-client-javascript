const Joi = require("joi");

class CartModel {
  static AbandonedCart() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      app_id: Joi.string().allow(""),
      articles: Joi.array().items(Joi.any()).required(),
      bulk_coupon_discount: Joi.number().allow(null),
      buy_now: Joi.boolean(),
      cart_value: Joi.number(),
      cashback: Joi.any().required(),
      checkout_mode: Joi.string().allow(""),
      cod_charges: Joi.any(),
      comment: Joi.string().allow("").allow(null),
      coupon: Joi.any().allow(null),
      created_on: Joi.string().allow("").required(),
      delivery_charges: Joi.any(),
      discount: Joi.number(),
      expire_at: Joi.string().allow("").required(),
      fc_index_map: Joi.array().items(Joi.number()),
      fynd_credits: Joi.any(),
      gstin: Joi.string().allow("").allow(null),
      is_active: Joi.boolean(),
      is_archive: Joi.boolean(),
      is_default: Joi.boolean().required(),
      last_modified: Joi.string().allow("").required(),
      merge_qty: Joi.boolean().allow(null),
      meta: Joi.any().allow(null),
      order_id: Joi.string().allow(""),
      payment_methods: Joi.array().items(Joi.any()),
      payment_mode: Joi.string().allow("").allow(null),
      payments: Joi.any().allow(null),
      pick_up_customer_details: Joi.any().allow(null),
      promotion: Joi.any(),
      shipments: Joi.array().items(Joi.any()),
      uid: Joi.number().required(),
      user_id: Joi.string().allow("").required(),
    });
  }
  static AbandonedCartResponseSchema() {
    return Joi.object({
      items: Joi.array().items(CartModel.AbandonedCart()),
      message: Joi.string().allow(""),
      page: CartModel.Page(),
      result: Joi.any(),
      success: Joi.boolean(),
    });
  }
  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ActivePromosResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      entity_slug: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      example: Joi.string().allow(""),
      is_hidden: Joi.boolean(),
      modified_on: Joi.string().allow(""),
      subtitle: Joi.string().allow(""),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static AddCartDetailResponse() {
    return Joi.object({
      cart: CartModel.CartDetailResponse(),
      message: Joi.string().allow(""),
      partial: Joi.boolean(),
      success: Joi.boolean(),
    });
  }
  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),
      new_cart: Joi.boolean(),
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
  static AppliedFreeArticlesSchema() {
    return Joi.object({
      article_id: Joi.string().allow(""),
      free_gift_item_details: CartModel.FreeGiftItemSchema(),
      parent_item_identifier: Joi.string().allow(""),
      quantity: Joi.number(),
    });
  }
  static AppliedPromotion() {
    return Joi.object({
      amount: Joi.number(),
      applied_free_articles: Joi.array().items(
        CartModel.AppliedFreeArticlesSchema()
      ),
      article_quantity: Joi.number(),
      buy_rules: Joi.array().items(CartModel.BuyRulesSchema()),
      discount_rules: Joi.array().items(CartModel.DiscountRulesAppSchema()),
      mrp_promotion: Joi.boolean(),
      offer_text: Joi.string().allow(""),
      ownership: CartModel.Ownership(),
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
      base: CartModel.BasePriceSchema(),
      converted: CartModel.BasePriceSchema(),
    });
  }
  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static BasePriceSchema() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
    });
  }
  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }
  static BuyRulesSchema() {
    return Joi.object({
      cart_conditions: Joi.any(),
      item_criteria: Joi.any(),
    });
  }
  static CartBreakupSchema() {
    return Joi.object({
      coupon: CartModel.CouponBreakupSchema(),
      display: Joi.array().items(CartModel.DisplayBreakupSchema()),
      loyalty_points: CartModel.LoyaltyPoints(),
      raw: CartModel.RawBreakupSchema(),
    });
  }
  static CartCheckoutResponseSchema() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),
      callback_url: Joi.string().allow(""),
      cart: CartModel.CheckCartSchema(),
      data: Joi.any(),
      message: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      payment_confirm_url: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static CartCurrencySchema() {
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
      applied_promo_details: Joi.array().items(CartModel.AppliedPromotion()),
      breakup_values: CartModel.CartBreakupSchema(),
      buy_now: Joi.boolean(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartModel.CartCurrencySchema(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: CartModel.ShipmentPromise(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      pan_config: Joi.any(),
      pan_no: Joi.string().allow(""),
      payment_selection_lock: CartModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
    });
  }
  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }
  static CartItemMeta() {
    return Joi.object({
      group_id: Joi.string().allow(""),
      primary_item: Joi.boolean(),
    });
  }
  static CartItemSchema() {
    return Joi.object({
      product_id: Joi.string().allow("").required(),
      quantity: Joi.number(),
      size: Joi.string().allow("").required(),
    });
  }
  static CartListSchema() {
    return Joi.object({
      cart_id: Joi.string().allow(""),
      cart_value: Joi.number(),
      created_on: Joi.string().allow(""),
      item_counts: Joi.number(),
      pick_up_customer_details: Joi.any(),
      user_id: Joi.string().allow(""),
    });
  }
  static CartMetaMissingResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),
    });
  }
  static CartMetaResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static CartProduct() {
    return Joi.object({
      action: CartModel.ProductAction(),
      brand: CartModel.BaseInfo(),
      categories: Joi.array().items(CartModel.CategoryInfo()),
      images: Joi.array().items(CartModel.ProductImage()),
      item_code: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
      net_quantity: CartModel.NetQuantity(),
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
      article: CartModel.ProductArticle(),
      availability: CartModel.ProductAvailability(),
      bulk_offer: Joi.any(),
      coupon_message: Joi.string().allow(""),
      custom_order: Joi.any(),
      delivery_promise: CartModel.ShipmentPromise(),
      discount: Joi.string().allow(""),
      identifiers: CartModel.CartProductIdentifer().required(),
      is_set: Joi.boolean(),
      key: Joi.string().allow(""),
      message: Joi.string().allow(""),
      moq: Joi.any(),
      parent_item_identifiers: Joi.any(),
      price: CartModel.ProductPriceInfo(),
      price_per_unit: CartModel.ProductPriceInfo(),
      product: CartModel.CartProduct(),
      promo_meta: CartModel.PromoMeta(),
      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),
      quantity: Joi.number(),
    });
  }
  static CartShipmentsResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakupSchema(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartModel.CartCurrencySchema(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: CartModel.ShipmentPromise(),
      error: Joi.boolean(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      payment_selection_lock: CartModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      shipments: Joi.array().items(CartModel.ShipmentResponse()),
      uid: Joi.string().allow(""),
    });
  }
  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static CheckCartSchema() {
    return Joi.object({
      breakup_values: CartModel.CartBreakupSchema(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      cod_available: Joi.boolean(),
      cod_charges: Joi.number(),
      cod_message: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartModel.CartCurrencySchema(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_charge_order_value: Joi.number(),
      delivery_charges: Joi.number(),
      delivery_promise: CartModel.ShipmentPromise(),
      error_message: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      payment_selection_lock: CartModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      store_code: Joi.string().allow(""),
      store_emps: Joi.array().items(Joi.any()),
      success: Joi.boolean(),
      uid: Joi.string().allow(""),
      user_type: Joi.string().allow(""),
    });
  }
  static CompareObjectSchema() {
    return Joi.object({
      equals: Joi.number(),
      greater_than: Joi.number(),
      greater_than_equals: Joi.number(),
      less_than: Joi.number(),
      less_than_equals: Joi.number(),
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
  static CouponActionSchema() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),
      txn_mode: Joi.string().allow(""),
    });
  }
  static CouponAddSchema() {
    return Joi.object({
      _schedule: CartModel.CouponScheduleSchema(),
      action: CartModel.CouponActionSchema(),
      author: CartModel.CouponAuthorSchema(),
      code: Joi.string().allow("").required(),
      date_meta: CartModel.CouponDateMetaSchema(),
      display_meta: CartModel.DisplayMetaSchema().required(),
      identifiers: CartModel.IdentifierSchema().required(),
      ownership: CartModel.OwnershipSchema().required(),
      restrictions: CartModel.RestrictionsSchema(),
      rule: Joi.array().items(CartModel.RuleSchema()).required(),
      rule_definition: CartModel.RuleDefinitionSchema().required(),
      state: CartModel.StateSchema(),
      tags: Joi.array().items(Joi.string().allow("")),
      type_slug: Joi.string().allow("").required(),
      validation: CartModel.ValidationSchema(),
      validity: CartModel.ValiditySchema().required(),
    });
  }
  static CouponAuthorSchema() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),
      modified_by: Joi.string().allow("").allow(null),
    });
  }
  static CouponBreakupSchema() {
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
  static CouponDateMetaSchema() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),
      modified_on: Joi.string().allow("").allow(null),
    });
  }
  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),
      schedule: CartModel.CouponScheduleSchema(),
    });
  }
  static CouponScheduleSchema() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),
      duration: Joi.number().allow(null),
      end: Joi.string().allow("").allow(null),
      next_schedule: Joi.array().items(Joi.any()),
      start: Joi.string().allow(""),
    });
  }
  static CouponsResponse() {
    return Joi.object({
      items: CartModel.CouponAddSchema(),
      page: CartModel.Page(),
    });
  }
  static CouponUpdateSchema() {
    return Joi.object({
      _schedule: CartModel.CouponScheduleSchema(),
      action: CartModel.CouponActionSchema(),
      author: CartModel.CouponAuthorSchema(),
      code: Joi.string().allow("").required(),
      date_meta: CartModel.CouponDateMetaSchema(),
      display_meta: CartModel.DisplayMetaSchema().required(),
      identifiers: CartModel.IdentifierSchema().required(),
      ownership: CartModel.OwnershipSchema().required(),
      restrictions: CartModel.RestrictionsSchema(),
      rule: Joi.array().items(CartModel.RuleSchema()).required(),
      rule_definition: CartModel.RuleDefinitionSchema().required(),
      state: CartModel.StateSchema(),
      tags: Joi.array().items(Joi.string().allow("")),
      type_slug: Joi.string().allow("").required(),
      validation: CartModel.ValidationSchema(),
      validity: CartModel.ValiditySchema().required(),
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
  static DeleteCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static DeleteCartRequest() {
    return Joi.object({
      cart_id_list: Joi.array().items(Joi.string().allow("")),
    });
  }
  static DiscountOfferSchema() {
    return Joi.object({
      apportion_discount: Joi.boolean(),
      code: Joi.string().allow(""),
      discount_amount: Joi.number(),
      discount_percentage: Joi.number(),
      discount_price: Joi.number(),
      max_discount_amount: Joi.number(),
      max_offer_quantity: Joi.number(),
      max_usage_per_transaction: Joi.number(),
      min_offer_quantity: Joi.number(),
      partial_can_ret: Joi.boolean(),
    });
  }
  static DiscountRulesAppSchema() {
    return Joi.object({
      item_criteria: Joi.any(),
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
      offer: Joi.any(),
      raw_offer: Joi.any(),
    });
  }
  static DiscountRuleSchema() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),
      discount_type: Joi.string().allow("").required(),
      item_criteria: CartModel.ItemCriteriaSchema().required(),
      offer: CartModel.DiscountOfferSchema().required(),
    });
  }
  static DisplayBreakupSchema() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      display: Joi.string().allow(""),
      key: Joi.string().allow(""),
      message: Joi.array().items(Joi.string().allow("")),
      value: Joi.number(),
    });
  }
  static DisplayMetaDictSchema() {
    return Joi.object({
      subtitle: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static DisplayMetaSchema() {
    return Joi.object({
      apply: CartModel.DisplayMetaDictSchema(),
      auto: CartModel.DisplayMetaDictSchema(),
      description: Joi.string().allow(""),
      remove: CartModel.DisplayMetaDictSchema(),
      subtitle: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static DisplayMetaSchema1() {
    return Joi.object({
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      offer_label: Joi.string().allow(""),
      offer_text: Joi.string().allow(""),
    });
  }
  static FilesSchema() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static FreeGiftItemSchema() {
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
  static GetCouponResponse() {
    return Joi.object({
      available_coupon_list: Joi.array().items(CartModel.Coupon()),
      page: CartModel.PageCouponSchema(),
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
  static IdentifierSchema() {
    return Joi.object({
      article_id: Joi.array().items(Joi.string().allow("")),
      brand_id: Joi.array().items(Joi.number()),
      category_id: Joi.array().items(Joi.number()),
      collection_id: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.array().items(Joi.number()),
      exclude_brand_id: Joi.array().items(Joi.number()),
      item_id: Joi.array().items(Joi.number()),
      store_id: Joi.array().items(Joi.number()),
      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ItemCriteriaSchema() {
    return Joi.object({
      all_items: Joi.boolean(),
      available_zones: Joi.array().items(Joi.string().allow("")),
      buy_rules: Joi.array().items(Joi.string().allow("")),
      cart_quantity: CartModel.CompareObjectSchema(),
      cart_total: CartModel.CompareObjectSchema(),
      cart_unique_item_amount: CartModel.CompareObjectSchema(),
      cart_unique_item_quantity: CartModel.CompareObjectSchema(),
      item_brand: Joi.array().items(Joi.number()),
      item_category: Joi.array().items(Joi.number()),
      item_company: Joi.array().items(Joi.number()),
      item_exclude_brand: Joi.array().items(Joi.number()),
      item_exclude_category: Joi.array().items(Joi.number()),
      item_exclude_company: Joi.array().items(Joi.number()),
      item_exclude_id: Joi.array().items(Joi.number()),
      item_exclude_sku: Joi.array().items(Joi.string().allow("")),
      item_exclude_store: Joi.array().items(Joi.number()),
      item_id: Joi.array().items(Joi.number()),
      item_size: Joi.array().items(Joi.string().allow("")),
      item_sku: Joi.array().items(Joi.string().allow("")),
      item_store: Joi.array().items(Joi.number()),
      product_tags: Joi.array().items(Joi.string().allow("")),
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
  static MultiCartResponseSchema() {
    return Joi.object({
      data: Joi.array().items(CartModel.CartListSchema()),
      success: Joi.boolean(),
    });
  }
  static MultiTenderPaymentMeta() {
    return Joi.object({
      current_status: Joi.string().allow("").allow(null),
      extra_meta: Joi.any().allow(null),
      order_id: Joi.string().allow("").allow(null),
      payment_gateway: Joi.string().allow("").allow(null),
      payment_id: Joi.string().allow("").allow(null),
    });
  }
  static MultiTenderPaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),
      meta: CartModel.MultiTenderPaymentMeta(),
      mode: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
    });
  }
  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: Joi.array().items(CartModel.CartItemSchema()).required(),
    });
  }
  static OpenapiCartDetailsResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakupSchema(),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartModel.CartProductInfo()),
      message: Joi.string().allow(""),
    });
  }
  static OpenApiCartServiceabilityRequest() {
    return Joi.object({
      cart_items: Joi.array().items(CartModel.CartItemSchema()).required(),
      shipping_address: CartModel.ShippingAddressSchema().required(),
    });
  }
  static OpenApiCartServiceabilityResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakupSchema(),
      delivery_promise: CartModel.ShipmentPromise(),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartModel.CartProductInfo()),
      message: Joi.string().allow(""),
    });
  }
  static OpenApiCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      order_id: Joi.string().allow("").required(),
      order_ref_id: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static OpenApiErrorResponse() {
    return Joi.object({
      errors: Joi.any(),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static OpenApiFilesSchema() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static OpenApiOrderItemSchema() {
    return Joi.object({
      amount_paid: Joi.number().required(),
      cashback_applied: Joi.number().required(),
      cod_charges: Joi.number().required(),
      coupon_effective_discount: Joi.number().required(),
      delivery_charges: Joi.number().required(),
      discount: Joi.number().required(),
      employee_discount: Joi.number(),
      extra_meta: Joi.any(),
      files: Joi.array().items(CartModel.OpenApiFilesSchema()),
      loyalty_discount: Joi.number(),
      meta: CartModel.CartItemMeta(),
      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),
      price_effective: Joi.number().required(),
      price_marked: Joi.number().required(),
      product_id: Joi.number().required(),
      quantity: Joi.number(),
      size: Joi.string().allow("").required(),
    });
  }
  static OpenApiPlatformCheckoutReqSchema() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),
      billing_address: CartModel.ShippingAddressSchema().required(),
      cart_items: Joi.array()
        .items(CartModel.OpenApiOrderItemSchema())
        .required(),
      cart_value: Joi.number().required(),
      cashback_applied: Joi.number().required(),
      cod_charges: Joi.number().required(),
      comment: Joi.string().allow("").allow(null),
      coupon: Joi.string().allow(""),
      coupon_code: Joi.string().allow("").required(),
      coupon_value: Joi.number().required(),
      currency_code: Joi.string().allow(""),
      delivery_charges: Joi.number().required(),
      employee_discount: Joi.any(),
      files: Joi.array().items(CartModel.OpenApiFilesSchema()),
      gstin: Joi.string().allow("").allow(null),
      loyalty_discount: Joi.number(),
      order_id: Joi.string().allow(""),
      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),
      payment_mode: Joi.string().allow(""),
      shipping_address: CartModel.ShippingAddressSchema(),
    });
  }
  static OperationErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow(""),
      payable_category: Joi.string().allow(""),
    });
  }
  static OwnershipSchema() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),
      payable_category: Joi.string().allow("").required(),
    });
  }
  static OwnershipSchema1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),
      payable_category: Joi.string().allow("").required(),
    });
  }
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }
  static PageCouponSchema() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      total: Joi.number(),
      total_item_count: Joi.number(),
    });
  }
  static PaymentAllowValueSchema() {
    return Joi.object({
      max: Joi.number(),
    });
  }
  static PaymentAllowValueSchema1() {
    return Joi.object({
      max: Joi.number(),
    });
  }
  static PaymentCouponValidateSchema() {
    return Joi.object({
      coupon_validity: CartModel.CouponValidity(),
      message: Joi.string().allow(""),
      success: Joi.boolean().required(),
    });
  }
  static PaymentMetaSchema() {
    return Joi.object({
      merchant_code: Joi.string().allow(""),
      payment_gateway: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      type: Joi.string().allow(""),
    });
  }
  static PaymentMethodSchema() {
    return Joi.object({
      amount: Joi.number().allow(null),
      mode: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
      payment: Joi.string().allow(""),
      payment_meta: CartModel.PaymentMetaSchema().required(),
    });
  }
  static PaymentModesSchema() {
    return Joi.object({
      codes: Joi.array().items(Joi.string().allow("")),
      networks: Joi.array().items(Joi.string().allow("")),
      types: Joi.array().items(Joi.string().allow("")),
      uses: CartModel.PaymentAllowValueSchema(),
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
  static PlatformAddress() {
    return Joi.object({
      address: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      area_code: Joi.string().allow(""),
      area_code_slug: Joi.string().allow(""),
      cart_id: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      created_by_user_id: Joi.string().allow(""),
      email: Joi.string().allow(""),
      geo_location: CartModel.GeoLocation(),
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
  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      billing_address: Joi.any(),
      billing_address_id: Joi.string().allow(""),
      callback_url: Joi.string().allow("").allow(null),
      checkout_mode: Joi.string().allow(""),
      delivery_address: Joi.any(),
      device_id: Joi.string().allow("").allow(null),
      employee_code: Joi.string().allow("").allow(null),
      extra_meta: Joi.any(),
      files: Joi.array().items(CartModel.FilesSchema()),
      id: Joi.string().allow("").required(),
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
      staff: CartModel.StaffCheckoutSchema(),
      user_id: Joi.string().allow("").required(),
    });
  }
  static PlatformCartCheckoutDetailV2Request() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      billing_address: Joi.any(),
      billing_address_id: Joi.string().allow(""),
      callback_url: Joi.string().allow("").allow(null),
      checkout_mode: Joi.string().allow(""),
      custom_meta: Joi.any(),
      delivery_address: Joi.any(),
      device_id: Joi.string().allow("").allow(null),
      employee_code: Joi.string().allow("").allow(null),
      extra_meta: Joi.any(),
      files: Joi.array().items(CartModel.FilesSchema()),
      id: Joi.string().allow("").required(),
      merchant_code: Joi.string().allow(""),
      meta: Joi.any(),
      order_type: Joi.string().allow("").required(),
      ordering_store: Joi.number().allow(null),
      payment_auto_confirm: Joi.boolean(),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_methods: Joi.array()
        .items(CartModel.PaymentMethodSchema())
        .required(),
      payment_mode: Joi.string().allow(""),
      payment_params: Joi.any().allow(null),
      pick_at_store_uid: Joi.number().allow(null),
      pos: Joi.boolean(),
      staff: CartModel.StaffCheckoutSchema(),
      user_id: Joi.string().allow("").required(),
    });
  }
  static PlatformCartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      pan_no: Joi.string().allow(""),
      pick_up_customer_details: Joi.any(),
    });
  }
  static PlatformGetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(CartModel.PlatformAddress()),
    });
  }
  static PlatformSelectCartAddressRequest() {
    return Joi.object({
      billing_address_id: Joi.string().allow(""),
      cart_id: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }
  static PostOrderSchema() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),
      return_allowed: Joi.boolean(),
    });
  }
  static PostOrderSchema1() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),
      return_allowed: Joi.boolean(),
    });
  }
  static PriceRangeSchema() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }
  static ProductAction() {
    return Joi.object({
      query: CartModel.ActionQuery(),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static ProductArticle() {
    return Joi.object({
      _custom_json: Joi.any(),
      extra_meta: Joi.any(),
      parent_item_identifiers: Joi.any(),
      price: CartModel.ArticlePriceInfo(),
      product_group_tags: Joi.array().items(Joi.string().allow("")),
      quantity: Joi.number(),
      seller: CartModel.BaseInfo(),
      size: Joi.string().allow(""),
      store: CartModel.BaseInfo(),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }
  static ProductAvailability() {
    return Joi.object({
      available_sizes: Joi.array().items(CartModel.ProductAvailabilitySize()),
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
      base: CartModel.ProductPrice(),
      converted: CartModel.ProductPrice(),
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
  static PromotionActionSchema() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),
      action_type: Joi.string().allow("").required(),
    });
  }
  static PromotionAddSchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: CartModel.PromotionScheduleSchema(),
      application_id: Joi.string().allow("").required(),
      apply_all_discount: Joi.boolean(),
      apply_exclusive: Joi.string().allow("").allow(null),
      apply_priority: Joi.number(),
      author: CartModel.PromotionAuthorSchema(),
      buy_rules: Joi.object()
        .pattern(/\S/, CartModel.ItemCriteriaSchema())
        .required(),
      calculate_on: Joi.string().allow(""),
      code: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      date_meta: CartModel.PromotionDateMetaSchema(),
      discount_rules: Joi.array()
        .items(CartModel.DiscountRuleSchema())
        .required(),
      display_meta: CartModel.DisplayMetaSchema1().required(),
      mode: Joi.string().allow("").required(),
      ownership: CartModel.OwnershipSchema1().required(),
      post_order_action: CartModel.PromotionActionSchema(),
      promo_group: Joi.string().allow("").required(),
      promotion_type: Joi.string().allow("").required(),
      restrictions: CartModel.RestrictionsSchema1(),
      stackable: Joi.boolean(),
      visiblility: CartModel.VisibilitySchema(),
    });
  }
  static PromotionAuthorSchema() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),
      modified_by: Joi.string().allow("").allow(null),
    });
  }
  static PromotionDateMetaSchema() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),
      modified_on: Joi.string().allow("").allow(null),
    });
  }
  static PromotionListItem() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: CartModel.PromotionScheduleSchema(),
      application_id: Joi.string().allow("").required(),
      apply_all_discount: Joi.boolean(),
      apply_exclusive: Joi.string().allow("").allow(null),
      apply_priority: Joi.number(),
      author: CartModel.PromotionAuthorSchema(),
      buy_rules: Joi.object()
        .pattern(/\S/, CartModel.ItemCriteriaSchema())
        .required(),
      calculate_on: Joi.string().allow(""),
      code: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      date_meta: CartModel.PromotionDateMetaSchema(),
      discount_rules: Joi.array()
        .items(CartModel.DiscountRuleSchema())
        .required(),
      display_meta: CartModel.DisplayMetaSchema1().required(),
      mode: Joi.string().allow("").required(),
      ownership: CartModel.OwnershipSchema1().required(),
      post_order_action: CartModel.PromotionActionSchema(),
      promo_group: Joi.string().allow("").required(),
      promotion_type: Joi.string().allow("").required(),
      restrictions: CartModel.RestrictionsSchema1(),
      stackable: Joi.boolean(),
      visiblility: CartModel.VisibilitySchema(),
    });
  }
  static PromotionPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),
      schedule: CartModel.PromotionScheduleSchema(),
    });
  }
  static PromotionPaymentModesSchema() {
    return Joi.object({
      codes: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow("").required(),
      uses: CartModel.PaymentAllowValueSchema1(),
    });
  }
  static PromotionScheduleSchema() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),
      duration: Joi.number().allow(null),
      end: Joi.string().allow("").allow(null),
      next_schedule: Joi.array().items(Joi.any()),
      published: Joi.boolean().required(),
      start: Joi.string().allow("").required(),
    });
  }
  static PromotionsResponse() {
    return Joi.object({
      items: CartModel.PromotionListItem(),
      page: CartModel.Page(),
    });
  }
  static PromotionUpdateSchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: CartModel.PromotionScheduleSchema(),
      application_id: Joi.string().allow("").required(),
      apply_all_discount: Joi.boolean(),
      apply_exclusive: Joi.string().allow("").allow(null),
      apply_priority: Joi.number(),
      author: CartModel.PromotionAuthorSchema(),
      buy_rules: Joi.object()
        .pattern(/\S/, CartModel.ItemCriteriaSchema())
        .required(),
      calculate_on: Joi.string().allow(""),
      code: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      date_meta: CartModel.PromotionDateMetaSchema(),
      discount_rules: Joi.array()
        .items(CartModel.DiscountRuleSchema())
        .required(),
      display_meta: CartModel.DisplayMetaSchema1().required(),
      mode: Joi.string().allow("").required(),
      ownership: CartModel.OwnershipSchema1().required(),
      post_order_action: CartModel.PromotionActionSchema(),
      promo_group: Joi.string().allow("").required(),
      promotion_type: Joi.string().allow("").required(),
      restrictions: CartModel.RestrictionsSchema1(),
      stackable: Joi.boolean(),
      visiblility: CartModel.VisibilitySchema(),
    });
  }
  static RawBreakupSchema() {
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
  static RestrictionsSchema() {
    return Joi.object({
      bulk_bundle: CartModel.BulkBundleRestriction(),
      coupon_allowed: Joi.boolean(),
      ordering_stores: Joi.array().items(Joi.number()),
      payments: Joi.object().pattern(/\S/, CartModel.PaymentModesSchema()),
      platforms: Joi.array().items(Joi.string().allow("")),
      post_order: CartModel.PostOrderSchema(),
      price_range: CartModel.PriceRangeSchema(),
      user_groups: Joi.array().items(Joi.number()),
      user_type: Joi.string().allow(""),
      uses: CartModel.UsesRestrictionSchema(),
    });
  }
  static RestrictionsSchema1() {
    return Joi.object({
      anonymous_users: Joi.boolean(),
      order_quantity: Joi.number(),
      payments: Joi.array().items(CartModel.PromotionPaymentModesSchema()),
      platforms: Joi.array().items(Joi.string().allow("")),
      post_order: CartModel.PostOrderSchema1(),
      user_groups: Joi.array().items(Joi.number()),
      user_id: Joi.array().items(Joi.string().allow("")),
      user_registered: CartModel.UserRegisteredSchema(),
      uses: CartModel.UsesRestrictionSchema1().required(),
    });
  }
  static RuleDefinitionSchema() {
    return Joi.object({
      applicable_on: Joi.string().allow("").required(),
      auto_apply: Joi.boolean(),
      calculate_on: Joi.string().allow("").required(),
      currency_code: Joi.string().allow(""),
      is_exact: Joi.boolean(),
      scope: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow("").required(),
      value_type: Joi.string().allow("").required(),
    });
  }
  static RuleSchema() {
    return Joi.object({
      discount_qty: Joi.number(),
      key: Joi.number(),
      max: Joi.number(),
      min: Joi.number(),
      value: Joi.number(),
    });
  }
  static SaveAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_default_address: Joi.boolean(),
      success: Joi.boolean(),
    });
  }
  static SharedCart() {
    return Joi.object({
      breakup_values: CartModel.CartBreakupSchema(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartModel.CartCurrencySchema(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: CartModel.ShipmentPromise(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      payment_selection_lock: CartModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      shared_cart_details: CartModel.SharedCartDetails(),
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
      cart: CartModel.SharedCart(),
      error: Joi.string().allow(""),
    });
  }
  static ShipmentPromise() {
    return Joi.object({
      formatted: CartModel.PromiseFormatted(),
      timestamp: CartModel.PromiseTimestamp(),
    });
  }
  static ShipmentResponse() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),
      dp_id: Joi.string().allow("").allow(null),
      dp_options: Joi.any().allow(null),
      fulfillment_id: Joi.number(),
      fulfillment_type: Joi.string().allow(""),
      items: Joi.array().items(CartModel.CartProductInfo()),
      order_type: Joi.string().allow(""),
      promise: CartModel.ShipmentPromise(),
      shipment_type: Joi.string().allow(""),
      shipments: Joi.number(),
    });
  }
  static ShippingAddressSchema() {
    return Joi.object({
      address: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      area_code: Joi.string().allow("").required(),
      area_code_slug: Joi.string().allow(""),
      city: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").allow(null),
      country_code: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      phone: Joi.number(),
      pincode: Joi.number(),
      state: Joi.string().allow("").allow(null),
    });
  }
  static StaffCheckoutSchema() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      employee_code: Joi.string().allow(""),
      first_name: Joi.string().allow("").required(),
      last_name: Joi.string().allow("").required(),
      user: Joi.string().allow("").required(),
    });
  }
  static StateSchema() {
    return Joi.object({
      is_archived: Joi.boolean(),
      is_display: Joi.boolean(),
      is_public: Joi.boolean(),
    });
  }
  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.PickupStoreDetail()),
    });
  }
  static SuccessMessage() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
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
      cart: CartModel.CartDetailResponse(),
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
  static UpdateCartPaymentRequestV2() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      aggregator_name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_methods: Joi.array().items(CartModel.PaymentMethodSchema()),
      payment_mode: Joi.string().allow(""),
    });
  }
  static UpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.UpdateProductCart()),
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
        .items(CartModel.UpdateCartShipmentItem())
        .required(),
    });
  }
  static UpdateProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),
      article_id: Joi.string().allow(""),
      extra_meta: Joi.any(),
      identifiers: CartModel.CartProductIdentifer().required(),
      item_id: Joi.number(),
      item_index: Joi.number(),
      item_size: Joi.string().allow(""),
      parent_item_identifiers: Joi.any(),
      quantity: Joi.number(),
    });
  }
  static UpdateUserCartMapping() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),
    });
  }
  static UserCartMappingResponse() {
    return Joi.object({
      applied_promo_details: Joi.array().items(CartModel.AppliedPromotion()),
      breakup_values: CartModel.CartBreakupSchema(),
      buy_now: Joi.boolean(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartModel.CartCurrencySchema(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: CartModel.ShipmentPromise(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      pan_config: Joi.any(),
      pan_no: Joi.string().allow(""),
      payment_selection_lock: CartModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      user: CartModel.UserInfoSchema(),
    });
  }
  static UserInfoSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      external_id: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }
  static UserRegisteredSchema() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),
      start: Joi.string().allow("").allow(null),
    });
  }
  static UsesRemainingSchema() {
    return Joi.object({
      app: Joi.number(),
      total: Joi.number(),
      user: Joi.number(),
    });
  }
  static UsesRemainingSchema1() {
    return Joi.object({
      total: Joi.number(),
      user: Joi.number(),
    });
  }
  static UsesRestrictionSchema() {
    return Joi.object({
      maximum: CartModel.UsesRemainingSchema(),
      remaining: CartModel.UsesRemainingSchema(),
    });
  }
  static UsesRestrictionSchema1() {
    return Joi.object({
      maximum: CartModel.UsesRemainingSchema1(),
      remaining: CartModel.UsesRemainingSchema1(),
    });
  }
  static ValidationSchema() {
    return Joi.object({
      anonymous: Joi.boolean(),
      app_id: Joi.array().items(Joi.string().allow("")),
      user_registered_after: Joi.string().allow("").allow(null),
    });
  }
  static ValiditySchema() {
    return Joi.object({
      priority: Joi.number(),
    });
  }
  static VisibilitySchema() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),
      pdp: Joi.boolean().required(),
    });
  }
}
module.exports = CartModel;
