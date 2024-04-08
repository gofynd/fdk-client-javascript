const Joi = require("joi");

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

class CartApplicationModel {
  /** @returns {PromoBuyRuleCartConditions} */
  static PromoBuyRuleCartConditions() {
    return Joi.object({
      cart_quantity: CartApplicationModel.PromoBuyRuleCompareFieldsTypes(),
      cart_total: CartApplicationModel.PromoBuyRuleCompareFieldsTypes(),
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
      cart_conditions: CartApplicationModel.PromoBuyRuleCartConditions(),
      item_criteria: Joi.any(),
      all_items: Joi.boolean().allow(null),
      mrp_promo: Joi.boolean(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {PromoDiscountRuleOffer} */
  static PromoDiscountRuleOffer() {
    return Joi.object({
      max_offer_quantity: Joi.number().allow(null),
      discount_percentage: Joi.number().allow(null),
      discount_amount: Joi.number().allow(null),
    });
  }

  /** @returns {PromoDiscountRuleRawOffer} */
  static PromoDiscountRuleRawOffer() {
    return Joi.object({
      buy_condition: Joi.string().allow(""),
      discount_type: Joi.string().allow(""),
      offer: CartApplicationModel.PromoDiscountRuleOffer(),
      item_criteria: CartApplicationModel.PromoDiscountRuleItemCriteria(),
    });
  }

  /** @returns {PromoDiscountRuleItemCriteria} */
  static PromoDiscountRuleItemCriteria() {
    return Joi.object({
      item_id: Joi.array().items(Joi.number()),
      buy_rules: Joi.array().items(Joi.string().allow("")),
      all_items: Joi.boolean(),
    });
  }

  /** @returns {DiscountRulesApp} */
  static DiscountRulesApp() {
    return Joi.object({
      offer: CartApplicationModel.PromoDiscountRuleOffer(),
      raw_offer: CartApplicationModel.PromoDiscountRuleRawOffer(),
      item_criteria: CartApplicationModel.PromoDiscountRuleItemCriteria(),
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Ownership} */
  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow(""),
      payable_by: Joi.string().allow(""),
    });
  }

  /** @returns {FreeGiftItem} */
  static FreeGiftItem() {
    return Joi.object({
      item_slug: Joi.string().allow(""),
      item_name: Joi.string().allow(""),
      item_price_details: Joi.any(),
      item_brand_name: Joi.string().allow(""),
      item_id: Joi.number(),
      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {AppliedFreeArticles} */
  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),
      quantity: Joi.number(),
      article_id: Joi.string().allow(""),
      free_gift_item_details: CartApplicationModel.FreeGiftItem(),
    });
  }

  /** @returns {Ownership2} */
  static Ownership2() {
    return Joi.object({
      payable_category: Joi.string().allow(""),
      payable_by: Joi.string().allow(""),
    });
  }

  /** @returns {AppliedPromotion} */
  static AppliedPromotion() {
    return Joi.object({
      id: Joi.string().allow(""),
      article_quantity: Joi.number(),
      original_article_quantity: Joi.number(),
      ownership: CartApplicationModel.Ownership2(),
      currency: CartApplicationModel.CartCurrency(),
      discount_rules: Joi.array().items(
        CartApplicationModel.DiscountRulesApp()
      ),
      applied_free_articles: Joi.array().items(
        CartApplicationModel.AppliedFreeArticles()
      ),
      promotion_name: Joi.string().allow(""),
      buy_rules: Joi.array().items(CartApplicationModel.BuyRules()),
      offer_text: Joi.string().allow(""),
      amount: Joi.number(),
      promotion_type: Joi.string().allow(""),
      mrp_promotion: Joi.boolean(),
      promotion_group: Joi.string().allow(""),
      promo_id: Joi.string().allow(""),
      meta: Joi.any(),
      code: Joi.string().allow("").allow(null),
      offer_label: Joi.string().allow("").allow(null),
      return_allowed: Joi.boolean().allow(null),
      cancellation_allowed: Joi.boolean().allow(null),
      promo_code: Joi.string().allow("").allow(null),
      free_quantity: Joi.number().allow(null),
      offer_description: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentSelectionLock} */
  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),
      default_options: Joi.string().allow(""),
      payment_identifier: Joi.string().allow(""),
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
      formatted: CartApplicationModel.PromiseFormatted(),
      timestamp: CartApplicationModel.PromiseTimestamp(),
      iso: CartApplicationModel.PromiseISOFormat(),
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
      adjusted_value: Joi.any(),
      article_level_distribution: Joi.boolean(),
      article_id: Joi.string().allow(""),
      applied_quantity: Joi.number(),
      meta: Joi.any(),
    });
  }

