const Joi = require("joi");

class CartModel {
  static CouponSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static Rule() {
    return Joi.object({
      value: Joi.number(),

      min: Joi.number(),

      max: Joi.number(),

      discount_qty: Joi.number(),

      key: Joi.number(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
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
      maximum: CartModel.UsesRemaining(),

      remaining: CartModel.UsesRemaining(),
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

  static Restrictions() {
    return Joi.object({
      uses: CartModel.UsesRestriction(),

      post_order: CartModel.PostOrder(),

      price_range: CartModel.PriceRange(),

      ordering_stores: Joi.array().items(Joi.number()),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_type: Joi.string().allow(""),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      coupon_allowed: Joi.boolean(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),
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
      applicable_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      calculate_on: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      is_exact: Joi.boolean(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
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
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      title: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      article_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      email_domain: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      collection_id: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAdd() {
    return Joi.object({
      _schedule: CartModel.CouponSchedule(),

      code: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      date_meta: CartModel.CouponDateMeta(),

      restrictions: CartModel.Restrictions(),

      state: CartModel.State(),

      validation: CartModel.Validation(),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      author: CartModel.CouponAuthor(),

      display_meta: CartModel.DisplayMeta().required(),

      identifiers: CartModel.Identifier().required(),

      type_slug: Joi.string().allow("").required(),
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
      _schedule: CartModel.CouponSchedule(),

      code: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      date_meta: CartModel.CouponDateMeta(),

      restrictions: CartModel.Restrictions(),

      state: CartModel.State(),

      validation: CartModel.Validation(),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      author: CartModel.CouponAuthor(),

      display_meta: CartModel.DisplayMeta().required(),

      identifiers: CartModel.Identifier().required(),

      type_slug: Joi.string().allow("").required(),
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

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

      type: Joi.string().allow("").required(),

      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Restrictions1() {
    return Joi.object({
      uses: CartModel.UsesRestriction1().required(),

      post_order: CartModel.PostOrder1(),

      user_registered: CartModel.UserRegistered(),

      order_quantity: Joi.number(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      anonymous_users: Joi.boolean(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      max_offer_quantity: Joi.number(),

      code: Joi.string().allow(""),

      min_offer_quantity: Joi.number(),

      partial_can_ret: Joi.boolean(),

      max_discount_amount: Joi.number(),

      discount_price: Joi.number(),

      apportion_discount: Joi.boolean(),

      discount_amount: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      discount_percentage: Joi.number(),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than_equals: Joi.number(),

      equals: Joi.number(),

      greater_than: Joi.number(),

      less_than: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_store: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      cart_total: CartModel.CompareObject(),

      available_zones: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_company: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),

      item_criteria: CartModel.ItemCriteria().required(),

      discount_type: Joi.string().allow("").required(),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      published: Joi.boolean().required(),

      duration: Joi.number().allow(null),

      start: Joi.string().allow("").required(),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),
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
      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      display_meta: CartModel.DisplayMeta1().required(),

      restrictions: CartModel.Restrictions1(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      promo_group: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      currency: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      code: Joi.string().allow(""),

      apply_all_discount: Joi.boolean(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      mode: Joi.string().allow("").required(),

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
      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      display_meta: CartModel.DisplayMeta1().required(),

      restrictions: CartModel.Restrictions1(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      promo_group: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      currency: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      code: Joi.string().allow(""),

      apply_all_discount: Joi.boolean(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      mode: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      display_meta: CartModel.DisplayMeta1().required(),

      restrictions: CartModel.Restrictions1(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      promo_group: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      currency: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      code: Joi.string().allow(""),

      apply_all_discount: Joi.boolean(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      mode: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),
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

      title: Joi.string().allow(""),

      example: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),
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

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      sub_title: Joi.string().allow("").allow(null),

      value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      you_saved: Joi.number(),

      mrp_total: Joi.number(),

      gift_card: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      cod_charge: Joi.number(),

      discount: Joi.number(),

      coupon: Joi.number(),

      total: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      delivery_charge: Joi.number(),

      gst_charges: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: CartModel.LoyaltyPoints(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),

      raw: CartModel.RawBreakup(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

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

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      gift_card: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      is_gift_visible: Joi.boolean(),

      store: CartModel.BaseInfo(),

      cart_item_meta: Joi.any(),

      type: Joi.string().allow(""),

      size: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      identifier: Joi.any(),

      quantity: Joi.number(),
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

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),

      marked: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),

      item_criteria: Joi.any(),

      raw_offer: Joi.any(),
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
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),
    });
  }

  static CouponDetails() {
    return Joi.object({
      discount_single_quantity: Joi.number(),

      discount_total_quantity: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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

      type: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      name: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      item_code: Joi.string().allow("").allow(null),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      teaser_tag: CartModel.Tags(),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      action: CartModel.ProductAction(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      article: CartModel.ProductArticle(),

      coupon_message: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      price: CartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      availability: CartModel.ProductAvailability(),

      discount: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      coupon: CartModel.CouponDetails(),

      key: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      price_per_unit: CartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      identifiers: CartModel.CartProductIdentifer().required(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

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
      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      area_code: Joi.string().allow("").required(),

      phone: Joi.number(),

      country: Joi.string().allow("").allow(null),

      area_code_slug: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),
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
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      max: Joi.string().allow(""),

      min: Joi.string().allow(""),
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

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      extra_meta: Joi.any().allow(null),

      payment_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      name: Joi.string().allow(""),

      meta: CartModel.MultiTenderPaymentMeta(),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),
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

  static OpenApiOrderItem() {
    return Joi.object({
      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cashback_applied: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      meta: CartModel.CartItemMeta(),

      extra_meta: Joi.any(),

      product_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      discount: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      quantity: Joi.number(),

      amount_paid: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      coupon_value: Joi.number().required(),

      cart_value: Joi.number().required(),

      billing_address: CartModel.ShippingAddress().required(),

      order_id: Joi.string().allow(""),

      shipping_address: CartModel.ShippingAddress(),

      affiliate_order_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      comment: Joi.string().allow("").allow(null),

      employee_discount: Joi.any(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      gstin: Joi.string().allow("").allow(null),

      currency_code: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),

      coupon: Joi.string().allow(""),

      cashback_applied: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      order_ref_id: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      expire_at: Joi.string().allow("").required(),

      promotion: Joi.any(),

      fynd_credits: Joi.any(),

      pick_up_customer_details: Joi.any().allow(null),

      order_id: Joi.string().allow(""),

      is_archive: Joi.boolean(),

      payment_methods: Joi.array().items(Joi.any()),

      cashback: Joi.any().required(),

      payment_mode: Joi.string().allow("").allow(null),

      fc_index_map: Joi.array().items(Joi.number()),

      payments: Joi.any().allow(null),

      last_modified: Joi.string().allow("").required(),

      cart_value: Joi.number(),

      uid: Joi.number().required(),

      buy_now: Joi.boolean(),

      discount: Joi.number(),

      app_id: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      comment: Joi.string().allow("").allow(null),

      is_default: Joi.boolean().required(),

      checkout_mode: Joi.string().allow(""),

      is_active: Joi.boolean(),

      gstin: Joi.string().allow("").allow(null),

      bulk_coupon_discount: Joi.number().allow(null),

      created_on: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      cod_charges: Joi.any(),

      articles: Joi.array().items(Joi.any()).required(),

      shipments: Joi.array().items(Joi.any()),

      delivery_charges: Joi.any(),

      coupon: Joi.any().allow(null),

      user_id: Joi.string().allow("").required(),

      merge_qty: Joi.boolean().allow(null),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      page: CartModel.Page(),

      result: Joi.any(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.AbandonedCart()),
    });
  }

  static AddProductCart() {
    return Joi.object({
      store_id: Joi.number(),

      pos: Joi.boolean(),

      article_id: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      display: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),

      new_cart: Joi.boolean(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
    });
  }

  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),

      symbol: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      currency: CartModel.CartCurrency(),

      pan_config: Joi.any(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      item_index: Joi.number(),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static GetShareCartLinkRequest() {
    return Joi.object({
      id: Joi.string().allow(""),

      meta: Joi.any(),
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
      source: Joi.any(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),

      token: Joi.string().allow(""),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      currency: CartModel.CartCurrency(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),
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
      item_counts: Joi.number(),

      created_on: Joi.string().allow(""),

      cart_value: Joi.number(),

      pick_up_customer_details: Joi.any(),

      cart_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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
      gender: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      pan_config: Joi.any(),

      delivery_charge_info: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      user: CartModel.UserInfo(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),
    });
  }

  static DeleteCartRequest() {
    return Joi.object({
      cart_id_list: Joi.array().items(Joi.string().allow("")),
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

  static Coupon() {
    return Joi.object({
      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      coupon_code: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),

      total: Joi.number(),

      current: Joi.number(),
    });
  }

  static GetCouponResponse() {
    return Joi.object({
      available_coupon_list: Joi.array().items(CartModel.Coupon()),

      page: CartModel.PageCoupon(),
    });
  }

  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),
    });
  }

  static GeoLocation() {
    return Joi.object({
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static PlatformAddress() {
    return Joi.object({
      address: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      country_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area: Joi.string().allow(""),

      google_map_point: Joi.any(),

      area_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      country: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      state: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      city: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      landmark: Joi.string().allow(""),
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

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

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
      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      shipment_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      fulfillment_id: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      error: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      currency: CartModel.CartCurrency(),
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
      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
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

      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      billing_address: Joi.any(),

      order_type: Joi.string().allow("").required(),

      delivery_address: Joi.any(),

      files: Joi.array().items(CartModel.Files()),

      device_id: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      pos: Joi.boolean(),

      callback_url: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),

      checkout_mode: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      extra_meta: Joi.any(),

      meta: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      employee_code: Joi.string().allow("").allow(null),

      staff: CartModel.StaffCheckout(),

      billing_address_id: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      pick_at_store_uid: Joi.number().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      error_message: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      cod_available: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      cod_charges: Joi.number(),

      delivery_charges: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charge_order_value: Joi.number(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      data: Joi.any(),

      cart: CartModel.CheckCart(),

      callback_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      uid: Joi.number(),

      store_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      id: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),
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

      payment_mode: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      valid: Joi.boolean(),

      display_message_en: Joi.string().allow("").allow(null),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),

      coupon_validity: CartModel.CouponValidity(),
    });
  }
}
module.exports = CartModel;
