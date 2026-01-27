export = CartPlatformModel;
/**
 * @typedef RedeemLoyaltyPoints
 * @property {boolean} redeem_points - Marks if engage points are to be redeemed
 *   for the given cart.
 */
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
 * @property {string} payable_category - Coupon amount payable category
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
 * @property {boolean} [is_public] - Coupon is publicaly available or not
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
 * @property {PaymentModes} [payments]
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
 * @typedef CouponSchedule
 * @property {string} [end] - The end date of coupon
 * @property {string} [start] - The start date of coupon
 * @property {Object[]} [next_schedule] - List of date time, which we will
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
 * @property {string} [type] - Type of coupon like absolute, percentage etc.
 * @property {boolean} [is_exact] - Flag is true then use coupon applicable
 *   articles for calculation
 * @property {string} [applicable_on] - Coupon will be applicable on either
 *   amount or quantity
 * @property {string} [calculate_on] - Article Price on which coupon calculated
 *   like effective price or marked price
 * @property {string} [value_type] - Define the type of coupon value
 * @property {string[]} [scope] - List of item level rule applicable for coupon
 */
/**
 * @typedef CouponAdd
 * @property {CouponDateMeta} [date_meta]
 * @property {Ownership} [ownership]
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
 * @property {Rule[]} [rule]
 * @property {DisplayMeta} [display_meta]
 * @property {string} code - Unique code of coupon
 * @property {string} type_slug - The type slug of coupon discount
 * @property {Identifier} [identifiers]
 * @property {Validity} [validity]
 * @property {RuleDefinition} [rule_definition]
 * @property {string} [_id] - Unique identifier of coupon
 */
/**
 * @typedef Page
 * @property {number} [item_total] - The total number of all items across all pages.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, can be 'cursor' or 'number'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */
/**
 * @typedef CouponsResult
 * @property {CouponAdd[]} [items] - Coupons list for sales channel
 * @property {Page} [page]
 */
/**
 * @typedef SuccessMessage
 * @property {boolean} [success] - Whether the request was successful (true/false).
 * @property {string} [message] - Response message needs to display
 */
/**
 * @typedef OperationErrorResult
 * @property {boolean} [success] - Whether the request was successful (true/false).
 * @property {string} [message] - Response message needs to display
 * @property {string} [error] - Response error message in detail
 */
/**
 * @typedef CouponUpdate
 * @property {CouponDateMeta} [date_meta]
 * @property {Ownership} [ownership]
 * @property {CouponAuthor} [author]
 * @property {State} [state]
 * @property {Restrictions} [restrictions]
 * @property {Validation} [validation]
 * @property {CouponAction} [action]
 * @property {string[]} [tags] - List of tags specify to platform
 * @property {CouponSchedule} [_schedule]
 * @property {Rule[]} [rule]
 * @property {DisplayMeta} [display_meta]
 * @property {string} code - Unique code that is used to apply coupon
 * @property {string} [coupon_type] - The type of coupon like bulk or single
 * @property {string} [coupon_prefix] - Bulk coupon code prefix string
 * @property {number} [coupon_counts] - Counts of culk coupon
 * @property {string} [reason] - Coupon rejection reason added by reviewer
 * @property {string} type_slug - The type slug of coupon discount
 * @property {Identifier} [identifiers]
 * @property {Validity} [validity]
 * @property {RuleDefinition} [rule_definition]
 */
/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive] - Send true to unpublish coupon
 * @property {CouponSchedule} [schedule]
 */
/**
 * @typedef CouponCreateResult
 * @property {boolean} [success] - Whether the request was successful (true/false)
 * @property {string} [message] - Create coupon response message that can shown
 *   to creator user
 * @property {string} [_id] - Unique identifier for coupon created
 */
/**
 * @typedef DisplayMeta1
 * @property {string} [description] - Define details about the offer in promotion
 * @property {string} [offer_label] - Offer label of promotion that needs to display
 * @property {string} [name] - Name of promotion that needs to display
 * @property {string} [offer_text] - Promotion offer text used to display
 */
/**
 * @typedef Ownership1
 * @property {string} [payable_category] - Promotion amount payable category
 * @property {string} [payable_by] - Promotion amount bearable party
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
 * @typedef BuyRuleItemCriteria
 * @property {CompareObject} [cart_quantity]
 * @property {string[]} [available_zones] - List of all zones on which promotion
 *   is applicable
 * @property {number[]} [item_exclude_company] - List of all company ids on
 *   which promotion is not applicable
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
 * @property {number[]} [item_exclude_store] - List of all store ids on which
 *   promotion is not applicable
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
 * @property {ItemSizeMapping} [meta]
 */
/**
 * @typedef DiscountItemCriteria
 * @property {number[]} [item_store] - List of all store ids on which promotion
 *   is applicable
 * @property {number[]} [item_company] - List of all company ids on which
 *   promotion is applicable
 * @property {number[]} [item_brand] - List of all brand ids on which promotion
 *   is applicable
 * @property {number[]} [item_exclude_brand] - List of all brand ids on which
 *   promotion is not applicable
 * @property {number[]} [item_category] - List of all L3 category on which
 *   promotion is applicable
 * @property {number[]} [item_exclude_category] - List of all L3 category on
 *   which promotion is not applicable
 * @property {number[]} [item_l1_category] - List of all L1 category on which
 *   promotion is applicable
 * @property {number[]} [item_exclude_l1_category] - List of all item ids on
 *   which promotion is not applicable
 * @property {number[]} [item_l2_category] - List of all L2 category on which
 *   promotion is applicable
 * @property {number[]} [item_exclude_l2_category] - List of all L2 category on
 *   which promotion is not applicable
 * @property {number[]} [item_department] - List of all departments ids on which
 *   promotion is applicable
 * @property {number[]} [item_exclude_department] - List of all department ids
 *   on which promotion is not applicable
 * @property {number[]} [item_id] - List of all item ids on which promotion is applicable
 * @property {number[]} [item_exclude_id] - List of all item ids on which
 *   promotion is not applicable
 * @property {string[]} [buy_rules] - Buy rules that apply to this discount
 * @property {string[]} [available_zones] - List of all zones ids on which
 *   promotion is applicable
 * @property {string[]} [product_tags] - Product tags that qualify for the discount
 * @property {boolean} [all_items] - Whether the discount applies to all items
 */
/**
 * @typedef DiscountOffer
 * @property {number} [max_discount_amount] - Maximum discount amount in promotion
 * @property {number} [discount_price] - Discount price which is price after
 *   deducting discount amount in fixed price promotion
 * @property {boolean} [apportion_discount] - Flag to distribute discount for each article
 * @property {boolean} [partial_can_ret] - Flag indicated return the product partially
 * @property {number} [max_usage_per_transaction] - Maximum usage per
 *   transaction in promotion
 * @property {number} [min_offer_quantity] - Minimum quantity of offer in promotion
 * @property {string} [code] - Unique code of promotion
 * @property {number} [discount_amount] - Discount amount in promotion
 * @property {number} [discount_percentage] - Discount percentage in promotion
 * @property {number} [max_offer_quantity] - Maximum quantity of product in promotion
 * @property {number} [item_sequence_number] - Cart sequence number of item for
 *   which offer is valid
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
 * @property {UsesRestriction1} [uses]
 * @property {number[]} [ordering_stores] - List of store id on which promotion
 *   is applicable
 */
/**
 * @typedef PromotionSchedule
 * @property {string} [end] - Then end date of promotion till valid
 * @property {string} [start] - Then start date of promotion is valid
 * @property {string} [status] - Promotion status like draft, review
 * @property {boolean} [published] - The status of promotion is published or not
 * @property {Object[]} [next_schedule] - List of date time, which we will
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
 * @property {string} mode - Promotion mode, like coupon or promotion
 * @property {boolean} [apply_all_discount] - Prevents more than one promotion discounts
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} ownership
 * @property {string} promotion_type - Type of the promotion
 * @property {DiscountRule[]} discount_rules - Discount rules based on which
 *   promotion will be applied
 * @property {Restrictions1} [restrictions]
 * @property {string} [currency] - Currency used for promotion
 * @property {boolean} [is_processed] - Flag to verify if promotion is ready to
 *   be applied on cart and ready to update promotion
 * @property {string} [code] - Unique code of promotion
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionAction} [post_order_action]
 * @property {number} [apply_priority] - Priority based on which promotion are
 *   applied on articles
 * @property {PromotionAuthor} [author]
 * @property {Visibility} [visiblility]
 * @property {string} application_id - Application id in which promotion will be used
 * @property {ItemCriteria} buy_rules
 * @property {Object} [_custom_json] - Custom data stored in promotion
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [_id] - Unique identifier of promotion
 * @property {string[]} [tags] - List of tags on which promotion is applicable
 * @property {boolean} [auto_apply] - Boolean value to determine if the
 *   promotion should be applied automatically or not
 */
/**
 * @typedef PromotionsResult
 * @property {PromotionListItem[]} [items] - List of promotions
 * @property {Page} [page]
 */
/**
 * @typedef PromotionAdd
 * @property {boolean} [stackable] - Boolean value set true to apply other promotions also
 * @property {string} [calculate_on] - Article Price on which promotion
 *   calculated like effective price or marked price. Only available for
 *   Contract pricing and Ladder pricing promotion type
 * @property {string} [apply_exclusive] - Promotion should apply on either
 *   article or cart.
 * @property {string} promo_group - The type of promotion group
 * @property {string} mode - Promotion mode, like coupon or promotion
 * @property {boolean} [apply_all_discount] - True means to apply all discount offers
 * @property {DisplayMeta1} [display_meta]
 * @property {Ownership1} [ownership]
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
 * @property {BuyRuleItemCriteria} [buy_rules]
 * @property {Object} [_custom_json] - Set extra properties in promotion
 * @property {PromotionDateMeta} [date_meta]
 * @property {string[]} [tags] - List of tags applicable for promotion
 * @property {boolean} [auto_apply] - Boolean value to determine if the
 *   promotion should be applied automatically or not
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
 * @property {Ownership1} [ownership]
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
 * @property {ItemCriteria} [buy_rules]
 * @property {Object} [_custom_json] - Set extra properties in promotion
 * @property {PromotionDateMeta} [date_meta]
 * @property {string[]} [tags] - List of tags applicable for promotion
 * @property {boolean} [auto_apply] - Boolean value to determine if the
 *   promotion should be applied automatically or not
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
 * @property {Ownership1} [ownership]
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
 * @property {ItemCriteria} [buy_rules]
 * @property {Object} [_custom_json] - Set extra properties in promotion
 * @property {PromotionDateMeta} [date_meta]
 * @property {string[]} [tags] - List of tags applicable for promotion
 * @property {boolean} [auto_apply] - Boolean value to determine if the
 *   promotion should be applied automatically or not
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
 * @property {Ownership1} [ownership]
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
 * @property {BuyRuleItemCriteria} [buy_rules]
 * @property {Object} [_custom_json] - Set extra properties in promotion
 * @property {PromotionDateMeta} [date_meta]
 * @property {string[]} [tags] - List of tags applicable for promotion
 * @property {boolean} [auto_apply] - Boolean value to determine if the
 *   promotion should be applied automatically or not
 */
/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive] - Send true to unpublish promotion
 * @property {PromotionSchedule} [schedule]
 */
/**
 * @typedef ActivePromosResult
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
 * @typedef CartMetaConfigUpdate
 * @property {number} [min_cart_value] - Minimum order value to checkout
 * @property {number} [max_cart_value] - Maximum order value to checkout
 * @property {boolean} [bulk_coupons] - Indicates bulk coupon applicable for cart
 * @property {number} [max_cart_items] - Maximum cart items to checkout
 * @property {string} [gift_display_text] - Free gift charges text to show
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [revenue_engine_coupon] - It define credit coupon
 *   applicable for cart
 * @property {number} [gift_pricing] - Free gift charges per product
 * @property {boolean} [enabled] - Enabled flag for cart configuration
 */
/**
 * @typedef CartMetaConfigAdd
 * @property {number} [min_cart_value] - Minimum order value to checkout
 * @property {number} [max_cart_value] - Maximum order value to checkout
 * @property {boolean} [bulk_coupons] - Indicates bulk coupon applicable for cart
 * @property {number} [max_cart_items] - Maximum cart items to checkout
 * @property {string} [gift_display_text] - Free gift charges text to show
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [revenue_engine_coupon] - It define credit coupon
 *   applicable for cart
 * @property {number} [gift_pricing] - Free gift charges per product
 * @property {boolean} [enabled] - Enabled flag for cart configuration
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
 * @property {boolean} [allowed_refund] - Flag indicating whether refunds are
 *   allowed at article level
 * @property {number} [min_price_threshold] - Minimum allowed net price for the
 *   article. If the article's price after all discounts and adjustments falls
 *   below this threshold, the price adjustment will be automatically removed.
 *   (Applicable only for price adjustment discount type)
 * @property {number} [article_index] - Index of the line item in the cart
 */
/**
 * @typedef PriceAdjustmentRestrictions
 * @property {Object} [post_order] - This field holds the post-order
 *   restrictions, indicated by nested fields ['cancellation_allowed','return_allowed']
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
 *   allowed at cart level
 * @property {boolean} is_authenticated - Flag indicating whether the user is
 *   authenticated
 * @property {Article[]} article_ids - The list of article object in the price adjustment
 * @property {boolean} [auto_remove] - This field if set true will remove mop
 *   type price adjustment.
 * @property {Object} [meta] - Additional information regarding price adjustment
 * @property {string} cart_id - Unique identifier of the cart
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
 *   allowed at cart level
 * @property {boolean} is_authenticated - Flag indicating whether the user is
 *   authenticated
 * @property {Article[]} article_ids - The list of article object in the price adjustment
 * @property {boolean} [auto_remove] - This field if set true will remove mop
 *   type price adjustment.
 * @property {Object} [meta] - Additional information regarding price adjustment
 * @property {string} cart_id - Unique identifier of the cart
 * @property {DistributionLogic} [distribution_logic]
 */
/**
 * @typedef PriceAdjustmentResult
 * @property {PriceAdjustment} [data]
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
 *   allowed at cart level
 * @property {boolean} is_authenticated - Flag indicating whether the user is
 *   authenticated
 * @property {Article[]} article_ids - The list of article object in the price adjustment
 * @property {Object} [meta] - Additional information regarding price adjustment
 * @property {string} cart_id - Unique identifier of the cart
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
 * @typedef OpenapiCartDetailsCreation
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
 */
/**
 * @typedef LoyaltyPoints
 * @property {boolean} [is_applied] - Whether the loyalty points are applied on the cart
 * @property {number} [total] - Total loyalty points available with user
 * @property {number} [applicable] - Whether the loyalty points are applicable
 *   for the cart
 * @property {string} [description] - Description for loyalty points
 * @property {number} [total_points] - Total engage points available.
 * @property {number} [points] - Engage points applied on the cart.
 * @property {number} [amount] - Engage points amount applied on the cart.
 * @property {number} [mop_amount] - Engage discount amount applied on the cart
 *   as payment mode.
 * @property {number} [earn_points] - Engage points that can be earned on the
 *   cart. for ex. (You’ll earn 56 points from this order!)
 * @property {number} [earn_points_amount] - Engage points amount that can be
 *   earned on the cart. for ex. or ex. (You’ll earn ₹56 from this order!)
 * @property {string} [earn_title] - Title to show how many earn points are
 *   gained for this order.
 * @property {string} [title] - Unique title for loyalty program applicable.
 */
/**
 * @typedef RawBreakup
 * @property {number} [coupon] - Coupon amount applied to cart
 * @property {number} [gst_charges] - GST charges applied on cart
 * @property {number} [mrp_total] - Maximum price total amount of all products in cart
 * @property {number} [engage_amount] - Engage points amount applied on the cart.
 * @property {number} [engage_mop_amount] - Engage mop amount applied on the cart.
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
 * @property {number} [subtotal] - Selling price amount of all products in cart
 * @property {number} [convenience_fee] - Convenience fee amount applied to cart
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
 * @property {number} [uid] - Unique identifier of entities like brand or seller
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
 * @property {string} [type] - Type of action
 * @property {string} [url] - Url of the product to render the product
 * @property {ActionQuery} [query]
 * @property {ProductActionPage} [page]
 */
