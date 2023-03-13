const Joi = require("joi");

class CartModel {
  static Identifier() {
    return Joi.object({
      brand_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      article_id: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),
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

  static UsesRemaining() {
    return Joi.object({
      user: Joi.number(),

      app: Joi.number(),

      total: Joi.number(),
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
      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      types: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),
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

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      user_type: Joi.string().allow(""),

      coupon_allowed: Joi.boolean(),

      ordering_stores: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      post_order: CartModel.PostOrder(),
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

      max: Joi.number(),

      discount_qty: Joi.number(),

      key: Joi.number(),

      min: Joi.number(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      value_type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      is_exact: Joi.boolean(),

      currency_code: Joi.string().allow(""),

      calculate_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),
    });
  }

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),
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
      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),

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

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),
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
      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      identifiers: CartModel.Identifier().required(),

      code: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions(),

      validity: CartModel.Validity().required(),

      type_slug: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      date_meta: CartModel.CouponDateMeta(),

      _schedule: CartModel.CouponSchedule(),

      action: CartModel.CouponAction(),

      author: CartModel.CouponAuthor(),

      ownership: CartModel.Ownership().required(),

      validation: CartModel.Validation(),

      display_meta: CartModel.DisplayMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),
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
      identifiers: CartModel.Identifier().required(),

      code: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions(),

      validity: CartModel.Validity().required(),

      type_slug: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      date_meta: CartModel.CouponDateMeta(),

      _schedule: CartModel.CouponSchedule(),

      action: CartModel.CouponAction(),

      author: CartModel.CouponAuthor(),

      ownership: CartModel.Ownership().required(),

      validation: CartModel.Validation(),

      display_meta: CartModel.DisplayMeta().required(),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: CartModel.CouponSchedule(),

      archive: Joi.boolean(),
    });
  }

  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than_equals: Joi.number(),

      equals: Joi.number(),

      less_than: Joi.number(),

      greater_than_equals: Joi.number(),

      greater_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      cart_total: CartModel.CompareObject(),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_brand: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      product_tags: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_sku: Joi.array().items(Joi.string().allow("")),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      code: Joi.string().allow(""),

      partial_can_ret: Joi.boolean(),

      discount_price: Joi.number(),

      apportion_discount: Joi.boolean(),

      max_discount_amount: Joi.number(),

      discount_amount: Joi.number(),

      discount_percentage: Joi.number(),

      max_offer_quantity: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      min_offer_quantity: Joi.number(),
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
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static UserRegistered() {
    return Joi.object({
      start: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),
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
      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue1(),

      type: Joi.string().allow("").required(),
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
      order_quantity: Joi.number(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      user_registered: CartModel.UserRegistered(),

      uses: CartModel.UsesRestriction1().required(),

      anonymous_users: Joi.boolean(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      post_order: CartModel.PostOrder1(),
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

      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      cron: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      start: Joi.string().allow("").required(),

      end: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      promotion_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      promo_group: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      date_meta: CartModel.PromotionDateMeta(),

      currency: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      code: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      apply_priority: Joi.number(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),
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
      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      promotion_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      promo_group: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      date_meta: CartModel.PromotionDateMeta(),

      currency: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      code: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      apply_priority: Joi.number(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      promotion_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      promo_group: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      application_id: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      date_meta: CartModel.PromotionDateMeta(),

      currency: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      code: Joi.string().allow(""),

      calculate_on: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      apply_priority: Joi.number(),

      _schedule: CartModel.PromotionSchedule(),

      author: CartModel.PromotionAuthor(),
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
      entity_type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      example: Joi.string().allow(""),
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

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      converted: CartModel.BasePrice(),

      base: CartModel.BasePrice(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductArticle() {
    return Joi.object({
      product_group_tags: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow(""),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      seller: CartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      extra_meta: Joi.any(),
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
      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),

      raw_offer: Joi.any(),
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
      buy_rules: Joi.array().items(CartModel.BuyRules()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_group: Joi.string().allow(""),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      ownership: CartModel.Ownership2(),
    });
  }

  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: CartModel.ActionQuery(),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      item_code: Joi.string().allow("").allow(null),

      net_quantity: CartModel.NetQuantity(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      brand: CartModel.BaseInfo(),

      action: CartModel.ProductAction(),

      images: Joi.array().items(CartModel.ProductImage()),

      slug: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),
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
      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      identifiers: CartModel.CartProductIdentifer().required(),

      is_set: Joi.boolean(),

      promo_meta: CartModel.PromoMeta(),

      article: CartModel.ProductArticle(),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      product: CartModel.CartProduct(),

      price: CartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      key: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      availability: CartModel.ProductAvailability(),

      price_per_unit: CartModel.ProductPriceInfo(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      gst_charges: Joi.number(),

      vog: Joi.number(),

      total: Joi.number(),

      fynd_cash: Joi.number(),

      convenience_fee: Joi.number(),

      delivery_charge: Joi.number(),

      mrp_total: Joi.number(),

      discount: Joi.number(),

      coupon: Joi.number(),

      subtotal: Joi.number(),

      you_saved: Joi.number(),

      cod_charge: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      applicable: Joi.number(),

      total: Joi.number(),

      is_applied: Joi.boolean(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      value: Joi.number(),

      code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      coupon: CartModel.CouponBreakup(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),
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
      landmark: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.number(),

      country_iso_code: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      meta: Joi.any(),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      area: Joi.string().allow(""),
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
      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),
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
      payment_gateway: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      name: Joi.string().allow(""),

      meta: CartModel.MultiTenderPaymentMeta(),
    });
  }

  static CartItemMeta() {
    return Joi.object({
      primary_item: Joi.boolean(),

      group_id: Joi.string().allow(""),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      price_marked: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      size: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      price_effective: Joi.number().required(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      meta: CartModel.CartItemMeta(),

      product_id: Joi.number().required(),

      quantity: Joi.number(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      discount: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cashback_applied: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      extra_meta: Joi.any(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      files: Joi.array().items(CartModel.OpenApiFiles()),

      cart_value: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      cod_charges: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cashback_applied: Joi.number().required(),

      loyalty_discount: Joi.number(),

      billing_address: CartModel.ShippingAddress().required(),

      coupon_code: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      employee_discount: Joi.any(),

      gstin: Joi.string().allow("").allow(null),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      payment_mode: Joi.string().allow(""),

      shipping_address: CartModel.ShippingAddress(),

      delivery_charges: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      coupon: Joi.string().allow(""),

      coupon_value: Joi.number().required(),

      order_id: Joi.string().allow(""),
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
      fc_index_map: Joi.array().items(Joi.number()),

      merge_qty: Joi.boolean().allow(null),

      created_on: Joi.string().allow("").required(),

      discount: Joi.number(),

      articles: Joi.array().items(Joi.any()).required(),

      app_id: Joi.string().allow(""),

      expire_at: Joi.string().allow("").required(),

      promotion: Joi.any(),

      fynd_credits: Joi.any(),

      delivery_charges: Joi.any(),

      payment_mode: Joi.string().allow("").allow(null),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean(),

      is_archive: Joi.boolean(),

      bulk_coupon_discount: Joi.number().allow(null),

      shipments: Joi.array().items(Joi.any()),

      uid: Joi.number().required(),

      user_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      pick_up_customer_details: Joi.any().allow(null),

      cart_value: Joi.number(),

      comment: Joi.string().allow("").allow(null),

      cod_charges: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      payment_methods: Joi.array().items(Joi.any()),

      last_modified: Joi.string().allow("").required(),

      cashback: Joi.any().required(),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow("").allow(null),

      coupon: Joi.any().allow(null),

      order_id: Joi.string().allow(""),

      payments: Joi.any().allow(null),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.AbandonedCart()),

      result: Joi.any(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

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

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      pan_no: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      seller_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      pos: Joi.boolean(),

      item_size: Joi.string().allow(""),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      article_assignment: Joi.any(),

      store_id: Joi.number(),

      extra_meta: Joi.any(),
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
      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      identifiers: CartModel.CartProductIdentifer().required(),

      item_size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      item_index: Joi.number(),

      extra_meta: Joi.any(),
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
      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      source: Joi.any(),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      shared_cart_details: CartModel.SharedCartDetails(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

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
      item_counts: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      cart_value: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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

      uid: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      user: CartModel.UserInfo(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      pan_no: Joi.string().allow(""),
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
      max_discount_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow(""),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),
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
      geo_location: CartModel.GeoLocation(),

      google_map_point: Joi.any(),

      area_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      landmark: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      id: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      is_active: Joi.boolean(),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      address: Joi.string().allow(""),

      meta: Joi.any(),

      email: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      cart_id: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

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
      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_updated: Joi.boolean(),

      success: Joi.boolean(),

      is_default_address: Joi.boolean(),

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
      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      shipment_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shipments: Joi.number(),

      fulfillment_id: Joi.number(),

      promise: CartModel.ShipmentPromise(),

      order_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      error: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

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
      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

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
      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

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
      order_type: Joi.string().allow("").required(),

      address_id: Joi.string().allow(""),

      staff: CartModel.StaffCheckout(),

      pos: Joi.boolean(),

      id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      extra_meta: Joi.any(),

      aggregator: Joi.string().allow(""),

      files: Joi.array().items(CartModel.Files()),

      payment_params: Joi.any().allow(null),

      user_id: Joi.string().allow("").required(),

      meta: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      billing_address: Joi.any(),

      pick_at_store_uid: Joi.number().allow(null),

      delivery_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      ordering_store: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),
    });
  }

  static CheckCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      user_type: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      cod_message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      id: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      delivery_charges: Joi.number(),

      cod_available: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      error_message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      cod_charges: Joi.number(),

      store_code: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

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
      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      uid: Joi.number(),

      country: Joi.string().allow(""),

      id: Joi.number(),

      state: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

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
      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      display_message_en: Joi.string().allow("").allow(null),

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
