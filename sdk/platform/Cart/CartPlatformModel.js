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

  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static Rule() {
    return Joi.object({
      discount_qty: Joi.number(),

      key: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),

      min: Joi.number(),
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

  static DisplayMetaDict() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      subtitle: Joi.string().allow(""),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),

      auto: CartModel.DisplayMetaDict(),
    });
  }

  static Identifier() {
    return Joi.object({
      exclude_brand_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),

      brand_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_public: Joi.boolean(),

      is_archived: Joi.boolean(),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),
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

  static UsesRemaining() {
    return Joi.object({
      total: Joi.number(),

      app: Joi.number(),

      user: Joi.number(),
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

      iins: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static Restrictions() {
    return Joi.object({
      uses: CartModel.UsesRestriction(),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_groups: Joi.array().items(Joi.number()),

      post_order: CartModel.PostOrder(),

      ordering_stores: Joi.array().items(Joi.number()),

      coupon_allowed: Joi.boolean(),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      price_range: CartModel.PriceRange(),

      bulk_bundle: CartModel.BulkBundleRestriction(),
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
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      currency_code: Joi.string().allow(""),

      calculate_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      applicable_on: Joi.string().allow("").required(),

      value_type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      is_exact: Joi.boolean(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      date_meta: CartModel.CouponDateMeta(),

      type_slug: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validity: CartModel.Validity().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      display_meta: CartModel.DisplayMeta().required(),

      identifiers: CartModel.Identifier().required(),

      state: CartModel.State(),

      validation: CartModel.Validation(),

      _schedule: CartModel.CouponSchedule(),

      restrictions: CartModel.Restrictions(),

      action: CartModel.CouponAction(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      rule_definition: CartModel.RuleDefinition().required(),
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
      date_meta: CartModel.CouponDateMeta(),

      type_slug: Joi.string().allow("").required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validity: CartModel.Validity().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      ownership: CartModel.Ownership().required(),

      display_meta: CartModel.DisplayMeta().required(),

      identifiers: CartModel.Identifier().required(),

      state: CartModel.State(),

      validation: CartModel.Validation(),

      _schedule: CartModel.CouponSchedule(),

      restrictions: CartModel.Restrictions(),

      action: CartModel.CouponAction(),

      code: Joi.string().allow("").required(),

      author: CartModel.CouponAuthor(),

      rule_definition: CartModel.RuleDefinition().required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action_date: Joi.string().allow("").allow(null).required(),
    });
  }

  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),

      modified_on: Joi.string().allow("").allow(null),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      code: Joi.string().allow(""),

      discount_percentage: Joi.number(),

      apportion_discount: Joi.boolean(),

      discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      discount_price: Joi.number(),

      max_usage_per_transaction: Joi.number(),

      min_offer_quantity: Joi.number(),

      max_discount_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),
    });
  }

  static CompareObject() {
    return Joi.object({
      greater_than_equals: Joi.number(),

      greater_than: Joi.number(),

      equals: Joi.number(),

      less_than: Joi.number(),

      less_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_category: Joi.array().items(Joi.number()),

      all_items: Joi.boolean(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      cart_quantity: CartModel.CompareObject(),

      cart_total: CartModel.CompareObject(),

      item_company: Joi.array().items(Joi.number()),

      item_brand: Joi.array().items(Joi.number()),

      item_store: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_exclude_category: Joi.array().items(Joi.number()),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),
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
      name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),
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

  static UserRegistered() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").allow(null),
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

      uses: CartModel.PaymentAllowValue1(),

      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Restrictions1() {
    return Joi.object({
      uses: CartModel.UsesRestriction1().required(),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_registered: CartModel.UserRegistered(),

      anonymous_users: Joi.boolean(),

      user_groups: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      post_order: CartModel.PostOrder1(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      order_quantity: Joi.number(),
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
      end: Joi.string().allow("").allow(null),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      published: Joi.boolean().required(),

      start: Joi.string().allow("").required(),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      post_order_action: CartModel.PromotionAction(),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      promo_group: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      currency: Joi.string().allow(""),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      mode: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      display_meta: CartModel.DisplayMeta1().required(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_priority: Joi.number(),

      visiblility: CartModel.Visibility(),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promotion_type: Joi.string().allow("").required(),
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
      post_order_action: CartModel.PromotionAction(),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      promo_group: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      currency: Joi.string().allow(""),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      mode: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      display_meta: CartModel.DisplayMeta1().required(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_priority: Joi.number(),

      visiblility: CartModel.Visibility(),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promotion_type: Joi.string().allow("").required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      post_order_action: CartModel.PromotionAction(),

      apply_all_discount: Joi.boolean(),

      calculate_on: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      promo_group: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      currency: Joi.string().allow(""),

      code: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      mode: Joi.string().allow("").required(),

      ownership: CartModel.Ownership1().required(),

      display_meta: CartModel.DisplayMeta1().required(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      apply_exclusive: Joi.string().allow("").allow(null),

      apply_priority: Joi.number(),

      visiblility: CartModel.Visibility(),

      stackable: Joi.boolean(),

      application_id: Joi.string().allow("").required(),

      _schedule: CartModel.PromotionSchedule(),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      promotion_type: Joi.string().allow("").required(),
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

      subtitle: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      created_on: Joi.string().allow(""),

      description: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      example: Joi.string().allow(""),
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

  static CouponBreakup() {
    return Joi.object({
      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      title: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      minimum_cart_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      is_applied: Joi.boolean(),

      sub_title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      value: Joi.number(),

      code: Joi.string().allow(""),
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

  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static RawBreakup() {
    return Joi.object({
      gst_charges: Joi.number(),

      fynd_cash: Joi.number(),

      mrp_total: Joi.number(),

      vog: Joi.number(),

      cod_charge: Joi.number(),

      convenience_fee: Joi.number(),

      delivery_charge: Joi.number(),

      discount: Joi.number(),

      you_saved: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),

      subtotal: Joi.number(),
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

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      marked: Joi.number(),

      selling: Joi.number(),

      add_on: Joi.number(),

      effective: Joi.number(),
    });
  }

  static ProductPriceInfo() {
    return Joi.object({
      base: CartModel.ProductPrice(),

      converted: CartModel.ProductPrice(),
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

  static FreeGiftItem() {
    return Joi.object({
      item_price_details: Joi.any(),

      item_id: Joi.number(),

      item_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: CartModel.FreeGiftItem(),

      article_id: Joi.string().allow(""),
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
      promotion_group: Joi.string().allow(""),

      amount: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      offer_text: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      promotion_type: Joi.string().allow(""),
    });
  }

  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
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
      type: Joi.string().allow(""),

      query: CartModel.ActionQuery(),

      url: Joi.string().allow(""),
    });
  }

  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),

      secure_url: Joi.string().allow(""),

      url: Joi.string().allow(""),
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
      uid: Joi.number(),

      type: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      name: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      images: Joi.array().items(CartModel.ProductImage()),

      slug: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

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
      uid: Joi.string().allow(""),

      type: Joi.string().allow(""),

      seller: CartModel.BaseInfo(),

      quantity: Joi.number(),

      size: Joi.string().allow(""),

      store: CartModel.BaseInfo(),

      extra_meta: Joi.any(),

      price: CartModel.ArticlePriceInfo(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      parent_item_identifiers: Joi.any(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),

      sizes: Joi.array().items(Joi.string().allow("")),

      deliverable: Joi.boolean(),

      is_valid: Joi.boolean(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      bulk_offer: Joi.any(),

      price_per_unit: CartModel.ProductPriceInfo(),

      quantity: Joi.number(),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      key: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      product: CartModel.CartProduct(),

      promo_meta: CartModel.PromoMeta(),

      article: CartModel.ProductArticle(),

      discount: Joi.string().allow(""),

      is_set: Joi.boolean(),

      price: CartModel.ProductPriceInfo(),

      parent_item_identifiers: Joi.any(),

      availability: CartModel.ProductAvailability(),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      message: Joi.string().allow(""),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),
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
      city: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      phone: Joi.number(),

      name: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      country: Joi.string().allow("").allow(null),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      area: Joi.string().allow(""),
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
      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      breakup_values: CartModel.CartBreakup(),

      is_valid: Joi.boolean(),
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
      name: Joi.string().allow(""),

      amount: Joi.number().required(),

      meta: CartModel.MultiTenderPaymentMeta(),

      mode: Joi.string().allow("").required(),
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
      group_id: Joi.string().allow(""),

      primary_item: Joi.boolean(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      quantity: Joi.number(),

      product_id: Joi.number().required(),

      loyalty_discount: Joi.number(),

      size: Joi.string().allow("").required(),

      meta: CartModel.CartItemMeta(),

      price_marked: Joi.number().required(),

      employee_discount: Joi.number(),

      amount_paid: Joi.number().required(),

      discount: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      price_effective: Joi.number().required(),

      extra_meta: Joi.any(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      coupon_effective_discount: Joi.number().required(),

      cod_charges: Joi.number().required(),

      delivery_charges: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      coupon_code: Joi.string().allow("").required(),

      employee_discount: Joi.any(),

      affiliate_order_id: Joi.string().allow(""),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      billing_address: CartModel.ShippingAddress().required(),

      cod_charges: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      shipping_address: CartModel.ShippingAddress(),

      cart_value: Joi.number().required(),

      comment: Joi.string().allow("").allow(null),

      coupon_value: Joi.number().required(),

      gstin: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      cashback_applied: Joi.number().required(),

      order_id: Joi.string().allow(""),

      coupon: Joi.string().allow(""),
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
      _id: Joi.string().allow("").required(),

      fc_index_map: Joi.array().items(Joi.number()),

      buy_now: Joi.boolean(),

      user_id: Joi.string().allow("").required(),

      discount: Joi.number(),

      articles: Joi.array().items(Joi.any()).required(),

      payment_methods: Joi.array().items(Joi.any()),

      is_default: Joi.boolean().required(),

      cod_charges: Joi.any(),

      expire_at: Joi.string().allow("").required(),

      delivery_charges: Joi.any(),

      bulk_coupon_discount: Joi.number().allow(null),

      payments: Joi.any().allow(null),

      comment: Joi.string().allow("").allow(null),

      meta: Joi.any().allow(null),

      gstin: Joi.string().allow("").allow(null),

      is_archive: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      payment_mode: Joi.string().allow("").allow(null),

      cashback: Joi.any().required(),

      app_id: Joi.string().allow(""),

      merge_qty: Joi.boolean().allow(null),

      order_id: Joi.string().allow(""),

      pick_up_customer_details: Joi.any().allow(null),

      is_active: Joi.boolean(),

      promotion: Joi.any(),

      uid: Joi.number().required(),

      fynd_credits: Joi.any(),

      created_on: Joi.string().allow("").required(),

      cart_value: Joi.number(),

      shipments: Joi.array().items(Joi.any()),

      coupon: Joi.any().allow(null),

      last_modified: Joi.string().allow("").required(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.AbandonedCart()),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      page: CartModel.Page(),

      result: Joi.any(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),

      item_id: Joi.number(),

      quantity: Joi.number(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      display: Joi.string().allow(""),

      extra_meta: Joi.any(),

      store_id: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      parent_item_identifiers: Joi.any(),

      pos: Joi.boolean(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartModel.AddProductCart()),
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
      restrict_checkout: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      coupon_text: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      last_modified: Joi.string().allow(""),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      partial: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),

      item_id: Joi.number(),

      item_index: Joi.number(),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      identifiers: CartModel.CartProductIdentifer().required(),

      extra_meta: Joi.any(),

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
      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      message: Joi.string().allow(""),
    });
  }
}
module.exports = CartModel;
