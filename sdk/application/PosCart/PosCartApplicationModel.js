const Joi = require("joi");

/**
 * @typedef BuyRules
 * @property {Object} [cart_conditions] - Cart conditions details for promotion
 * @property {Object} [item_criteria] - Item criteria of promotion
 */

/**
 * @typedef DiscountRulesApp
 * @property {string[]} [matched_buy_rules] - Matched buy rules for promotion
 * @property {Object} [offer] - Offer for promotion
 * @property {Object} [item_criteria] - Item criteria of promotion
 * @property {Object} [raw_offer] - Raw offer details for promotion
 */

/**
 * @typedef FreeGiftItem
 * @property {string} [item_slug] - Item slug
 * @property {Object} [item_price_details] - Item price details
 * @property {string[]} [item_images_url] - Item images URL
 * @property {string} [item_name] - Item name
 * @property {number} [item_id] - Item id
 * @property {string} [item_brand_name] - Item brand name
 */

/**
 * @typedef AppliedFreeArticles
 * @property {number} [quantity] - Free article quantity
 * @property {string} [parent_item_identifier] - Parent item identifier for free article
 * @property {string} [article_id] - Free article id
 * @property {FreeGiftItem} [free_gift_item_details] - Free gift items details
 */

/**
 * @typedef Ownership
 * @property {string} [payable_category] - Promo amount payable category
 * @property {string} [payable_by] - Promo amount bearable party
 */

/**
 * @typedef AppliedPromotion
 * @property {string} [promotion_name] - Promotion name of current promotion
 * @property {boolean} [mrp_promotion] - If applied promotion is applied on
 *   product MRP or ESP
 * @property {BuyRules[]} [buy_rules] - Buy rules for promotions
 * @property {string} [promotion_type] - Promotion type of current promotion
 * @property {number} [article_quantity] - Quantity of article on which
 *   promotion is applicable
 * @property {number} [amount] - Per unit discount amount applied with current promotion
 * @property {DiscountRulesApp[]} [discount_rules] - Discount rules for promotions
 * @property {string} [offer_text] - Offer text of current promotion
 * @property {string} [promo_id] - Promotion id
 * @property {AppliedFreeArticles[]} [applied_free_articles] - Applied free
 *   article for free gift item promotions
 * @property {Ownership} [ownership] - Ownership of promotion
 * @property {CartCurrency} [currency]
 * @property {string} [promotion_group] - Promotion group for the promotion
 */

/**
 * @typedef LoyaltyPoints
 * @property {string} [description]
 * @property {boolean} [is_applied]
 * @property {number} [applicable]
 * @property {number} [total]
 */

/**
 * @typedef RawBreakup
 * @property {number} [discount]
 * @property {number} [you_saved]
 * @property {number} [mrp_total]
 * @property {number} [gst_charges]
 * @property {number} [total]
 * @property {number} [vog]
 * @property {number} [coupon]
 * @property {number} [subtotal]
 * @property {number} [delivery_charge]
 * @property {number} [cod_charge]
 * @property {number} [fynd_cash]
 * @property {number} [gift_card]
 * @property {number} [convenience_fee]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {string} [display]
 * @property {string[]} [message]
 * @property {string} [key]
 * @property {number} [value]
 */

/**
 * @typedef CouponBreakup
 * @property {number} [max_discount_value]
 * @property {string} [message]
 * @property {boolean} [is_applied]
 * @property {string} [uid]
 * @property {string} [type]
 * @property {string} [coupon_type]
 * @property {string} [sub_title]
 * @property {number} [coupon_value]
 * @property {string} [description]
 * @property {string} [code]
 * @property {number} [minimum_cart_value]
 * @property {number} [value]
 * @property {string} [title]
 */

/**
 * @typedef CartBreakup
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {RawBreakup} [raw]
 * @property {DisplayBreakup[]} [display]
 * @property {CouponBreakup} [coupon]
 */

/**
 * @typedef PaymentSelectionLock
 * @property {string} [default_options]
 * @property {boolean} [enabled]
 * @property {string} [payment_identifier]
 */

/**
 * @typedef PromiseTimestamp
 * @property {number} [max]
 * @property {number} [min]
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
 * @typedef ShipmentPromise
 * @property {PromiseTimestamp} [timestamp]
 * @property {PromiseFormatted} [formatted]
 * @property {PromiseISOFormat} [iso]
 */

/**
 * @typedef StoreInfo
 * @property {number} [uid]
 * @property {string} [store_code]
 * @property {string} [name]
 */

/**
 * @typedef BaseInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef BasePrice
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */

/**
 * @typedef ProductArticle
 * @property {Object} [meta]
 * @property {StoreInfo} [store]
 * @property {Object} [_custom_json]
 * @property {string} [seller_identifier]
 * @property {Object} [identifier]
 * @property {number} [quantity]
 * @property {BaseInfo} [seller]
 * @property {number} [mto_quantity]
 * @property {string} [uid]
 * @property {Object} [cart_item_meta]
 * @property {string} [type]
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [size]
 * @property {Object} [extra_meta]
 * @property {Object} [gift_card]
 * @property {string[]} [product_group_tags]
 * @property {boolean} [is_gift_visible]
 * @property {string[]} [tags] - A list of article tags
 */

/**
 * @typedef Tags
 * @property {Object} [tags]
 */

/**
 * @typedef CategoryInfo
 * @property {number} [uid] - Product Category Id
 * @property {string} [name]
 */

