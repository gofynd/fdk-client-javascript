export = CartPlatformModel;
/**
 * @typedef CouponDateMeta
 * @property {string} [modified_on] - Date time format when the coupon last modified
 * @property {string} [created_on] - Date time format when the coupon created
 * @property {string} [approved_on] - Date time format when the coupon approved
 * @property {string} [rejected_on] - Date time format when the coupon rejected
 * @property {string} [reviewed_on] - Date time format when the coupon reviewed
 */
/**
 * @typedef Ownership
 * @property {string} payable_category - Promotion amount payable category.
 * @property {string} [payable_by] - Coupon amount bearable party
 */
/**
 * @typedef CouponAuthor
 * @property {string} [created_by] - The user id of user, who has created the coupon
 * @property {string} [modified_by] - The user id of user, who has modified the coupon
 * @property {string} [approved_by] - The user id of user, who has approved the coupon
 * @property {string} [rejected_by] - The user id of user, who has rejected the coupon
 * @property {string} [reviewed_by] - The user id of user, who has reviewed the coupon
 */
/**
 * @typedef State
 * @property {boolean} [is_archived] - Publish or unpublish the coupon
 * @property {boolean} [is_display] - Coupon needs to display or not
 * @property {boolean} [is_public]
 * @property {boolean} [is_active]
 */
/**
 * @typedef PaymentAllowValue
 * @property {number} [max] - Maximum value need to allow for payment
 */
/**
 * @typedef PaymentModes
 * @property {string[]} [codes] - Identifier used by payment gateway for a given
 *   payment mode, e.g. NB_ICIC, PAYTM
 * @property {string[]} [iins] - Debit/Credit card prefix (first 6 digit)
 * @property {string[]} [types] - Card type, e.g. Credit, Debit
 * @property {string[]} [networks] - Credit/Debit card issuer, e.g. VISA,
 *   MASTERCARD, RUPAY
 * @property {PaymentAllowValue} [uses]
 */
/**
 * @typedef PriceRange
 * @property {number} [max] - Max price valid for article in coupon
 * @property {number} [min] - Min price valid for article in coupon
 */
/**
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed] - Cancellation allowed in coupon
 * @property {boolean} [return_allowed] - Return allowed in coupon
 */
/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed - Multi store allowed in bulk bundle
 *   coupon or not
 */
/**
 * @typedef UsesRemaining
 * @property {number} [user] - Define total coupon count per user
 * @property {number} [total] - Define total coupon counts
 * @property {number} [app] - Define coupon counts associated with application id
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
 * @property {string[]} [platforms] - List of platform on which coupon allowed
 *   like web, android
 * @property {PostOrder} [post_order]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {number[]} [user_groups] - List of user group on which coupon allowed
 * @property {boolean} [coupon_allowed] - Allow applying normal coupon if bulk
 *   coupon is applied
 * @property {UsesRestriction} [uses]
 * @property {number[]} [ordering_stores] - List of store id on which coupon allowed
 */
/**
 * @typedef Validation
 * @property {string[]} [app_id] - List of sales channel's application id
 * @property {boolean} [anonymous] - Coupon applicable for guest user or not
 * @property {string} [user_registered_after] - Coupon applicable for user which
 *   is registered after Date Format
 */
/**
 * @typedef CouponAction
 * @property {string} [action_date] - Coupon transaction mode's date time format
 * @property {string} [txn_mode] - Coupon transaction mode like cash, coupon etc
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
 * @property {NextSchedule[]} [next_schedule] - List of date time, which we will
 *   schedule the promotion
 * @property {string} [cron] - Schedule the cron to run your job periodically
 * @property {string} [status] - Coupon status like draft, review
 * @property {number} [duration] - Time in minutes for execution
 */
/**
 * @typedef Rule
 * @property {number} [key] - Key defines the number of product should be buy
 *   for applicability of cart
 * @property {number} [value] - Value defines discount percentage in coupon
 * @property {number} [max] - Max defines maximum number of discount amount in coupon
 * @property {number} [discount_qty] - Discount_qty defines free quantity as
 *   discount in coupon
 * @property {number} [min] - Min defines minimum number of discount amount in coupon
 */
/**
 * @typedef DisplayMetaDict
 * @property {string} [title] - Coupon title which is used to display
 * @property {string} [subtitle] - Coupon sub title which is used to display
 */
/**
 * @typedef DisplayMeta
 * @property {string} [title] - Coupon title which is used to display
 * @property {DisplayMetaDict} [auto]
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [remove]
 * @property {string} [subtitle] - Coupon sub title which is used to display
 * @property {string} [description] - Detail about the offers in coupon
 */
/**
 * @typedef Identifier
 * @property {number[]} [brand_id] - List of brand id available for coupon
 * @property {string[]} [email_domain] - List of email domain available for coupon
 * @property {number[]} [company_id] - List of company id available for coupon
 * @property {number[]} [store_id] - List of store id available for coupon
 * @property {string[]} [collection_id] - List of collection id available for coupon
 * @property {number[]} [item_id] - List of item id available for coupon
 * @property {string[]} [user_id] - List of user id available for coupon
 * @property {number[]} [category_id] - List of category id available for coupon
 * @property {string[]} [article_id] - List of article id available for coupon
 * @property {number[]} [exclude_brand_id] - List of brand id should not be
 *   available for coupon
 */
/**
 * @typedef Validity
 * @property {number} [priority] - Priority of coupon to show in list
 */
/**
 * @typedef RuleDefinition
 * @property {string} [currency_code] - Currency code like INR
 * @property {boolean} [auto_apply] - Coupon should be auto apply or not
 * @property {string} type - Type of coupon like absolute, percentage etc.
 * @property {boolean} [is_exact] - Flag is true then use coupon applicable
 *   articles for calculation
 * @property {string} applicable_on - Coupon will be applicable on either amount
 *   or quantity
 * @property {string} [calculate_on] - Article Price on which coupon calculated
 *   like effective price or marked price
 * @property {string} [value_type] - Define the type of coupon value
 * @property {string[]} [scope] - List of item level rule applicable for coupon
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
 * @property {string} [coupon_type] - The type of coupon like bulk or single
 * @property {string} [coupon_prefix] - Bulk coupon code prefix string
 * @property {number} [coupon_counts] - Counts of bulk coupon
 * @property {string[]} [tags] - List of tags specify to platform
 * @property {CouponSchedule} [_schedule]
 * @property {Rule[]} rule
 * @property {DisplayMeta} display_meta
 * @property {string} code - Unique code of coupon
 * @property {string} type_slug - The type slug of coupon discount
 * @property {Identifier} identifiers
 * @property {Validity} validity
 * @property {RuleDefinition} rule_definition
 * @property {string} [_id] - Unique identifier of coupon
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
 * @typedef CouponsResult
 * @property {CouponObj[]} [items] - Coupons list for sales channel
 * @property {Page} [page]
 * @property {boolean} [success]
 * @property {number} [draft]
 * @property {number} [review]
 * @property {number} [rejected]
 * @property {number} [approved]
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
 * @property {string} [coupon_type]
 * @property {string} [coupon_prefix]
 * @property {number} [coupon_counts]
 */
/**
 * @typedef CouponDetailResult
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CouponDetailObj} [data]
 */
/**
 * @typedef TagsViewResult
 * @property {boolean} [success]
 * @property {string[]} [items]
 */
/**
 * @typedef SuccessMessage
 * @property {boolean} [success] - Whether the request was successful (true/false).
 * @property {string} [message]
 */
/**
 * @typedef CartMetaConfigOperationErrorResult
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
 * @property {string[]} [tags] - List of tags specify to platform
 * @property {CouponSchedule} [_schedule]
 * @property {Rule[]} rule
 * @property {DisplayMeta} display_meta
 * @property {string} code - Unique code that is used to apply coupon
 * @property {string} [coupon_type] - The type of coupon like bulk or single
 * @property {string} [coupon_prefix] - Bulk coupon code prefix string
 * @property {number} [coupon_counts] - Counts of culk coupon
 * @property {string} [reason] - Coupon rejection reason added by reviewer
 * @property {string} type_slug - The type slug of coupon discount
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
 * @property {string} [description] - Define details about the offer in promotion
 * @property {string} [offer_label] - Offer label of promotion that needs to display
 * @property {string} [name] - Name of promotion that needs to display
 * @property {string} [offer_text]
 */
/**
 * @typedef CompareObject
 * @property {number} [equals] - Nummeric value must be equal to cart level rules
 * @property {number} [greater_than] - Nummeric value must be greater than cart
 *   level rules
 * @property {number} [less_than_equals] - Nummeric value must be less than or
 *   equal to cart level rules
 * @property {number} [less_than] - Nummeric value must be less than cart level rules
 * @property {number} [greater_than_equals] - Nummeric value must be greater
 *   than or equal to cart level rules
 */
/**
 * @typedef ItemSizeMapping
 * @property {Object} [item_size_mapping] - Item size mapping in promotion
 */
/**
 * @typedef ItemCriteria
 * @property {CompareObject} [cart_quantity]
 * @property {string[]} [available_zones] - List of all zones on which promotion
 *   is applicable
 * @property {number[]} [item_exclude_company] - List of all company id on which
 *   promotion is not applicable
 * @property {number[]} [item_id] - List of all item ids on which promotion is applicable
 * @property {number[]} [item_l1_category] - List of all L1 category on which
 *   promotion is applicable
 * @property {CompareObject} [cart_total]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_id] - List of all item ids on which
 *   promotion is not applicable
 * @property {boolean} [all_items] - Boolean flag set true to applicable the
 *   promotion for all products
 * @property {number[]} [item_exclude_l1_category] - List of all item ids on
 *   which promotion is not applicable
 * @property {string[]} [item_size] - List of all item sizes on which promotion
 *   is applicable
 * @property {number[]} [item_store] - List of all item store ids on which
 *   promotion is applicable
 * @property {string[]} [item_exclude_sku] - List of all item sku on which
 *   promotion is not applicable
 * @property {number[]} [item_department] - List of all departments ids on which
 *   promotion is applicable
 * @property {number[]} [item_exclude_store] - List of all item store ids on
 *   which promotion is not applicable
 * @property {number[]} [item_brand] - List of all brand ids on which promotion
 *   is applicable
 * @property {number[]} [item_exclude_department] - List of all department ids
 *   on which promotion is not applicable
 * @property {number[]} [item_exclude_category] - List of all L3 category on
 *   which promotion is not applicable
 * @property {number[]} [item_category] - List of all L3 category on which
 *   promotion is applicable
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_exclude_brand] - List of all brand ids on which
 *   promotion is not applicable
 * @property {number[]} [item_l2_category] - List of all L2 category on which
 *   promotion is applicable
 * @property {number[]} [item_company] - List of all company ids on which
 *   promotion is applicable
 * @property {string[]} [item_tags] - List of all product tags on which
 *   promotion is applicable
 * @property {number[]} [item_exclude_l2_category] - List of all L2 category on
 *   which promotion is not applicable
 * @property {string[]} [item_sku] - List of all item sku on which promotion is applicable
 */
/**
 * @typedef DiscountOffer
 * @property {number} [max_discount_amount] - Maximum discount amount in promotion
 * @property {number} [discount_price] - Discount price in promotion
 * @property {boolean} [apportion_discount] - Flag to distribute discount for each article
 * @property {boolean} [partial_can_ret] - Flag indicated return the product partially
 * @property {number} [max_usage_per_transaction] - Maximum usage per
 *   transaction in promotion
 * @property {number} [min_offer_quantity] - Minimum quantity of offer in promotion
 * @property {string} [code] - Unique code of promotion
 * @property {number} [discount_amount] - Discount amount in promotion
 * @property {number} [discount_percentage] - Discount percentage in promotion
 * @property {number} [max_offer_quantity] - Maximum quantity of product in promotion
 */
/**
 * @typedef DiscountRule
 * @property {string} discount_type - The type of discount in promotion
 * @property {string} buy_condition - Promotion buy rules in offer level
 * @property {ItemCriteria} item_criteria
 * @property {ItemSizeMapping} [meta]
 * @property {DiscountOffer} offer
 */
/**
 * @typedef PaymentAllowValue1
 * @property {number} [max] - Maximum value need to allow for payment in promotion
 */
/**
 * @typedef PromotionPaymentModes
 * @property {string} [type] - Define the type of payment
 * @property {PaymentAllowValue1} [uses]
 * @property {string[]} [codes] - List of codes associated with payment options
 */
/**
 * @typedef UserRegistered
 * @property {string} [end] - End date time format till the user is registerd
 * @property {string} [start] - Start date time format when user is registerd
 */
/**
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed] - Cancellation allowed in
 *   promotion after order
 * @property {boolean} [return_allowed] - Return allowed in promotion after order
 */
/**
 * @typedef UsesRemaining1
 * @property {number} [user] - Define total promotion count per user
 * @property {number} [total] - Define total promotions count
 */
/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [maximum]
 * @property {UsesRemaining1} [remaining]
 */
/**
 * @typedef Restrictions1
 * @property {PaymentModes} [payments]
 * @property {UserRegistered} [user_registered]
 * @property {string[]} [platforms] - List of platform on which promotion is
 *   applicable like android, ios
 * @property {PostOrder1} [post_order]
 * @property {number[]} [user_groups] - List of user groups on which promotion
 *   is applicable
 * @property {number} [order_quantity] - Prmomotion max order count
 * @property {boolean} [anonymous_users] - Set true, if promotion is applicable
 *   for guest user
 * @property {string[]} [user_id] - List of user id on which promotion is applicable
 * @property {UsesRestriction1} uses
 * @property {number[]} [ordering_stores] - List of store id on which promotion
 *   is applicable
 * @property {string} [user_type] - User type for which promotion is applicable
 */
/**
 * @typedef PromotionSchedule
 * @property {string} end - Then end date of promotion till valid
 * @property {string} start - Then start date of promotion is valid
 * @property {string} [status] - Promotion status like draft, review
 * @property {boolean} published - The status of promotion is published or not
 * @property {NextSchedule[]} [next_schedule] - List of date time, which we will
 *   schedule the promotion
 * @property {string} [cron] - Schedule the cron to run your job periodically
 * @property {number} [duration] - Time in minutes for execution
 */
/**
 * @typedef PromotionAction
 * @property {string} [action_date] - Date time format in promotion
 * @property {string} [action_type] - The action type of promotion
 */
/**
 * @typedef PromotionAuthor
 * @property {string} [created_by] - The user id of user, who has created the promotion
 * @property {string} [modified_by] - The user id of user, who has modified the promotion
 * @property {string} [approved_by] - The user id of user, who has approved the promotion
 * @property {string} [rejected_by] - The user id of user, who has rejected the promotion
 * @property {string} [reviewed_by] - The user id of user, who has reviewed the promotion
 */
/**
 * @typedef Visibility
 * @property {boolean} [coupon_list] - Flag to show promotion on Coupon list
 * @property {boolean} [pdp] - Flag to show promotion on PDP page
 */
/**
 * @typedef PromotionDateMeta
 * @property {string} [modified_on] - Date time format when the promotion last modified
 * @property {string} [created_on] - Date time format when the promotion created
 * @property {string} [approved_on] - Date time format when the promotion approved
 * @property {string} [rejected_on] - Date time format when the promotion rejected
 * @property {string} [reviewed_on] - Date time format when the promotion reviewed
 */
/**
 * @typedef PromotionListItem
 * @property {boolean} [stackable] - Allows more than one promotion to get
 *   combined benefits
 * @property {string} [calculate_on] - Article Price on which promotion
 *   calculated like effective price or marked price. Only available for
 *   Contract pricing and Ladder pricing promotion type
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
 * @property {string} [code] - Unique code of promotion
 * @property {string[]} [tags] - List of tags on which promotion is applicable
 */
/**
 * @typedef PromotionsResult
 * @property {PromotionListItem[]} [items] - List of promotions
 * @property {Page} [page]
 * @property {number} [draft] - Number of promotion in draft.
 * @property {number} [review] - Number of promotion in review.
 * @property {number} [rejected] - Number of promotion in rejected.
 * @property {number} [approved] - Number of promotion in approved.
 */
/**
 * @typedef PromotionAdd
 * @property {boolean} [stackable] - Boolean value set true to apply other promotions also
 * @property {string} [calculate_on] - Only available for Contract pricing and
 *   Ladder pricing promotion type
 * @property {string} [apply_exclusive] - Promotion should apply on either
 *   article or cart.
 * @property {string} promo_group - The type of promotion group
 * @property {string} mode - Promotion mode, like coupon or promotion
 * @property {boolean} [apply_all_discount] - True means to apply all discount offers
 * @property {DisplayMeta1} display_meta
 * @property {Ownership} ownership
 * @property {string} promotion_type - Type of promotion
 * @property {DiscountRule[]} discount_rules - List of discount offers and their
 *   applicable conditions
 * @property {Restrictions1} [restrictions]
 * @property {string} [currency] - Currency used for promotion
 * @property {boolean} [is_processed] - Flag to verify if promotion is ready to
 *   be applied on cart and ready to update promotion
 * @property {string} [code] - Promotion unique code
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionAction} [post_order_action]
 * @property {number} [apply_priority] - Promotion applicable priority
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {string} application_id - Application id in which promotion will be used
 * @property {Object} buy_rules - Buy rule condition.
 * @property {Object} [_custom_json] - Custom data stored in promotion
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromoIndexedCriteria[]} [indexed_criteria] - Stores all rules data
 *   into one for queying purpose
 * @property {string[]} [tags] - List of tags on which promotion is applicable
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
 * @property {Object} [buy_rules] - Buy rule condition.
 * @property {Object} [_custom_json] - Set extra properties in promotion
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromoIndexedCriteria[]} [indexed_criteria] - Stores all rules data
 *   into one for queying purpose
 * @property {string[]} [tags] - List of tags applicable for promotion
 * @property {string} [_id] - Unique idenfier of promotion.
 * @property {boolean} [is_archived] - Flag to verify if promotion is archived or not.
 * @property {boolean} [is_bank_offer] - Flag to verify if promotion is bank offer or not.
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
 * @property {Object} [buy_rules] - Buy rule condition.
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
 * @property {Object} [buy_rules] - Buy rule condition.
 * @property {Object} [_custom_json] - Set extra properties in promotion
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromoIndexedCriteria[]} [indexed_criteria] - Stores all rules data
 *   into one for queying purpose
 * @property {string[]} [tags] - List of tags applicable for promotion
 * @property {string} [_id] - Auto generated id of specific promotion
 * @property {boolean} [is_archived] - Flag to verify if promotion is archived or not.
 * @property {boolean} [is_bank_offer] - Flag to verify if promotion is bank offer or not.
 */
/**
 * @typedef PromoIndexedCriteria
 * @property {string} [key] - Condition check for articled key for promotion.
 * @property {Object} [value] - Condition check for articled key for promotion.
 */
/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [publish] - Send true to publish promotion
 * @property {PromotionSchedule} [schedule]
 */
/**
 * @typedef ActivePromos
 * @property {string} [_id]
 * @property {string} [entity_slug] - A short, human-readable, URL-friendly
 *   identifier of Promotion or coupon
 * @property {string} [title] - Name of the promotion or coupon
 * @property {string} [modified_on] - Coupon or promotion modification date
 * @property {string} [example] - Discount offers examples
 * @property {string} [entity_type] - Type of entity to be selected from :
 *   ['coupon', 'promotion']
 * @property {string} [created_on] - Coupon or modification creation date
 * @property {boolean} [is_hidden] - If the promo is active or not
 * @property {string} [type] - Coupon or promotion type
 * @property {string} [subtitle] - Small description of the current offer
 * @property {string} [description] - The description of the offer in the form of an HTML
 */
/**
 * @typedef ActivePromosResult
 * @property {string} [status]
 * @property {ActivePromos[]} [items]
 */
/**
 * @typedef Charges
 * @property {number} [charges] - Delivery chanrges applied on the product of cart
 * @property {number} [threshold] - Threshold of cart value on which the charge
 *   should be applied
 */
/**
 * @typedef DeliveryCharges
 * @property {Charges[]} [charges] - List of delivery changes information of the cart
 * @property {boolean} [enabled] - Enable or disable delivery charge on cart
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
 * @property {number} [min_cart_value] - Minimum order value to checkout
 * @property {number} [max_cart_value] - Maximum order value to checkout
 * @property {boolean} [bulk_coupons] - Indicates bulk coupon applicable for cart
 * @property {number} [max_cart_items] - Maximum cart items to checkout
 * @property {string} [gift_display_text] - Free gift charges text to show
 * @property {DeliveryCharges} [delivery_charges]
 * @property {DeliveryCharges} [international_delivery_charges]
 * @property {boolean} [revenue_engine_coupon] - It define credit coupon
 *   applicable for cart
 * @property {number} [gift_pricing] - Free gift charges per product
 * @property {boolean} [enabled]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {string} [slug]
 * @property {boolean} [is_universal]
 * @property {number} [company_id]
 * @property {string} [updated_on]
 * @property {string} [created_on]
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
 * @typedef TimeStampIDResult
 * @property {string} [id]
 * @property {string} [app_id]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {string} [last_modified_by]
 */
/**
 * @typedef CartMetaConfigDetailResult
 * @property {boolean} [success]
 * @property {CartMetaConfigUpdate} [data]
 */
/**
 * @typedef CartMetaConfigListResult
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
 * @typedef CartMetaConfigAddResult
 * @property {boolean} [success]
 * @property {CartMetaConfigAdd} [data]
 */
/**
 * @typedef CartMetaConfigAdd
 * @property {number} [min_cart_value] - Minimum order value to checkout
 * @property {number} [max_cart_value] - Maximum order value to checkout
 * @property {boolean} [bulk_coupons] - Indicates bulk coupon applicable for cart
 * @property {number} [max_cart_items] - Maximum cart items to checkout
 * @property {string} [gift_display_text] - Free gift charges text to show
 * @property {DeliveryCharges} [delivery_charges]
 * @property {DeliveryCharges} [international_delivery_charges]
 * @property {boolean} [revenue_engine_coupon] - It define credit coupon
 *   applicable for cart
 * @property {number} [gift_pricing] - Free gift charges per product
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
 * @property {string} article_id - Unique identifier of article
 * @property {number} [quantity] - Total quantity of the article to be
 *   considered (currently used only in discount type)
 * @property {Object} [meta] - Meta data related to article
 */
/**
 * @typedef PriceAdjustmentRestrictions
 * @property {PostOrder1} [post_order]
 */
/**
 * @typedef Collection
 * @property {string} refund_by - Bearable party who is refunding the amount
 * @property {string} collected_by - The party who is collecting the amount
 */
