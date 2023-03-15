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

  static CouponSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
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

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      calculate_on: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      value_type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      is_exact: Joi.boolean(),
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

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),
    });
  }

  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string().allow("").allow(null),

      app_id: Joi.array().items(Joi.string().allow("")),

      anonymous: Joi.boolean(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
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
      networks: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      types: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),
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
      user_groups: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction(),

      user_type: Joi.string().allow(""),

      price_range: CartModel.PriceRange(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      coupon_allowed: Joi.boolean(),

      post_order: CartModel.PostOrder(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      ordering_stores: Joi.array().items(Joi.number()),
    });
  }

  static Identifier() {
    return Joi.object({
      store_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),

      is_display: Joi.boolean(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static CouponAdd() {
    return Joi.object({
      type_slug: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      _schedule: CartModel.CouponSchedule(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      code: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),

      display_meta: CartModel.DisplayMeta().required(),

      validation: CartModel.Validation(),

      author: CartModel.CouponAuthor(),

      restrictions: CartModel.Restrictions(),

      identifiers: CartModel.Identifier().required(),

      validity: CartModel.Validity().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      state: CartModel.State(),

      date_meta: CartModel.CouponDateMeta(),
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
      type_slug: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      _schedule: CartModel.CouponSchedule(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      code: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),

      display_meta: CartModel.DisplayMeta().required(),

      validation: CartModel.Validation(),

      author: CartModel.CouponAuthor(),

      restrictions: CartModel.Restrictions(),

      identifiers: CartModel.Identifier().required(),

      validity: CartModel.Validity().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      state: CartModel.State(),

      date_meta: CartModel.CouponDateMeta(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than: Joi.number(),

      greater_than_equals: Joi.number(),

      equals: Joi.number(),

      greater_than: Joi.number(),

      less_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_company: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      available_zones: Joi.array().items(Joi.string().allow("")),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_exclude_id: Joi.array().items(Joi.number()),

      product_tags: Joi.array().items(Joi.string().allow("")),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      item_category: Joi.array().items(Joi.number()),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      discount_price: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      max_discount_amount: Joi.number(),

      code: Joi.string().allow(""),

      min_offer_quantity: Joi.number(),

      max_offer_quantity: Joi.number(),

      partial_can_ret: Joi.boolean(),

      discount_percentage: Joi.number(),

      discount_amount: Joi.number(),

      apportion_discount: Joi.boolean(),
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

  static UserRegistered() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").allow(null),
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
      anonymous_users: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction1().required(),

      order_quantity: Joi.number(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_registered: CartModel.UserRegistered(),

      platforms: Joi.array().items(Joi.string().allow("")),

      post_order: CartModel.PostOrder1(),

      user_id: Joi.array().items(Joi.string().allow("")),
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
      end: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),
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

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
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

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      _custom_json: Joi.any(),

      currency: Joi.string().allow(""),

      apply_priority: Joi.number(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      ownership: CartModel.Ownership1().required(),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      visiblility: CartModel.Visibility(),

      author: CartModel.PromotionAuthor(),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      code: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),
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

      currency: Joi.string().allow(""),

      apply_priority: Joi.number(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      ownership: CartModel.Ownership1().required(),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      visiblility: CartModel.Visibility(),

      author: CartModel.PromotionAuthor(),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      code: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      _custom_json: Joi.any(),

      currency: Joi.string().allow(""),

      apply_priority: Joi.number(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      ownership: CartModel.Ownership1().required(),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      visiblility: CartModel.Visibility(),

      author: CartModel.PromotionAuthor(),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      code: Joi.string().allow(""),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),
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
      example: Joi.string().allow(""),

      title: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),
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

  static CouponBreakup() {
    return Joi.object({
      sub_title: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      value: Joi.number(),

      code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      type: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),

      max_discount_value: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      you_saved: Joi.number(),

      cod_charge: Joi.number(),

      total: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_cash: Joi.number(),

      gst_charges: Joi.number(),

      mrp_total: Joi.number(),

      subtotal: Joi.number(),
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

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

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
      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      size: Joi.string().allow(""),

      type: Joi.string().allow(""),

      extra_meta: Joi.any(),

      store: CartModel.BaseInfo(),

      quantity: Joi.number(),

      uid: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      price: CartModel.ArticlePriceInfo(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),
    });
  }

  static Ownership2() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),
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

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      ownership: CartModel.Ownership2(),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promotion_group: Joi.string().allow(""),

      amount: Joi.number(),

      offer_text: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      buy_rules: Joi.array().items(CartModel.BuyRules()),
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
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

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
      type: Joi.string().allow(""),

      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CartProduct() {
    return Joi.object({
      name: Joi.string().allow(""),

      item_code: Joi.string().allow("").allow(null),

      images: Joi.array().items(CartModel.ProductImage()),

      action: CartModel.ProductAction(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      net_quantity: CartModel.NetQuantity(),

      uid: Joi.number(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      brand: CartModel.BaseInfo(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      article: CartModel.ProductArticle(),

      coupon_message: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      parent_item_identifiers: Joi.any(),

      key: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      discount: Joi.string().allow(""),

      message: Joi.string().allow(""),

      quantity: Joi.number(),

      bulk_offer: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      product: CartModel.CartProduct(),

      availability: CartModel.ProductAvailability(),

      is_set: Joi.boolean(),

      price: CartModel.ProductPriceInfo(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

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
      name: Joi.string().allow(""),

      pincode: Joi.number(),

      meta: Joi.any(),

      country: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      landmark: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      phone: Joi.number(),

      area: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      country_phone_code: Joi.string().allow(""),
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

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
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

  static MultiTenderPaymentMeta() {
    return Joi.object({
      order_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),
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

  static OpenApiOrderItem() {
    return Joi.object({
      meta: CartModel.CartItemMeta(),

      employee_discount: Joi.number(),

      amount_paid: Joi.number().required(),

      cod_charges: Joi.number().required(),

      price_marked: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      price_effective: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      extra_meta: Joi.any(),

      discount: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      quantity: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      product_id: Joi.number().required(),

      loyalty_discount: Joi.number(),

      delivery_charges: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      coupon: Joi.string().allow(""),

      employee_discount: Joi.any(),

      cod_charges: Joi.number().required(),

      cart_value: Joi.number().required(),

      coupon_value: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      loyalty_discount: Joi.number(),

      delivery_charges: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      billing_address: CartModel.ShippingAddress().required(),

      cashback_applied: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      shipping_address: CartModel.ShippingAddress(),

      comment: Joi.string().allow("").allow(null),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      order_id: Joi.string().allow("").required(),

      order_ref_id: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      coupon: Joi.any().allow(null),

      meta: Joi.any().allow(null),

      cod_charges: Joi.any(),

      is_archive: Joi.boolean(),

      shipments: Joi.array().items(Joi.any()),

      delivery_charges: Joi.any(),

      fc_index_map: Joi.array().items(Joi.number()),

      expire_at: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      bulk_coupon_discount: Joi.number().allow(null),

      is_default: Joi.boolean().required(),

      pick_up_customer_details: Joi.any().allow(null),

      checkout_mode: Joi.string().allow(""),

      merge_qty: Joi.boolean().allow(null),

      app_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").allow(null),

      buy_now: Joi.boolean(),

      articles: Joi.array().items(Joi.any()).required(),

      comment: Joi.string().allow("").allow(null),

      cart_value: Joi.number(),

      cashback: Joi.any().required(),

      gstin: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      payments: Joi.any().allow(null),

      is_active: Joi.boolean(),

      uid: Joi.number().required(),

      user_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow(""),

      promotion: Joi.any(),

      created_on: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(Joi.any()),

      last_modified: Joi.string().allow("").required(),

      fynd_credits: Joi.any(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      success: Joi.boolean(),

      result: Joi.any(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      message: Joi.string().allow(""),

      page: CartModel.Page(),
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
      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      currency: CartModel.CartCurrency(),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      pan_config: Joi.any(),

      last_modified: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      store_id: Joi.number(),

      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      pos: Joi.boolean(),

      display: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      item_index: Joi.number(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

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
      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),

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

      meta: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),
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

      pick_up_customer_details: Joi.string().allow(""),

      cart_value: Joi.string().allow(""),

      item_counts: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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

      _id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      user: CartModel.UserInfo(),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      pan_config: Joi.any(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),
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

      total: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      total_item_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      coupon_value: Joi.number(),

      is_applicable: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),
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
      meta: Joi.any(),

      email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      is_default_address: Joi.boolean(),

      state: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      google_map_point: Joi.any(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

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
      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

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
      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      shipment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      box_type: Joi.string().allow("").allow(null),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shipments: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      cart_id: Joi.number(),

      restrict_checkout: Joi.boolean(),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      currency: CartModel.CartCurrency(),

      error: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      uid: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      comment: Joi.string().allow(""),
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
      pick_up_customer_details: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

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

  static Files() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
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

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      meta: Joi.any(),

      delivery_address: Joi.any(),

      pos: Joi.boolean(),

      merchant_code: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      ordering_store: Joi.number().allow(null),

      files: Joi.array().items(CartModel.Files()),

      checkout_mode: Joi.string().allow(""),

      billing_address: Joi.any(),

      extra_meta: Joi.any(),

      staff: CartModel.StaffCheckout(),

      id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      pick_at_store_uid: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),

      billing_address_id: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      cod_charges: Joi.number(),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      success: Joi.boolean(),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      cod_available: Joi.boolean(),

      gstin: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      uid: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      order_id: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      error_message: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      data: Joi.any(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),
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
      name: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      id: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      address: Joi.string().allow(""),

      uid: Joi.number(),

      phone: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),
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

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),

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
