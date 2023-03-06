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
      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),
    });
  }

  static Identifier() {
    return Joi.object({
      company_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      article_id: Joi.array().items(Joi.string().allow("")),

      collection_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static PostOrder() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
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

      types: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),
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
      remaining: CartModel.UsesRemaining(),

      maximum: CartModel.UsesRemaining(),
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
      coupon_allowed: Joi.boolean(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_groups: Joi.array().items(Joi.number()),

      post_order: CartModel.PostOrder(),

      ordering_stores: Joi.array().items(Joi.number()),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      uses: CartModel.UsesRestriction(),

      price_range: CartModel.PriceRange(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      is_exact: Joi.boolean(),

      currency_code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      auto_apply: Joi.boolean(),

      value_type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
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
      subtitle: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),
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
      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
    });
  }

  static Rule() {
    return Joi.object({
      key: Joi.number(),

      discount_qty: Joi.number(),

      min: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      validation: CartModel.Validation(),

      identifiers: CartModel.Identifier().required(),

      restrictions: CartModel.Restrictions(),

      author: CartModel.CouponAuthor(),

      rule_definition: CartModel.RuleDefinition().required(),

      ownership: CartModel.Ownership().required(),

      state: CartModel.State(),

      validity: CartModel.Validity().required(),

      display_meta: CartModel.DisplayMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      date_meta: CartModel.CouponDateMeta(),

      _schedule: CartModel.CouponSchedule(),

      type_slug: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      code: Joi.string().allow("").required(),
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

      identifiers: CartModel.Identifier().required(),

      restrictions: CartModel.Restrictions(),

      author: CartModel.CouponAuthor(),

      rule_definition: CartModel.RuleDefinition().required(),

      ownership: CartModel.Ownership().required(),

      state: CartModel.State(),

      validity: CartModel.Validity().required(),

      display_meta: CartModel.DisplayMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      date_meta: CartModel.CouponDateMeta(),

      _schedule: CartModel.CouponSchedule(),

      type_slug: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      code: Joi.string().allow("").required(),
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

  static CompareObject() {
    return Joi.object({
      greater_than_equals: Joi.number(),

      greater_than: Joi.number(),

      less_than_equals: Joi.number(),

      equals: Joi.number(),

      less_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_sku: Joi.array().items(Joi.string().allow("")),

      item_brand: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_category: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_company: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),
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

  static DiscountOffer() {
    return Joi.object({
      max_offer_quantity: Joi.number(),

      discount_amount: Joi.number(),

      max_discount_amount: Joi.number(),

      discount_price: Joi.number(),

      discount_percentage: Joi.number(),

      min_offer_quantity: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),

      item_criteria: CartModel.ItemCriteria().required(),

      discount_type: Joi.string().allow("").required(),
    });
  }

  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
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
      remaining: CartModel.UsesRemaining1(),

      maximum: CartModel.UsesRemaining1(),
    });
  }

  static Restrictions1() {
    return Joi.object({
      user_registered: CartModel.UserRegistered(),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_groups: Joi.array().items(Joi.number()),

      post_order: CartModel.PostOrder1(),

      anonymous_users: Joi.boolean(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      order_quantity: Joi.number(),

      user_id: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),
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
      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      start: Joi.string().allow("").required(),

      end: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      author: CartModel.PromotionAuthor(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      currency: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      stackable: Joi.boolean(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      application_id: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      promo_group: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      _schedule: CartModel.PromotionSchedule(),

      mode: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

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
      author: CartModel.PromotionAuthor(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      currency: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      stackable: Joi.boolean(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      application_id: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      promo_group: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      _schedule: CartModel.PromotionSchedule(),

      mode: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      author: CartModel.PromotionAuthor(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      currency: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      stackable: Joi.boolean(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      application_id: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      promo_group: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      _schedule: CartModel.PromotionSchedule(),

      mode: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

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

      quantity: Joi.number(),

      size: Joi.string().allow("").required(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      base: CartModel.BasePrice(),

      converted: CartModel.BasePrice(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      _custom_json: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      extra_meta: Joi.any(),

      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      store: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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
      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      ownership: CartModel.Ownership2(),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
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
      query: CartModel.ActionQuery(),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      images: Joi.array().items(CartModel.ProductImage()),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      action: CartModel.ProductAction(),

      brand: CartModel.BaseInfo(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      article: CartModel.ProductArticle(),

      key: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      promo_meta: CartModel.PromoMeta(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      price: CartModel.ProductPriceInfo(),

      bulk_offer: Joi.any(),

      message: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      price_per_unit: CartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      parent_item_identifiers: Joi.any(),

      coupon_message: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      gst_charges: Joi.number(),

      you_saved: Joi.number(),

      mrp_total: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charge: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      fynd_cash: Joi.number(),

      subtotal: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      value: Joi.number(),

      code: Joi.string().allow(""),
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

      raw: CartModel.RawBreakup(),

      coupon: CartModel.CouponBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),
    });
  }

  static OpenApiErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      errors: Joi.any(),

      success: Joi.boolean(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").allow(null),

      phone: Joi.number(),

      address: Joi.string().allow(""),

      pincode: Joi.number(),

      country_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      meta: Joi.any(),
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

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      payment_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      order_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      amount: Joi.number().required(),

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
      group_id: Joi.string().allow(""),

      primary_item: Joi.boolean(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      delivery_charges: Joi.number().required(),

      product_id: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cod_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      extra_meta: Joi.any(),

      employee_discount: Joi.number(),

      price_marked: Joi.number().required(),

      loyalty_discount: Joi.number(),

      amount_paid: Joi.number().required(),

      quantity: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      meta: CartModel.CartItemMeta(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      gstin: Joi.string().allow("").allow(null),

      currency_code: Joi.string().allow(""),

      employee_discount: Joi.any(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      order_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      coupon_code: Joi.string().allow("").required(),

      coupon: Joi.string().allow(""),

      shipping_address: CartModel.ShippingAddress(),

      cart_value: Joi.number().required(),

      billing_address: CartModel.ShippingAddress().required(),

      cod_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      coupon_value: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      payment_mode: Joi.string().allow(""),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean(),

      order_ref_id: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      delivery_charges: Joi.any(),

      is_active: Joi.boolean(),

      payment_methods: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      fc_index_map: Joi.array().items(Joi.number()),

      created_on: Joi.string().allow("").required(),

      order_id: Joi.string().allow(""),

      promotion: Joi.any(),

      uid: Joi.number().required(),

      merge_qty: Joi.boolean().allow(null),

      comment: Joi.string().allow("").allow(null),

      bulk_coupon_discount: Joi.number().allow(null),

      payments: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      is_archive: Joi.boolean(),

      expire_at: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow(""),

      cashback: Joi.any().required(),

      buy_now: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      coupon: Joi.any().allow(null),

      fynd_credits: Joi.any(),

      cart_value: Joi.number(),

      pick_up_customer_details: Joi.any().allow(null),

      cod_charges: Joi.any(),

      shipments: Joi.array().items(Joi.any()),

      articles: Joi.array().items(Joi.any()).required(),

      discount: Joi.number(),

      last_modified: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").allow(null),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      success: Joi.boolean(),

      page: CartModel.Page(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      message: Joi.string().allow(""),

      result: Joi.any(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
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
      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      extra_meta: Joi.any(),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      display: Joi.string().allow(""),

      article_assignment: Joi.any(),

      article_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
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
      identifiers: CartModel.CartProductIdentifer().required(),

      item_id: Joi.number(),

      extra_meta: Joi.any(),

      item_index: Joi.number(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),
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
