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
 * @property {boolean} [is_active]
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
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef CouponSchedule
 * @property {string} [end]
 * @property {string} [start]
 * @property {NextSchedule[]} [next_schedule]
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
 * @property {string} [calculate_on]
 * @property {string} [value_type]
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
 * @property {boolean} [has_next] - True if more records are present for next pages
 * @property {number} [item_total] - Total coupon count in system
 * @property {number} [current] - Current page no
 * @property {string} [next_id] - Cursor id for next set of records.
 * @property {number} [page] - Page requested
 * @property {string} [last_id] - Last objects id
 * @property {string} type
 * @property {number} [size] - Current request page size
 * @property {boolean} [has_previous] - True if more records are present for
 *   previous pages. Sent for cursor pagination
 */
/**
 * @typedef CouponObj
 * @property {CouponDateMeta} [date_meta]
 * @property {Ownership} ownership
 * @property {CouponAuthor} [author]
 * @property {State} [state]
 * @property {CouponSchedule} [_schedule]
 * @property {DisplayMeta} display_meta
 * @property {string} code
 * @property {string} type_slug
 * @property {RuleDefinition} rule_definition
 * @property {string} [_id] - Coupon id
 * @property {CouponMedias[]} [medias]
 */
/**
 * @typedef CouponsResponse
 * @property {CouponObj[]} [items]
 * @property {Page} [page]
 * @property {boolean} [success]
 */
/**
 * @typedef CouponMedias
 * @property {string} [alt]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [key]
 */
/**
 * @typedef CouponDetailObj
 * @property {CouponDateMeta} [date_meta]
 * @property {Ownership} [ownership]
 * @property {CouponAuthor} [author]
 * @property {State} [state]
 * @property {Restrictions} [restrictions]
 * @property {Validation} [validation]
 * @property {CouponAction} [action]
 * @property {string[]} [tags]
 * @property {CouponSchedule} [_schedule]
 * @property {Rule[]} [rule]
 * @property {DisplayMeta} [display_meta]
 * @property {string} [code]
 * @property {string} [type_slug]
 * @property {Identifier} [identifiers]
 * @property {Validity} [validity]
 * @property {RuleDefinition} [rule_definition]
 * @property {string} [_id] - Coupon id
 * @property {boolean} [is_archived]
 */
/**
 * @typedef CouponDetailResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CouponDetailObj} [data]
 */
/**
 * @typedef TagsViewResponse
 * @property {boolean} [success]
 * @property {string[]} [items]
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
 * @typedef CartMetaConfigOperationErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} [errors]
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
 * @property {string} [_id]
 * @property {boolean} [is_archived]
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
 * @property {string} [type]
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
 * @property {PromotionPaymentModes} [payments]
 * @property {UserRegistered} [user_registered]
 * @property {string[]} [platforms]
 * @property {PostOrder1} [post_order]
 * @property {number[]} [user_groups]
 * @property {number} [order_quantity]
 * @property {boolean} [anonymous_users]
 * @property {string[]} [user_id]
 * @property {UsesRestriction1} uses
 * @property {number[]} [ordering_stores]
 * @property {string} [user_type]
 */
/**
 * @typedef PromotionSchedule
 * @property {string} end
 * @property {string} start
 * @property {boolean} published
 * @property {NextSchedule[]} [next_schedule]
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
 * @property {string} promo_group - Group into which promotion fall
 * @property {string} [mode] - Promotion mode
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} [ownership]
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionAuthor} [author]
 * @property {PromotionDateMeta} date_meta
 * @property {string} [_id] - Promotion id
 * @property {string} [code]
 * @property {string[]} [tags]
 */
/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PromotionAdd
 * @property {string} [_id]
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
 * @property {ItemCriteria} [indexed_criteria]
 * @property {string[]} [tags]
 */
/**
 * @typedef PromotionUpdate
 * @property {string} [_id]
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
 * @property {PromoIndexedCriteria} [indexed_criteria]
 * @property {string[]} [tags]
 */
/**
 * @typedef PromoIndexedCriteria
 * @property {string[]} [cart_quantity]
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
 * @typedef PromotionPartialUpdate
 * @property {boolean} [publish] - Send true to publish promotion
 * @property {PromotionSchedule} [schedule]
 */
/**
 * @typedef ActivePromos
 * @property {string} [_id]
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
 * @typedef ActivePromosResponse
 * @property {string} [status]
 * @property {ActivePromos[]} [items]
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
 * @typedef OrderPlacing
 * @property {boolean} [enabled]
 * @property {string} [message]
 */
/**
 * @typedef PanCard
 * @property {boolean} [enabled]
 * @property {number} [cod_threshold_amount]
 * @property {number} [online_threshold_amount]
 */
/**
 * @typedef CartMetaConfigUpdate
 * @property {number} [min_cart_value]
 * @property {number} [max_cart_value]
 * @property {boolean} [bulk_coupons]
 * @property {number} [max_cart_items]
 * @property {string} [gift_display_text]
 * @property {DeliveryCharges} [delivery_charges]
 * @property {DeliveryCharges} [international_delivery_charges]
 * @property {boolean} [revenue_engine_coupon]
 * @property {number} [gift_pricing]
 * @property {boolean} [enabled]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {string} [slug]
 * @property {boolean} [is_universal]
 * @property {number} [company_id]
 * @property {string} [updated_on]
 * @property {string} [last_modified_by]
 * @property {OrderPlacing} [order_placing]
 * @property {string} [name]
 * @property {string[]} [article_tags]
 * @property {boolean} [allow_coupon_with_rewards]
 * @property {boolean} [gst_input]
 * @property {boolean} [staff_selection]
 * @property {boolean} [placing_for_customer]
 * @property {PanCard} [pan_card]
 * @property {boolean} [empty_cart]
 * @property {string} [id]
 */
/**
 * @typedef TimeStampIDResponse
 * @property {string} [id]
 * @property {string} [app_id]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {string} [last_modified_by]
 */
/**
 * @typedef CartMetaConfigDetailResponse
 * @property {boolean} [success]
 * @property {Object} [data]
 */
/**
 * @typedef CartMetaConfigListResponse
 * @property {boolean} [success]
 * @property {CartMetaConfigListObject[]} [data]
 */
/**
 * @typedef CartMetaConfigListObject
 * @property {string} [id]
 * @property {string} [slug]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {boolean} [is_active]
 */
/**
 * @typedef CartMetaConfigAddResponse
 * @property {boolean} [success]
 * @property {CartMetaConfigAdd} [data]
 */
/**
 * @typedef CartMetaConfigAdd
 * @property {number} [min_cart_value]
 * @property {number} [max_cart_value]
 * @property {boolean} [bulk_coupons]
 * @property {number} [max_cart_items]
 * @property {string} [gift_display_text]
 * @property {DeliveryCharges} [delivery_charges]
 * @property {DeliveryCharges} [international_delivery_charges]
 * @property {boolean} [revenue_engine_coupon]
 * @property {number} [gift_pricing]
 * @property {boolean} [enabled]
 * @property {string} [app_id]
 * @property {string} slug
 * @property {boolean} [is_universal]
 * @property {number} [company_id]
 * @property {string} [updated_on]
 * @property {string} [last_modified_by]
 * @property {string} [id]
 * @property {string} name
 * @property {boolean} [is_active]
 * @property {OrderPlacing} [order_placing]
 * @property {string[]} [article_tags]
 * @property {boolean} [allow_coupon_with_rewards]
 * @property {boolean} [gst_input]
 * @property {boolean} [staff_selection]
 * @property {boolean} [placing_for_customer]
 * @property {PanCard} [pan_card]
 * @property {boolean} [empty_cart]
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
 * @property {PostOrder1} [post_order]
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
 *   allowed (default: false)
 * @property {boolean} is_authenticated - Flag indicating whether the user is
 *   authenticated
 * @property {Article[]} article_ids - The list of article object in the price adjustment
 * @property {boolean} [remove_articles] - This field if set true will remove
 *   all articles in price adjustment if article_ids are present
 * @property {boolean} [auto_remove] - This field if set true will remove mop
 *   type price adjustment.
 * @property {Object} [meta]
 * @property {string} cart_id - The ID of the cart
 * @property {boolean} [allow_refund]
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
 *   allowed (default: false)
 * @property {boolean} is_authenticated - Flag indicating whether the user is
 *   authenticated
 * @property {Article[]} article_ids - The list of article object in the price adjustment
 * @property {Object} [meta]
 * @property {string} cart_id - The ID of the cart
 * @property {boolean} [remove_articles] - This field if set true will remove
 *   all articles in price adjustment if article_ids are present
 * @property {boolean} [auto_remove] - This field if set true will remove mop
 *   type price adjustment.
 * @property {boolean} [is_active]
 * @property {string} [created_by]
 * @property {number} [cart_value]
 * @property {string} [modified_by]
 * @property {string} [distribution_level] - Distribution level of price adjusment
 * @property {string} [distribution_type] - Distribution type of price adjusment
 *   in case of shipment distribution level
 */
