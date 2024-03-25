export = PosCartApplicationModel;
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
 * @property {string} [promotion_group] - Promotion type of current promotion
 * @property {Object} [meta] - Meta object for extra data
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
declare class PosCartApplicationModel {
}
declare namespace PosCartApplicationModel {
    export { BuyRules, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, Ownership, AppliedPromotion, LoyaltyPoints, RawBreakup, DisplayBreakup, CouponBreakup, CartBreakup, PaymentSelectionLock, PromiseTimestamp, PromiseFormatted, PromiseISOFormat, ShipmentPromise, StoreInfo, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, Tags, CategoryInfo, ProductImage, ActionQuery, ProductAction, CartProduct, ProductPrice, ProductPriceInfo, CouponDetails, PromoMeta, ProductAvailabilitySize, ProductAvailability, CartProductIdentifer, CartProductInfo, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, OfferSeller, OfferPrice, OfferItem, BulkPriceOffer, BulkPriceResponse, RewardPointRequest, GeoLocation, Address, GetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, SelectCartAddressRequest, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, StaffCheckout, CustomerDetails, CartCheckoutCustomMeta, Files, CartPosCheckoutDetailRequest, CheckCart, CartCheckoutResponse, GiftDetail, ArticleGiftDetail, CartMetaRequest, CartMetaResponse, CartMetaMissingResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse };
}
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
/** @returns {DiscountRulesApp} */
declare function DiscountRulesApp(): DiscountRulesApp;
type DiscountRulesApp = {
    /**
     * - Matched buy rules for promotion
     */
    matched_buy_rules?: string[];
    /**
     * - Offer for promotion
     */
    offer?: any;
    /**
     * - Item criteria of promotion
     */
    item_criteria?: any;
    /**
     * - Raw offer details for promotion
     */
    raw_offer?: any;
};
/** @returns {FreeGiftItem} */
declare function FreeGiftItem(): FreeGiftItem;
type FreeGiftItem = {
    /**
     * - Item slug
     */
    item_slug?: string;
    /**
     * - Item price details
     */
    item_price_details?: any;
    /**
     * - Item images URL
     */
    item_images_url?: string[];
    /**
     * - Item name
     */
    item_name?: string;
    /**
     * - Item id
     */
    item_id?: number;
    /**
     * - Item brand name
     */
    item_brand_name?: string;
};
/** @returns {AppliedFreeArticles} */
declare function AppliedFreeArticles(): AppliedFreeArticles;
type AppliedFreeArticles = {
    /**
     * - Free article quantity
     */
    quantity?: number;
    /**
     * - Parent item identifier for free article
     */
    parent_item_identifier?: string;
    /**
     * - Free article id
     */
    article_id?: string;
    /**
     * - Free gift items details
     */
    free_gift_item_details?: FreeGiftItem;
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
/** @returns {AppliedPromotion} */
declare function AppliedPromotion(): AppliedPromotion;
type AppliedPromotion = {
    /**
     * - Promotion name of current promotion
     */
    promotion_name?: string;
    /**
     * - If applied promotion is applied on
     * product MRP or ESP
     */
    mrp_promotion?: boolean;
    /**
     * - Buy rules for promotions
     */
    buy_rules?: BuyRules[];
    /**
     * - Promotion type of current promotion
     */
    promotion_type?: string;
    /**
     * - Quantity of article on which
     * promotion is applicable
     */
    article_quantity?: number;
    /**
     * - Per unit discount amount applied with current promotion
     */
    amount?: number;
    /**
     * - Discount rules for promotions
     */
    discount_rules?: DiscountRulesApp[];
    /**
     * - Offer text of current promotion
     */
    offer_text?: string;
    /**
     * - Promotion id
     */
    promo_id?: string;
    /**
     * - Applied free
     * article for free gift item promotions
     */
    applied_free_articles?: AppliedFreeArticles[];
    /**
     * - Ownership of promotion
     */
    ownership?: Ownership;
    currency?: CartCurrency;
    /**
     * - Promotion type of current promotion
     */
    promotion_group?: string;
    /**
     * - Meta object for extra data
     */
    meta?: any;
};
/** @returns {LoyaltyPoints} */
declare function LoyaltyPoints(): LoyaltyPoints;
type LoyaltyPoints = {
    description?: string;
    is_applied?: boolean;
    applicable?: number;
    total?: number;
};
/** @returns {RawBreakup} */
declare function RawBreakup(): RawBreakup;
type RawBreakup = {
    discount?: number;
    you_saved?: number;
    mrp_total?: number;
    gst_charges?: number;
    total?: number;
    vog?: number;
    coupon?: number;
    subtotal?: number;
    delivery_charge?: number;
    cod_charge?: number;
    fynd_cash?: number;
    gift_card?: number;
    convenience_fee?: number;
};
/** @returns {DisplayBreakup} */
declare function DisplayBreakup(): DisplayBreakup;
type DisplayBreakup = {
    currency_code?: string;
    currency_symbol?: string;
    display?: string;
    message?: string[];
    key?: string;
    value?: number;
};
/** @returns {CouponBreakup} */
declare function CouponBreakup(): CouponBreakup;
type CouponBreakup = {
    max_discount_value?: number;
    message?: string;
    is_applied?: boolean;
    uid?: string;
    type?: string;
    coupon_type?: string;
    sub_title?: string;
    coupon_value?: number;
    description?: string;
    code?: string;
    minimum_cart_value?: number;
    value?: number;
    title?: string;
};
/** @returns {CartBreakup} */
declare function CartBreakup(): CartBreakup;
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
};
/** @returns {PaymentSelectionLock} */
declare function PaymentSelectionLock(): PaymentSelectionLock;
type PaymentSelectionLock = {
    default_options?: string;
    enabled?: boolean;
    payment_identifier?: string;
};
/** @returns {PromiseTimestamp} */
declare function PromiseTimestamp(): PromiseTimestamp;
type PromiseTimestamp = {
    max?: number;
    min?: number;
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
/** @returns {ShipmentPromise} */
declare function ShipmentPromise(): ShipmentPromise;
type ShipmentPromise = {
    timestamp?: PromiseTimestamp;
    formatted?: PromiseFormatted;
    iso?: PromiseISOFormat;
};
/** @returns {StoreInfo} */
declare function StoreInfo(): StoreInfo;
type StoreInfo = {
    uid?: number;
    store_code?: string;
    name?: string;
};
/** @returns {BaseInfo} */
declare function BaseInfo(): BaseInfo;
type BaseInfo = {
    uid?: number;
    name?: string;
};
/** @returns {BasePrice} */
declare function BasePrice(): BasePrice;
type BasePrice = {
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
    marked?: number;
};
/** @returns {ArticlePriceInfo} */
declare function ArticlePriceInfo(): ArticlePriceInfo;
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
/** @returns {ProductArticle} */
declare function ProductArticle(): ProductArticle;
type ProductArticle = {
    meta?: any;
    store?: StoreInfo;
    _custom_json?: any;
    seller_identifier?: string;
    identifier?: any;
    quantity?: number;
    seller?: BaseInfo;
    mto_quantity?: number;
    uid?: string;
    cart_item_meta?: any;
    type?: string;
    price?: ArticlePriceInfo;
    parent_item_identifiers?: any;
    size?: string;
    extra_meta?: any;
    gift_card?: any;
    product_group_tags?: string[];
    is_gift_visible?: boolean;
    /**
     * - A list of article tags
     */
    tags?: string[];
};
/** @returns {Tags} */
declare function Tags(): Tags;
type Tags = {
    tags?: any;
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
/** @returns {ProductImage} */
declare function ProductImage(): ProductImage;
type ProductImage = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
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
/** @returns {CartProduct} */
declare function CartProduct(): CartProduct;
type CartProduct = {
    teaser_tag?: Tags;
    _custom_json?: any;
    categories?: CategoryInfo[];
    item_code?: string;
    tags?: string[];
    uid?: number;
    type?: string;
    images?: ProductImage[];
    name?: string;
    /**
     * - Unique product url name generated via product
     * name and other meta data
     */
    slug?: string;
    action?: ProductAction;
    brand?: BaseInfo;
};
/** @returns {ProductPrice} */
declare function ProductPrice(): ProductPrice;
type ProductPrice = {
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
    marked?: number;
    selling?: number;
    add_on?: number;
};
/** @returns {ProductPriceInfo} */
declare function ProductPriceInfo(): ProductPriceInfo;
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
/** @returns {CouponDetails} */
declare function CouponDetails(): CouponDetails;
type CouponDetails = {
    discount_total_quantity?: number;
    discount_single_quantity?: number;
    code?: string;
};
/** @returns {PromoMeta} */
declare function PromoMeta(): PromoMeta;
type PromoMeta = {
    message?: string;
};
/** @returns {ProductAvailabilitySize} */
declare function ProductAvailabilitySize(): ProductAvailabilitySize;
type ProductAvailabilitySize = {
    is_available?: boolean;
    value?: string;
    display?: string;
};
/** @returns {ProductAvailability} */
declare function ProductAvailability(): ProductAvailability;
type ProductAvailability = {
    available_sizes?: ProductAvailabilitySize[];
    other_store_quantity?: number;
    deliverable?: boolean;
    out_of_stock?: boolean;
    is_valid?: boolean;
    sizes?: string[];
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
    custom_order?: any;
    article?: ProductArticle;
    product?: CartProduct;
    quantity?: number;
    moq?: any;
    promotions_applied?: AppliedPromotion[];
    price_per_unit?: ProductPriceInfo;
    key?: string;
    price?: ProductPriceInfo;
    parent_item_identifiers?: any;
    is_set?: boolean;
    coupon_message?: string;
    message?: string;
    coupon?: CouponDetails;
    discount?: string;
    bulk_offer?: any;
    promo_meta?: PromoMeta;
    delivery_promise?: ShipmentPromise;
    availability?: ProductAvailability;
    identifiers: CartProductIdentifer;
};
/** @returns {CartCurrency} */
declare function CartCurrency(): CartCurrency;
type CartCurrency = {
    symbol?: string;
    /**
     * - Currency code defined by ISO 4217:2015
     */
    code?: string;
};
/** @returns {CartDetailResponse} */
declare function CartDetailResponse(): CartDetailResponse;
type CartDetailResponse = {
    comment?: string;
    coupon_text?: string;
    last_modified?: string;
    pan_config?: any;
    is_valid?: boolean;
    id?: string;
    applied_promo_details?: AppliedPromotion[];
    checkout_mode?: string;
    restrict_checkout?: boolean;
    message?: string;
    buy_now?: boolean;
    breakup_values?: CartBreakup;
    delivery_charge_info?: string;
    payment_selection_lock?: PaymentSelectionLock;
    gstin?: string;
    delivery_promise?: ShipmentPromise;
    pan_no?: string;
    items?: CartProductInfo[];
    currency?: CartCurrency;
};
/** @returns {AddProductCart} */
declare function AddProductCart(): AddProductCart;
type AddProductCart = {
    seller_id?: number;
    _custom_json?: any;
    meta?: any;
    display?: string;
    quantity?: number;
    item_size?: string;
    item_id?: number;
    store_id?: number;
    pos?: boolean;
    parent_item_identifiers?: any[];
    extra_meta?: any;
    product_group_tags?: string[];
    article_assignment?: any;
    article_id?: string;
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
/** @returns {UpdateProductCart} */
declare function UpdateProductCart(): UpdateProductCart;
type UpdateProductCart = {
    meta?: any;
    _custom_json?: any;
    quantity?: number;
    item_size?: string;
    item_id?: number;
    item_index?: number;
    identifiers: CartProductIdentifer;
    parent_item_identifiers?: any;
    extra_meta?: any;
    article_id?: string;
};
/** @returns {UpdateCartRequest} */
declare function UpdateCartRequest(): UpdateCartRequest;
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
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
/** @returns {CartItemCountResponse} */
declare function CartItemCountResponse(): CartItemCountResponse;
type CartItemCountResponse = {
    /**
     * - Item count present in cart
     */
    user_cart_items_count?: number;
};
/** @returns {PageCoupon} */
declare function PageCoupon(): PageCoupon;
type PageCoupon = {
    has_previous?: boolean;
    current?: number;
    total?: number;
    total_item_count?: number;
    has_next?: boolean;
};
/** @returns {Coupon} */
declare function Coupon(): Coupon;
type Coupon = {
    max_discount_value?: number;
    coupon_code?: string;
    message?: string;
    is_applied?: boolean;
    coupon_type?: string;
    sub_title?: string;
    coupon_value?: number;
    is_applicable?: boolean;
    description?: string;
    minimum_cart_value?: number;
    title?: string;
    expires_on?: string;
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
/** @returns {OfferSeller} */
declare function OfferSeller(): OfferSeller;
type OfferSeller = {
    /**
     * - Seller id
     */
    uid?: number;
    name?: string;
};
/** @returns {OfferPrice} */
declare function OfferPrice(): OfferPrice;
type OfferPrice = {
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
     * - Currency symbol for currency
     */
    currency_symbol?: string;
    /**
     * - Original price of product
     */
    marked?: number;
    /**
     * - Discounted per unit price for current
     * offer object
     */
    bulk_effective?: number;
};
/** @returns {OfferItem} */
declare function OfferItem(): OfferItem;
type OfferItem = {
    /**
     * - Percentage value of discount
     */
    margin?: number;
    /**
     * - Quantity on which offer is applicable
     */
    quantity?: number;
    /**
     * - Total price of offer quantity with discount
     */
    total?: number;
    /**
     * - Is true for best offer from all offers present
     * for all sellers
     */
    best?: boolean;
    /**
     * - Offer type
     */
    type?: string;
    price?: OfferPrice;
    /**
     * - Whether offer discount is auto applied in cart
     */
    auto_applied?: boolean;
};
/** @returns {BulkPriceOffer} */
declare function BulkPriceOffer(): BulkPriceOffer;
type BulkPriceOffer = {
    seller?: OfferSeller;
    offers?: OfferItem[];
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
    meta?: any;
    country_code?: string;
    country_iso_code?: string;
    country?: string;
    id?: string;
    checkout_mode?: string;
    created_by_user_id?: string;
    area?: string;
    is_active?: boolean;
    city?: string;
    sector?: string;
    /**
     * - State code for international address
     */
    state_code?: string;
    address_type?: string;
    state?: string;
    is_default_address?: boolean;
    _custom_json?: any;
    country_phone_code?: string;
    area_code_slug?: string;
    area_code?: string;
    email?: string;
    google_map_point?: any;
    geo_location?: GeoLocation;
    address?: string;
    tags?: string[];
    name?: string;
    landmark?: string;
    user_id?: string;
    phone?: string;
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
    is_default_address?: boolean;
    success?: boolean;
    id?: string;
};
/** @returns {UpdateAddressResponse} */
declare function UpdateAddressResponse(): UpdateAddressResponse;
type UpdateAddressResponse = {
    is_updated?: boolean;
    is_default_address?: boolean;
    success?: boolean;
    id?: string;
};
/** @returns {DeleteAddressResponse} */
declare function DeleteAddressResponse(): DeleteAddressResponse;
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
/** @returns {SelectCartAddressRequest} */
declare function SelectCartAddressRequest(): SelectCartAddressRequest;
type SelectCartAddressRequest = {
    billing_address_id?: string;
    cart_id?: string;
    id?: string;
};
/** @returns {UpdateCartPaymentRequest} */
declare function UpdateCartPaymentRequest(): UpdateCartPaymentRequest;
type UpdateCartPaymentRequest = {
    payment_identifier?: string;
    aggregator_name?: string;
    address_id?: string;
    merchant_code?: string;
    payment_mode?: string;
    id?: string;
};
/** @returns {CouponValidity} */
declare function CouponValidity(): CouponValidity;
type CouponValidity = {
    discount?: number;
    valid?: boolean;
    next_validation_required?: boolean;
    display_message_en?: string;
    code?: string;
    title?: string;
};
/** @returns {PaymentCouponValidate} */
declare function PaymentCouponValidate(): PaymentCouponValidate;
type PaymentCouponValidate = {
    message?: string;
    success: boolean;
    coupon_validity?: CouponValidity;
};
/** @returns {ShipmentResponse} */
declare function ShipmentResponse(): ShipmentResponse;
type ShipmentResponse = {
    shipments?: number;
    fulfillment_type?: string;
    promise?: ShipmentPromise;
    dp_id?: string;
    box_type?: string;
    dp_options?: any;
    items?: CartProductInfo[];
    order_type?: string;
    shipment_type?: string;
    fulfillment_id?: number;
};
/** @returns {CartShipmentsResponse} */
declare function CartShipmentsResponse(): CartShipmentsResponse;
type CartShipmentsResponse = {
    comment?: string;
    restrict_checkout?: boolean;
    message?: string;
    buy_now?: boolean;
    coupon_text?: string;
    last_modified?: string;
    cart_id?: number;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    delivery_charge_info?: string;
    id?: string;
    payment_selection_lock?: PaymentSelectionLock;
    gstin?: string;
    shipments?: ShipmentResponse[];
    error?: boolean;
    delivery_promise?: ShipmentPromise;
    uid?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
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
     * - Article mongo id
     */
    article_uid: string;
};
/** @returns {UpdateCartShipmentRequest} */
declare function UpdateCartShipmentRequest(): UpdateCartShipmentRequest;
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
/** @returns {StaffCheckout} */
declare function StaffCheckout(): StaffCheckout;
type StaffCheckout = {
    first_name: string;
    user: string;
    employee_code?: string;
    _id: string;
    last_name: string;
};
/** @returns {CustomerDetails} */
declare function CustomerDetails(): CustomerDetails;
type CustomerDetails = {
    mobile: string;
    name?: string;
    email?: string;
};
/** @returns {CartCheckoutCustomMeta} */
declare function CartCheckoutCustomMeta(): CartCheckoutCustomMeta;
type CartCheckoutCustomMeta = {
    value: string;
    key: string;
};
/** @returns {Files} */
declare function Files(): Files;
type Files = {
    values: string[];
    key: string;
};
/** @returns {CartPosCheckoutDetailRequest} */
declare function CartPosCheckoutDetailRequest(): CartPosCheckoutDetailRequest;
type CartPosCheckoutDetailRequest = {
    meta?: any;
    pick_at_store_uid?: number;
    billing_address?: any;
    payment_auto_confirm?: boolean;
    callback_url?: string;
    delivery_address?: any;
    merchant_code?: string;
    order_type: string;
    id?: string;
    staff?: StaffCheckout;
    /**
     * - Customer details
     */
    customer_details?: any;
    address_id?: string;
    aggregator?: string;
    payment_params?: any;
    billing_address_id?: string;
    payment_mode: string;
    pos?: boolean;
    extra_meta?: any;
    custom_meta?: CartCheckoutCustomMeta[];
    payment_identifier?: string;
    ordering_store?: number;
    /**
     * - List of file url
     */
    files?: Files[];
};
/** @returns {CheckCart} */
declare function CheckCart(): CheckCart;
type CheckCart = {
    comment?: string;
    delivery_charges?: number;
    coupon_text?: string;
    last_modified?: string;
    is_valid?: boolean;
    cod_message?: string;
    success?: boolean;
    id?: string;
    uid?: string;
    checkout_mode?: string;
    error_message?: string;
    store_emps?: any[];
    store_code?: string;
    restrict_checkout?: boolean;
    message?: string;
    buy_now?: boolean;
    cod_available?: boolean;
    cart_id?: number;
    breakup_values?: CartBreakup;
    order_id?: string;
    cod_charges?: number;
    delivery_charge_info?: string;
    user_type?: string;
    payment_selection_lock?: PaymentSelectionLock;
    gstin?: string;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    currency?: CartCurrency;
    delivery_charge_order_value?: number;
};
/** @returns {CartCheckoutResponse} */
declare function CartCheckoutResponse(): CartCheckoutResponse;
type CartCheckoutResponse = {
    cart?: CheckCart;
    app_intercept_url?: string;
    callback_url?: string;
    message?: string;
    data?: any;
    order_id?: string;
    success?: boolean;
    payment_confirm_url?: string;
};
/** @returns {GiftDetail} */
declare function GiftDetail(): GiftDetail;
type GiftDetail = {
    gift_message?: string;
    is_gift_applied?: boolean;
};
/** @returns {ArticleGiftDetail} */
declare function ArticleGiftDetail(): ArticleGiftDetail;
type ArticleGiftDetail = {
    article_id?: GiftDetail;
};
/** @returns {CartMetaRequest} */
declare function CartMetaRequest(): CartMetaRequest;
type CartMetaRequest = {
    comment?: string;
    gstin?: string;
    /**
     * - Customer contact details for
     * customer pickup at store
     */
    pick_up_customer_details?: any;
    checkout_mode?: string;
    gift_details?: ArticleGiftDetail;
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
    errors?: string[];
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
/** @returns {PickupStoreDetail} */
declare function PickupStoreDetail(): PickupStoreDetail;
type PickupStoreDetail = {
    city?: string;
    address_type?: string;
    address?: string;
    state?: string;
    store_code?: string;
    uid?: number;
    pincode?: number;
    area_code_slug?: string;
    area_code?: string;
    email?: string;
    name?: string;
    landmark?: string;
    area?: string;
    country?: string;
    phone?: string;
    id?: number;
};
/** @returns {StoreDetailsResponse} */
declare function StoreDetailsResponse(): StoreDetailsResponse;
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
/** @returns {GetShareCartLinkRequest} */
declare function GetShareCartLinkRequest(): GetShareCartLinkRequest;
type GetShareCartLinkRequest = {
    /**
     * - Staff, Ordering store or any other data. This
     * data will be used to generate link as well as sent as shared details.
     */
    meta?: any;
    /**
     * - Cart uid for generating sharing
     */
    id?: string;
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
/** @returns {SharedCartDetails} */
declare function SharedCartDetails(): SharedCartDetails;
type SharedCartDetails = {
    /**
     * - Meta data sent while generating share cart link
     */
    meta?: any;
    /**
     * - User details of who generated share link
     */
    user?: any;
    created_on?: string;
    /**
     * - Short link id
     */
    token?: string;
    /**
     * - Share link device and other source information
     */
    source?: any;
};
/** @returns {SharedCart} */
declare function SharedCart(): SharedCart;
type SharedCart = {
    comment?: string;
    coupon_text?: string;
    last_modified?: string;
    shared_cart_details?: SharedCartDetails;
    is_valid?: boolean;
    id?: string;
    uid?: string;
    checkout_mode?: string;
    restrict_checkout?: boolean;
    message?: string;
    buy_now?: boolean;
    cart_id?: number;
    breakup_values?: CartBreakup;
    delivery_charge_info?: string;
    payment_selection_lock?: PaymentSelectionLock;
    gstin?: string;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    currency?: CartCurrency;
};
/** @returns {SharedCartResponse} */
declare function SharedCartResponse(): SharedCartResponse;
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