/**
 * @typedef PriceAdjustmentUpdate
 * @property {string} [modified_by] - The entity that modified the field
 * @property {number} value - The amount applied on the cart
 * @property {string} message - The message associated with the price adjustment
 * @property {string} [apply_expiry] - The date and time when the expiry should be applied
 * @property {PriceAdjustmentRestrictions} [restrictions] - Restrictions applied
 *   to this particular item or product, including whether or not cancellation
 *   and return are allowed.
 * @property {boolean} article_level_distribution - Flag indicating whether the
 *   distribution should is done at the article level
 * @property {Collection} collection
 * @property {string} type - Type of price adjusment like charge, mop, discount etc.
 * @property {boolean} [allowed_refund] - Flag indicating whether refunds are
 *   allowed (default: False)
 * @property {boolean} is_authenticated - Flag indicating whether the user is
 *   authenticated
 * @property {Article[]} article_ids - The list of article object in the price adjustment
 * @property {boolean} [remove_articles] - This field if set true will remove
 *   all articles in price adjustment if article_ids are present
 * @property {boolean} [auto_remove] - This field if set true will remove mop
 *   type price adjustment.
 * @property {Object} [meta] - Additional information regarding price adjustment
 * @property {string} cart_id - The ID of the cart
 * @property {DistributionLogic} [distribution_logic]
 */
/**
 * @typedef PriceAdjustment
 * @property {number} value - The amount applied on the cart
 * @property {string} message - The message associated with the price adjustment
 * @property {string} [apply_expiry] - The date and time when the expiry should be applied
 * @property {PriceAdjustmentRestrictions} [restrictions] - This field specifies
 *   the restrictions for this item or service, such as whether cancellation and
 *   return are permitted, except for `charge` type.
 * @property {boolean} article_level_distribution - Flag indicating whether the
 *   distribution should is done at the article level
 * @property {string} [id] - Unique identifier of Price adjustment
 * @property {Collection} collection
 * @property {string} type - Type of price adjusment like charge, discount, mop etc.
 * @property {boolean} [allowed_refund] - Flag indicating whether refunds are
 *   allowed (default: False) expect for `charge` type
 * @property {boolean} is_authenticated - Flag indicating whether the user is
 *   authenticated
 * @property {Article[]} article_ids - The list of article object in the price adjustment
 * @property {Object} [meta] - Additional information regarding price adjustment
 * @property {string} cart_id - The ID of the cart
 * @property {boolean} [remove_articles] - This field if set true will remove
 *   all articles in price adjustment if article_ids are present
 * @property {boolean} [auto_remove] - This field if set true will remove mop
 *   type price adjustment.
 * @property {boolean} [is_active]
 * @property {string} [created_by]
 * @property {number} [cart_value]
 * @property {string} [modified_by]
 * @property {string} [expire_at]
 * @property {DistributionLogic} [distribution_logic]
 */
/**
 * @typedef AddPriceAdjustmentResult
 * @property {PriceAdjustment} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef UpdatePriceAdjustmentResult
 * @property {PriceAdjustment} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef PriceAdjustmentResult
 * @property {PriceAdjustment[]} [data]
 * @property {boolean} [success]
 * @property {PriceAdjustment[]} [price_adjustments]
 */
/**
 * @typedef GetPriceAdjustmentResult
 * @property {PriceAdjustment[]} [data]
 */
/**
 * @typedef PriceAdjustmentAdd
 * @property {number} value - The amount applied on the cart
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
 * @property {Object} [meta] - Additional information regarding price adjustment
 * @property {string} cart_id - The ID of the cart
 * @property {boolean} [remove_articles] - This field if set true will remove
 *   all articles in price adjustment if article_ids are present
 * @property {boolean} [auto_remove] - This field if set true will remove mop
 *   type price adjustment.
 * @property {DistributionLogic} [distribution_logic]
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
 * @property {DistributionRule} [rule]
 */
/**
 * @typedef DistributionLogic
 * @property {string} [distribution_level] - This field defines the distribution
 *   level, currently allowed distribution level is (shipment)
 * @property {Distribution} [distribution]
 */
/**
 * @typedef CartItem
 * @property {number} [quantity] - Quantity of product in cart
 * @property {string} product_id - Unique identifier of product in cart
 * @property {string} size - Size of product in cart
 */
/**
 * @typedef OpenapiCartDetailsPayload
 * @property {CartItem[]} cart_items - List of products in cart
 */
/**
 * @typedef CouponBreakup
 * @property {string} [title] - Coupon Title of the coupon applied denotes name
 *   of the coupon
 * @property {number} [max_discount_value] - Maximum discount value of the
 *   coupon applied to cart
 * @property {number} [value] - Coupon value of the coupon applied to cart
 * @property {boolean} [is_applied] - Applied flag which denotes if any coupon
 *   is applied to cart
 * @property {string} [uid] - Unique identifier of the coupon applied to cart
 * @property {string} [coupon_type] - Type of the coupon applied to cart
 * @property {string} [sub_title] - Coupon subtitle of the coupon applied to
 *   cart which is used to display
 * @property {number} [coupon_value] - Value of the coupon applied to cart
 * @property {string} [code] - Coupon code of the coupon applied
 * @property {string} [type] - Type of the coupon applied to cart
 * @property {number} [minimum_cart_value] - Minimum cart value of the coupon
 *   applied to cart
 * @property {string} [message] - Coupon message of the coupon applied to cart
 * @property {string} [description] - Coupon description of the coupon applied to cart.
 */
/**
 * @typedef DisplayBreakup
 * @property {string} [key] - Key of the price like total_mrp, total, subtotal etc
 * @property {number} [value] - Numeric value for the price
 * @property {string} [currency_code] - Currency code for the price
 * @property {string} [currency_symbol] - Currency symbol for the price
 * @property {string} [display] - Display key field that to be shown against the value
 * @property {string[]} [message] - List of message at price level to be displayed
 * @property {number} [original]
 * @property {string} [attr]
 * @property {Object} [meta]
 */
/**
 * @typedef LoyaltyPoints
 * @property {boolean} [is_applied] - Whether the loyalty points are applied on the cart
 * @property {number} [total] - Total loyalty points available with user
 * @property {number} [applicable] - Whether the loyalty points are applicable
 *   for the cart
 * @property {string} [description] - Description for loyalty points
 * @property {string} [message] - Description for loyalty points
 */
/**
 * @typedef RawBreakup
 * @property {number} [promotion] - Promotion amount applied to cart
 * @property {number} [coupon] - Coupon amount applied to cart
 * @property {number} [gst_charges] - GST charges applied on cart
 * @property {number} [mrp_total] - Maximum price total amount of all products in cart
 * @property {number} [fynd_cash] - Loyalty points applied on cart
 * @property {number} [vog] - Total value of goods after all discount, coupons
 *   and promotion applied of all products in cart
 * @property {number} [gift_card] - Gift cart amount applied on cart
 * @property {number} [cod_charge] - Cod charge value applied to cart. This is
 *   applied when user select payment mode as COD
 * @property {number} [total] - Total payable amount by the customer
 * @property {number} [discount] - Discount amount recieved on cart
 * @property {number} [delivery_charge] - Delivery charge applied to cart
 * @property {number} [you_saved] - Total amount will be saved if customer
 *   places the order
 * @property {number} [subtotal] - Coupon amount applied to cart
 * @property {number} [sub_total] - Selling price amount of all products in cart
 * @property {number} [convenience_fee]
 * @property {number} [total_charge]
 * @property {number} [mop_total]
 */
/**
 * @typedef CartBreakup
 * @property {CouponBreakup} [coupon]
 * @property {DisplayBreakup[]} [display] - List of breakup data which is used
 *   to display the breakup to the customer like MRP total, Discount, Sub total,
 *   coupon value, promotion value and final total
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {RawBreakup} [raw]
 */
/**
 * @typedef ProductImage
 * @property {string} [secure_url] - Secured url of the product image
 * @property {string} [url] - Bucket link url for product image
 * @property {string} [aspect_ratio] - Aspect ratio of the product image
 */
/**
 * @typedef Tags
 * @property {Object} [tags] - Tags is a lable or batch that is attached to a
 *   product in cart
 */
/**
 * @typedef BaseInfo
 * @property {number} [uid] - Unique identifier of entities like brand or seller.
 * @property {string} [name] - Name of entities like brand or seller
 */
/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug] - Contains list of product slug
 */
/**
 * @typedef ProductActionParams
 * @property {string[]} [slug] - Unique product url name generated via product
 *   name and other meta data.
 */
/**
 * @typedef ProductActionPage
 * @property {string} [type] - Entity of page to be redirected on click
 * @property {ProductActionParams} [params]
 */
/**
 * @typedef ProductAction
 * @property {string} [type] - Type of action.
 * @property {string} [url] - Url of the product to render the product.
 * @property {ActionQuery} [query]
 * @property {ProductActionPage} [page]
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
 * @property {ProductImage[]} [images] - Product Images urls of different types
 *   like secure url, aspect ration url and url
 * @property {Object} [teaser_tag] - Teaser tag or short promotional phrase for
 *   the product.
 * @property {BaseInfo} [brand]
 * @property {ProductAction} [action]
 * @property {number} [uid] - Unique identifier of the product in cart.
 * @property {string[]} [tags] - Products tags that are added to each product to
 *   identify the set of products.
 * @property {Object} [_custom_json] - Field to add custom json of the product in cart
 * @property {string} [type] - Type of product in cart.
 * @property {string} [name] - Product name of the product in cart which is
 *   defined on platform.
 * @property {string} [item_code] - Product code of the product while defining
 *   product on platform.
 * @property {CategoryInfo[]} [categories] - Product category information which
 *   incldes category name and category id.
 * @property {Object} [attributes] - Product attributes defined on platform.
 */
/**
 * @typedef BasePrice
 * @property {number} [effective] - Current per unit price of product after
 *   existing deductions
 * @property {string} [currency_code] - Currency code for all amounts
 * @property {string} [currency_symbol] - Currency symbol of the currncy used for price
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
 *   is fulfileld
 * @property {string} [name] - Store name of the store from where the product is fulfiled
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
 * @property {number} [quantity] - Quantity of the article added in cart
 * @property {BaseInfo} [seller]
 * @property {Object} [cart_item_meta] - Meta details of the article added from cart
 * @property {Object} [parent_item_identifiers] - Fields to determine parent
 *   product of the product
 * @property {boolean} [is_gift_visible] - Whether the product can be purchased
 *   as a gift. It is true if the product is available for gifting and false otherwise.
 * @property {string} [uid] - This unique identifier is assigned to the specific
 *   article. This represents item x size x location.
 * @property {ArticleGiftCard} [gift_card]
 * @property {string[]} [product_group_tags] - List fot the unique identifier
 *   for the product grouping.
 * @property {Object} [identifier] - Unique identifier of the article
 * @property {number} [mto_quantity] - Quantity of the product which will
 *   specially manufactured as not available in stock.
 * @property {Object} [extra_meta] - Field to update extra meta of the article in cart
 * @property {string} [type] - Type of the data sent in response. Possible value
 *   is article.
 * @property {Object} [_custom_json] - Field to update custom json of the article in cart
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [meta] - Meta data of article in cart
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
 * @property {number} [quantity] - Free article quantity in promotion
 * @property {string} [article_id] - Unique identifier of free article
 * @property {FreeGiftItems} [free_gift_item_details] - Free gift items details
 *   in promotion
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
 * @property {string} [float_amount] - Per unit discount amount with decimal
 *   values applied with current promotion.
 * @property {string} [promotion_type] - Promotion type of current promotion
 * @property {boolean} [mrp_promotion] - If applied promotion is applied on
 *   product MRP or ESP
 * @property {string} [promotion_group] - Promotion group for the promotion
 * @property {string} [promo_id] - Promotion unique identifier
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
 * @property {string} [max] - Maximum Delivery promise formatted timestamp
 * @property {string} [min] - Minimum Delivery promise formatted timestamp
 */
/**
 * @typedef PromiseISOFormat
 * @property {string} [max] - Max promise in ISO format.
 * @property {string} [min] - Min Promise in ISO format.
 */
/**
 * @typedef PromiseTimestamp
 * @property {number} [max] - Maximum Promise for the shipment
 * @property {number} [min] - Minimum delivery promise time for the shipment
 */
/**
 * @typedef ShipmentPromise
 * @property {PromiseFormatted} [formatted]
 * @property {PromiseTimestamp} [timestamp]
 * @property {PromiseISOFormat} [iso]
 */
/**
 * @typedef CouponDetails
 * @property {number} [discount_total_quantity] - Total discount earned from
 *   coupon applied to cart
 * @property {number} [discount_single_quantity] - Discout amount applied from
 *   coupon for single quantity of the product
 * @property {string} [code] - Coupon code of the coupon applied
 */
/**
 * @typedef ProductPrice
 * @property {number} [marked] - Maximum price of the product
 * @property {number} [add_on] - Price before promotion and coupon amount
 *   applied for calculation
 * @property {string} [currency_code] - Currency code of the price defined for the product
 * @property {string} [currency_symbol] - Currency symbol of the price defined
 *   for the product
 * @property {number} [effective] - Selling price of the product
 * @property {number} [selling]
 * @property {number} [selling_price] - Selling price of the product
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
 * @property {string} [display] - Display size of the product
 * @property {string} [value] - Actual value of the size
 * @property {boolean} [is_available] - Available flag for the size of the
 *   product if that is available
 */
/**
 * @typedef ProductAvailability
 * @property {boolean} [is_valid] - Valid flag for the product if the product
 *   added in cart is valid to place the order
 * @property {number} [other_store_quantity] - Quantity of the product available
 *   on other store
 * @property {boolean} [deliverable] - Deliverable flag denotes if the product
 *   is deliverable or not
 * @property {ProductAvailabilitySize[]} [available_sizes] - Product sizes availability
 * @property {boolean} [out_of_stock] - Denotes if the product is available in stock
 * @property {string[]} [sizes] - All sizes of the product
 */
/**
 * @typedef PromoMeta
 * @property {string} [message] - Loyalty points message denotes how much
 *   loyalty points and applied and how much left with the user
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
 * @property {number} [quantity] - Quantity of the product added in cart
 * @property {CartProduct} [product]
 * @property {string} [product_ean_id] - European Article Number of the product
 *   (limited upto 50 EAN identifier in a single request).
 * @property {Object} [parent_item_identifiers] - Parent item information of the
 *   product which identifies the parent of the product in cart
 * @property {boolean} [is_set] - Whether or not the product is a set of items
 * @property {ProductArticle} [article]
 * @property {AppliedPromotion[]} [promotions_applied] - List of applicable
 *   promotion for the product in cart
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
 * @typedef OpenapiCartDetailsResult
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
 * @property {CartAppliedPriceAdjustment[]} [price_adjustment_applied] - Items
 *   details in cart
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
 * @property {Object} [custom_cart_meta] - Custom meta details added cart
 *   checkout API payload.
 */
/**
 * @typedef OpenApiErrorResult
 * @property {boolean} [success] - Success flag of error response.
 * @property {string} [message] - Message of the error response.
 * @property {Object} [errors] - Contains field name which has error as key and
 *   error message as value
 * @property {Object} [error]
 */
/**
 * @typedef ShippingAddress
 * @property {string} [country] - Country of address
 * @property {string} [state] - State of the address
 * @property {string} [city] - City of the address
 * @property {number} [phone] - Phone number for address
 * @property {string} area_code - Area code of the address
 * @property {string} [country_iso_code] - Country iso code for address
 * @property {string} [country_phone_code] - Country phone code for address
 * @property {Object} [meta] - Metadata of the address
 * @property {string} [address_type] - Address type of address
 * @property {string} [area] - Area description for address
 * @property {string} [area_code_slug] - Area code slug for address. example
 *   pincode is slug for India
 * @property {string} [name] - Name of person in address data to whom it belongs to
 * @property {string} [landmark] - Landmark of address
 * @property {string} [email] - Email address for address data
 * @property {string} [country_code] - Country code of address
 * @property {number} [pincode] - Pincode for address data
 * @property {string} [address] - Address description for address data
 */
/**
 * @typedef OpenApiCartServiceabilityPayload
 * @property {CartItem[]} cart_items - List of items in open api cart response
 * @property {ShippingAddress} shipping_address
 */
/**
 * @typedef OpenApiCartServiceabilityResult
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
 * @property {string} key - Key represents name of file
 * @property {string[]} values - List of urls path
 */
/**
 * @typedef CartItemMeta
 * @property {boolean} [primary_item] - Flags indicates item is primary or not
 * @property {string} [group_id] - Fields to determine group id of the product
 */
/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [payment_id] - Payment gateway identifier
 * @property {string} [payment_gateway] - Payment gateway used to do the payment
 * @property {Object} [extra_meta] - Payment extra meta for the payment mode to
 *   do the payment
 * @property {string} [current_status] - Current status of the payment
 * @property {string} [order_id] - Payment gateway order id
 */
/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} mode - Payment mode of payment method used to make payment
 * @property {number} amount - Amount of the payment mode to be paid
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} [name] - Name of the payment mode used to make payment
 */
/**
 * @typedef OpenApiOrderItem
 * @property {number} cashback_applied - Cashback applied on user cart
 * @property {number} [quantity] - Article quantity in user cart
 * @property {string} size - Size of the article added in cart
 * @property {number} coupon_effective_discount - Coupon discount applied on
 *   article in user cart
 * @property {number} amount_paid - Amount needs to paid for article in cart
 * @property {number} delivery_charges - Delivery charges applied on article in cart
 * @property {number} price_marked - Original price of product
 * @property {OpenApiFiles[]} [files] - List of file url
 * @property {CartItemMeta} [meta]
 * @property {Object} [extra_meta] - Extra meta of the article in cart
 * @property {number} product_id - Product id associated with article in cart
 * @property {number} [loyalty_discount] - Loyalty points applied on cart
 * @property {number} discount - Discount value applied on article in cart
 * @property {number} price_effective - Current per unit price of product after
 *   existing deductions
 * @property {MultiTenderPaymentMethod[]} payment_methods - Payment methods list
 *   used to make the payment
 * @property {number} [employee_discount] - Employee discount value applied on
 *   article in cart
 * @property {number} cod_charges - Cash On Delivery charges applied on article in cart
 */
/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [payment_mode] - Payment mode from which the payment to be
 *   done for the order
 * @property {number} cart_value - Total amount of user cart
 * @property {OpenApiOrderItem[]} cart_items - List of items in user cart
 * @property {ShippingAddress} [shipping_address]
 * @property {number} [loyalty_discount] - Loyalty points applied on cart
 * @property {string} [comment] - Comment message added in cart after order placed
 * @property {MultiTenderPaymentMethod[]} payment_methods - Payment methods list
 *   used to make the payment
 * @property {Object} [employee_discount] - Employee discount value applied on user cart
 * @property {string} [coupon] - Coupon text of coupon applied on user cart
 * @property {number} cashback_applied - Cashback applied on user cart
 * @property {string} [gstin] - GSTIN number added in cart
 * @property {ShippingAddress} billing_address
 * @property {string} coupon_code - Coupon code to be applied to cart
 * @property {number} coupon_value - Value of the coupon applied to cart
 * @property {number} delivery_charges - Delivery charges of the order placed
 *   via checkout API
 * @property {string} [affiliate_order_id] - Order id generated after placing order
 * @property {string} [currency_code] - Currency code for the price
 * @property {string} [order_id] - Order id generated after placing order
 * @property {OpenApiFiles[]} [files] - List of file url
 * @property {number} cod_charges - Cash On Delivery charges of the user cart
 * @property {string} [platform_order_id]
 * @property {Object} [extra_meta]
 */
/**
 * @typedef OpenApiCheckoutResult
 * @property {boolean} [success] - The request success is defined
 * @property {string} [message] - Message of the api response
 * @property {string} [order_ref_id] - Order id sent in request
 * @property {string} order_id - Fynd order id
 */
/**
 * @typedef AbandonedCart
 * @property {string} expire_at - Expire details of user cart
 * @property {Object} [promotion] - Promotion object details like amount, mode,
 *   currency and list of promotions in user cart
 * @property {boolean} is_default - User cart default status
 * @property {string} [comment] - Comment message to be added in user cart
 * @property {Object[]} articles - List of articles in user cart
 * @property {Object} [coupon] - Coupon data of user cart which denotes if
 *   coupon is applied, coupon code, coupon amount, coupon title and coupon message
 * @property {number} [bulk_coupon_discount] - Total bulk discount amount
 *   applied in user cart
 * @property {string} _id - Unique identifier of the user cart
 * @property {Object} [fynd_credits] - Fynd credit points applied in user cart
 * @property {number[]} [fc_index_map] - Flat article index in user cart
 * @property {string} [order_id] - Order id generated in user cart
 * @property {number} [discount] - Discount amount of the product in cart
 * @property {Object} [cod_charges] - Cash On Delivery charges of the user cart
 * @property {Object} [payments] - Payment object selected in user cart
 * @property {string} [payment_mode] - Payment mode of the payment selected to
 *   do the payment
 * @property {Object[]} [shipments] - Shipment details for the items in a cart,
 *   specific to the selected address.
 * @property {Object} [pick_up_customer_details] - Customer contact details for
 *   customer pickup at store
 * @property {number} uid - Unique Identifier of user cart
 * @property {string} [checkout_mode] - Checkout mode of user cart
 * @property {number} [cart_value] - Total amount of user cart
 * @property {boolean} [is_archive] - Flag to indicate cart is archived or not
 * @property {string} created_on - Date time format when user cart created
 * @property {string} last_modified - Date time format when user cart last modified
 * @property {Object} [meta] - Extra meta data of user cart
 * @property {boolean} [buy_now] - Buy now flag for the cart which denotes user
 *   is doing fast checkout for the cart using buy now
 * @property {boolean} [is_active] - Flag indicates user cart is active or not
 * @property {Object} cashback - Cart level cashback data which denotes cashback
 *   amount and cashback message
 * @property {Object[]} [payment_methods] - Payment methods list used to make the payment
 * @property {string} [gstin] - GSTIN added in user cart
 * @property {Object} [delivery_charges] - Delivery charges of user cart
 * @property {boolean} [merge_qty] - Flag indicates cart has merged article or not
 * @property {string} user_id - User Id of user cart
 * @property {string} [app_id] - Application id of user cart
 */
/**
 * @typedef AbandonedCartResult
 * @property {AbandonedCart[]} [items] - List of items in abandon cart
 * @property {Object} [result] - Define the list of items with updated status
 * @property {Page} [page]
 * @property {boolean} [success] - The request success is defined
 * @property {string} [message] - Message of the response
 */
/**
 * @typedef PaymentSelectionLock
 * @property {string} [payment_identifier] - Identifier for Payment Mode
 * @property {string} [default_options] - Default Selection Payment Mode
 * @property {boolean} [enabled] - Denotes if default payment selection is enable
 */
