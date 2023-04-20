const Joi = require("joi");

class CartModel {
  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string().allow("").allow(null),

      app_id: Joi.array().items(Joi.string().allow("")),

      anonymous: Joi.boolean(),
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

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      is_exact: Joi.boolean(),

      value_type: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      applicable_on: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),
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

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      uses: CartModel.PaymentAllowValue(),

      codes: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),
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

  static Restrictions() {
    return Joi.object({
      user_groups: Joi.array().items(Joi.number()),

      price_range: CartModel.PriceRange(),

      platforms: Joi.array().items(Joi.string().allow("")),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      coupon_allowed: Joi.boolean(),

      post_order: CartModel.PostOrder(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      uses: CartModel.UsesRestriction(),

      ordering_stores: Joi.array().items(Joi.number()),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
    });
  }

  static Identifier() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      collection_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
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

      remove: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),
    });
  }

  static Rule() {
    return Joi.object({
      key: Joi.number(),

      discount_qty: Joi.number(),

      value: Joi.number(),

      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      validation: CartModel.Validation(),

      tags: Joi.array().items(Joi.string().allow("")),

      type_slug: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      state: CartModel.State(),

      date_meta: CartModel.CouponDateMeta(),

      rule_definition: CartModel.RuleDefinition().required(),

      _schedule: CartModel.CouponSchedule(),

      restrictions: CartModel.Restrictions(),

      action: CartModel.CouponAction(),

      identifiers: CartModel.Identifier().required(),

      validity: CartModel.Validity().required(),

      author: CartModel.CouponAuthor(),

      code: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),
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
      validation: CartModel.Validation(),

      tags: Joi.array().items(Joi.string().allow("")),

      type_slug: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      state: CartModel.State(),

      date_meta: CartModel.CouponDateMeta(),

      rule_definition: CartModel.RuleDefinition().required(),

      _schedule: CartModel.CouponSchedule(),

      restrictions: CartModel.Restrictions(),

      action: CartModel.CouponAction(),

      identifiers: CartModel.Identifier().required(),

      validity: CartModel.Validity().required(),

      author: CartModel.CouponAuthor(),

      code: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than_equals: Joi.number(),

      greater_than: Joi.number(),

      equals: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_category: Joi.array().items(Joi.number()),

      item_l1_category: Joi.array().items(Joi.number()),

      item_tags: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_department: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      cart_total: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_brand: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_l2_category: Joi.array().items(Joi.number()),

      item_exclude_l2_category: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_l1_category: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_department: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),

      offer_label: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      published: Joi.boolean().required(),

      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),
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

  static PostOrder1() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
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
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").allow(null),
    });
  }

  static Restrictions1() {
    return Joi.object({
      user_groups: Joi.array().items(Joi.number()),

      anonymous_users: Joi.boolean(),

      order_quantity: Joi.number(),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      post_order: CartModel.PostOrder1(),

      uses: CartModel.UsesRestriction1().required(),

      user_registered: CartModel.UserRegistered(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      max_discount_amount: Joi.number(),

      discount_percentage: Joi.number(),

      discount_price: Joi.number(),

      min_offer_quantity: Joi.number(),

      apportion_discount: Joi.boolean(),

      max_offer_quantity: Joi.number(),

      partial_can_ret: Joi.boolean(),

      discount_amount: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      code: Joi.string().allow(""),
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

  static PromotionListItem() {
    return Joi.object({
      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      apply_all_discount: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),

      post_order_action: CartModel.PromotionAction(),

      apply_priority: Joi.number(),

      promo_group: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      currency: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      application_id: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      promotion_type: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      code: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      restrictions: CartModel.Restrictions1(),

      mode: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),
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
      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      apply_all_discount: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),

      post_order_action: CartModel.PromotionAction(),

      apply_priority: Joi.number(),

      promo_group: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      currency: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      application_id: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      promotion_type: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      code: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      restrictions: CartModel.Restrictions1(),

      mode: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      apply_all_discount: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),

      post_order_action: CartModel.PromotionAction(),

      apply_priority: Joi.number(),

      promo_group: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      currency: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      application_id: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      promotion_type: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      code: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      restrictions: CartModel.Restrictions1(),

      mode: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),
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
      entity_slug: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      title: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      example: Joi.string().allow(""),
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

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      uid: Joi.number(),

      type: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      brand: CartModel.BaseInfo(),

      action: CartModel.ProductAction(),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      selling: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),
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

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: CartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),

      offer: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_group: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      article_quantity: Joi.number(),
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

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),
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

      parent_item_identifiers: Joi.any(),

      type: Joi.string().allow(""),

      size: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      store: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: CartModel.BaseInfo(),

      quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      coupon_message: Joi.string().allow(""),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      parent_item_identifiers: Joi.any(),

      product: CartModel.CartProduct(),

      price: CartModel.ProductPriceInfo(),

      availability: CartModel.ProductAvailability(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      promo_meta: CartModel.PromoMeta(),

      message: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      is_set: Joi.boolean(),

      price_per_unit: CartModel.ProductPriceInfo(),

      quantity: Joi.number(),

      article: CartModel.ProductArticle(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      total: Joi.number(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      you_saved: Joi.number(),

      convenience_fee: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      gst_charges: Joi.number(),

      coupon: Joi.number(),

      fynd_cash: Joi.number(),

      discount: Joi.number(),

      subtotal: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      code: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      errors: Joi.any(),

      success: Joi.boolean(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      area: Joi.string().allow(""),

      address: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      meta: Joi.any(),

      phone: Joi.number(),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      country: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),
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

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

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
      order_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: CartModel.MultiTenderPaymentMeta(),

      name: Joi.string().allow(""),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),
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
      files: Joi.array().items(CartModel.OpenApiFiles()),

      product_id: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      employee_discount: Joi.number(),

      price_marked: Joi.number().required(),

      size: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      extra_meta: Joi.any(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cod_charges: Joi.number().required(),

      discount: Joi.number().required(),

      loyalty_discount: Joi.number(),

      delivery_charges: Joi.number().required(),

      quantity: Joi.number(),

      meta: CartModel.CartItemMeta(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),

      employee_discount: Joi.any(),

      currency_code: Joi.string().allow(""),

      coupon: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      billing_address: CartModel.ShippingAddress().required(),

      shipping_address: CartModel.ShippingAddress(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      coupon_value: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      payment_mode: Joi.string().allow(""),

      cashback_applied: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      loyalty_discount: Joi.number(),

      cart_value: Joi.number().required(),

      delivery_charges: Joi.number().required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      order_ref_id: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }
}
module.exports = CartModel;
