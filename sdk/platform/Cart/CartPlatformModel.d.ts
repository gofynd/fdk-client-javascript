export = CartPlatformModel;
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
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
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
 * @property {string} [error]
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
 * @property {Object} [payments]
 * @property {UserRegistered} [user_registered]
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
 * @property {string[]} [tags]
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
 * @property {string[]} [tags]
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
 * @property {string[]} [tags]
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
 * @property {number} [max_cart_value]
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
 * @property {number} [max_cart_value]
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
 * @typedef PriceAdjustmentRestrictions
 * @property {Object} [post_order] - This field holds the post-order
 *   restrictions, indicated by nested fields ['cancellation_allowed','return_allowed']
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
 * @property {PriceAdjustmentRestrictions} [restrictions] - Restrictions applied
 *   to this particular item or product, including whether or not cancellation
 *   and return are allowed.
 * @property {boolean} article_level_distribution - Flag indicating whether the
 *   distribution should is done at the article level
 * @property {Collection} collection
 * @property {string} type - Type of price adjusment
 * @property {boolean} [allowed_refund] - Flag indicating whether refunds are
 *   allowed (default: False)
 * @property {boolean} is_authenticated - Flag indicating whether the user is
 *   authenticated
 * @property {Article[]} article_ids - The list of article object in the price adjustment
 * @property {boolean} [auto_remove] - This field if set true will remove mop
 *   type price adjustment.
 * @property {Object} [meta]
 * @property {string} cart_id - The ID of the cart
 */
/**
 * @typedef PriceAdjustment
 * @property {number} value
 * @property {string} message - The message associated with the price adjustment
 * @property {string} [apply_expiry] - The date and time when the expiry should be applied
 * @property {PriceAdjustmentRestrictions} [restrictions] - This field accepts
 *   the restrictions applied to this particular item or service, including
 *   whether or not cancellation and return are allowed, etc
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
 * @property {boolean} [auto_remove] - This field if set true will remove mop
 *   type price adjustment.
 * @property {Object} [meta]
 * @property {string} cart_id - The ID of the cart
 */
/**
 * @typedef PriceAdjustmentResponse
 * @property {PriceAdjustment} [data]
 */
/**
 * @typedef GetPriceAdjustmentResponse
 * @property {PriceAdjustment[]} [data]
 */
/**
 * @typedef PriceAdjustmentAdd
 * @property {number} value
 * @property {string} message - The message associated with the price adjustment
 * @property {string} [apply_expiry] - The date and time when the expiry should be applied
 * @property {PriceAdjustmentRestrictions} [restrictions] - This field accepts
 *   the restrictions applied to this particular item or service, including
 *   whether or not cancellation and return are allowed, etc
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
 * @property {boolean} [auto_remove] - This field if set true will remove mop
 *   type price adjustment.
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
 * @property {string[]} [tags] - A list of article tags
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
 * @typedef AppliedFreeArticles
 * @property {string} [parent_item_identifier] - Parent item identifier for free article
 * @property {number} [quantity] - Free article quantity
 * @property {string} [article_id] - Free article id
 * @property {FreeGiftItems} [free_gift_item_details] - Free gift items details
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
 * @property {CartCurrency} [currency]
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
 * @property {Object} [meta] - Meta object for extra data
 * @property {string} [code] - Promotion code
 */
/**
 * @typedef PromiseFormatted
 * @property {string} [max]
 * @property {string} [min]
 */
/**
 * @typedef PromiseISOFormat
 * @property {string} [max] - Max promise in ISO format.
 * @property {string} [min] - Min Promise in ISO format.
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
 * @property {PromiseISOFormat} [iso]
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
 * @property {Object} [custom_cart_meta]
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
 * @property {string} [seller_identifier] - Add items using seller identifier for store os
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
 * @property {string} [parent_promo_id]
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
 * @property {string} [callback_url]
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
 * @property {Object} [custom_cart_meta]
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
 * @property {string} [currency_code]
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
 * @property {Object} [custom_cart_meta]
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
 * @property {string} [start_date]
 * @property {string} [end_date]
 * @property {string} [coupon_applicable_message]
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
 * @property {string} [sector]
 * @property {string} [state_code] - State code for international address
 * @property {string} [area]
 * @property {string} [user_id]
 * @property {string} [address_type]
 * @property {string} [address]
 * @property {string} [country_phone_code]
 * @property {string} [country_iso_code]
 * @property {Object} [_custom_json]
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
 * @property {Object} [custom_cart_meta]
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
 * @property {Object} [custom_cart_meta]
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
 * @property {string} [iin]
 * @property {string} [network]
 * @property {string} [type]
 * @property {string} [card_id]
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
/**
 * @typedef PriceMinMax
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef ItemPriceDetails
 * @property {PriceMinMax} [marked]
 * @property {PriceMinMax} [effective]
 * @property {string} [currency]
 */
/**
 * @typedef FreeGiftItems
 * @property {string} [item_slug] - Item slug
 * @property {string} [item_name] - Item name
 * @property {ItemPriceDetails} [item_price_details]
 * @property {string} [item_brand_name] - Item brand name
 * @property {number} [item_id] - Item id
 * @property {string[]} [item_images_url] - Item images URL
 */
/**
 * @typedef PromotionOffer
 * @property {string} [id] - Promotion id
 * @property {Object} [buy_rules] - Buy rules of promotions
 * @property {string} [offer_text] - Offer title
 * @property {string} [promotion_type] - Promotion type
 * @property {string} [promotion_name] - Name of the promotion
 * @property {string} [promotion_group] - Group of promotion belongs to
 * @property {string} [valid_till] - Datetime ISOString for promotion end date
 * @property {Object[]} [discount_rules] - Discount rules of promotions
 * @property {FreeGiftItems[]} [free_gift_items] - Details of free gift items
 * @property {string} [description] - Offer details including T&C
 */
/**
 * @typedef PromotionOffersResponse
 * @property {PromotionOffer[]} [available_promotions]
 */
/**
 * @typedef PromotionPaymentOffer
 * @property {string} [application_id] - Application id
 * @property {Object[]} [buy_rules] - Buy rules of promotions
 * @property {string} [calculate_on] - Price on which promotion calculated
 * @property {string} [description] - Offer details including T&C
 * @property {Object[]} [discount_rules] - Discount rules of promotions
 * @property {string} [id] - Promotion id
 * @property {string} [offer_text] - Offer title
 * @property {string} [promotion_group] - Group of promotion belongs to
 * @property {string} [promotion_type] - Promotion type
 * @property {string} [promotion_name] - Name of the promotion
 */
/**
 * @typedef PromotionPaymentOffersResponse
 * @property {boolean} [success]
 * @property {PromotionPaymentOffer[]} [promotions]
 */
