const Joi = require("joi");

class CartModel {
  static Rule() {
    return Joi.object({
      value: Joi.number(),

      max: Joi.number(),

      min: Joi.number(),

      discount_qty: Joi.number(),

      key: Joi.number(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      calculate_on: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      auto_apply: Joi.boolean(),

      applicable_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),
    });
  }

  static Identifier() {
    return Joi.object({
      collection_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      email_domain: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      article_id: Joi.array().items(Joi.string().allow("")),
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

  static DisplayMetaDict() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      apply: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),
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

      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),
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
      app: Joi.number(),

      user: Joi.number(),

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
      networks: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
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
      post_order: CartModel.PostOrder(),

      platforms: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction(),

      coupon_allowed: Joi.boolean(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      ordering_stores: Joi.array().items(Joi.number()),

      user_type: Joi.string().allow(""),

      user_groups: Joi.array().items(Joi.number()),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      price_range: CartModel.PriceRange(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      type_slug: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validity: CartModel.Validity().required(),

      _schedule: CartModel.CouponSchedule(),

      rule_definition: CartModel.RuleDefinition().required(),

      identifiers: CartModel.Identifier().required(),

      date_meta: CartModel.CouponDateMeta(),

      ownership: CartModel.Ownership().required(),

      display_meta: CartModel.DisplayMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      action: CartModel.CouponAction(),

      validation: CartModel.Validation(),

      author: CartModel.CouponAuthor(),

      state: CartModel.State(),

      restrictions: CartModel.Restrictions(),

      code: Joi.string().allow("").required(),
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
      type_slug: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validity: CartModel.Validity().required(),

      _schedule: CartModel.CouponSchedule(),

      rule_definition: CartModel.RuleDefinition().required(),

      identifiers: CartModel.Identifier().required(),

      date_meta: CartModel.CouponDateMeta(),

      ownership: CartModel.Ownership().required(),

      display_meta: CartModel.DisplayMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      action: CartModel.CouponAction(),

      validation: CartModel.Validation(),

      author: CartModel.CouponAuthor(),

      state: CartModel.State(),

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

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      published: Joi.boolean().required(),

      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
    });
  }

