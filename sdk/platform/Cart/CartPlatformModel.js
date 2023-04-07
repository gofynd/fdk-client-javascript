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
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      value_type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      applicable_on: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      scope: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Rule() {
    return Joi.object({
      max: Joi.number(),

      discount_qty: Joi.number(),

      key: Joi.number(),

      min: Joi.number(),

      value: Joi.number(),
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

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static PostOrder() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
    });
  }

  static Restrictions() {
    return Joi.object({
      price_range: CartModel.PriceRange(),

      ordering_stores: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction(),

      coupon_allowed: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      user_type: Joi.string().allow(""),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      platforms: Joi.array().items(Joi.string().allow("")),

      post_order: CartModel.PostOrder(),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),

      is_public: Joi.boolean(),
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

      title: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),
    });
  }

  static Identifier() {
    return Joi.object({
      collection_id: Joi.array().items(Joi.string().allow("")),

      article_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
    });
  }

  static CouponAdd() {
    return Joi.object({
      ownership: CartModel.Ownership().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      restrictions: CartModel.Restrictions(),

      state: CartModel.State(),

      action: CartModel.CouponAction(),

      display_meta: CartModel.DisplayMeta().required(),

      identifiers: CartModel.Identifier().required(),

      author: CartModel.CouponAuthor(),

      date_meta: CartModel.CouponDateMeta(),

      code: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      type_slug: Joi.string().allow("").required(),

      validation: CartModel.Validation(),

      _schedule: CartModel.CouponSchedule(),
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
      ownership: CartModel.Ownership().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      restrictions: CartModel.Restrictions(),

      state: CartModel.State(),

      action: CartModel.CouponAction(),

      display_meta: CartModel.DisplayMeta().required(),

      identifiers: CartModel.Identifier().required(),

      author: CartModel.CouponAuthor(),

      date_meta: CartModel.CouponDateMeta(),

      code: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      type_slug: Joi.string().allow("").required(),

      validation: CartModel.Validation(),

      _schedule: CartModel.CouponSchedule(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static CompareObject() {
    return Joi.object({
      greater_than: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than: Joi.number(),

      equals: Joi.number(),

      less_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      cart_total: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_brand: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_id: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      cart_unique_item_amount: CartModel.CompareObject(),

      product_tags: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),

      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      start: Joi.string().allow("").required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),

      offer_label: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      max_offer_quantity: Joi.number(),

      min_offer_quantity: Joi.number(),

      discount_amount: Joi.number(),

      apportion_discount: Joi.boolean(),

      discount_price: Joi.number(),

      discount_percentage: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      partial_can_ret: Joi.boolean(),

      code: Joi.string().allow(""),

      max_discount_amount: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      discount_type: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),

      buy_condition: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),
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

      uses: CartModel.UsesRestriction1().required(),

      user_id: Joi.array().items(Joi.string().allow("")),

      order_quantity: Joi.number(),

      user_groups: Joi.array().items(Joi.number()),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_registered: CartModel.UserRegistered(),

      platforms: Joi.array().items(Joi.string().allow("")),

      post_order: CartModel.PostOrder1(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      ownership: CartModel.Ownership1().required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      post_order_action: CartModel.PromotionAction(),

      _schedule: CartModel.PromotionSchedule(),

      calculate_on: Joi.string().allow(""),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      application_id: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      apply_exclusive: Joi.string().allow("").allow(null),

      stackable: Joi.boolean(),

      visiblility: CartModel.Visibility(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      restrictions: CartModel.Restrictions1(),

      author: CartModel.PromotionAuthor(),

      promo_group: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),
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
      ownership: CartModel.Ownership1().required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      post_order_action: CartModel.PromotionAction(),

      _schedule: CartModel.PromotionSchedule(),

      calculate_on: Joi.string().allow(""),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      application_id: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      apply_exclusive: Joi.string().allow("").allow(null),

      stackable: Joi.boolean(),

      visiblility: CartModel.Visibility(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      restrictions: CartModel.Restrictions1(),

      author: CartModel.PromotionAuthor(),

      promo_group: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      ownership: CartModel.Ownership1().required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      post_order_action: CartModel.PromotionAction(),

      _schedule: CartModel.PromotionSchedule(),

      calculate_on: Joi.string().allow(""),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      application_id: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      apply_exclusive: Joi.string().allow("").allow(null),

      stackable: Joi.boolean(),

      visiblility: CartModel.Visibility(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      restrictions: CartModel.Restrictions1(),

      author: CartModel.PromotionAuthor(),

      promo_group: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),
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
      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      type: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      example: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      created_on: Joi.string().allow(""),
    });
  }

  static CartItem() {
    return Joi.object({
      product_id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      quantity: Joi.number(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),

      subtotal: Joi.number(),

      discount: Joi.number(),

      convenience_fee: Joi.number(),

      mrp_total: Joi.number(),

      vog: Joi.number(),

      fynd_cash: Joi.number(),

      gst_charges: Joi.number(),

      total: Joi.number(),

      you_saved: Joi.number(),

      coupon: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      title: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      message: Joi.string().allow(""),

      coupon_value: Joi.number(),

      code: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      value: Joi.number(),

      uid: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),
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

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      value: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: CartModel.RawBreakup(),

      coupon: CartModel.CouponBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      display: Joi.array().items(CartModel.DisplayBreakup()),
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

  static ProductArticle() {
    return Joi.object({
      seller: CartModel.BaseInfo(),

      _custom_json: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      size: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      quantity: Joi.number(),

      price: CartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),

      offer: Joi.any(),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      ownership: CartModel.Ownership2(),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      promotion_group: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      slug: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      action: CartModel.ProductAction(),

      item_code: Joi.string().allow("").allow(null),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      name: Joi.string().allow(""),

      net_quantity: CartModel.NetQuantity(),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      brand: CartModel.BaseInfo(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      article: CartModel.ProductArticle(),

      discount: Joi.string().allow(""),

      is_set: Joi.boolean(),

      promo_meta: CartModel.PromoMeta(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      availability: CartModel.ProductAvailability(),

      bulk_offer: Joi.any(),

      coupon_message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      message: Joi.string().allow(""),

      key: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      price_per_unit: CartModel.ProductPriceInfo(),

      product: CartModel.CartProduct(),

      quantity: Joi.number(),

      price: CartModel.ProductPriceInfo(),
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
      errors: Joi.any(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      meta: Joi.any(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.number(),

      area_code: Joi.string().allow("").required(),

      country: Joi.string().allow("").allow(null),

      country_phone_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      country_code: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),
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
      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static OpenApiFiles() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
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
      order_id: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),

      meta: CartModel.MultiTenderPaymentMeta(),

      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      meta: CartModel.CartItemMeta(),

      discount: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cashback_applied: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      delivery_charges: Joi.number().required(),

      employee_discount: Joi.number(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      loyalty_discount: Joi.number(),

      extra_meta: Joi.any(),

      product_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      coupon_effective_discount: Joi.number().required(),

      quantity: Joi.number(),

      cod_charges: Joi.number().required(),

      amount_paid: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      billing_address: CartModel.ShippingAddress().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cashback_applied: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      employee_discount: Joi.any(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      loyalty_discount: Joi.number(),

      cart_value: Joi.number().required(),

      coupon: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow(""),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      shipping_address: CartModel.ShippingAddress(),

      coupon_value: Joi.number().required(),

      cod_charges: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      comment: Joi.string().allow("").allow(null),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      success: Joi.boolean(),

      order_ref_id: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      articles: Joi.array().items(Joi.any()).required(),

      delivery_charges: Joi.any(),

      user_id: Joi.string().allow("").required(),

      fynd_credits: Joi.any(),

      pick_up_customer_details: Joi.any().allow(null),

      is_archive: Joi.boolean(),

      coupon: Joi.any().allow(null),

      cart_value: Joi.number(),

      meta: Joi.any().allow(null),

      cashback: Joi.any().required(),

      fc_index_map: Joi.array().items(Joi.number()),

      last_modified: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      bulk_coupon_discount: Joi.number().allow(null),

      discount: Joi.number(),

      app_id: Joi.string().allow(""),

      expire_at: Joi.string().allow("").required(),

      payments: Joi.any().allow(null),

      buy_now: Joi.boolean(),

      promotion: Joi.any(),

      gstin: Joi.string().allow("").allow(null),

      is_active: Joi.boolean(),

      payment_mode: Joi.string().allow("").allow(null),

      payment_methods: Joi.array().items(Joi.any()),

      _id: Joi.string().allow("").required(),

      shipments: Joi.array().items(Joi.any()),

      cod_charges: Joi.any(),

      merge_qty: Joi.boolean().allow(null),

      created_on: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      success: Joi.boolean(),

      page: CartModel.Page(),

      message: Joi.string().allow(""),

      result: Joi.any(),

      items: Joi.array().items(CartModel.AbandonedCart()),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
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
      pan_no: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      breakup_values: CartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      pan_config: Joi.any(),

      last_modified: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      pos: Joi.boolean(),

      _custom_json: Joi.any(),

      display: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      article_assignment: Joi.any(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      store_id: Joi.number(),

      seller_id: Joi.number(),
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

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),
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
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      user: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      cart_id: Joi.number(),

      message: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      delivery_promise: CartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),
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
      cart_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      item_counts: Joi.number(),

      cart_value: Joi.number(),

      created_on: Joi.string().allow(""),
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

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pan_config: Joi.any(),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      last_modified: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      user: CartModel.UserInfo(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),
    });
  }

  static DeleteCartRequest() {
    return Joi.object({
      cart_id_list: Joi.array().items(Joi.string().allow("")),
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
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),

      total_item_count: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      title: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      coupon_code: Joi.string().allow(""),
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
      is_default_address: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      meta: Joi.any(),

      geo_location: CartModel.GeoLocation(),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      country: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

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
      is_deleted: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static PlatformSelectCartAddressRequest() {
    return Joi.object({
      billing_address_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      shipment_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),

      shipments: Joi.number(),

      order_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      items: Joi.array().items(CartModel.CartProductInfo()),

      fulfillment_id: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      message: Joi.string().allow(""),

      error: Joi.boolean(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      delivery_promise: CartModel.ShipmentPromise(),

      last_modified: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),
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
      pan_no: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),

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
      last_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

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
      ordering_store: Joi.number().allow(null),

      pos: Joi.boolean(),

      employee_code: Joi.string().allow("").allow(null),

      checkout_mode: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      delivery_address: Joi.any(),

      user_id: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      meta: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      staff: CartModel.StaffCheckout(),

      device_id: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),

      pick_at_store_uid: Joi.number().allow(null),

      billing_address: Joi.any(),

      files: Joi.array().items(CartModel.Files()),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      order_id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      success: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      user_type: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cod_available: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      cart_id: Joi.number(),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      store_code: Joi.string().allow(""),

      cod_charges: Joi.number(),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      app_intercept_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),
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
      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

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
      payment_identifier: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

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
      success: Joi.boolean().required(),

      coupon_validity: CartModel.CouponValidity(),

      message: Joi.string().allow(""),
    });
  }
}
module.exports = CartModel;
