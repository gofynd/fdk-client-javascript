const Joi = require("joi");

class CartModel {
  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
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
      apply: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static Rule() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),

      discount_qty: Joi.number(),

      key: Joi.number(),

      value: Joi.number(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      applicable_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      currency_code: Joi.string().allow(""),

      value_type: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      auto_apply: Joi.boolean(),

      calculate_on: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static Identifier() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      collection_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),
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
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static PostOrder() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static Restrictions() {
    return Joi.object({
      ordering_stores: Joi.array().items(Joi.number()),

      user_groups: Joi.array().items(Joi.number()),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction(),

      price_range: CartModel.PriceRange(),

      coupon_allowed: Joi.boolean(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      post_order: CartModel.PostOrder(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),
    });
  }

  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      user_registered_after: Joi.string().allow("").allow(null),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponAdd() {
    return Joi.object({
      ownership: CartModel.Ownership().required(),

      display_meta: CartModel.DisplayMeta().required(),

      validity: CartModel.Validity().required(),

      _schedule: CartModel.CouponSchedule(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      rule_definition: CartModel.RuleDefinition().required(),

      code: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      date_meta: CartModel.CouponDateMeta(),

      identifiers: CartModel.Identifier().required(),

      type_slug: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions(),

      author: CartModel.CouponAuthor(),

      state: CartModel.State(),

      validation: CartModel.Validation(),

      tags: Joi.array().items(Joi.string().allow("")),
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
      ownership: CartModel.Ownership().required(),

      display_meta: CartModel.DisplayMeta().required(),

      validity: CartModel.Validity().required(),

      _schedule: CartModel.CouponSchedule(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      rule_definition: CartModel.RuleDefinition().required(),

      code: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      date_meta: CartModel.CouponDateMeta(),

      identifiers: CartModel.Identifier().required(),

      type_slug: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions(),

      author: CartModel.CouponAuthor(),

      state: CartModel.State(),

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

  static PromotionSchedule() {
    return Joi.object({
      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static UserRegistered() {
    return Joi.object({
      start: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),
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

  static PostOrder1() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static Restrictions1() {
    return Joi.object({
      user_registered: CartModel.UserRegistered(),

      user_groups: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      order_quantity: Joi.number(),

      anonymous_users: Joi.boolean(),

      post_order: CartModel.PostOrder1(),
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

      less_than: Joi.number(),

      equals: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      cart_quantity: CartModel.CompareObject(),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      all_items: Joi.boolean(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      discount_percentage: Joi.number(),

      max_offer_quantity: Joi.number(),

      max_discount_amount: Joi.number(),

      code: Joi.string().allow(""),

      min_offer_quantity: Joi.number(),

      discount_amount: Joi.number(),

      discount_price: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      item_criteria: CartModel.ItemCriteria().required(),

      buy_condition: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),

      discount_type: Joi.string().allow("").required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
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
      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      _schedule: CartModel.PromotionSchedule(),

      apply_all_discount: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      apply_priority: Joi.number(),

      stackable: Joi.boolean(),

      visiblility: CartModel.Visibility(),

      restrictions: CartModel.Restrictions1(),

      _custom_json: Joi.any(),

      mode: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      code: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      ownership: CartModel.Ownership1().required(),

      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      promotion_type: Joi.string().allow("").required(),
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
      _schedule: CartModel.PromotionSchedule(),

      apply_all_discount: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      apply_priority: Joi.number(),

      stackable: Joi.boolean(),

      visiblility: CartModel.Visibility(),

      restrictions: CartModel.Restrictions1(),

      _custom_json: Joi.any(),

      mode: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      code: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      ownership: CartModel.Ownership1().required(),

      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      promotion_type: Joi.string().allow("").required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      _schedule: CartModel.PromotionSchedule(),

      apply_all_discount: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      apply_priority: Joi.number(),

      stackable: Joi.boolean(),

      visiblility: CartModel.Visibility(),

      restrictions: CartModel.Restrictions1(),

      _custom_json: Joi.any(),

      mode: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      code: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      ownership: CartModel.Ownership1().required(),

      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      promotion_type: Joi.string().allow("").required(),
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

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),

      effective: Joi.number(),

      selling: Joi.number(),
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
      article_quantity: Joi.number(),

      ownership: CartModel.Ownership2(),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),
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

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
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

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      store: CartModel.BaseInfo(),

      seller: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      type: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      categories: Joi.array().items(CartModel.CategoryInfo()),

      action: CartModel.ProductAction(),

      images: Joi.array().items(CartModel.ProductImage()),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      type: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      price_per_unit: CartModel.ProductPriceInfo(),

      coupon_message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      price: CartModel.ProductPriceInfo(),

      identifiers: CartModel.CartProductIdentifer().required(),

      article: CartModel.ProductArticle(),

      message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      product: CartModel.CartProduct(),

      key: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      availability: CartModel.ProductAvailability(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      discount: Joi.number(),

      gst_charges: Joi.number(),

      total: Joi.number(),

      vog: Joi.number(),

      you_saved: Joi.number(),

      fynd_cash: Joi.number(),

      coupon: Joi.number(),

      cod_charge: Joi.number(),

      delivery_charge: Joi.number(),

      mrp_total: Joi.number(),

      convenience_fee: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),

      value: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: CartModel.LoyaltyPoints(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),

      coupon: CartModel.CouponBreakup(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),
    });
  }

  static OpenApiErrorResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      address_type: Joi.string().allow(""),

      phone: Joi.number(),

      pincode: Joi.number(),

      area: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),

      meta: Joi.any(),

      landmark: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      city: Joi.string().allow("").allow(null),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

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
      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),
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
      payment_gateway: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      payment_id: Joi.string().allow("").allow(null),

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
      primary_item: Joi.boolean(),

      group_id: Joi.string().allow(""),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      coupon_effective_discount: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      product_id: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cod_charges: Joi.number().required(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      discount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      meta: CartModel.CartItemMeta(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      amount_paid: Joi.number().required(),

      loyalty_discount: Joi.number(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      cod_charges: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      comment: Joi.string().allow("").allow(null),

      coupon: Joi.string().allow(""),

      coupon_value: Joi.number().required(),

      shipping_address: CartModel.ShippingAddress(),

      gstin: Joi.string().allow("").allow(null),

      delivery_charges: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      payment_mode: Joi.string().allow(""),

      cashback_applied: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      currency_code: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      employee_discount: Joi.any(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      billing_address: CartModel.ShippingAddress().required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow(""),

      order_ref_id: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      cod_charges: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      coupon: Joi.any().allow(null),

      meta: Joi.any().allow(null),

      gstin: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").required(),

      discount: Joi.number(),

      fynd_credits: Joi.any(),

      is_archive: Joi.boolean(),

      cart_value: Joi.number(),

      order_id: Joi.string().allow(""),

      expire_at: Joi.string().allow("").required(),

      app_id: Joi.string().allow(""),

      merge_qty: Joi.boolean().allow(null),

      last_modified: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      articles: Joi.array().items(Joi.any()).required(),

      comment: Joi.string().allow("").allow(null),

      is_active: Joi.boolean(),

      delivery_charges: Joi.any(),

      cashback: Joi.any().required(),

      payment_mode: Joi.string().allow("").allow(null),

      bulk_coupon_discount: Joi.number().allow(null),

      fc_index_map: Joi.array().items(Joi.number()),

      payments: Joi.any().allow(null),

      promotion: Joi.any(),

      payment_methods: Joi.array().items(Joi.any()),

      shipments: Joi.array().items(Joi.any()),

      uid: Joi.number().required(),

      pick_up_customer_details: Joi.any().allow(null),

      is_default: Joi.boolean().required(),

      buy_now: Joi.boolean(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.AbandonedCart()),

      message: Joi.string().allow(""),

      page: CartModel.Page(),

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
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      seller_id: Joi.number(),

      item_id: Joi.number(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_size: Joi.string().allow(""),

      display: Joi.string().allow(""),

      store_id: Joi.number(),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      pos: Joi.boolean(),

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
      success: Joi.boolean(),

      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),
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
      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }
}
module.exports = CartModel;