  static CompareObject() {
    return Joi.object({
      equals: Joi.number(),

      less_than: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_brand: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_company: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_sku: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      available_zones: Joi.array().items(Joi.string().allow("")),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      max_offer_quantity: Joi.number(),

      discount_percentage: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      discount_amount: Joi.number(),

      min_offer_quantity: Joi.number(),

      apportion_discount: Joi.boolean(),

      partial_can_ret: Joi.boolean(),

      max_discount_amount: Joi.number(),

      discount_price: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),

      discount_type: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),
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
      uses: CartModel.PaymentAllowValue1(),

      codes: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),
    });
  }

  static Restrictions1() {
    return Joi.object({
      user_registered: CartModel.UserRegistered(),

      order_quantity: Joi.number(),

      post_order: CartModel.PostOrder1(),

      platforms: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_groups: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      anonymous_users: Joi.boolean(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      post_order_action: CartModel.PromotionAction(),

      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      ownership: CartModel.Ownership1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      calculate_on: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      promo_group: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      stackable: Joi.boolean(),

      author: CartModel.PromotionAuthor(),

      visiblility: CartModel.Visibility(),

      mode: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      restrictions: CartModel.Restrictions1(),

      _custom_json: Joi.any(),

      code: Joi.string().allow(""),
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
      post_order_action: CartModel.PromotionAction(),

      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      ownership: CartModel.Ownership1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      calculate_on: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      promo_group: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      stackable: Joi.boolean(),

      author: CartModel.PromotionAuthor(),

      visiblility: CartModel.Visibility(),

      mode: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      restrictions: CartModel.Restrictions1(),

      _custom_json: Joi.any(),

      code: Joi.string().allow(""),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      post_order_action: CartModel.PromotionAction(),

      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      ownership: CartModel.Ownership1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      calculate_on: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      promo_group: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      stackable: Joi.boolean(),

      author: CartModel.PromotionAuthor(),

      visiblility: CartModel.Visibility(),

      mode: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      restrictions: CartModel.Restrictions1(),

      _custom_json: Joi.any(),

      code: Joi.string().allow(""),
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

      type: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      example: Joi.string().allow(""),
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

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
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

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CartProduct() {
    return Joi.object({
      uid: Joi.number(),

      item_code: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(CartModel.ProductImage()),

      action: CartModel.ProductAction(),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      teaser_tag: CartModel.Tags(),

      name: Joi.string().allow(""),

      _custom_json: Joi.any(),

      brand: CartModel.BaseInfo(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),
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
      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),

      offer: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      selling: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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
      seller: CartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      gift_card: Joi.any(),

      cart_item_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      extra_meta: Joi.any(),

      store: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      is_gift_visible: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      size: Joi.string().allow(""),

      identifier: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static CouponDetails() {
    return Joi.object({
      discount_single_quantity: Joi.number(),

      discount_total_quantity: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      promo_meta: CartModel.PromoMeta(),

      identifiers: CartModel.CartProductIdentifer().required(),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      is_set: Joi.boolean(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      price: CartModel.ProductPriceInfo(),

      article: CartModel.ProductArticle(),

      coupon: CartModel.CouponDetails(),

      parent_item_identifiers: Joi.any(),

      bulk_offer: Joi.any(),

      availability: CartModel.ProductAvailability(),

      price_per_unit: CartModel.ProductPriceInfo(),

      quantity: Joi.number(),

      key: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      gift_card: Joi.number(),

      you_saved: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),

      mrp_total: Joi.number(),

      subtotal: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      uid: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      value: Joi.number(),

      max_discount_value: Joi.number(),

      type: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      code: Joi.string().allow(""),
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
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: CartModel.RawBreakup(),

      coupon: CartModel.CouponBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      area: Joi.string().allow(""),

      meta: Joi.any(),

      country: Joi.string().allow("").allow(null),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      phone: Joi.number(),

      email: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

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
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static PromiseTimestamp() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
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

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      order_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),
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

  static OpenApiFiles() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      coupon_effective_discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      loyalty_discount: Joi.number(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      amount_paid: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      extra_meta: Joi.any(),

      cashback_applied: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      employee_discount: Joi.number(),

      product_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      quantity: Joi.number(),

      files: Joi.array().items(CartModel.OpenApiFiles()),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      billing_address: CartModel.ShippingAddress().required(),

      affiliate_order_id: Joi.string().allow(""),

      cashback_applied: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      coupon_value: Joi.number().required(),

      employee_discount: Joi.any(),

      gstin: Joi.string().allow("").allow(null),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      loyalty_discount: Joi.number(),

      order_id: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      payment_mode: Joi.string().allow(""),

      shipping_address: CartModel.ShippingAddress(),

      comment: Joi.string().allow("").allow(null),

      coupon: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

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

  static AbandonedCart() {
    return Joi.object({
      uid: Joi.number().required(),

      pick_up_customer_details: Joi.any().allow(null),

      promotion: Joi.any(),

      fc_index_map: Joi.array().items(Joi.number()),

      user_id: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow(""),

      is_archive: Joi.boolean(),

      articles: Joi.array().items(Joi.any()).required(),

      fynd_credits: Joi.any(),

      payment_methods: Joi.array().items(Joi.any()),

      cart_value: Joi.number(),

      order_id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      is_default: Joi.boolean().required(),

      payments: Joi.any().allow(null),

      is_active: Joi.boolean(),

      created_on: Joi.string().allow("").required(),

      last_modified: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      shipments: Joi.array().items(Joi.any()),

      bulk_coupon_discount: Joi.number().allow(null),

      cashback: Joi.any().required(),

      gstin: Joi.string().allow("").allow(null),

      meta: Joi.any().allow(null),

      discount: Joi.number(),

      delivery_charges: Joi.any(),

      app_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").allow(null),

      comment: Joi.string().allow("").allow(null),

      coupon: Joi.any().allow(null),

      expire_at: Joi.string().allow("").required(),

      merge_qty: Joi.boolean().allow(null),

      cod_charges: Joi.any(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.AbandonedCart()),

      message: Joi.string().allow(""),

      page: CartModel.Page(),

      success: Joi.boolean(),

      result: Joi.any(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),

      pos: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      extra_meta: Joi.any(),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),
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
      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),

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
      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      pan_config: Joi.any(),

      buy_now: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      pan_no: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),

      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      identifiers: CartModel.CartProductIdentifer().required(),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),
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
      token: Joi.string().allow(""),

      meta: Joi.any(),

      user: Joi.any(),

      source: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      uid: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),
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

      pick_up_customer_details: Joi.any(),

      cart_value: Joi.number(),

      cart_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

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
      uid: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      pan_config: Joi.any(),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      user: CartModel.UserInfo(),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),
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
      sub_title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      expires_on: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      is_applicable: Joi.boolean(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),
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
      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static PlatformAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      address: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      google_map_point: Joi.any(),

      created_by_user_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      email: Joi.string().allow(""),

      id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      cart_id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      meta: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),
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
      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      fulfillment_id: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shipments: Joi.number(),

      promise: CartModel.ShipmentPromise(),

      dp_id: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      error: Joi.boolean(),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      quantity: Joi.number(),

      shipment_type: Joi.string().allow("").required(),

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
      gstin: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      pan_no: Joi.string().allow(""),

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

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
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
      billing_address: Joi.any(),

      pick_at_store_uid: Joi.number().allow(null),

      aggregator: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      checkout_mode: Joi.string().allow(""),

      pos: Joi.boolean(),

      billing_address_id: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      id: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      extra_meta: Joi.any(),

      employee_code: Joi.string().allow("").allow(null),

      staff: CartModel.StaffCheckout(),

      order_type: Joi.string().allow("").required(),

      ordering_store: Joi.number().allow(null),

      device_id: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow("").required(),

      address_id: Joi.string().allow(""),

      delivery_address: Joi.any(),

      files: Joi.array().items(CartModel.Files()),
    });
  }

  static CheckCart() {
    return Joi.object({
      uid: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      success: Joi.boolean(),

      user_type: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      cod_available: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      coupon_text: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      cart_id: Joi.number(),

      error_message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cod_message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      comment: Joi.string().allow(""),

      cod_charges: Joi.number(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      data: Joi.any(),

      cart: CartModel.CheckCart(),

      success: Joi.boolean(),

      payment_confirm_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),
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
      landmark: Joi.string().allow(""),

      uid: Joi.number(),

      id: Joi.number(),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

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
      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      discount: Joi.number(),

      valid: Joi.boolean(),

      display_message_en: Joi.string().allow("").allow(null),

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
