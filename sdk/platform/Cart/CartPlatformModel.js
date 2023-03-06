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
      user_registered_after: Joi.string().allow("").allow(null),

      app_id: Joi.array().items(Joi.string().allow("")),

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
      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      types: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static PriceRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static PostOrder() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
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
      ordering_stores: Joi.array().items(Joi.number()),

      coupon_allowed: Joi.boolean(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      price_range: CartModel.PriceRange(),

      platforms: Joi.array().items(Joi.string().allow("")),

      post_order: CartModel.PostOrder(),

      user_type: Joi.string().allow(""),

      uses: CartModel.UsesRestriction(),

      user_groups: Joi.array().items(Joi.number()),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      applicable_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      is_exact: Joi.boolean(),

      value_type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),
    });
  }

  static Rule() {
    return Joi.object({
      min: Joi.number(),

      value: Joi.number(),

      max: Joi.number(),

      discount_qty: Joi.number(),

      key: Joi.number(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),
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

      apply: CartModel.DisplayMetaDict(),

      remove: CartModel.DisplayMetaDict(),
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
      user_id: Joi.array().items(Joi.string().allow("")),

      article_id: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static CouponAdd() {
    return Joi.object({
      validation: CartModel.Validation(),

      restrictions: CartModel.Restrictions(),

      rule_definition: CartModel.RuleDefinition().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validity: CartModel.Validity().required(),

      state: CartModel.State(),

      action: CartModel.CouponAction(),

      display_meta: CartModel.DisplayMeta().required(),

      date_meta: CartModel.CouponDateMeta(),

      identifiers: CartModel.Identifier().required(),

      _schedule: CartModel.CouponSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      type_slug: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),
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

      restrictions: CartModel.Restrictions(),

      rule_definition: CartModel.RuleDefinition().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validity: CartModel.Validity().required(),

      state: CartModel.State(),

      action: CartModel.CouponAction(),

      display_meta: CartModel.DisplayMeta().required(),

      date_meta: CartModel.CouponDateMeta(),

      identifiers: CartModel.Identifier().required(),

      _schedule: CartModel.CouponSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      type_slug: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      published: Joi.boolean().required(),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      end: Joi.string().allow("").allow(null),
    });
  }

  static CompareObject() {
    return Joi.object({
      greater_than: Joi.number(),

      less_than: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than_equals: Joi.number(),

      equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_company: Joi.array().items(Joi.number()),

      product_tags: Joi.array().items(Joi.string().allow("")),

      available_zones: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      all_items: Joi.boolean(),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_company: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),

      action_type: Joi.string().allow("").required(),
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

  static DiscountOffer() {
    return Joi.object({
      discount_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      discount_price: Joi.number(),

      max_discount_amount: Joi.number(),

      code: Joi.string().allow(""),

      max_usage_per_transaction: Joi.number(),

      min_offer_quantity: Joi.number(),

      apportion_discount: Joi.boolean(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),

      discount_type: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),

      offer: CartModel.DiscountOffer().required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
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

      type: Joi.string().allow("").required(),

      uses: CartModel.PaymentAllowValue1(),
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
      start: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),
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
      user_id: Joi.array().items(Joi.string().allow("")),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      post_order: CartModel.PostOrder1(),

      order_quantity: Joi.number(),

      user_registered: CartModel.UserRegistered(),

      uses: CartModel.UsesRestriction1().required(),

      user_groups: Joi.array().items(Joi.number()),

      anonymous_users: Joi.boolean(),
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

      offer_label: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      promotion_type: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      post_order_action: CartModel.PromotionAction(),

      ownership: CartModel.Ownership1().required(),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      stackable: Joi.boolean(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      visiblility: CartModel.Visibility(),

      display_meta: CartModel.DisplayMeta1().required(),

      application_id: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

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
      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      promotion_type: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      post_order_action: CartModel.PromotionAction(),

      ownership: CartModel.Ownership1().required(),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      stackable: Joi.boolean(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      visiblility: CartModel.Visibility(),

      display_meta: CartModel.DisplayMeta1().required(),

      application_id: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      promotion_type: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      post_order_action: CartModel.PromotionAction(),

      ownership: CartModel.Ownership1().required(),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      stackable: Joi.boolean(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      visiblility: CartModel.Visibility(),

      display_meta: CartModel.DisplayMeta1().required(),

      application_id: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),
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
      entity_type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      example: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_hidden: Joi.boolean(),
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
      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

      value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      is_applied: Joi.boolean(),

      coupon_value: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      convenience_fee: Joi.number(),

      mrp_total: Joi.number(),

      delivery_charge: Joi.number(),

      vog: Joi.number(),

      cod_charge: Joi.number(),

      gst_charges: Joi.number(),

      total: Joi.number(),

      you_saved: Joi.number(),

      coupon: Joi.number(),

      discount: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      applicable: Joi.number(),

      total: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: CartModel.CouponBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      add_on: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      effective: Joi.number(),
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
      product_group_tags: Joi.array().items(Joi.string().allow("")),

      _custom_json: Joi.any(),

      size: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      seller: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      store: CartModel.BaseInfo(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),

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
      url: Joi.string().allow(""),

      type: Joi.string().allow(""),

      query: CartModel.ActionQuery(),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),
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
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      name: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      action: CartModel.ProductAction(),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      net_quantity: CartModel.NetQuantity(),

      type: Joi.string().allow(""),

      uid: Joi.number(),
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

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      item_criteria: Joi.any(),

      offer: Joi.any(),
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

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: CartModel.FreeGiftItem(),
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
      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      ownership: CartModel.Ownership2(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_group: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      offer_text: Joi.string().allow(""),

      amount: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      discount: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      article: CartModel.ProductArticle(),

      availability: CartModel.ProductAvailability(),

      product: CartModel.CartProduct(),

      coupon_message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      bulk_offer: Joi.any(),

      quantity: Joi.number(),

      is_set: Joi.boolean(),

      promo_meta: CartModel.PromoMeta(),

      identifiers: CartModel.CartProductIdentifer().required(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      message: Joi.string().allow(""),

      key: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),
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
      errors: Joi.any(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      country: Joi.string().allow("").allow(null),

      country_iso_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.number(),

      address: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      country_phone_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      meta: Joi.any(),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),
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
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
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

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),
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

      current_status: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      amount: Joi.number().required(),

      meta: CartModel.MultiTenderPaymentMeta(),
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
      size: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      delivery_charges: Joi.number().required(),

      price_effective: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      loyalty_discount: Joi.number(),

      amount_paid: Joi.number().required(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      employee_discount: Joi.number(),

      price_marked: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      product_id: Joi.number().required(),

      discount: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cashback_applied: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      shipping_address: CartModel.ShippingAddress(),

      delivery_charges: Joi.number().required(),

      coupon_value: Joi.number().required(),

      gstin: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").required(),

      billing_address: CartModel.ShippingAddress().required(),

      currency_code: Joi.string().allow(""),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cod_charges: Joi.number().required(),

      cart_value: Joi.number().required(),

      loyalty_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow(""),

      employee_discount: Joi.any(),

      comment: Joi.string().allow("").allow(null),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      payment_mode: Joi.string().allow(""),

      coupon: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cashback_applied: Joi.number().required(),
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
      is_default: Joi.boolean().required(),

      is_archive: Joi.boolean(),

      app_id: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      promotion: Joi.any(),

      user_id: Joi.string().allow("").required(),

      cod_charges: Joi.any(),

      cart_value: Joi.number(),

      shipments: Joi.array().items(Joi.any()),

      payment_mode: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      order_id: Joi.string().allow(""),

      last_modified: Joi.string().allow("").required(),

      pick_up_customer_details: Joi.any().allow(null),

      expire_at: Joi.string().allow("").required(),

      delivery_charges: Joi.any(),

      buy_now: Joi.boolean(),

      gstin: Joi.string().allow("").allow(null),

      meta: Joi.any().allow(null),

      merge_qty: Joi.boolean().allow(null),

      fc_index_map: Joi.array().items(Joi.number()),

      payments: Joi.any().allow(null),

      created_on: Joi.string().allow("").required(),

      articles: Joi.array().items(Joi.any()).required(),

      comment: Joi.string().allow("").allow(null),

      bulk_coupon_discount: Joi.number().allow(null),

      cashback: Joi.any().required(),

      checkout_mode: Joi.string().allow(""),

      is_active: Joi.boolean(),

      fynd_credits: Joi.any(),

      payment_methods: Joi.array().items(Joi.any()),

      coupon: Joi.any().allow(null),

      uid: Joi.number().required(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      result: Joi.any(),

      page: CartModel.Page(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.AbandonedCart()),
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
      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      article_assignment: Joi.any(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      seller_id: Joi.number(),

      pos: Joi.boolean(),

      item_id: Joi.number(),

      store_id: Joi.number(),
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
      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      item_index: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_id: Joi.number(),
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
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      created_on: Joi.string().allow(""),

      user: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      currency: CartModel.CartCurrency(),

      shared_cart_details: CartModel.SharedCartDetails(),

      delivery_charge_info: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),
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
      user_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      cart_value: Joi.string().allow(""),

      item_counts: Joi.string().allow(""),

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
      modified_on: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      user: CartModel.UserInfo(),

      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      currency: CartModel.CartCurrency(),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),
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

      total_item_count: Joi.number(),

      current: Joi.number(),

      total: Joi.number(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_type: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      expires_on: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      is_applicable: Joi.boolean(),

      coupon_value: Joi.number(),

      message: Joi.string().allow(""),

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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static PlatformAddress() {
    return Joi.object({
      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      is_default_address: Joi.boolean(),

      area_code: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      google_map_point: Joi.any(),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      email: Joi.string().allow(""),
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

      is_updated: Joi.boolean(),

      success: Joi.boolean(),

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
      promise: CartModel.ShipmentPromise(),

      order_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      fulfillment_id: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      dp_options: Joi.any().allow(null),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      last_modified: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      error: Joi.boolean(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      uid: Joi.string().allow(""),
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
      pick_up_customer_details: Joi.any(),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

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

  static StaffCheckout() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

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

      callback_url: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      staff: CartModel.StaffCheckout(),

      billing_address: Joi.any(),

      delivery_address: Joi.any(),

      user_id: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      order_type: Joi.string().allow("").required(),

      payment_params: Joi.any().allow(null),

      extra_meta: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      pos: Joi.boolean(),

      files: Joi.array().items(CartModel.Files()),
    });
  }

  static CheckCart() {
    return Joi.object({
      restrict_checkout: Joi.boolean(),

      cod_message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart_id: Joi.number(),

      cod_charges: Joi.number(),

      delivery_charge_order_value: Joi.number(),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      order_id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_charges: Joi.number(),

      buy_now: Joi.boolean(),

      store_code: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      error_message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      data: Joi.any(),
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
      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      id: Joi.number(),

      address_type: Joi.string().allow(""),

      uid: Joi.number(),

      pincode: Joi.number(),

      email: Joi.string().allow(""),
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

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),
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

      message: Joi.string().allow(""),

      coupon_validity: CartModel.CouponValidity(),
    });
  }
}
module.exports = CartModel;
