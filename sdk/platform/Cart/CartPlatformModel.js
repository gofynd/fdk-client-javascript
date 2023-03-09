const Joi = require("joi");

class CartModel {
  static RuleDefinition() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      auto_apply: Joi.boolean(),

      applicable_on: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      scope: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
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
      types: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      networks: Joi.array().items(Joi.string().allow("")),
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

  static Restrictions() {
    return Joi.object({
      price_range: CartModel.PriceRange(),

      user_type: Joi.string().allow(""),

      coupon_allowed: Joi.boolean(),

      ordering_stores: Joi.array().items(Joi.number()),

      user_groups: Joi.array().items(Joi.number()),

      post_order: CartModel.PostOrder(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      uses: CartModel.UsesRestriction(),
    });
  }

  static Identifier() {
    return Joi.object({
      article_id: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),
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

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
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
      key: Joi.number(),

      max: Joi.number(),

      min: Joi.number(),

      discount_qty: Joi.number(),

      value: Joi.number(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),
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
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
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

      description: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      rule_definition: CartModel.RuleDefinition().required(),

      validation: CartModel.Validation(),

      restrictions: CartModel.Restrictions(),

      tags: Joi.array().items(Joi.string().allow("")),

      identifiers: CartModel.Identifier().required(),

      state: CartModel.State(),

      action: CartModel.CouponAction(),

      type_slug: Joi.string().allow("").required(),

      validity: CartModel.Validity().required(),

      ownership: CartModel.Ownership().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      code: Joi.string().allow("").required(),

      _schedule: CartModel.CouponSchedule(),

      author: CartModel.CouponAuthor(),

      date_meta: CartModel.CouponDateMeta(),

      display_meta: CartModel.DisplayMeta().required(),
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
      rule_definition: CartModel.RuleDefinition().required(),

      validation: CartModel.Validation(),

      restrictions: CartModel.Restrictions(),

      tags: Joi.array().items(Joi.string().allow("")),

      identifiers: CartModel.Identifier().required(),

      state: CartModel.State(),

      action: CartModel.CouponAction(),

      type_slug: Joi.string().allow("").required(),

      validity: CartModel.Validity().required(),

      ownership: CartModel.Ownership().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      code: Joi.string().allow("").required(),

      _schedule: CartModel.CouponSchedule(),

      author: CartModel.CouponAuthor(),

      date_meta: CartModel.CouponDateMeta(),

      display_meta: CartModel.DisplayMeta().required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: CartModel.CouponSchedule(),

      archive: Joi.boolean(),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static CompareObject() {
    return Joi.object({
      greater_than: Joi.number(),

      equals: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_category: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      cart_unique_item_quantity: CartModel.CompareObject(),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      available_zones: Joi.array().items(Joi.string().allow("")),

      product_tags: Joi.array().items(Joi.string().allow("")),

      item_exclude_company: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_category: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_size: Joi.array().items(Joi.string().allow("")),

      cart_total: CartModel.CompareObject(),

      item_exclude_store: Joi.array().items(Joi.number()),
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

      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue1(),
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

  static Restrictions1() {
    return Joi.object({
      order_quantity: Joi.number(),

      user_groups: Joi.array().items(Joi.number()),

      post_order: CartModel.PostOrder1(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      anonymous_users: Joi.boolean(),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_registered: CartModel.UserRegistered(),

      user_id: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      discount_percentage: Joi.number(),

      discount_price: Joi.number(),

      apportion_discount: Joi.boolean(),

      max_usage_per_transaction: Joi.number(),

      max_discount_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      discount_amount: Joi.number(),

      code: Joi.string().allow(""),

      max_offer_quantity: Joi.number(),

      min_offer_quantity: Joi.number(),
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

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      start: Joi.string().allow("").required(),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),

      published: Joi.boolean().required(),

      next_schedule: Joi.array().items(Joi.any()),

      cron: Joi.string().allow("").allow(null),
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
      apply_priority: Joi.number(),

      apply_exclusive: Joi.string().allow("").allow(null),

      calculate_on: Joi.string().allow(""),

      code: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      date_meta: CartModel.PromotionDateMeta(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      mode: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      restrictions: CartModel.Restrictions1(),

      apply_all_discount: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      _custom_json: Joi.any(),

      _schedule: CartModel.PromotionSchedule(),

      promo_group: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

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
      apply_priority: Joi.number(),

      apply_exclusive: Joi.string().allow("").allow(null),

      calculate_on: Joi.string().allow(""),

      code: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      date_meta: CartModel.PromotionDateMeta(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      mode: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      restrictions: CartModel.Restrictions1(),

      apply_all_discount: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      _custom_json: Joi.any(),

      _schedule: CartModel.PromotionSchedule(),

      promo_group: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      apply_priority: Joi.number(),

      apply_exclusive: Joi.string().allow("").allow(null),

      calculate_on: Joi.string().allow(""),

      code: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      date_meta: CartModel.PromotionDateMeta(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      display_meta: CartModel.DisplayMeta1().required(),

      mode: Joi.string().allow("").required(),

      currency: Joi.string().allow(""),

      restrictions: CartModel.Restrictions1(),

      apply_all_discount: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      _custom_json: Joi.any(),

      _schedule: CartModel.PromotionSchedule(),

      promo_group: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

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
      title: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      type: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      example: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      subtitle: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static CartItem() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      quantity: Joi.number(),

      product_id: Joi.string().allow("").required(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      coupon: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      total: Joi.number(),

      discount: Joi.number(),

      cod_charge: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      mrp_total: Joi.number(),

      you_saved: Joi.number(),

      convenience_fee: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      type: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      coupon_value: Joi.number(),

      value: Joi.number(),

      code: Joi.string().allow(""),

      is_applied: Joi.boolean(),
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
      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),

      coupon: CartModel.CouponBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
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

      currency_code: Joi.string().allow(""),

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
      size: Joi.string().allow(""),

      type: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      seller: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      _custom_json: Joi.any(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      selling: Joi.number(),

      add_on: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: CartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),
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

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      promotion_group: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      offer_text: Joi.string().allow(""),

      ownership: CartModel.Ownership2(),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),
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

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
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

      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),
    });
  }

  static CartProduct() {
    return Joi.object({
      type: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      net_quantity: CartModel.NetQuantity(),

      action: CartModel.ProductAction(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      brand: CartModel.BaseInfo(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      promo_meta: CartModel.PromoMeta(),

      bulk_offer: Joi.any(),

      article: CartModel.ProductArticle(),

      key: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      discount: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      identifiers: CartModel.CartProductIdentifer().required(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      message: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      is_set: Joi.boolean(),

      availability: CartModel.ProductAvailability(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),
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

      email: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      area_code_slug: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      country_code: Joi.string().allow(""),

      phone: Joi.number(),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      meta: Joi.any(),

      pincode: Joi.number(),

      country_phone_code: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

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
      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      order_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      payment_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: CartModel.MultiTenderPaymentMeta(),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      name: Joi.string().allow(""),
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

  static OpenApiOrderItem() {
    return Joi.object({
      price_effective: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      employee_discount: Joi.number(),

      discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      extra_meta: Joi.any(),

      cod_charges: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      size: Joi.string().allow("").required(),

      product_id: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      quantity: Joi.number(),

      meta: CartModel.CartItemMeta(),

      loyalty_discount: Joi.number(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      coupon: Joi.string().allow(""),

      employee_discount: Joi.any(),

      cashback_applied: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      coupon_value: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      cod_charges: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      delivery_charges: Joi.number().required(),

      loyalty_discount: Joi.number(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      order_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      billing_address: CartModel.ShippingAddress().required(),

      shipping_address: CartModel.ShippingAddress(),

      comment: Joi.string().allow("").allow(null),

      gstin: Joi.string().allow("").allow(null),
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
      promotion: Joi.any(),

      payment_mode: Joi.string().allow("").allow(null),

      articles: Joi.array().items(Joi.any()).required(),

      is_active: Joi.boolean(),

      app_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      payment_methods: Joi.array().items(Joi.any()),

      discount: Joi.number(),

      last_modified: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      cashback: Joi.any().required(),

      coupon: Joi.any().allow(null),

      is_archive: Joi.boolean(),

      bulk_coupon_discount: Joi.number().allow(null),

      fc_index_map: Joi.array().items(Joi.number()),

      shipments: Joi.array().items(Joi.any()),

      payments: Joi.any().allow(null),

      uid: Joi.number().required(),

      cod_charges: Joi.any(),

      buy_now: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      delivery_charges: Joi.any(),

      fynd_credits: Joi.any(),

      order_id: Joi.string().allow(""),

      cart_value: Joi.number(),

      merge_qty: Joi.boolean().allow(null),

      _id: Joi.string().allow("").required(),

      pick_up_customer_details: Joi.any().allow(null),

      comment: Joi.string().allow("").allow(null),

      meta: Joi.any().allow(null),

      gstin: Joi.string().allow("").allow(null),

      expire_at: Joi.string().allow("").required(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      result: Joi.any(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.AbandonedCart()),

      page: CartModel.Page(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),

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
      coupon_text: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      article_assignment: Joi.any(),

      store_id: Joi.number(),

      display: Joi.string().allow(""),

      seller_id: Joi.number(),

      _custom_json: Joi.any(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      quantity: Joi.number(),

      pos: Joi.boolean(),
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
      cart: CartModel.CartDetailResponse(),

      partial: Joi.boolean(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      item_index: Joi.number(),

      _custom_json: Joi.any(),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

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
      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

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
      token: Joi.string().allow(""),

      share_url: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      user: Joi.any(),

      source: Joi.any(),

      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

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

      cart_value: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

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
      gender: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      user: CartModel.UserInfo(),

      is_valid: Joi.boolean(),

      id: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      message: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),
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
      total: Joi.number(),

      total_item_count: Joi.number(),

      current: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      title: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),
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
      google_map_point: Joi.any(),

      is_active: Joi.boolean(),

      area: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      area_code_slug: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      phone: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      email: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      meta: Joi.any(),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),
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
      is_updated: Joi.boolean(),

      id: Joi.string().allow(""),

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
      billing_address_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      fulfillment_type: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      dp_id: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      shipment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      id: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      comment: Joi.string().allow(""),

      error: Joi.boolean(),

      gstin: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),
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
      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      ordering_store: Joi.number().allow(null),

      payment_mode: Joi.string().allow("").required(),

      pos: Joi.boolean(),

      payment_identifier: Joi.string().allow("").allow(null),

      delivery_address: Joi.any(),

      billing_address_id: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      extra_meta: Joi.any(),

      aggregator: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      address_id: Joi.string().allow(""),

      pick_at_store_uid: Joi.number().allow(null),

      payment_auto_confirm: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      files: Joi.array().items(CartModel.Files()),

      payment_params: Joi.any().allow(null),

      staff: CartModel.StaffCheckout(),

      billing_address: Joi.any(),

      meta: Joi.any(),

      order_type: Joi.string().allow("").required(),
    });
  }

  static CheckCart() {
    return Joi.object({
      store_emps: Joi.array().items(Joi.any()),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      checkout_mode: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      cod_available: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      user_type: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      cart_id: Joi.number(),

      delivery_promise: CartModel.ShipmentPromise(),

      error_message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      success: Joi.boolean(),

      uid: Joi.string().allow(""),

      cod_charges: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      delivery_charges: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cod_message: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),

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

      email: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      uid: Joi.number(),

      id: Joi.number(),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      pincode: Joi.number(),

      city: Joi.string().allow(""),

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
      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      aggregator_name: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

      discount: Joi.number(),

      valid: Joi.boolean(),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentCouponValidate() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      coupon_validity: CartModel.CouponValidity(),
    });
  }
}
module.exports = CartModel;
