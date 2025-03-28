const Joi = require("joi");

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

class CartPlatformModel {
  /** @returns {CouponDateMeta} */
  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),
      created_on: Joi.string().allow("").allow(null),
      approved_on: Joi.string().allow("").allow(null),
      rejected_on: Joi.string().allow("").allow(null),
      reviewed_on: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Ownership} */
  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow("").required(),
      payable_by: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CouponAuthor} */
  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),
      modified_by: Joi.string().allow("").allow(null),
      approved_by: Joi.string().allow("").allow(null),
      rejected_by: Joi.string().allow("").allow(null),
      reviewed_by: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {State} */
  static State() {
    return Joi.object({
      is_archived: Joi.boolean(),
      is_display: Joi.boolean(),
      is_public: Joi.boolean(),
      is_active: Joi.boolean(),
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

  /** @returns {NextSchedule} */
  static NextSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {CouponSchedule} */
  static CouponSchedule() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),
      start: Joi.string().allow(""),
      next_schedule: Joi.array().items(CartPlatformModel.NextSchedule()),
      cron: Joi.string().allow("").allow(null),
      status: Joi.string().allow(""),
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
      calculate_on: Joi.string().allow(""),
      value_type: Joi.string().allow(""),
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
      coupon_type: Joi.string().allow(""),
      coupon_prefix: Joi.string().allow("").allow(null),
      coupon_counts: Joi.number(),
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
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      current: Joi.number(),
      next_id: Joi.string().allow(""),
      page: Joi.number(),
      last_id: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
      has_previous: Joi.boolean(),
    });
  }

  /** @returns {CouponObj} */
  static CouponObj() {
    return Joi.object({
      date_meta: CartPlatformModel.CouponDateMeta(),
      ownership: CartPlatformModel.Ownership().required(),
      author: CartPlatformModel.CouponAuthor(),
      state: CartPlatformModel.State(),
      _schedule: CartPlatformModel.CouponSchedule(),
      display_meta: CartPlatformModel.DisplayMeta().required(),
      code: Joi.string().allow("").required(),
      type_slug: Joi.string().allow("").required(),
      rule_definition: CartPlatformModel.RuleDefinition().required(),
      _id: Joi.string().allow(""),
      medias: Joi.array().items(CartPlatformModel.CouponMedias()),
    });
  }

  /** @returns {CouponsResult} */
  static CouponsResult() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.CouponObj()),
      page: CartPlatformModel.Page(),
      success: Joi.boolean(),
      draft: Joi.number(),
      review: Joi.number(),
      rejected: Joi.number(),
      approved: Joi.number(),
    });
  }

  /** @returns {CouponMedias} */
  static CouponMedias() {
    return Joi.object({
      alt: Joi.string().allow(""),
      url: Joi.string().allow(""),
      type: Joi.string().allow(""),
      key: Joi.string().allow(""),
    });
  }

  /** @returns {CouponDetailObj} */
  static CouponDetailObj() {
    return Joi.object({
      date_meta: CartPlatformModel.CouponDateMeta(),
      ownership: CartPlatformModel.Ownership(),
      author: CartPlatformModel.CouponAuthor(),
      state: CartPlatformModel.State(),
      restrictions: CartPlatformModel.Restrictions(),
      validation: CartPlatformModel.Validation(),
      action: CartPlatformModel.CouponAction(),
      tags: Joi.array().items(Joi.string().allow("")),
      _schedule: CartPlatformModel.CouponSchedule(),
      rule: Joi.array().items(CartPlatformModel.Rule()),
      display_meta: CartPlatformModel.DisplayMeta(),
      code: Joi.string().allow(""),
      type_slug: Joi.string().allow(""),
      identifiers: CartPlatformModel.Identifier(),
      validity: CartPlatformModel.Validity(),
      rule_definition: CartPlatformModel.RuleDefinition(),
      _id: Joi.string().allow(""),
      is_archived: Joi.boolean(),
      coupon_type: Joi.string().allow(""),
      coupon_prefix: Joi.string().allow(""),
      coupon_counts: Joi.number(),
    });
  }

  /** @returns {CouponDetailResult} */
  static CouponDetailResult() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      data: CartPlatformModel.CouponDetailObj(),
    });
  }

  /** @returns {TagsViewResult} */
  static TagsViewResult() {
    return Joi.object({
      success: Joi.boolean(),
      items: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {SuccessMessage} */
  static SuccessMessage() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CartMetaConfigOperationErrorResult} */
  static CartMetaConfigOperationErrorResult() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      errors: Joi.string().allow(""),
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
      coupon_type: Joi.string().allow(""),
      coupon_prefix: Joi.string().allow("").allow(null),
      coupon_counts: Joi.number(),
      reason: Joi.string().allow("").allow(null),
      type_slug: Joi.string().allow("").required(),
      identifiers: CartPlatformModel.Identifier().required(),
      validity: CartPlatformModel.Validity().required(),
      rule_definition: CartPlatformModel.RuleDefinition().required(),
      _id: Joi.string().allow(""),
      is_archived: Joi.boolean(),
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
      description: Joi.string().allow("").allow(null),
      offer_label: Joi.string().allow(""),
      name: Joi.string().allow("").allow(null),
      offer_text: Joi.string().allow(""),
    });
  }

  /** @returns {CompareObject} */
  static CompareObject() {
    return Joi.object({
      equals: Joi.number().allow(null),
      greater_than: Joi.number().allow(null),
      less_than_equals: Joi.number().allow(null),
      less_than: Joi.number().allow(null),
      greater_than_equals: Joi.number().allow(null),
    });
  }

  /** @returns {ItemSizeMapping} */
  static ItemSizeMapping() {
    return Joi.object({
      item_size_mapping: Joi.object().pattern(/\S/, Joi.any()),
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
      max_usage_per_transaction: Joi.number().allow(null),
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
      meta: CartPlatformModel.ItemSizeMapping(),
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
      type: Joi.string().allow(""),
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
      payments: CartPlatformModel.PaymentModes(),
      user_registered: CartPlatformModel.UserRegistered(),
      platforms: Joi.array().items(Joi.string().allow("")),
      post_order: CartPlatformModel.PostOrder1(),
      user_groups: Joi.array().items(Joi.number()),
      order_quantity: Joi.number(),
      anonymous_users: Joi.boolean(),
      user_id: Joi.array().items(Joi.string().allow("")),
      uses: CartPlatformModel.UsesRestriction1().required(),
      ordering_stores: Joi.array().items(Joi.number()),
      user_type: Joi.string().allow(""),
    });
  }

  /** @returns {PromotionSchedule} */
  static PromotionSchedule() {
    return Joi.object({
      end: Joi.string().allow("").required(),
      start: Joi.string().allow("").required(),
      status: Joi.string().allow(""),
      published: Joi.boolean().required(),
      next_schedule: Joi.array().items(CartPlatformModel.NextSchedule()),
      cron: Joi.string().allow("").allow(null),
      duration: Joi.number().allow(null),
    });
  }

  /** @returns {PromotionAction} */
  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),
      action_type: Joi.string().allow(""),
    });
  }

  /** @returns {PromotionAuthor} */
  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),
      modified_by: Joi.string().allow("").allow(null),
      approved_by: Joi.string().allow("").allow(null),
      rejected_by: Joi.string().allow("").allow(null),
      reviewed_by: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Visibility} */
  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean(),
      pdp: Joi.boolean(),
    });
  }

  /** @returns {PromotionDateMeta} */
  static PromotionDateMeta() {
    return Joi.object({
      modified_on: Joi.string().allow("").allow(null),
      created_on: Joi.string().allow("").allow(null),
      approved_on: Joi.string().allow("").allow(null),
      rejected_on: Joi.string().allow("").allow(null),
      reviewed_on: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PromotionListItem} */
  static PromotionListItem() {
    return Joi.object({
      stackable: Joi.boolean(),
      calculate_on: Joi.string().allow(""),
      apply_exclusive: Joi.string().allow("").allow(null),
      promo_group: Joi.string().allow("").required(),
      mode: Joi.string().allow(""),
      display_meta: CartPlatformModel.DisplayMeta1().required(),
      ownership: CartPlatformModel.Ownership(),
      _schedule: CartPlatformModel.PromotionSchedule(),
      author: CartPlatformModel.PromotionAuthor(),
      date_meta: CartPlatformModel.PromotionDateMeta().required(),
      _id: Joi.string().allow(""),
      is_processed: Joi.boolean(),
      code: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PromotionsResult} */
  static PromotionsResult() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.PromotionListItem()),
      page: CartPlatformModel.Page(),
      draft: Joi.number(),
      review: Joi.number(),
      rejected: Joi.number(),
      approved: Joi.number(),
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
      ownership: CartPlatformModel.Ownership().required(),
      promotion_type: Joi.string().allow("").required(),
      discount_rules: Joi.array()
        .items(CartPlatformModel.DiscountRule())
        .required(),
      restrictions: CartPlatformModel.Restrictions1(),
      currency: Joi.string().allow(""),
      is_processed: Joi.boolean(),
      code: Joi.string().allow(""),
      _schedule: CartPlatformModel.PromotionSchedule(),
      post_order_action: CartPlatformModel.PromotionAction(),
      apply_priority: Joi.number(),
      author: CartPlatformModel.PromotionAuthor(),
      visiblility: CartPlatformModel.Visibility(),
      application_id: Joi.string().allow("").required(),
      buy_rules: Joi.object().pattern(/\S/, Joi.any()).required(),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      date_meta: CartPlatformModel.PromotionDateMeta(),
      indexed_criteria: Joi.array().items(
        CartPlatformModel.PromoIndexedCriteria()
      ),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PromotionAddResult} */
  static PromotionAddResult() {
    return Joi.object({
      stackable: Joi.boolean(),
      calculate_on: Joi.string().allow(""),
      apply_exclusive: Joi.string().allow("").allow(null),
      promo_group: Joi.string().allow("").required(),
      mode: Joi.string().allow("").required(),
      is_processed: Joi.boolean(),
      apply_all_discount: Joi.boolean(),
      display_meta: CartPlatformModel.DisplayMeta1(),
      ownership: CartPlatformModel.Ownership(),
      promotion_type: Joi.string().allow("").required(),
      discount_rules: Joi.array().items(CartPlatformModel.DiscountRule()),
      restrictions: CartPlatformModel.Restrictions1(),
      currency: Joi.string().allow(""),
      code: Joi.string().allow(""),
      _schedule: CartPlatformModel.PromotionSchedule(),
      post_order_action: CartPlatformModel.PromotionAction(),
      apply_priority: Joi.number(),
      author: CartPlatformModel.PromotionAuthor(),
      visiblility: CartPlatformModel.Visibility(),
      application_id: Joi.string().allow("").required(),
      buy_rules: Joi.object().pattern(/\S/, Joi.any()),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      date_meta: CartPlatformModel.PromotionDateMeta(),
      indexed_criteria: Joi.array().items(
        CartPlatformModel.PromoIndexedCriteria()
      ),
      tags: Joi.array().items(Joi.string().allow("")),
      _id: Joi.string().allow(""),
      is_archived: Joi.boolean(),
      is_bank_offer: Joi.boolean(),
    });
  }

  /** @returns {PromotionUpdate} */
  static PromotionUpdate() {
    return Joi.object({
      stackable: Joi.boolean(),
      calculate_on: Joi.string().allow(""),
      apply_exclusive: Joi.string().allow("").allow(null),
      reason: Joi.string().allow("").allow(null),
      promo_group: Joi.string().allow("").required(),
      mode: Joi.string().allow("").required(),
      apply_all_discount: Joi.boolean(),
      display_meta: CartPlatformModel.DisplayMeta1(),
      ownership: CartPlatformModel.Ownership(),
      promotion_type: Joi.string().allow("").required(),
      discount_rules: Joi.array().items(CartPlatformModel.DiscountRule()),
      restrictions: CartPlatformModel.Restrictions1(),
      currency: Joi.string().allow(""),
      code: Joi.string().allow(""),
      _schedule: CartPlatformModel.PromotionSchedule(),
      post_order_action: CartPlatformModel.PromotionAction(),
      apply_priority: Joi.number(),
      author: CartPlatformModel.PromotionAuthor(),
      visiblility: CartPlatformModel.Visibility(),
      application_id: Joi.string().allow("").required(),
      buy_rules: Joi.object().pattern(/\S/, Joi.any()),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      date_meta: CartPlatformModel.PromotionDateMeta(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PromotionUpdateResult} */
  static PromotionUpdateResult() {
    return Joi.object({
      stackable: Joi.boolean(),
      calculate_on: Joi.string().allow(""),
      apply_exclusive: Joi.string().allow("").allow(null),
      reason: Joi.string().allow("").allow(null),
      is_processed: Joi.boolean(),
      promo_group: Joi.string().allow("").required(),
      mode: Joi.string().allow("").required(),
      apply_all_discount: Joi.boolean(),
      display_meta: CartPlatformModel.DisplayMeta1(),
      ownership: CartPlatformModel.Ownership(),
      promotion_type: Joi.string().allow("").required(),
      discount_rules: Joi.array().items(CartPlatformModel.DiscountRule()),
      restrictions: CartPlatformModel.Restrictions1(),
      currency: Joi.string().allow(""),
      code: Joi.string().allow(""),
      _schedule: CartPlatformModel.PromotionSchedule(),
      post_order_action: CartPlatformModel.PromotionAction(),
      apply_priority: Joi.number(),
      author: CartPlatformModel.PromotionAuthor(),
      visiblility: CartPlatformModel.Visibility(),
      application_id: Joi.string().allow("").required(),
      buy_rules: Joi.object().pattern(/\S/, Joi.any()),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      date_meta: CartPlatformModel.PromotionDateMeta(),
      indexed_criteria: Joi.array().items(
        CartPlatformModel.PromoIndexedCriteria()
      ),
      tags: Joi.array().items(Joi.string().allow("")),
      _id: Joi.string().allow(""),
      is_archived: Joi.boolean(),
      is_bank_offer: Joi.boolean(),
    });
  }

  /** @returns {PromoIndexedCriteria} */
  static PromoIndexedCriteria() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {PromotionPartialUpdate} */
  static PromotionPartialUpdate() {
    return Joi.object({
      publish: Joi.boolean(),
      schedule: CartPlatformModel.PromotionSchedule(),
    });
  }

  /** @returns {ActivePromos} */
  static ActivePromos() {
    return Joi.object({
      _id: Joi.string().allow(""),
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

  /** @returns {ActivePromosResult} */
  static ActivePromosResult() {
    return Joi.object({
      status: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.ActivePromos()),
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

  /** @returns {OrderPlacing} */
  static OrderPlacing() {
    return Joi.object({
      enabled: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {PanCard} */
  static PanCard() {
    return Joi.object({
      enabled: Joi.boolean(),
      cod_threshold_amount: Joi.number(),
      online_threshold_amount: Joi.number(),
    });
  }

  /** @returns {CartMetaConfigUpdate} */
  static CartMetaConfigUpdate() {
    return Joi.object({
      min_cart_value: Joi.number(),
      max_cart_value: Joi.number(),
      bulk_coupons: Joi.boolean(),
      max_cart_items: Joi.number(),
      gift_display_text: Joi.string().allow(""),
      delivery_charges: CartPlatformModel.DeliveryCharges(),
      international_delivery_charges: CartPlatformModel.DeliveryCharges(),
      revenue_engine_coupon: Joi.boolean(),
      gift_pricing: Joi.number(),
      enabled: Joi.boolean(),
      app_id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      slug: Joi.string().allow(""),
      is_universal: Joi.boolean(),
      company_id: Joi.number(),
      updated_on: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      last_modified_by: Joi.string().allow(""),
      order_placing: CartPlatformModel.OrderPlacing(),
      name: Joi.string().allow(""),
      article_tags: Joi.array().items(Joi.string().allow("")),
      allow_coupon_with_rewards: Joi.boolean(),
      gst_input: Joi.boolean(),
      staff_selection: Joi.boolean(),
      placing_for_customer: Joi.boolean(),
      pan_card: CartPlatformModel.PanCard(),
      empty_cart: Joi.boolean(),
      id: Joi.string().allow(""),
      hide_on_storefront: Joi.boolean(),
    });
  }

  /** @returns {TimeStampIDResult} */
  static TimeStampIDResult() {
    return Joi.object({
      id: Joi.string().allow(""),
      app_id: Joi.string().allow(""),
      company_id: Joi.number(),
      created_on: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
      last_modified_by: Joi.string().allow(""),
    });
  }

  /** @returns {CartMetaConfigDetailResult} */
  static CartMetaConfigDetailResult() {
    return Joi.object({
      success: Joi.boolean(),
      data: CartPlatformModel.CartMetaConfigUpdate(),
    });
  }

  /** @returns {CartMetaConfigListResult} */
  static CartMetaConfigListResult() {
    return Joi.object({
      success: Joi.boolean(),
      data: Joi.array().items(CartPlatformModel.CartMetaConfigListObject()),
    });
  }

  /** @returns {CartMetaConfigListObject} */
  static CartMetaConfigListObject() {
    return Joi.object({
      id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {CartMetaConfigAddResult} */
  static CartMetaConfigAddResult() {
    return Joi.object({
      success: Joi.boolean(),
      data: CartPlatformModel.CartMetaConfigAdd(),
    });
  }

  /** @returns {CartMetaConfigAdd} */
  static CartMetaConfigAdd() {
    return Joi.object({
      min_cart_value: Joi.number(),
      max_cart_value: Joi.number(),
      bulk_coupons: Joi.boolean(),
      max_cart_items: Joi.number(),
      gift_display_text: Joi.string().allow(""),
      delivery_charges: CartPlatformModel.DeliveryCharges(),
      international_delivery_charges: CartPlatformModel.DeliveryCharges(),
      revenue_engine_coupon: Joi.boolean(),
      gift_pricing: Joi.number(),
      enabled: Joi.boolean(),
      app_id: Joi.string().allow(""),
      slug: Joi.string().allow("").required(),
      is_universal: Joi.boolean(),
      company_id: Joi.number(),
      updated_on: Joi.string().allow(""),
      last_modified_by: Joi.string().allow(""),
      id: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      order_placing: CartPlatformModel.OrderPlacing(),
      article_tags: Joi.array().items(Joi.string().allow("")),
      allow_coupon_with_rewards: Joi.boolean(),
      gst_input: Joi.boolean(),
      staff_selection: Joi.boolean(),
      placing_for_customer: Joi.boolean(),
      pan_card: CartPlatformModel.PanCard(),
      empty_cart: Joi.boolean(),
      hide_on_storefront: Joi.boolean(),
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {PriceAdjustmentRestrictions} */
  static PriceAdjustmentRestrictions() {
    return Joi.object({
      post_order: CartPlatformModel.PostOrder1(),
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
      restrictions: CartPlatformModel.PriceAdjustmentRestrictions(),
      article_level_distribution: Joi.boolean().required(),
      collection: CartPlatformModel.Collection().required(),
      type: Joi.string().allow("").required(),
      allowed_refund: Joi.boolean(),
      is_authenticated: Joi.boolean().required(),
      article_ids: Joi.array().items(CartPlatformModel.Article()).required(),
      remove_articles: Joi.boolean(),
      auto_remove: Joi.boolean(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      cart_id: Joi.string().allow("").required(),
      distribution_logic: CartPlatformModel.DistributionLogic(),
    });
  }

  /** @returns {PriceAdjustment} */
  static PriceAdjustment() {
    return Joi.object({
      value: Joi.number().required(),
      message: Joi.string().allow("").required(),
      apply_expiry: Joi.string().allow(""),
      restrictions: CartPlatformModel.PriceAdjustmentRestrictions(),
      article_level_distribution: Joi.boolean().required(),
      id: Joi.string().allow(""),
      collection: CartPlatformModel.Collection().required(),
      type: Joi.string().allow("").required(),
      allowed_refund: Joi.boolean(),
      is_authenticated: Joi.boolean().required(),
      article_ids: Joi.array().items(CartPlatformModel.Article()).required(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      cart_id: Joi.string().allow("").required(),
      remove_articles: Joi.boolean(),
      auto_remove: Joi.boolean(),
      is_active: Joi.boolean(),
      created_by: Joi.string().allow(""),
      cart_value: Joi.number(),
      modified_by: Joi.string().allow(""),
      expire_at: Joi.string().allow(""),
      distribution_logic: CartPlatformModel.DistributionLogic(),
    });
  }

  /** @returns {AddPriceAdjustmentResult} */
  static AddPriceAdjustmentResult() {
    return Joi.object({
      data: CartPlatformModel.PriceAdjustment(),
      success: Joi.boolean(),
    });
  }

  /** @returns {UpdatePriceAdjustmentResult} */
  static UpdatePriceAdjustmentResult() {
    return Joi.object({
      data: CartPlatformModel.PriceAdjustment(),
      success: Joi.boolean(),
    });
  }

  /** @returns {PriceAdjustmentResult} */
  static PriceAdjustmentResult() {
    return Joi.object({
      data: Joi.array().items(CartPlatformModel.PriceAdjustment()),
      success: Joi.boolean(),
      price_adjustments: Joi.array().items(CartPlatformModel.PriceAdjustment()),
    });
  }

  /** @returns {GetPriceAdjustmentResult} */
  static GetPriceAdjustmentResult() {
    return Joi.object({
      data: Joi.array().items(CartPlatformModel.PriceAdjustment()),
    });
  }

  /** @returns {PriceAdjustmentAdd} */
  static PriceAdjustmentAdd() {
    return Joi.object({
      value: Joi.number().required(),
      message: Joi.string().allow("").required(),
      apply_expiry: Joi.string().allow(""),
      restrictions: CartPlatformModel.PriceAdjustmentRestrictions(),
      created_by: Joi.string().allow(""),
      article_level_distribution: Joi.boolean().required(),
      collection: CartPlatformModel.Collection().required(),
      type: Joi.string().allow("").required(),
      allowed_refund: Joi.boolean(),
      is_authenticated: Joi.boolean().required(),
      article_ids: Joi.array().items(CartPlatformModel.Article()).required(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      cart_id: Joi.string().allow("").required(),
      remove_articles: Joi.boolean(),
      auto_remove: Joi.boolean(),
      distribution_logic: CartPlatformModel.DistributionLogic(),
    });
  }

  /** @returns {DistributionRule} */
  static DistributionRule() {
    return Joi.object({
      conditions: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {Distribution} */
  static Distribution() {
    return Joi.object({
      type: Joi.string().allow(""),
      logic: Joi.string().allow(""),
      rule: CartPlatformModel.DistributionRule(),
    });
  }

  /** @returns {DistributionLogic} */
  static DistributionLogic() {
    return Joi.object({
      distribution_level: Joi.string().allow(""),
      distribution: CartPlatformModel.Distribution(),
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

  /** @returns {OpenapiCartDetailsPayload} */
  static OpenapiCartDetailsPayload() {
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
      uid: Joi.string().allow("").allow(null),
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
      original: Joi.number(),
      attr: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {LoyaltyPoints} */
  static LoyaltyPoints() {
    return Joi.object({
      is_applied: Joi.boolean().allow(null),
      total: Joi.number().allow(null),
      applicable: Joi.number().allow(null),
      description: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {RawBreakup} */
  static RawBreakup() {
    return Joi.object({
      promotion: Joi.number(),
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
      sub_total: Joi.number(),
      convenience_fee: Joi.number(),
      total_charge: Joi.number(),
      mop_total: Joi.number(),
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
      tags: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {BaseInfo} */
  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ActionQuery} */
  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ProductActionParams} */
  static ProductActionParams() {
    return Joi.object({
      slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ProductActionPage} */
  static ProductActionPage() {
    return Joi.object({
      type: Joi.string().allow(""),
      params: CartPlatformModel.ProductActionParams(),
    });
  }

  /** @returns {ProductAction} */
  static ProductAction() {
    return Joi.object({
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
      query: CartPlatformModel.ActionQuery(),
      page: CartPlatformModel.ProductActionPage(),
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
      teaser_tag: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      brand: CartPlatformModel.BaseInfo(),
      action: CartPlatformModel.ProductAction(),
      uid: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      type: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
      item_code: Joi.string().allow("").allow(null),
      categories: Joi.array().items(CartPlatformModel.CategoryInfo()),
      attributes: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
    });
  }

  /** @returns {BasePrice} */
  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      marked: Joi.number(),
      selling: Joi.number(),
    });
  }

  /** @returns {ArticleAppliedPriceAdjustment} */
  static ArticleAppliedPriceAdjustment() {
    return Joi.object({
      adjusted_value: Joi.object().pattern(/\S/, Joi.any()),
      article_level_distribution: Joi.boolean(),
      article_id: Joi.string().allow(""),
      applied_quantity: Joi.number(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
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
      name: Joi.string().allow("").allow(null),
      store_code: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ArticleGiftCard} */
  static ArticleGiftCard() {
    return Joi.object({
      gift_price: Joi.number(),
      display_text: Joi.string().allow("").allow(null),
      is_gift_applied: Joi.boolean(),
    });
  }

  /** @returns {ProductArticle} */
  static ProductArticle() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").allow(null),
      quantity: Joi.number(),
      seller: CartPlatformModel.BaseInfo(),
      cart_item_meta: Joi.object().pattern(/\S/, Joi.any()),
      parent_item_identifiers: Joi.object().pattern(/\S/, Joi.any()),
      is_gift_visible: Joi.boolean(),
      uid: Joi.string().allow(""),
      gift_card: CartPlatformModel.ArticleGiftCard(),
      product_group_tags: Joi.array()
        .items(Joi.string().allow(""))
        .allow(null, ""),
      identifier: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      mto_quantity: Joi.number(),
      extra_meta: Joi.object().pattern(/\S/, Joi.any()),
      type: Joi.string().allow(""),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      price: CartPlatformModel.ArticlePriceInfo(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      size: Joi.string().allow(""),
      store: CartPlatformModel.StoreInfo(),
      tags: Joi.array().items(Joi.string().allow("")),
      variants: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {PromoDiscountRuleOffer} */
  static PromoDiscountRuleOffer() {
    return Joi.object({
      max_offer_quantity: Joi.number().allow(null),
      discount_percentage: Joi.number().allow(null),
    });
  }

  /** @returns {PromoDiscountRuleRawOffer} */
  static PromoDiscountRuleRawOffer() {
    return Joi.object({
      buy_condition: Joi.string().allow(""),
      discount_type: Joi.string().allow(""),
      offer: CartPlatformModel.PromoDiscountRuleOffer(),
      item_criteria: CartPlatformModel.PromoDiscountRuleItemCriteria(),
    });
  }

  /** @returns {PromoDiscountRuleItemCriteria} */
  static PromoDiscountRuleItemCriteria() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),
      buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {DiscountRulesApp} */
  static DiscountRulesApp() {
    return Joi.object({
      offer: CartPlatformModel.PromoDiscountRuleOffer(),
      raw_offer: CartPlatformModel.PromoDiscountRuleRawOffer(),
      item_criteria: CartPlatformModel.PromoDiscountRuleItemCriteria(),
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {AppliedFreeArticles} */
  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),
      quantity: Joi.number(),
      article_id: Joi.string().allow(""),
      free_gift_item_details: CartPlatformModel.FreeGiftItems(),
    });
  }

  /** @returns {PromoBuyRuleCartConditions} */
  static PromoBuyRuleCartConditions() {
    return Joi.object({
      cart_quantity: CartPlatformModel.PromoBuyRuleCompareFieldsTypes(),
      cart_total: CartPlatformModel.PromoBuyRuleCompareFieldsTypes(),
      item_id: Joi.array().items(Joi.number()),
      item_store: Joi.array().items(Joi.number()),
      item_company: Joi.array().items(Joi.number()),
      item_brand: Joi.array().items(Joi.number()),
      item_exclude_brand: Joi.array().items(Joi.number()),
      item_category: Joi.array().items(Joi.number()),
      item_exclude_category: Joi.array().items(Joi.number()),
      item_l1_category: Joi.array().items(Joi.number()),
      item_exclude_l1_category: Joi.array().items(Joi.number()),
      item_l2_category: Joi.array().items(Joi.number()),
      item_exclude_l2_category: Joi.array().items(Joi.number()),
      item_department: Joi.array().items(Joi.number()),
      item_exclude_id: Joi.array().items(Joi.number()),
      available_zones: Joi.array().items(Joi.number()),
      product_tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PromoBuyRuleCompareFieldsTypes} */
  static PromoBuyRuleCompareFieldsTypes() {
    return Joi.object({
      greater_than_equals: Joi.number(),
      greater_than: Joi.number(),
      equals: Joi.number(),
      less_than: Joi.number(),
      less_than_equals: Joi.number(),
    });
  }

  /** @returns {BuyRules} */
  static BuyRules() {
    return Joi.object({
      cart_conditions: CartPlatformModel.PromoBuyRuleCartConditions(),
      item_criteria: Joi.object().pattern(/\S/, Joi.any()),
      all_items: Joi.boolean().allow(null),
      mrp_promo: Joi.boolean(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {AppliedPromotion} */
  static AppliedPromotion() {
    return Joi.object({
      id: Joi.string().allow(""),
      discount: Joi.number(),
      article_quantity: Joi.number(),
      original_article_quantity: Joi.number(),
      ownership: CartPlatformModel.Ownership(),
      currency: CartPlatformModel.CartCurrency(),
      discount_rules: Joi.array().items(CartPlatformModel.DiscountRulesApp()),
      applied_free_articles: Joi.array().items(
        CartPlatformModel.AppliedFreeArticles()
      ),
      promotion_name: Joi.string().allow(""),
      buy_rules: Joi.array().items(CartPlatformModel.BuyRules()),
      offer_text: Joi.string().allow(""),
      amount: Joi.number(),
      float_amount: Joi.string().allow(""),
      promotion_type: Joi.string().allow(""),
      mrp_promotion: Joi.boolean(),
      promotion_group: Joi.string().allow(""),
      promo_id: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      code: Joi.string().allow("").allow(null),
      offer_label: Joi.string().allow("").allow(null),
      return_allowed: Joi.boolean().allow(null),
      cancellation_allowed: Joi.boolean().allow(null),
      promo_code: Joi.string().allow("").allow(null),
      free_quantity: Joi.number().allow(null),
      offer_description: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PromiseFormatted} */
  static PromiseFormatted() {
    return Joi.object({
      max: Joi.string().allow("").allow(null),
      min: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PromiseISOFormat} */
  static PromiseISOFormat() {
    return Joi.object({
      max: Joi.string().allow("").allow(null),
      min: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PromiseTimestamp} */
  static PromiseTimestamp() {
    return Joi.object({
      max: Joi.number().allow(null),
      min: Joi.number().allow(null),
    });
  }

  /** @returns {ShipmentPromise} */
  static ShipmentPromise() {
    return Joi.object({
      formatted: CartPlatformModel.PromiseFormatted(),
      timestamp: CartPlatformModel.PromiseTimestamp(),
      iso: CartPlatformModel.PromiseISOFormat(),
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
      selling_price: Joi.number(),
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

  /** @returns {ParentItemIdentifiers} */
  static ParentItemIdentifiers() {
    return Joi.object({
      identifier: Joi.string().allow("").allow(null),
      parent_item_size: Joi.string().allow("").allow(null),
      parent_item_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CartItemMOQ} */
  static CartItemMOQ() {
    return Joi.object({
      increment_unit: Joi.number().allow(null),
      maximum: Joi.number().allow(null),
      minimum: Joi.number().allow(null),
    });
  }

  /** @returns {CartItemCustomOrder} */
  static CartItemCustomOrder() {
    return Joi.object({
      is_custom_order: Joi.boolean(),
      manufacturing_time: Joi.number(),
      manufacturing_time_unit: Joi.string().allow(""),
    });
  }

  /** @returns {CartProductInfo} */
  static CartProductInfo() {
    return Joi.object({
      quantity: Joi.number(),
      product: CartPlatformModel.CartProduct(),
      product_ean_id: Joi.string().allow(""),
      parent_item_identifiers: Joi.object().pattern(/\S/, Joi.any()),
      is_set: Joi.boolean().allow(null),
      article: CartPlatformModel.ProductArticle(),
      promotions_applied: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      key: Joi.string().allow(""),
      coupon: CartPlatformModel.CouponDetails(),
      bulk_offer: Joi.object().pattern(/\S/, Joi.any()),
      price_adjustment_applied: Joi.array().items(
        CartPlatformModel.ArticleAppliedPriceAdjustment()
      ),
      price: CartPlatformModel.ProductPriceInfo(),
      coupon_message: Joi.string().allow(""),
      identifiers: CartPlatformModel.CartProductIdentifer().required(),
      message: Joi.string().allow(""),
      discount: Joi.string().allow(""),
      availability: CartPlatformModel.ProductAvailability(),
      moq: CartPlatformModel.CartItemMOQ(),
      price_per_unit: CartPlatformModel.ProductPriceInfo(),
      promo_meta: CartPlatformModel.PromoMeta(),
      custom_order: CartPlatformModel.CartItemCustomOrder(),
      charges: Joi.array().items(Joi.number()),
      allow_remove: Joi.boolean(),
      auto_add_to_cart: Joi.boolean(),
      discount_meta: CartPlatformModel.DiscountMeta(),
    });
  }

  /** @returns {DiscountMeta} */
  static DiscountMeta() {
    return Joi.object({
      timer: Joi.boolean(),
      start_timer_in_minutes: Joi.number(),
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {PriceAdjustmentApplied} */
  static PriceAdjustmentApplied() {
    return Joi.object({
      article_id: Joi.string().allow(""),
      adjusted_value: Joi.object().pattern(/\S/, Joi.any()),
      applied_quantity: Joi.number(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      article_level_distribution: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {OpenapiCartDetailsResult} */
  static OpenapiCartDetailsResult() {
    return Joi.object({
      cart_id: Joi.number(),
      uid: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      id: Joi.string().allow(""),
      pan_config: Joi.object().pattern(/\S/, Joi.any()),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      common_config: CartPlatformModel.CartCommonConfig(),
      coupon: CartPlatformModel.CartDetailCoupon(),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      notification: Joi.object().pattern(/\S/, Joi.any()),
      staff_user_id: Joi.string().allow(""),
      success: Joi.boolean(),
      breakup_values: CartPlatformModel.CartBreakup(),
      is_valid: Joi.boolean(),
      currency: CartPlatformModel.CartCurrency(),
      checkout_mode: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      gstin: Joi.string().allow("").allow(null),
      applied_promo_details: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      pan_no: Joi.string().allow("").allow(null),
      custom_cart: CartPlatformModel.CustomCart(),
      price_adjustment_applied: Joi.array().items(
        CartPlatformModel.CartAppliedPriceAdjustment()
      ),
      is_pan_received: Joi.boolean(),
      custom_cart_meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {OpenApiErrorResult} */
  static OpenApiErrorResult() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      errors: Joi.object().pattern(/\S/, Joi.any()),
      error: Joi.object().pattern(/\S/, Joi.any()),
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {OpenApiCartServiceabilityPayload} */
  static OpenApiCartServiceabilityPayload() {
    return Joi.object({
      cart_items: Joi.array().items(CartPlatformModel.CartItem()).required(),
      shipping_address: CartPlatformModel.ShippingAddress().required(),
    });
  }

  /** @returns {OpenApiCartServiceabilityResult} */
  static OpenApiCartServiceabilityResult() {
    return Joi.object({
      cart_id: Joi.number(),
      uid: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      id: Joi.string().allow(""),
      pan_config: Joi.object().pattern(/\S/, Joi.any()),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      common_config: CartPlatformModel.CartCommonConfig(),
      coupon: CartPlatformModel.CartDetailCoupon(),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      notification: Joi.object().pattern(/\S/, Joi.any()),
      staff_user_id: Joi.string().allow(""),
      success: Joi.boolean(),
      breakup_values: CartPlatformModel.CartBreakup(),
      is_valid: Joi.boolean(),
      currency: CartPlatformModel.CartCurrency(),
      checkout_mode: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      gstin: Joi.string().allow("").allow(null),
      applied_promo_details: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      pan_no: Joi.string().allow("").allow(null),
      custom_cart: CartPlatformModel.CustomCart(),
      price_adjustment_applied: Joi.array().items(
        CartPlatformModel.CartAppliedPriceAdjustment()
      ),
      is_pan_received: Joi.boolean(),
      custom_cart_meta: Joi.object().pattern(/\S/, Joi.any()),
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
      extra_meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      extra_meta: Joi.object().pattern(/\S/, Joi.any()),
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
      employee_discount: Joi.object().pattern(/\S/, Joi.any()),
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
      platform_order_id: Joi.string().allow(""),
      extra_meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {OpenApiCheckoutResult} */
  static OpenApiCheckoutResult() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      order_ref_id: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {AbandonedCart} */
  static AbandonedCart() {
    return Joi.object({
      expire_at: Joi.string().allow("").required(),
      promotion: Joi.object().pattern(/\S/, Joi.any()),
      is_default: Joi.boolean().required(),
      comment: Joi.string().allow("").allow(null),
      articles: Joi.array().items(Joi.any()).required(),
      coupon: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      bulk_coupon_discount: Joi.number().allow(null),
      _id: Joi.string().allow("").required(),
      fynd_credits: Joi.object().pattern(/\S/, Joi.any()),
      fc_index_map: Joi.array().items(Joi.number()),
      order_id: Joi.string().allow(""),
      discount: Joi.number(),
      cod_charges: Joi.object().pattern(/\S/, Joi.any()),
      payments: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      payment_mode: Joi.string().allow("").allow(null),
      shipments: Joi.array().items(Joi.any()),
      pick_up_customer_details: Joi.object()
        .pattern(/\S/, Joi.any())
        .allow(null, ""),
      uid: Joi.number().required(),
      checkout_mode: Joi.string().allow(""),
      cart_value: Joi.number(),
      is_archive: Joi.boolean(),
      created_on: Joi.string().allow("").required(),
      last_modified: Joi.string().allow("").required(),
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      buy_now: Joi.boolean(),
      is_active: Joi.boolean(),
      cashback: Joi.object().pattern(/\S/, Joi.any()).required(),
      payment_methods: Joi.array().items(Joi.any()),
      gstin: Joi.string().allow("").allow(null),
      delivery_charges: Joi.object().pattern(/\S/, Joi.any()),
      merge_qty: Joi.boolean().allow(null),
      user_id: Joi.string().allow("").required(),
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {AbandonedCartResult} */
  static AbandonedCartResult() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.AbandonedCart()),
      result: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {CartCouponMedias} */
  static CartCouponMedias() {
    return Joi.object({
      alt: Joi.string().allow(""),
      url: Joi.string().allow(""),
      type: Joi.string().allow(""),
      key: Joi.string().allow(""),
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
      coupon_id: Joi.string().allow("").allow(null),
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
      medias: Joi.array().items(CartPlatformModel.CartCouponMedias()),
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

  /** @returns {CartAppliedPriceAdjustment} */
  static CartAppliedPriceAdjustment() {
    return Joi.object({
      remove_articles: Joi.boolean(),
      adjusted_value: Joi.object().pattern(/\S/, Joi.any()),
      article_level_distribution: Joi.boolean(),
      auto_remove: Joi.boolean(),
      applied_articles_ids: Joi.array().items(Joi.string().allow("")),
      message: Joi.string().allow(""),
      _type: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      restrictions: Joi.object().pattern(/\S/, Joi.any()),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {CustomCart} */
  static CustomCart() {
    return Joi.object({
      id: Joi.string().allow(""),
      cart_name: Joi.string().allow(""),
      cart_type: Joi.string().allow(""),
      is_universal: Joi.boolean(),
    });
  }

  /** @returns {CartDetailResult} */
  static CartDetailResult() {
    return Joi.object({
      cart_id: Joi.number(),
      uid: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      id: Joi.string().allow(""),
      pan_config: Joi.object().pattern(/\S/, Joi.any()),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      common_config: CartPlatformModel.CartCommonConfig(),
      coupon: CartPlatformModel.CartDetailCoupon(),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      notification: Joi.object().pattern(/\S/, Joi.any()),
      staff_user_id: Joi.string().allow(""),
      success: Joi.boolean(),
      breakup_values: CartPlatformModel.CartBreakup(),
      is_valid: Joi.boolean(),
      currency: CartPlatformModel.CartCurrency(),
      checkout_mode: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      price_adjustment_applied: Joi.array().items(
        CartPlatformModel.CartAppliedPriceAdjustment()
      ),
      buy_now: Joi.boolean(),
      gstin: Joi.string().allow("").allow(null),
      applied_promo_details: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      pan_no: Joi.string().allow("").allow(null),
      is_pan_received: Joi.boolean(),
      custom_cart: CartPlatformModel.CustomCart(),
      custom_cart_meta: Joi.object().pattern(/\S/, Joi.any()),
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
      price_factory_type_id: Joi.string().allow(""),
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
      article_id: Joi.string().allow(""),
      article_assignment: CartPlatformModel.ArticleAssignment(),
      store_id: Joi.number(),
      display: Joi.string().allow(""),
      item_id: Joi.number(),
      extra_meta: Joi.object().pattern(/\S/, Joi.any()),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      pos: Joi.boolean(),
      seller_identifier: Joi.string().allow(""),
    });
  }

  /** @returns {ArticleAssignment} */
  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
    });
  }

  /** @returns {AddCartPayload} */
  static AddCartPayload() {
    return Joi.object({
      new_cart: Joi.boolean(),
      items: Joi.array().items(CartPlatformModel.AddProductCart()),
    });
  }

  /** @returns {AddCartDetailResult} */
  static AddCartDetailResult() {
    return Joi.object({
      success: Joi.boolean(),
      cart: CartPlatformModel.CartDetailResult(),
      partial: Joi.boolean(),
      message: Joi.string().allow(""),
      result: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {UpdateProductCart} */
  static UpdateProductCart() {
    return Joi.object({
      quantity: Joi.number(),
      item_size: Joi.string().allow(""),
      parent_item_identifiers: Joi.object().pattern(/\S/, Joi.any()),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      extra_meta: Joi.object().pattern(/\S/, Joi.any()),
      _custom_json: Joi.object().pattern(/\S/, Joi.any()),
      price_factory_type_id: Joi.string().allow(""),
      item_id: Joi.number(),
      item_index: Joi.number(),
      identifiers: CartPlatformModel.CartProductIdentifer().required(),
      article_id: Joi.string().allow(""),
    });
  }

  /** @returns {FreeGiftItemCreation} */
  static FreeGiftItemCreation() {
    return Joi.object({
      promotion_id: Joi.string().allow("").required(),
      item_id: Joi.string().allow("").required(),
      item_size: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdateCartPayload} */
  static UpdateCartPayload() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.UpdateProductCart()),
      free_gift_items: Joi.array().items(
        CartPlatformModel.FreeGiftItemCreation()
      ),
      operation: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdateCartDetailResult} */
  static UpdateCartDetailResult() {
    return Joi.object({
      success: Joi.boolean(),
      cart: CartPlatformModel.CartDetailResult(),
      message: Joi.string().allow(""),
      result: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {OverrideCartItemPromo} */
  static OverrideCartItemPromo() {
    return Joi.object({
      restrictions: Joi.object().pattern(/\S/, Joi.any()),
      promo_id: Joi.string().allow("").required(),
      promo_amount: Joi.string().allow("").required(),
      promo_desc: Joi.string().allow(""),
      rwrd_tndr: Joi.string().allow(""),
      item_list: Joi.array().items(Joi.any().allow(null)),
      parent_promo_id: Joi.string().allow(""),
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
      extra_meta: Joi.object().pattern(/\S/, Joi.any()),
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
      billing_address: Joi.object().pattern(/\S/, Joi.any()),
      merchant_code: Joi.string().allow("").required(),
      payment_identifier: Joi.string().allow("").required(),
      currency_code: Joi.string().allow("").required(),
      aggregator: Joi.string().allow("").required(),
      order_type: Joi.string().allow("").required(),
      callback_url: Joi.string().allow(""),
      cart_items: Joi.array()
        .items(CartPlatformModel.OverrideCartItem())
        .required(),
      ordering_store: Joi.number().allow(null),
      shipping_address: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {OverrideCheckoutResult} */
  static OverrideCheckoutResult() {
    return Joi.object({
      data: Joi.object().pattern(/\S/, Joi.any()).required(),
      cart: Joi.object().pattern(/\S/, Joi.any()).required(),
      success: Joi.boolean().required(),
      order_id: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      app_intercept_url: Joi.string().allow(""),
      callback_url: Joi.string().allow(""),
      payment_confirm_url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GetShareCartLinkPayload} */
  static GetShareCartLinkPayload() {
    return Joi.object({
      id: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {GetShareCartLinkResult} */
  static GetShareCartLinkResult() {
    return Joi.object({
      token: Joi.string().allow(""),
      share_url: Joi.string().allow(""),
    });
  }

  /** @returns {SharedCartDetails} */
  static SharedCartDetails() {
    return Joi.object({
      source: Joi.object().pattern(/\S/, Joi.any()),
      user: Joi.object().pattern(/\S/, Joi.any()),
      token: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      ordering_store: Joi.number().allow(null),
      selected_staff: Joi.string().allow("").allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {SharedCart} */
  static SharedCart() {
    return Joi.object({
      cart_id: Joi.number(),
      coupon_text: Joi.string().allow(""),
      id: Joi.string().allow(""),
      pan_config: Joi.object().pattern(/\S/, Joi.any()),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      shared_cart_details: CartPlatformModel.SharedCartDetails(),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      common_config: CartPlatformModel.CartCommonConfig(),
      coupon: CartPlatformModel.CartDetailCoupon(),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      notification: Joi.object().pattern(/\S/, Joi.any()),
      staff_user_id: Joi.string().allow(""),
      success: Joi.boolean(),
      breakup_values: CartPlatformModel.CartBreakup(),
      is_valid: Joi.boolean(),
      uid: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      currency: CartPlatformModel.CartCurrency(),
      last_modified: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      gstin: Joi.string().allow("").allow(null),
      applied_promo_details: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      pan_no: Joi.string().allow("").allow(null),
      custom_cart: CartPlatformModel.CustomCart(),
      price_adjustment_applied: Joi.array().items(
        CartPlatformModel.CartAppliedPriceAdjustment()
      ),
      is_pan_received: Joi.boolean(),
      custom_cart_meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {SharedCartResult} */
  static SharedCartResult() {
    return Joi.object({
      cart: CartPlatformModel.SharedCart(),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {CartList} */
  static CartList() {
    return Joi.object({
      cart_id: Joi.string().allow(""),
      pick_up_customer_details: Joi.object().pattern(/\S/, Joi.any()),
      cart_value: Joi.number(),
      created_on: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
      item_counts: Joi.number(),
    });
  }

  /** @returns {MultiCartResult} */
  static MultiCartResult() {
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

  /** @returns {UserCartMappingResult} */
  static UserCartMappingResult() {
    return Joi.object({
      is_valid: Joi.boolean(),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
      cart: CartPlatformModel.CartDetailResult(),
      user: CartPlatformModel.CartMappingUserInfo(),
    });
  }

  /** @returns {CartMappingUserInfo} */
  static CartMappingUserInfo() {
    return Joi.object({
      _id: Joi.string().allow("").allow(null),
      uid: Joi.string().allow("").allow(null),
      first_name: Joi.string().allow("").allow(null),
      last_name: Joi.string().allow("").allow(null),
      mobile: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      gender: Joi.string().allow("").allow(null),
      created_at: Joi.string().allow("").allow(null),
      modified_on: Joi.string().allow("").allow(null),
      external_id: Joi.string().allow("").allow(null),
      is_pan_received: Joi.boolean(),
    });
  }

  /** @returns {PlatformAddCartPayload} */
  static PlatformAddCartPayload() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      new_cart: Joi.boolean(),
      items: Joi.array().items(CartPlatformModel.AddProductCart()),
    });
  }

  /** @returns {PlatformUpdateCartPayload} */
  static PlatformUpdateCartPayload() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.UpdateProductCart()),
      free_gift_items: Joi.array().items(
        CartPlatformModel.FreeGiftItemCreation()
      ),
      operation: Joi.string().allow("").required(),
    });
  }

  /** @returns {DeleteCartPayload} */
  static DeleteCartPayload() {
    return Joi.object({
      cart_id_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {DeleteCartDetailResult} */
  static DeleteCartDetailResult() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CartItemCountResult} */
  static CartItemCountResult() {
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
      start_date: Joi.string().allow("").allow(null),
      end_date: Joi.string().allow("").allow(null),
      coupon_applicable_message: Joi.string().allow(""),
      is_bank_offer: Joi.boolean(),
      offer_text: Joi.string().allow(""),
      coupon_amount: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      medias: Joi.array().items(CartPlatformModel.CartCouponMedias()),
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

  /** @returns {GetCouponResult} */
  static GetCouponResult() {
    return Joi.object({
      available_coupon_list: Joi.array().items(CartPlatformModel.Coupon()),
      page: CartPlatformModel.PageCoupon(),
    });
  }

  /** @returns {ApplyCouponPayload} */
  static ApplyCouponPayload() {
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
      pincode: Joi.number().allow(null),
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
      email: Joi.string().allow("").allow(null),
      area_code: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      google_map_point: Joi.object().pattern(/\S/, Joi.any()),
      cart_id: Joi.string().allow(""),
      city: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      area: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      address: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
      _custom_json: CartPlatformModel.AddressCustomJson(),
      uid: Joi.number(),
      is_anonymous: Joi.boolean(),
      app_id: Joi.string().allow(""),
      expire_at: Joi.string().allow("").allow(null),
      address_id: Joi.string().allow("").allow(null),
      store_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {AddressCustomJson} */
  static AddressCustomJson() {
    return Joi.object({
      meta_data: Joi.string().allow(""),
      meta_data_int: Joi.number(),
    });
  }

  /** @returns {ValidationConfig} */
  static ValidationConfig() {
    return Joi.object({
      address_max_limit: Joi.number().required(),
      user_address_count: Joi.number().required(),
    });
  }

  /** @returns {PlatformGetAddressesResult} */
  static PlatformGetAddressesResult() {
    return Joi.object({
      address: Joi.array().items(CartPlatformModel.PlatformAddress()),
      pii_masking: Joi.boolean(),
      validation_config: CartPlatformModel.ValidationConfig(),
    });
  }

  /** @returns {SaveAddressResult} */
  static SaveAddressResult() {
    return Joi.object({
      id: Joi.string().allow(""),
      success: Joi.boolean(),
      is_default_address: Joi.boolean(),
      address_id: Joi.any(),
    });
  }

  /** @returns {UpdateAddressResult} */
  static UpdateAddressResult() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_default_address: Joi.boolean(),
      success: Joi.boolean(),
      is_updated: Joi.boolean(),
      address_id: Joi.number().allow(null),
    });
  }

  /** @returns {DeleteAddressResult} */
  static DeleteAddressResult() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_deleted: Joi.boolean(),
      address_id: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformSelectCartAddressPayload} */
  static PlatformSelectCartAddressPayload() {
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

  /** @returns {ShipmentError} */
  static ShipmentError() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      value: Joi.array().items(Joi.string().allow("")),
      message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformShipmentResult} */
  static PlatformShipmentResult() {
    return Joi.object({
      shipments: Joi.number(),
      fulfillment_id: Joi.number(),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      dp_options: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      shipment_type: Joi.string().allow(""),
      order_type: Joi.string().allow(""),
      box_type: Joi.string().allow("").allow(null),
      promise: CartPlatformModel.ShipmentPromise(),
      dp_id: Joi.string().allow("").allow(null),
      fulfillment_type: Joi.string().allow(""),
      articles: Joi.array().items(CartPlatformModel.ShipmentArticle()),
      meta: CartPlatformModel.ShipmentMeta(),
      logistics_meta: CartPlatformModel.ShipmentLogisticsMeta(),
      error: CartPlatformModel.ShipmentError(),
    });
  }

  /** @returns {ShipmentMeta} */
  static ShipmentMeta() {
    return Joi.object({
      packaging_name: Joi.string().allow("").allow(null),
      dimension: CartPlatformModel.ShipmentMetaDimension(),
      assign_dp_from_sb: Joi.string().allow("").allow(null),
      dp_sort_key: Joi.string().allow("").allow(null),
      shipment_weight: Joi.number().allow(null),
      shipment_volumetric_weight: Joi.number().allow(null),
      shipment_chargeable_weight: Joi.number().allow(null),
      shipping_zone: Joi.string().allow("").allow(null),
      debug: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentMetaDimension} */
  static ShipmentMetaDimension() {
    return Joi.object({
      height: Joi.number(),
      length: Joi.number(),
      width: Joi.number(),
    });
  }

  /** @returns {ShipmentLogisticsMeta} */
  static ShipmentLogisticsMeta() {
    return Joi.object({
      account_options: Joi.array().items(
        CartPlatformModel.ShipmentLogisticsMetaAccount()
      ),
      account_info: Joi.object().pattern(/\S/, Joi.any()),
      dp_sort_key: Joi.string().allow("").allow(null),
      assign_dp_from_sb: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentLogisticsMetaAccount} */
  static ShipmentLogisticsMetaAccount() {
    return Joi.object({
      name: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").allow(null),
      fm_priority: Joi.number().allow(null),
      lm_priority: Joi.number().allow(null),
      rvp_priority: Joi.number().allow(null),
      type: Joi.string().allow("").allow(null),
      sub_type: Joi.string().allow("").allow(null),
      parent_id: Joi.string().allow("").allow(null),
      is_active: Joi.boolean().allow(null),
      payment_mode: Joi.string().allow("").allow(null),
      assign_dp_from_sb: Joi.string().allow("").allow(null),
      internal_account_id: Joi.string().allow("").allow(null),
      external_account_id: Joi.string().allow("").allow(null),
      f_priority: Joi.number().allow(null),
      r_priority: Joi.number().allow(null),
      dp_shipping_charges: Joi.number().allow(null),
      qc_enabled: Joi.boolean().allow(null),
      area_code: CartPlatformModel.ShipmentLogisticsMetaAccountAreaCode(),
      operations: Joi.array().items(Joi.string().allow("")),
      dp_tat: CartPlatformModel.ShipmentLogisticsMetaAccountDpTat(),
    });
  }

  /** @returns {ShipmentLogisticsMetaAccountAreaCode} */
  static ShipmentLogisticsMetaAccountAreaCode() {
    return Joi.object({
      from_pincode: Joi.string().allow("").allow(null),
      to_pincode: Joi.string().allow("").allow(null),
      source: Joi.string().allow("").allow(null),
      destination: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentLogisticsMetaAccountDpTat} */
  static ShipmentLogisticsMetaAccountDpTat() {
    return Joi.object({
      min: Joi.number().allow(null),
      max: Joi.number().allow(null),
    });
  }

  /** @returns {PlatformCartShipmentsResult} */
  static PlatformCartShipmentsResult() {
    return Joi.object({
      cart_id: Joi.number(),
      uid: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      id: Joi.string().allow(""),
      pan_config: Joi.object().pattern(/\S/, Joi.any()),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      common_config: CartPlatformModel.CartCommonConfig(),
      coupon: CartPlatformModel.CartDetailCoupon(),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      notification: Joi.object().pattern(/\S/, Joi.any()),
      staff_user_id: Joi.string().allow("").allow(null),
      success: Joi.boolean(),
      breakup_values: CartPlatformModel.CartBreakup(),
      is_valid: Joi.boolean(),
      currency: CartPlatformModel.CartCurrency(),
      checkout_mode: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      gstin: Joi.string().allow("").allow(null),
      applied_promo_details: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      pan_no: Joi.string().allow("").allow(null),
      custom_cart: CartPlatformModel.CustomCart(),
      price_adjustment_applied: Joi.array().items(
        CartPlatformModel.CartAppliedPriceAdjustment()
      ),
      shipments: Joi.array().items(CartPlatformModel.PlatformShipmentResult()),
      error: Joi.boolean(),
      is_pan_received: Joi.boolean(),
      custom_cart_meta: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {UpdateCartShipmentPayload} */
  static UpdateCartShipmentPayload() {
    return Joi.object({
      shipments: Joi.array()
        .items(CartPlatformModel.UpdateCartShipmentItem())
        .required(),
    });
  }

  /** @returns {PlatformCartMetaPayload} */
  static PlatformCartMetaPayload() {
    return Joi.object({
      gstin: Joi.string().allow(""),
      pick_up_customer_details: Joi.object().pattern(/\S/, Joi.any()),
      checkout_mode: Joi.string().allow(""),
      gift_details: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      pan_no: Joi.string().allow(""),
      is_pan_received: Joi.boolean(),
      comment: Joi.string().allow(""),
      staff_user_id: Joi.string().allow("").allow(null),
      delivery_slots: Joi.object().pattern(/\S/, Joi.any()),
      custom_cart_meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {CartMetaResult} */
  static CartMetaResult() {
    return Joi.object({
      is_valid: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CartMetaMissingResult} */
  static CartMetaMissingResult() {
    return Joi.object({
      errors: CartPlatformModel.CartMetaFieldsValidation(),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
      meta: CartPlatformModel.CartMetaFieldsValidation(),
    });
  }

  /** @returns {CartMetaFieldsValidation} */
  static CartMetaFieldsValidation() {
    return Joi.object({
      pan_no: Joi.array().items(Joi.string().allow("")),
      gstin: Joi.array().items(Joi.string().allow("")),
      checkout_mode: Joi.array().items(Joi.string().allow("")),
      comment: Joi.array().items(Joi.string().allow("")),
      pick_up_customer_details: Joi.array().items(Joi.string().allow("")),
      gift_details: Joi.array().items(Joi.string().allow("")),
      staff_user_id: Joi.array().items(Joi.string().allow("")),
      delivery_slots: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {PlatformCartCheckoutDetailPayload} */
  static PlatformCartCheckoutDetailPayload() {
    return Joi.object({
      custom_meta: Joi.array().items(
        CartPlatformModel.CartCheckoutCustomMeta()
      ),
      address_id: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_params: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      payment_auto_confirm: Joi.boolean(),
      id: Joi.string().allow("").required(),
      pos: Joi.boolean(),
      billing_address_id: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      pick_at_store_uid: Joi.number().allow(null),
      device_id: Joi.string().allow("").allow(null),
      delivery_address: Joi.object().pattern(/\S/, Joi.any()),
      payment_mode: Joi.string().allow("").required(),
      checkout_mode: Joi.string().allow(""),
      customer_details: CartPlatformModel.CustomerDetails(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      staff: CartPlatformModel.StaffCheckout(),
      employee_code: Joi.string().allow("").allow(null),
      billing_address: Joi.object().pattern(/\S/, Joi.any()),
      callback_url: Joi.string().allow("").allow(null),
      user_id: Joi.string().allow("").allow(null),
      extra_meta: Joi.object().pattern(/\S/, Joi.any()),
      order_type: Joi.string().allow("").required(),
      files: Joi.array().items(CartPlatformModel.Files()),
      ordering_store: Joi.number().allow(null),
      payment_extra_identifiers: Joi.object().pattern(/\S/, Joi.any()),
      iin: Joi.string().allow(""),
      network: Joi.string().allow(""),
      type: Joi.string().allow(""),
      card_id: Joi.string().allow(""),
    });
  }

  /** @returns {CheckCart} */
  static CheckCart() {
    return Joi.object({
      cart_id: Joi.number(),
      uid: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      id: Joi.string().allow(""),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      common_config: CartPlatformModel.CartCommonConfig(),
      coupon: CartPlatformModel.CartDetailCoupon(),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      notification: Joi.object().pattern(/\S/, Joi.any()),
      staff_user_id: Joi.string().allow(""),
      success: Joi.boolean(),
      breakup_values: CartPlatformModel.CartBreakup(),
      is_valid: Joi.boolean(),
      currency: CartPlatformModel.CartCurrency(),
      checkout_mode: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      gstin: Joi.string().allow("").allow(null),
      applied_promo_details: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      pan_no: Joi.string().allow("").allow(null),
      custom_cart: CartPlatformModel.CustomCart(),
      price_adjustment_applied: Joi.array().items(
        CartPlatformModel.CartAppliedPriceAdjustment()
      ),
      is_pan_received: Joi.boolean(),
      pan_config: Joi.object().pattern(/\S/, Joi.any()),
      order_id: Joi.string().allow(""),
      custom_cart_meta: Joi.object().pattern(/\S/, Joi.any()),
      error_message: Joi.string().allow(""),
      user_type: Joi.string().allow(""),
      cod_charges: Joi.number(),
      cod_message: Joi.string().allow(""),
      delivery_charge_order_value: Joi.number(),
      store_code: Joi.string().allow(""),
      store_emps: Joi.array().items(Joi.any()),
      cod_available: Joi.boolean(),
      delivery_charges: Joi.number(),
    });
  }

  /** @returns {CartCheckoutResult} */
  static CartCheckoutResult() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),
      data: Joi.object().pattern(/\S/, Joi.any()),
      cart: CartPlatformModel.CheckCart(),
      success: Joi.boolean(),
      callback_url: Joi.string().allow(""),
      payment_confirm_url: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CartDeliveryModesResult} */
  static CartDeliveryModesResult() {
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
      phone: Joi.string().allow("").allow(null),
      area_code: Joi.string().allow(""),
      uid: Joi.number(),
      area_code_slug: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      id: Joi.number(),
      store_manager_name: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      email: Joi.string().allow("").allow(null),
      pincode: Joi.number(),
      address: Joi.string().allow(""),
      sector: Joi.string().allow("").allow(null),
      state_code: Joi.string().allow("").allow(null),
      geo_location: CartPlatformModel.GeoLocation(),
    });
  }

  /** @returns {StoreDetailsResult} */
  static StoreDetailsResult() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.PickupStoreDetail()),
      data: Joi.array().items(CartPlatformModel.PickupStoreDetail()),
    });
  }

  /** @returns {UpdateCartPaymentPayload} */
  static UpdateCartPaymentPayload() {
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
      error_en: Joi.string().allow("").allow(null),
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
      payment_identifier: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
      name: Joi.string().allow(""),
      payment_extra_identifiers: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {PlatformCartCheckoutDetailV2Payload} */
  static PlatformCartCheckoutDetailV2Payload() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_params: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      custom_meta: Joi.array().items(
        CartPlatformModel.CartCheckoutCustomMeta()
      ),
      payment_auto_confirm: Joi.boolean(),
      id: Joi.string().allow("").required(),
      pos: Joi.boolean(),
      billing_address_id: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      pick_at_store_uid: Joi.number().allow(null),
      device_id: Joi.string().allow("").allow(null),
      delivery_address: Joi.object().pattern(/\S/, Joi.any()),
      payment_mode: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      customer_details: CartPlatformModel.CustomerDetails(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      payment_methods: Joi.array()
        .items(CartPlatformModel.PaymentMethod())
        .required(),
      staff: CartPlatformModel.StaffCheckout(),
      employee_code: Joi.string().allow("").allow(null),
      billing_address: Joi.object().pattern(/\S/, Joi.any()),
      callback_url: Joi.string().allow("").allow(null),
      user_id: Joi.string().allow("").allow(null),
      extra_meta: Joi.object().pattern(/\S/, Joi.any()),
      order_type: Joi.string().allow("").required(),
      files: Joi.array().items(CartPlatformModel.Files()),
      ordering_store: Joi.number().allow(null),
      iin: Joi.string().allow(""),
      network: Joi.string().allow(""),
      type: Joi.string().allow(""),
      card_id: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateCartPaymentPayloadV2} */
  static UpdateCartPaymentPayloadV2() {
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

  /** @returns {PriceMinMax} */
  static PriceMinMax() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {ItemPriceDetails} */
  static ItemPriceDetails() {
    return Joi.object({
      marked: CartPlatformModel.PriceMinMax(),
      effective: CartPlatformModel.PriceMinMax(),
      currency: Joi.string().allow(""),
    });
  }

  /** @returns {ArticlePriceDetails} */
  static ArticlePriceDetails() {
    return Joi.object({
      marked: Joi.number(),
      effective: Joi.number(),
    });
  }

  /** @returns {FreeGiftItems} */
  static FreeGiftItems() {
    return Joi.object({
      item_slug: Joi.string().allow(""),
      item_name: Joi.string().allow(""),
      item_price_details: CartPlatformModel.ItemPriceDetails(),
      article_price: CartPlatformModel.ArticlePriceDetails(),
      item_brand_name: Joi.string().allow(""),
      item_id: Joi.number(),
      available_sizes: Joi.array().items(Joi.string().allow("")),
      size: Joi.string().allow(""),
      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PromotionOffer} */
  static PromotionOffer() {
    return Joi.object({
      id: Joi.string().allow(""),
      buy_rules: Joi.object().pattern(/\S/, Joi.any()),
      offer_text: Joi.string().allow(""),
      promotion_type: Joi.string().allow(""),
      promotion_name: Joi.string().allow(""),
      promotion_group: Joi.string().allow(""),
      valid_till: Joi.string().allow(""),
      discount_rules: Joi.array().items(Joi.any()),
      free_gift_items: Joi.array().items(CartPlatformModel.FreeGiftItems()),
      description: Joi.string().allow(""),
      is_bank_offer: Joi.boolean(),
    });
  }

  /** @returns {PromotionOffersResult} */
  static PromotionOffersResult() {
    return Joi.object({
      available_promotions: Joi.array().items(
        CartPlatformModel.PromotionOffer()
      ),
    });
  }

  /** @returns {PromotionPaymentOffer} */
  static PromotionPaymentOffer() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      buy_rules: Joi.array().items(Joi.any()),
      calculate_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      discount_rules: Joi.array().items(Joi.any()),
      id: Joi.string().allow(""),
      offer_text: Joi.string().allow(""),
      promotion_group: Joi.string().allow(""),
      promotion_type: Joi.string().allow(""),
      promotion_name: Joi.string().allow(""),
    });
  }

  /** @returns {PromotionPaymentOffersDetails} */
  static PromotionPaymentOffersDetails() {
    return Joi.object({
      success: Joi.boolean(),
      promotions: Joi.array().items(CartPlatformModel.PromotionPaymentOffer()),
    });
  }

  /** @returns {CouponOptions} */
  static CouponOptions() {
    return Joi.object({
      types: CartPlatformModel.CouponOptionTypes(),
      scopes: CartPlatformModel.CouponOptionScopes(),
      applicable_on: CartPlatformModel.CouponOptionsApplicable(),
      value_types: CartPlatformModel.CouponOptionsValueTypes(),
      calculate_on: CartPlatformModel.CouponOptionsCalculate(),
      payable_category: CartPlatformModel.CouponOptionsPayableCategory(),
      txn_mode: CartPlatformModel.CouponOptionsTxnMode(),
      payable_by: CartPlatformModel.CouponOptionsPayableBy(),
    });
  }

  /** @returns {CouponOptionTypes} */
  static CouponOptionTypes() {
    return Joi.object({
      absolute: Joi.string().allow(""),
      percentage: Joi.string().allow(""),
      bogo: Joi.string().allow(""),
      bundle: Joi.string().allow(""),
    });
  }

  /** @returns {CouponOptionScopes} */
  static CouponOptionScopes() {
    return Joi.object({
      category_id: Joi.string().allow(""),
      brand_id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      store_id: Joi.string().allow(""),
      collection_id: Joi.string().allow(""),
      exclude_brand_id: Joi.string().allow(""),
      category_department: Joi.string().allow(""),
      l1_category_id: Joi.string().allow(""),
      l2_category_id: Joi.string().allow(""),
      exclude_category_id: Joi.string().allow(""),
      exclude_l1_category_id: Joi.string().allow(""),
      exclude_l2_category_id: Joi.string().allow(""),
      item_tags: Joi.string().allow(""),
      tags: Joi.string().allow(""),
      zones_id: Joi.string().allow(""),
      cart_type: Joi.string().allow(""),
    });
  }

  /** @returns {CouponOptionsApplicable} */
  static CouponOptionsApplicable() {
    return Joi.object({
      amount: Joi.string().allow(""),
      quantity: Joi.string().allow(""),
    });
  }

  /** @returns {CouponOptionsValueTypes} */
  static CouponOptionsValueTypes() {
    return Joi.object({
      absolute: Joi.string().allow(""),
      percentage: Joi.string().allow(""),
      quantity: Joi.string().allow(""),
      flat_price: Joi.string().allow(""),
    });
  }

  /** @returns {CouponOptionsCalculate} */
  static CouponOptionsCalculate() {
    return Joi.object({
      mrp: Joi.string().allow(""),
      esp: Joi.string().allow(""),
      tp: Joi.string().allow(""),
    });
  }

  /** @returns {CouponOptionsPayableCategory} */
  static CouponOptionsPayableCategory() {
    return Joi.object({
      fynd: Joi.string().allow(""),
      seller: Joi.string().allow(""),
    });
  }

  /** @returns {CouponOptionsTxnMode} */
  static CouponOptionsTxnMode() {
    return Joi.object({
      fynd_cash: Joi.string().allow(""),
      cash: Joi.string().allow(""),
      coupon: Joi.string().allow(""),
    });
  }

  /** @returns {CouponOptionsPayableBy} */
  static CouponOptionsPayableBy() {
    return Joi.object({
      fynd_marketing: Joi.string().allow(""),
      fynd: Joi.string().allow(""),
      fynd_store: Joi.string().allow(""),
      fynd_delights: Joi.string().allow(""),
      fynd_ops: Joi.string().allow(""),
      fynd_inventory: Joi.string().allow(""),
    });
  }

  /** @returns {SelectAddressResponseError} */
  static SelectAddressResponseError() {
    return Joi.object({
      message: Joi.string().allow(""),
      cart_id: Joi.number(),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      address: CartPlatformModel.AllAddressForSelectAddress(),
    });
  }

  /** @returns {AllAddressForSelectAddress} */
  static AllAddressForSelectAddress() {
    return Joi.object({
      address: Joi.array().items(CartPlatformModel.PlatformAddress()),
      pii_masking: Joi.boolean(),
      validation_config: CartPlatformModel.ValidationConfig(),
    });
  }

  /** @returns {OperationErrorResult} */
  static OperationErrorResult() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {ValidationError} */
  static ValidationError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      field: Joi.string().allow("").required(),
    });
  }
}
module.exports = CartPlatformModel;