/**
 * @typedef CategoryInfo
 * @property {number} [uid] - Unique identifier of Product Category
 * @property {string} [name] - Category name of the product
 */
/**
 * @typedef CartProduct
 * @property {string} [slug] - Unique product url name generated via product
 *   name and other meta data
 * @property {ProductImage[]} [images] - Product Images urls of different types
 *   like secure url, aspect ration url and url
 * @property {Tags} [teaser_tag]
 * @property {BaseInfo} [brand]
 * @property {ProductAction} [action]
 * @property {number} [uid] - Unique identifier of the product in cart
 * @property {string[]} [tags] - Products tags that are added to each product to
 *   identify the set of products
 * @property {Object} [_custom_json] - Field to add custom json of the product in cart
 * @property {string} [type] - Type of product in cart
 * @property {string} [name] - Product name of the product in cart which is
 *   defined on platform
 * @property {string} [item_code] - Product code of the product while defining
 *   product on platform
 * @property {CategoryInfo[]} [categories] - Product category information which
 *   incldes category name and category id
 * @property {Object} [attributes] - Product attributes defined on platform
 */
/**
 * @typedef BasePrice
 * @property {number} [effective] - Current per unit price of product after
 *   existing deductions
 * @property {string} [currency_code] - Currency code for all amounts
 * @property {string} [currency_symbol] - Currency symbol of the currncy used for price
 * @property {number} [marked] - Original price of product
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
 *   often used for internal reference
 */
/**
 * @typedef FulfillmentOptionSchema
 * @property {string} [slug] - Unique identifier for the delivery type.
 * @property {string} [description] - Description of the delivery service.
 * @property {boolean} [is_default] - Indicates if this is the default delivery option.
 * @property {string} [id] - Unique ID of the delivery service.
 * @property {string} [type] - Type of fulfillment option.
 * @property {string} [name] - Name of the delivery service.
 */
/**
 * @typedef StoreTimingSchema
 * @property {number} [hour] - The hour of the store in 24-hour format (e.g., 9 for 9 AM).
 * @property {number} [minute] - The minute of the store (e.g., 30 for 9:30 AM).
 */
/**
 * @typedef StoreHoursSchema
 * @property {string} [weekday] - The day of the week (e.g., "Monday", "Tuesday").
 * @property {StoreTimingSchema} [opening]
 * @property {StoreTimingSchema} [closing]
 * @property {boolean} [open] - Indicates whether the store is open on the
 *   specified weekday.
 */
/**
 * @typedef PickupStoreDetailSchema
 * @property {number} [store_id] - A unique identifier for the store.
 * @property {string} [name] - The name of the store or pickup location.
 * @property {string} [pincode] - The postal code of the store's location.
 * @property {number} [distance] - The distance between the store and the
 *   customer's location.
 * @property {string} [address] - The full address of the store.
 * @property {Object} [store_hours] - The store's operational hours for each day
 *   of the week.
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
 * @property {Object} [gift_card] - Gift card detail if gift card applied to the
 *   product which indicates gift price, gift applicable flag and display
 *   message for the gift
 * @property {string[]} [product_group_tags] - List fot the unique identifier
 *   for the product grouping.
 * @property {boolean} [force_new_line_item] - Flag to indicate the item as a
 *   seperate article in cart
 * @property {Object} [identifier] - Unique identifier of the article
 * @property {number} [mto_quantity] - Quantity of the product which will
 *   specially manufactured as not available in stock
 * @property {Object} [extra_meta] - Field to update extra meta of the article in cart
 * @property {string} [type] - Type of the data sent in response. Possible value
 *   is article
 * @property {Object} [_custom_json] - Field to update custom json of the article in cart
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [meta] - Meta data of article in cart
 * @property {string} [size] - Size of the article added in cart
 * @property {StoreInfo} [store]
 * @property {FulfillmentOptionSchema} [fulfillment_option]
 * @property {PickupStoreDetailSchema} [pickup_store_detail]
 * @property {number} [item_index] - Specify the index of article in cart.
 * @property {string[]} [tags] - A list of article tags
 */
/**
 * @typedef Ownership2
 * @property {string} [payable_category] - Promotion amount payable category
 * @property {string} [payable_by] - Promotion amount bearable party
 */
/**
 * @typedef DiscountRulesApp
 * @property {Object} [offer] - Offer detail for promotion
 * @property {Object} [raw_offer] - Raw offer details for promotion
 * @property {Object} [item_criteria] - Item criteria of promotion
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
 * @property {string} [offer_label] - Offer label of the applied promotion, to
 *   be used as display text.
 * @property {number} [amount] - Per unit discount amount applied with current promotion
 * @property {string} [float_amount] - Per unit discount amount with decimal
 *   values applied with current promotion.
 * @property {string} [promotion_type] - Promotion type of current promotion
 * @property {boolean} [mrp_promotion] - If applied promotion is applied on
 *   product MRP or ESP
 * @property {string} [promotion_group] - Promotion group for the promotion
 * @property {string} [promo_id] - Promotion unique identifier
 * @property {Object} [meta] - Meta object for extra data
 * @property {string} [code] - Promotion unique code
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
 * @property {number} [marked] - Original MRP of product.
 * @property {number} [add_on] - Price before promotion and coupon amount
 *   applied for calculation
 * @property {string} [currency_code] - Currency code of the price defined for the product
 * @property {string} [currency_symbol] - Currency symbol of the price defined
 *   for the product
 * @property {number} [effective] - Price of the product after applying
 *   inventory discount and before applying promotion, coupon and engage discount.
 * @property {number} [selling] - Selling price of the product
 * @property {number} [final_price] - Final price of the product in cart after
 *   applying all discounts such as promotion, coupon and engage discount."
 * @property {number} [discount] - Net discount applied on product, contains
 *   total discount amount including promotions, coupons and engage discount
 *   [excluding inventory discount].
 */
/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */
/**
 * @typedef ProductMaxQuantityInfo
 * @property {number} [item] - The total quantity of the item available across
 *   all stores for all sellers. If no data is available, this field will be null.
 * @property {number} [item_seller] - The total quantity of the item available
 *   across all stores for the specified seller. If no seller data is available,
 *   this field will be null.
 * @property {number} [item_store] - The total quantity of the item available
 *   for a specific store. If no store data is available, this field will be null.
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
 * @typedef CurrencyValue
 * @property {string} [currency] - Currency code.
 * @property {number} [value] - Numeric amount value.
 */
/**
 * @typedef ChargesAmount
 * @property {CurrencyValue} [base_currency]
 * @property {CurrencyValue} [ordering_currency]
 */
/**
 * @typedef ArticleCharges
 * @property {Object} [meta] - Meta data realted to charges price adjustment.
 * @property {ChargesAmount} [amount]
 * @property {string} [name] - Name of the charge applied.
 * @property {boolean} [allow_refund] - Whether refund is allowed or not for the charge.
 * @property {string} [code] - Code of the charge applied.
 * @property {string} [type] - Type of the charge applied.
 */
/**
 * @typedef CartProductInfo
 * @property {number} [quantity] - Quantity of the product added in cart
 * @property {CartProduct} [product]
 * @property {string} [product_ean_id] - European Article Number of the product
 *   (limited upto 50 EAN identifier in a single request)
 * @property {Object} [parent_item_identifiers] - Parent item information of the
 *   product which identifies the parent of the product in cart
 * @property {boolean} [is_set] - Whether or not the product is a set of items
 * @property {ProductArticle} [article]
 * @property {AppliedPromotion[]} [promotions_applied] - List of applicable
 *   promotion for the product in cart
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [key] - The attribute key associated with the size
 * @property {CouponDetails} [coupon]
 * @property {Object} [bulk_offer] - Bulk offer information for the product
 *   which denotes if any bulk offer is applied to the product in cart
 * @property {ProductPriceInfo} [price]
 * @property {string} [coupon_message] - Message for the coupon denotes which
 *   coupon is applied and empty if not applied
 * @property {CartProductIdentifer} identifiers
 * @property {string} [message] - Product level message which denotes error
 *   information to display over the product in cart
 * @property {string} [discount] - Discount amount of the product in cart
 * @property {ProductAvailability} [availability]
 * @property {Object} [moq] - An Integer indication the Minimum Order Quantity
 *   of a product, e.g. 100.
 * @property {ProductMaxQuantityInfo} [max_quantity]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {PromoMeta} [promo_meta]
 * @property {Object} [custom_order] - Whether MTO (Make to Order) is enabled or not.
 * @property {string} [item_type] - Type of the item in cart.
 * @property {ArticleCharges[]} [charges] - Charges information which denotes
 *   types of charges and amount of charge applied to that product in cart.
 */
/**
 * @typedef OpenapiCartDetailsResult
 * @property {boolean} [is_valid] - Cart validity flag determines the if the
 *   response is valid or not
 * @property {string} [message] - Message of the cart Open API cart detail response
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items] - Items details in cart
 */
/**
 * @typedef OpenApiErrorResult
 * @property {boolean} [success] - Success flag for cart detail open api response
 * @property {string} [message] - Error message of the Open API cart detail response
 * @property {Object} [errors] - Contains field name which has error as key and
 *   error message as value
 */
/**
 * @typedef ShippingAddress
 * @property {string} [country] - Country of address
 * @property {string} [state] - State of the address
 * @property {string} [city] - City of the address
 * @property {number} [phone] - Phone number for address
 * @property {string} [area_code] - Area code of the address
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
 * @typedef OpenApiCartServiceabilityCreation
 * @property {CartItem[]} cart_items - List of items in open api cart response
 * @property {ShippingAddress} shipping_address
 */
/**
 * @typedef OpenApiCartServiceabilityResult
 * @property {boolean} [is_valid] - Cart validity flag determines the if the
 *   response is valid or not
 * @property {CartProductInfo[]} [items] - Items data list in user cart that
 *   includes item id, item size, store id, available sizes and rest of the item
 *   related data
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [message] - Message of the cart detail API response
 * @property {CartBreakup} [breakup_values]
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
 * @property {boolean} [is_applied] - Flag to determine where the coupon is
 *   applied to cart or not
 * @property {boolean} [is_valid] - Determine where the coupon applied to cart is valid
 * @property {number} [maximum_discount_value] - Maximum discount value of the
 *   coupon applied to cart
 * @property {string} [message] - Coupon message of the coupon applied to cart
 * @property {number} [minimum_cart_value] - Minimum cart value of the coupon
 *   applied to cart
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
 * @typedef PlatformAlternatePickupPerson
 * @property {boolean} [enabled] - Indicates whether an alternate pickup person
 *   is enabled.
 * @property {string} [name] - Name of the alternate pickup person.
 * @property {string} [email] - Email address of the alternate pickup person.
 * @property {string} [phone] - Phone number of the alternate pickup person.
 * @property {string} [country_phone_code] - Country phone code of the alternate
 *   pickup person (e.g., "+91").
 */
/**
 * @typedef CartDetailResult
 * @property {number} [cart_id] - Unique identifier of the user cart
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
 * @property {string} [checkout_mode] - Checkout mode of user cart
 * @property {string} [last_modified] - Last modified timestamp of cart
 * @property {boolean} [buy_now] - Buy now flag for the cart which denotes user
 *   is doing fast checkout for the cart using buy now
 * @property {string} [gstin] - GSTIN added in user cart
 * @property {AppliedPromotion[]} [applied_promo_details] - List of applied
 *   promotions data to cart which includes promotion id, promotion name, offer
 *   text, description, buy rules, discount rules and promotion type
 * @property {string} [pan_no] - Permanent Account Number of the user
 * @property {Object} [custom_cart_meta] - Custom meta details added cart
 *   checkout API payload
 * @property {PlatformAlternatePickupPerson} [alternate_pickup_person]
 * @property {boolean} [free_gift_selection_available] - Determines if the cart
 *   has available promotion free gift items to choose on its added items
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
 * @property {string[]} [product_group_tags] - Field to specify the product
 *   groups of the product that the user is trying to add in cart
 * @property {string} [article_id] - Unique identifier of an article
 * @property {Object} [article_assignment] - Field to determine how article
 *   assignment should happen by article assignment level and strategy
 * @property {number} [store_id] - Unique identifier of the store selected by
 *   the user from which user want to buy a product
 * @property {string} [display] - Display field at article level
 * @property {number} [item_id] - Unique identifier to identify product
 * @property {Object} [extra_meta] - Extra meta data to be added at article
 *   level while add items to cart
 * @property {Object} [_custom_json] - Field to add custom json at article level
 *   while add items to cart
 * @property {boolean} [force_new_line_item] - Field used to decide the product
 *   add as a seperate product in cart
 * @property {Object} [meta] - Field to add meta data at article level
 * @property {boolean} [pos] - Filed to determine whether user is making request
 *   from pos or not
 * @property {string} [seller_identifier] - Add items using seller identifier for store os
 * @property {string} [fulfillment_option_slug] - Specifies the fulfillment
 *   method, indicating whether an order is for home delivery or store pickup
 * @property {number} [pickup_store_id] - Unique identifier of the pickup store
 *   selected by the user from which user wants to pickup the product.
 */
/**
 * @typedef AddCartCreation
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
 * @property {Object} [result] - Add to cart result data
 * @property {CartItemInfo[]} [items] - List of items that needs to be added in cart.
 */
/**
 * @typedef CartItemInfo
 * @property {number} [item_id] - Item id of the product that needs to be
 *   added/updated/removed.
 * @property {string} [size] - Item size of the product that needs to be
 *   added/updated/removed.
 * @property {number} [store_id] - Unique identifier of the store selected by
 *   the user from which user want to buy a product.
 * @property {boolean} [success] - True if items are added/updated/removed successfully.
 * @property {string} [message] - Message for added/updated/removed item.
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
 * @property {boolean} [force_new_line_item] - Field used to decide the product
 *   add as a seperate product in cart
 * @property {number} [item_id] - Item id of the product that needs to be updated
 * @property {number} [item_index] - Item index determines on which index the
 *   product falls to be updated
 * @property {CartProductIdentifer} identifiers
 * @property {string} [article_id] - Article id of the product in cart
 * @property {string} [fulfillment_option_slug] - Specifies the fulfillment
 *   method, indicating whether an order is for home delivery or store pickup
 * @property {number} [pickup_store_id] - Unique identifier of the pickup store
 *   selected by the user from which user
 */
/**
 * @typedef FreeGiftItemCreation
 * @property {string} promotion_id - Unique identifier of the free gift promotion.
 * @property {string} item_id - Unique identifier of the selected free gift item.
 * @property {string} item_size - Size of the selected free gift item.
 */
/**
 * @typedef UpdateCartCreation
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
 * @property {Object} [result] - Contains article related result info
 * @property {CartItemInfo[]} [items] - List of items that needs to be updated in cart.
 * @property {string} [message] - Message of update cart API response
 */
/**
 * @typedef OverrideCartItemPromo
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
 * @property {ShippingAddress} [billing_address]
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
 * @property {string} [device_id] - A unique identifier for the EDC (Electronic
 *   Data Capture) machine. This value may be null if the identifier is not available.
 * @property {ShippingAddress} [shipping_address]
 */
/**
 * @typedef OverrideCheckoutData
 * @property {number} [amount] - Amount for the order in smallest currency unit
 *   (e.g., paise for INR)
 * @property {string} [order_id] - Order id generated at the payment gateway
 * @property {string} [email] - Customer email used for the payment
 * @property {string} [contact] - Customer contact number used for the payment
 * @property {string} [currency] - Currency code for the transaction
 * @property {string} [customer_id] - Customer id generated/linked at the payment gateway
 * @property {string} [callback_url] - Callback URL where the payment status
 *   will be posted
 * @property {string} [bank] - Bank code used for the payment (if method is netbanking)
 * @property {string} [method] - Payment method used for the transaction
 * @property {string} [vpa] - Virtual Payment Address used for UPI transactions
 */
