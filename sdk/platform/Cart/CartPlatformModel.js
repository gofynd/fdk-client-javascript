const Joi = require("joi");

class CartModel {
  static Rule() {
    return Joi.object({
      key: Joi.number(),

      min: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),

      discount_qty: Joi.number(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static Identifier() {
    return Joi.object({
      company_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      collection_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),
    });
  }

  static DisplayMetaDict() {
    return Joi.object({
      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      auto: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      applicable_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      scope: Joi.array().items(Joi.string().allow("")),

      value_type: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      calculate_on: Joi.string().allow("").required(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static UsesRemaining() {
    return Joi.object({
      user: Joi.number(),

      total: Joi.number(),

      app: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      maximum: CartModel.UsesRemaining(),

      remaining: CartModel.UsesRemaining(),
    });
  }

  static PriceRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static PostOrder() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      codes: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      types: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Restrictions() {
    return Joi.object({
      uses: CartModel.UsesRestriction(),

      platforms: Joi.array().items(Joi.string().allow("")),

      coupon_allowed: Joi.boolean(),

      price_range: CartModel.PriceRange(),

      ordering_stores: Joi.array().items(Joi.number()),

      post_order: CartModel.PostOrder(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      user_groups: Joi.array().items(Joi.number()),
    });
  }

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      anonymous: Joi.boolean(),

      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static CouponAdd() {
    return Joi.object({
      rule: Joi.array().items(CartModel.Rule()).required(),

      type_slug: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      action: CartModel.CouponAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      code: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),

      display_meta: CartModel.DisplayMeta().required(),

      _schedule: CartModel.CouponSchedule(),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),

      restrictions: CartModel.Restrictions(),

      state: CartModel.State(),

      validation: CartModel.Validation(),

      date_meta: CartModel.CouponDateMeta(),
    });
  }

  static CouponsResponse() {
    return Joi.object({
      items: CartModel.CouponAdd(),

      page: CartModel.Page(),
    });
  }

  static SuccessMessage() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OperationErrorResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static CouponUpdate() {
    return Joi.object({
      rule: Joi.array().items(CartModel.Rule()).required(),

      type_slug: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      action: CartModel.CouponAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      code: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),

      display_meta: CartModel.DisplayMeta().required(),

      _schedule: CartModel.CouponSchedule(),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),

      restrictions: CartModel.Restrictions(),

      state: CartModel.State(),

      validation: CartModel.Validation(),

      date_meta: CartModel.CouponDateMeta(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: CartModel.CouponSchedule(),

      archive: Joi.boolean(),
    });
  }

  static CompareObject() {
    return Joi.object({
      greater_than: Joi.number(),

      equals: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than: Joi.number(),

      less_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      all_items: Joi.boolean(),

      item_brand: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),
    });
  }

  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
    });
  }

  static UsesRemaining1() {
    return Joi.object({
      user: Joi.number(),

      total: Joi.number(),
    });
  }

  static UsesRestriction1() {
    return Joi.object({
      maximum: CartModel.UsesRemaining1(),

      remaining: CartModel.UsesRemaining1(),
    });
  }

