export = CartApplicationModel;
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
 * @typedef PromoDiscountRuleOffer
 * @property {number} [max_offer_quantity]
 * @property {number} [discount_percentage]
 * @property {number} [discount_amount]
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
 * @property {boolean} [all_items]
 */
/**
 * @typedef DiscountRulesApp
 * @property {PromoDiscountRuleOffer} [offer]
 * @property {PromoDiscountRuleRawOffer} [raw_offer]
 * @property {PromoDiscountRuleItemCriteria} [item_criteria]
 * @property {string[]} [matched_buy_rules] - Matched buy rules for promotion
 */
/**
 * @typedef Ownership
 * @property {string} [payable_category] - Promo amount payable category
 * @property {string} [payable_by] - Promo amount bearable party
 */
/**
 * @typedef FreeGiftItem
 * @property {string} [item_slug] - Item slug
 * @property {string} [item_name] - Item name
 * @property {Object} [item_price_details] - Item price details
 * @property {string} [item_brand_name] - Item brand name
 * @property {number} [item_id] - Item id
 * @property {string[]} [item_images_url] - Item images URL
 */
/**
 * @typedef AppliedFreeArticles
 * @property {string} [parent_item_identifier] - Parent item identifier for free article
 * @property {number} [quantity] - Free article quantity
 * @property {string} [article_id] - Free article id
 * @property {FreeGiftItem} [free_gift_item_details] - Free gift items details
 */
/**
 * @typedef Ownership2
 * @property {string} [payable_category] - Promo amount payable category
 * @property {string} [payable_by] - Promo amount bearable party
 */
/**
 * @typedef AppliedPromotion
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
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled]
 * @property {string} [default_options]
 * @property {string} [payment_identifier]
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
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
 */
/**
 * @typedef BaseInfo
 * @property {number} [uid]
 * @property {string} [name]
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
 * @typedef CartProductIdentifer
 * @property {string} [identifier] - Article idenfier generated by cart
 */
/**
 * @typedef PromoMeta
 * @property {string} [message]
 */
/**
 * @typedef ChargesAmount
 * @property {number} [value] - This is the value of amount added
 * @property {string} [currency] - This is destination currency of value
 */
/**
 * @typedef Charges
 * @property {Object} [meta] - This object contains the meta data realted to
 *   charges price adjustment
 * @property {ChargesAmount} [amount]
 * @property {string} [name] - This is the name of the charge applied
 * @property {boolean} [allow_refund] - This boolean value defines that refund
 *   is allowed or not for the charge
 * @property {string} [code] - This is the code of the charge applied
 * @property {string} [type] - This is the type of the charge applied
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
 * @property {ProductPrice} [base]
 * @property {ProductPrice} [converted]
 */
/**
 * @typedef ProductPricePerUnit
 * @property {string} [currency_symbol]
 * @property {number} [selling_price]
 * @property {string} [currency_code]
 * @property {number} [add_on]
 * @property {number} [effective]
 * @property {number} [marked]
 */
/**
 * @typedef ProductPricePerUnitInfo
 * @property {ProductPricePerUnit} [base]
 * @property {ProductPricePerUnit} [converted]
 */
/**
 * @typedef ProductAvailabilitySize
 * @property {string} [display]
 * @property {string} [value]
 * @property {boolean} [is_available]
 */
/**
 * @typedef ProductAvailability
 * @property {boolean} [out_of_stock]
 * @property {boolean} [deliverable]
 * @property {ProductAvailabilitySize[]} [available_sizes]
 * @property {boolean} [is_valid]
 * @property {number} [other_store_quantity]
 * @property {string[]} [sizes]
 */
/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug] - Contains list of product slug
 */
/**
 * @typedef ProductAction
 * @property {ActionQuery} [query]
 * @property {string} [url]
 * @property {string} [type]
 */
/**
 * @typedef Tags
 * @property {Object} [tags]
 */
/**
 * @typedef ProductImage
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
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
 * @typedef CouponDetails
 * @property {number} [discount_total_quantity]
 * @property {number} [discount_single_quantity]
 * @property {string} [code]
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
 * @property {number} [seller_count]
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
 * @property {CustomCart} [custom_cart]
 * @property {boolean} [is_pan_received]
 * @property {Object} [pan_config]
 */
/**
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */
/**
 * @typedef AddProductCart
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {number} [seller_id]
 * @property {string} [price_factory_type_id]
 * @property {Object[]} [parent_item_identifiers]
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
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 * @property {boolean} [new_cart]
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
 * @property {Object} [extra_meta]
 * @property {Object} [_custom_json]
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {number} [item_index]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [article_id]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [price_factory_type_id]
 * @property {number} [item_id]
 * @property {Object} [meta]
 */
