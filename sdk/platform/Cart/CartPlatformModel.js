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

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
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
      auto: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      value_type: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      auto_apply: Joi.boolean(),

      scope: Joi.array().items(Joi.string().allow("")),

      calculate_on: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),

      is_display: Joi.boolean(),
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

  static CouponSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      collection_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
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
      app: Joi.number(),

      user: Joi.number(),

      total: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      maximum: CartModel.UsesRemaining(),

      remaining: CartModel.UsesRemaining(),
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

      uses: CartModel.PaymentAllowValue(),

      types: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Restrictions() {
    return Joi.object({
      platforms: Joi.array().items(Joi.string().allow("")),

      post_order: CartModel.PostOrder(),

      coupon_allowed: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      price_range: CartModel.PriceRange(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      ordering_stores: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction(),

      user_type: Joi.string().allow(""),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),
    });
  }

  static Rule() {
    return Joi.object({
      key: Joi.number(),

      min: Joi.number(),

      discount_qty: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      ownership: CartModel.Ownership().required(),

      display_meta: CartModel.DisplayMeta().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      tags: Joi.array().items(Joi.string().allow("")),

      action: CartModel.CouponAction(),

      validity: CartModel.Validity().required(),

      _schedule: CartModel.CouponSchedule(),

      identifiers: CartModel.Identifier().required(),

      type_slug: Joi.string().allow("").required(),

      date_meta: CartModel.CouponDateMeta(),

      validation: CartModel.Validation(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      restrictions: CartModel.Restrictions(),

      rule: Joi.array().items(CartModel.Rule()).required(),
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
      ownership: CartModel.Ownership().required(),

      display_meta: CartModel.DisplayMeta().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      tags: Joi.array().items(Joi.string().allow("")),

      action: CartModel.CouponAction(),

      validity: CartModel.Validity().required(),

      _schedule: CartModel.CouponSchedule(),

      identifiers: CartModel.Identifier().required(),

      type_slug: Joi.string().allow("").required(),

      date_meta: CartModel.CouponDateMeta(),

      validation: CartModel.Validation(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      restrictions: CartModel.Restrictions(),

      rule: Joi.array().items(CartModel.Rule()).required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      start: Joi.string().allow("").required(),
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

  static PostOrder1() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
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

  static Restrictions1() {
    return Joi.object({
      platforms: Joi.array().items(Joi.string().allow("")),

      post_order: CartModel.PostOrder1(),

      user_groups: Joi.array().items(Joi.number()),

      anonymous_users: Joi.boolean(),

      order_quantity: Joi.number(),

      user_registered: CartModel.UserRegistered(),

      user_id: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      offer_label: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      less_than: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than_equals: Joi.number(),

      greater_than: Joi.number(),

      equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_company: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_exclude_id: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      product_tags: Joi.array().items(Joi.string().allow("")),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      item_id: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_category: Joi.array().items(Joi.number()),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      max_offer_quantity: Joi.number(),

      discount_amount: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      min_offer_quantity: Joi.number(),

      max_discount_amount: Joi.number(),

      apportion_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      discount_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      discount_price: Joi.number(),
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

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      currency: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      apply_exclusive: Joi.string().allow("").allow(null),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      mode: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      calculate_on: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      stackable: Joi.boolean(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),

      promotion_type: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),
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
      currency: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      apply_exclusive: Joi.string().allow("").allow(null),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      mode: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      calculate_on: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      stackable: Joi.boolean(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),

      promotion_type: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      currency: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      apply_exclusive: Joi.string().allow("").allow(null),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      mode: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      calculate_on: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      stackable: Joi.boolean(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      date_meta: CartModel.PromotionDateMeta(),

      promotion_type: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),
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

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      example: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      entity_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

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

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      selling: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),
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
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
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

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: CartModel.FreeGiftItem(),

      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      ownership: CartModel.Ownership2(),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_group: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
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

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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
      store: CartModel.BaseInfo(),

      _custom_json: Joi.any(),

      seller: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      parent_item_identifiers: Joi.any(),

      type: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      extra_meta: Joi.any(),
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

  static ProductAvailability() {
    return Joi.object({
      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),
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

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      item_code: Joi.string().allow("").allow(null),

      net_quantity: CartModel.NetQuantity(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      price_per_unit: CartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      key: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      message: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      quantity: Joi.number(),

      article: CartModel.ProductArticle(),

      identifiers: CartModel.CartProductIdentifer().required(),

      is_set: Joi.boolean(),

      promo_meta: CartModel.PromoMeta(),

      availability: CartModel.ProductAvailability(),

      product: CartModel.CartProduct(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      delivery_charge: Joi.number(),

      gst_charges: Joi.number(),

      fynd_cash: Joi.number(),

      total: Joi.number(),

      cod_charge: Joi.number(),

      discount: Joi.number(),

      vog: Joi.number(),

      subtotal: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      you_saved: Joi.number(),

      mrp_total: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      message: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      type: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      value: Joi.number(),

      title: Joi.string().allow("").allow(null),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),

      value: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      coupon: CartModel.CouponBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),
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
      errors: Joi.any(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      country_iso_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      phone: Joi.number(),

      address_type: Joi.string().allow(""),

      meta: Joi.any(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      country_phone_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      address: Joi.string().allow(""),
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

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

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

      order_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

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
      primary_item: Joi.boolean(),

      group_id: Joi.string().allow(""),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      delivery_charges: Joi.number().required(),

      loyalty_discount: Joi.number(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      price_marked: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      discount: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      amount_paid: Joi.number().required(),

      quantity: Joi.number(),

      cod_charges: Joi.number().required(),

      employee_discount: Joi.number(),

      size: Joi.string().allow("").required(),

      cashback_applied: Joi.number().required(),

      product_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      extra_meta: Joi.any(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      delivery_charges: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      comment: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      affiliate_order_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      employee_discount: Joi.any(),

      cashback_applied: Joi.number().required(),

      loyalty_discount: Joi.number(),

      coupon_code: Joi.string().allow("").required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      coupon_value: Joi.number().required(),

      shipping_address: CartModel.ShippingAddress(),

      billing_address: CartModel.ShippingAddress().required(),

      coupon: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      currency_code: Joi.string().allow(""),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      order_ref_id: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      delivery_charges: Joi.any(),

      payment_methods: Joi.array().items(Joi.any()),

      cart_value: Joi.number(),

      is_archive: Joi.boolean(),

      promotion: Joi.any(),

      is_active: Joi.boolean(),

      cod_charges: Joi.any(),

      shipments: Joi.array().items(Joi.any()),

      is_default: Joi.boolean().required(),

      articles: Joi.array().items(Joi.any()).required(),

      created_on: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      discount: Joi.number(),

      expire_at: Joi.string().allow("").required(),

      pick_up_customer_details: Joi.any().allow(null),

      fynd_credits: Joi.any(),

      coupon: Joi.any().allow(null),

      last_modified: Joi.string().allow("").required(),

      order_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").allow(null),

      app_id: Joi.string().allow(""),

      cashback: Joi.any().required(),

      bulk_coupon_discount: Joi.number().allow(null),

      merge_qty: Joi.boolean().allow(null),

      meta: Joi.any().allow(null),

      uid: Joi.number().required(),

      fc_index_map: Joi.array().items(Joi.number()),

      user_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      comment: Joi.string().allow("").allow(null),

      payments: Joi.any().allow(null),

      gstin: Joi.string().allow("").allow(null),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      page: CartModel.Page(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      result: Joi.any(),

      success: Joi.boolean(),
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

      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      pan_config: Joi.any(),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      store_id: Joi.number(),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      pos: Joi.boolean(),

      article_assignment: Joi.any(),

      article_id: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      extra_meta: Joi.any(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),

      new_cart: Joi.boolean(),
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
      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      extra_meta: Joi.any(),
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
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      source: Joi.any(),

      token: Joi.string().allow(""),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      cart_value: Joi.number(),

      item_counts: Joi.number(),

      pick_up_customer_details: Joi.any(),

      user_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static MultiCartResponse() {
    return Joi.object({
      success: Joi.boolean(),

      data: Joi.array().items(CartModel.CartList()),
    });
  }

  static UpdateUserCartMapping() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),
    });
  }

  static UserInfo() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      pan_no: Joi.string().allow(""),

      user: CartModel.UserInfo(),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      pan_config: Joi.any(),
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

      total_item_count: Joi.number(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      message: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),

      coupon_value: Joi.number(),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),
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
      is_default_address: Joi.boolean(),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow(""),

      is_active: Joi.boolean(),

      landmark: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      email: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      phone: Joi.string().allow(""),

      id: Joi.string().allow(""),

      meta: Joi.any(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      google_map_point: Joi.any(),

      user_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      country_code: Joi.string().allow(""),
    });
  }

  static PlatformGetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(CartModel.PlatformAddress()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_updated: Joi.boolean(),

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),
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
      billing_address_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      shipments: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      promise: CartModel.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      shipment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      dp_id: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      error: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),
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

      pick_up_customer_details: Joi.any(),

      comment: Joi.string().allow(""),

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

  static Files() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
    });
  }

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),

      device_id: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      pick_at_store_uid: Joi.number().allow(null),

      files: Joi.array().items(CartModel.Files()),

      checkout_mode: Joi.string().allow(""),

      staff: CartModel.StaffCheckout(),

      ordering_store: Joi.number().allow(null),

      billing_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      pos: Joi.boolean(),

      id: Joi.string().allow("").required(),

      meta: Joi.any(),

      order_type: Joi.string().allow("").required(),

      delivery_address: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      delivery_charges: Joi.number(),

      cod_charges: Joi.number(),

      success: Joi.boolean(),

      is_valid: Joi.boolean(),

      store_code: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      cod_message: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      user_type: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      cod_available: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      data: Joi.any(),

      callback_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),
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
      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      id: Joi.number(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      uid: Joi.number(),

      pincode: Joi.number(),

      address: Joi.string().allow(""),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.PickupStoreDetail()),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),
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
