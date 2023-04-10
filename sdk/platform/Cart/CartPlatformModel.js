const Joi = require("joi");

class CartModel {
  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),

      is_display: Joi.boolean(),
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

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static PostOrder() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static Restrictions() {
    return Joi.object({
      platforms: Joi.array().items(Joi.string().allow("")),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      uses: CartModel.UsesRestriction(),

      price_range: CartModel.PriceRange(),

      post_order: CartModel.PostOrder(),

      user_groups: Joi.array().items(Joi.number()),

      user_type: Joi.string().allow(""),

      coupon_allowed: Joi.boolean(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      ordering_stores: Joi.array().items(Joi.number()),
    });
  }

  static Rule() {
    return Joi.object({
      max: Joi.number(),

      key: Joi.number(),

      min: Joi.number(),

      discount_qty: Joi.number(),

      value: Joi.number(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      applicable_on: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      is_exact: Joi.boolean(),

      calculate_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      scope: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),
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
      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
    });
  }

  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
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

      apply: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      user_id: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),

      email_domain: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAdd() {
    return Joi.object({
      state: CartModel.State(),

      restrictions: CartModel.Restrictions(),

      code: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validity: CartModel.Validity().required(),

      type_slug: Joi.string().allow("").required(),

      rule_definition: CartModel.RuleDefinition().required(),

      date_meta: CartModel.CouponDateMeta(),

      tags: Joi.array().items(Joi.string().allow("")),

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      action: CartModel.CouponAction(),

      validation: CartModel.Validation(),

      author: CartModel.CouponAuthor(),

      display_meta: CartModel.DisplayMeta().required(),

      identifiers: CartModel.Identifier().required(),
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
      state: CartModel.State(),

      restrictions: CartModel.Restrictions(),

      code: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validity: CartModel.Validity().required(),

      type_slug: Joi.string().allow("").required(),

      rule_definition: CartModel.RuleDefinition().required(),

      date_meta: CartModel.CouponDateMeta(),

      tags: Joi.array().items(Joi.string().allow("")),

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      action: CartModel.CouponAction(),

      validation: CartModel.Validation(),

      author: CartModel.CouponAuthor(),

      display_meta: CartModel.DisplayMeta().required(),

      identifiers: CartModel.Identifier().required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: CartModel.CouponSchedule(),

      archive: Joi.boolean(),
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
      name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
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
      uses: CartModel.PaymentAllowValue1(),

      codes: Joi.array().items(Joi.string().allow("")),

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
      maximum: CartModel.UsesRemaining1(),

      remaining: CartModel.UsesRemaining1(),
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
      user_registered: CartModel.UserRegistered(),

      user_id: Joi.array().items(Joi.string().allow("")),

      platforms: Joi.array().items(Joi.string().allow("")),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      order_quantity: Joi.number(),

      uses: CartModel.UsesRestriction1().required(),

      post_order: CartModel.PostOrder1(),

      user_groups: Joi.array().items(Joi.number()),

      anonymous_users: Joi.boolean(),
    });
  }

  static CompareObject() {
    return Joi.object({
      equals: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than: Joi.number(),

      less_than: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_size: Joi.array().items(Joi.string().allow("")),

      cart_total: CartModel.CompareObject(),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      all_items: Joi.boolean(),

      item_brand: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      available_zones: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      code: Joi.string().allow(""),

      max_usage_per_transaction: Joi.number(),

      partial_can_ret: Joi.boolean(),

      max_discount_amount: Joi.number(),

      discount_percentage: Joi.number(),

      min_offer_quantity: Joi.number(),

      apportion_discount: Joi.boolean(),

      max_offer_quantity: Joi.number(),

      discount_price: Joi.number(),

      discount_amount: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      discount_type: Joi.string().allow("").required(),

      buy_condition: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),

      offer: CartModel.DiscountOffer().required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      published: Joi.boolean().required(),

      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
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

  static PromotionListItem() {
    return Joi.object({
      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      apply_exclusive: Joi.string().allow("").allow(null),

      application_id: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      ownership: CartModel.Ownership1().required(),

      mode: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),

      stackable: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

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
      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      apply_exclusive: Joi.string().allow("").allow(null),

      application_id: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      ownership: CartModel.Ownership1().required(),

      mode: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),

      stackable: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      apply_exclusive: Joi.string().allow("").allow(null),

      application_id: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      ownership: CartModel.Ownership1().required(),

      mode: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),

      stackable: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),
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
      created_on: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      example: Joi.string().allow(""),

      type: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static CartItem() {
    return Joi.object({
      product_id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      quantity: Joi.number(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: CartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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
      promotion_type: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promo_id: Joi.string().allow(""),
    });
  }

  static CouponDetails() {
    return Joi.object({
      code: Joi.string().allow(""),

      discount_total_quantity: Joi.number(),

      discount_single_quantity: Joi.number(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
    });
  }

  static Tags() {
    return Joi.object({
      tags: Joi.any(),
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
      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(CartModel.ProductImage()),

      teaser_tag: CartModel.Tags(),

      _custom_json: Joi.any(),

      item_code: Joi.string().allow("").allow(null),

      action: CartModel.ProductAction(),

      type: Joi.string().allow(""),
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
      marked: Joi.number(),

      effective: Joi.number(),

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
      parent_item_identifiers: Joi.any(),

      identifier: Joi.any(),

      cart_item_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      gift_card: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      is_gift_visible: Joi.boolean(),

      size: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      seller: CartModel.BaseInfo(),

      type: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      quantity: Joi.number(),

      coupon: CartModel.CouponDetails(),

      availability: CartModel.ProductAvailability(),

      price_per_unit: CartModel.ProductPriceInfo(),

      key: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      product: CartModel.CartProduct(),

      message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      promo_meta: CartModel.PromoMeta(),

      price: CartModel.ProductPriceInfo(),

      identifiers: CartModel.CartProductIdentifer().required(),

      coupon_message: Joi.string().allow(""),

      article: CartModel.ProductArticle(),
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

  static RawBreakup() {
    return Joi.object({
      total: Joi.number(),

      coupon: Joi.number(),

      gift_card: Joi.number(),

      mrp_total: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      gst_charges: Joi.number(),

      cod_charge: Joi.number(),

      subtotal: Joi.number(),

      vog: Joi.number(),

      you_saved: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_cash: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      value: Joi.number(),

      type: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),
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
      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static OpenApiErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      errors: Joi.any(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      state: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      meta: Joi.any(),

      landmark: Joi.string().allow(""),

      phone: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      pincode: Joi.number(),

      address_type: Joi.string().allow(""),
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
      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
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
      group_id: Joi.string().allow(""),

      primary_item: Joi.boolean(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      current_status: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      order_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),
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

  static OpenApiOrderItem() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      cod_charges: Joi.number().required(),

      quantity: Joi.number(),

      cashback_applied: Joi.number().required(),

      employee_discount: Joi.number(),

      product_id: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      extra_meta: Joi.any(),

      coupon_effective_discount: Joi.number().required(),

      discount: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      delivery_charges: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      loyalty_discount: Joi.number(),

      price_marked: Joi.number().required(),

      price_effective: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      cod_charges: Joi.number().required(),

      coupon: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      order_id: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      comment: Joi.string().allow("").allow(null),

      cashback_applied: Joi.number().required(),

      employee_discount: Joi.any(),

      cart_value: Joi.number().required(),

      billing_address: CartModel.ShippingAddress().required(),

      gstin: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      currency_code: Joi.string().allow(""),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      shipping_address: CartModel.ShippingAddress(),

      coupon_value: Joi.number().required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      order_ref_id: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      shipments: Joi.array().items(Joi.any()),

      cod_charges: Joi.any(),

      discount: Joi.number(),

      articles: Joi.array().items(Joi.any()).required(),

      is_default: Joi.boolean().required(),

      created_on: Joi.string().allow("").required(),

      bulk_coupon_discount: Joi.number().allow(null),

      uid: Joi.number().required(),

      cart_value: Joi.number(),

      meta: Joi.any().allow(null),

      fc_index_map: Joi.array().items(Joi.number()),

      buy_now: Joi.boolean(),

      pick_up_customer_details: Joi.any().allow(null),

      gstin: Joi.string().allow("").allow(null),

      is_archive: Joi.boolean(),

      payment_methods: Joi.array().items(Joi.any()),

      merge_qty: Joi.boolean().allow(null),

      _id: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      payments: Joi.any().allow(null),

      coupon: Joi.any().allow(null),

      cashback: Joi.any().required(),

      payment_mode: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow(""),

      delivery_charges: Joi.any(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      promotion: Joi.any(),

      comment: Joi.string().allow("").allow(null),

      checkout_mode: Joi.string().allow(""),

      fynd_credits: Joi.any(),

      last_modified: Joi.string().allow("").required(),

      expire_at: Joi.string().allow("").required(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.AbandonedCart()),

      result: Joi.any(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      page: CartModel.Page(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      quantity: Joi.number(),

      item_id: Joi.number(),

      pos: Joi.boolean(),

      store_id: Joi.number(),

      article_assignment: Joi.any(),

      extra_meta: Joi.any(),

      display: Joi.string().allow(""),

      seller_id: Joi.number(),

      article_id: Joi.string().allow(""),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),

      new_cart: Joi.boolean(),
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
      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      pan_config: Joi.any(),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      item_id: Joi.number(),

      extra_meta: Joi.any(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
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
      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),
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
      cart_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      cart_value: Joi.number(),

      item_counts: Joi.number(),

      pick_up_customer_details: Joi.any(),
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
      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      pan_config: Joi.any(),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      user: CartModel.UserInfo(),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      pan_no: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),
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
      total: Joi.number(),

      current: Joi.number(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      coupon_value: Joi.number(),

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
      cart_id: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      meta: Joi.any(),

      id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      geo_location: CartModel.GeoLocation(),

      is_default_address: Joi.boolean(),

      is_active: Joi.boolean(),

      area_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),
    });
  }

  static PlatformGetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(CartModel.PlatformAddress()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),

      is_updated: Joi.boolean(),
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

      user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      shipments: Joi.number(),

      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      shipment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      promise: CartModel.ShipmentPromise(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      cart_id: Joi.number(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      error: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      shipment_type: Joi.string().allow("").required(),

      article_uid: Joi.string().allow("").required(),

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

      pan_no: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

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
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
    });
  }

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      employee_code: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      files: Joi.array().items(CartModel.Files()),

      billing_address_id: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      staff: CartModel.StaffCheckout(),

      device_id: Joi.string().allow("").allow(null),

      delivery_address: Joi.any(),

      meta: Joi.any(),

      pos: Joi.boolean(),

      id: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      ordering_store: Joi.number().allow(null),

      payment_mode: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      extra_meta: Joi.any(),

      aggregator: Joi.string().allow(""),

      billing_address: Joi.any(),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      cart_id: Joi.number(),

      cod_charges: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      delivery_charge_order_value: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      cod_available: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      success: Joi.boolean(),

      order_id: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      error_message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      store_code: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      data: Joi.any(),

      success: Joi.boolean(),

      app_intercept_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

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
      state: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      id: Joi.number(),

      phone: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

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
      aggregator_name: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      valid: Joi.boolean(),

      display_message_en: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      coupon_validity: CartModel.CouponValidity(),
    });
  }
}
module.exports = CartModel;