/**
 * @typedef UpdateCartRequest
 * @property {UpdateProductCart[]} [items]
 * @property {string} operation
 */
/**
 * @typedef UpdateCartDetailResponse
 * @property {string} [message]
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [success] - True if all items are added successfully.
 *   false if partially added or not added.
 */
/**
 * @typedef DeleteCartDetailResponse
 * @property {string} [message]
 * @property {boolean} [success] - True if cart is archived successfully. false
 *   if not archived.
 */
/**
 * @typedef CartItemCountResponse
 * @property {number} [user_cart_items_count] - Item count present in cart
 */
/**
 * @typedef CartItemCountResponseV2
 * @property {number} [user_all_cart_articles_quantity_count]
 * @property {number} [user_all_cart_article_count]
 * @property {Object} [custom_cart_count]
 * @property {Object[]} [custom_cart_ordered_count]
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
 * @property {PageCoupon} [page]
 * @property {Coupon[]} [available_coupon_list]
 */
/**
 * @typedef ApplyCouponRequest
 * @property {string} coupon_code - Coupon code to be applied
 */
/**
 * @typedef OfferPrice
 * @property {string} [currency_symbol] - Currency symbol for currency
 * @property {number} [bulk_effective] - Discounted per unit price for current
 *   offer object
 * @property {string} [currency_code] - Currency code for all amounts
 * @property {number} [effective] - Current per unit price of product after
 *   existing deductions
 * @property {number} [marked] - Original price of product
 */
/**
 * @typedef OfferItem
 * @property {OfferPrice} [price]
 * @property {number} [margin] - Percentage value of discount
 * @property {number} [quantity] - Quantity on which offer is applicable
 * @property {boolean} [best] - Is true for best offer from all offers present
 *   for all sellers
 * @property {number} [total] - Total price of offer quantity with discount
 * @property {boolean} [auto_applied] - Whether offer discount is auto applied in cart
 * @property {string} [type] - Offer type
 */
/**
 * @typedef OfferSeller
 * @property {number} [uid] - Seller id
 * @property {string} [name]
 */
/**
 * @typedef BulkPriceOffer
 * @property {OfferItem[]} [offers]
 * @property {OfferSeller} [seller]
 */
/**
 * @typedef BulkPriceResponse
 * @property {BulkPriceOffer[]} [data] - Consist of offers from multiple seller
 */
/**
 * @typedef RewardPointRequest
 * @property {boolean} points
 */
/**
 * @typedef GeoLocation
 * @property {number} [latitude]
 * @property {number} [longitude]
 */
/**
 * @typedef Address
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
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {boolean} [is_anonymous]
 * @property {string} [app_id]
 * @property {string} [expire_at]
 * @property {string} [address_id]
 * @property {string} [store_name]
 */
/**
 * @typedef GetAddressesResponse
 * @property {boolean} [pii_masking]
 * @property {Address[]} [address]
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
 * @property {boolean} [is_updated]
 * @property {string} [id]
 * @property {boolean} [success]
 * @property {boolean} [is_default_address]
 * @property {string} [address_id]
 */
/**
 * @typedef DeleteAddressResponse
 * @property {string} [id]
 * @property {boolean} [is_deleted]
 * @property {string} [address_id]
 */
/**
 * @typedef SelectCartAddressRequest
 * @property {string} [id]
 * @property {string} [billing_address_id]
 * @property {string} [cart_id]
 */
/**
 * @typedef UpdateCartPaymentRequest
 * @property {string} [id]
 * @property {string} [payment_identifier]
 * @property {string} [address_id]
 * @property {string} [merchant_code]
 * @property {string} [aggregator_name]
 * @property {string} [payment_mode]
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
 * @typedef ShipmentResponse
 * @property {number} [shipments]
 * @property {ShipmentPromise} [promise]
 * @property {string} [order_type]
 * @property {string} [box_type]
 * @property {string} [shipment_type]
 * @property {Object} [dp_options]
 * @property {string} [dp_id]
 * @property {CartProductInfo[]} [items]
 * @property {string} [fulfillment_type]
 * @property {number} [fulfillment_id]
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
 * @typedef CartShipmentsResponse
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
 * @property {ShipmentResponse[]} [shipments]
 * @property {boolean} [error]
 * @property {boolean} [is_pan_received]
 */
/**
 * @typedef CartCheckoutCustomMeta
 * @property {string} key
 * @property {string} value
 */
/**
 * @typedef CustomerDetails
 * @property {string} [email]
 * @property {string} mobile
 * @property {string} [name]
 */
/**
 * @typedef StaffCheckout
 * @property {string} [employee_code]
 * @property {string} user
 * @property {string} last_name
 * @property {string} first_name
 * @property {string} _id
 */