/**
 * @typedef CartCurrency
 * @property {string} [code] - Currency code defined by ISO 4217:2015
 * @property {string} [symbol] - Currency symbol for currency of user cart prices
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
 * @property {number} [cashback_amount] - Fields denotes cashback amount applied to cart
 * @property {string} [cashback_message_primary] - Primary cashback message for
 *   coupon applied to cart
 * @property {string} [cashback_message_secondary] - Secondary cashback message
 *   for coupon applied to cart
 * @property {string} [coupon_code] - Coupon code to be applied to cart
 * @property {string} [coupon_description] - Coupon description of the coupon
 *   applied to cart
 * @property {string} [coupon_id] - Unique identifier of the coupon applied to cart
 * @property {string} [coupon_subtitle] - Coupon subtitle of the coupon applied to cart
 * @property {string} [coupon_title] - Coupon title of the coupon applied
 * @property {string} [coupon_type] - Type of the coupon applied to cart
 * @property {number} [coupon_value] - Value of the coupon applied to cart
 * @property {number} [discount] - Total discount earned from coupon applied to cart
 * @property {boolean} [is_applied]
 * @property {boolean} [is_valid] - Determine where the coupon applied to cart is valid
 * @property {number} [maximum_discount_value] - Maximum discount value of the
 *   coupon applied to cart
 * @property {string} [message] - Coupon message of the coupon applied to cart
 * @property {number} [minimum_cart_value]
 * @property {CartCouponMedias[]} [medias]
 */
/**
 * @typedef ChargesThreshold
 * @property {number} [charges] - Charges amount to be applied on cart
 * @property {number} [threshold] - Threshold of cart value on which the charge
 *   should be applied
 */
/**
 * @typedef DeliveryChargesConfig
 * @property {boolean} [enabled] - Delivery charge enabled for the cart or not
 * @property {ChargesThreshold[]} [charges] - Charges applicable based on threshold
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
 * @typedef CartDetailResult
 * @property {number} [cart_id] - Unique identifier of the user cart.
 * @property {string} [uid] - Unique identifier of the user cart
 * @property {string} [coupon_text] - Coupon text of coupon applied on cart
 * @property {string} [id] - Unique identifier of the user cart
 * @property {Object} [pan_config] - Pan card config states at what condition
 *   user should enter the pan card
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message to be added in user cart
 * @property {CartProductInfo[]} [items] - Items data list in user cart that
 *   includes item id, item size, store id, available sizes and rest of the item
 *   related data
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info] - Delivery charge in information
 *   message on shipment
 * @property {CartCommonConfig} [common_config]
 * @property {CartDetailCoupon} [coupon]
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process
 * @property {string} [message] - Message of the cart detail API response
 * @property {Object} [notification] - Notification object which denotes
 *   notification data for user cart
 * @property {string} [staff_user_id] - Staff employee user id if cart is
 *   created by staff employee for the customer
 * @property {boolean} [success] - Success flag of get cart detail API response
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid] - Cart validity flag determines the if the
 *   response is valid or not
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode] - Checkout mode of user cart.
 * @property {string} [last_modified] - Last modified timestamp of cart.
 * @property {CartAppliedPriceAdjustment[]} [price_adjustment_applied]
 * @property {boolean} [buy_now] - Buy now flag for the cart which denotes user
 *   is doing fast checkout for the cart using buy now.
 * @property {string} [gstin] - GSTIN added in user cart.
 * @property {AppliedPromotion[]} [applied_promo_details] - List of applied
 *   promotions data to cart which includes promotion id, promotion name, offer
 *   text, description, buy rules, discount rules and promotion type
 * @property {string} [pan_no] - Permanent Account Number of the user.
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
 * @property {CustomCart} [custom_cart]
 * @property {Object} [custom_cart_meta] - Custom meta details added cart
 *   checkout API payload .
 */
/**
 * @typedef AddProductCart
 * @property {number} [quantity] - Field to specify the product quantity that
 *   user wants to buy
 * @property {string} [item_size] - Field to determine size of the product
 * @property {number} [seller_id] - Unique identifier of the seller selected by
 *   the user from which user want to buy a product
 * @property {Object[]} [parent_item_identifiers] - Fields to determine parent
 *   product of the product
 * @property {string} [price_factory_type_id]
 * @property {string[]} [product_group_tags] - Field to specify the product
 *   groups of the product that the user is trying to add in cart
 * @property {string} [article_id] - Unique identifier of an article
 * @property {ArticleAssignment} [article_assignment]
 * @property {number} [store_id] - Unique identifier of the store selected by
 *   the user from which user want to buy a product
 * @property {string} [display] - Display field at article level
 * @property {number} [item_id] - Unique identifier to identify product
 * @property {Object} [extra_meta] - Extra meta data to be added at article
 *   level while add items to cart
 * @property {Object} [_custom_json] - Field to add custom json at article level
 *   while add items to cart
 * @property {Object} [meta] - Field to add meta data at article level
 * @property {boolean} [pos] - Filed to determine whether user is making request
 *   from pos or not
 * @property {string} [seller_identifier] - Add items using seller identifier for store os
 */
/**
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */
/**
 * @typedef AddCartPayload
 * @property {boolean} [new_cart] - Field to create to new cart whille user adds
 *   item to cart
 * @property {AddProductCart[]} [items] - List of items detail which need to be
 *   added to cart like item id, item size, and item quantity
 */
/**
 * @typedef AddCartDetailResult
 * @property {boolean} [success] - True if all items are added successfully.
 *   False if partially added or not added.
 * @property {CartDetailResult} [cart]
 * @property {boolean} [partial] - When adding multiple items check if all
 *   added. True if only few are added.
 * @property {string} [message] - Message of add cart API response
 * @property {Object} [result]
 */
/**
 * @typedef UpdateProductCart
 * @property {number} [quantity] - Field to update the quantity of the item in cart
 * @property {string} [item_size] - Field to update the size of the product in cart
 * @property {Object} [parent_item_identifiers] - Field to update parent product
 *   of the item in cart
 * @property {Object} [meta] - Field to update meta of the item in cart
 * @property {Object} [extra_meta] - Field to update extra meta of the product in cart
 * @property {Object} [_custom_json] - Field to update custom json of the product in cart
 * @property {string} [price_factory_type_id]
 * @property {number} [item_id] - Item id of the product that needs to be updated
 * @property {number} [item_index] - Item index determines on which index the
 *   product falls to be updated
 * @property {CartProductIdentifer} identifiers
 * @property {string} [article_id] - Article id of the product in cart
 */
/**
 * @typedef FreeGiftItemCreation
 * @property {string} promotion_id - Unique identifier of the free gift promotion.
 * @property {string} item_id - Unique identifier of the selected free gift item.
 * @property {string} item_size - Size of the selected free gift item.
 */
/**
 * @typedef UpdateCartPayload
 * @property {UpdateProductCart[]} [items]
 * @property {FreeGiftItemCreation[]} [free_gift_items] - List of free gift
 *   items with updated sizes.
 * @property {string} operation - Cart opertaion type
 */
/**
 * @typedef UpdateCartDetailResult
 * @property {boolean} [success] - True if all items are added successfully.
 *   False if partially added or not added.
 * @property {CartDetailResult} [cart]
 * @property {string} [message] - Message of update cart API response
 * @property {Object} [result]
 */
/**
 * @typedef OverrideCartItemPromo
 * @property {Object} [restrictions]
 * @property {string} promo_id - Promotion id applied on product
 * @property {string} promo_amount - Promotion amount applied on product
 * @property {string} [promo_desc] - Promotion description applied on product
 * @property {string} [rwrd_tndr]
 * @property {Object[]} [item_list] - List of items
 * @property {string} [parent_promo_id] - Parent promotion unique identifier
 */
/**
 * @typedef OverrideCartItem
 * @property {string} [seller_identifier] - Seller identifiers of the product size.
 * @property {number} [quantity] - Item quantity, which you have added into cart
 * @property {string} size - Item size, which you have added into cart
 * @property {number} price_marked - Original price of product
 * @property {number} amount_paid - Amount needs to paid for item
 * @property {OverrideCartItemPromo[]} [promo_list] - List of promotion applied on item
 * @property {Object} [extra_meta] - Extra meta to be added while checkout in order
 * @property {number} item_id - Item unique id in user cart
 * @property {number} discount - Discount amount applied on item
 * @property {number} price_effective - Current per unit price of product after
 *   existing deductions
 */
/**
 * @typedef OverrideCheckoutReq
 * @property {string} cart_id - The cart id of user cart
 * @property {string} payment_mode - Payment mode from which the payment to be
 *   done for the order
 * @property {Object} [billing_address] - Billing address json which includes
 *   customer address, customer phone, customer email, customer pincode,
 *   customer landmark and customer name
 * @property {string} merchant_code - Merchant code of the payment mode selected
 *   to do the payment
 * @property {string} payment_identifier - Payment identifier of the payment
 *   mode selected to do the payment
 * @property {string} currency_code - Currency code for the price
 * @property {string} aggregator - Aggregator name of the payment gateway
 * @property {string} order_type - Order type of the order being placed like
 *   pickAtStore or HomeDelivery
 * @property {string} [callback_url] - Callback url to be redirected after
 *   payment received/failed
 * @property {OverrideCartItem[]} cart_items - List of items which includes
 *   their size, id, discount and promo details
 * @property {number} [ordering_store] - Ordering store id of the store from
 *   which the order is getting placed
 * @property {Object} [shipping_address] - Shipping address json which includes
 *   name, area, address, phone, area_code, state, country, country code and email
 */
/**
 * @typedef OverrideCheckoutResult
 * @property {Object} data - Data of the user cart checkout includes cart data,
 *   address, user id, order type etc
 * @property {Object} cart - Cart details in API response which included cart
 *   id, items in cart, promise, order type, breakup values etc.
 * @property {boolean} success
 * @property {string} order_id - Order id generated after placing order
 * @property {string} message - Message of the cart override checkout API response
 * @property {string} [app_intercept_url] - App intercept url which is used to
 *   redirect on app after payment in confirmed/failed
 * @property {string} [callback_url] - Callback url to be redirected after
 *   payment received/failed
 * @property {string} [payment_confirm_url] - Payment confirm url used to
 *   redirect after payment is confirmed
 */
/**
 * @typedef GetShareCartLinkPayload
 * @property {string} [id] - Cart uid for generating sharing
 * @property {Object} [meta] - Staff, Ordering store or any other data. This
 *   data will be used to generate link as well as sent as shared details.
 */
/**
 * @typedef GetShareCartLinkResult
 * @property {string} [token] - Short url unique id of the cart which is opted
 *   to share with other user
 * @property {string} [share_url] - Short shareable final url which can populate
 *   shared cart items in one's cart or replaced one's cart with shared cart items
 */
/**
 * @typedef SharedCartDetails
 * @property {Object} [source] - Share link device and other source information
 * @property {Object} [user] - User details of who generated share link
 * @property {string} [token] - Short link id of the user cart that needs to be shared
 * @property {string} [created_on] - Created on timestamp of user cart
 * @property {number} [ordering_store] - Ordering store id of the store from
 *   which the order is getting placed.
 * @property {string} [selected_staff] - Staff id of the person from store for
 *   which the order is getting placed.
 * @property {Object} [meta] - Meta data sent while generating share cart link
 */
/**
 * @typedef SharedCart
 * @property {number} [cart_id] - Unique identifier of the user cart.
 * @property {string} [coupon_text] - Coupon text of the applied coupon on user cart.
 * @property {string} [id] - Unique identifier of the user cart.
 * @property {Object} [pan_config] - Pan card config states at what condition
 *   user should enter the pan card.
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message added in user cart
 * @property {CartProductInfo[]} [items] - Items data list in user cart that
 *   includes item id, item size, store id, available sizes and rest of the item
 *   related data
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info] - Delivery charge info message of
 *   the user cart.
 * @property {CartCommonConfig} [common_config]
 * @property {CartDetailCoupon} [coupon]
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process
 * @property {string} [message] - Message of the get shared cart API response.
 * @property {Object} [notification] - Notification object which denotes
 *   notification data for user cart.
 * @property {string} [staff_user_id] - Staff employee user id if cart is
 *   created by staff employee for the customer.
 * @property {boolean} [success] - Success flag of get cart detail API response.
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid] - Valid flag for get shared cart detail API
 * @property {string} [uid] - Cart id of the user cart
 * @property {string} [checkout_mode] - Checkout mode of address on which
 *   address to be used for which checkout mode of cart
 * @property {CartCurrency} [currency]
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
 * @typedef SharedCartResult
 * @property {SharedCart} [cart]
 * @property {string} [error] - Error details if any error occurs which includes
 *   type of error, error code and error message
 */
/**
 * @typedef CartList
 * @property {string} [cart_id] - The cart id of user
 * @property {Object} [pick_up_customer_details] - Customer contact details for
 *   customer pickup at store
 * @property {number} [cart_value] - Total amount of cart
 * @property {string} [created_on] - Date format when cart created
 * @property {string} [user_id] - User id which is associated with cart
 * @property {string} [currency_code] - Active cart currency code
 * @property {number} [item_counts] - Article total count in cart
 */
/**
 * @typedef MultiCartResult
 * @property {boolean} [success] - True if get list of cart successfully.
 * @property {CartList[]} [data] - List of active carts and their item's count
 */
/**
 * @typedef UpdateUserCartMapping
 * @property {string} user_id - User Id of user for which we map with the cart
 */
/**
 * @typedef UserCartMappingResult
 * @property {boolean} [is_valid]
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {CartDetailResult} [cart]
 * @property {CartMappingUserInfo} [user]
 */
/**
 * @typedef CartMappingUserInfo
 * @property {string} [_id] - Unique Identifier of user
 * @property {string} [uid]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [created_at]
 * @property {string} [modified_on]
 * @property {string} [external_id]
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
 */
/**
 * @typedef PlatformAddCartPayload
 * @property {string} [user_id] - The user id of user, for which we need to add
 *   item into cart
 * @property {boolean} [new_cart] - Field to create to new cart whille user adds
 *   item to cart
 * @property {AddProductCart[]} [items] - List of items detail which need to be
 *   added to cart like item id, item size, and item quantity
 */
/**
 * @typedef PlatformUpdateCartPayload
 * @property {string} [user_id] - The user id of user, for which we need to
 *   update the cart
 * @property {UpdateProductCart[]} [items] - List items data that needs to be
 *   updated in cart
 * @property {FreeGiftItemCreation[]} [free_gift_items] - List of free gift
 *   items with updated sizes.
 * @property {string} operation - Field to determine if item to be removed from
 *   cart or it needs to be updated
 */
/**
 * @typedef DeleteCartPayload
 * @property {string[]} [cart_id_list] - List of all cart ids, which need to delete
 */
/**
 * @typedef DeleteCartDetailResult
 * @property {boolean} [success] - True if cart is archived successfully. False
 *   if not archived.
 * @property {string} [message]
 */
/**
 * @typedef CartItemCountResult
 * @property {number} [user_cart_items_count] - Item count present in cart
 */
/**
 * @typedef Coupon
 * @property {string} [title] - Coupon Title of the coupon applied denotes name
 *   of the coupon
 * @property {number} [max_discount_value] - Maximum discount value of the
 *   coupon applied to cart
 * @property {string} [coupon_code] - Coupon code of the coupon applied on cart
 * @property {boolean} [is_applied] - Flag to determine where the coupon is
 *   applied to cart or not
 * @property {string} [coupon_type] - Type of the coupon applied to cart
 * @property {string} [expires_on] - Message to display to user for expiry of the coupon
 * @property {number} [coupon_value] - Coupon value of the coupon applied to cart
 * @property {string} [sub_title] - Coupon subtitle of the coupon applied to
 *   cart which is used to display
 * @property {number} [minimum_cart_value] - Minimum cart value of the coupon
 *   applied to cart
 * @property {boolean} [is_applicable] - Flag to determine where the coupon is
 *   applicable to cart or not
 * @property {string} [message] - Coupon message of the coupon applied to cart
 * @property {string} [description] - Coupon description of the coupon applied to cart
 * @property {string} [start_date] - Start date of the coupon when the coupon
 *   will be live for the users to apply on cart
 * @property {string} [end_date] - End date of the coupon on which the coupon expires
 * @property {string} [coupon_applicable_message]
 * @property {boolean} [is_bank_offer]
 * @property {string} [offer_text]
 * @property {number} [coupon_amount]
 * @property {string[]} [tags]
 * @property {CartCouponMedias[]} [medias]
 */
/**
 * @typedef PageCoupon
 * @property {boolean} [has_next] - Denotes if next page of coupon is available
 * @property {number} [current] - Current page number
 * @property {number} [total] - Total pages of coupon availalbe
 * @property {number} [total_item_count] - Total coupons are available for the cart
 * @property {boolean} [has_previous]
 */
/**
 * @typedef GetCouponResult
 * @property {Coupon[]} [available_coupon_list] - List of available coupon which
 *   can be applied on cart
 * @property {PageCoupon} [page]
 */
/**
 * @typedef ApplyCouponPayload
 * @property {string} coupon_code - Coupon code to be applied
 */
/**
 * @typedef GeoLocation
 * @property {number} [longitude] - Longitude coordinate for address
 * @property {number} [latitude] - Latitude coordinate for address
 */
/**
 * @typedef PlatformAddress
 * @property {number} [pincode] - Pincode of address.
 * @property {string} [phone] - Phone number for address
 * @property {string} [id] - Id of the address
 * @property {string} [area_code_slug] - Area code slug for address. example
 *   pincode is slug for India
 * @property {string} [country_code] - Country code of address
 * @property {GeoLocation} [geo_location]
 * @property {string} [country] - Country of address
 * @property {string} [state] - State of the address
 * @property {boolean} [is_default_address] - Default address flag if no address
 *   selected then this should be the default address selected
 * @property {string[]} [tags] - Tags of address from which it can be identified
 * @property {string} [created_by_user_id] - Created by user id of address
 * @property {string} [landmark] - Landmark of address
 * @property {string} [email] - Email address for address data
 * @property {string} [area_code] - Area code of the address
 * @property {string} [checkout_mode] - Checkout mode of address on which
 *   address to be used for which checkout mode of cart
 * @property {Object} [meta] - Metadata of the address
 * @property {boolean} [is_active] - States whether address is active or not
 * @property {string} [name] - Name of person in address data to whom it belongs to
 * @property {Object} [google_map_point] - Google map point of the address
 * @property {string} [cart_id] - The cart id of user cart
 * @property {string} [city] - City of the address
 * @property {string} [sector] - Sector of the address
 * @property {string} [state_code] - State code for international address
 * @property {string} [area] - Area description for address
 * @property {string} [user_id] - User id of address for which address is created
 * @property {string} [address_type] - Address type of address
 * @property {string} [address] - Address description for address data
 * @property {string} [country_phone_code] - Country phone code for address
 * @property {string} [country_iso_code] - Country iso code for address
 * @property {AddressCustomJson} [_custom_json]
 * @property {number} [uid]
 * @property {boolean} [is_anonymous]
 * @property {string} [app_id]
 * @property {string} [expire_at]
 * @property {string} [address_id] - Uid of the address.
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
 * @typedef PlatformGetAddressesResult
 * @property {PlatformAddress[]} [address] - List of all address saved by customer
 * @property {boolean} [pii_masking]
 * @property {ValidationConfig} [validation_config]
 */
/**
 * @typedef SaveAddressResult
 * @property {string} [id] - Id of the address
 * @property {boolean} [success] - Success flag of save address Response
 * @property {boolean} [is_default_address] - Default address flag if no address
 *   selected then this should be the default address selected
 * @property {Object} [address_id] - Unique Identifier of the address
 */
/**
 * @typedef UpdateAddressResult
 * @property {string} [id] - ID of an address
 * @property {boolean} [is_default_address] - Default address flag if no address
 *   selected then this should be the default address selected
 * @property {boolean} [success] - Success flag of update address response
 * @property {boolean} [is_updated] - Updated flag for update address operation
 *   if the address updated or not
 * @property {number} [address_id]
 */
/**
 * @typedef DeleteAddressResult
 * @property {string} [id] - Id of the address
 * @property {boolean} [is_deleted]
 * @property {string} [address_id]
 */
/**
 * @typedef PlatformSelectCartAddressPayload
 * @property {string} [cart_id] - Cart id of the user cart for which the select
 *   address operation performed
 * @property {string} [billing_address_id] - Billing address id selected by user
 *   on which shipment bill to be generated
 * @property {string} [checkout_mode] - The checkout mode in cart
 * @property {string} [id] - Address is selected by user on which shipment to be delivered
 * @property {string} [user_id] - Unique Identifier of user
 */
/**
 * @typedef ShipmentArticle
 * @property {string} [meta] - Article meta data for shipment
 * @property {string} [quantity] - Article quantity for shipment
 * @property {string} [article_id]
 */
/**
 * @typedef ShipmentError
 * @property {string} [type]
 * @property {string[]} [value]
 * @property {string} [message]
 */
/**
 * @typedef PlatformShipmentResult
 * @property {number} [shipments] - Count of shipments that will be shipped.
 * @property {number} [fulfillment_id] - Fulfilment id of the shipment
 * @property {CartProductInfo[]} [items] - Item details in the shipment
 * @property {Object} [dp_options] - Delivery partner options that are available
 *   to deliver the shipment
 * @property {string} [shipment_type] - Shipment type of the shipment returned
 *   in get shipments API like single_shipment or multiple shipment. Single
 *   Shipment means 1 item in 1 shipment and vice versa in the other one
 * @property {string} [order_type] - Order type of the shipment like pickAtStore
 *   or HomeDelivery
 * @property {string} [box_type] - Box type of the shipment in which the
 *   shipment will be delivered
 * @property {ShipmentPromise} [promise]
 * @property {string} [dp_id] - Delivery partner id of the shipment
 * @property {string} [fulfillment_type] - Fulfilment type of shipment
 * @property {ShipmentArticle[]} [articles] - List of articles in shipment
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
 * @property {string} [debug]
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
 * @typedef PlatformCartShipmentsResult
 * @property {number} [cart_id] - Unique identifier of the user cart.
 * @property {string} [uid] - Unique identifier of the user cart.
 * @property {string} [coupon_text] - Coupon text of coupon applied on cart
 * @property {string} [id] - Unique identifier of the user cart.
 * @property {Object} [pan_config] - Pan card config states at what condition
 *   user should enter the pan card
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message to be added in user cart.
 * @property {CartProductInfo[]} [items]
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
 * @property {PlatformShipmentResult[]} [shipments]
 * @property {boolean} [error] - Error details if any error occurs which
 *   includes type of error, error code and error message
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
 * @property {Object} [custom_cart_meta] - Custom cart meta details added in cart
 */
/**
 * @typedef UpdateCartShipmentItem
 * @property {number} [quantity] - Quantity of product in shipment
 * @property {string} shipment_type - Shipment delivery type
 * @property {string} article_uid - Article unique id for shipment
 */
/**
 * @typedef UpdateCartShipmentPayload
 * @property {UpdateCartShipmentItem[]} shipments - List of Shipments which
 *   includes shipment data like shipment items, shipment promise, Shipment
 *   type, shipment order type, shipment dp options etc
 */
