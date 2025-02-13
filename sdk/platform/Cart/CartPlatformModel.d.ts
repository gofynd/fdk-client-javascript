export = CartPlatformModel;
/**
 * @typedef CouponDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */
/**
 * @typedef Ownership
 * @property {string} payable_category - Promotion amount payable category.
 * @property {string} payable_by - Promotion amount bearable party.
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
 * @property {string} [errors]
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
 * @property {boolean} [stackable] - Allows more than one promotion to get
 *   combined benefits
 * @property {string} [calculate_on] - Only available for Contract pricing and
 *   Ladder pricing promotion type
 * @property {string} [apply_exclusive] - Doesn't allow other promotion after
 *   current promotion applied on cart or article
 * @property {string} promo_group - Group into which promotion fall
 * @property {string} [mode] - Promotion mode
 * @property {DisplayMeta1} display_meta
 * @property {Ownership} [ownership]
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionAuthor} [author]
 * @property {PromotionDateMeta} date_meta
 * @property {string} [_id] - Promotion id
 * @property {boolean} [is_processed] - Flag to verify if promotion is ready to
 *   be applied on cart and ready to update promotion
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
 * @property {Ownership} ownership
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
 * @property {PromoIndexedCriteria[]} [indexed_criteria]
 * @property {string[]} [tags]
 */
/**
 * @typedef PromotionAddResult
 * @property {boolean} [stackable] - Boolean value set true to apply other promotions also
 * @property {string} [calculate_on] - Article Price on which promotion
 *   calculated like effective price or marked price. Only available for
 *   Contract pricing and Ladder pricing promotion type
 * @property {string} [apply_exclusive] - Promotion should apply on either
 *   article or cart.
 * @property {string} promo_group - The type of promotion group
 * @property {string} mode - Promotion mode, like coupon or promotion
 * @property {boolean} [is_processed] - Flag to verify if promotion is ready to
 *   be applied on cart and ready to update promotion
 * @property {boolean} [apply_all_discount] - True means to apply all discount offers
 * @property {DisplayMeta1} [display_meta]
 * @property {Ownership} [ownership]
 * @property {string} promotion_type - Type of promotion
 * @property {DiscountRule[]} [discount_rules] - List of discount offers and
 *   their applicable conditions
 * @property {Restrictions1} [restrictions]
 * @property {string} [currency] - Promotion Currency code like INR
 * @property {string} [code] - Promotion unique code
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionAction} [post_order_action]
 * @property {number} [apply_priority] - Promotion applicable priority
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {string} application_id - Current application id of sales channel
 * @property {Object} [buy_rules]
 * @property {Object} [_custom_json] - Set extra properties in promotion
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromoIndexedCriteria[]} [indexed_criteria]
 * @property {string[]} [tags] - List of tags applicable for promotion
 * @property {string} [_id] - Unique idenfier of promotion.
 */
/**
 * @typedef PromotionUpdate
 * @property {boolean} [stackable] - Set true to apply other promotions in cart
 * @property {string} [calculate_on] - Article Price on which promotion
 *   calculated like effective price or marked price. Only available for
 *   Contract pricing and Ladder pricing promotion type
 * @property {string} [apply_exclusive] - Promotion should apply on either
 *   article or cart.
 * @property {string} [reason] - Promotion rejection reason added by reviewer
 * @property {string} promo_group - The type of promotion group
 * @property {string} mode - Promotion mode
 * @property {boolean} [apply_all_discount] - True means to apply all discount offers
 * @property {DisplayMeta1} [display_meta]
 * @property {Ownership} [ownership]
 * @property {string} promotion_type - The Promotion type like amount, bogo and
 *   percentage etc.
 * @property {DiscountRule[]} [discount_rules] - List of discount offers and
 *   their applicable conditions
 * @property {Restrictions1} [restrictions]
 * @property {string} [currency] - Promotion Currency code like INR
 * @property {string} [code] - Promotion unique code
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionAction} [post_order_action]
 * @property {number} [apply_priority] - Promotion applicable priority
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {string} application_id - Current application id of sales channel
 * @property {Object} [buy_rules]
 * @property {Object} [_custom_json] - Set extra properties in promotion
 * @property {PromotionDateMeta} [date_meta]
 * @property {string[]} [tags] - List of tags applicable for promotion
 */
/**
 * @typedef PromotionUpdateResult
 * @property {boolean} [stackable] - Set true to apply other promotions in cart
 * @property {string} [calculate_on] - Article Price on which promotion
 *   calculated like effective price or marked price. Only available for
 *   Contract pricing and Ladder pricing promotion type
 * @property {string} [apply_exclusive] - Promotion should apply on either
 *   article or cart.
 * @property {string} [reason] - Promotion rejection reason added by reviewer
 * @property {boolean} [is_processed] - Flag to verify if promotion is ready to
 *   be applied on cart and ready to update promotion
 * @property {string} promo_group - The type of promotion group
 * @property {string} mode - Promotion mode
 * @property {boolean} [apply_all_discount] - True means to apply all discount offers
 * @property {DisplayMeta1} [display_meta]
 * @property {Ownership} [ownership]
 * @property {string} promotion_type - The Promotion type like amount, bogo and
 *   percentage etc.
 * @property {DiscountRule[]} [discount_rules] - List of discount offers and
 *   their applicable conditions
 * @property {Restrictions1} [restrictions]
 * @property {string} [currency] - Promotion Currency code like INR
 * @property {string} [code] - Promotion unique code
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionAction} [post_order_action]
 * @property {number} [apply_priority] - Promotion applicable priority
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {string} application_id - Current application id of sales channel
 * @property {Object} [buy_rules]
 * @property {Object} [_custom_json] - Set extra properties in promotion
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromoIndexedCriteria[]} [indexed_criteria]
 * @property {string[]} [tags] - List of tags applicable for promotion
 * @property {string} [_id] - Auto generated id of specific promotion
 */
/**
 * @typedef PromoIndexedCriteria
 * @property {string} [key]
 * @property {Object} [value]
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
 * @property {boolean} [hide_on_storefront]
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
 * @property {boolean} [hide_on_storefront]
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
 *   allowed (default: False)
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
 * @property {Object} [distribution_logic]
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
 * @property {Object} [distribution_logic]
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
 * @property {boolean} [remove_articles] - This field if set true will remove
 *   all articles in price adjustment if article_ids are present
 * @property {boolean} [auto_remove] - This field if set true will remove mop
 *   type price adjustment.
 * @property {Object} [distribution_logic]
 */
/**
 * @typedef DistributionRule
 * @property {Object} [conditions] - This field defines the distribution conditions
 */
/**
 * @typedef Distribution
 * @property {string} [type] - This field defines the distribution type allowed
 *   values('multi', 'single')
 * @property {string} [logic] - This field defines the distribution logic
 *   allowed values('apportion', 'weighted', 'equally')
 * @property {Object} [rule]
 */
/**
 * @typedef DistributionLogic
 * @property {string} [distribution_level] - This field defines the distribution
 *   level, currently allowed distribution level is (shipment)
 * @property {Object} [distribution]
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
 * @property {number} [uid] - Unique identifier of entities like brand or seller.
 * @property {string} [name] - Name of entities like brand or seller.
 */
/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug] - Contains list of product slug
 */
/**
 * @typedef ProductAction
 * @property {string} [type] - Type of action.
 * @property {string} [url] - Url of the product to render the product.
 * @property {ActionQuery} [query]
 */
/**
 * @typedef CategoryInfo
 * @property {number} [uid] - Product Category Id.
 * @property {string} [name] - Category name of the product.
 */
/**
 * @typedef CartProduct
 * @property {string} [slug] - Unique product url name generated via product
 *   name and other meta data
 * @property {ProductImage[]} [images]
 * @property {Object} [teaser_tag] - Teaser tag or short promotional phrase for
 *   the product.
 * @property {BaseInfo} [brand]
 * @property {ProductAction} [action]
 * @property {number} [uid] - Unique identifier of the product in cart.
 * @property {string[]} [tags] - Products tags that are added to each product to
 *   identify the set of products.
 * @property {Object} [_custom_json] - Field to add custom json of the product in cart.
 * @property {string} [type] - Type of product in cart.
 * @property {string} [name] - Product name of the product in cart which is
 *   defined on platform.
 * @property {string} [item_code] - Product code of the product while defining
 *   product on platform.
 * @property {CategoryInfo[]} [categories] - Product category information which
 *   incldes category name and category id.
 * @property {Object} [attributes] - Product attributes defined on platform.
 * @property {number[]} [l1_categories] - List of L1 categories.
 * @property {number[]} [l2_categories] - List of L2 categories.
 * @property {number[]} [l3_categories] - List of L3 categories.
 * @property {number[]} [departments] - List of departments.
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
 * @property {number} [uid] - Unique identifiers of the store from where product
 *   is fulfileld.
 * @property {string} [name] - Store name of the store from where the product is fulfiled.
 * @property {string} [store_code] - A unique code or identifier for the store,
 *   often used for internal reference.
 */
