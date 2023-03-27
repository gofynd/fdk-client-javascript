const Joi = require("joi");

class CartModel {
  static Page() {
    return Joi.object({
      item_total: Joi.number(),

      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().allow("").required(),

      size: Joi.number(),
    });
  }

  static Rule() {
    return Joi.object({
      discount_qty: Joi.number(),

      value: Joi.number(),

      max: Joi.number(),

      min: Joi.number(),

      key: Joi.number(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      scope: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      applicable_on: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      value_type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),
    });
  }

  static PostOrder() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
    });
  }

  static PriceRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
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

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      types: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static Restrictions() {
    return Joi.object({
      post_order: CartModel.PostOrder(),

      ordering_stores: Joi.array().items(Joi.number()),

      price_range: CartModel.PriceRange(),

      platforms: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      coupon_allowed: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
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
      title: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),
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

      exclude_brand_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
    });
  }

  static CouponAdd() {
    return Joi.object({
      rule: Joi.array().items(CartModel.Rule()).required(),

      tags: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").required(),

      validity: CartModel.Validity().required(),

      state: CartModel.State(),

      validation: CartModel.Validation(),

      rule_definition: CartModel.RuleDefinition().required(),

      restrictions: CartModel.Restrictions(),

      author: CartModel.CouponAuthor(),

      display_meta: CartModel.DisplayMeta().required(),

      date_meta: CartModel.CouponDateMeta(),

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      type_slug: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),

      action: CartModel.CouponAction(),
    });
  }

  static CouponsResponse() {
    return Joi.object({
      page: CartModel.Page(),

      items: CartModel.CouponAdd(),
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

      tags: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").required(),

      validity: CartModel.Validity().required(),

      state: CartModel.State(),

      validation: CartModel.Validation(),

      rule_definition: CartModel.RuleDefinition().required(),

      restrictions: CartModel.Restrictions(),

      author: CartModel.CouponAuthor(),

      display_meta: CartModel.DisplayMeta().required(),

      date_meta: CartModel.CouponDateMeta(),

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      type_slug: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),

      action: CartModel.CouponAction(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static CompareObject() {
    return Joi.object({
      equals: Joi.number(),

      greater_than: Joi.number(),

      less_than: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      cart_total: CartModel.CompareObject(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      all_items: Joi.boolean(),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_company: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),
    });
  }

  static PostOrder1() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
    });
  }

  static UserRegistered() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").allow(null),
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

  static PaymentAllowValue1() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PromotionPaymentModes() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue1(),
    });
  }

  static Restrictions1() {
    return Joi.object({
      post_order: CartModel.PostOrder1(),

      user_registered: CartModel.UserRegistered(),

      user_id: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_groups: Joi.array().items(Joi.number()),

      order_quantity: Joi.number(),

      anonymous_users: Joi.boolean(),
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

  static DiscountOffer() {
    return Joi.object({
      code: Joi.string().allow(""),

      discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      discount_price: Joi.number(),

      max_discount_amount: Joi.number(),

      discount_percentage: Joi.number(),

      min_offer_quantity: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),

      discount_type: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),

      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      author: CartModel.PromotionAuthor(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      stackable: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      date_meta: CartModel.PromotionDateMeta(),

      visiblility: CartModel.Visibility(),

      currency: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_priority: Joi.number(),

      apply_all_discount: Joi.boolean(),
    });
  }

  static PromotionsResponse() {
    return Joi.object({
      page: CartModel.Page(),

      items: CartModel.PromotionListItem(),
    });
  }

  static PromotionAdd() {
    return Joi.object({
      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      author: CartModel.PromotionAuthor(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      stackable: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      date_meta: CartModel.PromotionDateMeta(),

      visiblility: CartModel.Visibility(),

      currency: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_priority: Joi.number(),

      apply_all_discount: Joi.boolean(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      author: CartModel.PromotionAuthor(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      stackable: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      date_meta: CartModel.PromotionDateMeta(),

      visiblility: CartModel.Visibility(),

      currency: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_priority: Joi.number(),

      apply_all_discount: Joi.boolean(),
    });
  }

  static PromotionPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.PromotionSchedule(),
    });
  }

  static CartItem() {
    return Joi.object({
      product_id: Joi.string().allow("").required(),

      quantity: Joi.number(),

      size: Joi.string().allow("").required(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.number(),

      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      gst_charges: Joi.number(),

      you_saved: Joi.number(),

      total: Joi.number(),

      convenience_fee: Joi.number(),

      delivery_charge: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      discount: Joi.number(),

      coupon: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      vog: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: CartModel.LoyaltyPoints(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),

      raw: CartModel.RawBreakup(),
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

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      base: CartModel.BasePrice(),

      converted: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      store: CartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      type: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      marked: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

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
      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      brand: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      images: Joi.array().items(CartModel.ProductImage()),

      action: CartModel.ProductAction(),
    });
  }

  static Ownership2() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      ownership: CartModel.Ownership2(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      article: CartModel.ProductArticle(),

      price: CartModel.ProductPriceInfo(),

      quantity: Joi.number(),

      availability: CartModel.ProductAvailability(),

      coupon_message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      product: CartModel.CartProduct(),

      is_set: Joi.boolean(),

      price_per_unit: CartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      key: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      discount: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

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
      area: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.number(),

      email: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").allow(null),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      phone: Joi.number(),
    });
  }

  static OpenApiCartServiceabilityRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),

      shipping_address: CartModel.ShippingAddress().required(),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static PromiseTimestamp() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static ShipmentPromise() {
    return Joi.object({
      formatted: CartModel.PromiseFormatted(),

      timestamp: CartModel.PromiseTimestamp(),
    });
  }

  static OpenApiCartServiceabilityResponse() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static CartItemMeta() {
    return Joi.object({
      primary_item: Joi.boolean(),

      group_id: Joi.string().allow(""),
    });
  }

  static OpenApiFiles() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      current_status: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      meta: CartModel.MultiTenderPaymentMeta(),

      amount: Joi.number().required(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      cashback_applied: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      delivery_charges: Joi.number().required(),

      loyalty_discount: Joi.number(),

      quantity: Joi.number(),

      employee_discount: Joi.number(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cod_charges: Joi.number().required(),

      product_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      extra_meta: Joi.any(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      coupon_effective_discount: Joi.number().required(),

      discount: Joi.number().required(),

      amount_paid: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),

      cashback_applied: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      coupon_value: Joi.number().required(),

      gstin: Joi.string().allow("").allow(null),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      billing_address: CartModel.ShippingAddress().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      coupon: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      order_id: Joi.string().allow(""),

      shipping_address: CartModel.ShippingAddress(),

      delivery_charges: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      currency_code: Joi.string().allow(""),

      employee_discount: Joi.any(),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      comment: Joi.string().allow("").allow(null),
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

  static AbandonedCart() {
    return Joi.object({
      expire_at: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      promotion: Joi.any(),

      shipments: Joi.array().items(Joi.any()),

      payment_methods: Joi.array().items(Joi.any()),

      uid: Joi.number().required(),

      coupon: Joi.any().allow(null),

      discount: Joi.number(),

      cashback: Joi.any().required(),

      cart_value: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      fc_index_map: Joi.array().items(Joi.number()),

      fynd_credits: Joi.any(),

      cod_charges: Joi.any(),

      articles: Joi.array().items(Joi.any()).required(),

      merge_qty: Joi.boolean().allow(null),

      comment: Joi.string().allow("").allow(null),

      last_modified: Joi.string().allow("").required(),

      app_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      is_default: Joi.boolean().required(),

      bulk_coupon_discount: Joi.number().allow(null),

      is_active: Joi.boolean(),

      is_archive: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      delivery_charges: Joi.any(),

      pick_up_customer_details: Joi.any().allow(null),

      payments: Joi.any().allow(null),

      payment_mode: Joi.string().allow("").allow(null),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      result: Joi.any(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      page: CartModel.Page(),

      items: Joi.array().items(CartModel.AbandonedCart()),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
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
      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      _custom_json: Joi.any(),

      article_assignment: Joi.any(),

      pos: Joi.boolean(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),

      partial: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),
    });
  }

  static UpdateCartRequest() {
    return Joi.object({
      operation: Joi.string().allow("").required(),

      items: Joi.array().items(CartModel.UpdateProductCart()),
    });
  }

  static UpdateCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),
    });
  }
}
module.exports = CartModel;
