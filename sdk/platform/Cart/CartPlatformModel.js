const Joi = require("joi");

class CartModel {
  static Identifier() {
    return Joi.object({
      store_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),
    });
  }

  static Rule() {
    return Joi.object({
      value: Joi.number(),

      min: Joi.number(),

      max: Joi.number(),

      discount_qty: Joi.number(),

      key: Joi.number(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      auto_apply: Joi.boolean(),

      type: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      value_type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      applicable_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      calculate_on: Joi.string().allow("").required(),
    });
  }

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),
    });
  }

  static PostOrder() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static UsesRemaining() {
    return Joi.object({
      total: Joi.number(),

      app: Joi.number(),

      user: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      maximum: CartModel.UsesRemaining(),

      remaining: CartModel.UsesRemaining(),
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

      uses: CartModel.PaymentAllowValue(),

      networks: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Restrictions() {
    return Joi.object({
      post_order: CartModel.PostOrder(),

      price_range: CartModel.PriceRange(),

      coupon_allowed: Joi.boolean(),

      uses: CartModel.UsesRestriction(),

      platforms: Joi.array().items(Joi.string().allow("")),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      ordering_stores: Joi.array().items(Joi.number()),

      user_groups: Joi.array().items(Joi.number()),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static DisplayMetaDict() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static CouponAdd() {
    return Joi.object({
      identifiers: CartModel.Identifier().required(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      date_meta: CartModel.CouponDateMeta(),

      tags: Joi.array().items(Joi.string().allow("")),

      action: CartModel.CouponAction(),

      validation: CartModel.Validation(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      type_slug: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      restrictions: CartModel.Restrictions(),

      validity: CartModel.Validity().required(),

      display_meta: CartModel.DisplayMeta().required(),

      _schedule: CartModel.CouponSchedule(),
    });
  }

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

  static CouponsResponse() {
    return Joi.object({
      items: CartModel.CouponAdd(),

      page: CartModel.Page(),
    });
  }

  static SuccessMessage() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OperationErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CouponUpdate() {
    return Joi.object({
      identifiers: CartModel.Identifier().required(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      date_meta: CartModel.CouponDateMeta(),

      tags: Joi.array().items(Joi.string().allow("")),

      action: CartModel.CouponAction(),

      validation: CartModel.Validation(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      type_slug: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      restrictions: CartModel.Restrictions(),

      validity: CartModel.Validity().required(),

      display_meta: CartModel.DisplayMeta().required(),

      _schedule: CartModel.CouponSchedule(),
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
      greater_than: Joi.number(),

      less_than: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than_equals: Joi.number(),

      equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_category: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      all_items: Joi.boolean(),

      item_brand: Joi.array().items(Joi.number()),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      code: Joi.string().allow(""),

      min_offer_quantity: Joi.number(),

      discount_percentage: Joi.number(),

      discount_amount: Joi.number(),

      max_discount_amount: Joi.number(),

      discount_price: Joi.number(),

      max_offer_quantity: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      offer: CartModel.DiscountOffer().required(),

      item_criteria: CartModel.ItemCriteria().required(),

      buy_condition: Joi.string().allow("").required(),

      discount_type: Joi.string().allow("").required(),
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

  static UsesRemaining1() {
    return Joi.object({
      total: Joi.number(),

      user: Joi.number(),
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
      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue1(),

      type: Joi.string().allow("").required(),
    });
  }

  static Restrictions1() {
    return Joi.object({
      user_registered: CartModel.UserRegistered(),

      user_groups: Joi.array().items(Joi.number()),

      post_order: CartModel.PostOrder1(),

      uses: CartModel.UsesRestriction1().required(),

      order_quantity: Joi.number(),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      anonymous_users: Joi.boolean(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
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
      published: Joi.boolean().required(),

      start: Joi.string().allow("").required(),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
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
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      mode: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      promotion_type: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      stackable: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      post_order_action: CartModel.PromotionAction(),

      apply_all_discount: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      currency: Joi.string().allow(""),
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
      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      mode: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      promotion_type: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      stackable: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      post_order_action: CartModel.PromotionAction(),

      apply_all_discount: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      currency: Joi.string().allow(""),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      mode: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      promotion_type: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      stackable: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      post_order_action: CartModel.PromotionAction(),

      apply_all_discount: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      currency: Joi.string().allow(""),
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
      size: Joi.string().allow("").required(),

      quantity: Joi.number(),

      product_id: Joi.string().allow("").required(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      store: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      size: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),
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
      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      ownership: CartModel.Ownership2(),

      promotion_type: Joi.string().allow(""),
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

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CartProduct() {
    return Joi.object({
      images: Joi.array().items(CartModel.ProductImage()),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      categories: Joi.array().items(CartModel.CategoryInfo()),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      identifiers: CartModel.CartProductIdentifer().required(),

      article: CartModel.ProductArticle(),

      price: CartModel.ProductPriceInfo(),

      availability: CartModel.ProductAvailability(),

      message: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      parent_item_identifiers: Joi.any(),

      coupon_message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      bulk_offer: Joi.any(),

      is_set: Joi.boolean(),

      quantity: Joi.number(),

      price_per_unit: CartModel.ProductPriceInfo(),

      product: CartModel.CartProduct(),

      key: Joi.string().allow(""),

      discount: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      total: Joi.number(),

      description: Joi.string().allow(""),

      applicable: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      coupon: Joi.number(),

      you_saved: Joi.number(),

      delivery_charge: Joi.number(),

      gst_charges: Joi.number(),

      convenience_fee: Joi.number(),

      cod_charge: Joi.number(),

      total: Joi.number(),

      subtotal: Joi.number(),

      mrp_total: Joi.number(),

      vog: Joi.number(),

      discount: Joi.number(),

      fynd_cash: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: CartModel.LoyaltyPoints(),

      raw: CartModel.RawBreakup(),

      coupon: CartModel.CouponBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),
    });
  }

  static OpenApiErrorResponse() {
    return Joi.object({
      errors: Joi.any(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      area_code_slug: Joi.string().allow(""),

      pincode: Joi.number(),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      meta: Joi.any(),

      address: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").allow(null),

      address_type: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      phone: Joi.number(),

      city: Joi.string().allow("").allow(null),
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
      timestamp: CartModel.PromiseTimestamp(),

      formatted: CartModel.PromiseFormatted(),
    });
  }

  static OpenApiCartServiceabilityResponse() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      payment_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      name: Joi.string().allow(""),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      meta: CartModel.MultiTenderPaymentMeta(),
    });
  }

  static CartItemMeta() {
    return Joi.object({
      group_id: Joi.string().allow(""),

      primary_item: Joi.boolean(),
    });
  }

  static OpenApiFiles() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      product_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      price_marked: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      employee_discount: Joi.number(),

      cod_charges: Joi.number().required(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      amount_paid: Joi.number().required(),

      loyalty_discount: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      discount: Joi.number().required(),

      delivery_charges: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      gstin: Joi.string().allow("").allow(null),

      cashback_applied: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      employee_discount: Joi.any(),

      currency_code: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      loyalty_discount: Joi.number(),

      order_id: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").required(),

      delivery_charges: Joi.number().required(),

      coupon: Joi.string().allow(""),

      shipping_address: CartModel.ShippingAddress(),

      coupon_value: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      billing_address: CartModel.ShippingAddress().required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_ref_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      app_id: Joi.string().allow(""),

      uid: Joi.number().required(),

      fc_index_map: Joi.array().items(Joi.number()),

      cart_value: Joi.number(),

      payments: Joi.any().allow(null),

      coupon: Joi.any().allow(null),

      promotion: Joi.any(),

      articles: Joi.array().items(Joi.any()).required(),

      expire_at: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      merge_qty: Joi.boolean().allow(null),

      shipments: Joi.array().items(Joi.any()),

      is_archive: Joi.boolean(),

      discount: Joi.number(),

      bulk_coupon_discount: Joi.number().allow(null),

      gstin: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow("").allow(null),

      checkout_mode: Joi.string().allow(""),

      meta: Joi.any().allow(null),

      is_active: Joi.boolean(),

      payment_methods: Joi.array().items(Joi.any()),

      cod_charges: Joi.any(),

      order_id: Joi.string().allow(""),

      fynd_credits: Joi.any(),

      comment: Joi.string().allow("").allow(null),

      delivery_charges: Joi.any(),

      is_default: Joi.boolean().required(),

      created_on: Joi.string().allow("").required(),

      buy_now: Joi.boolean(),

      cashback: Joi.any().required(),

      user_id: Joi.string().allow("").required(),

      pick_up_customer_details: Joi.any().allow(null),

      last_modified: Joi.string().allow("").required(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      page: CartModel.Page(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      result: Joi.any(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      store_id: Joi.number(),

      item_id: Joi.number(),

      pos: Joi.boolean(),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      quantity: Joi.number(),

      article_assignment: Joi.any(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_id: Joi.number(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static UpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.UpdateProductCart()),

      operation: Joi.string().allow("").required(),
    });
  }

  static UpdateCartDetailResponse() {
    return Joi.object({
      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }
}
module.exports = CartModel;
