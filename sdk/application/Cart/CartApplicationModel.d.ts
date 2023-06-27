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
 * @property {Object} [_custom_json] - Custom json to supporting article customization
 * @property {Object} [article_assignment] - Strategy and level information for
 *   article assignment
 * @property {string} [article_id]
 * @property {string} [display]
 * @property {Object} [extra_meta] - Any extra meta information related to article
 * @property {number} [item_id] - Item_id of added product
 * @property {string} [item_size] - Article size
 * @property {Object} [meta]
 * @property {Object[]} [parent_item_identifiers] - Contains information about
 *   parent item in case of parent-child relation
 * @property {boolean} [pos] - True for pos systems
 * @property {string[]} [product_group_tags] - Product_group_tags to group
 *   articles in same group
 * @property {number} [quantity] - Article quantity
 * @property {number} [seller_id] - Seller id
 * @property {number} [store_id] - Store id
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
 * @property {Ownership} [ownership] - Ownership of promotion
 * @property {string} [promo_id] - Promotion id
 * @property {string} [promotion_group] - Promotion group for the promotion
 * @property {string} [promotion_name] - Promotion name of current promotion
 * @property {string} [promotion_offer_text] - Offer text of current promotion
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
 * @property {CustomerDetails} [customer_details] - Customer details
 * @property {Object} [delivery_address]
 * @property {Object} [extra_meta]
 * @property {string} [id]
 * @property {string} [merchant_code]
 * @property {Object} [meta]
 * @property {string} [order_type]
 * @property {number} [ordering_store]
 * @property {boolean} [payment_auto_confirm]
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
 * @property {CustomerDetails} [customer_details] - Customer details
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
 * @typedef CartCurrency
 * @property {string} [code] - Currency code defined by ISO 4217:2015
 * @property {string} [symbol] - Refers to a graphic symbol or sign that is used
 *   to denote a specific currency
 */
/**
 * @typedef CartDetailResponse
 * @property {AppliedPromotion[]} [applied_promo_details]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [buy_now] - True for buy_now cart. Default value is False
 * @property {string} [checkout_mode] - Describe checkout mode(self/other) of the cart
 * @property {string} [comment] - Comment related to cart
 * @property {string} [coupon_text] - Static coupon text
 * @property {CartCurrency} [currency]
 * @property {string} [delivery_charge_info] - Information related to delivery charge
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [gstin] - Gstin number
 * @property {string} [id] - Unique cart id
 * @property {boolean} [is_valid] - Boolean flag to check if response is valid
 * @property {CartProductInfo[]} [items]
 * @property {string} [last_modified] - Last modified cart date
 * @property {string} [message] - Display error message if any else empty string
 * @property {Object} [pan_config]
 * @property {string} [pan_no]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [restrict_checkout]
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
 * @property {string} [message] - Cart meta update response message
 */
/**
 * @typedef CartProduct
 * @property {Object} [_custom_json]
 * @property {ProductAction} [action]
 * @property {BaseInfo} [brand] - Contains name and identifier of brand
 * @property {CategoryInfo[]} [categories] - Contains name and identifier of categories
 * @property {ProductImage[]} [images]
 * @property {string} [item_code]
 * @property {string} [name] - Product name
 * @property {NetQuantity} [net_quantity]
 * @property {string} [slug] - Unique product url name generated via product
 *   name and other meta data
 * @property {string[]} [tags]
 * @property {Tags} [teaser_tag]
 * @property {string} [type] - Product type
 * @property {number} [uid] - Product unique identifier
 */
/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier] - Article idenfier generated by cart
 */
