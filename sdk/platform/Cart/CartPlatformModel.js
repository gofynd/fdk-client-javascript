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
      min: Joi.number(),

      key: Joi.number(),

      value: Joi.number(),

      discount_qty: Joi.number(),

      max: Joi.number(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      user_registered_after: Joi.string().allow("").allow(null),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),

      is_display: Joi.boolean(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
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
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
    });
  }

  static UsesRemaining() {
    return Joi.object({
      app: Joi.number(),

      user: Joi.number(),

      total: Joi.number(),
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
      networks: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      types: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Restrictions() {
    return Joi.object({
      ordering_stores: Joi.array().items(Joi.number()),

      coupon_allowed: Joi.boolean(),

      price_range: CartModel.PriceRange(),

      post_order: CartModel.PostOrder(),

      user_groups: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),
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
      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),
    });
  }

  static Identifier() {
    return Joi.object({
      user_id: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      applicable_on: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      value_type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      auto_apply: Joi.boolean(),

      is_exact: Joi.boolean(),

      calculate_on: Joi.string().allow("").required(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      rule: Joi.array().items(CartModel.Rule()).required(),

      ownership: CartModel.Ownership().required(),

      author: CartModel.CouponAuthor(),

      validation: CartModel.Validation(),

      _schedule: CartModel.CouponSchedule(),

      action: CartModel.CouponAction(),

      state: CartModel.State(),

      code: Joi.string().allow("").required(),

      date_meta: CartModel.CouponDateMeta(),

      validity: CartModel.Validity().required(),

      restrictions: CartModel.Restrictions(),

      display_meta: CartModel.DisplayMeta().required(),

      identifiers: CartModel.Identifier().required(),

      type_slug: Joi.string().allow("").required(),

      rule_definition: CartModel.RuleDefinition().required(),

      tags: Joi.array().items(Joi.string().allow("")),
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

      ownership: CartModel.Ownership().required(),

      author: CartModel.CouponAuthor(),

      validation: CartModel.Validation(),

      _schedule: CartModel.CouponSchedule(),

      action: CartModel.CouponAction(),

      state: CartModel.State(),

      code: Joi.string().allow("").required(),

      date_meta: CartModel.CouponDateMeta(),

      validity: CartModel.Validity().required(),

      restrictions: CartModel.Restrictions(),

      display_meta: CartModel.DisplayMeta().required(),

      identifiers: CartModel.Identifier().required(),

      type_slug: Joi.string().allow("").required(),

      rule_definition: CartModel.RuleDefinition().required(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: CartModel.CouponSchedule(),

      archive: Joi.boolean(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static UserRegistered() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").allow(null),
    });
  }

  static PostOrder1() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
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
      uses: CartModel.PaymentAllowValue1(),

      type: Joi.string().allow("").required(),

      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Restrictions1() {
    return Joi.object({
      user_id: Joi.array().items(Joi.string().allow("")),

      user_registered: CartModel.UserRegistered(),

      order_quantity: Joi.number(),

      post_order: CartModel.PostOrder1(),

      user_groups: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction1().required(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      anonymous_users: Joi.boolean(),

      platforms: Joi.array().items(Joi.string().allow("")),
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
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static CompareObject() {
    return Joi.object({
      greater_than_equals: Joi.number(),

      equals: Joi.number(),

      less_than_equals: Joi.number(),

      less_than: Joi.number(),

      greater_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_company: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      cart_total: CartModel.CompareObject(),

      item_store: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      published: Joi.boolean().required(),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      discount_amount: Joi.number(),

      discount_price: Joi.number(),

      discount_percentage: Joi.number(),

      code: Joi.string().allow(""),

      min_offer_quantity: Joi.number(),

      max_discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      offer: CartModel.DiscountOffer().required(),

      buy_condition: Joi.string().allow("").required(),

      discount_type: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      author: CartModel.PromotionAuthor(),

      code: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      promotion_type: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      ownership: CartModel.Ownership1().required(),

      apply_priority: Joi.number(),

      post_order_action: CartModel.PromotionAction(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      stackable: Joi.boolean(),

      currency: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),
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
      author: CartModel.PromotionAuthor(),

      code: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      promotion_type: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      ownership: CartModel.Ownership1().required(),

      apply_priority: Joi.number(),

      post_order_action: CartModel.PromotionAction(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      stackable: Joi.boolean(),

      currency: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      author: CartModel.PromotionAuthor(),

      code: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      promotion_type: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      ownership: CartModel.Ownership1().required(),

      apply_priority: Joi.number(),

      post_order_action: CartModel.PromotionAction(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      stackable: Joi.boolean(),

      currency: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),
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
      size: Joi.string().allow("").required(),

      product_id: Joi.string().allow("").required(),

      quantity: Joi.number(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
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

  static RawBreakup() {
    return Joi.object({
      you_saved: Joi.number(),

      coupon: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      delivery_charge: Joi.number(),

      mrp_total: Joi.number(),

      discount: Joi.number(),

      cod_charge: Joi.number(),

      convenience_fee: Joi.number(),

      total: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      value: Joi.number(),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      code: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: CartModel.LoyaltyPoints(),

      raw: CartModel.RawBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      selling: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),
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

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      query: CartModel.ActionQuery(),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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

      brand: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      images: Joi.array().items(CartModel.ProductImage()),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
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
      uid: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      type: Joi.string().allow(""),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      seller: CartModel.BaseInfo(),

      store: CartModel.BaseInfo(),
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
      ownership: CartModel.Ownership2(),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      price: CartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      coupon_message: Joi.string().allow(""),

      key: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      promo_meta: CartModel.PromoMeta(),

      quantity: Joi.number(),

      price_per_unit: CartModel.ProductPriceInfo(),

      product: CartModel.CartProduct(),

      identifiers: CartModel.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),

      discount: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      article: CartModel.ProductArticle(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

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

      address_type: Joi.string().allow(""),

      phone: Joi.number(),

      state: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      country: Joi.string().allow("").allow(null),

      pincode: Joi.number(),

      city: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      meta: Joi.any(),

      name: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),
    });
  }

  static OpenApiCartServiceabilityRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),

      shipping_address: CartModel.ShippingAddress().required(),
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
      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),
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
      order_id: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      meta: CartModel.MultiTenderPaymentMeta(),

      name: Joi.string().allow(""),
    });
  }

  static CartItemMeta() {
    return Joi.object({
      primary_item: Joi.boolean(),

      group_id: Joi.string().allow(""),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      amount_paid: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      price_effective: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      price_marked: Joi.number().required(),

      employee_discount: Joi.number(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      delivery_charges: Joi.number().required(),

      extra_meta: Joi.any(),

      product_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      quantity: Joi.number(),

      cod_charges: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      loyalty_discount: Joi.number(),

      discount: Joi.number().required(),

      meta: CartModel.CartItemMeta(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      files: Joi.array().items(CartModel.OpenApiFiles()),

      comment: Joi.string().allow("").allow(null),

      employee_discount: Joi.any(),

      cashback_applied: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      delivery_charges: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      billing_address: CartModel.ShippingAddress().required(),

      loyalty_discount: Joi.number(),

      payment_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      coupon_value: Joi.number().required(),

      coupon: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      gstin: Joi.string().allow("").allow(null),

      cart_value: Joi.number().required(),

      shipping_address: CartModel.ShippingAddress(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      order_id: Joi.string().allow("").required(),

      order_ref_id: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      delivery_charges: Joi.any(),

      expire_at: Joi.string().allow("").required(),

      articles: Joi.array().items(Joi.any()).required(),

      payment_mode: Joi.string().allow("").allow(null),

      buy_now: Joi.boolean(),

      fc_index_map: Joi.array().items(Joi.number()),

      cashback: Joi.any().required(),

      last_modified: Joi.string().allow("").required(),

      bulk_coupon_discount: Joi.number().allow(null),

      promotion: Joi.any(),

      cod_charges: Joi.any(),

      gstin: Joi.string().allow("").allow(null),

      shipments: Joi.array().items(Joi.any()),

      is_archive: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      payment_methods: Joi.array().items(Joi.any()),

      _id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      discount: Joi.number(),

      fynd_credits: Joi.any(),

      order_id: Joi.string().allow(""),

      pick_up_customer_details: Joi.any().allow(null),

      is_active: Joi.boolean(),

      is_default: Joi.boolean().required(),

      app_id: Joi.string().allow(""),

      merge_qty: Joi.boolean().allow(null),

      coupon: Joi.any().allow(null),

      payments: Joi.any().allow(null),

      checkout_mode: Joi.string().allow(""),

      meta: Joi.any().allow(null),

      cart_value: Joi.number(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      page: CartModel.Page(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.AbandonedCart()),

      result: Joi.any(),

      success: Joi.boolean(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
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
      buy_now: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      article_assignment: Joi.any(),

      pos: Joi.boolean(),

      seller_id: Joi.number(),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      store_id: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      partial: Joi.boolean(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),
    });
  }
}
module.exports = CartModel;
