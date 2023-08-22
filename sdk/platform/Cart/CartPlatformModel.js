const Joi = require("joi");

/**
 * @typedef AbandonedCart
 * @property {string} _id
 * @property {string} [app_id]
 * @property {Object[]} articles
 * @property {number} [bulk_coupon_discount]
 * @property {boolean} [buy_now]
 * @property {number} [cart_value]
 * @property {Object} cashback
 * @property {string} [checkout_mode]
 * @property {Object} [cod_charges]
 * @property {string} [comment]
 * @property {Object} [coupon]
 * @property {string} created_on
 * @property {Object} [delivery_charges]
 * @property {number} [discount]
 * @property {string} expire_at
 * @property {number[]} [fc_index_map]
 * @property {Object} [fynd_credits]
 * @property {string} [gstin]
 * @property {boolean} [is_active]
 * @property {boolean} [is_archive]
 * @property {boolean} is_default
 * @property {string} last_modified
 * @property {boolean} [merge_qty]
 * @property {Object} [meta]
 * @property {string} [order_id]
 * @property {Object[]} [payment_methods]
 * @property {string} [payment_mode]
 * @property {Object} [payments]
 * @property {Object} [pick_up_customer_details]
 * @property {Object} [promotion]
 * @property {Object[]} [shipments]
 * @property {number} uid
 * @property {string} user_id
 */

/**
 * @typedef AbandonedCartResponse
 * @property {AbandonedCart[]} [items]
 * @property {string} [message] - Message of the response
 * @property {Page} [page]
 * @property {Object} [result]
 * @property {boolean} [success] - The request success is defined
 */

/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug] - Contains list of product slug
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [created_on] - Coupon creation date
 * @property {string} [description] - The description of the offer in the form of an HTML
 * @property {string} [entity_slug]
 * @property {string} [entity_type] - Type of entity to be selected from :
 *   ['coupon', 'promotion']
 * @property {string} [example] - Discount offers examples
 * @property {boolean} [is_hidden] - If the promo is active or not
 * @property {string} [modified_on] - Coupon modification date
 * @property {string} [subtitle] - Small description of the current offer
 * @property {string} [title] - Name of the promotion
 * @property {string} [type] - Coupon type
 */

/**
 * @typedef AddCartDetailResponse
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 * @property {boolean} [partial] - When adding multiple items check if all
 *   added. True if only few are added.
 * @property {boolean} [success] - True if all items are added successfully.
 *   False if partially added or not added.
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 * @property {boolean} [new_cart]
 */

/**
 * @typedef AddProductCart
 * @property {Object} [_custom_json]
 * @property {Object} [article_assignment]
 * @property {string} [article_id]
 * @property {string} [display]
 * @property {Object} [extra_meta]
 * @property {number} [item_id]
 * @property {string} [item_size]
 * @property {Object} [meta]
 * @property {Object[]} [parent_item_identifiers]
 * @property {boolean} [pos]
 * @property {string[]} [product_group_tags]
 * @property {number} [quantity]
 * @property {number} [seller_id]
 * @property {number} [store_id]
 */

/**
 * @typedef AppliedFreeArticles
 * @property {string} [article_id] - Free article id
 * @property {FreeGiftItem} [free_gift_item_details] - Free gift items details
 * @property {string} [parent_item_identifier] - Parent item identifier for free article
 * @property {number} [quantity] - Free article quantity
 */

/**
 * @typedef AppliedPromotion
 * @property {number} [amount] - Per unit discount amount applied with current promotion
 * @property {AppliedFreeArticles[]} [applied_free_articles] - Applied free
 *   article for free gift item promotions
 * @property {number} [article_quantity] - Quantity of article on which
 *   promotion is applicable
 * @property {BuyRules[]} [buy_rules] - Buy rules for promotions
 * @property {DiscountRulesApp[]} [discount_rules] - Discount rules for promotions
 * @property {boolean} [mrp_promotion] - If applied promotion is applied on
 *   product MRP or ESP
 * @property {string} [offer_text] - Offer text of current promotion
 * @property {Ownership2} [ownership] - Ownership of promotion
 * @property {string} [promo_id] - Promotion id
 * @property {string} [promotion_group] - Promotion group for the promotion
 * @property {string} [promotion_name] - Promotion name of current promotion
 * @property {string} [promotion_type] - Promotion type of current promotion
 */

/**
 * @typedef ApplyCouponRequest
 * @property {string} coupon_code - Coupon code to be applied
 */

/**
 * @typedef Article
 * @property {string} article_id
 * @property {string} [code]
 * @property {Object} [meta]
 * @property {string} [type]
 * @property {number} [value]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
 */

/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef BasePrice
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {number} [marked]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef BuyRules
 * @property {Object} [cart_conditions] - Cart conditions details for promotion
 * @property {Object} [item_criteria] - Item criteria of promotion
 */

/**
 * @typedef CartBreakup
 * @property {CouponBreakup} [coupon]
 * @property {DisplayBreakup[]} [display]
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {RawBreakup} [raw]
 */

/**
 * @typedef CartCheckoutResponse
 * @property {string} [app_intercept_url]
 * @property {string} [callback_url]
 * @property {CheckCart} [cart]
 * @property {Object} [data]
 * @property {string} [message]
 * @property {string} [order_id]
 * @property {string} [payment_confirm_url]
 * @property {boolean} [success]
 */

/**
 * @typedef CartCurrency
 * @property {string} [code] - Currency code defined by ISO 4217:2015
 * @property {string} [symbol]
 */

/**
 * @typedef CartDeliveryModesResponse
 * @property {string[]} [available_modes] - Available delivery modes
 * @property {number[]} [pickup_stores] - Store pick up available store uids
 */

/**
 * @typedef CartDetailResponse
 * @property {AppliedPromotion[]} [applied_promo_details]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [buy_now]
 * @property {string} [checkout_mode]
 * @property {string} [comment]
 * @property {string} [coupon_text]
 * @property {CartCurrency} [currency]
 * @property {string} [delivery_charge_info]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [gstin]
 * @property {string} [id]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {string} [last_modified]
 * @property {string} [message]
 * @property {Object} [pan_config]
 * @property {string} [pan_no]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [restrict_checkout]
 */

/**
 * @typedef CartItem
 * @property {string} product_id
 * @property {number} [quantity]
 * @property {string} size
 */

/**
 * @typedef CartItemCountResponse
 * @property {number} [user_cart_items_count] - Item count present in cart
 */

/**
 * @typedef CartItemMeta
 * @property {string} [group_id]
 * @property {boolean} [primary_item]
 */

/**
 * @typedef CartList
 * @property {string} [cart_id]
 * @property {number} [cart_value]
 * @property {string} [created_on]
 * @property {number} [item_counts]
 * @property {Object} [pick_up_customer_details]
 * @property {string} [user_id]
 */

/**
 * @typedef CartMetaConfigAdd
 * @property {boolean} [bulk_coupons]
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [enabled]
 * @property {string} [gift_display_text]
 * @property {number} [gift_pricing]
 * @property {number} [max_cart_items]
 * @property {number} [min_cart_value]
 * @property {boolean} [revenue_engine_coupon]
 */

/**
 * @typedef CartMetaConfigUpdate
 * @property {boolean} [bulk_coupons]
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [enabled]
 * @property {string} [gift_display_text]
 * @property {number} [gift_pricing]
 * @property {number} [max_cart_items]
 * @property {number} [min_cart_value]
 * @property {boolean} [revenue_engine_coupon]
 */

/**
 * @typedef CartMetaMissingResponse
 * @property {string[]} [errors]
 */

/**
 * @typedef CartMetaResponse
 * @property {boolean} [is_valid]
 * @property {string} [message]
 */

/**
 * @typedef CartProduct
 * @property {Object} [_custom_json]
 * @property {ProductAction} [action]
 * @property {BaseInfo} [brand]
 * @property {CategoryInfo[]} [categories]
 * @property {ProductImage[]} [images]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {string} [slug] - Unique product url name generated via product
 *   name and other meta data
 * @property {string[]} [tags]
 * @property {Tags} [teaser_tag]
 * @property {string} [type]
 * @property {number} [uid]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier] - Article idenfier generated by cart
 */

/**
 * @typedef CartProductInfo
 * @property {ProductArticle} [article]
 * @property {ProductAvailability} [availability]
 * @property {Object} [bulk_offer]
 * @property {CouponDetails} [coupon]
 * @property {string} [coupon_message]
 * @property {Object} [custom_order]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [discount]
 * @property {CartProductIdentifer} identifiers
 * @property {boolean} [is_set]
 * @property {string} [key]
 * @property {string} [message]
 * @property {Object} [moq]
 * @property {Object} [parent_item_identifiers]
 * @property {ProductPriceInfo} [price]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {CartProduct} [product]
 * @property {PromoMeta} [promo_meta]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {number} [quantity]
 */

/**
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid] - Product Category Id
 */

/**
 * @typedef Charges
 * @property {number} [charges]
 * @property {number} [threshold]
 */

/**
 * @typedef CheckCart
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [buy_now]
 * @property {number} [cart_id]
 * @property {string} [checkout_mode]
 * @property {boolean} [cod_available]
 * @property {number} [cod_charges]
 * @property {string} [cod_message]
 * @property {string} [comment]
 * @property {string} [coupon_text]
 * @property {CartCurrency} [currency]
 * @property {string} [delivery_charge_info]
 * @property {number} [delivery_charge_order_value]
 * @property {number} [delivery_charges]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [error_message]
 * @property {string} [gstin]
 * @property {string} [id]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {string} [last_modified]
 * @property {string} [message]
 * @property {string} [order_id]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [restrict_checkout]
 * @property {string} [store_code]
 * @property {Object[]} [store_emps]
 * @property {boolean} [success]
 * @property {string} [uid]
 * @property {string} [user_type]
 */

/**
 * @typedef Collection
 * @property {string} collected_by
 * @property {string} refund_by
 */

/**
 * @typedef CompareObject
 * @property {number} [equals]
 * @property {number} [greater_than]
 * @property {number} [greater_than_equals]
 * @property {number} [less_than]
 * @property {number} [less_than_equals]
 */

/**
 * @typedef Coupon
 * @property {string} [coupon_code]
 * @property {string} [coupon_type]
 * @property {number} [coupon_value]
 * @property {string} [description]
 * @property {string} [expires_on]
 * @property {boolean} [is_applicable]
 * @property {boolean} [is_applied]
 * @property {number} [max_discount_value]
 * @property {string} [message]
 * @property {number} [minimum_cart_value]
 * @property {string} [sub_title]
 * @property {string} [title]
 */

/**
 * @typedef CouponAction
 * @property {string} [action_date]
 * @property {string} [txn_mode]
 */

/**
 * @typedef CouponAdd
 * @property {CouponSchedule} [_schedule]
 * @property {CouponAction} [action]
 * @property {CouponAuthor} [author]
 * @property {string} code
 * @property {CouponDateMeta} [date_meta]
 * @property {DisplayMeta} display_meta
 * @property {Identifier} identifiers
 * @property {Ownership} ownership
 * @property {Restrictions} [restrictions]
 * @property {Rule[]} rule
 * @property {RuleDefinition} rule_definition
 * @property {State} [state]
 * @property {string[]} [tags]
 * @property {string} type_slug
 * @property {Validation} [validation]
 * @property {Validity} validity
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [code]
 * @property {string} [coupon_type]
 * @property {number} [coupon_value]
 * @property {string} [description]
 * @property {boolean} [is_applied]
 * @property {number} [max_discount_value]
 * @property {string} [message]
 * @property {number} [minimum_cart_value]
 * @property {string} [sub_title]
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} [uid]
 * @property {number} [value]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef CouponDetails
 * @property {string} [code]
 * @property {number} [discount_single_quantity]
 * @property {number} [discount_total_quantity]
 */

