const Joi = require("joi");

class CartModel {
  static Identifier() {
    return Joi.object({
      collection_id: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      applicable_on: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      scope: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      calculate_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      value_type: Joi.string().allow("").required(),
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

      value: Joi.number(),

      discount_qty: Joi.number(),

      min: Joi.number(),

      key: Joi.number(),
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
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
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

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      networks: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),
    });
  }

  static Restrictions() {
    return Joi.object({
      price_range: CartModel.PriceRange(),

      post_order: CartModel.PostOrder(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      uses: CartModel.UsesRestriction(),

      coupon_allowed: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      ordering_stores: Joi.array().items(Joi.number()),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
    });
  }

  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string().allow("").allow(null),

      app_id: Joi.array().items(Joi.string().allow("")),

      anonymous: Joi.boolean(),
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
      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),

      payable_by: Joi.string().allow("").required(),
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

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      identifiers: CartModel.Identifier().required(),

      code: Joi.string().allow("").required(),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      restrictions: CartModel.Restrictions(),

      _schedule: CartModel.CouponSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      validation: CartModel.Validation(),

      display_meta: CartModel.DisplayMeta().required(),

      date_meta: CartModel.CouponDateMeta(),

      type_slug: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      action: CartModel.CouponAction(),

      author: CartModel.CouponAuthor(),

      state: CartModel.State(),
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
      identifiers: CartModel.Identifier().required(),

      code: Joi.string().allow("").required(),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      restrictions: CartModel.Restrictions(),

      _schedule: CartModel.CouponSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      validation: CartModel.Validation(),

      display_meta: CartModel.DisplayMeta().required(),

      date_meta: CartModel.CouponDateMeta(),

      type_slug: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      action: CartModel.CouponAction(),

      author: CartModel.CouponAuthor(),

      state: CartModel.State(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: CartModel.CouponSchedule(),

      archive: Joi.boolean(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      discount_price: Joi.number(),

      discount_amount: Joi.number(),

      max_discount_amount: Joi.number(),

      code: Joi.string().allow(""),

      min_offer_quantity: Joi.number(),

      discount_percentage: Joi.number(),

      apportion_discount: Joi.boolean(),

      max_usage_per_transaction: Joi.number(),

      partial_can_ret: Joi.boolean(),

      max_offer_quantity: Joi.number(),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than_equals: Joi.number(),

      less_than: Joi.number(),

      greater_than_equals: Joi.number(),

      equals: Joi.number(),

      greater_than: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      cart_unique_item_quantity: CartModel.CompareObject(),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_l2_category: Joi.array().items(Joi.number()),

      item_exclude_department: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_id: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_department: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_store: Joi.array().items(Joi.number()),

      item_l1_category: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_exclude_l2_category: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_category: Joi.array().items(Joi.number()),

      item_tags: Joi.array().items(Joi.string().allow("")),

      item_exclude_l1_category: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      all_items: Joi.boolean(),

      cart_total: CartModel.CompareObject(),

      item_brand: Joi.array().items(Joi.number()),
    });
  }

  static DiscountRule() {
    return Joi.object({
      offer: CartModel.DiscountOffer().required(),

      buy_condition: Joi.string().allow("").required(),

      discount_type: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      published: Joi.boolean().required(),

      start: Joi.string().allow("").required(),

      end: Joi.string().allow("").allow(null),

      duration: Joi.number().allow(null),
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
      remaining: CartModel.UsesRemaining1(),

      maximum: CartModel.UsesRemaining1(),
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
      type: Joi.string().allow("").required(),

      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue1(),
    });
  }

  static Restrictions1() {
    return Joi.object({
      post_order: CartModel.PostOrder1(),

      anonymous_users: Joi.boolean(),

      user_id: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      user_registered: CartModel.UserRegistered(),

      order_quantity: Joi.number(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),
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

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
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

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
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
      apply_exclusive: Joi.string().allow("").allow(null),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      ownership: CartModel.Ownership1().required(),

      author: CartModel.PromotionAuthor(),

      promo_group: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),
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

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      ownership: CartModel.Ownership1().required(),

      author: CartModel.PromotionAuthor(),

      promo_group: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      apply_exclusive: Joi.string().allow("").allow(null),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      apply_all_discount: Joi.boolean(),

      apply_priority: Joi.number(),

      application_id: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      ownership: CartModel.Ownership1().required(),

      author: CartModel.PromotionAuthor(),

      promo_group: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),
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
      is_hidden: Joi.boolean(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      example: Joi.string().allow(""),

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
      base: CartModel.BasePrice(),

      converted: CartModel.BasePrice(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      extra_meta: Joi.any(),

      seller: CartModel.BaseInfo(),

      store: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      size: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      price: CartModel.ArticlePriceInfo(),

      uid: Joi.string().allow(""),
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
      item_slug: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_price_details: Joi.any(),

      item_id: Joi.number(),
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

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      item_criteria: Joi.any(),

      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_group: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),
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
      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
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
      categories: Joi.array().items(CartModel.CategoryInfo()),

      type: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      name: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      action: CartModel.ProductAction(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),

      add_on: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      selling: Joi.number(),

      effective: Joi.number(),

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
      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      deliverable: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      promo_meta: CartModel.PromoMeta(),

      identifiers: CartModel.CartProductIdentifer().required(),

      message: Joi.string().allow(""),

      is_set: Joi.boolean(),

      article: CartModel.ProductArticle(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      coupon_message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      parent_item_identifiers: Joi.any(),

      product: CartModel.CartProduct(),

      discount: Joi.string().allow(""),

      price_per_unit: CartModel.ProductPriceInfo(),

      price: CartModel.ProductPriceInfo(),

      key: Joi.string().allow(""),

      quantity: Joi.number(),

      availability: CartModel.ProductAvailability(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      delivery_charge: Joi.number(),

      you_saved: Joi.number(),

      subtotal: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      cod_charge: Joi.number(),

      vog: Joi.number(),

      mrp_total: Joi.number(),

      discount: Joi.number(),

      fynd_cash: Joi.number(),

      gst_charges: Joi.number(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.number(),

      uid: Joi.string().allow(""),

      is_applied: Joi.boolean(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      total: Joi.number(),

      description: Joi.string().allow(""),
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
      address_type: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      area: Joi.string().allow(""),

      address: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.number(),

      meta: Joi.any(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      pincode: Joi.number(),

      city: Joi.string().allow("").allow(null),
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

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      is_valid: Joi.boolean(),
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
      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),
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

  static CartItemMeta() {
    return Joi.object({
      group_id: Joi.string().allow(""),

      primary_item: Joi.boolean(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      price_effective: Joi.number().required(),

      extra_meta: Joi.any(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cashback_applied: Joi.number().required(),

      size: Joi.string().allow("").required(),

      coupon_effective_discount: Joi.number().required(),

      cod_charges: Joi.number().required(),

      employee_discount: Joi.number(),

      amount_paid: Joi.number().required(),

      loyalty_discount: Joi.number(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      meta: CartModel.CartItemMeta(),

      delivery_charges: Joi.number().required(),

      discount: Joi.number().required(),

      quantity: Joi.number(),

      product_id: Joi.number().required(),

      price_marked: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      files: Joi.array().items(CartModel.OpenApiFiles()),

      cashback_applied: Joi.number().required(),

      employee_discount: Joi.any(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      delivery_charges: Joi.number().required(),

      coupon: Joi.string().allow(""),

      billing_address: CartModel.ShippingAddress().required(),

      currency_code: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      order_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      shipping_address: CartModel.ShippingAddress(),

      cart_value: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      coupon_value: Joi.number().required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_ref_id: Joi.string().allow(""),

      success: Joi.boolean(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow(""),
    });
  }
}
module.exports = CartModel;
