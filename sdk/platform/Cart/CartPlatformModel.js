const Joi = require("joi");

class CartModel {
  static DisplayMetaDict() {
    return Joi.object({
      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      title: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      networks: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Restrictions() {
    return Joi.object({
      platforms: Joi.array().items(Joi.string().allow("")),

      ordering_stores: Joi.array().items(Joi.number()),

      user_groups: Joi.array().items(Joi.number()),

      coupon_allowed: Joi.boolean(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      price_range: CartModel.PriceRange(),

      uses: CartModel.UsesRestriction(),

      post_order: CartModel.PostOrder(),

      user_type: Joi.string().allow(""),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      calculate_on: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      auto_apply: Joi.boolean(),

      scope: Joi.array().items(Joi.string().allow("")),

      value_type: Joi.string().allow("").required(),
    });
  }

  static Rule() {
    return Joi.object({
      discount_qty: Joi.number(),

      min: Joi.number(),

      key: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string().allow("").allow(null),

      app_id: Joi.array().items(Joi.string().allow("")),

      anonymous: Joi.boolean(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static Identifier() {
    return Joi.object({
      collection_id: Joi.array().items(Joi.string().allow("")),

      email_domain: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static CouponAdd() {
    return Joi.object({
      display_meta: CartModel.DisplayMeta().required(),

      type_slug: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions(),

      _schedule: CartModel.CouponSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      state: CartModel.State(),

      ownership: CartModel.Ownership().required(),

      code: Joi.string().allow("").required(),

      rule_definition: CartModel.RuleDefinition().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      date_meta: CartModel.CouponDateMeta(),

      identifiers: CartModel.Identifier().required(),

      action: CartModel.CouponAction(),

      author: CartModel.CouponAuthor(),
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
      display_meta: CartModel.DisplayMeta().required(),

      type_slug: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions(),

      _schedule: CartModel.CouponSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      state: CartModel.State(),

      ownership: CartModel.Ownership().required(),

      code: Joi.string().allow("").required(),

      rule_definition: CartModel.RuleDefinition().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      date_meta: CartModel.CouponDateMeta(),

      identifiers: CartModel.Identifier().required(),

      action: CartModel.CouponAction(),

      author: CartModel.CouponAuthor(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: CartModel.CouponSchedule(),

      archive: Joi.boolean(),
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

  static Restrictions1() {
    return Joi.object({
      platforms: Joi.array().items(Joi.string().allow("")),

      order_quantity: Joi.number(),

      user_groups: Joi.array().items(Joi.number()),

      user_registered: CartModel.UserRegistered(),

      anonymous_users: Joi.boolean(),

      user_id: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      post_order: CartModel.PostOrder1(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),
    });
  }

  static CompareObject() {
    return Joi.object({
      equals: Joi.number(),

      less_than_equals: Joi.number(),

      less_than: Joi.number(),

      greater_than_equals: Joi.number(),

      greater_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      cart_quantity: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_company: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_company: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_category: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_brand: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_sku: Joi.array().items(Joi.string().allow("")),
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

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      max_offer_quantity: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      code: Joi.string().allow(""),

      apportion_discount: Joi.boolean(),

      discount_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      min_offer_quantity: Joi.number(),

      discount_amount: Joi.number(),

      discount_price: Joi.number(),

      max_discount_amount: Joi.number(),
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

  static PromotionSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      restrictions: CartModel.Restrictions1(),

      apply_exclusive: Joi.string().allow("").allow(null),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      apply_all_discount: Joi.boolean(),

      stackable: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      display_meta: CartModel.DisplayMeta1().required(),

      calculate_on: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      post_order_action: CartModel.PromotionAction(),

      visiblility: CartModel.Visibility(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      mode: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      application_id: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),
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

      apply_priority: Joi.number(),

      restrictions: CartModel.Restrictions1(),

      apply_exclusive: Joi.string().allow("").allow(null),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      apply_all_discount: Joi.boolean(),

      stackable: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      display_meta: CartModel.DisplayMeta1().required(),

      calculate_on: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      post_order_action: CartModel.PromotionAction(),

      visiblility: CartModel.Visibility(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      mode: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      application_id: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      restrictions: CartModel.Restrictions1(),

      apply_exclusive: Joi.string().allow("").allow(null),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      apply_all_discount: Joi.boolean(),

      stackable: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      display_meta: CartModel.DisplayMeta1().required(),

      calculate_on: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      post_order_action: CartModel.PromotionAction(),

      visiblility: CartModel.Visibility(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      mode: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      application_id: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),
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

      title: Joi.string().allow(""),

      example: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

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

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static CouponDetails() {
    return Joi.object({
      discount_total_quantity: Joi.number(),

      discount_single_quantity: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: CartModel.ActionQuery(),
    });
  }

  static CartProduct() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      brand: CartModel.BaseInfo(),

      images: Joi.array().items(CartModel.ProductImage()),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      teaser_tag: CartModel.Tags(),

      item_code: Joi.string().allow("").allow(null),

      uid: Joi.number(),

      action: CartModel.ProductAction(),
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
      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      offer_text: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      identifier: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),

      cart_item_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      store: CartModel.BaseInfo(),

      gift_card: Joi.any(),

      extra_meta: Joi.any(),

      is_gift_visible: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),
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

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      coupon_message: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      coupon: CartModel.CouponDetails(),

      message: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      discount: Joi.string().allow(""),

      key: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      parent_item_identifiers: Joi.any(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      is_set: Joi.boolean(),

      article: CartModel.ProductArticle(),

      promo_meta: CartModel.PromoMeta(),

      quantity: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      availability: CartModel.ProductAvailability(),

      price_per_unit: CartModel.ProductPriceInfo(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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

  static RawBreakup() {
    return Joi.object({
      gst_charges: Joi.number(),

      vog: Joi.number(),

      subtotal: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      delivery_charge: Joi.number(),

      you_saved: Joi.number(),

      discount: Joi.number(),

      total: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      gift_card: Joi.number(),

      fynd_cash: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      value: Joi.number(),

      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(CartModel.DisplayBreakup()),

      loyalty_points: CartModel.LoyaltyPoints(),

      raw: CartModel.RawBreakup(),

      coupon: CartModel.CouponBreakup(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),
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
      pincode: Joi.number(),

      address: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      area_code_slug: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      phone: Joi.number(),

      address_type: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_promise: CartModel.ShipmentPromise(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      payment_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: CartModel.MultiTenderPaymentMeta(),

      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

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
      price_marked: Joi.number().required(),

      employee_discount: Joi.number(),

      meta: CartModel.CartItemMeta(),

      product_id: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      delivery_charges: Joi.number().required(),

      discount: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      extra_meta: Joi.any(),

      cashback_applied: Joi.number().required(),

      price_effective: Joi.number().required(),

      quantity: Joi.number(),

      amount_paid: Joi.number().required(),

      loyalty_discount: Joi.number(),

      cod_charges: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),

      shipping_address: CartModel.ShippingAddress(),

      employee_discount: Joi.any(),

      billing_address: CartModel.ShippingAddress().required(),

      coupon: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cod_charges: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      affiliate_order_id: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      delivery_charges: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      loyalty_discount: Joi.number(),

      coupon_value: Joi.number().required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      order_ref_id: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      is_archive: Joi.boolean(),

      pick_up_customer_details: Joi.any().allow(null),

      order_id: Joi.string().allow(""),

      discount: Joi.number(),

      cart_value: Joi.number(),

      comment: Joi.string().allow("").allow(null),

      payment_methods: Joi.array().items(Joi.any()),

      cod_charges: Joi.any(),

      promotion: Joi.any(),

      fc_index_map: Joi.array().items(Joi.number()),

      is_active: Joi.boolean(),

      articles: Joi.array().items(Joi.any()).required(),

      delivery_charges: Joi.any(),

      bulk_coupon_discount: Joi.number().allow(null),

      shipments: Joi.array().items(Joi.any()),

      uid: Joi.number().required(),

      coupon: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").allow(null),

      is_default: Joi.boolean().required(),

      expire_at: Joi.string().allow("").required(),

      buy_now: Joi.boolean(),

      app_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow(""),

      cashback: Joi.any().required(),

      merge_qty: Joi.boolean().allow(null),

      payments: Joi.any().allow(null),

      last_modified: Joi.string().allow("").required(),

      fynd_credits: Joi.any(),
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
      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      quantity: Joi.number(),

      item_id: Joi.number(),

      display: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      store_id: Joi.number(),

      pos: Joi.boolean(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
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
      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),
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
      pan_config: Joi.any(),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      pan_no: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      partial: Joi.boolean(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

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
      id: Joi.string().allow(""),

      meta: Joi.any(),
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

      token: Joi.string().allow(""),

      source: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      cart_id: Joi.number(),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      shared_cart_details: CartModel.SharedCartDetails(),

      delivery_promise: CartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),
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

      cart_id: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      user_id: Joi.string().allow(""),

      cart_value: Joi.number(),

      item_counts: Joi.number(),
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
      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      pan_config: Joi.any(),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      user: CartModel.UserInfo(),

      pan_no: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

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

  static Coupon() {
    return Joi.object({
      expires_on: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_previous: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      total_item_count: Joi.number(),
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
      tags: Joi.array().items(Joi.string().allow("")),

      cart_id: Joi.string().allow(""),

      meta: Joi.any(),

      country_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      google_map_point: Joi.any(),

      is_active: Joi.boolean(),

      area: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      state: Joi.string().allow(""),

      id: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),
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

      success: Joi.boolean(),

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

      id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      fulfillment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      promise: CartModel.ShipmentPromise(),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      cart_id: Joi.number(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      error: Joi.boolean(),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      breakup_values: CartModel.CartBreakup(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_promise: CartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      quantity: Joi.number(),

      article_uid: Joi.string().allow("").required(),

      shipment_type: Joi.string().allow("").required(),
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

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),
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

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow("").required(),
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
      payment_params: Joi.any().allow(null),

      billing_address: Joi.any(),

      meta: Joi.any(),

      pick_at_store_uid: Joi.number().allow(null),

      pos: Joi.boolean(),

      extra_meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      aggregator: Joi.string().allow(""),

      delivery_address: Joi.any(),

      staff: CartModel.StaffCheckout(),

      device_id: Joi.string().allow("").allow(null),

      id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      order_type: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      files: Joi.array().items(CartModel.Files()),

      checkout_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      employee_code: Joi.string().allow("").allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      cart_id: Joi.number(),

      order_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      cod_charges: Joi.number(),

      delivery_charge_order_value: Joi.number(),

      currency: CartModel.CartCurrency(),

      delivery_charges: Joi.number(),

      success: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      store_code: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      store_emps: Joi.array().items(Joi.any()),

      delivery_promise: CartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      success: Joi.boolean(),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),
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
      store_code: Joi.string().allow(""),

      pincode: Joi.number(),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      id: Joi.number(),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      uid: Joi.number(),
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

      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

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
