const Joi = require("joi");

/**
 * @typedef CouponDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */

/**
 * @typedef Ownership
 * @property {string} payable_category
 * @property {string} payable_by
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef State
 * @property {boolean} [is_archived]
 * @property {boolean} [is_display]
 * @property {boolean} [is_public]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [codes]
 * @property {string[]} [iins]
 * @property {string[]} [types]
 * @property {string[]} [networks]
 * @property {PaymentAllowValue} [uses]
 */

/**
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef UsesRemaining
 * @property {number} [user]
 * @property {number} [total]
 * @property {number} [app]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [maximum]
 * @property {UsesRemaining} [remaining]
 */

/**
 * @typedef Restrictions
 * @property {Object} [payments]
 * @property {string} [user_type]
 * @property {PriceRange} [price_range]
 * @property {string[]} [platforms]
 * @property {PostOrder} [post_order]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {number[]} [user_groups]
 * @property {boolean} [coupon_allowed]
 * @property {UsesRestriction} [uses]
 * @property {number[]} [ordering_stores]
 */

/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {boolean} [anonymous]
 * @property {string} [user_registered_after]
 */

/**
 * @typedef CouponAction
 * @property {string} [action_date]
 * @property {string} [txn_mode]
 */

/**
 * @typedef CouponSchedule
 * @property {string} [end]
 * @property {string} [start]
 * @property {Object[]} [next_schedule]
 * @property {string} [cron]
 * @property {number} [duration]
 */

/**
 * @typedef Rule
 * @property {number} [key]
 * @property {number} [value]
 * @property {number} [max]
 * @property {number} [discount_qty]
 * @property {number} [min]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */

/**
 * @typedef DisplayMeta
 * @property {string} [title]
 * @property {DisplayMetaDict} [auto]
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [remove]
 * @property {string} [subtitle]
 * @property {string} [description]
 */

/**
 * @typedef Identifier
 * @property {number[]} [brand_id]
 * @property {string[]} [email_domain]
 * @property {number[]} [company_id]
 * @property {number[]} [store_id]
 * @property {string[]} [collection_id]
 * @property {number[]} [item_id]
 * @property {string[]} [user_id]
 * @property {number[]} [category_id]
 * @property {string[]} [article_id]
 * @property {number[]} [exclude_brand_id]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef RuleDefinition
 * @property {string} [currency_code]
 * @property {boolean} [auto_apply]
 * @property {string} type
 * @property {boolean} [is_exact]
 * @property {string} applicable_on
 * @property {string} calculate_on
 * @property {string} value_type
 * @property {string[]} [scope]
 */

/**
 * @typedef CouponAdd
 * @property {CouponDateMeta} [date_meta]
 * @property {Ownership} ownership
 * @property {CouponAuthor} [author]
 * @property {State} [state]
 * @property {Restrictions} [restrictions]
 * @property {Validation} [validation]
 * @property {CouponAction} [action]
 * @property {string[]} [tags]
 * @property {CouponSchedule} [_schedule]
 * @property {Rule[]} rule
 * @property {DisplayMeta} display_meta
 * @property {string} code
 * @property {string} type_slug
 * @property {Identifier} identifiers
 * @property {Validity} validity
 * @property {RuleDefinition} rule_definition
 * @property {string} [_id] - Coupon id
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef CouponsResponse
 * @property {CouponAdd[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SuccessMessage
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef OperationErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef CouponUpdate
 * @property {CouponDateMeta} [date_meta]
 * @property {Ownership} ownership
 * @property {CouponAuthor} [author]
 * @property {State} [state]
 * @property {Restrictions} [restrictions]
 * @property {Validation} [validation]
 * @property {CouponAction} [action]
 * @property {string[]} [tags]
 * @property {CouponSchedule} [_schedule]
 * @property {Rule[]} rule
 * @property {DisplayMeta} display_meta
 * @property {string} code
 * @property {string} type_slug
 * @property {Identifier} identifiers
 * @property {Validity} validity
 * @property {RuleDefinition} rule_definition
 */

/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive] - Send true to unpublish coupon
 * @property {CouponSchedule} [schedule]
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [description]
 * @property {string} [offer_label]
 * @property {string} [name]
 * @property {string} [offer_text]
 */

/**
 * @typedef Ownership1
 * @property {string} payable_category
 * @property {string} payable_by
 */

/**
 * @typedef CompareObject
 * @property {number} [equals]
 * @property {number} [greater_than]
 * @property {number} [less_than_equals]
 * @property {number} [less_than]
 * @property {number} [greater_than_equals]
 */

/**
 * @typedef ItemCriteria
 * @property {CompareObject} [cart_quantity]
 * @property {string[]} [available_zones]
 * @property {number[]} [item_exclude_company]
 * @property {number[]} [item_id]
 * @property {number[]} [item_l1_category]
 * @property {CompareObject} [cart_total]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_id]
 * @property {boolean} [all_items]
 * @property {number[]} [item_exclude_l1_category]
 * @property {string[]} [item_size]
 * @property {number[]} [item_store]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_department]
 * @property {number[]} [item_exclude_store]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_exclude_department]
 * @property {number[]} [item_exclude_category]
 * @property {number[]} [item_category]
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_l2_category]
 * @property {number[]} [item_company]
 * @property {string[]} [item_tags]
 * @property {number[]} [item_exclude_l2_category]
 * @property {string[]} [item_sku]
 */

/**
 * @typedef DiscountOffer
 * @property {number} [max_discount_amount]
 * @property {number} [discount_price]
 * @property {boolean} [apportion_discount]
 * @property {boolean} [partial_can_ret]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [min_offer_quantity]
 * @property {string} [code]
 * @property {number} [discount_amount]
 * @property {number} [discount_percentage]
 * @property {number} [max_offer_quantity]
 */

/**
 * @typedef DiscountRule
 * @property {string} discount_type
 * @property {string} buy_condition
 * @property {ItemCriteria} item_criteria
 * @property {DiscountOffer} offer
 */

/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */

/**
 * @typedef PromotionPaymentModes
 * @property {string} type
 * @property {PaymentAllowValue1} [uses]
 * @property {string[]} [codes]
 */

/**
 * @typedef UserRegistered
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef UsesRemaining1
 * @property {number} [user]
 * @property {number} [total]
 */

/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [maximum]
 * @property {UsesRemaining1} [remaining]
 */

/**
 * @typedef Restrictions1
 * @property {PromotionPaymentModes[]} [payments]
 * @property {Object} [user_registered]
 * @property {string[]} [platforms]
 * @property {PostOrder1} [post_order]
 * @property {number[]} [user_groups]
 * @property {number} [order_quantity]
 * @property {boolean} [anonymous_users]
 * @property {string[]} [user_id]
 * @property {UsesRestriction1} uses
 * @property {number[]} [ordering_stores]
 */

/**
 * @typedef PromotionSchedule
 * @property {string} end
 * @property {string} start
 * @property {boolean} published
 * @property {Object[]} [next_schedule]
 * @property {string} [cron]
 * @property {number} [duration]
 */

/**
 * @typedef PromotionAction
 * @property {string} action_date
 * @property {string} action_type
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef Visibility
 * @property {boolean} coupon_list
 * @property {boolean} pdp
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */

/**
 * @typedef PromotionListItem
 * @property {boolean} [stackable] - Allows more than one promotion to get
 *   combined benefits
 * @property {string} [calculate_on] - Only available for Contract pricing and
 *   Ladder pricing promotion type
 * @property {string} [apply_exclusive] - Doesn't allow other promotion after
 *   current promotion applied on cart or article
 * @property {string} promo_group - Group into which promotion fall
 * @property {string} mode - Promotion mode
 * @property {boolean} [apply_all_discount] - Prevents more than one promotion discounts
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} ownership
 * @property {string} promotion_type - Type of the promotion
 * @property {DiscountRule[]} discount_rules - Discount rules based on which
 *   promotion will be applied
 * @property {Restrictions1} [restrictions]
 * @property {string} [currency] - Currency used for promotion
 * @property {string} [code] - Promotion code
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionAction} [post_order_action]
 * @property {number} [apply_priority] - Priority based on which promotion are
 *   applied on articles
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {string} application_id - App id in which promotion will be used
 * @property {Object} buy_rules - Buy rules for the promotion
 * @property {Object} [_custom_json] - Custom data stored in promotion
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [_id] - Promotion id
 */

/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PromotionAdd
 * @property {boolean} [stackable]
 * @property {string} [calculate_on] - Only available for Contract pricing and
 *   Ladder pricing promotion type
 * @property {string} [apply_exclusive]
 * @property {string} promo_group
 * @property {string} mode
 * @property {boolean} [apply_all_discount]
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} ownership
 * @property {string} promotion_type
 * @property {DiscountRule[]} discount_rules
 * @property {Restrictions1} [restrictions]
 * @property {string} [currency]
 * @property {string} [code]
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionAction} [post_order_action]
 * @property {number} [apply_priority]
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {string} application_id
 * @property {Object} buy_rules
 * @property {Object} [_custom_json]
 * @property {PromotionDateMeta} [date_meta]
 */

/**
 * @typedef PromotionUpdate
 * @property {boolean} [stackable]
 * @property {string} [calculate_on] - Only available for Contract pricing and
 *   Ladder pricing promotion type
 * @property {string} [apply_exclusive]
 * @property {string} promo_group
 * @property {string} mode
 * @property {boolean} [apply_all_discount]
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} ownership
 * @property {string} promotion_type
 * @property {DiscountRule[]} discount_rules
 * @property {Restrictions1} [restrictions]
 * @property {string} [currency]
 * @property {string} [code]
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionAction} [post_order_action]
 * @property {number} [apply_priority]
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {string} application_id
 * @property {Object} buy_rules
 * @property {Object} [_custom_json]
 * @property {PromotionDateMeta} [date_meta]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive] - Send true to unpublish promotion
 * @property {PromotionSchedule} [schedule]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [entity_slug]
 * @property {string} [title] - Name of the promotion
 * @property {string} [modified_on] - Coupon modification date
 * @property {string} [example] - Discount offers examples
 * @property {string} [entity_type] - Type of entity to be selected from :
 *   ['coupon', 'promotion']
 * @property {string} [created_on] - Coupon creation date
 * @property {boolean} [is_hidden] - If the promo is active or not
 * @property {string} [type] - Coupon type
 * @property {string} [subtitle] - Small description of the current offer
 * @property {string} [description] - The description of the offer in the form of an HTML
 */

/**
 * @typedef Charges
 * @property {number} [charges]
 * @property {number} [threshold]
 */

/**
 * @typedef DeliveryCharges
 * @property {Charges[]} [charges]
 * @property {boolean} [enabled]
 */

/**
 * @typedef CartMetaConfigUpdate
 * @property {number} [min_cart_value]
 * @property {boolean} [bulk_coupons]
 * @property {number} [max_cart_items]
 * @property {string} [gift_display_text]
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [revenue_engine_coupon]
 * @property {number} [gift_pricing]
 * @property {boolean} [enabled]
 */

/**
 * @typedef CartMetaConfigAdd
 * @property {number} [min_cart_value]
 * @property {boolean} [bulk_coupons]
 * @property {number} [max_cart_items]
 * @property {string} [gift_display_text]
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [revenue_engine_coupon]
 * @property {number} [gift_pricing]
 * @property {boolean} [enabled]
 */

/**
 * @typedef Article
 * @property {number} [value] - Value of price adjustment for article
 * @property {string} [code] - Code to identify price adjustment on article
 * @property {string} [type] - Type of price adjusment
 * @property {string} article_id - Id of article
 * @property {number} [quantity] - Total quantity of the article to be
 *   considered (currently used only in discount type)
 * @property {Object} [meta] - Meta related to article
 */

/**
 * @typedef Collection
 * @property {string} refund_by
 * @property {string} collected_by
 */

/**
 * @typedef PriceAdjustmentUpdate
 * @property {string} [modified_by] - The entity that modified the field
 * @property {number} value
 * @property {string} message - The message associated with the price adjustment
 * @property {string} [apply_expiry] - The date and time when the expiry should be applied
 * @property {boolean} article_level_distribution - Flag indicating whether the
 *   distribution should is done at the article level
 * @property {Collection} collection
 * @property {string} type - Type of price adjusment
 * @property {boolean} [allowed_refund] - Flag indicating whether refunds are
 *   allowed (default: False)
 * @property {boolean} is_authenticated - Flag indicating whether the user is
 *   authenticated
 * @property {Article[]} article_ids - The list of article object in the price adjustment
 * @property {Object} [meta]
 * @property {string} cart_id - The ID of the cart
 */

