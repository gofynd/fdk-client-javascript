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

  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      scope: Joi.array().items(Joi.string().allow("")),

      calculate_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      auto_apply: Joi.boolean(),

      value_type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_public: Joi.boolean(),

      is_archived: Joi.boolean(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      uses: CartModel.PaymentAllowValue(),

      codes: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static UsesRemaining() {
    return Joi.object({
      total: Joi.number(),

      user: Joi.number(),

      app: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      maximum: CartModel.UsesRemaining(),

      remaining: CartModel.UsesRemaining(),
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
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static Restrictions() {
    return Joi.object({
      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      uses: CartModel.UsesRestriction(),

      platforms: Joi.array().items(Joi.string().allow("")),

      post_order: CartModel.PostOrder(),

      coupon_allowed: Joi.boolean(),

      ordering_stores: Joi.array().items(Joi.number()),

      user_groups: Joi.array().items(Joi.number()),

      price_range: CartModel.PriceRange(),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static Rule() {
    return Joi.object({
      value: Joi.number(),

      key: Joi.number(),

      max: Joi.number(),

      min: Joi.number(),

      discount_qty: Joi.number(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
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
      apply: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      exclude_brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponAdd() {
    return Joi.object({
      validation: CartModel.Validation(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      tags: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      validity: CartModel.Validity().required(),

      date_meta: CartModel.CouponDateMeta(),

      restrictions: CartModel.Restrictions(),

      action: CartModel.CouponAction(),

      _schedule: CartModel.CouponSchedule(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      ownership: CartModel.Ownership().required(),

      display_meta: CartModel.DisplayMeta().required(),

      type_slug: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),
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
      validation: CartModel.Validation(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      tags: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      validity: CartModel.Validity().required(),

      date_meta: CartModel.CouponDateMeta(),

      restrictions: CartModel.Restrictions(),

      action: CartModel.CouponAction(),

      _schedule: CartModel.CouponSchedule(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      ownership: CartModel.Ownership().required(),

      display_meta: CartModel.DisplayMeta().required(),

      type_slug: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),
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

      less_than_equals: Joi.number(),

      equals: Joi.number(),

      less_than: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      all_items: Joi.boolean(),

      item_id: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      cart_total: CartModel.CompareObject(),

      item_brand: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
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

  static Restrictions1() {
    return Joi.object({
      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      uses: CartModel.UsesRestriction1().required(),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      user_registered: CartModel.UserRegistered(),

      order_quantity: Joi.number(),

      post_order: CartModel.PostOrder1(),

      user_groups: Joi.array().items(Joi.number()),

      anonymous_users: Joi.boolean(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      discount_price: Joi.number(),

      min_offer_quantity: Joi.number(),

      discount_percentage: Joi.number(),

      code: Joi.string().allow(""),

      max_discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      discount_amount: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),

      discount_type: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      published: Joi.boolean().required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _custom_json: Joi.any(),

      ownership: CartModel.Ownership1().required(),

      apply_priority: Joi.number(),

      post_order_action: CartModel.PromotionAction(),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      restrictions: CartModel.Restrictions1(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      date_meta: CartModel.PromotionDateMeta(),

      stackable: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      _schedule: CartModel.PromotionSchedule(),

      display_meta: CartModel.DisplayMeta1().required(),
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

      ownership: CartModel.Ownership1().required(),

      apply_priority: Joi.number(),

      post_order_action: CartModel.PromotionAction(),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      restrictions: CartModel.Restrictions1(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      date_meta: CartModel.PromotionDateMeta(),

      stackable: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      _schedule: CartModel.PromotionSchedule(),

      display_meta: CartModel.DisplayMeta1().required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _custom_json: Joi.any(),

      ownership: CartModel.Ownership1().required(),

      apply_priority: Joi.number(),

      post_order_action: CartModel.PromotionAction(),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      restrictions: CartModel.Restrictions1(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      date_meta: CartModel.PromotionDateMeta(),

      stackable: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      _schedule: CartModel.PromotionSchedule(),

      display_meta: CartModel.DisplayMeta1().required(),
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

      product_id: Joi.string().allow("").required(),

      quantity: Joi.number(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
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
      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      images: Joi.array().items(CartModel.ProductImage()),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      action: CartModel.ProductAction(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

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
      size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      seller: CartModel.BaseInfo(),

      quantity: Joi.number(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static Ownership2() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      amount: Joi.number(),

      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      ownership: CartModel.Ownership2(),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
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

  static CartProductInfo() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      product: CartModel.CartProduct(),

      article: CartModel.ProductArticle(),

      bulk_offer: Joi.any(),

      availability: CartModel.ProductAvailability(),

      coupon_message: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      key: Joi.string().allow(""),

      is_set: Joi.boolean(),

      discount: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      price: CartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      quantity: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      description: Joi.string().allow(""),

      applicable: Joi.number(),

      is_applied: Joi.boolean(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      coupon: Joi.number(),

      total: Joi.number(),

      delivery_charge: Joi.number(),

      mrp_total: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      you_saved: Joi.number(),

      vog: Joi.number(),

      gst_charges: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      subtotal: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      type: Joi.string().allow(""),

      code: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),
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

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static OpenApiErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      errors: Joi.any(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      phone: Joi.number(),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      state: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").allow(null),

      country_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      meta: Joi.any(),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),
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
      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),
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

      name: Joi.string().allow(""),

      meta: CartModel.MultiTenderPaymentMeta(),
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
      primary_item: Joi.boolean(),

      group_id: Joi.string().allow(""),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      amount_paid: Joi.number().required(),

      extra_meta: Joi.any(),

      loyalty_discount: Joi.number(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      product_id: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      employee_discount: Joi.number(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cashback_applied: Joi.number().required(),

      cod_charges: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      price_effective: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      quantity: Joi.number(),

      size: Joi.string().allow("").required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      delivery_charges: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      comment: Joi.string().allow("").allow(null),

      coupon: Joi.string().allow(""),

      coupon_value: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      loyalty_discount: Joi.number(),

      billing_address: CartModel.ShippingAddress().required(),

      employee_discount: Joi.any(),

      cashback_applied: Joi.number().required(),

      cod_charges: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      shipping_address: CartModel.ShippingAddress(),

      gstin: Joi.string().allow("").allow(null),
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
      buy_now: Joi.boolean(),

      uid: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      articles: Joi.array().items(Joi.any()).required(),

      coupon: Joi.any().allow(null),

      promotion: Joi.any(),

      payment_methods: Joi.array().items(Joi.any()),

      fynd_credits: Joi.any(),

      app_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      payments: Joi.any().allow(null),

      merge_qty: Joi.boolean().allow(null),

      delivery_charges: Joi.any(),

      bulk_coupon_discount: Joi.number().allow(null),

      is_archive: Joi.boolean(),

      comment: Joi.string().allow("").allow(null),

      pick_up_customer_details: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      payment_mode: Joi.string().allow("").allow(null),

      last_modified: Joi.string().allow("").required(),

      cart_value: Joi.number(),

      is_default: Joi.boolean().required(),

      discount: Joi.number(),

      user_id: Joi.string().allow("").required(),

      cashback: Joi.any().required(),

      fc_index_map: Joi.array().items(Joi.number()),

      shipments: Joi.array().items(Joi.any()),

      cod_charges: Joi.any(),

      expire_at: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      gstin: Joi.string().allow("").allow(null),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      page: CartModel.Page(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

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
      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      article_assignment: Joi.any(),

      store_id: Joi.number(),

      seller_id: Joi.number(),

      article_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),
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

      success: Joi.boolean(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

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
