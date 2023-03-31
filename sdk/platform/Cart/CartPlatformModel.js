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
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
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
      auto_apply: Joi.boolean(),

      type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      value_type: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      scope: Joi.array().items(Joi.string().allow("")),
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
      auto: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
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

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
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

  static Identifier() {
    return Joi.object({
      store_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),
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

      types: Joi.array().items(Joi.string().allow("")),

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

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
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
      remaining: CartModel.UsesRemaining(),

      maximum: CartModel.UsesRemaining(),
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
      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      price_range: CartModel.PriceRange(),

      platforms: Joi.array().items(Joi.string().allow("")),

      coupon_allowed: Joi.boolean(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      user_type: Joi.string().allow(""),

      uses: CartModel.UsesRestriction(),

      user_groups: Joi.array().items(Joi.number()),

      post_order: CartModel.PostOrder(),

      ordering_stores: Joi.array().items(Joi.number()),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      anonymous: Joi.boolean(),

      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  static CouponAdd() {
    return Joi.object({
      type_slug: Joi.string().allow("").required(),

      date_meta: CartModel.CouponDateMeta(),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),

      author: CartModel.CouponAuthor(),

      display_meta: CartModel.DisplayMeta().required(),

      ownership: CartModel.Ownership().required(),

      validity: CartModel.Validity().required(),

      code: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      _schedule: CartModel.CouponSchedule(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      identifiers: CartModel.Identifier().required(),

      restrictions: CartModel.Restrictions(),

      state: CartModel.State(),

      validation: CartModel.Validation(),
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
      type_slug: Joi.string().allow("").required(),

      date_meta: CartModel.CouponDateMeta(),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),

      author: CartModel.CouponAuthor(),

      display_meta: CartModel.DisplayMeta().required(),

      ownership: CartModel.Ownership().required(),

      validity: CartModel.Validity().required(),

      code: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      _schedule: CartModel.CouponSchedule(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      identifiers: CartModel.Identifier().required(),

      restrictions: CartModel.Restrictions(),

      state: CartModel.State(),

      validation: CartModel.Validation(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: CartModel.CouponSchedule(),

      archive: Joi.boolean(),
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

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
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
      less_than: Joi.number(),

      equals: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than_equals: Joi.number(),

      greater_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      cart_total: CartModel.CompareObject(),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_brand: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_company: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      all_items: Joi.boolean(),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_store: Joi.array().items(Joi.number()),

      product_tags: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      discount_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      discount_price: Joi.number(),

      code: Joi.string().allow(""),

      max_usage_per_transaction: Joi.number(),

      apportion_discount: Joi.boolean(),

      min_offer_quantity: Joi.number(),

      max_discount_amount: Joi.number(),
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

  static DisplayMeta1() {
    return Joi.object({
      offer_label: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      published: Joi.boolean().required(),

      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
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

      order_quantity: Joi.number(),

      platforms: Joi.array().items(Joi.string().allow("")),

      anonymous_users: Joi.boolean(),

      user_id: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      user_registered: CartModel.UserRegistered(),

      user_groups: Joi.array().items(Joi.number()),

      post_order: CartModel.PostOrder1(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      visiblility: CartModel.Visibility(),

      apply_priority: Joi.number(),

      author: CartModel.PromotionAuthor(),

      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      mode: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      currency: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      apply_all_discount: Joi.boolean(),

      stackable: Joi.boolean(),

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
      visiblility: CartModel.Visibility(),

      apply_priority: Joi.number(),

      author: CartModel.PromotionAuthor(),

      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      mode: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      currency: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      apply_all_discount: Joi.boolean(),

      stackable: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      visiblility: CartModel.Visibility(),

      apply_priority: Joi.number(),

      author: CartModel.PromotionAuthor(),

      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      mode: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      currency: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      apply_all_discount: Joi.boolean(),

      stackable: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),
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
      entity_slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      created_on: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      example: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      selling: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static Ownership2() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_group: Joi.string().allow(""),

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      ownership: CartModel.Ownership2(),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),
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

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      action: CartModel.ProductAction(),

      type: Joi.string().allow(""),

      item_code: Joi.string().allow("").allow(null),

      brand: CartModel.BaseInfo(),

      images: Joi.array().items(CartModel.ProductImage()),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      uid: Joi.number(),

      net_quantity: CartModel.NetQuantity(),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
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
      base: CartModel.BasePrice(),

      converted: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      quantity: Joi.number(),

      price: CartModel.ArticlePriceInfo(),

      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      quantity: Joi.number(),

      price: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      key: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      product: CartModel.CartProduct(),

      article: CartModel.ProductArticle(),

      bulk_offer: Joi.any(),

      discount: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      identifiers: CartModel.CartProductIdentifer().required(),

      availability: CartModel.ProductAvailability(),

      message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      you_saved: Joi.number(),

      convenience_fee: Joi.number(),

      coupon: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charge: Joi.number(),

      mrp_total: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      discount: Joi.number(),

      fynd_cash: Joi.number(),

      subtotal: Joi.number(),

      total: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      total: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.number(),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),
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

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static OpenApiErrorResponse() {
    return Joi.object({
      errors: Joi.any(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      area: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      country_phone_code: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      phone: Joi.number(),

      country: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),

      meta: Joi.any(),

      state: Joi.string().allow("").allow(null),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),
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
      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),
    });
  }

  static OpenApiFiles() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      payment_gateway: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      meta: CartModel.MultiTenderPaymentMeta(),

      name: Joi.string().allow(""),

      amount: Joi.number().required(),
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
      quantity: Joi.number(),

      cod_charges: Joi.number().required(),

      amount_paid: Joi.number().required(),

      loyalty_discount: Joi.number(),

      extra_meta: Joi.any(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      meta: CartModel.CartItemMeta(),

      discount: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      price_marked: Joi.number().required(),

      employee_discount: Joi.number(),

      product_id: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      size: Joi.string().allow("").required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      billing_address: CartModel.ShippingAddress().required(),

      coupon: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      coupon_value: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      employee_discount: Joi.any(),

      shipping_address: CartModel.ShippingAddress(),

      cart_value: Joi.number().required(),

      cod_charges: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cashback_applied: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      delivery_charges: Joi.number().required(),

      payment_mode: Joi.string().allow(""),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow(""),

      order_ref_id: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      promotion: Joi.any(),

      payments: Joi.any().allow(null),

      is_active: Joi.boolean(),

      bulk_coupon_discount: Joi.number().allow(null),

      user_id: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").allow(null),

      meta: Joi.any().allow(null),

      discount: Joi.number(),

      pick_up_customer_details: Joi.any().allow(null),

      expire_at: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(Joi.any()),

      fc_index_map: Joi.array().items(Joi.number()),

      last_modified: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").required(),

      is_archive: Joi.boolean(),

      coupon: Joi.any().allow(null),

      app_id: Joi.string().allow(""),

      fynd_credits: Joi.any(),

      merge_qty: Joi.boolean().allow(null),

      uid: Joi.number().required(),

      is_default: Joi.boolean().required(),

      buy_now: Joi.boolean(),

      _id: Joi.string().allow("").required(),

      cart_value: Joi.number(),

      cod_charges: Joi.any(),

      articles: Joi.array().items(Joi.any()).required(),

      comment: Joi.string().allow("").allow(null),

      payment_methods: Joi.array().items(Joi.any()),

      delivery_charges: Joi.any(),

      cashback: Joi.any().required(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      success: Joi.boolean(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      result: Joi.any(),

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

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      pan_no: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      pan_config: Joi.any(),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      last_modified: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      pos: Joi.boolean(),

      store_id: Joi.number(),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),

      article_assignment: Joi.any(),

      seller_id: Joi.number(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      new_cart: Joi.boolean(),

      items: Joi.array().items(CartModel.AddProductCart()),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      _custom_json: Joi.any(),

      item_size: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

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
      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static GetShareCartLinkRequest() {
    return Joi.object({
      meta: Joi.any(),

      id: Joi.string().allow(""),
    });
  }

  static GetShareCartLinkResponse() {
    return Joi.object({
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),

      meta: Joi.any(),

      user: Joi.any(),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shared_cart_details: CartModel.SharedCartDetails(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      message: Joi.string().allow(""),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      cart: CartModel.SharedCart(),
    });
  }

  static CartList() {
    return Joi.object({
      cart_value: Joi.number(),

      item_counts: Joi.number(),

      created_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      cart_id: Joi.string().allow(""),
    });
  }

  static MultiCartResponse() {
    return Joi.object({
      data: Joi.array().items(CartModel.CartList()),

      success: Joi.boolean(),
    });
  }

  static UpdateUserCartMapping() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),
    });
  }

  static UserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      pan_config: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      user: CartModel.UserInfo(),

      buy_now: Joi.boolean(),

      pan_no: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),
    });
  }

  static DeleteCartRequest() {
    return Joi.object({
      cart_id_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  static DeleteCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      minimum_cart_value: Joi.number(),

      title: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),
    });
  }

  static GetCouponResponse() {
    return Joi.object({
      page: CartModel.PageCoupon(),

      available_coupon_list: Joi.array().items(CartModel.Coupon()),
    });
  }

  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),
    });
  }

  static GeoLocation() {
    return Joi.object({
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static PlatformAddress() {
    return Joi.object({
      area: Joi.string().allow(""),

      is_active: Joi.boolean(),

      user_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      geo_location: CartModel.GeoLocation(),

      google_map_point: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      email: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      name: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static PlatformGetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(CartModel.PlatformAddress()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),

      is_updated: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static DeleteAddressResponse() {
    return Joi.object({
      is_deleted: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static PlatformSelectCartAddressRequest() {
    return Joi.object({
      cart_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      order_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      dp_options: Joi.any().allow(null),

      fulfillment_id: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      error: Joi.boolean(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      shipment_type: Joi.string().allow("").required(),

      quantity: Joi.number(),

      article_uid: Joi.string().allow("").required(),
    });
  }

  static UpdateCartShipmentRequest() {
    return Joi.object({
      shipments: Joi.array()
        .items(CartModel.UpdateCartShipmentItem())
        .required(),
    });
  }

  static PlatformCartMetaRequest() {
    return Joi.object({
      pan_no: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),
    });
  }

  static CartMetaResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static CartMetaMissingResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Files() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
    });
  }

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      order_type: Joi.string().allow("").required(),

      billing_address: Joi.any(),

      delivery_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").required(),

      meta: Joi.any(),

      files: Joi.array().items(CartModel.Files()),

      callback_url: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      billing_address_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      employee_code: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      extra_meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      pos: Joi.boolean(),

      aggregator: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      address_id: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      staff: CartModel.StaffCheckout(),

      pick_at_store_uid: Joi.number().allow(null),

      device_id: Joi.string().allow("").allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      delivery_charges: Joi.number(),

      last_modified: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      store_code: Joi.string().allow(""),

      cod_charges: Joi.number(),

      cod_available: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      store_emps: Joi.array().items(Joi.any()),

      cart_id: Joi.number(),

      message: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      data: Joi.any(),

      order_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      app_intercept_url: Joi.string().allow(""),
    });
  }

  static CartDeliveryModesResponse() {
    return Joi.object({
      available_modes: Joi.array().items(Joi.string().allow("")),

      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      store_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      id: Joi.number(),

      address: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      uid: Joi.number(),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.PickupStoreDetail()),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      message: Joi.string().allow(""),

      coupon_validity: CartModel.CouponValidity(),

      success: Joi.boolean().required(),
    });
  }
}
module.exports = CartModel;