/**
 * @typedef ArticleGiftCard
 * @property {number} [gift_price] - Gift price amount applied on article.
 * @property {string} [display_text] - A gift message for the recipient to be
 *   included with the delivery of the order.
 * @property {boolean} [is_gift_applied] - A flag indicating if the order is a gift.
 */
/**
 * @typedef ProductArticle
 * @property {string} [seller_identifier] - List of identifiers used by sellers
 *   for the product size.
 * @property {number} [quantity] - Quantity of the article added in cart.
 * @property {BaseInfo} [seller]
 * @property {Object} [cart_item_meta] - Meta details of the article added from cart.
 * @property {Object} [parent_item_identifiers] - Fields to determine parent
 *   product of the product.
 * @property {boolean} [is_gift_visible] - Whether the product can be purchased
 *   as a gift. It is true if the product is available for gifting and false otherwise.
 * @property {string} [uid] - This unique identifier is assigned to the specific
 *   article. This represents item x size x location.
 * @property {ArticleGiftCard} [gift_card]
 * @property {string[]} [product_group_tags] - List fot the unique identifier
 *   for the product grouping.
 * @property {Object} [identifier] - Unique identifier of the article.
 * @property {number} [mto_quantity] - Quantity of the product which will
 *   specially manufactured as not available in stock.
 * @property {Object} [extra_meta] - Field to update extra meta of the article in cart.
 * @property {string} [type] - Type of the data sent in response. Possible value
 *   is article.
 * @property {Object} [_custom_json] - Field to update custom json of the article in cart.
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [meta] - Article meta data.
 * @property {string} [size] - Size of the article added in cart.
 * @property {StoreInfo} [store]
 * @property {string[]} [tags] - A list of article tags
 * @property {Object} [variants] - Product variant responses, each detailing a
 *   specific variant.
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
 * @typedef AppliedFreeArticles
 * @property {string} [parent_item_identifier] - Parent item identifier for free article
 * @property {number} [quantity] - Free article quantity
 * @property {string} [article_id] - Free article id
 * @property {FreeGiftItems} [free_gift_item_details] - Free gift items details
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
 * @property {number} [discount] - Discount of current promotion
 * @property {number} [article_quantity] - Quantity of article on which
 *   promotion is applicable
 * @property {number} [original_article_quantity]
 * @property {Ownership} [ownership] - Ownership of promotion
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
 * @property {string} [product_ean_id] - European Article Number of the product
 *   (limited upto 50 EAN identifier in a single request).
 * @property {Object} [parent_item_identifiers] - Parent item information of the
 *   product which identifies the parent of the product in cart.
 * @property {boolean} [is_set] - Whether or not the product is a set of items.
 * @property {ProductArticle} [article]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [key] - The attribute key associated with the size.
 * @property {CouponDetails} [coupon]
 * @property {Object} [bulk_offer] - Bulk offer information for the product
 *   which denotes if any bulk offer is applied to the product in cart.
 * @property {ArticleAppliedPriceAdjustment[]} [price_adjustment_applied]
 * @property {ProductPriceInfo} [price]
 * @property {string} [coupon_message] - Message for the coupon denotes which
 *   coupon is applied and empty if not applied.
 * @property {CartProductIdentifer} identifiers
 * @property {string} [message] - Product level message which denotes error
 *   information to display over the product in cart.
 * @property {string} [discount] - Discount amount of the product in cart.
 * @property {ProductAvailability} [availability]
 * @property {CartItemMOQ} [moq]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {PromoMeta} [promo_meta]
 * @property {CartItemCustomOrder} [custom_order]
 * @property {number[]} [charges] - Charges information which denotes types of
 *   charges and amount of charge applied to that product in cart.
 * @property {boolean} [allow_remove] - If true, the product is allowed to be
 *   removed from the cart.
 * @property {boolean} [auto_add_to_cart] - In case of bundle product this
 *   product is automatically added with parent product if true.
 * @property {DiscountMeta} [discount_meta]
 */
/**
 * @typedef DiscountMeta
 * @property {boolean} [timer] - Determines whether the discount countdown is
 *   visible or not.
 * @property {number} [start_timer_in_minutes] - The time in minutes before the
 *   discount ends when the countdown timer should start.
 * @property {string} [start] - The start time of the live discount.
 * @property {string} [end] - The end time of the live discount.
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
 * @property {number} [cart_id] - Unique identifier of the user cart.
 * @property {string} [uid] - Unique identifier of the user cart.
 * @property {string} [coupon_text] - Coupon text of coupon applied on cart.
 * @property {string} [id] - Unique identifier of the user cart.
 * @property {Object} [pan_config] - Pan card config states at what condition
 *   user should enter the pan card.
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message to be added in user cart.
 * @property {CartProductInfo[]} [items] - Items data list in user cart that
 *   includes item id, item size, store id, available sizes and rest of the item
 *   related data.
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info] - Delivery charge information
 *   message of the shipment.
 * @property {CartCommonConfig} [common_config]
 * @property {CartDetailCoupon} [coupon]
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process.
 * @property {string} [message] - Message of the get cart detail API response.
 * @property {Object} [notification] - Notification object which denotes
 *   notification data for user cart.
 * @property {string} [staff_user_id] - Staff employee user id if cart is
 *   created by staff employee for the customer.
 * @property {boolean} [success] - Success flag of get cart detail API response.
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid] - Cart validity flag determines the if the
 *   response is valid or not.
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode] - Checkout mode of user cart.
 * @property {string} [last_modified] - Last modified timestamp of cart.
 * @property {boolean} [buy_now] - Buy now flag for the cart which denotes user
 *   is doing fast checkout for the cart using buy now.
 * @property {string} [gstin] - GSTIN added in user cart.
 * @property {AppliedPromotion[]} [applied_promo_details] - List of applied
 *   promotions data to cart which includes promotion id, promotion name, offer
 *   text, description, buy rules, discount rules and promotion type.
 * @property {string} [pan_no] - Permanent Account Number of the user.
 * @property {CustomCart} [custom_cart]
 * @property {CartAppliedPriceAdjustment[]} [price_adjustment_applied]
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
 * @property {Object} [custom_cart_meta] - Custom meta details added cart
 *   checkout API payload.
 */