/**
 * @typedef CartProductInfo
 * @property {ProductArticle} [article]
 * @property {ProductAvailability} [availability]
 * @property {Object} [bulk_offer] - Product bulk offer
 * @property {CouponDetails} [coupon]
 * @property {string} [coupon_message] - Coupon applied message along with coupon code
 * @property {Object} [custom_order]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [discount] - Discount for the selected product
 * @property {CartProductIdentifer} identifiers
 * @property {boolean} [is_set]
 * @property {string} [key] - Key of product created by combining product unique
 *   id and size
 * @property {string} [message] - Product related messages if any error else empty string
 * @property {Object} [moq] - Maximum & minimum order quantity information
 * @property {Object} [parent_item_identifiers] - Contains information about
 *   parent item in case of parent-child relation
 * @property {ProductPriceInfo} [price] - Refers to product's base and converted price
 * @property {ProductPriceInfo} [price_per_unit] - Refers to product's base and
 *   converted price per unit
 * @property {CartProduct} [product]
 * @property {PromoMeta} [promo_meta] - Promo meta information
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {number} [quantity] - Quantity of product
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
 * @property {string} [code] - Coupon code
 * @property {string} [coupon_type]
 * @property {number} [coupon_value]
 * @property {string} [description]
 * @property {boolean} [is_applied] - Boolean flag that denotes if coupon is
 *   applied or not. True if applied else False
 * @property {number} [max_discount_value]
 * @property {string} [message] - Coupon message
 * @property {number} [minimum_cart_value]
 * @property {string} [sub_title]
 * @property {string} [title]
 * @property {string} [type] - Type of coupon (absolute/percentage/bogo/bundle/payment)
 * @property {string} [uid] - Unique coupon identifier
 * @property {number} [value] - Coupon discount amount value
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
 * @typedef DiscountRulesApp
 * @property {Object} [item_criteria] - Item criteria of promotion
 * @property {string[]} [matched_buy_rules] - Matched buy rules for promotion
 * @property {Object} [offer] - Offer for promotion
 * @property {Object} [raw_offer] - Raw offer details for promotion
 */
/**
 * @typedef DisplayBreakup
 * @property {string} [currency_code] - Refers to identify currencies in a
 *   standardized and globally recognized manner
 * @property {string} [currency_symbol] - Refers to a graphic symbol or sign
 *   that is used to denote a specific currency
 * @property {string} [display] - Refers to display text for breakup
 * @property {string} [key] - Refers to key name of display attribute
 * @property {string[]} [message] - Display error message if any, else an empty list
 * @property {number} [value] - Refers to value of display attribute
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
 * @property {number} [applicable] - Refers to applicable credit value
 * @property {string} [description] - Loyalty points description text
 * @property {boolean} [is_applied] - Boolean flag that denotes if coupon is
 *   applied or not. True if applied else False
 * @property {number} [total] - Refers to total value of loyalty points
 */
/**
 * @typedef NetQuantity
 * @property {string} [unit]
 * @property {string} [value]
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
 * @property {PaymentMeta} payment_meta
 */
/**
 * @typedef PaymentSelectionLock
 * @property {string} [default_options]
 * @property {boolean} [enabled] - Boolean flag to check if payment selection
 *   lock is enabled or not.
 * @property {string} [payment_identifier]
 */
/**
 * @typedef ProductAction
 * @property {ActionQuery} [query]
 * @property {string} [type] - Product type
 * @property {string} [url] - Product action url
 */
/**
 * @typedef ProductArticle
 * @property {Object} [_custom_json] - Custom json to supporting article customization
 * @property {Object} [cart_item_meta]
 * @property {Object} [extra_meta] - Any extra meta information related to article
 * @property {Object} [gift_card]
 * @property {Object} [identifier]
 * @property {boolean} [is_gift_visible]
 * @property {number} [mto_quantity]
 * @property {Object} [parent_item_identifiers] - Contains information about
 *   parent item in case of parent-child relation
 * @property {ArticlePriceInfo} [price] - Refers to article's base and converted price
 * @property {string[]} [product_group_tags] - Product_group_tags to group
 *   articles in same group
 * @property {number} [quantity] - Available quantity for the article
 * @property {BaseInfo} [seller] - Contains name and identifier of seller
 * @property {string} [seller_identifier]
 * @property {string} [size] - Article size
 * @property {StoreInfo} [store] - Contains name and identifier of store
 * @property {string} [type] - Type of article
 * @property {string} [uid] - Article unique identifier
 */
/**
 * @typedef ProductAvailability
 * @property {ProductAvailabilitySize[]} [available_sizes]
 * @property {boolean} [deliverable] - Boolean flag to check if product is deliverable
 * @property {boolean} [is_valid] - Boolean flag to check if required product is
 *   available and deliverable
 * @property {number} [other_store_quantity] - Refers to other store quantity
 * @property {boolean} [out_of_stock] - Boolean flag to check if product is out of stock
 * @property {string[]} [sizes] - Refers to list of available product sizes
 */
