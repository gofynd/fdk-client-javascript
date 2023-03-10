const Joi = require("joi");

class CartModel {
  static Identifier() {
    return Joi.object({
      company_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),
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
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string().allow("").allow(null),

      app_id: Joi.array().items(Joi.string().allow("")),

      anonymous: Joi.boolean(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      value_type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      is_exact: Joi.boolean(),

      auto_apply: Joi.boolean(),

      scope: Joi.array().items(Joi.string().allow("")),

      calculate_on: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
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
      remove: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

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

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),
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
      networks: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      types: Joi.array().items(Joi.string().allow("")),
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

      total: Joi.number(),

      app: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      maximum: CartModel.UsesRemaining(),

      remaining: CartModel.UsesRemaining(),
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

      post_order: CartModel.PostOrder(),

      uses: CartModel.UsesRestriction(),

      coupon_allowed: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      ordering_stores: Joi.array().items(Joi.number()),

      price_range: CartModel.PriceRange(),

      platforms: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Rule() {
    return Joi.object({
      discount_qty: Joi.number(),

      key: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),

      min: Joi.number(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      identifiers: CartModel.Identifier().required(),

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      action: CartModel.CouponAction(),

      validation: CartModel.Validation(),

      rule_definition: CartModel.RuleDefinition().required(),

      type_slug: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta().required(),

      author: CartModel.CouponAuthor(),

      state: CartModel.State(),

      date_meta: CartModel.CouponDateMeta(),

      tags: Joi.array().items(Joi.string().allow("")),

      restrictions: CartModel.Restrictions(),

      code: Joi.string().allow("").required(),

      validity: CartModel.Validity().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),
    });
  }

  static Page() {
    return Joi.object({
      item_total: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().allow("").required(),

      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),
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

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      action: CartModel.CouponAction(),

      validation: CartModel.Validation(),

      rule_definition: CartModel.RuleDefinition().required(),

      type_slug: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta().required(),

      author: CartModel.CouponAuthor(),

      state: CartModel.State(),

      date_meta: CartModel.CouponDateMeta(),

      tags: Joi.array().items(Joi.string().allow("")),

      restrictions: CartModel.Restrictions(),

      code: Joi.string().allow("").required(),

      validity: CartModel.Validity().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
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

  static Restrictions1() {
    return Joi.object({
      user_registered: CartModel.UserRegistered(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      order_quantity: Joi.number(),

      post_order: CartModel.PostOrder1(),

      user_id: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      anonymous_users: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      start: Joi.string().allow("").required(),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),
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

      equals: Joi.number(),

      greater_than: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_brand: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_l2_category: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_l1_category: Joi.array().items(Joi.number()),

      item_department: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_l1_category: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_tags: Joi.array().items(Joi.string().allow("")),

      all_items: Joi.boolean(),

      item_l2_category: Joi.array().items(Joi.number()),

      item_exclude_department: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      cart_unique_item_quantity: CartModel.CompareObject(),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_brand: Joi.array().items(Joi.number()),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      apportion_discount: Joi.boolean(),

      discount_price: Joi.number(),

      discount_percentage: Joi.number(),

      max_discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      partial_can_ret: Joi.boolean(),

      code: Joi.string().allow(""),

      min_offer_quantity: Joi.number(),

      discount_amount: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),

      discount_type: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),

      item_criteria: CartModel.ItemCriteria().required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      offer_label: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      visiblility: CartModel.Visibility(),

      calculate_on: Joi.string().allow(""),

      restrictions: CartModel.Restrictions1(),

      mode: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      apply_priority: Joi.number(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      author: CartModel.PromotionAuthor(),

      currency: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      date_meta: CartModel.PromotionDateMeta(),

      code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      post_order_action: CartModel.PromotionAction(),
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
      visiblility: CartModel.Visibility(),

      calculate_on: Joi.string().allow(""),

      restrictions: CartModel.Restrictions1(),

      mode: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      apply_priority: Joi.number(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      author: CartModel.PromotionAuthor(),

      currency: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      date_meta: CartModel.PromotionDateMeta(),

      code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      post_order_action: CartModel.PromotionAction(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      visiblility: CartModel.Visibility(),

      calculate_on: Joi.string().allow(""),

      restrictions: CartModel.Restrictions1(),

      mode: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      apply_priority: Joi.number(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      author: CartModel.PromotionAuthor(),

      currency: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      date_meta: CartModel.PromotionDateMeta(),

      code: Joi.string().allow(""),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      post_order_action: CartModel.PromotionAction(),
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
      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      example: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      title: Joi.string().allow(""),
    });
  }

  static CartItem() {
    return Joi.object({
      quantity: Joi.number(),

      size: Joi.string().allow("").required(),

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

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

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

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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

  static CartProduct() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      brand: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),
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
      converted: CartModel.BasePrice(),

      base: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      parent_item_identifiers: Joi.any(),

      store: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      seller: CartModel.BaseInfo(),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_group: Joi.string().allow(""),

      article_quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      identifiers: CartModel.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),

      availability: CartModel.ProductAvailability(),

      price: CartModel.ProductPriceInfo(),

      coupon_message: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      message: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      article: CartModel.ProductArticle(),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      discount: Joi.string().allow(""),

      quantity: Joi.number(),

      is_set: Joi.boolean(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),
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

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      fynd_cash: Joi.number(),

      you_saved: Joi.number(),

      vog: Joi.number(),

      mrp_total: Joi.number(),

      discount: Joi.number(),

      cod_charge: Joi.number(),

      gst_charges: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      code: Joi.string().allow(""),

      value: Joi.number(),
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
      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),
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
      name: Joi.string().allow(""),

      meta: Joi.any(),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      phone: Joi.number(),

      pincode: Joi.number(),

      city: Joi.string().allow("").allow(null),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),
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

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      payment_gateway: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),
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
      group_id: Joi.string().allow(""),

      primary_item: Joi.boolean(),
    });
  }

  static OpenApiFiles() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      cashback_applied: Joi.number().required(),

      price_marked: Joi.number().required(),

      loyalty_discount: Joi.number(),

      meta: CartModel.CartItemMeta(),

      size: Joi.string().allow("").required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      employee_discount: Joi.number(),

      price_effective: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      product_id: Joi.number().required(),

      cod_charges: Joi.number().required(),

      discount: Joi.number().required(),

      quantity: Joi.number(),

      amount_paid: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      extra_meta: Joi.any(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      currency_code: Joi.string().allow(""),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      cart_value: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      shipping_address: CartModel.ShippingAddress(),

      delivery_charges: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      coupon: Joi.string().allow(""),

      cashback_applied: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      coupon_value: Joi.number().required(),

      billing_address: CartModel.ShippingAddress().required(),

      employee_discount: Joi.any(),

      order_id: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow(""),
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
