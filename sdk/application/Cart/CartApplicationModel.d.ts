export = CartApplicationModel;
/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug] - Contains list of product slug
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
 * @typedef Address
 * @property {Object} [_custom_json]
 * @property {string} [address]
 * @property {string} [address_type]
 * @property {string} [area]
 * @property {string} [area_code]
 * @property {string} [area_code_slug]
 * @property {string} [checkout_mode]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [country_iso_code]
 * @property {string} [country_phone_code]
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
 * @property {Ownership} [ownership] - Ownership of promotion
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
 * @typedef ArticleGiftDetail
 * @property {GiftDetail} [article_id]
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
 * @typedef BulkPriceOffer
 * @property {OfferItem[]} [offers]
 * @property {OfferSeller} [seller]
 */
/**
 * @typedef BulkPriceResponse
 * @property {BulkPriceOffer[]} [data] - Consist of offers from multiple seller
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
 * @typedef CartCheckoutCustomMeta
 * @property {string} key
 * @property {string} value
 */
/**
 * @typedef CartCheckoutDetailRequest
 * @property {string} [address_id]
 * @property {string} [aggregator]
 * @property {Object} [billing_address]
 * @property {string} [billing_address_id]
 * @property {string} [callback_url]
 * @property {CartCheckoutCustomMeta[]} [custom_meta]
 * @property {Object} [customer_details] - Customer details
 * @property {Object} [delivery_address]
 * @property {Object} [extra_meta]
 * @property {string} [id]
 * @property {string} [merchant_code]
 * @property {Object} [meta]
 * @property {string} [order_type]
 * @property {number} [ordering_store]
 * @property {boolean} [payment_auto_confirm]
 * @property {Object} [payment_extra_identifiers]
 * @property {string} [payment_identifier]
 * @property {string} payment_mode
 * @property {Object} [payment_params]
 * @property {StaffCheckout} [staff]
 */
/**
 * @typedef CartCheckoutDetailV2Request
 * @property {string} [address_id]
 * @property {string} [aggregator]
 * @property {Object} [billing_address]
 * @property {string} [billing_address_id]
 * @property {string} [callback_url]
 * @property {string} [cart_id]
 * @property {Object} [custom_meta]
 * @property {Object} [customer_details] - Customer details
 * @property {Object} [delivery_address]
 * @property {Object} [extra_meta]
 * @property {string} [id]
 * @property {string} [merchant_code]
 * @property {Object} [meta]
 * @property {string} [order_type]
 * @property {number} [ordering_store]
 * @property {boolean} [payment_auto_confirm]
 * @property {string} [payment_identifier]
 * @property {PaymentMethod[]} payment_methods
 * @property {string} payment_mode
 * @property {Object} [payment_params]
 * @property {StaffCheckout} [staff]
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
 * @typedef CartCommonConfig
 * @property {DeliveryChargesConfig} [delivery_charges_config]
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
 * @typedef CartDetailResponse
 * @property {AppliedPromotion[]} [applied_promo_details]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [buy_now]
 * @property {number} [cart_id]
 * @property {string} [checkout_mode]
 * @property {string} [comment]
 * @property {CartCommonConfig} [common_config]
 * @property {CartDetailCoupon} [coupon]
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
 * @property {Object} [notification]
 * @property {Object} [pan_config]
 * @property {string} [pan_no]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [restrict_checkout]
 * @property {string} [staff_user_id]
 * @property {boolean} [success]
 * @property {string} [uid]
 */
/**
 * @typedef CartItemCountResponse
 * @property {number} [user_cart_items_count] - Item count present in cart
 */
/**
 * @typedef CartMetaMissingResponse
 * @property {string[]} [errors]
 */
/**
 * @typedef CartMetaRequest
 * @property {string} [checkout_mode]
 * @property {string} [comment]
 * @property {Object} [delivery_slots]
 * @property {ArticleGiftDetail} [gift_details]
 * @property {string} [gstin]
 * @property {Object} [pick_up_customer_details] - Customer contact details for
 *   customer pickup at store
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
 * @property {ProductPricePerUnitInfo} [price_per_unit]
 * @property {CartProduct} [product]
 * @property {PromoMeta} [promo_meta]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {number} [quantity]
 */