/**
 * @typedef OpenApiErrorResponse
 * @property {boolean} [success] - Success flag of error response.
 * @property {string} [message] - Message of the error response.
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
 * @property {number} [cart_id] - Unique identifier of the user cart.
 * @property {string} [uid] - Unique identifier of the user cart.
 * @property {string} [coupon_text] - Coupon text of the applied coupon on user cart.
 * @property {string} [id] - Unique identifier of the user cart.
 * @property {Object} [pan_config] - Pan card config states at what condition
 *   user should enter the pan card.
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message added in user cart.
 * @property {CartProductInfo[]} [items] - Items data list in user cart that
 *   includes item id, item size, store id, available sizes and rest of the item
 *   related data.
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info] - Delivery charge info message of
 *   the user cart.
 * @property {CartCommonConfig} [common_config]
 * @property {CartDetailCoupon} [coupon]
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process.
 * @property {string} [message] - Message of the get shared cart API response.
 * @property {Object} [notification] - Notification object which denotes
 *   notification data for user cart.
 * @property {string} [staff_user_id] - Staff employee user id if cart is
 *   created by staff employee for the customer.
 * @property {boolean} [success] - Success flag of get cart detail API response.
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid] - Cart validity flag determines the if the
 *   response is valid or not.
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode] - Checkout mode of address on which
 *   address to be used for which checkout mode of cart.
 * @property {string} [last_modified] - Last modified timestamp of user cart.
 * @property {boolean} [buy_now] - Buy now flag for the cart which denotes user
 *   is doing fast checkout for the cart using buy now.
 * @property {string} [gstin] - GSTIN added in user cart.
 * @property {AppliedPromotion[]} [applied_promo_details] - List of applied
 *   promotions data to cart which includes promotion id, promotion name, offer
 *   text, description, buy rules, discount rules and promotion type.
 * @property {string} [pan_no] - Permanent Account Number of the user.
 * @property {CustomCart} [custom_cart]
 * @property {CartAppliedPriceAdjustment[]} [price_adjustment_applied]
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
 * @property {Object} [custom_cart_meta] - Custom cart meta of user cart added
 *   via update cart meta API.
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
 * @property {number} [cart_id] - Unique identifier of the user cart.
 * @property {string} [uid] - Unique identifier of the user cart.
 * @property {string} [coupon_text] - Coupon text of coupon applied on cart.
 * @property {string} [id] - Unique identifier of the user cart.
 * @property {Object} [pan_config] - Pan card config states at what condition
 *   user should enter the pan card.
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message to be added in user cart.
 * @property {CartProductInfo[]} [items] - Items data list in user cart that
 *   includes item id, item size, store id, available sizes and rest of the item
 *   related data.
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info] - Delivery charge information
 *   message of the shipment.
 * @property {CartCommonConfig} [common_config]
 * @property {CartDetailCoupon} [coupon]
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process.
 * @property {string} [message] - Message of the get cart detail API response.
 * @property {Object} [notification] - Notification object which denotes
 *   notification data for user cart.
 * @property {string} [staff_user_id] - Staff employee user id if cart is
 *   created by staff employee for the customer.
 * @property {boolean} [success] - Success flag of get cart detail API response.
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid] - Cart validity flag determines the if the
 *   response is valid or not.
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode] - Checkout mode of user cart.
 * @property {string} [last_modified] - Last modified timestamp of cart.
 * @property {CartAppliedPriceAdjustment[]} [price_adjustment_applied]
 * @property {boolean} [buy_now] - Buy now flag for the cart which denotes user
 *   is doing fast checkout for the cart using buy now.
 * @property {string} [gstin] - GSTIN added in user cart.
 * @property {AppliedPromotion[]} [applied_promo_details] - List of applied
 *   promotions data to cart which includes promotion id, promotion name, offer
 *   text, description, buy rules, discount rules and promotion type.
 * @property {string} [pan_no] - Permanent Account Number of the user.
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
 * @property {CustomCart} [custom_cart]
 * @property {Object} [custom_cart_meta] - Custom meta details added cart
 *   checkout API payload .
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
 * @property {number} item_index
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
 * @property {Object} [result]
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
 * @property {string} [callback_url]
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
 * @property {number} [cart_id] - Unique identifier of the user cart.
 * @property {string} [uid] - Unique identifier of the user cart.
 * @property {string} [coupon_text] - Coupon text of the applied coupon on user cart.
 * @property {string} [id] - Unique identifier of the user cart.
 * @property {Object} [pan_config] - Pan card config states at what condition
 *   user should enter the pan card.
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message added in user cart.
 * @property {CartProductInfo[]} [items] - Items data list in user cart that
 *   includes item id, item size, store id, available sizes and rest of the item
 *   related data.
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info] - Delivery charge info message of
 *   the user cart.
 * @property {CartCommonConfig} [common_config]
 * @property {CartDetailCoupon} [coupon]
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process.
 * @property {string} [message] - Message of the get shared cart API response.
 * @property {Object} [notification] - Notification object which denotes
 *   notification data for user cart.
 * @property {string} [staff_user_id] - Staff employee user id if cart is
 *   created by staff employee for the customer.
 * @property {boolean} [success] - Success flag of get cart detail API response.
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid] - Cart validity flag determines the if the
 *   response is valid or not.
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode] - Checkout mode of address on which
 *   address to be used for which checkout mode of cart.
 * @property {string} [last_modified] - Last modified timestamp of user cart.
 * @property {boolean} [buy_now] - Buy now flag for the cart which denotes user
 *   is doing fast checkout for the cart using buy now.
 * @property {string} [gstin] - GSTIN added in user cart.
 * @property {AppliedPromotion[]} [applied_promo_details] - List of applied
 *   promotions data to cart which includes promotion id, promotion name, offer
 *   text, description, buy rules, discount rules and promotion type.
 * @property {string} [pan_no] - Permanent Account Number of the user.
 * @property {CustomCart} [custom_cart]
 * @property {CartAppliedPriceAdjustment[]} [price_adjustment_applied]
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
 * @property {Object} [custom_cart_meta] - Custom cart meta of user cart added
 *   via update cart meta API.
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
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
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
 * @typedef ValidationConfig
 * @property {number} address_max_limit - The maximum number of addresses a user can have.
 * @property {number} user_address_count - The total number of addresses saved by a user.
 */
/**
 * @typedef PlatformGetAddressesResponse
 * @property {PlatformAddress[]} [address]
 * @property {boolean} [pii_masking]
 * @property {ValidationConfig} [validation_config]
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
 * @typedef ShipmentError
 * @property {string} [type]
 * @property {string[]} [value]
 * @property {string} [message]
 */
/**
 * @typedef PlatformShipmentResponse
 * @property {number} [shipments] - Count of shipments that will be shipped.
 * @property {number} [fulfillment_id] - Fulfilment id of the shipment.
 * @property {CartProductInfo[]} [items] - Item details in the shipment.
 * @property {Object} [dp_options] - Delivery partner options that are available
 *   to deliver the shipment.
 * @property {string} [shipment_type] - Shipment type of the shipment returned
 *   in get shipments API like single_shipment or multiple shipment. Single
 *   Shipment means 1 item in 1 shipment and vice versa in the other one.
 * @property {string} [order_type] - Order type of the shipment like pickAtStore
 *   or HomeDelivery.
 * @property {string} [box_type] - Box type of the shipment in which the
 *   shipment will be delivered.
 * @property {ShipmentPromise} [promise]
 * @property {string} [dp_id] - Delivery partner id of the shipment.
 * @property {string} [fulfillment_type] - Fulfilment type of shipment.
 * @property {ShipmentArticle[]} [articles]
 * @property {ShipmentMeta} [meta]
 * @property {ShipmentLogisticsMeta} [logistics_meta]
 * @property {ShipmentError} [error]
 */
/**
 * @typedef ShipmentMeta
 * @property {string} [packaging_name]
 * @property {ShipmentMetaDimension} [dimension]
 * @property {string} [assign_dp_from_sb]
 * @property {string} [dp_sort_key]
 * @property {number} [shipment_weight]
 * @property {number} [shipment_volumetric_weight]
 * @property {number} [shipment_chargeable_weight]
 * @property {string} [shipping_zone]
 */
/**
 * @typedef ShipmentMetaDimension
 * @property {number} [height] - The height of the product
 * @property {number} [length] - The length of the product
 * @property {number} [width] - The width of the product
 */
/**
 * @typedef ShipmentLogisticsMeta
 * @property {ShipmentLogisticsMetaAccount[]} [account_options]
 * @property {Object} [account_info]
 * @property {string} [dp_sort_key]
 * @property {string} [assign_dp_from_sb]
 */
/**
 * @typedef ShipmentLogisticsMetaAccount
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {number} [fm_priority]
 * @property {number} [lm_priority]
 * @property {number} [rvp_priority]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [parent_id]
 * @property {boolean} [is_active]
 * @property {string} [payment_mode]
 * @property {string} [assign_dp_from_sb]
 * @property {string} [internal_account_id]
 * @property {string} [external_account_id]
 * @property {number} [f_priority]
 * @property {number} [r_priority]
 * @property {number} [dp_shipping_charges]
 * @property {boolean} [qc_enabled]
 * @property {ShipmentLogisticsMetaAccountAreaCode} [area_code]
 * @property {string[]} [operations]
 * @property {ShipmentLogisticsMetaAccountDpTat} [dp_tat]
 */
/**
 * @typedef ShipmentLogisticsMetaAccountAreaCode
 * @property {string} [from_pincode]
 * @property {string} [to_pincode]
 * @property {string} [source]
 * @property {string} [destination]
 */