/**
 * @typedef AddPriceAdjustmentResponse
 * @property {PriceAdjustment} [data]
 * @property {boolean} [success]
 * @property {PriceAdjustment[]} [price_adjustments]
 */
/**
 * @typedef UpdatePriceAdjustmentResponse
 * @property {PriceAdjustment} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef PriceAdjustmentResponse
 * @property {PriceAdjustment[]} [data]
 * @property {boolean} [success]
 * @property {PriceAdjustment[]} [price_adjustments]
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
 *   allowed (default: false)
 * @property {boolean} is_authenticated - Flag indicating whether the user is
 *   authenticated
 * @property {Article[]} article_ids - The list of article object in the price adjustment
 * @property {Object} [meta]
 * @property {string} cart_id - The ID of the cart
 * @property {boolean} [remove_articles] - This field if set true will remove
 *   all articles in price adjustment if article_ids are present
 * @property {boolean} [auto_remove] - This field if set true will remove mop
 *   type price adjustment.
 * @property {string} [distribution_level] - Distribution level of price adjusment
 * @property {string} [distribution_type] - Distribution type of price adjusment
 *   in case of shipment distribution level
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
 * @property {number} [original]
 * @property {string} [attr]
 * @property {Object} [meta]
 */
/**
 * @typedef LoyaltyPoints
 * @property {boolean} [is_applied]
 * @property {number} [total]
 * @property {number} [applicable]
 * @property {string} [description]
 * @property {string} [message]
 */
/**
 * @typedef RawBreakup
 * @property {number} [promotion]
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
 * @property {number} [sub_total]
 * @property {number} [convenience_fee]
 * @property {number} [total_charge]
 * @property {number} [mop_total]
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
 * @property {Object} [teaser_tag]
 * @property {BaseInfo} [brand]
 * @property {ProductAction} [action]
 * @property {number} [uid]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [item_code]
 * @property {CategoryInfo[]} [categories]
 * @property {ProductAttributes} [attributes]
 */
/**
 * @typedef ProductAttributes
 * @property {string} [product_type]
 * @property {string} [item_code]
 * @property {string} [primary_color_hex]
 * @property {string} [primary_material]
 * @property {string} [primary_color]
 * @property {string} [variant]
 * @property {string} [color]
 * @property {string} [season]
 * @property {string} [style_note]
 */
/**
 * @typedef BasePrice
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 * @property {number} [selling]
 */
/**
 * @typedef ArticleAppliedPriceAdjustment
 * @property {Object} [adjusted_value] - Value of price adjustment created along
 *   with destination currency
 * @property {boolean} [article_level_distribution] - Boolean value true if
 *   price adjustment is distributed over articles
 * @property {string} [article_id] - Article Id of product
 * @property {number} [applied_quantity] - Article quantity on which this price
 *   adjusment applied
 * @property {Object} [meta] - Meta data added in article of price adjustment
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
 * @typedef ArticleGiftCard
 * @property {number} [gift_price]
 * @property {string} [display_text]
 * @property {boolean} [is_gift_applied]
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
 * @property {ArticleGiftCard} [gift_card]
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
 * @typedef PromoDiscountRuleOffer
 * @property {number} [max_offer_quantity]
 * @property {number} [discount_percentage]
 */
/**
 * @typedef PromoDiscountRuleRawOffer
 * @property {string} [buy_condition]
 * @property {string} [discount_type]
 * @property {PromoDiscountRuleOffer} [offer]
 * @property {PromoDiscountRuleItemCriteria} [item_criteria]
 */
/**
 * @typedef PromoDiscountRuleItemCriteria
 * @property {number[]} [item_id]
 * @property {string[]} [buy_rules]
 */
/**
 * @typedef DiscountRulesApp
 * @property {PromoDiscountRuleOffer} [offer]
 * @property {PromoDiscountRuleRawOffer} [raw_offer]
 * @property {PromoDiscountRuleItemCriteria} [item_criteria]
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
 * @typedef PromoBuyRuleCartConditions
 * @property {PromoBuyRuleCompareFieldsTypes} [cart_quantity]
 * @property {PromoBuyRuleCompareFieldsTypes} [cart_total]
 * @property {number[]} [item_id]
 * @property {number[]} [item_store]
 * @property {number[]} [item_company]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_category]
 * @property {number[]} [item_exclude_category]
 * @property {number[]} [item_l1_category]
 * @property {number[]} [item_exclude_l1_category]
 * @property {number[]} [item_l2_category]
 * @property {number[]} [item_exclude_l2_category]
 * @property {number[]} [item_department]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [available_zones]
 * @property {string[]} [product_tags]
 */
/**
 * @typedef PromoBuyRuleCompareFieldsTypes
 * @property {number} [greater_than_equals]
 * @property {number} [greater_than]
 * @property {number} [equals]
 * @property {number} [less_than]
 * @property {number} [less_than_equals]
 */
/**
 * @typedef BuyRules
 * @property {PromoBuyRuleCartConditions} [cart_conditions]
 * @property {Object} [item_criteria] - Item criteria of promotion
 * @property {boolean} [all_items]
 * @property {boolean} [mrp_promo]
 * @property {string} [slug]
 */
/**
 * @typedef AppliedPromotion
 * @property {string} [id] - Promotion id of current promotion
 * @property {number} [article_quantity] - Quantity of article on which
 *   promotion is applicable
 * @property {number} [original_article_quantity]
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
 * @property {string} [offer_label]
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 * @property {string} [promo_code]
 * @property {number} [free_quantity]
 * @property {string} [offer_description]
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
 * @property {number} [selling_price]
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
 * @typedef ParentItemIdentifiers
 * @property {string} [identifier]
 * @property {string} [parent_item_size]
 * @property {string} [parent_item_id]
 */
/**
 * @typedef CartItemMOQ
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 * @property {number} [minimum]
 */
/**
 * @typedef CartItemCustomOrder
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 */
/**
 * @typedef CartProductInfo
 * @property {number} [quantity]
 * @property {CartProduct} [product]
 * @property {string} [product_ean_id]
 * @property {ParentItemIdentifiers} [parent_item_identifiers]
 * @property {boolean} [is_set]
 * @property {ProductArticle} [article]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [key]
 * @property {CouponDetails} [coupon]
 * @property {Object} [bulk_offer]
 * @property {ArticleAppliedPriceAdjustment[]} [price_adjustment_applied]
 * @property {ProductPriceInfo} [price]
 * @property {string} [coupon_message]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [message]
 * @property {string} [discount]
 * @property {ProductAvailability} [availability]
 * @property {CartItemMOQ} [moq]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {PromoMeta} [promo_meta]
 * @property {CartItemCustomOrder} [custom_order]
 * @property {number[]} [charges]
 */
/**
 * @typedef PriceAdjustmentApplied
 * @property {string} [article_id]
 * @property {Object} [adjusted_value]
 * @property {number} [applied_quantity]
 * @property {Object} [meta]
 * @property {boolean} [article_level_distribution]
 * @property {string} [type]
 */