/**
 * @typedef CartShipmentsResponse
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [buy_now]
 * @property {number} [cart_id]
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
 * @property {string} [last_modified]
 * @property {string} [message]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [restrict_checkout]
 * @property {ShipmentResponse[]} [shipments]
 * @property {string} [uid]
 */
/**
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid] - Product Category Id
 */
/**
 * @typedef ChargesThreshold
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
 * @typedef CouponDetails
 * @property {string} [code]
 * @property {number} [discount_single_quantity]
 * @property {number} [discount_total_quantity]
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
 * @typedef CurrencyInfo
 * @property {string} [code]
 * @property {string} [symbol]
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
 * @typedef DeliveryChargesConfig
 * @property {ChargesThreshold[]} [charges]
 * @property {boolean} [enabled]
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
 * @typedef FreeGiftItem
 * @property {string} [item_brand_name] - Item brand name
 * @property {number} [item_id] - Item id
 * @property {string[]} [item_images_url] - Item images URL
 * @property {string} [item_name] - Item name
 * @property {Object} [item_price_details] - Item price details
 * @property {string} [item_slug] - Item slug
 */
/**
 * @typedef FreeGiftItems
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
 * @typedef GetAddressesResponse
 * @property {Address[]} [address]
 * @property {boolean} [pii_masking]
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
 * @typedef GiftDetail
 * @property {string} [gift_message]
 * @property {boolean} [is_gift_applied]
 */
/**
 * @typedef LadderOfferItem
 * @property {number} [margin] - Percentage value of discount
 * @property {number} [max_quantity] - Minimum quantity upto which offer is
 *   applicable. If not present that offer is applicable on all quantities
 * @property {number} [min_quantity] - Minimum quantity from which offer is applicable
 * @property {LadderPrice} [price]
 * @property {string} [type] - Offer type
 */
/**
 * @typedef LadderPrice
 * @property {string} [currency_code] - Currency code for all amounts
 * @property {string} [currency_symbol] - Currency symbol for currency
 * @property {number} [effective] - Current per unit price of product after
 *   existing deductions
 * @property {number} [marked] - Original price of product
 * @property {number} [offer_price] - Discounted per unit price for current offer object
 */
/**
 * @typedef LadderPriceOffer
 * @property {Object} [buy_rules] - Buy rules of promotions
 * @property {string} [calculate_on] - If this ladder offer is to be calculated
 *   on MRP or ESP price
 * @property {string} [description] - Offer details including T&C
 * @property {Object[]} [discount_rules] - Discount rules of promotions
 * @property {FreeGiftItems[]} [free_gift_items] - Details of free gift items
 * @property {string} [id] - Promotion id
 * @property {LadderOfferItem[]} [offer_prices]
 * @property {string} [offer_text] - Offer title
 * @property {string} [promotion_group] - Group of promotion belongs to
 * @property {string} [valid_till] - Datetime ISOString for promotion end date
 */
/**
 * @typedef LadderPriceOffers
 * @property {LadderPriceOffer[]} [available_offers]
 * @property {CurrencyInfo} [currency]
 */
/**
 * @typedef LoyaltyPoints
 * @property {number} [applicable]
 * @property {string} [description]
 * @property {boolean} [is_applied]
 * @property {number} [total]
 */
/**
 * @typedef OfferItem
 * @property {boolean} [auto_applied] - Whether offer discount is auto applied in cart
 * @property {boolean} [best] - Is true for best offer from all offers present
 *   for all sellers
 * @property {number} [margin] - Percentage value of discount
 * @property {OfferPrice} [price]
 * @property {number} [quantity] - Quantity on which offer is applicable
 * @property {number} [total] - Total price of offer quantity with discount
 * @property {string} [type] - Offer type
 */
/**
 * @typedef OfferPrice
 * @property {number} [bulk_effective] - Discounted per unit price for current
 *   offer object
 * @property {string} [currency_code] - Currency code for all amounts
 * @property {string} [currency_symbol] - Currency symbol for currency
 * @property {number} [effective] - Current per unit price of product after
 *   existing deductions
 * @property {number} [marked] - Original price of product
 */
/**
 * @typedef OfferSeller
 * @property {string} [name]
 * @property {number} [uid] - Seller id
 */