/**
 * @typedef OverrideCheckoutResult
 * @property {OverrideCheckoutData} data
 * @property {CheckCart} cart
 * @property {string} success - Success flag of cart override checkout API response
 * @property {string} order_id - Order id generated after placing order
 * @property {string} message - Message of the cart override checkout API response
 */
/**
 * @typedef GetShareCartLinkCreation
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
 * @property {Object} [meta] - Meta data sent while generating share cart link
 */
/**
 * @typedef SharedCart
 * @property {string} [coupon_text] - Coupon text of the applied coupon on user cart
 * @property {string} [id] - Cart id of shared cart
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message added in user cart
 * @property {CartProductInfo[]} [items] - Items data list in user cart that
 *   includes item id, item size, store id, available sizes and rest of the item
 *   related data
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info] - Delivery charge info message of
 *   the user cart
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process
 * @property {string} [message] - Message of the get shared cart API response
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid] - Valid flag for get shared cart detail API
 * @property {string} [uid] - Cart id of the user cart
 * @property {string} [checkout_mode] - Checkout mode of address on which
 *   address to be used for which checkout mode of cart
 * @property {CartCurrency} [currency]
 * @property {string} [last_modified] - Last modified timestamp of user cart
 * @property {boolean} [buy_now] - Buy now flag of user cart
 * @property {number} [cart_id] - Cart id of user cart for generating cart sharing token
 * @property {string} [gstin] - GSTIN added in user cart
 * @property {Object} [custom_cart_meta] - Custom cart meta of user cart added
 *   via update cart meta API
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
 * @property {string} [user_id] - Customer user ID to associate with the cart.
 *   Send null to remove existing mapping of customer from cart.
 */
/**
 * @typedef UserInfo
 * @property {string} [gender] - User gender
 * @property {string} [modified_on] - Date format of user when user last modified
 * @property {string} [_id] - Unique Identifier of user
 * @property {string} [uid] - Unique UID of user
 * @property {string} [external_id] - Unique external id
 * @property {string} [mobile] - 10 digit Mobile number of user
 * @property {string} [last_name] - Last name of user
 * @property {string} [created_at] - Date format of user when user registered
 * @property {string} [first_name] - First name of user
 */
/**
 * @typedef UserCartMappingResult
 * @property {string} [coupon_text] - Coupon text of coupon applied on cart
 * @property {UserInfo} [user]
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
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process
 * @property {string} [message] - Message of the get cart detail API response
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid] - Cart validity flag determines the if the
 *   response is valid or not
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode] - Checkout mode of user cart
 * @property {string} [last_modified] - Last modified timestamp of cart
 * @property {boolean} [buy_now] - Buy now flag for the cart which denotes user
 *   is doing fast checkout for the cart using buy now
 * @property {string} [gstin] - GSTIN added in user cart
 * @property {Object} [custom_cart_meta] - Custom meta details added cart
 *   checkout API payload
 * @property {AppliedPromotion[]} [applied_promo_details] - List of applied
 *   promotions data to cart which includes promotion id, promotion name, offer
 *   text, description, buy rules, discount rules and promotion type
 * @property {string} [pan_no] - Permanent Account Number of the user
 */
/**
 * @typedef PlatformAddCartDetails
 * @property {string} [user_id] - The unique identifier of the user for whom
 *   items are being added to the cart
 * @property {boolean} [new_cart] - Indicates whether a new cart should be
 *   created. If `true`, a new cart is created even if one already exists.
 * @property {boolean} [default_cart] - Determines whether the item is added to
 *   the user's default visible cart on the storefront. If `true`, the item is
 *   added to the user's default cart that is accessible via the storefront. If
 *   `false`, an existing active cart is fetched if available; otherwise, a new
 *   hidden cart is created. Defaults to `true`.
 * @property {AddProductCart[]} [items] - List of items detail which need to be
 *   added to cart like item id, item size, and item quantity
 */
/**
 * @typedef PlatformUpdateCartDetails
 * @property {string} [user_id] - The user id of user, for which we need to
 *   update the cart
 * @property {UpdateProductCart[]} [items] - List items data that needs to be
 *   updated in cart
 * @property {FreeGiftItemCreation[]} [free_gift_items] - List of free gift
 *   items with updated sizes.
 * @property {string} operation - Field to determine if item to be removed from
 *   cart or it needs to be updated
 * @property {string} [free_gift_items_operation] - Field to determine if free
 *   gift item to be removed from cart or it needs to be added.
 */
/**
 * @typedef UpdateCartBreakup
 * @property {boolean} [store_credit] - Select `true` to include store credit in
 *   cart breakup
 */
/**
 * @typedef DeleteCartDetails
 * @property {string[]} [cart_id_list] - List of all cart ids, which need to delete
 */
/**
 * @typedef DeleteCartDetailResult
 * @property {boolean} [success] - True if cart is archived successfully. False
 *   if not archived.
 * @property {string} [message] - Message for delete cart response
 */
/**
 * @typedef CartItemCountResult
 * @property {number} [user_cart_items_count] - Item count present in cart
 */
/**
 * @typedef DiscountRules
 * @property {number} [discounted_price] - Discount will be reflected in the
 *   cart upon adding the product.
 */
/**
 * @typedef Coupon
 * @property {string} [title] - Coupon Title of the coupon applied denotes name
 *   of the coupon
 * @property {DiscountRules[]} [rule] - Discount rules of coupons
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
 * @property {string} [coupon_applicable_message] - Message which is used to
 *   display to the customer if the coupon is applied successfully
 */
/**
 * @typedef PageCoupon
 * @property {boolean} [has_next] - Denotes if next page of coupon is available
 * @property {number} [current] - Current page number
 * @property {number} [total] - Total pages of coupon availalbe
 * @property {number} [total_item_count] - Total coupons are available for the cart
 * @property {boolean} [has_previous] - Denotes if previous page of the coupon
 *   is available
 */
/**
 * @typedef GetCouponResult
 * @property {Coupon[]} [available_coupon_list] - List of available coupon which
 *   can be applied on cart
 * @property {PageCoupon} [page]
 */
/**
 * @typedef ApplyCouponDetails
 * @property {string} coupon_code - Coupon code to be applied
 */
/**
 * @typedef GeoLocation
 * @property {number} [longitude] - Longitude coordinate for address
 * @property {number} [latitude] - Latitude coordinate for address
 */
/**
 * @typedef PlatformAddress
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
 * @property {Object} [_custom_json] - Custom json of the address
 */
/**
 * @typedef ValidationConfig
 * @property {number} address_max_limit - The maximum number of addresses a user can have.
 * @property {number} user_address_count - The total number of addresses saved by a user.
 */
/**
 * @typedef PlatformGetAddressesDetails
 * @property {boolean} [pii_masking] - Personally Identifiable Information
 *   masking flag to denote if the user data in address is masked or not.
 * @property {PlatformAddress[]} [address] - List of all address saved by customer
 * @property {ValidationConfig} [validation_config]
 */
/**
 * @typedef SaveAddressDetails
 * @property {string} [id] - Id of the address
 * @property {boolean} [success] - Success flag of save address Response
 * @property {boolean} [is_default_address] - Default address flag if no address
 *   selected then this should be the default address selected
 */
/**
 * @typedef UpdateAddressDetails
 * @property {string} [id] - ID of an address
 * @property {boolean} [is_default_address] - Default address flag if no address
 *   selected then this should be the default address selected
 * @property {boolean} [success] - Success flag of update address response
 * @property {boolean} [is_updated] - Updated flag for update address operation
 *   if the address updated or not
 */
/**
 * @typedef DeleteAddressResult
 * @property {string} [id] - Id of the address
 * @property {boolean} [is_deleted] - Deleted flag in delete address response
 *   states whether the address was deleted or not
 */
/**
 * @typedef PlatformSelectCartAddress
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
 * @property {string} [article_id] - Article unique id for shipment
 */
/**
 * @typedef PlatformShipmentDetails
 * @property {number} [shipments] - Count of shipments that will be shipped
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
 * @property {FulfillmentOptionSchema} [fulfillment_option]
 */
/**
 * @typedef PlatformCartShipmentsResult
 * @property {string} [coupon_text] - Coupon text of coupon applied on cart
 * @property {string} [id] - Cart id of the user cart
 * @property {Object} [pan_config] - Pan card config states at what condition
 *   user should enter the pan card
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message added in cart
 * @property {CartProductInfo[]} [items] - List of items in cart
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info] - Delivery charge in information
 *   message on shipment
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process
 * @property {string} [message] - Response message of get shipments API
 * @property {CartBreakup} [breakup_values]
 * @property {string} [staff_user_id] - Staff employee user id if cart is
 *   created by staff employee for the customer
 * @property {boolean} [is_valid] - Cart validity flag determines the if the
 *   response is valid or not
 * @property {PlatformShipmentDetails[]} [shipments] - List of shipments that
 *   will be shipped
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode] - Checkout mode of cart
 * @property {string} [last_modified] - Last modified timestamp of cart
 * @property {boolean} [buy_now] - Buy now flag of user cart
 * @property {string} [gstin] - GSTIN number added in cart
 * @property {AppliedPromotion[]} [applied_promo_details] - List of applied
 *   promotions data to cart which includes promotion id, promotion name, offer
 *   text, description, buy rules, discount rules and promotion type
 * @property {boolean} [error] - Error details if any error occurs which
 *   includes type of error, error code and error message
 * @property {string} [pan_no] - Permanent Account Number of the user
 * @property {Object} [custom_cart_meta] - Custom cart meta details added in cart
 * @property {string} [customer_id] - Customer user id associated with cart
 */
/**
 * @typedef UpdateCartShipmentItem
 * @property {number} [quantity] - Quantity of product in shipment
 * @property {string} shipment_type - Shipment delivery type
 * @property {string} article_uid - Article unique id for shipment
 * @property {number} [item_index] - Item index determines the position in the
 *   list where the product should be updated.
 */
/**
 * @typedef UpdateCartShipmentCreation
 * @property {UpdateCartShipmentItem[]} shipments - List of Shipments which
 *   includes shipment data like shipment items, shipment promise, Shipment
 *   type, shipment order type, shipment dp options etc
 */
/**
 * @typedef PlatformCartMetaCreation
 * @property {string} [gstin] - GSTIN number to be added in user cart
 * @property {Object} [pick_up_customer_details] - Customer contact details for
 *   customer pickup at store
 * @property {PlatformAlternatePickupPerson} [alternate_pickup_person]
 * @property {string} [checkout_mode] - Checkout mode of user cart
 * @property {Object} [gift_details] - Gift details is open json which can
 *   include gift message
 * @property {string} [pan_no] - Permanent Account Number of the user
 * @property {string} [comment] - Comment message to be added in user cart
 * @property {string} [staff_user_id] - Staff user id
 */
/**
 * @typedef CartMetaDetails
 * @property {boolean} [is_valid] - Whether added meta was vaild
 * @property {string} [message] - Detailed message that used to display
 */
/**
 * @typedef CartMetaMissingDetails
 * @property {string[]} [errors] - Detailed errors for invalid cart meta request
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
 * @property {string} key - Key name of custom meta
 * @property {string} value - Value to be added in key
 */
/**
 * @typedef OrderTag
 * @property {string} [display_text] - Display text for order tag
 * @property {string} [slug] - Slug to be used for tagging order with any unique value
 */
/**
 * @typedef PlatformCartCheckoutDetailCreation
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
 * @property {string} [success_callback_url] - Success callback url to be
 *   redirected after payment received
 * @property {string} [failure_callback_url] - Failure callback url to be
 *   redirected after payment failed
 * @property {OrderTag[]} [order_tags] - Order tags used to identify specific
 *   type of order which is tagged using order tags
 */
/**
 * @typedef CheckCart
 * @property {string} [coupon_text] - Coupon text of the applied coupon on order placed
 * @property {string} [cod_message] - Cash On Delivery message for the order placed
 * @property {string} [id] - Cart id of the user cart
 * @property {string} [store_code] - Store code from which the order placed
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message added in cart after order placed
 * @property {string} [user_type] - User type of the cart who places the order
 * @property {CartProductInfo[]} [items] - Items details in cart after order placed
 * @property {string} [error_message] - Error details if any error occurs which
 *   includes type of error, error code and error message
 * @property {boolean} [success] - Success flag of checkout cart API response
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info] - Delivery charge in information
 *   message on shipment
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process
 * @property {string} [order_id] - Order id generated after placing order
 * @property {string} [message] - Message of the cart checkout API response
 * @property {CartBreakup} [breakup_values]
 * @property {number} [cod_charges] - Cash On Delivery charges of the user cart
 * @property {boolean} [is_valid] - Valid flag fotr the checkout response if
 *   order placed was valid
 * @property {string} [uid] - Cart id of user cart
 * @property {string} [checkout_mode] - Checkout mode of user cart
 * @property {CartCurrency} [currency]
 * @property {string} [last_modified] - Last modified timestamp of cart
 * @property {boolean} [buy_now] - Buy now flag of user cart
 * @property {number} [delivery_charge_order_value] - Delivery charge order value
 * @property {number} [cart_id] - Cart id of the user cart for which the order placed
 * @property {Object[]} [store_emps] - Store employees data
 * @property {string} [gstin] - GSTIN number added in cart
 * @property {boolean} [cod_available] - Whether Cash On Delivery available
 * @property {number} [delivery_charges] - Delivery charges of the order placed
 *   via checkout API
 * @property {Object} [custom_cart_meta] - Custom meta details added cart
 *   checkout API payload
 */
/**
 * @typedef CartCheckoutDetails
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
 * @property {string} [message] - Message of the cart checkout v2 API response
 */
/**
 * @typedef CartCheckoutResult
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
 * @typedef CartDeliveryModesDetails
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
 * @property {string} [address] - Address description for address data
 */
/**
 * @typedef StoreDetails
 * @property {PickupStoreDetail[]} [items] - List of items need to pickup from store
 */
/**
 * @typedef CartPaymentUpdate
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
 * @property {string[]} [payment_source_bag_id] - Previous bag IDs for which an
 *   exchange has been performed.
 */
/**
 * @typedef PaymentMethod
 * @property {string} mode - Payment mode of payment method used to make payment
 * @property {string} [payment] - Payment name of payment method used to make payment
 * @property {PaymentMeta} payment_meta
 * @property {number} [amount] - Amount of the payment mode to be paid
 * @property {string} [name] - Name of the payment mode used to make payment
 * @property {Object} [payment_extra_identifiers] - Payment extra identifier for
 *   the payment mode to do the payment
 */
/**
 * @typedef PlatformCartCheckoutDetailV2Creation
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
 * @property {string} [user_id] - The user id of user cart
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
 * @property {string} [success_callback_url] - Success callback url to be
 *   redirected after payment received
 * @property {string} [failure_callback_url] - Failure callback url to be
 *   redirected after payment failed
 * @property {OrderTag[]} [order_tags] - Order tags used to identify specific
 *   type of order which is tagged using order tags
 */
/**
 * @typedef UpdateCartPaymentRequestV2
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
 * @typedef DiscountOfferRule
 * @property {string} [discount_type] - Discount offer type of the promotion
 * @property {DiscountOffer} [offer]
 * @property {DiscountItemCriteria} [item_criteria]
 * @property {string} [buy_condition] - Logical condition expression for buy rules
 * @property {number} [discounted_price] - Price of product after applying this
 *   discount rule of promotion. Note - returned only when store id is provided
 *   in request params.
 * @property {string[]} [matched_buy_rules] - List of buy rules that are
 *   matching with item for this promotion
 * @property {ItemSizeMapping} [meta]
 */
/**
 * @typedef PromotionOffer
 * @property {string} [id] - Promotion unique identifier
 * @property {BuyRuleItemCriteria} [buy_rules]
 * @property {string} [offer_text] - Offer title of promotion that used to display
 * @property {string} [promotion_type] - Type of Promotion like percentage,
 *   amount, bogo etc.
 * @property {string} [promotion_name] - Name of the promotion
 * @property {string} [promotion_group] - Group of promotion belongs to
 * @property {string} [valid_till] - Datetime ISOString for promotion end date
 * @property {DiscountOfferRule[]} [discount_rules] - Discount rules of promotions
 * @property {FreeGiftItems[]} [free_gift_items] - Details of free gift items
 * @property {string} [description] - Offer details including T&C
 */