/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive] - Send true to unpublish coupon
 * @property {CouponSchedule} [schedule]
 */

/**
 * @typedef CouponSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {string} [start]
 */

/**
 * @typedef CouponsResponse
 * @property {CouponAdd} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CouponUpdate
 * @property {CouponSchedule} [_schedule]
 * @property {CouponAction} [action]
 * @property {CouponAuthor} [author]
 * @property {string} code
 * @property {CouponDateMeta} [date_meta]
 * @property {DisplayMeta} display_meta
 * @property {Identifier} identifiers
 * @property {Ownership} ownership
 * @property {Restrictions} [restrictions]
 * @property {Rule[]} rule
 * @property {RuleDefinition} rule_definition
 * @property {State} [state]
 * @property {string[]} [tags]
 * @property {string} type_slug
 * @property {Validation} [validation]
 * @property {Validity} validity
 */

/**
 * @typedef CouponValidity
 * @property {string} [code]
 * @property {number} [discount]
 * @property {string} [display_message_en]
 * @property {boolean} [next_validation_required]
 * @property {string} [title]
 * @property {boolean} [valid]
 */

/**
 * @typedef CustomerDetails
 * @property {string} [email]
 * @property {string} mobile
 * @property {string} [name]
 */

/**
 * @typedef DeleteAddressResponse
 * @property {string} [id]
 * @property {boolean} [is_deleted]
 */

/**
 * @typedef DeleteCartDetailResponse
 * @property {string} [message]
 * @property {boolean} [success] - True if cart is archived successfully. False
 *   if not archived.
 */

/**
 * @typedef DeleteCartRequest
 * @property {string[]} [cart_id_list]
 */

/**
 * @typedef DeliveryCharges
 * @property {Charges[]} [charges]
 * @property {boolean} [enabled]
 */

/**
 * @typedef DiscountOffer
 * @property {boolean} [apportion_discount]
 * @property {string} [code]
 * @property {number} [discount_amount]
 * @property {number} [discount_percentage]
 * @property {number} [discount_price]
 * @property {number} [max_discount_amount]
 * @property {number} [max_offer_quantity]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [min_offer_quantity]
 * @property {boolean} [partial_can_ret]
 */

/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {string} discount_type
 * @property {ItemCriteria} item_criteria
 * @property {DiscountOffer} offer
 */

/**
 * @typedef DiscountRulesApp
 * @property {Object} [item_criteria] - Item criteria of promotion
 * @property {string[]} [matched_buy_rules] - Matched buy rules for promotion
 * @property {Object} [offer] - Offer for promotion
 * @property {Object} [raw_offer] - Raw offer details for promotion
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {string} [display]
 * @property {string} [key]
 * @property {string[]} [message]
 * @property {number} [value]
 */

/**
 * @typedef DisplayMeta
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [description]
 * @property {DisplayMetaDict} [remove]
 * @property {string} [subtitle]
 * @property {string} [title]
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [offer_label]
 * @property {string} [offer_text]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [subtitle]
 * @property {string} [title]
 */

/**
 * @typedef Files
 * @property {string} key
 * @property {string[]} values
 */

/**
 * @typedef FreeGiftItem
 * @property {string} [item_brand_name] - Item brand name
 * @property {number} [item_id] - Item id
 * @property {string[]} [item_images_url] - Item images URL
 * @property {string} [item_name] - Item name
 * @property {Object} [item_price_details] - Item price details
 * @property {string} [item_slug] - Item slug
 */

/**
 * @typedef GeoLocation
 * @property {number} [latitude]
 * @property {number} [longitude]
 */

/**
 * @typedef GetCouponResponse
 * @property {Coupon[]} [available_coupon_list]
 * @property {PageCoupon} [page]
 */

/**
 * @typedef GetShareCartLinkRequest
 * @property {string} [id] - Cart uid for generating sharing
 * @property {Object} [meta] - Staff, Ordering store or any other data. This
 *   data will be used to generate link as well as sent as shared details.
 */

/**
 * @typedef GetShareCartLinkResponse
 * @property {string} [share_url] - Short shareable final url
 * @property {string} [token] - Short url unique id
 */

/**
 * @typedef Identifier
 * @property {string[]} [article_id]
 * @property {number[]} [brand_id]
 * @property {number[]} [category_id]
 * @property {string[]} [collection_id]
 * @property {number[]} [company_id]
 * @property {string[]} [email_domain]
 * @property {number[]} [exclude_brand_id]
 * @property {number[]} [item_id]
 * @property {number[]} [store_id]
 * @property {string[]} [user_id]
 */

/**
 * @typedef ItemCriteria
 * @property {boolean} [all_items]
 * @property {string[]} [available_zones]
 * @property {string[]} [buy_rules]
 * @property {CompareObject} [cart_quantity]
 * @property {CompareObject} [cart_total]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_category]
 * @property {number[]} [item_company]
 * @property {number[]} [item_department]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_exclude_category]
 * @property {number[]} [item_exclude_company]
 * @property {number[]} [item_exclude_department]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_exclude_l1_category]
 * @property {number[]} [item_exclude_l2_category]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_exclude_store]
 * @property {number[]} [item_id]
 * @property {number[]} [item_l1_category]
 * @property {number[]} [item_l2_category]
 * @property {string[]} [item_size]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_store]
 * @property {string[]} [item_tags]
 */

/**
 * @typedef LoyaltyPoints
 * @property {number} [applicable]
 * @property {string} [description]
 * @property {boolean} [is_applied]
 * @property {number} [total]
 */

/**
 * @typedef MultiCartResponse
 * @property {CartList[]} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [current_status]
 * @property {Object} [extra_meta]
 * @property {string} [order_id]
 * @property {string} [payment_gateway]
 * @property {string} [payment_id]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {number} amount - Payment amount
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} mode
 * @property {string} [name] - Payment mode name
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem[]} cart_items
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {CartItem[]} cart_items
 * @property {ShippingAddress} shipping_address
 */

/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {CartBreakup} [breakup_values]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} [message]
 * @property {string} order_id - Fynd order id
 * @property {string} [order_ref_id] - Order id sent in request
 * @property {boolean} [success]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {Object} [errors] - Contains field name which has error as key and
 *   error message as value
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef OpenApiFiles
 * @property {string} key
 * @property {string[]} values
 */

/**
 * @typedef OpenApiOrderItem
 * @property {number} amount_paid
 * @property {number} cashback_applied
 * @property {number} cod_charges
 * @property {number} coupon_effective_discount
 * @property {number} delivery_charges
 * @property {number} discount
 * @property {number} [employee_discount]
 * @property {Object} [extra_meta]
 * @property {OpenApiFiles[]} [files]
 * @property {number} [loyalty_discount]
 * @property {CartItemMeta} [meta]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} price_effective
 * @property {number} price_marked
 * @property {number} product_id
 * @property {number} [quantity]
 * @property {string} size
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [affiliate_order_id]
 * @property {ShippingAddress} billing_address
 * @property {OpenApiOrderItem[]} cart_items
 * @property {number} cart_value
 * @property {number} cashback_applied
 * @property {number} cod_charges
 * @property {string} [comment]
 * @property {string} [coupon]
 * @property {string} coupon_code
 * @property {number} coupon_value
 * @property {string} [currency_code]
 * @property {number} delivery_charges
 * @property {Object} [employee_discount]
 * @property {OpenApiFiles[]} [files]
 * @property {string} [gstin]
 * @property {number} [loyalty_discount]
 * @property {string} [order_id]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} [payment_mode]
 * @property {ShippingAddress} [shipping_address]
 */

/**
 * @typedef OperationErrorResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef OverrideCartItem
 * @property {number} amount_paid
 * @property {number} discount
 * @property {Object} [extra_meta]
 * @property {number} item_id
 * @property {number} price_effective
 * @property {number} price_marked
 * @property {OverrideCartItemPromo[]} [promo_list]
 * @property {number} [quantity]
 * @property {string} [seller_identifier]
 * @property {string} size
 */

/**
 * @typedef OverrideCartItemPromo
 * @property {Object[]} [item_list]
 * @property {string} promo_amount
 * @property {string} [promo_desc]
 * @property {string} promo_id
 * @property {string} [rwrd_tndr]
 */

/**
 * @typedef OverrideCheckoutReq
 * @property {string} aggregator
 * @property {Object} [billing_address]
 * @property {string} cart_id
 * @property {OverrideCartItem[]} cart_items
 * @property {string} currency_code
 * @property {string} merchant_code
 * @property {string} order_type
 * @property {number} [ordering_store]
 * @property {string} payment_identifier
 * @property {string} payment_mode
 * @property {Object} [shipping_address]
 */

/**
 * @typedef OverrideCheckoutResponse
 * @property {Object} cart
 * @property {Object} data
 * @property {string} message
 * @property {string} order_id
 * @property {string} success
 */

/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef Ownership1
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef Ownership2
 * @property {string} [payable_by] - Promo amount bearable party
 * @property {string} [payable_category] - Promo amount payable category
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef PageCoupon
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [total]
 * @property {number} [total_item_count]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */

/**
 * @typedef PaymentCouponValidate
 * @property {CouponValidity} [coupon_validity]
 * @property {string} [message]
 * @property {boolean} success
 */

/**
 * @typedef PaymentMeta
 * @property {string} [merchant_code]
 * @property {string} [payment_gateway]
 * @property {string} [payment_identifier]
 * @property {string} [type]
 */

/**
 * @typedef PaymentMethod
 * @property {number} [amount]
 * @property {string} mode
 * @property {string} [name]
 * @property {string} [payment]
 * @property {PaymentMeta} payment_meta
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [codes]
 * @property {string[]} [iins]
 * @property {string[]} [networks]
 * @property {string[]} [types]
 * @property {PaymentAllowValue} [uses]
 */

/**
 * @typedef PaymentSelectionLock
 * @property {string} [default_options]
 * @property {boolean} [enabled]
 * @property {string} [payment_identifier]
 */

/**
 * @typedef PickupStoreDetail
 * @property {string} [address]
 * @property {string} [address_type]
 * @property {string} [area]
 * @property {string} [area_code]
 * @property {string} [area_code_slug]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [email]
 * @property {number} [id]
 * @property {string} [landmark]
 * @property {string} [name]
 * @property {string} [phone]
 * @property {number} [pincode]
 * @property {string} [state]
 * @property {string} [store_code]
 * @property {number} [uid]
 */

/**
 * @typedef PlatformAddCartRequest
 * @property {AddProductCart[]} [items]
 * @property {boolean} [new_cart]
 * @property {string} [user_id]
 */