/**
 * @typedef OpenapiCartDetailsResponse
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
 * @property {CustomCart} [custom_cart]
 * @property {CartAppliedPriceAdjustment[]} [price_adjustment_applied]
 * @property {boolean} [is_pan_received]
 */
/**
 * @typedef OpenApiErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {Object} [errors] - Contains field name which has error as key and
 *   error message as value
 * @property {Object} [error]
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
 * @property {CustomCart} [custom_cart]
 * @property {CartAppliedPriceAdjustment[]} [price_adjustment_applied]
 * @property {boolean} [is_pan_received]
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
 * @property {string} [platform_order_id]
 * @property {Object} [extra_meta]
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
 * @typedef CartCouponMedias
 * @property {string} [alt]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [key]
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
 * @property {CartCouponMedias[]} [medias]
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
 * @typedef CartAppliedPriceAdjustment
 * @property {boolean} [remove_articles] - Boolean value indicating if articles
 *   should be removed from cart
 * @property {Object} [adjusted_value] - Value of price adjustment created along
 *   with destination currency
 * @property {boolean} [article_level_distribution] - Boolean value true if
 *   price adjustment is distributed over articles
 * @property {boolean} [auto_remove] - Boolean value indicating if auto remove is enabled
 * @property {string[]} [applied_articles_ids] - List of article IDs where the
 *   adjustment is applied
 * @property {string} [message] - Message associated with the Price adjustment
 * @property {string} [_type] - Type of the Price Adjustment
 * @property {Object} [meta] - Meta data added in article of price adjustment
 * @property {Object} [restrictions] - It contains all the restrictions applied
 *   on price adjustments
 * @property {string} [_id] - ID of the price Adjustment
 */
/**
 * @typedef CustomCart
 * @property {string} [id] - Id of custom cart config
 * @property {string} [cart_name] - Name of custom cart
 * @property {string} [cart_type] - Type of custom cart
 * @property {boolean} [is_universal] - By default all carts are universal, will
 *   be false for custom cart
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
 * @property {CartAppliedPriceAdjustment[]} [price_adjustment_applied]
 * @property {boolean} [buy_now]
 * @property {string} [gstin]
 * @property {AppliedPromotion[]} [applied_promo_details]
 * @property {string} [pan_no]
 * @property {boolean} [is_pan_received]
 * @property {CustomCart} [custom_cart]
 */
/**
 * @typedef AddProductCart
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {number} [seller_id]
 * @property {Object[]} [parent_item_identifiers]
 * @property {string} [price_factory_type_id]
 * @property {string[]} [product_group_tags]
 * @property {string} [article_id]
 * @property {ArticleAssignment} [article_assignment]
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
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */
/**
 * @typedef AddCartRequest
 * @property {boolean} [new_cart]
 * @property {AddProductCart[]} [items]
 */
/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [success] - True if all items are added successfully.
 *   false if partially added or not added.
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [partial] - When adding multiple items check if all
 *   added. true if only few are added.
 * @property {string} [message]
 * @property {Object} [result]
 */
/**
 * @typedef UpdateProductCart
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {Object} [parent_item_identifiers]
 * @property {Object} [meta]
 * @property {Object} [extra_meta]
 * @property {Object} [_custom_json]
 * @property {string} [price_factory_type_id]
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
 *   false if partially added or not added.
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 */
/**
 * @typedef OverrideCartItemPromo
 * @property {Object} [restrictions]
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
 * @property {OverrideCartItem[]} cart_items
 * @property {number} [ordering_store]
 * @property {Object} [shipping_address]
 */
/**
 * @typedef OverrideCheckoutResponse
 * @property {Object} data
 * @property {Object} cart
 * @property {boolean} success
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
 * @property {CustomCart} [custom_cart]
 * @property {CartAppliedPriceAdjustment[]} [price_adjustment_applied]
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {boolean} [is_pan_received]
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
 * @typedef UserCartMappingResponse
 * @property {boolean} [is_valid]
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 * @property {CartMappingUserInfo} [user]
 */
/**
 * @typedef CartMappingUserInfo
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [gender]
 * @property {string} [created_at]
 * @property {string} [modified_on]
 * @property {string} [external_id]
 * @property {boolean} [is_pan_received]
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
 * @property {boolean} [success] - True if cart is archived successfully. false
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
 * @property {boolean} [is_bank_offer]
 * @property {string} [offer_text]
 * @property {number} [coupon_amount]
 * @property {string[]} [tags]
 * @property {CartCouponMedias[]} [medias]
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
 * @property {number} [pincode]
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
 * @property {AddressCustomJson} [_custom_json]
 * @property {number} [uid]
 * @property {boolean} [is_anonymous]
 * @property {string} [app_id]
 * @property {string} [expire_at]
 * @property {string} [address_id]
 * @property {string} [store_name]
 */
/**
 * @typedef AddressCustomJson
 * @property {string} [meta_data]
 * @property {number} [meta_data_int]
 */
/**
 * @typedef PlatformGetAddressesResponse
 * @property {PlatformAddress[]} [address]
 * @property {boolean} [pii_masking]
 */
/**
 * @typedef SaveAddressResponse
 * @property {string} [id]
 * @property {boolean} [success]
 * @property {boolean} [is_default_address]
 * @property {Object} [address_id]
 */
/**
 * @typedef UpdateAddressResponse
 * @property {string} [id]
 * @property {boolean} [is_default_address]
 * @property {boolean} [success]
 * @property {boolean} [is_updated]
 * @property {Object} [address_id]
 */
/**
 * @typedef DeleteAddressResponse
 * @property {string} [id]
 * @property {boolean} [is_deleted]
 * @property {string} [address_id]
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
 * @property {ShipmentMeta} [meta]
 * @property {ShipmentLogisticsMeta} [logistics_meta]
 */
/**
 * @typedef ShipmentMeta
 * @property {string} [packaging_name]
 * @property {string} [dimension]
 * @property {string} [assign_dp_from_sb]
 * @property {string} [dp_sort_key]
 * @property {string} [shipment_weight]
 * @property {string} [shipment_volumetric_weight]
 * @property {string} [shipment_chargeable_weight]
 * @property {string} [shipping_zone]
 */
/**
 * @typedef ShipmentLogisticsMeta
 * @property {string[]} [account_options]
 * @property {Object} [account_info]
 * @property {string} [dp_sort_key]
 * @property {string} [assign_dp_from_sb]
 */
/**
 * @typedef PlatformCartShipmentsResponse
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
 * @property {CustomCart} [custom_cart]
 * @property {CartAppliedPriceAdjustment[]} [price_adjustment_applied]
 * @property {PlatformShipmentResponse[]} [shipments]
 * @property {boolean} [error]
 * @property {boolean} [is_pan_received]
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
 * @property {boolean} [is_pan_received]
 * @property {string} [comment]
 * @property {string} [staff_user_id] - Staff user id
 * @property {Object} [delivery_slots]
 */
/**
 * @typedef CartMetaResponse
 * @property {boolean} [is_valid]
 * @property {string} [message]
 */
/**
 * @typedef CartMetaMissingResponse
 * @property {CartMetaFieldsValidation} [errors]
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {CartMetaFieldsValidation} [meta]
 */
/**
 * @typedef CartMetaFieldsValidation
 * @property {string[]} [pan_no]
 * @property {string[]} [gstin]
 * @property {string[]} [checkout_mode]
 * @property {string[]} [comment]
 * @property {string[]} [pick_up_customer_details]
 * @property {string[]} [gift_details]
 * @property {string[]} [staff_user_id]
 * @property {string[]} [delivery_slots]
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
 * @property {string} [user_id]
 * @property {Object} [extra_meta]
 * @property {string} order_type
 * @property {Files[]} [files] - List of file url
 * @property {number} [ordering_store]
 * @property {Object} [payment_extra_identifiers]
 * @property {string} [iin]
 * @property {string} [network]
 * @property {string} [type]
 * @property {string} [card_id]
 */