/**
 * @typedef ProductAvailabilitySize
 * @property {Object} [_custom_json]
 * @property {string} [display] - Refers to size of product
 * @property {boolean} [is_available] - Boolean refers to product available
 *   size. True if available else False
 * @property {Object} [meta]
 * @property {string} [value] - Refers to size of product
 */
/**
 * @typedef ProductImage
 * @property {string} [aspect_ratio] - Product image aspect ratio
 * @property {string} [secure_url] - Product image secure url
 * @property {string} [url] - Product image url
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
 * @property {string} [max] - String value for max delivery promise
 * @property {string} [min] - String value for min delivery promise
 */
/**
 * @typedef PromiseTimestamp
 * @property {number} [max] - Float value for max delivery promise
 * @property {number} [min] - Float value for min delivery promise
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
 * @property {number} [cod_charge] - Cash on delivery charges value
 * @property {number} [convenience_fee] - Refers to additional cost associated
 *   with providing convenience or special services to the customer
 * @property {number} [coupon] - Coupon value to show breakup.
 * @property {number} [delivery_charge] - Delivery charges value
 * @property {number} [discount] - Refers to discount price value
 * @property {number} [fynd_cash] - Fynd cash value
 * @property {number} [gift_card]
 * @property {number} [gst_charges] - Refer to the Goods and Services Tax
 *   applied to the products or services included in the cart
 * @property {number} [mrp_total] - Represents the total cost based on the
 *   maximum retail prices of the items
 * @property {number} [subtotal] - Represents the total cost of the items before
 *   any additional charges or discounts
 * @property {number} [total] - Represents the complete cost that the customer
 *   will be charged for their cart, considering all relevant factors such as
 *   item prices, taxes, fees, and discounts
 * @property {number} [vog] - Total value of good refers to the cumulative value
 *   or cost of all the goods or products included in the cart
 * @property {number} [you_saved] - Refers to the amount of money that a
 *   customer has saved due to discounts, promotions, or any other cost
 *   reductions applied to their cart
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
 * @property {Object} [_custom_json] - Custom json to supporting article customization
 * @property {string} [article_id]
 * @property {Object} [extra_meta] - Any extra meta information related to article
 * @property {CartProductIdentifer} identifiers
 * @property {number} [item_id] - Item_id of added product
 * @property {number} [item_index] - Index of updated article
 * @property {string} [item_size] - Article size
 * @property {Object} [meta]
 * @property {Object} [parent_item_identifiers] - Contains information about
 *   parent item in case of parent-child relation
 * @property {number} [quantity] - Article updated quantity
 */