/**
 * @typedef ProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {string} [secure_url]
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
 * @typedef CartProduct
 * @property {Tags} [teaser_tag]
 * @property {Object} [_custom_json]
 * @property {CategoryInfo[]} [categories]
 * @property {string} [item_code]
 * @property {string[]} [tags]
 * @property {number} [uid]
 * @property {string} [type]
 * @property {ProductImage[]} [images]
 * @property {string} [name]
 * @property {string} [slug] - Unique product url name generated via product
 *   name and other meta data
 * @property {ProductAction} [action]
 * @property {BaseInfo} [brand]
 */

/**
 * @typedef ProductPrice
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 * @property {number} [selling]
 * @property {number} [add_on]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */

/**
 * @typedef CouponDetails
 * @property {number} [discount_total_quantity]
 * @property {number} [discount_single_quantity]
 * @property {string} [code]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef ProductAvailabilitySize
 * @property {boolean} [is_available]
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef ProductAvailability
 * @property {ProductAvailabilitySize[]} [available_sizes]
 * @property {number} [other_store_quantity]
 * @property {boolean} [deliverable]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [is_valid]
 * @property {string[]} [sizes]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier] - Article idenfier generated by cart
 */

/**
 * @typedef CartProductInfo
 * @property {Object} [custom_order]
 * @property {ProductArticle} [article]
 * @property {CartProduct} [product]
 * @property {number} [quantity]
 * @property {Object} [moq]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {string} [key]
 * @property {ProductPriceInfo} [price]
 * @property {Object} [parent_item_identifiers]
 * @property {boolean} [is_set]
 * @property {string} [coupon_message]
 * @property {string} [message]
 * @property {CouponDetails} [coupon]
 * @property {string} [discount]
 * @property {Object} [bulk_offer]
 * @property {PromoMeta} [promo_meta]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {ProductAvailability} [availability]
 * @property {CartProductIdentifer} identifiers
 */

/**
 * @typedef CartCurrency
 * @property {string} [symbol]
 * @property {string} [code] - Currency code defined by ISO 4217:2015
 */

/**
 * @typedef CartDetailResponse
 * @property {string} [comment]
 * @property {string} [coupon_text]
 * @property {string} [last_modified]
 * @property {Object} [pan_config]
 * @property {boolean} [is_valid]
 * @property {string} [id]
 * @property {AppliedPromotion[]} [applied_promo_details]
 * @property {string} [checkout_mode]
 * @property {boolean} [restrict_checkout]
 * @property {string} [message]
 * @property {boolean} [buy_now]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [delivery_charge_info]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [gstin]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [pan_no]
 * @property {CartProductInfo[]} [items]
 * @property {CartCurrency} [currency]
 */

/**
 * @typedef AddProductCart
 * @property {number} [seller_id]
 * @property {Object} [_custom_json]
 * @property {Object} [meta]
 * @property {string} [display]
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {number} [item_id]
 * @property {number} [store_id]
 * @property {boolean} [pos]
 * @property {Object[]} [parent_item_identifiers]
 * @property {Object} [extra_meta]
 * @property {string[]} [product_group_tags]
 * @property {Object} [article_assignment]
 * @property {string} [article_id]
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 * @property {boolean} [new_cart]
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
 * @typedef UpdateProductCart
 * @property {Object} [meta]
 * @property {Object} [_custom_json]
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {number} [item_id]
 * @property {number} [item_index]
 * @property {CartProductIdentifer} identifiers
 * @property {Object} [parent_item_identifiers]
 * @property {Object} [extra_meta]
 * @property {string} [article_id]
 */

/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 * @property {boolean} [success] - True if all items are added successfully.
 *   False if partially added or not added.
 */

/**
 * @typedef CartItemCountResponse
 * @property {number} [user_cart_items_count] - Item count present in cart
 */

/**
 * @typedef PageCoupon
 * @property {boolean} [has_previous]
 * @property {number} [current]
 * @property {number} [total]
 * @property {number} [total_item_count]
 * @property {boolean} [has_next]
 */

/**
 * @typedef Coupon
 * @property {number} [max_discount_value]
 * @property {string} [coupon_code]
 * @property {string} [message]
 * @property {boolean} [is_applied]
 * @property {string} [coupon_type]
 * @property {string} [sub_title]
 * @property {number} [coupon_value]
 * @property {boolean} [is_applicable]
 * @property {string} [description]
 * @property {number} [minimum_cart_value]
 * @property {string} [title]
 * @property {string} [expires_on]
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
 * @typedef OfferSeller
 * @property {number} [uid] - Seller id
 * @property {string} [name]
 */

/**
 * @typedef OfferPrice
 * @property {number} [effective] - Current per unit price of product after
 *   existing deductions
 * @property {string} [currency_code] - Currency code for all amounts
 * @property {string} [currency_symbol] - Currency symbol for currency
 * @property {number} [marked] - Original price of product
 * @property {number} [bulk_effective] - Discounted per unit price for current
 *   offer object
 */

/**
 * @typedef OfferItem
 * @property {number} [margin] - Percentage value of discount
 * @property {number} [quantity] - Quantity on which offer is applicable
 * @property {number} [total] - Total price of offer quantity with discount
 * @property {boolean} [best] - Is true for best offer from all offers present
 *   for all sellers
 * @property {string} [type] - Offer type
 * @property {OfferPrice} [price]
 * @property {boolean} [auto_applied] - Whether offer discount is auto applied in cart
 */