/**
 * @typedef PromotionOffersDetails
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
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
 */
/**
 * @typedef OfferUser
 * @property {number[]} [groups] - List of user group on which offer is allowed
 * @property {string} [type] - User type of the cart user who places the order
 * @property {boolean} [anonymous] - Set true, if offer is applicable for guest user
 * @property {string[]} [id] - List of user id on which offer is applicable
 * @property {UserRegistered} [registered]
 * @property {string[]} [email_domain] - List of email domain available for offer
 */
/**
 * @typedef OfferItemCriteria
 * @property {number[]} [category_id] - List of category id available for offer
 * @property {string[]} [collection_id] - List of collection id available for offer
 * @property {boolean} [all_items] - Boolean flag determining if offer is
 *   applicable on all offers
 * @property {number[]} [item_brand] - List of all brand ids on which promotion
 *   is applicable
 * @property {string[]} [article_ids] - List of unique identifier of articles on
 *   which offer will be applicable
 * @property {string[]} [item_sku] - List of all item sku on which promotion is applicable
 * @property {number[]} [item_id] - List of all item ids on which offer is applicable
 * @property {number[]} [item_l1_category] - List of all L1 category on which
 *   offer is applicable
 * @property {number[]} [item_l2_category] - List of all L2 category on which
 *   offer is applicable
 * @property {number[]} [item_category] - List of all L3 category on which offer
 *   is applicable
 * @property {number[]} [item_department] - List of all departments ids on which
 *   offer is applicable
 * @property {number[]} [item_store] - List of all item store ids on which offer
 *   is applicable
 * @property {string[]} [item_size] - List of all item sizes on which offer is applicable
 * @property {number[]} [item_company] - List of all company ids on which offer
 *   is applicable
 * @property {string[]} [item_tags] - List of all product tags on which offer is
 *   applicable
 * @property {CompareObject} [cart_quantity]
 * @property {CompareObject} [cart_total]
 * @property {number[]} [item_exclude_l1_category] - List of all L1 categories
 *   on which offer is not applicable
 * @property {number[]} [item_exclude_l2_category] - List of all L2 categories
 *   on which offer is not applicable
 * @property {number[]} [item_exclude_category] - List of all L3 categories on
 *   which offer is not applicable
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_department] - List of all department ids
 *   on which offer is not applicable
 * @property {number[]} [item_exclude_store] - List of all item store ids on
 *   which offer is not applicable
 * @property {number[]} [item_exclude_brand] - List of all brand ids on which
 *   offer is not applicable
 * @property {string[]} [item_exclude_sku] - List of all item sku on which offer
 *   is not applicable
 * @property {number[]} [item_exclude_company] - List of all company id on which
 *   offer is not applicable
 * @property {string[]} [available_zones] - List of all zones on which offer is applicable
 * @property {number[]} [item_exclude_id] - List of all item ids on which offer
 *   is not applicable
 * @property {string[]} [buy_rules] - List of buy rules that is applicable for this offer
 * @property {ItemSizeMapping} [item_size_mapping]
 */
/**
 * @typedef DiscountRuleOffer
 * @property {number} [max_discount_amount] - Maximum discount amount in offer
 * @property {number} [discount_price] - Discount price in offer
 * @property {boolean} [apportion_discount] - Flag to distribute discount for each article
 * @property {boolean} [partial_can_ret] - Flag indicated return the product partially
 * @property {number} [max_usage_per_transaction] - Maximum usage per transaction in offer
 * @property {number} [min_offer_quantity] - Minimum quantity of offer in offer
 * @property {number} [discount_amount] - Discount amount in offer
 * @property {number} [discount_percentage] - Discount percentage in offer
 * @property {number} [max_offer_quantity] - Maximum quantity of product in offer
 */
/**
 * @typedef OfferDiscountRule
 * @property {string} [discount_type] - The type of discount in offer
 * @property {string} [buy_condition] - Points to buy rule in offer. One
 *   discount rule can only point to one buy rule.
 * @property {OfferItemCriteria} [item_criteria]
 * @property {DiscountRuleOffer} [offer]
 * @property {boolean} [is_exact] - Flag is true then use coupon applicable
 *   articles for calculation
 */
/**
 * @typedef OfferUsesRemaining
 * @property {number} [user] - Define total offer count per user
 * @property {number} [total] - Define total offer count
 * @property {number} [app] - Define offer count associated with application id
 */
/**
 * @typedef OfferUsesRestriction
 * @property {OfferUsesRemaining} [maximum]
 * @property {OfferUsesRemaining} [remaining]
 */
/**
 * @typedef OfferRestrictionFulfillmentOptions
 * @property {string} fulfillment_slug - Fulfillment option id
 * @property {string[]} [zones] - List of zones ids on which offer is applicable.
 */
/**
 * @typedef OfferRestrictions
 * @property {OfferUsesRestriction} [uses]
 * @property {PostOrder} [post_order]
 * @property {string[]} [platforms] - List of platform on which offer allowed
 *   like web, android
 * @property {PaymentModes} [payments]
 * @property {number[]} [ordering_stores] - List of store id on which offer is allowed
 * @property {number} [order_quantity] - Prmomotion offer max order count
 * @property {OfferUser} [user]
 * @property {boolean} [multi_store_allowed] - Allow offer to be applied on
 *   multiple stores
 * @property {OfferRestrictionFulfillmentOptions[]} [fulfillment_options] - List
 *   of fulfillment options on which offer is applicable.
 */
/**
 * @typedef OfferDisplayMeta
 * @property {string} description - Detail about the offers
 * @property {boolean} [is_display] - Coupon offer will be displayed or hidden
 *   on UI based on this flag
 * @property {boolean} [is_public] - Determines if coupon offer is publicaly
 *   available or not
 * @property {string} name - Name of offer that needs to display
 * @property {string} [offer_text] - Promotion offer text used to display
 * @property {string} [offer_label] - Offer label of promotion that needs to display
 * @property {string} [reason] - Reason for offer rejection
 */
/**
 * @typedef OfferCouponConfiguration
 * @property {number} [coupon_count] - Total number of coupons to be generated
 *   when coupon type is bulk
 * @property {string} [coupon_prefix] - Bulk coupon code prefix string. All
 *   coupons will be generated with this prefix.
 * @property {string} coupon_type - The type of coupon like bulk or single.
 */
/**
 * @typedef OfferOwnership
 * @property {string} payable_category - Promotion amount payable category
 * @property {string} [payable_by] - Promotion amount bearable party
 */
/**
 * @typedef OfferSchema
 * @property {string} [_id] - Unique identifier of offer. This will be auto
 *   generated upon successful offer creation.
 * @property {string} mode - Offer mode, like coupon or promotion
 * @property {boolean} [auto_apply] - Indicates whether the offer is
 *   automatically applied. This flag is false for coupons and true for
 *   promotions. For free-gift promotions, a false value means manual gift
 *   selection is required.
 * @property {string} [application_id] - Application id through which offer was created.
 * @property {string} [company_id] - Company id through which offer was created.
 * @property {OfferDiscountRule[]} [discount_rules] - Discount rules based on
 *   which offer will be applied
 * @property {Object} [buy_rules] - Contains the individual buy rules associated
 *   with the offer. The keys in this object are dynamic (e.g., 'rule#1',
 *   'rule#2', etc.), and each key must correspond to a buy condition referenced
 *   within `discount_rules`. For example, if a discount rule includes a
 *   buy_condition '(rule#1)', then 'rule#1' must be defined in this object.
 *   Each rule key value must follow the format of OfferItemCriteria schema.
 * @property {OfferRestrictions} [restrictions]
 * @property {OfferDisplayMeta} display_meta
 * @property {OfferOwnership} [ownership]
 * @property {OfferAuthor} [author]
 * @property {OfferDateMeta} [date_meta]
 * @property {OfferSchedule} [_schedule]
 * @property {Object} [_custom_json] - Set extra properties in offer
 * @property {boolean} [stackable] - Boolean value set true to apply other
 *   promotions as well.
 * @property {string} status - Status of the offer
 * @property {boolean} published - Determines whether the offer is published to
 *   customers or marked inactive
 * @property {string} type - Different types of offers available in the system.
 *   This is used to determine the type of offer and the calculation of the
 *   offer. Some types are mode specific, few examples are :> -
 *   free_item_discount_absolute is only applicable for coupon mode -
 *   contract_price, shipping_price, free_gift_items, cashback, free_items,
 *   free_non_sellable_items, external_price_adjustment_discount, custom is only
 *   applicable for promotion mode
 * @property {number} [priority] - Defines the priority of the offer. Its
 *   behavior varies based on the offer type. For coupons, a higher priority
 *   value means the coupon will appear higher in the listing order. For
 *   promotions, this value determines the sequence in which promotions are
 *   evaluated and applied. Promotions are evaluated in descending order of
 *   their effective priority. In case of conflicting priorities, the offer will
 *   be prioritised on the basis of creation order (desc).
 * @property {boolean} [is_exclusive_coupon] - Flag to determine if coupon is
 *   exclusive. Exclusive coupon removes other applied offers from the cart. If
 *   both `is_exclusive_coupon` and `apply_exclusive` are set,
 *   `is_exclusive_coupon` takes priority for offer evaluation logic effectively
 *   making the offer exclusive.
 * @property {string} [apply_exclusive] - Controls how this offer excludes other
 *   offers when it is applied. When this offer is applied at cart level, no
 *   other promotions are evaluated or applied for the same cart (it becomes the
 *   only active promotion for that cart). When this offer is applied on
 *   specific articles, those articles will not be eligible for any other
 *   promotions, but other promotions can still apply to different articles in
 *   the cart. If null, the offer follows the normal stacking rules and does not
 *   enforce additional exclusivity.
 * @property {string} [calculate_on] - Article Price on which offer is
 *   calculated, like effective price or marked price. Only available for few
 *   supported types lile Contract pricing and Ladder pricing.
 * @property {string} [promo_group] - The type of promotion group
 * @property {string} [currency] - ISO 4217 currency code in which the offer's
 *   discount amounts and calculations are specified (e.g., "INR", "USD",
 *   "EUR"). This currency is used as the base currency for discount
 *   calculations and currency conversions when applying the offer. If not
 *   provided, defaults to the seller's default currency code. All discount
 *   values in discount_rules are interpreted in this currency.
 * @property {string} [code] - Unique identifier code for the offer. For coupons
 *   (i.e mode = "coupon"), this is the coupon code that users enter to apply
 *   the offer (e.g., "SAVE20", "WELCOME50"). For promotions (mode =
 *   "promotion"), this field is typically null or empty as promotions are
 *   auto-applied. This code is used to fetch and identify offers when applying
 *   them to carts. Must be unique within an application_id. For bulk coupons,
 *   this is auto-generated based on coupon_config.coupon_prefix.
 * @property {OfferCouponConfiguration} [coupon_config]
 * @property {boolean} [is_processed] - Flag to verify if promotion is ready to
 *   be applied on cart and ready to update promotion
 * @property {boolean} [is_bank_offer] - Flag to determine if any bank offer is applicable
 */
/**
 * @typedef OfferPartialUpdate
 * @property {PromotionSchedule} [schedule]
 */
/**
 * @typedef OfferAuthor
 * @property {string} [created_by] - The user id of user, who has created the offer
 * @property {string} [modified_by] - The user id of user, who has modified the offer
 * @property {string} [approved_by] - The user id of user, who has approved the offer
 * @property {string} [rejected_by] - The user id of user, who has rejected the offer
 */
/**
 * @typedef OfferDateMeta
 * @property {string} [modified_on] - Date time format when the offer last modified
 * @property {string} [created_on] - Date time format when the offer created
 * @property {string} [approved_on] - Date time format when the offer approved
 * @property {string} [rejected_on] - Date time format when the offer rejected
 */
/**
 * @typedef NextScheduleItems
 * @property {string} [start] - Start date of schedule
 * @property {string} [end] - End date of schedule
 */
/**
 * @typedef OfferSchedule
 * @property {string} end - The end date and time until which the offer remains valid.
 * @property {string} start - The start date and time from which the offer becomes valid.
 * @property {NextScheduleItems[]} [next_schedule] - A auto generated list of
 *   date-time entries based on start, end, cron and duration data on which the
 *   offer is scheduled to activate in the future.
 * @property {string} [cron] - A cron expression used to schedule the offer to
 *   activate periodically. When cron is null or not provided, duration is optional.
 * @property {number} [duration] - Duration of the offer activation in seconds.
 *   Mandatory when cron is provided.
 */
/**
 * @typedef OfferListItem
 * @property {string} [mode] - Offer mode, like coupon or promotion
 * @property {string} [type] - Type of the offer
 * @property {string} [status] - Status of the offer
 * @property {boolean} [published] - Determines whether the offer is published
 *   to customers or marked inactive
 * @property {OfferDisplayMeta} [display_meta]
 * @property {OfferAuthor} [author]
 * @property {OfferDateMeta} [date_meta]
 * @property {OfferSchedule} [schedule]
 */
/**
 * @typedef OfferListResult
 * @property {OfferListItem[]} [items] - List of offers
 * @property {Page} [page]
 */
