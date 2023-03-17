const Joi = require("joi");

class CartModel {
  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static Rule() {
    return Joi.object({
      max: Joi.number(),

      value: Joi.number(),

      discount_qty: Joi.number(),

      min: Joi.number(),

      key: Joi.number(),
    });
  }

  static Identifier() {
    return Joi.object({
      store_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),
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
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),
    });
  }

  static PostOrder() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static UsesRemaining() {
    return Joi.object({
      user: Joi.number(),

      total: Joi.number(),

      app: Joi.number(),
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
      codes: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      types: Joi.array().items(Joi.string().allow("")),
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

      coupon_allowed: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      user_type: Joi.string().allow(""),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      uses: CartModel.UsesRestriction(),

      ordering_stores: Joi.array().items(Joi.number()),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      price_range: CartModel.PriceRange(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
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
      calculate_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      scope: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      value_type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      validation: CartModel.Validation(),

      _schedule: CartModel.CouponSchedule(),

      date_meta: CartModel.CouponDateMeta(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      identifiers: CartModel.Identifier().required(),

      state: CartModel.State(),

      ownership: CartModel.Ownership().required(),

      display_meta: CartModel.DisplayMeta().required(),

      code: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions(),

      author: CartModel.CouponAuthor(),

      type_slug: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),
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
      tags: Joi.array().items(Joi.string().allow("")),

      validation: CartModel.Validation(),

      _schedule: CartModel.CouponSchedule(),

      date_meta: CartModel.CouponDateMeta(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      identifiers: CartModel.Identifier().required(),

      state: CartModel.State(),

      ownership: CartModel.Ownership().required(),

      display_meta: CartModel.DisplayMeta().required(),

      code: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions(),

      author: CartModel.CouponAuthor(),

      type_slug: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),
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

      less_than_equals: Joi.number(),

      equals: Joi.number(),

      greater_than: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      cart_total: CartModel.CompareObject(),

      cart_quantity: CartModel.CompareObject(),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_brand: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      product_tags: Joi.array().items(Joi.string().allow("")),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_store: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_id: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      max_usage_per_transaction: Joi.number(),

      discount_price: Joi.number(),

      min_offer_quantity: Joi.number(),

      discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      discount_percentage: Joi.number(),

      code: Joi.string().allow(""),

      partial_can_ret: Joi.boolean(),

      max_discount_amount: Joi.number(),

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

  static Ownership1() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static PostOrder1() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
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
      start: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),
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

  static Restrictions1() {
    return Joi.object({
      post_order: CartModel.PostOrder1(),

      anonymous_users: Joi.boolean(),

      order_quantity: Joi.number(),

      user_groups: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction1().required(),

      user_registered: CartModel.UserRegistered(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      start: Joi.string().allow("").required(),

      end: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      offer_label: Joi.string().allow(""),

      description: Joi.string().allow(""),

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
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
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
      mode: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      ownership: CartModel.Ownership1().required(),

      restrictions: CartModel.Restrictions1(),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      application_id: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      display_meta: CartModel.DisplayMeta1().required(),

      code: Joi.string().allow(""),

      stackable: Joi.boolean(),

      _custom_json: Joi.any(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      author: CartModel.PromotionAuthor(),

      apply_priority: Joi.number(),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

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
      mode: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      ownership: CartModel.Ownership1().required(),

      restrictions: CartModel.Restrictions1(),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      application_id: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      display_meta: CartModel.DisplayMeta1().required(),

      code: Joi.string().allow(""),

      stackable: Joi.boolean(),

      _custom_json: Joi.any(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      author: CartModel.PromotionAuthor(),

      apply_priority: Joi.number(),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      post_order_action: CartModel.PromotionAction(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      ownership: CartModel.Ownership1().required(),

      restrictions: CartModel.Restrictions1(),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      application_id: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      display_meta: CartModel.DisplayMeta1().required(),

      code: Joi.string().allow(""),

      stackable: Joi.boolean(),

      _custom_json: Joi.any(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      author: CartModel.PromotionAuthor(),

      apply_priority: Joi.number(),

      visiblility: CartModel.Visibility(),

      apply_exclusive: Joi.string().allow("").allow(null),

      post_order_action: CartModel.PromotionAction(),
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
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      example: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static CartItem() {
    return Joi.object({
      quantity: Joi.number(),

      product_id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      fynd_cash: Joi.number(),

      delivery_charge: Joi.number(),

      you_saved: Joi.number(),

      cod_charge: Joi.number(),

      coupon: Joi.number(),

      total: Joi.number(),

      discount: Joi.number(),

      gst_charges: Joi.number(),

      mrp_total: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      max_discount_value: Joi.number(),

      uid: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      value: Joi.number(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      total: Joi.number(),

      applicable: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: CartModel.RawBreakup(),

      coupon: CartModel.CouponBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      loyalty_points: CartModel.LoyaltyPoints(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

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

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

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
      uid: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      store: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),
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

      offer: Joi.any(),

      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Ownership2() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: CartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      amount: Joi.number(),

      ownership: CartModel.Ownership2(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_type: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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
      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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
      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      item_code: Joi.string().allow("").allow(null),

      uid: Joi.number(),

      net_quantity: CartModel.NetQuantity(),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      slug: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      price_per_unit: CartModel.ProductPriceInfo(),

      discount: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      promo_meta: CartModel.PromoMeta(),

      availability: CartModel.ProductAvailability(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      identifiers: CartModel.CartProductIdentifer().required(),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      bulk_offer: Joi.any(),

      price: CartModel.ProductPriceInfo(),

      quantity: Joi.number(),

      key: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),
    });
  }

  static OpenApiErrorResponse() {
    return Joi.object({
      errors: Joi.any(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      country: Joi.string().allow("").allow(null),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      area_code_slug: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      country_code: Joi.string().allow(""),

      meta: Joi.any(),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      email: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      phone: Joi.number(),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),
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
      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),
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

  static MultiTenderPaymentMeta() {
    return Joi.object({
      order_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      payment_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      meta: CartModel.MultiTenderPaymentMeta(),

      name: Joi.string().allow(""),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      cod_charges: Joi.number().required(),

      loyalty_discount: Joi.number(),

      amount_paid: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      price_effective: Joi.number().required(),

      size: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      extra_meta: Joi.any(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cashback_applied: Joi.number().required(),

      employee_discount: Joi.number(),

      discount: Joi.number().required(),

      quantity: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      product_id: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      billing_address: CartModel.ShippingAddress().required(),

      cod_charges: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      cart_value: Joi.number().required(),

      coupon: Joi.string().allow(""),

      cashback_applied: Joi.number().required(),

      employee_discount: Joi.any(),

      coupon_value: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      order_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      currency_code: Joi.string().allow(""),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      comment: Joi.string().allow("").allow(null),

      shipping_address: CartModel.ShippingAddress(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      delivery_charges: Joi.number().required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_ref_id: Joi.string().allow(""),

      success: Joi.boolean(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      pick_up_customer_details: Joi.any().allow(null),

      meta: Joi.any().allow(null),

      cart_value: Joi.number(),

      fynd_credits: Joi.any(),

      created_on: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      is_archive: Joi.boolean(),

      last_modified: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").allow(null),

      uid: Joi.number().required(),

      order_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      articles: Joi.array().items(Joi.any()).required(),

      comment: Joi.string().allow("").allow(null),

      expire_at: Joi.string().allow("").required(),

      merge_qty: Joi.boolean().allow(null),

      discount: Joi.number(),

      promotion: Joi.any(),

      cod_charges: Joi.any(),

      cashback: Joi.any().required(),

      fc_index_map: Joi.array().items(Joi.number()),

      shipments: Joi.array().items(Joi.any()),

      _id: Joi.string().allow("").required(),

      app_id: Joi.string().allow(""),

      coupon: Joi.any().allow(null),

      is_active: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      bulk_coupon_discount: Joi.number().allow(null),

      buy_now: Joi.boolean(),

      payments: Joi.any().allow(null),

      payment_methods: Joi.array().items(Joi.any()),

      delivery_charges: Joi.any(),

      user_id: Joi.string().allow("").required(),
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
      breakup_values: CartModel.CartBreakup(),

      pan_no: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      pan_config: Joi.any(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      store_id: Joi.number(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_assignment: Joi.any(),

      seller_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      pos: Joi.boolean(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      item_id: Joi.number(),
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

      success: Joi.boolean(),

      partial: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_id: Joi.number(),

      item_index: Joi.number(),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),
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

      success: Joi.boolean(),

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
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      user: Joi.any(),

      meta: Joi.any(),

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      cart_id: Joi.number(),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),
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
      pick_up_customer_details: Joi.string().allow(""),

      cart_value: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      item_counts: Joi.string().allow(""),

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

      mobile: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      user: CartModel.UserInfo(),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      pan_config: Joi.any(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      pan_no: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),
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
      max_discount_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      is_applicable: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow(""),
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
      area_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      meta: Joi.any(),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      id: Joi.string().allow(""),

      state: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      google_map_point: Joi.any(),

      geo_location: CartModel.GeoLocation(),

      name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      created_by_user_id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      area: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      is_active: Joi.boolean(),

      cart_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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

      id: Joi.string().allow(""),

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
      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      fulfillment_id: Joi.number(),

      shipments: Joi.number(),

      promise: CartModel.ShipmentPromise(),

      dp_options: Joi.any().allow(null),

      order_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      error: Joi.boolean(),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      uid: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),
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
      pan_no: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

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

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
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
      pick_at_store_uid: Joi.number().allow(null),

      aggregator: Joi.string().allow(""),

      meta: Joi.any(),

      staff: CartModel.StaffCheckout(),

      payment_mode: Joi.string().allow("").required(),

      delivery_address: Joi.any(),

      id: Joi.string().allow("").required(),

      files: Joi.array().items(CartModel.Files()),

      device_id: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),

      pos: Joi.boolean(),

      payment_auto_confirm: Joi.boolean(),

      billing_address: Joi.any(),

      extra_meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      merchant_code: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      user_id: Joi.string().allow("").required(),
    });
  }

  static CheckCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      success: Joi.boolean(),

      uid: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      order_id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      cod_charges: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      cod_message: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      cart_id: Joi.number(),

      user_type: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      delivery_charges: Joi.number(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      callback_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      order_id: Joi.string().allow(""),

      data: Joi.any(),

      app_intercept_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      success: Joi.boolean(),
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
      country: Joi.string().allow(""),

      uid: Joi.number(),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      city: Joi.string().allow(""),

      id: Joi.number(),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.number(),

      state: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

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
      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      discount: Joi.number(),
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
