const Joi = require("joi");

class CartModel {
  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),

      is_display: Joi.boolean(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),
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

  static UsesRemaining() {
    return Joi.object({
      user: Joi.number(),

      app: Joi.number(),

      total: Joi.number(),
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

  static Restrictions() {
    return Joi.object({
      user_groups: Joi.array().items(Joi.number()),

      ordering_stores: Joi.array().items(Joi.number()),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      price_range: CartModel.PriceRange(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      coupon_allowed: Joi.boolean(),

      platforms: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction(),

      post_order: CartModel.PostOrder(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
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

      store_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),
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
      calculate_on: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      type: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      is_exact: Joi.boolean(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static Rule() {
    return Joi.object({
      key: Joi.number(),

      value: Joi.number(),

      max: Joi.number(),

      discount_qty: Joi.number(),

      min: Joi.number(),
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
      remove: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      validation: CartModel.Validation(),

      code: Joi.string().allow("").required(),

      state: CartModel.State(),

      _schedule: CartModel.CouponSchedule(),

      restrictions: CartModel.Restrictions(),

      author: CartModel.CouponAuthor(),

      action: CartModel.CouponAction(),

      identifiers: CartModel.Identifier().required(),

      date_meta: CartModel.CouponDateMeta(),

      rule_definition: CartModel.RuleDefinition().required(),

      ownership: CartModel.Ownership().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      type_slug: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta().required(),

      validity: CartModel.Validity().required(),
    });
  }

  static Page() {
    return Joi.object({
      has_previous: Joi.boolean(),

      size: Joi.number(),

      type: Joi.string().allow("").required(),

      has_next: Joi.boolean(),

      next_id: Joi.string().allow(""),

      item_total: Joi.number(),

      current: Joi.number(),
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
      tags: Joi.array().items(Joi.string().allow("")),

      validation: CartModel.Validation(),

      code: Joi.string().allow("").required(),

      state: CartModel.State(),

      _schedule: CartModel.CouponSchedule(),

      restrictions: CartModel.Restrictions(),

      author: CartModel.CouponAuthor(),

      action: CartModel.CouponAction(),

      identifiers: CartModel.Identifier().required(),

      date_meta: CartModel.CouponDateMeta(),

      rule_definition: CartModel.RuleDefinition().required(),

      ownership: CartModel.Ownership().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      type_slug: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta().required(),

      validity: CartModel.Validity().required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),

      offer_label: Joi.string().allow(""),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than: Joi.number(),

      equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_company: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      cart_total: CartModel.CompareObject(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_exclude_department: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_l2_category: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_department: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_exclude_l1_category: Joi.array().items(Joi.number()),

      item_tags: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_category: Joi.array().items(Joi.number()),

      item_l1_category: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_exclude_l2_category: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      duration: Joi.number().allow(null),

      published: Joi.boolean().required(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      code: Joi.string().allow(""),

      partial_can_ret: Joi.boolean(),

      discount_amount: Joi.number(),

      discount_price: Joi.number(),

      min_offer_quantity: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      max_discount_amount: Joi.number(),

      apportion_discount: Joi.boolean(),

      discount_percentage: Joi.number(),

      max_offer_quantity: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      discount_type: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),

      item_criteria: CartModel.ItemCriteria().required(),

      buy_condition: Joi.string().allow("").required(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
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

  static UserRegistered() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").allow(null),
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

  static PostOrder1() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static Restrictions1() {
    return Joi.object({
      user_groups: Joi.array().items(Joi.number()),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_registered: CartModel.UserRegistered(),

      platforms: Joi.array().items(Joi.string().allow("")),

      order_quantity: Joi.number(),

      user_id: Joi.array().items(Joi.string().allow("")),

      anonymous_users: Joi.boolean(),

      uses: CartModel.UsesRestriction1().required(),

      post_order: CartModel.PostOrder1(),
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
      code: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      author: CartModel.PromotionAuthor(),

      visiblility: CartModel.Visibility(),

      post_order_action: CartModel.PromotionAction(),

      promo_group: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      apply_priority: Joi.number(),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      stackable: Joi.boolean(),
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
      code: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      author: CartModel.PromotionAuthor(),

      visiblility: CartModel.Visibility(),

      post_order_action: CartModel.PromotionAction(),

      promo_group: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      apply_priority: Joi.number(),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      stackable: Joi.boolean(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      code: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      author: CartModel.PromotionAuthor(),

      visiblility: CartModel.Visibility(),

      post_order_action: CartModel.PromotionAction(),

      promo_group: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      apply_priority: Joi.number(),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      stackable: Joi.boolean(),
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

      created_on: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
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

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

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
      store: CartModel.BaseInfo(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      extra_meta: Joi.any(),

      type: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: CartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),
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

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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

  static CartProduct() {
    return Joi.object({
      slug: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      uid: Joi.number(),

      brand: CartModel.BaseInfo(),

      name: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      type: Joi.string().allow(""),

      action: CartModel.ProductAction(),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),
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

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promotion_type: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      amount: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      article: CartModel.ProductArticle(),

      availability: CartModel.ProductAvailability(),

      bulk_offer: Joi.any(),

      coupon_message: Joi.string().allow(""),

      key: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      is_set: Joi.boolean(),

      price_per_unit: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      parent_item_identifiers: Joi.any(),

      product: CartModel.CartProduct(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      quantity: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      mrp_total: Joi.number(),

      vog: Joi.number(),

      subtotal: Joi.number(),

      you_saved: Joi.number(),

      cod_charge: Joi.number(),

      total: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_cash: Joi.number(),

      discount: Joi.number(),

      coupon: Joi.number(),

      gst_charges: Joi.number(),

      convenience_fee: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      value: Joi.number(),

      type: Joi.string().allow(""),

      is_applied: Joi.boolean(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      total: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),
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
      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),
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
      area: Joi.string().allow(""),

      meta: Joi.any(),

      area_code: Joi.string().allow("").required(),

      phone: Joi.number(),

      state: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),
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
      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

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
      payment_gateway: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

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

  static CartItemMeta() {
    return Joi.object({
      group_id: Joi.string().allow(""),

      primary_item: Joi.boolean(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      cod_charges: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      loyalty_discount: Joi.number(),

      product_id: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      employee_discount: Joi.number(),

      meta: CartModel.CartItemMeta(),

      size: Joi.string().allow("").required(),

      extra_meta: Joi.any(),

      cashback_applied: Joi.number().required(),

      discount: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      amount_paid: Joi.number().required(),

      quantity: Joi.number(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      files: Joi.array().items(CartModel.OpenApiFiles()),

      cod_charges: Joi.number().required(),

      shipping_address: CartModel.ShippingAddress(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.any(),

      coupon_code: Joi.string().allow("").required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      cart_value: Joi.number().required(),

      coupon: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      coupon_value: Joi.number().required(),

      order_id: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),

      billing_address: CartModel.ShippingAddress().required(),

      cashback_applied: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),
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
}
module.exports = CartModel;
