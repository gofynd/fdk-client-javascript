const Joi = require("joi");

class CartModel {
  static Page() {
    return Joi.object({
      item_total: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow("").required(),

      current: Joi.number(),

      next_id: Joi.string().allow(""),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),
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

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      article_id: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      user_registered_after: Joi.string().allow("").allow(null),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static Rule() {
    return Joi.object({
      value: Joi.number(),

      discount_qty: Joi.number(),

      min: Joi.number(),

      key: Joi.number(),

      max: Joi.number(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),

      is_display: Joi.boolean(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      scope: Joi.array().items(Joi.string().allow("")),

      applicable_on: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      calculate_on: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      is_exact: Joi.boolean(),
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
      total: Joi.number(),

      app: Joi.number(),

      user: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      remaining: CartModel.UsesRemaining(),

      maximum: CartModel.UsesRemaining(),
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

  static Restrictions() {
    return Joi.object({
      coupon_allowed: Joi.boolean(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      ordering_stores: Joi.array().items(Joi.number()),

      user_groups: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction(),

      post_order: CartModel.PostOrder(),

      price_range: CartModel.PriceRange(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      display_meta: CartModel.DisplayMeta().required(),

      identifiers: CartModel.Identifier().required(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      tags: Joi.array().items(Joi.string().allow("")),

      date_meta: CartModel.CouponDateMeta(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      ownership: CartModel.Ownership().required(),

      type_slug: Joi.string().allow("").required(),

      state: CartModel.State(),

      author: CartModel.CouponAuthor(),

      _schedule: CartModel.CouponSchedule(),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),

      restrictions: CartModel.Restrictions(),

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
      display_meta: CartModel.DisplayMeta().required(),

      identifiers: CartModel.Identifier().required(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      tags: Joi.array().items(Joi.string().allow("")),

      date_meta: CartModel.CouponDateMeta(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      ownership: CartModel.Ownership().required(),

      type_slug: Joi.string().allow("").required(),

      state: CartModel.State(),

      author: CartModel.CouponAuthor(),

      _schedule: CartModel.CouponSchedule(),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),

      restrictions: CartModel.Restrictions(),

      code: Joi.string().allow("").required(),
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

      less_than_equals: Joi.number(),

      less_than: Joi.number(),

      greater_than_equals: Joi.number(),

      greater_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_size: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_tags: Joi.array().items(Joi.string().allow("")),

      item_company: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_l1_category: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_l1_category: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_department: Joi.array().items(Joi.number()),

      item_l2_category: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_exclude_l2_category: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_department: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_brand: Joi.array().items(Joi.number()),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      max_offer_quantity: Joi.number(),

      partial_can_ret: Joi.boolean(),

      max_discount_amount: Joi.number(),

      code: Joi.string().allow(""),

      discount_price: Joi.number(),

      min_offer_quantity: Joi.number(),

      apportion_discount: Joi.boolean(),

      discount_amount: Joi.number(),

      discount_percentage: Joi.number(),

      max_usage_per_transaction: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),

      offer: CartModel.DiscountOffer().required(),

      discount_type: Joi.string().allow("").required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      offer_label: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
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

  static PromotionAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
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
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
    });
  }

  static Restrictions1() {
    return Joi.object({
      anonymous_users: Joi.boolean(),

      user_registered: CartModel.UserRegistered(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      order_quantity: Joi.number(),

      user_id: Joi.array().items(Joi.string().allow("")),

      user_groups: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction1().required(),

      post_order: CartModel.PostOrder1(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      code: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      post_order_action: CartModel.PromotionAction(),

      apply_priority: Joi.number(),

      apply_all_discount: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),

      promotion_type: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      calculate_on: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),
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
      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      code: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      post_order_action: CartModel.PromotionAction(),

      apply_priority: Joi.number(),

      apply_all_discount: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),

      promotion_type: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      calculate_on: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      code: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      post_order_action: CartModel.PromotionAction(),

      apply_priority: Joi.number(),

      apply_all_discount: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),

      promotion_type: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      calculate_on: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),
    });
  }

  static PromotionPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.PromotionSchedule(),
    });
  }

  static ActivePromosResponse() {
    return Joi.object({
      example: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      entity_slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
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

  static FreeGiftItem() {
    return Joi.object({
      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: CartModel.FreeGiftItem(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),

      offer: Joi.any(),

      raw_offer: Joi.any(),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      amount: Joi.number(),

      promotion_group: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      offer_text: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      add_on: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
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

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
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
      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      type: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      name: Joi.string().allow(""),
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
      base: CartModel.BasePrice(),

      converted: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      extra_meta: Joi.any(),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: CartModel.BaseInfo(),

      size: Joi.string().allow(""),

      type: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      store: CartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      identifiers: CartModel.CartProductIdentifer().required(),

      price_per_unit: CartModel.ProductPriceInfo(),

      product: CartModel.CartProduct(),

      quantity: Joi.number(),

      key: Joi.string().allow(""),

      is_set: Joi.boolean(),

      message: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      article: CartModel.ProductArticle(),

      coupon_message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      promo_meta: CartModel.PromoMeta(),

      discount: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      vog: Joi.number(),

      you_saved: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      subtotal: Joi.number(),

      gst_charges: Joi.number(),

      mrp_total: Joi.number(),

      discount: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      total: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: CartModel.RawBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      loyalty_points: CartModel.LoyaltyPoints(),

      coupon: CartModel.CouponBreakup(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static OpenApiErrorResponse() {
    return Joi.object({
      success: Joi.boolean(),

      errors: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      city: Joi.string().allow("").allow(null),

      area_code_slug: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      meta: Joi.any(),

      address: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),

      phone: Joi.number(),

      name: Joi.string().allow(""),
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
      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      extra_meta: Joi.any().allow(null),

      order_id: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: CartModel.MultiTenderPaymentMeta(),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow(""),
    });
  }

  static OpenApiFiles() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
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
      size: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      product_id: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      meta: CartModel.CartItemMeta(),

      employee_discount: Joi.number(),

      price_marked: Joi.number().required(),

      loyalty_discount: Joi.number(),

      discount: Joi.number().required(),

      amount_paid: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      coupon: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      employee_discount: Joi.any(),

      loyalty_discount: Joi.number(),

      cod_charges: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      coupon_value: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      billing_address: CartModel.ShippingAddress().required(),

      shipping_address: CartModel.ShippingAddress(),

      delivery_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      order_ref_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),
    });
  }
}
module.exports = CartModel;
