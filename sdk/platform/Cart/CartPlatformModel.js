const Joi = require("joi");

class CartModel {
  static RuleDefinition() {
    return Joi.object({
      is_exact: Joi.boolean(),

      auto_apply: Joi.boolean(),

      currency_code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Identifier() {
    return Joi.object({
      user_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      email_domain: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
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

      uses: CartModel.PaymentAllowValue(),

      networks: Joi.array().items(Joi.string().allow("")),
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

  static PostOrder() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
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

  static Restrictions() {
    return Joi.object({
      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      price_range: CartModel.PriceRange(),

      user_type: Joi.string().allow(""),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      post_order: CartModel.PostOrder(),

      coupon_allowed: Joi.boolean(),

      uses: CartModel.UsesRestriction(),

      ordering_stores: Joi.array().items(Joi.number()),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  static Rule() {
    return Joi.object({
      min: Joi.number(),

      key: Joi.number(),

      value: Joi.number(),

      discount_qty: Joi.number(),

      max: Joi.number(),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),

      is_public: Joi.boolean(),
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

      remove: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),
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

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static CouponAdd() {
    return Joi.object({
      rule_definition: CartModel.RuleDefinition().required(),

      code: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      type_slug: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      restrictions: CartModel.Restrictions(),

      author: CartModel.CouponAuthor(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      state: CartModel.State(),

      display_meta: CartModel.DisplayMeta().required(),

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      date_meta: CartModel.CouponDateMeta(),
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
      rule_definition: CartModel.RuleDefinition().required(),

      code: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      type_slug: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      restrictions: CartModel.Restrictions(),

      author: CartModel.CouponAuthor(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      state: CartModel.State(),

      display_meta: CartModel.DisplayMeta().required(),

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      date_meta: CartModel.CouponDateMeta(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: CartModel.CouponSchedule(),

      archive: Joi.boolean(),
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
      user_id: Joi.array().items(Joi.string().allow("")),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      order_quantity: Joi.number(),

      anonymous_users: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      post_order: CartModel.PostOrder1(),

      uses: CartModel.UsesRestriction1().required(),

      user_registered: CartModel.UserRegistered(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
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

  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
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
      item_brand: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_store: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_company: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_company: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_id: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      code: Joi.string().allow(""),

      partial_can_ret: Joi.boolean(),

      max_discount_amount: Joi.number(),

      discount_price: Joi.number(),

      min_offer_quantity: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      max_offer_quantity: Joi.number(),

      apportion_discount: Joi.boolean(),

      discount_amount: Joi.number(),

      discount_percentage: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      item_criteria: CartModel.ItemCriteria().required(),

      discount_type: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),

      buy_condition: Joi.string().allow("").required(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
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
      post_order_action: CartModel.PromotionAction(),

      currency: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      author: CartModel.PromotionAuthor(),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      display_meta: CartModel.DisplayMeta1().required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      ownership: CartModel.Ownership1().required(),

      apply_all_discount: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      visiblility: CartModel.Visibility(),

      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),
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

      currency: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      author: CartModel.PromotionAuthor(),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      display_meta: CartModel.DisplayMeta1().required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      ownership: CartModel.Ownership1().required(),

      apply_all_discount: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      visiblility: CartModel.Visibility(),

      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      post_order_action: CartModel.PromotionAction(),

      currency: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      author: CartModel.PromotionAuthor(),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      display_meta: CartModel.DisplayMeta1().required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      ownership: CartModel.Ownership1().required(),

      apply_all_discount: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      visiblility: CartModel.Visibility(),

      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),
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

      subtitle: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      example: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.number(),

      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      display: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      delivery_charge: Joi.number(),

      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      coupon: Joi.number(),

      cod_charge: Joi.number(),

      gst_charges: Joi.number(),

      fynd_cash: Joi.number(),

      you_saved: Joi.number(),

      discount: Joi.number(),

      mrp_total: Joi.number(),

      total: Joi.number(),

      gift_card: Joi.number(),

      vog: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      applicable: Joi.number(),

      total: Joi.number(),

      is_applied: Joi.boolean(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      coupon: CartModel.CouponBreakup(),
    });
  }

  static CouponDetails() {
    return Joi.object({
      discount_single_quantity: Joi.number(),

      code: Joi.string().allow(""),

      discount_total_quantity: Joi.number(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
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

  static CartProduct() {
    return Joi.object({
      brand: CartModel.BaseInfo(),

      name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      slug: Joi.string().allow(""),

      _custom_json: Joi.any(),

      teaser_tag: CartModel.Tags(),

      type: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      uid: Joi.number(),

      images: Joi.array().items(CartModel.ProductImage()),

      action: CartModel.ProductAction(),

      item_code: Joi.string().allow("").allow(null),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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

      offer: Joi.any(),

      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      free_gift_item_details: CartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

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
      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      seller: CartModel.BaseInfo(),

      store: CartModel.BaseInfo(),

      identifier: Joi.any(),

      type: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      extra_meta: Joi.any(),

      size: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gift_card: Joi.any(),

      cart_item_meta: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      is_gift_visible: Joi.boolean(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),

      add_on: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      coupon: CartModel.CouponDetails(),

      key: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      product: CartModel.CartProduct(),

      is_set: Joi.boolean(),

      discount: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      promo_meta: CartModel.PromoMeta(),

      message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      availability: CartModel.ProductAvailability(),

      article: CartModel.ProductArticle(),

      price: CartModel.ProductPriceInfo(),

      price_per_unit: CartModel.ProductPriceInfo(),

      coupon_message: Joi.string().allow(""),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),
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
      country: Joi.string().allow("").allow(null),

      country_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      address: Joi.string().allow(""),

      phone: Joi.number(),

      meta: Joi.any(),

      pincode: Joi.number(),

      city: Joi.string().allow("").allow(null),

      area: Joi.string().allow(""),
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

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),
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
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      order_id: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      name: Joi.string().allow(""),

      meta: CartModel.MultiTenderPaymentMeta(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      quantity: Joi.number(),

      amount_paid: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      size: Joi.string().allow("").required(),

      cashback_applied: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      discount: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      coupon_effective_discount: Joi.number().required(),

      employee_discount: Joi.number(),

      extra_meta: Joi.any(),

      product_id: Joi.number().required(),

      cod_charges: Joi.number().required(),

      price_marked: Joi.number().required(),

      loyalty_discount: Joi.number(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      price_effective: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      coupon: Joi.string().allow(""),

      coupon_value: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      billing_address: CartModel.ShippingAddress().required(),

      employee_discount: Joi.any(),

      loyalty_discount: Joi.number(),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      shipping_address: CartModel.ShippingAddress(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      currency_code: Joi.string().allow(""),

      cashback_applied: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      coupon_code: Joi.string().allow("").required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean(),

      order_ref_id: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      fc_index_map: Joi.array().items(Joi.number()),

      is_default: Joi.boolean().required(),

      shipments: Joi.array().items(Joi.any()),

      promotion: Joi.any(),

      buy_now: Joi.boolean(),

      uid: Joi.number().required(),

      cod_charges: Joi.any(),

      cashback: Joi.any().required(),

      articles: Joi.array().items(Joi.any()).required(),

      order_id: Joi.string().allow(""),

      cart_value: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      delivery_charges: Joi.any(),

      discount: Joi.number(),

      pick_up_customer_details: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      last_modified: Joi.string().allow("").required(),

      payments: Joi.any().allow(null),

      expire_at: Joi.string().allow("").required(),

      coupon: Joi.any().allow(null),

      comment: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").allow(null),

      fynd_credits: Joi.any(),

      bulk_coupon_discount: Joi.number().allow(null),

      merge_qty: Joi.boolean().allow(null),

      is_archive: Joi.boolean(),

      meta: Joi.any().allow(null),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      page: CartModel.Page(),

      message: Joi.string().allow(""),

      result: Joi.any(),

      success: Joi.boolean(),

      items: Joi.array().items(CartModel.AbandonedCart()),
    });
  }

  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      store_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      seller_id: Joi.number(),

      pos: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      article_assignment: Joi.any(),

      display: Joi.string().allow(""),
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
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      pan_config: Joi.any(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      pan_no: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      last_modified: Joi.string().allow(""),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      article_id: Joi.string().allow(""),

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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      token: Joi.string().allow(""),

      source: Joi.any(),

      user: Joi.any(),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      cart_id: Joi.number(),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),
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
      user_id: Joi.string().allow(""),

      cart_value: Joi.number(),

      pick_up_customer_details: Joi.any(),

      created_on: Joi.string().allow(""),

      item_counts: Joi.number(),

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
      first_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      buy_now: Joi.boolean(),

      user: CartModel.UserInfo(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),

      pan_config: Joi.any(),
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
      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),

      current: Joi.number(),

      total: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      max_discount_value: Joi.number(),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow(""),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

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
      user_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      google_map_point: Joi.any(),

      is_default_address: Joi.boolean(),

      geo_location: CartModel.GeoLocation(),

      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      area_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      meta: Joi.any(),

      city: Joi.string().allow(""),
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

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_updated: Joi.boolean(),

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
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
      user_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      order_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      shipments: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      shipment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      error: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),
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
      pick_up_customer_details: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

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
      _id: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),
    });
  }

  static Files() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      aggregator: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      staff: CartModel.StaffCheckout(),

      employee_code: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow("").required(),

      ordering_store: Joi.number().allow(null),

      billing_address: Joi.any(),

      extra_meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      pick_at_store_uid: Joi.number().allow(null),

      merchant_code: Joi.string().allow(""),

      delivery_address: Joi.any(),

      files: Joi.array().items(CartModel.Files()),

      meta: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      payment_params: Joi.any().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      user_type: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),

      success: Joi.boolean(),

      cod_charges: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      cart_id: Joi.number(),

      currency: CartModel.CartCurrency(),

      order_id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),

      cod_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      error_message: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      cart: CartModel.CheckCart(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      app_intercept_url: Joi.string().allow(""),

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
      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow(""),

      id: Joi.number(),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      area_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

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
      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      code: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      discount: Joi.number(),
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