/**
 * @typedef PlatformCartMetaPayload
 * @property {string} [gstin] - GSTIN number to be added in user cart
 * @property {Object} [pick_up_customer_details] - Customer contact details for
 *   customer pickup at store
 * @property {string} [checkout_mode] - Checkout mode of user cart
 * @property {Object} [gift_details] - Gift details is open json which can
 *   include gift message
 * @property {string} [pan_no] - Permanent Account Number of the user
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
 * @property {string} [comment] - Comment message to be added in user cart
 * @property {string} [staff_user_id] - Staff user id
 * @property {Object} [delivery_slots]
 * @property {Object} [custom_cart_meta]
 */
/**
 * @typedef CartMetaResult
 * @property {boolean} [is_valid] - Whether added meta was vaild
 * @property {string} [message]
 */
/**
 * @typedef CartMetaMissingResult
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
 * @property {string} [employee_code] - Employee code of staff who does checkout
 *   on behalf of customer
 * @property {string} _id - Id of staff who does checkout on behalf of customer
 * @property {string} user - User id of the employee who does checkout on behalf
 *   of customer
 * @property {string} last_name - Last name of staff employee who does checkout
 *   on behalf of customer
 * @property {string} first_name - First name of staff emplyee who does checkout
 *   on behalf of customer
 */
/**
 * @typedef CustomerDetails
 * @property {string} [name] - Name of customer to be added in customer detail
 *   while checkout
 * @property {string} [email] - Email address of the customer to be added in
 *   customer detail while checkout
 * @property {string} mobile - Mobile number of customer to be added in customer
 *   detail while checkout
 */
/**
 * @typedef Files
 * @property {string} key - Key represents name of file
 * @property {string[]} values - List of urls path
 */
/**
 * @typedef CartCheckoutCustomMeta
 * @property {string} key
 * @property {string} value
 */
/**
 * @typedef PlatformCartCheckoutDetailPayload
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
 * @property {CustomerDetails} [customer_details] - Customer details
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
 * @property {CartProductInfo[]} [items] - Items details in cart after order placed
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
 * @property {CartAppliedPriceAdjustment[]} [price_adjustment_applied] - Store
 *   employees data
 * @property {boolean} [is_pan_received] - If the customer provides a PAN
 *   number, set it to true.
 * @property {Object} [pan_config] - Pan card config states at what condition
 *   user should enter the pan card.
 * @property {string} [order_id] - Order id generated after placing order.
 * @property {Object} [custom_cart_meta] - Custom cart meta details added in cart.
 * @property {string} [error_message] - Error details if any error occurs which
 *   includes type of error, error code and error message
 * @property {string} [user_type] - User type of the cart who places the order
 * @property {number} [cod_charges] - Cash On Delivery charges of the user cart
 * @property {string} [cod_message] - Cash On Delivery message for the order placed
 * @property {number} [delivery_charge_order_value] - Delivery charge order value
 * @property {string} [store_code] - Store code from which the order placed
 * @property {Object[]} [store_emps] - Store employees data
 * @property {boolean} [cod_available] - Whether Cash On Delivery available it true.
 * @property {number} [delivery_charges] - Delivery charges of the order placed
 *   via checkout API.
 */
/**
 * @typedef CartCheckoutResult
 * @property {string} [app_intercept_url] - App intercept url which is used to
 *   redirect on app after payment in confirmed/failed
 * @property {Object} [data] - Data of the user cart checkout includes cart
 *   data, address, user id, order type etc
 * @property {CheckCart} [cart]
 * @property {boolean} [success] - Success flag of cart checkout API response
 * @property {string} [callback_url] - Callback url to be redirected after
 *   payment received/failed
 * @property {string} [payment_confirm_url] - Payment confirm url used to
 *   redirect after payment is confirmed
 * @property {string} [order_id] - Order id generated after placing order
 * @property {string} [message]
 */
/**
 * @typedef CartDeliveryModesResult
 * @property {number[]} [pickup_stores] - Store pick up available store uids
 * @property {string[]} [available_modes] - Available delivery modes
 */
/**
 * @typedef PickupStoreDetail
 * @property {string} [country] - Country of address
 * @property {string} [state] - State of the address
 * @property {string} [city] - City of the address
 * @property {string} [phone] - Phone number for address
 * @property {string} [area_code] - Area code of the address
 * @property {number} [uid] - Uid of the address
 * @property {string} [area_code_slug] - Area code slug for address. example
 *   pincode is slug for India
 * @property {string} [address_type] - Address type of address
 * @property {string} [area] - Area description for address
 * @property {number} [id] - Id of the address
 * @property {string} [store_manager_name] - Name of store manager
 * @property {string} [name] - Name of person in address data to whom it belongs to
 * @property {string} [store_code] - Store code from which the order placed
 * @property {string} [landmark] - Landmark of address
 * @property {string} [email] - Email address for address data
 * @property {number} [pincode] - Address pincode
 * @property {string} [address]
 * @property {string} [sector]
 * @property {string} [state_code]
 * @property {GeoLocation} [geo_location]
 */
/**
 * @typedef StoreDetailsResult
 * @property {PickupStoreDetail[]} [items]
 * @property {PickupStoreDetail[]} [data]
 */
/**
 * @typedef UpdateCartPaymentPayload
 * @property {string} [address_id] - Address id of the user on which the order
 *   to be delivered
 * @property {string} [payment_mode] - Payment mode from which the payment to be
 *   done for the order
 * @property {string} [aggregator_name] - Aggregator name of the payment gateway
 * @property {string} [merchant_code] - Merchant code of the payment mode
 *   selected to do the payment
 * @property {string} [payment_identifier] - Payment identifier of the payment
 *   mode selected to do the payment
 * @property {string} [id] - Cart id of the user cart
 */
/**
 * @typedef CouponValidity
 * @property {string} [title] - Coupon Title of the coupon applied
 * @property {boolean} [next_validation_required] - Flag for coupon validation
 *   required on next page or not
 * @property {boolean} [valid] - Valid flag which denotes if the applied coupon
 *   is valid or not
 * @property {string} [display_message_en] - Display message for coupon validity
 * @property {string} [code] - Coupon code of the coupon applied
 * @property {number} [discount] - Coupon discount value of the coupon applied
 * @property {string} [error_en] - Error message for the selected payment mode.
 */
/**
 * @typedef PaymentCouponValidate
 * @property {boolean} success - Success flag of coupon payment mode validity API response
 * @property {string} [message] - Payment mode valid message for coupon
 * @property {CouponValidity} [coupon_validity]
 */
/**
 * @typedef PaymentMeta
 * @property {string} [payment_gateway] - Payment gateway used to do the payment
 * @property {string} [type] - Type of card if payment mode is card to do the payment
 * @property {string} [payment_identifier] - Payment identifier of the payment
 *   mode selected to do the payment
 * @property {string} [merchant_code] - Merchant code of the payment mode
 *   selected to do the payment
 */
/**
 * @typedef PaymentMethod
 * @property {string} mode - Payment mode of payment method used to make payment
 * @property {string} [payment] - Payment name of payment method used to make payment
 * @property {PaymentMeta} payment_meta
 * @property {string} [payment_identifier]
 * @property {number} [amount] - Amount of the payment mode to be paid
 * @property {string} [name] - Name of the payment mode used to make payment
 * @property {Object} [payment_extra_identifiers] - Payment extra identifier for
 *   the payment mode to do the payment
 */
/**
 * @typedef PlatformCartCheckoutDetailV2Payload
 * @property {string} [address_id] - Address id of the user on which the order
 *   to be delivered
 * @property {string} [payment_identifier] - Payment identifier of the payment
 *   mode selected to do the payment
 * @property {Object} [payment_params] - Payment params which includes payment
 *   identifier and merchant code
 * @property {CartCheckoutCustomMeta[]} [custom_meta] - Custom meta data to be
 *   added in order
 * @property {boolean} [payment_auto_confirm] - Payment auto confirm flag if
 *   payment need not to be collected from user
 * @property {string} id - Cart id of the user cart
 * @property {boolean} [pos] - Filed to determine whether user is making request
 *   from pos or not
 * @property {string} [billing_address_id] - Billing address id of the customer
 *   on which the invoice to be generated after the order is placed
 * @property {string} [merchant_code] - Merchant code of the payment mode
 *   selected to do the payment
 * @property {string} [aggregator] - Aggregator name of the payment gateway
 * @property {number} [pick_at_store_uid] - Store id where we have to pick product
 * @property {string} [device_id] - Device id
 * @property {Object} [delivery_address] - Delivery address data which includes
 *   customer address, customer phone, customer email, customer pincode,
 *   customer landmark and customer name
 * @property {string} [payment_mode] - Payment mode from which the payment to be
 *   done for the order
 * @property {string} [checkout_mode] - Mode of checkout used in cart
 * @property {CustomerDetails} [customer_details]
 * @property {Object} [meta] - Meta data to be added in order
 * @property {PaymentMethod[]} payment_methods - Payment methods list used to
 *   make the payment
 * @property {StaffCheckout} [staff]
 * @property {string} [employee_code] - Employee code of staff who does checkout
 *   on behalf of customer
 * @property {Object} [billing_address] - Billing address json which includes
 *   customer address, customer phone, customer email, customer pincode,
 *   customer landmark and customer name
 * @property {string} [callback_url] - Callback url after payment received/failed
 * @property {string} [user_id]
 * @property {Object} [extra_meta] - Extra meta to be added while checkout in order
 * @property {string} order_type - Order type of the order being placed like
 *   pickAtStore or HomeDelivery
 * @property {Files[]} [files] - List of file url
 * @property {number} [ordering_store] - Ordering store id of the store from
 *   which the order is getting placed
 * @property {string} [iin] - Issuer Identification Number number of card if
 *   payment mode is card to do the payment
 * @property {string} [network] - Network of card if payment mode is card to do
 *   the payment
 * @property {string} [type] - Type of cart if payment mode is card to do the payment
 * @property {string} [card_id] - Saved card id if payment mode is card to do the payment
 */
/**
 * @typedef UpdateCartPaymentPayloadV2
 * @property {string} [address_id] - Address id of the user address selected to
 *   deliver the shipment
 * @property {string} [payment_mode] - Payment mode of the payment selected to
 *   do the payment
 * @property {string} [aggregator_name] - Aggregator name of the payment gateway
 * @property {string} [merchant_code] - Merchant code of the payment mode
 *   selected to do the payment
 * @property {string} [payment_identifier] - Payment identifier of the payment
 *   mode selected to do the payment
 * @property {string} [id] - Cart id of the user cart for which the update cart
 *   payment operation performed
 * @property {PaymentMethod[]} [payment_methods]
 */
/**
 * @typedef PriceMinMax
 * @property {number} [min] - Min price of article added in user cart
 * @property {number} [max] - Max price of article added in user cart
 */
/**
 * @typedef ItemPriceDetails
 * @property {PriceMinMax} [marked]
 * @property {PriceMinMax} [effective]
 * @property {string} [currency] - The currency code for price
 */
/**
 * @typedef ArticlePriceDetails
 * @property {number} [marked] - The Marked Price refers to the initial price of
 *   the free gift article before product discount.
 * @property {number} [effective] - The Effective Price refers to the final
 *   amount of the free gift article after applying the product discount.
 */
/**
 * @typedef FreeGiftItems
 * @property {string} [item_slug] - Free gift product slug
 * @property {string} [item_name] - Free gift product name
 * @property {ItemPriceDetails} [item_price_details]
 * @property {ArticlePriceDetails} [article_price]
 * @property {string} [item_brand_name] - Free gift product brand name
 * @property {number} [item_id] - Free gift product id
 * @property {string[]} [available_sizes] - Available sizes for the free gift item.
 * @property {string} [size] - Selected size for the free gift item.
 * @property {string[]} [item_images_url] - List of free gift product images URL
 */
/**
 * @typedef PromotionOffer
 * @property {string} [id] - Promotion unique identifier
 * @property {Object} [buy_rules] - Buy rules of promotions
 * @property {string} [offer_text] - Offer title of promotion that used to display
 * @property {string} [promotion_type] - Type of Promotion like percentage,
 *   amount, bogo etc.
 * @property {string} [promotion_name] - Name of the promotion
 * @property {string} [promotion_group] - Group of promotion belongs to
 * @property {string} [valid_till] - Datetime ISOString for promotion end date
 * @property {Object[]} [discount_rules] - Discount rules of promotions
 * @property {FreeGiftItems[]} [free_gift_items] - Details of free gift items
 * @property {string} [description] - Offer details including T&C
 * @property {boolean} [is_bank_offer] - Indicates whether the promotion is
 *   associated with a bank offer.
 */
/**
 * @typedef PromotionOffersResult
 * @property {PromotionOffer[]} [available_promotions] - List of available
 *   promotion for product
 */
/**
 * @typedef PromotionPaymentOffer
 * @property {string} [application_id] - Application id of the sales channel
 * @property {Object[]} [buy_rules] - Buy rules of promotions
 * @property {string} [calculate_on] - Price on which promotion calculated
 * @property {string} [description] - Offer details including T&C
 * @property {Object[]} [discount_rules] - Discount rules of promotions
 * @property {string} [id] - Promotion unique identifier
 * @property {string} [offer_text] - Offer title of promotion that used to display
 * @property {string} [promotion_group] - Group of promotion belongs to
 * @property {string} [promotion_type] - Type of Promotion like bogo, amount,
 *   percentage etc.
 * @property {string} [promotion_name] - Name of the promotion
 */
/**
 * @typedef PromotionPaymentOffersDetails
 * @property {boolean} [success] - Indicates if operation is successful or not.
 * @property {PromotionPaymentOffer[]} [promotions]
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
 * @typedef OperationErrorResult
 * @property {boolean} [success] - Whether the request was successful (true/false).
 * @property {string} [message] - Response message needs to display
 * @property {string} [error] - Response error message in detail
 */
/**
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
 */
