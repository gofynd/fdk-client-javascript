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

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      scope: Joi.array().items(Joi.string().allow("")),

      applicable_on: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      currency_code: Joi.string().allow(""),

      value_type: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      calculate_on: Joi.string().allow("").required(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Identifier() {
    return Joi.object({
      brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      collection_id: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_public: Joi.boolean(),

      is_archived: Joi.boolean(),
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
      description: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static Rule() {
    return Joi.object({
      value: Joi.number(),

      key: Joi.number(),

      min: Joi.number(),

      max: Joi.number(),

      discount_qty: Joi.number(),
    });
  }

  static PostOrder() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
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
      remaining: CartModel.UsesRemaining(),

      maximum: CartModel.UsesRemaining(),
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
      types: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static Restrictions() {
    return Joi.object({
      post_order: CartModel.PostOrder(),

      coupon_allowed: Joi.boolean(),

      uses: CartModel.UsesRestriction(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      ordering_stores: Joi.array().items(Joi.number()),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      price_range: CartModel.PriceRange(),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      anonymous: Joi.boolean(),

      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static CouponAdd() {
    return Joi.object({
      date_meta: CartModel.CouponDateMeta(),

      ownership: CartModel.Ownership().required(),

      action: CartModel.CouponAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),

      identifiers: CartModel.Identifier().required(),

      state: CartModel.State(),

      display_meta: CartModel.DisplayMeta().required(),

      _schedule: CartModel.CouponSchedule(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      restrictions: CartModel.Restrictions(),

      code: Joi.string().allow("").required(),

      validation: CartModel.Validation(),

      author: CartModel.CouponAuthor(),

      type_slug: Joi.string().allow("").required(),
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
      date_meta: CartModel.CouponDateMeta(),

      ownership: CartModel.Ownership().required(),

      action: CartModel.CouponAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),

      identifiers: CartModel.Identifier().required(),

      state: CartModel.State(),

      display_meta: CartModel.DisplayMeta().required(),

      _schedule: CartModel.CouponSchedule(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      restrictions: CartModel.Restrictions(),

      code: Joi.string().allow("").required(),

      validation: CartModel.Validation(),

      author: CartModel.CouponAuthor(),

      type_slug: Joi.string().allow("").required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
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

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static CompareObject() {
    return Joi.object({
      greater_than: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than_equals: Joi.number(),

      equals: Joi.number(),

      less_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_category: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_sku: Joi.array().items(Joi.string().allow("")),

      cart_total: CartModel.CompareObject(),

      all_items: Joi.boolean(),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      min_offer_quantity: Joi.number(),

      discount_price: Joi.number(),

      code: Joi.string().allow(""),

      max_discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      discount_percentage: Joi.number(),

      discount_amount: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      item_criteria: CartModel.ItemCriteria().required(),

      discount_type: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),

      buy_condition: Joi.string().allow("").required(),
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
      published: Joi.boolean().required(),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),
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
      remaining: CartModel.UsesRemaining1(),

      maximum: CartModel.UsesRemaining1(),
    });
  }

  static UserRegistered() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").allow(null),
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

      uses: CartModel.PaymentAllowValue1(),

      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Restrictions1() {
    return Joi.object({
      post_order: CartModel.PostOrder1(),

      uses: CartModel.UsesRestriction1().required(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      order_quantity: Joi.number(),

      anonymous_users: Joi.boolean(),

      user_registered: CartModel.UserRegistered(),

      user_id: Joi.array().items(Joi.string().allow("")),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),
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
      display_meta: CartModel.DisplayMeta1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      currency: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      post_order_action: CartModel.PromotionAction(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      visiblility: CartModel.Visibility(),

      mode: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      _schedule: CartModel.PromotionSchedule(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      restrictions: CartModel.Restrictions1(),

      stackable: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),
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
      display_meta: CartModel.DisplayMeta1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      currency: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      post_order_action: CartModel.PromotionAction(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      visiblility: CartModel.Visibility(),

      mode: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      _schedule: CartModel.PromotionSchedule(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      restrictions: CartModel.Restrictions1(),

      stackable: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      display_meta: CartModel.DisplayMeta1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      currency: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      post_order_action: CartModel.PromotionAction(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      visiblility: CartModel.Visibility(),

      mode: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      _schedule: CartModel.PromotionSchedule(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      restrictions: CartModel.Restrictions1(),

      stackable: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),
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
      quantity: Joi.number(),

      product_id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
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
      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      store: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      parent_item_identifiers: Joi.any(),

      type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      seller: CartModel.BaseInfo(),

      size: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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

      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
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

      action: CartModel.ProductAction(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      type: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      brand: CartModel.BaseInfo(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      add_on: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
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
      amount: Joi.number(),

      ownership: CartModel.Ownership2(),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      offer_text: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      article: CartModel.ProductArticle(),

      quantity: Joi.number(),

      availability: CartModel.ProductAvailability(),

      message: Joi.string().allow(""),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      product: CartModel.CartProduct(),

      price_per_unit: CartModel.ProductPriceInfo(),

      coupon_message: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      discount: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      is_set: Joi.boolean(),

      promo_meta: CartModel.PromoMeta(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      total: Joi.number(),

      gst_charges: Joi.number(),

      mrp_total: Joi.number(),

      you_saved: Joi.number(),

      coupon: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charge: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      vog: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      uid: Joi.string().allow(""),

      value: Joi.number(),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

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
      name: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      pincode: Joi.number(),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      meta: Joi.any(),

      area: Joi.string().allow(""),

      phone: Joi.number(),

      area_code_slug: Joi.string().allow(""),
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

  static ShipmentPromise() {
    return Joi.object({
      formatted: CartModel.PromiseFormatted(),

      timestamp: CartModel.PromiseTimestamp(),
    });
  }

  static OpenApiCartServiceabilityResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      payment_gateway: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      order_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: CartModel.MultiTenderPaymentMeta(),

      amount: Joi.number().required(),

      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),
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

  static OpenApiOrderItem() {
    return Joi.object({
      quantity: Joi.number(),

      product_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      extra_meta: Joi.any(),

      meta: CartModel.CartItemMeta(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      price_marked: Joi.number().required(),

      employee_discount: Joi.number(),

      size: Joi.string().allow("").required(),

      delivery_charges: Joi.number().required(),

      loyalty_discount: Joi.number(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cashback_applied: Joi.number().required(),

      discount: Joi.number().required(),

      cod_charges: Joi.number().required(),

      price_effective: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      comment: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow(""),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cashback_applied: Joi.number().required(),

      loyalty_discount: Joi.number(),

      coupon_value: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      employee_discount: Joi.any(),

      coupon: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),

      billing_address: CartModel.ShippingAddress().required(),

      gstin: Joi.string().allow("").allow(null),

      cod_charges: Joi.number().required(),

      order_id: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      shipping_address: CartModel.ShippingAddress(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      order_id: Joi.string().allow("").required(),

      order_ref_id: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      articles: Joi.array().items(Joi.any()).required(),

      is_default: Joi.boolean().required(),

      fynd_credits: Joi.any(),

      payment_methods: Joi.array().items(Joi.any()),

      last_modified: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      payment_mode: Joi.string().allow("").allow(null),

      delivery_charges: Joi.any(),

      shipments: Joi.array().items(Joi.any()),

      user_id: Joi.string().allow("").required(),

      cod_charges: Joi.any(),

      is_active: Joi.boolean(),

      fc_index_map: Joi.array().items(Joi.number()),

      created_on: Joi.string().allow("").required(),

      cart_value: Joi.number(),

      uid: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      pick_up_customer_details: Joi.any().allow(null),

      expire_at: Joi.string().allow("").required(),

      buy_now: Joi.boolean(),

      cashback: Joi.any().required(),

      discount: Joi.number(),

      is_archive: Joi.boolean(),

      promotion: Joi.any(),

      bulk_coupon_discount: Joi.number().allow(null),

      checkout_mode: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      coupon: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      merge_qty: Joi.boolean().allow(null),

      gstin: Joi.string().allow("").allow(null),

      payments: Joi.any().allow(null),

      order_id: Joi.string().allow(""),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      result: Joi.any(),

      success: Joi.boolean(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      page: CartModel.Page(),
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
      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      item_id: Joi.number(),

      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      article_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      display: Joi.string().allow(""),

      store_id: Joi.number(),
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

      success: Joi.boolean(),

      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

      item_size: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),
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

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
    });
  }
}
module.exports = CartModel;
