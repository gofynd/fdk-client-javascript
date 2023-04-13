const Joi = require("joi");

class CartModel {
  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      value_type: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),

      applicable_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      calculate_on: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      currency_code: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      collection_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      email_domain: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      article_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),
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
      min: Joi.number(),

      value: Joi.number(),

      discount_qty: Joi.number(),

      key: Joi.number(),

      max: Joi.number(),
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

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      iins: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),

      codes: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PostOrder() {
    return Joi.object({
      return_allowed: Joi.boolean(),

      cancellation_allowed: Joi.boolean(),
    });
  }

  static Restrictions() {
    return Joi.object({
      bulk_bundle: CartModel.BulkBundleRestriction(),

      price_range: CartModel.PriceRange(),

      uses: CartModel.UsesRestriction(),

      user_groups: Joi.array().items(Joi.number()),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      ordering_stores: Joi.array().items(Joi.number()),

      post_order: CartModel.PostOrder(),

      platforms: Joi.array().items(Joi.string().allow("")),

      coupon_allowed: Joi.boolean(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),

      is_display: Joi.boolean(),
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
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      remove: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),
    });
  }

  static CouponAdd() {
    return Joi.object({
      type_slug: Joi.string().allow("").required(),

      validation: CartModel.Validation(),

      action: CartModel.CouponAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      rule_definition: CartModel.RuleDefinition().required(),

      identifiers: CartModel.Identifier().required(),

      _schedule: CartModel.CouponSchedule(),

      author: CartModel.CouponAuthor(),

      validity: CartModel.Validity().required(),

      code: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      restrictions: CartModel.Restrictions(),

      ownership: CartModel.Ownership().required(),

      state: CartModel.State(),

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
      type_slug: Joi.string().allow("").required(),

      validation: CartModel.Validation(),

      action: CartModel.CouponAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      rule_definition: CartModel.RuleDefinition().required(),

      identifiers: CartModel.Identifier().required(),

      _schedule: CartModel.CouponSchedule(),

      author: CartModel.CouponAuthor(),

      validity: CartModel.Validity().required(),

      code: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      restrictions: CartModel.Restrictions(),

      ownership: CartModel.Ownership().required(),

      state: CartModel.State(),

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

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
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
      greater_than: Joi.number(),

      less_than_equals: Joi.number(),

      equals: Joi.number(),

      less_than: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      cart_unique_item_quantity: CartModel.CompareObject(),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_exclude_company: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      item_company: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),
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
      offer_text: Joi.string().allow(""),

      description: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),

      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      published: Joi.boolean().required(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      discount_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      code: Joi.string().allow(""),

      discount_percentage: Joi.number(),

      max_offer_quantity: Joi.number(),

      min_offer_quantity: Joi.number(),

      max_discount_amount: Joi.number(),

      apportion_discount: Joi.boolean(),

      max_usage_per_transaction: Joi.number(),

      discount_price: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      item_criteria: CartModel.ItemCriteria().required(),

      buy_condition: Joi.string().allow("").required(),

      discount_type: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
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
      remaining: CartModel.UsesRemaining1(),

      maximum: CartModel.UsesRemaining1(),
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

  static Restrictions1() {
    return Joi.object({
      user_registered: CartModel.UserRegistered(),

      order_quantity: Joi.number(),

      user_id: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      user_groups: Joi.array().items(Joi.number()),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      post_order: CartModel.PostOrder1(),

      platforms: Joi.array().items(Joi.string().allow("")),

      anonymous_users: Joi.boolean(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      author: CartModel.PromotionAuthor(),

      currency: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      apply_priority: Joi.number(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      post_order_action: CartModel.PromotionAction(),

      stackable: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      mode: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      apply_all_discount: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      ownership: CartModel.Ownership1().required(),

      promo_group: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      date_meta: CartModel.PromotionDateMeta(),

      code: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),
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
      author: CartModel.PromotionAuthor(),

      currency: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      apply_priority: Joi.number(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      post_order_action: CartModel.PromotionAction(),

      stackable: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      mode: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      apply_all_discount: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      ownership: CartModel.Ownership1().required(),

      promo_group: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      date_meta: CartModel.PromotionDateMeta(),

      code: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      author: CartModel.PromotionAuthor(),

      currency: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      apply_priority: Joi.number(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      calculate_on: Joi.string().allow(""),

      _custom_json: Joi.any(),

      post_order_action: CartModel.PromotionAction(),

      stackable: Joi.boolean(),

      display_meta: CartModel.DisplayMeta1().required(),

      mode: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      apply_all_discount: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      ownership: CartModel.Ownership1().required(),

      promo_group: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),

      date_meta: CartModel.PromotionDateMeta(),

      code: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions1(),
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

      entity_type: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      type: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      title: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static CartItem() {
    return Joi.object({
      quantity: Joi.number(),

      product_id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),
    });
  }

  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: CartModel.CartItem(),
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

  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
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
      url: Joi.string().allow(""),

      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      action: CartModel.ProductAction(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      uid: Joi.number(),

      brand: CartModel.BaseInfo(),

      type: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      name: Joi.string().allow(""),

      slug: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      deliverable: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      effective: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
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
      seller: CartModel.BaseInfo(),

      store: CartModel.BaseInfo(),

      size: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      add_on: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
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

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_price_details: Joi.any(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: CartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      item_criteria: Joi.any(),

      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      offer_text: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_type: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      product: CartModel.CartProduct(),

      is_set: Joi.boolean(),

      identifiers: CartModel.CartProductIdentifer().required(),

      availability: CartModel.ProductAvailability(),

      article: CartModel.ProductArticle(),

      price: CartModel.ProductPriceInfo(),

      key: Joi.string().allow(""),

      quantity: Joi.number(),

      coupon_message: Joi.string().allow(""),

      promo_meta: CartModel.PromoMeta(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      bulk_offer: Joi.any(),

      price_per_unit: CartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      message: Joi.string().allow(""),

      discount: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      subtotal: Joi.number(),

      total: Joi.number(),

      gst_charges: Joi.number(),

      fynd_cash: Joi.number(),

      vog: Joi.number(),

      you_saved: Joi.number(),

      cod_charge: Joi.number(),

      mrp_total: Joi.number(),

      coupon: Joi.number(),

      convenience_fee: Joi.number(),

      delivery_charge: Joi.number(),

      discount: Joi.number(),
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
      is_applied: Joi.boolean(),

      value: Joi.number(),

      minimum_cart_value: Joi.number(),

      uid: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      code: Joi.string().allow(""),

      coupon_value: Joi.number(),

      type: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      coupon_type: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      key: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_code: Joi.string().allow(""),
    });
  }

  static CartBreakup() {
    return Joi.object({
      raw: CartModel.RawBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      coupon: CartModel.CouponBreakup(),

      display: Joi.array().items(CartModel.DisplayBreakup()),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      breakup_values: CartModel.CartBreakup(),

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
      area_code_slug: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      phone: Joi.number(),

      meta: Joi.any(),

      address: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      email: Joi.string().allow(""),
    });
  }

  static OpenApiCartServiceabilityRequest() {
    return Joi.object({
      shipping_address: CartModel.ShippingAddress().required(),

      cart_items: CartModel.CartItem(),
    });
  }

  static PromiseFormatted() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static PromiseTimestamp() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
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
      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),
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
      payment_id: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      meta: CartModel.MultiTenderPaymentMeta(),

      amount: Joi.number().required(),

      name: Joi.string().allow(""),
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
      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_marked: Joi.number().required(),

      quantity: Joi.number(),

      meta: CartModel.CartItemMeta(),

      product_id: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      loyalty_discount: Joi.number(),

      price_effective: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      employee_discount: Joi.number(),

      size: Joi.string().allow("").required(),

      extra_meta: Joi.any(),

      discount: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),

      billing_address: CartModel.ShippingAddress().required(),

      shipping_address: CartModel.ShippingAddress(),

      coupon_value: Joi.number().required(),

      coupon: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      employee_discount: Joi.any(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      payment_mode: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      comment: Joi.string().allow("").allow(null),

      cashback_applied: Joi.number().required(),

      loyalty_discount: Joi.number(),

      coupon_code: Joi.string().allow("").required(),

      order_id: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),
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

  static AbandonedCart() {
    return Joi.object({
      shipments: Joi.array().items(Joi.any()),

      bulk_coupon_discount: Joi.number().allow(null),

      _id: Joi.string().allow("").required(),

      is_archive: Joi.boolean(),

      promotion: Joi.any(),

      delivery_charges: Joi.any(),

      cod_charges: Joi.any(),

      uid: Joi.number().required(),

      gstin: Joi.string().allow("").allow(null),

      comment: Joi.string().allow("").allow(null),

      articles: Joi.array().items(Joi.any()).required(),

      order_id: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      app_id: Joi.string().allow(""),

      fynd_credits: Joi.any(),

      last_modified: Joi.string().allow("").required(),

      checkout_mode: Joi.string().allow(""),

      expire_at: Joi.string().allow("").required(),

      merge_qty: Joi.boolean().allow(null),

      pick_up_customer_details: Joi.any().allow(null),

      is_active: Joi.boolean(),

      buy_now: Joi.boolean(),

      meta: Joi.any().allow(null),

      payments: Joi.any().allow(null),

      coupon: Joi.any().allow(null),

      fc_index_map: Joi.array().items(Joi.number()),

      discount: Joi.number(),

      payment_methods: Joi.array().items(Joi.any()),

      is_default: Joi.boolean().required(),

      cashback: Joi.any().required(),

      payment_mode: Joi.string().allow("").allow(null),

      user_id: Joi.string().allow("").required(),

      cart_value: Joi.number(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.AbandonedCart()),

      page: CartModel.Page(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      result: Joi.any(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      store_id: Joi.number(),

      article_assignment: Joi.any(),

      display: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      item_id: Joi.number(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      pos: Joi.boolean(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      parent_item_identifiers: Joi.any(),

      extra_meta: Joi.any(),
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
      enabled: Joi.boolean(),

      payment_identifier: Joi.string().allow(""),

      default_options: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      id: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      breakup_values: CartModel.CartBreakup(),

      last_modified: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),
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
      item_index: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

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
      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }
}
module.exports = CartModel;