declare class CartPlatformModel {
}
declare namespace CartPlatformModel {
    export { CouponDateMeta, Ownership, CouponAuthor, State, PaymentAllowValue, PaymentModes, PriceRange, PostOrder, BulkBundleRestriction, UsesRemaining, UsesRestriction, Restrictions, Validation, CouponAction, CouponSchedule, Rule, DisplayMetaDict, DisplayMeta, Identifier, Validity, RuleDefinition, CouponAdd, Page, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, DisplayMeta1, Ownership1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, PostOrder1, UsesRemaining1, UsesRestriction1, Restrictions1, PromotionSchedule, PromotionAction, PromotionAuthor, Visibility, PromotionDateMeta, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, Charges, DeliveryCharges, CartMetaConfigUpdate, CartMetaConfigAdd, Article, PriceAdjustmentRestrictions, Collection, PriceAdjustmentUpdate, PriceAdjustment, PriceAdjustmentResponse, GetPriceAdjustmentResponse, PriceAdjustmentAdd, CartItem, OpenapiCartDetailsRequest, CouponBreakup, DisplayBreakup, LoyaltyPoints, RawBreakup, CartBreakup, ProductImage, Tags, BaseInfo, ActionQuery, ProductAction, CategoryInfo, CartProduct, BasePrice, ArticlePriceInfo, StoreInfo, ProductArticle, Ownership2, DiscountRulesApp, AppliedFreeArticles, BuyRules, AppliedPromotion, PromiseFormatted, PromiseISOFormat, PromiseTimestamp, ShipmentPromise, CouponDetails, ProductPrice, ProductPriceInfo, CartProductIdentifer, ProductAvailabilitySize, ProductAvailability, PromoMeta, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, MultiTenderPaymentMeta, MultiTenderPaymentMethod, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, PaymentSelectionLock, CartCurrency, CartDetailCoupon, ChargesThreshold, DeliveryChargesConfig, CartCommonConfig, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, OverrideCartItemPromo, OverrideCartItem, OverrideCheckoutReq, OverrideCheckoutResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserInfo, UserCartMappingResponse, PlatformAddCartRequest, PlatformUpdateCartRequest, DeleteCartRequest, DeleteCartDetailResponse, CartItemCountResponse, Coupon, PageCoupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentArticle, PlatformShipmentResponse, PlatformCartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, CustomerDetails, Files, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, PaymentMeta, PaymentMethod, PlatformCartCheckoutDetailV2Request, UpdateCartPaymentRequestV2, PriceMinMax, ItemPriceDetails, FreeGiftItems, PromotionOffer, PromotionOffersResponse, PromotionPaymentOffer, PromotionPaymentOffersResponse };
}
/** @returns {CouponDateMeta} */
declare function CouponDateMeta(): CouponDateMeta;
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
/** @returns {Ownership} */
declare function Ownership(): Ownership;
type Ownership = {
    payable_category: string;
    payable_by: string;
};
/** @returns {CouponAuthor} */
declare function CouponAuthor(): CouponAuthor;
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
/** @returns {State} */
declare function State(): State;
type State = {
    is_archived?: boolean;
    is_display?: boolean;
    is_public?: boolean;
};
/** @returns {PaymentAllowValue} */
declare function PaymentAllowValue(): PaymentAllowValue;
type PaymentAllowValue = {
    max?: number;
};
/** @returns {PaymentModes} */
declare function PaymentModes(): PaymentModes;
type PaymentModes = {
    codes?: string[];
    iins?: string[];
    types?: string[];
    networks?: string[];
    uses?: PaymentAllowValue;
};
/** @returns {PriceRange} */
declare function PriceRange(): PriceRange;
type PriceRange = {
    max?: number;
    min?: number;
};
/** @returns {PostOrder} */
declare function PostOrder(): PostOrder;
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
/** @returns {BulkBundleRestriction} */
declare function BulkBundleRestriction(): BulkBundleRestriction;
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
/** @returns {UsesRemaining} */
declare function UsesRemaining(): UsesRemaining;
type UsesRemaining = {
    user?: number;
    total?: number;
    app?: number;
};
/** @returns {UsesRestriction} */
declare function UsesRestriction(): UsesRestriction;
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
/** @returns {Restrictions} */
declare function Restrictions(): Restrictions;
type Restrictions = {
    payments?: any;
    user_type?: string;
    price_range?: PriceRange;
    platforms?: string[];
    post_order?: PostOrder;
    bulk_bundle?: BulkBundleRestriction;
    user_groups?: number[];
    coupon_allowed?: boolean;
    uses?: UsesRestriction;
    ordering_stores?: number[];
};
/** @returns {Validation} */
declare function Validation(): Validation;
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
/** @returns {CouponAction} */
declare function CouponAction(): CouponAction;
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
/** @returns {CouponSchedule} */
declare function CouponSchedule(): CouponSchedule;
type CouponSchedule = {
    end?: string;
    start?: string;
    next_schedule?: any[];
    cron?: string;
    duration?: number;
};
/** @returns {Rule} */
declare function Rule(): Rule;
type Rule = {
    key?: number;
    value?: number;
    max?: number;
    discount_qty?: number;
    min?: number;
};
/** @returns {DisplayMetaDict} */
declare function DisplayMetaDict(): DisplayMetaDict;
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
/** @returns {DisplayMeta} */
declare function DisplayMeta(): DisplayMeta;
type DisplayMeta = {
    title?: string;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    subtitle?: string;
    description?: string;
};
/** @returns {Identifier} */
declare function Identifier(): Identifier;
type Identifier = {
    brand_id?: number[];
    email_domain?: string[];
    company_id?: number[];
    store_id?: number[];
    collection_id?: string[];
    item_id?: number[];
    user_id?: string[];
    category_id?: number[];
    article_id?: string[];
    exclude_brand_id?: number[];
};
/** @returns {Validity} */
declare function Validity(): Validity;
type Validity = {
    priority?: number;
};
/** @returns {RuleDefinition} */
declare function RuleDefinition(): RuleDefinition;
type RuleDefinition = {
    currency_code?: string;
    auto_apply?: boolean;
    type: string;
    is_exact?: boolean;
    applicable_on: string;
    calculate_on: string;
    value_type: string;
    scope?: string[];
};
/** @returns {CouponAdd} */
declare function CouponAdd(): CouponAdd;
type CouponAdd = {
    date_meta?: CouponDateMeta;
    ownership: Ownership;
    author?: CouponAuthor;
    state?: State;
    restrictions?: Restrictions;
    validation?: Validation;
    action?: CouponAction;
    tags?: string[];
    _schedule?: CouponSchedule;
    rule: Rule[];
    display_meta: DisplayMeta;
    code: string;
    type_slug: string;
    identifiers: Identifier;
    validity: Validity;
    rule_definition: RuleDefinition;
    /**
     * - Coupon id
     */
    _id?: string;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of items on the page.
     */
    item_total?: number;
    /**
     * - The identifier for the next page.
     */
    next_id?: string;
    /**
     * - Indicates whether there is a previous page.
     */
    has_previous?: boolean;
    /**
     * - Indicates whether there is a next page.
     */
    has_next?: boolean;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - The type of the page, such as 'PageType'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
};
/** @returns {CouponsResponse} */
declare function CouponsResponse(): CouponsResponse;
type CouponsResponse = {
    items?: CouponAdd[];
    page?: Page;
};
/** @returns {SuccessMessage} */
declare function SuccessMessage(): SuccessMessage;
type SuccessMessage = {
    success?: boolean;
    message?: string;
};
/** @returns {OperationErrorResponse} */
declare function OperationErrorResponse(): OperationErrorResponse;
type OperationErrorResponse = {
    success?: boolean;
    message?: string;
    error?: string;
};
/** @returns {CouponUpdate} */
declare function CouponUpdate(): CouponUpdate;
type CouponUpdate = {
    date_meta?: CouponDateMeta;
    ownership: Ownership;
    author?: CouponAuthor;
    state?: State;
    restrictions?: Restrictions;
    validation?: Validation;
    action?: CouponAction;
    tags?: string[];
    _schedule?: CouponSchedule;
    rule: Rule[];
    display_meta: DisplayMeta;
    code: string;
    type_slug: string;
    identifiers: Identifier;
    validity: Validity;
    rule_definition: RuleDefinition;
};
/** @returns {CouponPartialUpdate} */
declare function CouponPartialUpdate(): CouponPartialUpdate;
type CouponPartialUpdate = {
    /**
     * - Send true to unpublish coupon
     */
    archive?: boolean;
    schedule?: CouponSchedule;
};
/** @returns {DisplayMeta1} */
declare function DisplayMeta1(): DisplayMeta1;
type DisplayMeta1 = {
    description?: string;
    offer_label?: string;
    name?: string;
    offer_text?: string;
};
/** @returns {Ownership1} */
declare function Ownership1(): Ownership1;
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
/** @returns {CompareObject} */
declare function CompareObject(): CompareObject;
type CompareObject = {
    equals?: number;
    greater_than?: number;
    less_than_equals?: number;
    less_than?: number;
    greater_than_equals?: number;
};
/** @returns {ItemCriteria} */
declare function ItemCriteria(): ItemCriteria;
type ItemCriteria = {
    cart_quantity?: CompareObject;
    available_zones?: string[];
    item_exclude_company?: number[];
    item_id?: number[];
    item_l1_category?: number[];
    cart_total?: CompareObject;
    cart_unique_item_quantity?: CompareObject;
    cart_unique_item_amount?: CompareObject;
    item_exclude_id?: number[];
    all_items?: boolean;
    item_exclude_l1_category?: number[];
    item_size?: string[];
    item_store?: number[];
    item_exclude_sku?: string[];
    item_department?: number[];
    item_exclude_store?: number[];
    item_brand?: number[];
    item_exclude_department?: number[];
    item_exclude_category?: number[];
    item_category?: number[];
    buy_rules?: string[];
    item_exclude_brand?: number[];
    item_l2_category?: number[];
    item_company?: number[];
    item_tags?: string[];
    item_exclude_l2_category?: number[];
    item_sku?: string[];
};
/** @returns {DiscountOffer} */
declare function DiscountOffer(): DiscountOffer;
type DiscountOffer = {
    max_discount_amount?: number;
    discount_price?: number;
    apportion_discount?: boolean;
    partial_can_ret?: boolean;
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
    code?: string;
    discount_amount?: number;
    discount_percentage?: number;
    max_offer_quantity?: number;
};
/** @returns {DiscountRule} */
declare function DiscountRule(): DiscountRule;
type DiscountRule = {
    discount_type: string;
    buy_condition: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
};
/** @returns {PaymentAllowValue1} */
declare function PaymentAllowValue1(): PaymentAllowValue1;
type PaymentAllowValue1 = {
    max?: number;
};
/** @returns {PromotionPaymentModes} */
declare function PromotionPaymentModes(): PromotionPaymentModes;
type PromotionPaymentModes = {
    type: string;
    uses?: PaymentAllowValue1;
    codes?: string[];
};
/** @returns {UserRegistered} */
declare function UserRegistered(): UserRegistered;
type UserRegistered = {
    end?: string;
    start?: string;
};
/** @returns {PostOrder1} */
declare function PostOrder1(): PostOrder1;
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
/** @returns {UsesRemaining1} */
declare function UsesRemaining1(): UsesRemaining1;
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
/** @returns {UsesRestriction1} */
declare function UsesRestriction1(): UsesRestriction1;
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
/** @returns {Restrictions1} */
declare function Restrictions1(): Restrictions1;
type Restrictions1 = {
    payments?: any;
    user_registered?: UserRegistered;
    platforms?: string[];
    post_order?: PostOrder1;
    user_groups?: number[];
    order_quantity?: number;
    anonymous_users?: boolean;
    user_id?: string[];
    uses: UsesRestriction1;
    ordering_stores?: number[];
};
/** @returns {PromotionSchedule} */
declare function PromotionSchedule(): PromotionSchedule;
type PromotionSchedule = {
    end: string;
    start: string;
    published: boolean;
    next_schedule?: any[];
    cron?: string;
    duration?: number;
};
/** @returns {PromotionAction} */
declare function PromotionAction(): PromotionAction;
type PromotionAction = {
    action_date: string;
    action_type: string;
};
/** @returns {PromotionAuthor} */
declare function PromotionAuthor(): PromotionAuthor;
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
/** @returns {Visibility} */
declare function Visibility(): Visibility;
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
/** @returns {PromotionDateMeta} */
declare function PromotionDateMeta(): PromotionDateMeta;
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
/** @returns {PromotionListItem} */
declare function PromotionListItem(): PromotionListItem;
type PromotionListItem = {
    /**
     * - Allows more than one promotion to get
     * combined benefits
     */
    stackable?: boolean;
    /**
     * - Only available for Contract pricing and
     * Ladder pricing promotion type
     */
    calculate_on?: string;
    /**
     * - Doesn't allow other promotion after
     * current promotion applied on cart or article
     */
    apply_exclusive?: string;
    /**
     * - Group into which promotion fall
     */
    promo_group: string;
    /**
     * - Promotion mode
     */
    mode: string;
    /**
     * - Prevents more than one promotion discounts
     */
    apply_all_discount?: boolean;
    display_meta: DisplayMeta1;
    ownership: Ownership1;
    /**
     * - Type of the promotion
     */
    promotion_type: string;
    /**
     * - Discount rules based on which
     * promotion will be applied
     */
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    /**
     * - Currency used for promotion
     */
    currency?: string;
    /**
     * - Promotion code
     */
    code?: string;
    _schedule?: PromotionSchedule;
    post_order_action?: PromotionAction;
    /**
     * - Priority based on which promotion are
     * applied on articles
     */
    apply_priority?: number;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    /**
     * - App id in which promotion will be used
     */
    application_id: string;
    /**
     * - Buy rules for the promotion
     */
    buy_rules: any;
    /**
     * - Custom data stored in promotion
     */
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    /**
     * - Promotion id
     */
    _id?: string;
    tags?: string[];
};
/** @returns {PromotionsResponse} */
declare function PromotionsResponse(): PromotionsResponse;
type PromotionsResponse = {
    items?: PromotionListItem[];
    page?: Page;
};
/** @returns {PromotionAdd} */
declare function PromotionAdd(): PromotionAdd;
type PromotionAdd = {
    stackable?: boolean;
    /**
     * - Only available for Contract pricing and
     * Ladder pricing promotion type
     */
    calculate_on?: string;
    apply_exclusive?: string;
    promo_group: string;
    mode: string;
    apply_all_discount?: boolean;
    display_meta: DisplayMeta1;
    ownership: Ownership1;
    promotion_type: string;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    currency?: string;
    code?: string;
    _schedule?: PromotionSchedule;
    post_order_action?: PromotionAction;
    apply_priority?: number;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    application_id: string;
    buy_rules: any;
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    tags?: string[];
};
/** @returns {PromotionUpdate} */
declare function PromotionUpdate(): PromotionUpdate;
type PromotionUpdate = {
    stackable?: boolean;
    /**
     * - Only available for Contract pricing and
     * Ladder pricing promotion type
     */
    calculate_on?: string;
    apply_exclusive?: string;
    promo_group: string;
    mode: string;
    apply_all_discount?: boolean;
    display_meta: DisplayMeta1;
    ownership: Ownership1;
    promotion_type: string;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    currency?: string;
    code?: string;
    _schedule?: PromotionSchedule;
    post_order_action?: PromotionAction;
    apply_priority?: number;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    application_id: string;
    buy_rules: any;
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    tags?: string[];
};
/** @returns {PromotionPartialUpdate} */
declare function PromotionPartialUpdate(): PromotionPartialUpdate;
type PromotionPartialUpdate = {
    /**
     * - Send true to unpublish promotion
     */
    archive?: boolean;
    schedule?: PromotionSchedule;
};
/** @returns {ActivePromosResponse} */
declare function ActivePromosResponse(): ActivePromosResponse;
type ActivePromosResponse = {
    entity_slug?: string;
    /**
     * - Name of the promotion
     */
    title?: string;
    /**
     * - Coupon modification date
     */
    modified_on?: string;
    /**
     * - Discount offers examples
     */
    example?: string;
    /**
     * - Type of entity to be selected from :
     * ['coupon', 'promotion']
     */
    entity_type?: string;
    /**
     * - Coupon creation date
     */
    created_on?: string;
    /**
     * - If the promo is active or not
     */
    is_hidden?: boolean;
    /**
     * - Coupon type
     */
    type?: string;
    /**
     * - Small description of the current offer
     */
    subtitle?: string;
    /**
     * - The description of the offer in the form of an HTML
     */
    description?: string;
};
/** @returns {Charges} */
declare function Charges(): Charges;
type Charges = {
    charges?: number;
    threshold?: number;
};
/** @returns {DeliveryCharges} */
declare function DeliveryCharges(): DeliveryCharges;
type DeliveryCharges = {
    charges?: Charges[];
    enabled?: boolean;
};
/** @returns {CartMetaConfigUpdate} */
declare function CartMetaConfigUpdate(): CartMetaConfigUpdate;
type CartMetaConfigUpdate = {
    min_cart_value?: number;
    max_cart_value?: number;
    bulk_coupons?: boolean;
    max_cart_items?: number;
    gift_display_text?: string;
    delivery_charges?: DeliveryCharges;
    revenue_engine_coupon?: boolean;
    gift_pricing?: number;
    enabled?: boolean;
};
/** @returns {CartMetaConfigAdd} */
declare function CartMetaConfigAdd(): CartMetaConfigAdd;
type CartMetaConfigAdd = {
    min_cart_value?: number;
    max_cart_value?: number;
    bulk_coupons?: boolean;
    max_cart_items?: number;
    gift_display_text?: string;
    delivery_charges?: DeliveryCharges;
    revenue_engine_coupon?: boolean;
    gift_pricing?: number;
    enabled?: boolean;
};
/** @returns {Article} */
declare function Article(): Article;
type Article = {
    /**
     * - Value of price adjustment for article
     */
    value?: number;
    /**
     * - Code to identify price adjustment on article
     */
    code?: string;
    /**
     * - Type of price adjusment
     */
    type?: string;
    /**
     * - Id of article
     */
    article_id: string;
    /**
     * - Total quantity of the article to be
     * considered (currently used only in discount type)
     */
    quantity?: number;
    /**
     * - Meta related to article
     */
    meta?: any;
};
/** @returns {PriceAdjustmentRestrictions} */
declare function PriceAdjustmentRestrictions(): PriceAdjustmentRestrictions;
type PriceAdjustmentRestrictions = {
    /**
     * - This field holds the post-order
     * restrictions, indicated by nested fields ['cancellation_allowed','return_allowed']
     */
    post_order?: any;
};
/** @returns {Collection} */
declare function Collection(): Collection;
type Collection = {
    refund_by: string;
    collected_by: string;
};
/** @returns {PriceAdjustmentUpdate} */
declare function PriceAdjustmentUpdate(): PriceAdjustmentUpdate;
type PriceAdjustmentUpdate = {
    /**
     * - The entity that modified the field
     */
    modified_by?: string;
    value: number;
    /**
     * - The message associated with the price adjustment
     */
    message: string;
    /**
     * - The date and time when the expiry should be applied
     */
    apply_expiry?: string;
    /**
     * - Restrictions applied
     * to this particular item or product, including whether or not cancellation
     * and return are allowed.
     */
    restrictions?: PriceAdjustmentRestrictions;
    /**
     * - Flag indicating whether the
     * distribution should is done at the article level
     */
    article_level_distribution: boolean;
    collection: Collection;
    /**
     * - Type of price adjusment
     */
    type: string;
    /**
     * - Flag indicating whether refunds are
     * allowed (default: False)
     */
    allowed_refund?: boolean;
    /**
     * - Flag indicating whether the user is
     * authenticated
     */
    is_authenticated: boolean;
    /**
     * - The list of article object in the price adjustment
     */
    article_ids: Article[];
    /**
     * - This field if set true will remove mop
     * type price adjustment.
     */
    auto_remove?: boolean;
    meta?: any;
    /**
     * - The ID of the cart
     */
    cart_id: string;
};
/** @returns {PriceAdjustment} */
declare function PriceAdjustment(): PriceAdjustment;
type PriceAdjustment = {
    value: number;
    /**
     * - The message associated with the price adjustment
     */
    message: string;
    /**
     * - The date and time when the expiry should be applied
     */
    apply_expiry?: string;
    /**
     * - This field accepts
     * the restrictions applied to this particular item or service, including
     * whether or not cancellation and return are allowed, etc
     */
    restrictions?: PriceAdjustmentRestrictions;
    /**
     * - Flag indicating whether the
     * distribution should is done at the article level
     */
    article_level_distribution: boolean;
    id?: string;
    collection: Collection;
    /**
     * - Type of price adjusment
     */
    type: string;
    /**
     * - Flag indicating whether refunds are
     * allowed (default: False)
     */
    allowed_refund?: boolean;
    /**
     * - Flag indicating whether the user is
     * authenticated
     */
    is_authenticated: boolean;
    /**
     * - The list of article object in the price adjustment
     */
    article_ids: Article[];
    /**
     * - This field if set true will remove mop
     * type price adjustment.
     */
    auto_remove?: boolean;
    meta?: any;
    /**
     * - The ID of the cart
     */
    cart_id: string;
};
/** @returns {PriceAdjustmentResponse} */
declare function PriceAdjustmentResponse(): PriceAdjustmentResponse;
type PriceAdjustmentResponse = {
    data?: PriceAdjustment;
};
/** @returns {GetPriceAdjustmentResponse} */
declare function GetPriceAdjustmentResponse(): GetPriceAdjustmentResponse;
type GetPriceAdjustmentResponse = {
    data?: PriceAdjustment[];
};
/** @returns {PriceAdjustmentAdd} */
declare function PriceAdjustmentAdd(): PriceAdjustmentAdd;
type PriceAdjustmentAdd = {
    value: number;
    /**
     * - The message associated with the price adjustment
     */
    message: string;
    /**
     * - The date and time when the expiry should be applied
     */
    apply_expiry?: string;
    /**
     * - This field accepts
     * the restrictions applied to this particular item or service, including
     * whether or not cancellation and return are allowed, etc
     */
    restrictions?: PriceAdjustmentRestrictions;
    /**
     * - The entity that created the field
     */
    created_by?: string;
    /**
     * - Flag indicating whether the
     * distribution should is done at the article level
     */
    article_level_distribution: boolean;
    collection: Collection;
    /**
     * - Type of price adjusment
     */
    type: string;
    /**
     * - Flag indicating whether refunds are
     * allowed (default: False)
     */
    allowed_refund?: boolean;
    /**
     * - Flag indicating whether the user is
     * authenticated
     */
    is_authenticated: boolean;
    /**
     * - The list of article object in the price adjustment
     */
    article_ids: Article[];
    meta?: any;
    /**
     * - The ID of the cart
     */
    cart_id: string;
    /**
     * - This field if set true will remove mop
     * type price adjustment.
     */
    auto_remove?: boolean;
};
/** @returns {CartItem} */
declare function CartItem(): CartItem;
type CartItem = {
    quantity?: number;
    product_id: string;
    size: string;
};
/** @returns {OpenapiCartDetailsRequest} */
declare function OpenapiCartDetailsRequest(): OpenapiCartDetailsRequest;
type OpenapiCartDetailsRequest = {
    cart_items: CartItem[];
};
/** @returns {CouponBreakup} */
declare function CouponBreakup(): CouponBreakup;
type CouponBreakup = {
    title?: string;
    max_discount_value?: number;
    value?: number;
    is_applied?: boolean;
    uid?: string;
    coupon_type?: string;
    sub_title?: string;
    coupon_value?: number;
    code?: string;
    type?: string;
    minimum_cart_value?: number;
    message?: string;
    description?: string;
};
/** @returns {DisplayBreakup} */
declare function DisplayBreakup(): DisplayBreakup;
type DisplayBreakup = {
    key?: string;
    value?: number;
    currency_code?: string;
    currency_symbol?: string;
    display?: string;
    message?: string[];
};
/** @returns {LoyaltyPoints} */
declare function LoyaltyPoints(): LoyaltyPoints;
type LoyaltyPoints = {
    is_applied?: boolean;
    total?: number;
    applicable?: number;
    description?: string;
};
/** @returns {RawBreakup} */
declare function RawBreakup(): RawBreakup;
type RawBreakup = {
    coupon?: number;
    gst_charges?: number;
    mrp_total?: number;
    fynd_cash?: number;
    vog?: number;
    gift_card?: number;
    cod_charge?: number;
    total?: number;
    discount?: number;
    delivery_charge?: number;
    you_saved?: number;
    subtotal?: number;
    convenience_fee?: number;
};
/** @returns {CartBreakup} */
declare function CartBreakup(): CartBreakup;
type CartBreakup = {
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
};
/** @returns {ProductImage} */
declare function ProductImage(): ProductImage;
type ProductImage = {
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
/** @returns {Tags} */
declare function Tags(): Tags;
type Tags = {
    tags?: any;
};
/** @returns {BaseInfo} */
declare function BaseInfo(): BaseInfo;
type BaseInfo = {
    uid?: number;
    name?: string;
};
/** @returns {ActionQuery} */
declare function ActionQuery(): ActionQuery;
type ActionQuery = {
    /**
     * - Contains list of product slug
     */
    product_slug?: string[];
};
/** @returns {ProductAction} */
declare function ProductAction(): ProductAction;
type ProductAction = {
    type?: string;
    url?: string;
    query?: ActionQuery;
};
/** @returns {CategoryInfo} */
declare function CategoryInfo(): CategoryInfo;
type CategoryInfo = {
    /**
     * - Product Category Id
     */
    uid?: number;
    name?: string;
};
/** @returns {CartProduct} */
declare function CartProduct(): CartProduct;
type CartProduct = {
    /**
     * - Unique product url name generated via product
     * name and other meta data
     */
    slug?: string;
    images?: ProductImage[];
    teaser_tag?: Tags;
    brand?: BaseInfo;
    action?: ProductAction;
    uid?: number;
    tags?: string[];
    _custom_json?: any;
    type?: string;
    name?: string;
    item_code?: string;
    categories?: CategoryInfo[];
    attributes?: any;
};
/** @returns {BasePrice} */
declare function BasePrice(): BasePrice;
type BasePrice = {
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
    marked?: number;
};
/** @returns {ArticlePriceInfo} */
declare function ArticlePriceInfo(): ArticlePriceInfo;
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
/** @returns {StoreInfo} */
declare function StoreInfo(): StoreInfo;
type StoreInfo = {
    uid?: number;
    name?: string;
    store_code?: string;
};
/** @returns {ProductArticle} */
declare function ProductArticle(): ProductArticle;
type ProductArticle = {
    seller_identifier?: string;
    quantity?: number;
    seller?: BaseInfo;
    cart_item_meta?: any;
    parent_item_identifiers?: any;
    is_gift_visible?: boolean;
    uid?: string;
    gift_card?: any;
    product_group_tags?: string[];
    identifier?: any;
    mto_quantity?: number;
    extra_meta?: any;
    type?: string;
    _custom_json?: any;
    price?: ArticlePriceInfo;
    meta?: any;
    size?: string;
    store?: StoreInfo;
    /**
     * - A list of article tags
     */
    tags?: string[];
};
/** @returns {Ownership2} */
declare function Ownership2(): Ownership2;
type Ownership2 = {
    /**
     * - Promo amount payable category
     */
    payable_category?: string;
    /**
     * - Promo amount bearable party
     */
    payable_by?: string;
};
/** @returns {DiscountRulesApp} */
declare function DiscountRulesApp(): DiscountRulesApp;
type DiscountRulesApp = {
    /**
     * - Offer for promotion
     */
    offer?: any;
    /**
     * - Raw offer details for promotion
     */
    raw_offer?: any;
    /**
     * - Item criteria of promotion
     */
    item_criteria?: any;
    /**
     * - Matched buy rules for promotion
     */
    matched_buy_rules?: string[];
};
/** @returns {AppliedFreeArticles} */
declare function AppliedFreeArticles(): AppliedFreeArticles;
type AppliedFreeArticles = {
    /**
     * - Parent item identifier for free article
     */
    parent_item_identifier?: string;
    /**
     * - Free article quantity
     */
    quantity?: number;
    /**
     * - Free article id
     */
    article_id?: string;
    /**
     * - Free gift items details
     */
    free_gift_item_details?: FreeGiftItems;
};
/** @returns {BuyRules} */
declare function BuyRules(): BuyRules;
type BuyRules = {
    /**
     * - Cart conditions details for promotion
     */
    cart_conditions?: any;
    /**
     * - Item criteria of promotion
     */
    item_criteria?: any;
};
/** @returns {AppliedPromotion} */
declare function AppliedPromotion(): AppliedPromotion;
type AppliedPromotion = {
    /**
     * - Quantity of article on which
     * promotion is applicable
     */
    article_quantity?: number;
    /**
     * - Ownership of promotion
     */
    ownership?: Ownership2;
    currency?: CartCurrency;
    /**
     * - Discount rules for promotions
     */
    discount_rules?: DiscountRulesApp[];
    /**
     * - Applied free
     * article for free gift item promotions
     */
    applied_free_articles?: AppliedFreeArticles[];
    /**
     * - Promotion name of current promotion
     */
    promotion_name?: string;
    /**
     * - Buy rules for promotions
     */
    buy_rules?: BuyRules[];
    /**
     * - Offer text of current promotion
     */
    offer_text?: string;
    /**
     * - Per unit discount amount applied with current promotion
     */
    amount?: number;
    /**
     * - Promotion type of current promotion
     */
    promotion_type?: string;
    /**
     * - If applied promotion is applied on
     * product MRP or ESP
     */
    mrp_promotion?: boolean;
    /**
     * - Promotion group for the promotion
     */
    promotion_group?: string;
    /**
     * - Promotion id
     */
    promo_id?: string;
    /**
     * - Meta object for extra data
     */
    meta?: any;
    /**
     * - Promotion code
     */
    code?: string;
};
/** @returns {PromiseFormatted} */
declare function PromiseFormatted(): PromiseFormatted;
type PromiseFormatted = {
    max?: string;
    min?: string;
};
/** @returns {PromiseISOFormat} */
declare function PromiseISOFormat(): PromiseISOFormat;
type PromiseISOFormat = {
    /**
     * - Max promise in ISO format.
     */
    max?: string;
    /**
     * - Min Promise in ISO format.
     */
    min?: string;
};
/** @returns {PromiseTimestamp} */
declare function PromiseTimestamp(): PromiseTimestamp;
type PromiseTimestamp = {
    max?: number;
    min?: number;
};
/** @returns {ShipmentPromise} */
declare function ShipmentPromise(): ShipmentPromise;
type ShipmentPromise = {
    formatted?: PromiseFormatted;
    timestamp?: PromiseTimestamp;
    iso?: PromiseISOFormat;
};
/** @returns {CouponDetails} */
declare function CouponDetails(): CouponDetails;
type CouponDetails = {
    discount_total_quantity?: number;
    discount_single_quantity?: number;
    code?: string;
};
/** @returns {ProductPrice} */
declare function ProductPrice(): ProductPrice;
type ProductPrice = {
    marked?: number;
    add_on?: number;
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
    selling?: number;
};
/** @returns {ProductPriceInfo} */
declare function ProductPriceInfo(): ProductPriceInfo;
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
/** @returns {CartProductIdentifer} */
declare function CartProductIdentifer(): CartProductIdentifer;
type CartProductIdentifer = {
    /**
     * - Article idenfier generated by cart
     */
    identifier?: string;
};
/** @returns {ProductAvailabilitySize} */
declare function ProductAvailabilitySize(): ProductAvailabilitySize;
type ProductAvailabilitySize = {
    display?: string;
    value?: string;
    is_available?: boolean;
};
/** @returns {ProductAvailability} */
declare function ProductAvailability(): ProductAvailability;
type ProductAvailability = {
    is_valid?: boolean;
    other_store_quantity?: number;
    deliverable?: boolean;
    available_sizes?: ProductAvailabilitySize[];
    out_of_stock?: boolean;
    sizes?: string[];
};
/** @returns {PromoMeta} */
declare function PromoMeta(): PromoMeta;
type PromoMeta = {
    message?: string;
};
/** @returns {CartProductInfo} */
declare function CartProductInfo(): CartProductInfo;
type CartProductInfo = {
    quantity?: number;
    product?: CartProduct;
    product_ean_id?: string;
    parent_item_identifiers?: any;
    is_set?: boolean;
    article?: ProductArticle;
    promotions_applied?: AppliedPromotion[];
    delivery_promise?: ShipmentPromise;
    key?: string;
    coupon?: CouponDetails;
    bulk_offer?: any;
    price?: ProductPriceInfo;
    coupon_message?: string;
    identifiers: CartProductIdentifer;
    message?: string;
    discount?: string;
    availability?: ProductAvailability;
    moq?: any;
    price_per_unit?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    custom_order?: any;
};
/** @returns {OpenapiCartDetailsResponse} */
declare function OpenapiCartDetailsResponse(): OpenapiCartDetailsResponse;
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
};
/** @returns {OpenApiErrorResponse} */
declare function OpenApiErrorResponse(): OpenApiErrorResponse;
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    /**
     * - Contains field name which has error as key and
     * error message as value
     */
    errors?: any;
};
/** @returns {ShippingAddress} */
declare function ShippingAddress(): ShippingAddress;
type ShippingAddress = {
    country?: string;
    state?: string;
    city?: string;
    phone?: number;
    area_code: string;
    country_iso_code?: string;
    country_phone_code?: string;
    meta?: any;
    address_type?: string;
    area?: string;
    area_code_slug?: string;
    name?: string;
    landmark?: string;
    email?: string;
    country_code?: string;
    pincode?: number;
    address?: string;
};
/** @returns {OpenApiCartServiceabilityRequest} */
declare function OpenApiCartServiceabilityRequest(): OpenApiCartServiceabilityRequest;
type OpenApiCartServiceabilityRequest = {
    cart_items: CartItem[];
    shipping_address: ShippingAddress;
};
/** @returns {OpenApiCartServiceabilityResponse} */
declare function OpenApiCartServiceabilityResponse(): OpenApiCartServiceabilityResponse;
type OpenApiCartServiceabilityResponse = {
    is_valid?: boolean;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    message?: string;
    breakup_values?: CartBreakup;
};
/** @returns {OpenApiFiles} */
declare function OpenApiFiles(): OpenApiFiles;
type OpenApiFiles = {
    key: string;
    values: string[];
};
/** @returns {CartItemMeta} */
declare function CartItemMeta(): CartItemMeta;
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
/** @returns {MultiTenderPaymentMeta} */
declare function MultiTenderPaymentMeta(): MultiTenderPaymentMeta;
type MultiTenderPaymentMeta = {
    payment_id?: string;
    payment_gateway?: string;
    extra_meta?: any;
    current_status?: string;
    order_id?: string;
};
/** @returns {MultiTenderPaymentMethod} */
declare function MultiTenderPaymentMethod(): MultiTenderPaymentMethod;
type MultiTenderPaymentMethod = {
    mode: string;
    /**
     * - Payment amount
     */
    amount: number;
    meta?: MultiTenderPaymentMeta;
    /**
     * - Payment mode name
     */
    name?: string;
};
/** @returns {OpenApiOrderItem} */
declare function OpenApiOrderItem(): OpenApiOrderItem;
type OpenApiOrderItem = {
    cashback_applied: number;
    quantity?: number;
    size: string;
    coupon_effective_discount: number;
    amount_paid: number;
    delivery_charges: number;
    price_marked: number;
    files?: OpenApiFiles[];
    meta?: CartItemMeta;
    extra_meta?: any;
    product_id: number;
    loyalty_discount?: number;
    discount: number;
    price_effective: number;
    payment_methods: MultiTenderPaymentMethod[];
    employee_discount?: number;
    cod_charges: number;
};
/** @returns {OpenApiPlatformCheckoutReq} */
declare function OpenApiPlatformCheckoutReq(): OpenApiPlatformCheckoutReq;
type OpenApiPlatformCheckoutReq = {
    payment_mode?: string;
    cart_value: number;
    cart_items: OpenApiOrderItem[];
    shipping_address?: ShippingAddress;
    loyalty_discount?: number;
    comment?: string;
    payment_methods: MultiTenderPaymentMethod[];
    employee_discount?: any;
    coupon?: string;
    cashback_applied: number;
    gstin?: string;
    billing_address: ShippingAddress;
    coupon_code: string;
    coupon_value: number;
    delivery_charges: number;
    affiliate_order_id?: string;
    currency_code?: string;
    order_id?: string;
    files?: OpenApiFiles[];
    cod_charges: number;
};
/** @returns {OpenApiCheckoutResponse} */
declare function OpenApiCheckoutResponse(): OpenApiCheckoutResponse;
type OpenApiCheckoutResponse = {
    success?: boolean;
    message?: string;
    /**
     * - Order id sent in request
     */
    order_ref_id?: string;
    /**
     * - Fynd order id
     */
    order_id: string;
};
/** @returns {AbandonedCart} */
declare function AbandonedCart(): AbandonedCart;
type AbandonedCart = {
    expire_at: string;
    promotion?: any;
    is_default: boolean;
    comment?: string;
    articles: any[];
    coupon?: any;
    bulk_coupon_discount?: number;
    _id: string;
    fynd_credits?: any;
    fc_index_map?: number[];
    order_id?: string;
    discount?: number;
    cod_charges?: any;
    payments?: any;
    payment_mode?: string;
    shipments?: any[];
    pick_up_customer_details?: any;
    uid: number;
    checkout_mode?: string;
    cart_value?: number;
    is_archive?: boolean;
    created_on: string;
    last_modified: string;
    meta?: any;
    buy_now?: boolean;
    is_active?: boolean;
    cashback: any;
    payment_methods?: any[];
    gstin?: string;
    delivery_charges?: any;
    merge_qty?: boolean;
    user_id: string;
    app_id?: string;
};
/** @returns {AbandonedCartResponse} */
declare function AbandonedCartResponse(): AbandonedCartResponse;
type AbandonedCartResponse = {
    items?: AbandonedCart[];
    result?: any;
    page?: Page;
    /**
     * - The request success is defined
     */
    success?: boolean;
    /**
     * - Message of the response
     */
    message?: string;
};
/** @returns {PaymentSelectionLock} */
declare function PaymentSelectionLock(): PaymentSelectionLock;
type PaymentSelectionLock = {
    payment_identifier?: string;
    default_options?: string;
    enabled?: boolean;
};
/** @returns {CartCurrency} */
declare function CartCurrency(): CartCurrency;
type CartCurrency = {
    /**
     * - Currency code defined by ISO 4217:2015
     */
    code?: string;
    symbol?: string;
};
/** @returns {CartDetailCoupon} */
declare function CartDetailCoupon(): CartDetailCoupon;
type CartDetailCoupon = {
    cashback_amount?: number;
    cashback_message_primary?: string;
    cashback_message_secondary?: string;
    coupon_code?: string;
    coupon_description?: string;
    coupon_id?: string;
    coupon_subtitle?: string;
    coupon_title?: string;
    coupon_type?: string;
    coupon_value?: number;
    discount?: number;
    is_applied?: boolean;
    is_valid?: boolean;
    maximum_discount_value?: number;
    message?: string;
    minimum_cart_value?: number;
};
/** @returns {ChargesThreshold} */
declare function ChargesThreshold(): ChargesThreshold;
type ChargesThreshold = {
    charges?: number;
    threshold?: number;
};
/** @returns {DeliveryChargesConfig} */
declare function DeliveryChargesConfig(): DeliveryChargesConfig;
type DeliveryChargesConfig = {
    enabled?: boolean;
    charges?: ChargesThreshold[];
};
/** @returns {CartCommonConfig} */
declare function CartCommonConfig(): CartCommonConfig;
type CartCommonConfig = {
    delivery_charges_config?: DeliveryChargesConfig;
};
/** @returns {CartDetailResponse} */
declare function CartDetailResponse(): CartDetailResponse;
type CartDetailResponse = {
    cart_id?: number;
    uid?: string;
    coupon_text?: string;
    id?: string;
    pan_config?: any;
    delivery_promise?: ShipmentPromise;
    comment?: string;
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    common_config?: CartCommonConfig;
    coupon?: CartDetailCoupon;
    restrict_checkout?: boolean;
    message?: string;
    notification?: any;
    staff_user_id?: string;
    success?: boolean;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    currency?: CartCurrency;
    checkout_mode?: string;
    last_modified?: string;
    buy_now?: boolean;
    gstin?: string;
    applied_promo_details?: AppliedPromotion[];
    pan_no?: string;
    custom_cart_meta?: any;
};
/** @returns {AddProductCart} */
declare function AddProductCart(): AddProductCart;
type AddProductCart = {
    quantity?: number;
    item_size?: string;
    seller_id?: number;
    parent_item_identifiers?: any[];
    product_group_tags?: string[];
    article_id?: string;
    article_assignment?: any;
    store_id?: number;
    display?: string;
    item_id?: number;
    extra_meta?: any;
    _custom_json?: any;
    meta?: any;
    pos?: boolean;
    /**
     * - Add items using seller identifier for store os
     */
    seller_identifier?: string;
};
/** @returns {AddCartRequest} */
declare function AddCartRequest(): AddCartRequest;
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
/** @returns {AddCartDetailResponse} */
declare function AddCartDetailResponse(): AddCartDetailResponse;
type AddCartDetailResponse = {
    /**
     * - True if all items are added successfully.
     * False if partially added or not added.
     */
    success?: boolean;
    cart?: CartDetailResponse;
    /**
     * - When adding multiple items check if all
     * added. True if only few are added.
     */
    partial?: boolean;
    message?: string;
};
/** @returns {UpdateProductCart} */
declare function UpdateProductCart(): UpdateProductCart;
type UpdateProductCart = {
    quantity?: number;
    item_size?: string;
    parent_item_identifiers?: any;
    meta?: any;
    extra_meta?: any;
    _custom_json?: any;
    item_id?: number;
    item_index?: number;
    identifiers: CartProductIdentifer;
    article_id?: string;
};
/** @returns {UpdateCartRequest} */
declare function UpdateCartRequest(): UpdateCartRequest;
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
/** @returns {UpdateCartDetailResponse} */
declare function UpdateCartDetailResponse(): UpdateCartDetailResponse;
type UpdateCartDetailResponse = {
    /**
     * - True if all items are added successfully.
     * False if partially added or not added.
     */
    success?: boolean;
    cart?: CartDetailResponse;
    message?: string;
};
/** @returns {OverrideCartItemPromo} */
declare function OverrideCartItemPromo(): OverrideCartItemPromo;
type OverrideCartItemPromo = {
    promo_id: string;
    promo_amount: string;
    promo_desc?: string;
    rwrd_tndr?: string;
    item_list?: any[];
    parent_promo_id?: string;
};
/** @returns {OverrideCartItem} */
declare function OverrideCartItem(): OverrideCartItem;
type OverrideCartItem = {
    seller_identifier?: string;
    quantity?: number;
    size: string;
    price_marked: number;
    amount_paid: number;
    promo_list?: OverrideCartItemPromo[];
    extra_meta?: any;
    item_id: number;
    discount: number;
    price_effective: number;
};
/** @returns {OverrideCheckoutReq} */
declare function OverrideCheckoutReq(): OverrideCheckoutReq;
type OverrideCheckoutReq = {
    cart_id: string;
    payment_mode: string;
    billing_address?: any;
    merchant_code: string;
    payment_identifier: string;
    currency_code: string;
    aggregator: string;
    order_type: string;
    callback_url?: string;
    cart_items: OverrideCartItem[];
    ordering_store?: number;
    shipping_address?: any;
};
/** @returns {OverrideCheckoutResponse} */
declare function OverrideCheckoutResponse(): OverrideCheckoutResponse;
type OverrideCheckoutResponse = {
    data: any;
    cart: any;
    success: string;
    order_id: string;
    message: string;
};
/** @returns {GetShareCartLinkRequest} */
declare function GetShareCartLinkRequest(): GetShareCartLinkRequest;
type GetShareCartLinkRequest = {
    /**
     * - Cart uid for generating sharing
     */
    id?: string;
    /**
     * - Staff, Ordering store or any other data. This
     * data will be used to generate link as well as sent as shared details.
     */
    meta?: any;
};
/** @returns {GetShareCartLinkResponse} */
declare function GetShareCartLinkResponse(): GetShareCartLinkResponse;
type GetShareCartLinkResponse = {
    /**
     * - Short url unique id
     */
    token?: string;
    /**
     * - Short shareable final url
     */
    share_url?: string;
};
/** @returns {SharedCartDetails} */
declare function SharedCartDetails(): SharedCartDetails;
type SharedCartDetails = {
    /**
     * - Share link device and other source information
     */
    source?: any;
    /**
     * - User details of who generated share link
     */
    user?: any;
    /**
     * - Short link id
     */
    token?: string;
    created_on?: string;
    /**
     * - Meta data sent while generating share cart link
     */
    meta?: any;
};
/** @returns {SharedCart} */
declare function SharedCart(): SharedCart;
type SharedCart = {
    coupon_text?: string;
    id?: string;
    delivery_promise?: ShipmentPromise;
    comment?: string;
    items?: CartProductInfo[];
    shared_cart_details?: SharedCartDetails;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    uid?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
    last_modified?: string;
    buy_now?: boolean;
    cart_id?: number;
    gstin?: string;
    custom_cart_meta?: any;
};
/** @returns {SharedCartResponse} */
declare function SharedCartResponse(): SharedCartResponse;
type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
/** @returns {CartList} */
declare function CartList(): CartList;
type CartList = {
    cart_id?: string;
    pick_up_customer_details?: any;
    cart_value?: number;
    created_on?: string;
    user_id?: string;
    currency_code?: string;
    item_counts?: number;
};
/** @returns {MultiCartResponse} */
declare function MultiCartResponse(): MultiCartResponse;
type MultiCartResponse = {
    success?: boolean;
    data?: CartList[];
};
/** @returns {UpdateUserCartMapping} */
declare function UpdateUserCartMapping(): UpdateUserCartMapping;
type UpdateUserCartMapping = {
    user_id: string;
};
/** @returns {UserInfo} */
declare function UserInfo(): UserInfo;
type UserInfo = {
    gender?: string;
    modified_on?: string;
    _id?: string;
    uid?: string;
    external_id?: string;
    mobile?: string;
    last_name?: string;
    created_at?: string;
    first_name?: string;
};
/** @returns {UserCartMappingResponse} */
declare function UserCartMappingResponse(): UserCartMappingResponse;
type UserCartMappingResponse = {
    coupon_text?: string;
    user?: UserInfo;
    id?: string;
    pan_config?: any;
    delivery_promise?: ShipmentPromise;
    comment?: string;
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    currency?: CartCurrency;
    checkout_mode?: string;
    last_modified?: string;
    buy_now?: boolean;
    gstin?: string;
    custom_cart_meta?: any;
    applied_promo_details?: AppliedPromotion[];
    pan_no?: string;
};
/** @returns {PlatformAddCartRequest} */
declare function PlatformAddCartRequest(): PlatformAddCartRequest;
type PlatformAddCartRequest = {
    user_id?: string;
    new_cart?: boolean;
    items?: AddProductCart[];
};
/** @returns {PlatformUpdateCartRequest} */
declare function PlatformUpdateCartRequest(): PlatformUpdateCartRequest;
type PlatformUpdateCartRequest = {
    user_id?: string;
    items?: UpdateProductCart[];
    operation: string;
};
/** @returns {DeleteCartRequest} */
declare function DeleteCartRequest(): DeleteCartRequest;
type DeleteCartRequest = {
    cart_id_list?: string[];
};
/** @returns {DeleteCartDetailResponse} */
declare function DeleteCartDetailResponse(): DeleteCartDetailResponse;
type DeleteCartDetailResponse = {
    /**
     * - True if cart is archived successfully. False
     * if not archived.
     */
    success?: boolean;
    message?: string;
};
/** @returns {CartItemCountResponse} */
declare function CartItemCountResponse(): CartItemCountResponse;
type CartItemCountResponse = {
    /**
     * - Item count present in cart
     */
    user_cart_items_count?: number;
};
/** @returns {Coupon} */
declare function Coupon(): Coupon;
type Coupon = {
    title?: string;
    max_discount_value?: number;
    coupon_code?: string;
    is_applied?: boolean;
    coupon_type?: string;
    expires_on?: string;
    coupon_value?: number;
    sub_title?: string;
    minimum_cart_value?: number;
    is_applicable?: boolean;
    message?: string;
    description?: string;
    start_date?: string;
    end_date?: string;
    coupon_applicable_message?: string;
};
/** @returns {PageCoupon} */
declare function PageCoupon(): PageCoupon;
type PageCoupon = {
    has_next?: boolean;
    current?: number;
    total?: number;
    total_item_count?: number;
    has_previous?: boolean;
};
/** @returns {GetCouponResponse} */
declare function GetCouponResponse(): GetCouponResponse;
type GetCouponResponse = {
    available_coupon_list?: Coupon[];
    page?: PageCoupon;
};
/** @returns {ApplyCouponRequest} */
declare function ApplyCouponRequest(): ApplyCouponRequest;
type ApplyCouponRequest = {
    /**
     * - Coupon code to be applied
     */
    coupon_code: string;
};
/** @returns {GeoLocation} */
declare function GeoLocation(): GeoLocation;
type GeoLocation = {
    longitude?: number;
    latitude?: number;
};
/** @returns {PlatformAddress} */
declare function PlatformAddress(): PlatformAddress;
type PlatformAddress = {
    phone?: string;
    id?: string;
    area_code_slug?: string;
    country_code?: string;
    geo_location?: GeoLocation;
    country?: string;
    state?: string;
    is_default_address?: boolean;
    tags?: string[];
    created_by_user_id?: string;
    landmark?: string;
    email?: string;
    area_code?: string;
    checkout_mode?: string;
    meta?: any;
    is_active?: boolean;
    name?: string;
    google_map_point?: any;
    cart_id?: string;
    city?: string;
    sector?: string;
    /**
     * - State code for international address
     */
    state_code?: string;
    area?: string;
    user_id?: string;
    address_type?: string;
    address?: string;
    country_phone_code?: string;
    country_iso_code?: string;
    _custom_json?: any;
};
/** @returns {PlatformGetAddressesResponse} */
declare function PlatformGetAddressesResponse(): PlatformGetAddressesResponse;
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
/** @returns {SaveAddressResponse} */
declare function SaveAddressResponse(): SaveAddressResponse;
type SaveAddressResponse = {
    id?: string;
    success?: boolean;
    is_default_address?: boolean;
};
/** @returns {UpdateAddressResponse} */
declare function UpdateAddressResponse(): UpdateAddressResponse;
type UpdateAddressResponse = {
    id?: string;
    is_default_address?: boolean;
    success?: boolean;
    is_updated?: boolean;
};
/** @returns {DeleteAddressResponse} */
declare function DeleteAddressResponse(): DeleteAddressResponse;
type DeleteAddressResponse = {
    id?: string;
    is_deleted?: boolean;
};
/** @returns {PlatformSelectCartAddressRequest} */
declare function PlatformSelectCartAddressRequest(): PlatformSelectCartAddressRequest;
type PlatformSelectCartAddressRequest = {
    cart_id?: string;
    billing_address_id?: string;
    checkout_mode?: string;
    id?: string;
    user_id?: string;
};
/** @returns {ShipmentArticle} */
declare function ShipmentArticle(): ShipmentArticle;
type ShipmentArticle = {
    meta?: string;
    quantity?: string;
    article_id?: string;
};
/** @returns {PlatformShipmentResponse} */
declare function PlatformShipmentResponse(): PlatformShipmentResponse;
type PlatformShipmentResponse = {
    shipments?: number;
    fulfillment_id?: number;
    items?: CartProductInfo[];
    dp_options?: any;
    shipment_type?: string;
    order_type?: string;
    box_type?: string;
    promise?: ShipmentPromise;
    dp_id?: string;
    fulfillment_type?: string;
    articles?: ShipmentArticle[];
};
/** @returns {PlatformCartShipmentsResponse} */
declare function PlatformCartShipmentsResponse(): PlatformCartShipmentsResponse;
type PlatformCartShipmentsResponse = {
    coupon_text?: string;
    id?: string;
    pan_config?: any;
    delivery_promise?: ShipmentPromise;
    comment?: string;
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
    staff_user_id?: string;
    is_valid?: boolean;
    shipments?: PlatformShipmentResponse[];
    currency?: CartCurrency;
    checkout_mode?: string;
    last_modified?: string;
    buy_now?: boolean;
    gstin?: string;
    applied_promo_details?: AppliedPromotion[];
    error?: boolean;
    pan_no?: string;
    custom_cart_meta?: any;
};
/** @returns {UpdateCartShipmentItem} */
declare function UpdateCartShipmentItem(): UpdateCartShipmentItem;
type UpdateCartShipmentItem = {
    /**
     * - Quantity of product in shipment
     */
    quantity?: number;
    /**
     * - Shipment delivery type
     */
    shipment_type: string;
    /**
     * - Article mongo id
     */
    article_uid: string;
};
/** @returns {UpdateCartShipmentRequest} */
declare function UpdateCartShipmentRequest(): UpdateCartShipmentRequest;
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
/** @returns {PlatformCartMetaRequest} */
declare function PlatformCartMetaRequest(): PlatformCartMetaRequest;
type PlatformCartMetaRequest = {
    gstin?: string;
    /**
     * - Customer contact details for
     * customer pickup at store
     */
    pick_up_customer_details?: any;
    checkout_mode?: string;
    gift_details?: any;
    pan_no?: string;
    comment?: string;
    /**
     * - Staff user id
     */
    staff_user_id?: string;
};
/** @returns {CartMetaResponse} */
declare function CartMetaResponse(): CartMetaResponse;
type CartMetaResponse = {
    is_valid?: boolean;
    message?: string;
};
/** @returns {CartMetaMissingResponse} */
declare function CartMetaMissingResponse(): CartMetaMissingResponse;
type CartMetaMissingResponse = {
    errors?: string[];
};
/** @returns {StaffCheckout} */
declare function StaffCheckout(): StaffCheckout;
type StaffCheckout = {
    employee_code?: string;
    _id: string;
    user: string;
    last_name: string;
    first_name: string;
};
/** @returns {CustomerDetails} */
declare function CustomerDetails(): CustomerDetails;
type CustomerDetails = {
    name?: string;
    email?: string;
    mobile: string;
};
/** @returns {Files} */
declare function Files(): Files;
type Files = {
    key: string;
    values: string[];
};
/** @returns {CheckCart} */
declare function CheckCart(): CheckCart;
type CheckCart = {
    coupon_text?: string;
    cod_message?: string;
    id?: string;
    store_code?: string;
    delivery_promise?: ShipmentPromise;
    comment?: string;
    user_type?: string;
    items?: CartProductInfo[];
    error_message?: string;
    success?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
    order_id?: string;
    message?: string;
    breakup_values?: CartBreakup;
    cod_charges?: number;
    is_valid?: boolean;
    uid?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
    last_modified?: string;
    buy_now?: boolean;
    delivery_charge_order_value?: number;
    cart_id?: number;
    store_emps?: any[];
    gstin?: string;
    cod_available?: boolean;
    delivery_charges?: number;
    custom_cart_meta?: any;
};
/** @returns {CartCheckoutResponse} */
declare function CartCheckoutResponse(): CartCheckoutResponse;
type CartCheckoutResponse = {
    app_intercept_url?: string;
    data?: any;
    cart?: CheckCart;
    success?: boolean;
    callback_url?: string;
    payment_confirm_url?: string;
    order_id?: string;
    message?: string;
};
/** @returns {CartDeliveryModesResponse} */
declare function CartDeliveryModesResponse(): CartDeliveryModesResponse;
type CartDeliveryModesResponse = {
    /**
     * - Store pick up available store uids
     */
    pickup_stores?: number[];
    /**
     * - Available delivery modes
     */
    available_modes?: string[];
};
/** @returns {PickupStoreDetail} */
declare function PickupStoreDetail(): PickupStoreDetail;
type PickupStoreDetail = {
    country?: string;
    state?: string;
    city?: string;
    phone?: string;
    area_code?: string;
    uid?: number;
    area_code_slug?: string;
    address_type?: string;
    area?: string;
    id?: number;
    store_manager_name?: string;
    name?: string;
    store_code?: string;
    landmark?: string;
    email?: string;
    pincode?: number;
    address?: string;
};
/** @returns {StoreDetailsResponse} */
declare function StoreDetailsResponse(): StoreDetailsResponse;
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
/** @returns {UpdateCartPaymentRequest} */
declare function UpdateCartPaymentRequest(): UpdateCartPaymentRequest;
type UpdateCartPaymentRequest = {
    address_id?: string;
    payment_mode?: string;
    aggregator_name?: string;
    merchant_code?: string;
    payment_identifier?: string;
    id?: string;
};
/** @returns {CouponValidity} */
declare function CouponValidity(): CouponValidity;
type CouponValidity = {
    title?: string;
    next_validation_required?: boolean;
    valid?: boolean;
    display_message_en?: string;
    code?: string;
    discount?: number;
};
/** @returns {PaymentCouponValidate} */
declare function PaymentCouponValidate(): PaymentCouponValidate;
type PaymentCouponValidate = {
    success: boolean;
    message?: string;
    coupon_validity?: CouponValidity;
};
/** @returns {PaymentMeta} */
declare function PaymentMeta(): PaymentMeta;
type PaymentMeta = {
    payment_gateway?: string;
    type?: string;
    payment_identifier?: string;
    merchant_code?: string;
};
/** @returns {PaymentMethod} */
declare function PaymentMethod(): PaymentMethod;
type PaymentMethod = {
    mode: string;
    payment?: string;
    payment_meta: PaymentMeta;
    amount?: number;
    name?: string;
    payment_extra_identifiers?: any;
};
/** @returns {PlatformCartCheckoutDetailV2Request} */
declare function PlatformCartCheckoutDetailV2Request(): PlatformCartCheckoutDetailV2Request;
type PlatformCartCheckoutDetailV2Request = {
    address_id?: string;
    payment_identifier?: string;
    payment_params?: any;
    custom_meta?: any;
    payment_auto_confirm?: boolean;
    id: string;
    pos?: boolean;
    billing_address_id?: string;
    merchant_code?: string;
    aggregator?: string;
    pick_at_store_uid?: number;
    device_id?: string;
    delivery_address?: any;
    payment_mode?: string;
    checkout_mode?: string;
    /**
     * - Customer details
     */
    customer_details?: any;
    meta?: any;
    payment_methods: PaymentMethod[];
    staff?: StaffCheckout;
    employee_code?: string;
    billing_address?: any;
    callback_url?: string;
    user_id: string;
    extra_meta?: any;
    order_type: string;
    /**
     * - List of file url
     */
    files?: Files[];
    ordering_store?: number;
    iin?: string;
    network?: string;
    type?: string;
    card_id?: string;
};
/** @returns {UpdateCartPaymentRequestV2} */
declare function UpdateCartPaymentRequestV2(): UpdateCartPaymentRequestV2;
type UpdateCartPaymentRequestV2 = {
    address_id?: string;
    payment_mode?: string;
    aggregator_name?: string;
    merchant_code?: string;
    payment_identifier?: string;
    id?: string;
    payment_methods?: PaymentMethod[];
};
/** @returns {PriceMinMax} */
declare function PriceMinMax(): PriceMinMax;
type PriceMinMax = {
    min?: number;
    max?: number;
};
/** @returns {ItemPriceDetails} */
declare function ItemPriceDetails(): ItemPriceDetails;
type ItemPriceDetails = {
    marked?: PriceMinMax;
    effective?: PriceMinMax;
    currency?: string;
};
/** @returns {FreeGiftItems} */
declare function FreeGiftItems(): FreeGiftItems;
type FreeGiftItems = {
    /**
     * - Item slug
     */
    item_slug?: string;
    /**
     * - Item name
     */
    item_name?: string;
    item_price_details?: ItemPriceDetails;
    /**
     * - Item brand name
     */
    item_brand_name?: string;
    /**
     * - Item id
     */
    item_id?: number;
    /**
     * - Item images URL
     */
    item_images_url?: string[];
};
/** @returns {PromotionOffer} */
declare function PromotionOffer(): PromotionOffer;
type PromotionOffer = {
    /**
     * - Promotion id
     */
    id?: string;
    /**
     * - Buy rules of promotions
     */
    buy_rules?: any;
    /**
     * - Offer title
     */
    offer_text?: string;
    /**
     * - Promotion type
     */
    promotion_type?: string;
    /**
     * - Name of the promotion
     */
    promotion_name?: string;
    /**
     * - Group of promotion belongs to
     */
    promotion_group?: string;
    /**
     * - Datetime ISOString for promotion end date
     */
    valid_till?: string;
    /**
     * - Discount rules of promotions
     */
    discount_rules?: any[];
    /**
     * - Details of free gift items
     */
    free_gift_items?: FreeGiftItems[];
    /**
     * - Offer details including T&C
     */
    description?: string;
};
/** @returns {PromotionOffersResponse} */
declare function PromotionOffersResponse(): PromotionOffersResponse;
type PromotionOffersResponse = {
    available_promotions?: PromotionOffer[];
};
/** @returns {PromotionPaymentOffer} */
declare function PromotionPaymentOffer(): PromotionPaymentOffer;
type PromotionPaymentOffer = {
    /**
     * - Application id
     */
    application_id?: string;
    /**
     * - Buy rules of promotions
     */
    buy_rules?: any[];
    /**
     * - Price on which promotion calculated
     */
    calculate_on?: string;
    /**
     * - Offer details including T&C
     */
    description?: string;
    /**
     * - Discount rules of promotions
     */
    discount_rules?: any[];
    /**
     * - Promotion id
     */
    id?: string;
    /**
     * - Offer title
     */
    offer_text?: string;
    /**
     * - Group of promotion belongs to
     */
    promotion_group?: string;
    /**
     * - Promotion type
     */
    promotion_type?: string;
    /**
     * - Name of the promotion
     */
    promotion_name?: string;
};
/** @returns {PromotionPaymentOffersResponse} */
declare function PromotionPaymentOffersResponse(): PromotionPaymentOffersResponse;
type PromotionPaymentOffersResponse = {
    success?: boolean;
    promotions?: PromotionPaymentOffer[];
};
