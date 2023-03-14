const Joi = require("joi");

class CartModel {
  static Identifier() {
    return Joi.object({
      article_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      email_domain: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),
    });
  }

  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
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
      uses: CartModel.PaymentAllowValue(),

      codes: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),
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
      remaining: CartModel.UsesRemaining(),

      maximum: CartModel.UsesRemaining(),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static Restrictions() {
    return Joi.object({
      ordering_stores: Joi.array().items(Joi.number()),

      price_range: CartModel.PriceRange(),

      post_order: CartModel.PostOrder(),

      user_groups: Joi.array().items(Joi.number()),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      user_type: Joi.string().allow(""),

      uses: CartModel.UsesRestriction(),

      coupon_allowed: Joi.boolean(),

      platforms: Joi.array().items(Joi.string().allow("")),

      bulk_bundle: CartModel.BulkBundleRestriction(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static Rule() {
    return Joi.object({
      discount_qty: Joi.number(),

      min: Joi.number(),

      value: Joi.number(),

      key: Joi.number(),

      max: Joi.number(),
    });
  }

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
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

      subtitle: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
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
      type: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      is_exact: Joi.boolean(),

      applicable_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      scope: Joi.array().items(Joi.string().allow("")),

      calculate_on: Joi.string().allow("").required(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      identifiers: CartModel.Identifier().required(),

      validation: CartModel.Validation(),

      ownership: CartModel.Ownership().required(),

      restrictions: CartModel.Restrictions(),

      code: Joi.string().allow("").required(),

      type_slug: Joi.string().allow("").required(),

      date_meta: CartModel.CouponDateMeta(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      state: CartModel.State(),

      _schedule: CartModel.CouponSchedule(),

      validity: CartModel.Validity().required(),

      display_meta: CartModel.DisplayMeta().required(),

      author: CartModel.CouponAuthor(),

      tags: Joi.array().items(Joi.string().allow("")),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),
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
      identifiers: CartModel.Identifier().required(),

      validation: CartModel.Validation(),

      ownership: CartModel.Ownership().required(),

      restrictions: CartModel.Restrictions(),

      code: Joi.string().allow("").required(),

      type_slug: Joi.string().allow("").required(),

      date_meta: CartModel.CouponDateMeta(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      state: CartModel.State(),

      _schedule: CartModel.CouponSchedule(),

      validity: CartModel.Validity().required(),

      display_meta: CartModel.DisplayMeta().required(),

      author: CartModel.CouponAuthor(),

      tags: Joi.array().items(Joi.string().allow("")),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),
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

  static PromotionSchedule() {
    return Joi.object({
      published: Joi.boolean().required(),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      duration: Joi.number().allow(null),
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
      discount_price: Joi.number(),

      apportion_discount: Joi.boolean(),

      discount_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      max_usage_per_transaction: Joi.number(),

      max_offer_quantity: Joi.number(),

      code: Joi.string().allow(""),

      max_discount_amount: Joi.number(),

      min_offer_quantity: Joi.number(),

      discount_amount: Joi.number(),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than: Joi.number(),

      equals: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_store: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      cart_unique_item_quantity: CartModel.CompareObject(),

      available_zones: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_exclude_store: Joi.array().items(Joi.number()),
    });
  }

  static DiscountRule() {
    return Joi.object({
      offer: CartModel.DiscountOffer().required(),

      item_criteria: CartModel.ItemCriteria().required(),

      buy_condition: Joi.string().allow("").required(),

      discount_type: Joi.string().allow("").required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
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
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").allow(null),
    });
  }

  static Restrictions1() {
    return Joi.object({
      post_order: CartModel.PostOrder1(),

      user_groups: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      order_quantity: Joi.number(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      uses: CartModel.UsesRestriction1().required(),

      user_registered: CartModel.UserRegistered(),

      platforms: Joi.array().items(Joi.string().allow("")),

      anonymous_users: Joi.boolean(),
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
      promotion_type: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      calculate_on: Joi.string().allow(""),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      mode: Joi.string().allow("").required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promo_group: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      post_order_action: CartModel.PromotionAction(),

      apply_exclusive: Joi.string().allow("").allow(null),

      ownership: CartModel.Ownership1().required(),

      restrictions: CartModel.Restrictions1(),

      code: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      currency: Joi.string().allow(""),
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
      promotion_type: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      calculate_on: Joi.string().allow(""),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      mode: Joi.string().allow("").required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promo_group: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      post_order_action: CartModel.PromotionAction(),

      apply_exclusive: Joi.string().allow("").allow(null),

      ownership: CartModel.Ownership1().required(),

      restrictions: CartModel.Restrictions1(),

      code: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      currency: Joi.string().allow(""),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      promotion_type: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      calculate_on: Joi.string().allow(""),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      mode: Joi.string().allow("").required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promo_group: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      post_order_action: CartModel.PromotionAction(),

      apply_exclusive: Joi.string().allow("").allow(null),

      ownership: CartModel.Ownership1().required(),

      restrictions: CartModel.Restrictions1(),

      code: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      currency: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      example: Joi.string().allow(""),

      is_hidden: Joi.boolean(),
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
      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
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

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      gift_card: Joi.any(),

      cart_item_meta: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      is_gift_visible: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      identifier: Joi.any(),

      uid: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),
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

      offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      amount: Joi.number(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      effective: Joi.number(),

      selling: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      type: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      teaser_tag: CartModel.Tags(),

      slug: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      uid: Joi.number(),

      action: CartModel.ProductAction(),
    });
  }

  static CouponDetails() {
    return Joi.object({
      code: Joi.string().allow(""),

      discount_total_quantity: Joi.number(),

      discount_single_quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      is_set: Joi.boolean(),

      identifiers: CartModel.CartProductIdentifer().required(),

      availability: CartModel.ProductAvailability(),

      article: CartModel.ProductArticle(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      key: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      bulk_offer: Joi.any(),

      product: CartModel.CartProduct(),

      discount: Joi.string().allow(""),

      coupon: CartModel.CouponDetails(),

      price_per_unit: CartModel.ProductPriceInfo(),

      quantity: Joi.number(),

      coupon_message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      type: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),

      applicable: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),

      gift_card: Joi.number(),

      mrp_total: Joi.number(),

      gst_charges: Joi.number(),

      fynd_cash: Joi.number(),

      delivery_charge: Joi.number(),

      discount: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      subtotal: Joi.number(),

      you_saved: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: CartModel.CouponBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      meta: Joi.any(),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      city: Joi.string().allow("").allow(null),

      phone: Joi.number(),

      country: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      email: Joi.string().allow(""),
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

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

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
      payment_gateway: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),
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

      price_effective: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_marked: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      delivery_charges: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      discount: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cashback_applied: Joi.number().required(),

      quantity: Joi.number(),

      employee_discount: Joi.number(),

      cod_charges: Joi.number().required(),

      extra_meta: Joi.any(),

      product_id: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      loyalty_discount: Joi.number(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      delivery_charges: Joi.number().required(),

      gstin: Joi.string().allow("").allow(null),

      coupon: Joi.string().allow(""),

      comment: Joi.string().allow("").allow(null),

      cashback_applied: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").required(),

      employee_discount: Joi.any(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cod_charges: Joi.number().required(),

      shipping_address: CartModel.ShippingAddress(),

      affiliate_order_id: Joi.string().allow(""),

      billing_address: CartModel.ShippingAddress().required(),

      payment_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cart_value: Joi.number().required(),

      coupon_value: Joi.number().required(),

      loyalty_discount: Joi.number(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      order_ref_id: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      merge_qty: Joi.boolean().allow(null),

      _id: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      delivery_charges: Joi.any(),

      gstin: Joi.string().allow("").allow(null),

      payments: Joi.any().allow(null),

      buy_now: Joi.boolean(),

      coupon: Joi.any().allow(null),

      comment: Joi.string().allow("").allow(null),

      uid: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(Joi.any()),

      fynd_credits: Joi.any(),

      user_id: Joi.string().allow("").required(),

      articles: Joi.array().items(Joi.any()).required(),

      cart_value: Joi.number(),

      is_default: Joi.boolean().required(),

      discount: Joi.number(),

      bulk_coupon_discount: Joi.number().allow(null),

      is_active: Joi.boolean(),

      promotion: Joi.any(),

      cod_charges: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      expire_at: Joi.string().allow("").required(),

      cashback: Joi.any().required(),

      shipments: Joi.array().items(Joi.any()),

      payment_mode: Joi.string().allow("").allow(null),

      last_modified: Joi.string().allow("").required(),

      order_id: Joi.string().allow(""),

      app_id: Joi.string().allow(""),

      fc_index_map: Joi.array().items(Joi.number()),

      is_archive: Joi.boolean(),

      pick_up_customer_details: Joi.any().allow(null),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      success: Joi.boolean(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      page: CartModel.Page(),

      result: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      store_id: Joi.number(),

      pos: Joi.boolean(),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

      article_assignment: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),
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
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),
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
      identifiers: CartModel.CartProductIdentifer().required(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),
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
}
module.exports = CartModel;
