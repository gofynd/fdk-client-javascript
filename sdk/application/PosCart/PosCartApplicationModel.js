const Joi = require("joi");

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
 * @property {CartCurrency} [currency]
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
 * @typedef CartPosCheckoutDetailRequest
 * @property {string} [address_id]
 * @property {string} [aggregator]
 * @property {Object} [billing_address]
 * @property {string} [billing_address_id]
 * @property {string} [callback_url]
 * @property {CartCheckoutCustomMeta[]} [custom_meta]
 * @property {Object} [customer_details] - Customer details
 * @property {Object} [delivery_address]
 * @property {Object} [extra_meta]
 * @property {Files[]} [files] - List of file url
 * @property {string} [id]
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

class PosCartApplicationModel {
  /** @returns {ActionQuery} */
  static ActionQuery() {
    return Joi.object({
      product_slug: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {AddCartRequest} */
  static AddCartRequest() {
    return Joi.object({
      items: Joi.array().items(PosCartApplicationModel.AddProductCart()),
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

  /** @returns {Address} */
  static Address() {
    return Joi.object({
      _custom_json: Joi.any(),
      address: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      area_code: Joi.string().allow(""),
      area_code_slug: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      created_by_user_id: Joi.string().allow(""),
      email: Joi.string().allow(""),
      geo_location: PosCartApplicationModel.GeoLocation(),
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

  /** @returns {AppliedFreeArticles} */
  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),
      free_gift_item_details: PosCartApplicationModel.FreeGiftItem(),
      parent_item_identifier: Joi.string().allow(""),
      quantity: Joi.number(),
    });
  }

  /** @returns {AppliedPromotion} */
  static AppliedPromotion() {
    return Joi.object({
      amount: Joi.number(),
      applied_free_articles: Joi.array().items(
        PosCartApplicationModel.AppliedFreeArticles()
      ),
      article_quantity: Joi.number(),
      buy_rules: Joi.array().items(PosCartApplicationModel.BuyRules()),
      currency: PosCartApplicationModel.CartCurrency(),
      discount_rules: Joi.array().items(
        PosCartApplicationModel.DiscountRulesApp()
      ),
      mrp_promotion: Joi.boolean(),
      offer_text: Joi.string().allow(""),
      ownership: PosCartApplicationModel.Ownership(),
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

  /** @returns {ArticleGiftDetail} */
  static ArticleGiftDetail() {
    return Joi.object({
      article_id: PosCartApplicationModel.GiftDetail(),
    });
  }

  /** @returns {ArticlePriceInfo} */
  static ArticlePriceInfo() {
    return Joi.object({
      base: PosCartApplicationModel.BasePrice(),
      converted: PosCartApplicationModel.BasePrice(),
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

  /** @returns {BulkPriceOffer} */
  static BulkPriceOffer() {
    return Joi.object({
      offers: Joi.array().items(PosCartApplicationModel.OfferItem()),
      seller: PosCartApplicationModel.OfferSeller(),
    });
  }

  /** @returns {BulkPriceResponse} */
  static BulkPriceResponse() {
    return Joi.object({
      data: Joi.array().items(PosCartApplicationModel.BulkPriceOffer()),
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
      coupon: PosCartApplicationModel.CouponBreakup(),
      display: Joi.array().items(PosCartApplicationModel.DisplayBreakup()),
      loyalty_points: PosCartApplicationModel.LoyaltyPoints(),
      raw: PosCartApplicationModel.RawBreakup(),
    });
  }

  /** @returns {CartCheckoutCustomMeta} */
  static CartCheckoutCustomMeta() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {CartCheckoutResponse} */
  static CartCheckoutResponse() {
    return Joi.object({
      app_intercept_url: Joi.string().allow(""),
      callback_url: Joi.string().allow(""),
      cart: PosCartApplicationModel.CheckCart(),
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
        PosCartApplicationModel.AppliedPromotion()
      ),
      breakup_values: PosCartApplicationModel.CartBreakup(),
      buy_now: Joi.boolean(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: PosCartApplicationModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: PosCartApplicationModel.ShipmentPromise(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(PosCartApplicationModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      pan_config: Joi.any(),
      pan_no: Joi.string().allow(""),
      payment_selection_lock: PosCartApplicationModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
    });
  }

  /** @returns {CartItemCountResponse} */
  static CartItemCountResponse() {
    return Joi.object({
      user_cart_items_count: Joi.number(),
    });
  }

  /** @returns {CartMetaMissingResponse} */
  static CartMetaMissingResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CartMetaRequest} */
  static CartMetaRequest() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      delivery_slots: Joi.any(),
      gift_details: PosCartApplicationModel.ArticleGiftDetail(),
      gstin: Joi.string().allow(""),
      pick_up_customer_details: Joi.any(),
    });
  }

  /** @returns {CartMetaResponse} */
  static CartMetaResponse() {
    return Joi.object({
      is_valid: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CartPosCheckoutDetailRequest} */
  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),
      aggregator: Joi.string().allow(""),
      billing_address: Joi.any(),
      billing_address_id: Joi.string().allow(""),
      callback_url: Joi.string().allow("").allow(null),
      custom_meta: Joi.array().items(
        PosCartApplicationModel.CartCheckoutCustomMeta()
      ),
      customer_details: Joi.any().allow(null),
      delivery_address: Joi.any(),
      extra_meta: Joi.any(),
      files: Joi.array().items(PosCartApplicationModel.Files()),
      id: Joi.string().allow("").allow(null),
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
      staff: PosCartApplicationModel.StaffCheckout(),
    });
  }

  /** @returns {CartProduct} */
  static CartProduct() {
    return Joi.object({
      _custom_json: Joi.any(),
      action: PosCartApplicationModel.ProductAction(),
      brand: PosCartApplicationModel.BaseInfo(),
      categories: Joi.array().items(PosCartApplicationModel.CategoryInfo()),
      images: Joi.array().items(PosCartApplicationModel.ProductImage()),
      item_code: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      teaser_tag: PosCartApplicationModel.Tags(),
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
      article: PosCartApplicationModel.ProductArticle(),
      availability: PosCartApplicationModel.ProductAvailability(),
      bulk_offer: Joi.any(),
      coupon: PosCartApplicationModel.CouponDetails(),
      coupon_message: Joi.string().allow(""),
      custom_order: Joi.any(),
      delivery_promise: PosCartApplicationModel.ShipmentPromise(),
      discount: Joi.string().allow(""),
      identifiers: PosCartApplicationModel.CartProductIdentifer().required(),
      is_set: Joi.boolean(),
      key: Joi.string().allow(""),
      message: Joi.string().allow(""),
      moq: Joi.any(),
      parent_item_identifiers: Joi.any(),
      price: PosCartApplicationModel.ProductPriceInfo(),
      price_per_unit: PosCartApplicationModel.ProductPriceInfo(),
      product: PosCartApplicationModel.CartProduct(),
      promo_meta: PosCartApplicationModel.PromoMeta(),
      promotions_applied: Joi.array().items(
        PosCartApplicationModel.AppliedPromotion()
      ),
      quantity: Joi.number(),
    });
  }

  /** @returns {CartShipmentsResponse} */
  static CartShipmentsResponse() {
    return Joi.object({
      breakup_values: PosCartApplicationModel.CartBreakup(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: PosCartApplicationModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: PosCartApplicationModel.ShipmentPromise(),
      error: Joi.boolean(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      payment_selection_lock: PosCartApplicationModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      shipments: Joi.array().items(PosCartApplicationModel.ShipmentResponse()),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {CategoryInfo} */
  static CategoryInfo() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {CheckCart} */
  static CheckCart() {
    return Joi.object({
      breakup_values: PosCartApplicationModel.CartBreakup(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      cod_available: Joi.boolean(),
      cod_charges: Joi.number(),
      cod_message: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: PosCartApplicationModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_charge_order_value: Joi.number(),
      delivery_charges: Joi.number(),
      delivery_promise: PosCartApplicationModel.ShipmentPromise(),
      error_message: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(PosCartApplicationModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      payment_selection_lock: PosCartApplicationModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      store_code: Joi.string().allow(""),
      store_emps: Joi.array().items(Joi.any()),
      success: Joi.boolean(),
      uid: Joi.string().allow(""),
      user_type: Joi.string().allow(""),
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

  /** @returns {CouponDetails} */
  static CouponDetails() {
    return Joi.object({
      code: Joi.string().allow(""),
      discount_single_quantity: Joi.number(),
      discount_total_quantity: Joi.number(),
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

  /** @returns {GetAddressesResponse} */
  static GetAddressesResponse() {
    return Joi.object({
      address: Joi.array().items(PosCartApplicationModel.Address()),
      pii_masking: Joi.boolean(),
    });
  }

  /** @returns {GetCouponResponse} */
  static GetCouponResponse() {
    return Joi.object({
      available_coupon_list: Joi.array().items(
        PosCartApplicationModel.Coupon()
      ),
      page: PosCartApplicationModel.PageCoupon(),
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

  /** @returns {GiftDetail} */
  static GiftDetail() {
    return Joi.object({
      gift_message: Joi.string().allow(""),
      is_gift_applied: Joi.boolean(),
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

  /** @returns {OfferItem} */
  static OfferItem() {
    return Joi.object({
      auto_applied: Joi.boolean(),
      best: Joi.boolean(),
      margin: Joi.number(),
      price: PosCartApplicationModel.OfferPrice(),
      quantity: Joi.number(),
      total: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {OfferPrice} */
  static OfferPrice() {
    return Joi.object({
      bulk_effective: Joi.number(),
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      effective: Joi.number(),
      marked: Joi.number(),
    });
  }

  /** @returns {OfferSeller} */
  static OfferSeller() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {Ownership} */
  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().allow(""),
      payable_category: Joi.string().allow(""),
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

  /** @returns {PaymentCouponValidate} */
  static PaymentCouponValidate() {
    return Joi.object({
      coupon_validity: PosCartApplicationModel.CouponValidity(),
      message: Joi.string().allow(""),
      success: Joi.boolean().required(),
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

  /** @returns {ProductAction} */
  static ProductAction() {
    return Joi.object({
      query: PosCartApplicationModel.ActionQuery(),
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
      price: PosCartApplicationModel.ArticlePriceInfo(),
      product_group_tags: Joi.array().items(Joi.string().allow("")),
      quantity: Joi.number(),
      seller: PosCartApplicationModel.BaseInfo(),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      store: PosCartApplicationModel.StoreInfo(),
      type: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {ProductAvailability} */
  static ProductAvailability() {
    return Joi.object({
      available_sizes: Joi.array().items(
        PosCartApplicationModel.ProductAvailabilitySize()
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
      base: PosCartApplicationModel.ProductPrice(),
      converted: PosCartApplicationModel.ProductPrice(),
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

  /** @returns {RewardPointRequest} */
  static RewardPointRequest() {
    return Joi.object({
      points: Joi.boolean().required(),
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

  /** @returns {SelectCartAddressRequest} */
  static SelectCartAddressRequest() {
    return Joi.object({
      billing_address_id: Joi.string().allow(""),
      cart_id: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {SharedCart} */
  static SharedCart() {
    return Joi.object({
      breakup_values: PosCartApplicationModel.CartBreakup(),
      buy_now: Joi.boolean(),
      cart_id: Joi.number(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      coupon_text: Joi.string().allow(""),
      currency: PosCartApplicationModel.CartCurrency(),
      delivery_charge_info: Joi.string().allow(""),
      delivery_promise: PosCartApplicationModel.ShipmentPromise(),
      gstin: Joi.string().allow(""),
      id: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      items: Joi.array().items(PosCartApplicationModel.CartProductInfo()),
      last_modified: Joi.string().allow(""),
      message: Joi.string().allow(""),
      payment_selection_lock: PosCartApplicationModel.PaymentSelectionLock(),
      restrict_checkout: Joi.boolean(),
      shared_cart_details: PosCartApplicationModel.SharedCartDetails(),
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
      cart: PosCartApplicationModel.SharedCart(),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentPromise} */
  static ShipmentPromise() {
    return Joi.object({
      formatted: PosCartApplicationModel.PromiseFormatted(),
      timestamp: PosCartApplicationModel.PromiseTimestamp(),
    });
  }

  /** @returns {ShipmentResponse} */
  static ShipmentResponse() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),
      dp_id: Joi.string().allow("").allow(null),
      dp_options: Joi.any().allow(null),
      fulfillment_id: Joi.number(),
      fulfillment_type: Joi.string().allow(""),
      items: Joi.array().items(PosCartApplicationModel.CartProductInfo()),
      order_type: Joi.string().allow(""),
      promise: PosCartApplicationModel.ShipmentPromise(),
      shipment_type: Joi.string().allow(""),
      shipments: Joi.number(),
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

  /** @returns {StoreDetailsResponse} */
  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartApplicationModel.PickupStoreDetail()),
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
      cart: PosCartApplicationModel.CartDetailResponse(),
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

  /** @returns {UpdateCartRequest} */
  static UpdateCartRequest() {
    return Joi.object({
      items: Joi.array().items(PosCartApplicationModel.UpdateProductCart()),
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
        .items(PosCartApplicationModel.UpdateCartShipmentItem())
        .required(),
    });
  }

  /** @returns {UpdateProductCart} */
  static UpdateProductCart() {
    return Joi.object({
      _custom_json: Joi.any(),
      article_id: Joi.string().allow(""),
      extra_meta: Joi.any(),
      identifiers: PosCartApplicationModel.CartProductIdentifer().required(),
      item_id: Joi.number(),
      item_index: Joi.number(),
      item_size: Joi.string().allow(""),
      meta: Joi.any(),
      parent_item_identifiers: Joi.any(),
      quantity: Joi.number(),
    });
  }
}
module.exports = PosCartApplicationModel;
