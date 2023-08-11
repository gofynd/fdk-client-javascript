export = CartPlatformModel;
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
declare class CartPlatformModel {
}
declare namespace CartPlatformModel {
    export { AbandonedCart, AbandonedCartResponse, ActionQuery, ActivePromosResponse, AddCartDetailResponse, AddCartRequest, AddProductCart, AppliedFreeArticles, AppliedPromotion, ApplyCouponRequest, Article, ArticlePriceInfo, BaseInfo, BasePrice, BulkBundleRestriction, BuyRules, CartBreakup, CartCheckoutResponse, CartCurrency, CartDeliveryModesResponse, CartDetailResponse, CartItem, CartItemCountResponse, CartItemMeta, CartList, CartMetaConfigAdd, CartMetaConfigUpdate, CartMetaMissingResponse, CartMetaResponse, CartProduct, CartProductIdentifer, CartProductInfo, CategoryInfo, Charges, CheckCart, Collection, CompareObject, Coupon, CouponAction, CouponAdd, CouponAuthor, CouponBreakup, CouponDateMeta, CouponDetails, CouponPartialUpdate, CouponSchedule, CouponsResponse, CouponUpdate, CouponValidity, DeleteAddressResponse, DeleteCartDetailResponse, DeleteCartRequest, DeliveryCharges, DiscountOffer, DiscountRule, DiscountRulesApp, DisplayBreakup, DisplayMeta, DisplayMeta1, DisplayMetaDict, Files, FreeGiftItem, GeoLocation, GetCouponResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, Identifier, ItemCriteria, LoyaltyPoints, MultiCartResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, OpenapiCartDetailsRequest, OpenapiCartDetailsResponse, OpenApiCartServiceabilityRequest, OpenApiCartServiceabilityResponse, OpenApiCheckoutResponse, OpenApiErrorResponse, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OperationErrorResponse, OverrideCartItem, OverrideCartItemPromo, OverrideCheckoutReq, OverrideCheckoutResponse, Ownership, Ownership1, Ownership2, Page, PageCoupon, PaymentAllowValue, PaymentAllowValue1, PaymentCouponValidate, PaymentMeta, PaymentMethod, PaymentModes, PaymentSelectionLock, PickupStoreDetail, PlatformAddCartRequest, PlatformAddress, PlatformCartCheckoutDetailRequest, PlatformCartCheckoutDetailV2Request, PlatformCartMetaRequest, PlatformCartShipmentsResponse, PlatformGetAddressesResponse, PlatformSelectCartAddressRequest, PlatformShipmentResponse, PlatformUpdateCartRequest, PostOrder, PostOrder1, PriceAdjustment, PriceAdjustmentAdd, PriceAdjustmentResponse, PriceAdjustmentUpdate, PriceRange, ProductAction, ProductArticle, ProductAvailability, ProductAvailabilitySize, ProductImage, ProductPrice, ProductPriceInfo, PromiseFormatted, PromiseTimestamp, PromoMeta, PromotionAction, PromotionAdd, PromotionAuthor, PromotionDateMeta, PromotionListItem, PromotionPartialUpdate, PromotionPaymentModes, PromotionSchedule, PromotionsResponse, PromotionUpdate, RawBreakup, Restrictions, Restrictions1, Rule, RuleDefinition, SaveAddressResponse, SharedCart, SharedCartDetails, SharedCartResponse, ShipmentArticle, ShipmentPromise, ShippingAddress, StaffCheckout, State, StoreDetailsResponse, StoreInfo, SuccessMessage, Tags, UpdateAddressResponse, UpdateCartDetailResponse, UpdateCartPaymentRequest, UpdateCartPaymentRequestV2, UpdateCartRequest, UpdateCartShipmentItem, UpdateCartShipmentRequest, UpdateProductCart, UpdateUserCartMapping, UserCartMappingResponse, UserInfo, UserRegistered, UsesRemaining, UsesRemaining1, UsesRestriction, UsesRestriction1, Validation, Validity, Visibility };
}
/** @returns {AbandonedCart} */
declare function AbandonedCart(): AbandonedCart;
type AbandonedCart = {
    _id: string;
    app_id?: string;
    articles: any[];
    bulk_coupon_discount?: number;
    buy_now?: boolean;
    cart_value?: number;
    cashback: any;
    checkout_mode?: string;
    cod_charges?: any;
    comment?: string;
    coupon?: any;
    created_on: string;
    delivery_charges?: any;
    discount?: number;
    expire_at: string;
    fc_index_map?: number[];
    fynd_credits?: any;
    gstin?: string;
    is_active?: boolean;
    is_archive?: boolean;
    is_default: boolean;
    last_modified: string;
    merge_qty?: boolean;
    meta?: any;
    order_id?: string;
    payment_methods?: any[];
    payment_mode?: string;
    payments?: any;
    pick_up_customer_details?: any;
    promotion?: any;
    shipments?: any[];
    uid: number;
    user_id: string;
};
/** @returns {AbandonedCartResponse} */
declare function AbandonedCartResponse(): AbandonedCartResponse;
type AbandonedCartResponse = {
    items?: AbandonedCart[];
    /**
     * - Message of the response
     */
    message?: string;
    page?: Page;
    result?: any;
    /**
     * - The request success is defined
     */
    success?: boolean;
};
/** @returns {ActionQuery} */
declare function ActionQuery(): ActionQuery;
type ActionQuery = {
    /**
     * - Contains list of product slug
     */
    product_slug?: string[];
};
/** @returns {ActivePromosResponse} */
declare function ActivePromosResponse(): ActivePromosResponse;
type ActivePromosResponse = {
    /**
     * - Coupon creation date
     */
    created_on?: string;
    /**
     * - The description of the offer in the form of an HTML
     */
    description?: string;
    entity_slug?: string;
    /**
     * - Type of entity to be selected from :
     * ['coupon', 'promotion']
     */
    entity_type?: string;
    /**
     * - Discount offers examples
     */
    example?: string;
    /**
     * - If the promo is active or not
     */
    is_hidden?: boolean;
    /**
     * - Coupon modification date
     */
    modified_on?: string;
    /**
     * - Small description of the current offer
     */
    subtitle?: string;
    /**
     * - Name of the promotion
     */
    title?: string;
    /**
     * - Coupon type
     */
    type?: string;
};
/** @returns {AddCartDetailResponse} */
declare function AddCartDetailResponse(): AddCartDetailResponse;
type AddCartDetailResponse = {
    cart?: CartDetailResponse;
    message?: string;
    /**
     * - When adding multiple items check if all
     * added. True if only few are added.
     */
    partial?: boolean;
    /**
     * - True if all items are added successfully.
     * False if partially added or not added.
     */
    success?: boolean;
};
/** @returns {AddCartRequest} */
declare function AddCartRequest(): AddCartRequest;
type AddCartRequest = {
    items?: AddProductCart[];
    new_cart?: boolean;
};
/** @returns {AddProductCart} */
declare function AddProductCart(): AddProductCart;
type AddProductCart = {
    _custom_json?: any;
    article_assignment?: any;
    article_id?: string;
    display?: string;
    extra_meta?: any;
    item_id?: number;
    item_size?: string;
    meta?: any;
    parent_item_identifiers?: any[];
    pos?: boolean;
    product_group_tags?: string[];
    quantity?: number;
    seller_id?: number;
    store_id?: number;
};
/** @returns {AppliedFreeArticles} */
declare function AppliedFreeArticles(): AppliedFreeArticles;
type AppliedFreeArticles = {
    /**
     * - Free article id
     */
    article_id?: string;
    /**
     * - Free gift items details
     */
    free_gift_item_details?: FreeGiftItem;
    /**
     * - Parent item identifier for free article
     */
    parent_item_identifier?: string;
    /**
     * - Free article quantity
     */
    quantity?: number;
};
/** @returns {AppliedPromotion} */
declare function AppliedPromotion(): AppliedPromotion;
type AppliedPromotion = {
    /**
     * - Per unit discount amount applied with current promotion
     */
    amount?: number;
    /**
     * - Applied free
     * article for free gift item promotions
     */
    applied_free_articles?: AppliedFreeArticles[];
    /**
     * - Quantity of article on which
     * promotion is applicable
     */
    article_quantity?: number;
    /**
     * - Buy rules for promotions
     */
    buy_rules?: BuyRules[];
    /**
     * - Discount rules for promotions
     */
    discount_rules?: DiscountRulesApp[];
    /**
     * - If applied promotion is applied on
     * product MRP or ESP
     */
    mrp_promotion?: boolean;
    /**
     * - Offer text of current promotion
     */
    offer_text?: string;
    /**
     * - Ownership of promotion
     */
    ownership?: Ownership2;
    /**
     * - Promotion id
     */
    promo_id?: string;
    /**
     * - Promotion group for the promotion
     */
    promotion_group?: string;
    /**
     * - Promotion name of current promotion
     */
    promotion_name?: string;
    /**
     * - Promotion type of current promotion
     */
    promotion_type?: string;
};
/** @returns {ApplyCouponRequest} */
declare function ApplyCouponRequest(): ApplyCouponRequest;
type ApplyCouponRequest = {
    /**
     * - Coupon code to be applied
     */
    coupon_code: string;
};
/** @returns {Article} */
declare function Article(): Article;
type Article = {
    article_id: string;
    code?: string;
    meta?: any;
    type?: string;
    value?: number;
};
/** @returns {ArticlePriceInfo} */
declare function ArticlePriceInfo(): ArticlePriceInfo;
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
/** @returns {BaseInfo} */
declare function BaseInfo(): BaseInfo;
type BaseInfo = {
    name?: string;
    uid?: number;
};
/** @returns {BasePrice} */
declare function BasePrice(): BasePrice;
type BasePrice = {
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
    marked?: number;
};
/** @returns {BulkBundleRestriction} */
declare function BulkBundleRestriction(): BulkBundleRestriction;
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
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
/** @returns {CartBreakup} */
declare function CartBreakup(): CartBreakup;
type CartBreakup = {
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
};
/** @returns {CartCheckoutResponse} */
declare function CartCheckoutResponse(): CartCheckoutResponse;
type CartCheckoutResponse = {
    app_intercept_url?: string;
    callback_url?: string;
    cart?: CheckCart;
    data?: any;
    message?: string;
    order_id?: string;
    payment_confirm_url?: string;
    success?: boolean;
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
/** @returns {CartDeliveryModesResponse} */
declare function CartDeliveryModesResponse(): CartDeliveryModesResponse;
type CartDeliveryModesResponse = {
    /**
     * - Available delivery modes
     */
    available_modes?: string[];
    /**
     * - Store pick up available store uids
     */
    pickup_stores?: number[];
};
/** @returns {CartDetailResponse} */
declare function CartDetailResponse(): CartDetailResponse;
type CartDetailResponse = {
    applied_promo_details?: AppliedPromotion[];
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    checkout_mode?: string;
    comment?: string;
    coupon_text?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    gstin?: string;
    id?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    message?: string;
    pan_config?: any;
    pan_no?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
};
/** @returns {CartItem} */
declare function CartItem(): CartItem;
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
/** @returns {CartItemCountResponse} */
declare function CartItemCountResponse(): CartItemCountResponse;
type CartItemCountResponse = {
    /**
     * - Item count present in cart
     */
    user_cart_items_count?: number;
};
/** @returns {CartItemMeta} */
declare function CartItemMeta(): CartItemMeta;
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
/** @returns {CartList} */
declare function CartList(): CartList;
type CartList = {
    cart_id?: string;
    cart_value?: number;
    created_on?: string;
    item_counts?: number;
    pick_up_customer_details?: any;
    user_id?: string;
};
/** @returns {CartMetaConfigAdd} */
declare function CartMetaConfigAdd(): CartMetaConfigAdd;
type CartMetaConfigAdd = {
    bulk_coupons?: boolean;
    delivery_charges?: DeliveryCharges;
    enabled?: boolean;
    gift_display_text?: string;
    gift_pricing?: number;
    max_cart_items?: number;
    min_cart_value?: number;
    revenue_engine_coupon?: boolean;
};
/** @returns {CartMetaConfigUpdate} */
declare function CartMetaConfigUpdate(): CartMetaConfigUpdate;
type CartMetaConfigUpdate = {
    bulk_coupons?: boolean;
    delivery_charges?: DeliveryCharges;
    enabled?: boolean;
    gift_display_text?: string;
    gift_pricing?: number;
    max_cart_items?: number;
    min_cart_value?: number;
    revenue_engine_coupon?: boolean;
};
/** @returns {CartMetaMissingResponse} */
declare function CartMetaMissingResponse(): CartMetaMissingResponse;
type CartMetaMissingResponse = {
    errors?: string[];
};
/** @returns {CartMetaResponse} */
declare function CartMetaResponse(): CartMetaResponse;
type CartMetaResponse = {
    is_valid?: boolean;
    message?: string;
};
/** @returns {CartProduct} */
declare function CartProduct(): CartProduct;
type CartProduct = {
    _custom_json?: any;
    action?: ProductAction;
    brand?: BaseInfo;
    categories?: CategoryInfo[];
    images?: ProductImage[];
    item_code?: string;
    name?: string;
    /**
     * - Unique product url name generated via product
     * name and other meta data
     */
    slug?: string;
    tags?: string[];
    teaser_tag?: Tags;
    type?: string;
    uid?: number;
};
/** @returns {CartProductIdentifer} */
declare function CartProductIdentifer(): CartProductIdentifer;
type CartProductIdentifer = {
    /**
     * - Article idenfier generated by cart
     */
    identifier?: string;
};
/** @returns {CartProductInfo} */
declare function CartProductInfo(): CartProductInfo;
type CartProductInfo = {
    article?: ProductArticle;
    availability?: ProductAvailability;
    bulk_offer?: any;
    coupon?: CouponDetails;
    coupon_message?: string;
    custom_order?: any;
    delivery_promise?: ShipmentPromise;
    discount?: string;
    identifiers: CartProductIdentifer;
    is_set?: boolean;
    key?: string;
    message?: string;
    moq?: any;
    parent_item_identifiers?: any;
    price?: ProductPriceInfo;
    price_per_unit?: ProductPriceInfo;
    product?: CartProduct;
    promo_meta?: PromoMeta;
    promotions_applied?: AppliedPromotion[];
    quantity?: number;
};
/** @returns {CategoryInfo} */
declare function CategoryInfo(): CategoryInfo;
type CategoryInfo = {
    name?: string;
    /**
     * - Product Category Id
     */
    uid?: number;
};
/** @returns {Charges} */
declare function Charges(): Charges;
type Charges = {
    charges?: number;
    threshold?: number;
};
/** @returns {CheckCart} */
declare function CheckCart(): CheckCart;
type CheckCart = {
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    cart_id?: number;
    checkout_mode?: string;
    cod_available?: boolean;
    cod_charges?: number;
    cod_message?: string;
    comment?: string;
    coupon_text?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    delivery_charge_order_value?: number;
    delivery_charges?: number;
    delivery_promise?: ShipmentPromise;
    error_message?: string;
    gstin?: string;
    id?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    message?: string;
    order_id?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    store_code?: string;
    store_emps?: any[];
    success?: boolean;
    uid?: string;
    user_type?: string;
};
/** @returns {Collection} */
declare function Collection(): Collection;
type Collection = {
    collected_by: string;
    refund_by: string;
};
/** @returns {CompareObject} */
declare function CompareObject(): CompareObject;
type CompareObject = {
    equals?: number;
    greater_than?: number;
    greater_than_equals?: number;
    less_than?: number;
    less_than_equals?: number;
};
/** @returns {Coupon} */
declare function Coupon(): Coupon;
type Coupon = {
    coupon_code?: string;
    coupon_type?: string;
    coupon_value?: number;
    description?: string;
    expires_on?: string;
    is_applicable?: boolean;
    is_applied?: boolean;
    max_discount_value?: number;
    message?: string;
    minimum_cart_value?: number;
    sub_title?: string;
    title?: string;
};
/** @returns {CouponAction} */
declare function CouponAction(): CouponAction;
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
/** @returns {CouponAdd} */
declare function CouponAdd(): CouponAdd;
type CouponAdd = {
    _schedule?: CouponSchedule;
    action?: CouponAction;
    author?: CouponAuthor;
    code: string;
    date_meta?: CouponDateMeta;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    ownership: Ownership;
    restrictions?: Restrictions;
    rule: Rule[];
    rule_definition: RuleDefinition;
    state?: State;
    tags?: string[];
    type_slug: string;
    validation?: Validation;
    validity: Validity;
};
/** @returns {CouponAuthor} */
declare function CouponAuthor(): CouponAuthor;
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
/** @returns {CouponBreakup} */
declare function CouponBreakup(): CouponBreakup;
type CouponBreakup = {
    code?: string;
    coupon_type?: string;
    coupon_value?: number;
    description?: string;
    is_applied?: boolean;
    max_discount_value?: number;
    message?: string;
    minimum_cart_value?: number;
    sub_title?: string;
    title?: string;
    type?: string;
    uid?: string;
    value?: number;
};
/** @returns {CouponDateMeta} */
declare function CouponDateMeta(): CouponDateMeta;
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
/** @returns {CouponDetails} */
declare function CouponDetails(): CouponDetails;
type CouponDetails = {
    code?: string;
    discount_single_quantity?: number;
    discount_total_quantity?: number;
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
/** @returns {CouponSchedule} */
declare function CouponSchedule(): CouponSchedule;
type CouponSchedule = {
    cron?: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    start?: string;
};
/** @returns {CouponsResponse} */
declare function CouponsResponse(): CouponsResponse;
type CouponsResponse = {
    items?: CouponAdd;
    page?: Page;
};
/** @returns {CouponUpdate} */
declare function CouponUpdate(): CouponUpdate;
type CouponUpdate = {
    _schedule?: CouponSchedule;
    action?: CouponAction;
    author?: CouponAuthor;
    code: string;
    date_meta?: CouponDateMeta;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    ownership: Ownership;
    restrictions?: Restrictions;
    rule: Rule[];
    rule_definition: RuleDefinition;
    state?: State;
    tags?: string[];
    type_slug: string;
    validation?: Validation;
    validity: Validity;
};
/** @returns {CouponValidity} */
declare function CouponValidity(): CouponValidity;
type CouponValidity = {
    code?: string;
    discount?: number;
    display_message_en?: string;
    next_validation_required?: boolean;
    title?: string;
    valid?: boolean;
};
/** @returns {DeleteAddressResponse} */
declare function DeleteAddressResponse(): DeleteAddressResponse;
type DeleteAddressResponse = {
    id?: string;
    is_deleted?: boolean;
};
/** @returns {DeleteCartDetailResponse} */
declare function DeleteCartDetailResponse(): DeleteCartDetailResponse;
type DeleteCartDetailResponse = {
    message?: string;
    /**
     * - True if cart is archived successfully. False
     * if not archived.
     */
    success?: boolean;
};
/** @returns {DeleteCartRequest} */
declare function DeleteCartRequest(): DeleteCartRequest;
type DeleteCartRequest = {
    cart_id_list?: string[];
};
/** @returns {DeliveryCharges} */
declare function DeliveryCharges(): DeliveryCharges;
type DeliveryCharges = {
    charges?: Charges[];
    enabled?: boolean;
};
/** @returns {DiscountOffer} */
declare function DiscountOffer(): DiscountOffer;
type DiscountOffer = {
    apportion_discount?: boolean;
    code?: string;
    discount_amount?: number;
    discount_percentage?: number;
    discount_price?: number;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
    partial_can_ret?: boolean;
};
/** @returns {DiscountRule} */
declare function DiscountRule(): DiscountRule;
type DiscountRule = {
    buy_condition: string;
    discount_type: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
};
/** @returns {DiscountRulesApp} */
declare function DiscountRulesApp(): DiscountRulesApp;
type DiscountRulesApp = {
    /**
     * - Item criteria of promotion
     */
    item_criteria?: any;
    /**
     * - Matched buy rules for promotion
     */
    matched_buy_rules?: string[];
    /**
     * - Offer for promotion
     */
    offer?: any;
    /**
     * - Raw offer details for promotion
     */
    raw_offer?: any;
};
/** @returns {DisplayBreakup} */
declare function DisplayBreakup(): DisplayBreakup;
type DisplayBreakup = {
    currency_code?: string;
    currency_symbol?: string;
    display?: string;
    key?: string;
    message?: string[];
    value?: number;
};
/** @returns {DisplayMeta} */
declare function DisplayMeta(): DisplayMeta;
type DisplayMeta = {
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    description?: string;
    remove?: DisplayMetaDict;
    subtitle?: string;
    title?: string;
};
/** @returns {DisplayMeta1} */
declare function DisplayMeta1(): DisplayMeta1;
type DisplayMeta1 = {
    description?: string;
    name?: string;
    offer_label?: string;
    offer_text?: string;
};
/** @returns {DisplayMetaDict} */
declare function DisplayMetaDict(): DisplayMetaDict;
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
/** @returns {Files} */
declare function Files(): Files;
type Files = {
    key: string;
    values: string[];
};
/** @returns {FreeGiftItem} */
declare function FreeGiftItem(): FreeGiftItem;
type FreeGiftItem = {
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
    /**
     * - Item name
     */
    item_name?: string;
    /**
     * - Item price details
     */
    item_price_details?: any;
    /**
     * - Item slug
     */
    item_slug?: string;
};
/** @returns {GeoLocation} */
declare function GeoLocation(): GeoLocation;
type GeoLocation = {
    latitude?: number;
    longitude?: number;
};
/** @returns {GetCouponResponse} */
declare function GetCouponResponse(): GetCouponResponse;
type GetCouponResponse = {
    available_coupon_list?: Coupon[];
    page?: PageCoupon;
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
     * - Short shareable final url
     */
    share_url?: string;
    /**
     * - Short url unique id
     */
    token?: string;
};
/** @returns {Identifier} */
declare function Identifier(): Identifier;
type Identifier = {
    article_id?: string[];
    brand_id?: number[];
    category_id?: number[];
    collection_id?: string[];
    company_id?: number[];
    email_domain?: string[];
    exclude_brand_id?: number[];
    item_id?: number[];
    store_id?: number[];
    user_id?: string[];
};
/** @returns {ItemCriteria} */
declare function ItemCriteria(): ItemCriteria;
type ItemCriteria = {
    all_items?: boolean;
    available_zones?: string[];
    buy_rules?: string[];
    cart_quantity?: CompareObject;
    cart_total?: CompareObject;
    cart_unique_item_amount?: CompareObject;
    cart_unique_item_quantity?: CompareObject;
    item_brand?: number[];
    item_category?: number[];
    item_company?: number[];
    item_department?: number[];
    item_exclude_brand?: number[];
    item_exclude_category?: number[];
    item_exclude_company?: number[];
    item_exclude_department?: number[];
    item_exclude_id?: number[];
    item_exclude_l1_category?: number[];
    item_exclude_l2_category?: number[];
    item_exclude_sku?: string[];
    item_exclude_store?: number[];
    item_id?: number[];
    item_l1_category?: number[];
    item_l2_category?: number[];
    item_size?: string[];
    item_sku?: string[];
    item_store?: number[];
    item_tags?: string[];
};
/** @returns {LoyaltyPoints} */
declare function LoyaltyPoints(): LoyaltyPoints;
type LoyaltyPoints = {
    applicable?: number;
    description?: string;
    is_applied?: boolean;
    total?: number;
};
/** @returns {MultiCartResponse} */
declare function MultiCartResponse(): MultiCartResponse;
type MultiCartResponse = {
    data?: CartList[];
    success?: boolean;
};
/** @returns {MultiTenderPaymentMeta} */
declare function MultiTenderPaymentMeta(): MultiTenderPaymentMeta;
type MultiTenderPaymentMeta = {
    current_status?: string;
    extra_meta?: any;
    order_id?: string;
    payment_gateway?: string;
    payment_id?: string;
};
/** @returns {MultiTenderPaymentMethod} */
declare function MultiTenderPaymentMethod(): MultiTenderPaymentMethod;
type MultiTenderPaymentMethod = {
    /**
     * - Payment amount
     */
    amount: number;
    meta?: MultiTenderPaymentMeta;
    mode: string;
    /**
     * - Payment mode name
     */
    name?: string;
};
/** @returns {OpenapiCartDetailsRequest} */
declare function OpenapiCartDetailsRequest(): OpenapiCartDetailsRequest;
type OpenapiCartDetailsRequest = {
    cart_items: CartItem[];
};
/** @returns {OpenapiCartDetailsResponse} */
declare function OpenapiCartDetailsResponse(): OpenapiCartDetailsResponse;
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    items?: CartProductInfo[];
    message?: string;
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
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    items?: CartProductInfo[];
    message?: string;
};
/** @returns {OpenApiCheckoutResponse} */
declare function OpenApiCheckoutResponse(): OpenApiCheckoutResponse;
type OpenApiCheckoutResponse = {
    message?: string;
    /**
     * - Fynd order id
     */
    order_id: string;
    /**
     * - Order id sent in request
     */
    order_ref_id?: string;
    success?: boolean;
};
/** @returns {OpenApiErrorResponse} */
declare function OpenApiErrorResponse(): OpenApiErrorResponse;
type OpenApiErrorResponse = {
    /**
     * - Contains field name which has error as key and
     * error message as value
     */
    errors?: any;
    message?: string;
    success?: boolean;
};
/** @returns {OpenApiFiles} */
declare function OpenApiFiles(): OpenApiFiles;
type OpenApiFiles = {
    key: string;
    values: string[];
};
/** @returns {OpenApiOrderItem} */
declare function OpenApiOrderItem(): OpenApiOrderItem;
type OpenApiOrderItem = {
    amount_paid: number;
    cashback_applied: number;
    cod_charges: number;
    coupon_effective_discount: number;
    delivery_charges: number;
    discount: number;
    employee_discount?: number;
    extra_meta?: any;
    files?: OpenApiFiles[];
    loyalty_discount?: number;
    meta?: CartItemMeta;
    payment_methods: MultiTenderPaymentMethod[];
    price_effective: number;
    price_marked: number;
    product_id: number;
    quantity?: number;
    size: string;
};
/** @returns {OpenApiPlatformCheckoutReq} */
declare function OpenApiPlatformCheckoutReq(): OpenApiPlatformCheckoutReq;
type OpenApiPlatformCheckoutReq = {
    affiliate_order_id?: string;
    billing_address: ShippingAddress;
    cart_items: OpenApiOrderItem[];
    cart_value: number;
    cashback_applied: number;
    cod_charges: number;
    comment?: string;
    coupon?: string;
    coupon_code: string;
    coupon_value: number;
    currency_code?: string;
    delivery_charges: number;
    employee_discount?: any;
    files?: OpenApiFiles[];
    gstin?: string;
    loyalty_discount?: number;
    order_id?: string;
    payment_methods: MultiTenderPaymentMethod[];
    payment_mode?: string;
    shipping_address?: ShippingAddress;
};
/** @returns {OperationErrorResponse} */
declare function OperationErrorResponse(): OperationErrorResponse;
type OperationErrorResponse = {
    message?: string;
    success?: boolean;
};
/** @returns {OverrideCartItem} */
declare function OverrideCartItem(): OverrideCartItem;
type OverrideCartItem = {
    amount_paid: number;
    discount: number;
    extra_meta?: any;
    item_id: number;
    price_effective: number;
    price_marked: number;
    promo_list?: OverrideCartItemPromo[];
    quantity?: number;
    seller_identifier?: string;
    size: string;
};
/** @returns {OverrideCartItemPromo} */
declare function OverrideCartItemPromo(): OverrideCartItemPromo;
type OverrideCartItemPromo = {
    item_list?: any[];
    promo_amount: string;
    promo_desc?: string;
    promo_id: string;
    rwrd_tndr?: string;
};
/** @returns {OverrideCheckoutReq} */
declare function OverrideCheckoutReq(): OverrideCheckoutReq;
type OverrideCheckoutReq = {
    aggregator: string;
    billing_address?: any;
    cart_id: string;
    cart_items: OverrideCartItem[];
    currency_code: string;
    merchant_code: string;
    order_type: string;
    ordering_store?: number;
    payment_identifier: string;
    payment_mode: string;
    shipping_address?: any;
};
/** @returns {OverrideCheckoutResponse} */
declare function OverrideCheckoutResponse(): OverrideCheckoutResponse;
type OverrideCheckoutResponse = {
    cart: any;
    data: any;
    message: string;
    order_id: string;
    success: string;
};
/** @returns {Ownership} */
declare function Ownership(): Ownership;
type Ownership = {
    payable_by: string;
    payable_category: string;
};
/** @returns {Ownership1} */
declare function Ownership1(): Ownership1;
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
/** @returns {Ownership2} */
declare function Ownership2(): Ownership2;
type Ownership2 = {
    /**
     * - Promo amount bearable party
     */
    payable_by?: string;
    /**
     * - Promo amount payable category
     */
    payable_category?: string;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {PageCoupon} */
declare function PageCoupon(): PageCoupon;
type PageCoupon = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    total?: number;
    total_item_count?: number;
};
/** @returns {PaymentAllowValue} */
declare function PaymentAllowValue(): PaymentAllowValue;
type PaymentAllowValue = {
    max?: number;
};
/** @returns {PaymentAllowValue1} */
declare function PaymentAllowValue1(): PaymentAllowValue1;
type PaymentAllowValue1 = {
    max?: number;
};
/** @returns {PaymentCouponValidate} */
declare function PaymentCouponValidate(): PaymentCouponValidate;
type PaymentCouponValidate = {
    coupon_validity?: CouponValidity;
    message?: string;
    success: boolean;
};
/** @returns {PaymentMeta} */
declare function PaymentMeta(): PaymentMeta;
type PaymentMeta = {
    merchant_code?: string;
    payment_gateway?: string;
    payment_identifier?: string;
    type?: string;
};
/** @returns {PaymentMethod} */
declare function PaymentMethod(): PaymentMethod;
type PaymentMethod = {
    amount?: number;
    mode: string;
    name?: string;
    payment?: string;
    payment_meta: PaymentMeta;
};
/** @returns {PaymentModes} */
declare function PaymentModes(): PaymentModes;
type PaymentModes = {
    codes?: string[];
    iins?: string[];
    networks?: string[];
    types?: string[];
    uses?: PaymentAllowValue;
};
/** @returns {PaymentSelectionLock} */
declare function PaymentSelectionLock(): PaymentSelectionLock;
type PaymentSelectionLock = {
    default_options?: string;
    enabled?: boolean;
    payment_identifier?: string;
};
/** @returns {PickupStoreDetail} */
declare function PickupStoreDetail(): PickupStoreDetail;
type PickupStoreDetail = {
    address?: string;
    address_type?: string;
    area?: string;
    area_code?: string;
    area_code_slug?: string;
    city?: string;
    country?: string;
    email?: string;
    id?: number;
    landmark?: string;
    name?: string;
    phone?: string;
    pincode?: number;
    state?: string;
    store_code?: string;
    uid?: number;
};
/** @returns {PlatformAddCartRequest} */
declare function PlatformAddCartRequest(): PlatformAddCartRequest;
type PlatformAddCartRequest = {
    items?: AddProductCart[];
    new_cart?: boolean;
    user_id?: string;
};
/** @returns {PlatformAddress} */
declare function PlatformAddress(): PlatformAddress;
type PlatformAddress = {
    address?: string;
    address_type?: string;
    area?: string;
    area_code?: string;
    area_code_slug?: string;
    cart_id?: string;
    checkout_mode?: string;
    city?: string;
    country?: string;
    country_code?: string;
    created_by_user_id?: string;
    email?: string;
    geo_location?: GeoLocation;
    google_map_point?: any;
    id?: string;
    is_active?: boolean;
    is_default_address?: boolean;
    landmark?: string;
    meta?: any;
    name?: string;
    phone?: string;
    state?: string;
    tags?: string[];
    user_id?: string;
};
/** @returns {PlatformCartCheckoutDetailRequest} */
declare function PlatformCartCheckoutDetailRequest(): PlatformCartCheckoutDetailRequest;
type PlatformCartCheckoutDetailRequest = {
    address_id?: string;
    aggregator?: string;
    billing_address?: any;
    billing_address_id?: string;
    callback_url?: string;
    checkout_mode?: string;
    delivery_address?: any;
    device_id?: string;
    employee_code?: string;
    extra_meta?: any;
    /**
     * - List of file url
     */
    files?: Files[];
    id: string;
    merchant_code?: string;
    meta?: any;
    order_type: string;
    ordering_store?: number;
    payment_auto_confirm?: boolean;
    payment_identifier?: string;
    payment_mode: string;
    payment_params?: any;
    pick_at_store_uid?: number;
    pos?: boolean;
    staff?: StaffCheckout;
    user_id: string;
};
/** @returns {PlatformCartCheckoutDetailV2Request} */
declare function PlatformCartCheckoutDetailV2Request(): PlatformCartCheckoutDetailV2Request;
type PlatformCartCheckoutDetailV2Request = {
    address_id?: string;
    aggregator?: string;
    billing_address?: any;
    billing_address_id?: string;
    callback_url?: string;
    checkout_mode?: string;
    custom_meta?: any;
    delivery_address?: any;
    device_id?: string;
    employee_code?: string;
    extra_meta?: any;
    /**
     * - List of file url
     */
    files?: Files[];
    id: string;
    merchant_code?: string;
    meta?: any;
    order_type: string;
    ordering_store?: number;
    payment_auto_confirm?: boolean;
    payment_identifier?: string;
    payment_methods: PaymentMethod[];
    payment_mode?: string;
    payment_params?: any;
    pick_at_store_uid?: number;
    pos?: boolean;
    staff?: StaffCheckout;
    user_id: string;
};
/** @returns {PlatformCartMetaRequest} */
declare function PlatformCartMetaRequest(): PlatformCartMetaRequest;
type PlatformCartMetaRequest = {
    checkout_mode?: string;
    comment?: string;
    gift_details?: any;
    gstin?: string;
    pan_no?: string;
    /**
     * - Customer contact details for
     * customer pickup at store
     */
    pick_up_customer_details?: any;
    /**
     * - Staff user id
     */
    staff_user_id?: string;
};
/** @returns {PlatformCartShipmentsResponse} */
declare function PlatformCartShipmentsResponse(): PlatformCartShipmentsResponse;
type PlatformCartShipmentsResponse = {
    applied_promo_details?: AppliedPromotion[];
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    checkout_mode?: string;
    comment?: string;
    coupon_text?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    error?: boolean;
    gstin?: string;
    id?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    message?: string;
    pan_config?: any;
    pan_no?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    shipments?: PlatformShipmentResponse[];
    staff_user_id?: string;
};
/** @returns {PlatformGetAddressesResponse} */
declare function PlatformGetAddressesResponse(): PlatformGetAddressesResponse;
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
/** @returns {PlatformSelectCartAddressRequest} */
declare function PlatformSelectCartAddressRequest(): PlatformSelectCartAddressRequest;
type PlatformSelectCartAddressRequest = {
    billing_address_id?: string;
    cart_id?: string;
    checkout_mode?: string;
    id?: string;
    user_id?: string;
};
/** @returns {PlatformShipmentResponse} */
declare function PlatformShipmentResponse(): PlatformShipmentResponse;
type PlatformShipmentResponse = {
    articles?: ShipmentArticle[];
    box_type?: string;
    dp_id?: string;
    dp_options?: any;
    fulfillment_id?: number;
    fulfillment_type?: string;
    items?: CartProductInfo[];
    order_type?: string;
    promise?: ShipmentPromise;
    shipment_type?: string;
    shipments?: number;
};
/** @returns {PlatformUpdateCartRequest} */
declare function PlatformUpdateCartRequest(): PlatformUpdateCartRequest;
type PlatformUpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
    user_id?: string;
};
/** @returns {PostOrder} */
declare function PostOrder(): PostOrder;
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
/** @returns {PostOrder1} */
declare function PostOrder1(): PostOrder1;
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
/** @returns {PriceAdjustment} */
declare function PriceAdjustment(): PriceAdjustment;
type PriceAdjustment = {
    allowed_refund?: boolean;
    apply_expiry?: string;
    article_ids: Article[];
    article_level_distribution: boolean;
    cart_id: string;
    cart_value?: number;
    collection: Collection;
    id?: string;
    is_authenticated: boolean;
    message: string;
    meta?: any;
    type: string;
    value: number;
};
/** @returns {PriceAdjustmentAdd} */
declare function PriceAdjustmentAdd(): PriceAdjustmentAdd;
type PriceAdjustmentAdd = {
    allowed_refund?: boolean;
    apply_expiry?: string;
    article_ids: Article[];
    article_level_distribution: boolean;
    cart_id: string;
    cart_value?: number;
    collection: Collection;
    created_by?: string;
    is_authenticated: boolean;
    message: string;
    meta?: any;
    type: string;
    value: number;
};
/** @returns {PriceAdjustmentResponse} */
declare function PriceAdjustmentResponse(): PriceAdjustmentResponse;
type PriceAdjustmentResponse = {
    data?: PriceAdjustment;
};
/** @returns {PriceAdjustmentUpdate} */
declare function PriceAdjustmentUpdate(): PriceAdjustmentUpdate;
type PriceAdjustmentUpdate = {
    allowed_refund?: boolean;
    apply_expiry?: string;
    article_ids: Article[];
    article_level_distribution: boolean;
    cart_id: string;
    cart_value?: number;
    collection: Collection;
    is_authenticated: boolean;
    message: string;
    meta?: any;
    modified_by?: string;
    type: string;
    value: number;
};
/** @returns {PriceRange} */
declare function PriceRange(): PriceRange;
type PriceRange = {
    max?: number;
    min?: number;
};
/** @returns {ProductAction} */
declare function ProductAction(): ProductAction;
type ProductAction = {
    query?: ActionQuery;
    type?: string;
    url?: string;
};
/** @returns {ProductArticle} */
declare function ProductArticle(): ProductArticle;
type ProductArticle = {
    _custom_json?: any;
    cart_item_meta?: any;
    extra_meta?: any;
    gift_card?: any;
    identifier?: any;
    is_gift_visible?: boolean;
    meta?: any;
    mto_quantity?: number;
    parent_item_identifiers?: any;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
    quantity?: number;
    seller?: BaseInfo;
    seller_identifier?: string;
    size?: string;
    store?: StoreInfo;
    type?: string;
    uid?: string;
};
/** @returns {ProductAvailability} */
declare function ProductAvailability(): ProductAvailability;
type ProductAvailability = {
    available_sizes?: ProductAvailabilitySize[];
    deliverable?: boolean;
    is_valid?: boolean;
    other_store_quantity?: number;
    out_of_stock?: boolean;
    sizes?: string[];
};
/** @returns {ProductAvailabilitySize} */
declare function ProductAvailabilitySize(): ProductAvailabilitySize;
type ProductAvailabilitySize = {
    display?: string;
    is_available?: boolean;
    value?: string;
};
/** @returns {ProductImage} */
declare function ProductImage(): ProductImage;
type ProductImage = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
/** @returns {ProductPrice} */
declare function ProductPrice(): ProductPrice;
type ProductPrice = {
    add_on?: number;
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
    marked?: number;
    selling?: number;
};
/** @returns {ProductPriceInfo} */
declare function ProductPriceInfo(): ProductPriceInfo;
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
/** @returns {PromiseFormatted} */
declare function PromiseFormatted(): PromiseFormatted;
type PromiseFormatted = {
    max?: string;
    min?: string;
};
/** @returns {PromiseTimestamp} */
declare function PromiseTimestamp(): PromiseTimestamp;
type PromiseTimestamp = {
    max?: number;
    min?: number;
};
/** @returns {PromoMeta} */
declare function PromoMeta(): PromoMeta;
type PromoMeta = {
    message?: string;
};
/** @returns {PromotionAction} */
declare function PromotionAction(): PromotionAction;
type PromotionAction = {
    action_date: string;
    action_type: string;
};
/** @returns {PromotionAdd} */
declare function PromotionAdd(): PromotionAdd;
type PromotionAdd = {
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    application_id: string;
    apply_all_discount?: boolean;
    apply_exclusive?: string;
    apply_priority?: number;
    author?: PromotionAuthor;
    buy_rules: any;
    /**
     * - Only available for Contract pricing and
     * Ladder pricing promotion type
     */
    calculate_on?: string;
    code?: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    mode: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    promo_group: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    stackable?: boolean;
    visiblility?: Visibility;
};
/** @returns {PromotionAuthor} */
declare function PromotionAuthor(): PromotionAuthor;
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
/** @returns {PromotionDateMeta} */
declare function PromotionDateMeta(): PromotionDateMeta;
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
/** @returns {PromotionListItem} */
declare function PromotionListItem(): PromotionListItem;
type PromotionListItem = {
    /**
     * - Custom data stored in promotion
     */
    _custom_json?: any;
    /**
     * - Promotion id
     */
    _id?: string;
    _schedule?: PromotionSchedule;
    /**
     * - App id in which promotion will be used
     */
    application_id: string;
    /**
     * - Prevents more than one promotion discounts
     */
    apply_all_discount?: boolean;
    /**
     * - Doesn't allow other promotion after
     * current promotion applied on cart or article
     */
    apply_exclusive?: string;
    /**
     * - Priority based on which promotion are
     * applied on articles
     */
    apply_priority?: number;
    author?: PromotionAuthor;
    /**
     * - Buy rules for the promotion
     */
    buy_rules: any;
    /**
     * - Only available for Contract pricing and
     * Ladder pricing promotion type
     */
    calculate_on?: string;
    /**
     * - Promotion code
     */
    code?: string;
    /**
     * - Currency used for promotion
     */
    currency?: string;
    date_meta?: PromotionDateMeta;
    /**
     * - Discount rules based on which
     * promotion will be applied
     */
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    /**
     * - Promotion mode
     */
    mode: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    /**
     * - Group into which promotion fall
     */
    promo_group: string;
    /**
     * - Type of the promotion
     */
    promotion_type: string;
    restrictions?: Restrictions1;
    /**
     * - Allows more than one promotion to get
     * combined benefits
     */
    stackable?: boolean;
    visiblility?: Visibility;
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
/** @returns {PromotionPaymentModes} */
declare function PromotionPaymentModes(): PromotionPaymentModes;
type PromotionPaymentModes = {
    codes?: string[];
    type: string;
    uses?: PaymentAllowValue1;
};
/** @returns {PromotionSchedule} */
declare function PromotionSchedule(): PromotionSchedule;
type PromotionSchedule = {
    cron?: string;
    duration?: number;
    end: string;
    next_schedule?: any[];
    published: boolean;
    start: string;
};
/** @returns {PromotionsResponse} */
declare function PromotionsResponse(): PromotionsResponse;
type PromotionsResponse = {
    items?: PromotionListItem[];
    page?: Page;
};
/** @returns {PromotionUpdate} */
declare function PromotionUpdate(): PromotionUpdate;
type PromotionUpdate = {
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    application_id: string;
    apply_all_discount?: boolean;
    apply_exclusive?: string;
    apply_priority?: number;
    author?: PromotionAuthor;
    buy_rules: any;
    /**
     * - Only available for Contract pricing and
     * Ladder pricing promotion type
     */
    calculate_on?: string;
    code?: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    mode: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    promo_group: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    stackable?: boolean;
    visiblility?: Visibility;
};
/** @returns {RawBreakup} */
declare function RawBreakup(): RawBreakup;
type RawBreakup = {
    cod_charge?: number;
    convenience_fee?: number;
    coupon?: number;
    delivery_charge?: number;
    discount?: number;
    fynd_cash?: number;
    gift_card?: number;
    gst_charges?: number;
    mrp_total?: number;
    subtotal?: number;
    total?: number;
    vog?: number;
    you_saved?: number;
};
/** @returns {Restrictions} */
declare function Restrictions(): Restrictions;
type Restrictions = {
    bulk_bundle?: BulkBundleRestriction;
    coupon_allowed?: boolean;
    ordering_stores?: number[];
    payments?: any;
    platforms?: string[];
    post_order?: PostOrder;
    price_range?: PriceRange;
    user_groups?: number[];
    user_type?: string;
    uses?: UsesRestriction;
};
/** @returns {Restrictions1} */
declare function Restrictions1(): Restrictions1;
type Restrictions1 = {
    anonymous_users?: boolean;
    order_quantity?: number;
    ordering_stores?: number[];
    payments?: PromotionPaymentModes[];
    platforms?: string[];
    post_order?: PostOrder1;
    user_groups?: number[];
    user_id?: string[];
    user_registered?: any;
    uses: UsesRestriction1;
};
/** @returns {Rule} */
declare function Rule(): Rule;
type Rule = {
    discount_qty?: number;
    key?: number;
    max?: number;
    min?: number;
    value?: number;
};
/** @returns {RuleDefinition} */
declare function RuleDefinition(): RuleDefinition;
type RuleDefinition = {
    applicable_on: string;
    auto_apply?: boolean;
    calculate_on: string;
    currency_code?: string;
    is_exact?: boolean;
    scope?: string[];
    type: string;
    value_type: string;
};
/** @returns {SaveAddressResponse} */
declare function SaveAddressResponse(): SaveAddressResponse;
type SaveAddressResponse = {
    id?: string;
    is_default_address?: boolean;
    success?: boolean;
};
/** @returns {SharedCart} */
declare function SharedCart(): SharedCart;
type SharedCart = {
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    cart_id?: number;
    checkout_mode?: string;
    comment?: string;
    coupon_text?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    gstin?: string;
    id?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    message?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    shared_cart_details?: SharedCartDetails;
    uid?: string;
};
/** @returns {SharedCartDetails} */
declare function SharedCartDetails(): SharedCartDetails;
type SharedCartDetails = {
    created_on?: string;
    /**
     * - Meta data sent while generating share cart link
     */
    meta?: any;
    /**
     * - Share link device and other source information
     */
    source?: any;
    /**
     * - Short link id
     */
    token?: string;
    /**
     * - User details of who generated share link
     */
    user?: any;
};
/** @returns {SharedCartResponse} */
declare function SharedCartResponse(): SharedCartResponse;
type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
/** @returns {ShipmentArticle} */
declare function ShipmentArticle(): ShipmentArticle;
type ShipmentArticle = {
    article_id?: string;
    meta?: string;
    quantity?: string;
};
/** @returns {ShipmentPromise} */
declare function ShipmentPromise(): ShipmentPromise;
type ShipmentPromise = {
    formatted?: PromiseFormatted;
    timestamp?: PromiseTimestamp;
};
/** @returns {ShippingAddress} */
declare function ShippingAddress(): ShippingAddress;
type ShippingAddress = {
    address?: string;
    address_type?: string;
    area?: string;
    area_code: string;
    area_code_slug?: string;
    city?: string;
    country?: string;
    country_code?: string;
    country_iso_code?: string;
    country_phone_code?: string;
    email?: string;
    landmark?: string;
    meta?: any;
    name?: string;
    phone?: number;
    pincode?: number;
    state?: string;
};
/** @returns {StaffCheckout} */
declare function StaffCheckout(): StaffCheckout;
type StaffCheckout = {
    _id: string;
    employee_code?: string;
    first_name: string;
    last_name: string;
    user: string;
};
/** @returns {State} */
declare function State(): State;
type State = {
    is_archived?: boolean;
    is_display?: boolean;
    is_public?: boolean;
};
/** @returns {StoreDetailsResponse} */
declare function StoreDetailsResponse(): StoreDetailsResponse;
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
/** @returns {StoreInfo} */
declare function StoreInfo(): StoreInfo;
type StoreInfo = {
    name?: string;
    store_code?: string;
    uid?: number;
};
/** @returns {SuccessMessage} */
declare function SuccessMessage(): SuccessMessage;
type SuccessMessage = {
    message?: string;
    success?: boolean;
};
/** @returns {Tags} */
declare function Tags(): Tags;
type Tags = {
    tags?: any;
};
/** @returns {UpdateAddressResponse} */
declare function UpdateAddressResponse(): UpdateAddressResponse;
type UpdateAddressResponse = {
    id?: string;
    is_default_address?: boolean;
    is_updated?: boolean;
    success?: boolean;
};
/** @returns {UpdateCartDetailResponse} */
declare function UpdateCartDetailResponse(): UpdateCartDetailResponse;
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    message?: string;
    /**
     * - True if all items are added successfully.
     * False if partially added or not added.
     */
    success?: boolean;
};
/** @returns {UpdateCartPaymentRequest} */
declare function UpdateCartPaymentRequest(): UpdateCartPaymentRequest;
type UpdateCartPaymentRequest = {
    address_id?: string;
    aggregator_name?: string;
    id?: string;
    merchant_code?: string;
    payment_identifier?: string;
    payment_mode?: string;
};
/** @returns {UpdateCartPaymentRequestV2} */
declare function UpdateCartPaymentRequestV2(): UpdateCartPaymentRequestV2;
type UpdateCartPaymentRequestV2 = {
    address_id?: string;
    aggregator_name?: string;
    id?: string;
    merchant_code?: string;
    payment_identifier?: string;
    payment_methods?: PaymentMethod[];
    payment_mode?: string;
};
/** @returns {UpdateCartRequest} */
declare function UpdateCartRequest(): UpdateCartRequest;
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
/** @returns {UpdateCartShipmentItem} */
declare function UpdateCartShipmentItem(): UpdateCartShipmentItem;
type UpdateCartShipmentItem = {
    /**
     * - Article mongo id
     */
    article_uid: string;
    /**
     * - Quantity of product in shipment
     */
    quantity?: number;
    /**
     * - Shipment delivery type
     */
    shipment_type: string;
};
/** @returns {UpdateCartShipmentRequest} */
declare function UpdateCartShipmentRequest(): UpdateCartShipmentRequest;
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
/** @returns {UpdateProductCart} */
declare function UpdateProductCart(): UpdateProductCart;
type UpdateProductCart = {
    _custom_json?: any;
    article_id?: string;
    extra_meta?: any;
    identifiers: CartProductIdentifer;
    item_id?: number;
    item_index?: number;
    item_size?: string;
    meta?: any;
    parent_item_identifiers?: any;
    quantity?: number;
};
/** @returns {UpdateUserCartMapping} */
declare function UpdateUserCartMapping(): UpdateUserCartMapping;
type UpdateUserCartMapping = {
    user_id: string;
};
/** @returns {UserCartMappingResponse} */
declare function UserCartMappingResponse(): UserCartMappingResponse;
type UserCartMappingResponse = {
    applied_promo_details?: AppliedPromotion[];
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    checkout_mode?: string;
    comment?: string;
    coupon_text?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    gstin?: string;
    id?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    message?: string;
    pan_config?: any;
    pan_no?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    user?: UserInfo;
};
/** @returns {UserInfo} */
declare function UserInfo(): UserInfo;
type UserInfo = {
    _id?: string;
    created_at?: string;
    external_id?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    mobile?: string;
    modified_on?: string;
    uid?: string;
};
/** @returns {UserRegistered} */
declare function UserRegistered(): UserRegistered;
type UserRegistered = {
    end?: string;
    start?: string;
};
/** @returns {UsesRemaining} */
declare function UsesRemaining(): UsesRemaining;
type UsesRemaining = {
    app?: number;
    total?: number;
    user?: number;
};
/** @returns {UsesRemaining1} */
declare function UsesRemaining1(): UsesRemaining1;
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
/** @returns {UsesRestriction} */
declare function UsesRestriction(): UsesRestriction;
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
/** @returns {UsesRestriction1} */
declare function UsesRestriction1(): UsesRestriction1;
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
/** @returns {Validation} */
declare function Validation(): Validation;
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
/** @returns {Validity} */
declare function Validity(): Validity;
type Validity = {
    priority?: number;
};
/** @returns {Visibility} */
declare function Visibility(): Visibility;
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
