const Joi = require("joi");

class CartModel {
  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
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
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
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
      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),
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

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
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

      uses: CartModel.PaymentAllowValue(),

      codes: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),
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
      uses: CartModel.UsesRestriction(),

      user_type: Joi.string().allow(""),

      price_range: CartModel.PriceRange(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      post_order: CartModel.PostOrder(),

      coupon_allowed: Joi.boolean(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      ordering_stores: Joi.array().items(Joi.number()),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      calculate_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      value_type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      currency_code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),
    });
  }

  static Identifier() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static Rule() {
    return Joi.object({
      value: Joi.number(),

      discount_qty: Joi.number(),

      max: Joi.number(),

      key: Joi.number(),

      min: Joi.number(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      action: CartModel.CouponAction(),

      ownership: CartModel.Ownership().required(),

      date_meta: CartModel.CouponDateMeta(),

      state: CartModel.State(),

      validity: CartModel.Validity().required(),

      author: CartModel.CouponAuthor(),

      code: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      restrictions: CartModel.Restrictions(),

      validation: CartModel.Validation(),

      rule_definition: CartModel.RuleDefinition().required(),

      type_slug: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),

      _schedule: CartModel.CouponSchedule(),

      rule: Joi.array().items(CartModel.Rule()).required(),
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
      action: CartModel.CouponAction(),

      ownership: CartModel.Ownership().required(),

      date_meta: CartModel.CouponDateMeta(),

      state: CartModel.State(),

      validity: CartModel.Validity().required(),

      author: CartModel.CouponAuthor(),

      code: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      restrictions: CartModel.Restrictions(),

      validation: CartModel.Validation(),

      rule_definition: CartModel.RuleDefinition().required(),

      type_slug: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),

      _schedule: CartModel.CouponSchedule(),

      rule: Joi.array().items(CartModel.Rule()).required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
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

  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      discount_amount: Joi.number(),

      discount_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      apportion_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      discount_price: Joi.number(),

      max_discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      min_offer_quantity: Joi.number(),
    });
  }

  static CompareObject() {
    return Joi.object({
      greater_than: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than: Joi.number(),

      less_than_equals: Joi.number(),

      equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      cart_total: CartModel.CompareObject(),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_company: Joi.array().items(Joi.number()),

      product_tags: Joi.array().items(Joi.string().allow("")),

      item_exclude_id: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_brand: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      cart_unique_item_amount: CartModel.CompareObject(),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_store: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),
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

  static DisplayMeta1() {
    return Joi.object({
      offer_label: Joi.string().allow(""),

      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

  static PostOrder1() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
    });
  }

  static Restrictions1() {
    return Joi.object({
      uses: CartModel.UsesRestriction1().required(),

      user_registered: CartModel.UserRegistered(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      post_order: CartModel.PostOrder1(),

      anonymous_users: Joi.boolean(),

      user_id: Joi.array().items(Joi.string().allow("")),

      order_quantity: Joi.number(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),
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
      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      promo_group: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      code: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      _custom_json: Joi.any(),

      post_order_action: CartModel.PromotionAction(),

      calculate_on: Joi.string().allow(""),

      apply_priority: Joi.number(),

      date_meta: CartModel.PromotionDateMeta(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_all_discount: Joi.boolean(),

      mode: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      ownership: CartModel.Ownership1().required(),

      stackable: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),
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
      promo_group: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      code: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      _custom_json: Joi.any(),

      post_order_action: CartModel.PromotionAction(),

      calculate_on: Joi.string().allow(""),

      apply_priority: Joi.number(),

      date_meta: CartModel.PromotionDateMeta(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_all_discount: Joi.boolean(),

      mode: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      ownership: CartModel.Ownership1().required(),

      stackable: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      promo_group: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      code: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      _custom_json: Joi.any(),

      post_order_action: CartModel.PromotionAction(),

      calculate_on: Joi.string().allow(""),

      apply_priority: Joi.number(),

      date_meta: CartModel.PromotionDateMeta(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_all_discount: Joi.boolean(),

      mode: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      ownership: CartModel.Ownership1().required(),

      stackable: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),
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
      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      example: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      action: CartModel.ProductAction(),

      net_quantity: CartModel.NetQuantity(),

      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      item_code: Joi.string().allow("").allow(null),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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
      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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

  static ProductArticle() {
    return Joi.object({
      parent_item_identifiers: Joi.any(),

      seller: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      store: CartModel.BaseInfo(),

      _custom_json: Joi.any(),
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
      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),
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

  static Ownership2() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      ownership: CartModel.Ownership2(),

      amount: Joi.number(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      product: CartModel.CartProduct(),

      bulk_offer: Joi.any(),

      message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      promo_meta: CartModel.PromoMeta(),

      availability: CartModel.ProductAvailability(),

      price: CartModel.ProductPriceInfo(),

      quantity: Joi.number(),

      price_per_unit: CartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      article: CartModel.ProductArticle(),

      key: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      discount: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      description: Joi.string().allow("").allow(null),

      value: Joi.number(),

      message: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      code: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      description: Joi.string().allow(""),

      total: Joi.number(),

      is_applied: Joi.boolean(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      convenience_fee: Joi.number(),

      total: Joi.number(),

      subtotal: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      cod_charge: Joi.number(),

      mrp_total: Joi.number(),

      discount: Joi.number(),

      you_saved: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_cash: Joi.number(),

      coupon: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      raw: CartModel.RawBreakup(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
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
      area: Joi.string().allow(""),

      phone: Joi.number(),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      area_code_slug: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      city: Joi.string().allow("").allow(null),

      landmark: Joi.string().allow(""),

      meta: Joi.any(),

      country_phone_code: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      payment_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      order_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),
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
      group_id: Joi.string().allow(""),

      primary_item: Joi.boolean(),
    });
  }

  static OpenApiFiles() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      product_id: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      size: Joi.string().allow("").required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      employee_discount: Joi.number(),

      extra_meta: Joi.any(),

      delivery_charges: Joi.number().required(),

      quantity: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      price_effective: Joi.number().required(),

      discount: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cod_charges: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_marked: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      cashback_applied: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      coupon_value: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      delivery_charges: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      gstin: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      shipping_address: CartModel.ShippingAddress(),

      order_id: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      loyalty_discount: Joi.number(),

      comment: Joi.string().allow("").allow(null),

      employee_discount: Joi.any(),

      coupon_code: Joi.string().allow("").required(),

      coupon: Joi.string().allow(""),

      billing_address: CartModel.ShippingAddress().required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      order_ref_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      promotion: Joi.any(),

      buy_now: Joi.boolean(),

      delivery_charges: Joi.any(),

      meta: Joi.any().allow(null),

      cod_charges: Joi.any(),

      user_id: Joi.string().allow("").required(),

      app_id: Joi.string().allow(""),

      discount: Joi.number(),

      articles: Joi.array().items(Joi.any()).required(),

      payment_methods: Joi.array().items(Joi.any()),

      pick_up_customer_details: Joi.any().allow(null),

      payments: Joi.any().allow(null),

      last_modified: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      gstin: Joi.string().allow("").allow(null),

      checkout_mode: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").allow(null),

      bulk_coupon_discount: Joi.number().allow(null),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      cart_value: Joi.number(),

      comment: Joi.string().allow("").allow(null),

      fc_index_map: Joi.array().items(Joi.number()),

      _id: Joi.string().allow("").required(),

      cashback: Joi.any().required(),

      expire_at: Joi.string().allow("").required(),

      merge_qty: Joi.boolean().allow(null),

      created_on: Joi.string().allow("").required(),

      coupon: Joi.any().allow(null),

      is_archive: Joi.boolean(),

      fynd_credits: Joi.any(),

      is_default: Joi.boolean().required(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      page: CartModel.Page(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      result: Joi.any(),
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
      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      pan_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      pan_config: Joi.any(),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      article_assignment: Joi.any(),

      item_size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      pos: Joi.boolean(),

      _custom_json: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      display: Joi.string().allow(""),

      seller_id: Joi.number(),

      store_id: Joi.number(),
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
      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      partial: Joi.boolean(),
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

      _custom_json: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),
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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      meta: Joi.any(),

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      source: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),
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
      pick_up_customer_details: Joi.any(),

      cart_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      item_counts: Joi.number(),

      cart_value: Joi.number(),
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
      modified_on: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      pan_config: Joi.any(),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      pan_no: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      user: CartModel.UserInfo(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),
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
      has_next: Joi.boolean(),

      total_item_count: Joi.number(),

      total: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      description: Joi.string().allow("").allow(null),

      expires_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      coupon_value: Joi.number(),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),
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
      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      meta: Joi.any(),

      is_default_address: Joi.boolean(),

      email: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      is_active: Joi.boolean(),

      area: Joi.string().allow(""),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),
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

      success: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

      is_updated: Joi.boolean(),

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
      box_type: Joi.string().allow("").allow(null),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      dp_options: Joi.any().allow(null),

      shipments: Joi.number(),

      order_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      buy_now: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      error: Joi.boolean(),

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

      pick_up_customer_details: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),
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
      first_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
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
      payment_params: Joi.any().allow(null),

      ordering_store: Joi.number().allow(null),

      meta: Joi.any(),

      order_type: Joi.string().allow("").required(),

      staff: CartModel.StaffCheckout(),

      device_id: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),

      delivery_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      employee_code: Joi.string().allow("").allow(null),

      extra_meta: Joi.any(),

      pos: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      files: Joi.array().items(CartModel.Files()),

      payment_mode: Joi.string().allow("").required(),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      payment_auto_confirm: Joi.boolean(),

      billing_address: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      user_type: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charges: Joi.number(),

      cod_charges: Joi.number(),

      error_message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      store_emps: Joi.array().items(Joi.any()),

      cod_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      success: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      order_id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_order_value: Joi.number(),

      coupon_text: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      data: Joi.any(),

      callback_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CheckCart(),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
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

      phone: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      id: Joi.number(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      email: Joi.string().allow(""),

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
      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

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
