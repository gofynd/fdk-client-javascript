const Joi = require("joi");

class CartModel {
  static Rule() {
    return Joi.object({
      max: Joi.number(),

      key: Joi.number(),

      min: Joi.number(),

      discount_qty: Joi.number(),

      value: Joi.number(),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_display: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
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

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      networks: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),
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

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
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
      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      coupon_allowed: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      ordering_stores: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      user_type: Joi.string().allow(""),

      post_order: CartModel.PostOrder(),

      price_range: CartModel.PriceRange(),

      platforms: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Identifier() {
    return Joi.object({
      company_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),
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
      remove: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      value_type: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      applicable_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      scope: Joi.array().items(Joi.string().allow("")),

      auto_apply: Joi.boolean(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      rule: Joi.array().items(CartModel.Rule()).required(),

      state: CartModel.State(),

      _schedule: CartModel.CouponSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      date_meta: CartModel.CouponDateMeta(),

      validation: CartModel.Validation(),

      restrictions: CartModel.Restrictions(),

      identifiers: CartModel.Identifier().required(),

      code: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      display_meta: CartModel.DisplayMeta().required(),

      author: CartModel.CouponAuthor(),

      type_slug: Joi.string().allow("").required(),

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
      rule: Joi.array().items(CartModel.Rule()).required(),

      state: CartModel.State(),

      _schedule: CartModel.CouponSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      date_meta: CartModel.CouponDateMeta(),

      validation: CartModel.Validation(),

      restrictions: CartModel.Restrictions(),

      identifiers: CartModel.Identifier().required(),

      code: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      display_meta: CartModel.DisplayMeta().required(),

      author: CartModel.CouponAuthor(),

      type_slug: Joi.string().allow("").required(),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),
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
      partial_can_ret: Joi.boolean(),

      max_offer_quantity: Joi.number(),

      max_discount_amount: Joi.number(),

      apportion_discount: Joi.boolean(),

      discount_percentage: Joi.number(),

      discount_amount: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      discount_price: Joi.number(),

      code: Joi.string().allow(""),

      min_offer_quantity: Joi.number(),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than: Joi.number(),

      greater_than: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than_equals: Joi.number(),

      equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      product_tags: Joi.array().items(Joi.string().allow("")),

      cart_total: CartModel.CompareObject(),

      cart_unique_item_quantity: CartModel.CompareObject(),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_id: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_store: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),
    });
  }

