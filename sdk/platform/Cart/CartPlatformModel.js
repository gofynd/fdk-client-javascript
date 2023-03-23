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

  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      user_registered_after: Joi.string().allow("").allow(null),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Identifier() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),
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

      apply: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),
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

  static UsesRemaining() {
    return Joi.object({
      total: Joi.number(),

      app: Joi.number(),

      user: Joi.number(),
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

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static Restrictions() {
    return Joi.object({
      post_order: CartModel.PostOrder(),

      ordering_stores: Joi.array().items(Joi.number()),

      user_groups: Joi.array().items(Joi.number()),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      coupon_allowed: Joi.boolean(),

      uses: CartModel.UsesRestriction(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      price_range: CartModel.PriceRange(),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_type: Joi.string().allow(""),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      auto_apply: Joi.boolean(),

      calculate_on: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      applicable_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),
    });
  }

  static Rule() {
    return Joi.object({
      value: Joi.number(),

      min: Joi.number(),

      key: Joi.number(),

      max: Joi.number(),

      discount_qty: Joi.number(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      validation: CartModel.Validation(),

      identifiers: CartModel.Identifier().required(),

      state: CartModel.State(),

      action: CartModel.CouponAction(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      display_meta: CartModel.DisplayMeta().required(),

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      date_meta: CartModel.CouponDateMeta(),

      restrictions: CartModel.Restrictions(),

      validity: CartModel.Validity().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      type_slug: Joi.string().allow("").required(),

      rule_definition: CartModel.RuleDefinition().required(),

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
      validation: CartModel.Validation(),

      identifiers: CartModel.Identifier().required(),

      state: CartModel.State(),

      action: CartModel.CouponAction(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      display_meta: CartModel.DisplayMeta().required(),

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      date_meta: CartModel.CouponDateMeta(),

      restrictions: CartModel.Restrictions(),

      validity: CartModel.Validity().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      type_slug: Joi.string().allow("").required(),

      rule_definition: CartModel.RuleDefinition().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: CartModel.CouponSchedule(),

      archive: Joi.boolean(),
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
      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),

      published: Joi.boolean().required(),
    });
  }

  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),

      offer_label: Joi.string().allow(""),
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

  static UserRegistered() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").allow(null),
    });
  }

  static Restrictions1() {
    return Joi.object({
      order_quantity: Joi.number(),

      post_order: CartModel.PostOrder1(),

      anonymous_users: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_registered: CartModel.UserRegistered(),

      platforms: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      apportion_discount: Joi.boolean(),

      discount_price: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      discount_amount: Joi.number(),

      code: Joi.string().allow(""),

      discount_percentage: Joi.number(),

      max_discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      partial_can_ret: Joi.boolean(),

      min_offer_quantity: Joi.number(),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than: Joi.number(),

      greater_than: Joi.number(),

      equals: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_store: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      cart_total: CartModel.CompareObject(),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      product_tags: Joi.array().items(Joi.string().allow("")),

      item_brand: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),
    });
  }

  static DiscountRule() {
    return Joi.object({
      offer: CartModel.DiscountOffer().required(),

      item_criteria: CartModel.ItemCriteria().required(),

      discount_type: Joi.string().allow("").required(),

      buy_condition: Joi.string().allow("").required(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
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
      author: CartModel.PromotionAuthor(),

      stackable: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      visiblility: CartModel.Visibility(),

      mode: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      promo_group: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_all_discount: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      post_order_action: CartModel.PromotionAction(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      currency: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      code: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_exclusive: Joi.string().allow("").allow(null),
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
      author: CartModel.PromotionAuthor(),

      stackable: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      visiblility: CartModel.Visibility(),

      mode: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      promo_group: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_all_discount: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      post_order_action: CartModel.PromotionAction(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      currency: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      code: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_exclusive: Joi.string().allow("").allow(null),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      author: CartModel.PromotionAuthor(),

      stackable: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      visiblility: CartModel.Visibility(),

      mode: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      promo_group: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_all_discount: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      post_order_action: CartModel.PromotionAction(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      currency: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      code: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_exclusive: Joi.string().allow("").allow(null),
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
      example: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      modified_on: Joi.string().allow(""),
    });
  }

  static CartItem() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      product_id: Joi.string().allow("").required(),

      quantity: Joi.number(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      applicable: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      minimum_cart_value: Joi.number(),

      value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      gst_charges: Joi.number(),

      total: Joi.number(),

      discount: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      coupon: Joi.number(),

      delivery_charge: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      you_saved: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: CartModel.LoyaltyPoints(),

      coupon: CartModel.CouponBreakup(),

      raw: CartModel.RawBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),
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

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),
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

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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

  static CartProduct() {
    return Joi.object({
      item_code: Joi.string().allow("").allow(null),

      action: CartModel.ProductAction(),

      images: Joi.array().items(CartModel.ProductImage()),

      name: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      type: Joi.string().allow(""),

      net_quantity: CartModel.NetQuantity(),

      slug: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      uid: Joi.number(),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
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
      size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      type: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),
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
      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),
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

  static AppliedPromotion() {
    return Joi.object({
      amount: Joi.number(),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),

      ownership: CartModel.Ownership2(),

      promotion_group: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      buy_rules: Joi.array().items(CartModel.BuyRules()),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      is_set: Joi.boolean(),

      identifiers: CartModel.CartProductIdentifer().required(),

      bulk_offer: Joi.any(),

      price_per_unit: CartModel.ProductPriceInfo(),

      price: CartModel.ProductPriceInfo(),

      discount: Joi.string().allow(""),

      message: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      key: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      product: CartModel.CartProduct(),

      article: CartModel.ProductArticle(),

      coupon_message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      quantity: Joi.number(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static OpenApiErrorResponse() {
    return Joi.object({
      success: Joi.boolean(),

      errors: Joi.any(),

      message: Joi.string().allow(""),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      city: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      phone: Joi.number(),

      state: Joi.string().allow("").allow(null),

      country_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.number(),

      country_iso_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      landmark: Joi.string().allow(""),

      meta: Joi.any(),

      country_phone_code: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      meta: CartModel.MultiTenderPaymentMeta(),

      amount: Joi.number().required(),
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
      extra_meta: Joi.any(),

      size: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      product_id: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      discount: Joi.number().required(),

      employee_discount: Joi.number(),

      cod_charges: Joi.number().required(),

      loyalty_discount: Joi.number(),

      cashback_applied: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      delivery_charges: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      quantity: Joi.number(),

      amount_paid: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      shipping_address: CartModel.ShippingAddress(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      coupon: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cart_value: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow(""),

      employee_discount: Joi.any(),

      cod_charges: Joi.number().required(),

      loyalty_discount: Joi.number(),

      coupon_value: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      billing_address: CartModel.ShippingAddress().required(),

      cashback_applied: Joi.number().required(),

      gstin: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow(""),
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
      payment_methods: Joi.array().items(Joi.any()),

      cashback: Joi.any().required(),

      discount: Joi.number(),

      merge_qty: Joi.boolean().allow(null),

      pick_up_customer_details: Joi.any().allow(null),

      is_active: Joi.boolean(),

      _id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").allow(null),

      meta: Joi.any().allow(null),

      delivery_charges: Joi.any(),

      is_archive: Joi.boolean(),

      promotion: Joi.any(),

      bulk_coupon_discount: Joi.number().allow(null),

      expire_at: Joi.string().allow("").required(),

      app_id: Joi.string().allow(""),

      cod_charges: Joi.any(),

      fynd_credits: Joi.any(),

      is_default: Joi.boolean().required(),

      user_id: Joi.string().allow("").required(),

      shipments: Joi.array().items(Joi.any()),

      coupon: Joi.any().allow(null),

      uid: Joi.number().required(),

      last_modified: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow(""),

      cart_value: Joi.number(),

      fc_index_map: Joi.array().items(Joi.number()),

      comment: Joi.string().allow("").allow(null),

      articles: Joi.array().items(Joi.any()).required(),

      order_id: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      buy_now: Joi.boolean(),

      payments: Joi.any().allow(null),

      gstin: Joi.string().allow("").allow(null),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      success: Joi.boolean(),

      page: CartModel.Page(),

      message: Joi.string().allow(""),

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
      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      pan_config: Joi.any(),

      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      pos: Joi.boolean(),

      article_id: Joi.string().allow(""),

      article_assignment: Joi.any(),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      store_id: Joi.number(),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      item_index: Joi.number(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),
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

      token: Joi.string().allow(""),

      meta: Joi.any(),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      shared_cart_details: CartModel.SharedCartDetails(),

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
      cart_value: Joi.number(),

      item_counts: Joi.number(),

      pick_up_customer_details: Joi.any(),

      created_on: Joi.string().allow(""),

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
      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      pan_no: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      pan_config: Joi.any(),

      restrict_checkout: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      user: CartModel.UserInfo(),
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

      title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      expires_on: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      is_applied: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      sub_title: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      has_next: Joi.boolean(),

      total: Joi.number(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),

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
      state: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      cart_id: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      google_map_point: Joi.any(),

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

      is_updated: Joi.boolean(),

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
      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      order_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      promise: CartModel.ShipmentPromise(),

      shipments: Joi.number(),

      fulfillment_id: Joi.number(),

      shipment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      error: Joi.boolean(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      delivery_charge_info: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      gstin: Joi.string().allow(""),
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

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

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
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
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

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      device_id: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      payment_mode: Joi.string().allow("").required(),

      meta: Joi.any(),

      pick_at_store_uid: Joi.number().allow(null),

      delivery_address: Joi.any(),

      billing_address: Joi.any(),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      pos: Joi.boolean(),

      aggregator: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      files: Joi.array().items(CartModel.Files()),

      billing_address_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      checkout_mode: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      staff: CartModel.StaffCheckout(),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      success: Joi.boolean(),

      delivery_charges: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      cod_charges: Joi.number(),

      is_valid: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      error_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      store_code: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      order_id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      user_type: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      app_intercept_url: Joi.string().allow(""),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

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
      id: Joi.number(),

      city: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      uid: Joi.number(),

      country: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
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

      id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),
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