/**
 * @typedef OperationErrorResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef Ownership
 * @property {string} [payable_by] - Promo amount bearable party
 * @property {string} [payable_category] - Promo amount payable category
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
 * @property {Object} [payment_extra_identifiers]
 * @property {PaymentMeta} payment_meta
 */
/**
 * @typedef PaymentSelectionLock
 * @property {string} [default_options]
 * @property {boolean} [enabled]
 * @property {string} [payment_identifier]
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
 * @typedef ProductPricePerUnit
 * @property {number} [add_on]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {number} [selling_price]
 */
/**
 * @typedef ProductPricePerUnitInfo
 * @property {ProductPricePerUnit} [base]
 * @property {ProductPricePerUnit} [converted]
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
 * @typedef PromotionOffer
 * @property {Object} [buy_rules] - Buy rules of promotions
 * @property {string} [description] - Offer details including T&C
 * @property {Object[]} [discount_rules] - Discount rules of promotions
 * @property {FreeGiftItems[]} [free_gift_items] - Details of free gift items
 * @property {string} [id] - Promotion id
 * @property {string} [offer_text] - Offer title
 * @property {string} [promotion_group] - Group of promotion belongs to
 * @property {string} [valid_till] - Datetime ISOString for promotion end date
 */
/**
 * @typedef PromotionOffersResponse
 * @property {PromotionOffer[]} [available_promotions]
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
 * @property {number} [mop_total]
 * @property {number} [mrp_total]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {number} [vog]
 * @property {number} [you_saved]
 */
/**
 * @typedef RewardPointRequest
 * @property {boolean} points
 */
/**
 * @typedef SaveAddressResponse
 * @property {string} [id]
 * @property {boolean} [is_default_address]
 * @property {boolean} [success]
 */
/**
 * @typedef SelectCartAddressRequest
 * @property {string} [billing_address_id]
 * @property {string} [cart_id]
 * @property {string} [id]
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
 * @typedef ShipmentPromise
 * @property {PromiseFormatted} [formatted]
 * @property {PromiseTimestamp} [timestamp]
 */
/**
 * @typedef ShipmentResponse
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
 * @typedef StaffCheckout
 * @property {string} _id
 * @property {string} [employee_code]
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} user
 */