/**
 * @typedef PriceAdjustment
 * @property {number} value
 * @property {string} message - The message associated with the price adjustment
 * @property {string} [apply_expiry] - The date and time when the expiry should be applied
 * @property {boolean} article_level_distribution - Flag indicating whether the
 *   distribution should is done at the article level
 * @property {string} [id]
 * @property {Collection} collection
 * @property {string} type - Type of price adjusment
 * @property {boolean} [allowed_refund] - Flag indicating whether refunds are
 *   allowed (default: False)
 * @property {boolean} is_authenticated - Flag indicating whether the user is
 *   authenticated
 * @property {Article[]} article_ids - The list of article object in the price adjustment
 * @property {Object} [meta]
 * @property {string} cart_id - The ID of the cart
 */

/**
 * @typedef PriceAdjustmentResponse
 * @property {PriceAdjustment} [data]
 */

/**
 * @typedef PriceAdjustmentAdd
 * @property {number} value
 * @property {string} message - The message associated with the price adjustment
 * @property {string} [apply_expiry] - The date and time when the expiry should be applied
 * @property {string} [created_by] - The entity that created the field
 * @property {boolean} article_level_distribution - Flag indicating whether the
 *   distribution should is done at the article level
 * @property {Collection} collection
 * @property {string} type - Type of price adjusment
 * @property {boolean} [allowed_refund] - Flag indicating whether refunds are
 *   allowed (default: False)
 * @property {boolean} is_authenticated - Flag indicating whether the user is
 *   authenticated
 * @property {Article[]} article_ids - The list of article object in the price adjustment
 * @property {Object} [meta]
 * @property {string} cart_id - The ID of the cart
 */

/**
 * @typedef CartItem
 * @property {number} [quantity]
 * @property {string} product_id
 * @property {string} size
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem[]} cart_items
 */

/**
 * @typedef CouponBreakup
 * @property {string} [title]
 * @property {number} [max_discount_value]
 * @property {number} [value]
 * @property {boolean} [is_applied]
 * @property {string} [uid]
 * @property {string} [coupon_type]
 * @property {string} [sub_title]
 * @property {number} [coupon_value]
 * @property {string} [code]
 * @property {string} [type]
 * @property {number} [minimum_cart_value]
 * @property {string} [message]
 * @property {string} [description]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [key]
 * @property {number} [value]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {string} [display]
 * @property {string[]} [message]
 */

/**
 * @typedef LoyaltyPoints
 * @property {boolean} [is_applied]
 * @property {number} [total]
 * @property {number} [applicable]
 * @property {string} [description]
 */

/**
 * @typedef RawBreakup
 * @property {number} [coupon]
 * @property {number} [gst_charges]
 * @property {number} [mrp_total]
 * @property {number} [fynd_cash]
 * @property {number} [vog]
 * @property {number} [gift_card]
 * @property {number} [cod_charge]
 * @property {number} [total]
 * @property {number} [discount]
 * @property {number} [delivery_charge]
 * @property {number} [you_saved]
 * @property {number} [subtotal]
 * @property {number} [convenience_fee]
 */

/**
 * @typedef CartBreakup
 * @property {CouponBreakup} [coupon]
 * @property {DisplayBreakup[]} [display]
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {RawBreakup} [raw]
 */

/**
 * @typedef ProductImage
 * @property {string} [secure_url]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef Tags
 * @property {Object} [tags]
 */

/**
 * @typedef BaseInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug] - Contains list of product slug
 */

/**
 * @typedef ProductAction
 * @property {string} [type]
 * @property {string} [url]
 * @property {ActionQuery} [query]
 */

/**
 * @typedef CategoryInfo
 * @property {number} [uid] - Product Category Id
 * @property {string} [name]
 */

/**
 * @typedef CartProduct
 * @property {string} [slug] - Unique product url name generated via product
 *   name and other meta data
 * @property {ProductImage[]} [images]
 * @property {Tags} [teaser_tag]
 * @property {BaseInfo} [brand]
 * @property {ProductAction} [action]
 * @property {number} [uid]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [item_code]
 * @property {CategoryInfo[]} [categories]
 * @property {Object} [attributes]
 */

/**
 * @typedef BasePrice
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */

/**
 * @typedef StoreInfo
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [store_code]
 */

/**
 * @typedef ProductArticle
 * @property {string} [seller_identifier]
 * @property {number} [quantity]
 * @property {BaseInfo} [seller]
 * @property {Object} [cart_item_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {boolean} [is_gift_visible]
 * @property {string} [uid]
 * @property {Object} [gift_card]
 * @property {string[]} [product_group_tags]
 * @property {Object} [identifier]
 * @property {number} [mto_quantity]
 * @property {Object} [extra_meta]
 * @property {string} [type]
 * @property {Object} [_custom_json]
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [meta]
 * @property {string} [size]
 * @property {StoreInfo} [store]
 */

/**
 * @typedef Ownership2
 * @property {string} [payable_category] - Promo amount payable category
 * @property {string} [payable_by] - Promo amount bearable party
 */

/**
 * @typedef DiscountRulesApp
 * @property {Object} [offer] - Offer for promotion
 * @property {Object} [raw_offer] - Raw offer details for promotion
 * @property {Object} [item_criteria] - Item criteria of promotion
 * @property {string[]} [matched_buy_rules] - Matched buy rules for promotion
 */

/**
 * @typedef FreeGiftItem
 * @property {string} [item_name] - Item name
 * @property {Object} [item_price_details] - Item price details
 * @property {string} [item_brand_name] - Item brand name
 * @property {string[]} [item_images_url] - Item images URL
 * @property {number} [item_id] - Item id
 * @property {string} [item_slug] - Item slug
 */

/**
 * @typedef AppliedFreeArticles
 * @property {string} [parent_item_identifier] - Parent item identifier for free article
 * @property {number} [quantity] - Free article quantity
 * @property {string} [article_id] - Free article id
 * @property {FreeGiftItem} [free_gift_item_details] - Free gift items details
 */

/**
 * @typedef BuyRules
 * @property {Object} [cart_conditions] - Cart conditions details for promotion
 * @property {Object} [item_criteria] - Item criteria of promotion
 */

/**
 * @typedef AppliedPromotion
 * @property {number} [article_quantity] - Quantity of article on which
 *   promotion is applicable
 * @property {Ownership2} [ownership] - Ownership of promotion
 * @property {DiscountRulesApp[]} [discount_rules] - Discount rules for promotions
 * @property {AppliedFreeArticles[]} [applied_free_articles] - Applied free
 *   article for free gift item promotions
 * @property {string} [promotion_name] - Promotion name of current promotion
 * @property {BuyRules[]} [buy_rules] - Buy rules for promotions
 * @property {string} [offer_text] - Offer text of current promotion
 * @property {number} [amount] - Per unit discount amount applied with current promotion
 * @property {string} [promotion_type] - Promotion type of current promotion
 * @property {boolean} [mrp_promotion] - If applied promotion is applied on
 *   product MRP or ESP
 * @property {string} [promotion_group] - Promotion group for the promotion
 * @property {string} [promo_id] - Promotion id
 */

/**
 * @typedef PromiseFormatted
 * @property {string} [max]
 * @property {string} [min]
 */

/**
 * @typedef PromiseTimestamp
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef ShipmentPromise
 * @property {PromiseFormatted} [formatted]
 * @property {PromiseTimestamp} [timestamp]
 */

/**
 * @typedef CouponDetails
 * @property {number} [discount_total_quantity]
 * @property {number} [discount_single_quantity]
 * @property {string} [code]
 */

/**
 * @typedef ProductPrice
 * @property {number} [marked]
 * @property {number} [add_on]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {number} [selling]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier] - Article idenfier generated by cart
 */

/**
 * @typedef ProductAvailabilitySize
 * @property {string} [display]
 * @property {string} [value]
 * @property {boolean} [is_available]
 */

/**
 * @typedef ProductAvailability
 * @property {boolean} [is_valid]
 * @property {number} [other_store_quantity]
 * @property {boolean} [deliverable]
 * @property {ProductAvailabilitySize[]} [available_sizes]
 * @property {boolean} [out_of_stock]
 * @property {string[]} [sizes]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef CartProductInfo
 * @property {number} [quantity]
 * @property {CartProduct} [product]
 * @property {string} [product_ean_id]
 * @property {Object} [parent_item_identifiers]
 * @property {boolean} [is_set]
 * @property {ProductArticle} [article]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [key]
 * @property {CouponDetails} [coupon]
 * @property {Object} [bulk_offer]
 * @property {ProductPriceInfo} [price]
 * @property {string} [coupon_message]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [message]
 * @property {string} [discount]
 * @property {ProductAvailability} [availability]
 * @property {Object} [moq]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {PromoMeta} [promo_meta]
 * @property {Object} [custom_order]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {boolean} [is_valid]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {Object} [errors] - Contains field name which has error as key and
 *   error message as value
 */

/**
 * @typedef ShippingAddress
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {number} [phone]
 * @property {string} area_code
 * @property {string} [country_iso_code]
 * @property {string} [country_phone_code]
 * @property {Object} [meta]
 * @property {string} [address_type]
 * @property {string} [area]
 * @property {string} [area_code_slug]
 * @property {string} [name]
 * @property {string} [landmark]
 * @property {string} [email]
 * @property {string} [country_code]
 * @property {number} [pincode]
 * @property {string} [address]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {CartItem[]} cart_items
 * @property {ShippingAddress} shipping_address
 */

/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 */

/**
 * @typedef OpenApiFiles
 * @property {string} key
 * @property {string[]} values
 */

/**
 * @typedef CartItemMeta
 * @property {boolean} [primary_item]
 * @property {string} [group_id]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [payment_id]
 * @property {string} [payment_gateway]
 * @property {Object} [extra_meta]
 * @property {string} [current_status]
 * @property {string} [order_id]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} mode
 * @property {number} amount - Payment amount
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} [name] - Payment mode name
 */

/**
 * @typedef OpenApiOrderItem
 * @property {number} cashback_applied
 * @property {number} [quantity]
 * @property {string} size
 * @property {number} coupon_effective_discount
 * @property {number} amount_paid
 * @property {number} delivery_charges
 * @property {number} price_marked
 * @property {OpenApiFiles[]} [files]
 * @property {CartItemMeta} [meta]
 * @property {Object} [extra_meta]
 * @property {number} product_id
 * @property {number} [loyalty_discount]
 * @property {number} discount
 * @property {number} price_effective
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} [employee_discount]
 * @property {number} cod_charges
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [payment_mode]
 * @property {number} cart_value
 * @property {OpenApiOrderItem[]} cart_items
 * @property {ShippingAddress} [shipping_address]
 * @property {number} [loyalty_discount]
 * @property {string} [comment]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {Object} [employee_discount]
 * @property {string} [coupon]
 * @property {number} cashback_applied
 * @property {string} [gstin]
 * @property {ShippingAddress} billing_address
 * @property {string} coupon_code
 * @property {number} coupon_value
 * @property {number} delivery_charges
 * @property {string} [affiliate_order_id]
 * @property {string} [currency_code]
 * @property {string} [order_id]
 * @property {OpenApiFiles[]} [files]
 * @property {number} cod_charges
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} [order_ref_id] - Order id sent in request
 * @property {string} order_id - Fynd order id
 */

