const Joi = require("joi");

class CartModel {
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
      codes: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),
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

      user: Joi.number(),

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
      bulk_bundle: CartModel.BulkBundleRestriction(),

      price_range: CartModel.PriceRange(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      post_order: CartModel.PostOrder(),

      ordering_stores: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_groups: Joi.array().items(Joi.number()),

      coupon_allowed: Joi.boolean(),

      uses: CartModel.UsesRestriction(),
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

      key: Joi.number(),

      value: Joi.number(),

      discount_qty: Joi.number(),

      min: Joi.number(),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),
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

      apply: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      auto_apply: Joi.boolean(),

      applicable_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      value_type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      type: Joi.string().allow("").required(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static Identifier() {
    return Joi.object({
      company_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      collection_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),
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
      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponAdd() {
    return Joi.object({
      restrictions: CartModel.Restrictions(),

      validity: CartModel.Validity().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      code: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      _schedule: CartModel.CouponSchedule(),

      state: CartModel.State(),

      type_slug: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      display_meta: CartModel.DisplayMeta().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      date_meta: CartModel.CouponDateMeta(),

      author: CartModel.CouponAuthor(),

      identifiers: CartModel.Identifier().required(),

      ownership: CartModel.Ownership().required(),

      validation: CartModel.Validation(),
    });
  }

  static Page() {
    return Joi.object({
      current: Joi.number(),

      next_id: Joi.string().allow(""),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow("").required(),
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
      restrictions: CartModel.Restrictions(),

      validity: CartModel.Validity().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      code: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      _schedule: CartModel.CouponSchedule(),

      state: CartModel.State(),

      type_slug: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      display_meta: CartModel.DisplayMeta().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      date_meta: CartModel.CouponDateMeta(),

      author: CartModel.CouponAuthor(),

      identifiers: CartModel.Identifier().required(),

      ownership: CartModel.Ownership().required(),

      validation: CartModel.Validation(),
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
      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      published: Joi.boolean().required(),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
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
      description: Joi.string().allow(""),

      offer_label: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static UserRegistered() {
    return Joi.object({
      start: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),
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
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
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

      user_registered: CartModel.UserRegistered(),

      anonymous_users: Joi.boolean(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      post_order: CartModel.PostOrder1(),

      uses: CartModel.UsesRestriction1().required(),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_groups: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CompareObject() {
    return Joi.object({
      equals: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      cart_unique_item_quantity: CartModel.CompareObject(),

      item_exclude_l2_category: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_exclude_l1_category: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_company: Joi.array().items(Joi.number()),

      item_l1_category: Joi.array().items(Joi.number()),

      item_l2_category: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      cart_total: CartModel.CompareObject(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_brand: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_department: Joi.array().items(Joi.number()),

      item_department: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_tags: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),
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
      min_offer_quantity: Joi.number(),

      discount_price: Joi.number(),

      max_offer_quantity: Joi.number(),

      code: Joi.string().allow(""),

      apportion_discount: Joi.boolean(),

      max_discount_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      discount_percentage: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      discount_amount: Joi.number(),
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

  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),

      pdp: Joi.boolean().required(),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      _schedule: CartModel.PromotionSchedule(),

      apply_priority: Joi.number(),

      promo_group: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      currency: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      restrictions: CartModel.Restrictions1(),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      stackable: Joi.boolean(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      _custom_json: Joi.any(),

      apply_exclusive: Joi.string().allow("").allow(null),

      visiblility: CartModel.Visibility(),

      calculate_on: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),
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
      _schedule: CartModel.PromotionSchedule(),

      apply_priority: Joi.number(),

      promo_group: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      currency: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      restrictions: CartModel.Restrictions1(),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      stackable: Joi.boolean(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      _custom_json: Joi.any(),

      apply_exclusive: Joi.string().allow("").allow(null),

      visiblility: CartModel.Visibility(),

      calculate_on: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      _schedule: CartModel.PromotionSchedule(),

      apply_priority: Joi.number(),

      promo_group: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      currency: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      code: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      restrictions: CartModel.Restrictions1(),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      stackable: Joi.boolean(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      _custom_json: Joi.any(),

      apply_exclusive: Joi.string().allow("").allow(null),

      visiblility: CartModel.Visibility(),

      calculate_on: Joi.string().allow(""),

      post_order_action: CartModel.PromotionAction(),
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

      entity_slug: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      example: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      type: Joi.string().allow(""),
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

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      offer: Joi.any(),

      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
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
      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promo_id: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      amount: Joi.number(),
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

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      selling: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      converted: CartModel.ProductPrice(),

      base: CartModel.ProductPrice(),
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
      url: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      type: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      brand: CartModel.BaseInfo(),

      action: CartModel.ProductAction(),

      name: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      slug: Joi.string().allow(""),

      uid: Joi.number(),

      type: Joi.string().allow(""),
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

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

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
      store: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      seller: CartModel.BaseInfo(),

      size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      coupon_message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      availability: CartModel.ProductAvailability(),

      price: CartModel.ProductPriceInfo(),

      product: CartModel.CartProduct(),

      discount: Joi.string().allow(""),

      key: Joi.string().allow(""),

      quantity: Joi.number(),

      message: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      is_set: Joi.boolean(),

      promo_meta: CartModel.PromoMeta(),

      identifiers: CartModel.CartProductIdentifer().required(),

      price_per_unit: CartModel.ProductPriceInfo(),

      article: CartModel.ProductArticle(),

      bulk_offer: Joi.any(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),

      total: Joi.number(),

      you_saved: Joi.number(),

      delivery_charge: Joi.number(),

      discount: Joi.number(),

      gst_charges: Joi.number(),

      mrp_total: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      subtotal: Joi.number(),

      fynd_cash: Joi.number(),

      vog: Joi.number(),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      value: Joi.number(),

      is_applied: Joi.boolean(),

      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),

      total: Joi.number(),

      applicable: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),
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

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),
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
      area: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      state: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").allow(null),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      email: Joi.string().allow(""),

      phone: Joi.number(),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),

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

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      order_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: CartModel.MultiTenderPaymentMeta(),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

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
      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cod_charges: Joi.number().required(),

      amount_paid: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      discount: Joi.number().required(),

      loyalty_discount: Joi.number(),

      quantity: Joi.number(),

      price_effective: Joi.number().required(),

      size: Joi.string().allow("").required(),

      product_id: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      employee_discount: Joi.number(),

      extra_meta: Joi.any(),

      delivery_charges: Joi.number().required(),

      meta: CartModel.CartItemMeta(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      coupon_value: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      affiliate_order_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      coupon_code: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      coupon: Joi.string().allow(""),

      billing_address: CartModel.ShippingAddress().required(),

      employee_discount: Joi.any(),

      cashback_applied: Joi.number().required(),

      shipping_address: CartModel.ShippingAddress(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_ref_id: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }
}
module.exports = CartModel;
