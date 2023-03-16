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

  static DisplayMetaDict() {
    return Joi.object({
      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      apply: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),
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
      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      anonymous: Joi.boolean(),

      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static Rule() {
    return Joi.object({
      key: Joi.number(),

      min: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),

      discount_qty: Joi.number(),
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
      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      networks: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PriceRange() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
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

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static Restrictions() {
    return Joi.object({
      coupon_allowed: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      user_type: Joi.string().allow(""),

      platforms: Joi.array().items(Joi.string().allow("")),

      post_order: CartModel.PostOrder(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      price_range: CartModel.PriceRange(),

      ordering_stores: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction(),

      bulk_bundle: CartModel.BulkBundleRestriction(),
    });
  }

  static Identifier() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      collection_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      is_exact: Joi.boolean(),

      auto_apply: Joi.boolean(),

      value_type: Joi.string().allow("").required(),

      applicable_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      display_meta: CartModel.DisplayMeta().required(),

      code: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      type_slug: Joi.string().allow("").required(),

      _schedule: CartModel.CouponSchedule(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      date_meta: CartModel.CouponDateMeta(),

      action: CartModel.CouponAction(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      restrictions: CartModel.Restrictions(),

      identifiers: CartModel.Identifier().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      author: CartModel.CouponAuthor(),

      state: CartModel.State(),
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
      display_meta: CartModel.DisplayMeta().required(),

      code: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      type_slug: Joi.string().allow("").required(),

      _schedule: CartModel.CouponSchedule(),

      validity: CartModel.Validity().required(),

      validation: CartModel.Validation(),

      date_meta: CartModel.CouponDateMeta(),

      action: CartModel.CouponAction(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      restrictions: CartModel.Restrictions(),

      identifiers: CartModel.Identifier().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      author: CartModel.CouponAuthor(),

      state: CartModel.State(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than_equals: Joi.number(),

      equals: Joi.number(),

      greater_than_equals: Joi.number(),

      greater_than: Joi.number(),

      less_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_store: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_id: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      product_tags: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_company: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      cart_quantity: CartModel.CompareObject(),

      item_brand: Joi.array().items(Joi.number()),
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
      action_date: Joi.string().allow("").allow(null).required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      offer_label: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static PostOrder1() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
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
      codes: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      uses: CartModel.PaymentAllowValue1(),
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

  static Restrictions1() {
    return Joi.object({
      user_id: Joi.array().items(Joi.string().allow("")),

      anonymous_users: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      order_quantity: Joi.number(),

      post_order: CartModel.PostOrder1(),

      user_registered: CartModel.UserRegistered(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      uses: CartModel.UsesRestriction1().required(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      max_usage_per_transaction: Joi.number(),

      discount_price: Joi.number(),

      discount_percentage: Joi.number(),

      max_discount_amount: Joi.number(),

      code: Joi.string().allow(""),

      discount_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      max_offer_quantity: Joi.number(),

      apportion_discount: Joi.boolean(),

      min_offer_quantity: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),

      discount_type: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      start: Joi.string().allow("").required(),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      published: Joi.boolean().required(),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      apply_exclusive: Joi.string().allow("").allow(null),

      promotion_type: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      author: CartModel.PromotionAuthor(),

      post_order_action: CartModel.PromotionAction(),

      calculate_on: Joi.string().allow(""),

      apply_all_discount: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      visiblility: CartModel.Visibility(),

      ownership: CartModel.Ownership1().required(),

      stackable: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      apply_priority: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      mode: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      _custom_json: Joi.any(),

      promo_group: Joi.string().allow("").required(),
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
      apply_exclusive: Joi.string().allow("").allow(null),

      promotion_type: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      author: CartModel.PromotionAuthor(),

      post_order_action: CartModel.PromotionAction(),

      calculate_on: Joi.string().allow(""),

      apply_all_discount: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      visiblility: CartModel.Visibility(),

      ownership: CartModel.Ownership1().required(),

      stackable: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      apply_priority: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      mode: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      _custom_json: Joi.any(),

      promo_group: Joi.string().allow("").required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      apply_exclusive: Joi.string().allow("").allow(null),

      promotion_type: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      author: CartModel.PromotionAuthor(),

      post_order_action: CartModel.PromotionAction(),

      calculate_on: Joi.string().allow(""),

      apply_all_discount: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      visiblility: CartModel.Visibility(),

      ownership: CartModel.Ownership1().required(),

      stackable: Joi.boolean(),

      restrictions: CartModel.Restrictions1(),

      apply_priority: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      mode: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      _custom_json: Joi.any(),

      promo_group: Joi.string().allow("").required(),
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
      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      example: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      title: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),
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

  static CouponBreakup() {
    return Joi.object({
      coupon_value: Joi.number(),

      type: Joi.string().allow(""),

      code: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      uid: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      total: Joi.number(),

      mrp_total: Joi.number(),

      vog: Joi.number(),

      cod_charge: Joi.number(),

      discount: Joi.number(),

      you_saved: Joi.number(),

      gst_charges: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      fynd_cash: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      total: Joi.number(),

      description: Joi.string().allow(""),

      applicable: Joi.number(),
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

  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
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

  static BaseInfo() {
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
      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      net_quantity: CartModel.NetQuantity(),

      type: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      images: Joi.array().items(CartModel.ProductImage()),

      brand: CartModel.BaseInfo(),

      action: CartModel.ProductAction(),

      item_code: Joi.string().allow("").allow(null),

      uid: Joi.number(),

      name: Joi.string().allow(""),

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
      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      add_on: Joi.number(),

      marked: Joi.number(),

      selling: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),
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
      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      size: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      uid: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      store: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),
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

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
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
      promotion_type: Joi.string().allow(""),

      ownership: CartModel.Ownership2(),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_group: Joi.string().allow(""),

      amount: Joi.number(),

      offer_text: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      key: Joi.string().allow(""),

      is_set: Joi.boolean(),

      product: CartModel.CartProduct(),

      promo_meta: CartModel.PromoMeta(),

      price: CartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      availability: CartModel.ProductAvailability(),

      discount: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      coupon_message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      bulk_offer: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      price_per_unit: CartModel.ProductPriceInfo(),

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
      errors: Joi.any(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      meta: Joi.any(),

      phone: Joi.number(),

      country_phone_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow("").allow(null),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      country_iso_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),
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

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      order_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      name: Joi.string().allow(""),

      meta: CartModel.MultiTenderPaymentMeta(),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),
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
      group_id: Joi.string().allow(""),

      primary_item: Joi.boolean(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      meta: CartModel.CartItemMeta(),

      product_id: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      loyalty_discount: Joi.number(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      size: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      extra_meta: Joi.any(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      employee_discount: Joi.number(),

      amount_paid: Joi.number().required(),

      quantity: Joi.number(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      comment: Joi.string().allow("").allow(null),

      billing_address: CartModel.ShippingAddress().required(),

      payment_mode: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      shipping_address: CartModel.ShippingAddress(),

      coupon_code: Joi.string().allow("").required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      currency_code: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      coupon_value: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      affiliate_order_id: Joi.string().allow(""),

      coupon: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      employee_discount: Joi.any(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      order_ref_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      gstin: Joi.string().allow("").allow(null),

      app_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").allow(null),

      articles: Joi.array().items(Joi.any()).required(),

      checkout_mode: Joi.string().allow(""),

      merge_qty: Joi.boolean().allow(null),

      cashback: Joi.any().required(),

      meta: Joi.any().allow(null),

      order_id: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      fc_index_map: Joi.array().items(Joi.number()),

      is_active: Joi.boolean(),

      discount: Joi.number(),

      shipments: Joi.array().items(Joi.any()),

      bulk_coupon_discount: Joi.number().allow(null),

      coupon: Joi.any().allow(null),

      pick_up_customer_details: Joi.any().allow(null),

      comment: Joi.string().allow("").allow(null),

      expire_at: Joi.string().allow("").required(),

      cart_value: Joi.number(),

      delivery_charges: Joi.any(),

      promotion: Joi.any(),

      cod_charges: Joi.any(),

      payments: Joi.any().allow(null),

      last_modified: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(Joi.any()),

      user_id: Joi.string().allow("").required(),

      fynd_credits: Joi.any(),

      created_on: Joi.string().allow("").required(),

      uid: Joi.number().required(),

      buy_now: Joi.boolean(),

      _id: Joi.string().allow("").required(),

      is_archive: Joi.boolean(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      result: Joi.any(),

      items: Joi.array().items(CartModel.AbandonedCart()),

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
      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      pan_no: Joi.string().allow(""),

      pan_config: Joi.any(),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      seller_id: Joi.number(),

      display: Joi.string().allow(""),

      pos: Joi.boolean(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      _custom_json: Joi.any(),

      article_assignment: Joi.any(),

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
      message: Joi.string().allow(""),

      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      item_index: Joi.number(),

      item_size: Joi.string().allow(""),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

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
      meta: Joi.any(),

      source: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      shared_cart_details: CartModel.SharedCartDetails(),

      id: Joi.string().allow(""),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),

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
      cart_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      cart_value: Joi.string().allow(""),

      item_counts: Joi.string().allow(""),

      pick_up_customer_details: Joi.string().allow(""),
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
      external_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      _id: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      pan_config: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      user: CartModel.UserInfo(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      buy_now: Joi.boolean(),

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

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      total: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      message: Joi.string().allow(""),

      title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      is_applicable: Joi.boolean(),

      description: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow(""),

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
      phone: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      meta: Joi.any(),

      is_active: Joi.boolean(),

      country: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      address: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      google_map_point: Joi.any(),
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

      id: Joi.string().allow(""),

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
      cart_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      promise: CartModel.ShipmentPromise(),

      dp_id: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),

      fulfillment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      items: Joi.array().items(CartModel.CartProductInfo()),

      order_type: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      fulfillment_id: Joi.number(),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      cart_id: Joi.number(),

      is_valid: Joi.boolean(),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      error: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),

      id: Joi.string().allow(""),
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

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),
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

      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
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
      callback_url: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow(""),

      staff: CartModel.StaffCheckout(),

      meta: Joi.any(),

      device_id: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),

      extra_meta: Joi.any(),

      id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow(""),

      billing_address: Joi.any(),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      ordering_store: Joi.number().allow(null),

      user_id: Joi.string().allow("").required(),

      payment_auto_confirm: Joi.boolean(),

      pick_at_store_uid: Joi.number().allow(null),

      pos: Joi.boolean(),

      files: Joi.array().items(CartModel.Files()),

      delivery_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      cod_available: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      store_emps: Joi.array().items(Joi.any()),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      success: Joi.boolean(),

      delivery_charges: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      cod_charges: Joi.number(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      cod_message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      uid: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      callback_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      data: Joi.any(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CheckCart(),
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

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.number(),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      id: Joi.number(),

      store_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

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
      payment_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      coupon_validity: CartModel.CouponValidity(),

      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }
}
module.exports = CartModel;
