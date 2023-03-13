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

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static Rule() {
    return Joi.object({
      discount_qty: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),

      key: Joi.number(),

      min: Joi.number(),
    });
  }

  static Identifier() {
    return Joi.object({
      brand_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      collection_id: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),

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
      types: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),
    });
  }

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
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

  static Restrictions() {
    return Joi.object({
      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      user_groups: Joi.array().items(Joi.number()),

      user_type: Joi.string().allow(""),

      price_range: CartModel.PriceRange(),

      platforms: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction(),

      post_order: CartModel.PostOrder(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      coupon_allowed: Joi.boolean(),

      ordering_stores: Joi.array().items(Joi.number()),
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

      title: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      applicable_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      scope: Joi.array().items(Joi.string().allow("")),

      auto_apply: Joi.boolean(),

      value_type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      calculate_on: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static CouponAdd() {
    return Joi.object({
      state: CartModel.State(),

      ownership: CartModel.Ownership().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      identifiers: CartModel.Identifier().required(),

      action: CartModel.CouponAction(),

      validity: CartModel.Validity().required(),

      date_meta: CartModel.CouponDateMeta(),

      validation: CartModel.Validation(),

      _schedule: CartModel.CouponSchedule(),

      restrictions: CartModel.Restrictions(),

      display_meta: CartModel.DisplayMeta().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      type_slug: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

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
      state: CartModel.State(),

      ownership: CartModel.Ownership().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      identifiers: CartModel.Identifier().required(),

      action: CartModel.CouponAction(),

      validity: CartModel.Validity().required(),

      date_meta: CartModel.CouponDateMeta(),

      validation: CartModel.Validation(),

      _schedule: CartModel.CouponSchedule(),

      restrictions: CartModel.Restrictions(),

      display_meta: CartModel.DisplayMeta().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      type_slug: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      tags: Joi.array().items(Joi.string().allow("")),
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
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),

      offer_label: Joi.string().allow(""),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      apportion_discount: Joi.boolean(),

      partial_can_ret: Joi.boolean(),

      discount_percentage: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      discount_price: Joi.number(),

      max_offer_quantity: Joi.number(),

      discount_amount: Joi.number(),

      min_offer_quantity: Joi.number(),

      max_discount_amount: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than_equals: Joi.number(),

      greater_than: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than: Joi.number(),

      equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      product_tags: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_size: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_brand: Joi.array().items(Joi.number()),
    });
  }

  static DiscountRule() {
    return Joi.object({
      discount_type: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),

      buy_condition: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),
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

      type: Joi.string().allow("").required(),

      uses: CartModel.PaymentAllowValue1(),
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
      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_groups: Joi.array().items(Joi.number()),

      anonymous_users: Joi.boolean(),

      user_registered: CartModel.UserRegistered(),

      platforms: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      post_order: CartModel.PostOrder1(),

      order_quantity: Joi.number(),

      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      published: Joi.boolean().required(),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      _custom_json: Joi.any(),

      visiblility: CartModel.Visibility(),

      apply_priority: Joi.number(),

      code: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      promotion_type: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      currency: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      calculate_on: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      post_order_action: CartModel.PromotionAction(),

      mode: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_all_discount: Joi.boolean(),
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
      _custom_json: Joi.any(),

      visiblility: CartModel.Visibility(),

      apply_priority: Joi.number(),

      code: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      promotion_type: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      currency: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      calculate_on: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      post_order_action: CartModel.PromotionAction(),

      mode: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_all_discount: Joi.boolean(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      _custom_json: Joi.any(),

      visiblility: CartModel.Visibility(),

      apply_priority: Joi.number(),

      code: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      promotion_type: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      currency: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      calculate_on: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      post_order_action: CartModel.PromotionAction(),

      mode: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_all_discount: Joi.boolean(),
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
      subtitle: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      example: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CartItem() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      product_id: Joi.string().allow("").required(),

      quantity: Joi.number(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      value: Joi.number(),

      coupon_value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      type: Joi.string().allow(""),

      code: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      discount: Joi.number(),

      cod_charge: Joi.number(),

      gst_charges: Joi.number(),

      fynd_cash: Joi.number(),

      subtotal: Joi.number(),

      you_saved: Joi.number(),

      delivery_charge: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),

      mrp_total: Joi.number(),

      convenience_fee: Joi.number(),
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

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: CartModel.CouponBreakup(),

      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      display: Joi.array().items(CartModel.DisplayBreakup()),
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

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

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
      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      store: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),
    });
  }

  static Ownership2() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),
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

  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      ownership: CartModel.Ownership2(),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_group: Joi.string().allow(""),

      amount: Joi.number(),

      offer_text: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),
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

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),

      selling: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
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

  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductAction() {
    return Joi.object({
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: CartModel.ActionQuery(),
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

      net_quantity: CartModel.NetQuantity(),

      item_code: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      uid: Joi.number(),

      brand: CartModel.BaseInfo(),

      images: Joi.array().items(CartModel.ProductImage()),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      article: CartModel.ProductArticle(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      discount: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),

      is_set: Joi.boolean(),

      quantity: Joi.number(),

      availability: CartModel.ProductAvailability(),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      promo_meta: CartModel.PromoMeta(),

      price_per_unit: CartModel.ProductPriceInfo(),

      product: CartModel.CartProduct(),

      coupon_message: Joi.string().allow(""),

      message: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),
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
      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      area_code_slug: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      meta: Joi.any(),

      area_code: Joi.string().allow("").required(),

      country: Joi.string().allow("").allow(null),

      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      phone: Joi.number(),
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
      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),
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
      current_status: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

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

  static OpenApiOrderItem() {
    return Joi.object({
      cod_charges: Joi.number().required(),

      discount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      quantity: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      employee_discount: Joi.number(),

      extra_meta: Joi.any(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      price_marked: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      delivery_charges: Joi.number().required(),

      product_id: Joi.number().required(),

      loyalty_discount: Joi.number(),

      price_effective: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      cod_charges: Joi.number().required(),

      gstin: Joi.string().allow("").allow(null),

      coupon: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      cart_value: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      payment_mode: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      employee_discount: Joi.any(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      shipping_address: CartModel.ShippingAddress(),

      coupon_value: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      order_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      billing_address: CartModel.ShippingAddress().required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      order_ref_id: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      cod_charges: Joi.any(),

      discount: Joi.number(),

      _id: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      fc_index_map: Joi.array().items(Joi.number()),

      expire_at: Joi.string().allow("").required(),

      shipments: Joi.array().items(Joi.any()),

      coupon: Joi.any().allow(null),

      is_default: Joi.boolean().required(),

      uid: Joi.number().required(),

      buy_now: Joi.boolean(),

      fynd_credits: Joi.any(),

      cashback: Joi.any().required(),

      payment_methods: Joi.array().items(Joi.any()),

      last_modified: Joi.string().allow("").required(),

      articles: Joi.array().items(Joi.any()).required(),

      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any().allow(null),

      payments: Joi.any().allow(null),

      created_on: Joi.string().allow("").required(),

      merge_qty: Joi.boolean().allow(null),

      gstin: Joi.string().allow("").allow(null),

      promotion: Joi.any(),

      app_id: Joi.string().allow(""),

      cart_value: Joi.number(),

      is_archive: Joi.boolean(),

      comment: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow("").allow(null),

      bulk_coupon_discount: Joi.number().allow(null),

      order_id: Joi.string().allow(""),

      delivery_charges: Joi.any(),

      user_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      result: Joi.any(),

      success: Joi.boolean(),

      page: CartModel.Page(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      message: Joi.string().allow(""),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
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
      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      pos: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      store_id: Joi.number(),

      item_id: Joi.number(),
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
      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      partial: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      identifiers: CartModel.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      item_id: Joi.number(),
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

  static GetShareCartLinkRequest() {
    return Joi.object({
      meta: Joi.any(),

      id: Joi.string().allow(""),
    });
  }

  static GetShareCartLinkResponse() {
    return Joi.object({
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      currency: CartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      cart: CartModel.SharedCart(),

      error: Joi.string().allow(""),
    });
  }

  static CartList() {
    return Joi.object({
      item_counts: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      cart_value: Joi.string().allow(""),
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
      last_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      user: CartModel.UserInfo(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static DeleteCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      current: Joi.number(),

      has_next: Joi.boolean(),

      total: Joi.number(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      is_applicable: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      coupon_value: Joi.number(),

      title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      meta: Joi.any(),

      country: Joi.string().allow(""),

      google_map_point: Joi.any(),

      landmark: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      country_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      email: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      is_active: Joi.boolean(),
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

      is_updated: Joi.boolean(),

      id: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static DeleteAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      is_deleted: Joi.boolean(),
    });
  }

  static PlatformSelectCartAddressRequest() {
    return Joi.object({
      cart_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),

      shipments: Joi.number(),

      order_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      fulfillment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      shipment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      cart_id: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      error: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      article_uid: Joi.string().allow("").required(),

      shipment_type: Joi.string().allow("").required(),

      quantity: Joi.number(),
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
      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
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

  static StaffCheckout() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static Files() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      delivery_address: Joi.any(),

      pick_at_store_uid: Joi.number().allow(null),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      staff: CartModel.StaffCheckout(),

      id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pos: Joi.boolean(),

      payment_auto_confirm: Joi.boolean(),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      files: Joi.array().items(CartModel.Files()),

      order_type: Joi.string().allow("").required(),

      ordering_store: Joi.number().allow(null),

      callback_url: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").required(),

      billing_address: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      cod_charges: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      success: Joi.boolean(),

      error_message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      currency: CartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_charge_order_value: Joi.number(),

      coupon_text: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      order_id: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charges: Joi.number(),

      restrict_checkout: Joi.boolean(),

      cod_available: Joi.boolean(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      app_intercept_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      payment_confirm_url: Joi.string().allow(""),
    });
  }

  static CartDeliveryModesResponse() {
    return Joi.object({
      pickup_stores: Joi.array().items(Joi.number()),

      available_modes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      uid: Joi.number(),

      phone: Joi.string().allow(""),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      id: Joi.number(),

      store_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.PickupStoreDetail()),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      success: Joi.boolean().required(),

      coupon_validity: CartModel.CouponValidity(),

      message: Joi.string().allow(""),
    });
  }
}
module.exports = CartModel;