/**
 * @typedef BulkPriceOffer
 * @property {OfferSeller} [seller]
 * @property {OfferItem[]} [offers]
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
 * @property {Object} [meta]
 * @property {string} [country_code]
 * @property {string} [country_iso_code]
 * @property {string} [country]
 * @property {string} [id]
 * @property {string} [checkout_mode]
 * @property {string} [created_by_user_id]
 * @property {string} [area]
 * @property {boolean} [is_active]
 * @property {string} [city]
 * @property {string} [sector]
 * @property {string} [state_code] - State code for international address
 * @property {string} [address_type]
 * @property {string} [state]
 * @property {boolean} [is_default_address]
 * @property {Object} [_custom_json]
 * @property {string} [country_phone_code]
 * @property {string} [area_code_slug]
 * @property {string} [area_code]
 * @property {string} [email]
 * @property {Object} [google_map_point]
 * @property {GeoLocation} [geo_location]
 * @property {string} [address]
 * @property {string[]} [tags]
 * @property {string} [name]
 * @property {string} [landmark]
 * @property {string} [user_id]
 * @property {string} [phone]
 */

/**
 * @typedef GetAddressesResponse
 * @property {boolean} [pii_masking]
 * @property {Address[]} [address]
 */

/**
 * @typedef SaveAddressResponse
 * @property {boolean} [is_default_address]
 * @property {boolean} [success]
 * @property {string} [id]
 */

/**
 * @typedef UpdateAddressResponse
 * @property {boolean} [is_updated]
 * @property {boolean} [is_default_address]
 * @property {boolean} [success]
 * @property {string} [id]
 */

/**
 * @typedef DeleteAddressResponse
 * @property {boolean} [is_deleted]
 * @property {string} [id]
 */

/**
 * @typedef SelectCartAddressRequest
 * @property {string} [billing_address_id]
 * @property {string} [cart_id]
 * @property {string} [id]
 */

/**
 * @typedef UpdateCartPaymentRequest
 * @property {string} [payment_identifier]
 * @property {string} [aggregator_name]
 * @property {string} [address_id]
 * @property {string} [merchant_code]
 * @property {string} [payment_mode]
 * @property {string} [id]
 */

/**
 * @typedef CouponValidity
 * @property {number} [discount]
 * @property {boolean} [valid]
 * @property {boolean} [next_validation_required]
 * @property {string} [display_message_en]
 * @property {string} [code]
 * @property {string} [title]
 */

/**
 * @typedef PaymentCouponValidate
 * @property {string} [message]
 * @property {boolean} success
 * @property {CouponValidity} [coupon_validity]
 */

/**
 * @typedef ShipmentResponse
 * @property {number} [shipments]
 * @property {string} [fulfillment_type]
 * @property {ShipmentPromise} [promise]
 * @property {string} [dp_id]
 * @property {string} [box_type]
 * @property {Object} [dp_options]
 * @property {CartProductInfo[]} [items]
 * @property {string} [order_type]
 * @property {string} [shipment_type]
 * @property {number} [fulfillment_id]
 */

/**
 * @typedef CartShipmentsResponse
 * @property {string} [comment]
 * @property {boolean} [restrict_checkout]
 * @property {string} [message]
 * @property {boolean} [buy_now]
 * @property {string} [coupon_text]
 * @property {string} [last_modified]
 * @property {number} [cart_id]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {string} [delivery_charge_info]
 * @property {string} [id]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [gstin]
 * @property {ShipmentResponse[]} [shipments]
 * @property {boolean} [error]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [uid]
 * @property {string} [checkout_mode]
 * @property {CartCurrency} [currency]
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
 * @typedef StaffCheckout
 * @property {string} first_name
 * @property {string} user
 * @property {string} [employee_code]
 * @property {string} _id
 * @property {string} last_name
 */

/**
 * @typedef CustomerDetails
 * @property {string} mobile
 * @property {string} [name]
 * @property {string} [email]
 */

/**
 * @typedef CartCheckoutCustomMeta
 * @property {string} value
 * @property {string} key
 */

/**
 * @typedef Files
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef CartPosCheckoutDetailRequest
 * @property {Object} [meta]
 * @property {number} [pick_at_store_uid]
 * @property {Object} [billing_address]
 * @property {boolean} [payment_auto_confirm]
 * @property {string} [callback_url]
 * @property {Object} [delivery_address]
 * @property {string} [merchant_code]
 * @property {string} order_type
 * @property {string} [id]
 * @property {StaffCheckout} [staff]
 * @property {Object} [customer_details] - Customer details
 * @property {string} [address_id]
 * @property {string} [aggregator]
 * @property {Object} [payment_params]
 * @property {string} [billing_address_id]
 * @property {string} payment_mode
 * @property {boolean} [pos]
 * @property {Object} [extra_meta]
 * @property {CartCheckoutCustomMeta[]} [custom_meta]
 * @property {string} [payment_identifier]
 * @property {number} [ordering_store]
 * @property {Files[]} [files] - List of file url
 */

/**
 * @typedef CheckCart
 * @property {string} [comment]
 * @property {number} [delivery_charges]
 * @property {string} [coupon_text]
 * @property {string} [last_modified]
 * @property {boolean} [is_valid]
 * @property {string} [cod_message]
 * @property {boolean} [success]
 * @property {string} [id]
 * @property {string} [uid]
 * @property {string} [checkout_mode]
 * @property {string} [error_message]
 * @property {Object[]} [store_emps]
 * @property {string} [store_code]
 * @property {boolean} [restrict_checkout]
 * @property {string} [message]
 * @property {boolean} [buy_now]
 * @property {boolean} [cod_available]
 * @property {number} [cart_id]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [order_id]
 * @property {number} [cod_charges]
 * @property {string} [delivery_charge_info]
 * @property {string} [user_type]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [gstin]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartProductInfo[]} [items]
 * @property {CartCurrency} [currency]
 * @property {number} [delivery_charge_order_value]
 */

