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

  static RuleDefinition() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      auto_apply: Joi.boolean(),

      applicable_on: Joi.string().allow("").required(),

      calculate_on: Joi.string().allow("").required(),

      scope: Joi.array().items(Joi.string().allow("")),

      value_type: Joi.string().allow("").required(),

      is_exact: Joi.boolean(),
    });
  }

  static Identifier() {
    return Joi.object({
      brand_id: Joi.array().items(Joi.number()),

      email_domain: Joi.array().items(Joi.string().allow("")),

      exclude_brand_id: Joi.array().items(Joi.number()),

      article_id: Joi.array().items(Joi.string().allow("")),

      collection_id: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      store_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string().allow("")),

      category_id: Joi.array().items(Joi.number()),
    });
  }

  static Rule() {
    return Joi.object({
      max: Joi.number(),

      discount_qty: Joi.number(),

      value: Joi.number(),

      key: Joi.number(),

      min: Joi.number(),
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

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      types: Joi.array().items(Joi.string().allow("")),

      codes: Joi.array().items(Joi.string().allow("")),

      networks: Joi.array().items(Joi.string().allow("")),

      uses: CartModel.PaymentAllowValue(),
    });
  }

  static Restrictions() {
    return Joi.object({
      coupon_allowed: Joi.boolean(),

      user_type: Joi.string().allow(""),

      post_order: CartModel.PostOrder(),

      uses: CartModel.UsesRestriction(),

      bulk_bundle: CartModel.BulkBundleRestriction(),

      price_range: CartModel.PriceRange(),

      user_groups: Joi.array().items(Joi.number()),

      payments: Joi.object().pattern(/\S/, this.PaymentModes()),

      ordering_stores: Joi.array().items(Joi.number()),

      platforms: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),

      app_id: Joi.array().items(Joi.string().allow("")),

      user_registered_after: Joi.string().allow("").allow(null),
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

      remove: CartModel.DisplayMetaDict(),

      subtitle: Joi.string().allow(""),

      description: Joi.string().allow(""),

      auto: CartModel.DisplayMetaDict(),

      apply: CartModel.DisplayMetaDict(),
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

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),

      payable_category: Joi.string().allow("").required(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static State() {
    return Joi.object({
      is_display: Joi.boolean(),

      is_public: Joi.boolean(),

      is_archived: Joi.boolean(),
    });
  }

  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),

      txn_mode: Joi.string().allow(""),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      rule_definition: CartModel.RuleDefinition().required(),

      identifiers: CartModel.Identifier().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      restrictions: CartModel.Restrictions(),

      validation: CartModel.Validation(),

      display_meta: CartModel.DisplayMeta().required(),

      type_slug: Joi.string().allow("").required(),

      date_meta: CartModel.CouponDateMeta(),

      author: CartModel.CouponAuthor(),

      ownership: CartModel.Ownership().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      _schedule: CartModel.CouponSchedule(),

      state: CartModel.State(),

      action: CartModel.CouponAction(),

      code: Joi.string().allow("").required(),

      validity: CartModel.Validity().required(),
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

      identifiers: CartModel.Identifier().required(),

      rule: Joi.array().items(CartModel.Rule()).required(),

      restrictions: CartModel.Restrictions(),

      validation: CartModel.Validation(),

      display_meta: CartModel.DisplayMeta().required(),

      type_slug: Joi.string().allow("").required(),

      date_meta: CartModel.CouponDateMeta(),

      author: CartModel.CouponAuthor(),

      ownership: CartModel.Ownership().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      _schedule: CartModel.CouponSchedule(),

      state: CartModel.State(),

      action: CartModel.CouponAction(),

      code: Joi.string().allow("").required(),

      validity: CartModel.Validity().required(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: CartModel.CouponSchedule(),
    });
  }

  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

  static Restrictions1() {
    return Joi.object({
      post_order: CartModel.PostOrder1(),

      anonymous_users: Joi.boolean(),

      uses: CartModel.UsesRestriction1().required(),

      user_groups: Joi.array().items(Joi.number()),

      user_registered: CartModel.UserRegistered(),

      payments: Joi.array().items(CartModel.PromotionPaymentModes()),

      platforms: Joi.array().items(Joi.string().allow("")),

      order_quantity: Joi.number(),

      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PromotionAuthor() {
    return Joi.object({
      modified_by: Joi.string().allow("").allow(null),

      created_by: Joi.string().allow("").allow(null),
    });
  }

  static CompareObject() {
    return Joi.object({
      less_than_equals: Joi.number(),

      less_than: Joi.number(),

      greater_than: Joi.number(),

      equals: Joi.number(),

      greater_than_equals: Joi.number(),
    });
  }

  static ItemCriteria() {
    return Joi.object({
      item_store: Joi.array().items(Joi.number()),

      available_zones: Joi.array().items(Joi.string().allow("")),

      all_items: Joi.boolean(),

      item_size: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.array().items(Joi.number()),

      item_exclude_category: Joi.array().items(Joi.number()),

      item_exclude_store: Joi.array().items(Joi.number()),

      cart_unique_item_quantity: CartModel.CompareObject(),

      item_exclude_brand: Joi.array().items(Joi.number()),

      cart_quantity: CartModel.CompareObject(),

      buy_rules: Joi.array().items(Joi.string().allow("")),

      cart_total: CartModel.CompareObject(),

      item_company: Joi.array().items(Joi.number()),

      item_exclude_sku: Joi.array().items(Joi.string().allow("")),

      item_brand: Joi.array().items(Joi.number()),

      item_exclude_id: Joi.array().items(Joi.number()),

      item_exclude_company: Joi.array().items(Joi.number()),

      cart_unique_item_amount: CartModel.CompareObject(),

      item_sku: Joi.array().items(Joi.string().allow("")),

      item_category: Joi.array().items(Joi.number()),
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

  static DiscountOffer() {
    return Joi.object({
      min_offer_quantity: Joi.number(),

      discount_amount: Joi.number(),

      discount_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      max_usage_per_transaction: Joi.number(),

      max_offer_quantity: Joi.number(),

      discount_price: Joi.number(),

      max_discount_amount: Joi.number(),

      code: Joi.string().allow(""),

      apportion_discount: Joi.boolean(),
    });
  }

  static DiscountRule() {
    return Joi.object({
      item_criteria: CartModel.ItemCriteria().required(),

      discount_type: Joi.string().allow("").required(),

      buy_condition: Joi.string().allow("").required(),

      offer: CartModel.DiscountOffer().required(),
    });
  }

  static PromotionSchedule() {
    return Joi.object({
      start: Joi.string().allow("").required(),

      next_schedule: Joi.array().items(Joi.any()),

      duration: Joi.number().allow(null),

      published: Joi.boolean().required(),

      end: Joi.string().allow("").allow(null),

      cron: Joi.string().allow("").allow(null),
    });
  }

  static PromotionListItem() {
    return Joi.object({
      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      ownership: CartModel.Ownership1().required(),

      promotion_type: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      calculate_on: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      code: Joi.string().allow(""),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),

      application_id: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      promo_group: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),
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
      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      ownership: CartModel.Ownership1().required(),

      promotion_type: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      calculate_on: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      code: Joi.string().allow(""),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),

      application_id: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      promo_group: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),
    });
  }

  static PromotionUpdate() {
    return Joi.object({
      display_meta: CartModel.DisplayMeta1().required(),

      currency: Joi.string().allow(""),

      date_meta: CartModel.PromotionDateMeta(),

      ownership: CartModel.Ownership1().required(),

      promotion_type: Joi.string().allow("").required(),

      stackable: Joi.boolean(),

      apply_priority: Joi.number(),

      _custom_json: Joi.any(),

      restrictions: CartModel.Restrictions1(),

      calculate_on: Joi.string().allow(""),

      author: CartModel.PromotionAuthor(),

      code: Joi.string().allow(""),

      buy_rules: Joi.object().pattern(/\S/, this.ItemCriteria()).required(),

      visiblility: CartModel.Visibility(),

      application_id: Joi.string().allow("").required(),

      post_order_action: CartModel.PromotionAction(),

      promo_group: Joi.string().allow("").required(),

      discount_rules: Joi.array().items(CartModel.DiscountRule()).required(),

      apply_all_discount: Joi.boolean(),

      _schedule: CartModel.PromotionSchedule(),

      mode: Joi.string().allow("").required(),

      apply_exclusive: Joi.string().allow("").allow(null),
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
      entity_type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      type: Joi.string().allow(""),

      subtitle: Joi.string().allow(""),

      created_on: Joi.string().allow(""),

      example: Joi.string().allow(""),

      entity_slug: Joi.string().allow(""),

      description: Joi.string().allow(""),

      is_hidden: Joi.boolean(),

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

      currency_symbol: Joi.string().allow(""),

      message: Joi.array().items(Joi.string().allow("")),

      value: Joi.number(),

      display: Joi.string().allow(""),

      key: Joi.string().allow(""),
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

  static CouponBreakup() {
    return Joi.object({
      is_applied: Joi.boolean(),

      title: Joi.string().allow("").allow(null),

      max_discount_value: Joi.number(),

      type: Joi.string().allow(""),

      coupon_value: Joi.number(),

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow("").allow(null),

      uid: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),
    });
  }

  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),

      subtotal: Joi.number(),

      gift_card: Joi.number(),

      gst_charges: Joi.number(),

      mrp_total: Joi.number(),

      delivery_charge: Joi.number(),

      total: Joi.number(),

      coupon: Joi.number(),

      discount: Joi.number(),

      convenience_fee: Joi.number(),

      vog: Joi.number(),

      fynd_cash: Joi.number(),

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

  static ProductPrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),

      add_on: Joi.number(),

      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      selling: Joi.number(),
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

  static ProductAvailability() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string().allow("")),

      is_valid: Joi.boolean(),

      deliverable: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      other_store_quantity: Joi.number(),
    });
  }

  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),

      item_price_details: Joi.any(),

      item_images_url: Joi.array().items(Joi.string().allow("")),

      item_brand_name: Joi.string().allow(""),

      item_id: Joi.number(),

      item_slug: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),

      free_gift_item_details: CartModel.FreeGiftItem(),

      parent_item_identifier: Joi.string().allow(""),

      article_id: Joi.string().allow(""),
    });
  }

  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),

      matched_buy_rules: Joi.array().items(Joi.string().allow("")),

      offer: Joi.any(),

      raw_offer: Joi.any(),
    });
  }

  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),

      cart_conditions: Joi.any(),
    });
  }

  static AppliedPromotion() {
    return Joi.object({
      promotion_group: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      applied_free_articles: Joi.array().items(CartModel.AppliedFreeArticles()),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(CartModel.DiscountRulesApp()),

      promo_id: Joi.string().allow(""),

      offer_text: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(CartModel.BuyRules()),

      mrp_promotion: Joi.boolean(),
    });
  }

  static BasePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      effective: Joi.number(),

      currency_code: Joi.string().allow(""),
    });
  }

  static ArticlePriceInfo() {
    return Joi.object({
      converted: CartModel.BasePrice(),

      base: CartModel.BasePrice(),
    });
  }

  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ProductArticle() {
    return Joi.object({
      price: CartModel.ArticlePriceInfo(),

      is_gift_visible: Joi.boolean(),

      extra_meta: Joi.any(),

      size: Joi.string().allow(""),

      type: Joi.string().allow(""),

      gift_card: Joi.any(),

      seller: CartModel.BaseInfo(),

      parent_item_identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      product_group_tags: Joi.array().items(Joi.string().allow("")),

      store: CartModel.BaseInfo(),

      seller_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      cart_item_meta: Joi.any(),

      identifier: Joi.any(),
    });
  }

  static CouponDetails() {
    return Joi.object({
      discount_total_quantity: Joi.number(),

      discount_single_quantity: Joi.number(),

      code: Joi.string().allow(""),
    });
  }

  static Tags() {
    return Joi.object({
      tags: Joi.any(),
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
      query: CartModel.ActionQuery(),

      url: Joi.string().allow(""),

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
      _custom_json: Joi.any(),

      type: Joi.string().allow(""),

      teaser_tag: CartModel.Tags(),

      brand: CartModel.BaseInfo(),

      uid: Joi.number(),

      images: Joi.array().items(CartModel.ProductImage()),

      action: CartModel.ProductAction(),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      categories: Joi.array().items(CartModel.CategoryInfo()),

      slug: Joi.string().allow(""),

      item_code: Joi.string().allow("").allow(null),
    });
  }

  static CartProductInfo() {
    return Joi.object({
      price: CartModel.ProductPriceInfo(),

      is_set: Joi.boolean(),

      identifiers: CartModel.CartProductIdentifer().required(),

      availability: CartModel.ProductAvailability(),

      message: Joi.string().allow(""),

      coupon_message: Joi.string().allow(""),

      bulk_offer: Joi.any(),

      promo_meta: CartModel.PromoMeta(),

      promotions_applied: Joi.array().items(CartModel.AppliedPromotion()),

      parent_item_identifiers: Joi.any(),

      price_per_unit: CartModel.ProductPriceInfo(),

      article: CartModel.ProductArticle(),

      quantity: Joi.number(),

      discount: Joi.string().allow(""),

      key: Joi.string().allow(""),

      coupon: CartModel.CouponDetails(),

      product: CartModel.CartProduct(),
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

      errors: Joi.any(),

      success: Joi.boolean(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      phone: Joi.number(),

      meta: Joi.any(),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code_slug: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area_code: Joi.string().allow("").required(),

      city: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      state: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").allow(null),
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
      delivery_promise: CartModel.ShipmentPromise(),

      is_valid: Joi.boolean(),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      items: Joi.array().items(CartModel.CartProductInfo()),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow("").allow(null),

      payment_id: Joi.string().allow("").allow(null),

      payment_gateway: Joi.string().allow("").allow(null),

      order_id: Joi.string().allow("").allow(null),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

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

  static OpenApiFiles() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static OpenApiOrderItem() {
    return Joi.object({
      price_effective: Joi.number().required(),

      extra_meta: Joi.any(),

      meta: CartModel.CartItemMeta(),

      coupon_effective_discount: Joi.number().required(),

      loyalty_discount: Joi.number(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      price_marked: Joi.number().required(),

      amount_paid: Joi.number().required(),

      size: Joi.string().allow("").required(),

      cashback_applied: Joi.number().required(),

      cod_charges: Joi.number().required(),

      product_id: Joi.number().required(),

      quantity: Joi.number(),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      employee_discount: Joi.number(),

      discount: Joi.number().required(),

      delivery_charges: Joi.number().required(),
    });
  }

  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      coupon_value: Joi.number().required(),

      payment_methods: Joi.array()
        .items(CartModel.MultiTenderPaymentMethod())
        .required(),

      comment: Joi.string().allow("").allow(null),

      cart_items: Joi.array().items(CartModel.OpenApiOrderItem()).required(),

      cashback_applied: Joi.number().required(),

      cod_charges: Joi.number().required(),

      coupon: Joi.string().allow(""),

      cart_value: Joi.number().required(),

      shipping_address: CartModel.ShippingAddress(),

      order_id: Joi.string().allow(""),

      delivery_charges: Joi.number().required(),

      currency_code: Joi.string().allow(""),

      gstin: Joi.string().allow("").allow(null),

      billing_address: CartModel.ShippingAddress().required(),

      coupon_code: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      files: Joi.array().items(CartModel.OpenApiFiles()),

      employee_discount: Joi.any(),

      payment_mode: Joi.string().allow(""),

      loyalty_discount: Joi.number(),
    });
  }

  static OpenApiCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      order_ref_id: Joi.string().allow(""),

      success: Joi.boolean(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static AbandonedCart() {
    return Joi.object({
      comment: Joi.string().allow("").allow(null),

      promotion: Joi.any(),

      merge_qty: Joi.boolean().allow(null),

      created_on: Joi.string().allow("").required(),

      cod_charges: Joi.any(),

      app_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      is_default: Joi.boolean().required(),

      pick_up_customer_details: Joi.any().allow(null),

      checkout_mode: Joi.string().allow(""),

      is_archive: Joi.boolean(),

      discount: Joi.number(),

      fc_index_map: Joi.array().items(Joi.number()),

      shipments: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      payment_mode: Joi.string().allow("").allow(null),

      coupon: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      articles: Joi.array().items(Joi.any()).required(),

      payment_methods: Joi.array().items(Joi.any()),

      expire_at: Joi.string().allow("").required(),

      payments: Joi.any().allow(null),

      buy_now: Joi.boolean(),

      cart_value: Joi.number(),

      cashback: Joi.any().required(),

      user_id: Joi.string().allow("").required(),

      delivery_charges: Joi.any(),

      last_modified: Joi.string().allow("").required(),

      meta: Joi.any().allow(null),

      gstin: Joi.string().allow("").allow(null),

      uid: Joi.number().required(),

      bulk_coupon_discount: Joi.number().allow(null),

      fynd_credits: Joi.any(),
    });
  }

  static AbandonedCartResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      items: Joi.array().items(CartModel.AbandonedCart()),

      page: CartModel.Page(),

      result: Joi.any(),
    });
  }

  static AddProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),

      pos: Joi.boolean(),

      seller_id: Joi.number(),

      parent_item_identifiers: Joi.any(),

      article_assignment: Joi.any(),

      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),

      item_size: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      item_id: Joi.number(),

      quantity: Joi.number(),

      display: Joi.string().allow(""),

      store_id: Joi.number(),
    });
  }

  static AddCartRequest() {
    return Joi.object({
      new_cart: Joi.boolean(),

      items: Joi.array().items(CartModel.AddProductCart()),
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
      symbol: Joi.string().allow(""),

      code: Joi.string().allow(""),
    });
  }

  static CartDetailResponse() {
    return Joi.object({
      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      is_valid: Joi.boolean(),

      coupon_text: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      pan_config: Joi.any(),
    });
  }

  static AddCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),

      partial: Joi.boolean(),
    });
  }

  static UpdateProductCart() {
    return Joi.object({
      item_index: Joi.number(),

      identifiers: CartModel.CartProductIdentifer().required(),

      extra_meta: Joi.any(),

      parent_item_identifiers: Joi.any(),

      article_id: Joi.string().allow(""),

      item_size: Joi.string().allow(""),

      item_id: Joi.number(),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      cart: CartModel.CartDetailResponse(),
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
      meta: Joi.any(),

      created_on: Joi.string().allow(""),

      user: Joi.any(),

      token: Joi.string().allow(""),

      source: Joi.any(),
    });
  }

  static SharedCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      delivery_charge_info: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      checkout_mode: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      shared_cart_details: CartModel.SharedCartDetails(),
    });
  }

  static SharedCartResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      cart: CartModel.SharedCart(),
    });
  }

  static CartList() {
    return Joi.object({
      pick_up_customer_details: Joi.any(),

      created_on: Joi.string().allow(""),

      item_counts: Joi.number(),

      cart_value: Joi.number(),

      user_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static MultiCartResponse() {
    return Joi.object({
      data: Joi.array().items(CartModel.CartList()),

      success: Joi.boolean(),
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

      external_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      modified_on: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static UserCartMappingResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      user: CartModel.UserInfo(),

      delivery_charge_info: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      pan_no: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      pan_config: Joi.any(),

      coupon_text: Joi.string().allow(""),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      last_modified: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static DeleteCartRequest() {
    return Joi.object({
      cart_id_list: Joi.array().items(Joi.string().allow("")),
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

  static Coupon() {
    return Joi.object({
      max_discount_value: Joi.number(),

      coupon_value: Joi.number(),

      title: Joi.string().allow(""),

      is_applied: Joi.boolean(),

      coupon_type: Joi.string().allow("").allow(null),

      message: Joi.string().allow(""),

      sub_title: Joi.string().allow(""),

      coupon_code: Joi.string().allow(""),

      minimum_cart_value: Joi.number(),

      description: Joi.string().allow("").allow(null),

      is_applicable: Joi.boolean(),

      expires_on: Joi.string().allow(""),
    });
  }

  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),

      current: Joi.number(),

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
      longitude: Joi.number(),

      latitude: Joi.number(),
    });
  }

  static PlatformAddress() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      geo_location: CartModel.GeoLocation(),

      country_code: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      address: Joi.string().allow(""),

      area: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      created_by_user_id: Joi.string().allow(""),

      city: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),

      meta: Joi.any(),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      google_map_point: Joi.any(),
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

      id: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UpdateAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),

      id: Joi.string().allow(""),

      success: Joi.boolean(),

      is_updated: Joi.boolean(),
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
      id: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      billing_address_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      cart_id: Joi.string().allow(""),
    });
  }

  static ShipmentResponse() {
    return Joi.object({
      fulfillment_id: Joi.number(),

      shipment_type: Joi.string().allow(""),

      promise: CartModel.ShipmentPromise(),

      items: Joi.array().items(CartModel.CartProductInfo()),

      fulfillment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      shipments: Joi.number(),

      dp_options: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static CartShipmentsResponse() {
    return Joi.object({
      error: Joi.boolean(),

      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      coupon_text: Joi.string().allow(""),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      delivery_charge_info: Joi.string().allow(""),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      shipments: Joi.array().items(CartModel.ShipmentResponse()),
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

  static GiftDetail() {
    return Joi.object({
      gift_message: Joi.string().allow(""),

      is_gift_applied: Joi.boolean(),
    });
  }

  static ArticleGiftDetail() {
    return Joi.object({
      article_id: CartModel.GiftDetail(),
    });
  }

  static PlatformCartMetaRequest() {
    return Joi.object({
      comment: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),

      pick_up_customer_details: Joi.any(),

      gstin: Joi.string().allow(""),

      checkout_mode: Joi.string().allow(""),

      gift_details: CartModel.ArticleGiftDetail(),
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

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),
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
      extra_meta: Joi.any(),

      device_id: Joi.string().allow("").allow(null),

      id: Joi.string().allow("").required(),

      employee_code: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      pick_at_store_uid: Joi.number().allow(null),

      delivery_address: Joi.any(),

      billing_address: Joi.any(),

      checkout_mode: Joi.string().allow(""),

      order_type: Joi.string().allow("").required(),

      ordering_store: Joi.number().allow(null),

      payment_params: Joi.any().allow(null),

      payment_mode: Joi.string().allow("").required(),

      staff: CartModel.StaffCheckout(),

      address_id: Joi.string().allow(""),

      callback_url: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow(""),

      user_id: Joi.string().allow("").required(),

      payment_identifier: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow(""),

      meta: Joi.any(),

      pos: Joi.boolean(),

      files: Joi.array().items(CartModel.Files()),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static CheckCart() {
    return Joi.object({
      is_valid: Joi.boolean(),

      comment: Joi.string().allow(""),

      message: Joi.string().allow(""),

      breakup_values: CartModel.CartBreakup(),

      id: Joi.string().allow(""),

      currency: CartModel.CartCurrency(),

      cod_message: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      cod_charges: Joi.number(),

      store_emps: Joi.array().items(Joi.any()),

      delivery_charge_info: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      delivery_promise: CartModel.ShipmentPromise(),

      payment_selection_lock: CartModel.PaymentSelectionLock(),

      cod_available: Joi.boolean(),

      checkout_mode: Joi.string().allow(""),

      items: Joi.array().items(CartModel.CartProductInfo()),

      coupon_text: Joi.string().allow(""),

      success: Joi.boolean(),

      restrict_checkout: Joi.boolean(),

      buy_now: Joi.boolean(),

      delivery_charges: Joi.number(),

      cart_id: Joi.number(),

      last_modified: Joi.string().allow(""),

      user_type: Joi.string().allow(""),

      gstin: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      uid: Joi.string().allow(""),

      delivery_charge_order_value: Joi.number(),
    });
  }

  static CartCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      callback_url: Joi.string().allow(""),

      data: Joi.any(),

      payment_confirm_url: Joi.string().allow(""),

      app_intercept_url: Joi.string().allow(""),

      cart: CartModel.CheckCart(),
    });
  }

  static CartDeliveryModesResponse() {
    return Joi.object({
      available_modes: Joi.array().items(Joi.string().allow("")),

      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.number(),

      store_code: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      address: Joi.string().allow(""),

      id: Joi.number(),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      uid: Joi.number(),

      area_code: Joi.string().allow(""),

      city: Joi.string().allow(""),

      name: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),
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

      merchant_code: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  static CouponValidity() {
    return Joi.object({
      display_message_en: Joi.string().allow("").allow(null),

      title: Joi.string().allow(""),

      valid: Joi.boolean(),

      discount: Joi.number(),

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