  /** @returns {ArticlePriceInfo} */
  static ArticlePriceInfo() {
    return Joi.object({
      base: CartApplicationModel.BasePrice(),
      converted: CartApplicationModel.BasePrice(),
    });
  }

  /** @returns {BaseInfo} */
  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow("").allow(null),
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
      seller: CartApplicationModel.BaseInfo(),
      cart_item_meta: Joi.any(),
      parent_item_identifiers: Joi.any(),
      is_gift_visible: Joi.boolean(),
      uid: Joi.string().allow(""),
      gift_card: CartApplicationModel.ArticleGiftCard(),
      product_group_tags: Joi.array().items(Joi.string().allow("")),
      identifier: Joi.any().allow(null),
      mto_quantity: Joi.number(),
      extra_meta: Joi.any(),
      type: Joi.string().allow(""),
      _custom_json: Joi.any(),
      price: CartApplicationModel.ArticlePriceInfo(),
      meta: Joi.any(),
      size: Joi.string().allow(""),
      store: CartApplicationModel.StoreInfo(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CartProductIdentifer} */
  static CartProductIdentifer() {
    return Joi.object({
      identifier: Joi.string().allow(""),
    });
  }

  /** @returns {PromoMeta} */
  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ChargesAmount} */
  static ChargesAmount() {
    return Joi.object({
      value: Joi.number(),
      currency: Joi.string().allow(""),
    });
  }

  /** @returns {Charges} */
  static Charges() {
    return Joi.object({
      meta: Joi.any(),
      amount: CartApplicationModel.ChargesAmount(),
      name: Joi.string().allow(""),
      allow_refund: Joi.boolean(),
      code: Joi.string().allow(""),
      type: Joi.string().allow(""),
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
      base: CartApplicationModel.ProductPrice(),
      converted: CartApplicationModel.ProductPrice(),
    });
  }

  /** @returns {ProductPricePerUnit} */
  static ProductPricePerUnit() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),
      selling_price: Joi.number(),
      currency_code: Joi.string().allow(""),
      add_on: Joi.number(),
      effective: Joi.number(),
      marked: Joi.number(),
    });
  }

  /** @returns {ProductPricePerUnitInfo} */
  static ProductPricePerUnitInfo() {
    return Joi.object({
      base: CartApplicationModel.ProductPricePerUnit(),
      converted: CartApplicationModel.ProductPricePerUnit(),
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
      out_of_stock: Joi.boolean(),
      deliverable: Joi.boolean(),
      available_sizes: Joi.array().items(
        CartApplicationModel.ProductAvailabilitySize()
      ),
      is_valid: Joi.boolean(),
      other_store_quantity: Joi.number(),
      sizes: Joi.array().items(Joi.string().allow("")),
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
      query: CartApplicationModel.ActionQuery(),
      url: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Tags} */
  static Tags() {
    return Joi.object({
      tags: Joi.any(),
    });
  }

  /** @returns {ProductImage} */
  static ProductImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
      aspect_ratio: Joi.string().allow(""),
      url: Joi.string().allow(""),
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
      images: Joi.array().items(CartApplicationModel.ProductImage()),
      teaser_tag: Joi.any().allow(null),
      brand: CartApplicationModel.BaseInfo(),
      action: CartApplicationModel.ProductAction(),
      uid: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
      _custom_json: Joi.any(),
      type: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
      item_code: Joi.string().allow("").allow(null),
      categories: Joi.array().items(CartApplicationModel.CategoryInfo()),
      attributes: CartApplicationModel.ProductAttributes(),
    });
  }

  /** @returns {ProductAttributes} */
  static ProductAttributes() {
    return Joi.object({
      product_type: Joi.string().allow(""),
      item_code: Joi.string().allow(""),
      primary_color_hex: Joi.string().allow(""),
      primary_material: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      variant: Joi.string().allow(""),
      color: Joi.string().allow(""),
      season: Joi.string().allow(""),
      style_note: Joi.string().allow(""),
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
      product: CartApplicationModel.CartProduct(),
      product_ean_id: Joi.string().allow(""),
      parent_item_identifiers: CartApplicationModel.ParentItemIdentifiers(),
      is_set: Joi.boolean().allow(null),
      article: CartApplicationModel.ProductArticle(),
      promotions_applied: Joi.array().items(
        CartApplicationModel.AppliedPromotion()
      ),
      delivery_promise: CartApplicationModel.ShipmentPromise(),
      key: Joi.string().allow(""),
      coupon: CartApplicationModel.CouponDetails(),
      bulk_offer: Joi.any(),
      price_adjustment_applied: Joi.array().items(
        CartApplicationModel.ArticleAppliedPriceAdjustment()
      ),
      price: CartApplicationModel.ProductPriceInfo(),
      coupon_message: Joi.string().allow(""),
      identifiers: CartApplicationModel.CartProductIdentifer().required(),
      message: Joi.string().allow(""),
      discount: Joi.string().allow(""),
      availability: CartApplicationModel.ProductAvailability(),
      moq: CartApplicationModel.CartItemMOQ(),
      price_per_unit: CartApplicationModel.ProductPriceInfo(),
      promo_meta: CartApplicationModel.PromoMeta(),
      custom_order: CartApplicationModel.CartItemCustomOrder(),
      charges: Joi.array().items(Joi.number()),
      seller_count: Joi.number(),
    });
  }

  /** @returns {PriceAdjustmentApplied} */
  static PriceAdjustmentApplied() {
    return Joi.object({
      article_id: Joi.string().allow(""),
      adjusted_value: Joi.any(),
      applied_quantity: Joi.number(),
      meta: Joi.any(),
      article_level_distribution: Joi.boolean(),
      type: Joi.string().allow(""),
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
      meta: Joi.any(),
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
      coupon: CartApplicationModel.CouponBreakup(),
      display: Joi.array().items(CartApplicationModel.DisplayBreakup()),
      loyalty_points: CartApplicationModel.LoyaltyPoints(),
      raw: CartApplicationModel.RawBreakup(),
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
      medias: Joi.array().items(CartApplicationModel.CartCouponMedias()),
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
      charges: Joi.array().items(CartApplicationModel.ChargesThreshold()),
    });
  }

  /** @returns {CartCommonConfig} */
  static CartCommonConfig() {
    return Joi.object({
      delivery_charges_config: CartApplicationModel.DeliveryChargesConfig(),
    });
  }

  /** @returns {CartAppliedPriceAdjustment} */
  static CartAppliedPriceAdjustment() {
    return Joi.object({
      remove_articles: Joi.boolean(),
      adjusted_value: Joi.any(),
      article_level_distribution: Joi.boolean(),
      auto_remove: Joi.boolean(),
      applied_articles_ids: Joi.array().items(Joi.string().allow("")),
      message: Joi.string().allow(""),
      _type: Joi.string().allow(""),
      meta: Joi.any(),
      restrictions: Joi.any(),
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

  /** @returns {CartDetailResponse} */
  static CartDetailResponse() {
    return Joi.object({
      cart_id: Joi.number(),
      uid: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      id: Joi.string().allow(""),
      delivery_promise: CartApplicationModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartApplicationModel.CartProductInfo()),
      payment_selection_lock: CartApplicationModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      common_config: CartApplicationModel.CartCommonConfig(),
      coupon: CartApplicationModel.CartDetailCoupon(),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      notification: Joi.any(),
      staff_user_id: Joi.string().allow(""),
      success: Joi.boolean(),
      breakup_values: CartApplicationModel.CartBreakup(),
      is_valid: Joi.boolean(),
      currency: CartApplicationModel.CartCurrency(),
      checkout_mode: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      price_adjustment_applied: Joi.array().items(
        CartApplicationModel.CartAppliedPriceAdjustment()
      ),
      buy_now: Joi.boolean(),
      gstin: Joi.string().allow("").allow(null),
      applied_promo_details: Joi.array().items(
        CartApplicationModel.AppliedPromotion()
      ),
      pan_no: Joi.string().allow("").allow(null),
      custom_cart: CartApplicationModel.CustomCart(),
      is_pan_received: Joi.boolean(),
      pan_config: Joi.any(),
    });
  }

  /** @returns {ArticleAssignment} */
  static ArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
    });
  }

  /** @returns {AddProductCart} */
  static AddProductCart() {
    return Joi.object({
      quantity: Joi.number(),
      item_size: Joi.string().allow(""),
      seller_id: Joi.number(),
      price_factory_type_id: Joi.string().allow(""),
      parent_item_identifiers: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.string().allow(""))
      ),
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
      article_id: Joi.string().allow(""),
      article_assignment: CartApplicationModel.ArticleAssignment(),
      store_id: Joi.number(),
      display: Joi.string().allow(""),
      item_id: Joi.number(),
      extra_meta: Joi.any(),
      _custom_json: Joi.any(),
      meta: Joi.any(),
      pos: Joi.boolean(),
      seller_identifier: Joi.string().allow(""),
    });
  }

  /** @returns {AddCartRequest} */
  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartApplicationModel.AddProductCart()),
      new_cart: Joi.boolean(),
    });
  }

  /** @returns {AddCartDetailResponse} */
  static AddCartDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),
      cart: CartApplicationModel.CartDetailResponse(),
      partial: Joi.boolean(),
      message: Joi.string().allow(""),
      result: Joi.any(),
    });
  }

  /** @returns {UpdateProductCart} */
  static UpdateProductCart() {
    return Joi.object({
      extra_meta: Joi.any(),
      _custom_json: Joi.any(),
      quantity: Joi.number(),
      item_size: Joi.string().allow(""),
      item_index: Joi.number(),
      identifiers: CartApplicationModel.CartProductIdentifer().required(),
      article_id: Joi.string().allow(""),
      parent_item_identifiers: Joi.any(),
      price_factory_type_id: Joi.string().allow(""),
      item_id: Joi.number(),
      meta: Joi.any(),
    });
  }

  /** @returns {UpdateCartRequest} */
  static UpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(CartApplicationModel.UpdateProductCart()),
      operation: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdateCartDetailResponse} */
  static UpdateCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      cart: CartApplicationModel.CartDetailResponse(),
      success: Joi.boolean(),
    });
  }

  /** @returns {DeleteCartDetailResponse} */
  static DeleteCartDetailResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {CartItemCountResponse} */
  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  /** @returns {CartItemCountResponseV2} */
  static CartItemCountResponseV2() {
    return Joi.object({
      user_all_cart_articles_quantity_count: Joi.number(),
      user_all_cart_article_count: Joi.number(),
      custom_cart_count: Joi.any(),
      custom_cart_ordered_count: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.any())
      ),
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
      tags: Joi.array().items(Joi.string().allow("")),
      medias: Joi.array().items(CartApplicationModel.CartCouponMedias()),
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
      page: CartApplicationModel.PageCoupon(),
      available_coupon_list: Joi.array().items(CartApplicationModel.Coupon()),
    });
  }

  /** @returns {ApplyCouponRequest} */
  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {OfferPrice} */
  static OfferPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),
      bulk_effective: Joi.number(),
      currency_code: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
    });
  }

  /** @returns {OfferItem} */
  static OfferItem() {
    return Joi.object({
      price: CartApplicationModel.OfferPrice(),
      margin: Joi.number(),
      quantity: Joi.number(),
      best: Joi.boolean(),
      total: Joi.number(),
      auto_applied: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {OfferSeller} */
  static OfferSeller() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {BulkPriceOffer} */
  static BulkPriceOffer() {
    return Joi.object({
      offers: Joi.array().items(CartApplicationModel.OfferItem()),
      seller: CartApplicationModel.OfferSeller(),
    });
  }

  /** @returns {BulkPriceResponse} */
  static BulkPriceResponse() {
    return Joi.object({
      data: Joi.array().items(CartApplicationModel.BulkPriceOffer()),
    });
  }

  /** @returns {RewardPointRequest} */
  static RewardPointRequest() {
    return Joi.object({
      points: Joi.boolean().required(),
    });
  }

  /** @returns {GeoLocation} */
  static GeoLocation() {
    return Joi.object({
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }

  /** @returns {Address} */
  static Address() {
    return Joi.object({
      pincode: Joi.number(),
      phone: Joi.string().allow(""),
      id: Joi.string().allow(""),
      area_code_slug: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      geo_location: CartApplicationModel.GeoLocation(),
      country: Joi.string().allow(""),
      state: Joi.string().allow(""),
      is_default_address: Joi.boolean(),
      tags: Joi.array().items(Joi.string().allow("")),
      created_by_user_id: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      email: Joi.string().allow("").allow(null),
      area_code: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      meta: Joi.any(),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      google_map_point: Joi.any(),
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
      _custom_json: Joi.any(),
      uid: Joi.number(),
      is_anonymous: Joi.boolean(),
      app_id: Joi.string().allow(""),
      expire_at: Joi.string().allow("").allow(null),
      address_id: Joi.string().allow("").allow(null),
      store_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GetAddressesResponse} */
  static GetAddressesResponse() {
    return Joi.object({
      pii_masking: Joi.boolean(),
      address: Joi.array().items(CartApplicationModel.Address()),
    });
  }

  /** @returns {SaveAddressResponse} */
  static SaveAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      success: Joi.boolean(),
      is_default_address: Joi.boolean(),
      address_id: Joi.any(),
    });
  }

  /** @returns {UpdateAddressResponse} */
  static UpdateAddressResponse() {
    return Joi.object({
      is_updated: Joi.boolean(),
      id: Joi.string().allow(""),
      success: Joi.boolean(),
      is_default_address: Joi.boolean(),
      address_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {DeleteAddressResponse} */
  static DeleteAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_deleted: Joi.boolean(),
      address_id: Joi.string().allow(""),
    });
  }

  /** @returns {SelectCartAddressRequest} */
  static SelectCartAddressRequest() {
    return Joi.object({
      id: Joi.string().allow(""),
      billing_address_id: Joi.string().allow(""),
      cart_id: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateCartPaymentRequest} */
  static UpdateCartPaymentRequest() {
    return Joi.object({
      id: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
      address_id: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      aggregator_name: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
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
      coupon_validity: CartApplicationModel.CouponValidity(),
    });
  }

  /** @returns {ShipmentResponse} */
  static ShipmentResponse() {
    return Joi.object({
      shipments: Joi.number(),
      promise: CartApplicationModel.ShipmentPromise(),
      order_type: Joi.string().allow(""),
      box_type: Joi.string().allow("").allow(null),
      shipment_type: Joi.string().allow(""),
      dp_options: Joi.any().allow(null),
      dp_id: Joi.string().allow("").allow(null),
      items: Joi.array().items(CartApplicationModel.CartProductInfo()),
      fulfillment_type: Joi.string().allow(""),
      fulfillment_id: Joi.number(),
      meta: CartApplicationModel.ShipmentMeta(),
      logistics_meta: CartApplicationModel.ShipmentLogisticsMeta(),
    });
  }

  /** @returns {ShipmentMeta} */
  static ShipmentMeta() {
    return Joi.object({
      packaging_name: Joi.string().allow("").allow(null),
      dimension: Joi.string().allow("").allow(null),
      assign_dp_from_sb: Joi.string().allow("").allow(null),
      dp_sort_key: Joi.string().allow("").allow(null),
      shipment_weight: Joi.string().allow("").allow(null),
      shipment_volumetric_weight: Joi.string().allow("").allow(null),
      shipment_chargeable_weight: Joi.string().allow("").allow(null),
      shipping_zone: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentLogisticsMeta} */
  static ShipmentLogisticsMeta() {
    return Joi.object({
      account_options: Joi.array().items(Joi.string().allow("")),
      account_info: Joi.any(),
      dp_sort_key: Joi.string().allow("").allow(null),
      assign_dp_from_sb: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CartShipmentsResponse} */
  static CartShipmentsResponse() {
    return Joi.object({
      cart_id: Joi.number(),
      uid: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      id: Joi.string().allow(""),
      pan_config: Joi.any(),
      delivery_promise: CartApplicationModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartApplicationModel.CartProductInfo()),
      payment_selection_lock: CartApplicationModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      common_config: CartApplicationModel.CartCommonConfig(),
      coupon: CartApplicationModel.CartDetailCoupon(),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      notification: Joi.any(),
      staff_user_id: Joi.string().allow("").allow(null),
      success: Joi.boolean(),
      breakup_values: CartApplicationModel.CartBreakup(),
      is_valid: Joi.boolean(),
      currency: CartApplicationModel.CartCurrency(),
      checkout_mode: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      gstin: Joi.string().allow("").allow(null),
      applied_promo_details: Joi.array().items(
        CartApplicationModel.AppliedPromotion()
      ),
      pan_no: Joi.string().allow("").allow(null),
      custom_cart: CartApplicationModel.CustomCart(),
      price_adjustment_applied: Joi.array().items(
        CartApplicationModel.CartAppliedPriceAdjustment()
      ),
      shipments: Joi.array().items(CartApplicationModel.ShipmentResponse()),
      error: Joi.boolean(),
      is_pan_received: Joi.boolean(),
    });
  }

  /** @returns {CartCheckoutCustomMeta} */
  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {CustomerDetails} */
  static CustomerDetails() {
    return Joi.object({
      email: Joi.string().allow(""),
      mobile: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {StaffCheckout} */
  static StaffCheckout() {
    return Joi.object({
      employee_code: Joi.string().allow(""),
      user: Joi.string().allow("").required(),
      last_name: Joi.string().allow("").required(),
      first_name: Joi.string().allow("").required(),
      _id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CartCheckoutDetailRequest} */
  static CartCheckoutDetailRequest() {
    return Joi.object({
      custom_meta: Joi.array().items(
        CartApplicationModel.CartCheckoutCustomMeta()
      ),
      customer_details: Joi.any(),
      merchant_code: Joi.string().allow(""),
      id: Joi.string().allow(""),
      payment_auto_confirm: Joi.boolean(),
      payment_mode: Joi.string().allow("").required(),
      aggregator: Joi.string().allow(""),
      address_id: Joi.string().allow(""),
      callback_url: Joi.string().allow(""),
      delivery_address: Joi.any(),
      staff: CartApplicationModel.StaffCheckout(),
      order_type: Joi.string().allow(""),
      ordering_store: Joi.number(),
      extra_meta: Joi.any(),
      payment_identifier: Joi.string().allow(""),
      billing_address: Joi.any(),
      payment_params: Joi.any(),
      billing_address_id: Joi.string().allow(""),
      meta: Joi.any(),
      payment_extra_identifiers: Joi.any(),
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
      delivery_promise: CartApplicationModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartApplicationModel.CartProductInfo()),
      payment_selection_lock: CartApplicationModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      common_config: CartApplicationModel.CartCommonConfig(),
      coupon: CartApplicationModel.CartDetailCoupon(),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      notification: Joi.any(),
      staff_user_id: Joi.string().allow(""),
      success: Joi.boolean(),
      breakup_values: CartApplicationModel.CartBreakup(),
      is_valid: Joi.boolean(),
      currency: CartApplicationModel.CartCurrency(),
      checkout_mode: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      gstin: Joi.string().allow("").allow(null),
      applied_promo_details: Joi.array().items(
        CartApplicationModel.AppliedPromotion()
      ),
      pan_no: Joi.string().allow("").allow(null),
      custom_cart: CartApplicationModel.CustomCart(),
      price_adjustment_applied: Joi.array().items(
        CartApplicationModel.PriceAdjustmentApplied()
      ),
      is_pan_received: Joi.boolean(),
      pan_config: Joi.any(),
      order_id: Joi.string().allow(""),
    });
  }

  /** @returns {CartCheckoutResponse} */
  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow("").allow(null),
      app_intercept_url: Joi.string().allow(""),
      success: Joi.boolean(),
      callback_url: Joi.string().allow(""),
      message: Joi.string().allow(""),
      data: Joi.any(),
      order_id: Joi.string().allow(""),
      cart: CartApplicationModel.CheckCart(),
    });
  }

  /** @returns {GiftDetail} */
  static GiftDetail() {
    return Joi.object({
      is_gift_applied: Joi.boolean(),
      gift_message: Joi.string().allow(""),
    });
  }

  /** @returns {ArticleGiftDetail} */
  static ArticleGiftDetail() {
    return Joi.object({
      article_id: CartApplicationModel.GiftDetail(),
    });
  }

  /** @returns {CartMetaRequest} */
  static CartMetaRequest() {
    return Joi.object({
      gstin: Joi.string().allow(""),
      pick_up_customer_details: Joi.any(),
      checkout_mode: Joi.string().allow(""),
      gift_details: Joi.any().allow(null),
      pan_no: Joi.string().allow("").allow(null),
      comment: Joi.string().allow(""),
      staff_user_id: Joi.string().allow("").allow(null),
      delivery_slots: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {CartMetaResponse} */
  static CartMetaResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      is_valid: Joi.boolean(),
    });
  }

  /** @returns {CartMetaMissingResponse} */
  static CartMetaMissingResponse() {
    return Joi.object({
      errors: CartApplicationModel.CartMetaFieldsValidation(),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
      meta: CartApplicationModel.CartMetaFieldsValidation(),
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
      token: Joi.string().allow(""),
      user: Joi.any(),
      created_on: Joi.string().allow(""),
      source: Joi.any(),
      meta: Joi.any(),
    });
  }

  /** @returns {SharedCart} */
  static SharedCart() {
    return Joi.object({
      cart_id: Joi.number(),
      uid: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      id: Joi.string().allow(""),
      pan_config: Joi.any(),
      delivery_promise: CartApplicationModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartApplicationModel.CartProductInfo()),
      payment_selection_lock: CartApplicationModel.PaymentSelectionLock(),
      delivery_charge_info: Joi.string().allow(""),
      common_config: CartApplicationModel.CartCommonConfig(),
      coupon: CartApplicationModel.CartDetailCoupon(),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      notification: Joi.any(),
      staff_user_id: Joi.string().allow(""),
      success: Joi.boolean(),
      breakup_values: CartApplicationModel.CartBreakup(),
      is_valid: Joi.boolean(),
      currency: CartApplicationModel.CartCurrency(),
      checkout_mode: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      gstin: Joi.string().allow("").allow(null),
      applied_promo_details: Joi.array().items(
        CartApplicationModel.AppliedPromotion()
      ),
      pan_no: Joi.string().allow("").allow(null),
      custom_cart: CartApplicationModel.CustomCart(),
      price_adjustment_applied: Joi.array().items(
        CartApplicationModel.CartAppliedPriceAdjustment()
      ),
      shared_cart_details: CartApplicationModel.SharedCartDetails(),
      is_pan_received: Joi.boolean(),
    });
  }

  /** @returns {SharedCartResponse} */
  static SharedCartResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
      cart: CartApplicationModel.SharedCart(),
    });
  }

  /** @returns {FreeGiftItems} */
  static FreeGiftItems() {
    return Joi.object({
      item_slug: Joi.string().allow(""),
      item_name: Joi.string().allow(""),
      item_price_details: Joi.any(),
      item_brand_name: Joi.string().allow(""),
      item_id: Joi.number(),
      item_images_url: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PromotionOffer} */
  static PromotionOffer() {
    return Joi.object({
      id: Joi.string().allow(""),
      buy_rules: Joi.any(),
      offer_text: Joi.string().allow(""),
      promotion_group: Joi.string().allow(""),
      valid_till: Joi.string().allow(""),
      discount_rules: Joi.array().items(Joi.any()),
      free_gift_items: Joi.array().items(CartApplicationModel.FreeGiftItems()),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {PromotionOffersResponse} */
  static PromotionOffersResponse() {
    return Joi.object({
      available_promotions: Joi.array().items(
        CartApplicationModel.PromotionOffer()
      ),
    });
  }

  /** @returns {OperationErrorResponse} */
  static OperationErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {LadderPrice} */
  static LadderPrice() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),
      offer_price: Joi.number(),
      currency_code: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
    });
  }

  /** @returns {LadderOfferItem} */
  static LadderOfferItem() {
    return Joi.object({
      price: CartApplicationModel.LadderPrice(),
      margin: Joi.number(),
      max_quantity: Joi.number(),
      min_quantity: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {LadderPriceOffer} */
  static LadderPriceOffer() {
    return Joi.object({
      id: Joi.string().allow(""),
      buy_rules: Joi.any(),
      calculate_on: Joi.string().allow(""),
      offer_text: Joi.string().allow(""),
      promotion_group: Joi.string().allow(""),
      valid_till: Joi.string().allow(""),
      discount_rules: Joi.array().items(Joi.any()),
      offer_prices: Joi.array().items(CartApplicationModel.LadderOfferItem()),
      free_gift_items: Joi.array().items(CartApplicationModel.FreeGiftItems()),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {CurrencyInfo} */
  static CurrencyInfo() {
    return Joi.object({
      code: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
    });
  }

  /** @returns {LadderPriceOffers} */
  static LadderPriceOffers() {
    return Joi.object({
      available_offers: Joi.array().items(
        CartApplicationModel.LadderPriceOffer()
      ),
      currency: CartApplicationModel.CurrencyInfo(),
      store_id: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {PaymentMeta} */
  static PaymentMeta() {
    return Joi.object({
      merchant_code: Joi.string().allow(""),
      type: Joi.string().allow(""),
      payment_gateway: Joi.string().allow(""),
      payment_identifier: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentMethod} */
  static PaymentMethod() {
    return Joi.object({
      payment_meta: CartApplicationModel.PaymentMeta().required(),
      mode: Joi.string().allow("").required(),
      payment: Joi.string().allow(""),
      amount: Joi.number().allow(null),
      payment_identifier: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
      payment_extra_identifiers: Joi.any(),
    });
  }

  /** @returns {CartCheckoutDetailV2Request} */
  static CartCheckoutDetailV2Request() {
    return Joi.object({
      custom_meta: Joi.any(),
      customer_details: Joi.any().allow(null),
      merchant_code: Joi.string().allow(""),
      cart_id: Joi.string().allow(""),
      id: Joi.string().allow("").allow(null),
      payment_auto_confirm: Joi.boolean(),
      payment_methods: Joi.array()
        .items(CartApplicationModel.PaymentMethod())
        .required(),
      payment_mode: Joi.string().allow("").required(),
      aggregator: Joi.string().allow(""),
      address_id: Joi.string().allow(""),
      callback_url: Joi.string().allow("").allow(null),
      delivery_address: Joi.any(),
      staff: CartApplicationModel.StaffCheckout(),
      order_type: Joi.string().allow(""),
      ordering_store: Joi.number().allow(null),
      extra_meta: Joi.any(),
      payment_identifier: Joi.string().allow("").allow(null),
      billing_address: Joi.any(),
      payment_params: Joi.any().allow(null),
      billing_address_id: Joi.string().allow(""),
      meta: Joi.any(),
      iin: Joi.string().allow(""),
      network: Joi.string().allow(""),
      type: Joi.string().allow(""),
      card_id: Joi.string().allow(""),
    });
  }

  /** @returns {CartMetaConfigListResponse} */
  static CartMetaConfigListResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: Joi.array().items(CartApplicationModel.CartMetaConfigListObject()),
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
      article_tags: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {CartConfigDetailObj} */
  static CartConfigDetailObj() {
    return Joi.object({
      id: Joi.string().allow(""),
      app_id: Joi.string().allow(""),
      company_id: Joi.number(),
      created_on: Joi.string().allow(""),
      updated_on: Joi.string().allow(""),
      last_modified_by: Joi.string().allow(""),
      min_cart_value: Joi.number(),
      max_cart_value: Joi.number(),
      bulk_coupons: Joi.boolean(),
      max_cart_items: Joi.number(),
      gift_display_text: Joi.string().allow(""),
      delivery_charges: CartApplicationModel.DeliveryChargesConfig(),
      revenue_engine_coupon: Joi.boolean(),
      gift_pricing: Joi.number(),
      enabled: Joi.boolean(),
      is_active: Joi.boolean(),
      order_placing: CartApplicationModel.OrderPlacing(),
      name: Joi.string().allow(""),
      article_tags: Joi.array().items(Joi.string().allow("")),
      allow_coupon_with_rewards: Joi.boolean(),
      gst_input: Joi.boolean(),
      staff_selection: Joi.boolean(),
      placing_for_customer: Joi.boolean(),
      pan_card: CartApplicationModel.PanCard(),
      slug: Joi.string().allow(""),
      is_universal: Joi.boolean(),
      international_delivery_charges: CartApplicationModel.DeliveryChargesConfig(),
    });
  }

  /** @returns {CartConfigDetailResponse} */
  static CartConfigDetailResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: CartApplicationModel.CartConfigDetailObj(),
    });
  }

  /** @returns {SelectAddressResponseError} */
  static SelectAddressResponseError() {
    return Joi.object({
      message: Joi.string().allow(""),
      cart_id: Joi.number(),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      address: CartApplicationModel.AllAddressForSelectAddress(),
    });
  }

  /** @returns {AllAddressForSelectAddress} */
  static AllAddressForSelectAddress() {
    return Joi.object({
      address: Joi.array().items(CartApplicationModel.Address()),
      pii_masking: Joi.boolean(),
    });
  }

  /** @returns {DeleteCartRequest} */
  static DeleteCartRequest() {
    return Joi.object({
      cart_id_list: Joi.array().items(Joi.string().allow("")),
    });
  }
}
module.exports = CartApplicationModel;
