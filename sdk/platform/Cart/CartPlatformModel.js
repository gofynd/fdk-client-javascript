const Joi = require("joi");

class CartModel {
  static Page() {
    return Joi.object({
      size: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      current: Joi.number(),

      next_id: Joi.string().allow(""),

      page: Joi.number(),

      type: Joi.string().allow("").required(),

      last_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      auto_apply: Joi.boolean(),

      applicable_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      calculate_on: Joi.string().allow("").required(),
    });
  }

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
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
      types: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      networks: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UsesRemaining() {
    return Joi.object({
      app: Joi.number(),

      total: Joi.number(),

      user: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      maximum: CartModel.UsesRemaining(),

      remaining: CartModel.UsesRemaining(),
    });
  }

  static Restrictions() {
    return Joi.object({
      platforms: Joi.array().items(Joi.string().allow("")),

      ordering_stores: Joi.array().items(Joi.number()),

      coupon_allowed: Joi.boolean(),

      price_range: CartModel.PriceRange(),

      post_order: CartModel.PostOrder(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      user_groups: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction(),
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
      apply: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static Rule() {
    return Joi.object({
      key: Joi.number(),

      max: Joi.number(),

      discount_qty: Joi.number(),

      min: Joi.number(),

      value: Joi.number(),
    });
  }

  static Identifier() {
    return Joi.object({
      company_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string().allow("").allow(null),

      app_id: Joi.array().items(Joi.string().allow("")),

      anonymous: Joi.boolean(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      action: CartModel.CouponAction(),

      state: CartModel.State(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      rule_definition: CartModel.RuleDefinition().required(),

      restrictions: CartModel.Restrictions(),

      validity: CartModel.Validity().required(),

      display_meta: CartModel.DisplayMeta().required(),

      date_meta: CartModel.CouponDateMeta(),

      type_slug: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      identifiers: CartModel.Identifier().required(),

      validation: CartModel.Validation(),

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
      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      action: CartModel.CouponAction(),

      state: CartModel.State(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      rule_definition: CartModel.RuleDefinition().required(),

      restrictions: CartModel.Restrictions(),

      validity: CartModel.Validity().required(),

      display_meta: CartModel.DisplayMeta().required(),

      date_meta: CartModel.CouponDateMeta(),

      type_slug: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      identifiers: CartModel.Identifier().required(),

      validation: CartModel.Validation(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: CartModel.CouponSchedule(),

      archive: Joi.boolean(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
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

      less_than: Joi.number(),

      equals: Joi.number(),

      greater_than: Joi.number(),

      less_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_store: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_size: Joi.array().items(Joi.string().allow("")),

      all_items: Joi.boolean(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_brand: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_category: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      min_offer_quantity: Joi.number(),

      discount_price: Joi.number(),

      discount_amount: Joi.number(),

      max_discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      discount_percentage: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static DiscountRule() {
    return Joi.object({
      item_criteria: CartModel.ItemCriteria().required(),

      offer: CartModel.DiscountOffer().required(),

      discount_type: Joi.string().allow("").required(),

      buy_condition: Joi.string().allow("").required(),
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
      uses: CartModel.PaymentAllowValue1(),

      codes: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),
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

  static Restrictions1() {
    return Joi.object({
      platforms: Joi.array().items(Joi.string().allow("")),

      user_registered: CartModel.UserRegistered(),

      post_order: CartModel.PostOrder1(),

      anonymous_users: Joi.boolean(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_groups: Joi.array().items(Joi.number()),

      order_quantity: Joi.number(),

      user_id: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      start: Joi.string().allow("").required(),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      promotion_type: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      restrictions: CartModel.Restrictions1(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      mode: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      code: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      currency: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      apply_exclusive: Joi.string().allow("").allow(null),
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
      promotion_type: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      restrictions: CartModel.Restrictions1(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      mode: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      code: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      currency: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      apply_exclusive: Joi.string().allow("").allow(null),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      promotion_type: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      restrictions: CartModel.Restrictions1(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      mode: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      code: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      currency: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      apply_exclusive: Joi.string().allow("").allow(null),
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

      quantity: Joi.number(),

      product_id: Joi.string().allow("").required(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      display: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      coupon: Joi.number(),

      you_saved: Joi.number(),

      mrp_total: Joi.number(),

      fynd_cash: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charge: Joi.number(),

      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      total: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      discount: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      applicable: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.number(),

      is_applied: Joi.boolean(),
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

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      converted: CartModel.BasePrice(),

      base: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      extra_meta: Joi.any(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      store: CartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),
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

  static CartProduct() {
    return Joi.object({
      uid: Joi.number(),

      images: Joi.array().items(CartModel.ProductImage()),

      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      type: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      name: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      offer_text: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      marked: Joi.number(),
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
      is_set: Joi.boolean(),

      key: Joi.string().allow(""),

      quantity: Joi.number(),

      article: CartModel.ProductArticle(),

      product: CartModel.CartProduct(),

      coupon_message: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      promo_meta: CartModel.PromoMeta(),

      message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      price_per_unit: CartModel.ProductPriceInfo(),

      price: CartModel.ProductPriceInfo(),

      bulk_offer: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      discount: Joi.string().allow(""),
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
      area_code: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),

      phone: Joi.number(),

      meta: Joi.any(),

      country: Joi.string().allow("").allow(null),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),
    });
  }

  static OpenApiCartServiceabilityRequest() {
    return Joi.object({
      shipping_address: CartModel.ShippingAddress().required(),

      cart_items: CartModel.CartItem(),
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
      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),
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
      payment_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      order_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      name: Joi.string().allow(""),

      meta: CartModel.MultiTenderPaymentMeta(),
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
      extra_meta: Joi.any(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      quantity: Joi.number(),

      size: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      price_effective: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      amount_paid: Joi.number().required(),

      price_marked: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      employee_discount: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      product_id: Joi.number().required(),

      loyalty_discount: Joi.number(),

      discount: Joi.number().required(),

      delivery_charges: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      gstin: Joi.string().allow("").allow(null),

      employee_discount: Joi.any(),

      cashback_applied: Joi.number().required(),

      cart_value: Joi.number().required(),

      coupon_value: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      order_id: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").required(),

      billing_address: CartModel.ShippingAddress().required(),

      coupon: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      comment: Joi.string().allow("").allow(null),

      shipping_address: CartModel.ShippingAddress(),

      affiliate_order_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_ref_id: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      _id: Joi.string().allow("").required(),

      promotion: Joi.any(),

      last_modified: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").allow(null),

      is_archive: Joi.boolean(),

      delivery_charges: Joi.any(),

      buy_now: Joi.boolean(),

      coupon: Joi.any().allow(null),

      payment_mode: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow(""),

      meta: Joi.any().allow(null),

      fc_index_map: Joi.array().items(Joi.number()),

      user_id: Joi.string().allow("").required(),

      app_id: Joi.string().allow(""),

      expire_at: Joi.string().allow("").required(),

      bulk_coupon_discount: Joi.number().allow(null),

      payment_methods: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      merge_qty: Joi.boolean().allow(null),

      fynd_credits: Joi.any(),

      articles: Joi.array().items(Joi.any()).required(),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(Joi.any()),

      uid: Joi.number().required(),

      pick_up_customer_details: Joi.any().allow(null),

      cod_charges: Joi.any(),

      comment: Joi.string().allow("").allow(null),

      cashback: Joi.any().required(),

      payments: Joi.any().allow(null),

      cart_value: Joi.number(),

      discount: Joi.number(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      result: Joi.any(),

      success: Joi.boolean(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      message: Joi.string().allow(""),

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
      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      parent_item_identifiers: Joi.any(),

      pos: Joi.boolean(),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      item_id: Joi.number(),

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
      partial: Joi.boolean(),

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_index: Joi.number(),

      item_id: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      article_id: Joi.string().allow(""),

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
      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }
}
module.exports = CartModel;