declare class CartApplicationModel {
}
declare namespace CartApplicationModel {
    export { ActionQuery, AddCartDetailResponse, AddCartRequest, AddProductCart, Address, AppliedFreeArticles, AppliedPromotion, ApplyCouponRequest, ArticleGiftDetail, ArticlePriceInfo, BaseInfo, BasePrice, BulkPriceOffer, BulkPriceResponse, BuyRules, CartBreakup, CartCheckoutCustomMeta, CartCheckoutDetailRequest, CartCheckoutDetailV2Request, CartCheckoutResponse, CartCurrency, CartDetailResponse, CartItemCountResponse, CartMetaMissingResponse, CartMetaRequest, CartMetaResponse, CartProduct, CartProductIdentifer, CartProductInfo, CartShipmentsResponse, CategoryInfo, CheckCart, Coupon, CouponBreakup, CouponDetails, CouponValidity, CurrencyInfo, CustomerDetails, DeleteAddressResponse, DeleteCartDetailResponse, DiscountRulesApp, DisplayBreakup, FreeGiftItem, FreeGiftItems, GeoLocation, GetAddressesResponse, GetCouponResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, GiftDetail, LadderOfferItem, LadderPrice, LadderPriceOffer, LadderPriceOffers, LoyaltyPoints, NetQuantity, OfferItem, OfferPrice, OfferSeller, OperationErrorResponse, Ownership, PageCoupon, PaymentCouponValidate, PaymentMeta, PaymentMethod, PaymentSelectionLock, ProductAction, ProductArticle, ProductAvailability, ProductAvailabilitySize, ProductImage, ProductPrice, ProductPriceInfo, PromiseFormatted, PromiseTimestamp, PromoMeta, PromotionOffer, PromotionOffersResponse, RawBreakup, RewardPointRequest, SaveAddressResponse, SelectCartAddressRequest, SharedCart, SharedCartDetails, SharedCartResponse, ShipmentPromise, ShipmentResponse, StaffCheckout, StoreInfo, Tags, UpdateAddressResponse, UpdateCartDetailResponse, UpdateCartPaymentRequest, UpdateCartRequest, UpdateProductCart };
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
    /**
     * - Custom json to supporting article customization
     */
    _custom_json?: any;
    /**
     * - Strategy and level information for
     * article assignment
     */
    article_assignment?: any;
    article_id?: string;
    display?: string;
    /**
     * - Any extra meta information related to article
     */
    extra_meta?: any;
    /**
     * - Item_id of added product
     */
    item_id?: number;
    /**
     * - Article size
     */
    item_size?: string;
    meta?: any;
    /**
     * - Contains information about
     * parent item in case of parent-child relation
     */
    parent_item_identifiers?: any[];
    /**
     * - True for pos systems
     */
    pos?: boolean;
    /**
     * - Product_group_tags to group
     * articles in same group
     */
    product_group_tags?: string[];
    /**
     * - Article quantity
     */
    quantity?: number;
    /**
     * - Seller id
     */
    seller_id?: number;
    /**
     * - Store id
     */
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
     * - Offer text of current promotion
     */
    promotion_offer_text?: string;
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
    customer_details?: CustomerDetails;
    delivery_address?: any;
    extra_meta?: any;
    id?: string;
    merchant_code?: string;
    meta?: any;
    order_type?: string;
    ordering_store?: number;
    payment_auto_confirm?: boolean;
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
    customer_details?: CustomerDetails;
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
/** @returns {CartCurrency} */
declare function CartCurrency(): CartCurrency;
type CartCurrency = {
    /**
     * - Currency code defined by ISO 4217:2015
     */
    code?: string;
    /**
     * - Refers to a graphic symbol or sign that is used
     * to denote a specific currency
     */
    symbol?: string;
};
/** @returns {CartDetailResponse} */
declare function CartDetailResponse(): CartDetailResponse;
type CartDetailResponse = {
    applied_promo_details?: AppliedPromotion[];
    breakup_values?: CartBreakup;
    /**
     * - True for buy_now cart. Default value is False
     */
    buy_now?: boolean;
    /**
     * - Describe checkout mode(self/other) of the cart
     */
    checkout_mode?: string;
    /**
     * - Comment related to cart
     */
    comment?: string;
    /**
     * - Static coupon text
     */
    coupon_text?: string;
    currency?: CartCurrency;
    /**
     * - Information related to delivery charge
     */
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    /**
     * - Gstin number
     */
    gstin?: string;
    /**
     * - Unique cart id
     */
    id?: string;
    /**
     * - Boolean flag to check if response is valid
     */
    is_valid?: boolean;
    items?: CartProductInfo[];
    /**
     * - Last modified cart date
     */
    last_modified?: string;
    /**
     * - Display error message if any else empty string
     */
    message?: string;
    pan_config?: any;
    pan_no?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
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
    /**
     * - Cart meta update response message
     */
    message?: string;
};
/** @returns {CartProduct} */
declare function CartProduct(): CartProduct;
type CartProduct = {
    _custom_json?: any;
    action?: ProductAction;
    /**
     * - Contains name and identifier of brand
     */
    brand?: BaseInfo;
    /**
     * - Contains name and identifier of categories
     */
    categories?: CategoryInfo[];
    images?: ProductImage[];
    item_code?: string;
    /**
     * - Product name
     */
    name?: string;
    net_quantity?: NetQuantity;
    /**
     * - Unique product url name generated via product
     * name and other meta data
     */
    slug?: string;
    tags?: string[];
    teaser_tag?: Tags;
    /**
     * - Product type
     */
    type?: string;
    /**
     * - Product unique identifier
     */
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
    /**
     * - Product bulk offer
     */
    bulk_offer?: any;
    coupon?: CouponDetails;
    /**
     * - Coupon applied message along with coupon code
     */
    coupon_message?: string;
    custom_order?: any;
    delivery_promise?: ShipmentPromise;
    /**
     * - Discount for the selected product
     */
    discount?: string;
    identifiers: CartProductIdentifer;
    is_set?: boolean;
    /**
     * - Key of product created by combining product unique
     * id and size
     */
    key?: string;
    /**
     * - Product related messages if any error else empty string
     */
    message?: string;
    /**
     * - Maximum & minimum order quantity information
     */
    moq?: any;
    /**
     * - Contains information about
     * parent item in case of parent-child relation
     */
    parent_item_identifiers?: any;
    /**
     * - Refers to product's base and converted price
     */
    price?: ProductPriceInfo;
    /**
     * - Refers to product's base and
     * converted price per unit
     */
    price_per_unit?: ProductPriceInfo;
    product?: CartProduct;
    /**
     * - Promo meta information
     */
    promo_meta?: PromoMeta;
    promotions_applied?: AppliedPromotion[];
    /**
     * - Quantity of product
     */
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
    /**
     * - Coupon code
     */
    code?: string;
    coupon_type?: string;
    coupon_value?: number;
    description?: string;
    /**
     * - Boolean flag that denotes if coupon is
     * applied or not. True if applied else False
     */
    is_applied?: boolean;
    max_discount_value?: number;
    /**
     * - Coupon message
     */
    message?: string;
    minimum_cart_value?: number;
    sub_title?: string;
    title?: string;
    /**
     * - Type of coupon (absolute/percentage/bogo/bundle/payment)
     */
    type?: string;
    /**
     * - Unique coupon identifier
     */
    uid?: string;
    /**
     * - Coupon discount amount value
     */
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
    /**
     * - Refers to identify currencies in a
     * standardized and globally recognized manner
     */
    currency_code?: string;
    /**
     * - Refers to a graphic symbol or sign
     * that is used to denote a specific currency
     */
    currency_symbol?: string;
    /**
     * - Refers to display text for breakup
     */
    display?: string;
    /**
     * - Refers to key name of display attribute
     */
    key?: string;
    /**
     * - Display error message if any, else an empty list
     */
    message?: string[];
    /**
     * - Refers to value of display attribute
     */
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
    /**
     * - Refers to applicable credit value
     */
    applicable?: number;
    /**
     * - Loyalty points description text
     */
    description?: string;
    /**
     * - Boolean flag that denotes if coupon is
     * applied or not. True if applied else False
     */
    is_applied?: boolean;
    /**
     * - Refers to total value of loyalty points
     */
    total?: number;
};
/** @returns {NetQuantity} */
declare function NetQuantity(): NetQuantity;
type NetQuantity = {
    unit?: string;
    value?: string;
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
    payment_meta: PaymentMeta;
};
/** @returns {PaymentSelectionLock} */
declare function PaymentSelectionLock(): PaymentSelectionLock;
type PaymentSelectionLock = {
    default_options?: string;
    /**
     * - Boolean flag to check if payment selection
     * lock is enabled or not.
     */
    enabled?: boolean;
    payment_identifier?: string;
};
/** @returns {ProductAction} */
declare function ProductAction(): ProductAction;
type ProductAction = {
    query?: ActionQuery;
    /**
     * - Product type
     */
    type?: string;
    /**
     * - Product action url
     */
    url?: string;
};
/** @returns {ProductArticle} */
declare function ProductArticle(): ProductArticle;
type ProductArticle = {
    /**
     * - Custom json to supporting article customization
     */
    _custom_json?: any;
    cart_item_meta?: any;
    /**
     * - Any extra meta information related to article
     */
    extra_meta?: any;
    gift_card?: any;
    identifier?: any;
    is_gift_visible?: boolean;
    mto_quantity?: number;
    /**
     * - Contains information about
     * parent item in case of parent-child relation
     */
    parent_item_identifiers?: any;
    /**
     * - Refers to article's base and converted price
     */
    price?: ArticlePriceInfo;
    /**
     * - Product_group_tags to group
     * articles in same group
     */
    product_group_tags?: string[];
    /**
     * - Available quantity for the article
     */
    quantity?: number;
    /**
     * - Contains name and identifier of seller
     */
    seller?: BaseInfo;
    seller_identifier?: string;
    /**
     * - Article size
     */
    size?: string;
    /**
     * - Contains name and identifier of store
     */
    store?: StoreInfo;
    /**
     * - Type of article
     */
    type?: string;
    /**
     * - Article unique identifier
     */
    uid?: string;
};
/** @returns {ProductAvailability} */
declare function ProductAvailability(): ProductAvailability;
type ProductAvailability = {
    available_sizes?: ProductAvailabilitySize[];
    /**
     * - Boolean flag to check if product is deliverable
     */
    deliverable?: boolean;
    /**
     * - Boolean flag to check if required product is
     * available and deliverable
     */
    is_valid?: boolean;
    /**
     * - Refers to other store quantity
     */
    other_store_quantity?: number;
    /**
     * - Boolean flag to check if product is out of stock
     */
    out_of_stock?: boolean;
    /**
     * - Refers to list of available product sizes
     */
    sizes?: string[];
};
/** @returns {ProductAvailabilitySize} */
declare function ProductAvailabilitySize(): ProductAvailabilitySize;
type ProductAvailabilitySize = {
    _custom_json?: any;
    /**
     * - Refers to size of product
     */
    display?: string;
    /**
     * - Boolean refers to product available
     * size. True if available else False
     */
    is_available?: boolean;
    meta?: any;
    /**
     * - Refers to size of product
     */
    value?: string;
};
/** @returns {ProductImage} */
declare function ProductImage(): ProductImage;
type ProductImage = {
    /**
     * - Product image aspect ratio
     */
    aspect_ratio?: string;
    /**
     * - Product image secure url
     */
    secure_url?: string;
    /**
     * - Product image url
     */
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
    /**
     * - String value for max delivery promise
     */
    max?: string;
    /**
     * - String value for min delivery promise
     */
    min?: string;
};
/** @returns {PromiseTimestamp} */
declare function PromiseTimestamp(): PromiseTimestamp;
type PromiseTimestamp = {
    /**
     * - Float value for max delivery promise
     */
    max?: number;
    /**
     * - Float value for min delivery promise
     */
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
    /**
     * - Cash on delivery charges value
     */
    cod_charge?: number;
    /**
     * - Refers to additional cost associated
     * with providing convenience or special services to the customer
     */
    convenience_fee?: number;
    /**
     * - Coupon value to show breakup.
     */
    coupon?: number;
    /**
     * - Delivery charges value
     */
    delivery_charge?: number;
    /**
     * - Refers to discount price value
     */
    discount?: number;
    /**
     * - Fynd cash value
     */
    fynd_cash?: number;
    gift_card?: number;
    /**
     * - Refer to the Goods and Services Tax
     * applied to the products or services included in the cart
     */
    gst_charges?: number;
    /**
     * - Represents the total cost based on the
     * maximum retail prices of the items
     */
    mrp_total?: number;
    /**
     * - Represents the total cost of the items before
     * any additional charges or discounts
     */
    subtotal?: number;
    /**
     * - Represents the complete cost that the customer
     * will be charged for their cart, considering all relevant factors such as
     * item prices, taxes, fees, and discounts
     */
    total?: number;
    /**
     * - Total value of good refers to the cumulative value
     * or cost of all the goods or products included in the cart
     */
    vog?: number;
    /**
     * - Refers to the amount of money that a
     * customer has saved due to discounts, promotions, or any other cost
     * reductions applied to their cart
     */
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
    /**
     * - Custom json to supporting article customization
     */
    _custom_json?: any;
    article_id?: string;
    /**
     * - Any extra meta information related to article
     */
    extra_meta?: any;
    identifiers: CartProductIdentifer;
    /**
     * - Item_id of added product
     */
    item_id?: number;
    /**
     * - Index of updated article
     */
    item_index?: number;
    /**
     * - Article size
     */
    item_size?: string;
    meta?: any;
    /**
     * - Contains information about
     * parent item in case of parent-child relation
     */
    parent_item_identifiers?: any;
    /**
     * - Article updated quantity
     */
    quantity?: number;
};