declare class CartPlatformModel {
}
declare namespace CartPlatformModel {
    export { RedeemLoyaltyPoints, CouponDateMeta, Ownership, CouponAuthor, State, PaymentAllowValue, PaymentModes, PriceRange, PostOrder, BulkBundleRestriction, UsesRemaining, UsesRestriction, Restrictions, Validation, CouponAction, CouponSchedule, Rule, DisplayMetaDict, DisplayMeta, Identifier, Validity, RuleDefinition, CouponAdd, Page, CouponsResult, SuccessMessage, OperationErrorResult, CouponUpdate, CouponPartialUpdate, CouponCreateResult, DisplayMeta1, Ownership1, CompareObject, ItemSizeMapping, ItemCriteria, BuyRuleItemCriteria, DiscountItemCriteria, DiscountOffer, DiscountRule, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, PostOrder1, UsesRemaining1, UsesRestriction1, Restrictions1, PromotionSchedule, PromotionAction, PromotionAuthor, Visibility, PromotionDateMeta, PromotionListItem, PromotionsResult, PromotionAdd, PromotionAddResult, PromotionUpdate, PromotionUpdateResult, PromotionPartialUpdate, ActivePromosResult, Charges, DeliveryCharges, CartMetaConfigUpdate, CartMetaConfigAdd, Article, PriceAdjustmentRestrictions, Collection, PriceAdjustmentUpdate, PriceAdjustment, PriceAdjustmentResult, GetPriceAdjustmentResult, PriceAdjustmentAdd, DistributionRule, Distribution, DistributionLogic, CartItem, OpenapiCartDetailsCreation, CouponBreakup, DisplayBreakup, LoyaltyPoints, RawBreakup, CartBreakup, ProductImage, Tags, BaseInfo, ActionQuery, ProductActionParams, ProductActionPage, ProductAction, CategoryInfo, CartProduct, BasePrice, ArticlePriceInfo, StoreInfo, FulfillmentOptionSchema, StoreTimingSchema, StoreHoursSchema, PickupStoreDetailSchema, ProductArticle, Ownership2, DiscountRulesApp, AppliedFreeArticles, BuyRules, AppliedPromotion, PromiseFormatted, PromiseISOFormat, PromiseTimestamp, ShipmentPromise, CouponDetails, ProductPrice, ProductPriceInfo, ProductMaxQuantityInfo, CartProductIdentifer, ProductAvailabilitySize, ProductAvailability, PromoMeta, CurrencyValue, ChargesAmount, ArticleCharges, CartProductInfo, OpenapiCartDetailsResult, OpenApiErrorResult, ShippingAddress, OpenApiCartServiceabilityCreation, OpenApiCartServiceabilityResult, OpenApiFiles, CartItemMeta, MultiTenderPaymentMeta, MultiTenderPaymentMethod, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResult, AbandonedCart, AbandonedCartResult, PaymentSelectionLock, CartCurrency, CartDetailCoupon, ChargesThreshold, DeliveryChargesConfig, CartCommonConfig, PlatformAlternatePickupPerson, CartDetailResult, AddProductCart, AddCartCreation, AddCartDetailResult, CartItemInfo, UpdateProductCart, FreeGiftItemCreation, UpdateCartCreation, UpdateCartDetailResult, OverrideCartItemPromo, OverrideCartItem, OverrideCheckoutReq, OverrideCheckoutData, OverrideCheckoutResult, GetShareCartLinkCreation, GetShareCartLinkResult, SharedCartDetails, SharedCart, SharedCartResult, CartList, MultiCartResult, UpdateUserCartMapping, UserInfo, UserCartMappingResult, PlatformAddCartDetails, PlatformUpdateCartDetails, UpdateCartBreakup, DeleteCartDetails, DeleteCartDetailResult, CartItemCountResult, DiscountRules, Coupon, PageCoupon, GetCouponResult, ApplyCouponDetails, GeoLocation, PlatformAddress, ValidationConfig, PlatformGetAddressesDetails, SaveAddressDetails, UpdateAddressDetails, DeleteAddressResult, PlatformSelectCartAddress, ShipmentArticle, PlatformShipmentDetails, PlatformCartShipmentsResult, UpdateCartShipmentItem, UpdateCartShipmentCreation, PlatformCartMetaCreation, CartMetaDetails, CartMetaMissingDetails, StaffCheckout, CustomerDetails, Files, CartCheckoutCustomMeta, OrderTag, PlatformCartCheckoutDetailCreation, CheckCart, CartCheckoutDetails, CartCheckoutResult, CartDeliveryModesDetails, PickupStoreDetail, StoreDetails, CartPaymentUpdate, CouponValidity, PaymentCouponValidate, PaymentMeta, PaymentMethod, PlatformCartCheckoutDetailV2Creation, UpdateCartPaymentRequestV2, PriceMinMax, ItemPriceDetails, ArticlePriceDetails, FreeGiftItems, DiscountOfferRule, PromotionOffer, PromotionOffersDetails, PromotionPaymentOffer, PromotionPaymentOffersDetails, ValidationError, OfferUser, OfferItemCriteria, DiscountRuleOffer, OfferDiscountRule, OfferUsesRemaining, OfferUsesRestriction, OfferRestrictionFulfillmentOptions, OfferRestrictions, OfferDisplayMeta, OfferCouponConfiguration, OfferOwnership, OfferSchema, OfferPartialUpdate, OfferAuthor, OfferDateMeta, NextScheduleItems, OfferSchedule, OfferListItem, OfferListResult };
}
/** @returns {RedeemLoyaltyPoints} */
declare function RedeemLoyaltyPoints(): RedeemLoyaltyPoints;
type RedeemLoyaltyPoints = {
    /**
     * - Marks if engage points are to be redeemed
     * for the given cart.
     */
    redeem_points: boolean;
};
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
     * - Coupon amount payable category
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
    /**
     * - Coupon is publicaly available or not
     */
    is_public?: boolean;
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
    payments?: PaymentModes;
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
/** @returns {CouponSchedule} */
declare function CouponSchedule(): CouponSchedule;
type CouponSchedule = {
    /**
     * - The end date of coupon
     */
    end?: string;
    /**
     * - The start date of coupon
     */
    start?: string;
    /**
     * - List of date time, which we will
     * schedule the promotion
     */
    next_schedule?: any[];
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
    type?: string;
    /**
     * - Flag is true then use coupon applicable
     * articles for calculation
     */
    is_exact?: boolean;
    /**
     * - Coupon will be applicable on either
     * amount or quantity
     */
    applicable_on?: string;
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
    ownership?: Ownership;
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
    rule?: Rule[];
    display_meta?: DisplayMeta;
    /**
     * - Unique code of coupon
     */
    code: string;
    /**
     * - The type slug of coupon discount
     */
    type_slug: string;
    identifiers?: Identifier;
    validity?: Validity;
    rule_definition?: RuleDefinition;
    /**
     * - Unique identifier of coupon
     */
    _id?: string;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of all items across all pages.
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
     * - The type of the page, can be 'cursor' or 'number'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
    /**
     * - The number of items per page.
     */
    page_size?: number;
};
/** @returns {CouponsResult} */
declare function CouponsResult(): CouponsResult;
type CouponsResult = {
    /**
     * - Coupons list for sales channel
     */
    items?: CouponAdd[];
    page?: Page;
};
/** @returns {SuccessMessage} */
declare function SuccessMessage(): SuccessMessage;
type SuccessMessage = {
    /**
     * - Whether the request was successful (true/false).
     */
    success?: boolean;
    /**
     * - Response message needs to display
     */
    message?: string;
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
/** @returns {CouponUpdate} */
declare function CouponUpdate(): CouponUpdate;
type CouponUpdate = {
    date_meta?: CouponDateMeta;
    ownership?: Ownership;
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
    rule?: Rule[];
    display_meta?: DisplayMeta;
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
    identifiers?: Identifier;
    validity?: Validity;
    rule_definition?: RuleDefinition;
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
/** @returns {CouponCreateResult} */
declare function CouponCreateResult(): CouponCreateResult;
type CouponCreateResult = {
    /**
     * - Whether the request was successful (true/false)
     */
    success?: boolean;
    /**
     * - Create coupon response message that can shown
     * to creator user
     */
    message?: string;
    /**
     * - Unique identifier for coupon created
     */
    _id?: string;
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
    /**
     * - Promotion offer text used to display
     */
    offer_text?: string;
};
/** @returns {Ownership1} */
declare function Ownership1(): Ownership1;
type Ownership1 = {
    /**
     * - Promotion amount payable category
     */
    payable_category?: string;
    /**
     * - Promotion amount bearable party
     */
    payable_by?: string;
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
/** @returns {BuyRuleItemCriteria} */
declare function BuyRuleItemCriteria(): BuyRuleItemCriteria;
type BuyRuleItemCriteria = {
    cart_quantity?: CompareObject;
    /**
     * - List of all zones on which promotion
     * is applicable
     */
    available_zones?: string[];
    /**
     * - List of all company ids on
     * which promotion is not applicable
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
     * - List of all store ids on which
     * promotion is not applicable
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
    meta?: ItemSizeMapping;
};
/** @returns {DiscountItemCriteria} */
declare function DiscountItemCriteria(): DiscountItemCriteria;
type DiscountItemCriteria = {
    /**
     * - List of all store ids on which promotion
     * is applicable
     */
    item_store?: number[];
    /**
     * - List of all company ids on which
     * promotion is applicable
     */
    item_company?: number[];
    /**
     * - List of all brand ids on which promotion
     * is applicable
     */
    item_brand?: number[];
    /**
     * - List of all brand ids on which
     * promotion is not applicable
     */
    item_exclude_brand?: number[];
    /**
     * - List of all L3 category on which
     * promotion is applicable
     */
    item_category?: number[];
    /**
     * - List of all L3 category on
     * which promotion is not applicable
     */
    item_exclude_category?: number[];
    /**
     * - List of all L1 category on which
     * promotion is applicable
     */
    item_l1_category?: number[];
    /**
     * - List of all item ids on
     * which promotion is not applicable
     */
    item_exclude_l1_category?: number[];
    /**
     * - List of all L2 category on which
     * promotion is applicable
     */
    item_l2_category?: number[];
    /**
     * - List of all L2 category on
     * which promotion is not applicable
     */
    item_exclude_l2_category?: number[];
    /**
     * - List of all departments ids on which
     * promotion is applicable
     */
    item_department?: number[];
    /**
     * - List of all department ids
     * on which promotion is not applicable
     */
    item_exclude_department?: number[];
    /**
     * - List of all item ids on which promotion is applicable
     */
    item_id?: number[];
    /**
     * - List of all item ids on which
     * promotion is not applicable
     */
    item_exclude_id?: number[];
    /**
     * - Buy rules that apply to this discount
     */
    buy_rules?: string[];
    /**
     * - List of all zones ids on which
     * promotion is applicable
     */
    available_zones?: string[];
    /**
     * - Product tags that qualify for the discount
     */
    product_tags?: string[];
    /**
     * - Whether the discount applies to all items
     */
    all_items?: boolean;
};
/** @returns {DiscountOffer} */
declare function DiscountOffer(): DiscountOffer;
type DiscountOffer = {
    /**
     * - Maximum discount amount in promotion
     */
    max_discount_amount?: number;
    /**
     * - Discount price which is price after
     * deducting discount amount in fixed price promotion
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
    /**
     * - Cart sequence number of item for
     * which offer is valid
     */
    item_sequence_number?: number;
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
    uses?: UsesRestriction1;
    /**
     * - List of store id on which promotion
     * is applicable
     */
    ordering_stores?: number[];
};
/** @returns {PromotionSchedule} */
declare function PromotionSchedule(): PromotionSchedule;
type PromotionSchedule = {
    /**
     * - Then end date of promotion till valid
     */
    end?: string;
    /**
     * - Then start date of promotion is valid
     */
    start?: string;
    /**
     * - Promotion status like draft, review
     */
    status?: string;
    /**
     * - The status of promotion is published or not
     */
    published?: boolean;
    /**
     * - List of date time, which we will
     * schedule the promotion
     */
    next_schedule?: any[];
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
     * - Promotion mode, like coupon or promotion
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
     * - Flag to verify if promotion is ready to
     * be applied on cart and ready to update promotion
     */
    is_processed?: boolean;
    /**
     * - Unique code of promotion
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
     * - Application id in which promotion will be used
     */
    application_id: string;
    buy_rules: ItemCriteria;
    /**
     * - Custom data stored in promotion
     */
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    /**
     * - Unique identifier of promotion
     */
    _id?: string;
    /**
     * - List of tags on which promotion is applicable
     */
    tags?: string[];
    /**
     * - Boolean value to determine if the
     * promotion should be applied automatically or not
     */
    auto_apply?: boolean;
};
/** @returns {PromotionsResult} */
declare function PromotionsResult(): PromotionsResult;
type PromotionsResult = {
    /**
     * - List of promotions
     */
    items?: PromotionListItem[];
    page?: Page;
};
/** @returns {PromotionAdd} */
declare function PromotionAdd(): PromotionAdd;
type PromotionAdd = {
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
     * - True means to apply all discount offers
     */
    apply_all_discount?: boolean;
    display_meta?: DisplayMeta1;
    ownership?: Ownership1;
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
    buy_rules?: BuyRuleItemCriteria;
    /**
     * - Set extra properties in promotion
     */
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    /**
     * - List of tags applicable for promotion
     */
    tags?: string[];
    /**
     * - Boolean value to determine if the
     * promotion should be applied automatically or not
     */
    auto_apply?: boolean;
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
    ownership?: Ownership1;
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
    buy_rules?: ItemCriteria;
    /**
     * - Set extra properties in promotion
     */
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    /**
     * - List of tags applicable for promotion
     */
    tags?: string[];
    /**
     * - Boolean value to determine if the
     * promotion should be applied automatically or not
     */
    auto_apply?: boolean;
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
    ownership?: Ownership1;
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
    buy_rules?: ItemCriteria;
    /**
     * - Set extra properties in promotion
     */
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    /**
     * - List of tags applicable for promotion
     */
    tags?: string[];
    /**
     * - Boolean value to determine if the
     * promotion should be applied automatically or not
     */
    auto_apply?: boolean;
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
    ownership?: Ownership1;
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
    buy_rules?: BuyRuleItemCriteria;
    /**
     * - Set extra properties in promotion
     */
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    /**
     * - List of tags applicable for promotion
     */
    tags?: string[];
    /**
     * - Boolean value to determine if the
     * promotion should be applied automatically or not
     */
    auto_apply?: boolean;
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
/** @returns {ActivePromosResult} */
declare function ActivePromosResult(): ActivePromosResult;
type ActivePromosResult = {
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
    /**
     * - It define credit coupon
     * applicable for cart
     */
    revenue_engine_coupon?: boolean;
    /**
     * - Free gift charges per product
     */
    gift_pricing?: number;
    /**
     * - Enabled flag for cart configuration
     */
    enabled?: boolean;
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
    /**
     * - It define credit coupon
     * applicable for cart
     */
    revenue_engine_coupon?: boolean;
    /**
     * - Free gift charges per product
     */
    gift_pricing?: number;
    /**
     * - Enabled flag for cart configuration
     */
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
    /**
     * - Flag indicating whether refunds are
     * allowed at article level
     */
    allowed_refund?: boolean;
    /**
     * - Minimum allowed net price for the
     * article. If the article's price after all discounts and adjustments falls
     * below this threshold, the price adjustment will be automatically removed.
     * (Applicable only for price adjustment discount type)
     */
    min_price_threshold?: number;
    /**
     * - Index of the line item in the cart
     */
    article_index?: number;
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
     * allowed at cart level
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
    /**
     * - Additional information regarding price adjustment
     */
    meta?: any;
    /**
     * - Unique identifier of the cart
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
     * allowed at cart level
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
    /**
     * - Additional information regarding price adjustment
     */
    meta?: any;
    /**
     * - Unique identifier of the cart
     */
    cart_id: string;
    distribution_logic?: DistributionLogic;
};
/** @returns {PriceAdjustmentResult} */
declare function PriceAdjustmentResult(): PriceAdjustmentResult;
type PriceAdjustmentResult = {
    data?: PriceAdjustment;
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
     * allowed at cart level
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
     * - Unique identifier of the cart
     */
    cart_id: string;
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
/** @returns {OpenapiCartDetailsCreation} */
declare function OpenapiCartDetailsCreation(): OpenapiCartDetailsCreation;
type OpenapiCartDetailsCreation = {
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
     * - Total engage points available.
     */
    total_points?: number;
    /**
     * - Engage points applied on the cart.
     */
    points?: number;
    /**
     * - Engage points amount applied on the cart.
     */
    amount?: number;
    /**
     * - Engage discount amount applied on the cart
     * as payment mode.
     */
    mop_amount?: number;
    /**
     * - Engage points that can be earned on the
     * cart. for ex. (You’ll earn 56 points from this order!)
     */
    earn_points?: number;
    /**
     * - Engage points amount that can be
     * earned on the cart. for ex. or ex. (You’ll earn ₹56 from this order!)
     */
    earn_points_amount?: number;
    /**
     * - Title to show how many earn points are
     * gained for this order.
     */
    earn_title?: string;
    /**
     * - Unique title for loyalty program applicable.
     */
    title?: string;
};
/** @returns {RawBreakup} */
declare function RawBreakup(): RawBreakup;
type RawBreakup = {
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
     * - Engage points amount applied on the cart.
     */
    engage_amount?: number;
    /**
     * - Engage mop amount applied on the cart.
     */
    engage_mop_amount?: number;
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
     * - Selling price amount of all products in cart
     */
    subtotal?: number;
    /**
     * - Convenience fee amount applied to cart
     */
    convenience_fee?: number;
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
     * - Unique identifier of entities like brand or seller
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
     * - Type of action
     */
    type?: string;
    /**
     * - Url of the product to render the product
     */
    url?: string;
    query?: ActionQuery;
    page?: ProductActionPage;
};
/** @returns {CategoryInfo} */
declare function CategoryInfo(): CategoryInfo;
type CategoryInfo = {
    /**
     * - Unique identifier of Product Category
     */
    uid?: number;
    /**
     * - Category name of the product
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
    teaser_tag?: Tags;
    brand?: BaseInfo;
    action?: ProductAction;
    /**
     * - Unique identifier of the product in cart
     */
    uid?: number;
    /**
     * - Products tags that are added to each product to
     * identify the set of products
     */
    tags?: string[];
    /**
     * - Field to add custom json of the product in cart
     */
    _custom_json?: any;
    /**
     * - Type of product in cart
     */
    type?: string;
    /**
     * - Product name of the product in cart which is
     * defined on platform
     */
    name?: string;
    /**
     * - Product code of the product while defining
     * product on platform
     */
    item_code?: string;
    /**
     * - Product category information which
     * incldes category name and category id
     */
    categories?: CategoryInfo[];
    /**
     * - Product attributes defined on platform
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
    /**
     * - Original price of product
     */
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
     * often used for internal reference
     */
    store_code?: string;
};
/** @returns {FulfillmentOptionSchema} */
declare function FulfillmentOptionSchema(): FulfillmentOptionSchema;
type FulfillmentOptionSchema = {
    /**
     * - Unique identifier for the delivery type.
     */
    slug?: string;
    /**
     * - Description of the delivery service.
     */
    description?: string;
    /**
     * - Indicates if this is the default delivery option.
     */
    is_default?: boolean;
    /**
     * - Unique ID of the delivery service.
     */
    id?: string;
    /**
     * - Type of fulfillment option.
     */
    type?: string;
    /**
     * - Name of the delivery service.
     */
    name?: string;
};
/** @returns {StoreTimingSchema} */
declare function StoreTimingSchema(): StoreTimingSchema;
type StoreTimingSchema = {
    /**
     * - The hour of the store in 24-hour format (e.g., 9 for 9 AM).
     */
    hour?: number;
    /**
     * - The minute of the store (e.g., 30 for 9:30 AM).
     */
    minute?: number;
};
/** @returns {StoreHoursSchema} */
declare function StoreHoursSchema(): StoreHoursSchema;
type StoreHoursSchema = {
    /**
     * - The day of the week (e.g., "Monday", "Tuesday").
     */
    weekday?: string;
    opening?: StoreTimingSchema;
    closing?: StoreTimingSchema;
    /**
     * - Indicates whether the store is open on the
     * specified weekday.
     */
    open?: boolean;
};
/** @returns {PickupStoreDetailSchema} */
declare function PickupStoreDetailSchema(): PickupStoreDetailSchema;
type PickupStoreDetailSchema = {
    /**
     * - A unique identifier for the store.
     */
    store_id?: number;
    /**
     * - The name of the store or pickup location.
     */
    name?: string;
    /**
     * - The postal code of the store's location.
     */
    pincode?: string;
    /**
     * - The distance between the store and the
     * customer's location.
     */
    distance?: number;
    /**
     * - The full address of the store.
     */
    address?: string;
    /**
     * - The store's operational hours for each day
     * of the week.
     */
    store_hours?: any;
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
    /**
     * - Gift card detail if gift card applied to the
     * product which indicates gift price, gift applicable flag and display
     * message for the gift
     */
    gift_card?: any;
    /**
     * - List fot the unique identifier
     * for the product grouping.
     */
    product_group_tags?: string[];
    /**
     * - Flag to indicate the item as a
     * seperate article in cart
     */
    force_new_line_item?: boolean;
    /**
     * - Unique identifier of the article
     */
    identifier?: any;
    /**
     * - Quantity of the product which will
     * specially manufactured as not available in stock
     */
    mto_quantity?: number;
    /**
     * - Field to update extra meta of the article in cart
     */
    extra_meta?: any;
    /**
     * - Type of the data sent in response. Possible value
     * is article
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
     * - Size of the article added in cart
     */
    size?: string;
    store?: StoreInfo;
    fulfillment_option?: FulfillmentOptionSchema;
    pickup_store_detail?: PickupStoreDetailSchema;
    /**
     * - Specify the index of article in cart.
     */
    item_index?: number;
    /**
     * - A list of article tags
     */
    tags?: string[];
};
/** @returns {Ownership2} */
declare function Ownership2(): Ownership2;
type Ownership2 = {
    /**
     * - Promotion amount payable category
     */
    payable_category?: string;
    /**
     * - Promotion amount bearable party
     */
    payable_by?: string;
};
/** @returns {DiscountRulesApp} */
declare function DiscountRulesApp(): DiscountRulesApp;
type DiscountRulesApp = {
    /**
     * - Offer detail for promotion
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
     * - Offer label of the applied promotion, to
     * be used as display text.
     */
    offer_label?: string;
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
     * - Promotion unique code
     */
    code?: string;
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
     * - Original MRP of product.
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
     * - Price of the product after applying
     * inventory discount and before applying promotion, coupon and engage discount.
     */
    effective?: number;
    /**
     * - Selling price of the product
     */
    selling?: number;
    /**
     * - Final price of the product in cart after
     * applying all discounts such as promotion, coupon and engage discount."
     */
    final_price?: number;
    /**
     * - Net discount applied on product, contains
     * total discount amount including promotions, coupons and engage discount
     * [excluding inventory discount].
     */
    discount?: number;
};
/** @returns {ProductPriceInfo} */
declare function ProductPriceInfo(): ProductPriceInfo;
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
/** @returns {ProductMaxQuantityInfo} */
declare function ProductMaxQuantityInfo(): ProductMaxQuantityInfo;
type ProductMaxQuantityInfo = {
    /**
     * - The total quantity of the item available across
     * all stores for all sellers. If no data is available, this field will be null.
     */
    item?: number;
    /**
     * - The total quantity of the item available
     * across all stores for the specified seller. If no seller data is available,
     * this field will be null.
     */
    item_seller?: number;
    /**
     * - The total quantity of the item available
     * for a specific store. If no store data is available, this field will be null.
     */
    item_store?: number;
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
/** @returns {CurrencyValue} */
declare function CurrencyValue(): CurrencyValue;
type CurrencyValue = {
    /**
     * - Currency code.
     */
    currency?: string;
    /**
     * - Numeric amount value.
     */
    value?: number;
};
/** @returns {ChargesAmount} */
declare function ChargesAmount(): ChargesAmount;
type ChargesAmount = {
    base_currency?: CurrencyValue;
    ordering_currency?: CurrencyValue;
};
/** @returns {ArticleCharges} */
declare function ArticleCharges(): ArticleCharges;
type ArticleCharges = {
    /**
     * - Meta data realted to charges price adjustment.
     */
    meta?: any;
    amount?: ChargesAmount;
    /**
     * - Name of the charge applied.
     */
    name?: string;
    /**
     * - Whether refund is allowed or not for the charge.
     */
    allow_refund?: boolean;
    /**
     * - Code of the charge applied.
     */
    code?: string;
    /**
     * - Type of the charge applied.
     */
    type?: string;
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
     * (limited upto 50 EAN identifier in a single request)
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
     * - The attribute key associated with the size
     */
    key?: string;
    coupon?: CouponDetails;
    /**
     * - Bulk offer information for the product
     * which denotes if any bulk offer is applied to the product in cart
     */
    bulk_offer?: any;
    price?: ProductPriceInfo;
    /**
     * - Message for the coupon denotes which
     * coupon is applied and empty if not applied
     */
    coupon_message?: string;
    identifiers: CartProductIdentifer;
    /**
     * - Product level message which denotes error
     * information to display over the product in cart
     */
    message?: string;
    /**
     * - Discount amount of the product in cart
     */
    discount?: string;
    availability?: ProductAvailability;
    /**
     * - An Integer indication the Minimum Order Quantity
     * of a product, e.g. 100.
     */
    moq?: any;
    max_quantity?: ProductMaxQuantityInfo;
    price_per_unit?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    /**
     * - Whether MTO (Make to Order) is enabled or not.
     */
    custom_order?: any;
    /**
     * - Type of the item in cart.
     */
    item_type?: string;
    /**
     * - Charges information which denotes
     * types of charges and amount of charge applied to that product in cart.
     */
    charges?: ArticleCharges[];
};
/** @returns {OpenapiCartDetailsResult} */
declare function OpenapiCartDetailsResult(): OpenapiCartDetailsResult;
type OpenapiCartDetailsResult = {
    /**
     * - Cart validity flag determines the if the
     * response is valid or not
     */
    is_valid?: boolean;
    /**
     * - Message of the cart Open API cart detail response
     */
    message?: string;
    breakup_values?: CartBreakup;
    /**
     * - Items details in cart
     */
    items?: CartProductInfo[];
};
/** @returns {OpenApiErrorResult} */
declare function OpenApiErrorResult(): OpenApiErrorResult;
type OpenApiErrorResult = {
    /**
     * - Success flag for cart detail open api response
     */
    success?: boolean;
    /**
     * - Error message of the Open API cart detail response
     */
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
    area_code?: string;
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
/** @returns {OpenApiCartServiceabilityCreation} */
declare function OpenApiCartServiceabilityCreation(): OpenApiCartServiceabilityCreation;
type OpenApiCartServiceabilityCreation = {
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
     * - Cart validity flag determines the if the
     * response is valid or not
     */
    is_valid?: boolean;
    /**
     * - Items data list in user cart that
     * includes item id, item size, store id, available sizes and rest of the item
     * related data
     */
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    /**
     * - Message of the cart detail API response
     */
    message?: string;
    breakup_values?: CartBreakup;
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
    /**
     * - Flag to determine where the coupon is
     * applied to cart or not
     */
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
    /**
     * - Minimum cart value of the coupon
     * applied to cart
     */
    minimum_cart_value?: number;
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
/** @returns {PlatformAlternatePickupPerson} */
declare function PlatformAlternatePickupPerson(): PlatformAlternatePickupPerson;
type PlatformAlternatePickupPerson = {
    /**
     * - Indicates whether an alternate pickup person
     * is enabled.
     */
    enabled?: boolean;
    /**
     * - Name of the alternate pickup person.
     */
    name?: string;
    /**
     * - Email address of the alternate pickup person.
     */
    email?: string;
    /**
     * - Phone number of the alternate pickup person.
     */
    phone?: string;
    /**
     * - Country phone code of the alternate
     * pickup person (e.g., "+91").
     */
    country_phone_code?: string;
};
/** @returns {CartDetailResult} */
declare function CartDetailResult(): CartDetailResult;
type CartDetailResult = {
    /**
     * - Unique identifier of the user cart
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
     * - Checkout mode of user cart
     */
    checkout_mode?: string;
    /**
     * - Last modified timestamp of cart
     */
    last_modified?: string;
    /**
     * - Buy now flag for the cart which denotes user
     * is doing fast checkout for the cart using buy now
     */
    buy_now?: boolean;
    /**
     * - GSTIN added in user cart
     */
    gstin?: string;
    /**
     * - List of applied
     * promotions data to cart which includes promotion id, promotion name, offer
     * text, description, buy rules, discount rules and promotion type
     */
    applied_promo_details?: AppliedPromotion[];
    /**
     * - Permanent Account Number of the user
     */
    pan_no?: string;
    /**
     * - Custom meta details added cart
     * checkout API payload
     */
    custom_cart_meta?: any;
    alternate_pickup_person?: PlatformAlternatePickupPerson;
    /**
     * - Determines if the cart
     * has available promotion free gift items to choose on its added items
     */
    free_gift_selection_available?: boolean;
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
    /**
     * - Field to specify the product
     * groups of the product that the user is trying to add in cart
     */
    product_group_tags?: string[];
    /**
     * - Unique identifier of an article
     */
    article_id?: string;
    /**
     * - Field to determine how article
     * assignment should happen by article assignment level and strategy
     */
    article_assignment?: any;
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
     * - Field used to decide the product
     * add as a seperate product in cart
     */
    force_new_line_item?: boolean;
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
    /**
     * - Specifies the fulfillment
     * method, indicating whether an order is for home delivery or store pickup
     */
    fulfillment_option_slug?: string;
    /**
     * - Unique identifier of the pickup store
     * selected by the user from which user wants to pickup the product.
     */
    pickup_store_id?: number;
};
/** @returns {AddCartCreation} */
declare function AddCartCreation(): AddCartCreation;
type AddCartCreation = {
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
    /**
     * - Add to cart result data
     */
    result?: any;
    /**
     * - List of items that needs to be added in cart.
     */
    items?: CartItemInfo[];
};
/** @returns {CartItemInfo} */
declare function CartItemInfo(): CartItemInfo;
type CartItemInfo = {
    /**
     * - Item id of the product that needs to be
     * added/updated/removed.
     */
    item_id?: number;
    /**
     * - Item size of the product that needs to be
     * added/updated/removed.
     */
    size?: string;
    /**
     * - Unique identifier of the store selected by
     * the user from which user want to buy a product.
     */
    store_id?: number;
    /**
     * - True if items are added/updated/removed successfully.
     */
    success?: boolean;
    /**
     * - Message for added/updated/removed item.
     */
    message?: string;
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
    /**
     * - Field used to decide the product
     * add as a seperate product in cart
     */
    force_new_line_item?: boolean;
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
    /**
     * - Specifies the fulfillment
     * method, indicating whether an order is for home delivery or store pickup
     */
    fulfillment_option_slug?: string;
    /**
     * - Unique identifier of the pickup store
     * selected by the user from which user
     */
    pickup_store_id?: number;
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
/** @returns {UpdateCartCreation} */
declare function UpdateCartCreation(): UpdateCartCreation;
type UpdateCartCreation = {
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
     * - Contains article related result info
     */
    result?: any;
    /**
     * - List of items that needs to be updated in cart.
     */
    items?: CartItemInfo[];
    /**
     * - Message of update cart API response
     */
    message?: string;
};
/** @returns {OverrideCartItemPromo} */
declare function OverrideCartItemPromo(): OverrideCartItemPromo;
type OverrideCartItemPromo = {
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
    billing_address?: ShippingAddress;
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
     * - A unique identifier for the EDC (Electronic
     * Data Capture) machine. This value may be null if the identifier is not available.
     */
    device_id?: string;
    shipping_address?: ShippingAddress;
};
/** @returns {OverrideCheckoutData} */
declare function OverrideCheckoutData(): OverrideCheckoutData;
type OverrideCheckoutData = {
    /**
     * - Amount for the order in smallest currency unit
     * (e.g., paise for INR)
     */
    amount?: number;
    /**
     * - Order id generated at the payment gateway
     */
    order_id?: string;
    /**
     * - Customer email used for the payment
     */
    email?: string;
    /**
     * - Customer contact number used for the payment
     */
    contact?: string;
    /**
     * - Currency code for the transaction
     */
    currency?: string;
    /**
     * - Customer id generated/linked at the payment gateway
     */
    customer_id?: string;
    /**
     * - Callback URL where the payment status
     * will be posted
     */
    callback_url?: string;
    /**
     * - Bank code used for the payment (if method is netbanking)
     */
    bank?: string;
    /**
     * - Payment method used for the transaction
     */
    method?: string;
    /**
     * - Virtual Payment Address used for UPI transactions
     */
    vpa?: string;
};
/** @returns {OverrideCheckoutResult} */
declare function OverrideCheckoutResult(): OverrideCheckoutResult;
type OverrideCheckoutResult = {
    data: OverrideCheckoutData;
    cart: CheckCart;
    /**
     * - Success flag of cart override checkout API response
     */
    success: string;
    /**
     * - Order id generated after placing order
     */
    order_id: string;
    /**
     * - Message of the cart override checkout API response
     */
    message: string;
};
/** @returns {GetShareCartLinkCreation} */
declare function GetShareCartLinkCreation(): GetShareCartLinkCreation;
type GetShareCartLinkCreation = {
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
     * - Meta data sent while generating share cart link
     */
    meta?: any;
};
/** @returns {SharedCart} */
declare function SharedCart(): SharedCart;
type SharedCart = {
    /**
     * - Coupon text of the applied coupon on user cart
     */
    coupon_text?: string;
    /**
     * - Cart id of shared cart
     */
    id?: string;
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
     * the user cart
     */
    delivery_charge_info?: string;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process
     */
    restrict_checkout?: boolean;
    /**
     * - Message of the get shared cart API response
     */
    message?: string;
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
     * - Last modified timestamp of user cart
     */
    last_modified?: string;
    /**
     * - Buy now flag of user cart
     */
    buy_now?: boolean;
    /**
     * - Cart id of user cart for generating cart sharing token
     */
    cart_id?: number;
    /**
     * - GSTIN added in user cart
     */
    gstin?: string;
    /**
     * - Custom cart meta of user cart added
     * via update cart meta API
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
     * - Customer user ID to associate with the cart.
     * Send null to remove existing mapping of customer from cart.
     */
    user_id?: string;
};
/** @returns {UserInfo} */
declare function UserInfo(): UserInfo;
type UserInfo = {
    /**
     * - User gender
     */
    gender?: string;
    /**
     * - Date format of user when user last modified
     */
    modified_on?: string;
    /**
     * - Unique Identifier of user
     */
    _id?: string;
    /**
     * - Unique UID of user
     */
    uid?: string;
    /**
     * - Unique external id
     */
    external_id?: string;
    /**
     * - 10 digit Mobile number of user
     */
    mobile?: string;
    /**
     * - Last name of user
     */
    last_name?: string;
    /**
     * - Date format of user when user registered
     */
    created_at?: string;
    /**
     * - First name of user
     */
    first_name?: string;
};
/** @returns {UserCartMappingResult} */
declare function UserCartMappingResult(): UserCartMappingResult;
type UserCartMappingResult = {
    /**
     * - Coupon text of coupon applied on cart
     */
    coupon_text?: string;
    user?: UserInfo;
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
    /**
     * - Restrict checkout flag to restrict
     * the checkout process
     */
    restrict_checkout?: boolean;
    /**
     * - Message of the get cart detail API response
     */
    message?: string;
    breakup_values?: CartBreakup;
    /**
     * - Cart validity flag determines the if the
     * response is valid or not
     */
    is_valid?: boolean;
    currency?: CartCurrency;
    /**
     * - Checkout mode of user cart
     */
    checkout_mode?: string;
    /**
     * - Last modified timestamp of cart
     */
    last_modified?: string;
    /**
     * - Buy now flag for the cart which denotes user
     * is doing fast checkout for the cart using buy now
     */
    buy_now?: boolean;
    /**
     * - GSTIN added in user cart
     */
    gstin?: string;
    /**
     * - Custom meta details added cart
     * checkout API payload
     */
    custom_cart_meta?: any;
    /**
     * - List of applied
     * promotions data to cart which includes promotion id, promotion name, offer
     * text, description, buy rules, discount rules and promotion type
     */
    applied_promo_details?: AppliedPromotion[];
    /**
     * - Permanent Account Number of the user
     */
    pan_no?: string;
};
/** @returns {PlatformAddCartDetails} */
declare function PlatformAddCartDetails(): PlatformAddCartDetails;
type PlatformAddCartDetails = {
    /**
     * - The unique identifier of the user for whom
     * items are being added to the cart
     */
    user_id?: string;
    /**
     * - Indicates whether a new cart should be
     * created. If `true`, a new cart is created even if one already exists.
     */
    new_cart?: boolean;
    /**
     * - Determines whether the item is added to
     * the user's default visible cart on the storefront. If `true`, the item is
     * added to the user's default cart that is accessible via the storefront. If
     * `false`, an existing active cart is fetched if available; otherwise, a new
     * hidden cart is created. Defaults to `true`.
     */
    default_cart?: boolean;
    /**
     * - List of items detail which need to be
     * added to cart like item id, item size, and item quantity
     */
    items?: AddProductCart[];
};
/** @returns {PlatformUpdateCartDetails} */
declare function PlatformUpdateCartDetails(): PlatformUpdateCartDetails;
type PlatformUpdateCartDetails = {
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
    /**
     * - Field to determine if free
     * gift item to be removed from cart or it needs to be added.
     */
    free_gift_items_operation?: string;
};
/** @returns {UpdateCartBreakup} */
declare function UpdateCartBreakup(): UpdateCartBreakup;
type UpdateCartBreakup = {
    /**
     * - Select `true` to include store credit in
     * cart breakup
     */
    store_credit?: boolean;
};
/** @returns {DeleteCartDetails} */
declare function DeleteCartDetails(): DeleteCartDetails;
type DeleteCartDetails = {
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
    /**
     * - Message for delete cart response
     */
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
/** @returns {DiscountRules} */
declare function DiscountRules(): DiscountRules;
type DiscountRules = {
    /**
     * - Discount will be reflected in the
     * cart upon adding the product.
     */
    discounted_price?: number;
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
     * - Discount rules of coupons
     */
    rule?: DiscountRules[];
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
    /**
     * - Message which is used to
     * display to the customer if the coupon is applied successfully
     */
    coupon_applicable_message?: string;
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
    /**
     * - Denotes if previous page of the coupon
     * is available
     */
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
/** @returns {ApplyCouponDetails} */
declare function ApplyCouponDetails(): ApplyCouponDetails;
type ApplyCouponDetails = {
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
    /**
     * - Custom json of the address
     */
    _custom_json?: any;
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
/** @returns {PlatformGetAddressesDetails} */
declare function PlatformGetAddressesDetails(): PlatformGetAddressesDetails;
type PlatformGetAddressesDetails = {
    /**
     * - Personally Identifiable Information
     * masking flag to denote if the user data in address is masked or not.
     */
    pii_masking?: boolean;
    /**
     * - List of all address saved by customer
     */
    address?: PlatformAddress[];
    validation_config?: ValidationConfig;
};
/** @returns {SaveAddressDetails} */
declare function SaveAddressDetails(): SaveAddressDetails;
type SaveAddressDetails = {
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
};
/** @returns {UpdateAddressDetails} */
declare function UpdateAddressDetails(): UpdateAddressDetails;
type UpdateAddressDetails = {
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
};
/** @returns {DeleteAddressResult} */
declare function DeleteAddressResult(): DeleteAddressResult;
type DeleteAddressResult = {
    /**
     * - Id of the address
     */
    id?: string;
    /**
     * - Deleted flag in delete address response
     * states whether the address was deleted or not
     */
    is_deleted?: boolean;
};
/** @returns {PlatformSelectCartAddress} */
declare function PlatformSelectCartAddress(): PlatformSelectCartAddress;
type PlatformSelectCartAddress = {
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
    /**
     * - Article unique id for shipment
     */
    article_id?: string;
};
/** @returns {PlatformShipmentDetails} */
declare function PlatformShipmentDetails(): PlatformShipmentDetails;
type PlatformShipmentDetails = {
    /**
     * - Count of shipments that will be shipped
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
    fulfillment_option?: FulfillmentOptionSchema;
};
/** @returns {PlatformCartShipmentsResult} */
declare function PlatformCartShipmentsResult(): PlatformCartShipmentsResult;
type PlatformCartShipmentsResult = {
    /**
     * - Coupon text of coupon applied on cart
     */
    coupon_text?: string;
    /**
     * - Cart id of the user cart
     */
    id?: string;
    /**
     * - Pan card config states at what condition
     * user should enter the pan card
     */
    pan_config?: any;
    delivery_promise?: ShipmentPromise;
    /**
     * - Comment message added in cart
     */
    comment?: string;
    /**
     * - List of items in cart
     */
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    /**
     * - Delivery charge in information
     * message on shipment
     */
    delivery_charge_info?: string;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process
     */
    restrict_checkout?: boolean;
    /**
     * - Response message of get shipments API
     */
    message?: string;
    breakup_values?: CartBreakup;
    /**
     * - Staff employee user id if cart is
     * created by staff employee for the customer
     */
    staff_user_id?: string;
    /**
     * - Cart validity flag determines the if the
     * response is valid or not
     */
    is_valid?: boolean;
    /**
     * - List of shipments that
     * will be shipped
     */
    shipments?: PlatformShipmentDetails[];
    currency?: CartCurrency;
    /**
     * - Checkout mode of cart
     */
    checkout_mode?: string;
    /**
     * - Last modified timestamp of cart
     */
    last_modified?: string;
    /**
     * - Buy now flag of user cart
     */
    buy_now?: boolean;
    /**
     * - GSTIN number added in cart
     */
    gstin?: string;
    /**
     * - List of applied
     * promotions data to cart which includes promotion id, promotion name, offer
     * text, description, buy rules, discount rules and promotion type
     */
    applied_promo_details?: AppliedPromotion[];
    /**
     * - Error details if any error occurs which
     * includes type of error, error code and error message
     */
    error?: boolean;
    /**
     * - Permanent Account Number of the user
     */
    pan_no?: string;
    /**
     * - Custom cart meta details added in cart
     */
    custom_cart_meta?: any;
    /**
     * - Customer user id associated with cart
     */
    customer_id?: string;
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
    /**
     * - Item index determines the position in the
     * list where the product should be updated.
     */
    item_index?: number;
};
/** @returns {UpdateCartShipmentCreation} */
declare function UpdateCartShipmentCreation(): UpdateCartShipmentCreation;
type UpdateCartShipmentCreation = {
    /**
     * - List of Shipments which
     * includes shipment data like shipment items, shipment promise, Shipment
     * type, shipment order type, shipment dp options etc
     */
    shipments: UpdateCartShipmentItem[];
};
/** @returns {PlatformCartMetaCreation} */
declare function PlatformCartMetaCreation(): PlatformCartMetaCreation;
type PlatformCartMetaCreation = {
    /**
     * - GSTIN number to be added in user cart
     */
    gstin?: string;
    /**
     * - Customer contact details for
     * customer pickup at store
     */
    pick_up_customer_details?: any;
    alternate_pickup_person?: PlatformAlternatePickupPerson;
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
     * - Comment message to be added in user cart
     */
    comment?: string;
    /**
     * - Staff user id
     */
    staff_user_id?: string;
};
/** @returns {CartMetaDetails} */
declare function CartMetaDetails(): CartMetaDetails;
type CartMetaDetails = {
    /**
     * - Whether added meta was vaild
     */
    is_valid?: boolean;
    /**
     * - Detailed message that used to display
     */
    message?: string;
};
/** @returns {CartMetaMissingDetails} */
declare function CartMetaMissingDetails(): CartMetaMissingDetails;
type CartMetaMissingDetails = {
    /**
     * - Detailed errors for invalid cart meta request
     */
    errors?: string[];
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
    /**
     * - Key name of custom meta
     */
    key: string;
    /**
     * - Value to be added in key
     */
    value: string;
};
/** @returns {OrderTag} */
declare function OrderTag(): OrderTag;
type OrderTag = {
    /**
     * - Display text for order tag
     */
    display_text?: string;
    /**
     * - Slug to be used for tagging order with any unique value
     */
    slug?: string;
};
/** @returns {PlatformCartCheckoutDetailCreation} */
declare function PlatformCartCheckoutDetailCreation(): PlatformCartCheckoutDetailCreation;
type PlatformCartCheckoutDetailCreation = {
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
    /**
     * - Success callback url to be
     * redirected after payment received
     */
    success_callback_url?: string;
    /**
     * - Failure callback url to be
     * redirected after payment failed
     */
    failure_callback_url?: string;
    /**
     * - Order tags used to identify specific
     * type of order which is tagged using order tags
     */
    order_tags?: OrderTag[];
};
/** @returns {CheckCart} */
declare function CheckCart(): CheckCart;
type CheckCart = {
    /**
     * - Coupon text of the applied coupon on order placed
     */
    coupon_text?: string;
    /**
     * - Cash On Delivery message for the order placed
     */
    cod_message?: string;
    /**
     * - Cart id of the user cart
     */
    id?: string;
    /**
     * - Store code from which the order placed
     */
    store_code?: string;
    delivery_promise?: ShipmentPromise;
    /**
     * - Comment message added in cart after order placed
     */
    comment?: string;
    /**
     * - User type of the cart who places the order
     */
    user_type?: string;
    /**
     * - Items details in cart after order placed
     */
    items?: CartProductInfo[];
    /**
     * - Error details if any error occurs which
     * includes type of error, error code and error message
     */
    error_message?: string;
    /**
     * - Success flag of checkout cart API response
     */
    success?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    /**
     * - Delivery charge in information
     * message on shipment
     */
    delivery_charge_info?: string;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process
     */
    restrict_checkout?: boolean;
    /**
     * - Order id generated after placing order
     */
    order_id?: string;
    /**
     * - Message of the cart checkout API response
     */
    message?: string;
    breakup_values?: CartBreakup;
    /**
     * - Cash On Delivery charges of the user cart
     */
    cod_charges?: number;
    /**
     * - Valid flag fotr the checkout response if
     * order placed was valid
     */
    is_valid?: boolean;
    /**
     * - Cart id of user cart
     */
    uid?: string;
    /**
     * - Checkout mode of user cart
     */
    checkout_mode?: string;
    currency?: CartCurrency;
    /**
     * - Last modified timestamp of cart
     */
    last_modified?: string;
    /**
     * - Buy now flag of user cart
     */
    buy_now?: boolean;
    /**
     * - Delivery charge order value
     */
    delivery_charge_order_value?: number;
    /**
     * - Cart id of the user cart for which the order placed
     */
    cart_id?: number;
    /**
     * - Store employees data
     */
    store_emps?: any[];
    /**
     * - GSTIN number added in cart
     */
    gstin?: string;
    /**
     * - Whether Cash On Delivery available
     */
    cod_available?: boolean;
    /**
     * - Delivery charges of the order placed
     * via checkout API
     */
    delivery_charges?: number;
    /**
     * - Custom meta details added cart
     * checkout API payload
     */
    custom_cart_meta?: any;
};
/** @returns {CartCheckoutDetails} */
declare function CartCheckoutDetails(): CartCheckoutDetails;
type CartCheckoutDetails = {
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
    /**
     * - Message of the cart checkout v2 API response
     */
    message?: string;
};
/** @returns {CartCheckoutResult} */
declare function CartCheckoutResult(): CartCheckoutResult;
type CartCheckoutResult = {
    app_intercept_url?: string;
    data?: any;
    cart?: CheckCart;
    success?: boolean;
    callback_url?: string;
    payment_confirm_url?: string;
    order_id?: string;
    message?: string;
};
/** @returns {CartDeliveryModesDetails} */
declare function CartDeliveryModesDetails(): CartDeliveryModesDetails;
type CartDeliveryModesDetails = {
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
    /**
     * - Address description for address data
     */
    address?: string;
};
/** @returns {StoreDetails} */
declare function StoreDetails(): StoreDetails;
type StoreDetails = {
    /**
     * - List of items need to pickup from store
     */
    items?: PickupStoreDetail[];
};
/** @returns {CartPaymentUpdate} */
declare function CartPaymentUpdate(): CartPaymentUpdate;
type CartPaymentUpdate = {
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
    /**
     * - Previous bag IDs for which an
     * exchange has been performed.
     */
    payment_source_bag_id?: string[];
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
/** @returns {PlatformCartCheckoutDetailV2Creation} */
declare function PlatformCartCheckoutDetailV2Creation(): PlatformCartCheckoutDetailV2Creation;
type PlatformCartCheckoutDetailV2Creation = {
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
    /**
     * - The user id of user cart
     */
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
    /**
     * - Success callback url to be
     * redirected after payment received
     */
    success_callback_url?: string;
    /**
     * - Failure callback url to be
     * redirected after payment failed
     */
    failure_callback_url?: string;
    /**
     * - Order tags used to identify specific
     * type of order which is tagged using order tags
     */
    order_tags?: OrderTag[];
};
/** @returns {UpdateCartPaymentRequestV2} */
declare function UpdateCartPaymentRequestV2(): UpdateCartPaymentRequestV2;
type UpdateCartPaymentRequestV2 = {
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
/** @returns {DiscountOfferRule} */
declare function DiscountOfferRule(): DiscountOfferRule;
type DiscountOfferRule = {
    /**
     * - Discount offer type of the promotion
     */
    discount_type?: string;
    offer?: DiscountOffer;
    item_criteria?: DiscountItemCriteria;
    /**
     * - Logical condition expression for buy rules
     */
    buy_condition?: string;
    /**
     * - Price of product after applying this
     * discount rule of promotion. Note - returned only when store id is provided
     * in request params.
     */
    discounted_price?: number;
    /**
     * - List of buy rules that are
     * matching with item for this promotion
     */
    matched_buy_rules?: string[];
    meta?: ItemSizeMapping;
};
/** @returns {PromotionOffer} */
declare function PromotionOffer(): PromotionOffer;
type PromotionOffer = {
    /**
     * - Promotion unique identifier
     */
    id?: string;
    buy_rules?: BuyRuleItemCriteria;
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
    discount_rules?: DiscountOfferRule[];
    /**
     * - Details of free gift items
     */
    free_gift_items?: FreeGiftItems[];
    /**
     * - Offer details including T&C
     */
    description?: string;
};
/** @returns {PromotionOffersDetails} */
declare function PromotionOffersDetails(): PromotionOffersDetails;
type PromotionOffersDetails = {
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
/** @returns {OfferUser} */
declare function OfferUser(): OfferUser;
type OfferUser = {
    /**
     * - List of user group on which offer is allowed
     */
    groups?: number[];
    /**
     * - User type of the cart user who places the order
     */
    type?: string;
    /**
     * - Set true, if offer is applicable for guest user
     */
    anonymous?: boolean;
    /**
     * - List of user id on which offer is applicable
     */
    id?: string[];
    registered?: UserRegistered;
    /**
     * - List of email domain available for offer
     */
    email_domain?: string[];
};
/** @returns {OfferItemCriteria} */
declare function OfferItemCriteria(): OfferItemCriteria;
type OfferItemCriteria = {
    /**
     * - List of category id available for offer
     */
    category_id?: number[];
    /**
     * - List of collection id available for offer
     */
    collection_id?: string[];
    /**
     * - Boolean flag determining if offer is
     * applicable on all offers
     */
    all_items?: boolean;
    /**
     * - List of all brand ids on which promotion
     * is applicable
     */
    item_brand?: number[];
    /**
     * - List of unique identifier of articles on
     * which offer will be applicable
     */
    article_ids?: string[];
    /**
     * - List of all item sku on which promotion is applicable
     */
    item_sku?: string[];
    /**
     * - List of all item ids on which offer is applicable
     */
    item_id?: number[];
    /**
     * - List of all L1 category on which
     * offer is applicable
     */
    item_l1_category?: number[];
    /**
     * - List of all L2 category on which
     * offer is applicable
     */
    item_l2_category?: number[];
    /**
     * - List of all L3 category on which offer
     * is applicable
     */
    item_category?: number[];
    /**
     * - List of all departments ids on which
     * offer is applicable
     */
    item_department?: number[];
    /**
     * - List of all item store ids on which offer
     * is applicable
     */
    item_store?: number[];
    /**
     * - List of all item sizes on which offer is applicable
     */
    item_size?: string[];
    /**
     * - List of all company ids on which offer
     * is applicable
     */
    item_company?: number[];
    /**
     * - List of all product tags on which offer is
     * applicable
     */
    item_tags?: string[];
    cart_quantity?: CompareObject;
    cart_total?: CompareObject;
    /**
     * - List of all L1 categories
     * on which offer is not applicable
     */
    item_exclude_l1_category?: number[];
    /**
     * - List of all L2 categories
     * on which offer is not applicable
     */
    item_exclude_l2_category?: number[];
    /**
     * - List of all L3 categories on
     * which offer is not applicable
     */
    item_exclude_category?: number[];
    cart_unique_item_quantity?: CompareObject;
    cart_unique_item_amount?: CompareObject;
    /**
     * - List of all department ids
     * on which offer is not applicable
     */
    item_exclude_department?: number[];
    /**
     * - List of all item store ids on
     * which offer is not applicable
     */
    item_exclude_store?: number[];
    /**
     * - List of all brand ids on which
     * offer is not applicable
     */
    item_exclude_brand?: number[];
    /**
     * - List of all item sku on which offer
     * is not applicable
     */
    item_exclude_sku?: string[];
    /**
     * - List of all company id on which
     * offer is not applicable
     */
    item_exclude_company?: number[];
    /**
     * - List of all zones on which offer is applicable
     */
    available_zones?: string[];
    /**
     * - List of all item ids on which offer
     * is not applicable
     */
    item_exclude_id?: number[];
    /**
     * - List of buy rules that is applicable for this offer
     */
    buy_rules?: string[];
    item_size_mapping?: ItemSizeMapping;
};
/** @returns {DiscountRuleOffer} */
declare function DiscountRuleOffer(): DiscountRuleOffer;
type DiscountRuleOffer = {
    /**
     * - Maximum discount amount in offer
     */
    max_discount_amount?: number;
    /**
     * - Discount price in offer
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
     * - Maximum usage per transaction in offer
     */
    max_usage_per_transaction?: number;
    /**
     * - Minimum quantity of offer in offer
     */
    min_offer_quantity?: number;
    /**
     * - Discount amount in offer
     */
    discount_amount?: number;
    /**
     * - Discount percentage in offer
     */
    discount_percentage?: number;
    /**
     * - Maximum quantity of product in offer
     */
    max_offer_quantity?: number;
};
/** @returns {OfferDiscountRule} */
declare function OfferDiscountRule(): OfferDiscountRule;
type OfferDiscountRule = {
    /**
     * - The type of discount in offer
     */
    discount_type?: string;
    /**
     * - Points to buy rule in offer. One
     * discount rule can only point to one buy rule.
     */
    buy_condition?: string;
    item_criteria?: OfferItemCriteria;
    offer?: DiscountRuleOffer;
    /**
     * - Flag is true then use coupon applicable
     * articles for calculation
     */
    is_exact?: boolean;
};
/** @returns {OfferUsesRemaining} */
declare function OfferUsesRemaining(): OfferUsesRemaining;
type OfferUsesRemaining = {
    /**
     * - Define total offer count per user
     */
    user?: number;
    /**
     * - Define total offer count
     */
    total?: number;
    /**
     * - Define offer count associated with application id
     */
    app?: number;
};
/** @returns {OfferUsesRestriction} */
declare function OfferUsesRestriction(): OfferUsesRestriction;
type OfferUsesRestriction = {
    maximum?: OfferUsesRemaining;
    remaining?: OfferUsesRemaining;
};
/** @returns {OfferRestrictionFulfillmentOptions} */
declare function OfferRestrictionFulfillmentOptions(): OfferRestrictionFulfillmentOptions;
type OfferRestrictionFulfillmentOptions = {
    /**
     * - Fulfillment option id
     */
    fulfillment_slug: string;
    /**
     * - List of zones ids on which offer is applicable.
     */
    zones?: string[];
};
/** @returns {OfferRestrictions} */
declare function OfferRestrictions(): OfferRestrictions;
type OfferRestrictions = {
    uses?: OfferUsesRestriction;
    post_order?: PostOrder;
    /**
     * - List of platform on which offer allowed
     * like web, android
     */
    platforms?: string[];
    payments?: PaymentModes;
    /**
     * - List of store id on which offer is allowed
     */
    ordering_stores?: number[];
    /**
     * - Prmomotion offer max order count
     */
    order_quantity?: number;
    user?: OfferUser;
    /**
     * - Allow offer to be applied on
     * multiple stores
     */
    multi_store_allowed?: boolean;
    /**
     * - List
     * of fulfillment options on which offer is applicable.
     */
    fulfillment_options?: OfferRestrictionFulfillmentOptions[];
};
/** @returns {OfferDisplayMeta} */
declare function OfferDisplayMeta(): OfferDisplayMeta;
type OfferDisplayMeta = {
    /**
     * - Detail about the offers
     */
    description: string;
    /**
     * - Coupon offer will be displayed or hidden
     * on UI based on this flag
     */
    is_display?: boolean;
    /**
     * - Determines if coupon offer is publicaly
     * available or not
     */
    is_public?: boolean;
    /**
     * - Name of offer that needs to display
     */
    name: string;
    /**
     * - Promotion offer text used to display
     */
    offer_text?: string;
    /**
     * - Offer label of promotion that needs to display
     */
    offer_label?: string;
    /**
     * - Reason for offer rejection
     */
    reason?: string;
};
/** @returns {OfferCouponConfiguration} */
declare function OfferCouponConfiguration(): OfferCouponConfiguration;
type OfferCouponConfiguration = {
    /**
     * - Total number of coupons to be generated
     * when coupon type is bulk
     */
    coupon_count?: number;
    /**
     * - Bulk coupon code prefix string. All
     * coupons will be generated with this prefix.
     */
    coupon_prefix?: string;
    /**
     * - The type of coupon like bulk or single.
     */
    coupon_type: string;
};
/** @returns {OfferOwnership} */
declare function OfferOwnership(): OfferOwnership;
type OfferOwnership = {
    /**
     * - Promotion amount payable category
     */
    payable_category: string;
    /**
     * - Promotion amount bearable party
     */
    payable_by?: string;
};
/** @returns {OfferSchema} */
declare function OfferSchema(): OfferSchema;
type OfferSchema = {
    /**
     * - Unique identifier of offer. This will be auto
     * generated upon successful offer creation.
     */
    _id?: string;
    /**
     * - Offer mode, like coupon or promotion
     */
    mode: string;
    /**
     * - Indicates whether the offer is
     * automatically applied. This flag is false for coupons and true for
     * promotions. For free-gift promotions, a false value means manual gift
     * selection is required.
     */
    auto_apply?: boolean;
    /**
     * - Application id through which offer was created.
     */
    application_id?: string;
    /**
     * - Company id through which offer was created.
     */
    company_id?: string;
    /**
     * - Discount rules based on
     * which offer will be applied
     */
    discount_rules?: OfferDiscountRule[];
    /**
     * - Contains the individual buy rules associated
     * with the offer. The keys in this object are dynamic (e.g., 'rule#1',
     * 'rule#2', etc.), and each key must correspond to a buy condition referenced
     * within `discount_rules`. For example, if a discount rule includes a
     * buy_condition '(rule#1)', then 'rule#1' must be defined in this object.
     * Each rule key value must follow the format of OfferItemCriteria schema.
     */
    buy_rules?: any;
    restrictions?: OfferRestrictions;
    display_meta: OfferDisplayMeta;
    ownership?: OfferOwnership;
    author?: OfferAuthor;
    date_meta?: OfferDateMeta;
    _schedule?: OfferSchedule;
    /**
     * - Set extra properties in offer
     */
    _custom_json?: any;
    /**
     * - Boolean value set true to apply other
     * promotions as well.
     */
    stackable?: boolean;
    /**
     * - Status of the offer
     */
    status: string;
    /**
     * - Determines whether the offer is published to
     * customers or marked inactive
     */
    published: boolean;
    /**
     * - Different types of offers available in the system.
     * This is used to determine the type of offer and the calculation of the
     * offer. Some types are mode specific, few examples are :> -
     * free_item_discount_absolute is only applicable for coupon mode -
     * contract_price, shipping_price, free_gift_items, cashback, free_items,
     * free_non_sellable_items, external_price_adjustment_discount, custom is only
     * applicable for promotion mode
     */
    type: string;
    /**
     * - Defines the priority of the offer. Its
     * behavior varies based on the offer type. For coupons, a higher priority
     * value means the coupon will appear higher in the listing order. For
     * promotions, this value determines the sequence in which promotions are
     * evaluated and applied. Promotions are evaluated in descending order of
     * their effective priority. In case of conflicting priorities, the offer will
     * be prioritised on the basis of creation order (desc).
     */
    priority?: number;
    /**
     * - Flag to determine if coupon is
     * exclusive. Exclusive coupon removes other applied offers from the cart. If
     * both `is_exclusive_coupon` and `apply_exclusive` are set,
     * `is_exclusive_coupon` takes priority for offer evaluation logic effectively
     * making the offer exclusive.
     */
    is_exclusive_coupon?: boolean;
    /**
     * - Controls how this offer excludes other
     * offers when it is applied. When this offer is applied at cart level, no
     * other promotions are evaluated or applied for the same cart (it becomes the
     * only active promotion for that cart). When this offer is applied on
     * specific articles, those articles will not be eligible for any other
     * promotions, but other promotions can still apply to different articles in
     * the cart. If null, the offer follows the normal stacking rules and does not
     * enforce additional exclusivity.
     */
    apply_exclusive?: string;
    /**
     * - Article Price on which offer is
     * calculated, like effective price or marked price. Only available for few
     * supported types lile Contract pricing and Ladder pricing.
     */
    calculate_on?: string;
    /**
     * - The type of promotion group
     */
    promo_group?: string;
    /**
     * - ISO 4217 currency code in which the offer's
     * discount amounts and calculations are specified (e.g., "INR", "USD",
     * "EUR"). This currency is used as the base currency for discount
     * calculations and currency conversions when applying the offer. If not
     * provided, defaults to the seller's default currency code. All discount
     * values in discount_rules are interpreted in this currency.
     */
    currency?: string;
    /**
     * - Unique identifier code for the offer. For coupons
     * (i.e mode = "coupon"), this is the coupon code that users enter to apply
     * the offer (e.g., "SAVE20", "WELCOME50"). For promotions (mode =
     * "promotion"), this field is typically null or empty as promotions are
     * auto-applied. This code is used to fetch and identify offers when applying
     * them to carts. Must be unique within an application_id. For bulk coupons,
     * this is auto-generated based on coupon_config.coupon_prefix.
     */
    code?: string;
    coupon_config?: OfferCouponConfiguration;
    /**
     * - Flag to verify if promotion is ready to
     * be applied on cart and ready to update promotion
     */
    is_processed?: boolean;
    /**
     * - Flag to determine if any bank offer is applicable
     */
    is_bank_offer?: boolean;
};
/** @returns {OfferPartialUpdate} */
declare function OfferPartialUpdate(): OfferPartialUpdate;
type OfferPartialUpdate = {
    schedule?: PromotionSchedule;
};
/** @returns {OfferAuthor} */
declare function OfferAuthor(): OfferAuthor;
type OfferAuthor = {
    /**
     * - The user id of user, who has created the offer
     */
    created_by?: string;
    /**
     * - The user id of user, who has modified the offer
     */
    modified_by?: string;
    /**
     * - The user id of user, who has approved the offer
     */
    approved_by?: string;
    /**
     * - The user id of user, who has rejected the offer
     */
    rejected_by?: string;
};
/** @returns {OfferDateMeta} */
declare function OfferDateMeta(): OfferDateMeta;
type OfferDateMeta = {
    /**
     * - Date time format when the offer last modified
     */
    modified_on?: string;
    /**
     * - Date time format when the offer created
     */
    created_on?: string;
    /**
     * - Date time format when the offer approved
     */
    approved_on?: string;
    /**
     * - Date time format when the offer rejected
     */
    rejected_on?: string;
};
/** @returns {NextScheduleItems} */
declare function NextScheduleItems(): NextScheduleItems;
type NextScheduleItems = {
    /**
     * - Start date of schedule
     */
    start?: string;
    /**
     * - End date of schedule
     */
    end?: string;
};
/** @returns {OfferSchedule} */
declare function OfferSchedule(): OfferSchedule;
type OfferSchedule = {
    /**
     * - The end date and time until which the offer remains valid.
     */
    end: string;
    /**
     * - The start date and time from which the offer becomes valid.
     */
    start: string;
    /**
     * - A auto generated list of
     * date-time entries based on start, end, cron and duration data on which the
     * offer is scheduled to activate in the future.
     */
    next_schedule?: NextScheduleItems[];
    /**
     * - A cron expression used to schedule the offer to
     * activate periodically. When cron is null or not provided, duration is optional.
     */
    cron?: string;
    /**
     * - Duration of the offer activation in seconds.
     * Mandatory when cron is provided.
     */
    duration?: number;
};
/** @returns {OfferListItem} */
declare function OfferListItem(): OfferListItem;
type OfferListItem = {
    /**
     * - Offer mode, like coupon or promotion
     */
    mode?: string;
    /**
     * - Type of the offer
     */
    type?: string;
    /**
     * - Status of the offer
     */
    status?: string;
    /**
     * - Determines whether the offer is published
     * to customers or marked inactive
     */
    published?: boolean;
    display_meta?: OfferDisplayMeta;
    author?: OfferAuthor;
    date_meta?: OfferDateMeta;
    schedule?: OfferSchedule;
};
/** @returns {OfferListResult} */
declare function OfferListResult(): OfferListResult;
type OfferListResult = {
    /**
     * - List of offers
     */
    items?: OfferListItem[];
    page?: Page;
};
