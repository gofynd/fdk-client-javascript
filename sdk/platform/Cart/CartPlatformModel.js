const Joi = require("joi");

class CartModel {
  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
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
      types: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      networks: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static Restrictions() {
    return Joi.object({
      user_type: Joi.string().allow(""),

      coupon_allowed: Joi.boolean(),

      post_order: CartModel.PostOrder(),

      price_range: CartModel.PriceRange(),

      uses: CartModel.UsesRestriction(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      ordering_stores: Joi.array().items(Joi.number()),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      user_groups: Joi.array().items(Joi.number()),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      value_type: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      calculate_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      auto_apply: Joi.boolean(),

      currency_code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
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

      description: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),
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
      key: Joi.number(),

      discount_qty: Joi.number(),

      min: Joi.number(),

      value: Joi.number(),

      max: Joi.number(),
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

  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      user_registered_after: Joi.string().allow("").allow(null),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static Identifier() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
    });
  }

  static CouponAdd() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      restrictions: CartModel.Restrictions(),

      type_slug: Joi.string().allow("").required(),

      rule_definition: CartModel.RuleDefinition().required(),

      _schedule: CartModel.CouponSchedule(),

      display_meta: CartModel.DisplayMeta().required(),

      date_meta: CartModel.CouponDateMeta(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      state: CartModel.State(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      identifiers: CartModel.Identifier().required(),

      action: CartModel.CouponAction(),
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
      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      restrictions: CartModel.Restrictions(),

      type_slug: Joi.string().allow("").required(),

      rule_definition: CartModel.RuleDefinition().required(),

      _schedule: CartModel.CouponSchedule(),

      display_meta: CartModel.DisplayMeta().required(),

      date_meta: CartModel.CouponDateMeta(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      state: CartModel.State(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      identifiers: CartModel.Identifier().required(),

      action: CartModel.CouponAction(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static PostOrder1() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
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
      type: Joi.string().allow("").required(),

      uses: CartModel.PaymentAllowValue1(),

      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Restrictions1() {
    return Joi.object({
      post_order: CartModel.PostOrder1(),

      user_registered: CartModel.UserRegistered(),

      uses: CartModel.UsesRestriction1().required(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      order_quantity: Joi.number(),

      anonymous_users: Joi.boolean(),

      user_id: Joi.array().items(Joi.string().allow("")),

      user_groups: Joi.array().items(Joi.number()),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
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

  static DiscountOffer() {
    return Joi.object({
      code: Joi.string().allow(""),

      max_usage_per_transaction: Joi.number(),

      apportion_discount: Joi.boolean(),

      max_offer_quantity: Joi.number(),

      max_discount_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      discount_price: Joi.number(),

      discount_percentage: Joi.number(),

      discount_amount: Joi.number(),

      min_offer_quantity: Joi.number(),
    });
  }

  static CompareObject() {
    return Joi.object({
      greater_than: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than_equals: Joi.number(),

      less_than: Joi.number(),

      equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      cart_unique_item_amount: CartModel.CompareObject(),

      item_brand: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_category: Joi.array().items(Joi.number()),

      product_tags: Joi.array().items(Joi.string().allow("")),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_company: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      all_items: Joi.boolean(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),

      discount_type: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      offer_label: Joi.string().allow(""),

      name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      published: Joi.boolean().required(),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      code: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      stackable: Joi.boolean(),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      post_order_action: CartModel.PromotionAction(),

      _custom_json: Joi.any(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      currency: Joi.string().allow(""),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      calculate_on: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_priority: Joi.number(),

      _schedule: CartModel.PromotionSchedule(),

      application_id: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),
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

      promotion_type: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      stackable: Joi.boolean(),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      post_order_action: CartModel.PromotionAction(),

      _custom_json: Joi.any(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      currency: Joi.string().allow(""),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      calculate_on: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_priority: Joi.number(),

      _schedule: CartModel.PromotionSchedule(),

      application_id: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      code: Joi.string().allow(""),

      promotion_type: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      stackable: Joi.boolean(),

      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      post_order_action: CartModel.PromotionAction(),

      _custom_json: Joi.any(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      currency: Joi.string().allow(""),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      calculate_on: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_priority: Joi.number(),

      _schedule: CartModel.PromotionSchedule(),

      application_id: Joi.string().allow("").required(),

      promo_group: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),
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
      is_hidden: Joi.boolean(),

      example: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      type: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),
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

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applied: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      value: Joi.number(),

      title: Joi.string().allow("").allow(null),
    });
  }

  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),

      total: Joi.number(),

      fynd_cash: Joi.number(),

      gst_charges: Joi.number(),

      mrp_total: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      coupon: Joi.number(),

      you_saved: Joi.number(),

      subtotal: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),
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
      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: CartModel.CouponBreakup(),

      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      display: Joi.array().items(CartModel.DisplayBreakup()),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

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

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      parent_item_identifiers: Joi.any(),

      store: CartModel.BaseInfo(),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      type: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: CartModel.BaseInfo(),

      size: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      selling: Joi.number(),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static Ownership2() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),
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
      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      mrp_promotion: Joi.boolean(),

      ownership: CartModel.Ownership2(),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      offer_text: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      images: Joi.array().items(CartModel.ProductImage()),

      net_quantity: CartModel.NetQuantity(),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      brand: CartModel.BaseInfo(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),
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

  static CartProductInfo() {
    return Joi.object({
      coupon_message: Joi.string().allow(""),

      key: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      price: CartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      price_per_unit: CartModel.ProductPriceInfo(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      product: CartModel.CartProduct(),

      bulk_offer: Joi.any(),

      quantity: Joi.number(),

      message: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      discount: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      is_set: Joi.boolean(),

      identifiers: CartModel.CartProductIdentifer().required(),
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

      message: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      phone: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      address: Joi.string().allow(""),

      meta: Joi.any(),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      city: Joi.string().allow("").allow(null),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),
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
      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
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
      payment_gateway: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

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

  static OpenApiOrderItem() {
    return Joi.object({
      price_effective: Joi.number().required(),

      product_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_marked: Joi.number().required(),

      loyalty_discount: Joi.number(),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      cashback_applied: Joi.number().required(),

      size: Joi.string().allow("").required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      discount: Joi.number().required(),

      cod_charges: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      employee_discount: Joi.number(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      meta: CartModel.CartItemMeta(),

      delivery_charges: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      coupon_value: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      shipping_address: CartModel.ShippingAddress(),

      loyalty_discount: Joi.number(),

      comment: Joi.string().allow("").allow(null),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      coupon: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      gstin: Joi.string().allow("").allow(null),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      delivery_charges: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      billing_address: CartModel.ShippingAddress().required(),

      order_id: Joi.string().allow(""),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cod_charges: Joi.number().required(),

      employee_discount: Joi.any(),

      currency_code: Joi.string().allow(""),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      order_ref_id: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      fc_index_map: Joi.array().items(Joi.number()),

      comment: Joi.string().allow("").allow(null),

      shipments: Joi.array().items(Joi.any()),

      checkout_mode: Joi.string().allow(""),

      cart_value: Joi.number(),

      gstin: Joi.string().allow("").allow(null),

      bulk_coupon_discount: Joi.number().allow(null),

      last_modified: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(Joi.any()),

      delivery_charges: Joi.any(),

      uid: Joi.number().required(),

      discount: Joi.number(),

      cod_charges: Joi.any(),

      meta: Joi.any().allow(null),

      articles: Joi.array().items(Joi.any()).required(),

      app_id: Joi.string().allow(""),

      fynd_credits: Joi.any(),

      is_default: Joi.boolean().required(),

      _id: Joi.string().allow("").required(),

      pick_up_customer_details: Joi.any().allow(null),

      cashback: Joi.any().required(),

      payments: Joi.any().allow(null),

      coupon: Joi.any().allow(null),

      created_on: Joi.string().allow("").required(),

      buy_now: Joi.boolean(),

      is_active: Joi.boolean(),

      expire_at: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").allow(null),

      promotion: Joi.any(),

      order_id: Joi.string().allow(""),

      merge_qty: Joi.boolean().allow(null),

      user_id: Joi.string().allow("").required(),

      is_archive: Joi.boolean(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.AbandonedCart()),

      result: Joi.any(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      page: CartModel.Page(),
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
      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),

      default_options: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),

      display: Joi.string().allow(""),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      pos: Joi.boolean(),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      store_id: Joi.number(),

      seller_id: Joi.number(),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      extra_meta: Joi.any(),

      item_size: Joi.string().allow(""),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),
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
      user: Joi.any(),

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shared_cart_details: CartModel.SharedCartDetails(),

      uid: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      cart_id: Joi.number(),

      currency: CartModel.CartCurrency(),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),
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
      item_counts: Joi.string().allow(""),

      cart_value: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

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
      created_at: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      user: CartModel.UserInfo(),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),
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

  static PageCoupon() {
    return Joi.object({
      total: Joi.number(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      title: Joi.string().allow(""),
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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static PlatformAddress() {
    return Joi.object({
      phone: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      meta: Joi.any(),

      google_map_point: Joi.any(),

      id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      area_code_slug: Joi.string().allow(""),

      address: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

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
      cart_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      fulfillment_id: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      box_type: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),

      shipments: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      error: Joi.boolean(),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      delivery_promise: CartModel.ShipmentPromise(),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      uid: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_charge_info: Joi.string().allow(""),

      cart_id: Joi.number(),

      currency: CartModel.CartCurrency(),
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
      pan_no: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

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
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),
    });
  }

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      callback_url: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      pos: Joi.boolean(),

      delivery_address: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      billing_address: Joi.any(),

      extra_meta: Joi.any(),

      files: Joi.array().items(CartModel.Files()),

      meta: Joi.any(),

      order_type: Joi.string().allow("").required(),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      payment_auto_confirm: Joi.boolean(),

      staff: CartModel.StaffCheckout(),

      ordering_store: Joi.number().allow(null),

      payment_mode: Joi.string().allow("").required(),

      pick_at_store_uid: Joi.number().allow(null),

      payment_identifier: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").required(),
    });
  }

  static CheckCart() {
    return Joi.object({
      cod_message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charges: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      store_code: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      cod_charges: Joi.number(),

      cart_id: Joi.number(),

      currency: CartModel.CartCurrency(),

      user_type: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      error_message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      callback_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

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
      phone: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      landmark: Joi.string().allow(""),

      id: Joi.number(),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      area_code: Joi.string().allow(""),
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

      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      display_message_en: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      title: Joi.string().allow(""),
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