/**
 * @typedef CheckCart
 * @property {number} [cart_id]
 * @property {string} [uid]
 * @property {string} [coupon_text]
 * @property {string} [id]
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
 * @property {CustomCart} [custom_cart]
 * @property {PriceAdjustmentApplied[]} [price_adjustment_applied]
 * @property {boolean} [is_pan_received]
 * @property {Object} [pan_config]
 * @property {string} [order_id]
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
 * @property {string} [sector]
 * @property {string} [state_code]
 * @property {GeoLocation} [geo_location]
 */
/**
 * @typedef StoreDetailsResponse
 * @property {PickupStoreDetail[]} [items]
 * @property {PickupStoreDetail[]} [data]
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
 * @property {string} [payment_identifier]
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
 * @property {string} [user_id]
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
 * @typedef CouponOptions
 * @property {CouponOptionTypes} [types]
 * @property {CouponOptionScopes} [scopes]
 * @property {CouponOptionsApplicable} [applicable_on]
 * @property {CouponOptionsValueTypes} [value_types]
 * @property {CouponOptionsCalculate} [calculate_on]
 * @property {CouponOptionsPayableCategory} [payable_category]
 * @property {CouponOptionsTxnMode} [txn_mode]
 * @property {CouponOptionsPayableBy} [payable_by]
 */
/**
 * @typedef CouponOptionTypes
 * @property {string} [absolute]
 * @property {string} [percentage]
 * @property {string} [bogo]
 * @property {string} [bundle]
 */
/**
 * @typedef CouponOptionScopes
 * @property {string} [category_id]
 * @property {string} [brand_id]
 * @property {string} [company_id]
 * @property {string} [store_id]
 * @property {string} [collection_id]
 * @property {string} [exclude_brand_id]
 * @property {string} [category_department]
 * @property {string} [l1_category_id]
 * @property {string} [l2_category_id]
 * @property {string} [exclude_category_id]
 * @property {string} [exclude_l1_category_id]
 * @property {string} [exclude_l2_category_id]
 * @property {string} [item_tags]
 * @property {string} [tags]
 * @property {string} [zones_id]
 * @property {string} [cart_type]
 */
/**
 * @typedef CouponOptionsApplicable
 * @property {string} [amount]
 * @property {string} [quantity]
 */
/**
 * @typedef CouponOptionsValueTypes
 * @property {string} [absolute]
 * @property {string} [percentage]
 * @property {string} [quantity]
 * @property {string} [flat_price]
 */
/**
 * @typedef CouponOptionsCalculate
 * @property {string} [mrp]
 * @property {string} [esp]
 * @property {string} [tp]
 */
/**
 * @typedef CouponOptionsPayableCategory
 * @property {string} [fynd]
 * @property {string} [seller]
 */
/**
 * @typedef CouponOptionsTxnMode
 * @property {string} [fynd_cash]
 * @property {string} [cash]
 * @property {string} [coupon]
 */
/**
 * @typedef CouponOptionsPayableBy
 * @property {string} [fynd_marketing]
 * @property {string} [fynd]
 * @property {string} [fynd_store]
 * @property {string} [fynd_delights]
 * @property {string} [fynd_ops]
 * @property {string} [fynd_inventory]
 */
/**
 * @typedef SelectAddressResponseError
 * @property {string} [message]
 * @property {number} [cart_id]
 * @property {string} [id]
 * @property {boolean} [is_valid]
 * @property {AllAddressForSelectAddress} [address]
 */
/**
 * @typedef AllAddressForSelectAddress
 * @property {PlatformAddress[]} [address]
 * @property {boolean} [pii_masking]
 */