/**
 * @typedef CartCheckoutDetailRequest
 * @property {CartCheckoutCustomMeta[]} [custom_meta]
 * @property {Object} [customer_details] - Customer details
 * @property {string} [merchant_code]
 * @property {string} [id]
 * @property {boolean} [payment_auto_confirm]
 * @property {string} payment_mode
 * @property {string} [aggregator]
 * @property {string} [address_id]
 * @property {string} [callback_url]
 * @property {Object} [delivery_address]
 * @property {StaffCheckout} [staff]
 * @property {string} [order_type]
 * @property {number} [ordering_store]
 * @property {Object} [extra_meta]
 * @property {string} [payment_identifier]
 * @property {Object} [billing_address]
 * @property {Object} [payment_params]
 * @property {string} [billing_address_id]
 * @property {Object} [meta]
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
 * @property {string} [payment_confirm_url]
 * @property {string} [app_intercept_url]
 * @property {boolean} [success]
 * @property {string} [callback_url]
 * @property {string} [message]
 * @property {Object} [data]
 * @property {string} [order_id]
 * @property {CheckCart} [cart]
 */
/**
 * @typedef GiftDetail
 * @property {boolean} [is_gift_applied]
 * @property {string} [gift_message]
 */
/**
 * @typedef ArticleGiftDetail
 * @property {GiftDetail} [article_id]
 */
/**
 * @typedef CartMetaRequest
 * @property {string} [gstin]
 * @property {Object} [pick_up_customer_details] - Customer contact details for
 *   customer pickup at store
 * @property {string} [checkout_mode]
 * @property {Object} [gift_details]
 * @property {string} [pan_no]
 * @property {string} [comment]
 * @property {string} [staff_user_id] - Staff user id
 * @property {Object} [delivery_slots]
 */
/**
 * @typedef CartMetaResponse
 * @property {string} [message]
 * @property {boolean} [is_valid]
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
 * @property {string} [token] - Short link id
 * @property {Object} [user] - User details of who generated share link
 * @property {string} [created_on]
 * @property {Object} [source] - Share link device and other source information
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
 * @property {string} [error]
 * @property {SharedCart} [cart]
 */
/**
 * @typedef FreeGiftItems
 * @property {string} [item_slug] - Item slug
 * @property {string} [item_name] - Item name
 * @property {Object} [item_price_details] - Item price details
 * @property {string} [item_brand_name] - Item brand name
 * @property {number} [item_id] - Item id
 * @property {string[]} [item_images_url] - Item images URL
 */
/**
 * @typedef PromotionOffer
 * @property {string} [id] - Promotion id
 * @property {Object} [buy_rules] - Buy rules of promotions
 * @property {string} [offer_text] - Offer title
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
 * @typedef OperationErrorResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef LadderPrice
 * @property {string} [currency_symbol] - Currency symbol for currency
 * @property {number} [offer_price] - Discounted per unit price for current offer object
 * @property {string} [currency_code] - Currency code for all amounts
 * @property {number} [effective] - Current per unit price of product after
 *   existing deductions
 * @property {number} [marked] - Original price of product
 */
/**
 * @typedef LadderOfferItem
 * @property {LadderPrice} [price]
 * @property {number} [margin] - Percentage value of discount
 * @property {number} [max_quantity] - Minimum quantity upto which offer is
 *   applicable. If not present that offer is applicable on all quantities
 * @property {number} [min_quantity] - Minimum quantity from which offer is applicable
 * @property {string} [type] - Offer type
 */
/**
 * @typedef LadderPriceOffer
 * @property {string} [id] - Promotion id
 * @property {Object} [buy_rules] - Buy rules of promotions
 * @property {string} [calculate_on] - If this ladder offer is to be calculated
 *   on MRP or ESP price
 * @property {string} [offer_text] - Offer title
 * @property {string} [promotion_group] - Group of promotion belongs to
 * @property {string} [valid_till] - Datetime ISOString for promotion end date
 * @property {Object[]} [discount_rules] - Discount rules of promotions
 * @property {LadderOfferItem[]} [offer_prices]
 * @property {FreeGiftItems[]} [free_gift_items] - Details of free gift items
 * @property {string} [description] - Offer details including T&C
 */
/**
 * @typedef CurrencyInfo
 * @property {string} [code]
 * @property {string} [symbol]
 */
/**
 * @typedef LadderPriceOffers
 * @property {LadderPriceOffer[]} [available_offers]
 * @property {CurrencyInfo} [currency]
 * @property {number[]} [store_id]
 */
/**
 * @typedef PaymentMeta
 * @property {string} [merchant_code]
 * @property {string} [type]
 * @property {string} [payment_gateway]
 * @property {string} [payment_identifier]
 */