declare class CartPlatformModel {
}
declare namespace CartPlatformModel {
    export { CouponDateMeta, Ownership, CouponAuthor, State, PaymentAllowValue, PaymentModes, PriceRange, PostOrder, BulkBundleRestriction, UsesRemaining, UsesRestriction, Restrictions, Validation, CouponAction, NextSchedule, CouponSchedule, Rule, DisplayMetaDict, DisplayMeta, Identifier, Validity, RuleDefinition, CouponAdd, Page, CouponObj, CouponsResult, CouponMedias, CouponDetailObj, CouponDetailResult, TagsViewResult, SuccessMessage, CartMetaConfigOperationErrorResult, CouponUpdate, CouponPartialUpdate, DisplayMeta1, CompareObject, ItemSizeMapping, ItemCriteria, DiscountOffer, DiscountRule, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, PostOrder1, UsesRemaining1, UsesRestriction1, Restrictions1, PromotionSchedule, PromotionAction, PromotionAuthor, Visibility, PromotionDateMeta, PromotionListItem, PromotionsResult, PromotionAdd, PromotionAddResult, PromotionUpdate, PromotionUpdateResult, PromoIndexedCriteria, PromotionPartialUpdate, ActivePromos, ActivePromosResult, Charges, DeliveryCharges, OrderPlacing, PanCard, CartMetaConfigUpdate, TimeStampIDResult, CartMetaConfigDetailResult, CartMetaConfigListResult, CartMetaConfigListObject, CartMetaConfigAddResult, CartMetaConfigAdd, Article, PriceAdjustmentRestrictions, Collection, PriceAdjustmentUpdate, PriceAdjustment, AddPriceAdjustmentResult, UpdatePriceAdjustmentResult, PriceAdjustmentResult, GetPriceAdjustmentResult, PriceAdjustmentAdd, DistributionRule, Distribution, DistributionLogic, CartItem, OpenapiCartDetailsPayload, CouponBreakup, DisplayBreakup, LoyaltyPoints, RawBreakup, CartBreakup, ProductImage, Tags, BaseInfo, ActionQuery, ProductActionParams, ProductActionPage, ProductAction, CategoryInfo, CartProduct, BasePrice, ArticleAppliedPriceAdjustment, ArticlePriceInfo, StoreInfo, ArticleGiftCard, ProductArticle, PromoDiscountRuleOffer, PromoDiscountRuleRawOffer, PromoDiscountRuleItemCriteria, DiscountRulesApp, AppliedFreeArticles, PromoBuyRuleCartConditions, PromoBuyRuleCompareFieldsTypes, BuyRules, AppliedPromotion, PromiseFormatted, PromiseISOFormat, PromiseTimestamp, ShipmentPromise, CouponDetails, ProductPrice, ProductPriceInfo, CartProductIdentifer, ProductAvailabilitySize, ProductAvailability, PromoMeta, ParentItemIdentifiers, CartItemMOQ, CartItemCustomOrder, CartProductInfo, DiscountMeta, PriceAdjustmentApplied, OpenapiCartDetailsResult, OpenApiErrorResult, ShippingAddress, OpenApiCartServiceabilityPayload, OpenApiCartServiceabilityResult, OpenApiFiles, CartItemMeta, MultiTenderPaymentMeta, MultiTenderPaymentMethod, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResult, AbandonedCart, AbandonedCartResult, PaymentSelectionLock, CartCurrency, CartCouponMedias, CartDetailCoupon, ChargesThreshold, DeliveryChargesConfig, CartCommonConfig, CartAppliedPriceAdjustment, CustomCart, CartDetailResult, AddProductCart, ArticleAssignment, AddCartPayload, AddCartDetailResult, UpdateProductCart, FreeGiftItemCreation, UpdateCartPayload, UpdateCartDetailResult, OverrideCartItemPromo, OverrideCartItem, OverrideCheckoutReq, OverrideCheckoutResult, GetShareCartLinkPayload, GetShareCartLinkResult, SharedCartDetails, SharedCart, SharedCartResult, CartList, MultiCartResult, UpdateUserCartMapping, UserCartMappingResult, CartMappingUserInfo, PlatformAddCartPayload, PlatformUpdateCartPayload, DeleteCartPayload, DeleteCartDetailResult, CartItemCountResult, Coupon, PageCoupon, GetCouponResult, ApplyCouponPayload, GeoLocation, PlatformAddress, AddressCustomJson, ValidationConfig, PlatformGetAddressesResult, SaveAddressResult, UpdateAddressResult, DeleteAddressResult, PlatformSelectCartAddressPayload, ShipmentArticle, ShipmentError, PlatformShipmentResult, ShipmentMeta, ShipmentMetaDimension, ShipmentLogisticsMeta, ShipmentLogisticsMetaAccount, ShipmentLogisticsMetaAccountAreaCode, ShipmentLogisticsMetaAccountDpTat, PlatformCartShipmentsResult, UpdateCartShipmentItem, UpdateCartShipmentPayload, PlatformCartMetaPayload, CartMetaResult, CartMetaMissingResult, CartMetaFieldsValidation, StaffCheckout, CustomerDetails, Files, CartCheckoutCustomMeta, PlatformCartCheckoutDetailPayload, CheckCart, CartCheckoutResult, CartDeliveryModesResult, PickupStoreDetail, StoreDetailsResult, UpdateCartPaymentPayload, CouponValidity, PaymentCouponValidate, PaymentMeta, PaymentMethod, PlatformCartCheckoutDetailV2Payload, UpdateCartPaymentPayloadV2, PriceMinMax, ItemPriceDetails, ArticlePriceDetails, FreeGiftItems, PromotionOffer, PromotionOffersResult, PromotionPaymentOffer, PromotionPaymentOffersDetails, CouponOptions, CouponOptionTypes, CouponOptionScopes, CouponOptionsApplicable, CouponOptionsValueTypes, CouponOptionsCalculate, CouponOptionsPayableCategory, CouponOptionsTxnMode, CouponOptionsPayableBy, SelectAddressResponseError, AllAddressForSelectAddress, OperationErrorResult, ValidationError };
}
/** @returns {CouponDateMeta} */
declare function CouponDateMeta(): CouponDateMeta;
type CouponDateMeta = {
    /**
     * - Date time format when the coupon last modified
     */
    modified_on?: string;
    /**
     * - Date time format when the coupon created
     */
    created_on?: string;
    /**
     * - Date time format when the coupon approved
     */
    approved_on?: string;
    /**
     * - Date time format when the coupon rejected
     */
    rejected_on?: string;
    /**
     * - Date time format when the coupon reviewed
     */
    reviewed_on?: string;
};
/** @returns {Ownership} */
declare function Ownership(): Ownership;
type Ownership = {
    /**
     * - Promotion amount payable category.
     */
    payable_category: string;
    /**
     * - Coupon amount bearable party
     */
    payable_by?: string;
};
/** @returns {CouponAuthor} */
declare function CouponAuthor(): CouponAuthor;
type CouponAuthor = {
    /**
     * - The user id of user, who has created the coupon
     */
    created_by?: string;
    /**
     * - The user id of user, who has modified the coupon
     */
    modified_by?: string;
    /**
     * - The user id of user, who has approved the coupon
     */
    approved_by?: string;
    /**
     * - The user id of user, who has rejected the coupon
     */
    rejected_by?: string;
    /**
     * - The user id of user, who has reviewed the coupon
     */
    reviewed_by?: string;
};
/** @returns {State} */
declare function State(): State;
type State = {
    /**
     * - Publish or unpublish the coupon
     */
    is_archived?: boolean;
    /**
     * - Coupon needs to display or not
     */
    is_display?: boolean;
    is_public?: boolean;
    is_active?: boolean;
};
/** @returns {PaymentAllowValue} */
declare function PaymentAllowValue(): PaymentAllowValue;
type PaymentAllowValue = {
    /**
     * - Maximum value need to allow for payment
     */
    max?: number;
};
/** @returns {PaymentModes} */
declare function PaymentModes(): PaymentModes;
type PaymentModes = {
    /**
     * - Identifier used by payment gateway for a given
     * payment mode, e.g. NB_ICIC, PAYTM
     */
    codes?: string[];
    /**
     * - Debit/Credit card prefix (first 6 digit)
     */
    iins?: string[];
    /**
     * - Card type, e.g. Credit, Debit
     */
    types?: string[];
    /**
     * - Credit/Debit card issuer, e.g. VISA,
     * MASTERCARD, RUPAY
     */
    networks?: string[];
    uses?: PaymentAllowValue;
};
/** @returns {PriceRange} */
declare function PriceRange(): PriceRange;
type PriceRange = {
    /**
     * - Max price valid for article in coupon
     */
    max?: number;
    /**
     * - Min price valid for article in coupon
     */
    min?: number;
};
/** @returns {PostOrder} */
declare function PostOrder(): PostOrder;
type PostOrder = {
    /**
     * - Cancellation allowed in coupon
     */
    cancellation_allowed?: boolean;
    /**
     * - Return allowed in coupon
     */
    return_allowed?: boolean;
};
/** @returns {BulkBundleRestriction} */
declare function BulkBundleRestriction(): BulkBundleRestriction;
type BulkBundleRestriction = {
    /**
     * - Multi store allowed in bulk bundle
     * coupon or not
     */
    multi_store_allowed: boolean;
};
/** @returns {UsesRemaining} */
declare function UsesRemaining(): UsesRemaining;
type UsesRemaining = {
    /**
     * - Define total coupon count per user
     */
    user?: number;
    /**
     * - Define total coupon counts
     */
    total?: number;
    /**
     * - Define coupon counts associated with application id
     */
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
    /**
     * - List of platform on which coupon allowed
     * like web, android
     */
    platforms?: string[];
    post_order?: PostOrder;
    bulk_bundle?: BulkBundleRestriction;
    /**
     * - List of user group on which coupon allowed
     */
    user_groups?: number[];
    /**
     * - Allow applying normal coupon if bulk
     * coupon is applied
     */
    coupon_allowed?: boolean;
    uses?: UsesRestriction;
    /**
     * - List of store id on which coupon allowed
     */
    ordering_stores?: number[];
};
/** @returns {Validation} */
declare function Validation(): Validation;
type Validation = {
    /**
     * - List of sales channel's application id
     */
    app_id?: string[];
    /**
     * - Coupon applicable for guest user or not
     */
    anonymous?: boolean;
    /**
     * - Coupon applicable for user which
     * is registered after Date Format
     */
    user_registered_after?: string;
};
/** @returns {CouponAction} */
declare function CouponAction(): CouponAction;
type CouponAction = {
    /**
     * - Coupon transaction mode's date time format
     */
    action_date?: string;
    /**
     * - Coupon transaction mode like cash, coupon etc
     */
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
    /**
     * - List of date time, which we will
     * schedule the promotion
     */
    next_schedule?: NextSchedule[];
    /**
     * - Schedule the cron to run your job periodically
     */
    cron?: string;
    /**
     * - Coupon status like draft, review
     */
    status?: string;
    /**
     * - Time in minutes for execution
     */
    duration?: number;
};
/** @returns {Rule} */
declare function Rule(): Rule;
type Rule = {
    /**
     * - Key defines the number of product should be buy
     * for applicability of cart
     */
    key?: number;
    /**
     * - Value defines discount percentage in coupon
     */
    value?: number;
    /**
     * - Max defines maximum number of discount amount in coupon
     */
    max?: number;
    /**
     * - Discount_qty defines free quantity as
     * discount in coupon
     */
    discount_qty?: number;
    /**
     * - Min defines minimum number of discount amount in coupon
     */
    min?: number;
};
/** @returns {DisplayMetaDict} */
declare function DisplayMetaDict(): DisplayMetaDict;
type DisplayMetaDict = {
    /**
     * - Coupon title which is used to display
     */
    title?: string;
    /**
     * - Coupon sub title which is used to display
     */
    subtitle?: string;
};
/** @returns {DisplayMeta} */
declare function DisplayMeta(): DisplayMeta;
type DisplayMeta = {
    /**
     * - Coupon title which is used to display
     */
    title?: string;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    /**
     * - Coupon sub title which is used to display
     */
    subtitle?: string;
    /**
     * - Detail about the offers in coupon
     */
    description?: string;
};
/** @returns {Identifier} */
declare function Identifier(): Identifier;
type Identifier = {
    /**
     * - List of brand id available for coupon
     */
    brand_id?: number[];
    /**
     * - List of email domain available for coupon
     */
    email_domain?: string[];
    /**
     * - List of company id available for coupon
     */
    company_id?: number[];
    /**
     * - List of store id available for coupon
     */
    store_id?: number[];
    /**
     * - List of collection id available for coupon
     */
    collection_id?: string[];
    /**
     * - List of item id available for coupon
     */
    item_id?: number[];
    /**
     * - List of user id available for coupon
     */
    user_id?: string[];
    /**
     * - List of category id available for coupon
     */
    category_id?: number[];
    /**
     * - List of article id available for coupon
     */
    article_id?: string[];
    /**
     * - List of brand id should not be
     * available for coupon
     */
    exclude_brand_id?: number[];
};
/** @returns {Validity} */
declare function Validity(): Validity;
type Validity = {
    /**
     * - Priority of coupon to show in list
     */
    priority?: number;
};
/** @returns {RuleDefinition} */
declare function RuleDefinition(): RuleDefinition;
type RuleDefinition = {
    /**
     * - Currency code like INR
     */
    currency_code?: string;
    /**
     * - Coupon should be auto apply or not
     */
    auto_apply?: boolean;
    /**
     * - Type of coupon like absolute, percentage etc.
     */
    type: string;
    /**
     * - Flag is true then use coupon applicable
     * articles for calculation
     */
    is_exact?: boolean;
    /**
     * - Coupon will be applicable on either amount
     * or quantity
     */
    applicable_on: string;
    /**
     * - Article Price on which coupon calculated
     * like effective price or marked price
     */
    calculate_on?: string;
    /**
     * - Define the type of coupon value
     */
    value_type?: string;
    /**
     * - List of item level rule applicable for coupon
     */
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
    /**
     * - The type of coupon like bulk or single
     */
    coupon_type?: string;
    /**
     * - Bulk coupon code prefix string
     */
    coupon_prefix?: string;
    /**
     * - Counts of bulk coupon
     */
    coupon_counts?: number;
    /**
     * - List of tags specify to platform
     */
    tags?: string[];
    _schedule?: CouponSchedule;
    rule: Rule[];
    display_meta: DisplayMeta;
    /**
     * - Unique code of coupon
     */
    code: string;
    /**
     * - The type slug of coupon discount
     */
    type_slug: string;
    identifiers: Identifier;
    validity: Validity;
    rule_definition: RuleDefinition;
    /**
     * - Unique identifier of coupon
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
/** @returns {CouponsResult} */
declare function CouponsResult(): CouponsResult;
type CouponsResult = {
    /**
     * - Coupons list for sales channel
     */
    items?: CouponObj[];
    page?: Page;
    success?: boolean;
    draft?: number;
    review?: number;
    rejected?: number;
    approved?: number;
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
    coupon_type?: string;
    coupon_prefix?: string;
    coupon_counts?: number;
};
/** @returns {CouponDetailResult} */
declare function CouponDetailResult(): CouponDetailResult;
type CouponDetailResult = {
    success?: boolean;
    message?: string;
    data?: CouponDetailObj;
};
/** @returns {TagsViewResult} */
declare function TagsViewResult(): TagsViewResult;
type TagsViewResult = {
    success?: boolean;
    items?: string[];
};
/** @returns {SuccessMessage} */
declare function SuccessMessage(): SuccessMessage;
type SuccessMessage = {
    /**
     * - Whether the request was successful (true/false).
     */
    success?: boolean;
    message?: string;
};
/** @returns {CartMetaConfigOperationErrorResult} */
declare function CartMetaConfigOperationErrorResult(): CartMetaConfigOperationErrorResult;
type CartMetaConfigOperationErrorResult = {
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
    /**
     * - List of tags specify to platform
     */
    tags?: string[];
    _schedule?: CouponSchedule;
    rule: Rule[];
    display_meta: DisplayMeta;
    /**
     * - Unique code that is used to apply coupon
     */
    code: string;
    /**
     * - The type of coupon like bulk or single
     */
    coupon_type?: string;
    /**
     * - Bulk coupon code prefix string
     */
    coupon_prefix?: string;
    /**
     * - Counts of culk coupon
     */
    coupon_counts?: number;
    /**
     * - Coupon rejection reason added by reviewer
     */
    reason?: string;
    /**
     * - The type slug of coupon discount
     */
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
    /**
     * - Define details about the offer in promotion
     */
    description?: string;
    /**
     * - Offer label of promotion that needs to display
     */
    offer_label?: string;
    /**
     * - Name of promotion that needs to display
     */
    name?: string;
    offer_text?: string;
};
/** @returns {CompareObject} */
declare function CompareObject(): CompareObject;
type CompareObject = {
    /**
     * - Nummeric value must be equal to cart level rules
     */
    equals?: number;
    /**
     * - Nummeric value must be greater than cart
     * level rules
     */
    greater_than?: number;
    /**
     * - Nummeric value must be less than or
     * equal to cart level rules
     */
    less_than_equals?: number;
    /**
     * - Nummeric value must be less than cart level rules
     */
    less_than?: number;
    /**
     * - Nummeric value must be greater
     * than or equal to cart level rules
     */
    greater_than_equals?: number;
};
/** @returns {ItemSizeMapping} */
declare function ItemSizeMapping(): ItemSizeMapping;
type ItemSizeMapping = {
    /**
     * - Item size mapping in promotion
     */
    item_size_mapping?: any;
};
/** @returns {ItemCriteria} */
declare function ItemCriteria(): ItemCriteria;
type ItemCriteria = {
    cart_quantity?: CompareObject;
    /**
     * - List of all zones on which promotion
     * is applicable
     */
    available_zones?: string[];
    /**
     * - List of all company id on which
     * promotion is not applicable
     */
    item_exclude_company?: number[];
    /**
     * - List of all item ids on which promotion is applicable
     */
    item_id?: number[];
    /**
     * - List of all L1 category on which
     * promotion is applicable
     */
    item_l1_category?: number[];
    cart_total?: CompareObject;
    cart_unique_item_quantity?: CompareObject;
    cart_unique_item_amount?: CompareObject;
    /**
     * - List of all item ids on which
     * promotion is not applicable
     */
    item_exclude_id?: number[];
    /**
     * - Boolean flag set true to applicable the
     * promotion for all products
     */
    all_items?: boolean;
    /**
     * - List of all item ids on
     * which promotion is not applicable
     */
    item_exclude_l1_category?: number[];
    /**
     * - List of all item sizes on which promotion
     * is applicable
     */
    item_size?: string[];
    /**
     * - List of all item store ids on which
     * promotion is applicable
     */
    item_store?: number[];
    /**
     * - List of all item sku on which
     * promotion is not applicable
     */
    item_exclude_sku?: string[];
    /**
     * - List of all departments ids on which
     * promotion is applicable
     */
    item_department?: number[];
    /**
     * - List of all item store ids on
     * which promotion is not applicable
     */
    item_exclude_store?: number[];
    /**
     * - List of all brand ids on which promotion
     * is applicable
     */
    item_brand?: number[];
    /**
     * - List of all department ids
     * on which promotion is not applicable
     */
    item_exclude_department?: number[];
    /**
     * - List of all L3 category on
     * which promotion is not applicable
     */
    item_exclude_category?: number[];
    /**
     * - List of all L3 category on which
     * promotion is applicable
     */
    item_category?: number[];
    buy_rules?: string[];
    /**
     * - List of all brand ids on which
     * promotion is not applicable
     */
    item_exclude_brand?: number[];
    /**
     * - List of all L2 category on which
     * promotion is applicable
     */
    item_l2_category?: number[];
    /**
     * - List of all company ids on which
     * promotion is applicable
     */
    item_company?: number[];
    /**
     * - List of all product tags on which
     * promotion is applicable
     */
    item_tags?: string[];
    /**
     * - List of all L2 category on
     * which promotion is not applicable
     */
    item_exclude_l2_category?: number[];
    /**
     * - List of all item sku on which promotion is applicable
     */
    item_sku?: string[];
};
/** @returns {DiscountOffer} */
declare function DiscountOffer(): DiscountOffer;
type DiscountOffer = {
    /**
     * - Maximum discount amount in promotion
     */
    max_discount_amount?: number;
    /**
     * - Discount price in promotion
     */
    discount_price?: number;
    /**
     * - Flag to distribute discount for each article
     */
    apportion_discount?: boolean;
    /**
     * - Flag indicated return the product partially
     */
    partial_can_ret?: boolean;
    /**
     * - Maximum usage per
     * transaction in promotion
     */
    max_usage_per_transaction?: number;
    /**
     * - Minimum quantity of offer in promotion
     */
    min_offer_quantity?: number;
    /**
     * - Unique code of promotion
     */
    code?: string;
    /**
     * - Discount amount in promotion
     */
    discount_amount?: number;
    /**
     * - Discount percentage in promotion
     */
    discount_percentage?: number;
    /**
     * - Maximum quantity of product in promotion
     */
    max_offer_quantity?: number;
};
/** @returns {DiscountRule} */
declare function DiscountRule(): DiscountRule;
type DiscountRule = {
    /**
     * - The type of discount in promotion
     */
    discount_type: string;
    /**
     * - Promotion buy rules in offer level
     */
    buy_condition: string;
    item_criteria: ItemCriteria;
    meta?: ItemSizeMapping;
    offer: DiscountOffer;
};
/** @returns {PaymentAllowValue1} */
declare function PaymentAllowValue1(): PaymentAllowValue1;
type PaymentAllowValue1 = {
    /**
     * - Maximum value need to allow for payment in promotion
     */
    max?: number;
};
/** @returns {PromotionPaymentModes} */
declare function PromotionPaymentModes(): PromotionPaymentModes;
type PromotionPaymentModes = {
    /**
     * - Define the type of payment
     */
    type?: string;
    uses?: PaymentAllowValue1;
    /**
     * - List of codes associated with payment options
     */
    codes?: string[];
};
/** @returns {UserRegistered} */
declare function UserRegistered(): UserRegistered;
type UserRegistered = {
    /**
     * - End date time format till the user is registerd
     */
    end?: string;
    /**
     * - Start date time format when user is registerd
     */
    start?: string;
};
/** @returns {PostOrder1} */
declare function PostOrder1(): PostOrder1;
type PostOrder1 = {
    /**
     * - Cancellation allowed in
     * promotion after order
     */
    cancellation_allowed?: boolean;
    /**
     * - Return allowed in promotion after order
     */
    return_allowed?: boolean;
};
/** @returns {UsesRemaining1} */
declare function UsesRemaining1(): UsesRemaining1;
type UsesRemaining1 = {
    /**
     * - Define total promotion count per user
     */
    user?: number;
    /**
     * - Define total promotions count
     */
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
    payments?: PaymentModes;
    user_registered?: UserRegistered;
    /**
     * - List of platform on which promotion is
     * applicable like android, ios
     */
    platforms?: string[];
    post_order?: PostOrder1;
    /**
     * - List of user groups on which promotion
     * is applicable
     */
    user_groups?: number[];
    /**
     * - Prmomotion max order count
     */
    order_quantity?: number;
    /**
     * - Set true, if promotion is applicable
     * for guest user
     */
    anonymous_users?: boolean;
    /**
     * - List of user id on which promotion is applicable
     */
    user_id?: string[];
    uses: UsesRestriction1;
    /**
     * - List of store id on which promotion
     * is applicable
     */
    ordering_stores?: number[];
    /**
     * - User type for which promotion is applicable
     */
    user_type?: string;
};
/** @returns {PromotionSchedule} */
declare function PromotionSchedule(): PromotionSchedule;
type PromotionSchedule = {
    /**
     * - Then end date of promotion till valid
     */
    end: string;
    /**
     * - Then start date of promotion is valid
     */
    start: string;
    /**
     * - Promotion status like draft, review
     */
    status?: string;
    /**
     * - The status of promotion is published or not
     */
    published: boolean;
    /**
     * - List of date time, which we will
     * schedule the promotion
     */
    next_schedule?: NextSchedule[];
    /**
     * - Schedule the cron to run your job periodically
     */
    cron?: string;
    /**
     * - Time in minutes for execution
     */
    duration?: number;
};
/** @returns {PromotionAction} */
declare function PromotionAction(): PromotionAction;
type PromotionAction = {
    /**
     * - Date time format in promotion
     */
    action_date?: string;
    /**
     * - The action type of promotion
     */
    action_type?: string;
};
/** @returns {PromotionAuthor} */
declare function PromotionAuthor(): PromotionAuthor;
type PromotionAuthor = {
    /**
     * - The user id of user, who has created the promotion
     */
    created_by?: string;
    /**
     * - The user id of user, who has modified the promotion
     */
    modified_by?: string;
    /**
     * - The user id of user, who has approved the promotion
     */
    approved_by?: string;
    /**
     * - The user id of user, who has rejected the promotion
     */
    rejected_by?: string;
    /**
     * - The user id of user, who has reviewed the promotion
     */
    reviewed_by?: string;
};
/** @returns {Visibility} */
declare function Visibility(): Visibility;
type Visibility = {
    /**
     * - Flag to show promotion on Coupon list
     */
    coupon_list?: boolean;
    /**
     * - Flag to show promotion on PDP page
     */
    pdp?: boolean;
};
/** @returns {PromotionDateMeta} */
declare function PromotionDateMeta(): PromotionDateMeta;
type PromotionDateMeta = {
    /**
     * - Date time format when the promotion last modified
     */
    modified_on?: string;
    /**
     * - Date time format when the promotion created
     */
    created_on?: string;
    /**
     * - Date time format when the promotion approved
     */
    approved_on?: string;
    /**
     * - Date time format when the promotion rejected
     */
    rejected_on?: string;
    /**
     * - Date time format when the promotion reviewed
     */
    reviewed_on?: string;
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
     * - Article Price on which promotion
     * calculated like effective price or marked price. Only available for
     * Contract pricing and Ladder pricing promotion type
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
    /**
     * - Unique code of promotion
     */
    code?: string;
    /**
     * - List of tags on which promotion is applicable
     */
    tags?: string[];
};
/** @returns {PromotionsResult} */
declare function PromotionsResult(): PromotionsResult;
type PromotionsResult = {
    /**
     * - List of promotions
     */
    items?: PromotionListItem[];
    page?: Page;
    /**
     * - Number of promotion in draft.
     */
    draft?: number;
    /**
     * - Number of promotion in review.
     */
    review?: number;
    /**
     * - Number of promotion in rejected.
     */
    rejected?: number;
    /**
     * - Number of promotion in approved.
     */
    approved?: number;
};
/** @returns {PromotionAdd} */
declare function PromotionAdd(): PromotionAdd;
type PromotionAdd = {
    /**
     * - Boolean value set true to apply other promotions also
     */
    stackable?: boolean;
    /**
     * - Only available for Contract pricing and
     * Ladder pricing promotion type
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
     * - True means to apply all discount offers
     */
    apply_all_discount?: boolean;
    display_meta: DisplayMeta1;
    ownership: Ownership;
    /**
     * - Type of promotion
     */
    promotion_type: string;
    /**
     * - List of discount offers and their
     * applicable conditions
     */
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    /**
     * - Currency used for promotion
     */
    currency?: string;
    /**
     * - Flag to verify if promotion is ready to
     * be applied on cart and ready to update promotion
     */
    is_processed?: boolean;
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
     * - Application id in which promotion will be used
     */
    application_id: string;
    /**
     * - Buy rule condition.
     */
    buy_rules: any;
    /**
     * - Custom data stored in promotion
     */
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    /**
     * - Stores all rules data
     * into one for queying purpose
     */
    indexed_criteria?: PromoIndexedCriteria[];
    /**
     * - List of tags on which promotion is applicable
     */
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
    /**
     * - Buy rule condition.
     */
    buy_rules?: any;
    /**
     * - Set extra properties in promotion
     */
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    /**
     * - Stores all rules data
     * into one for queying purpose
     */
    indexed_criteria?: PromoIndexedCriteria[];
    /**
     * - List of tags applicable for promotion
     */
    tags?: string[];
    /**
     * - Unique idenfier of promotion.
     */
    _id?: string;
    /**
     * - Flag to verify if promotion is archived or not.
     */
    is_archived?: boolean;
    /**
     * - Flag to verify if promotion is bank offer or not.
     */
    is_bank_offer?: boolean;
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
    /**
     * - Buy rule condition.
     */
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
    /**
     * - Buy rule condition.
     */
    buy_rules?: any;
    /**
     * - Set extra properties in promotion
     */
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    /**
     * - Stores all rules data
     * into one for queying purpose
     */
    indexed_criteria?: PromoIndexedCriteria[];
    /**
     * - List of tags applicable for promotion
     */
    tags?: string[];
    /**
     * - Auto generated id of specific promotion
     */
    _id?: string;
    /**
     * - Flag to verify if promotion is archived or not.
     */
    is_archived?: boolean;
    /**
     * - Flag to verify if promotion is bank offer or not.
     */
    is_bank_offer?: boolean;
};
/** @returns {PromoIndexedCriteria} */
declare function PromoIndexedCriteria(): PromoIndexedCriteria;
type PromoIndexedCriteria = {
    /**
     * - Condition check for articled key for promotion.
     */
    key?: string;
    /**
     * - Condition check for articled key for promotion.
     */
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
    /**
     * - A short, human-readable, URL-friendly
     * identifier of Promotion or coupon
     */
    entity_slug?: string;
    /**
     * - Name of the promotion or coupon
     */
    title?: string;
    /**
     * - Coupon or promotion modification date
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
     * - Coupon or modification creation date
     */
    created_on?: string;
    /**
     * - If the promo is active or not
     */
    is_hidden?: boolean;
    /**
     * - Coupon or promotion type
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
/** @returns {ActivePromosResult} */
declare function ActivePromosResult(): ActivePromosResult;
type ActivePromosResult = {
    status?: string;
    items?: ActivePromos[];
};
/** @returns {Charges} */
declare function Charges(): Charges;
type Charges = {
    /**
     * - Delivery chanrges applied on the product of cart
     */
    charges?: number;
    /**
     * - Threshold of cart value on which the charge
     * should be applied
     */
    threshold?: number;
};
/** @returns {DeliveryCharges} */
declare function DeliveryCharges(): DeliveryCharges;
type DeliveryCharges = {
    /**
     * - List of delivery changes information of the cart
     */
    charges?: Charges[];
    /**
     * - Enable or disable delivery charge on cart
     */
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
    /**
     * - Minimum order value to checkout
     */
    min_cart_value?: number;
    /**
     * - Maximum order value to checkout
     */
    max_cart_value?: number;
    /**
     * - Indicates bulk coupon applicable for cart
     */
    bulk_coupons?: boolean;
    /**
     * - Maximum cart items to checkout
     */
    max_cart_items?: number;
    /**
     * - Free gift charges text to show
     */
    gift_display_text?: string;
    delivery_charges?: DeliveryCharges;
    international_delivery_charges?: DeliveryCharges;
    /**
     * - It define credit coupon
     * applicable for cart
     */
    revenue_engine_coupon?: boolean;
    /**
     * - Free gift charges per product
     */
    gift_pricing?: number;
    enabled?: boolean;
    app_id?: string;
    is_active?: boolean;
    slug?: string;
    is_universal?: boolean;
    company_id?: number;
    updated_on?: string;
    created_on?: string;
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
/** @returns {TimeStampIDResult} */
declare function TimeStampIDResult(): TimeStampIDResult;
type TimeStampIDResult = {
    id?: string;
    app_id?: string;
    company_id?: number;
    created_on?: string;
    updated_on?: string;
    last_modified_by?: string;
};
/** @returns {CartMetaConfigDetailResult} */
declare function CartMetaConfigDetailResult(): CartMetaConfigDetailResult;
type CartMetaConfigDetailResult = {
    success?: boolean;
    data?: CartMetaConfigUpdate;
};
/** @returns {CartMetaConfigListResult} */
declare function CartMetaConfigListResult(): CartMetaConfigListResult;
type CartMetaConfigListResult = {
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
/** @returns {CartMetaConfigAddResult} */
declare function CartMetaConfigAddResult(): CartMetaConfigAddResult;
type CartMetaConfigAddResult = {
    success?: boolean;
    data?: CartMetaConfigAdd;
};
/** @returns {CartMetaConfigAdd} */
declare function CartMetaConfigAdd(): CartMetaConfigAdd;
type CartMetaConfigAdd = {
    /**
     * - Minimum order value to checkout
     */
    min_cart_value?: number;
    /**
     * - Maximum order value to checkout
     */
    max_cart_value?: number;
    /**
     * - Indicates bulk coupon applicable for cart
     */
    bulk_coupons?: boolean;
    /**
     * - Maximum cart items to checkout
     */
    max_cart_items?: number;
    /**
     * - Free gift charges text to show
     */
    gift_display_text?: string;
    delivery_charges?: DeliveryCharges;
    international_delivery_charges?: DeliveryCharges;
    /**
     * - It define credit coupon
     * applicable for cart
     */
    revenue_engine_coupon?: boolean;
    /**
     * - Free gift charges per product
     */
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
     * - Unique identifier of article
     */
    article_id: string;
    /**
     * - Total quantity of the article to be
     * considered (currently used only in discount type)
     */
    quantity?: number;
    /**
     * - Meta data related to article
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
    /**
     * - Bearable party who is refunding the amount
     */
    refund_by: string;
    /**
     * - The party who is collecting the amount
     */
    collected_by: string;
};
/** @returns {PriceAdjustmentUpdate} */
declare function PriceAdjustmentUpdate(): PriceAdjustmentUpdate;
type PriceAdjustmentUpdate = {
    /**
     * - The entity that modified the field
     */
    modified_by?: string;
    /**
     * - The amount applied on the cart
     */
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
     * - Type of price adjusment like charge, mop, discount etc.
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
    /**
     * - Additional information regarding price adjustment
     */
    meta?: any;
    /**
     * - The ID of the cart
     */
    cart_id: string;
    distribution_logic?: DistributionLogic;
};
/** @returns {PriceAdjustment} */
declare function PriceAdjustment(): PriceAdjustment;
type PriceAdjustment = {
    /**
     * - The amount applied on the cart
     */
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
     * - This field specifies
     * the restrictions for this item or service, such as whether cancellation and
     * return are permitted, except for `charge` type.
     */
    restrictions?: PriceAdjustmentRestrictions;
    /**
     * - Flag indicating whether the
     * distribution should is done at the article level
     */
    article_level_distribution: boolean;
    /**
     * - Unique identifier of Price adjustment
     */
    id?: string;
    collection: Collection;
    /**
     * - Type of price adjusment like charge, discount, mop etc.
     */
    type: string;
    /**
     * - Flag indicating whether refunds are
     * allowed (default: False) expect for `charge` type
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
     * - Additional information regarding price adjustment
     */
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
    expire_at?: string;
    distribution_logic?: DistributionLogic;
};
/** @returns {AddPriceAdjustmentResult} */
declare function AddPriceAdjustmentResult(): AddPriceAdjustmentResult;
type AddPriceAdjustmentResult = {
    data?: PriceAdjustment;
    success?: boolean;
};
/** @returns {UpdatePriceAdjustmentResult} */
declare function UpdatePriceAdjustmentResult(): UpdatePriceAdjustmentResult;
type UpdatePriceAdjustmentResult = {
    data?: PriceAdjustment;
    success?: boolean;
};
/** @returns {PriceAdjustmentResult} */
declare function PriceAdjustmentResult(): PriceAdjustmentResult;
type PriceAdjustmentResult = {
    data?: PriceAdjustment[];
    success?: boolean;
    price_adjustments?: PriceAdjustment[];
};
/** @returns {GetPriceAdjustmentResult} */
declare function GetPriceAdjustmentResult(): GetPriceAdjustmentResult;
type GetPriceAdjustmentResult = {
    data?: PriceAdjustment[];
};
/** @returns {PriceAdjustmentAdd} */
declare function PriceAdjustmentAdd(): PriceAdjustmentAdd;
type PriceAdjustmentAdd = {
    /**
     * - The amount applied on the cart
     */
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
    /**
     * - Additional information regarding price adjustment
     */
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
    distribution_logic?: DistributionLogic;
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
    rule?: DistributionRule;
};
/** @returns {DistributionLogic} */
declare function DistributionLogic(): DistributionLogic;
type DistributionLogic = {
    /**
     * - This field defines the distribution
     * level, currently allowed distribution level is (shipment)
     */
    distribution_level?: string;
    distribution?: Distribution;
};
/** @returns {CartItem} */
declare function CartItem(): CartItem;
type CartItem = {
    /**
     * - Quantity of product in cart
     */
    quantity?: number;
    /**
     * - Unique identifier of product in cart
     */
    product_id: string;
    /**
     * - Size of product in cart
     */
    size: string;
};
/** @returns {OpenapiCartDetailsPayload} */
declare function OpenapiCartDetailsPayload(): OpenapiCartDetailsPayload;
type OpenapiCartDetailsPayload = {
    /**
     * - List of products in cart
     */
    cart_items: CartItem[];
};
/** @returns {CouponBreakup} */
declare function CouponBreakup(): CouponBreakup;
type CouponBreakup = {
    /**
     * - Coupon Title of the coupon applied denotes name
     * of the coupon
     */
    title?: string;
    /**
     * - Maximum discount value of the
     * coupon applied to cart
     */
    max_discount_value?: number;
    /**
     * - Coupon value of the coupon applied to cart
     */
    value?: number;
    /**
     * - Applied flag which denotes if any coupon
     * is applied to cart
     */
    is_applied?: boolean;
    /**
     * - Unique identifier of the coupon applied to cart
     */
    uid?: string;
    /**
     * - Type of the coupon applied to cart
     */
    coupon_type?: string;
    /**
     * - Coupon subtitle of the coupon applied to
     * cart which is used to display
     */
    sub_title?: string;
    /**
     * - Value of the coupon applied to cart
     */
    coupon_value?: number;
    /**
     * - Coupon code of the coupon applied
     */
    code?: string;
    /**
     * - Type of the coupon applied to cart
     */
    type?: string;
    /**
     * - Minimum cart value of the coupon
     * applied to cart
     */
    minimum_cart_value?: number;
    /**
     * - Coupon message of the coupon applied to cart
     */
    message?: string;
    /**
     * - Coupon description of the coupon applied to cart.
     */
    description?: string;
};
/** @returns {DisplayBreakup} */
declare function DisplayBreakup(): DisplayBreakup;
type DisplayBreakup = {
    /**
     * - Key of the price like total_mrp, total, subtotal etc
     */
    key?: string;
    /**
     * - Numeric value for the price
     */
    value?: number;
    /**
     * - Currency code for the price
     */
    currency_code?: string;
    /**
     * - Currency symbol for the price
     */
    currency_symbol?: string;
    /**
     * - Display key field that to be shown against the value
     */
    display?: string;
    /**
     * - List of message at price level to be displayed
     */
    message?: string[];
    original?: number;
    attr?: string;
    meta?: any;
};
/** @returns {LoyaltyPoints} */
declare function LoyaltyPoints(): LoyaltyPoints;
type LoyaltyPoints = {
    /**
     * - Whether the loyalty points are applied on the cart
     */
    is_applied?: boolean;
    /**
     * - Total loyalty points available with user
     */
    total?: number;
    /**
     * - Whether the loyalty points are applicable
     * for the cart
     */
    applicable?: number;
    /**
     * - Description for loyalty points
     */
    description?: string;
    /**
     * - Description for loyalty points
     */
    message?: string;
};
/** @returns {RawBreakup} */
declare function RawBreakup(): RawBreakup;
type RawBreakup = {
    /**
     * - Promotion amount applied to cart
     */
    promotion?: number;
    /**
     * - Coupon amount applied to cart
     */
    coupon?: number;
    /**
     * - GST charges applied on cart
     */
    gst_charges?: number;
    /**
     * - Maximum price total amount of all products in cart
     */
    mrp_total?: number;
    /**
     * - Loyalty points applied on cart
     */
    fynd_cash?: number;
    /**
     * - Total value of goods after all discount, coupons
     * and promotion applied of all products in cart
     */
    vog?: number;
    /**
     * - Gift cart amount applied on cart
     */
    gift_card?: number;
    /**
     * - Cod charge value applied to cart. This is
     * applied when user select payment mode as COD
     */
    cod_charge?: number;
    /**
     * - Total payable amount by the customer
     */
    total?: number;
    /**
     * - Discount amount recieved on cart
     */
    discount?: number;
    /**
     * - Delivery charge applied to cart
     */
    delivery_charge?: number;
    /**
     * - Total amount will be saved if customer
     * places the order
     */
    you_saved?: number;
    /**
     * - Coupon amount applied to cart
     */
    subtotal?: number;
    /**
     * - Selling price amount of all products in cart
     */
    sub_total?: number;
    convenience_fee?: number;
    total_charge?: number;
    mop_total?: number;
};
/** @returns {CartBreakup} */
declare function CartBreakup(): CartBreakup;
type CartBreakup = {
    coupon?: CouponBreakup;
    /**
     * - List of breakup data which is used
     * to display the breakup to the customer like MRP total, Discount, Sub total,
     * coupon value, promotion value and final total
     */
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
};
/** @returns {ProductImage} */
declare function ProductImage(): ProductImage;
type ProductImage = {
    /**
     * - Secured url of the product image
     */
    secure_url?: string;
    /**
     * - Bucket link url for product image
     */
    url?: string;
    /**
     * - Aspect ratio of the product image
     */
    aspect_ratio?: string;
};
/** @returns {Tags} */
declare function Tags(): Tags;
type Tags = {
    /**
     * - Tags is a lable or batch that is attached to a
     * product in cart
     */
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
     * - Name of entities like brand or seller
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
/** @returns {ProductActionParams} */
declare function ProductActionParams(): ProductActionParams;
type ProductActionParams = {
    /**
     * - Unique product url name generated via product
     * name and other meta data.
     */
    slug?: string[];
};
/** @returns {ProductActionPage} */
declare function ProductActionPage(): ProductActionPage;
type ProductActionPage = {
    /**
     * - Entity of page to be redirected on click
     */
    type?: string;
    params?: ProductActionParams;
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
    page?: ProductActionPage;
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
    /**
     * - Product Images urls of different types
     * like secure url, aspect ration url and url
     */
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
     * - Field to add custom json of the product in cart
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
};
/** @returns {BasePrice} */
declare function BasePrice(): BasePrice;
type BasePrice = {
    /**
     * - Current per unit price of product after
     * existing deductions
     */
    effective?: number;
    /**
     * - Currency code for all amounts
     */
    currency_code?: string;
    /**
     * - Currency symbol of the currncy used for price
     */
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
     * is fulfileld
     */
    uid?: number;
    /**
     * - Store name of the store from where the product is fulfiled
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
     * - Quantity of the article added in cart
     */
    quantity?: number;
    seller?: BaseInfo;
    /**
     * - Meta details of the article added from cart
     */
    cart_item_meta?: any;
    /**
     * - Fields to determine parent
     * product of the product
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
     * - Unique identifier of the article
     */
    identifier?: any;
    /**
     * - Quantity of the product which will
     * specially manufactured as not available in stock.
     */
    mto_quantity?: number;
    /**
     * - Field to update extra meta of the article in cart
     */
    extra_meta?: any;
    /**
     * - Type of the data sent in response. Possible value
     * is article.
     */
    type?: string;
    /**
     * - Field to update custom json of the article in cart
     */
    _custom_json?: any;
    price?: ArticlePriceInfo;
    /**
     * - Meta data of article in cart
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
     * - Free article quantity in promotion
     */
    quantity?: number;
    /**
     * - Unique identifier of free article
     */
    article_id?: string;
    /**
     * - Free gift items details
     * in promotion
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
     * - Per unit discount amount with decimal
     * values applied with current promotion.
     */
    float_amount?: string;
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
     * - Promotion unique identifier
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
    /**
     * - Maximum Delivery promise formatted timestamp
     */
    max?: string;
    /**
     * - Minimum Delivery promise formatted timestamp
     */
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
    /**
     * - Maximum Promise for the shipment
     */
    max?: number;
    /**
     * - Minimum delivery promise time for the shipment
     */
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
    /**
     * - Total discount earned from
     * coupon applied to cart
     */
    discount_total_quantity?: number;
    /**
     * - Discout amount applied from
     * coupon for single quantity of the product
     */
    discount_single_quantity?: number;
    /**
     * - Coupon code of the coupon applied
     */
    code?: string;
};
/** @returns {ProductPrice} */
declare function ProductPrice(): ProductPrice;
type ProductPrice = {
    /**
     * - Maximum price of the product
     */
    marked?: number;
    /**
     * - Price before promotion and coupon amount
     * applied for calculation
     */
    add_on?: number;
    /**
     * - Currency code of the price defined for the product
     */
    currency_code?: string;
    /**
     * - Currency symbol of the price defined
     * for the product
     */
    currency_symbol?: string;
    /**
     * - Selling price of the product
     */
    effective?: number;
    selling?: number;
    /**
     * - Selling price of the product
     */
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
    /**
     * - Display size of the product
     */
    display?: string;
    /**
     * - Actual value of the size
     */
    value?: string;
    /**
     * - Available flag for the size of the
     * product if that is available
     */
    is_available?: boolean;
};
/** @returns {ProductAvailability} */
declare function ProductAvailability(): ProductAvailability;
type ProductAvailability = {
    /**
     * - Valid flag for the product if the product
     * added in cart is valid to place the order
     */
    is_valid?: boolean;
    /**
     * - Quantity of the product available
     * on other store
     */
    other_store_quantity?: number;
    /**
     * - Deliverable flag denotes if the product
     * is deliverable or not
     */
    deliverable?: boolean;
    /**
     * - Product sizes availability
     */
    available_sizes?: ProductAvailabilitySize[];
    /**
     * - Denotes if the product is available in stock
     */
    out_of_stock?: boolean;
    /**
     * - All sizes of the product
     */
    sizes?: string[];
};
/** @returns {PromoMeta} */
declare function PromoMeta(): PromoMeta;
type PromoMeta = {
    /**
     * - Loyalty points message denotes how much
     * loyalty points and applied and how much left with the user
     */
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
    /**
     * - Quantity of the product added in cart
     */
    quantity?: number;
    product?: CartProduct;
    /**
     * - European Article Number of the product
     * (limited upto 50 EAN identifier in a single request).
     */
    product_ean_id?: string;
    /**
     * - Parent item information of the
     * product which identifies the parent of the product in cart
     */
    parent_item_identifiers?: any;
    /**
     * - Whether or not the product is a set of items
     */
    is_set?: boolean;
    article?: ProductArticle;
    /**
     * - List of applicable
     * promotion for the product in cart
     */
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
/** @returns {OpenapiCartDetailsResult} */
declare function OpenapiCartDetailsResult(): OpenapiCartDetailsResult;
type OpenapiCartDetailsResult = {
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
    /**
     * - Items
     * details in cart
     */
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
/** @returns {OpenApiErrorResult} */
declare function OpenApiErrorResult(): OpenApiErrorResult;
type OpenApiErrorResult = {
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
    /**
     * - Country of address
     */
    country?: string;
    /**
     * - State of the address
     */
    state?: string;
    /**
     * - City of the address
     */
    city?: string;
    /**
     * - Phone number for address
     */
    phone?: number;
    /**
     * - Area code of the address
     */
    area_code: string;
    /**
     * - Country iso code for address
     */
    country_iso_code?: string;
    /**
     * - Country phone code for address
     */
    country_phone_code?: string;
    /**
     * - Metadata of the address
     */
    meta?: any;
    /**
     * - Address type of address
     */
    address_type?: string;
    /**
     * - Area description for address
     */
    area?: string;
    /**
     * - Area code slug for address. example
     * pincode is slug for India
     */
    area_code_slug?: string;
    /**
     * - Name of person in address data to whom it belongs to
     */
    name?: string;
    /**
     * - Landmark of address
     */
    landmark?: string;
    /**
     * - Email address for address data
     */
    email?: string;
    /**
     * - Country code of address
     */
    country_code?: string;
    /**
     * - Pincode for address data
     */
    pincode?: number;
    /**
     * - Address description for address data
     */
    address?: string;
};
/** @returns {OpenApiCartServiceabilityPayload} */
declare function OpenApiCartServiceabilityPayload(): OpenApiCartServiceabilityPayload;
type OpenApiCartServiceabilityPayload = {
    /**
     * - List of items in open api cart response
     */
    cart_items: CartItem[];
    shipping_address: ShippingAddress;
};
/** @returns {OpenApiCartServiceabilityResult} */
declare function OpenApiCartServiceabilityResult(): OpenApiCartServiceabilityResult;
type OpenApiCartServiceabilityResult = {
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
    /**
     * - Key represents name of file
     */
    key: string;
    /**
     * - List of urls path
     */
    values: string[];
};
/** @returns {CartItemMeta} */
declare function CartItemMeta(): CartItemMeta;
type CartItemMeta = {
    /**
     * - Flags indicates item is primary or not
     */
    primary_item?: boolean;
    /**
     * - Fields to determine group id of the product
     */
    group_id?: string;
};
/** @returns {MultiTenderPaymentMeta} */
declare function MultiTenderPaymentMeta(): MultiTenderPaymentMeta;
type MultiTenderPaymentMeta = {
    /**
     * - Payment gateway identifier
     */
    payment_id?: string;
    /**
     * - Payment gateway used to do the payment
     */
    payment_gateway?: string;
    /**
     * - Payment extra meta for the payment mode to
     * do the payment
     */
    extra_meta?: any;
    /**
     * - Current status of the payment
     */
    current_status?: string;
    /**
     * - Payment gateway order id
     */
    order_id?: string;
};
/** @returns {MultiTenderPaymentMethod} */
declare function MultiTenderPaymentMethod(): MultiTenderPaymentMethod;
type MultiTenderPaymentMethod = {
    /**
     * - Payment mode of payment method used to make payment
     */
    mode: string;
    /**
     * - Amount of the payment mode to be paid
     */
    amount: number;
    meta?: MultiTenderPaymentMeta;
    /**
     * - Name of the payment mode used to make payment
     */
    name?: string;
};
/** @returns {OpenApiOrderItem} */
declare function OpenApiOrderItem(): OpenApiOrderItem;
type OpenApiOrderItem = {
    /**
     * - Cashback applied on user cart
     */
    cashback_applied: number;
    /**
     * - Article quantity in user cart
     */
    quantity?: number;
    /**
     * - Size of the article added in cart
     */
    size: string;
    /**
     * - Coupon discount applied on
     * article in user cart
     */
    coupon_effective_discount: number;
    /**
     * - Amount needs to paid for article in cart
     */
    amount_paid: number;
    /**
     * - Delivery charges applied on article in cart
     */
    delivery_charges: number;
    /**
     * - Original price of product
     */
    price_marked: number;
    /**
     * - List of file url
     */
    files?: OpenApiFiles[];
    meta?: CartItemMeta;
    /**
     * - Extra meta of the article in cart
     */
    extra_meta?: any;
    /**
     * - Product id associated with article in cart
     */
    product_id: number;
    /**
     * - Loyalty points applied on cart
     */
    loyalty_discount?: number;
    /**
     * - Discount value applied on article in cart
     */
    discount: number;
    /**
     * - Current per unit price of product after
     * existing deductions
     */
    price_effective: number;
    /**
     * - Payment methods list
     * used to make the payment
     */
    payment_methods: MultiTenderPaymentMethod[];
    /**
     * - Employee discount value applied on
     * article in cart
     */
    employee_discount?: number;
    /**
     * - Cash On Delivery charges applied on article in cart
     */
    cod_charges: number;
};
/** @returns {OpenApiPlatformCheckoutReq} */
declare function OpenApiPlatformCheckoutReq(): OpenApiPlatformCheckoutReq;
type OpenApiPlatformCheckoutReq = {
    /**
     * - Payment mode from which the payment to be
     * done for the order
     */
    payment_mode?: string;
    /**
     * - Total amount of user cart
     */
    cart_value: number;
    /**
     * - List of items in user cart
     */
    cart_items: OpenApiOrderItem[];
    shipping_address?: ShippingAddress;
    /**
     * - Loyalty points applied on cart
     */
    loyalty_discount?: number;
    /**
     * - Comment message added in cart after order placed
     */
    comment?: string;
    /**
     * - Payment methods list
     * used to make the payment
     */
    payment_methods: MultiTenderPaymentMethod[];
    /**
     * - Employee discount value applied on user cart
     */
    employee_discount?: any;
    /**
     * - Coupon text of coupon applied on user cart
     */
    coupon?: string;
    /**
     * - Cashback applied on user cart
     */
    cashback_applied: number;
    /**
     * - GSTIN number added in cart
     */
    gstin?: string;
    billing_address: ShippingAddress;
    /**
     * - Coupon code to be applied to cart
     */
    coupon_code: string;
    /**
     * - Value of the coupon applied to cart
     */
    coupon_value: number;
    /**
     * - Delivery charges of the order placed
     * via checkout API
     */
    delivery_charges: number;
    /**
     * - Order id generated after placing order
     */
    affiliate_order_id?: string;
    /**
     * - Currency code for the price
     */
    currency_code?: string;
    /**
     * - Order id generated after placing order
     */
    order_id?: string;
    /**
     * - List of file url
     */
    files?: OpenApiFiles[];
    /**
     * - Cash On Delivery charges of the user cart
     */
    cod_charges: number;
    platform_order_id?: string;
    extra_meta?: any;
};
/** @returns {OpenApiCheckoutResult} */
declare function OpenApiCheckoutResult(): OpenApiCheckoutResult;
type OpenApiCheckoutResult = {
    /**
     * - The request success is defined
     */
    success?: boolean;
    /**
     * - Message of the api response
     */
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
    /**
     * - Expire details of user cart
     */
    expire_at: string;
    /**
     * - Promotion object details like amount, mode,
     * currency and list of promotions in user cart
     */
    promotion?: any;
    /**
     * - User cart default status
     */
    is_default: boolean;
    /**
     * - Comment message to be added in user cart
     */
    comment?: string;
    /**
     * - List of articles in user cart
     */
    articles: any[];
    /**
     * - Coupon data of user cart which denotes if
     * coupon is applied, coupon code, coupon amount, coupon title and coupon message
     */
    coupon?: any;
    /**
     * - Total bulk discount amount
     * applied in user cart
     */
    bulk_coupon_discount?: number;
    /**
     * - Unique identifier of the user cart
     */
    _id: string;
    /**
     * - Fynd credit points applied in user cart
     */
    fynd_credits?: any;
    /**
     * - Flat article index in user cart
     */
    fc_index_map?: number[];
    /**
     * - Order id generated in user cart
     */
    order_id?: string;
    /**
     * - Discount amount of the product in cart
     */
    discount?: number;
    /**
     * - Cash On Delivery charges of the user cart
     */
    cod_charges?: any;
    /**
     * - Payment object selected in user cart
     */
    payments?: any;
    /**
     * - Payment mode of the payment selected to
     * do the payment
     */
    payment_mode?: string;
    /**
     * - Shipment details for the items in a cart,
     * specific to the selected address.
     */
    shipments?: any[];
    /**
     * - Customer contact details for
     * customer pickup at store
     */
    pick_up_customer_details?: any;
    /**
     * - Unique Identifier of user cart
     */
    uid: number;
    /**
     * - Checkout mode of user cart
     */
    checkout_mode?: string;
    /**
     * - Total amount of user cart
     */
    cart_value?: number;
    /**
     * - Flag to indicate cart is archived or not
     */
    is_archive?: boolean;
    /**
     * - Date time format when user cart created
     */
    created_on: string;
    /**
     * - Date time format when user cart last modified
     */
    last_modified: string;
    /**
     * - Extra meta data of user cart
     */
    meta?: any;
    /**
     * - Buy now flag for the cart which denotes user
     * is doing fast checkout for the cart using buy now
     */
    buy_now?: boolean;
    /**
     * - Flag indicates user cart is active or not
     */
    is_active?: boolean;
    /**
     * - Cart level cashback data which denotes cashback
     * amount and cashback message
     */
    cashback: any;
    /**
     * - Payment methods list used to make the payment
     */
    payment_methods?: any[];
    /**
     * - GSTIN added in user cart
     */
    gstin?: string;
    /**
     * - Delivery charges of user cart
     */
    delivery_charges?: any;
    /**
     * - Flag indicates cart has merged article or not
     */
    merge_qty?: boolean;
    /**
     * - User Id of user cart
     */
    user_id: string;
    /**
     * - Application id of user cart
     */
    app_id?: string;
};
/** @returns {AbandonedCartResult} */
declare function AbandonedCartResult(): AbandonedCartResult;
type AbandonedCartResult = {
    /**
     * - List of items in abandon cart
     */
    items?: AbandonedCart[];
    /**
     * - Define the list of items with updated status
     */
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
    /**
     * - Identifier for Payment Mode
     */
    payment_identifier?: string;
    /**
     * - Default Selection Payment Mode
     */
    default_options?: string;
    /**
     * - Denotes if default payment selection is enable
     */
    enabled?: boolean;
};
/** @returns {CartCurrency} */
declare function CartCurrency(): CartCurrency;
type CartCurrency = {
    /**
     * - Currency code defined by ISO 4217:2015
     */
    code?: string;
    /**
     * - Currency symbol for currency of user cart prices
     */
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
    /**
     * - Fields denotes cashback amount applied to cart
     */
    cashback_amount?: number;
    /**
     * - Primary cashback message for
     * coupon applied to cart
     */
    cashback_message_primary?: string;
    /**
     * - Secondary cashback message
     * for coupon applied to cart
     */
    cashback_message_secondary?: string;
    /**
     * - Coupon code to be applied to cart
     */
    coupon_code?: string;
    /**
     * - Coupon description of the coupon
     * applied to cart
     */
    coupon_description?: string;
    /**
     * - Unique identifier of the coupon applied to cart
     */
    coupon_id?: string;
    /**
     * - Coupon subtitle of the coupon applied to cart
     */
    coupon_subtitle?: string;
    /**
     * - Coupon title of the coupon applied
     */
    coupon_title?: string;
    /**
     * - Type of the coupon applied to cart
     */
    coupon_type?: string;
    /**
     * - Value of the coupon applied to cart
     */
    coupon_value?: number;
    /**
     * - Total discount earned from coupon applied to cart
     */
    discount?: number;
    is_applied?: boolean;
    /**
     * - Determine where the coupon applied to cart is valid
     */
    is_valid?: boolean;
    /**
     * - Maximum discount value of the
     * coupon applied to cart
     */
    maximum_discount_value?: number;
    /**
     * - Coupon message of the coupon applied to cart
     */
    message?: string;
    minimum_cart_value?: number;
    medias?: CartCouponMedias[];
};
/** @returns {ChargesThreshold} */
declare function ChargesThreshold(): ChargesThreshold;
type ChargesThreshold = {
    /**
     * - Charges amount to be applied on cart
     */
    charges?: number;
    /**
     * - Threshold of cart value on which the charge
     * should be applied
     */
    threshold?: number;
};
/** @returns {DeliveryChargesConfig} */
declare function DeliveryChargesConfig(): DeliveryChargesConfig;
type DeliveryChargesConfig = {
    /**
     * - Delivery charge enabled for the cart or not
     */
    enabled?: boolean;
    /**
     * - Charges applicable based on threshold
     */
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
/** @returns {CartDetailResult} */
declare function CartDetailResult(): CartDetailResult;
type CartDetailResult = {
    /**
     * - Unique identifier of the user cart.
     */
    cart_id?: number;
    /**
     * - Unique identifier of the user cart
     */
    uid?: string;
    /**
     * - Coupon text of coupon applied on cart
     */
    coupon_text?: string;
    /**
     * - Unique identifier of the user cart
     */
    id?: string;
    /**
     * - Pan card config states at what condition
     * user should enter the pan card
     */
    pan_config?: any;
    delivery_promise?: ShipmentPromise;
    /**
     * - Comment message to be added in user cart
     */
    comment?: string;
    /**
     * - Items data list in user cart that
     * includes item id, item size, store id, available sizes and rest of the item
     * related data
     */
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    /**
     * - Delivery charge in information
     * message on shipment
     */
    delivery_charge_info?: string;
    common_config?: CartCommonConfig;
    coupon?: CartDetailCoupon;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process
     */
    restrict_checkout?: boolean;
    /**
     * - Message of the cart detail API response
     */
    message?: string;
    /**
     * - Notification object which denotes
     * notification data for user cart
     */
    notification?: any;
    /**
     * - Staff employee user id if cart is
     * created by staff employee for the customer
     */
    staff_user_id?: string;
    /**
     * - Success flag of get cart detail API response
     */
    success?: boolean;
    breakup_values?: CartBreakup;
    /**
     * - Cart validity flag determines the if the
     * response is valid or not
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
     * text, description, buy rules, discount rules and promotion type
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
    /**
     * - Field to specify the product quantity that
     * user wants to buy
     */
    quantity?: number;
    /**
     * - Field to determine size of the product
     */
    item_size?: string;
    /**
     * - Unique identifier of the seller selected by
     * the user from which user want to buy a product
     */
    seller_id?: number;
    /**
     * - Fields to determine parent
     * product of the product
     */
    parent_item_identifiers?: any[];
    price_factory_type_id?: string;
    /**
     * - Field to specify the product
     * groups of the product that the user is trying to add in cart
     */
    product_group_tags?: string[];
    /**
     * - Unique identifier of an article
     */
    article_id?: string;
    article_assignment?: ArticleAssignment;
    /**
     * - Unique identifier of the store selected by
     * the user from which user want to buy a product
     */
    store_id?: number;
    /**
     * - Display field at article level
     */
    display?: string;
    /**
     * - Unique identifier to identify product
     */
    item_id?: number;
    /**
     * - Extra meta data to be added at article
     * level while add items to cart
     */
    extra_meta?: any;
    /**
     * - Field to add custom json at article level
     * while add items to cart
     */
    _custom_json?: any;
    /**
     * - Field to add meta data at article level
     */
    meta?: any;
    /**
     * - Filed to determine whether user is making request
     * from pos or not
     */
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
/** @returns {AddCartPayload} */
declare function AddCartPayload(): AddCartPayload;
type AddCartPayload = {
    /**
     * - Field to create to new cart whille user adds
     * item to cart
     */
    new_cart?: boolean;
    /**
     * - List of items detail which need to be
     * added to cart like item id, item size, and item quantity
     */
    items?: AddProductCart[];
};
/** @returns {AddCartDetailResult} */
declare function AddCartDetailResult(): AddCartDetailResult;
type AddCartDetailResult = {
    /**
     * - True if all items are added successfully.
     * False if partially added or not added.
     */
    success?: boolean;
    cart?: CartDetailResult;
    /**
     * - When adding multiple items check if all
     * added. True if only few are added.
     */
    partial?: boolean;
    /**
     * - Message of add cart API response
     */
    message?: string;
    result?: any;
};
/** @returns {UpdateProductCart} */
declare function UpdateProductCart(): UpdateProductCart;
type UpdateProductCart = {
    /**
     * - Field to update the quantity of the item in cart
     */
    quantity?: number;
    /**
     * - Field to update the size of the product in cart
     */
    item_size?: string;
    /**
     * - Field to update parent product
     * of the item in cart
     */
    parent_item_identifiers?: any;
    /**
     * - Field to update meta of the item in cart
     */
    meta?: any;
    /**
     * - Field to update extra meta of the product in cart
     */
    extra_meta?: any;
    /**
     * - Field to update custom json of the product in cart
     */
    _custom_json?: any;
    price_factory_type_id?: string;
    /**
     * - Item id of the product that needs to be updated
     */
    item_id?: number;
    /**
     * - Item index determines on which index the
     * product falls to be updated
     */
    item_index?: number;
    identifiers: CartProductIdentifer;
    /**
     * - Article id of the product in cart
     */
    article_id?: string;
};
/** @returns {FreeGiftItemCreation} */
declare function FreeGiftItemCreation(): FreeGiftItemCreation;
type FreeGiftItemCreation = {
    /**
     * - Unique identifier of the free gift promotion.
     */
    promotion_id: string;
    /**
     * - Unique identifier of the selected free gift item.
     */
    item_id: string;
    /**
     * - Size of the selected free gift item.
     */
    item_size: string;
};
/** @returns {UpdateCartPayload} */
declare function UpdateCartPayload(): UpdateCartPayload;
type UpdateCartPayload = {
    items?: UpdateProductCart[];
    /**
     * - List of free gift
     * items with updated sizes.
     */
    free_gift_items?: FreeGiftItemCreation[];
    /**
     * - Cart opertaion type
     */
    operation: string;
};
/** @returns {UpdateCartDetailResult} */
declare function UpdateCartDetailResult(): UpdateCartDetailResult;
type UpdateCartDetailResult = {
    /**
     * - True if all items are added successfully.
     * False if partially added or not added.
     */
    success?: boolean;
    cart?: CartDetailResult;
    /**
     * - Message of update cart API response
     */
    message?: string;
    result?: any;
};
/** @returns {OverrideCartItemPromo} */
declare function OverrideCartItemPromo(): OverrideCartItemPromo;
type OverrideCartItemPromo = {
    restrictions?: any;
    /**
     * - Promotion id applied on product
     */
    promo_id: string;
    /**
     * - Promotion amount applied on product
     */
    promo_amount: string;
    /**
     * - Promotion description applied on product
     */
    promo_desc?: string;
    rwrd_tndr?: string;
    /**
     * - List of items
     */
    item_list?: any[];
    /**
     * - Parent promotion unique identifier
     */
    parent_promo_id?: string;
};
/** @returns {OverrideCartItem} */
declare function OverrideCartItem(): OverrideCartItem;
type OverrideCartItem = {
    /**
     * - Seller identifiers of the product size.
     */
    seller_identifier?: string;
    /**
     * - Item quantity, which you have added into cart
     */
    quantity?: number;
    /**
     * - Item size, which you have added into cart
     */
    size: string;
    /**
     * - Original price of product
     */
    price_marked: number;
    /**
     * - Amount needs to paid for item
     */
    amount_paid: number;
    /**
     * - List of promotion applied on item
     */
    promo_list?: OverrideCartItemPromo[];
    /**
     * - Extra meta to be added while checkout in order
     */
    extra_meta?: any;
    /**
     * - Item unique id in user cart
     */
    item_id: number;
    /**
     * - Discount amount applied on item
     */
    discount: number;
    /**
     * - Current per unit price of product after
     * existing deductions
     */
    price_effective: number;
};
/** @returns {OverrideCheckoutReq} */
declare function OverrideCheckoutReq(): OverrideCheckoutReq;
type OverrideCheckoutReq = {
    /**
     * - The cart id of user cart
     */
    cart_id: string;
    /**
     * - Payment mode from which the payment to be
     * done for the order
     */
    payment_mode: string;
    /**
     * - Billing address json which includes
     * customer address, customer phone, customer email, customer pincode,
     * customer landmark and customer name
     */
    billing_address?: any;
    /**
     * - Merchant code of the payment mode selected
     * to do the payment
     */
    merchant_code: string;
    /**
     * - Payment identifier of the payment
     * mode selected to do the payment
     */
    payment_identifier: string;
    /**
     * - Currency code for the price
     */
    currency_code: string;
    /**
     * - Aggregator name of the payment gateway
     */
    aggregator: string;
    /**
     * - Order type of the order being placed like
     * pickAtStore or HomeDelivery
     */
    order_type: string;
    /**
     * - Callback url to be redirected after
     * payment received/failed
     */
    callback_url?: string;
    /**
     * - List of items which includes
     * their size, id, discount and promo details
     */
    cart_items: OverrideCartItem[];
    /**
     * - Ordering store id of the store from
     * which the order is getting placed
     */
    ordering_store?: number;
    /**
     * - Shipping address json which includes
     * name, area, address, phone, area_code, state, country, country code and email
     */
    shipping_address?: any;
};
/** @returns {OverrideCheckoutResult} */
declare function OverrideCheckoutResult(): OverrideCheckoutResult;
type OverrideCheckoutResult = {
    /**
     * - Data of the user cart checkout includes cart data,
     * address, user id, order type etc
     */
    data: any;
    /**
     * - Cart details in API response which included cart
     * id, items in cart, promise, order type, breakup values etc.
     */
    cart: any;
    success: boolean;
    /**
     * - Order id generated after placing order
     */
    order_id: string;
    /**
     * - Message of the cart override checkout API response
     */
    message: string;
    /**
     * - App intercept url which is used to
     * redirect on app after payment in confirmed/failed
     */
    app_intercept_url?: string;
    /**
     * - Callback url to be redirected after
     * payment received/failed
     */
    callback_url?: string;
    /**
     * - Payment confirm url used to
     * redirect after payment is confirmed
     */
    payment_confirm_url?: string;
};
/** @returns {GetShareCartLinkPayload} */
declare function GetShareCartLinkPayload(): GetShareCartLinkPayload;
type GetShareCartLinkPayload = {
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
/** @returns {GetShareCartLinkResult} */
declare function GetShareCartLinkResult(): GetShareCartLinkResult;
type GetShareCartLinkResult = {
    /**
     * - Short url unique id of the cart which is opted
     * to share with other user
     */
    token?: string;
    /**
     * - Short shareable final url which can populate
     * shared cart items in one's cart or replaced one's cart with shared cart items
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
     * - Short link id of the user cart that needs to be shared
     */
    token?: string;
    /**
     * - Created on timestamp of user cart
     */
    created_on?: string;
    /**
     * - Ordering store id of the store from
     * which the order is getting placed.
     */
    ordering_store?: number;
    /**
     * - Staff id of the person from store for
     * which the order is getting placed.
     */
    selected_staff?: string;
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
     * - Comment message added in user cart
     */
    comment?: string;
    /**
     * - Items data list in user cart that
     * includes item id, item size, store id, available sizes and rest of the item
     * related data
     */
    items?: CartProductInfo[];
    shared_cart_details?: SharedCartDetails;
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
     * the checkout process
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
     * - Valid flag for get shared cart detail API
     */
    is_valid?: boolean;
    /**
     * - Cart id of the user cart
     */
    uid?: string;
    /**
     * - Checkout mode of address on which
     * address to be used for which checkout mode of cart
     */
    checkout_mode?: string;
    currency?: CartCurrency;
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
/** @returns {SharedCartResult} */
declare function SharedCartResult(): SharedCartResult;
type SharedCartResult = {
    cart?: SharedCart;
    /**
     * - Error details if any error occurs which includes
     * type of error, error code and error message
     */
    error?: string;
};
/** @returns {CartList} */
declare function CartList(): CartList;
type CartList = {
    /**
     * - The cart id of user
     */
    cart_id?: string;
    /**
     * - Customer contact details for
     * customer pickup at store
     */
    pick_up_customer_details?: any;
    /**
     * - Total amount of cart
     */
    cart_value?: number;
    /**
     * - Date format when cart created
     */
    created_on?: string;
    /**
     * - User id which is associated with cart
     */
    user_id?: string;
    /**
     * - Active cart currency code
     */
    currency_code?: string;
    /**
     * - Article total count in cart
     */
    item_counts?: number;
};
/** @returns {MultiCartResult} */
declare function MultiCartResult(): MultiCartResult;
type MultiCartResult = {
    /**
     * - True if get list of cart successfully.
     */
    success?: boolean;
    /**
     * - List of active carts and their item's count
     */
    data?: CartList[];
};
/** @returns {UpdateUserCartMapping} */
declare function UpdateUserCartMapping(): UpdateUserCartMapping;
type UpdateUserCartMapping = {
    /**
     * - User Id of user for which we map with the cart
     */
    user_id: string;
};
/** @returns {UserCartMappingResult} */
declare function UserCartMappingResult(): UserCartMappingResult;
type UserCartMappingResult = {
    is_valid?: boolean;
    message?: string;
    success?: boolean;
    cart?: CartDetailResult;
    user?: CartMappingUserInfo;
};
/** @returns {CartMappingUserInfo} */
declare function CartMappingUserInfo(): CartMappingUserInfo;
type CartMappingUserInfo = {
    /**
     * - Unique Identifier of user
     */
    _id?: string;
    uid?: string;
    first_name?: string;
    last_name?: string;
    mobile?: string;
    email?: string;
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
/** @returns {PlatformAddCartPayload} */
declare function PlatformAddCartPayload(): PlatformAddCartPayload;
type PlatformAddCartPayload = {
    /**
     * - The user id of user, for which we need to add
     * item into cart
     */
    user_id?: string;
    /**
     * - Field to create to new cart whille user adds
     * item to cart
     */
    new_cart?: boolean;
    /**
     * - List of items detail which need to be
     * added to cart like item id, item size, and item quantity
     */
    items?: AddProductCart[];
};
/** @returns {PlatformUpdateCartPayload} */
declare function PlatformUpdateCartPayload(): PlatformUpdateCartPayload;
type PlatformUpdateCartPayload = {
    /**
     * - The user id of user, for which we need to
     * update the cart
     */
    user_id?: string;
    /**
     * - List items data that needs to be
     * updated in cart
     */
    items?: UpdateProductCart[];
    /**
     * - List of free gift
     * items with updated sizes.
     */
    free_gift_items?: FreeGiftItemCreation[];
    /**
     * - Field to determine if item to be removed from
     * cart or it needs to be updated
     */
    operation: string;
};
/** @returns {DeleteCartPayload} */
declare function DeleteCartPayload(): DeleteCartPayload;
type DeleteCartPayload = {
    /**
     * - List of all cart ids, which need to delete
     */
    cart_id_list?: string[];
};
/** @returns {DeleteCartDetailResult} */
declare function DeleteCartDetailResult(): DeleteCartDetailResult;
type DeleteCartDetailResult = {
    /**
     * - True if cart is archived successfully. False
     * if not archived.
     */
    success?: boolean;
    message?: string;
};
/** @returns {CartItemCountResult} */
declare function CartItemCountResult(): CartItemCountResult;
type CartItemCountResult = {
    /**
     * - Item count present in cart
     */
    user_cart_items_count?: number;
};
/** @returns {Coupon} */
declare function Coupon(): Coupon;
type Coupon = {
    /**
     * - Coupon Title of the coupon applied denotes name
     * of the coupon
     */
    title?: string;
    /**
     * - Maximum discount value of the
     * coupon applied to cart
     */
    max_discount_value?: number;
    /**
     * - Coupon code of the coupon applied on cart
     */
    coupon_code?: string;
    /**
     * - Flag to determine where the coupon is
     * applied to cart or not
     */
    is_applied?: boolean;
    /**
     * - Type of the coupon applied to cart
     */
    coupon_type?: string;
    /**
     * - Message to display to user for expiry of the coupon
     */
    expires_on?: string;
    /**
     * - Coupon value of the coupon applied to cart
     */
    coupon_value?: number;
    /**
     * - Coupon subtitle of the coupon applied to
     * cart which is used to display
     */
    sub_title?: string;
    /**
     * - Minimum cart value of the coupon
     * applied to cart
     */
    minimum_cart_value?: number;
    /**
     * - Flag to determine where the coupon is
     * applicable to cart or not
     */
    is_applicable?: boolean;
    /**
     * - Coupon message of the coupon applied to cart
     */
    message?: string;
    /**
     * - Coupon description of the coupon applied to cart
     */
    description?: string;
    /**
     * - Start date of the coupon when the coupon
     * will be live for the users to apply on cart
     */
    start_date?: string;
    /**
     * - End date of the coupon on which the coupon expires
     */
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
    /**
     * - Denotes if next page of coupon is available
     */
    has_next?: boolean;
    /**
     * - Current page number
     */
    current?: number;
    /**
     * - Total pages of coupon availalbe
     */
    total?: number;
    /**
     * - Total coupons are available for the cart
     */
    total_item_count?: number;
    has_previous?: boolean;
};
/** @returns {GetCouponResult} */
declare function GetCouponResult(): GetCouponResult;
type GetCouponResult = {
    /**
     * - List of available coupon which
     * can be applied on cart
     */
    available_coupon_list?: Coupon[];
    page?: PageCoupon;
};
/** @returns {ApplyCouponPayload} */
declare function ApplyCouponPayload(): ApplyCouponPayload;
type ApplyCouponPayload = {
    /**
     * - Coupon code to be applied
     */
    coupon_code: string;
};
/** @returns {GeoLocation} */
declare function GeoLocation(): GeoLocation;
type GeoLocation = {
    /**
     * - Longitude coordinate for address
     */
    longitude?: number;
    /**
     * - Latitude coordinate for address
     */
    latitude?: number;
};
/** @returns {PlatformAddress} */
declare function PlatformAddress(): PlatformAddress;
type PlatformAddress = {
    /**
     * - Pincode of address.
     */
    pincode?: number;
    /**
     * - Phone number for address
     */
    phone?: string;
    /**
     * - Id of the address
     */
    id?: string;
    /**
     * - Area code slug for address. example
     * pincode is slug for India
     */
    area_code_slug?: string;
    /**
     * - Country code of address
     */
    country_code?: string;
    geo_location?: GeoLocation;
    /**
     * - Country of address
     */
    country?: string;
    /**
     * - State of the address
     */
    state?: string;
    /**
     * - Default address flag if no address
     * selected then this should be the default address selected
     */
    is_default_address?: boolean;
    /**
     * - Tags of address from which it can be identified
     */
    tags?: string[];
    /**
     * - Created by user id of address
     */
    created_by_user_id?: string;
    /**
     * - Landmark of address
     */
    landmark?: string;
    /**
     * - Email address for address data
     */
    email?: string;
    /**
     * - Area code of the address
     */
    area_code?: string;
    /**
     * - Checkout mode of address on which
     * address to be used for which checkout mode of cart
     */
    checkout_mode?: string;
    /**
     * - Metadata of the address
     */
    meta?: any;
    /**
     * - States whether address is active or not
     */
    is_active?: boolean;
    /**
     * - Name of person in address data to whom it belongs to
     */
    name?: string;
    /**
     * - Google map point of the address
     */
    google_map_point?: any;
    /**
     * - The cart id of user cart
     */
    cart_id?: string;
    /**
     * - City of the address
     */
    city?: string;
    /**
     * - Sector of the address
     */
    sector?: string;
    /**
     * - State code for international address
     */
    state_code?: string;
    /**
     * - Area description for address
     */
    area?: string;
    /**
     * - User id of address for which address is created
     */
    user_id?: string;
    /**
     * - Address type of address
     */
    address_type?: string;
    /**
     * - Address description for address data
     */
    address?: string;
    /**
     * - Country phone code for address
     */
    country_phone_code?: string;
    /**
     * - Country iso code for address
     */
    country_iso_code?: string;
    _custom_json?: AddressCustomJson;
    uid?: number;
    is_anonymous?: boolean;
    app_id?: string;
    expire_at?: string;
    /**
     * - Uid of the address.
     */
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
/** @returns {PlatformGetAddressesResult} */
declare function PlatformGetAddressesResult(): PlatformGetAddressesResult;
type PlatformGetAddressesResult = {
    /**
     * - List of all address saved by customer
     */
    address?: PlatformAddress[];
    pii_masking?: boolean;
    validation_config?: ValidationConfig;
};
/** @returns {SaveAddressResult} */
declare function SaveAddressResult(): SaveAddressResult;
type SaveAddressResult = {
    /**
     * - Id of the address
     */
    id?: string;
    /**
     * - Success flag of save address Response
     */
    success?: boolean;
    /**
     * - Default address flag if no address
     * selected then this should be the default address selected
     */
    is_default_address?: boolean;
    /**
     * - Unique Identifier of the address
     */
    address_id?: any;
};
/** @returns {UpdateAddressResult} */
declare function UpdateAddressResult(): UpdateAddressResult;
type UpdateAddressResult = {
    /**
     * - ID of an address
     */
    id?: string;
    /**
     * - Default address flag if no address
     * selected then this should be the default address selected
     */
    is_default_address?: boolean;
    /**
     * - Success flag of update address response
     */
    success?: boolean;
    /**
     * - Updated flag for update address operation
     * if the address updated or not
     */
    is_updated?: boolean;
    address_id?: number;
};
/** @returns {DeleteAddressResult} */
declare function DeleteAddressResult(): DeleteAddressResult;
type DeleteAddressResult = {
    /**
     * - Id of the address
     */
    id?: string;
    is_deleted?: boolean;
    address_id?: string;
};
/** @returns {PlatformSelectCartAddressPayload} */
declare function PlatformSelectCartAddressPayload(): PlatformSelectCartAddressPayload;
type PlatformSelectCartAddressPayload = {
    /**
     * - Cart id of the user cart for which the select
     * address operation performed
     */
    cart_id?: string;
    /**
     * - Billing address id selected by user
     * on which shipment bill to be generated
     */
    billing_address_id?: string;
    /**
     * - The checkout mode in cart
     */
    checkout_mode?: string;
    /**
     * - Address is selected by user on which shipment to be delivered
     */
    id?: string;
    /**
     * - Unique Identifier of user
     */
    user_id?: string;
};
/** @returns {ShipmentArticle} */
declare function ShipmentArticle(): ShipmentArticle;
type ShipmentArticle = {
    /**
     * - Article meta data for shipment
     */
    meta?: string;
    /**
     * - Article quantity for shipment
     */
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
/** @returns {PlatformShipmentResult} */
declare function PlatformShipmentResult(): PlatformShipmentResult;
type PlatformShipmentResult = {
    /**
     * - Count of shipments that will be shipped.
     */
    shipments?: number;
    /**
     * - Fulfilment id of the shipment
     */
    fulfillment_id?: number;
    /**
     * - Item details in the shipment
     */
    items?: CartProductInfo[];
    /**
     * - Delivery partner options that are available
     * to deliver the shipment
     */
    dp_options?: any;
    /**
     * - Shipment type of the shipment returned
     * in get shipments API like single_shipment or multiple shipment. Single
     * Shipment means 1 item in 1 shipment and vice versa in the other one
     */
    shipment_type?: string;
    /**
     * - Order type of the shipment like pickAtStore
     * or HomeDelivery
     */
    order_type?: string;
    /**
     * - Box type of the shipment in which the
     * shipment will be delivered
     */
    box_type?: string;
    promise?: ShipmentPromise;
    /**
     * - Delivery partner id of the shipment
     */
    dp_id?: string;
    /**
     * - Fulfilment type of shipment
     */
    fulfillment_type?: string;
    /**
     * - List of articles in shipment
     */
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
    debug?: string;
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
/** @returns {PlatformCartShipmentsResult} */
declare function PlatformCartShipmentsResult(): PlatformCartShipmentsResult;
type PlatformCartShipmentsResult = {
    /**
     * - Unique identifier of the user cart.
     */
    cart_id?: number;
    /**
     * - Unique identifier of the user cart.
     */
    uid?: string;
    /**
     * - Coupon text of coupon applied on cart
     */
    coupon_text?: string;
    /**
     * - Unique identifier of the user cart.
     */
    id?: string;
    /**
     * - Pan card config states at what condition
     * user should enter the pan card
     */
    pan_config?: any;
    delivery_promise?: ShipmentPromise;
    /**
     * - Comment message to be added in user cart.
     */
    comment?: string;
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
    shipments?: PlatformShipmentResult[];
    /**
     * - Error details if any error occurs which
     * includes type of error, error code and error message
     */
    error?: boolean;
    /**
     * - If the customer provides a PAN
     * number, set it to true.
     */
    is_pan_received?: boolean;
    /**
     * - Custom cart meta details added in cart
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
     * - Article unique id for shipment
     */
    article_uid: string;
};
/** @returns {UpdateCartShipmentPayload} */
declare function UpdateCartShipmentPayload(): UpdateCartShipmentPayload;
type UpdateCartShipmentPayload = {
    /**
     * - List of Shipments which
     * includes shipment data like shipment items, shipment promise, Shipment
     * type, shipment order type, shipment dp options etc
     */
    shipments: UpdateCartShipmentItem[];
};
/** @returns {PlatformCartMetaPayload} */
declare function PlatformCartMetaPayload(): PlatformCartMetaPayload;
type PlatformCartMetaPayload = {
    /**
     * - GSTIN number to be added in user cart
     */
    gstin?: string;
    /**
     * - Customer contact details for
     * customer pickup at store
     */
    pick_up_customer_details?: any;
    /**
     * - Checkout mode of user cart
     */
    checkout_mode?: string;
    /**
     * - Gift details is open json which can
     * include gift message
     */
    gift_details?: any;
    /**
     * - Permanent Account Number of the user
     */
    pan_no?: string;
    /**
     * - If the customer provides a PAN
     * number, set it to true.
     */
    is_pan_received?: boolean;
    /**
     * - Comment message to be added in user cart
     */
    comment?: string;
    /**
     * - Staff user id
     */
    staff_user_id?: string;
    delivery_slots?: any;
    custom_cart_meta?: any;
};
/** @returns {CartMetaResult} */
declare function CartMetaResult(): CartMetaResult;
type CartMetaResult = {
    /**
     * - Whether added meta was vaild
     */
    is_valid?: boolean;
    message?: string;
};
/** @returns {CartMetaMissingResult} */
declare function CartMetaMissingResult(): CartMetaMissingResult;
type CartMetaMissingResult = {
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
    /**
     * - Employee code of staff who does checkout
     * on behalf of customer
     */
    employee_code?: string;
    /**
     * - Id of staff who does checkout on behalf of customer
     */
    _id: string;
    /**
     * - User id of the employee who does checkout on behalf
     * of customer
     */
    user: string;
    /**
     * - Last name of staff employee who does checkout
     * on behalf of customer
     */
    last_name: string;
    /**
     * - First name of staff emplyee who does checkout
     * on behalf of customer
     */
    first_name: string;
};
/** @returns {CustomerDetails} */
declare function CustomerDetails(): CustomerDetails;
type CustomerDetails = {
    /**
     * - Name of customer to be added in customer detail
     * while checkout
     */
    name?: string;
    /**
     * - Email address of the customer to be added in
     * customer detail while checkout
     */
    email?: string;
    /**
     * - Mobile number of customer to be added in customer
     * detail while checkout
     */
    mobile: string;
};
/** @returns {Files} */
declare function Files(): Files;
type Files = {
    /**
     * - Key represents name of file
     */
    key: string;
    /**
     * - List of urls path
     */
    values: string[];
};
/** @returns {CartCheckoutCustomMeta} */
declare function CartCheckoutCustomMeta(): CartCheckoutCustomMeta;
type CartCheckoutCustomMeta = {
    key: string;
    value: string;
};
/** @returns {PlatformCartCheckoutDetailPayload} */
declare function PlatformCartCheckoutDetailPayload(): PlatformCartCheckoutDetailPayload;
type PlatformCartCheckoutDetailPayload = {
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
    customer_details?: CustomerDetails;
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
     * - Items details in cart after order placed
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
    /**
     * - Store
     * employees data
     */
    price_adjustment_applied?: CartAppliedPriceAdjustment[];
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
     * - Error details if any error occurs which
     * includes type of error, error code and error message
     */
    error_message?: string;
    /**
     * - User type of the cart who places the order
     */
    user_type?: string;
    /**
     * - Cash On Delivery charges of the user cart
     */
    cod_charges?: number;
    /**
     * - Cash On Delivery message for the order placed
     */
    cod_message?: string;
    /**
     * - Delivery charge order value
     */
    delivery_charge_order_value?: number;
    /**
     * - Store code from which the order placed
     */
    store_code?: string;
    /**
     * - Store employees data
     */
    store_emps?: any[];
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
/** @returns {CartCheckoutResult} */
declare function CartCheckoutResult(): CartCheckoutResult;
type CartCheckoutResult = {
    /**
     * - App intercept url which is used to
     * redirect on app after payment in confirmed/failed
     */
    app_intercept_url?: string;
    /**
     * - Data of the user cart checkout includes cart
     * data, address, user id, order type etc
     */
    data?: any;
    cart?: CheckCart;
    /**
     * - Success flag of cart checkout API response
     */
    success?: boolean;
    /**
     * - Callback url to be redirected after
     * payment received/failed
     */
    callback_url?: string;
    /**
     * - Payment confirm url used to
     * redirect after payment is confirmed
     */
    payment_confirm_url?: string;
    /**
     * - Order id generated after placing order
     */
    order_id?: string;
    message?: string;
};
/** @returns {CartDeliveryModesResult} */
declare function CartDeliveryModesResult(): CartDeliveryModesResult;
type CartDeliveryModesResult = {
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
    /**
     * - Country of address
     */
    country?: string;
    /**
     * - State of the address
     */
    state?: string;
    /**
     * - City of the address
     */
    city?: string;
    /**
     * - Phone number for address
     */
    phone?: string;
    /**
     * - Area code of the address
     */
    area_code?: string;
    /**
     * - Uid of the address
     */
    uid?: number;
    /**
     * - Area code slug for address. example
     * pincode is slug for India
     */
    area_code_slug?: string;
    /**
     * - Address type of address
     */
    address_type?: string;
    /**
     * - Area description for address
     */
    area?: string;
    /**
     * - Id of the address
     */
    id?: number;
    /**
     * - Name of store manager
     */
    store_manager_name?: string;
    /**
     * - Name of person in address data to whom it belongs to
     */
    name?: string;
    /**
     * - Store code from which the order placed
     */
    store_code?: string;
    /**
     * - Landmark of address
     */
    landmark?: string;
    /**
     * - Email address for address data
     */
    email?: string;
    /**
     * - Address pincode
     */
    pincode?: number;
    address?: string;
    sector?: string;
    state_code?: string;
    geo_location?: GeoLocation;
};
/** @returns {StoreDetailsResult} */
declare function StoreDetailsResult(): StoreDetailsResult;
type StoreDetailsResult = {
    items?: PickupStoreDetail[];
    data?: PickupStoreDetail[];
};
/** @returns {UpdateCartPaymentPayload} */
declare function UpdateCartPaymentPayload(): UpdateCartPaymentPayload;
type UpdateCartPaymentPayload = {
    /**
     * - Address id of the user on which the order
     * to be delivered
     */
    address_id?: string;
    /**
     * - Payment mode from which the payment to be
     * done for the order
     */
    payment_mode?: string;
    /**
     * - Aggregator name of the payment gateway
     */
    aggregator_name?: string;
    /**
     * - Merchant code of the payment mode
     * selected to do the payment
     */
    merchant_code?: string;
    /**
     * - Payment identifier of the payment
     * mode selected to do the payment
     */
    payment_identifier?: string;
    /**
     * - Cart id of the user cart
     */
    id?: string;
};
/** @returns {CouponValidity} */
declare function CouponValidity(): CouponValidity;
type CouponValidity = {
    /**
     * - Coupon Title of the coupon applied
     */
    title?: string;
    /**
     * - Flag for coupon validation
     * required on next page or not
     */
    next_validation_required?: boolean;
    /**
     * - Valid flag which denotes if the applied coupon
     * is valid or not
     */
    valid?: boolean;
    /**
     * - Display message for coupon validity
     */
    display_message_en?: string;
    /**
     * - Coupon code of the coupon applied
     */
    code?: string;
    /**
     * - Coupon discount value of the coupon applied
     */
    discount?: number;
    /**
     * - Error message for the selected payment mode.
     */
    error_en?: string;
};
/** @returns {PaymentCouponValidate} */
declare function PaymentCouponValidate(): PaymentCouponValidate;
type PaymentCouponValidate = {
    /**
     * - Success flag of coupon payment mode validity API response
     */
    success: boolean;
    /**
     * - Payment mode valid message for coupon
     */
    message?: string;
    coupon_validity?: CouponValidity;
};
/** @returns {PaymentMeta} */
declare function PaymentMeta(): PaymentMeta;
type PaymentMeta = {
    /**
     * - Payment gateway used to do the payment
     */
    payment_gateway?: string;
    /**
     * - Type of card if payment mode is card to do the payment
     */
    type?: string;
    /**
     * - Payment identifier of the payment
     * mode selected to do the payment
     */
    payment_identifier?: string;
    /**
     * - Merchant code of the payment mode
     * selected to do the payment
     */
    merchant_code?: string;
};
/** @returns {PaymentMethod} */
declare function PaymentMethod(): PaymentMethod;
type PaymentMethod = {
    /**
     * - Payment mode of payment method used to make payment
     */
    mode: string;
    /**
     * - Payment name of payment method used to make payment
     */
    payment?: string;
    payment_meta: PaymentMeta;
    payment_identifier?: string;
    /**
     * - Amount of the payment mode to be paid
     */
    amount?: number;
    /**
     * - Name of the payment mode used to make payment
     */
    name?: string;
    /**
     * - Payment extra identifier for
     * the payment mode to do the payment
     */
    payment_extra_identifiers?: any;
};
/** @returns {PlatformCartCheckoutDetailV2Payload} */
declare function PlatformCartCheckoutDetailV2Payload(): PlatformCartCheckoutDetailV2Payload;
type PlatformCartCheckoutDetailV2Payload = {
    /**
     * - Address id of the user on which the order
     * to be delivered
     */
    address_id?: string;
    /**
     * - Payment identifier of the payment
     * mode selected to do the payment
     */
    payment_identifier?: string;
    /**
     * - Payment params which includes payment
     * identifier and merchant code
     */
    payment_params?: any;
    /**
     * - Custom meta data to be
     * added in order
     */
    custom_meta?: CartCheckoutCustomMeta[];
    /**
     * - Payment auto confirm flag if
     * payment need not to be collected from user
     */
    payment_auto_confirm?: boolean;
    /**
     * - Cart id of the user cart
     */
    id: string;
    /**
     * - Filed to determine whether user is making request
     * from pos or not
     */
    pos?: boolean;
    /**
     * - Billing address id of the customer
     * on which the invoice to be generated after the order is placed
     */
    billing_address_id?: string;
    /**
     * - Merchant code of the payment mode
     * selected to do the payment
     */
    merchant_code?: string;
    /**
     * - Aggregator name of the payment gateway
     */
    aggregator?: string;
    /**
     * - Store id where we have to pick product
     */
    pick_at_store_uid?: number;
    /**
     * - Device id
     */
    device_id?: string;
    /**
     * - Delivery address data which includes
     * customer address, customer phone, customer email, customer pincode,
     * customer landmark and customer name
     */
    delivery_address?: any;
    /**
     * - Payment mode from which the payment to be
     * done for the order
     */
    payment_mode?: string;
    /**
     * - Mode of checkout used in cart
     */
    checkout_mode?: string;
    customer_details?: CustomerDetails;
    /**
     * - Meta data to be added in order
     */
    meta?: any;
    /**
     * - Payment methods list used to
     * make the payment
     */
    payment_methods: PaymentMethod[];
    staff?: StaffCheckout;
    /**
     * - Employee code of staff who does checkout
     * on behalf of customer
     */
    employee_code?: string;
    /**
     * - Billing address json which includes
     * customer address, customer phone, customer email, customer pincode,
     * customer landmark and customer name
     */
    billing_address?: any;
    /**
     * - Callback url after payment received/failed
     */
    callback_url?: string;
    user_id?: string;
    /**
     * - Extra meta to be added while checkout in order
     */
    extra_meta?: any;
    /**
     * - Order type of the order being placed like
     * pickAtStore or HomeDelivery
     */
    order_type: string;
    /**
     * - List of file url
     */
    files?: Files[];
    /**
     * - Ordering store id of the store from
     * which the order is getting placed
     */
    ordering_store?: number;
    /**
     * - Issuer Identification Number number of card if
     * payment mode is card to do the payment
     */
    iin?: string;
    /**
     * - Network of card if payment mode is card to do
     * the payment
     */
    network?: string;
    /**
     * - Type of cart if payment mode is card to do the payment
     */
    type?: string;
    /**
     * - Saved card id if payment mode is card to do the payment
     */
    card_id?: string;
};
/** @returns {UpdateCartPaymentPayloadV2} */
declare function UpdateCartPaymentPayloadV2(): UpdateCartPaymentPayloadV2;
type UpdateCartPaymentPayloadV2 = {
    /**
     * - Address id of the user address selected to
     * deliver the shipment
     */
    address_id?: string;
    /**
     * - Payment mode of the payment selected to
     * do the payment
     */
    payment_mode?: string;
    /**
     * - Aggregator name of the payment gateway
     */
    aggregator_name?: string;
    /**
     * - Merchant code of the payment mode
     * selected to do the payment
     */
    merchant_code?: string;
    /**
     * - Payment identifier of the payment
     * mode selected to do the payment
     */
    payment_identifier?: string;
    /**
     * - Cart id of the user cart for which the update cart
     * payment operation performed
     */
    id?: string;
    payment_methods?: PaymentMethod[];
};
/** @returns {PriceMinMax} */
declare function PriceMinMax(): PriceMinMax;
type PriceMinMax = {
    /**
     * - Min price of article added in user cart
     */
    min?: number;
    /**
     * - Max price of article added in user cart
     */
    max?: number;
};
/** @returns {ItemPriceDetails} */
declare function ItemPriceDetails(): ItemPriceDetails;
type ItemPriceDetails = {
    marked?: PriceMinMax;
    effective?: PriceMinMax;
    /**
     * - The currency code for price
     */
    currency?: string;
};
/** @returns {ArticlePriceDetails} */
declare function ArticlePriceDetails(): ArticlePriceDetails;
type ArticlePriceDetails = {
    /**
     * - The Marked Price refers to the initial price of
     * the free gift article before product discount.
     */
    marked?: number;
    /**
     * - The Effective Price refers to the final
     * amount of the free gift article after applying the product discount.
     */
    effective?: number;
};
/** @returns {FreeGiftItems} */
declare function FreeGiftItems(): FreeGiftItems;
type FreeGiftItems = {
    /**
     * - Free gift product slug
     */
    item_slug?: string;
    /**
     * - Free gift product name
     */
    item_name?: string;
    item_price_details?: ItemPriceDetails;
    article_price?: ArticlePriceDetails;
    /**
     * - Free gift product brand name
     */
    item_brand_name?: string;
    /**
     * - Free gift product id
     */
    item_id?: number;
    /**
     * - Available sizes for the free gift item.
     */
    available_sizes?: string[];
    /**
     * - Selected size for the free gift item.
     */
    size?: string;
    /**
     * - List of free gift product images URL
     */
    item_images_url?: string[];
};
/** @returns {PromotionOffer} */
declare function PromotionOffer(): PromotionOffer;
type PromotionOffer = {
    /**
     * - Promotion unique identifier
     */
    id?: string;
    /**
     * - Buy rules of promotions
     */
    buy_rules?: any;
    /**
     * - Offer title of promotion that used to display
     */
    offer_text?: string;
    /**
     * - Type of Promotion like percentage,
     * amount, bogo etc.
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
     * - Indicates whether the promotion is
     * associated with a bank offer.
     */
    is_bank_offer?: boolean;
};
/** @returns {PromotionOffersResult} */
declare function PromotionOffersResult(): PromotionOffersResult;
type PromotionOffersResult = {
    /**
     * - List of available
     * promotion for product
     */
    available_promotions?: PromotionOffer[];
};
/** @returns {PromotionPaymentOffer} */
declare function PromotionPaymentOffer(): PromotionPaymentOffer;
type PromotionPaymentOffer = {
    /**
     * - Application id of the sales channel
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
     * - Promotion unique identifier
     */
    id?: string;
    /**
     * - Offer title of promotion that used to display
     */
    offer_text?: string;
    /**
     * - Group of promotion belongs to
     */
    promotion_group?: string;
    /**
     * - Type of Promotion like bogo, amount,
     * percentage etc.
     */
    promotion_type?: string;
    /**
     * - Name of the promotion
     */
    promotion_name?: string;
};
/** @returns {PromotionPaymentOffersDetails} */
declare function PromotionPaymentOffersDetails(): PromotionPaymentOffersDetails;
type PromotionPaymentOffersDetails = {
    /**
     * - Indicates if operation is successful or not.
     */
    success?: boolean;
    promotions?: PromotionPaymentOffer[];
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
/** @returns {OperationErrorResult} */
declare function OperationErrorResult(): OperationErrorResult;
type OperationErrorResult = {
    /**
     * - Whether the request was successful (true/false).
     */
    success?: boolean;
    /**
     * - Response message needs to display
     */
    message?: string;
    /**
     * - Response error message in detail
     */
    error?: string;
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
