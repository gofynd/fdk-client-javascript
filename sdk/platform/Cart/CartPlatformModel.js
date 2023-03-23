const Joi = require("joi");

class CartModel {
  static CouponSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static Rule() {
    return Joi.object({
      discount_qty: Joi.number(),

      value: Joi.number(),

      max: Joi.number(),

      min: Joi.number(),

      key: Joi.number(),
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
      apply: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),
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

      auto_apply: Joi.boolean(),

      value_type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      collection_id: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
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
      remaining: CartModel.UsesRemaining(),

      maximum: CartModel.UsesRemaining(),
    });
  }

  static PostOrder() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
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

      networks: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),

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
      price_range: CartModel.PriceRange(),

      uses: CartModel.UsesRestriction(),

      coupon_allowed: Joi.boolean(),

      post_order: CartModel.PostOrder(),

      ordering_stores: Joi.array().items(Joi.number()),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      user_groups: Joi.array().items(Joi.number()),

      user_type: Joi.string().allow(""),

      platforms: Joi.array().items(Joi.string().allow("")),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_public: Joi.boolean(),

      is_archived: Joi.boolean(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      _schedule: CartModel.CouponSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      code: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      display_meta: CartModel.DisplayMeta().required(),

      author: CartModel.CouponAuthor(),

      date_meta: CartModel.CouponDateMeta(),

      type_slug: Joi.string().allow("").required(),

      validation: CartModel.Validation(),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),

      identifiers: CartModel.Identifier().required(),

      validity: CartModel.Validity().required(),

      restrictions: CartModel.Restrictions(),

      state: CartModel.State(),
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
      _schedule: CartModel.CouponSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      code: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      display_meta: CartModel.DisplayMeta().required(),

      author: CartModel.CouponAuthor(),

      date_meta: CartModel.CouponDateMeta(),

      type_slug: Joi.string().allow("").required(),

      validation: CartModel.Validation(),

      action: CartModel.CouponAction(),

      rule_definition: CartModel.RuleDefinition().required(),

      identifiers: CartModel.Identifier().required(),

      validity: CartModel.Validity().required(),

      restrictions: CartModel.Restrictions(),

      state: CartModel.State(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
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

      uses: CartModel.PaymentAllowValue1(),

      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UserRegistered() {
    return Joi.object({
      start: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),
    });
  }

  static Restrictions1() {
    return Joi.object({
      uses: CartModel.UsesRestriction1().required(),

      post_order: CartModel.PostOrder1(),

      order_quantity: Joi.number(),

      user_id: Joi.array().items(Joi.string().allow("")),

      anonymous_users: Joi.boolean(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_registered: CartModel.UserRegistered(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),
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

  static CompareObject() {
    return Joi.object({
      equals: Joi.number(),

      greater_than: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      product_tags: Joi.array().items(Joi.string().allow("")),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_company: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_store: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_id: Joi.array().items(Joi.number()),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      apportion_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      discount_percentage: Joi.number(),

      max_discount_amount: Joi.number(),

      min_offer_quantity: Joi.number(),

      partial_can_ret: Joi.boolean(),

      max_usage_per_transaction: Joi.number(),

      discount_amount: Joi.number(),

      discount_price: Joi.number(),

      max_offer_quantity: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),

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

  static PromotionAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      start: Joi.string().allow("").required(),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),
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
      currency: Joi.string().allow(""),

      code: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      apply_all_discount: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      post_order_action: CartModel.PromotionAction(),

      mode: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      author: CartModel.PromotionAuthor(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      date_meta: CartModel.PromotionDateMeta(),

      _schedule: CartModel.PromotionSchedule(),

      calculate_on: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),
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
      currency: Joi.string().allow(""),

      code: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      apply_all_discount: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      post_order_action: CartModel.PromotionAction(),

      mode: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      author: CartModel.PromotionAuthor(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      date_meta: CartModel.PromotionDateMeta(),

      _schedule: CartModel.PromotionSchedule(),

      calculate_on: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      currency: Joi.string().allow(""),

      code: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      apply_all_discount: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      post_order_action: CartModel.PromotionAction(),

      mode: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      author: CartModel.PromotionAuthor(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      date_meta: CartModel.PromotionDateMeta(),

      _schedule: CartModel.PromotionSchedule(),

      calculate_on: Joi.string().allow(""),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),
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
      created_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      example: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_hidden: Joi.boolean(),
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

  static Ownership2() {
    return Joi.object({
      payable_category: Joi.string().allow(""),

      payable_by: Joi.string().allow(""),
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
      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: CartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),
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

  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      ownership: CartModel.Ownership2(),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),
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
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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

  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      brand: CartModel.BaseInfo(),

      action: CartModel.ProductAction(),

      name: Joi.string().allow(""),

      item_code: Joi.string().allow("").allow(null),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      net_quantity: CartModel.NetQuantity(),

      slug: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      selling: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
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

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),
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

      size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      bulk_offer: Joi.any(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      is_set: Joi.boolean(),

      product: CartModel.CartProduct(),

      promo_meta: CartModel.PromoMeta(),

      discount: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      identifiers: CartModel.CartProductIdentifer().required(),

      availability: CartModel.ProductAvailability(),

      coupon_message: Joi.string().allow(""),

      key: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      you_saved: Joi.number(),

      mrp_total: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      coupon: Joi.number(),

      cod_charge: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      fynd_cash: Joi.number(),

      gst_charges: Joi.number(),

      subtotal: Joi.number(),

      vog: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      coupon_type: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      type: Joi.string().allow(""),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      description: Joi.string().allow(""),

      applicable: Joi.number(),

      is_applied: Joi.boolean(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: CartModel.RawBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),
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
      meta: Joi.any(),

      area_code: Joi.string().allow("").required(),

      area_code_slug: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),

      pincode: Joi.number(),

      country_phone_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      phone: Joi.number(),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").allow(null),

      area: Joi.string().allow(""),
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
      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),
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
      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

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

  static OpenApiOrderItem() {
    return Joi.object({
      product_id: Joi.number().required(),

      extra_meta: Joi.any(),

      delivery_charges: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      cashback_applied: Joi.number().required(),

      discount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_marked: Joi.number().required(),

      employee_discount: Joi.number(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      price_effective: Joi.number().required(),

      cod_charges: Joi.number().required(),

      loyalty_discount: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      quantity: Joi.number(),

      size: Joi.string().allow("").required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      shipping_address: CartModel.ShippingAddress(),

      coupon_code: Joi.string().allow("").required(),

      order_id: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      employee_discount: Joi.any(),

      cod_charges: Joi.number().required(),

      billing_address: CartModel.ShippingAddress().required(),

      cashback_applied: Joi.number().required(),

      coupon: Joi.string().allow(""),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cart_value: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      coupon_value: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      loyalty_discount: Joi.number(),

      gstin: Joi.string().allow("").allow(null),

      delivery_charges: Joi.number().required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      order_ref_id: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      pick_up_customer_details: Joi.any().allow(null),

      payment_mode: Joi.string().allow("").allow(null),

      bulk_coupon_discount: Joi.number().allow(null),

      promotion: Joi.any(),

      meta: Joi.any().allow(null),

      payments: Joi.any().allow(null),

      order_id: Joi.string().allow(""),

      fc_index_map: Joi.array().items(Joi.number()),

      articles: Joi.array().items(Joi.any()).required(),

      checkout_mode: Joi.string().allow(""),

      merge_qty: Joi.boolean().allow(null),

      _id: Joi.string().allow("").required(),

      cart_value: Joi.number(),

      app_id: Joi.string().allow(""),

      delivery_charges: Joi.any(),

      cashback: Joi.any().required(),

      last_modified: Joi.string().allow("").required(),

      expire_at: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      buy_now: Joi.boolean(),

      cod_charges: Joi.any(),

      created_on: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      discount: Joi.number(),

      coupon: Joi.any().allow(null),

      payment_methods: Joi.array().items(Joi.any()),

      uid: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      is_archive: Joi.boolean(),

      gstin: Joi.string().allow("").allow(null),

      shipments: Joi.array().items(Joi.any()),

      fynd_credits: Joi.any(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      result: Joi.any(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      page: CartModel.Page(),
    });
  }

  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
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
      checkout_mode: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      pan_config: Joi.any(),

      pan_no: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      article_assignment: Joi.any(),

      extra_meta: Joi.any(),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      pos: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      display: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),
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

      partial: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      item_index: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),

      token: Joi.string().allow(""),

      user: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      shared_cart_details: CartModel.SharedCartDetails(),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      cart_id: Joi.number(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
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
      created_on: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      user_id: Joi.string().allow(""),

      cart_value: Joi.number(),

      cart_id: Joi.string().allow(""),

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
      _id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      message: Joi.string().allow(""),

      pan_config: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      user: CartModel.UserInfo(),

      buy_now: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
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
      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      coupon_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

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
      tags: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      is_default_address: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      country: Joi.string().allow(""),

      google_map_point: Joi.any(),

      created_by_user_id: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

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
      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),

      success: Joi.boolean(),
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

      checkout_mode: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      dp_id: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      items: Joi.array().items(CartModel.CartProductInfo()),

      promise: CartModel.ShipmentPromise(),

      shipments: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      error: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),
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
      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      pan_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),

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
      _id: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
    });
  }

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      delivery_address: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      meta: Joi.any(),

      files: Joi.array().items(CartModel.Files()),

      pos: Joi.boolean(),

      merchant_code: Joi.string().allow(""),

      billing_address: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      pick_at_store_uid: Joi.number().allow(null),

      billing_address_id: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      staff: CartModel.StaffCheckout(),

      payment_identifier: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow("").required(),

      extra_meta: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      device_id: Joi.string().allow("").allow(null),

      id: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      currency: CartModel.CartCurrency(),

      error_message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      user_type: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      restrict_checkout: Joi.boolean(),

      delivery_charges: Joi.number(),

      cod_message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      cod_charges: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      uid: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      cart_id: Joi.number(),

      coupon_text: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

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
      area_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.number(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      landmark: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      id: Joi.number(),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area: Joi.string().allow(""),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.PickupStoreDetail()),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

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