  static UserRegistered() {
    return Joi.object({
      start: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),
    });
  }

  static PostOrder1() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static PaymentAllowValue1() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PromotionPaymentModes() {
    return Joi.object({
      codes: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      uses: CartModel.PaymentAllowValue1(),
    });
  }

  static Restrictions1() {
    return Joi.object({
      anonymous_users: Joi.boolean(),

      order_quantity: Joi.number(),

      uses: CartModel.UsesRestriction1().required(),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_registered: CartModel.UserRegistered(),

      post_order: CartModel.PostOrder1(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_groups: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),

      end: Joi.string().allow("").allow(null),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      min_offer_quantity: Joi.number(),

      discount_percentage: Joi.number(),

      max_offer_quantity: Joi.number(),

      code: Joi.string().allow(""),

      discount_amount: Joi.number(),

      discount_price: Joi.number(),

      max_discount_amount: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      item_criteria: CartModel.ItemCriteria().required(),

      offer: CartModel.DiscountOffer().required(),

      buy_condition: Joi.string().allow("").required(),

      discount_type: Joi.string().allow("").required(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      mode: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      author: CartModel.PromotionAuthor(),

      currency: Joi.string().allow(""),

      stackable: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      post_order_action: CartModel.PromotionAction(),

      apply_all_discount: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),
    });
  }

  static PromotionsResponse() {
    return Joi.object({
      items: CartModel.PromotionListItem(),

      page: CartModel.Page(),
    });
  }

  static PromotionAdd() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      mode: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      author: CartModel.PromotionAuthor(),

      currency: Joi.string().allow(""),

      stackable: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      post_order_action: CartModel.PromotionAction(),

      apply_all_discount: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      mode: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      author: CartModel.PromotionAuthor(),

      currency: Joi.string().allow(""),

      stackable: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      post_order_action: CartModel.PromotionAction(),

      apply_all_discount: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),
    });
  }

  static PromotionPartialUpdate() {
    return Joi.object({
      schedule: CartModel.PromotionSchedule(),

      archive: Joi.boolean(),
    });
  }

  static CartItem() {
    return Joi.object({
      product_id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      quantity: Joi.number(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      value: Joi.number(),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      discount: Joi.number(),

      cod_charge: Joi.number(),

      subtotal: Joi.number(),

      delivery_charge: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      mrp_total: Joi.number(),

      fynd_cash: Joi.number(),

      total: Joi.number(),

      you_saved: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      applicable: Joi.number(),

      total: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),

      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      converted: CartModel.BasePrice(),

      base: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      store: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      seller: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      price: CartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      selling: Joi.number(),

      add_on: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      article_quantity: Joi.number(),
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

      query: CartModel.ActionQuery(),
    });
  }

  static CartProduct() {
    return Joi.object({
      images: Joi.array().items(CartModel.ProductImage()),

      brand: CartModel.BaseInfo(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      uid: Joi.number(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      coupon_message: Joi.string().allow(""),

      key: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      discount: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      bulk_offer: Joi.any(),

      article: CartModel.ProductArticle(),

      price_per_unit: CartModel.ProductPriceInfo(),

      identifiers: CartModel.CartProductIdentifer().required(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      quantity: Joi.number(),

      product: CartModel.CartProduct(),

      price: CartModel.ProductPriceInfo(),

      availability: CartModel.ProductAvailability(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),
    });
  }

  static OpenApiErrorResponse() {
    return Joi.object({
      errors: Joi.any(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      area_code_slug: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.number(),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      meta: Joi.any(),

      email: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").allow(null),

      pincode: Joi.number(),

      state: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),
    });
  }

  static OpenApiCartServiceabilityRequest() {
    return Joi.object({
      shipping_address: CartModel.ShippingAddress().required(),

      cart_items: CartModel.CartItem(),
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
      timestamp: CartModel.PromiseTimestamp(),

      formatted: CartModel.PromiseFormatted(),
    });
  }

  static OpenApiCartServiceabilityResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),
    });
  }

  static OpenApiFiles() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static CartItemMeta() {
    return Joi.object({
      group_id: Joi.string().allow(""),

      primary_item: Joi.boolean(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      order_id: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),

      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      meta: CartModel.MultiTenderPaymentMeta(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      coupon_effective_discount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      discount: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      cod_charges: Joi.number().required(),

      loyalty_discount: Joi.number(),

      cashback_applied: Joi.number().required(),

      extra_meta: Joi.any(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      employee_discount: Joi.number(),

      quantity: Joi.number(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      size: Joi.string().allow("").required(),

      delivery_charges: Joi.number().required(),

      product_id: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      coupon_value: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cashback_applied: Joi.number().required(),

      coupon: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      loyalty_discount: Joi.number(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      cart_value: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      shipping_address: CartModel.ShippingAddress(),

      billing_address: CartModel.ShippingAddress().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      employee_discount: Joi.any(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      order_ref_id: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }
}
module.exports = CartModel;