/**
 * @typedef AbandonedCart
 * @property {string} expire_at
 * @property {Object} [promotion]
 * @property {boolean} is_default
 * @property {string} [comment]
 * @property {Object[]} articles
 * @property {Object} [coupon]
 * @property {number} [bulk_coupon_discount]
 * @property {string} _id
 * @property {Object} [fynd_credits]
 * @property {number[]} [fc_index_map]
 * @property {string} [order_id]
 * @property {number} [discount]
 * @property {Object} [cod_charges]
 * @property {Object} [payments]
 * @property {string} [payment_mode]
 * @property {Object[]} [shipments]
 * @property {Object} [pick_up_customer_details]
 * @property {number} uid
 * @property {string} [checkout_mode]
 * @property {number} [cart_value]
 * @property {boolean} [is_archive]
 * @property {string} created_on
 * @property {string} last_modified
 * @property {Object} [meta]
 * @property {boolean} [buy_now]
 * @property {boolean} [is_active]
 * @property {Object} cashback
 * @property {Object[]} [payment_methods]
 * @property {string} [gstin]
 * @property {Object} [delivery_charges]
 * @property {boolean} [merge_qty]
 * @property {string} user_id
 * @property {string} [app_id]
 */

/**
 * @typedef AbandonedCartResponse
 * @property {AbandonedCart[]} [items]
 * @property {Object} [result]
 * @property {Page} [page]
 * @property {boolean} [success] - The request success is defined
 * @property {string} [message] - Message of the response
 */

/**
 * @typedef PaymentSelectionLock
 * @property {string} [payment_identifier]
 * @property {string} [default_options]
 * @property {boolean} [enabled]
 */

/**
 * @typedef CartCurrency
 * @property {string} [code] - Currency code defined by ISO 4217:2015
 * @property {string} [symbol]
 */

/**
 * @typedef CartDetailCoupon
 * @property {number} [cashback_amount]
 * @property {string} [cashback_message_primary]
 * @property {string} [cashback_message_secondary]
 * @property {string} [coupon_code]
 * @property {string} [coupon_description]
 * @property {string} [coupon_id]
 * @property {string} [coupon_subtitle]
 * @property {string} [coupon_title]
 * @property {string} [coupon_type]
 * @property {number} [coupon_value]
 * @property {number} [discount]
 * @property {boolean} [is_applied]
 * @property {boolean} [is_valid]
 * @property {number} [maximum_discount_value]
 * @property {string} [message]
 * @property {number} [minimum_cart_value]
 */

/**
 * @typedef ChargesThreshold
 * @property {number} [charges]
 * @property {number} [threshold]
 */

/**
 * @typedef DeliveryChargesConfig
 * @property {boolean} [enabled]
 * @property {ChargesThreshold[]} [charges]
 */

/**
 * @typedef CartCommonConfig
 * @property {DeliveryChargesConfig} [delivery_charges_config]
 */

/**
 * @typedef CartDetailResponse
 * @property {number} [cart_id]
 * @property {string} [uid]
 * @property {string} [coupon_text]
 * @property {string} [id]
 * @property {Object} [pan_config]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment]
 * @property {CartProductInfo[]} [items]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info]
 * @property {CartCommonConfig} [common_config]
 * @property {CartDetailCoupon} [coupon]
 * @property {boolean} [restrict_checkout]
 * @property {string} [message]
 * @property {Object} [notification]
 * @property {string} [staff_user_id]
 * @property {boolean} [success]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode]
 * @property {string} [last_modified]
 * @property {boolean} [buy_now]
 * @property {string} [gstin]
 * @property {AppliedPromotion[]} [applied_promo_details]
 * @property {string} [pan_no]
 */

/**
 * @typedef AddProductCart
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {number} [seller_id]
 * @property {Object[]} [parent_item_identifiers]
 * @property {string[]} [product_group_tags]
 * @property {string} [article_id]
 * @property {Object} [article_assignment]
 * @property {number} [store_id]
 * @property {string} [display]
 * @property {number} [item_id]
 * @property {Object} [extra_meta]
 * @property {Object} [_custom_json]
 * @property {Object} [meta]
 * @property {boolean} [pos]
 */

/**
 * @typedef AddCartRequest
 * @property {boolean} [new_cart]
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [success] - True if all items are added successfully.
 *   False if partially added or not added.
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [partial] - When adding multiple items check if all
 *   added. True if only few are added.
 * @property {string} [message]
 */

/**
 * @typedef UpdateProductCart
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {Object} [parent_item_identifiers]
 * @property {Object} [meta]
 * @property {Object} [extra_meta]
 * @property {Object} [_custom_json]
 * @property {number} [item_id]
 * @property {number} [item_index]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [article_id]
 */

/**
 * @typedef UpdateCartRequest
 * @property {UpdateProductCart[]} [items]
 * @property {string} operation
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {boolean} [success] - True if all items are added successfully.
 *   False if partially added or not added.
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 */

/**
 * @typedef OverrideCartItemPromo
 * @property {string} promo_id
 * @property {string} promo_amount
 * @property {string} [promo_desc]
 * @property {string} [rwrd_tndr]
 * @property {Object[]} [item_list]
 */

/**
 * @typedef OverrideCartItem
 * @property {string} [seller_identifier]
 * @property {number} [quantity]
 * @property {string} size
 * @property {number} price_marked
 * @property {number} amount_paid
 * @property {OverrideCartItemPromo[]} [promo_list]
 * @property {Object} [extra_meta]
 * @property {number} item_id
 * @property {number} discount
 * @property {number} price_effective
 */

/**
 * @typedef OverrideCheckoutReq
 * @property {string} cart_id
 * @property {string} payment_mode
 * @property {Object} [billing_address]
 * @property {string} merchant_code
 * @property {string} payment_identifier
 * @property {string} currency_code
 * @property {string} aggregator
 * @property {string} order_type
 * @property {OverrideCartItem[]} cart_items
 * @property {number} [ordering_store]
 * @property {Object} [shipping_address]
 */

/**
 * @typedef OverrideCheckoutResponse
 * @property {Object} data
 * @property {Object} cart
 * @property {string} success
 * @property {string} order_id
 * @property {string} message
 */

/**
 * @typedef GetShareCartLinkRequest
 * @property {string} [id] - Cart uid for generating sharing
 * @property {Object} [meta] - Staff, Ordering store or any other data. This
 *   data will be used to generate link as well as sent as shared details.
 */

/**
 * @typedef GetShareCartLinkResponse
 * @property {string} [token] - Short url unique id
 * @property {string} [share_url] - Short shareable final url
 */

/**
 * @typedef SharedCartDetails
 * @property {Object} [source] - Share link device and other source information
 * @property {Object} [user] - User details of who generated share link
 * @property {string} [token] - Short link id
 * @property {string} [created_on]
 * @property {Object} [meta] - Meta data sent while generating share cart link
 */

/**
 * @typedef SharedCart
 * @property {string} [coupon_text]
 * @property {string} [id]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment]
 * @property {CartProductInfo[]} [items]
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [restrict_checkout]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {string} [uid]
 * @property {string} [checkout_mode]
 * @property {CartCurrency} [currency]
 * @property {string} [last_modified]
 * @property {boolean} [buy_now]
 * @property {number} [cart_id]
 * @property {string} [gstin]
 */

/**
 * @typedef SharedCartResponse
 * @property {SharedCart} [cart]
 * @property {string} [error]
 */

/**
 * @typedef CartList
 * @property {string} [cart_id]
 * @property {Object} [pick_up_customer_details]
 * @property {number} [cart_value]
 * @property {string} [created_on]
 * @property {string} [user_id]
 * @property {number} [item_counts]
 */

/**
 * @typedef MultiCartResponse
 * @property {boolean} [success]
 * @property {CartList[]} [data]
 */

/**
 * @typedef UpdateUserCartMapping
 * @property {string} user_id
 */

/**
 * @typedef UserInfo
 * @property {string} [gender]
 * @property {string} [modified_on]
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {string} [external_id]
 * @property {string} [mobile]
 * @property {string} [last_name]
 * @property {string} [created_at]
 * @property {string} [first_name]
 */

/**
 * @typedef UserCartMappingResponse
 * @property {string} [coupon_text]
 * @property {UserInfo} [user]
 * @property {string} [id]
 * @property {Object} [pan_config]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment]
 * @property {CartProductInfo[]} [items]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [restrict_checkout]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode]
 * @property {string} [last_modified]
 * @property {boolean} [buy_now]
 * @property {string} [gstin]
 * @property {AppliedPromotion[]} [applied_promo_details]
 * @property {string} [pan_no]
 */

/**
 * @typedef PlatformAddCartRequest
 * @property {string} [user_id]
 * @property {boolean} [new_cart]
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef PlatformUpdateCartRequest
 * @property {string} [user_id]
 * @property {UpdateProductCart[]} [items]
 * @property {string} operation
 */

/**
 * @typedef DeleteCartRequest
 * @property {string[]} [cart_id_list]
 */

/**
 * @typedef DeleteCartDetailResponse
 * @property {boolean} [success] - True if cart is archived successfully. False
 *   if not archived.
 * @property {string} [message]
 */

/**
 * @typedef CartItemCountResponse
 * @property {number} [user_cart_items_count] - Item count present in cart
 */

/**
 * @typedef Coupon
 * @property {string} [title]
 * @property {number} [max_discount_value]
 * @property {string} [coupon_code]
 * @property {boolean} [is_applied]
 * @property {string} [coupon_type]
 * @property {string} [expires_on]
 * @property {number} [coupon_value]
 * @property {string} [sub_title]
 * @property {number} [minimum_cart_value]
 * @property {boolean} [is_applicable]
 * @property {string} [message]
 * @property {string} [description]
 */

/**
 * @typedef PageCoupon
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {number} [total]
 * @property {number} [total_item_count]
 * @property {boolean} [has_previous]
 */

/**
 * @typedef GetCouponResponse
 * @property {Coupon[]} [available_coupon_list]
 * @property {PageCoupon} [page]
 */

/**
 * @typedef ApplyCouponRequest
 * @property {string} coupon_code - Coupon code to be applied
 */

/**
 * @typedef GeoLocation
 * @property {number} [longitude]
 * @property {number} [latitude]
 */

/**
 * @typedef PlatformAddress
 * @property {string} [phone]
 * @property {string} [id]
 * @property {string} [area_code_slug]
 * @property {string} [country_code]
 * @property {GeoLocation} [geo_location]
 * @property {string} [country]
 * @property {string} [state]
 * @property {boolean} [is_default_address]
 * @property {string[]} [tags]
 * @property {string} [created_by_user_id]
 * @property {string} [landmark]
 * @property {string} [email]
 * @property {string} [area_code]
 * @property {string} [checkout_mode]
 * @property {Object} [meta]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {Object} [google_map_point]
 * @property {string} [cart_id]
 * @property {string} [city]
 * @property {string} [area]
 * @property {string} [user_id]
 * @property {string} [address_type]
 * @property {string} [address]
 */

/**
 * @typedef PlatformGetAddressesResponse
 * @property {PlatformAddress[]} [address]
 */

/**
 * @typedef SaveAddressResponse
 * @property {string} [id]
 * @property {boolean} [success]
 * @property {boolean} [is_default_address]
 */

/**
 * @typedef UpdateAddressResponse
 * @property {string} [id]
 * @property {boolean} [is_default_address]
 * @property {boolean} [success]
 * @property {boolean} [is_updated]
 */

/**
 * @typedef DeleteAddressResponse
 * @property {string} [id]
 * @property {boolean} [is_deleted]
 */

/**
 * @typedef PlatformSelectCartAddressRequest
 * @property {string} [cart_id]
 * @property {string} [billing_address_id]
 * @property {string} [checkout_mode]
 * @property {string} [id]
 * @property {string} [user_id]
 */

/**
 * @typedef ShipmentArticle
 * @property {string} [meta]
 * @property {string} [quantity]
 * @property {string} [article_id]
 */

/**
 * @typedef PlatformShipmentResponse
 * @property {number} [shipments]
 * @property {number} [fulfillment_id]
 * @property {CartProductInfo[]} [items]
 * @property {Object} [dp_options]
 * @property {string} [shipment_type]
 * @property {string} [order_type]
 * @property {string} [box_type]
 * @property {ShipmentPromise} [promise]
 * @property {string} [dp_id]
 * @property {string} [fulfillment_type]
 * @property {ShipmentArticle[]} [articles]
 */

/**
 * @typedef PlatformCartShipmentsResponse
 * @property {string} [coupon_text]
 * @property {string} [id]
 * @property {Object} [pan_config]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment]
 * @property {CartProductInfo[]} [items]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [restrict_checkout]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [staff_user_id]
 * @property {boolean} [is_valid]
 * @property {PlatformShipmentResponse[]} [shipments]
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode]
 * @property {string} [last_modified]
 * @property {boolean} [buy_now]
 * @property {string} [gstin]
 * @property {AppliedPromotion[]} [applied_promo_details]
 * @property {boolean} [error]
 * @property {string} [pan_no]
 */