/**
 * @typedef PlatformAddress
 * @property {string} [address]
 * @property {string} [address_type]
 * @property {string} [area]
 * @property {string} [area_code]
 * @property {string} [area_code_slug]
 * @property {string} [cart_id]
 * @property {string} [checkout_mode]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [created_by_user_id]
 * @property {string} [email]
 * @property {GeoLocation} [geo_location]
 * @property {Object} [google_map_point]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {boolean} [is_default_address]
 * @property {string} [landmark]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string} [phone]
 * @property {string} [state]
 * @property {string[]} [tags]
 * @property {string} [user_id]
 */

/**
 * @typedef PlatformCartCheckoutDetailRequest
 * @property {string} [address_id]
 * @property {string} [aggregator]
 * @property {Object} [billing_address]
 * @property {string} [billing_address_id]
 * @property {string} [callback_url]
 * @property {string} [checkout_mode]
 * @property {Object} [customer_details] - Customer details
 * @property {Object} [delivery_address]
 * @property {string} [device_id]
 * @property {string} [employee_code]
 * @property {Object} [extra_meta]
 * @property {Files[]} [files] - List of file url
 * @property {string} id
 * @property {string} [merchant_code]
 * @property {Object} [meta]
 * @property {string} order_type
 * @property {number} [ordering_store]
 * @property {boolean} [payment_auto_confirm]
 * @property {string} [payment_identifier]
 * @property {string} payment_mode
 * @property {Object} [payment_params]
 * @property {number} [pick_at_store_uid]
 * @property {boolean} [pos]
 * @property {StaffCheckout} [staff]
 * @property {string} user_id
 */

/**
 * @typedef PlatformCartCheckoutDetailV2Request
 * @property {string} [address_id]
 * @property {string} [aggregator]
 * @property {Object} [billing_address]
 * @property {string} [billing_address_id]
 * @property {string} [callback_url]
 * @property {string} [checkout_mode]
 * @property {Object} [custom_meta]
 * @property {Object} [customer_details] - Customer details
 * @property {Object} [delivery_address]
 * @property {string} [device_id]
 * @property {string} [employee_code]
 * @property {Object} [extra_meta]
 * @property {Files[]} [files] - List of file url
 * @property {string} id
 * @property {string} [merchant_code]
 * @property {Object} [meta]
 * @property {string} order_type
 * @property {number} [ordering_store]
 * @property {boolean} [payment_auto_confirm]
 * @property {string} [payment_identifier]
 * @property {PaymentMethod[]} payment_methods
 * @property {string} [payment_mode]
 * @property {Object} [payment_params]
 * @property {number} [pick_at_store_uid]
 * @property {boolean} [pos]
 * @property {StaffCheckout} [staff]
 * @property {string} user_id
 */

/**
 * @typedef PlatformCartMetaRequest
 * @property {string} [checkout_mode]
 * @property {string} [comment]
 * @property {Object} [gift_details]
 * @property {string} [gstin]
 * @property {string} [pan_no]
 * @property {Object} [pick_up_customer_details] - Customer contact details for
 *   customer pickup at store
 * @property {string} [staff_user_id] - Staff user id
 */

/**
 * @typedef PlatformCartShipmentsResponse
 * @property {AppliedPromotion[]} [applied_promo_details]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [buy_now]
 * @property {string} [checkout_mode]
 * @property {string} [comment]
 * @property {string} [coupon_text]
 * @property {CartCurrency} [currency]
 * @property {string} [delivery_charge_info]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {boolean} [error]
 * @property {string} [gstin]
 * @property {string} [id]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {string} [last_modified]
 * @property {string} [message]
 * @property {Object} [pan_config]
 * @property {string} [pan_no]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [restrict_checkout]
 * @property {PlatformShipmentResponse[]} [shipments]
 * @property {string} [staff_user_id]
 */

/**
 * @typedef PlatformGetAddressesResponse
 * @property {PlatformAddress[]} [address]
 */

/**
 * @typedef PlatformSelectCartAddressRequest
 * @property {string} [billing_address_id]
 * @property {string} [cart_id]
 * @property {string} [checkout_mode]
 * @property {string} [id]
 * @property {string} [user_id]
 */

/**
 * @typedef PlatformShipmentResponse
 * @property {ShipmentArticle[]} [articles]
 * @property {string} [box_type]
 * @property {string} [dp_id]
 * @property {Object} [dp_options]
 * @property {number} [fulfillment_id]
 * @property {string} [fulfillment_type]
 * @property {CartProductInfo[]} [items]
 * @property {string} [order_type]
 * @property {ShipmentPromise} [promise]
 * @property {string} [shipment_type]
 * @property {number} [shipments]
 */

/**
 * @typedef PlatformUpdateCartRequest
 * @property {UpdateProductCart[]} [items]
 * @property {string} operation
 * @property {string} [user_id]
 */

/**
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef PriceAdjustment
 * @property {boolean} [allowed_refund]
 * @property {string} [apply_expiry]
 * @property {Article[]} article_ids
 * @property {boolean} article_level_distribution
 * @property {string} cart_id
 * @property {number} [cart_value]
 * @property {Collection} collection
 * @property {string} [id]
 * @property {boolean} is_authenticated
 * @property {string} message
 * @property {Object} [meta]
 * @property {string} type
 * @property {number} value
 */

/**
 * @typedef PriceAdjustmentAdd
 * @property {boolean} [allowed_refund]
 * @property {string} [apply_expiry]
 * @property {Article[]} article_ids
 * @property {boolean} article_level_distribution
 * @property {string} cart_id
 * @property {number} [cart_value]
 * @property {Collection} collection
 * @property {string} [created_by]
 * @property {boolean} is_authenticated
 * @property {string} message
 * @property {Object} [meta]
 * @property {string} type
 * @property {number} value
 */

/**
 * @typedef PriceAdjustmentResponse
 * @property {PriceAdjustment} [data]
 */

/**
 * @typedef PriceAdjustmentUpdate
 * @property {boolean} [allowed_refund]
 * @property {string} [apply_expiry]
 * @property {Article[]} article_ids
 * @property {boolean} article_level_distribution
 * @property {string} cart_id
 * @property {number} [cart_value]
 * @property {Collection} collection
 * @property {boolean} is_authenticated
 * @property {string} message
 * @property {Object} [meta]
 * @property {string} [modified_by]
 * @property {string} type
 * @property {number} value
 */

/**
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef ProductAction
 * @property {ActionQuery} [query]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef ProductArticle
 * @property {Object} [_custom_json]
 * @property {Object} [cart_item_meta]
 * @property {Object} [extra_meta]
 * @property {Object} [gift_card]
 * @property {Object} [identifier]
 * @property {boolean} [is_gift_visible]
 * @property {Object} [meta]
 * @property {number} [mto_quantity]
 * @property {Object} [parent_item_identifiers]
 * @property {ArticlePriceInfo} [price]
 * @property {string[]} [product_group_tags]
 * @property {number} [quantity]
 * @property {BaseInfo} [seller]
 * @property {string} [seller_identifier]
 * @property {string} [size]
 * @property {StoreInfo} [store]
 * @property {string} [type]
 * @property {string} [uid]
 */

/**
 * @typedef ProductAvailability
 * @property {ProductAvailabilitySize[]} [available_sizes]
 * @property {boolean} [deliverable]
 * @property {boolean} [is_valid]
 * @property {number} [other_store_quantity]
 * @property {boolean} [out_of_stock]
 * @property {string[]} [sizes]
 */

/**
 * @typedef ProductAvailabilitySize
 * @property {string} [display]
 * @property {boolean} [is_available]
 * @property {string} [value]
 */

/**
 * @typedef ProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 * @property {string} [url]
 */

/**
 * @typedef ProductPrice
 * @property {number} [add_on]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {number} [selling]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [base]
 * @property {ProductPrice} [converted]
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
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef PromotionAction
 * @property {string} action_date
 * @property {string} action_type
 */

/**
 * @typedef PromotionAdd
 * @property {Object} [_custom_json]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} application_id
 * @property {boolean} [apply_all_discount]
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {PromotionAuthor} [author]
 * @property {Object} buy_rules
 * @property {string} [calculate_on] - Only available for Contract pricing and
 *   Ladder pricing promotion type
 * @property {string} [code]
 * @property {string} [currency]
 * @property {PromotionDateMeta} [date_meta]
 * @property {DiscountRule[]} discount_rules
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {Ownership1} ownership
 * @property {PromotionAction} [post_order_action]
 * @property {string} promo_group
 * @property {string} promotion_type
 * @property {Restrictions1} [restrictions]
 * @property {boolean} [stackable]
 * @property {Visibility} [visiblility]
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef PromotionListItem
 * @property {Object} [_custom_json] - Custom data stored in promotion
 * @property {string} [_id] - Promotion id
 * @property {PromotionSchedule} [_schedule]
 * @property {string} application_id - App id in which promotion will be used
 * @property {boolean} [apply_all_discount] - Prevents more than one promotion discounts
 * @property {string} [apply_exclusive] - Doesn't allow other promotion after
 *   current promotion applied on cart or article
 * @property {number} [apply_priority] - Priority based on which promotion are
 *   applied on articles
 * @property {PromotionAuthor} [author]
 * @property {Object} buy_rules - Buy rules for the promotion
 * @property {string} [calculate_on] - Only available for Contract pricing and
 *   Ladder pricing promotion type
 * @property {string} [code] - Promotion code
 * @property {string} [currency] - Currency used for promotion
 * @property {PromotionDateMeta} [date_meta]
 * @property {DiscountRule[]} discount_rules - Discount rules based on which
 *   promotion will be applied
 * @property {DisplayMeta1} display_meta
 * @property {string} mode - Promotion mode
 * @property {Ownership1} ownership
 * @property {PromotionAction} [post_order_action]
 * @property {string} promo_group - Group into which promotion fall
 * @property {string} promotion_type - Type of the promotion
 * @property {Restrictions1} [restrictions]
 * @property {boolean} [stackable] - Allows more than one promotion to get
 *   combined benefits
 * @property {Visibility} [visiblility]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive] - Send true to unpublish promotion
 * @property {PromotionSchedule} [schedule]
 */

/**
 * @typedef PromotionPaymentModes
 * @property {string[]} [codes]
 * @property {string} type
 * @property {PaymentAllowValue1} [uses]
 */

/**
 * @typedef PromotionSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} end
 * @property {Object[]} [next_schedule]
 * @property {boolean} published
 * @property {string} start
 */

/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PromotionUpdate
 * @property {Object} [_custom_json]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} application_id
 * @property {boolean} [apply_all_discount]
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {PromotionAuthor} [author]
 * @property {Object} buy_rules
 * @property {string} [calculate_on] - Only available for Contract pricing and
 *   Ladder pricing promotion type
 * @property {string} [code]
 * @property {string} [currency]
 * @property {PromotionDateMeta} [date_meta]
 * @property {DiscountRule[]} discount_rules
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {Ownership1} ownership
 * @property {PromotionAction} [post_order_action]
 * @property {string} promo_group
 * @property {string} promotion_type
 * @property {Restrictions1} [restrictions]
 * @property {boolean} [stackable]
 * @property {Visibility} [visiblility]
 */

/**
 * @typedef RawBreakup
 * @property {number} [cod_charge]
 * @property {number} [convenience_fee]
 * @property {number} [coupon]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [fynd_cash]
 * @property {number} [gift_card]
 * @property {number} [gst_charges]
 * @property {number} [mrp_total]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {number} [vog]
 * @property {number} [you_saved]
 */

