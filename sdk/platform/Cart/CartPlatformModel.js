const Joi = require("joi");

class CartModel {
  static DisplayMetaDict() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),
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

      codes: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static UsesRemaining() {
    return Joi.object({
      total: Joi.number(),

      user: Joi.number(),

      app: Joi.number(),
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

      post_order: CartModel.PostOrder(),

      ordering_stores: Joi.array().items(Joi.number()),

      coupon_allowed: Joi.boolean(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      uses: CartModel.UsesRestriction(),

      user_groups: Joi.array().items(Joi.number()),
    });
  }

  static Rule() {
    return Joi.object({
      min: Joi.number(),

      key: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),

      discount_qty: Joi.number(),
    });
  }

  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      duration: Joi.number().allow(null),
    });
  }

  static Identifier() {
    return Joi.object({
      company_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string().allow(""),

      action_date: Joi.string().allow("").allow(null),
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

  static RuleDefinition() {
    return Joi.object({
      applicable_on: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      calculate_on: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      auto_apply: Joi.boolean(),

      scope: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),
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
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      display_meta: CartModel.DisplayMeta().required(),

      restrictions: CartModel.Restrictions(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validation: CartModel.Validation(),

      _schedule: CartModel.CouponSchedule(),

      type_slug: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),

      action: CartModel.CouponAction(),

      code: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      author: CartModel.CouponAuthor(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      tags: Joi.array().items(Joi.string().allow("")),

      date_meta: CartModel.CouponDateMeta(),

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

      restrictions: CartModel.Restrictions(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validation: CartModel.Validation(),

      _schedule: CartModel.CouponSchedule(),

      type_slug: Joi.string().allow("").required(),

      identifiers: CartModel.Identifier().required(),

      action: CartModel.CouponAction(),

      code: Joi.string().allow("").required(),

      ownership: CartModel.Ownership().required(),

      author: CartModel.CouponAuthor(),

      rule_definition: CartModel.RuleDefinition().required(),

      state: CartModel.State(),

      tags: Joi.array().items(Joi.string().allow("")),

      date_meta: CartModel.CouponDateMeta(),

      validity: CartModel.Validity().required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: CartModel.CouponSchedule(),

      archive: Joi.boolean(),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than: Joi.number(),

      greater_than: Joi.number(),

      greater_than_equals: Joi.number(),

      less_than_equals: Joi.number(),

      equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_sku: Joi.array().items(Joi.string().allow("")),

      cart_unique_item_quantity: CartModel.CompareObject(),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      cart_total: CartModel.CompareObject(),

      all_items: Joi.boolean(),

      cart_quantity: CartModel.CompareObject(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      min_offer_quantity: Joi.number(),

      max_offer_quantity: Joi.number(),

      discount_price: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      discount_amount: Joi.number(),

      code: Joi.string().allow(""),

      partial_can_ret: Joi.boolean(),

      max_discount_amount: Joi.number(),

      apportion_discount: Joi.boolean(),

      discount_percentage: Joi.number(),
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

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      name: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      end: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),

      start: Joi.string().allow("").required(),

      duration: Joi.number().allow(null),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),

      action_type: Joi.string().allow("").required(),
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
      post_order: CartModel.PostOrder1(),

      user_registered: CartModel.UserRegistered(),

      order_quantity: Joi.number(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      anonymous_users: Joi.boolean(),

      uses: CartModel.UsesRestriction1().required(),

      user_groups: Joi.array().items(Joi.number()),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
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
      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      ownership: CartModel.Ownership1().required(),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      promo_group: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      post_order_action: CartModel.PromotionAction(),

      code: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      restrictions: CartModel.Restrictions1(),

      mode: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),
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
      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      ownership: CartModel.Ownership1().required(),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      promo_group: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      post_order_action: CartModel.PromotionAction(),

      code: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      restrictions: CartModel.Restrictions1(),

      mode: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      ownership: CartModel.Ownership1().required(),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      display_meta: CartModel.DisplayMeta1().required(),

      promo_group: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      stackable: Joi.boolean(),

      post_order_action: CartModel.PromotionAction(),

      code: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      restrictions: CartModel.Restrictions1(),

      mode: Joi.string().allow("").required(),

      apply_priority: Joi.number(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      promotion_type: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),
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
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      example: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      type: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

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

  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),

      raw_offer: Joi.any(),

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

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number(),

      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),
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

  static AppliedPromotion() {
    return Joi.object({
      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      article_quantity: Joi.number(),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
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

  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static CartProduct() {
    return Joi.object({
      name: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      action: CartModel.ProductAction(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      type: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),

      effective: Joi.number(),

      selling: Joi.number(),

      marked: Joi.number(),
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

  static BasePrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

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
      seller: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      store: CartModel.BaseInfo(),

      uid: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      price: CartModel.ArticlePriceInfo(),

      size: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      type: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      availability: CartModel.ProductAvailability(),

      key: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      product: CartModel.CartProduct(),

      coupon_message: Joi.string().allow(""),

      price: CartModel.ProductPriceInfo(),

      identifiers: CartModel.CartProductIdentifer().required(),

      discount: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      bulk_offer: Joi.any(),

      is_set: Joi.boolean(),

      price_per_unit: CartModel.ProductPriceInfo(),

      article: CartModel.ProductArticle(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),

      applicable: Joi.number(),

      is_applied: Joi.boolean(),

      description: Joi.string().allow(""),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      message: Joi.string().allow(""),

      coupon_type: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      value: Joi.number(),

      title: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      max_discount_value: Joi.number(),

      code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      coupon: Joi.number(),

      subtotal: Joi.number(),

      mrp_total: Joi.number(),

      you_saved: Joi.number(),

      cod_charge: Joi.number(),

      fynd_cash: Joi.number(),

      gst_charges: Joi.number(),

      total: Joi.number(),

      delivery_charge: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      discount: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      loyalty_points: CartModel.LoyaltyPoints(),

      coupon: CartModel.CouponBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),
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
      name: Joi.string().allow(""),

      pincode: Joi.number(),

      address: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      phone: Joi.number(),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      city: Joi.string().allow("").allow(null),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),
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

  static MultiTenderPaymentMeta() {
    return Joi.object({
      extra_meta: Joi.any().allow(null),

      payment_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),
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

  static OpenApiOrderItem() {
    return Joi.object({
      extra_meta: Joi.any(),

      amount_paid: Joi.number().required(),

      employee_discount: Joi.number(),

      product_id: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      meta: CartModel.CartItemMeta(),

      size: Joi.string().allow("").required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cashback_applied: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      loyalty_discount: Joi.number(),

      quantity: Joi.number(),

      cod_charges: Joi.number().required(),

      discount: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),

      cart_value: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      coupon_value: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      order_id: Joi.string().allow(""),

      coupon: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      employee_discount: Joi.any(),

      loyalty_discount: Joi.number(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      shipping_address: CartModel.ShippingAddress(),

      currency_code: Joi.string().allow(""),

      comment: Joi.string().allow("").allow(null),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      gstin: Joi.string().allow("").allow(null),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      billing_address: CartModel.ShippingAddress().required(),

      cod_charges: Joi.number().required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      order_ref_id: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      expire_at: Joi.string().allow("").required(),

      cart_value: Joi.number(),

      last_modified: Joi.string().allow("").required(),

      fc_index_map: Joi.array().items(Joi.number()),

      pick_up_customer_details: Joi.any().allow(null),

      is_active: Joi.boolean(),

      coupon: Joi.any().allow(null),

      uid: Joi.number().required(),

      meta: Joi.any().allow(null),

      created_on: Joi.string().allow("").required(),

      bulk_coupon_discount: Joi.number().allow(null),

      cod_charges: Joi.any(),

      is_archive: Joi.boolean(),

      merge_qty: Joi.boolean().allow(null),

      payments: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      cashback: Joi.any().required(),

      articles: Joi.array().items(Joi.any()).required(),

      delivery_charges: Joi.any(),

      user_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow(""),

      discount: Joi.number(),

      payment_mode: Joi.string().allow("").allow(null),

      shipments: Joi.array().items(Joi.any()),

      buy_now: Joi.boolean(),

      fynd_credits: Joi.any(),

      comment: Joi.string().allow("").allow(null),

      is_default: Joi.boolean().required(),

      gstin: Joi.string().allow("").allow(null),

      promotion: Joi.any(),

      app_id: Joi.string().allow(""),

      payment_methods: Joi.array().items(Joi.any()),

      checkout_mode: Joi.string().allow(""),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      result: Joi.any(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      page: CartModel.Page(),

      success: Joi.boolean(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      store_id: Joi.number(),

      display: Joi.string().allow(""),

      pos: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      seller_id: Joi.number(),

      article_assignment: Joi.any(),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),
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
      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      id: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      comment: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),
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
      extra_meta: Joi.any(),

      item_index: Joi.number(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),
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
}
module.exports = CartModel;