  static DiscountRule() {
    return Joi.object({
      offer: CartModel.DiscountOffer().required(),

      item_criteria: CartModel.ItemCriteria().required(),

      buy_condition: Joi.string().allow("").required(),

      discount_type: Joi.string().allow("").required(),
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

      codes: Joi.array().items(Joi.string().allow("")),

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

  static Restrictions1() {
    return Joi.object({
      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_groups: Joi.array().items(Joi.number()),

      uses: CartModel.UsesRestriction1().required(),

      anonymous_users: Joi.boolean(),

      post_order: CartModel.PostOrder1(),

      order_quantity: Joi.number(),

      user_registered: CartModel.UserRegistered(),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      offer_label: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      published: Joi.boolean().required(),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
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
      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      currency: Joi.string().allow(""),

      apply_priority: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      restrictions: CartModel.Restrictions1(),

      calculate_on: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      apply_all_discount: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      date_meta: CartModel.PromotionDateMeta(),

      post_order_action: CartModel.PromotionAction(),

      visiblility: CartModel.Visibility(),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),
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

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      currency: Joi.string().allow(""),

      apply_priority: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      restrictions: CartModel.Restrictions1(),

      calculate_on: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      apply_all_discount: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      date_meta: CartModel.PromotionDateMeta(),

      post_order_action: CartModel.PromotionAction(),

      visiblility: CartModel.Visibility(),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      apply_exclusive: Joi.string().allow("").allow(null),

      mode: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      currency: Joi.string().allow(""),

      apply_priority: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      restrictions: CartModel.Restrictions1(),

      calculate_on: Joi.string().allow(""),

      display_meta: CartModel.DisplayMeta1().required(),

      _schedule: CartModel.PromotionSchedule(),

      apply_all_discount: Joi.boolean(),

      promo_group: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      date_meta: CartModel.PromotionDateMeta(),

      post_order_action: CartModel.PromotionAction(),

      visiblility: CartModel.Visibility(),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),
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
      modified_on: Joi.string().allow(""),

      example: Joi.string().allow(""),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      type: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      is_hidden: Joi.boolean(),
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

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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

      name: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      net_quantity: CartModel.NetQuantity(),

      slug: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      type: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),
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

  static AppliedPromotion() {
    return Joi.object({
      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      ownership: CartModel.Ownership2(),

      promotion_group: Joi.string().allow(""),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),
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

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

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
      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      marked: Joi.number(),
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
      store: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      _custom_json: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      size: Joi.string().allow(""),

      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      uid: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      bulk_offer: Joi.any(),

      product: CartModel.CartProduct(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      key: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      availability: CartModel.ProductAvailability(),

      coupon_message: Joi.string().allow(""),

      quantity: Joi.number(),

      promo_meta: CartModel.PromoMeta(),

      message: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      is_set: Joi.boolean(),

      price: CartModel.ProductPriceInfo(),

      price_per_unit: CartModel.ProductPriceInfo(),

      discount: Joi.string().allow(""),

      article: CartModel.ProductArticle(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      total: Joi.number(),

      applicable: Joi.number(),

      description: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      coupon_value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      code: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      type: Joi.string().allow(""),

      value: Joi.number(),

      uid: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      subtotal: Joi.number(),

      coupon: Joi.number(),

      fynd_cash: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      vog: Joi.number(),

      convenience_fee: Joi.number(),

      gst_charges: Joi.number(),

      discount: Joi.number(),

      you_saved: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(CartModel.DisplayBreakup()),

      loyalty_points: CartModel.LoyaltyPoints(),

      coupon: CartModel.CouponBreakup(),

      raw: CartModel.RawBreakup(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

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
      state: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      phone: Joi.number(),

      landmark: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      meta: Joi.any(),
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
      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),
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

      current_status: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),
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

  static CartItemMeta() {
    return Joi.object({
      group_id: Joi.string().allow(""),

      primary_item: Joi.boolean(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      files: Joi.array().items(CartModel.OpenApiFiles()),

      product_id: Joi.number().required(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      extra_meta: Joi.any(),

      coupon_effective_discount: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      quantity: Joi.number(),

      amount_paid: Joi.number().required(),

      price_effective: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      price_marked: Joi.number().required(),

      cod_charges: Joi.number().required(),

      size: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      meta: CartModel.CartItemMeta(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      files: Joi.array().items(CartModel.OpenApiFiles()),

      billing_address: CartModel.ShippingAddress().required(),

      loyalty_discount: Joi.number(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      employee_discount: Joi.any(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      comment: Joi.string().allow("").allow(null),

      currency_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").required(),

      coupon: Joi.string().allow(""),

      coupon_value: Joi.number().required(),

      shipping_address: CartModel.ShippingAddress(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      cart_value: Joi.number().required(),

      cashback_applied: Joi.number().required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow(""),

      order_ref_id: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      payments: Joi.any().allow(null),

      payment_methods: Joi.array().items(Joi.any()),

      is_archive: Joi.boolean(),

      _id: Joi.string().allow("").required(),

      bulk_coupon_discount: Joi.number().allow(null),

      gstin: Joi.string().allow("").allow(null),

      expire_at: Joi.string().allow("").required(),

      app_id: Joi.string().allow(""),

      coupon: Joi.any().allow(null),

      buy_now: Joi.boolean(),

      delivery_charges: Joi.any(),

      shipments: Joi.array().items(Joi.any()),

      articles: Joi.array().items(Joi.any()).required(),

      cashback: Joi.any().required(),

      user_id: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      checkout_mode: Joi.string().allow(""),

      promotion: Joi.any(),

      merge_qty: Joi.boolean().allow(null),

      comment: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow("").allow(null),

      last_modified: Joi.string().allow("").required(),

      order_id: Joi.string().allow(""),

      is_active: Joi.boolean(),

      fynd_credits: Joi.any(),

      is_default: Joi.boolean().required(),

      created_on: Joi.string().allow("").required(),

      cod_charges: Joi.any(),

      fc_index_map: Joi.array().items(Joi.number()),

      pick_up_customer_details: Joi.any().allow(null),

      cart_value: Joi.number(),

      discount: Joi.number(),

      uid: Joi.number().required(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      page: CartModel.Page(),

      result: Joi.any(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      items: Joi.array().items(CartModel.AbandonedCart()),
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
      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      display: Joi.string().allow(""),

      item_id: Joi.number(),

      article_assignment: Joi.any(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      pos: Joi.boolean(),

      _custom_json: Joi.any(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      store_id: Joi.number(),
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

      message: Joi.string().allow(""),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      item_index: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      _custom_json: Joi.any(),

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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      user: Joi.any(),

      source: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      uid: Joi.string().allow(""),
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

      created_on: Joi.string().allow(""),

      cart_value: Joi.string().allow(""),

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
      modified_on: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      delivery_promise: CartModel.ShipmentPromise(),

      user: CartModel.UserInfo(),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),
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
      total_item_count: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      sub_title: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      is_applicable: Joi.boolean(),

      is_applied: Joi.boolean(),

      max_discount_value: Joi.number(),

      expires_on: Joi.string().allow(""),
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
      email: Joi.string().allow(""),

      address: Joi.string().allow(""),

      google_map_point: Joi.any(),

      cart_id: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      landmark: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      meta: Joi.any(),

      user_id: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      is_active: Joi.boolean(),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

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

      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_updated: Joi.boolean(),

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
      billing_address_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      fulfillment_id: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      shipments: Joi.number(),

      dp_options: Joi.any().allow(null),

      dp_id: Joi.string().allow("").allow(null),

      shipment_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      fulfillment_type: Joi.string().allow(""),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      error: Joi.boolean(),

      buy_now: Joi.boolean(),

      message: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      coupon_text: Joi.string().allow(""),

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
      checkout_mode: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

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

      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
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
      address_id: Joi.string().allow(""),

      delivery_address: Joi.any(),

      pos: Joi.boolean(),

      merchant_code: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      staff: CartModel.StaffCheckout(),

      payment_auto_confirm: Joi.boolean(),

      meta: Joi.any(),

      user_id: Joi.string().allow("").required(),

      files: Joi.array().items(CartModel.Files()),

      billing_address: Joi.any(),

      extra_meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      payment_mode: Joi.string().allow("").required(),

      callback_url: Joi.string().allow("").allow(null),

      id: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").allow(null),

      payment_params: Joi.any().allow(null),

      aggregator: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),
    });
  }

  static CheckCart() {
    return Joi.object({
      cod_message: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      cart_id: Joi.number(),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      delivery_charges: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      restrict_checkout: Joi.boolean(),

      success: Joi.boolean(),

      comment: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      error_message: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cod_charges: Joi.number(),

      uid: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),

      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CheckCart(),

      order_id: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

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
      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      id: Joi.number(),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      phone: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

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

      id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      code: Joi.string().allow("").allow(null),

      display_message_en: Joi.string().allow("").allow(null),

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