declare class CartPlatformModel {
}
declare namespace CartPlatformModel {
    export { CouponDateMeta, Ownership, CouponAuthor, State, PaymentAllowValue, PaymentModes, PriceRange, PostOrder, BulkBundleRestriction, UsesRemaining, UsesRestriction, Restrictions, Validation, CouponAction, NextSchedule, CouponSchedule, Rule, DisplayMetaDict, DisplayMeta, Identifier, Validity, RuleDefinition, CouponAdd, Page, CouponObj, CouponsResponse, CouponMedias, CouponDetailObj, CouponDetailResponse, TagsViewResponse, SuccessMessage, OperationErrorResponse, CartMetaConfigOperationErrorResponse, CouponUpdate, CouponPartialUpdate, DisplayMeta1, Ownership1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, PostOrder1, UsesRemaining1, UsesRestriction1, Restrictions1, PromotionSchedule, PromotionAction, PromotionAuthor, Visibility, PromotionDateMeta, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromoIndexedCriteria, PromotionPartialUpdate, ActivePromos, ActivePromosResponse, Charges, DeliveryCharges, OrderPlacing, PanCard, CartMetaConfigUpdate, TimeStampIDResponse, CartMetaConfigDetailResponse, CartMetaConfigListResponse, CartMetaConfigListObject, CartMetaConfigAddResponse, CartMetaConfigAdd, Article, PriceAdjustmentRestrictions, Collection, PriceAdjustmentUpdate, PriceAdjustment, AddPriceAdjustmentResponse, UpdatePriceAdjustmentResponse, PriceAdjustmentResponse, PriceAdjustmentAdd, CartItem, OpenapiCartDetailsRequest, CouponBreakup, DisplayBreakup, LoyaltyPoints, RawBreakup, CartBreakup, ProductImage, Tags, BaseInfo, ActionQuery, ProductAction, CategoryInfo, CartProduct, ProductAttributes, BasePrice, ArticleAppliedPriceAdjustment, ArticlePriceInfo, StoreInfo, ArticleGiftCard, ProductArticle, Ownership2, PromoDiscountRuleOffer, PromoDiscountRuleRawOffer, PromoDiscountRuleItemCriteria, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, PromoBuyRuleCartConditions, PromoBuyRuleCompareFieldsTypes, BuyRules, AppliedPromotion, PromiseFormatted, PromiseISOFormat, PromiseTimestamp, ShipmentPromise, CouponDetails, ProductPrice, ProductPriceInfo, CartProductIdentifer, ProductAvailabilitySize, ProductAvailability, PromoMeta, ParentItemIdentifiers, CartItemMOQ, CartItemCustomOrder, CartProductInfo, PriceAdjustmentApplied, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, MultiTenderPaymentMeta, MultiTenderPaymentMethod, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, PaymentSelectionLock, CartCurrency, CartCouponMedias, CartDetailCoupon, ChargesThreshold, DeliveryChargesConfig, CartCommonConfig, CartAppliedPriceAdjustment, CustomCart, CartDetailResponse, AddProductCart, ArticleAssignment, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, OverrideCartItemPromo, OverrideCartItem, OverrideCheckoutReq, OverrideCheckoutResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, CartMappingUserInfo, PlatformAddCartRequest, PlatformUpdateCartRequest, DeleteCartRequest, DeleteCartDetailResponse, CartItemCountResponse, Coupon, PageCoupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, AddressCustomJson, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentArticle, PlatformShipmentResponse, ShipmentMeta, ShipmentLogisticsMeta, PlatformCartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, CartMetaFieldsValidation, StaffCheckout, CustomerDetails, Files, CartCheckoutCustomMeta, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, PaymentMeta, PaymentMethod, PlatformCartCheckoutDetailV2Request, UpdateCartPaymentRequestV2, CouponOptions, CouponOptionTypes, CouponOptionScopes, CouponOptionsApplicable, CouponOptionsValueTypes, CouponOptionsCalculate, CouponOptionsPayableCategory, CouponOptionsTxnMode, CouponOptionsPayableBy, SelectAddressResponseError, AllAddressForSelectAddress };
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
    is_active?: boolean;
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
/** @returns {NextSchedule} */
declare function NextSchedule(): NextSchedule;
type NextSchedule = {
    start?: string;
    end?: string;
};
/** @returns {CouponSchedule} */
declare function CouponSchedule(): CouponSchedule;
type CouponSchedule = {
    end?: string;
    start?: string;
    next_schedule?: NextSchedule[];
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
    calculate_on?: string;
    value_type?: string;
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
     * - True if more records are present for next pages
     */
    has_next?: boolean;
    /**
     * - Total coupon count in system
     */
    item_total?: number;
    /**
     * - Current page no
     */
    current?: number;
    /**
     * - Cursor id for next set of records.
     */
    next_id?: string;
    /**
     * - Page requested
     */
    page?: number;
    /**
     * - Last objects id
     */
    last_id?: string;
    type: string;
    /**
     * - Current request page size
     */
    size?: number;
    /**
     * - True if more records are present for
     * previous pages. Sent for cursor pagination
     */
    has_previous?: boolean;
};
/** @returns {CouponObj} */
declare function CouponObj(): CouponObj;
type CouponObj = {
    date_meta?: CouponDateMeta;
    ownership: Ownership;
    author?: CouponAuthor;
    state?: State;
    _schedule?: CouponSchedule;
    display_meta: DisplayMeta;
    code: string;
    type_slug: string;
    rule_definition: RuleDefinition;
    /**
     * - Coupon id
     */
    _id?: string;
    medias?: CouponMedias[];
};
/** @returns {CouponsResponse} */
declare function CouponsResponse(): CouponsResponse;
type CouponsResponse = {
    items?: CouponObj[];
    page?: Page;
    success?: boolean;
};
/** @returns {CouponMedias} */
declare function CouponMedias(): CouponMedias;
type CouponMedias = {
    alt?: string;
    url?: string;
    type?: string;
    key?: string;
};
/** @returns {CouponDetailObj} */
declare function CouponDetailObj(): CouponDetailObj;
type CouponDetailObj = {
    date_meta?: CouponDateMeta;
    ownership?: Ownership;
    author?: CouponAuthor;
    state?: State;
    restrictions?: Restrictions;
    validation?: Validation;
    action?: CouponAction;
    tags?: string[];
    _schedule?: CouponSchedule;
    rule?: Rule[];
    display_meta?: DisplayMeta;
    code?: string;
    type_slug?: string;
    identifiers?: Identifier;
    validity?: Validity;
    rule_definition?: RuleDefinition;
    /**
     * - Coupon id
     */
    _id?: string;
    is_archived?: boolean;
};
/** @returns {CouponDetailResponse} */
declare function CouponDetailResponse(): CouponDetailResponse;
type CouponDetailResponse = {
    success?: boolean;
    message?: string;
    data?: CouponDetailObj;
};
/** @returns {TagsViewResponse} */
declare function TagsViewResponse(): TagsViewResponse;
type TagsViewResponse = {
    success?: boolean;
    items?: string[];
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
/** @returns {CartMetaConfigOperationErrorResponse} */
declare function CartMetaConfigOperationErrorResponse(): CartMetaConfigOperationErrorResponse;
type CartMetaConfigOperationErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: string;
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
    _id?: string;
    is_archived?: boolean;
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
    type?: string;
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
    payments?: PromotionPaymentModes;
    user_registered?: UserRegistered;
    platforms?: string[];
    post_order?: PostOrder1;
    user_groups?: number[];
    order_quantity?: number;
    anonymous_users?: boolean;
    user_id?: string[];
    uses: UsesRestriction1;
    ordering_stores?: number[];
    user_type?: string;
};
/** @returns {PromotionSchedule} */
declare function PromotionSchedule(): PromotionSchedule;
type PromotionSchedule = {
    end: string;
    start: string;
    published: boolean;
    next_schedule?: NextSchedule[];
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
     * - Group into which promotion fall
     */
    promo_group: string;
    /**
     * - Promotion mode
     */
    mode?: string;
    display_meta: DisplayMeta1;
    ownership?: Ownership1;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    date_meta: PromotionDateMeta;
    /**
     * - Promotion id
     */
    _id?: string;
    code?: string;
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
    _id?: string;
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
    indexed_criteria?: ItemCriteria;
    tags?: string[];
};
/** @returns {PromotionUpdate} */
declare function PromotionUpdate(): PromotionUpdate;
type PromotionUpdate = {
    _id?: string;
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
    indexed_criteria?: PromoIndexedCriteria;
    tags?: string[];
};
/** @returns {PromoIndexedCriteria} */
declare function PromoIndexedCriteria(): PromoIndexedCriteria;
type PromoIndexedCriteria = {
    cart_quantity?: string[];
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
/** @returns {PromotionPartialUpdate} */
declare function PromotionPartialUpdate(): PromotionPartialUpdate;
type PromotionPartialUpdate = {
    /**
     * - Send true to publish promotion
     */
    publish?: boolean;
    schedule?: PromotionSchedule;
};
/** @returns {ActivePromos} */
declare function ActivePromos(): ActivePromos;
type ActivePromos = {
    _id?: string;
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
/** @returns {ActivePromosResponse} */
declare function ActivePromosResponse(): ActivePromosResponse;
type ActivePromosResponse = {
    status?: string;
    items?: ActivePromos[];
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
/** @returns {OrderPlacing} */
declare function OrderPlacing(): OrderPlacing;
type OrderPlacing = {
    enabled?: boolean;
    message?: string;
};
/** @returns {PanCard} */
declare function PanCard(): PanCard;
type PanCard = {
    enabled?: boolean;
    cod_threshold_amount?: number;
    online_threshold_amount?: number;
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
    international_delivery_charges?: DeliveryCharges;
    revenue_engine_coupon?: boolean;
    gift_pricing?: number;
    enabled?: boolean;
    app_id?: string;
    is_active?: boolean;
    slug?: string;
    is_universal?: boolean;
    company_id?: number;
    updated_on?: string;
    last_modified_by?: string;
    order_placing?: OrderPlacing;
    name?: string;
    article_tags?: string[];
    allow_coupon_with_rewards?: boolean;
    gst_input?: boolean;
    staff_selection?: boolean;
    placing_for_customer?: boolean;
    pan_card?: PanCard;
    empty_cart?: boolean;
    id?: string;
};
/** @returns {TimeStampIDResponse} */
declare function TimeStampIDResponse(): TimeStampIDResponse;
type TimeStampIDResponse = {
    id?: string;
    app_id?: string;
    company_id?: number;
    created_on?: string;
    updated_on?: string;
    last_modified_by?: string;
};
/** @returns {CartMetaConfigDetailResponse} */
declare function CartMetaConfigDetailResponse(): CartMetaConfigDetailResponse;
type CartMetaConfigDetailResponse = {
    success?: boolean;
    data?: any;
};
/** @returns {CartMetaConfigListResponse} */
declare function CartMetaConfigListResponse(): CartMetaConfigListResponse;
type CartMetaConfigListResponse = {
    success?: boolean;
    data?: CartMetaConfigListObject[];
};
/** @returns {CartMetaConfigListObject} */
declare function CartMetaConfigListObject(): CartMetaConfigListObject;
type CartMetaConfigListObject = {
    id?: string;
    slug?: string;
    created_on?: string;
    name?: string;
    is_active?: boolean;
};
/** @returns {CartMetaConfigAddResponse} */
declare function CartMetaConfigAddResponse(): CartMetaConfigAddResponse;
type CartMetaConfigAddResponse = {
    success?: boolean;
    data?: CartMetaConfigAdd;
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
    international_delivery_charges?: DeliveryCharges;
    revenue_engine_coupon?: boolean;
    gift_pricing?: number;
    enabled?: boolean;
    app_id?: string;
    slug: string;
    is_universal?: boolean;
    company_id?: number;
    updated_on?: string;
    last_modified_by?: string;
    id?: string;
    name: string;
    is_active?: boolean;
    order_placing?: OrderPlacing;
    article_tags?: string[];
    allow_coupon_with_rewards?: boolean;
    gst_input?: boolean;
    staff_selection?: boolean;
    placing_for_customer?: boolean;
    pan_card?: PanCard;
    empty_cart?: boolean;
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
    post_order?: PostOrder1;
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
     * allowed (default: false)
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
     * - This field if set true will remove
     * all articles in price adjustment if article_ids are present
     */
    remove_articles?: boolean;
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
    allow_refund?: boolean;
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
     * allowed (default: false)
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
     * - This field if set true will remove
     * all articles in price adjustment if article_ids are present
     */
    remove_articles?: boolean;
    /**
     * - This field if set true will remove mop
     * type price adjustment.
     */
    auto_remove?: boolean;
    is_active?: boolean;
    created_by?: string;
    cart_value?: number;
    modified_by?: string;
    /**
     * - Distribution level of price adjusment
     */
    distribution_level?: string;
    /**
     * - Distribution type of price adjusment
     * in case of shipment distribution level
     */
    distribution_type?: string;
};
/** @returns {AddPriceAdjustmentResponse} */
declare function AddPriceAdjustmentResponse(): AddPriceAdjustmentResponse;
type AddPriceAdjustmentResponse = {
    data?: PriceAdjustment;
    success?: boolean;
    price_adjustments?: PriceAdjustment[];
};
/** @returns {UpdatePriceAdjustmentResponse} */
declare function UpdatePriceAdjustmentResponse(): UpdatePriceAdjustmentResponse;
type UpdatePriceAdjustmentResponse = {
    data?: PriceAdjustment;
    success?: boolean;
};
/** @returns {PriceAdjustmentResponse} */
declare function PriceAdjustmentResponse(): PriceAdjustmentResponse;
type PriceAdjustmentResponse = {
    data?: PriceAdjustment[];
    success?: boolean;
    price_adjustments?: PriceAdjustment[];
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
     * allowed (default: false)
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
     * - This field if set true will remove
     * all articles in price adjustment if article_ids are present
     */
    remove_articles?: boolean;
    /**
     * - This field if set true will remove mop
     * type price adjustment.
     */
    auto_remove?: boolean;
    /**
     * - Distribution level of price adjusment
     */
    distribution_level?: string;
    /**
     * - Distribution type of price adjusment
     * in case of shipment distribution level
     */
    distribution_type?: string;
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
    original?: number;
    attr?: string;
    meta?: any;
};
/** @returns {LoyaltyPoints} */
declare function LoyaltyPoints(): LoyaltyPoints;
type LoyaltyPoints = {
    is_applied?: boolean;
    total?: number;
    applicable?: number;
    description?: string;
    message?: string;
};
/** @returns {RawBreakup} */
declare function RawBreakup(): RawBreakup;
type RawBreakup = {
    promotion?: number;
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
    sub_total?: number;
    convenience_fee?: number;
    total_charge?: number;
    mop_total?: number;
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
    teaser_tag?: any;
    brand?: BaseInfo;
    action?: ProductAction;
    uid?: number;
    tags?: string[];
    _custom_json?: any;
    type?: string;
    name?: string;
    item_code?: string;
    categories?: CategoryInfo[];
    attributes?: ProductAttributes;
};
/** @returns {ProductAttributes} */
declare function ProductAttributes(): ProductAttributes;
type ProductAttributes = {
    product_type?: string;
    item_code?: string;
    primary_color_hex?: string;
    primary_material?: string;
    primary_color?: string;
    variant?: string;
    color?: string;
    season?: string;
    style_note?: string;
};
/** @returns {BasePrice} */
declare function BasePrice(): BasePrice;
type BasePrice = {
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
    marked?: number;
    selling?: number;
};
/** @returns {ArticleAppliedPriceAdjustment} */
declare function ArticleAppliedPriceAdjustment(): ArticleAppliedPriceAdjustment;
type ArticleAppliedPriceAdjustment = {
    /**
     * - Value of price adjustment created along
     * with destination currency
     */
    adjusted_value?: any;
    /**
     * - Boolean value true if
     * price adjustment is distributed over articles
     */
    article_level_distribution?: boolean;
    /**
     * - Article Id of product
     */
    article_id?: string;
    /**
     * - Article quantity on which this price
     * adjusment applied
     */
    applied_quantity?: number;
    /**
     * - Meta data added in article of price adjustment
     */
    meta?: any;
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
/** @returns {ArticleGiftCard} */
declare function ArticleGiftCard(): ArticleGiftCard;
type ArticleGiftCard = {
    gift_price?: number;
    display_text?: string;
    is_gift_applied?: boolean;
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
    gift_card?: ArticleGiftCard;
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
/** @returns {PromoDiscountRuleOffer} */
declare function PromoDiscountRuleOffer(): PromoDiscountRuleOffer;
type PromoDiscountRuleOffer = {
    max_offer_quantity?: number;
    discount_percentage?: number;
};
/** @returns {PromoDiscountRuleRawOffer} */
declare function PromoDiscountRuleRawOffer(): PromoDiscountRuleRawOffer;
type PromoDiscountRuleRawOffer = {
    buy_condition?: string;
    discount_type?: string;
    offer?: PromoDiscountRuleOffer;
    item_criteria?: PromoDiscountRuleItemCriteria;
};
/** @returns {PromoDiscountRuleItemCriteria} */
declare function PromoDiscountRuleItemCriteria(): PromoDiscountRuleItemCriteria;
type PromoDiscountRuleItemCriteria = {
    item_id?: number[];
    buy_rules?: string[];
};
/** @returns {DiscountRulesApp} */
declare function DiscountRulesApp(): DiscountRulesApp;
type DiscountRulesApp = {
    offer?: PromoDiscountRuleOffer;
    raw_offer?: PromoDiscountRuleRawOffer;
    item_criteria?: PromoDiscountRuleItemCriteria;
    /**
     * - Matched buy rules for promotion
     */
    matched_buy_rules?: string[];
};
/** @returns {FreeGiftItem} */
declare function FreeGiftItem(): FreeGiftItem;
type FreeGiftItem = {
    /**
     * - Item name
     */
    item_name?: string;
    /**
     * - Item price details
     */
    item_price_details?: any;
    /**
     * - Item brand name
     */
    item_brand_name?: string;
    /**
     * - Item images URL
     */
    item_images_url?: string[];
    /**
     * - Item id
     */
    item_id?: number;
    /**
     * - Item slug
     */
    item_slug?: string;
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
    free_gift_item_details?: FreeGiftItem;
};
/** @returns {PromoBuyRuleCartConditions} */
declare function PromoBuyRuleCartConditions(): PromoBuyRuleCartConditions;
type PromoBuyRuleCartConditions = {
    cart_quantity?: PromoBuyRuleCompareFieldsTypes;
    cart_total?: PromoBuyRuleCompareFieldsTypes;
    item_id?: number[];
    item_store?: number[];
    item_company?: number[];
    item_brand?: number[];
    item_exclude_brand?: number[];
    item_category?: number[];
    item_exclude_category?: number[];
    item_l1_category?: number[];
    item_exclude_l1_category?: number[];
    item_l2_category?: number[];
    item_exclude_l2_category?: number[];
    item_department?: number[];
    item_exclude_id?: number[];
    available_zones?: number[];
    product_tags?: string[];
};
/** @returns {PromoBuyRuleCompareFieldsTypes} */
declare function PromoBuyRuleCompareFieldsTypes(): PromoBuyRuleCompareFieldsTypes;
type PromoBuyRuleCompareFieldsTypes = {
    greater_than_equals?: number;
    greater_than?: number;
    equals?: number;
    less_than?: number;
    less_than_equals?: number;
};
/** @returns {BuyRules} */
declare function BuyRules(): BuyRules;
type BuyRules = {
    cart_conditions?: PromoBuyRuleCartConditions;
    /**
     * - Item criteria of promotion
     */
    item_criteria?: any;
    all_items?: boolean;
    mrp_promo?: boolean;
    slug?: string;
};
/** @returns {AppliedPromotion} */
declare function AppliedPromotion(): AppliedPromotion;
type AppliedPromotion = {
    /**
     * - Promotion id of current promotion
     */
    id?: string;
    /**
     * - Quantity of article on which
     * promotion is applicable
     */
    article_quantity?: number;
    original_article_quantity?: number;
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
    offer_label?: string;
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
    promo_code?: string;
    free_quantity?: number;
    offer_description?: string;
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
    selling_price?: number;
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
/** @returns {ParentItemIdentifiers} */
declare function ParentItemIdentifiers(): ParentItemIdentifiers;
type ParentItemIdentifiers = {
    identifier?: string;
    parent_item_size?: string;
    parent_item_id?: string;
};
/** @returns {CartItemMOQ} */
declare function CartItemMOQ(): CartItemMOQ;
type CartItemMOQ = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
/** @returns {CartItemCustomOrder} */
declare function CartItemCustomOrder(): CartItemCustomOrder;
type CartItemCustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
/** @returns {CartProductInfo} */
declare function CartProductInfo(): CartProductInfo;
type CartProductInfo = {
    quantity?: number;
    product?: CartProduct;
    product_ean_id?: string;
    parent_item_identifiers?: ParentItemIdentifiers;
    is_set?: boolean;
    article?: ProductArticle;
    promotions_applied?: AppliedPromotion[];
    delivery_promise?: ShipmentPromise;
    key?: string;
    coupon?: CouponDetails;
    bulk_offer?: any;
    price_adjustment_applied?: ArticleAppliedPriceAdjustment[];
    price?: ProductPriceInfo;
    coupon_message?: string;
    identifiers: CartProductIdentifer;
    message?: string;
    discount?: string;
    availability?: ProductAvailability;
    moq?: CartItemMOQ;
    price_per_unit?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    custom_order?: CartItemCustomOrder;
    charges?: number[];
};
/** @returns {PriceAdjustmentApplied} */
declare function PriceAdjustmentApplied(): PriceAdjustmentApplied;
type PriceAdjustmentApplied = {
    article_id?: string;
    adjusted_value?: any;
    applied_quantity?: number;
    meta?: any;
    article_level_distribution?: boolean;
    type?: string;
};
/** @returns {OpenapiCartDetailsResponse} */
declare function OpenapiCartDetailsResponse(): OpenapiCartDetailsResponse;
type OpenapiCartDetailsResponse = {
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
    custom_cart?: CustomCart;
    price_adjustment_applied?: CartAppliedPriceAdjustment[];
    is_pan_received?: boolean;
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
    error?: any;
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
    custom_cart?: CustomCart;
    price_adjustment_applied?: CartAppliedPriceAdjustment[];
    is_pan_received?: boolean;
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
    platform_order_id?: string;
    extra_meta?: any;
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
/** @returns {CartCouponMedias} */
declare function CartCouponMedias(): CartCouponMedias;
type CartCouponMedias = {
    alt?: string;
    url?: string;
    type?: string;
    key?: string;
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
    medias?: CartCouponMedias[];
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
/** @returns {CartAppliedPriceAdjustment} */
declare function CartAppliedPriceAdjustment(): CartAppliedPriceAdjustment;
type CartAppliedPriceAdjustment = {
    /**
     * - Boolean value indicating if articles
     * should be removed from cart
     */
    remove_articles?: boolean;
    /**
     * - Value of price adjustment created along
     * with destination currency
     */
    adjusted_value?: any;
    /**
     * - Boolean value true if
     * price adjustment is distributed over articles
     */
    article_level_distribution?: boolean;
    /**
     * - Boolean value indicating if auto remove is enabled
     */
    auto_remove?: boolean;
    /**
     * - List of article IDs where the
     * adjustment is applied
     */
    applied_articles_ids?: string[];
    /**
     * - Message associated with the Price adjustment
     */
    message?: string;
    /**
     * - Type of the Price Adjustment
     */
    _type?: string;
    /**
     * - Meta data added in article of price adjustment
     */
    meta?: any;
    /**
     * - It contains all the restrictions applied
     * on price adjustments
     */
    restrictions?: any;
    /**
     * - ID of the price Adjustment
     */
    _id?: string;
};
/** @returns {CustomCart} */
declare function CustomCart(): CustomCart;
type CustomCart = {
    /**
     * - Id of custom cart config
     */
    id?: string;
    /**
     * - Name of custom cart
     */
    cart_name?: string;
    /**
     * - Type of custom cart
     */
    cart_type?: string;
    /**
     * - By default all carts are universal, will
     * be false for custom cart
     */
    is_universal?: boolean;
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
    price_adjustment_applied?: CartAppliedPriceAdjustment[];
    buy_now?: boolean;
    gstin?: string;
    applied_promo_details?: AppliedPromotion[];
    pan_no?: string;
    is_pan_received?: boolean;
    custom_cart?: CustomCart;
};
/** @returns {AddProductCart} */
declare function AddProductCart(): AddProductCart;
type AddProductCart = {
    quantity?: number;
    item_size?: string;
    seller_id?: number;
    parent_item_identifiers?: any[];
    price_factory_type_id?: string;
    product_group_tags?: string[];
    article_id?: string;
    article_assignment?: ArticleAssignment;
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
/** @returns {ArticleAssignment} */
declare function ArticleAssignment(): ArticleAssignment;
type ArticleAssignment = {
    level?: string;
    strategy?: string;
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
     * false if partially added or not added.
     */
    success?: boolean;
    cart?: CartDetailResponse;
    /**
     * - When adding multiple items check if all
     * added. true if only few are added.
     */
    partial?: boolean;
    message?: string;
    result?: any;
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
    price_factory_type_id?: string;
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
     * false if partially added or not added.
     */
    success?: boolean;
    cart?: CartDetailResponse;
    message?: string;
};
/** @returns {OverrideCartItemPromo} */
declare function OverrideCartItemPromo(): OverrideCartItemPromo;
type OverrideCartItemPromo = {
    restrictions?: any;
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
    cart_items: OverrideCartItem[];
    ordering_store?: number;
    shipping_address?: any;
};
/** @returns {OverrideCheckoutResponse} */
declare function OverrideCheckoutResponse(): OverrideCheckoutResponse;
type OverrideCheckoutResponse = {
    data: any;
    cart: any;
    success: boolean;
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
    custom_cart?: CustomCart;
    price_adjustment_applied?: CartAppliedPriceAdjustment[];
    shared_cart_details?: SharedCartDetails;
    is_pan_received?: boolean;
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
/** @returns {UserCartMappingResponse} */
declare function UserCartMappingResponse(): UserCartMappingResponse;
type UserCartMappingResponse = {
    is_valid?: boolean;
    message?: string;
    success?: boolean;
    cart?: CartDetailResponse;
    user?: CartMappingUserInfo;
};
/** @returns {CartMappingUserInfo} */
declare function CartMappingUserInfo(): CartMappingUserInfo;
type CartMappingUserInfo = {
    _id?: string;
    uid?: string;
    first_name?: string;
    last_name?: string;
    mobile?: string;
    gender?: string;
    created_at?: string;
    modified_on?: string;
    external_id?: string;
    is_pan_received?: boolean;
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
     * - True if cart is archived successfully. false
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
    is_bank_offer?: boolean;
    offer_text?: string;
    coupon_amount?: number;
    tags?: string[];
    medias?: CartCouponMedias[];
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
    pincode?: number;
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
    _custom_json?: AddressCustomJson;
    uid?: number;
    is_anonymous?: boolean;
    app_id?: string;
    expire_at?: string;
    address_id?: string;
    store_name?: string;
};
/** @returns {AddressCustomJson} */
declare function AddressCustomJson(): AddressCustomJson;
type AddressCustomJson = {
    meta_data?: string;
    meta_data_int?: number;
};
/** @returns {PlatformGetAddressesResponse} */
declare function PlatformGetAddressesResponse(): PlatformGetAddressesResponse;
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
    pii_masking?: boolean;
};
/** @returns {SaveAddressResponse} */
declare function SaveAddressResponse(): SaveAddressResponse;
type SaveAddressResponse = {
    id?: string;
    success?: boolean;
    is_default_address?: boolean;
    address_id?: any;
};
/** @returns {UpdateAddressResponse} */
declare function UpdateAddressResponse(): UpdateAddressResponse;
type UpdateAddressResponse = {
    id?: string;
    is_default_address?: boolean;
    success?: boolean;
    is_updated?: boolean;
    address_id?: any;
};
/** @returns {DeleteAddressResponse} */
declare function DeleteAddressResponse(): DeleteAddressResponse;
type DeleteAddressResponse = {
    id?: string;
    is_deleted?: boolean;
    address_id?: string;
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
    meta?: ShipmentMeta;
    logistics_meta?: ShipmentLogisticsMeta;
};
/** @returns {ShipmentMeta} */
declare function ShipmentMeta(): ShipmentMeta;
type ShipmentMeta = {
    packaging_name?: string;
    dimension?: string;
    assign_dp_from_sb?: string;
    dp_sort_key?: string;
    shipment_weight?: string;
    shipment_volumetric_weight?: string;
    shipment_chargeable_weight?: string;
    shipping_zone?: string;
};
/** @returns {ShipmentLogisticsMeta} */
declare function ShipmentLogisticsMeta(): ShipmentLogisticsMeta;
type ShipmentLogisticsMeta = {
    account_options?: string[];
    account_info?: any;
    dp_sort_key?: string;
    assign_dp_from_sb?: string;
};
/** @returns {PlatformCartShipmentsResponse} */
declare function PlatformCartShipmentsResponse(): PlatformCartShipmentsResponse;
type PlatformCartShipmentsResponse = {
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
    custom_cart?: CustomCart;
    price_adjustment_applied?: CartAppliedPriceAdjustment[];
    shipments?: PlatformShipmentResponse[];
    error?: boolean;
    is_pan_received?: boolean;
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
    is_pan_received?: boolean;
    comment?: string;
    /**
     * - Staff user id
     */
    staff_user_id?: string;
    delivery_slots?: any;
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
    errors?: CartMetaFieldsValidation;
    message?: string;
    success?: boolean;
    meta?: CartMetaFieldsValidation;
};
/** @returns {CartMetaFieldsValidation} */
declare function CartMetaFieldsValidation(): CartMetaFieldsValidation;
type CartMetaFieldsValidation = {
    pan_no?: string[];
    gstin?: string[];
    checkout_mode?: string[];
    comment?: string[];
    pick_up_customer_details?: string[];
    gift_details?: string[];
    staff_user_id?: string[];
    delivery_slots?: string[];
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
/** @returns {CartCheckoutCustomMeta} */
declare function CartCheckoutCustomMeta(): CartCheckoutCustomMeta;
type CartCheckoutCustomMeta = {
    key: string;
    value: string;
};
/** @returns {PlatformCartCheckoutDetailRequest} */
declare function PlatformCartCheckoutDetailRequest(): PlatformCartCheckoutDetailRequest;
type PlatformCartCheckoutDetailRequest = {
    custom_meta?: CartCheckoutCustomMeta[];
    address_id?: string;
    payment_identifier?: string;
    payment_params?: any;
    payment_auto_confirm?: boolean;
    id: string;
    pos?: boolean;
    billing_address_id?: string;
    merchant_code?: string;
    aggregator?: string;
    pick_at_store_uid?: number;
    device_id?: string;
    delivery_address?: any;
    payment_mode: string;
    checkout_mode?: string;
    /**
     * - Customer details
     */
    customer_details?: any;
    meta?: any;
    staff?: StaffCheckout;
    employee_code?: string;
    billing_address?: any;
    callback_url?: string;
    user_id?: string;
    extra_meta?: any;
    order_type: string;
    /**
     * - List of file url
     */
    files?: Files[];
    ordering_store?: number;
    payment_extra_identifiers?: any;
    iin?: string;
    network?: string;
    type?: string;
    card_id?: string;
};
/** @returns {CheckCart} */
declare function CheckCart(): CheckCart;
type CheckCart = {
    cart_id?: number;
    uid?: string;
    coupon_text?: string;
    id?: string;
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
    custom_cart?: CustomCart;
    price_adjustment_applied?: PriceAdjustmentApplied[];
    is_pan_received?: boolean;
    pan_config?: any;
    order_id?: string;
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
    sector?: string;
    state_code?: string;
    geo_location?: GeoLocation;
};
/** @returns {StoreDetailsResponse} */
declare function StoreDetailsResponse(): StoreDetailsResponse;
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
    data?: PickupStoreDetail[];
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
    payment_identifier?: string;
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
    user_id?: string;
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
/** @returns {CouponOptions} */
declare function CouponOptions(): CouponOptions;
type CouponOptions = {
    types?: CouponOptionTypes;
    scopes?: CouponOptionScopes;
    applicable_on?: CouponOptionsApplicable;
    value_types?: CouponOptionsValueTypes;
    calculate_on?: CouponOptionsCalculate;
    payable_category?: CouponOptionsPayableCategory;
    txn_mode?: CouponOptionsTxnMode;
    payable_by?: CouponOptionsPayableBy;
};
/** @returns {CouponOptionTypes} */
declare function CouponOptionTypes(): CouponOptionTypes;
type CouponOptionTypes = {
    absolute?: string;
    percentage?: string;
    bogo?: string;
    bundle?: string;
};
/** @returns {CouponOptionScopes} */
declare function CouponOptionScopes(): CouponOptionScopes;
type CouponOptionScopes = {
    category_id?: string;
    brand_id?: string;
    company_id?: string;
    store_id?: string;
    collection_id?: string;
    exclude_brand_id?: string;
    category_department?: string;
    l1_category_id?: string;
    l2_category_id?: string;
    exclude_category_id?: string;
    exclude_l1_category_id?: string;
    exclude_l2_category_id?: string;
    item_tags?: string;
    tags?: string;
    zones_id?: string;
    cart_type?: string;
};
/** @returns {CouponOptionsApplicable} */
declare function CouponOptionsApplicable(): CouponOptionsApplicable;
type CouponOptionsApplicable = {
    amount?: string;
    quantity?: string;
};
/** @returns {CouponOptionsValueTypes} */
declare function CouponOptionsValueTypes(): CouponOptionsValueTypes;
type CouponOptionsValueTypes = {
    absolute?: string;
    percentage?: string;
    quantity?: string;
    flat_price?: string;
};
/** @returns {CouponOptionsCalculate} */
declare function CouponOptionsCalculate(): CouponOptionsCalculate;
type CouponOptionsCalculate = {
    mrp?: string;
    esp?: string;
    tp?: string;
};
/** @returns {CouponOptionsPayableCategory} */
declare function CouponOptionsPayableCategory(): CouponOptionsPayableCategory;
type CouponOptionsPayableCategory = {
    fynd?: string;
    seller?: string;
};
/** @returns {CouponOptionsTxnMode} */
declare function CouponOptionsTxnMode(): CouponOptionsTxnMode;
type CouponOptionsTxnMode = {
    fynd_cash?: string;
    cash?: string;
    coupon?: string;
};
/** @returns {CouponOptionsPayableBy} */
declare function CouponOptionsPayableBy(): CouponOptionsPayableBy;
type CouponOptionsPayableBy = {
    fynd_marketing?: string;
    fynd?: string;
    fynd_store?: string;
    fynd_delights?: string;
    fynd_ops?: string;
    fynd_inventory?: string;
};
/** @returns {SelectAddressResponseError} */
declare function SelectAddressResponseError(): SelectAddressResponseError;
type SelectAddressResponseError = {
    message?: string;
    cart_id?: number;
    id?: string;
    is_valid?: boolean;
    address?: AllAddressForSelectAddress;
};
/** @returns {AllAddressForSelectAddress} */
declare function AllAddressForSelectAddress(): AllAddressForSelectAddress;
type AllAddressForSelectAddress = {
    address?: PlatformAddress[];
    pii_masking?: boolean;
};
