const Joi = require("joi");

class CartModel {
  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static Identifier() {
    return Joi.object({
      exclude_brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),
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
      remove: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Rule() {
    return Joi.object({
      value: Joi.number(),

      key: Joi.number(),

      min: Joi.number(),

      max: Joi.number(),

      discount_qty: Joi.number(),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),
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

      networks: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
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

  static Restrictions() {
    return Joi.object({
      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_type: Joi.string().allow(""),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      uses: CartModel.UsesRestriction(),

      ordering_stores: Joi.array().items(Joi.number()),

      coupon_allowed: Joi.boolean(),

      post_order: CartModel.PostOrder(),

      price_range: CartModel.PriceRange(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      value_type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      calculate_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      auto_apply: Joi.boolean(),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      action: CartModel.CouponAction(),

      date_meta: CartModel.CouponDateMeta(),

      type_slug: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),

      display_meta: CartModel.DisplayMeta().required(),

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      author: CartModel.CouponAuthor(),

      tags: Joi.array().items(Joi.string().allow("")),

      validity: CartModel.Validity().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validation: CartModel.Validation(),

      restrictions: CartModel.Restrictions(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      code: Joi.string().allow("").required(),
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
      action: CartModel.CouponAction(),

      date_meta: CartModel.CouponDateMeta(),

      type_slug: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),

      display_meta: CartModel.DisplayMeta().required(),

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      author: CartModel.CouponAuthor(),

      tags: Joi.array().items(Joi.string().allow("")),

      validity: CartModel.Validity().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validation: CartModel.Validation(),

      restrictions: CartModel.Restrictions(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      code: Joi.string().allow("").required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: CartModel.CouponSchedule(),

      archive: Joi.boolean(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
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

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than_equals: Joi.number(),

      less_than: Joi.number(),

      greater_than: Joi.number(),

      equals: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_category: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_id: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_id: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      all_items: Joi.boolean(),

      item_brand: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      product_tags: Joi.array().items(Joi.string().allow("")),

      item_company: Joi.array().items(Joi.number()),
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
      discount_amount: Joi.number(),

      discount_price: Joi.number(),

      max_offer_quantity: Joi.number(),

      apportion_discount: Joi.boolean(),

      min_offer_quantity: Joi.number(),

      discount_percentage: Joi.number(),

      max_discount_amount: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      partial_can_ret: Joi.boolean(),

      code: Joi.string().allow(""),
    });
  }

  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),

      discount_type: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),

      item_criteria: CartModel.ItemCriteria().required(),
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
      uses: CartModel.PaymentAllowValue1(),

      type: Joi.string().allow("").required(),

      codes: Joi.array().items(Joi.string().allow("")),
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
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static Restrictions1() {
    return Joi.object({
      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      anonymous_users: Joi.boolean(),

      order_quantity: Joi.number(),

      user_registered: CartModel.UserRegistered(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      uses: CartModel.UsesRestriction1().required(),

      post_order: CartModel.PostOrder1(),

      user_id: Joi.array().items(Joi.string().allow("")),
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

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      start: Joi.string().allow("").required(),

      cron: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),
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
      ownership: CartModel.Ownership1().required(),

      promotion_type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_priority: Joi.number(),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      currency: Joi.string().allow(""),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      restrictions: CartModel.Restrictions1(),

      promo_group: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      visiblility: CartModel.Visibility(),

      _custom_json: Joi.any(),

      application_id: Joi.string().allow("").required(),

      stackable: Joi.boolean(),
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
      ownership: CartModel.Ownership1().required(),

      promotion_type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_priority: Joi.number(),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      currency: Joi.string().allow(""),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      restrictions: CartModel.Restrictions1(),

      promo_group: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      visiblility: CartModel.Visibility(),

      _custom_json: Joi.any(),

      application_id: Joi.string().allow("").required(),

      stackable: Joi.boolean(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      ownership: CartModel.Ownership1().required(),

      promotion_type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_priority: Joi.number(),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      currency: Joi.string().allow(""),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      restrictions: CartModel.Restrictions1(),

      promo_group: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      visiblility: CartModel.Visibility(),

      _custom_json: Joi.any(),

      application_id: Joi.string().allow("").required(),

      stackable: Joi.boolean(),
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

      is_hidden: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      description: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),
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
      is_applied: Joi.boolean(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),

      total: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      mrp_total: Joi.number(),

      total: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      coupon: Joi.number(),

      delivery_charge: Joi.number(),

      subtotal: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      you_saved: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      message: Joi.string().allow(""),

      coupon_value: Joi.number(),

      value: Joi.number(),

      uid: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: CartModel.LoyaltyPoints(),

      raw: CartModel.RawBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
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

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      action: CartModel.ProductAction(),

      net_quantity: CartModel.NetQuantity(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      uid: Joi.number(),

      type: Joi.string().allow(""),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      brand: CartModel.BaseInfo(),

      name: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      add_on: Joi.number(),

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

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      extra_meta: Joi.any(),

      uid: Joi.string().allow(""),

      size: Joi.string().allow(""),

      type: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      quantity: Joi.number(),

      price: CartModel.ArticlePriceInfo(),

      _custom_json: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      parent_item_identifiers: Joi.any(),

      seller: CartModel.BaseInfo(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),
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

  static Ownership2() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),

      item_criteria: Joi.any(),
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
      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      offer_text: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      ownership: CartModel.Ownership2(),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_group: Joi.string().allow(""),

      amount: Joi.number(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      discount: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      is_set: Joi.boolean(),

      product: CartModel.CartProduct(),

      key: Joi.string().allow(""),

      quantity: Joi.number(),

      price: CartModel.ProductPriceInfo(),

      promo_meta: CartModel.PromoMeta(),

      article: CartModel.ProductArticle(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      parent_item_identifiers: Joi.any(),

      price_per_unit: CartModel.ProductPriceInfo(),

      availability: CartModel.ProductAvailability(),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      country_phone_code: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      area_code_slug: Joi.string().allow(""),

      phone: Joi.number(),

      country_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),
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
      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      extra_meta: Joi.any().allow(null),

      payment_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),

      name: Joi.string().allow(""),

      meta: CartModel.MultiTenderPaymentMeta(),

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
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      amount_paid: Joi.number().required(),

      extra_meta: Joi.any(),

      product_id: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      discount: Joi.number().required(),

      loyalty_discount: Joi.number(),

      meta: CartModel.CartItemMeta(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      quantity: Joi.number(),

      price_effective: Joi.number().required(),

      employee_discount: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      size: Joi.string().allow("").required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      coupon_value: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      employee_discount: Joi.any(),

      cart_value: Joi.number().required(),

      order_id: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cashback_applied: Joi.number().required(),

      loyalty_discount: Joi.number(),

      gstin: Joi.string().allow("").allow(null),

      delivery_charges: Joi.number().required(),

      coupon: Joi.string().allow(""),

      billing_address: CartModel.ShippingAddress().required(),

      cod_charges: Joi.number().required(),

      shipping_address: CartModel.ShippingAddress(),

      comment: Joi.string().allow("").allow(null),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_ref_id: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      articles: Joi.array().items(Joi.any()).required(),

      fynd_credits: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      shipments: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      cart_value: Joi.number(),

      payment_mode: Joi.string().allow("").allow(null),

      meta: Joi.any().allow(null),

      uid: Joi.number().required(),

      delivery_charges: Joi.any(),

      coupon: Joi.any().allow(null),

      merge_qty: Joi.boolean().allow(null),

      payments: Joi.any().allow(null),

      pick_up_customer_details: Joi.any().allow(null),

      expire_at: Joi.string().allow("").required(),

      is_archive: Joi.boolean(),

      app_id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      bulk_coupon_discount: Joi.number().allow(null),

      promotion: Joi.any(),

      order_id: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      user_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      payment_methods: Joi.array().items(Joi.any()),

      cashback: Joi.any().required(),

      discount: Joi.number(),

      gstin: Joi.string().allow("").allow(null),

      cod_charges: Joi.any(),

      is_default: Joi.boolean().required(),

      last_modified: Joi.string().allow("").required(),

      fc_index_map: Joi.array().items(Joi.number()),

      comment: Joi.string().allow("").allow(null),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.AbandonedCart()),

      message: Joi.string().allow(""),

      page: CartModel.Page(),

      result: Joi.any(),

      success: Joi.boolean(),
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

      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      seller_id: Joi.number(),

      extra_meta: Joi.any(),

      item_id: Joi.number(),

      store_id: Joi.number(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      _custom_json: Joi.any(),

      pos: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_assignment: Joi.any(),

      parent_item_identifiers: Joi.any(),

      display: Joi.string().allow(""),

      item_size: Joi.string().allow(""),
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
      partial: Joi.boolean(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      item_id: Joi.number(),

      item_index: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      item_size: Joi.string().allow(""),
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
      meta: Joi.any(),

      user: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),

      created_on: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      last_modified: Joi.string().allow(""),

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

      created_on: Joi.string().allow(""),

      cart_value: Joi.string().allow(""),

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
      first_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      user: CartModel.UserInfo(),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),
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

      current: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      message: Joi.string().allow(""),

      coupon_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      is_applicable: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      expires_on: Joi.string().allow(""),

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
      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      country: Joi.string().allow(""),

      google_map_point: Joi.any(),

      area_code: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
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
      is_updated: Joi.boolean(),

      success: Joi.boolean(),

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
      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      order_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shipments: Joi.number(),

      dp_options: Joi.any().allow(null),

      dp_id: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),

      box_type: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      cart_id: Joi.number(),

      error: Joi.boolean(),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),
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
      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

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
      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),
    });
  }

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      delivery_address: Joi.any(),

      aggregator: Joi.string().allow(""),

      pos: Joi.boolean(),

      payment_mode: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      pick_at_store_uid: Joi.number().allow(null),

      meta: Joi.any(),

      files: Joi.array().items(CartModel.Files()),

      payment_params: Joi.any().allow(null),

      extra_meta: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      address_id: Joi.string().allow(""),

      staff: CartModel.StaffCheckout(),

      merchant_code: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      billing_address: Joi.any(),

      callback_url: Joi.string().allow("").allow(null),

      ordering_store: Joi.number().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      cart_id: Joi.number(),

      cod_message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      user_type: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      cod_available: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      gstin: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      cod_charges: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      last_modified: Joi.string().allow(""),

      comment: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      success: Joi.boolean(),
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
      state: Joi.string().allow(""),

      id: Joi.number(),

      store_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      uid: Joi.number(),

      area_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.PickupStoreDetail()),
    });
  }

  static UpdateCartPaymentRequest() {
    return Joi.object({
      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

      valid: Joi.boolean(),

      code: Joi.string().allow("").allow(null),
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