/**
 * @typedef Restrictions
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {boolean} [coupon_allowed]
 * @property {number[]} [ordering_stores]
 * @property {Object} [payments]
 * @property {string[]} [platforms]
 * @property {PostOrder} [post_order]
 * @property {PriceRange} [price_range]
 * @property {number[]} [user_groups]
 * @property {string} [user_type]
 * @property {UsesRestriction} [uses]
 */

/**
 * @typedef Restrictions1
 * @property {boolean} [anonymous_users]
 * @property {number} [order_quantity]
 * @property {number[]} [ordering_stores]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {string[]} [platforms]
 * @property {PostOrder1} [post_order]
 * @property {number[]} [user_groups]
 * @property {string[]} [user_id]
 * @property {Object} [user_registered]
 * @property {UsesRestriction1} uses
 */

/**
 * @typedef Rule
 * @property {number} [discount_qty]
 * @property {number} [key]
 * @property {number} [max]
 * @property {number} [min]
 * @property {number} [value]
 */

/**
 * @typedef RuleDefinition
 * @property {string} applicable_on
 * @property {boolean} [auto_apply]
 * @property {string} calculate_on
 * @property {string} [currency_code]
 * @property {boolean} [is_exact]
 * @property {string[]} [scope]
 * @property {string} type
 * @property {string} value_type
 */

/**
 * @typedef SaveAddressResponse
 * @property {string} [id]
 * @property {boolean} [is_default_address]
 * @property {boolean} [success]
 */

/**
 * @typedef SharedCart
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [buy_now]
 * @property {number} [cart_id]
 * @property {string} [checkout_mode]
 * @property {string} [comment]
 * @property {string} [coupon_text]
 * @property {CartCurrency} [currency]
 * @property {string} [delivery_charge_info]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [gstin]
 * @property {string} [id]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {string} [last_modified]
 * @property {string} [message]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [restrict_checkout]
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {string} [uid]
 */

/**
 * @typedef SharedCartDetails
 * @property {string} [created_on]
 * @property {Object} [meta] - Meta data sent while generating share cart link
 * @property {Object} [source] - Share link device and other source information
 * @property {string} [token] - Short link id
 * @property {Object} [user] - User details of who generated share link
 */

/**
 * @typedef SharedCartResponse
 * @property {SharedCart} [cart]
 * @property {string} [error]
 */

/**
 * @typedef ShipmentArticle
 * @property {string} [article_id]
 * @property {string} [meta]
 * @property {string} [quantity]
 */

/**
 * @typedef ShipmentPromise
 * @property {PromiseFormatted} [formatted]
 * @property {PromiseTimestamp} [timestamp]
 */

/**
 * @typedef ShippingAddress
 * @property {string} [address]
 * @property {string} [address_type]
 * @property {string} [area]
 * @property {string} area_code
 * @property {string} [area_code_slug]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [country_iso_code]
 * @property {string} [country_phone_code]
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {number} [phone]
 * @property {number} [pincode]
 * @property {string} [state]
 */

/**
 * @typedef StaffCheckout
 * @property {string} _id
 * @property {string} [employee_code]
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} user
 */

/**
 * @typedef State
 * @property {boolean} [is_archived]
 * @property {boolean} [is_display]
 * @property {boolean} [is_public]
 */

/**
 * @typedef StoreDetailsResponse
 * @property {PickupStoreDetail[]} [items]
 */

/**
 * @typedef StoreInfo
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {number} [uid]
 */

/**
 * @typedef SuccessMessage
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef Tags
 * @property {Object} [tags]
 */

/**
 * @typedef UpdateAddressResponse
 * @property {string} [id]
 * @property {boolean} [is_default_address]
 * @property {boolean} [is_updated]
 * @property {boolean} [success]
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 * @property {boolean} [success] - True if all items are added successfully.
 *   False if partially added or not added.
 */

/**
 * @typedef UpdateCartPaymentRequest
 * @property {string} [address_id]
 * @property {string} [aggregator_name]
 * @property {string} [id]
 * @property {string} [merchant_code]
 * @property {string} [payment_identifier]
 * @property {string} [payment_mode]
 */

/**
 * @typedef UpdateCartPaymentRequestV2
 * @property {string} [address_id]
 * @property {string} [aggregator_name]
 * @property {string} [id]
 * @property {string} [merchant_code]
 * @property {string} [payment_identifier]
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} [payment_mode]
 */

/**
 * @typedef UpdateCartRequest
 * @property {UpdateProductCart[]} [items]
 * @property {string} operation
 */

/**
 * @typedef UpdateCartShipmentItem
 * @property {string} article_uid - Article mongo id
 * @property {number} [quantity] - Quantity of product in shipment
 * @property {string} shipment_type - Shipment delivery type
 */

/**
 * @typedef UpdateCartShipmentRequest
 * @property {UpdateCartShipmentItem[]} shipments
 */

/**
 * @typedef UpdateProductCart
 * @property {Object} [_custom_json]
 * @property {string} [article_id]
 * @property {Object} [extra_meta]
 * @property {CartProductIdentifer} identifiers
 * @property {number} [item_id]
 * @property {number} [item_index]
 * @property {string} [item_size]
 * @property {Object} [meta]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [quantity]
 */

/**
 * @typedef UpdateUserCartMapping
 * @property {string} user_id
 */

/**
 * @typedef UserCartMappingResponse
 * @property {AppliedPromotion[]} [applied_promo_details]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [buy_now]
 * @property {string} [checkout_mode]
 * @property {string} [comment]
 * @property {string} [coupon_text]
 * @property {CartCurrency} [currency]
 * @property {string} [delivery_charge_info]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [gstin]
 * @property {string} [id]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {string} [last_modified]
 * @property {string} [message]
 * @property {Object} [pan_config]
 * @property {string} [pan_no]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [restrict_checkout]
 * @property {UserInfo} [user]
 */

/**
 * @typedef UserInfo
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [external_id]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [modified_on]
 * @property {string} [uid]
 */

/**
 * @typedef UserRegistered
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [app]
 * @property {number} [total]
 * @property {number} [user]
 */

/**
 * @typedef UsesRemaining1
 * @property {number} [total]
 * @property {number} [user]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [maximum]
 * @property {UsesRemaining} [remaining]
 */

/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [maximum]
 * @property {UsesRemaining1} [remaining]
 */

/**
 * @typedef Validation
 * @property {boolean} [anonymous]
 * @property {string[]} [app_id]
 * @property {string} [user_registered_after]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef Visibility
 * @property {boolean} coupon_list
 * @property {boolean} pdp
 */

