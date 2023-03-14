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
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
    });
  }

  static Rule() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),

      discount_qty: Joi.number(),

      key: Joi.number(),

      value: Joi.number(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
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

      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      anonymous: Joi.boolean(),

      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      scope: Joi.array().items(Joi.string().allow("")),

      applicable_on: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      is_exact: Joi.boolean(),

      calculate_on: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),
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
      maximum: CartModel.UsesRemaining(),

      remaining: CartModel.UsesRemaining(),
    });
  }

  static PostOrder() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
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

      uses: CartModel.PaymentAllowValue(),

      types: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Restrictions() {
    return Joi.object({
      platforms: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction(),

      post_order: CartModel.PostOrder(),

      ordering_stores: Joi.array().items(Joi.number()),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      user_type: Joi.string().allow(""),

      price_range: CartModel.PriceRange(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      user_groups: Joi.array().items(Joi.number()),

      coupon_allowed: Joi.boolean(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      start: Joi.string().allow(""),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),
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
      item_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      article_id: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAdd() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      action: CartModel.CouponAction(),

      type_slug: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validity: CartModel.Validity().required(),

      display_meta: CartModel.DisplayMeta().required(),

      validation: CartModel.Validation(),

      author: CartModel.CouponAuthor(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      restrictions: CartModel.Restrictions(),

      _schedule: CartModel.CouponSchedule(),

      date_meta: CartModel.CouponDateMeta(),

      identifiers: CartModel.Identifier().required(),

      code: Joi.string().allow("").required(),
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
      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      action: CartModel.CouponAction(),

      type_slug: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validity: CartModel.Validity().required(),

      display_meta: CartModel.DisplayMeta().required(),

      validation: CartModel.Validation(),

      author: CartModel.CouponAuthor(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      restrictions: CartModel.Restrictions(),

      _schedule: CartModel.CouponSchedule(),

      date_meta: CartModel.CouponDateMeta(),

      identifiers: CartModel.Identifier().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      min_offer_quantity: Joi.number(),

      discount_price: Joi.number(),

      partial_can_ret: Joi.boolean(),

      discount_percentage: Joi.number(),

      max_discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      apportion_discount: Joi.boolean(),

      discount_amount: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static CompareObject() {
    return Joi.object({
      greater_than_equals: Joi.number(),

      equals: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than: Joi.number(),

      less_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_brand: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      product_tags: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      cart_total: CartModel.CompareObject(),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_company: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_brand: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_store: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),
    });
  }

  static DiscountRule() {
    return Joi.object({
      offer: CartModel.DiscountOffer().required(),

      discount_type: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),

      buy_condition: Joi.string().allow("").required(),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
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

  static Restrictions1() {
    return Joi.object({
      platforms: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      post_order: CartModel.PostOrder1(),

      anonymous_users: Joi.boolean(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_registered: CartModel.UserRegistered(),

      user_id: Joi.array().items(Joi.string().allow("")),

      user_groups: Joi.array().items(Joi.number()),

      order_quantity: Joi.number(),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
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
      offer_label: Joi.string().allow(""),

      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      duration: Joi.number().allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      start: Joi.string().allow("").required(),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      currency: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      restrictions: CartModel.Restrictions1(),

      apply_exclusive: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      stackable: Joi.boolean(),

      apply_priority: Joi.number(),

      calculate_on: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      mode: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      ownership: CartModel.Ownership1().required(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_all_discount: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      date_meta: CartModel.PromotionDateMeta(),
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
      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      currency: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      restrictions: CartModel.Restrictions1(),

      apply_exclusive: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      stackable: Joi.boolean(),

      apply_priority: Joi.number(),

      calculate_on: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      mode: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      ownership: CartModel.Ownership1().required(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_all_discount: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      date_meta: CartModel.PromotionDateMeta(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      currency: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      restrictions: CartModel.Restrictions1(),

      apply_exclusive: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      stackable: Joi.boolean(),

      apply_priority: Joi.number(),

      calculate_on: Joi.string().allow(""),

      promo_group: Joi.string().allow("").required(),

      author: CartModel.PromotionAuthor(),

      mode: Joi.string().allow("").required(),

      promotion_type: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      ownership: CartModel.Ownership1().required(),

      display_meta: CartModel.DisplayMeta1().required(),

      apply_all_discount: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      date_meta: CartModel.PromotionDateMeta(),
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

      title: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      example: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      type: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      description: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),
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

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      add_on: Joi.number(),

      selling: Joi.number(),

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

  static ProductAvailability() {
    return Joi.object({
      other_store_quantity: Joi.number(),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      out_of_stock: Joi.boolean(),
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

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static NetQuantity() {
    return Joi.object({
      unit: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      item_code: Joi.string().allow("").allow(null),

      action: CartModel.ProductAction(),

      name: Joi.string().allow(""),

      type: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      net_quantity: CartModel.NetQuantity(),

      brand: CartModel.BaseInfo(),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      uid: Joi.number(),
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

      marked: Joi.number(),

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
      _custom_json: Joi.any(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      price: CartModel.ArticlePriceInfo(),

      parent_item_identifiers: Joi.any(),

      size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      store: CartModel.BaseInfo(),

      uid: Joi.string().allow(""),
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
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),

      quantity: Joi.number(),

      article_id: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),

      item_criteria: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      article_quantity: Joi.number(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_group: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      ownership: CartModel.Ownership2(),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      amount: Joi.number(),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      price_per_unit: CartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      availability: CartModel.ProductAvailability(),

      discount: Joi.string().allow(""),

      message: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      promo_meta: CartModel.PromoMeta(),

      key: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      article: CartModel.ProductArticle(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      bulk_offer: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      coupon_message: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      mrp_total: Joi.number(),

      delivery_charge: Joi.number(),

      subtotal: Joi.number(),

      total: Joi.number(),

      convenience_fee: Joi.number(),

      discount: Joi.number(),

      gst_charges: Joi.number(),

      vog: Joi.number(),

      fynd_cash: Joi.number(),

      cod_charge: Joi.number(),

      coupon: Joi.number(),

      you_saved: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      message: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      type: Joi.string().allow(""),

      coupon_value: Joi.number(),

      minimum_cart_value: Joi.number(),

      value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),

      total: Joi.number(),

      is_applied: Joi.boolean(),

      applicable: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: CartModel.RawBreakup(),

      coupon: CartModel.CouponBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      errors: Joi.any(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      pincode: Joi.number(),

      meta: Joi.any(),

      area_code: Joi.string().allow("").required(),

      phone: Joi.number(),

      country_phone_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      landmark: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      country_code: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      breakup_values: CartModel.CartBreakup(),
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

  static MultiTenderPaymentMeta() {
    return Joi.object({
      current_status: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),
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
      product_id: Joi.number().required(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      amount_paid: Joi.number().required(),

      discount: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      delivery_charges: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      size: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      extra_meta: Joi.any(),

      coupon_effective_discount: Joi.number().required(),

      cod_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      quantity: Joi.number(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      employee_discount: Joi.any(),

      delivery_charges: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      coupon: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      shipping_address: CartModel.ShippingAddress(),

      comment: Joi.string().allow("").allow(null),

      coupon_value: Joi.number().required(),

      cart_value: Joi.number().required(),

      billing_address: CartModel.ShippingAddress().required(),

      cashback_applied: Joi.number().required(),

      cod_charges: Joi.number().required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      order_ref_id: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      fynd_credits: Joi.any(),

      discount: Joi.number(),

      shipments: Joi.array().items(Joi.any()),

      pick_up_customer_details: Joi.any().allow(null),

      last_modified: Joi.string().allow("").required(),

      coupon: Joi.any().allow(null),

      fc_index_map: Joi.array().items(Joi.number()),

      gstin: Joi.string().allow("").allow(null),

      is_archive: Joi.boolean(),

      merge_qty: Joi.boolean().allow(null),

      payment_methods: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      comment: Joi.string().allow("").allow(null),

      payments: Joi.any().allow(null),

      cod_charges: Joi.any(),

      uid: Joi.number().required(),

      checkout_mode: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      app_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").allow(null),

      articles: Joi.array().items(Joi.any()).required(),

      bulk_coupon_discount: Joi.number().allow(null),

      delivery_charges: Joi.any(),

      buy_now: Joi.boolean(),

      order_id: Joi.string().allow(""),

      expire_at: Joi.string().allow("").required(),

      promotion: Joi.any(),

      _id: Joi.string().allow("").required(),

      cashback: Joi.any().required(),

      meta: Joi.any().allow(null),

      is_default: Joi.boolean().required(),

      cart_value: Joi.number(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.AbandonedCart()),

      page: CartModel.Page(),

      success: Joi.boolean(),

      result: Joi.any(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),

      enabled: Joi.boolean(),

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
      checkout_mode: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      delivery_promise: CartModel.ShipmentPromise(),

      pan_config: Joi.any(),

      pan_no: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      display: Joi.string().allow(""),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      store_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

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
      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      _custom_json: Joi.any(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      item_index: Joi.number(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

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
      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

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
      created_on: Joi.string().allow(""),

      user: Joi.any(),

      meta: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_promise: CartModel.ShipmentPromise(),

      uid: Joi.string().allow(""),

      cart_id: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      breakup_values: CartModel.CartBreakup(),
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
      cart_id: Joi.string().allow(""),

      item_counts: Joi.string().allow(""),

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
      last_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      _id: Joi.string().allow(""),

      uid: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      pan_no: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_promise: CartModel.ShipmentPromise(),

      pan_config: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      user: CartModel.UserInfo(),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      breakup_values: CartModel.CartBreakup(),
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

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total_item_count: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static Coupon() {
    return Joi.object({
      sub_title: Joi.string().allow(""),

      title: Joi.string().allow(""),

      message: Joi.string().allow(""),

      expires_on: Joi.string().allow(""),

      coupon_value: Joi.number(),

      max_discount_value: Joi.number(),

      coupon_code: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      description: Joi.string().allow("").allow(null),

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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static PlatformAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      area_code: Joi.string().allow(""),

      google_map_point: Joi.any(),

      area_code_slug: Joi.string().allow(""),

      country: Joi.string().allow(""),

      is_active: Joi.boolean(),

      is_default_address: Joi.boolean(),

      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      meta: Joi.any(),

      area: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static PlatformGetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(CartModel.PlatformAddress()),
    });
  }

  static SaveAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_updated: Joi.boolean(),

      is_default_address: Joi.boolean(),

      success: Joi.boolean(),

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

      checkout_mode: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      shipment_type: Joi.string().allow(""),

      fulfillment_type: Joi.string().allow(""),

      shipments: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      order_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      dp_id: Joi.string().allow("").allow(null),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      cart_id: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      buy_now: Joi.boolean(),

      is_valid: Joi.boolean(),

      error: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      breakup_values: CartModel.CartBreakup(),

      uid: Joi.string().allow(""),
    });
  }

  static UpdateCartShipmentItem() {
    return Joi.object({
      shipment_type: Joi.string().allow("").required(),

      quantity: Joi.number(),

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
      last_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),
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
      callback_url: Joi.string().allow("").allow(null),

      ordering_store: Joi.number().allow(null),

      staff: CartModel.StaffCheckout(),

      pos: Joi.boolean(),

      payment_params: Joi.any().allow(null),

      address_id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      delivery_address: Joi.any(),

      order_type: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      aggregator: Joi.string().allow(""),

      payment_auto_confirm: Joi.boolean(),

      extra_meta: Joi.any(),

      files: Joi.array().items(CartModel.Files()),

      meta: Joi.any(),

      pick_at_store_uid: Joi.number().allow(null),

      user_id: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),
    });
  }

  static CheckCart() {
    return Joi.object({
      cod_available: Joi.boolean(),

      message: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_promise: CartModel.ShipmentPromise(),

      store_emps: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      cod_charges: Joi.number(),

      cart_id: Joi.number(),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      delivery_charges: Joi.number(),

      user_type: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      delivery_charge_order_value: Joi.number(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow(""),

      message: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      app_intercept_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

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
      email: Joi.string().allow(""),

      pincode: Joi.number(),

      id: Joi.number(),

      area_code: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      city: Joi.string().allow(""),

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
      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      valid: Joi.boolean(),

      discount: Joi.number(),

      title: Joi.string().allow(""),

      display_message_en: Joi.string().allow("").allow(null),

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