/**
 * @typedef PaymentMethod
 * @property {PaymentMeta} payment_meta
 * @property {string} mode
 * @property {string} [payment]
 * @property {number} [amount]
 * @property {string} [payment_identifier]
 * @property {string} [name]
 * @property {Object} [payment_extra_identifiers]
 */
/**
 * @typedef CartCheckoutDetailV2Request
 * @property {Object} [custom_meta]
 * @property {Object} [customer_details] - Customer details
 * @property {string} [merchant_code]
 * @property {string} [cart_id]
 * @property {string} [id]
 * @property {boolean} [payment_auto_confirm]
 * @property {PaymentMethod[]} payment_methods
 * @property {string} payment_mode
 * @property {string} [aggregator]
 * @property {string} [address_id]
 * @property {string} [callback_url]
 * @property {Object} [delivery_address]
 * @property {StaffCheckout} [staff]
 * @property {string} [order_type]
 * @property {number} [ordering_store]
 * @property {Object} [extra_meta]
 * @property {string} [payment_identifier]
 * @property {Object} [billing_address]
 * @property {Object} [payment_params]
 * @property {string} [billing_address_id]
 * @property {Object} [meta]
 * @property {string} [iin]
 * @property {string} [network]
 * @property {string} [type]
 * @property {string} [card_id]
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
 * @property {string[]} [article_tags]
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
 * @typedef CartConfigDetailObj
 * @property {string} [id]
 * @property {string} [app_id]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {string} [last_modified_by]
 * @property {number} [min_cart_value]
 * @property {number} [max_cart_value]
 * @property {boolean} [bulk_coupons]
 * @property {number} [max_cart_items]
 * @property {string} [gift_display_text]
 * @property {DeliveryChargesConfig} [delivery_charges]
 * @property {boolean} [revenue_engine_coupon]
 * @property {number} [gift_pricing]
 * @property {boolean} [enabled]
 * @property {boolean} [is_active]
 * @property {OrderPlacing} [order_placing]
 * @property {string} [name]
 * @property {string[]} [article_tags]
 * @property {boolean} [allow_coupon_with_rewards]
 * @property {boolean} [gst_input]
 * @property {boolean} [staff_selection]
 * @property {boolean} [placing_for_customer]
 * @property {PanCard} [pan_card]
 * @property {string} [slug]
 * @property {boolean} [is_universal]
 * @property {DeliveryChargesConfig} [international_delivery_charges]
 */
/**
 * @typedef CartConfigDetailResponse
 * @property {boolean} [success]
 * @property {CartConfigDetailObj} [data]
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
 * @property {Address[]} [address]
 * @property {boolean} [pii_masking]
 */
/**
 * @typedef DeleteCartRequest
 * @property {string[]} [cart_id_list]
 */