/**
 * @typedef ShipmentLogisticsMetaAccountDpTat
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef PlatformCartShipmentsResponse
 * @property {number} [cart_id] - Unique identifier of the user cart.
 * @property {string} [uid] - Unique identifier of the user cart.
 * @property {string} [coupon_text] - Coupon text of coupon applied on cart.
 * @property {string} [id] - Unique identifier of the user cart.
 * @property {Object} [pan_config]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message to be added in user cart.
 * @property {CartProductInfo[]} [items] - Items data list in user cart that
 *   includes item id, item size, store id, available sizes and rest of the item
 *   related data.
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info] - Delivery charge information
 *   message of the shipment.
 * @property {CartCommonConfig} [common_config]
 * @property {CartDetailCoupon} [coupon]
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process.
 * @property {string} [message] - Message of the get cart detail API response.
 * @property {Object} [notification] - Notification object which denotes
 *   notification data for user cart.
 * @property {string} [staff_user_id] - Staff employee user id if cart is
 *   created by staff employee for the customer.
 * @property {boolean} [success] - Success flag of get cart detail API response.
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid] - Cart validity flag determines the if the
 *   response is valid or not.
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode] - Checkout mode of user cart.
 * @property {string} [last_modified] - Last modified timestamp of cart.
 * @property {boolean} [buy_now] - Buy now flag for the cart which denotes user
 *   is doing fast checkout for the cart using buy now.
 * @property {string} [gstin] - GSTIN added in user cart.
 * @property {AppliedPromotion[]} [applied_promo_details] - List of applied
 *   promotions data to cart which includes promotion id, promotion name, offer
 *   text, description, buy rules, discount rules and promotion type.
 * @property {string} [pan_no] - Permanent Account Number of the user.
 * @property {CustomCart} [custom_cart]
 * @property {CartAppliedPriceAdjustment[]} [price_adjustment_applied]
 * @property {PlatformShipmentResponse[]} [shipments]
 * @property {boolean} [error]
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
 * @property {Object} [custom_cart_meta] - Custom meta details added cart
 *   checkout API payload.
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
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
 * @property {string} [comment]
 * @property {string} [staff_user_id] - Staff user id
 * @property {Object} [delivery_slots]
 * @property {Object} [custom_cart_meta]
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
 * @property {number} [cart_id] - Cart id of the user cart for which the order placed.
 * @property {string} [uid] - Cart id of user cart.
 * @property {string} [coupon_text] - Coupon text of the applied coupon on order placed.
 * @property {string} [id] - Cart id of the user cart.
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message added in cart after order placed.
 * @property {CartProductInfo[]} [items] - Items details in cart after order placed.
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info] - Delivery charge information
 *   message of the shipment.
 * @property {CartCommonConfig} [common_config]
 * @property {CartDetailCoupon} [coupon]
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process.
 * @property {string} [message] - Message of the cart checkout API response.
 * @property {Object} [notification] - Notification object which denotes
 *   notification data for user cart.
 * @property {string} [staff_user_id] - Staff employee user id if cart is
 *   created by staff employee for the customer.
 * @property {boolean} [success] - Success flag of checkout cart API response.
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid] - Valid flag fotr the checkout response if
 *   order placed was valid.
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode] - Checkout mode of user cart.
 * @property {string} [last_modified] - Last modified timestamp of cart.
 * @property {boolean} [buy_now] - Buy now flag of user cart.
 * @property {string} [gstin] - GSTIN number added in cart.
 * @property {AppliedPromotion[]} [applied_promo_details]
 * @property {string} [pan_no] - Permanent Account Number of the user.
 * @property {CustomCart} [custom_cart]
 * @property {PriceAdjustmentApplied[]} [price_adjustment_applied]
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
 * @property {Object} [pan_config] - Pan card config states at what condition
 *   user should enter the pan card.
 * @property {string} [order_id] - Order id generated after placing order.
 * @property {Object} [custom_cart_meta] - Custom cart meta details added in cart.
 * @property {boolean} [cod_available] - Whether Cash On Delivery available it true.
 * @property {number} [delivery_charges] - Delivery charges of the order placed
 *   via checkout API.
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
 * @property {string[]} [tags] - Tags for promotion
 */
/**
 * @typedef PromotionOffersResponse
 * @property {PromotionOffer[]} [available_promotions]
 */
/**
 * @typedef PromotionPaymentOffer
 * @property {string} [application_id] - Application id
 * @property {Object[]} [buy_rules] - Buy rules of promotions
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
 * @property {ValidationConfig} [validation_config]
 */
/**
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
 */