class CartPlatformModel {
  /** @returns {AbandonedCart} */
  static AbandonedCart() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      app_id: Joi.string().allow(""),
      articles: Joi.array().items(Joi.any()).required(),
      bulk_coupon_discount: Joi.number().allow(null),
      buy_now: Joi.boolean(),
      cart_value: Joi.number(),
      cashback: Joi.any().required(),
      checkout_mode: Joi.string().allow(""),
      cod_charges: Joi.any(),
      comment: Joi.string().allow("").allow(null),
      coupon: Joi.any().allow(null),
      created_on: Joi.string().allow("").required(),
      delivery_charges: Joi.any(),
      discount: Joi.number(),
      expire_at: Joi.string().allow("").required(),
      fc_index_map: Joi.array().items(Joi.number()),
      fynd_credits: Joi.any(),
      gstin: Joi.string().allow("").allow(null),
      is_active: Joi.boolean(),
      is_archive: Joi.boolean(),
      is_default: Joi.boolean().required(),
      last_modified: Joi.string().allow("").required(),
      merge_qty: Joi.boolean().allow(null),
      meta: Joi.any().allow(null),
      order_id: Joi.string().allow(""),
      payment_methods: Joi.array().items(Joi.any()),
      payment_mode: Joi.string().allow("").allow(null),
      payments: Joi.any().allow(null),
      pick_up_customer_details: Joi.any().allow(null),
      promotion: Joi.any(),
      shipments: Joi.array().items(Joi.any()),
      uid: Joi.number().required(),
      user_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {AbandonedCartResponse} */
  static AbandonedCartResponse() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.AbandonedCart()),
      message: Joi.string().allow(""),
      page: CartPlatformModel.Page(),
      result: Joi.any(),
      success: Joi.boolean(),
    });
  }

  /** @returns {ActionQuery} */
  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ActivePromosResponse} */
  static ActivePromosResponse() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      entity_slug: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      example: Joi.string().allow(""),
      is_hidden: Joi.boolean(),
      modified_on: Joi.string().allow(""),
      subtitle: Joi.string().allow(""),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {AddCartDetailResponse} */
  static AddCartDetailResponse() {
    return Joi.object({
      cart: CartPlatformModel.CartDetailResponse(),
      message: Joi.string().allow(""),
      partial: Joi.boolean(),
      success: Joi.boolean(),
    });
  }

  /** @returns {AddCartRequest} */
  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.AddProductCart()),
      new_cart: Joi.boolean(),
    });
  }

  /** @returns {AddProductCart} */
  static AddProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),
      article_assignment: Joi.any(),
      article_id: Joi.string().allow(""),
      display: Joi.string().allow(""),
      extra_meta: Joi.any(),
      item_id: Joi.number(),
      item_size: Joi.string().allow(""),
      meta: Joi.any(),
      parent_item_identifiers: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.string().allow(""))
      ),
      pos: Joi.boolean(),
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
      quantity: Joi.number(),
      seller_id: Joi.number(),
      store_id: Joi.number(),
    });
  }

  /** @returns {AppliedFreeArticles} */
  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),
      free_gift_item_details: CartPlatformModel.FreeGiftItem(),
      parent_item_identifier: Joi.string().allow(""),
      quantity: Joi.number(),
    });
  }

  /** @returns {AppliedPromotion} */
  static AppliedPromotion() {
    return Joi.object({
      amount: Joi.number(),
      applied_free_articles: Joi.array().items(
        CartPlatformModel.AppliedFreeArticles()
      ),
      article_quantity: Joi.number(),
      buy_rules: Joi.array().items(CartPlatformModel.BuyRules()),
      discount_rules: Joi.array().items(CartPlatformModel.DiscountRulesApp()),
      mrp_promotion: Joi.boolean(),
      offer_text: Joi.string().allow(""),
      ownership: CartPlatformModel.Ownership2(),
      promo_id: Joi.string().allow(""),
      promotion_group: Joi.string().allow(""),
      promotion_name: Joi.string().allow(""),
      promotion_type: Joi.string().allow(""),
    });
  }

  /** @returns {ApplyCouponRequest} */
  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {Article} */
  static Article() {
    return Joi.object({
      article_id: Joi.string().allow("").required(),
      code: Joi.string().allow(""),
      meta: Joi.any(),
      type: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {ArticlePriceInfo} */
  static ArticlePriceInfo() {
    return Joi.object({
      base: CartPlatformModel.BasePrice(),
      converted: CartPlatformModel.BasePrice(),
    });
  }

  /** @returns {BaseInfo} */
  static BaseInfo() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {BasePrice} */
  static BasePrice() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
    });
  }

  /** @returns {BulkBundleRestriction} */
  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  /** @returns {BuyRules} */
  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),
      item_criteria: Joi.any(),
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

  /** @returns {CartCheckoutResponse} */
  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),
      callback_url: Joi.string().allow(""),
      cart: CartPlatformModel.CheckCart(),
      data: Joi.any(),
      message: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      payment_confirm_url: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {CartCurrency} */
  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
    });
  }

  /** @returns {CartDeliveryModesResponse} */
  static CartDeliveryModesResponse() {
    return Joi.object({
      available_modes: Joi.array().items(Joi.string().allow("")),
      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {CartDetailResponse} */
  static CartDetailResponse() {
    return Joi.object({
      applied_promo_details: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      breakup_values: CartPlatformModel.CartBreakup(),
      buy_now: Joi.boolean(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartPlatformModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      pan_config: Joi.any(),
      pan_no: Joi.string().allow(""),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
    });
  }

  /** @returns {CartItem} */
  static CartItem() {
    return Joi.object({
      product_id: Joi.string().allow("").required(),
      quantity: Joi.number(),
      size: Joi.string().allow("").required(),
    });
  }

  /** @returns {CartItemCountResponse} */
  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  /** @returns {CartItemMeta} */
  static CartItemMeta() {
    return Joi.object({
      group_id: Joi.string().allow(""),
      primary_item: Joi.boolean(),
    });
  }

  /** @returns {CartList} */
  static CartList() {
    return Joi.object({
      cart_id: Joi.string().allow(""),
      cart_value: Joi.number(),
      created_on: Joi.string().allow(""),
      item_counts: Joi.number(),
      pick_up_customer_details: Joi.any(),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {CartMetaConfigAdd} */
  static CartMetaConfigAdd() {
    return Joi.object({
      bulk_coupons: Joi.boolean(),
      delivery_charges: CartPlatformModel.DeliveryCharges(),
      enabled: Joi.boolean(),
      gift_display_text: Joi.string().allow(""),
      gift_pricing: Joi.number(),
      max_cart_items: Joi.number(),
      min_cart_value: Joi.number(),
      revenue_engine_coupon: Joi.boolean(),
    });
  }

  /** @returns {CartMetaConfigUpdate} */
  static CartMetaConfigUpdate() {
    return Joi.object({
      bulk_coupons: Joi.boolean(),
      delivery_charges: CartPlatformModel.DeliveryCharges(),
      enabled: Joi.boolean(),
      gift_display_text: Joi.string().allow(""),
      gift_pricing: Joi.number(),
      max_cart_items: Joi.number(),
      min_cart_value: Joi.number(),
      revenue_engine_coupon: Joi.boolean(),
    });
  }

  /** @returns {CartMetaMissingResponse} */
  static CartMetaMissingResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CartMetaResponse} */
  static CartMetaResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CartProduct} */
  static CartProduct() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: CartPlatformModel.ProductAction(),
      brand: CartPlatformModel.BaseInfo(),
      categories: Joi.array().items(CartPlatformModel.CategoryInfo()),
      images: Joi.array().items(CartPlatformModel.ProductImage()),
      item_code: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      teaser_tag: CartPlatformModel.Tags(),
      type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {CartProductIdentifer} */
  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  /** @returns {CartProductInfo} */
  static CartProductInfo() {
    return Joi.object({
      article: CartPlatformModel.ProductArticle(),
      availability: CartPlatformModel.ProductAvailability(),
      bulk_offer: Joi.any(),
      coupon: CartPlatformModel.CouponDetails(),
      coupon_message: Joi.string().allow(""),
      custom_order: Joi.any(),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      discount: Joi.string().allow(""),
      identifiers: CartPlatformModel.CartProductIdentifer().required(),
      is_set: Joi.boolean(),
      key: Joi.string().allow(""),
      message: Joi.string().allow(""),
      moq: Joi.any(),
      parent_item_identifiers: Joi.any(),
      price: CartPlatformModel.ProductPriceInfo(),
      price_per_unit: CartPlatformModel.ProductPriceInfo(),
      product: CartPlatformModel.CartProduct(),
      promo_meta: CartPlatformModel.PromoMeta(),
      promotions_applied: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      quantity: Joi.number(),
    });
  }

  /** @returns {CategoryInfo} */
  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {Charges} */
  static Charges() {
    return Joi.object({
      charges: Joi.number(),
      threshold: Joi.number(),
    });
  }

  /** @returns {CheckCart} */
  static CheckCart() {
    return Joi.object({
      breakup_values: CartPlatformModel.CartBreakup(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      cod_available: Joi.boolean(),
      cod_charges: Joi.number(),
      cod_message: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartPlatformModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_charge_order_value: Joi.number(),
      delivery_charges: Joi.number(),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      error_message: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      store_code: Joi.string().allow(""),
      store_emps: Joi.array().items(Joi.any()),
      success: Joi.boolean(),
      uid: Joi.string().allow(""),
      user_type: Joi.string().allow(""),
    });
  }

  /** @returns {Collection} */
  static Collection() {
    return Joi.object({
      collected_by: Joi.string().allow("").required(),
      refund_by: Joi.string().allow("").required(),
    });
  }

  /** @returns {CompareObject} */
  static CompareObject() {
    return Joi.object({
      equals: Joi.number(),
      greater_than: Joi.number(),
      greater_than_equals: Joi.number(),
      less_than: Joi.number(),
      less_than_equals: Joi.number(),
    });
  }

  /** @returns {Coupon} */
  static Coupon() {
    return Joi.object({
      coupon_code: Joi.string().allow(""),
      coupon_type: Joi.string().allow("").allow(null),
      coupon_value: Joi.number(),
      description: Joi.string().allow("").allow(null),
      expires_on: Joi.string().allow(""),
      is_applicable: Joi.boolean(),
      is_applied: Joi.boolean(),
      max_discount_value: Joi.number(),
      message: Joi.string().allow(""),
      minimum_cart_value: Joi.number(),
      sub_title: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {CouponAction} */
  static CouponAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null),
      txn_mode: Joi.string().allow(""),
    });
  }

  /** @returns {CouponAdd} */
  static CouponAdd() {
    return Joi.object({
      _schedule: CartPlatformModel.CouponSchedule(),
      action: CartPlatformModel.CouponAction(),
      author: CartPlatformModel.CouponAuthor(),
      code: Joi.string().allow("").required(),
      date_meta: CartPlatformModel.CouponDateMeta(),
      display_meta: CartPlatformModel.DisplayMeta().required(),
      identifiers: CartPlatformModel.Identifier().required(),
      ownership: CartPlatformModel.Ownership().required(),
      restrictions: CartPlatformModel.Restrictions(),
      rule: Joi.array().items(CartPlatformModel.Rule()).required(),
      rule_definition: CartPlatformModel.RuleDefinition().required(),
      state: CartPlatformModel.State(),
      tags: Joi.array().items(Joi.string().allow("")),
      type_slug: Joi.string().allow("").required(),
      validation: CartPlatformModel.Validation(),
      validity: CartPlatformModel.Validity().required(),
    });
  }

  /** @returns {CouponAuthor} */
  static CouponAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),
      modified_by: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CouponBreakup} */
  static CouponBreakup() {
    return Joi.object({
      code: Joi.string().allow(""),
      coupon_type: Joi.string().allow("").allow(null),
      coupon_value: Joi.number(),
      description: Joi.string().allow("").allow(null),
      is_applied: Joi.boolean(),
      max_discount_value: Joi.number(),
      message: Joi.string().allow(""),
      minimum_cart_value: Joi.number(),
      sub_title: Joi.string().allow("").allow(null),
      title: Joi.string().allow("").allow(null),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {CouponDateMeta} */
  static CouponDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),
      modified_on: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CouponDetails} */
  static CouponDetails() {
    return Joi.object({
      code: Joi.string().allow(""),
      discount_single_quantity: Joi.number(),
      discount_total_quantity: Joi.number(),
    });
  }

  /** @returns {CouponPartialUpdate} */
  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),
      schedule: CartPlatformModel.CouponSchedule(),
    });
  }

  /** @returns {CouponSchedule} */
  static CouponSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),
      duration: Joi.number().allow(null),
      end: Joi.string().allow("").allow(null),
      next_schedule: Joi.array().items(Joi.any()),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {CouponsResponse} */
  static CouponsResponse() {
    return Joi.object({
      items: CartPlatformModel.CouponAdd(),
      page: CartPlatformModel.Page(),
    });
  }

  /** @returns {CouponUpdate} */
  static CouponUpdate() {
    return Joi.object({
      _schedule: CartPlatformModel.CouponSchedule(),
      action: CartPlatformModel.CouponAction(),
      author: CartPlatformModel.CouponAuthor(),
      code: Joi.string().allow("").required(),
      date_meta: CartPlatformModel.CouponDateMeta(),
      display_meta: CartPlatformModel.DisplayMeta().required(),
      identifiers: CartPlatformModel.Identifier().required(),
      ownership: CartPlatformModel.Ownership().required(),
      restrictions: CartPlatformModel.Restrictions(),
      rule: Joi.array().items(CartPlatformModel.Rule()).required(),
      rule_definition: CartPlatformModel.RuleDefinition().required(),
      state: CartPlatformModel.State(),
      tags: Joi.array().items(Joi.string().allow("")),
      type_slug: Joi.string().allow("").required(),
      validation: CartPlatformModel.Validation(),
      validity: CartPlatformModel.Validity().required(),
    });
  }

  /** @returns {CouponValidity} */
  static CouponValidity() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      discount: Joi.number(),
      display_message_en: Joi.string().allow("").allow(null),
      next_validation_required: Joi.boolean().allow(null),
      title: Joi.string().allow(""),
      valid: Joi.boolean(),
    });
  }

  /** @returns {CustomerDetails} */
  static CustomerDetails() {
    return Joi.object({
      email: Joi.string().allow("").allow(null),
      mobile: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {DeleteAddressResponse} */
  static DeleteAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_deleted: Joi.boolean(),
    });
  }

  /** @returns {DeleteCartDetailResponse} */
  static DeleteCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {DeleteCartRequest} */
  static DeleteCartRequest() {
    return Joi.object({
      cart_id_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {DeliveryCharges} */
  static DeliveryCharges() {
    return Joi.object({
      charges: Joi.array().items(CartPlatformModel.Charges()),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {DiscountOffer} */
  static DiscountOffer() {
    return Joi.object({
      apportion_discount: Joi.boolean(),
      code: Joi.string().allow(""),
      discount_amount: Joi.number(),
      discount_percentage: Joi.number(),
      discount_price: Joi.number(),
      max_discount_amount: Joi.number(),
      max_offer_quantity: Joi.number(),
      max_usage_per_transaction: Joi.number(),
      min_offer_quantity: Joi.number(),
      partial_can_ret: Joi.boolean(),
    });
  }

  /** @returns {DiscountRule} */
  static DiscountRule() {
    return Joi.object({
      buy_condition: Joi.string().allow("").required(),
      discount_type: Joi.string().allow("").required(),
      item_criteria: CartPlatformModel.ItemCriteria().required(),
      offer: CartPlatformModel.DiscountOffer().required(),
    });
  }

  /** @returns {DiscountRulesApp} */
  static DiscountRulesApp() {
    return Joi.object({
      item_criteria: Joi.any(),
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
      offer: Joi.any(),
      raw_offer: Joi.any(),
    });
  }

  /** @returns {DisplayBreakup} */
  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      display: Joi.string().allow(""),
      key: Joi.string().allow(""),
      message: Joi.array().items(Joi.string().allow("")),
      value: Joi.number(),
    });
  }

  /** @returns {DisplayMeta} */
  static DisplayMeta() {
    return Joi.object({
      apply: CartPlatformModel.DisplayMetaDict(),
      auto: CartPlatformModel.DisplayMetaDict(),
      description: Joi.string().allow(""),
      remove: CartPlatformModel.DisplayMetaDict(),
      subtitle: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {DisplayMeta1} */
  static DisplayMeta1() {
    return Joi.object({
      description: Joi.string().allow(""),
      name: Joi.string().allow(""),
      offer_label: Joi.string().allow(""),
      offer_text: Joi.string().allow(""),
    });
  }

  /** @returns {DisplayMetaDict} */
  static DisplayMetaDict() {
    return Joi.object({
      subtitle: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {Files} */
  static Files() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {FreeGiftItem} */
  static FreeGiftItem() {
    return Joi.object({
      item_brand_name: Joi.string().allow(""),
      item_id: Joi.number(),
      item_images_url: Joi.array().items(Joi.string().allow("")),
      item_name: Joi.string().allow(""),
      item_price_details: Joi.any(),
      item_slug: Joi.string().allow(""),
    });
  }

  /** @returns {GeoLocation} */
  static GeoLocation() {
    return Joi.object({
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }

  /** @returns {GetCouponResponse} */
  static GetCouponResponse() {
    return Joi.object({
      available_coupon_list: Joi.array().items(CartPlatformModel.Coupon()),
      page: CartPlatformModel.PageCoupon(),
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
      share_url: Joi.string().allow(""),
      token: Joi.string().allow(""),
    });
  }

  /** @returns {Identifier} */
  static Identifier() {
    return Joi.object({
      article_id: Joi.array().items(Joi.string().allow("")),
      brand_id: Joi.array().items(Joi.number()),
      category_id: Joi.array().items(Joi.number()),
      collection_id: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.array().items(Joi.number()),
      email_domain: Joi.array().items(Joi.string().allow("")),
      exclude_brand_id: Joi.array().items(Joi.number()),
      item_id: Joi.array().items(Joi.number()),
      store_id: Joi.array().items(Joi.number()),
      user_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ItemCriteria} */
  static ItemCriteria() {
    return Joi.object({
      all_items: Joi.boolean(),
      available_zones: Joi.array().items(Joi.string().allow("")),
      buy_rules: Joi.array().items(Joi.string().allow("")),
      cart_quantity: CartPlatformModel.CompareObject(),
      cart_total: CartPlatformModel.CompareObject(),
      cart_unique_item_amount: CartPlatformModel.CompareObject(),
      cart_unique_item_quantity: CartPlatformModel.CompareObject(),
      item_brand: Joi.array().items(Joi.number()),
      item_category: Joi.array().items(Joi.number()),
      item_company: Joi.array().items(Joi.number()),
      item_department: Joi.array().items(Joi.number()),
      item_exclude_brand: Joi.array().items(Joi.number()),
      item_exclude_category: Joi.array().items(Joi.number()),
      item_exclude_company: Joi.array().items(Joi.number()),
      item_exclude_department: Joi.array().items(Joi.number()),
      item_exclude_id: Joi.array().items(Joi.number()),
      item_exclude_l1_category: Joi.array().items(Joi.number()),
      item_exclude_l2_category: Joi.array().items(Joi.number()),
      item_exclude_sku: Joi.array().items(Joi.string().allow("")),
      item_exclude_store: Joi.array().items(Joi.number()),
      item_id: Joi.array().items(Joi.number()),
      item_l1_category: Joi.array().items(Joi.number()),
      item_l2_category: Joi.array().items(Joi.number()),
      item_size: Joi.array().items(Joi.string().allow("")),
      item_sku: Joi.array().items(Joi.string().allow("")),
      item_store: Joi.array().items(Joi.number()),
      item_tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {LoyaltyPoints} */
  static LoyaltyPoints() {
    return Joi.object({
      applicable: Joi.number(),
      description: Joi.string().allow(""),
      is_applied: Joi.boolean(),
      total: Joi.number(),
    });
  }

  /** @returns {MultiCartResponse} */
  static MultiCartResponse() {
    return Joi.object({
      data: Joi.array().items(CartPlatformModel.CartList()),
      success: Joi.boolean(),
    });
  }

  /** @returns {MultiTenderPaymentMeta} */
  static MultiTenderPaymentMeta() {
    return Joi.object({
      current_status: Joi.string().allow("").allow(null),
      extra_meta: Joi.any().allow(null),
      order_id: Joi.string().allow("").allow(null),
      payment_gateway: Joi.string().allow("").allow(null),
      payment_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {MultiTenderPaymentMethod} */
  static MultiTenderPaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),
      meta: CartPlatformModel.MultiTenderPaymentMeta(),
      mode: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {OpenapiCartDetailsRequest} */
  static OpenapiCartDetailsRequest() {
    return Joi.object({
      cart_items: Joi.array().items(CartPlatformModel.CartItem()).required(),
    });
  }

  /** @returns {OpenapiCartDetailsResponse} */
  static OpenapiCartDetailsResponse() {
    return Joi.object({
      breakup_values: CartPlatformModel.CartBreakup(),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      message: Joi.string().allow(""),
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
      breakup_values: CartPlatformModel.CartBreakup(),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {OpenApiCheckoutResponse} */
  static OpenApiCheckoutResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      order_id: Joi.string().allow("").required(),
      order_ref_id: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {OpenApiErrorResponse} */
  static OpenApiErrorResponse() {
    return Joi.object({
      errors: Joi.any(),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {OpenApiFiles} */
  static OpenApiFiles() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {OpenApiOrderItem} */
  static OpenApiOrderItem() {
    return Joi.object({
      amount_paid: Joi.number().required(),
      cashback_applied: Joi.number().required(),
      cod_charges: Joi.number().required(),
      coupon_effective_discount: Joi.number().required(),
      delivery_charges: Joi.number().required(),
      discount: Joi.number().required(),
      employee_discount: Joi.number(),
      extra_meta: Joi.any(),
      files: Joi.array().items(CartPlatformModel.OpenApiFiles()),
      loyalty_discount: Joi.number(),
      meta: CartPlatformModel.CartItemMeta(),
      payment_methods: Joi.array()
        .items(CartPlatformModel.MultiTenderPaymentMethod())
        .required(),
      price_effective: Joi.number().required(),
      price_marked: Joi.number().required(),
      product_id: Joi.number().required(),
      quantity: Joi.number(),
      size: Joi.string().allow("").required(),
    });
  }

  /** @returns {OpenApiPlatformCheckoutReq} */
  static OpenApiPlatformCheckoutReq() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),
      billing_address: CartPlatformModel.ShippingAddress().required(),
      cart_items: Joi.array()
        .items(CartPlatformModel.OpenApiOrderItem())
        .required(),
      cart_value: Joi.number().required(),
      cashback_applied: Joi.number().required(),
      cod_charges: Joi.number().required(),
      comment: Joi.string().allow("").allow(null),
      coupon: Joi.string().allow(""),
      coupon_code: Joi.string().allow("").required(),
      coupon_value: Joi.number().required(),
      currency_code: Joi.string().allow(""),
      delivery_charges: Joi.number().required(),
      employee_discount: Joi.any(),
      files: Joi.array().items(CartPlatformModel.OpenApiFiles()),
      gstin: Joi.string().allow("").allow(null),
      loyalty_discount: Joi.number(),
      order_id: Joi.string().allow(""),
      payment_methods: Joi.array()
        .items(CartPlatformModel.MultiTenderPaymentMethod())
        .required(),
      payment_mode: Joi.string().allow(""),
      shipping_address: CartPlatformModel.ShippingAddress(),
    });
  }

  /** @returns {OperationErrorResponse} */
  static OperationErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {OverrideCartItem} */
  static OverrideCartItem() {
    return Joi.object({
      amount_paid: Joi.number().required(),
      discount: Joi.number().required(),
      extra_meta: Joi.any(),
      item_id: Joi.number().required(),
      price_effective: Joi.number().required(),
      price_marked: Joi.number().required(),
      promo_list: Joi.array().items(CartPlatformModel.OverrideCartItemPromo()),
      quantity: Joi.number(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow("").required(),
    });
  }

  /** @returns {OverrideCartItemPromo} */
  static OverrideCartItemPromo() {
    return Joi.object({
      item_list: Joi.array().items(Joi.any().allow(null)),
      promo_amount: Joi.string().allow("").required(),
      promo_desc: Joi.string().allow(""),
      promo_id: Joi.string().allow("").required(),
      rwrd_tndr: Joi.string().allow(""),
    });
  }

  /** @returns {OverrideCheckoutReq} */
  static OverrideCheckoutReq() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      billing_address: Joi.any(),
      cart_id: Joi.string().allow("").required(),
      cart_items: Joi.array()
        .items(CartPlatformModel.OverrideCartItem())
        .required(),
      currency_code: Joi.string().allow("").required(),
      merchant_code: Joi.string().allow("").required(),
      order_type: Joi.string().allow("").required(),
      ordering_store: Joi.number().allow(null),
      payment_identifier: Joi.string().allow("").allow(null).required(),
      payment_mode: Joi.string().allow("").required(),
      shipping_address: Joi.any(),
    });
  }

  /** @returns {OverrideCheckoutResponse} */
  static OverrideCheckoutResponse() {
    return Joi.object({
      cart: Joi.any().required(),
      data: Joi.any().required(),
      message: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      success: Joi.string().allow("").required(),
    });
  }

  /** @returns {Ownership} */
  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),
      payable_category: Joi.string().allow("").required(),
    });
  }

  /** @returns {Ownership1} */
  static Ownership1() {
    return Joi.object({
      payable_by: Joi.string().allow("").required(),
      payable_category: Joi.string().allow("").required(),
    });
  }

  /** @returns {Ownership2} */
  static Ownership2() {
    return Joi.object({
      payable_by: Joi.string().allow(""),
      payable_category: Joi.string().allow(""),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PageCoupon} */
  static PageCoupon() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      total: Joi.number(),
      total_item_count: Joi.number(),
    });
  }

  /** @returns {PaymentAllowValue} */
  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  /** @returns {PaymentAllowValue1} */
  static PaymentAllowValue1() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  /** @returns {PaymentCouponValidate} */
  static PaymentCouponValidate() {
    return Joi.object({
      coupon_validity: CartPlatformModel.CouponValidity(),
      message: Joi.string().allow(""),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {PaymentMeta} */
  static PaymentMeta() {
    return Joi.object({
      merchant_code: Joi.string().allow(""),
      payment_gateway: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentMethod} */
  static PaymentMethod() {
    return Joi.object({
      amount: Joi.number().allow(null),
      mode: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
      payment: Joi.string().allow(""),
      payment_meta: CartPlatformModel.PaymentMeta().required(),
    });
  }

  /** @returns {PaymentModes} */
  static PaymentModes() {
    return Joi.object({
      codes: Joi.array().items(Joi.string().allow("")),
      iins: Joi.array().items(Joi.string().allow("")),
      networks: Joi.array().items(Joi.string().allow("")),
      types: Joi.array().items(Joi.string().allow("")),
      uses: CartPlatformModel.PaymentAllowValue(),
    });
  }

  /** @returns {PaymentSelectionLock} */
  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),
      enabled: Joi.boolean(),
      payment_identifier: Joi.string().allow(""),
    });
  }

  /** @returns {PickupStoreDetail} */
  static PickupStoreDetail() {
    return Joi.object({
      address: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      area_code: Joi.string().allow(""),
      area_code_slug: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      email: Joi.string().allow(""),
      id: Joi.number(),
      landmark: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {PlatformAddCartRequest} */
  static PlatformAddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.AddProductCart()),
      new_cart: Joi.boolean(),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformAddress} */
  static PlatformAddress() {
    return Joi.object({
      address: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      area_code: Joi.string().allow(""),
      area_code_slug: Joi.string().allow(""),
      cart_id: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      created_by_user_id: Joi.string().allow(""),
      email: Joi.string().allow(""),
      geo_location: CartPlatformModel.GeoLocation(),
      google_map_point: Joi.any(),
      id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      is_default_address: Joi.boolean(),
      landmark: Joi.string().allow(""),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      state: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformCartCheckoutDetailRequest} */
  static PlatformCartCheckoutDetailRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      billing_address: Joi.any(),
      billing_address_id: Joi.string().allow(""),
      callback_url: Joi.string().allow("").allow(null),
      checkout_mode: Joi.string().allow(""),
      customer_details: Joi.any().allow(null),
      delivery_address: Joi.any(),
      device_id: Joi.string().allow("").allow(null),
      employee_code: Joi.string().allow("").allow(null),
      extra_meta: Joi.any(),
      files: Joi.array().items(CartPlatformModel.Files()),
      id: Joi.string().allow("").required(),
      merchant_code: Joi.string().allow(""),
      meta: Joi.any(),
      order_type: Joi.string().allow("").required(),
      ordering_store: Joi.number().allow(null),
      payment_auto_confirm: Joi.boolean(),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_mode: Joi.string().allow("").required(),
      payment_params: Joi.any().allow(null),
      pick_at_store_uid: Joi.number().allow(null),
      pos: Joi.boolean(),
      staff: CartPlatformModel.StaffCheckout(),
      user_id: Joi.string().allow("").allow(null).required(),
    });
  }

  /** @returns {PlatformCartCheckoutDetailV2Request} */
  static PlatformCartCheckoutDetailV2Request() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      billing_address: Joi.any(),
      billing_address_id: Joi.string().allow(""),
      callback_url: Joi.string().allow("").allow(null),
      checkout_mode: Joi.string().allow(""),
      custom_meta: Joi.any(),
      customer_details: Joi.any().allow(null),
      delivery_address: Joi.any(),
      device_id: Joi.string().allow("").allow(null),
      employee_code: Joi.string().allow("").allow(null),
      extra_meta: Joi.any(),
      files: Joi.array().items(CartPlatformModel.Files()),
      id: Joi.string().allow("").required(),
      merchant_code: Joi.string().allow(""),
      meta: Joi.any(),
      order_type: Joi.string().allow("").required(),
      ordering_store: Joi.number().allow(null),
      payment_auto_confirm: Joi.boolean(),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_methods: Joi.array()
        .items(CartPlatformModel.PaymentMethod())
        .required(),
      payment_mode: Joi.string().allow(""),
      payment_params: Joi.any().allow(null),
      pick_at_store_uid: Joi.number().allow(null),
      pos: Joi.boolean(),
      staff: CartPlatformModel.StaffCheckout(),
      user_id: Joi.string().allow("").allow(null).required(),
    });
  }

  /** @returns {PlatformCartMetaRequest} */
  static PlatformCartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      gift_details: Joi.any().allow(null),
      gstin: Joi.string().allow(""),
      pan_no: Joi.string().allow(""),
      pick_up_customer_details: Joi.any(),
      staff_user_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformCartShipmentsResponse} */
  static PlatformCartShipmentsResponse() {
    return Joi.object({
      applied_promo_details: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      breakup_values: CartPlatformModel.CartBreakup(),
      buy_now: Joi.boolean(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartPlatformModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      error: Joi.boolean(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      pan_config: Joi.any(),
      pan_no: Joi.string().allow(""),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      shipments: Joi.array().items(
        CartPlatformModel.PlatformShipmentResponse()
      ),
      staff_user_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformGetAddressesResponse} */
  static PlatformGetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(CartPlatformModel.PlatformAddress()),
    });
  }

  /** @returns {PlatformSelectCartAddressRequest} */
  static PlatformSelectCartAddressRequest() {
    return Joi.object({
      billing_address_id: Joi.string().allow(""),
      cart_id: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformShipmentResponse} */
  static PlatformShipmentResponse() {
    return Joi.object({
      articles: Joi.array().items(CartPlatformModel.ShipmentArticle()),
      box_type: Joi.string().allow("").allow(null),
      dp_id: Joi.string().allow("").allow(null),
      dp_options: Joi.any().allow(null),
      fulfillment_id: Joi.number(),
      fulfillment_type: Joi.string().allow(""),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      order_type: Joi.string().allow(""),
      promise: CartPlatformModel.ShipmentPromise(),
      shipment_type: Joi.string().allow(""),
      shipments: Joi.number(),
    });
  }

  /** @returns {PlatformUpdateCartRequest} */
  static PlatformUpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.UpdateProductCart()),
      operation: Joi.string().allow("").required(),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {PostOrder} */
  static PostOrder() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),
      return_allowed: Joi.boolean(),
    });
  }

  /** @returns {PostOrder1} */
  static PostOrder1() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),
      return_allowed: Joi.boolean(),
    });
  }

  /** @returns {PriceAdjustment} */
  static PriceAdjustment() {
    return Joi.object({
      allowed_refund: Joi.boolean(),
      apply_expiry: Joi.string().allow(""),
      article_ids: Joi.array().items(CartPlatformModel.Article()).required(),
      article_level_distribution: Joi.boolean().required(),
      cart_id: Joi.string().allow("").required(),
      cart_value: Joi.number(),
      collection: CartPlatformModel.Collection().required(),
      id: Joi.string().allow(""),
      is_authenticated: Joi.boolean().required(),
      message: Joi.string().allow("").required(),
      meta: Joi.any(),
      type: Joi.string().allow("").required(),
      value: Joi.number().required(),
    });
  }

  /** @returns {PriceAdjustmentAdd} */
  static PriceAdjustmentAdd() {
    return Joi.object({
      allowed_refund: Joi.boolean(),
      apply_expiry: Joi.string().allow(""),
      article_ids: Joi.array().items(CartPlatformModel.Article()).required(),
      article_level_distribution: Joi.boolean().required(),
      cart_id: Joi.string().allow("").required(),
      cart_value: Joi.number(),
      collection: CartPlatformModel.Collection().required(),
      created_by: Joi.string().allow(""),
      is_authenticated: Joi.boolean().required(),
      message: Joi.string().allow("").required(),
      meta: Joi.any(),
      type: Joi.string().allow("").required(),
      value: Joi.number().required(),
    });
  }

  /** @returns {PriceAdjustmentResponse} */
  static PriceAdjustmentResponse() {
    return Joi.object({
      data: CartPlatformModel.PriceAdjustment(),
    });
  }

  /** @returns {PriceAdjustmentUpdate} */
  static PriceAdjustmentUpdate() {
    return Joi.object({
      allowed_refund: Joi.boolean(),
      apply_expiry: Joi.string().allow(""),
      article_ids: Joi.array().items(CartPlatformModel.Article()).required(),
      article_level_distribution: Joi.boolean().required(),
      cart_id: Joi.string().allow("").required(),
      cart_value: Joi.number(),
      collection: CartPlatformModel.Collection().required(),
      is_authenticated: Joi.boolean().required(),
      message: Joi.string().allow("").required(),
      meta: Joi.any(),
      modified_by: Joi.string().allow(""),
      type: Joi.string().allow("").required(),
      value: Joi.number().required(),
    });
  }

  /** @returns {PriceRange} */
  static PriceRange() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {ProductAction} */
  static ProductAction() {
    return Joi.object({
      query: CartPlatformModel.ActionQuery(),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {ProductArticle} */
  static ProductArticle() {
    return Joi.object({
      _custom_json: Joi.any(),
      cart_item_meta: Joi.any(),
      extra_meta: Joi.any(),
      gift_card: Joi.any(),
      identifier: Joi.any(),
      is_gift_visible: Joi.boolean(),
      meta: Joi.any(),
      mto_quantity: Joi.number(),
      parent_item_identifiers: Joi.any(),
      price: CartPlatformModel.ArticlePriceInfo(),
      product_group_tags: Joi.array().items(Joi.string().allow("")),
      quantity: Joi.number(),
      seller: CartPlatformModel.BaseInfo(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      store: CartPlatformModel.StoreInfo(),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {ProductAvailability} */
  static ProductAvailability() {
    return Joi.object({
      available_sizes: Joi.array().items(
        CartPlatformModel.ProductAvailabilitySize()
      ),
      deliverable: Joi.boolean(),
      is_valid: Joi.boolean(),
      other_store_quantity: Joi.number(),
      out_of_stock: Joi.boolean(),
      sizes: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ProductAvailabilitySize} */
  static ProductAvailabilitySize() {
    return Joi.object({
      display: Joi.string().allow(""),
      is_available: Joi.boolean(),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ProductImage} */
  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {ProductPrice} */
  static ProductPrice() {
    return Joi.object({
      add_on: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
      selling: Joi.number(),
    });
  }

  /** @returns {ProductPriceInfo} */
  static ProductPriceInfo() {
    return Joi.object({
      base: CartPlatformModel.ProductPrice(),
      converted: CartPlatformModel.ProductPrice(),
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

  /** @returns {PromoMeta} */
  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {PromotionAction} */
  static PromotionAction() {
    return Joi.object({
      action_date: Joi.string().allow("").allow(null).required(),
      action_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PromotionAdd} */
  static PromotionAdd() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: CartPlatformModel.PromotionSchedule(),
      application_id: Joi.string().allow("").required(),
      apply_all_discount: Joi.boolean(),
      apply_exclusive: Joi.string().allow("").allow(null),
      apply_priority: Joi.number(),
      author: CartPlatformModel.PromotionAuthor(),
      buy_rules: Joi.object()
        .pattern(/\S/, CartPlatformModel.ItemCriteria())
        .required(),
      calculate_on: Joi.string().allow(""),
      code: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      date_meta: CartPlatformModel.PromotionDateMeta(),
      discount_rules: Joi.array()
        .items(CartPlatformModel.DiscountRule())
        .required(),
      display_meta: CartPlatformModel.DisplayMeta1().required(),
      mode: Joi.string().allow("").required(),
      ownership: CartPlatformModel.Ownership1().required(),
      post_order_action: CartPlatformModel.PromotionAction(),
      promo_group: Joi.string().allow("").required(),
      promotion_type: Joi.string().allow("").required(),
      restrictions: CartPlatformModel.Restrictions1(),
      stackable: Joi.boolean(),
      visiblility: CartPlatformModel.Visibility(),
    });
  }

  /** @returns {PromotionAuthor} */
  static PromotionAuthor() {
    return Joi.object({
      created_by: Joi.string().allow("").allow(null),
      modified_by: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PromotionDateMeta} */
  static PromotionDateMeta() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),
      modified_on: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PromotionListItem} */
  static PromotionListItem() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      _schedule: CartPlatformModel.PromotionSchedule(),
      application_id: Joi.string().allow("").required(),
      apply_all_discount: Joi.boolean(),
      apply_exclusive: Joi.string().allow("").allow(null),
      apply_priority: Joi.number(),
      author: CartPlatformModel.PromotionAuthor(),
      buy_rules: Joi.object()
        .pattern(/\S/, CartPlatformModel.ItemCriteria())
        .required(),
      calculate_on: Joi.string().allow(""),
      code: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      date_meta: CartPlatformModel.PromotionDateMeta(),
      discount_rules: Joi.array()
        .items(CartPlatformModel.DiscountRule())
        .required(),
      display_meta: CartPlatformModel.DisplayMeta1().required(),
      mode: Joi.string().allow("").required(),
      ownership: CartPlatformModel.Ownership1().required(),
      post_order_action: CartPlatformModel.PromotionAction(),
      promo_group: Joi.string().allow("").required(),
      promotion_type: Joi.string().allow("").required(),
      restrictions: CartPlatformModel.Restrictions1(),
      stackable: Joi.boolean(),
      visiblility: CartPlatformModel.Visibility(),
    });
  }

  /** @returns {PromotionPartialUpdate} */
  static PromotionPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),
      schedule: CartPlatformModel.PromotionSchedule(),
    });
  }

  /** @returns {PromotionPaymentModes} */
  static PromotionPaymentModes() {
    return Joi.object({
      codes: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow("").required(),
      uses: CartPlatformModel.PaymentAllowValue1(),
    });
  }

  /** @returns {PromotionSchedule} */
  static PromotionSchedule() {
    return Joi.object({
      cron: Joi.string().allow("").allow(null),
      duration: Joi.number().allow(null),
      end: Joi.string().allow("").required(),
      next_schedule: Joi.array().items(Joi.any()),
      published: Joi.boolean().required(),
      start: Joi.string().allow("").required(),
    });
  }

  /** @returns {PromotionsResponse} */
  static PromotionsResponse() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.PromotionListItem()),
      page: CartPlatformModel.Page(),
    });
  }

  /** @returns {PromotionUpdate} */
  static PromotionUpdate() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: CartPlatformModel.PromotionSchedule(),
      application_id: Joi.string().allow("").required(),
      apply_all_discount: Joi.boolean(),
      apply_exclusive: Joi.string().allow("").allow(null),
      apply_priority: Joi.number(),
      author: CartPlatformModel.PromotionAuthor(),
      buy_rules: Joi.object()
        .pattern(/\S/, CartPlatformModel.ItemCriteria())
        .required(),
      calculate_on: Joi.string().allow(""),
      code: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      date_meta: CartPlatformModel.PromotionDateMeta(),
      discount_rules: Joi.array()
        .items(CartPlatformModel.DiscountRule())
        .required(),
      display_meta: CartPlatformModel.DisplayMeta1().required(),
      mode: Joi.string().allow("").required(),
      ownership: CartPlatformModel.Ownership1().required(),
      post_order_action: CartPlatformModel.PromotionAction(),
      promo_group: Joi.string().allow("").required(),
      promotion_type: Joi.string().allow("").required(),
      restrictions: CartPlatformModel.Restrictions1(),
      stackable: Joi.boolean(),
      visiblility: CartPlatformModel.Visibility(),
    });
  }

  /** @returns {RawBreakup} */
  static RawBreakup() {
    return Joi.object({
      cod_charge: Joi.number(),
      convenience_fee: Joi.number(),
      coupon: Joi.number(),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_cash: Joi.number(),
      gift_card: Joi.number(),
      gst_charges: Joi.number(),
      mrp_total: Joi.number(),
      subtotal: Joi.number(),
      total: Joi.number(),
      vog: Joi.number(),
      you_saved: Joi.number(),
    });
  }

  /** @returns {Restrictions} */
  static Restrictions() {
    return Joi.object({
      bulk_bundle: CartPlatformModel.BulkBundleRestriction(),
      coupon_allowed: Joi.boolean(),
      ordering_stores: Joi.array().items(Joi.number()),
      payments: Joi.object().pattern(/\S/, CartPlatformModel.PaymentModes()),
      platforms: Joi.array().items(Joi.string().allow("")),
      post_order: CartPlatformModel.PostOrder(),
      price_range: CartPlatformModel.PriceRange(),
      user_groups: Joi.array().items(Joi.number()),
      user_type: Joi.string().allow(""),
      uses: CartPlatformModel.UsesRestriction(),
    });
  }

  /** @returns {Restrictions1} */
  static Restrictions1() {
    return Joi.object({
      anonymous_users: Joi.boolean(),
      order_quantity: Joi.number(),
      ordering_stores: Joi.array().items(Joi.number()),
      payments: Joi.array().items(CartPlatformModel.PromotionPaymentModes()),
      platforms: Joi.array().items(Joi.string().allow("")),
      post_order: CartPlatformModel.PostOrder1(),
      user_groups: Joi.array().items(Joi.number()),
      user_id: Joi.array().items(Joi.string().allow("")),
      user_registered: Joi.any().allow(null),
      uses: CartPlatformModel.UsesRestriction1().required(),
    });
  }

  /** @returns {Rule} */
  static Rule() {
    return Joi.object({
      discount_qty: Joi.number(),
      key: Joi.number(),
      max: Joi.number(),
      min: Joi.number(),
      value: Joi.number(),
    });
  }

  /** @returns {RuleDefinition} */
  static RuleDefinition() {
    return Joi.object({
      applicable_on: Joi.string().allow("").required(),
      auto_apply: Joi.boolean(),
      calculate_on: Joi.string().allow("").required(),
      currency_code: Joi.string().allow(""),
      is_exact: Joi.boolean(),
      scope: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow("").required(),
      value_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {SaveAddressResponse} */
  static SaveAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_default_address: Joi.boolean(),
      success: Joi.boolean(),
    });
  }

  /** @returns {SharedCart} */
  static SharedCart() {
    return Joi.object({
      breakup_values: CartPlatformModel.CartBreakup(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartPlatformModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      shared_cart_details: CartPlatformModel.SharedCartDetails(),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {SharedCartDetails} */
  static SharedCartDetails() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      meta: Joi.any(),
      source: Joi.any(),
      token: Joi.string().allow(""),
      user: Joi.any(),
    });
  }

  /** @returns {SharedCartResponse} */
  static SharedCartResponse() {
    return Joi.object({
      cart: CartPlatformModel.SharedCart(),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentArticle} */
  static ShipmentArticle() {
    return Joi.object({
      article_id: Joi.string().allow(""),
      meta: Joi.string().allow(""),
      quantity: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentPromise} */
  static ShipmentPromise() {
    return Joi.object({
      formatted: CartPlatformModel.PromiseFormatted(),
      timestamp: CartPlatformModel.PromiseTimestamp(),
    });
  }

  /** @returns {ShippingAddress} */
  static ShippingAddress() {
    return Joi.object({
      address: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      area_code: Joi.string().allow("").required(),
      area_code_slug: Joi.string().allow(""),
      city: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").allow(null),
      country_code: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      phone: Joi.number(),
      pincode: Joi.number(),
      state: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {StaffCheckout} */
  static StaffCheckout() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      employee_code: Joi.string().allow(""),
      first_name: Joi.string().allow("").required(),
      last_name: Joi.string().allow("").required(),
      user: Joi.string().allow("").required(),
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

  /** @returns {StoreDetailsResponse} */
  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.PickupStoreDetail()),
    });
  }

  /** @returns {StoreInfo} */
  static StoreInfo() {
    return Joi.object({
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {SuccessMessage} */
  static SuccessMessage() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {Tags} */
  static Tags() {
    return Joi.object({
      tags: Joi.any(),
    });
  }

  /** @returns {UpdateAddressResponse} */
  static UpdateAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_default_address: Joi.boolean(),
      is_updated: Joi.boolean(),
      success: Joi.boolean(),
    });
  }

  /** @returns {UpdateCartDetailResponse} */
  static UpdateCartDetailResponse() {
    return Joi.object({
      cart: CartPlatformModel.CartDetailResponse(),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {UpdateCartPaymentRequest} */
  static UpdateCartPaymentRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      aggregator_name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_mode: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateCartPaymentRequestV2} */
  static UpdateCartPaymentRequestV2() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      aggregator_name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      payment_methods: Joi.array().items(CartPlatformModel.PaymentMethod()),
      payment_mode: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateCartRequest} */
  static UpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartPlatformModel.UpdateProductCart()),
      operation: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdateCartShipmentItem} */
  static UpdateCartShipmentItem() {
    return Joi.object({
      article_uid: Joi.string().allow("").required(),
      quantity: Joi.number(),
      shipment_type: Joi.string().allow("").required(),
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

  /** @returns {UpdateProductCart} */
  static UpdateProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),
      article_id: Joi.string().allow(""),
      extra_meta: Joi.any(),
      identifiers: CartPlatformModel.CartProductIdentifer().required(),
      item_id: Joi.number(),
      item_index: Joi.number(),
      item_size: Joi.string().allow(""),
      meta: Joi.any(),
      parent_item_identifiers: Joi.any(),
      quantity: Joi.number(),
    });
  }

  /** @returns {UpdateUserCartMapping} */
  static UpdateUserCartMapping() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {UserCartMappingResponse} */
  static UserCartMappingResponse() {
    return Joi.object({
      applied_promo_details: Joi.array().items(
        CartPlatformModel.AppliedPromotion()
      ),
      breakup_values: CartPlatformModel.CartBreakup(),
      buy_now: Joi.boolean(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: CartPlatformModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: CartPlatformModel.ShipmentPromise(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(CartPlatformModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      pan_config: Joi.any(),
      pan_no: Joi.string().allow(""),
      payment_selection_lock: CartPlatformModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      user: CartPlatformModel.UserInfo(),
    });
  }

  /** @returns {UserInfo} */
  static UserInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      external_id: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {UserRegistered} */
  static UserRegistered() {
    return Joi.object({
      end: Joi.string().allow("").allow(null),
      start: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {UsesRemaining} */
  static UsesRemaining() {
    return Joi.object({
      app: Joi.number(),
      total: Joi.number(),
      user: Joi.number(),
    });
  }

  /** @returns {UsesRemaining1} */
  static UsesRemaining1() {
    return Joi.object({
      total: Joi.number(),
      user: Joi.number(),
    });
  }

  /** @returns {UsesRestriction} */
  static UsesRestriction() {
    return Joi.object({
      maximum: CartPlatformModel.UsesRemaining(),
      remaining: CartPlatformModel.UsesRemaining(),
    });
  }

  /** @returns {UsesRestriction1} */
  static UsesRestriction1() {
    return Joi.object({
      maximum: CartPlatformModel.UsesRemaining1(),
      remaining: CartPlatformModel.UsesRemaining1(),
    });
  }

  /** @returns {Validation} */
  static Validation() {
    return Joi.object({
      anonymous: Joi.boolean(),
      app_id: Joi.array().items(Joi.string().allow("")),
      user_registered_after: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Validity} */
  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  /** @returns {Visibility} */
  static Visibility() {
    return Joi.object({
      coupon_list: Joi.boolean().required(),
      pdp: Joi.boolean().required(),
    });
  }
}
module.exports = CartPlatformModel;