/**
 * @typedef StoreInfo
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {number} [uid]
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
 * @typedef UpdateCartRequest
 * @property {UpdateProductCart[]} [items]
 * @property {string} operation
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
declare class CartApplicationModel {
}
declare namespace CartApplicationModel {
    export { ActionQuery, AddCartDetailResponse, AddCartRequest, AddProductCart, Address, AppliedFreeArticles, AppliedPromotion, ApplyCouponRequest, ArticleGiftDetail, ArticlePriceInfo, BaseInfo, BasePrice, BulkPriceOffer, BulkPriceResponse, BuyRules, CartBreakup, CartCheckoutCustomMeta, CartCheckoutDetailRequest, CartCheckoutDetailV2Request, CartCheckoutResponse, CartCommonConfig, CartCurrency, CartDetailCoupon, CartDetailResponse, CartItemCountResponse, CartMetaMissingResponse, CartMetaRequest, CartMetaResponse, CartProduct, CartProductIdentifer, CartProductInfo, CartShipmentsResponse, CategoryInfo, ChargesThreshold, CheckCart, Coupon, CouponBreakup, CouponDetails, CouponValidity, CurrencyInfo, CustomerDetails, DeleteAddressResponse, DeleteCartDetailResponse, DeliveryChargesConfig, DiscountRulesApp, DisplayBreakup, FreeGiftItem, FreeGiftItems, GeoLocation, GetAddressesResponse, GetCouponResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, GiftDetail, LadderOfferItem, LadderPrice, LadderPriceOffer, LadderPriceOffers, LoyaltyPoints, OfferItem, OfferPrice, OfferSeller, OperationErrorResponse, Ownership, PageCoupon, PaymentCouponValidate, PaymentMeta, PaymentMethod, PaymentSelectionLock, ProductAction, ProductArticle, ProductAvailability, ProductAvailabilitySize, ProductImage, ProductPrice, ProductPriceInfo, ProductPricePerUnit, ProductPricePerUnitInfo, PromiseFormatted, PromiseTimestamp, PromoMeta, PromotionOffer, PromotionOffersResponse, RawBreakup, RewardPointRequest, SaveAddressResponse, SelectCartAddressRequest, SharedCart, SharedCartDetails, SharedCartResponse, ShipmentPromise, ShipmentResponse, StaffCheckout, StoreInfo, Tags, UpdateAddressResponse, UpdateCartDetailResponse, UpdateCartPaymentRequest, UpdateCartRequest, UpdateProductCart };
}
/** @returns {ActionQuery} */
declare function ActionQuery(): ActionQuery;
type ActionQuery = {
    /**
     * - Contains list of product slug
     */
    product_slug?: string[];
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
/** @returns {Address} */
declare function Address(): Address;
type Address = {
    _custom_json?: any;
    address?: string;
    address_type?: string;
    area?: string;
    area_code?: string;
    area_code_slug?: string;
    checkout_mode?: string;
    city?: string;
    country?: string;
    country_code?: string;
    country_iso_code?: string;
    country_phone_code?: string;
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
    ownership?: Ownership;
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
/** @returns {ArticleGiftDetail} */
declare function ArticleGiftDetail(): ArticleGiftDetail;
type ArticleGiftDetail = {
    article_id?: GiftDetail;
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
/** @returns {CartCheckoutCustomMeta} */
declare function CartCheckoutCustomMeta(): CartCheckoutCustomMeta;
type CartCheckoutCustomMeta = {
    key: string;
    value: string;
};
/** @returns {CartCheckoutDetailRequest} */
declare function CartCheckoutDetailRequest(): CartCheckoutDetailRequest;
type CartCheckoutDetailRequest = {
    address_id?: string;
    aggregator?: string;
    billing_address?: any;
    billing_address_id?: string;
    callback_url?: string;
    custom_meta?: CartCheckoutCustomMeta[];
    /**
     * - Customer details
     */
    customer_details?: any;
    delivery_address?: any;
    extra_meta?: any;
    id?: string;
    merchant_code?: string;
    meta?: any;
    order_type?: string;
    ordering_store?: number;
    payment_auto_confirm?: boolean;
    payment_extra_identifiers?: any;
    payment_identifier?: string;
    payment_mode: string;
    payment_params?: any;
    staff?: StaffCheckout;
};
/** @returns {CartCheckoutDetailV2Request} */
declare function CartCheckoutDetailV2Request(): CartCheckoutDetailV2Request;
type CartCheckoutDetailV2Request = {
    address_id?: string;
    aggregator?: string;
    billing_address?: any;
    billing_address_id?: string;
    callback_url?: string;
    cart_id?: string;
    custom_meta?: any;
    /**
     * - Customer details
     */
    customer_details?: any;
    delivery_address?: any;
    extra_meta?: any;
    id?: string;
    merchant_code?: string;
    meta?: any;
    order_type?: string;
    ordering_store?: number;
    payment_auto_confirm?: boolean;
    payment_identifier?: string;
    payment_methods: PaymentMethod[];
    payment_mode: string;
    payment_params?: any;
    staff?: StaffCheckout;
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
/** @returns {CartCommonConfig} */
declare function CartCommonConfig(): CartCommonConfig;
type CartCommonConfig = {
    delivery_charges_config?: DeliveryChargesConfig;
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
/** @returns {CartDetailResponse} */
declare function CartDetailResponse(): CartDetailResponse;
type CartDetailResponse = {
    applied_promo_details?: AppliedPromotion[];
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    cart_id?: number;
    checkout_mode?: string;
    comment?: string;
    common_config?: CartCommonConfig;
    coupon?: CartDetailCoupon;
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
    notification?: any;
    pan_config?: any;
    pan_no?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    staff_user_id?: string;
    success?: boolean;
    uid?: string;
};
/** @returns {CartItemCountResponse} */
declare function CartItemCountResponse(): CartItemCountResponse;
type CartItemCountResponse = {
    /**
     * - Item count present in cart
     */
    user_cart_items_count?: number;
};
/** @returns {CartMetaMissingResponse} */
declare function CartMetaMissingResponse(): CartMetaMissingResponse;
type CartMetaMissingResponse = {
    errors?: string[];
};
/** @returns {CartMetaRequest} */
declare function CartMetaRequest(): CartMetaRequest;
type CartMetaRequest = {
    checkout_mode?: string;
    comment?: string;
    delivery_slots?: any;
    gift_details?: ArticleGiftDetail;
    gstin?: string;
    /**
     * - Customer contact details for
     * customer pickup at store
     */
    pick_up_customer_details?: any;
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
    price_per_unit?: ProductPricePerUnitInfo;
    product?: CartProduct;
    promo_meta?: PromoMeta;
    promotions_applied?: AppliedPromotion[];
    quantity?: number;
};
/** @returns {CartShipmentsResponse} */
declare function CartShipmentsResponse(): CartShipmentsResponse;
type CartShipmentsResponse = {
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    cart_id?: number;
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
    last_modified?: string;
    message?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    shipments?: ShipmentResponse[];
    uid?: string;
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
/** @returns {ChargesThreshold} */
declare function ChargesThreshold(): ChargesThreshold;
type ChargesThreshold = {
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
/** @returns {CouponDetails} */
declare function CouponDetails(): CouponDetails;
type CouponDetails = {
    code?: string;
    discount_single_quantity?: number;
    discount_total_quantity?: number;
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
/** @returns {CurrencyInfo} */
declare function CurrencyInfo(): CurrencyInfo;
type CurrencyInfo = {
    code?: string;
    symbol?: string;
};
/** @returns {CustomerDetails} */
declare function CustomerDetails(): CustomerDetails;
type CustomerDetails = {
    email?: string;
    mobile: string;
    name?: string;
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
/** @returns {DeliveryChargesConfig} */
declare function DeliveryChargesConfig(): DeliveryChargesConfig;
type DeliveryChargesConfig = {
    charges?: ChargesThreshold[];
    enabled?: boolean;
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
/** @returns {FreeGiftItems} */
declare function FreeGiftItems(): FreeGiftItems;
type FreeGiftItems = {
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
/** @returns {GetAddressesResponse} */
declare function GetAddressesResponse(): GetAddressesResponse;
type GetAddressesResponse = {
    address?: Address[];
    pii_masking?: boolean;
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
/** @returns {GiftDetail} */
declare function GiftDetail(): GiftDetail;
type GiftDetail = {
    gift_message?: string;
    is_gift_applied?: boolean;
};
/** @returns {LadderOfferItem} */
declare function LadderOfferItem(): LadderOfferItem;
type LadderOfferItem = {
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
    price?: LadderPrice;
    /**
     * - Offer type
     */
    type?: string;
};
/** @returns {LadderPrice} */
declare function LadderPrice(): LadderPrice;
type LadderPrice = {
    /**
     * - Currency code for all amounts
     */
    currency_code?: string;
    /**
     * - Currency symbol for currency
     */
    currency_symbol?: string;
    /**
     * - Current per unit price of product after
     * existing deductions
     */
    effective?: number;
    /**
     * - Original price of product
     */
    marked?: number;
    /**
     * - Discounted per unit price for current offer object
     */
    offer_price?: number;
};
/** @returns {LadderPriceOffer} */
declare function LadderPriceOffer(): LadderPriceOffer;
type LadderPriceOffer = {
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
     * - Offer details including T&C
     */
    description?: string;
    /**
     * - Discount rules of promotions
     */
    discount_rules?: any[];
    /**
     * - Details of free gift items
     */
    free_gift_items?: FreeGiftItems[];
    /**
     * - Promotion id
     */
    id?: string;
    offer_prices?: LadderOfferItem[];
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
};
/** @returns {LadderPriceOffers} */
declare function LadderPriceOffers(): LadderPriceOffers;
type LadderPriceOffers = {
    available_offers?: LadderPriceOffer[];
    currency?: CurrencyInfo;
};
/** @returns {LoyaltyPoints} */
declare function LoyaltyPoints(): LoyaltyPoints;
type LoyaltyPoints = {
    applicable?: number;
    description?: string;
    is_applied?: boolean;
    total?: number;
};
/** @returns {OfferItem} */
declare function OfferItem(): OfferItem;
type OfferItem = {
    /**
     * - Whether offer discount is auto applied in cart
     */
    auto_applied?: boolean;
    /**
     * - Is true for best offer from all offers present
     * for all sellers
     */
    best?: boolean;
    /**
     * - Percentage value of discount
     */
    margin?: number;
    price?: OfferPrice;
    /**
     * - Quantity on which offer is applicable
     */
    quantity?: number;
    /**
     * - Total price of offer quantity with discount
     */
    total?: number;
    /**
     * - Offer type
     */
    type?: string;
};
/** @returns {OfferPrice} */
declare function OfferPrice(): OfferPrice;
type OfferPrice = {
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
     * - Currency symbol for currency
     */
    currency_symbol?: string;
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
/** @returns {OfferSeller} */
declare function OfferSeller(): OfferSeller;
type OfferSeller = {
    name?: string;
    /**
     * - Seller id
     */
    uid?: number;
};
/** @returns {OperationErrorResponse} */
declare function OperationErrorResponse(): OperationErrorResponse;
type OperationErrorResponse = {
    message?: string;
    success?: boolean;
};
/** @returns {Ownership} */
declare function Ownership(): Ownership;
type Ownership = {
    /**
     * - Promo amount bearable party
     */
    payable_by?: string;
    /**
     * - Promo amount payable category
     */
    payable_category?: string;
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
    payment_extra_identifiers?: any;
    payment_meta: PaymentMeta;
};
/** @returns {PaymentSelectionLock} */
declare function PaymentSelectionLock(): PaymentSelectionLock;
type PaymentSelectionLock = {
    default_options?: string;
    enabled?: boolean;
    payment_identifier?: string;
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
/** @returns {ProductPricePerUnit} */
declare function ProductPricePerUnit(): ProductPricePerUnit;
type ProductPricePerUnit = {
    add_on?: number;
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
    marked?: number;
    selling_price?: number;
};
/** @returns {ProductPricePerUnitInfo} */
declare function ProductPricePerUnitInfo(): ProductPricePerUnitInfo;
type ProductPricePerUnitInfo = {
    base?: ProductPricePerUnit;
    converted?: ProductPricePerUnit;
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
/** @returns {PromotionOffer} */
declare function PromotionOffer(): PromotionOffer;
type PromotionOffer = {
    /**
     * - Buy rules of promotions
     */
    buy_rules?: any;
    /**
     * - Offer details including T&C
     */
    description?: string;
    /**
     * - Discount rules of promotions
     */
    discount_rules?: any[];
    /**
     * - Details of free gift items
     */
    free_gift_items?: FreeGiftItems[];
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
     * - Datetime ISOString for promotion end date
     */
    valid_till?: string;
};
/** @returns {PromotionOffersResponse} */
declare function PromotionOffersResponse(): PromotionOffersResponse;
type PromotionOffersResponse = {
    available_promotions?: PromotionOffer[];
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
    mop_total?: number;
    mrp_total?: number;
    subtotal?: number;
    total?: number;
    vog?: number;
    you_saved?: number;
};
/** @returns {RewardPointRequest} */
declare function RewardPointRequest(): RewardPointRequest;
type RewardPointRequest = {
    points: boolean;
};
/** @returns {SaveAddressResponse} */
declare function SaveAddressResponse(): SaveAddressResponse;
type SaveAddressResponse = {
    id?: string;
    is_default_address?: boolean;
    success?: boolean;
};
/** @returns {SelectCartAddressRequest} */
declare function SelectCartAddressRequest(): SelectCartAddressRequest;
type SelectCartAddressRequest = {
    billing_address_id?: string;
    cart_id?: string;
    id?: string;
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
/** @returns {ShipmentPromise} */
declare function ShipmentPromise(): ShipmentPromise;
type ShipmentPromise = {
    formatted?: PromiseFormatted;
    timestamp?: PromiseTimestamp;
};
/** @returns {ShipmentResponse} */
declare function ShipmentResponse(): ShipmentResponse;
type ShipmentResponse = {
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
/** @returns {StaffCheckout} */
declare function StaffCheckout(): StaffCheckout;
type StaffCheckout = {
    _id: string;
    employee_code?: string;
    first_name: string;
    last_name: string;
    user: string;
};
/** @returns {StoreInfo} */
declare function StoreInfo(): StoreInfo;
type StoreInfo = {
    name?: string;
    store_code?: string;
    uid?: number;
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
/** @returns {UpdateCartRequest} */
declare function UpdateCartRequest(): UpdateCartRequest;
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
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