declare class CartPlatformModel {
}
declare namespace CartPlatformModel {
    export { CouponDateMeta, Ownership, CouponAuthor, State, PaymentAllowValue, PaymentModes, PriceRange, PostOrder, BulkBundleRestriction, UsesRemaining, UsesRestriction, Restrictions, Validation, CouponAction, NextSchedule, CouponSchedule, Rule, DisplayMetaDict, DisplayMeta, Identifier, Validity, RuleDefinition, CouponAdd, Page, CouponObj, CouponsResponse, CouponMedias, CouponDetailObj, CouponDetailResponse, TagsViewResponse, SuccessMessage, OperationErrorResponse, CartMetaConfigOperationErrorResponse, CouponUpdate, CouponPartialUpdate, DisplayMeta1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, PostOrder1, UsesRemaining1, UsesRestriction1, Restrictions1, PromotionSchedule, PromotionAction, PromotionAuthor, Visibility, PromotionDateMeta, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionAddResult, PromotionUpdate, PromotionUpdateResult, PromoIndexedCriteria, PromotionPartialUpdate, ActivePromos, ActivePromosResponse, Charges, DeliveryCharges, OrderPlacing, PanCard, CartMetaConfigUpdate, TimeStampIDResponse, CartMetaConfigDetailResponse, CartMetaConfigListResponse, CartMetaConfigListObject, CartMetaConfigAddResponse, CartMetaConfigAdd, Article, PriceAdjustmentRestrictions, Collection, PriceAdjustmentUpdate, PriceAdjustment, AddPriceAdjustmentResponse, UpdatePriceAdjustmentResponse, PriceAdjustmentResponse, GetPriceAdjustmentResponse, PriceAdjustmentAdd, DistributionRule, Distribution, DistributionLogic, CartItem, OpenapiCartDetailsRequest, CouponBreakup, DisplayBreakup, LoyaltyPoints, RawBreakup, CartBreakup, ProductImage, Tags, BaseInfo, ActionQuery, ProductAction, CategoryInfo, CartProduct, BasePrice, ArticleAppliedPriceAdjustment, ArticlePriceInfo, StoreInfo, ArticleGiftCard, ProductArticle, PromoDiscountRuleOffer, PromoDiscountRuleRawOffer, PromoDiscountRuleItemCriteria, DiscountRulesApp, AppliedFreeArticles, PromoBuyRuleCartConditions, PromoBuyRuleCompareFieldsTypes, BuyRules, AppliedPromotion, PromiseFormatted, PromiseISOFormat, PromiseTimestamp, ShipmentPromise, CouponDetails, ProductPrice, ProductPriceInfo, CartProductIdentifer, ProductAvailabilitySize, ProductAvailability, PromoMeta, ParentItemIdentifiers, CartItemMOQ, CartItemCustomOrder, CartProductInfo, DiscountMeta, PriceAdjustmentApplied, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, MultiTenderPaymentMeta, MultiTenderPaymentMethod, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, PaymentSelectionLock, CartCurrency, CartCouponMedias, CartDetailCoupon, ChargesThreshold, DeliveryChargesConfig, CartCommonConfig, CartAppliedPriceAdjustment, CustomCart, CartDetailResponse, AddProductCart, ArticleAssignment, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, OverrideCartItemPromo, OverrideCartItem, OverrideCheckoutReq, OverrideCheckoutResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, CartMappingUserInfo, PlatformAddCartRequest, PlatformUpdateCartRequest, DeleteCartRequest, DeleteCartDetailResponse, CartItemCountResponse, Coupon, PageCoupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, AddressCustomJson, ValidationConfig, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentArticle, ShipmentError, PlatformShipmentResponse, ShipmentMeta, ShipmentMetaDimension, ShipmentLogisticsMeta, ShipmentLogisticsMetaAccount, ShipmentLogisticsMetaAccountAreaCode, ShipmentLogisticsMetaAccountDpTat, PlatformCartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, CartMetaFieldsValidation, StaffCheckout, CustomerDetails, Files, CartCheckoutCustomMeta, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, PaymentMeta, PaymentMethod, PlatformCartCheckoutDetailV2Request, UpdateCartPaymentRequestV2, PriceMinMax, ItemPriceDetails, FreeGiftItems, PromotionOffer, PromotionOffersResponse, PromotionPaymentOffer, CouponOptions, CouponOptionTypes, CouponOptionScopes, CouponOptionsApplicable, CouponOptionsValueTypes, CouponOptionsCalculate, CouponOptionsPayableCategory, CouponOptionsTxnMode, CouponOptionsPayableBy, SelectAddressResponseError, AllAddressForSelectAddress, ValidationError };
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
    /**
     * - Promotion amount payable category.
     */
    payable_category: string;
    /**
     * - Promotion amount bearable party.
     */
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
    errors?: string;
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
    mode?: string;
    display_meta: DisplayMeta1;
    ownership?: Ownership;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    date_meta: PromotionDateMeta;
    /**
     * - Promotion id
     */
    _id?: string;
    /**
     * - Flag to verify if promotion is ready to
     * be applied on cart and ready to update promotion
     */
    is_processed?: boolean;
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
    ownership: Ownership;
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
    indexed_criteria?: PromoIndexedCriteria[];
    tags?: string[];
};
/** @returns {PromotionAddResult} */
declare function PromotionAddResult(): PromotionAddResult;
type PromotionAddResult = {
    /**
     * - Boolean value set true to apply other promotions also
     */
    stackable?: boolean;
    /**
     * - Article Price on which promotion
     * calculated like effective price or marked price. Only available for
     * Contract pricing and Ladder pricing promotion type
     */
    calculate_on?: string;
    /**
     * - Promotion should apply on either
     * article or cart.
     */
    apply_exclusive?: string;
    /**
     * - The type of promotion group
     */
    promo_group: string;
    /**
     * - Promotion mode, like coupon or promotion
     */
    mode: string;
    /**
     * - Flag to verify if promotion is ready to
     * be applied on cart and ready to update promotion
     */
    is_processed?: boolean;
    /**
     * - True means to apply all discount offers
     */
    apply_all_discount?: boolean;
    display_meta?: DisplayMeta1;
    ownership?: Ownership;
    /**
     * - Type of promotion
     */
    promotion_type: string;
    /**
     * - List of discount offers and
     * their applicable conditions
     */
    discount_rules?: DiscountRule[];
    restrictions?: Restrictions1;
    /**
     * - Promotion Currency code like INR
     */
    currency?: string;
    /**
     * - Promotion unique code
     */
    code?: string;
    _schedule?: PromotionSchedule;
    post_order_action?: PromotionAction;
    /**
     * - Promotion applicable priority
     */
    apply_priority?: number;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    /**
     * - Current application id of sales channel
     */
    application_id: string;
    buy_rules?: any;
    /**
     * - Set extra properties in promotion
     */
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    indexed_criteria?: PromoIndexedCriteria[];
    /**
     * - List of tags applicable for promotion
     */
    tags?: string[];
    /**
     * - Unique idenfier of promotion.
     */
    _id?: string;
};
/** @returns {PromotionUpdate} */
declare function PromotionUpdate(): PromotionUpdate;
type PromotionUpdate = {
    /**
     * - Set true to apply other promotions in cart
     */
    stackable?: boolean;
    /**
     * - Article Price on which promotion
     * calculated like effective price or marked price. Only available for
     * Contract pricing and Ladder pricing promotion type
     */
    calculate_on?: string;
    /**
     * - Promotion should apply on either
     * article or cart.
     */
    apply_exclusive?: string;
    /**
     * - Promotion rejection reason added by reviewer
     */
    reason?: string;
    /**
     * - The type of promotion group
     */
    promo_group: string;
    /**
     * - Promotion mode
     */
    mode: string;
    /**
     * - True means to apply all discount offers
     */
    apply_all_discount?: boolean;
    display_meta?: DisplayMeta1;
    ownership?: Ownership;
    /**
     * - The Promotion type like amount, bogo and
     * percentage etc.
     */
    promotion_type: string;
    /**
     * - List of discount offers and
     * their applicable conditions
     */
    discount_rules?: DiscountRule[];
    restrictions?: Restrictions1;
    /**
     * - Promotion Currency code like INR
     */
    currency?: string;
    /**
     * - Promotion unique code
     */
    code?: string;
    _schedule?: PromotionSchedule;
    post_order_action?: PromotionAction;
    /**
     * - Promotion applicable priority
     */
    apply_priority?: number;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    /**
     * - Current application id of sales channel
     */
    application_id: string;
    buy_rules?: any;
    /**
     * - Set extra properties in promotion
     */
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    /**
     * - List of tags applicable for promotion
     */
    tags?: string[];
};
/** @returns {PromotionUpdateResult} */
declare function PromotionUpdateResult(): PromotionUpdateResult;
type PromotionUpdateResult = {
    /**
     * - Set true to apply other promotions in cart
     */
    stackable?: boolean;
    /**
     * - Article Price on which promotion
     * calculated like effective price or marked price. Only available for
     * Contract pricing and Ladder pricing promotion type
     */
    calculate_on?: string;
    /**
     * - Promotion should apply on either
     * article or cart.
     */
    apply_exclusive?: string;
    /**
     * - Promotion rejection reason added by reviewer
     */
    reason?: string;
    /**
     * - Flag to verify if promotion is ready to
     * be applied on cart and ready to update promotion
     */
    is_processed?: boolean;
    /**
     * - The type of promotion group
     */
    promo_group: string;
    /**
     * - Promotion mode
     */
    mode: string;
    /**
     * - True means to apply all discount offers
     */
    apply_all_discount?: boolean;
    display_meta?: DisplayMeta1;
    ownership?: Ownership;
    /**
     * - The Promotion type like amount, bogo and
     * percentage etc.
     */
    promotion_type: string;
    /**
     * - List of discount offers and
     * their applicable conditions
     */
    discount_rules?: DiscountRule[];
    restrictions?: Restrictions1;
    /**
     * - Promotion Currency code like INR
     */
    currency?: string;
    /**
     * - Promotion unique code
     */
    code?: string;
    _schedule?: PromotionSchedule;
    post_order_action?: PromotionAction;
    /**
     * - Promotion applicable priority
     */
    apply_priority?: number;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    /**
     * - Current application id of sales channel
     */
    application_id: string;
    buy_rules?: any;
    /**
     * - Set extra properties in promotion
     */
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    indexed_criteria?: PromoIndexedCriteria[];
    /**
     * - List of tags applicable for promotion
     */
    tags?: string[];
    /**
     * - Auto generated id of specific promotion
     */
    _id?: string;
};
/** @returns {PromoIndexedCriteria} */
declare function PromoIndexedCriteria(): PromoIndexedCriteria;
type PromoIndexedCriteria = {
    key?: string;
    value?: any;
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
    hide_on_storefront?: boolean;
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
    hide_on_storefront?: boolean;
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
    distribution_logic?: any;
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
    distribution_logic?: any;
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
     * - This field if set true will remove
     * all articles in price adjustment if article_ids are present
     */
    remove_articles?: boolean;
    /**
     * - This field if set true will remove mop
     * type price adjustment.
     */
    auto_remove?: boolean;
    distribution_logic?: any;
};
/** @returns {DistributionRule} */
declare function DistributionRule(): DistributionRule;
type DistributionRule = {
    /**
     * - This field defines the distribution conditions
     */
    conditions?: any;
};
/** @returns {Distribution} */
declare function Distribution(): Distribution;
type Distribution = {
    /**
     * - This field defines the distribution type allowed
     * values('multi', 'single')
     */
    type?: string;
    /**
     * - This field defines the distribution logic
     * allowed values('apportion', 'weighted', 'equally')
     */
    logic?: string;
    rule?: any;
};
/** @returns {DistributionLogic} */
declare function DistributionLogic(): DistributionLogic;
type DistributionLogic = {
    /**
     * - This field defines the distribution
     * level, currently allowed distribution level is (shipment)
     */
    distribution_level?: string;
    distribution?: any;
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
    /**
     * - Unique identifier of entities like brand or seller.
     */
    uid?: number;
    /**
     * - Name of entities like brand or seller.
     */
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
    /**
     * - Type of action.
     */
    type?: string;
    /**
     * - Url of the product to render the product.
     */
    url?: string;
    query?: ActionQuery;
};
/** @returns {CategoryInfo} */
declare function CategoryInfo(): CategoryInfo;
type CategoryInfo = {
    /**
     * - Product Category Id.
     */
    uid?: number;
    /**
     * - Category name of the product.
     */
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
    /**
     * - Teaser tag or short promotional phrase for
     * the product.
     */
    teaser_tag?: any;
    brand?: BaseInfo;
    action?: ProductAction;
    /**
     * - Unique identifier of the product in cart.
     */
    uid?: number;
    /**
     * - Products tags that are added to each product to
     * identify the set of products.
     */
    tags?: string[];
    /**
     * - Field to add custom json of the product in cart.
     */
    _custom_json?: any;
    /**
     * - Type of product in cart.
     */
    type?: string;
    /**
     * - Product name of the product in cart which is
     * defined on platform.
     */
    name?: string;
    /**
     * - Product code of the product while defining
     * product on platform.
     */
    item_code?: string;
    /**
     * - Product category information which
     * incldes category name and category id.
     */
    categories?: CategoryInfo[];
    /**
     * - Product attributes defined on platform.
     */
    attributes?: any;
    /**
     * - List of L1 categories.
     */
    l1_categories?: number[];
    /**
     * - List of L2 categories.
     */
    l2_categories?: number[];
    /**
     * - List of L3 categories.
     */
    l3_categories?: number[];
    /**
     * - List of departments.
     */
    departments?: number[];
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
    /**
     * - Unique identifiers of the store from where product
     * is fulfileld.
     */
    uid?: number;
    /**
     * - Store name of the store from where the product is fulfiled.
     */
    name?: string;
    /**
     * - A unique code or identifier for the store,
     * often used for internal reference.
     */
    store_code?: string;
};
/** @returns {ArticleGiftCard} */
declare function ArticleGiftCard(): ArticleGiftCard;
type ArticleGiftCard = {
    /**
     * - Gift price amount applied on article.
     */
    gift_price?: number;
    /**
     * - A gift message for the recipient to be
     * included with the delivery of the order.
     */
    display_text?: string;
    /**
     * - A flag indicating if the order is a gift.
     */
    is_gift_applied?: boolean;
};
/** @returns {ProductArticle} */
declare function ProductArticle(): ProductArticle;
type ProductArticle = {
    /**
     * - List of identifiers used by sellers
     * for the product size.
     */
    seller_identifier?: string;
    /**
     * - Quantity of the article added in cart.
     */
    quantity?: number;
    seller?: BaseInfo;
    /**
     * - Meta details of the article added from cart.
     */
    cart_item_meta?: any;
    /**
     * - Fields to determine parent
     * product of the product.
     */
    parent_item_identifiers?: any;
    /**
     * - Whether the product can be purchased
     * as a gift. It is true if the product is available for gifting and false otherwise.
     */
    is_gift_visible?: boolean;
    /**
     * - This unique identifier is assigned to the specific
     * article. This represents item x size x location.
     */
    uid?: string;
    gift_card?: ArticleGiftCard;
    /**
     * - List fot the unique identifier
     * for the product grouping.
     */
    product_group_tags?: string[];
    /**
     * - Unique identifier of the article.
     */
    identifier?: any;
    /**
     * - Quantity of the product which will
     * specially manufactured as not available in stock.
     */
    mto_quantity?: number;
    /**
     * - Field to update extra meta of the article in cart.
     */
    extra_meta?: any;
    /**
     * - Type of the data sent in response. Possible value
     * is article.
     */
    type?: string;
    /**
     * - Field to update custom json of the article in cart.
     */
    _custom_json?: any;
    price?: ArticlePriceInfo;
    /**
     * - Article meta data.
     */
    meta?: any;
    /**
     * - Size of the article added in cart.
     */
    size?: string;
    store?: StoreInfo;
    /**
     * - A list of article tags
     */
    tags?: string[];
    /**
     * - Product variant responses, each detailing a
     * specific variant.
     */
    variants?: any;
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
     * - Discount of current promotion
     */
    discount?: number;
    /**
     * - Quantity of article on which
     * promotion is applicable
     */
    article_quantity?: number;
    original_article_quantity?: number;
    /**
     * - Ownership of promotion
     */
    ownership?: Ownership;
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
    /**
     * - European Article Number of the product
     * (limited upto 50 EAN identifier in a single request).
     */
    product_ean_id?: string;
    /**
     * - Parent item information of the
     * product which identifies the parent of the product in cart.
     */
    parent_item_identifiers?: any;
    /**
     * - Whether or not the product is a set of items.
     */
    is_set?: boolean;
    article?: ProductArticle;
    promotions_applied?: AppliedPromotion[];
    delivery_promise?: ShipmentPromise;
    /**
     * - The attribute key associated with the size.
     */
    key?: string;
    coupon?: CouponDetails;
    /**
     * - Bulk offer information for the product
     * which denotes if any bulk offer is applied to the product in cart.
     */
    bulk_offer?: any;
    price_adjustment_applied?: ArticleAppliedPriceAdjustment[];
    price?: ProductPriceInfo;
    /**
     * - Message for the coupon denotes which
     * coupon is applied and empty if not applied.
     */
    coupon_message?: string;
    identifiers: CartProductIdentifer;
    /**
     * - Product level message which denotes error
     * information to display over the product in cart.
     */
    message?: string;
    /**
     * - Discount amount of the product in cart.
     */
    discount?: string;
    availability?: ProductAvailability;
    moq?: CartItemMOQ;
    price_per_unit?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    custom_order?: CartItemCustomOrder;
    /**
     * - Charges information which denotes types of
     * charges and amount of charge applied to that product in cart.
     */
    charges?: number[];
    /**
     * - If true, the product is allowed to be
     * removed from the cart.
     */
    allow_remove?: boolean;
    /**
     * - In case of bundle product this
     * product is automatically added with parent product if true.
     */
    auto_add_to_cart?: boolean;
    discount_meta?: DiscountMeta;
};
/** @returns {DiscountMeta} */
declare function DiscountMeta(): DiscountMeta;
type DiscountMeta = {
    /**
     * - Determines whether the discount countdown is
     * visible or not.
     */
    timer?: boolean;
    /**
     * - The time in minutes before the
     * discount ends when the countdown timer should start.
     */
    start_timer_in_minutes?: number;
    /**
     * - The start time of the live discount.
     */
    start?: string;
    /**
     * - The end time of the live discount.
     */
    end?: string;
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
    /**
     * - Unique identifier of the user cart.
     */
    cart_id?: number;
    /**
     * - Unique identifier of the user cart.
     */
    uid?: string;
    /**
     * - Coupon text of coupon applied on cart.
     */
    coupon_text?: string;
    /**
     * - Unique identifier of the user cart.
     */
    id?: string;
    /**
     * - Pan card config states at what condition
     * user should enter the pan card.
     */
    pan_config?: any;
    delivery_promise?: ShipmentPromise;
    /**
     * - Comment message to be added in user cart.
     */
    comment?: string;
    /**
     * - Items data list in user cart that
     * includes item id, item size, store id, available sizes and rest of the item
     * related data.
     */
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    /**
     * - Delivery charge information
     * message of the shipment.
     */
    delivery_charge_info?: string;
    common_config?: CartCommonConfig;
    coupon?: CartDetailCoupon;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process.
     */
    restrict_checkout?: boolean;
    /**
     * - Message of the get cart detail API response.
     */
    message?: string;
    /**
     * - Notification object which denotes
     * notification data for user cart.
     */
    notification?: any;
    /**
     * - Staff employee user id if cart is
     * created by staff employee for the customer.
     */
    staff_user_id?: string;
    /**
     * - Success flag of get cart detail API response.
     */
    success?: boolean;
    breakup_values?: CartBreakup;
    /**
     * - Cart validity flag determines the if the
     * response is valid or not.
     */
    is_valid?: boolean;
    currency?: CartCurrency;
    /**
     * - Checkout mode of user cart.
     */
    checkout_mode?: string;
    /**
     * - Last modified timestamp of cart.
     */
    last_modified?: string;
    /**
     * - Buy now flag for the cart which denotes user
     * is doing fast checkout for the cart using buy now.
     */
    buy_now?: boolean;
    /**
     * - GSTIN added in user cart.
     */
    gstin?: string;
    /**
     * - List of applied
     * promotions data to cart which includes promotion id, promotion name, offer
     * text, description, buy rules, discount rules and promotion type.
     */
    applied_promo_details?: AppliedPromotion[];
    /**
     * - Permanent Account Number of the user.
     */
    pan_no?: string;
    custom_cart?: CustomCart;
    price_adjustment_applied?: CartAppliedPriceAdjustment[];
    /**
     * - If the customer provides a PAN
     * number, set it to true.
     */
    is_pan_received?: boolean;
    /**
     * - Custom meta details added cart
     * checkout API payload.
     */
    custom_cart_meta?: any;
};
/** @returns {OpenApiErrorResponse} */
declare function OpenApiErrorResponse(): OpenApiErrorResponse;
type OpenApiErrorResponse = {
    /**
     * - Success flag of error response.
     */
    success?: boolean;
    /**
     * - Message of the error response.
     */
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
    /**
     * - Unique identifier of the user cart.
     */
    cart_id?: number;
    /**
     * - Unique identifier of the user cart.
     */
    uid?: string;
    /**
     * - Coupon text of the applied coupon on user cart.
     */
    coupon_text?: string;
    /**
     * - Unique identifier of the user cart.
     */
    id?: string;
    /**
     * - Pan card config states at what condition
     * user should enter the pan card.
     */
    pan_config?: any;
    delivery_promise?: ShipmentPromise;
    /**
     * - Comment message added in user cart.
     */
    comment?: string;
    /**
     * - Items data list in user cart that
     * includes item id, item size, store id, available sizes and rest of the item
     * related data.
     */
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    /**
     * - Delivery charge info message of
     * the user cart.
     */
    delivery_charge_info?: string;
    common_config?: CartCommonConfig;
    coupon?: CartDetailCoupon;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process.
     */
    restrict_checkout?: boolean;
    /**
     * - Message of the get shared cart API response.
     */
    message?: string;
    /**
     * - Notification object which denotes
     * notification data for user cart.
     */
    notification?: any;
    /**
     * - Staff employee user id if cart is
     * created by staff employee for the customer.
     */
    staff_user_id?: string;
    /**
     * - Success flag of get cart detail API response.
     */
    success?: boolean;
    breakup_values?: CartBreakup;
    /**
     * - Cart validity flag determines the if the
     * response is valid or not.
     */
    is_valid?: boolean;
    currency?: CartCurrency;
    /**
     * - Checkout mode of address on which
     * address to be used for which checkout mode of cart.
     */
    checkout_mode?: string;
    /**
     * - Last modified timestamp of user cart.
     */
    last_modified?: string;
    /**
     * - Buy now flag for the cart which denotes user
     * is doing fast checkout for the cart using buy now.
     */
    buy_now?: boolean;
    /**
     * - GSTIN added in user cart.
     */
    gstin?: string;
    /**
     * - List of applied
     * promotions data to cart which includes promotion id, promotion name, offer
     * text, description, buy rules, discount rules and promotion type.
     */
    applied_promo_details?: AppliedPromotion[];
    /**
     * - Permanent Account Number of the user.
     */
    pan_no?: string;
    custom_cart?: CustomCart;
    price_adjustment_applied?: CartAppliedPriceAdjustment[];
    /**
     * - If the customer provides a PAN
     * number, set it to true.
     */
    is_pan_received?: boolean;
    /**
     * - Custom cart meta of user cart added
     * via update cart meta API.
     */
    custom_cart_meta?: any;
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
    /**
     * - Unique identifier of the user cart.
     */
    cart_id?: number;
    /**
     * - Unique identifier of the user cart.
     */
    uid?: string;
    /**
     * - Coupon text of coupon applied on cart.
     */
    coupon_text?: string;
    /**
     * - Unique identifier of the user cart.
     */
    id?: string;
    /**
     * - Pan card config states at what condition
     * user should enter the pan card.
     */
    pan_config?: any;
    delivery_promise?: ShipmentPromise;
    /**
     * - Comment message to be added in user cart.
     */
    comment?: string;
    /**
     * - Items data list in user cart that
     * includes item id, item size, store id, available sizes and rest of the item
     * related data.
     */
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    /**
     * - Delivery charge information
     * message of the shipment.
     */
    delivery_charge_info?: string;
    common_config?: CartCommonConfig;
    coupon?: CartDetailCoupon;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process.
     */
    restrict_checkout?: boolean;
    /**
     * - Message of the get cart detail API response.
     */
    message?: string;
    /**
     * - Notification object which denotes
     * notification data for user cart.
     */
    notification?: any;
    /**
     * - Staff employee user id if cart is
     * created by staff employee for the customer.
     */
    staff_user_id?: string;
    /**
     * - Success flag of get cart detail API response.
     */
    success?: boolean;
    breakup_values?: CartBreakup;
    /**
     * - Cart validity flag determines the if the
     * response is valid or not.
     */
    is_valid?: boolean;
    currency?: CartCurrency;
    /**
     * - Checkout mode of user cart.
     */
    checkout_mode?: string;
    /**
     * - Last modified timestamp of cart.
     */
    last_modified?: string;
    price_adjustment_applied?: CartAppliedPriceAdjustment[];
    /**
     * - Buy now flag for the cart which denotes user
     * is doing fast checkout for the cart using buy now.
     */
    buy_now?: boolean;
    /**
     * - GSTIN added in user cart.
     */
    gstin?: string;
    /**
     * - List of applied
     * promotions data to cart which includes promotion id, promotion name, offer
     * text, description, buy rules, discount rules and promotion type.
     */
    applied_promo_details?: AppliedPromotion[];
    /**
     * - Permanent Account Number of the user.
     */
    pan_no?: string;
    /**
     * - If the customer provides a PAN
     * number, set it to true.
     */
    is_pan_received?: boolean;
    custom_cart?: CustomCart;
    /**
     * - Custom meta details added cart
     * checkout API payload .
     */
    custom_cart_meta?: any;
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
    item_index: number;
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
    result?: any;
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
    /**
     * - Unique identifier of the user cart.
     */
    cart_id?: number;
    /**
     * - Unique identifier of the user cart.
     */
    uid?: string;
    /**
     * - Coupon text of the applied coupon on user cart.
     */
    coupon_text?: string;
    /**
     * - Unique identifier of the user cart.
     */
    id?: string;
    /**
     * - Pan card config states at what condition
     * user should enter the pan card.
     */
    pan_config?: any;
    delivery_promise?: ShipmentPromise;
    /**
     * - Comment message added in user cart.
     */
    comment?: string;
    /**
     * - Items data list in user cart that
     * includes item id, item size, store id, available sizes and rest of the item
     * related data.
     */
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    /**
     * - Delivery charge info message of
     * the user cart.
     */
    delivery_charge_info?: string;
    common_config?: CartCommonConfig;
    coupon?: CartDetailCoupon;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process.
     */
    restrict_checkout?: boolean;
    /**
     * - Message of the get shared cart API response.
     */
    message?: string;
    /**
     * - Notification object which denotes
     * notification data for user cart.
     */
    notification?: any;
    /**
     * - Staff employee user id if cart is
     * created by staff employee for the customer.
     */
    staff_user_id?: string;
    /**
     * - Success flag of get cart detail API response.
     */
    success?: boolean;
    breakup_values?: CartBreakup;
    /**
     * - Cart validity flag determines the if the
     * response is valid or not.
     */
    is_valid?: boolean;
    currency?: CartCurrency;
    /**
     * - Checkout mode of address on which
     * address to be used for which checkout mode of cart.
     */
    checkout_mode?: string;
    /**
     * - Last modified timestamp of user cart.
     */
    last_modified?: string;
    /**
     * - Buy now flag for the cart which denotes user
     * is doing fast checkout for the cart using buy now.
     */
    buy_now?: boolean;
    /**
     * - GSTIN added in user cart.
     */
    gstin?: string;
    /**
     * - List of applied
     * promotions data to cart which includes promotion id, promotion name, offer
     * text, description, buy rules, discount rules and promotion type.
     */
    applied_promo_details?: AppliedPromotion[];
    /**
     * - Permanent Account Number of the user.
     */
    pan_no?: string;
    custom_cart?: CustomCart;
    price_adjustment_applied?: CartAppliedPriceAdjustment[];
    shared_cart_details?: SharedCartDetails;
    /**
     * - If the customer provides a PAN
     * number, set it to true.
     */
    is_pan_received?: boolean;
    /**
     * - Custom cart meta of user cart added
     * via update cart meta API.
     */
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
    /**
     * - If the customer provides a PAN
     * number, set it to true.
     */
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
/** @returns {ValidationConfig} */
declare function ValidationConfig(): ValidationConfig;
type ValidationConfig = {
    /**
     * - The maximum number of addresses a user can have.
     */
    address_max_limit: number;
    /**
     * - The total number of addresses saved by a user.
     */
    user_address_count: number;
};
/** @returns {PlatformGetAddressesResponse} */
declare function PlatformGetAddressesResponse(): PlatformGetAddressesResponse;
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
    pii_masking?: boolean;
    validation_config?: ValidationConfig;
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
/** @returns {ShipmentError} */
declare function ShipmentError(): ShipmentError;
type ShipmentError = {
    type?: string;
    value?: string[];
    message?: string;
};
/** @returns {PlatformShipmentResponse} */
declare function PlatformShipmentResponse(): PlatformShipmentResponse;
type PlatformShipmentResponse = {
    /**
     * - Count of shipments that will be shipped.
     */
    shipments?: number;
    /**
     * - Fulfilment id of the shipment.
     */
    fulfillment_id?: number;
    /**
     * - Item details in the shipment.
     */
    items?: CartProductInfo[];
    /**
     * - Delivery partner options that are available
     * to deliver the shipment.
     */
    dp_options?: any;
    /**
     * - Shipment type of the shipment returned
     * in get shipments API like single_shipment or multiple shipment. Single
     * Shipment means 1 item in 1 shipment and vice versa in the other one.
     */
    shipment_type?: string;
    /**
     * - Order type of the shipment like pickAtStore
     * or HomeDelivery.
     */
    order_type?: string;
    /**
     * - Box type of the shipment in which the
     * shipment will be delivered.
     */
    box_type?: string;
    promise?: ShipmentPromise;
    /**
     * - Delivery partner id of the shipment.
     */
    dp_id?: string;
    /**
     * - Fulfilment type of shipment.
     */
    fulfillment_type?: string;
    articles?: ShipmentArticle[];
    meta?: ShipmentMeta;
    logistics_meta?: ShipmentLogisticsMeta;
    error?: ShipmentError;
};
/** @returns {ShipmentMeta} */
declare function ShipmentMeta(): ShipmentMeta;
type ShipmentMeta = {
    packaging_name?: string;
    dimension?: ShipmentMetaDimension;
    assign_dp_from_sb?: string;
    dp_sort_key?: string;
    shipment_weight?: number;
    shipment_volumetric_weight?: number;
    shipment_chargeable_weight?: number;
    shipping_zone?: string;
};
/** @returns {ShipmentMetaDimension} */
declare function ShipmentMetaDimension(): ShipmentMetaDimension;
type ShipmentMetaDimension = {
    /**
     * - The height of the product
     */
    height?: number;
    /**
     * - The length of the product
     */
    length?: number;
    /**
     * - The width of the product
     */
    width?: number;
};
/** @returns {ShipmentLogisticsMeta} */
declare function ShipmentLogisticsMeta(): ShipmentLogisticsMeta;
type ShipmentLogisticsMeta = {
    account_options?: ShipmentLogisticsMetaAccount[];
    account_info?: any;
    dp_sort_key?: string;
    assign_dp_from_sb?: string;
};
/** @returns {ShipmentLogisticsMetaAccount} */
declare function ShipmentLogisticsMetaAccount(): ShipmentLogisticsMetaAccount;
type ShipmentLogisticsMetaAccount = {
    name?: string;
    display_name?: string;
    fm_priority?: number;
    lm_priority?: number;
    rvp_priority?: number;
    type?: string;
    sub_type?: string;
    parent_id?: string;
    is_active?: boolean;
    payment_mode?: string;
    assign_dp_from_sb?: string;
    internal_account_id?: string;
    external_account_id?: string;
    f_priority?: number;
    r_priority?: number;
    dp_shipping_charges?: number;
    qc_enabled?: boolean;
    area_code?: ShipmentLogisticsMetaAccountAreaCode;
    operations?: string[];
    dp_tat?: ShipmentLogisticsMetaAccountDpTat;
};
/** @returns {ShipmentLogisticsMetaAccountAreaCode} */
declare function ShipmentLogisticsMetaAccountAreaCode(): ShipmentLogisticsMetaAccountAreaCode;
type ShipmentLogisticsMetaAccountAreaCode = {
    from_pincode?: string;
    to_pincode?: string;
    source?: string;
    destination?: string;
};
/** @returns {ShipmentLogisticsMetaAccountDpTat} */
declare function ShipmentLogisticsMetaAccountDpTat(): ShipmentLogisticsMetaAccountDpTat;
type ShipmentLogisticsMetaAccountDpTat = {
    min?: number;
    max?: number;
};
/** @returns {PlatformCartShipmentsResponse} */
declare function PlatformCartShipmentsResponse(): PlatformCartShipmentsResponse;
type PlatformCartShipmentsResponse = {
    /**
     * - Unique identifier of the user cart.
     */
    cart_id?: number;
    /**
     * - Unique identifier of the user cart.
     */
    uid?: string;
    /**
     * - Coupon text of coupon applied on cart.
     */
    coupon_text?: string;
    /**
     * - Unique identifier of the user cart.
     */
    id?: string;
    pan_config?: any;
    delivery_promise?: ShipmentPromise;
    /**
     * - Comment message to be added in user cart.
     */
    comment?: string;
    /**
     * - Items data list in user cart that
     * includes item id, item size, store id, available sizes and rest of the item
     * related data.
     */
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    /**
     * - Delivery charge information
     * message of the shipment.
     */
    delivery_charge_info?: string;
    common_config?: CartCommonConfig;
    coupon?: CartDetailCoupon;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process.
     */
    restrict_checkout?: boolean;
    /**
     * - Message of the get cart detail API response.
     */
    message?: string;
    /**
     * - Notification object which denotes
     * notification data for user cart.
     */
    notification?: any;
    /**
     * - Staff employee user id if cart is
     * created by staff employee for the customer.
     */
    staff_user_id?: string;
    /**
     * - Success flag of get cart detail API response.
     */
    success?: boolean;
    breakup_values?: CartBreakup;
    /**
     * - Cart validity flag determines the if the
     * response is valid or not.
     */
    is_valid?: boolean;
    currency?: CartCurrency;
    /**
     * - Checkout mode of user cart.
     */
    checkout_mode?: string;
    /**
     * - Last modified timestamp of cart.
     */
    last_modified?: string;
    /**
     * - Buy now flag for the cart which denotes user
     * is doing fast checkout for the cart using buy now.
     */
    buy_now?: boolean;
    /**
     * - GSTIN added in user cart.
     */
    gstin?: string;
    /**
     * - List of applied
     * promotions data to cart which includes promotion id, promotion name, offer
     * text, description, buy rules, discount rules and promotion type.
     */
    applied_promo_details?: AppliedPromotion[];
    /**
     * - Permanent Account Number of the user.
     */
    pan_no?: string;
    custom_cart?: CustomCart;
    price_adjustment_applied?: CartAppliedPriceAdjustment[];
    shipments?: PlatformShipmentResponse[];
    error?: boolean;
    /**
     * - If the customer provides a PAN
     * number, set it to true.
     */
    is_pan_received?: boolean;
    /**
     * - Custom meta details added cart
     * checkout API payload.
     */
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
    /**
     * - If the customer provides a PAN
     * number, set it to true.
     */
    is_pan_received?: boolean;
    comment?: string;
    /**
     * - Staff user id
     */
    staff_user_id?: string;
    delivery_slots?: any;
    custom_cart_meta?: any;
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
    /**
     * - Cart id of the user cart for which the order placed.
     */
    cart_id?: number;
    /**
     * - Cart id of user cart.
     */
    uid?: string;
    /**
     * - Coupon text of the applied coupon on order placed.
     */
    coupon_text?: string;
    /**
     * - Cart id of the user cart.
     */
    id?: string;
    delivery_promise?: ShipmentPromise;
    /**
     * - Comment message added in cart after order placed.
     */
    comment?: string;
    /**
     * - Items details in cart after order placed.
     */
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    /**
     * - Delivery charge information
     * message of the shipment.
     */
    delivery_charge_info?: string;
    common_config?: CartCommonConfig;
    coupon?: CartDetailCoupon;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process.
     */
    restrict_checkout?: boolean;
    /**
     * - Message of the cart checkout API response.
     */
    message?: string;
    /**
     * - Notification object which denotes
     * notification data for user cart.
     */
    notification?: any;
    /**
     * - Staff employee user id if cart is
     * created by staff employee for the customer.
     */
    staff_user_id?: string;
    /**
     * - Success flag of checkout cart API response.
     */
    success?: boolean;
    breakup_values?: CartBreakup;
    /**
     * - Valid flag fotr the checkout response if
     * order placed was valid.
     */
    is_valid?: boolean;
    currency?: CartCurrency;
    /**
     * - Checkout mode of user cart.
     */
    checkout_mode?: string;
    /**
     * - Last modified timestamp of cart.
     */
    last_modified?: string;
    /**
     * - Buy now flag of user cart.
     */
    buy_now?: boolean;
    /**
     * - GSTIN number added in cart.
     */
    gstin?: string;
    applied_promo_details?: AppliedPromotion[];
    /**
     * - Permanent Account Number of the user.
     */
    pan_no?: string;
    custom_cart?: CustomCart;
    price_adjustment_applied?: PriceAdjustmentApplied[];
    /**
     * - If the customer provides a PAN
     * number, set it to true.
     */
    is_pan_received?: boolean;
    /**
     * - Pan card config states at what condition
     * user should enter the pan card.
     */
    pan_config?: any;
    /**
     * - Order id generated after placing order.
     */
    order_id?: string;
    /**
     * - Custom cart meta details added in cart.
     */
    custom_cart_meta?: any;
    /**
     * - Whether Cash On Delivery available it true.
     */
    cod_available?: boolean;
    /**
     * - Delivery charges of the order placed
     * via checkout API.
     */
    delivery_charges?: number;
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
    /**
     * - Tags for promotion
     */
    tags?: string[];
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
    validation_config?: ValidationConfig;
};
/** @returns {ValidationError} */
declare function ValidationError(): ValidationError;
type ValidationError = {
    /**
     * - A brief description of the error encountered.
     */
    message: string;
    /**
     * - The field in the request that caused the error.
     */
    field: string;
};