/**
 * @typedef CartCheckoutResponse
 * @property {CheckCart} [cart]
 * @property {string} [app_intercept_url]
 * @property {string} [callback_url]
 * @property {string} [message]
 * @property {Object} [data]
 * @property {string} [order_id]
 * @property {boolean} [success]
 * @property {string} [payment_confirm_url]
 */

/**
 * @typedef GiftDetail
 * @property {string} [gift_message]
 * @property {boolean} [is_gift_applied]
 */

/**
 * @typedef ArticleGiftDetail
 * @property {GiftDetail} [article_id]
 */

/**
 * @typedef CartMetaRequest
 * @property {string} [comment]
 * @property {string} [gstin]
 * @property {Object} [pick_up_customer_details] - Customer contact details for
 *   customer pickup at store
 * @property {string} [checkout_mode]
 * @property {ArticleGiftDetail} [gift_details]
 * @property {Object} [delivery_slots]
 */

/**
 * @typedef CartMetaResponse
 * @property {string} [message]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef CartMetaMissingResponse
 * @property {string[]} [errors]
 */

/**
 * @typedef CartDeliveryModesResponse
 * @property {string[]} [available_modes] - Available delivery modes
 * @property {number[]} [pickup_stores] - Store pick up available store uids
 */

/**
 * @typedef PickupStoreDetail
 * @property {string} [city]
 * @property {string} [address_type]
 * @property {string} [address]
 * @property {string} [state]
 * @property {string} [store_code]
 * @property {number} [uid]
 * @property {number} [pincode]
 * @property {string} [area_code_slug]
 * @property {string} [area_code]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [landmark]
 * @property {string} [area]
 * @property {string} [country]
 * @property {string} [phone]
 * @property {number} [id]
 */

/**
 * @typedef StoreDetailsResponse
 * @property {PickupStoreDetail[]} [items]
 */

/**
 * @typedef GetShareCartLinkRequest
 * @property {Object} [meta] - Staff, Ordering store or any other data. This
 *   data will be used to generate link as well as sent as shared details.
 * @property {string} [id] - Cart uid for generating sharing
 */

/**
 * @typedef GetShareCartLinkResponse
 * @property {string} [share_url] - Short shareable final url
 * @property {string} [token] - Short url unique id
 */

/**
 * @typedef SharedCartDetails
 * @property {Object} [meta] - Meta data sent while generating share cart link
 * @property {Object} [user] - User details of who generated share link
 * @property {string} [created_on]
 * @property {string} [token] - Short link id
 * @property {Object} [source] - Share link device and other source information
 */

/**
 * @typedef SharedCart
 * @property {string} [comment]
 * @property {string} [coupon_text]
 * @property {string} [last_modified]
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {boolean} [is_valid]
 * @property {string} [id]
 * @property {string} [uid]
 * @property {string} [checkout_mode]
 * @property {boolean} [restrict_checkout]
 * @property {string} [message]
 * @property {boolean} [buy_now]
 * @property {number} [cart_id]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [delivery_charge_info]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [gstin]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartProductInfo[]} [items]
 * @property {CartCurrency} [currency]
 */

/**
 * @typedef SharedCartResponse
 * @property {string} [error]
 * @property {SharedCart} [cart]
 */

