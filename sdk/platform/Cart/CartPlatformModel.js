const Joi = require("joi");

class CartModel {
  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
    });
  }

  static Rule() {
    return Joi.object({
      key: Joi.number(),

      discount_qty: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),

      min: Joi.number(),
    });
  }

  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),

      anonymous: Joi.boolean(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      value_type: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      applicable_on: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      is_exact: Joi.boolean(),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      company_id: Joi.array().items(Joi.number()),

      brand_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      exclude_brand_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),

      modified_by: Joi.string().allow("").allow(null),
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
      networks: Joi.array().items(Joi.string().allow("")),

      types: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),
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

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static Restrictions() {
    return Joi.object({
      post_order: CartModel.PostOrder(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      user_type: Joi.string().allow(""),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      coupon_allowed: Joi.boolean(),

      uses: CartModel.UsesRestriction(),

      ordering_stores: Joi.array().items(Joi.number()),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      price_range: CartModel.PriceRange(),
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
      auto: CartModel.DisplayMetaDict(),

      title: Joi.string().allow(""),

      apply: CartModel.DisplayMetaDict(),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      remove: CartModel.DisplayMetaDict(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow(""),
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

      is_display: Joi.boolean(),

      is_public: Joi.boolean(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      date_meta: CartModel.CouponDateMeta(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validation: CartModel.Validation(),

      rule_definition: CartModel.RuleDefinition().required(),

      type_slug: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      identifiers: CartModel.Identifier().required(),

      author: CartModel.CouponAuthor(),

      restrictions: CartModel.Restrictions(),

      tags: Joi.array().items(Joi.string().allow("")),

      display_meta: CartModel.DisplayMeta().required(),

      code: Joi.string().allow("").required(),

      validity: CartModel.Validity().required(),

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      state: CartModel.State(),
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
      date_meta: CartModel.CouponDateMeta(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      validation: CartModel.Validation(),

      rule_definition: CartModel.RuleDefinition().required(),

      type_slug: Joi.string().allow("").required(),

      action: CartModel.CouponAction(),

      identifiers: CartModel.Identifier().required(),

      author: CartModel.CouponAuthor(),

      restrictions: CartModel.Restrictions(),

      tags: Joi.array().items(Joi.string().allow("")),

      display_meta: CartModel.DisplayMeta().required(),

      code: Joi.string().allow("").required(),

      validity: CartModel.Validity().required(),

      _schedule: CartModel.CouponSchedule(),

      ownership: CartModel.Ownership().required(),

      state: CartModel.State(),
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
      equals: Joi.number(),

      less_than: Joi.number(),

      greater_than: Joi.number(),

      less_than_equals: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_brand: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      cart_quantity: CartModel.CompareObject(),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),

      item_sku: Joi.array().items(Joi.string().allow("")),

      product_tags: Joi.array().items(Joi.string().allow("")),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_store: Joi.array().items(Joi.number()),

      cart_total: CartModel.CompareObject(),

      item_exclude_store: Joi.array().items(Joi.number()),

      item_company: Joi.array().items(Joi.number()),

      item_exclude_brand: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      item_exclude_company: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      all_items: Joi.boolean(),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),
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
      modified_on: Joi.string().allow("").allow(null),

      created_on: Joi.string().allow("").allow(null),
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
      uses: CartModel.PaymentAllowValue1(),

      codes: Joi.array().items(Joi.string().allow("")),

      type: Joi.string().allow("").required(),
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

  static Restrictions1() {
    return Joi.object({
      post_order: CartModel.PostOrder1(),

      user_groups: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      order_quantity: Joi.number(),

      anonymous_users: Joi.boolean(),

      uses: CartModel.UsesRestriction1().required(),

      user_registered: CartModel.UserRegistered(),

      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      offer_text: Joi.string().allow(""),

      offer_label: Joi.string().allow(""),

      name: Joi.string().allow(""),

      description: Joi.string().allow(""),
    });
  }

  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      published: Joi.boolean().required(),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      cron: Joi.string().allow("").allow(null),

      end: Joi.string().allow("").allow(null),

      start: Joi.string().allow("").required(),
    });
  }

  static DiscountOffer() {
    return Joi.object({
      min_offer_quantity: Joi.number(),

      partial_can_ret: Joi.boolean(),

      discount_price: Joi.number(),

      apportion_discount: Joi.boolean(),

      code: Joi.string().allow(""),

      max_discount_amount: Joi.number(),

      max_offer_quantity: Joi.number(),

      discount_amount: Joi.number(),

      discount_percentage: Joi.number(),

      max_usage_per_transaction: Joi.number(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      discount_type: Joi.string().allow("").required(),

      item_criteria: CartModel.ItemCriteria().required(),

      offer: CartModel.DiscountOffer().required(),

      buy_condition: Joi.string().allow("").required(),
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

  static PromotionListItem() {
    return Joi.object({
      promo_group: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      calculate_on: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      ownership: CartModel.Ownership1().required(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_exclusive: Joi.string().allow("").allow(null),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      post_order_action: CartModel.PromotionAction(),

      _schedule: CartModel.PromotionSchedule(),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      mode: Joi.string().allow("").required(),
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
      promo_group: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      calculate_on: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      ownership: CartModel.Ownership1().required(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_exclusive: Joi.string().allow("").allow(null),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      post_order_action: CartModel.PromotionAction(),

      _schedule: CartModel.PromotionSchedule(),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      mode: Joi.string().allow("").required(),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      promo_group: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      apply_priority: Joi.number(),

      calculate_on: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      ownership: CartModel.Ownership1().required(),

      date_meta: CartModel.PromotionDateMeta(),

      apply_exclusive: Joi.string().allow("").allow(null),

      restrictions: CartModel.Restrictions1(),

      display_meta: CartModel.DisplayMeta1().required(),

      post_order_action: CartModel.PromotionAction(),

      _schedule: CartModel.PromotionSchedule(),

      _custom_json: Joi.any(),

      stackable: Joi.boolean(),

      promotion_type: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      author: CartModel.PromotionAuthor(),

      application_id: Joi.string().allow("").required(),

      visiblility: CartModel.Visibility(),

      mode: Joi.string().allow("").required(),
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
      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      type: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

      entity_slug: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      example: Joi.string().allow(""),
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

  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),

      display: Joi.string().allow(""),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CouponBreakup() {
    return Joi.object({
      title: Joi.string().allow("").allow(null),

      coupon_value: Joi.number(),

      type: Joi.string().allow(""),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow("").allow(null),

      is_applied: Joi.boolean(),

      code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      uid: Joi.string().allow(""),

      value: Joi.number(),

      message: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),
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

  static RawBreakup() {
    return Joi.object({
      discount: Joi.number(),

      coupon: Joi.number(),

      subtotal: Joi.number(),

      vog: Joi.number(),

      delivery_charge: Joi.number(),

      convenience_fee: Joi.number(),

      total: Joi.number(),

      mrp_total: Joi.number(),

      cod_charge: Joi.number(),

      you_saved: Joi.number(),

      gst_charges: Joi.number(),

      fynd_cash: Joi.number(),
    });
  }

  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(CartModel.DisplayBreakup()),

      coupon: CartModel.CouponBreakup(),

      loyalty_points: CartModel.LoyaltyPoints(),

      raw: CartModel.RawBreakup(),
    });
  }

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      other_store_quantity: Joi.number(),

      out_of_stock: Joi.boolean(),
    });
  }

  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),

      currency_code: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

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

  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),

      item_slug: Joi.string().allow(""),

      item_id: Joi.number(),

      item_price_details: Joi.any(),

      item_name: Joi.string().allow(""),

      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      free_gift_item_details: CartModel.FreeGiftItem(),

      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      offer: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      raw_offer: Joi.any(),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static Ownership2() {
    return Joi.object({
      payable_by: Joi.string().allow(""),

      payable_category: Joi.string().allow(""),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      ownership: CartModel.Ownership2(),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promotion_group: Joi.string().allow(""),
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
      query: CartModel.ActionQuery(),

      url: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),
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

  static NetQuantity() {
    return Joi.object({
      value: Joi.string().allow(""),

      unit: Joi.string().allow(""),
    });
  }

  static CartProduct() {
    return Joi.object({
      name: Joi.string().allow(""),

      action: CartModel.ProductAction(),

      type: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      uid: Joi.number(),

      slug: Joi.string().allow(""),

      brand: CartModel.BaseInfo(),

      images: Joi.array().items(CartModel.ProductImage()),

      item_code: Joi.string().allow("").allow(null),

      net_quantity: CartModel.NetQuantity(),
    });
  }

  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      effective: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),
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

      size: Joi.string().allow(""),

      type: Joi.string().allow(""),

      price: CartModel.ArticlePriceInfo(),

      parent_item_identifiers: Joi.any(),

      _custom_json: Joi.any(),

      uid: Joi.string().allow(""),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      store: CartModel.BaseInfo(),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      key: Joi.string().allow(""),

      discount: Joi.string().allow(""),

      is_set: Joi.boolean(),

      availability: CartModel.ProductAvailability(),

      price: CartModel.ProductPriceInfo(),

      identifiers: CartModel.CartProductIdentifer().required(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      parent_item_identifiers: Joi.any(),

      promo_meta: CartModel.PromoMeta(),

      bulk_offer: Joi.any(),

      price_per_unit: CartModel.ProductPriceInfo(),

      message: Joi.string().allow(""),

      product: CartModel.CartProduct(),

      quantity: Joi.number(),

      article: CartModel.ProductArticle(),

      coupon_message: Joi.string().allow(""),
    });
  }

  static OpenapiCartDetailsResponse() {
    return Joi.object({
      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),

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
      phone: Joi.number(),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      area_code: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country_iso_code: Joi.string().allow(""),

      country_phone_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      area_code_slug: Joi.string().allow(""),
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

      items: Joi.array().items(CartModel.CartProductInfo()),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
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
      payment_gateway: Joi.string().allow("").allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),

      extra_meta: Joi.any().allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: CartModel.MultiTenderPaymentMeta(),

      amount: Joi.number().required(),

      name: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),
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
      price_marked: Joi.number().required(),

      discount: Joi.number().required(),

      employee_discount: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      loyalty_discount: Joi.number(),

      product_id: Joi.number().required(),

      cod_charges: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      meta: CartModel.CartItemMeta(),

      price_effective: Joi.number().required(),

      size: Joi.string().allow("").required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      employee_discount: Joi.any(),

      cashback_applied: Joi.number().required(),

      cart_value: Joi.number().required(),

      coupon_code: Joi.string().allow("").required(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      gstin: Joi.string().allow("").allow(null),

      coupon: Joi.string().allow(""),

      coupon_value: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      delivery_charges: Joi.number().required(),

      billing_address: CartModel.ShippingAddress().required(),

      shipping_address: CartModel.ShippingAddress(),

      order_id: Joi.string().allow(""),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      comment: Joi.string().allow("").allow(null),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      success: Joi.boolean(),

      order_ref_id: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      payments: Joi.any().allow(null),

      app_id: Joi.string().allow(""),

      last_modified: Joi.string().allow("").required(),

      buy_now: Joi.boolean(),

      shipments: Joi.array().items(Joi.any()),

      bulk_coupon_discount: Joi.number().allow(null),

      user_id: Joi.string().allow("").required(),

      coupon: Joi.any().allow(null),

      checkout_mode: Joi.string().allow(""),

      fc_index_map: Joi.array().items(Joi.number()),

      payment_methods: Joi.array().items(Joi.any()),

      created_on: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      discount: Joi.number(),

      cashback: Joi.any().required(),

      promotion: Joi.any(),

      pick_up_customer_details: Joi.any().allow(null),

      uid: Joi.number().required(),

      cart_value: Joi.number(),

      expire_at: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      gstin: Joi.string().allow("").allow(null),

      merge_qty: Joi.boolean().allow(null),

      delivery_charges: Joi.any(),

      is_archive: Joi.boolean(),

      is_default: Joi.boolean().required(),

      articles: Joi.array().items(Joi.any()).required(),

      order_id: Joi.string().allow(""),

      cod_charges: Joi.any(),

      payment_mode: Joi.string().allow("").allow(null),

      comment: Joi.string().allow("").allow(null),

      fynd_credits: Joi.any(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      items: Joi.array().items(CartModel.AbandonedCart()),

      page: CartModel.Page(),

      result: Joi.any(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
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

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      gstin: Joi.string().allow(""),
    });
  }

  static AddProductCart() {
    return Joi.object({
      display: Joi.string().allow(""),

      seller_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      _custom_json: Joi.any(),

      article_assignment: Joi.any(),

      article_id: Joi.string().allow(""),

      store_id: Joi.number(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      pos: Joi.boolean(),

      item_size: Joi.string().allow(""),
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
      partial: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      identifiers: CartModel.CartProductIdentifer().required(),

      _custom_json: Joi.any(),

      parent_item_identifiers: Joi.any(),

      item_id: Joi.number(),

      article_id: Joi.string().allow(""),

      item_index: Joi.number(),

      extra_meta: Joi.any(),

      quantity: Joi.number(),

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
      share_url: Joi.string().allow(""),

      token: Joi.string().allow(""),
    });
  }

  static SharedCartDetails() {
    return Joi.object({
      source: Joi.any(),

      user: Joi.any(),

      token: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      payment_selection_lock: CartModel.PaymentSelectionLock(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      shared_cart_details: CartModel.SharedCartDetails(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

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

      cart_value: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      item_counts: Joi.string().allow(""),

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
      _id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      external_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      id: Joi.string().allow(""),

      delivery_charge_info: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      user: CartModel.UserInfo(),

      last_modified: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      comment: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      gstin: Joi.string().allow(""),
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

  static Coupon() {
    return Joi.object({
      title: Joi.string().allow(""),

      coupon_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      sub_title: Joi.string().allow(""),

      is_applicable: Joi.boolean(),

      is_applied: Joi.boolean(),

      message: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      max_discount_value: Joi.number(),

      expires_on: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),
    });
  }

  static PageCoupon() {
    return Joi.object({
      current: Joi.number(),

      total_item_count: Joi.number(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),
    });
  }

  static GetCouponResponse() {
    return Joi.object({
      available_coupon_list: Joi.array().items(CartModel.Coupon()),

      page: CartModel.PageCoupon(),
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
      name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      area: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      meta: Joi.any(),

      google_map_point: Joi.any(),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      is_default_address: Joi.boolean(),

      is_active: Joi.boolean(),

      area_code: Joi.string().allow(""),

      created_by_user_id: Joi.string().allow(""),

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

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      success: Joi.boolean(),

      is_updated: Joi.boolean(),

      id: Joi.string().allow(""),

      is_default_address: Joi.boolean(),
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

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      fulfillment_id: Joi.number(),

      fulfillment_type: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      order_type: Joi.string().allow(""),

      shipments: Joi.number(),

      shipment_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      promise: CartModel.ShipmentPromise(),

      dp_options: Joi.any().allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      error: Joi.boolean(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      last_modified: Joi.string().allow(""),

      message: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      id: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      comment: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
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
      checkout_mode: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      pan_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),

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
      _id: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
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

      delivery_address: Joi.any(),

      payment_params: Joi.any().allow(null),

      ordering_store: Joi.number().allow(null),

      user_id: Joi.string().allow("").required(),

      pick_at_store_uid: Joi.number().allow(null),

      checkout_mode: Joi.string().allow(""),

      merchant_code: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      payment_auto_confirm: Joi.boolean(),

      meta: Joi.any(),

      staff: CartModel.StaffCheckout(),

      order_type: Joi.string().allow("").required(),

      billing_address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      files: Joi.array().items(CartModel.Files()),

      extra_meta: Joi.any(),

      aggregator: Joi.string().allow(""),

      pos: Joi.boolean(),

      payment_mode: Joi.string().allow("").required(),

      billing_address: Joi.any(),

      address_id: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      user_type: Joi.string().allow(""),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cod_available: Joi.boolean(),

      success: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      buy_now: Joi.boolean(),

      currency: CartModel.CartCurrency(),

      store_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      cod_message: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),

      restrict_checkout: Joi.boolean(),

      store_emps: Joi.array().items(Joi.any()),

      items: Joi.array().items(CartModel.CartProductInfo()),

      cart_id: Joi.number(),

      delivery_charge_info: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      delivery_charges: Joi.number(),

      order_id: Joi.string().allow(""),

      cod_charges: Joi.number(),

      comment: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow(""),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      app_intercept_url: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CheckCart(),

      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
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

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.number(),

      landmark: Joi.string().allow(""),

      id: Joi.number(),

      store_code: Joi.string().allow(""),

      uid: Joi.number(),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),
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

      payment_identifier: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      address_id: Joi.string().allow(""),
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