/**
 * @typedef UpdateCartShipmentItem
 * @property {number} [quantity] - Quantity of product in shipment
 * @property {string} shipment_type - Shipment delivery type
 * @property {string} article_uid - Article mongo id
 */

/**
 * @typedef UpdateCartShipmentRequest
 * @property {UpdateCartShipmentItem[]} shipments
 */

/**
 * @typedef PlatformCartMetaRequest
 * @property {string} [gstin]
 * @property {Object} [pick_up_customer_details] - Customer contact details for
 *   customer pickup at store
 * @property {string} [checkout_mode]
 * @property {Object} [gift_details]
 * @property {string} [pan_no]
 * @property {string} [comment]
 * @property {string} [staff_user_id] - Staff user id
 */

/**
 * @typedef CartMetaResponse
 * @property {boolean} [is_valid]
 * @property {string} [message]
 */

/**
 * @typedef CartMetaMissingResponse
 * @property {string[]} [errors]
 */

/**
 * @typedef StaffCheckout
 * @property {string} [employee_code]
 * @property {string} _id
 * @property {string} user
 * @property {string} last_name
 * @property {string} first_name
 */

/**
 * @typedef CustomerDetails
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} mobile
 */

/**
 * @typedef Files
 * @property {string} key
 * @property {string[]} values
 */

/**
 * @typedef CartCheckoutCustomMeta
 * @property {string} key
 * @property {string} value
 */

/**
 * @typedef PlatformCartCheckoutDetailRequest
 * @property {CartCheckoutCustomMeta[]} [custom_meta]
 * @property {string} [address_id]
 * @property {string} [payment_identifier]
 * @property {Object} [payment_params]
 * @property {boolean} [payment_auto_confirm]
 * @property {string} id
 * @property {boolean} [pos]
 * @property {string} [billing_address_id]
 * @property {string} [merchant_code]
 * @property {string} [aggregator]
 * @property {number} [pick_at_store_uid]
 * @property {string} [device_id]
 * @property {Object} [delivery_address]
 * @property {string} payment_mode
 * @property {string} [checkout_mode]
 * @property {Object} [customer_details] - Customer details
 * @property {Object} [meta]
 * @property {StaffCheckout} [staff]
 * @property {string} [employee_code]
 * @property {Object} [billing_address]
 * @property {string} [callback_url]
 * @property {string} user_id
 * @property {Object} [extra_meta]
 * @property {string} order_type
 * @property {Files[]} [files] - List of file url
 * @property {number} [ordering_store]
 * @property {Object} [payment_extra_identifiers]
 */

/**
 * @typedef CheckCart
 * @property {string} [coupon_text]
 * @property {string} [cod_message]
 * @property {string} [id]
 * @property {string} [store_code]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment]
 * @property {string} [user_type]
 * @property {CartProductInfo[]} [items]
 * @property {string} [error_message]
 * @property {boolean} [success]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [restrict_checkout]
 * @property {string} [order_id]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {number} [cod_charges]
 * @property {boolean} [is_valid]
 * @property {string} [uid]
 * @property {string} [checkout_mode]
 * @property {CartCurrency} [currency]
 * @property {string} [last_modified]
 * @property {boolean} [buy_now]
 * @property {number} [delivery_charge_order_value]
 * @property {number} [cart_id]
 * @property {Object[]} [store_emps]
 * @property {string} [gstin]
 * @property {boolean} [cod_available]
 * @property {number} [delivery_charges]
 */

/**
 * @typedef CartCheckoutResponse
 * @property {string} [app_intercept_url]
 * @property {Object} [data]
 * @property {CheckCart} [cart]
 * @property {boolean} [success]
 * @property {string} [callback_url]
 * @property {string} [payment_confirm_url]
 * @property {string} [order_id]
 * @property {string} [message]
 */

/**
 * @typedef CartDeliveryModesResponse
 * @property {number[]} [pickup_stores] - Store pick up available store uids
 * @property {string[]} [available_modes] - Available delivery modes
 */

/**
 * @typedef PickupStoreDetail
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [phone]
 * @property {string} [area_code]
 * @property {number} [uid]
 * @property {string} [area_code_slug]
 * @property {string} [address_type]
 * @property {string} [area]
 * @property {number} [id]
 * @property {string} [store_manager_name]
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [landmark]
 * @property {string} [email]
 * @property {number} [pincode]
 * @property {string} [address]
 */

/**
 * @typedef StoreDetailsResponse
 * @property {PickupStoreDetail[]} [items]
 */

/**
 * @typedef UpdateCartPaymentRequest
 * @property {string} [address_id]
 * @property {string} [payment_mode]
 * @property {string} [aggregator_name]
 * @property {string} [merchant_code]
 * @property {string} [payment_identifier]
 * @property {string} [id]
 */

/**
 * @typedef CouponValidity
 * @property {string} [title]
 * @property {boolean} [next_validation_required]
 * @property {boolean} [valid]
 * @property {string} [display_message_en]
 * @property {string} [code]
 * @property {number} [discount]
 */

/**
 * @typedef PaymentCouponValidate
 * @property {boolean} success
 * @property {string} [message]
 * @property {CouponValidity} [coupon_validity]
 */

/**
 * @typedef PaymentMeta
 * @property {string} [payment_gateway]
 * @property {string} [type]
 * @property {string} [payment_identifier]
 * @property {string} [merchant_code]
 */

/**
 * @typedef PaymentMethod
 * @property {string} mode
 * @property {string} [payment]
 * @property {PaymentMeta} payment_meta
 * @property {number} [amount]
 * @property {string} [name]
 * @property {Object} [payment_extra_identifiers]
 */

/**
 * @typedef PlatformCartCheckoutDetailV2Request
 * @property {string} [address_id]
 * @property {string} [payment_identifier]
 * @property {Object} [payment_params]
 * @property {Object} [custom_meta]
 * @property {boolean} [payment_auto_confirm]
 * @property {string} id
 * @property {boolean} [pos]
 * @property {string} [billing_address_id]
 * @property {string} [merchant_code]
 * @property {string} [aggregator]
 * @property {number} [pick_at_store_uid]
 * @property {string} [device_id]
 * @property {Object} [delivery_address]
 * @property {string} [payment_mode]
 * @property {string} [checkout_mode]
 * @property {Object} [customer_details] - Customer details
 * @property {Object} [meta]
 * @property {PaymentMethod[]} payment_methods
 * @property {StaffCheckout} [staff]
 * @property {string} [employee_code]
 * @property {Object} [billing_address]
 * @property {string} [callback_url]
 * @property {string} user_id
 * @property {Object} [extra_meta]
 * @property {string} order_type
 * @property {Files[]} [files] - List of file url
 * @property {number} [ordering_store]
 */

/**
 * @typedef UpdateCartPaymentRequestV2
 * @property {string} [address_id]
 * @property {string} [payment_mode]
 * @property {string} [aggregator_name]
 * @property {string} [merchant_code]
 * @property {string} [payment_identifier]
 * @property {string} [id]
 * @property {PaymentMethod[]} [payment_methods]
 */