class PosCartApplicationModel {
  /** @returns {BuyRules} */
  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),
      item_criteria: Joi.any(),
    });
  }

  /** @returns {DiscountRulesApp} */
  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
      offer: Joi.any(),
      item_criteria: Joi.any(),
      raw_offer: Joi.any(),
    });
  }

  /** @returns {FreeGiftItem} */
  static FreeGiftItem() {
    return Joi.object({
      item_slug: Joi.string().allow(""),
      item_price_details: Joi.any(),
      item_images_url: Joi.array().items(Joi.string().allow("")),
      item_name: Joi.string().allow(""),
      item_id: Joi.number(),
      item_brand_name: Joi.string().allow(""),
    });
  }

  /** @returns {AppliedFreeArticles} */
  static AppliedFreeArticles() {
    return Joi.object({
      quantity: Joi.number(),
      parent_item_identifier: Joi.string().allow(""),
      article_id: Joi.string().allow(""),
      free_gift_item_details: PosCartApplicationModel.FreeGiftItem(),
    });
  }

  /** @returns {Ownership} */
  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow(""),
      payable_by: Joi.string().allow(""),
    });
  }

  /** @returns {AppliedPromotion} */
  static AppliedPromotion() {
    return Joi.object({
      promotion_name: Joi.string().allow(""),
      mrp_promotion: Joi.boolean(),
      buy_rules: Joi.array().items(PosCartApplicationModel.BuyRules()),
      promotion_type: Joi.string().allow(""),
      article_quantity: Joi.number(),
      amount: Joi.number(),
      discount_rules: Joi.array().items(
        PosCartApplicationModel.DiscountRulesApp()
      ),
      offer_text: Joi.string().allow(""),
      promo_id: Joi.string().allow(""),
      applied_free_articles: Joi.array().items(
        PosCartApplicationModel.AppliedFreeArticles()
      ),
      ownership: PosCartApplicationModel.Ownership(),
      currency: PosCartApplicationModel.CartCurrency(),
      promotion_group: Joi.string().allow(""),
    });
  }

  /** @returns {LoyaltyPoints} */
  static LoyaltyPoints() {
    return Joi.object({
      description: Joi.string().allow(""),
      is_applied: Joi.boolean(),
      applicable: Joi.number(),
      total: Joi.number(),
    });
  }

  /** @returns {RawBreakup} */
  static RawBreakup() {
    return Joi.object({
      discount: Joi.number(),
      you_saved: Joi.number(),
      mrp_total: Joi.number(),
      gst_charges: Joi.number(),
      total: Joi.number(),
      vog: Joi.number(),
      coupon: Joi.number(),
      subtotal: Joi.number(),
      delivery_charge: Joi.number(),
      cod_charge: Joi.number(),
      fynd_cash: Joi.number(),
      gift_card: Joi.number(),
      convenience_fee: Joi.number(),
    });
  }

  /** @returns {DisplayBreakup} */
  static DisplayBreakup() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      display: Joi.string().allow(""),
      message: Joi.array().items(Joi.string().allow("")),
      key: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {CouponBreakup} */
  static CouponBreakup() {
    return Joi.object({
      max_discount_value: Joi.number(),
      message: Joi.string().allow(""),
      is_applied: Joi.boolean(),
      uid: Joi.string().allow(""),
      type: Joi.string().allow(""),
      coupon_type: Joi.string().allow("").allow(null),
      sub_title: Joi.string().allow("").allow(null),
      coupon_value: Joi.number(),
      description: Joi.string().allow("").allow(null),
      code: Joi.string().allow(""),
      minimum_cart_value: Joi.number(),
      value: Joi.number(),
      title: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CartBreakup} */
  static CartBreakup() {
    return Joi.object({
      loyalty_points: PosCartApplicationModel.LoyaltyPoints(),
      raw: PosCartApplicationModel.RawBreakup(),
      display: Joi.array().items(PosCartApplicationModel.DisplayBreakup()),
      coupon: PosCartApplicationModel.CouponBreakup(),
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

  /** @returns {PromiseTimestamp} */
  static PromiseTimestamp() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {PromiseFormatted} */
  static PromiseFormatted() {
    return Joi.object({
      max: Joi.string().allow(""),
      min: Joi.string().allow(""),
    });
  }

  /** @returns {PromiseISOFormat} */
  static PromiseISOFormat() {
    return Joi.object({
      max: Joi.string().allow(""),
      min: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentPromise} */
  static ShipmentPromise() {
    return Joi.object({
      timestamp: PosCartApplicationModel.PromiseTimestamp(),
      formatted: PosCartApplicationModel.PromiseFormatted(),
      iso: PosCartApplicationModel.PromiseISOFormat(),
    });
  }

  /** @returns {StoreInfo} */
  static StoreInfo() {
    return Joi.object({
      uid: Joi.number(),
      store_code: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {BaseInfo} */
  static BaseInfo() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {BasePrice} */
  static BasePrice() {
    return Joi.object({
      effective: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      marked: Joi.number(),
    });
  }

  /** @returns {ArticlePriceInfo} */
  static ArticlePriceInfo() {
    return Joi.object({
      converted: PosCartApplicationModel.BasePrice(),
      base: PosCartApplicationModel.BasePrice(),
    });
  }

  /** @returns {ProductArticle} */
  static ProductArticle() {
    return Joi.object({
      meta: Joi.any(),
      store: PosCartApplicationModel.StoreInfo(),
      _custom_json: Joi.any(),
      seller_identifier: Joi.string().allow(""),
      identifier: Joi.any(),
      quantity: Joi.number(),
      seller: PosCartApplicationModel.BaseInfo(),
      mto_quantity: Joi.number(),
      uid: Joi.string().allow(""),
      cart_item_meta: Joi.any(),
      type: Joi.string().allow(""),
      price: PosCartApplicationModel.ArticlePriceInfo(),
      parent_item_identifiers: Joi.any(),
      size: Joi.string().allow(""),
      extra_meta: Joi.any(),
      gift_card: Joi.any(),
      product_group_tags: Joi.array().items(Joi.string().allow("")),
      is_gift_visible: Joi.boolean(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Tags} */
  static Tags() {
    return Joi.object({
      tags: Joi.any(),
    });
  }

  /** @returns {CategoryInfo} */
  static CategoryInfo() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ProductImage} */
  static ProductImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      url: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
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
      query: PosCartApplicationModel.ActionQuery(),
      url: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CartProduct} */
  static CartProduct() {
    return Joi.object({
      teaser_tag: PosCartApplicationModel.Tags(),
      _custom_json: Joi.any(),
      categories: Joi.array().items(PosCartApplicationModel.CategoryInfo()),
      item_code: Joi.string().allow("").allow(null),
      tags: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
      type: Joi.string().allow(""),
      images: Joi.array().items(PosCartApplicationModel.ProductImage()),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      action: PosCartApplicationModel.ProductAction(),
      brand: PosCartApplicationModel.BaseInfo(),
    });
  }

  /** @returns {ProductPrice} */
  static ProductPrice() {
    return Joi.object({
      effective: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      marked: Joi.number(),
      selling: Joi.number(),
      add_on: Joi.number(),
    });
  }

  /** @returns {ProductPriceInfo} */
  static ProductPriceInfo() {
    return Joi.object({
      converted: PosCartApplicationModel.ProductPrice(),
      base: PosCartApplicationModel.ProductPrice(),
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

  /** @returns {PromoMeta} */
  static PromoMeta() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ProductAvailabilitySize} */
  static ProductAvailabilitySize() {
    return Joi.object({
      is_available: Joi.boolean(),
      value: Joi.string().allow(""),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {ProductAvailability} */
  static ProductAvailability() {
    return Joi.object({
      available_sizes: Joi.array().items(
        PosCartApplicationModel.ProductAvailabilitySize()
      ),
      other_store_quantity: Joi.number(),
      deliverable: Joi.boolean(),
      out_of_stock: Joi.boolean(),
      is_valid: Joi.boolean(),
      sizes: Joi.array().items(Joi.string().allow("")),
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
      custom_order: Joi.any(),
      article: PosCartApplicationModel.ProductArticle(),
      product: PosCartApplicationModel.CartProduct(),
      quantity: Joi.number(),
      moq: Joi.any(),
      promotions_applied: Joi.array().items(
        PosCartApplicationModel.AppliedPromotion()
      ),
      price_per_unit: PosCartApplicationModel.ProductPriceInfo(),
      key: Joi.string().allow(""),
      price: PosCartApplicationModel.ProductPriceInfo(),
      parent_item_identifiers: Joi.any(),
      is_set: Joi.boolean(),
      coupon_message: Joi.string().allow(""),
      message: Joi.string().allow(""),
      coupon: PosCartApplicationModel.CouponDetails(),
      discount: Joi.string().allow(""),
      bulk_offer: Joi.any(),
      promo_meta: PosCartApplicationModel.PromoMeta(),
      delivery_promise: PosCartApplicationModel.ShipmentPromise(),
      availability: PosCartApplicationModel.ProductAvailability(),
      identifiers: PosCartApplicationModel.CartProductIdentifer().required(),
    });
  }

  /** @returns {CartCurrency} */
  static CartCurrency() {
    return Joi.object({
      symbol: Joi.string().allow(""),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {CartDetailResponse} */
  static CartDetailResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      pan_config: Joi.any(),
      is_valid: Joi.boolean(),
      id: Joi.string().allow(""),
      applied_promo_details: Joi.array().items(
        PosCartApplicationModel.AppliedPromotion()
      ),
      checkout_mode: Joi.string().allow(""),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      breakup_values: PosCartApplicationModel.CartBreakup(),
      delivery_charge_info: Joi.string().allow(""),
      payment_selection_lock: PosCartApplicationModel.PaymentSelectionLock(),
      gstin: Joi.string().allow(""),
      delivery_promise: PosCartApplicationModel.ShipmentPromise(),
      pan_no: Joi.string().allow(""),
      items: Joi.array().items(PosCartApplicationModel.CartProductInfo()),
      currency: PosCartApplicationModel.CartCurrency(),
    });
  }

  /** @returns {AddProductCart} */
  static AddProductCart() {
    return Joi.object({
      seller_id: Joi.number(),
      _custom_json: Joi.any(),
      meta: Joi.any(),
      display: Joi.string().allow(""),
      quantity: Joi.number(),
      item_size: Joi.string().allow(""),
      item_id: Joi.number(),
      store_id: Joi.number(),
      pos: Joi.boolean(),
      parent_item_identifiers: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.string().allow(""))
      ),
      extra_meta: Joi.any(),
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
      article_assignment: Joi.any(),
      article_id: Joi.string().allow(""),
    });
  }

  /** @returns {AddCartRequest} */
  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(PosCartApplicationModel.AddProductCart()),
      new_cart: Joi.boolean(),
    });
  }

  /** @returns {AddCartDetailResponse} */
  static AddCartDetailResponse() {
    return Joi.object({
      cart: PosCartApplicationModel.CartDetailResponse(),
      message: Joi.string().allow(""),
      partial: Joi.boolean(),
      success: Joi.boolean(),
    });
  }

  /** @returns {UpdateProductCart} */
  static UpdateProductCart() {
    return Joi.object({
      meta: Joi.any(),
      _custom_json: Joi.any(),
      quantity: Joi.number(),
      item_size: Joi.string().allow(""),
      item_id: Joi.number(),
      item_index: Joi.number(),
      identifiers: PosCartApplicationModel.CartProductIdentifer().required(),
      parent_item_identifiers: Joi.any(),
      extra_meta: Joi.any(),
      article_id: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateCartRequest} */
  static UpdateCartRequest() {
    return Joi.object({
      operation: Joi.string().allow("").required(),
      items: Joi.array().items(PosCartApplicationModel.UpdateProductCart()),
    });
  }

  /** @returns {UpdateCartDetailResponse} */
  static UpdateCartDetailResponse() {
    return Joi.object({
      cart: PosCartApplicationModel.CartDetailResponse(),
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

  /** @returns {PageCoupon} */
  static PageCoupon() {
    return Joi.object({
      has_previous: Joi.boolean(),
      current: Joi.number(),
      total: Joi.number(),
      total_item_count: Joi.number(),
      has_next: Joi.boolean(),
    });
  }

  /** @returns {Coupon} */
  static Coupon() {
    return Joi.object({
      max_discount_value: Joi.number(),
      coupon_code: Joi.string().allow(""),
      message: Joi.string().allow(""),
      is_applied: Joi.boolean(),
      coupon_type: Joi.string().allow("").allow(null),
      sub_title: Joi.string().allow(""),
      coupon_value: Joi.number(),
      is_applicable: Joi.boolean(),
      description: Joi.string().allow("").allow(null),
      minimum_cart_value: Joi.number(),
      title: Joi.string().allow(""),
      expires_on: Joi.string().allow(""),
    });
  }

  /** @returns {GetCouponResponse} */
  static GetCouponResponse() {
    return Joi.object({
      page: PosCartApplicationModel.PageCoupon(),
      available_coupon_list: Joi.array().items(
        PosCartApplicationModel.Coupon()
      ),
    });
  }

  /** @returns {ApplyCouponRequest} */
  static ApplyCouponRequest() {
    return Joi.object({
      coupon_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {OfferSeller} */
  static OfferSeller() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {OfferPrice} */
  static OfferPrice() {
    return Joi.object({
      effective: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      marked: Joi.number(),
      bulk_effective: Joi.number(),
    });
  }

  /** @returns {OfferItem} */
  static OfferItem() {
    return Joi.object({
      margin: Joi.number(),
      quantity: Joi.number(),
      total: Joi.number(),
      best: Joi.boolean(),
      type: Joi.string().allow(""),
      price: PosCartApplicationModel.OfferPrice(),
      auto_applied: Joi.boolean(),
    });
  }

  /** @returns {BulkPriceOffer} */
  static BulkPriceOffer() {
    return Joi.object({
      seller: PosCartApplicationModel.OfferSeller(),
      offers: Joi.array().items(PosCartApplicationModel.OfferItem()),
    });
  }

  /** @returns {BulkPriceResponse} */
  static BulkPriceResponse() {
    return Joi.object({
      data: Joi.array().items(PosCartApplicationModel.BulkPriceOffer()),
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
      meta: Joi.any(),
      country_code: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
      country: Joi.string().allow(""),
      id: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      created_by_user_id: Joi.string().allow(""),
      area: Joi.string().allow(""),
      is_active: Joi.boolean(),
      city: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      state: Joi.string().allow(""),
      is_default_address: Joi.boolean(),
      _custom_json: Joi.any(),
      country_phone_code: Joi.string().allow(""),
      area_code_slug: Joi.string().allow(""),
      area_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      google_map_point: Joi.any(),
      geo_location: PosCartApplicationModel.GeoLocation(),
      address: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      phone: Joi.string().allow(""),
    });
  }

  /** @returns {GetAddressesResponse} */
  static GetAddressesResponse() {
    return Joi.object({
      pii_masking: Joi.boolean(),
      address: Joi.array().items(PosCartApplicationModel.Address()),
    });
  }

  /** @returns {SaveAddressResponse} */
  static SaveAddressResponse() {
    return Joi.object({
      is_default_address: Joi.boolean(),
      success: Joi.boolean(),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateAddressResponse} */
  static UpdateAddressResponse() {
    return Joi.object({
      is_updated: Joi.boolean(),
      is_default_address: Joi.boolean(),
      success: Joi.boolean(),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {DeleteAddressResponse} */
  static DeleteAddressResponse() {
    return Joi.object({
      is_deleted: Joi.boolean(),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {SelectCartAddressRequest} */
  static SelectCartAddressRequest() {
    return Joi.object({
      billing_address_id: Joi.string().allow(""),
      cart_id: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateCartPaymentRequest} */
  static UpdateCartPaymentRequest() {
    return Joi.object({
      payment_identifier: Joi.string().allow("").allow(null),
      aggregator_name: Joi.string().allow(""),
      address_id: Joi.string().allow(""),
      merchant_code: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {CouponValidity} */
  static CouponValidity() {
    return Joi.object({
      discount: Joi.number(),
      valid: Joi.boolean(),
      next_validation_required: Joi.boolean().allow(null),
      display_message_en: Joi.string().allow("").allow(null),
      code: Joi.string().allow("").allow(null),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentCouponValidate} */
  static PaymentCouponValidate() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean().required(),
      coupon_validity: PosCartApplicationModel.CouponValidity(),
    });
  }

  /** @returns {ShipmentResponse} */
  static ShipmentResponse() {
    return Joi.object({
      shipments: Joi.number(),
      fulfillment_type: Joi.string().allow(""),
      promise: PosCartApplicationModel.ShipmentPromise(),
      dp_id: Joi.string().allow("").allow(null),
      box_type: Joi.string().allow("").allow(null),
      dp_options: Joi.any().allow(null),
      items: Joi.array().items(PosCartApplicationModel.CartProductInfo()),
      order_type: Joi.string().allow(""),
      shipment_type: Joi.string().allow(""),
      fulfillment_id: Joi.number(),
    });
  }

  /** @returns {CartShipmentsResponse} */
  static CartShipmentsResponse() {
    return Joi.object({
      comment: Joi.string().allow(""),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      coupon_text: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      cart_id: Joi.number(),
      breakup_values: PosCartApplicationModel.CartBreakup(),
      is_valid: Joi.boolean(),
      delivery_charge_info: Joi.string().allow(""),
      id: Joi.string().allow(""),
      payment_selection_lock: PosCartApplicationModel.PaymentSelectionLock(),
      gstin: Joi.string().allow(""),
      shipments: Joi.array().items(PosCartApplicationModel.ShipmentResponse()),
      error: Joi.boolean(),
      delivery_promise: PosCartApplicationModel.ShipmentPromise(),
      uid: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      currency: PosCartApplicationModel.CartCurrency(),
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

  /** @returns {UpdateCartShipmentRequest} */
  static UpdateCartShipmentRequest() {
    return Joi.object({
      shipments: Joi.array()
        .items(PosCartApplicationModel.UpdateCartShipmentItem())
        .required(),
    });
  }

  /** @returns {StaffCheckout} */
  static StaffCheckout() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),
      user: Joi.string().allow("").required(),
      employee_code: Joi.string().allow(""),
      _id: Joi.string().allow("").required(),
      last_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {CustomerDetails} */
  static CustomerDetails() {
    return Joi.object({
      mobile: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
      email: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {CartCheckoutCustomMeta} */
  static CartCheckoutCustomMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),
      key: Joi.string().allow("").required(),
    });
  }

  /** @returns {Files} */
  static Files() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),
      key: Joi.string().allow("").required(),
    });
  }

  /** @returns {CartPosCheckoutDetailRequest} */
  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      meta: Joi.any(),
      pick_at_store_uid: Joi.number().allow(null),
      billing_address: Joi.any(),
      payment_auto_confirm: Joi.boolean(),
      callback_url: Joi.string().allow("").allow(null),
      delivery_address: Joi.any(),
      merchant_code: Joi.string().allow(""),
      order_type: Joi.string().allow("").required(),
      id: Joi.string().allow("").allow(null),
      staff: PosCartApplicationModel.StaffCheckout(),
      customer_details: Joi.any().allow(null),
      address_id: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      payment_params: Joi.any().allow(null),
      billing_address_id: Joi.string().allow(""),
      payment_mode: Joi.string().allow("").required(),
      pos: Joi.boolean(),
      extra_meta: Joi.any(),
      custom_meta: Joi.array().items(
        PosCartApplicationModel.CartCheckoutCustomMeta()
      ),
      payment_identifier: Joi.string().allow("").allow(null),
      ordering_store: Joi.number().allow(null),
      files: Joi.array().items(PosCartApplicationModel.Files()),
    });
  }

  /** @returns {CheckCart} */
  static CheckCart() {
    return Joi.object({
      comment: Joi.string().allow(""),
      delivery_charges: Joi.number(),
      coupon_text: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      cod_message: Joi.string().allow(""),
      success: Joi.boolean(),
      id: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      error_message: Joi.string().allow(""),
      store_emps: Joi.array().items(Joi.any()),
      store_code: Joi.string().allow(""),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      cod_available: Joi.boolean(),
      cart_id: Joi.number(),
      breakup_values: PosCartApplicationModel.CartBreakup(),
      order_id: Joi.string().allow(""),
      cod_charges: Joi.number(),
      delivery_charge_info: Joi.string().allow(""),
      user_type: Joi.string().allow(""),
      payment_selection_lock: PosCartApplicationModel.PaymentSelectionLock(),
      gstin: Joi.string().allow(""),
      delivery_promise: PosCartApplicationModel.ShipmentPromise(),
      items: Joi.array().items(PosCartApplicationModel.CartProductInfo()),
      currency: PosCartApplicationModel.CartCurrency(),
      delivery_charge_order_value: Joi.number(),
    });
  }

  /** @returns {CartCheckoutResponse} */
  static CartCheckoutResponse() {
    return Joi.object({
      cart: PosCartApplicationModel.CheckCart(),
      app_intercept_url: Joi.string().allow(""),
      callback_url: Joi.string().allow(""),
      message: Joi.string().allow(""),
      data: Joi.any(),
      order_id: Joi.string().allow(""),
      success: Joi.boolean(),
      payment_confirm_url: Joi.string().allow(""),
    });
  }

  /** @returns {GiftDetail} */
  static GiftDetail() {
    return Joi.object({
      gift_message: Joi.string().allow(""),
      is_gift_applied: Joi.boolean(),
    });
  }

  /** @returns {ArticleGiftDetail} */
  static ArticleGiftDetail() {
    return Joi.object({
      article_id: PosCartApplicationModel.GiftDetail(),
    });
  }

  /** @returns {CartMetaRequest} */
  static CartMetaRequest() {
    return Joi.object({
      comment: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      pick_up_customer_details: Joi.any(),
      checkout_mode: Joi.string().allow(""),
      gift_details: PosCartApplicationModel.ArticleGiftDetail(),
      delivery_slots: Joi.any(),
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
      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CartDeliveryModesResponse} */
  static CartDeliveryModesResponse() {
    return Joi.object({
      available_modes: Joi.array().items(Joi.string().allow("")),
      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {PickupStoreDetail} */
  static PickupStoreDetail() {
    return Joi.object({
      city: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      address: Joi.string().allow(""),
      state: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      uid: Joi.number(),
      pincode: Joi.number(),
      area_code_slug: Joi.string().allow(""),
      area_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      name: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      area: Joi.string().allow(""),
      country: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      id: Joi.number(),
    });
  }

  /** @returns {StoreDetailsResponse} */
  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartApplicationModel.PickupStoreDetail()),
    });
  }

  /** @returns {GetShareCartLinkRequest} */
  static GetShareCartLinkRequest() {
    return Joi.object({
      meta: Joi.any(),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {GetShareCartLinkResponse} */
  static GetShareCartLinkResponse() {
    return Joi.object({
      share_url: Joi.string().allow(""),
      token: Joi.string().allow(""),
    });
  }

  /** @returns {SharedCartDetails} */
  static SharedCartDetails() {
    return Joi.object({
      meta: Joi.any(),
      user: Joi.any(),
      created_on: Joi.string().allow(""),
      token: Joi.string().allow(""),
      source: Joi.any(),
    });
  }

  /** @returns {SharedCart} */
  static SharedCart() {
    return Joi.object({
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      shared_cart_details: PosCartApplicationModel.SharedCartDetails(),
      is_valid: Joi.boolean(),
      id: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      restrict_checkout: Joi.boolean(),
      message: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      breakup_values: PosCartApplicationModel.CartBreakup(),
      delivery_charge_info: Joi.string().allow(""),
      payment_selection_lock: PosCartApplicationModel.PaymentSelectionLock(),
      gstin: Joi.string().allow(""),
      delivery_promise: PosCartApplicationModel.ShipmentPromise(),
      items: Joi.array().items(PosCartApplicationModel.CartProductInfo()),
      currency: PosCartApplicationModel.CartCurrency(),
    });
  }

  /** @returns {SharedCartResponse} */
  static SharedCartResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
      cart: PosCartApplicationModel.SharedCart(),
    });
  }
}
module.exports = PosCartApplicationModel;
