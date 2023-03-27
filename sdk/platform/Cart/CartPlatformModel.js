const Joi = require("joi");

class CartModel {
  static Rule() {
    return Joi.object({
      key: Joi.number(),

      discount_qty: Joi.number(),

      max: Joi.number(),

      min: Joi.number(),

      value: Joi.number(),
    });
  }

  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static Identifier() {
    return Joi.object({
      category_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      collection_id: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      email_domain: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
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

      iins: Joi.array().items(Joi.string().allow("")),
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
      maximum: CartModel.UsesRemaining(),

      remaining: CartModel.UsesRemaining(),
    });
  }

  static Restrictions() {
    return Joi.object({
      price_range: CartModel.PriceRange(),

      post_order: CartModel.PostOrder(),

      user_groups: Joi.array().items(Joi.number()),

      ordering_stores: Joi.array().items(Joi.number()),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      coupon_allowed: Joi.boolean(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      uses: CartModel.UsesRestriction(),

      platforms: Joi.array().items(Joi.string().allow("")),
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

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      is_exact: Joi.boolean(),

      applicable_on: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      scope: Joi.array().items(Joi.string().allow("")),

      value_type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      rule: Joi.array().items(CartModel.Rule()).required(),

      validation: CartModel.Validation(),

      type_slug: Joi.string().allow("").required(),

      date_meta: CartModel.CouponDateMeta(),

      state: CartModel.State(),

      author: CartModel.CouponAuthor(),

      identifiers: CartModel.Identifier().required(),

      action: CartModel.CouponAction(),

      _schedule: CartModel.CouponSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions(),

      display_meta: CartModel.DisplayMeta().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),

      ownership: CartModel.Ownership().required(),
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
      rule: Joi.array().items(CartModel.Rule()).required(),

      validation: CartModel.Validation(),

      type_slug: Joi.string().allow("").required(),

      date_meta: CartModel.CouponDateMeta(),

      state: CartModel.State(),

      author: CartModel.CouponAuthor(),

      identifiers: CartModel.Identifier().required(),

      action: CartModel.CouponAction(),

      _schedule: CartModel.CouponSchedule(),

      tags: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow("").required(),

      restrictions: CartModel.Restrictions(),

      display_meta: CartModel.DisplayMeta().required(),

      rule_definition: CartModel.RuleDefinition().required(),

      validity: CartModel.Validity().required(),

      ownership: CartModel.Ownership().required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than_equals: Joi.number(),

      greater_than: Joi.number(),

      equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      cart_unique_item_quantity: CartModel.CompareObject(),

      cart_quantity: CartModel.CompareObject(),

      item_size: Joi.array().items(Joi.string().allow("")),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_category: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_exclude_id: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      max_offer_quantity: Joi.number(),

      discount_percentage: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      min_offer_quantity: Joi.number(),

      apportion_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      discount_price: Joi.number(),

      discount_amount: Joi.number(),

      max_discount_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),

      discount_type: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),
    });
  }

  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      published: Joi.boolean().required(),

      cron: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),
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
      anonymous_users: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      post_order: CartModel.PostOrder1(),

      order_quantity: Joi.number(),

      user_registered: CartModel.UserRegistered(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      user_id: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.UsesRestriction1().required(),

      platforms: Joi.array().items(Joi.string().allow("")),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Visibility() {
    return Joi.object({
      pdp: Joi.boolean().required(),

      coupon_list: Joi.boolean().required(),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promotion_type: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      stackable: Joi.boolean(),

      currency: Joi.string().allow(""),

      apply_priority: Joi.number(),

      apply_all_discount: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      mode: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      apply_exclusive: Joi.string().allow("").allow(null),

      application_id: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      calculate_on: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      promo_group: Joi.string().allow("").required(),

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
      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promotion_type: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      stackable: Joi.boolean(),

      currency: Joi.string().allow(""),

      apply_priority: Joi.number(),

      apply_all_discount: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      mode: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      apply_exclusive: Joi.string().allow("").allow(null),

      application_id: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      calculate_on: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      promo_group: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promotion_type: Joi.string().allow("").required(),

      date_meta: CartModel.PromotionDateMeta(),

      author: CartModel.PromotionAuthor(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      code: Joi.string().allow(""),

      stackable: Joi.boolean(),

      currency: Joi.string().allow(""),

      apply_priority: Joi.number(),

      apply_all_discount: Joi.boolean(),

      ownership: CartModel.Ownership1().required(),

      mode: Joi.string().allow("").required(),

      _custom_json: Joi.any(),

      apply_exclusive: Joi.string().allow("").allow(null),

      application_id: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      calculate_on: Joi.string().allow(""),

      visiblility: CartModel.Visibility(),

      promo_group: Joi.string().allow("").required(),

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
      description: Joi.string().allow(""),

      example: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      modified_on: Joi.string().allow(""),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      created_on: Joi.string().allow(""),
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
      description: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      sub_title: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      message: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      minimum_cart_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),

      total: Joi.number(),

      description: Joi.string().allow(""),

      is_applied: Joi.boolean(),
    });
  }

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      vog: Joi.number(),

      subtotal: Joi.number(),

      delivery_charge: Joi.number(),

      you_saved: Joi.number(),

      convenience_fee: Joi.number(),

      gst_charges: Joi.number(),

      fynd_cash: Joi.number(),

      discount: Joi.number(),

      cod_charge: Joi.number(),

      coupon: Joi.number(),

      total: Joi.number(),

      mrp_total: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      coupon: CartModel.CouponBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      display: Joi.array().items(CartModel.DisplayBreakup()),

      raw: CartModel.RawBreakup(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_code: Joi.string().allow(""),

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
      seller: CartModel.BaseInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      price: CartModel.ArticlePriceInfo(),

      parent_item_identifiers: Joi.any(),

      store: CartModel.BaseInfo(),

      quantity: Joi.number(),

      type: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      extra_meta: Joi.any(),

      size: Joi.string().allow(""),
    });
  }

  static ProductPrice() {
    return Joi.object({
      selling: Joi.number(),

      add_on: Joi.number(),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

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

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),
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

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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
      name: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      slug: Joi.string().allow(""),

      images: Joi.array().items(CartModel.ProductImage()),

      type: Joi.string().allow(""),

      uid: Joi.number(),

      brand: CartModel.BaseInfo(),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_id: Joi.number(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_slug: Joi.string().allow(""),

      item_brand_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),

      quantity: Joi.number(),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      raw_offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),

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
      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      offer_text: Joi.string().allow(""),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promotion_name: Joi.string().allow(""),

      promotion_group: Joi.string().allow(""),

      amount: Joi.number(),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promo_id: Joi.string().allow(""),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      key: Joi.string().allow(""),

      article: CartModel.ProductArticle(),

      price: CartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      price_per_unit: CartModel.ProductPriceInfo(),

      availability: CartModel.ProductAvailability(),

      parent_item_identifiers: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      promo_meta: CartModel.PromoMeta(),

      discount: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      quantity: Joi.number(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      coupon_message: Joi.string().allow(""),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),
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
      area: Joi.string().allow(""),

      city: Joi.string().allow("").allow(null),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      area_code_slug: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.number(),

      country: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      pincode: Joi.number(),
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

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),
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
      amount: Joi.number().required(),

      meta: CartModel.MultiTenderPaymentMeta(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow(""),
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
      price_effective: Joi.number().required(),

      product_id: Joi.number().required(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_marked: Joi.number().required(),

      discount: Joi.number().required(),

      meta: CartModel.CartItemMeta(),

      quantity: Joi.number(),

      size: Joi.string().allow("").required(),

      coupon_effective_discount: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cashback_applied: Joi.number().required(),

      extra_meta: Joi.any(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      delivery_charges: Joi.number().required(),

      cart_value: Joi.number().required(),

      coupon_value: Joi.number().required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      cashback_applied: Joi.number().required(),

      billing_address: CartModel.ShippingAddress().required(),

      shipping_address: CartModel.ShippingAddress(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.any(),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      cod_charges: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      comment: Joi.string().allow("").allow(null),

      coupon: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_ref_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      cashback: Joi.any().required(),

      articles: Joi.array().items(Joi.any()).required(),

      payment_methods: Joi.array().items(Joi.any()),

      buy_now: Joi.boolean(),

      fc_index_map: Joi.array().items(Joi.number()),

      bulk_coupon_discount: Joi.number().allow(null),

      uid: Joi.number().required(),

      last_modified: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").allow(null),

      checkout_mode: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      shipments: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      is_archive: Joi.boolean(),

      expire_at: Joi.string().allow("").required(),

      delivery_charges: Joi.any(),

      cart_value: Joi.number(),

      discount: Joi.number(),

      user_id: Joi.string().allow("").required(),

      app_id: Joi.string().allow(""),

      promotion: Joi.any(),

      pick_up_customer_details: Joi.any().allow(null),

      is_active: Joi.boolean(),

      fynd_credits: Joi.any(),

      cod_charges: Joi.any(),

      payments: Joi.any().allow(null),

      merge_qty: Joi.boolean().allow(null),

      meta: Joi.any().allow(null),

      comment: Joi.string().allow("").allow(null),

      coupon: Joi.any().allow(null),

      order_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      items: Joi.array().items(CartModel.AbandonedCart()),

      page: CartModel.Page(),

      result: Joi.any(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      display: Joi.string().allow(""),

      item_id: Joi.number(),

      pos: Joi.boolean(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      article_assignment: Joi.any(),

      seller_id: Joi.number(),

      quantity: Joi.number(),

      item_size: Joi.string().allow(""),

      extra_meta: Joi.any(),

      store_id: Joi.number(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),

      payment_identifier: Joi.string().allow(""),

      enabled: Joi.boolean(),
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

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      delivery_promise: CartModel.ShipmentPromise(),

      restrict_checkout: Joi.boolean(),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      comment: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      gstin: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      partial: Joi.boolean(),

      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_id: Joi.number(),

      item_index: Joi.number(),

      article_id: Joi.string().allow(""),

      parent_item_identifiers: Joi.any(),

      identifiers: CartModel.CartProductIdentifer().required(),

      quantity: Joi.number(),

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
      message: Joi.string().allow(""),

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),
    });
  }
}
module.exports = CartModel;