class CartPlatformModel {
  /** @returns {CouponDateMeta} */
  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),
      created_on: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Ownership} */
  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),
      payable_by: Joi.string().allow("").required(),
    });
  }

  /** @returns {CouponAuthor} */
  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),
      modified_by: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {State} */
  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),
      is_display: Joi.boolean(),
      is_public: Joi.boolean(),
    });
  }

  /** @returns {PaymentAllowValue} */
  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  /** @returns {PaymentModes} */
  static PaymentModes() {
    return Joi.object({
      codes: Joi.array().items(Joi.string().allow("")),
      iins: Joi.array().items(Joi.string().allow("")),
      types: Joi.array().items(Joi.string().allow("")),
      networks: Joi.array().items(Joi.string().allow("")),
      uses: CartPlatformModel.PaymentAllowValue(),
    });
  }

  /** @returns {PriceRange} */
  static PriceRange() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {PostOrder} */
  static PostOrder() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),
      return_allowed: Joi.boolean(),
    });
  }

  /** @returns {BulkBundleRestriction} */
  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  /** @returns {UsesRemaining} */
  static UsesRemaining() {
    return Joi.object({
      user: Joi.number(),
      total: Joi.number(),
      app: Joi.number(),
    });
  }

  /** @returns {UsesRestriction} */
  static UsesRestriction() {
    return Joi.object({
      maximum: CartPlatformModel.UsesRemaining(),
      remaining: CartPlatformModel.UsesRemaining(),
    });
  }

  /** @returns {Restrictions} */
  static Restrictions() {
    return Joi.object({
      payments: Joi.object().pattern(/\S/, CartPlatformModel.PaymentModes()),
      user_type: Joi.string().allow(""),
      price_range: CartPlatformModel.PriceRange(),
      platforms: Joi.array().items(Joi.string().allow("")),
      post_order: CartPlatformModel.PostOrder(),
      bulk_bundle: CartPlatformModel.BulkBundleRestriction(),
      user_groups: Joi.array().items(Joi.number()),
      coupon_allowed: Joi.boolean(),
      uses: CartPlatformModel.UsesRestriction(),
      ordering_stores: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {Validation} */
  static Validation() {
    return Joi.object({
      app_id: Joi.array().items(Joi.string().allow("")),
      anonymous: Joi.boolean(),
      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CouponAction} */
  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),
      txn_mode: Joi.string().allow(""),
    });
  }

  /** @returns {CouponSchedule} */
  static CouponSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),
      start: Joi.string().allow(""),
      next_schedule: Joi.array().items(Joi.any()),
      cron: Joi.string().allow("").allow(null),
      duration: Joi.number().allow(null),
    });
  }

  /** @returns {Rule} */
  static Rule() {
    return Joi.object({
      key: Joi.number(),
      value: Joi.number(),
      max: Joi.number(),
      discount_qty: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {DisplayMetaDict} */
  static DisplayMetaDict() {
    return Joi.object({
      title: Joi.string().allow(""),
      subtitle: Joi.string().allow(""),
    });
  }

  /** @returns {DisplayMeta} */
  static DisplayMeta() {
    return Joi.object({
      title: Joi.string().allow(""),
      auto: CartPlatformModel.DisplayMetaDict(),
      apply: CartPlatformModel.DisplayMetaDict(),
      remove: CartPlatformModel.DisplayMetaDict(),
      subtitle: Joi.string().allow(""),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {Identifier} */
  static Identifier() {
    return Joi.object({
      brand_id: Joi.array().items(Joi.number()),
      email_domain: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.array().items(Joi.number()),
      store_id: Joi.array().items(Joi.number()),
      collection_id: Joi.array().items(Joi.string().allow("")),
      item_id: Joi.array().items(Joi.number()),
      user_id: Joi.array().items(Joi.string().allow("")),
      category_id: Joi.array().items(Joi.number()),
      article_id: Joi.array().items(Joi.string().allow("")),
      exclude_brand_id: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {Validity} */
  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  /** @returns {RuleDefinition} */
  static RuleDefinition() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      auto_apply: Joi.boolean(),
      type: Joi.string().allow("").required(),
      is_exact: Joi.boolean(),
      applicable_on: Joi.string().allow("").required(),
      calculate_on: Joi.string().allow("").required(),
      value_type: Joi.string().allow("").required(),
      scope: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CouponAdd} */
  static CouponAdd() {
    return Joi.object({
      date_meta: CartPlatformModel.CouponDateMeta(),
      ownership: CartPlatformModel.Ownership().required(),
      author: CartPlatformModel.CouponAuthor(),
      state: CartPlatformModel.State(),
      restrictions: CartPlatformModel.Restrictions(),
      validation: CartPlatformModel.Validation(),
      action: CartPlatformModel.CouponAction(),
      tags: Joi.array().items(Joi.string().allow("")),
      _schedule: CartPlatformModel.CouponSchedule(),
      rule: Joi.array().items(CartPlatformModel.Rule()).required(),
      display_meta: CartPlatformModel.DisplayMeta().required(),
      code: Joi.string().allow("").required(),
      type_slug: Joi.string().allow("").required(),
      identifiers: CartPlatformModel.Identifier().required(),
      validity: CartPlatformModel.Validity().required(),
      rule_definition: CartPlatformModel.RuleDefinition().required(),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {Page} */
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

  /** @returns {CouponsResponse} */
  static CouponsResponse() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.CouponAdd()),
      page: CartPlatformModel.Page(),
    });
  }

  /** @returns {SuccessMessage} */
  static SuccessMessage() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {OperationErrorResponse} */
  static OperationErrorResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CouponUpdate} */
  static CouponUpdate() {
    return Joi.object({
      date_meta: CartPlatformModel.CouponDateMeta(),
      ownership: CartPlatformModel.Ownership().required(),
      author: CartPlatformModel.CouponAuthor(),
      state: CartPlatformModel.State(),
      restrictions: CartPlatformModel.Restrictions(),
      validation: CartPlatformModel.Validation(),
      action: CartPlatformModel.CouponAction(),
      tags: Joi.array().items(Joi.string().allow("")),
      _schedule: CartPlatformModel.CouponSchedule(),
      rule: Joi.array().items(CartPlatformModel.Rule()).required(),
      display_meta: CartPlatformModel.DisplayMeta().required(),
      code: Joi.string().allow("").required(),
      type_slug: Joi.string().allow("").required(),
      identifiers: CartPlatformModel.Identifier().required(),
      validity: CartPlatformModel.Validity().required(),
      rule_definition: CartPlatformModel.RuleDefinition().required(),
    });
  }

  /** @returns {CouponPartialUpdate} */
  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),
      schedule: CartPlatformModel.CouponSchedule(),
    });
  }

  /** @returns {DisplayMeta1} */
  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),
      offer_label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      offer_text: Joi.string().allow(""),
    });
  }

  /** @returns {Ownership1} */
  static Ownership1() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),
      payable_by: Joi.string().allow("").required(),
    });
  }

  /** @returns {CompareObject} */
  static CompareObject() {
    return Joi.object({
      equals: Joi.number(),
      greater_than: Joi.number(),
      less_than_equals: Joi.number(),
      less_than: Joi.number(),
      greater_than_equals: Joi.number(),
    });
  }

  /** @returns {ItemCriteria} */
  static ItemCriteria() {
    return Joi.object({
      cart_quantity: CartPlatformModel.CompareObject(),
      available_zones: Joi.array().items(Joi.string().allow("")),
      item_exclude_company: Joi.array().items(Joi.number()),
      item_id: Joi.array().items(Joi.number()),
      item_l1_category: Joi.array().items(Joi.number()),
      cart_total: CartPlatformModel.CompareObject(),
      cart_unique_item_quantity: CartPlatformModel.CompareObject(),
      cart_unique_item_amount: CartPlatformModel.CompareObject(),
      item_exclude_id: Joi.array().items(Joi.number()),
      all_items: Joi.boolean(),
      item_exclude_l1_category: Joi.array().items(Joi.number()),
      item_size: Joi.array().items(Joi.string().allow("")),
      item_store: Joi.array().items(Joi.number()),
      item_exclude_sku: Joi.array().items(Joi.string().allow("")),
      item_department: Joi.array().items(Joi.number()),
      item_exclude_store: Joi.array().items(Joi.number()),
      item_brand: Joi.array().items(Joi.number()),
      item_exclude_department: Joi.array().items(Joi.number()),
      item_exclude_category: Joi.array().items(Joi.number()),
      item_category: Joi.array().items(Joi.number()),
      buy_rules: Joi.array().items(Joi.string().allow("")),
      item_exclude_brand: Joi.array().items(Joi.number()),
      item_l2_category: Joi.array().items(Joi.number()),
      item_company: Joi.array().items(Joi.number()),
      item_tags: Joi.array().items(Joi.string().allow("")),
      item_exclude_l2_category: Joi.array().items(Joi.number()),
      item_sku: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {DiscountOffer} */
  static DiscountOffer() {
    return Joi.object({
      max_discount_amount: Joi.number(),
      discount_price: Joi.number(),
      apportion_discount: Joi.boolean(),
      partial_can_ret: Joi.boolean(),
      max_usage_per_transaction: Joi.number(),
      min_offer_quantity: Joi.number(),
      code: Joi.string().allow(""),
      discount_amount: Joi.number(),
      discount_percentage: Joi.number(),
      max_offer_quantity: Joi.number(),
    });
  }

  /** @returns {DiscountRule} */
  static DiscountRule() {
    return Joi.object({
      discount_type: Joi.string().allow("").required(),
      buy_condition: Joi.string().allow("").required(),
      item_criteria: CartPlatformModel.ItemCriteria().required(),
      offer: CartPlatformModel.DiscountOffer().required(),
    });
  }

  /** @returns {PaymentAllowValue1} */
  static PaymentAllowValue1() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  /** @returns {PromotionPaymentModes} */
  static PromotionPaymentModes() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      uses: CartPlatformModel.PaymentAllowValue1(),
      codes: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {UserRegistered} */
  static UserRegistered() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),
      start: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PostOrder1} */
  static PostOrder1() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),
      return_allowed: Joi.boolean(),
    });
  }

  /** @returns {UsesRemaining1} */
  static UsesRemaining1() {
    return Joi.object({
      user: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {UsesRestriction1} */
  static UsesRestriction1() {
    return Joi.object({
      maximum: CartPlatformModel.UsesRemaining1(),
      remaining: CartPlatformModel.UsesRemaining1(),
    });
  }

  /** @returns {Restrictions1} */
  static Restrictions1() {
    return Joi.object({
      payments: Joi.array().items(CartPlatformModel.PromotionPaymentModes()),
      user_registered: Joi.any().allow(null),
      platforms: Joi.array().items(Joi.string().allow("")),
      post_order: CartPlatformModel.PostOrder1(),
      user_groups: Joi.array().items(Joi.number()),
      order_quantity: Joi.number(),
      anonymous_users: Joi.boolean(),
      user_id: Joi.array().items(Joi.string().allow("")),
      uses: CartPlatformModel.UsesRestriction1().required(),
      ordering_stores: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {PromotionSchedule} */
  static PromotionSchedule() {
    return Joi.object({
      end: Joi.string().allow("").required(),
      start: Joi.string().allow("").required(),
      published: Joi.boolean().required(),
      next_schedule: Joi.array().items(Joi.any()),
      cron: Joi.string().allow("").allow(null),
      duration: Joi.number().allow(null),
    });
  }

  /** @returns {PromotionAction} */
  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),
      action_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PromotionAuthor} */
  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),
      modified_by: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Visibility} */
  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),
      pdp: Joi.boolean().required(),
    });
  }

  /** @returns {PromotionDateMeta} */
  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),
      created_on: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PromotionListItem} */
  static PromotionListItem() {
    return Joi.object({
      stackable: Joi.boolean(),
      calculate_on: Joi.string().allow(""),
      apply_exclusive: Joi.string().allow("").allow(null),
      promo_group: Joi.string().allow("").required(),
      mode: Joi.string().allow("").required(),
      apply_all_discount: Joi.boolean(),
      display_meta: CartPlatformModel.DisplayMeta1().required(),
      ownership: CartPlatformModel.Ownership1().required(),
      promotion_type: Joi.string().allow("").required(),
      discount_rules: Joi.array()
        .items(CartPlatformModel.DiscountRule())
        .required(),
      restrictions: CartPlatformModel.Restrictions1(),
      currency: Joi.string().allow(""),
      code: Joi.string().allow(""),
      _schedule: CartPlatformModel.PromotionSchedule(),
      post_order_action: CartPlatformModel.PromotionAction(),
      apply_priority: Joi.number(),
      author: CartPlatformModel.PromotionAuthor(),
      visiblility: CartPlatformModel.Visibility(),
      application_id: Joi.string().allow("").required(),
      buy_rules: Joi.object()
        .pattern(/\S/, CartPlatformModel.ItemCriteria())
        .required(),
      _custom_json: Joi.any(),
      date_meta: CartPlatformModel.PromotionDateMeta(),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {PromotionsResponse} */
  static PromotionsResponse() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.PromotionListItem()),
      page: CartPlatformModel.Page(),
    });
  }

  /** @returns {PromotionAdd} */
  static PromotionAdd() {
    return Joi.object({
      stackable: Joi.boolean(),
      calculate_on: Joi.string().allow(""),
      apply_exclusive: Joi.string().allow("").allow(null),
      promo_group: Joi.string().allow("").required(),
      mode: Joi.string().allow("").required(),
      apply_all_discount: Joi.boolean(),
      display_meta: CartPlatformModel.DisplayMeta1().required(),
      ownership: CartPlatformModel.Ownership1().required(),
      promotion_type: Joi.string().allow("").required(),
      discount_rules: Joi.array()
        .items(CartPlatformModel.DiscountRule())
        .required(),
      restrictions: CartPlatformModel.Restrictions1(),
      currency: Joi.string().allow(""),
      code: Joi.string().allow(""),
      _schedule: CartPlatformModel.PromotionSchedule(),
      post_order_action: CartPlatformModel.PromotionAction(),
      apply_priority: Joi.number(),
      author: CartPlatformModel.PromotionAuthor(),
      visiblility: CartPlatformModel.Visibility(),
      application_id: Joi.string().allow("").required(),
      buy_rules: Joi.object()
        .pattern(/\S/, CartPlatformModel.ItemCriteria())
        .required(),
      _custom_json: Joi.any(),
      date_meta: CartPlatformModel.PromotionDateMeta(),
    });
  }

  /** @returns {PromotionUpdate} */
  static PromotionUpdate() {
    return Joi.object({
      stackable: Joi.boolean(),
      calculate_on: Joi.string().allow(""),
      apply_exclusive: Joi.string().allow("").allow(null),
      promo_group: Joi.string().allow("").required(),
      mode: Joi.string().allow("").required(),
      apply_all_discount: Joi.boolean(),
      display_meta: CartPlatformModel.DisplayMeta1().required(),
      ownership: CartPlatformModel.Ownership1().required(),
      promotion_type: Joi.string().allow("").required(),
      discount_rules: Joi.array()
        .items(CartPlatformModel.DiscountRule())
        .required(),
      restrictions: CartPlatformModel.Restrictions1(),
      currency: Joi.string().allow(""),
      code: Joi.string().allow(""),
      _schedule: CartPlatformModel.PromotionSchedule(),
      post_order_action: CartPlatformModel.PromotionAction(),
      apply_priority: Joi.number(),
      author: CartPlatformModel.PromotionAuthor(),
      visiblility: CartPlatformModel.Visibility(),
      application_id: Joi.string().allow("").required(),
      buy_rules: Joi.object()
        .pattern(/\S/, CartPlatformModel.ItemCriteria())
        .required(),
      _custom_json: Joi.any(),
      date_meta: CartPlatformModel.PromotionDateMeta(),
    });
  }

  /** @returns {PromotionPartialUpdate} */
  static PromotionPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),
      schedule: CartPlatformModel.PromotionSchedule(),
    });
  }

  /** @returns {ActivePromosResponse} */
  static ActivePromosResponse() {
    return Joi.object({
      entity_slug: Joi.string().allow(""),
      title: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      example: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      is_hidden: Joi.boolean(),
      type: Joi.string().allow(""),
      subtitle: Joi.string().allow(""),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {Charges} */
  static Charges() {
    return Joi.object({
      charges: Joi.number(),
      threshold: Joi.number(),
    });
  }

  /** @returns {DeliveryCharges} */
  static DeliveryCharges() {
    return Joi.object({
      charges: Joi.array().items(CartPlatformModel.Charges()),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {CartMetaConfigUpdate} */
  static CartMetaConfigUpdate() {
    return Joi.object({
      min_cart_value: Joi.number(),
      bulk_coupons: Joi.boolean(),
      max_cart_items: Joi.number(),
      gift_display_text: Joi.string().allow(""),
      delivery_charges: CartPlatformModel.DeliveryCharges(),
      revenue_engine_coupon: Joi.boolean(),
      gift_pricing: Joi.number(),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {CartMetaConfigAdd} */
  static CartMetaConfigAdd() {
    return Joi.object({
      min_cart_value: Joi.number(),
      bulk_coupons: Joi.boolean(),
      max_cart_items: Joi.number(),
      gift_display_text: Joi.string().allow(""),
      delivery_charges: CartPlatformModel.DeliveryCharges(),
      revenue_engine_coupon: Joi.boolean(),
      gift_pricing: Joi.number(),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {Article} */
  static Article() {
    return Joi.object({
      value: Joi.number(),
      code: Joi.string().allow(""),
      type: Joi.string().allow(""),
      article_id: Joi.string().allow("").required(),
      quantity: Joi.number(),
      meta: Joi.any(),
    });
  }

  /** @returns {Collection} */
  static Collection() {
    return Joi.object({
      refund_by: Joi.string().allow("").required(),
      collected_by: Joi.string().allow("").required(),
    });
  }

  /** @returns {PriceAdjustmentUpdate} */
  static PriceAdjustmentUpdate() {
    return Joi.object({
      modified_by: Joi.string().allow(""),
      value: Joi.number().required(),
      message: Joi.string().allow("").required(),
      apply_expiry: Joi.string().allow(""),
      article_level_distribution: Joi.boolean().required(),
      collection: CartPlatformModel.Collection().required(),
      type: Joi.string().allow("").required(),
      allowed_refund: Joi.boolean(),
      is_authenticated: Joi.boolean().required(),
      article_ids: Joi.array().items(CartPlatformModel.Article()).required(),
      meta: Joi.any(),
      cart_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {PriceAdjustment} */
  static PriceAdjustment() {
    return Joi.object({
      value: Joi.number().required(),
      message: Joi.string().allow("").required(),
      apply_expiry: Joi.string().allow(""),
      article_level_distribution: Joi.boolean().required(),
      id: Joi.string().allow(""),
      collection: CartPlatformModel.Collection().required(),
      type: Joi.string().allow("").required(),
      allowed_refund: Joi.boolean(),
      is_authenticated: Joi.boolean().required(),
      article_ids: Joi.array().items(CartPlatformModel.Article()).required(),
      meta: Joi.any(),
      cart_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {PriceAdjustmentResponse} */
  static PriceAdjustmentResponse() {
    return Joi.object({
      data: CartPlatformModel.PriceAdjustment(),
    });
  }

  /** @returns {PriceAdjustmentAdd} */
  static PriceAdjustmentAdd() {
    return Joi.object({
      value: Joi.number().required(),
      message: Joi.string().allow("").required(),
      apply_expiry: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      article_level_distribution: Joi.boolean().required(),
      collection: CartPlatformModel.Collection().required(),
      type: Joi.string().allow("").required(),
      allowed_refund: Joi.boolean(),
      is_authenticated: Joi.boolean().required(),
      article_ids: Joi.array().items(CartPlatformModel.Article()).required(),
      meta: Joi.any(),
      cart_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CartItem} */
  static CartItem() {
    return Joi.object({
      quantity: Joi.number(),
      product_id: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
    });
  }

  /** @returns {OpenapiCartDetailsRequest} */
  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: Joi.array().items(CartPlatformModel.CartItem()).required(),
    });
  }

  /** @returns {CouponBreakup} */
  static CouponBreakup() {
    return Joi.object({
      title: Joi.string().allow("").allow(null),
      max_discount_value: Joi.number(),
      value: Joi.number(),
      is_applied: Joi.boolean(),
      uid: Joi.string().allow(""),
      coupon_type: Joi.string().allow("").allow(null),
      sub_title: Joi.string().allow("").allow(null),
      coupon_value: Joi.number(),
      code: Joi.string().allow(""),
      type: Joi.string().allow(""),
      minimum_cart_value: Joi.number(),
      message: Joi.string().allow(""),
      description: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {DisplayBreakup} */
  static DisplayBreakup() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      display: Joi.string().allow(""),
      message: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {LoyaltyPoints} */
  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean(),
      total: Joi.number(),
      applicable: Joi.number(),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {RawBreakup} */
  static RawBreakup() {
    return Joi.object({
      coupon: Joi.number(),
      gst_charges: Joi.number(),
      mrp_total: Joi.number(),
      fynd_cash: Joi.number(),
      vog: Joi.number(),
      gift_card: Joi.number(),
      cod_charge: Joi.number(),
      total: Joi.number(),
      discount: Joi.number(),
      delivery_charge: Joi.number(),
      you_saved: Joi.number(),
      subtotal: Joi.number(),
      convenience_fee: Joi.number(),
    });
  }

  /** @returns {CartBreakup} */
  static CartBreakup() {
    return Joi.object({
      coupon: CartPlatformModel.CouponBreakup(),
      display: Joi.array().items(CartPlatformModel.DisplayBreakup()),
      loyalty_points: CartPlatformModel.LoyaltyPoints(),
      raw: CartPlatformModel.RawBreakup(),
    });
  }

  /** @returns {ProductImage} */
  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
      url: Joi.string().allow(""),
      aspect_ratio: Joi.string().allow(""),
    });
  }

  /** @returns {Tags} */
  static Tags() {
    return Joi.object({
      tags: Joi.any(),
    });
  }

  /** @returns {BaseInfo} */
  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ActionQuery} */
  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ProductAction} */
  static ProductAction() {
    return Joi.object({
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
      query: CartPlatformModel.ActionQuery(),
    });
  }

  /** @returns {CategoryInfo} */
  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {CartProduct} */
  static CartProduct() {
    return Joi.object({
      slug: Joi.string().allow(""),
      images: Joi.array().items(CartPlatformModel.ProductImage()),
      teaser_tag: CartPlatformModel.Tags(),
      brand: CartPlatformModel.BaseInfo(),
      action: CartPlatformModel.ProductAction(),
      uid: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
      _custom_json: Joi.any(),
      type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      item_code: Joi.string().allow("").allow(null),
      categories: Joi.array().items(CartPlatformModel.CategoryInfo()),
      attributes: Joi.any(),
    });
  }

  /** @returns {BasePrice} */
  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      marked: Joi.number(),
    });
  }

  /** @returns {ArticlePriceInfo} */
  static ArticlePriceInfo() {
    return Joi.object({
      converted: CartPlatformModel.BasePrice(),
      base: CartPlatformModel.BasePrice(),
    });
  }

  /** @returns {StoreInfo} */
  static StoreInfo() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
    });
  }

  /** @returns {ProductArticle} */
  static ProductArticle() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),
      quantity: Joi.number(),
      seller: CartPlatformModel.BaseInfo(),
      cart_item_meta: Joi.any(),
      parent_item_identifiers: Joi.any(),
      is_gift_visible: Joi.boolean(),
      uid: Joi.string().allow(""),
      gift_card: Joi.any(),
      product_group_tags: Joi.array().items(Joi.string().allow("")),
      identifier: Joi.any(),
      mto_quantity: Joi.number(),
      extra_meta: Joi.any(),
      type: Joi.string().allow(""),
      _custom_json: Joi.any(),
      price: CartPlatformModel.ArticlePriceInfo(),
      meta: Joi.any(),
      size: Joi.string().allow(""),
      store: CartPlatformModel.StoreInfo(),
    });
  }

  /** @returns {Ownership2} */
  static Ownership2() {
    return Joi.object({
      payable_category: Joi.string().allow(""),
      payable_by: Joi.string().allow(""),
    });
  }

  /** @returns {DiscountRulesApp} */
  static DiscountRulesApp() {
    return Joi.object({
      offer: Joi.any(),
      raw_offer: Joi.any(),
      item_criteria: Joi.any(),
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {FreeGiftItem} */
  static FreeGiftItem() {
    return Joi.object({
      item_name: Joi.string().allow(""),
      item_price_details: Joi.any(),
      item_brand_name: Joi.string().allow(""),
      item_images_url: Joi.array().items(Joi.string().allow("")),
      item_id: Joi.number(),
      item_slug: Joi.string().allow(""),
    });
  }

  /** @returns {AppliedFreeArticles} */
  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),
      quantity: Joi.number(),
      article_id: Joi.string().allow(""),
      free_gift_item_details: CartPlatformModel.FreeGiftItem(),
    });
  }

  /** @returns {BuyRules} */
  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),
      item_criteria: Joi.any(),
    });
  }

  /** @returns {AppliedPromotion} */
  static AppliedPromotion() {
    return Joi.object({
      article_quantity: Joi.number(),
      ownership: CartPlatformModel.Ownership2(),
      discount_rules: Joi.array().items(CartPlatformModel.DiscountRulesApp()),
      applied_free_articles: Joi.array().items(
        CartPlatformModel.AppliedFreeArticles()
      ),
      promotion_name: Joi.string().allow(""),
      buy_rules: Joi.array().items(CartPlatformModel.BuyRules()),
      offer_text: Joi.string().allow(""),
      amount: Joi.number(),
      promotion_type: Joi.string().allow(""),
      mrp_promotion: Joi.boolean(),
      promotion_group: Joi.string().allow(""),
      promo_id: Joi.string().allow(""),
    });
  }

  /** @returns {PromiseFormatted} */
  static PromiseFormatted() {
    return Joi.object({
      max: Joi.string().allow(""),
      min: Joi.string().allow(""),
    });
  }

  /** @returns {PromiseTimestamp} */
  static PromiseTimestamp() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {ShipmentPromise} */
  static ShipmentPromise() {
    return Joi.object({
      formatted: CartPlatformModel.PromiseFormatted(),
      timestamp: CartPlatformModel.PromiseTimestamp(),
    });
  }

  /** @returns {CouponDetails} */
  static CouponDetails() {
    return Joi.object({
      discount_total_quantity: Joi.number(),
      discount_single_quantity: Joi.number(),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {ProductPrice} */
  static ProductPrice() {
    return Joi.object({
      marked: Joi.number(),
      add_on: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      effective: Joi.number(),
      selling: Joi.number(),
    });
  }

  /** @returns {ProductPriceInfo} */
  static ProductPriceInfo() {
    return Joi.object({
      converted: CartPlatformModel.ProductPrice(),
      base: CartPlatformModel.ProductPrice(),
    });
  }

  /** @returns {CartProductIdentifer} */
  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  /** @returns {ProductAvailabilitySize} */
  static ProductAvailabilitySize() {
    return Joi.object({
      display: Joi.string().allow(""),
      value: Joi.string().allow(""),
      is_available: Joi.boolean(),
    });
  }

  /** @returns {ProductAvailability} */
  static ProductAvailability() {
    return Joi.object({
      is_valid: Joi.boolean(),
      other_store_quantity: Joi.number(),
      deliverable: Joi.boolean(),
      available_sizes: Joi.array().items(
        CartPlatformModel.ProductAvailabilitySize()
      ),
      out_of_stock: Joi.boolean(),
      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PromoMeta} */
  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CartProductInfo} */
  static CartProductInfo() {
    return Joi.object({
      quantity: Joi.number(),
      product: CartPlatformModel.CartProduct(),
      product_ean_id: Joi.string().allow(""),
      parent_item_identifiers: Joi.any(),
      is_set: Joi.boolean(),
      article: CartPlatformModel.ProductArticle(),
      promotions_applied: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      key: Joi.string().allow(""),
      coupon: CartPlatformModel.CouponDetails(),
      bulk_offer: Joi.any(),
      price: CartPlatformModel.ProductPriceInfo(),
      coupon_message: Joi.string().allow(""),
      identifiers: CartPlatformModel.CartProductIdentifer().required(),
      message: Joi.string().allow(""),
      discount: Joi.string().allow(""),
      availability: CartPlatformModel.ProductAvailability(),
      moq: Joi.any(),
      price_per_unit: CartPlatformModel.ProductPriceInfo(),
      promo_meta: CartPlatformModel.PromoMeta(),
      custom_order: Joi.any(),
    });
  }

  /** @returns {OpenapiCartDetailsResponse} */
  static OpenapiCartDetailsResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),
      message: Joi.string().allow(""),
      breakup_values: CartPlatformModel.CartBreakup(),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
    });
  }

  /** @returns {OpenApiErrorResponse} */
  static OpenApiErrorResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      errors: Joi.any(),
    });
  }

  /** @returns {ShippingAddress} */
  static ShippingAddress() {
    return Joi.object({
      country: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
      phone: Joi.number(),
      area_code: Joi.string().allow("").required(),
      country_iso_code: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      meta: Joi.any(),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      area_code_slug: Joi.string().allow(""),
      name: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      email: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      pincode: Joi.number(),
      address: Joi.string().allow(""),
    });
  }

  /** @returns {OpenApiCartServiceabilityRequest} */
  static OpenApiCartServiceabilityRequest() {
    return Joi.object({
      cart_items: Joi.array().items(CartPlatformModel.CartItem()).required(),
      shipping_address: CartPlatformModel.ShippingAddress().required(),
    });
  }

  /** @returns {OpenApiCartServiceabilityResponse} */
  static OpenApiCartServiceabilityResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      message: Joi.string().allow(""),
      breakup_values: CartPlatformModel.CartBreakup(),
    });
  }

  /** @returns {OpenApiFiles} */
  static OpenApiFiles() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {CartItemMeta} */
  static CartItemMeta() {
    return Joi.object({
      primary_item: Joi.boolean(),
      group_id: Joi.string().allow(""),
    });
  }

  /** @returns {MultiTenderPaymentMeta} */
  static MultiTenderPaymentMeta() {
    return Joi.object({
      payment_id: Joi.string().allow("").allow(null),
      payment_gateway: Joi.string().allow("").allow(null),
      extra_meta: Joi.any().allow(null),
      current_status: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {MultiTenderPaymentMethod} */
  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      meta: CartPlatformModel.MultiTenderPaymentMeta(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {OpenApiOrderItem} */
  static OpenApiOrderItem() {
    return Joi.object({
      cashback_applied: Joi.number().required(),
      quantity: Joi.number(),
      size: Joi.string().allow("").required(),
      coupon_effective_discount: Joi.number().required(),
      amount_paid: Joi.number().required(),
      delivery_charges: Joi.number().required(),
      price_marked: Joi.number().required(),
      files: Joi.array().items(CartPlatformModel.OpenApiFiles()),
      meta: CartPlatformModel.CartItemMeta(),
      extra_meta: Joi.any(),
      product_id: Joi.number().required(),
      loyalty_discount: Joi.number(),
      discount: Joi.number().required(),
      price_effective: Joi.number().required(),
      payment_methods: Joi.array()
        .items(CartPlatformModel.MultiTenderPaymentMethod())
        .required(),
      employee_discount: Joi.number(),
      cod_charges: Joi.number().required(),
    });
  }

  /** @returns {OpenApiPlatformCheckoutReq} */
  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),
      cart_value: Joi.number().required(),
      cart_items: Joi.array()
        .items(CartPlatformModel.OpenApiOrderItem())
        .required(),
      shipping_address: CartPlatformModel.ShippingAddress(),
      loyalty_discount: Joi.number(),
      comment: Joi.string().allow("").allow(null),
      payment_methods: Joi.array()
        .items(CartPlatformModel.MultiTenderPaymentMethod())
        .required(),
      employee_discount: Joi.any(),
      coupon: Joi.string().allow(""),
      cashback_applied: Joi.number().required(),
      gstin: Joi.string().allow("").allow(null),
      billing_address: CartPlatformModel.ShippingAddress().required(),
      coupon_code: Joi.string().allow("").required(),
      coupon_value: Joi.number().required(),
      delivery_charges: Joi.number().required(),
      affiliate_order_id: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      files: Joi.array().items(CartPlatformModel.OpenApiFiles()),
      cod_charges: Joi.number().required(),
    });
  }

  /** @returns {OpenApiCheckoutResponse} */
  static OpenApiCheckoutResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      order_ref_id: Joi.string().allow(""),
      order_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {AbandonedCart} */
  static AbandonedCart() {
    return Joi.object({
      expire_at: Joi.string().allow("").required(),
      promotion: Joi.any(),
      is_default: Joi.boolean().required(),
      comment: Joi.string().allow("").allow(null),
      articles: Joi.array().items(Joi.any()).required(),
      coupon: Joi.any().allow(null),
      bulk_coupon_discount: Joi.number().allow(null),
      _id: Joi.string().allow("").required(),
      fynd_credits: Joi.any(),
      fc_index_map: Joi.array().items(Joi.number()),
      order_id: Joi.string().allow(""),
      discount: Joi.number(),
      cod_charges: Joi.any(),
      payments: Joi.any().allow(null),
      payment_mode: Joi.string().allow("").allow(null),
      shipments: Joi.array().items(Joi.any()),
      pick_up_customer_details: Joi.any().allow(null),
      uid: Joi.number().required(),
      checkout_mode: Joi.string().allow(""),
      cart_value: Joi.number(),
      is_archive: Joi.boolean(),
      created_on: Joi.string().allow("").required(),
      last_modified: Joi.string().allow("").required(),
      meta: Joi.any().allow(null),
      buy_now: Joi.boolean(),
      is_active: Joi.boolean(),
      cashback: Joi.any().required(),
      payment_methods: Joi.array().items(Joi.any()),
      gstin: Joi.string().allow("").allow(null),
      delivery_charges: Joi.any(),
      merge_qty: Joi.boolean().allow(null),
      user_id: Joi.string().allow("").required(),
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {AbandonedCartResponse} */
  static AbandonedCartResponse() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.AbandonedCart()),
      result: Joi.any(),
      page: CartPlatformModel.Page(),
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentSelectionLock} */
  static PaymentSelectionLock() {
    return Joi.object({
      payment_identifier: Joi.string().allow(""),
      default_options: Joi.string().allow(""),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {CartCurrency} */
  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
    });
  }

  /** @returns {CartDetailCoupon} */
  static CartDetailCoupon() {
    return Joi.object({
      cashback_amount: Joi.number(),
      cashback_message_primary: Joi.string().allow(""),
      cashback_message_secondary: Joi.string().allow(""),
      coupon_code: Joi.string().allow(""),
      coupon_description: Joi.string().allow(""),
      coupon_id: Joi.string().allow(""),
      coupon_subtitle: Joi.string().allow(""),
      coupon_title: Joi.string().allow(""),
      coupon_type: Joi.string().allow(""),
      coupon_value: Joi.number(),
      discount: Joi.number(),
      is_applied: Joi.boolean(),
      is_valid: Joi.boolean(),
      maximum_discount_value: Joi.number(),
      message: Joi.string().allow(""),
      minimum_cart_value: Joi.number(),
    });
  }

  /** @returns {ChargesThreshold} */
  static ChargesThreshold() {
    return Joi.object({
      charges: Joi.number(),
      threshold: Joi.number(),
    });
  }

  /** @returns {DeliveryChargesConfig} */
  static DeliveryChargesConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
      charges: Joi.array().items(CartPlatformModel.ChargesThreshold()),
    });
  }

  /** @returns {CartCommonConfig} */
  static CartCommonConfig() {
    return Joi.object({
      delivery_charges_config: CartPlatformModel.DeliveryChargesConfig(),
    });
  }

  /** @returns {CartDetailResponse} */
  static CartDetailResponse() {
    return Joi.object({
      cart_id: Joi.number(),
      uid: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      id: Joi.string().allow(""),
      pan_config: Joi.any(),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      common_config: CartPlatformModel.CartCommonConfig(),
      coupon: CartPlatformModel.CartDetailCoupon(),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      notification: Joi.any(),
      staff_user_id: Joi.string().allow(""),
      success: Joi.boolean(),
      breakup_values: CartPlatformModel.CartBreakup(),
      is_valid: Joi.boolean(),
      currency: CartPlatformModel.CartCurrency(),
      checkout_mode: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      gstin: Joi.string().allow(""),
      applied_promo_details: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      pan_no: Joi.string().allow(""),
    });
  }

  /** @returns {AddProductCart} */
  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),
      item_size: Joi.string().allow(""),
      seller_id: Joi.number(),
      parent_item_identifiers: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.string().allow(""))
      ),
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
      article_id: Joi.string().allow(""),
      article_assignment: Joi.any(),
      store_id: Joi.number(),
      display: Joi.string().allow(""),
      item_id: Joi.number(),
      extra_meta: Joi.any(),
      _custom_json: Joi.any(),
      meta: Joi.any(),
      pos: Joi.boolean(),
    });
  }

  /** @returns {AddCartRequest} */
  static AddCartRequest() {
    return Joi.object({
      new_cart: Joi.boolean(),
      items: Joi.array().items(CartPlatformModel.AddProductCart()),
    });
  }

  /** @returns {AddCartDetailResponse} */
  static AddCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),
      cart: CartPlatformModel.CartDetailResponse(),
      partial: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateProductCart} */
  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),
      item_size: Joi.string().allow(""),
      parent_item_identifiers: Joi.any(),
      meta: Joi.any(),
      extra_meta: Joi.any(),
      _custom_json: Joi.any(),
      item_id: Joi.number(),
      item_index: Joi.number(),
      identifiers: CartPlatformModel.CartProductIdentifer().required(),
      article_id: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateCartRequest} */
  static UpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.UpdateProductCart()),
      operation: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdateCartDetailResponse} */
  static UpdateCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),
      cart: CartPlatformModel.CartDetailResponse(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {OverrideCartItemPromo} */
  static OverrideCartItemPromo() {
    return Joi.object({
      promo_id: Joi.string().allow("").required(),
      promo_amount: Joi.string().allow("").required(),
      promo_desc: Joi.string().allow(""),
      rwrd_tndr: Joi.string().allow(""),
      item_list: Joi.array().items(Joi.any().allow(null)),
    });
  }

  /** @returns {OverrideCartItem} */
  static OverrideCartItem() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),
      quantity: Joi.number(),
      size: Joi.string().allow("").required(),
      price_marked: Joi.number().required(),
      amount_paid: Joi.number().required(),
      promo_list: Joi.array().items(CartPlatformModel.OverrideCartItemPromo()),
      extra_meta: Joi.any(),
      item_id: Joi.number().required(),
      discount: Joi.number().required(),
      price_effective: Joi.number().required(),
    });
  }

  /** @returns {OverrideCheckoutReq} */
  static OverrideCheckoutReq() {
    return Joi.object({
      cart_id: Joi.string().allow("").required(),
      payment_mode: Joi.string().allow("").required(),
      billing_address: Joi.any(),
      merchant_code: Joi.string().allow("").required(),
      payment_identifier: Joi.string().allow("").allow(null).required(),
      currency_code: Joi.string().allow("").required(),
      aggregator: Joi.string().allow("").required(),
      order_type: Joi.string().allow("").required(),
      cart_items: Joi.array()
        .items(CartPlatformModel.OverrideCartItem())
        .required(),
      ordering_store: Joi.number().allow(null),
      shipping_address: Joi.any(),
    });
  }

  /** @returns {OverrideCheckoutResponse} */
  static OverrideCheckoutResponse() {
    return Joi.object({
      data: Joi.any().required(),
      cart: Joi.any().required(),
      success: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetShareCartLinkRequest} */
  static GetShareCartLinkRequest() {
    return Joi.object({
      id: Joi.string().allow(""),
      meta: Joi.any(),
    });
  }

  /** @returns {GetShareCartLinkResponse} */
  static GetShareCartLinkResponse() {
    return Joi.object({
      token: Joi.string().allow(""),
      share_url: Joi.string().allow(""),
    });
  }

  /** @returns {SharedCartDetails} */
  static SharedCartDetails() {
    return Joi.object({
      source: Joi.any(),
      user: Joi.any(),
      token: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      meta: Joi.any(),
    });
  }

  /** @returns {SharedCart} */
  static SharedCart() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),
      id: Joi.string().allow(""),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      shared_cart_details: CartPlatformModel.SharedCartDetails(),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      breakup_values: CartPlatformModel.CartBreakup(),
      is_valid: Joi.boolean(),
      uid: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      currency: CartPlatformModel.CartCurrency(),
      last_modified: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      gstin: Joi.string().allow(""),
    });
  }

  /** @returns {SharedCartResponse} */
  static SharedCartResponse() {
    return Joi.object({
      cart: CartPlatformModel.SharedCart(),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {CartList} */
  static CartList() {
    return Joi.object({
      cart_id: Joi.string().allow(""),
      pick_up_customer_details: Joi.any(),
      cart_value: Joi.number(),
      created_on: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      item_counts: Joi.number(),
    });
  }

  /** @returns {MultiCartResponse} */
  static MultiCartResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: Joi.array().items(CartPlatformModel.CartList()),
    });
  }

  /** @returns {UpdateUserCartMapping} */
  static UpdateUserCartMapping() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {UserInfo} */
  static UserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      external_id: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
    });
  }

  /** @returns {UserCartMappingResponse} */
  static UserCartMappingResponse() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),
      user: CartPlatformModel.UserInfo(),
      id: Joi.string().allow(""),
      pan_config: Joi.any(),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      breakup_values: CartPlatformModel.CartBreakup(),
      is_valid: Joi.boolean(),
      currency: CartPlatformModel.CartCurrency(),
      checkout_mode: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      gstin: Joi.string().allow(""),
      applied_promo_details: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      pan_no: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformAddCartRequest} */
  static PlatformAddCartRequest() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      new_cart: Joi.boolean(),
      items: Joi.array().items(CartPlatformModel.AddProductCart()),
    });
  }

  /** @returns {PlatformUpdateCartRequest} */
  static PlatformUpdateCartRequest() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.UpdateProductCart()),
      operation: Joi.string().allow("").required(),
    });
  }

  /** @returns {DeleteCartRequest} */
  static DeleteCartRequest() {
    return Joi.object({
      cart_id_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {DeleteCartDetailResponse} */
  static DeleteCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CartItemCountResponse} */
  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  /** @returns {Coupon} */
  static Coupon() {
    return Joi.object({
      title: Joi.string().allow(""),
      max_discount_value: Joi.number(),
      coupon_code: Joi.string().allow(""),
      is_applied: Joi.boolean(),
      coupon_type: Joi.string().allow("").allow(null),
      expires_on: Joi.string().allow(""),
      coupon_value: Joi.number(),
      sub_title: Joi.string().allow(""),
      minimum_cart_value: Joi.number(),
      is_applicable: Joi.boolean(),
      message: Joi.string().allow(""),
      description: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PageCoupon} */
  static PageCoupon() {
    return Joi.object({
      has_next: Joi.boolean(),
      current: Joi.number(),
      total: Joi.number(),
      total_item_count: Joi.number(),
      has_previous: Joi.boolean(),
    });
  }

  /** @returns {GetCouponResponse} */
  static GetCouponResponse() {
    return Joi.object({
      available_coupon_list: Joi.array().items(CartPlatformModel.Coupon()),
      page: CartPlatformModel.PageCoupon(),
    });
  }

  /** @returns {ApplyCouponRequest} */
  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {GeoLocation} */
  static GeoLocation() {
    return Joi.object({
      longitude: Joi.number(),
      latitude: Joi.number(),
    });
  }

  /** @returns {PlatformAddress} */
  static PlatformAddress() {
    return Joi.object({
      phone: Joi.string().allow(""),
      id: Joi.string().allow(""),
      area_code_slug: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      geo_location: CartPlatformModel.GeoLocation(),
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      is_default_address: Joi.boolean(),
      tags: Joi.array().items(Joi.string().allow("")),
      created_by_user_id: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      email: Joi.string().allow(""),
      area_code: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      meta: Joi.any(),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      google_map_point: Joi.any(),
      cart_id: Joi.string().allow(""),
      city: Joi.string().allow(""),
      area: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      address: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformGetAddressesResponse} */
  static PlatformGetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(CartPlatformModel.PlatformAddress()),
    });
  }

  /** @returns {SaveAddressResponse} */
  static SaveAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      success: Joi.boolean(),
      is_default_address: Joi.boolean(),
    });
  }

  /** @returns {UpdateAddressResponse} */
  static UpdateAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_default_address: Joi.boolean(),
      success: Joi.boolean(),
      is_updated: Joi.boolean(),
    });
  }

  /** @returns {DeleteAddressResponse} */
  static DeleteAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_deleted: Joi.boolean(),
    });
  }

  /** @returns {PlatformSelectCartAddressRequest} */
  static PlatformSelectCartAddressRequest() {
    return Joi.object({
      cart_id: Joi.string().allow(""),
      billing_address_id: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentArticle} */
  static ShipmentArticle() {
    return Joi.object({
      meta: Joi.string().allow(""),
      quantity: Joi.string().allow(""),
      article_id: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformShipmentResponse} */
  static PlatformShipmentResponse() {
    return Joi.object({
      shipments: Joi.number(),
      fulfillment_id: Joi.number(),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      dp_options: Joi.any().allow(null),
      shipment_type: Joi.string().allow(""),
      order_type: Joi.string().allow(""),
      box_type: Joi.string().allow("").allow(null),
      promise: CartPlatformModel.ShipmentPromise(),
      dp_id: Joi.string().allow("").allow(null),
      fulfillment_type: Joi.string().allow(""),
      articles: Joi.array().items(CartPlatformModel.ShipmentArticle()),
    });
  }

  /** @returns {PlatformCartShipmentsResponse} */
  static PlatformCartShipmentsResponse() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),
      id: Joi.string().allow(""),
      pan_config: Joi.any(),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      breakup_values: CartPlatformModel.CartBreakup(),
      staff_user_id: Joi.string().allow("").allow(null),
      is_valid: Joi.boolean(),
      shipments: Joi.array().items(
        CartPlatformModel.PlatformShipmentResponse()
      ),
      currency: CartPlatformModel.CartCurrency(),
      checkout_mode: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      gstin: Joi.string().allow(""),
      applied_promo_details: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      error: Joi.boolean(),
      pan_no: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateCartShipmentItem} */
  static UpdateCartShipmentItem() {
    return Joi.object({
      quantity: Joi.number(),
      shipment_type: Joi.string().allow("").required(),
      article_uid: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdateCartShipmentRequest} */
  static UpdateCartShipmentRequest() {
    return Joi.object({
      shipments: Joi.array()
        .items(CartPlatformModel.UpdateCartShipmentItem())
        .required(),
    });
  }

  /** @returns {PlatformCartMetaRequest} */
  static PlatformCartMetaRequest() {
    return Joi.object({
      gstin: Joi.string().allow(""),
      pick_up_customer_details: Joi.any(),
      checkout_mode: Joi.string().allow(""),
      gift_details: Joi.any().allow(null),
      pan_no: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      staff_user_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CartMetaResponse} */
  static CartMetaResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CartMetaMissingResponse} */
  static CartMetaMissingResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {StaffCheckout} */
  static StaffCheckout() {
    return Joi.object({
      employee_code: Joi.string().allow(""),
      _id: Joi.string().allow("").required(),
      user: Joi.string().allow("").required(),
      last_name: Joi.string().allow("").required(),
      first_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {CustomerDetails} */
  static CustomerDetails() {
    return Joi.object({
      name: Joi.string().allow(""),
      email: Joi.string().allow("").allow(null),
      mobile: Joi.string().allow("").required(),
    });
  }

  /** @returns {Files} */
  static Files() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {CartCheckoutCustomMeta} */
  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {PlatformCartCheckoutDetailRequest} */
  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      custom_meta: Joi.array().items(
        CartPlatformModel.CartCheckoutCustomMeta()
      ),
      address_id: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_params: Joi.any().allow(null),
      payment_auto_confirm: Joi.boolean(),
      id: Joi.string().allow("").required(),
      pos: Joi.boolean(),
      billing_address_id: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      pick_at_store_uid: Joi.number().allow(null),
      device_id: Joi.string().allow("").allow(null),
      delivery_address: Joi.any(),
      payment_mode: Joi.string().allow("").required(),
      checkout_mode: Joi.string().allow(""),
      customer_details: Joi.any().allow(null),
      meta: Joi.any(),
      staff: CartPlatformModel.StaffCheckout(),
      employee_code: Joi.string().allow("").allow(null),
      billing_address: Joi.any(),
      callback_url: Joi.string().allow("").allow(null),
      user_id: Joi.string().allow("").allow(null).required(),
      extra_meta: Joi.any(),
      order_type: Joi.string().allow("").required(),
      files: Joi.array().items(CartPlatformModel.Files()),
      ordering_store: Joi.number().allow(null),
      payment_extra_identifiers: Joi.any(),
    });
  }

  /** @returns {CheckCart} */
  static CheckCart() {
    return Joi.object({
      coupon_text: Joi.string().allow(""),
      cod_message: Joi.string().allow(""),
      id: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      user_type: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      error_message: Joi.string().allow(""),
      success: Joi.boolean(),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      restrict_checkout: Joi.boolean(),
      order_id: Joi.string().allow(""),
      message: Joi.string().allow(""),
      breakup_values: CartPlatformModel.CartBreakup(),
      cod_charges: Joi.number(),
      is_valid: Joi.boolean(),
      uid: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      currency: CartPlatformModel.CartCurrency(),
      last_modified: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      delivery_charge_order_value: Joi.number(),
      cart_id: Joi.number(),
      store_emps: Joi.array().items(Joi.any()),
      gstin: Joi.string().allow(""),
      cod_available: Joi.boolean(),
      delivery_charges: Joi.number(),
    });
  }

  /** @returns {CartCheckoutResponse} */
  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),
      data: Joi.any(),
      cart: CartPlatformModel.CheckCart(),
      success: Joi.boolean(),
      callback_url: Joi.string().allow(""),
      payment_confirm_url: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CartDeliveryModesResponse} */
  static CartDeliveryModesResponse() {
    return Joi.object({
      pickup_stores: Joi.array().items(Joi.number()),
      available_modes: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PickupStoreDetail} */
  static PickupStoreDetail() {
    return Joi.object({
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      city: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      area_code: Joi.string().allow(""),
      uid: Joi.number(),
      area_code_slug: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      id: Joi.number(),
      store_manager_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      email: Joi.string().allow(""),
      pincode: Joi.number(),
      address: Joi.string().allow(""),
    });
  }

  /** @returns {StoreDetailsResponse} */
  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.PickupStoreDetail()),
    });
  }

  /** @returns {UpdateCartPaymentRequest} */
  static UpdateCartPaymentRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      aggregator_name: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {CouponValidity} */
  static CouponValidity() {
    return Joi.object({
      title: Joi.string().allow(""),
      next_validation_required: Joi.boolean().allow(null),
      valid: Joi.boolean(),
      display_message_en: Joi.string().allow("").allow(null),
      code: Joi.string().allow("").allow(null),
      discount: Joi.number(),
    });
  }

  /** @returns {PaymentCouponValidate} */
  static PaymentCouponValidate() {
    return Joi.object({
      success: Joi.boolean().required(),
      message: Joi.string().allow(""),
      coupon_validity: CartPlatformModel.CouponValidity(),
    });
  }

  /** @returns {PaymentMeta} */
  static PaymentMeta() {
    return Joi.object({
      payment_gateway: Joi.string().allow(""),
      type: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      merchant_code: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentMethod} */
  static PaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),
      payment: Joi.string().allow(""),
      payment_meta: CartPlatformModel.PaymentMeta().required(),
      amount: Joi.number().allow(null),
      name: Joi.string().allow(""),
      payment_extra_identifiers: Joi.any(),
    });
  }

  /** @returns {PlatformCartCheckoutDetailV2Request} */
  static PlatformCartCheckoutDetailV2Request() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_params: Joi.any().allow(null),
      custom_meta: Joi.any(),
      payment_auto_confirm: Joi.boolean(),
      id: Joi.string().allow("").required(),
      pos: Joi.boolean(),
      billing_address_id: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      pick_at_store_uid: Joi.number().allow(null),
      device_id: Joi.string().allow("").allow(null),
      delivery_address: Joi.any(),
      payment_mode: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      customer_details: Joi.any().allow(null),
      meta: Joi.any(),
      payment_methods: Joi.array()
        .items(CartPlatformModel.PaymentMethod())
        .required(),
      staff: CartPlatformModel.StaffCheckout(),
      employee_code: Joi.string().allow("").allow(null),
      billing_address: Joi.any(),
      callback_url: Joi.string().allow("").allow(null),
      user_id: Joi.string().allow("").allow(null).required(),
      extra_meta: Joi.any(),
      order_type: Joi.string().allow("").required(),
      files: Joi.array().items(CartPlatformModel.Files()),
      ordering_store: Joi.number().allow(null),
    });
  }

  /** @returns {UpdateCartPaymentRequestV2} */
  static UpdateCartPaymentRequestV2() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      aggregator_name: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      id: Joi.string().allow(""),
      payment_methods: Joi.array().items(CartPlatformModel.PaymentMethod()),
    });
  }
}
module.exports = CartPlatformModel;