declare class CartApplicationModel {
}
declare namespace CartApplicationModel {
    export { PromoBuyRuleCartConditions, PromoBuyRuleCompareFieldsTypes, BuyRules, PromoDiscountRuleOffer, PromoDiscountRuleRawOffer, PromoDiscountRuleItemCriteria, DiscountRulesApp, Ownership, FreeGiftItem, AppliedFreeArticles, Ownership2, AppliedPromotion, PaymentSelectionLock, PromiseFormatted, PromiseISOFormat, PromiseTimestamp, ShipmentPromise, BasePrice, ArticleAppliedPriceAdjustment, ArticlePriceInfo, BaseInfo, StoreInfo, ArticleGiftCard, ProductArticle, CartProductIdentifer, PromoMeta, ChargesAmount, Charges, ProductPrice, ProductPriceInfo, ProductPricePerUnit, ProductPricePerUnitInfo, ProductAvailabilitySize, ProductAvailability, ActionQuery, ProductAction, Tags, ProductImage, CategoryInfo, CartProduct, ProductAttributes, CouponDetails, ParentItemIdentifiers, CartItemMOQ, CartItemCustomOrder, CartProductInfo, PriceAdjustmentApplied, CouponBreakup, DisplayBreakup, LoyaltyPoints, RawBreakup, CartBreakup, CartCurrency, CartCouponMedias, CartDetailCoupon, ChargesThreshold, DeliveryChargesConfig, CartCommonConfig, CartAppliedPriceAdjustment, CustomCart, CartDetailResponse, ArticleAssignment, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, DeleteCartDetailResponse, CartItemCountResponse, CartItemCountResponseV2, Coupon, PageCoupon, GetCouponResponse, ApplyCouponRequest, OfferPrice, OfferItem, OfferSeller, BulkPriceOffer, BulkPriceResponse, RewardPointRequest, GeoLocation, Address, GetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, SelectCartAddressRequest, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, ShipmentResponse, ShipmentMeta, ShipmentLogisticsMeta, CartShipmentsResponse, CartCheckoutCustomMeta, CustomerDetails, StaffCheckout, CartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, GiftDetail, ArticleGiftDetail, CartMetaRequest, CartMetaResponse, CartMetaMissingResponse, CartMetaFieldsValidation, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, FreeGiftItems, PromotionOffer, PromotionOffersResponse, OperationErrorResponse, LadderPrice, LadderOfferItem, LadderPriceOffer, CurrencyInfo, LadderPriceOffers, PaymentMeta, PaymentMethod, CartCheckoutDetailV2Request, CartMetaConfigListResponse, CartMetaConfigListObject, OrderPlacing, PanCard, CartConfigDetailObj, CartConfigDetailResponse, SelectAddressResponseError, AllAddressForSelectAddress, DeleteCartRequest };
}
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
/** @returns {PromoDiscountRuleOffer} */
declare function PromoDiscountRuleOffer(): PromoDiscountRuleOffer;
type PromoDiscountRuleOffer = {
    max_offer_quantity?: number;
    discount_percentage?: number;
    discount_amount?: number;
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
    all_items?: boolean;
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
/** @returns {Ownership} */
declare function Ownership(): Ownership;
type Ownership = {
    /**
     * - Promo amount payable category
     */
    payable_category?: string;
    /**
     * - Promo amount bearable party
     */
    payable_by?: string;
};
/** @returns {FreeGiftItem} */
declare function FreeGiftItem(): FreeGiftItem;
type FreeGiftItem = {
    /**
     * - Item slug
     */
    item_slug?: string;
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
     * - Item id
     */
    item_id?: number;
    /**
     * - Item images URL
     */
    item_images_url?: string[];
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
/** @returns {AppliedPromotion} */
declare function AppliedPromotion(): AppliedPromotion;
type AppliedPromotion = {
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
/** @returns {PaymentSelectionLock} */
declare function PaymentSelectionLock(): PaymentSelectionLock;
type PaymentSelectionLock = {
    enabled?: boolean;
    default_options?: string;
    payment_identifier?: string;
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
    base?: BasePrice;
    converted?: BasePrice;
};
/** @returns {BaseInfo} */
declare function BaseInfo(): BaseInfo;
type BaseInfo = {
    uid?: number;
    name?: string;
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
/** @returns {CartProductIdentifer} */
declare function CartProductIdentifer(): CartProductIdentifer;
type CartProductIdentifer = {
    /**
     * - Article idenfier generated by cart
     */
    identifier?: string;
};
/** @returns {PromoMeta} */
declare function PromoMeta(): PromoMeta;
type PromoMeta = {
    message?: string;
};
/** @returns {ChargesAmount} */
declare function ChargesAmount(): ChargesAmount;
type ChargesAmount = {
    /**
     * - This is the value of amount added
     */
    value?: number;
    /**
     * - This is destination currency of value
     */
    currency?: string;
};
/** @returns {Charges} */
declare function Charges(): Charges;
type Charges = {
    /**
     * - This object contains the meta data realted to
     * charges price adjustment
     */
    meta?: any;
    amount?: ChargesAmount;
    /**
     * - This is the name of the charge applied
     */
    name?: string;
    /**
     * - This boolean value defines that refund
     * is allowed or not for the charge
     */
    allow_refund?: boolean;
    /**
     * - This is the code of the charge applied
     */
    code?: string;
    /**
     * - This is the type of the charge applied
     */
    type?: string;
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
    base?: ProductPrice;
    converted?: ProductPrice;
};
/** @returns {ProductPricePerUnit} */
declare function ProductPricePerUnit(): ProductPricePerUnit;
type ProductPricePerUnit = {
    currency_symbol?: string;
    selling_price?: number;
    currency_code?: string;
    add_on?: number;
    effective?: number;
    marked?: number;
};
/** @returns {ProductPricePerUnitInfo} */
declare function ProductPricePerUnitInfo(): ProductPricePerUnitInfo;
type ProductPricePerUnitInfo = {
    base?: ProductPricePerUnit;
    converted?: ProductPricePerUnit;
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
    out_of_stock?: boolean;
    deliverable?: boolean;
    available_sizes?: ProductAvailabilitySize[];
    is_valid?: boolean;
    other_store_quantity?: number;
    sizes?: string[];
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
    query?: ActionQuery;
    url?: string;
    type?: string;
};
/** @returns {Tags} */
declare function Tags(): Tags;
type Tags = {
    tags?: any;
};
/** @returns {ProductImage} */
declare function ProductImage(): ProductImage;
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
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
/** @returns {CouponDetails} */
declare function CouponDetails(): CouponDetails;
type CouponDetails = {
    discount_total_quantity?: number;
    discount_single_quantity?: number;
    code?: string;
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
    seller_count?: number;
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
    custom_cart?: CustomCart;
    is_pan_received?: boolean;
    pan_config?: any;
};
/** @returns {ArticleAssignment} */
declare function ArticleAssignment(): ArticleAssignment;
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
/** @returns {AddProductCart} */
declare function AddProductCart(): AddProductCart;
type AddProductCart = {
    quantity?: number;
    item_size?: string;
    seller_id?: number;
    price_factory_type_id?: string;
    parent_item_identifiers?: any[];
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
/** @returns {AddCartRequest} */
declare function AddCartRequest(): AddCartRequest;
type AddCartRequest = {
    items?: AddProductCart[];
    new_cart?: boolean;
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
    extra_meta?: any;
    _custom_json?: any;
    quantity?: number;
    item_size?: string;
    item_index?: number;
    identifiers: CartProductIdentifer;
    article_id?: string;
    parent_item_identifiers?: any;
    price_factory_type_id?: string;
    item_id?: number;
    meta?: any;
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
    message?: string;
    cart?: CartDetailResponse;
    /**
     * - True if all items are added successfully.
     * false if partially added or not added.
     */
    success?: boolean;
};
/** @returns {DeleteCartDetailResponse} */
declare function DeleteCartDetailResponse(): DeleteCartDetailResponse;
type DeleteCartDetailResponse = {
    message?: string;
    /**
     * - True if cart is archived successfully. false
     * if not archived.
     */
    success?: boolean;
};
/** @returns {CartItemCountResponse} */
declare function CartItemCountResponse(): CartItemCountResponse;
type CartItemCountResponse = {
    /**
     * - Item count present in cart
     */
    user_cart_items_count?: number;
};
/** @returns {CartItemCountResponseV2} */
declare function CartItemCountResponseV2(): CartItemCountResponseV2;
type CartItemCountResponseV2 = {
    user_all_cart_articles_quantity_count?: number;
    user_all_cart_article_count?: number;
    custom_cart_count?: any;
    custom_cart_ordered_count?: any[];
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
    page?: PageCoupon;
    available_coupon_list?: Coupon[];
};
/** @returns {ApplyCouponRequest} */
declare function ApplyCouponRequest(): ApplyCouponRequest;
type ApplyCouponRequest = {
    /**
     * - Coupon code to be applied
     */
    coupon_code: string;
};
/** @returns {OfferPrice} */
declare function OfferPrice(): OfferPrice;
type OfferPrice = {
    /**
     * - Currency symbol for currency
     */
    currency_symbol?: string;
    /**
     * - Discounted per unit price for current
     * offer object
     */
    bulk_effective?: number;
    /**
     * - Currency code for all amounts
     */
    currency_code?: string;
    /**
     * - Current per unit price of product after
     * existing deductions
     */
    effective?: number;
    /**
     * - Original price of product
     */
    marked?: number;
};
/** @returns {OfferItem} */
declare function OfferItem(): OfferItem;
type OfferItem = {
    price?: OfferPrice;
    /**
     * - Percentage value of discount
     */
    margin?: number;
    /**
     * - Quantity on which offer is applicable
     */
    quantity?: number;
    /**
     * - Is true for best offer from all offers present
     * for all sellers
     */
    best?: boolean;
    /**
     * - Total price of offer quantity with discount
     */
    total?: number;
    /**
     * - Whether offer discount is auto applied in cart
     */
    auto_applied?: boolean;
    /**
     * - Offer type
     */
    type?: string;
};
/** @returns {OfferSeller} */
declare function OfferSeller(): OfferSeller;
type OfferSeller = {
    /**
     * - Seller id
     */
    uid?: number;
    name?: string;
};
/** @returns {BulkPriceOffer} */
declare function BulkPriceOffer(): BulkPriceOffer;
type BulkPriceOffer = {
    offers?: OfferItem[];
    seller?: OfferSeller;
};
/** @returns {BulkPriceResponse} */
declare function BulkPriceResponse(): BulkPriceResponse;
type BulkPriceResponse = {
    /**
     * - Consist of offers from multiple seller
     */
    data?: BulkPriceOffer[];
};
/** @returns {RewardPointRequest} */
declare function RewardPointRequest(): RewardPointRequest;
type RewardPointRequest = {
    points: boolean;
};
/** @returns {GeoLocation} */
declare function GeoLocation(): GeoLocation;
type GeoLocation = {
    latitude?: number;
    longitude?: number;
};
/** @returns {Address} */
declare function Address(): Address;
type Address = {
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
    _custom_json?: any;
    uid?: number;
    is_anonymous?: boolean;
    app_id?: string;
    expire_at?: string;
    address_id?: string;
    store_name?: string;
};
/** @returns {GetAddressesResponse} */
declare function GetAddressesResponse(): GetAddressesResponse;
type GetAddressesResponse = {
    pii_masking?: boolean;
    address?: Address[];
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
    is_updated?: boolean;
    id?: string;
    success?: boolean;
    is_default_address?: boolean;
    address_id?: string;
};
/** @returns {DeleteAddressResponse} */
declare function DeleteAddressResponse(): DeleteAddressResponse;
type DeleteAddressResponse = {
    id?: string;
    is_deleted?: boolean;
    address_id?: string;
};
/** @returns {SelectCartAddressRequest} */
declare function SelectCartAddressRequest(): SelectCartAddressRequest;
type SelectCartAddressRequest = {
    id?: string;
    billing_address_id?: string;
    cart_id?: string;
};
/** @returns {UpdateCartPaymentRequest} */
declare function UpdateCartPaymentRequest(): UpdateCartPaymentRequest;
type UpdateCartPaymentRequest = {
    id?: string;
    payment_identifier?: string;
    address_id?: string;
    merchant_code?: string;
    aggregator_name?: string;
    payment_mode?: string;
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
/** @returns {ShipmentResponse} */
declare function ShipmentResponse(): ShipmentResponse;
type ShipmentResponse = {
    shipments?: number;
    promise?: ShipmentPromise;
    order_type?: string;
    box_type?: string;
    shipment_type?: string;
    dp_options?: any;
    dp_id?: string;
    items?: CartProductInfo[];
    fulfillment_type?: string;
    fulfillment_id?: number;
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
/** @returns {CartShipmentsResponse} */
declare function CartShipmentsResponse(): CartShipmentsResponse;
type CartShipmentsResponse = {
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
    shipments?: ShipmentResponse[];
    error?: boolean;
    is_pan_received?: boolean;
};
/** @returns {CartCheckoutCustomMeta} */
declare function CartCheckoutCustomMeta(): CartCheckoutCustomMeta;
type CartCheckoutCustomMeta = {
    key: string;
    value: string;
};
/** @returns {CustomerDetails} */
declare function CustomerDetails(): CustomerDetails;
type CustomerDetails = {
    email?: string;
    mobile: string;
    name?: string;
};
/** @returns {StaffCheckout} */
declare function StaffCheckout(): StaffCheckout;
type StaffCheckout = {
    employee_code?: string;
    user: string;
    last_name: string;
    first_name: string;
    _id: string;
};
/** @returns {CartCheckoutDetailRequest} */
declare function CartCheckoutDetailRequest(): CartCheckoutDetailRequest;
type CartCheckoutDetailRequest = {
    custom_meta?: CartCheckoutCustomMeta[];
    /**
     * - Customer details
     */
    customer_details?: any;
    merchant_code?: string;
    id?: string;
    payment_auto_confirm?: boolean;
    payment_mode: string;
    aggregator?: string;
    address_id?: string;
    callback_url?: string;
    delivery_address?: any;
    staff?: StaffCheckout;
    order_type?: string;
    ordering_store?: number;
    extra_meta?: any;
    payment_identifier?: string;
    billing_address?: any;
    payment_params?: any;
    billing_address_id?: string;
    meta?: any;
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
    payment_confirm_url?: string;
    app_intercept_url?: string;
    success?: boolean;
    callback_url?: string;
    message?: string;
    data?: any;
    order_id?: string;
    cart?: CheckCart;
};
/** @returns {GiftDetail} */
declare function GiftDetail(): GiftDetail;
type GiftDetail = {
    is_gift_applied?: boolean;
    gift_message?: string;
};
/** @returns {ArticleGiftDetail} */
declare function ArticleGiftDetail(): ArticleGiftDetail;
type ArticleGiftDetail = {
    article_id?: GiftDetail;
};
/** @returns {CartMetaRequest} */
declare function CartMetaRequest(): CartMetaRequest;
type CartMetaRequest = {
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
    delivery_slots?: any;
};
/** @returns {CartMetaResponse} */
declare function CartMetaResponse(): CartMetaResponse;
type CartMetaResponse = {
    message?: string;
    is_valid?: boolean;
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
     * - Short link id
     */
    token?: string;
    /**
     * - User details of who generated share link
     */
    user?: any;
    created_on?: string;
    /**
     * - Share link device and other source information
     */
    source?: any;
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
    error?: string;
    cart?: SharedCart;
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
    /**
     * - Item price details
     */
    item_price_details?: any;
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
/** @returns {OperationErrorResponse} */
declare function OperationErrorResponse(): OperationErrorResponse;
type OperationErrorResponse = {
    message?: string;
    success?: boolean;
};
/** @returns {LadderPrice} */
declare function LadderPrice(): LadderPrice;
type LadderPrice = {
    /**
     * - Currency symbol for currency
     */
    currency_symbol?: string;
    /**
     * - Discounted per unit price for current offer object
     */
    offer_price?: number;
    /**
     * - Currency code for all amounts
     */
    currency_code?: string;
    /**
     * - Current per unit price of product after
     * existing deductions
     */
    effective?: number;
    /**
     * - Original price of product
     */
    marked?: number;
};
/** @returns {LadderOfferItem} */
declare function LadderOfferItem(): LadderOfferItem;
type LadderOfferItem = {
    price?: LadderPrice;
    /**
     * - Percentage value of discount
     */
    margin?: number;
    /**
     * - Minimum quantity upto which offer is
     * applicable. If not present that offer is applicable on all quantities
     */
    max_quantity?: number;
    /**
     * - Minimum quantity from which offer is applicable
     */
    min_quantity?: number;
    /**
     * - Offer type
     */
    type?: string;
};
/** @returns {LadderPriceOffer} */
declare function LadderPriceOffer(): LadderPriceOffer;
type LadderPriceOffer = {
    /**
     * - Promotion id
     */
    id?: string;
    /**
     * - Buy rules of promotions
     */
    buy_rules?: any;
    /**
     * - If this ladder offer is to be calculated
     * on MRP or ESP price
     */
    calculate_on?: string;
    /**
     * - Offer title
     */
    offer_text?: string;
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
    offer_prices?: LadderOfferItem[];
    /**
     * - Details of free gift items
     */
    free_gift_items?: FreeGiftItems[];
    /**
     * - Offer details including T&C
     */
    description?: string;
};
/** @returns {CurrencyInfo} */
declare function CurrencyInfo(): CurrencyInfo;
type CurrencyInfo = {
    code?: string;
    symbol?: string;
};
/** @returns {LadderPriceOffers} */
declare function LadderPriceOffers(): LadderPriceOffers;
type LadderPriceOffers = {
    available_offers?: LadderPriceOffer[];
    currency?: CurrencyInfo;
    store_id?: number[];
};
/** @returns {PaymentMeta} */
declare function PaymentMeta(): PaymentMeta;
type PaymentMeta = {
    merchant_code?: string;
    type?: string;
    payment_gateway?: string;
    payment_identifier?: string;
};
/** @returns {PaymentMethod} */
declare function PaymentMethod(): PaymentMethod;
type PaymentMethod = {
    payment_meta: PaymentMeta;
    mode: string;
    payment?: string;
    amount?: number;
    payment_identifier?: string;
    name?: string;
    payment_extra_identifiers?: any;
};
/** @returns {CartCheckoutDetailV2Request} */
declare function CartCheckoutDetailV2Request(): CartCheckoutDetailV2Request;
type CartCheckoutDetailV2Request = {
    custom_meta?: any;
    /**
     * - Customer details
     */
    customer_details?: any;
    merchant_code?: string;
    cart_id?: string;
    id?: string;
    payment_auto_confirm?: boolean;
    payment_methods: PaymentMethod[];
    payment_mode: string;
    aggregator?: string;
    address_id?: string;
    callback_url?: string;
    delivery_address?: any;
    staff?: StaffCheckout;
    order_type?: string;
    ordering_store?: number;
    extra_meta?: any;
    payment_identifier?: string;
    billing_address?: any;
    payment_params?: any;
    billing_address_id?: string;
    meta?: any;
    iin?: string;
    network?: string;
    type?: string;
    card_id?: string;
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
    article_tags?: string[];
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
/** @returns {CartConfigDetailObj} */
declare function CartConfigDetailObj(): CartConfigDetailObj;
type CartConfigDetailObj = {
    id?: string;
    app_id?: string;
    company_id?: number;
    created_on?: string;
    updated_on?: string;
    last_modified_by?: string;
    min_cart_value?: number;
    max_cart_value?: number;
    bulk_coupons?: boolean;
    max_cart_items?: number;
    gift_display_text?: string;
    delivery_charges?: DeliveryChargesConfig;
    revenue_engine_coupon?: boolean;
    gift_pricing?: number;
    enabled?: boolean;
    is_active?: boolean;
    order_placing?: OrderPlacing;
    name?: string;
    article_tags?: string[];
    allow_coupon_with_rewards?: boolean;
    gst_input?: boolean;
    staff_selection?: boolean;
    placing_for_customer?: boolean;
    pan_card?: PanCard;
    slug?: string;
    is_universal?: boolean;
    international_delivery_charges?: DeliveryChargesConfig;
};
/** @returns {CartConfigDetailResponse} */
declare function CartConfigDetailResponse(): CartConfigDetailResponse;
type CartConfigDetailResponse = {
    success?: boolean;
    data?: CartConfigDetailObj;
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
    address?: Address[];
    pii_masking?: boolean;
};
/** @returns {DeleteCartRequest} */
declare function DeleteCartRequest(): DeleteCartRequest;
type DeleteCartRequest = {
    cart_id_list?: string[];
};
