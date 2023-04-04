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

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      networks: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      types: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Restrictions() {
    return Joi.object({
      platforms: Joi.array().items(Joi.string().allow("")),

      user_type: Joi.string().allow(""),

      coupon_allowed: Joi.boolean(),

      uses: CartModel.UsesRestriction(),

      price_range: CartModel.PriceRange(),

      ordering_stores: Joi.array().items(Joi.number()),

      post_order: CartModel.PostOrder(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      user_groups: Joi.array().items(Joi.number()),
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

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),
    });
  }

  static Rule() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),

      value: Joi.number(),

      discount_qty: Joi.number(),

      key: Joi.number(),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      applicable_on: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      type: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      is_exact: Joi.boolean(),

      value_type: Joi.string().allow("").required(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static Identifier() {
    return Joi.object({
      collection_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAdd() {
    return Joi.object({
      restrictions: CartModel.Restrictions(),

      display_meta: CartModel.DisplayMeta().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      state: CartModel.State(),

      date_meta: CartModel.CouponDateMeta(),

      _schedule: CartModel.CouponSchedule(),

      action: CartModel.CouponAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").required(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      ownership: CartModel.Ownership().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      author: CartModel.CouponAuthor(),

      identifiers: CartModel.Identifier().required(),

      type_slug: Joi.string().allow("").required(),
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
      restrictions: CartModel.Restrictions(),

      display_meta: CartModel.DisplayMeta().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      state: CartModel.State(),

      date_meta: CartModel.CouponDateMeta(),

      _schedule: CartModel.CouponSchedule(),

      action: CartModel.CouponAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").required(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      ownership: CartModel.Ownership().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      author: CartModel.CouponAuthor(),

      identifiers: CartModel.Identifier().required(),

      type_slug: Joi.string().allow("").required(),
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

  static PostOrder1() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
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

      user_registered: CartModel.UserRegistered(),

      order_quantity: Joi.number(),

      uses: CartModel.UsesRestriction1().required(),

      user_groups: Joi.array().items(Joi.number()),

      post_order: CartModel.PostOrder1(),

      user_id: Joi.array().items(Joi.string().allow("")),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      anonymous_users: Joi.boolean(),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than_equals: Joi.number(),

      greater_than: Joi.number(),

      equals: Joi.number(),

      less_than: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_store: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      cart_total: CartModel.CompareObject(),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      product_tags: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      item_brand: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      apportion_discount: Joi.boolean(),

      partial_can_ret: Joi.boolean(),

      min_offer_quantity: Joi.number(),

      discount_amount: Joi.number(),

      code: Joi.string().allow(""),

      discount_percentage: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      discount_price: Joi.number(),

      max_offer_quantity: Joi.number(),

      max_discount_amount: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      item_criteria: CartModel.ItemCriteria().required(),

      offer: CartModel.DiscountOffer().required(),

      discount_type: Joi.string().allow("").required(),

      buy_condition: Joi.string().allow("").required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      offer_label: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
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
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      published: Joi.boolean().required(),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      end: Joi.string().allow("").allow(null),
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
      restrictions: CartModel.Restrictions1(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      date_meta: CartModel.PromotionDateMeta(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      apply_all_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      calculate_on: Joi.string().allow(""),

      apply_priority: Joi.number(),

      post_order_action: CartModel.PromotionAction(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      currency: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),
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
      restrictions: CartModel.Restrictions1(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      date_meta: CartModel.PromotionDateMeta(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      apply_all_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      calculate_on: Joi.string().allow(""),

      apply_priority: Joi.number(),

      post_order_action: CartModel.PromotionAction(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      currency: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      restrictions: CartModel.Restrictions1(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      date_meta: CartModel.PromotionDateMeta(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      apply_all_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      calculate_on: Joi.string().allow(""),

      apply_priority: Joi.number(),

      post_order_action: CartModel.PromotionAction(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      currency: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),
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
      modified_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      example: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      entity_type: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
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

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      max_discount_value: Joi.number(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      code: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      discount: Joi.number(),

      gst_charges: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      convenience_fee: Joi.number(),

      coupon: Joi.number(),

      vog: Joi.number(),

      delivery_charge: Joi.number(),

      you_saved: Joi.number(),

      subtotal: Joi.number(),

      total: Joi.number(),

      fynd_cash: Joi.number(),
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

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      base: CartModel.BasePrice(),

      converted: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      seller: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      extra_meta: Joi.any(),

      size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      store: CartModel.BaseInfo(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

      add_on: Joi.number(),

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

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      name: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      item_code: Joi.string().allow("").allow(null),

      images: Joi.array().items(CartModel.ProductImage()),

      uid: Joi.number(),

      net_quantity: CartModel.NetQuantity(),

      action: CartModel.ProductAction(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),
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

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      free_gift_item_details: CartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static Ownership2() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      amount: Joi.number(),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      article_quantity: Joi.number(),

      ownership: CartModel.Ownership2(),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      discount: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      availability: CartModel.ProductAvailability(),

      is_set: Joi.boolean(),

      parent_item_identifiers: Joi.any(),

      price: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      product: CartModel.CartProduct(),

      bulk_offer: Joi.any(),

      price_per_unit: CartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      key: Joi.string().allow(""),

      quantity: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),
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
      name: Joi.string().allow(""),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").allow(null),

      address_type: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      phone: Joi.number(),

      meta: Joi.any(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),
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
      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_promise: CartModel.ShipmentPromise(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      order_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      payment_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),
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
      discount: Joi.number().required(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      delivery_charges: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      coupon_effective_discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      size: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      extra_meta: Joi.any(),

      product_id: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      cod_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      amount_paid: Joi.number().required(),

      quantity: Joi.number(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),

      order_id: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.any(),

      shipping_address: CartModel.ShippingAddress(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      coupon_value: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      cod_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      cart_value: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      coupon: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      delivery_charges: Joi.number().required(),

      billing_address: CartModel.ShippingAddress().required(),
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
      buy_now: Joi.boolean(),

      articles: Joi.array().items(Joi.any()).required(),

      cod_charges: Joi.any(),

      user_id: Joi.string().allow("").required(),

      cart_value: Joi.number(),

      fc_index_map: Joi.array().items(Joi.number()),

      cashback: Joi.any().required(),

      is_active: Joi.boolean(),

      shipments: Joi.array().items(Joi.any()),

      expire_at: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      coupon: Joi.any().allow(null),

      gstin: Joi.string().allow("").allow(null),

      is_archive: Joi.boolean(),

      last_modified: Joi.string().allow("").required(),

      promotion: Joi.any(),

      order_id: Joi.string().allow(""),

      discount: Joi.number(),

      fynd_credits: Joi.any(),

      is_default: Joi.boolean().required(),

      payment_methods: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      comment: Joi.string().allow("").allow(null),

      bulk_coupon_discount: Joi.number().allow(null),

      checkout_mode: Joi.string().allow(""),

      meta: Joi.any().allow(null),

      merge_qty: Joi.boolean().allow(null),

      payments: Joi.any().allow(null),

      payment_mode: Joi.string().allow("").allow(null),

      pick_up_customer_details: Joi.any().allow(null),

      delivery_charges: Joi.any(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      result: Joi.any(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      page: CartModel.Page(),

      items: Joi.array().items(CartModel.AbandonedCart()),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
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
      is_valid: Joi.boolean(),

      buy_now: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      pan_config: Joi.any(),

      coupon_text: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_assignment: Joi.any(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      pos: Joi.boolean(),

      store_id: Joi.number(),

      item_id: Joi.number(),

      display: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),
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
      cart: CartModel.CartDetailResponse(),

      partial: Joi.boolean(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

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
      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
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

      token: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      items: Joi.array().items(CartModel.CartProductInfo()),
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
      item_counts: Joi.number(),

      pick_up_customer_details: Joi.any(),

      cart_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

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
      gender: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      user: CartModel.UserInfo(),

      pan_config: Joi.any(),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),
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

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      total_item_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      max_discount_value: Joi.number(),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

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

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      cart_id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      phone: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      google_map_point: Joi.any(),

      address: Joi.string().allow(""),

      id: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      meta: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),
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
      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

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
      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      promise: CartModel.ShipmentPromise(),

      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      items: Joi.array().items(CartModel.CartProductInfo()),

      fulfillment_id: Joi.number(),

      shipments: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart_id: Joi.number(),

      error: Joi.boolean(),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      article_uid: Joi.string().allow("").required(),

      quantity: Joi.number(),

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

      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

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

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),
    });
  }

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      callback_url: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),

      user_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      pick_at_store_uid: Joi.number().allow(null),

      ordering_store: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),

      employee_code: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),

      aggregator: Joi.string().allow(""),

      delivery_address: Joi.any(),

      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      pos: Joi.boolean(),

      meta: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      files: Joi.array().items(CartModel.Files()),

      order_type: Joi.string().allow("").required(),

      staff: CartModel.StaffCheckout(),
    });
  }

  static CheckCart() {
    return Joi.object({
      buy_now: Joi.boolean(),

      store_code: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      cod_available: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      cod_charges: Joi.number(),

      coupon_text: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      user_type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      order_id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      success: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charges: Joi.number(),

      delivery_charge_order_value: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      cart: CartModel.CheckCart(),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      app_intercept_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      data: Joi.any(),
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

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      id: Joi.number(),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),
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

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),
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
