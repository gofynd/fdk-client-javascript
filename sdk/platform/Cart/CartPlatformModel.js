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

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
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

      remove: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),
    });
  }

  static PostOrder() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
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
      types: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      networks: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),
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
      post_order: CartModel.PostOrder(),

      user_type: Joi.string().allow(""),

      price_range: CartModel.PriceRange(),

      coupon_allowed: Joi.boolean(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      ordering_stores: Joi.array().items(Joi.number()),

      user_groups: Joi.array().items(Joi.number()),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      uses: CartModel.UsesRestriction(),

      platforms: Joi.array().items(Joi.string().allow("")),
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

      user_registered_after: Joi.string().allow("").allow(null),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static Rule() {
    return Joi.object({
      key: Joi.number(),

      discount_qty: Joi.number(),

      value: Joi.number(),

      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      applicable_on: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      is_exact: Joi.boolean(),

      currency_code: Joi.string().allow(""),

      calculate_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),

      is_display: Joi.boolean(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),
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

      company_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      article_id: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAdd() {
    return Joi.object({
      action: CartModel.CouponAction(),

      display_meta: CartModel.DisplayMeta().required(),

      type_slug: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      ownership: CartModel.Ownership().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      tags: Joi.array().items(Joi.string().allow("")),

      rule_definition: CartModel.RuleDefinition().required(),

      code: Joi.string().allow("").required(),

      state: CartModel.State(),

      author: CartModel.CouponAuthor(),

      _schedule: CartModel.CouponSchedule(),

      date_meta: CartModel.CouponDateMeta(),

      identifiers: CartModel.Identifier().required(),
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
      action: CartModel.CouponAction(),

      display_meta: CartModel.DisplayMeta().required(),

      type_slug: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      ownership: CartModel.Ownership().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      tags: Joi.array().items(Joi.string().allow("")),

      rule_definition: CartModel.RuleDefinition().required(),

      code: Joi.string().allow("").required(),

      state: CartModel.State(),

      author: CartModel.CouponAuthor(),

      _schedule: CartModel.CouponSchedule(),

      date_meta: CartModel.CouponDateMeta(),

      identifiers: CartModel.Identifier().required(),
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
      uses: CartModel.PaymentAllowValue1(),

      type: Joi.string().allow("").required(),

      codes: Joi.array().items(Joi.string().allow("")),
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

  static Restrictions1() {
    return Joi.object({
      user_registered: CartModel.UserRegistered(),

      post_order: CartModel.PostOrder1(),

      anonymous_users: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      uses: CartModel.UsesRestriction1().required(),

      platforms: Joi.array().items(Joi.string().allow("")),

      order_quantity: Joi.number(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      duration: Joi.number().allow(null),

      published: Joi.boolean().required(),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
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
      offer_label: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static CompareObject() {
    return Joi.object({
      greater_than: Joi.number(),

      equals: Joi.number(),

      less_than: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_category: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_brand: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      cart_total: CartModel.CompareObject(),

      product_tags: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_brand: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_exclude_id: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      partial_can_ret: Joi.boolean(),

      max_offer_quantity: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      apportion_discount: Joi.boolean(),

      max_discount_amount: Joi.number(),

      discount_amount: Joi.number(),

      discount_percentage: Joi.number(),

      code: Joi.string().allow(""),

      min_offer_quantity: Joi.number(),

      discount_price: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      item_criteria: CartModel.ItemCriteria().required(),

      buy_condition: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),

      discount_type: Joi.string().allow("").required(),
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

  static PromotionListItem() {
    return Joi.object({
      restrictions: CartModel.Restrictions1(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_all_discount: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      date_meta: CartModel.PromotionDateMeta(),

      application_id: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      ownership: CartModel.Ownership1().required(),

      mode: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      currency: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      stackable: Joi.boolean(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      visiblility: CartModel.Visibility(),
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

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_all_discount: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      date_meta: CartModel.PromotionDateMeta(),

      application_id: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      ownership: CartModel.Ownership1().required(),

      mode: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      currency: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      stackable: Joi.boolean(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      visiblility: CartModel.Visibility(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      restrictions: CartModel.Restrictions1(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_all_discount: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      date_meta: CartModel.PromotionDateMeta(),

      application_id: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      ownership: CartModel.Ownership1().required(),

      mode: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      currency: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      stackable: Joi.boolean(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      visiblility: CartModel.Visibility(),
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

      subtitle: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      description: Joi.string().allow(""),

      example: Joi.string().allow(""),

      title: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      type: Joi.string().allow(""),
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

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),
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
      quantity: Joi.number(),

      store: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      seller: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      size: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      add_on: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static Ownership2() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
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

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),
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

  static AppliedPromotion() {
    return Joi.object({
      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),

      ownership: CartModel.Ownership2(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      amount: Joi.number(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      offer_text: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      action: CartModel.ProductAction(),

      name: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      uid: Joi.number(),

      item_code: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      net_quantity: CartModel.NetQuantity(),
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

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      price: CartModel.ProductPriceInfo(),

      availability: CartModel.ProductAvailability(),

      coupon_message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      key: Joi.string().allow(""),

      is_set: Joi.boolean(),

      price_per_unit: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      message: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      bulk_offer: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      vog: Joi.number(),

      discount: Joi.number(),

      subtotal: Joi.number(),

      you_saved: Joi.number(),

      cod_charge: Joi.number(),

      coupon: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_cash: Joi.number(),

      convenience_fee: Joi.number(),

      gst_charges: Joi.number(),

      total: Joi.number(),

      mrp_total: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      code: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: CartModel.RawBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      loyalty_points: CartModel.LoyaltyPoints(),

      coupon: CartModel.CouponBreakup(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

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
      name: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      country_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      meta: Joi.any(),

      country_iso_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      area_code_slug: Joi.string().allow(""),

      pincode: Joi.number(),

      phone: Joi.number(),

      state: Joi.string().allow("").allow(null),

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
      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),
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
      primary_item: Joi.boolean(),

      group_id: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: CartModel.MultiTenderPaymentMeta(),

      name: Joi.string().allow(""),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      quantity: Joi.number(),

      extra_meta: Joi.any(),

      coupon_effective_discount: Joi.number().required(),

      discount: Joi.number().required(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cashback_applied: Joi.number().required(),

      price_effective: Joi.number().required(),

      size: Joi.string().allow("").required(),

      delivery_charges: Joi.number().required(),

      price_marked: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      amount_paid: Joi.number().required(),

      cod_charges: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      product_id: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      employee_discount: Joi.any(),

      coupon_code: Joi.string().allow("").required(),

      coupon: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      shipping_address: CartModel.ShippingAddress(),

      affiliate_order_id: Joi.string().allow(""),

      billing_address: CartModel.ShippingAddress().required(),

      coupon_value: Joi.number().required(),

      gstin: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      cashback_applied: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      order_id: Joi.string().allow(""),

      files: Joi.array().items(CartModel.OpenApiFiles()),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      order_ref_id: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      fynd_credits: Joi.any(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean(),

      meta: Joi.any().allow(null),

      articles: Joi.array().items(Joi.any()).required(),

      coupon: Joi.any().allow(null),

      last_modified: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").allow(null),

      delivery_charges: Joi.any(),

      created_on: Joi.string().allow("").required(),

      merge_qty: Joi.boolean().allow(null),

      comment: Joi.string().allow("").allow(null),

      uid: Joi.number().required(),

      payments: Joi.any().allow(null),

      is_archive: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      fc_index_map: Joi.array().items(Joi.number()),

      expire_at: Joi.string().allow("").required(),

      pick_up_customer_details: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      cart_value: Joi.number(),

      user_id: Joi.string().allow("").required(),

      discount: Joi.number(),

      gstin: Joi.string().allow("").allow(null),

      bulk_coupon_discount: Joi.number().allow(null),

      shipments: Joi.array().items(Joi.any()),

      app_id: Joi.string().allow(""),

      cashback: Joi.any().required(),

      promotion: Joi.any(),

      cod_charges: Joi.any(),

      buy_now: Joi.boolean(),

      payment_methods: Joi.array().items(Joi.any()),

      order_id: Joi.string().allow(""),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      result: Joi.any(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.AbandonedCart()),

      page: CartModel.Page(),

      success: Joi.boolean(),
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
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      pan_no: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      pan_config: Joi.any(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      article_assignment: Joi.any(),

      item_size: Joi.string().allow(""),

      pos: Joi.boolean(),

      store_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      seller_id: Joi.number(),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      item_id: Joi.number(),
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
      partial: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      item_id: Joi.number(),

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
      source: Joi.any(),

      meta: Joi.any(),

      user: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      shared_cart_details: CartModel.SharedCartDetails(),

      message: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

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
      pick_up_customer_details: Joi.any(),

      created_on: Joi.string().allow(""),

      cart_value: Joi.number(),

      item_counts: Joi.number(),

      cart_id: Joi.string().allow(""),

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
      created_at: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      external_id: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      pan_config: Joi.any(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      pan_no: Joi.string().allow(""),

      message: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      user: CartModel.UserInfo(),
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
      current: Joi.number(),

      has_next: Joi.boolean(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      sub_title: Joi.string().allow(""),
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
      address: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: Joi.any(),

      country: Joi.string().allow(""),

      email: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      state: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      city: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      area: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      phone: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
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

      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),
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
      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      fulfillment_id: Joi.number(),

      shipments: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      items: Joi.array().items(CartModel.CartProductInfo()),

      order_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      error: Joi.boolean(),

      message: Joi.string().allow(""),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
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
      employee_code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),
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
      extra_meta: Joi.any(),

      meta: Joi.any(),

      staff: CartModel.StaffCheckout(),

      merchant_code: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      billing_address: Joi.any(),

      delivery_address: Joi.any(),

      payment_params: Joi.any().allow(null),

      aggregator: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      payment_mode: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      id: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow(""),

      files: Joi.array().items(CartModel.Files()),

      employee_code: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      pos: Joi.boolean(),

      address_id: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      payment_auto_confirm: Joi.boolean(),

      payment_identifier: Joi.string().allow("").allow(null),

      pick_at_store_uid: Joi.number().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_order_value: Joi.number(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charges: Joi.number(),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      store_code: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      buy_now: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      cod_charges: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      store_emps: Joi.array().items(Joi.any()),

      order_id: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      order_id: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

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
      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      pincode: Joi.number(),

      phone: Joi.string().allow(""),

      uid: Joi.number(),

      id: Joi.number(),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

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

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),
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
