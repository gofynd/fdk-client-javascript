const Joi = require("joi");

class CartModel {
  static Rule() {
    return Joi.object({
      min: Joi.number(),

      value: Joi.number(),

      max: Joi.number(),

      discount_qty: Joi.number(),

      key: Joi.number(),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),
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
      subtitle: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
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
      is_exact: Joi.boolean(),

      applicable_on: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      scope: Joi.array().items(Joi.string().allow("")),

      calculate_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),
    });
  }

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
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
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
    });
  }

  static UsesRemaining() {
    return Joi.object({
      user: Joi.number(),

      app: Joi.number(),

      total: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      remaining: CartModel.UsesRemaining(),

      maximum: CartModel.UsesRemaining(),
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

      types: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),
    });
  }

  static Restrictions() {
    return Joi.object({
      price_range: CartModel.PriceRange(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      coupon_allowed: Joi.boolean(),

      post_order: CartModel.PostOrder(),

      ordering_stores: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      user_groups: Joi.array().items(Joi.number()),
    });
  }

  static Identifier() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAdd() {
    return Joi.object({
      rule: Joi.array().items(CartModel.Rule()).required(),

      validation: CartModel.Validation(),

      code: Joi.string().allow("").required(),

      _schedule: CartModel.CouponSchedule(),

      validity: CartModel.Validity().required(),

      type_slug: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta().required(),

      author: CartModel.CouponAuthor(),

      date_meta: CartModel.CouponDateMeta(),

      ownership: CartModel.Ownership().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      action: CartModel.CouponAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      restrictions: CartModel.Restrictions(),

      identifiers: CartModel.Identifier().required(),
    });
  }

  static Page() {
    return Joi.object({
      next_id: Joi.string().allow(""),

      item_total: Joi.number(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),
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

      validation: CartModel.Validation(),

      code: Joi.string().allow("").required(),

      _schedule: CartModel.CouponSchedule(),

      validity: CartModel.Validity().required(),

      type_slug: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta().required(),

      author: CartModel.CouponAuthor(),

      date_meta: CartModel.CouponDateMeta(),

      ownership: CartModel.Ownership().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      action: CartModel.CouponAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      restrictions: CartModel.Restrictions(),

      identifiers: CartModel.Identifier().required(),
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
      duration: Joi.number().allow(null),

      start: Joi.string().allow("").required(),

      published: Joi.boolean().required(),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      max_offer_quantity: Joi.number(),

      min_offer_quantity: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      code: Joi.string().allow(""),

      discount_price: Joi.number(),

      max_discount_amount: Joi.number(),

      discount_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      apportion_discount: Joi.boolean(),

      discount_amount: Joi.number(),
    });
  }

  static CompareObject() {
    return Joi.object({
      greater_than: Joi.number(),

      less_than: Joi.number(),

      less_than_equals: Joi.number(),

      equals: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_l1_category: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_l2_category: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_exclude_l1_category: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      cart_unique_item_quantity: CartModel.CompareObject(),

      all_items: Joi.boolean(),

      item_brand: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      cart_quantity: CartModel.CompareObject(),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_exclude_department: Joi.array().items(Joi.number()),

      item_tags: Joi.array().items(Joi.string().allow("")),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_department: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_l2_category: Joi.array().items(Joi.number()),
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

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      offer_label: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
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
      start: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),
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
      remaining: CartModel.UsesRemaining1(),

      maximum: CartModel.UsesRemaining1(),
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
      user_id: Joi.array().items(Joi.string().allow("")),

      post_order: CartModel.PostOrder1(),

      user_registered: CartModel.UserRegistered(),

      anonymous_users: Joi.boolean(),

      order_quantity: Joi.number(),

      platforms: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_groups: Joi.array().items(Joi.number()),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      _schedule: CartModel.PromotionSchedule(),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      author: CartModel.PromotionAuthor(),

      date_meta: CartModel.PromotionDateMeta(),

      mode: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      currency: Joi.string().allow(""),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      apply_priority: Joi.number(),

      promotion_type: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      restrictions: CartModel.Restrictions1(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      ownership: CartModel.Ownership1().required(),
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

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      author: CartModel.PromotionAuthor(),

      date_meta: CartModel.PromotionDateMeta(),

      mode: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      currency: Joi.string().allow(""),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      apply_priority: Joi.number(),

      promotion_type: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      restrictions: CartModel.Restrictions1(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      ownership: CartModel.Ownership1().required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      _schedule: CartModel.PromotionSchedule(),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      author: CartModel.PromotionAuthor(),

      date_meta: CartModel.PromotionDateMeta(),

      mode: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      currency: Joi.string().allow(""),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      apply_priority: Joi.number(),

      promotion_type: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      restrictions: CartModel.Restrictions1(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      ownership: CartModel.Ownership1().required(),
    });
  }

  static PromotionPartialUpdate() {
    return Joi.object({
      schedule: CartModel.PromotionSchedule(),

      archive: Joi.boolean(),
    });
  }

  static ActivePromosResponse() {
    return Joi.object({
      is_hidden: Joi.boolean(),

      example: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      type: Joi.string().allow(""),

      title: Joi.string().allow(""),
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

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      add_on: Joi.number(),

      marked: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      action: CartModel.ProductAction(),

      type: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      item_criteria: Joi.any(),

      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),

      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),
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
      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_group: Joi.string().allow(""),

      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),
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
      seller: CartModel.BaseInfo(),

      store: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      type: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      price: CartModel.ProductPriceInfo(),

      price_per_unit: CartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      message: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      discount: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      coupon_message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      article: CartModel.ProductArticle(),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      promo_meta: CartModel.PromoMeta(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      total: Joi.number(),

      applicable: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      mrp_total: Joi.number(),

      you_saved: Joi.number(),

      vog: Joi.number(),

      discount: Joi.number(),

      fynd_cash: Joi.number(),

      total: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charge: Joi.number(),

      gst_charges: Joi.number(),

      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      coupon: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      value: Joi.number(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      type: Joi.string().allow(""),
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
      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
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
      phone: Joi.number(),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      state: Joi.string().allow("").allow(null),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),
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
      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      order_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

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
      product_id: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cod_charges: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_effective: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      meta: CartModel.CartItemMeta(),

      size: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      price_marked: Joi.number().required(),

      delivery_charges: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      cart_value: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      coupon_value: Joi.number().required(),

      order_id: Joi.string().allow(""),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      loyalty_discount: Joi.number(),

      payment_mode: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      cashback_applied: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      billing_address: CartModel.ShippingAddress().required(),

      employee_discount: Joi.any(),

      coupon_code: Joi.string().allow("").required(),

      shipping_address: CartModel.ShippingAddress(),

      currency_code: Joi.string().allow(""),

      coupon: Joi.string().allow(""),
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
