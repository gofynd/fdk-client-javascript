export = CartApplicationModel;
/**
 * @typedef BuyRules
 * @property {Object} [item_criteria] - Item criteria of promotion.
 * @property {Object} [cart_conditions] - Cart conditions details for promotion.
 */
/**
 * @typedef DiscountRulesApp
 * @property {string[]} [matched_buy_rules] - Matched buy rules for promotion.
 * @property {Object} [raw_offer] - Raw offer details for promotion.
 * @property {Object} [offer] - Offer for promotion.
 * @property {Object} [item_criteria] - Item criteria of promotion.
 */
/**
 * @typedef Ownership
 * @property {string} [payable_category] - Promotion amount payable category.
 * @property {string} [payable_by] - Promotion amount bearable party.
 */
/**
 * @typedef AppliedFreeArticles
 * @property {FreeGiftItems} [free_gift_item_details] - Free gift items details.
 * @property {string} [parent_item_identifier] - Parent item identifier for free article.
 * @property {number} [quantity] - Quantity of free articles.
 * @property {string} [article_id] - IDs of free articles.
 */
/**
 * @typedef AppliedPromotion
 * @property {string} [promo_id] - Promotion id.
 * @property {BuyRules[]} [buy_rules] - Buy rules for promotions.
 * @property {string} [offer_text] - Offer text of current promotion.
 * @property {string} [promotion_group] - Promotion group for the promotion.
 * @property {boolean} [mrp_promotion] - If applied promotion is applied on
 *   product MRP or ESP.
 * @property {string} [promotion_name] - Promotion name of current promotion.
 * @property {number} [amount] - Per unit discount amount applied with current promotion.
 * @property {DiscountRulesApp[]} [discount_rules] - Discount rules for promotions.
 * @property {Ownership} [ownership] - Ownership of promotion.
 * @property {number} [article_quantity] - Quantity of article on which
 *   promotion is applicable.
 * @property {AppliedFreeArticles[]} [applied_free_articles] - Applied free
 *   article for free gift item promotions.
 * @property {string} [promotion_type] - Promotion type of current promotion.
 * @property {Object} [meta] - Meta object for extra data.
 * @property {string} [code] - Promotion code.
 */
/**
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled] - Denotes if default payment selection is enable.
 * @property {string} [default_options] - Default Selection Payment Mode.
 * @property {string} [payment_identifier] - Identifier for Payment Mode.
 */
/**
 * @typedef PromiseFormatted
 * @property {string} [max] - Maximum Delivery promise formatted timestamp.
 * @property {string} [min] - Minimum Delivery promise formatted timestamp.
 */
/**
 * @typedef PromiseISOFormat
 * @property {string} [max] - Max promise in ISO format.
 * @property {string} [min] - Min Promise in ISO format.
 */
/**
 * @typedef PromiseTimestamp
 * @property {number} [max] - Maximum Promise for the shipment.
 * @property {number} [min] - Minimum delivery promise time for the shipment.
 */
/**
 * @typedef ShipmentPromise
 * @property {PromiseFormatted} [formatted]
 * @property {PromiseTimestamp} [timestamp]
 * @property {PromiseISOFormat} [iso]
 */
/**
 * @typedef BasePrice
 * @property {number} [effective] - Current per unit price of product after
 *   existing deductions.
 * @property {string} [currency_symbol] - Currency symbol of the currncy used for price.
 * @property {number} [marked] - Original price of product.
 * @property {string} [currency_code] - Currency code for all amounts.
 */
/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
 */
/**
 * @typedef BaseInfo
 * @property {number} [uid] - Unique identifier of entities like brand or seller.
 * @property {string} [name] - Name of entities like brand or seller.
 */
/**
 * @typedef StoreInfo
 * @property {string} [store_code] - A unique code or identifier for the store,
 *   often used for internal reference.
 * @property {number} [uid] - Unique identifiers of the store from where product
 *   is fulfileld.
 * @property {string} [name] - Store name of the store from where the product is
 *   fulfiled .
 */
/**
 * @typedef ProductArticle
 * @property {ArticlePriceInfo} [price]
 * @property {string[]} [product_group_tags] - List fot the unique identifier
 *   for the product grouping.
 * @property {Object} [extra_meta] - Field to update extra meta of the article in cart.
 * @property {number} [quantity] - Quantity of the article added in cart.
 * @property {Object} [_custom_json] - Field to update custom json of the article in cart.
 * @property {Object} [meta] - Article meta data.
 * @property {string} [size] - Size of the article added in cart.
 * @property {number} [mto_quantity] - Quantity of the product which will
 *   specially manufactured as not available in stock.
 * @property {BaseInfo} [seller]
 * @property {string} [seller_identifier] - List of identifiers used by sellers
 *   for the product size.
 * @property {Object} [parent_item_identifiers] - Fields to determine parent
 *   product of the product.
 * @property {Object} [identifier] - Unique identifier of the article.
 * @property {StoreInfo} [store]
 * @property {Object} [cart_item_meta] - Meta details of the article added from cart.
 * @property {string} [uid] - This unique identifier is assigned to the specific
 *   article. This represents item x size x location.
 * @property {Object} [gift_card] - Gift card detail if gift card applied to the
 *   product which indicates gift price, gift applicable flag and display
 *   message for the gift.
 * @property {boolean} [is_gift_visible] - Whether the product can be purchased
 *   as a gift. It is true if the product is available for gifting and false otherwise.
 * @property {string} [type] - Type of the data sent in response. Possible value
 *   is article.
 * @property {string[]} [tags] - A list of article tags.
 */
/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier] - Article idenfier generated by cart.
 */
/**
 * @typedef PromoMeta
 * @property {string} [message] - Loyalty points message denotes how much
 *   loyalty points and applied and how much left with the user.
 */
/**
 * @typedef ChargesAmount
 * @property {number} [value] - This is the value of amount added.
 * @property {string} [currency] - This is destination currency of value.
 */
/**
 * @typedef Charges
 * @property {Object} [meta] - Meta data realted to charges price adjustment.
 * @property {ChargesAmount} [amount]
 * @property {string} [name] - Name of the charge applied.
 * @property {boolean} [allow_refund] - Whether refund is allowed or not for the charge.
 * @property {string} [code] - Code of the charge applied.
 * @property {string} [type] - Type of the charge applied.
 */
/**
 * @typedef ProductPrice
 * @property {string} [currency_symbol] - Currency symbol of the price defined
 *   for the product.
 * @property {number} [selling] - Selling price of the product .
 * @property {string} [currency_code] - Currency code of the price defined for
 *   the product.
 * @property {number} [add_on] - Price before promotion and coupon amount
 *   applied for calculation.
 * @property {number} [effective] - Selling price of the product .
 * @property {number} [marked] - Maximum price of the product .
 */
/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [base]
 * @property {ProductPrice} [converted]
 */
/**
 * @typedef ProductPricePerUnit
 * @property {string} [currency_symbol] - Currency symbol of the price defined
 *   for the product.
 * @property {number} [selling_price] - Selling price of the product .
 * @property {string} [currency_code] - Currency code of the price defined for
 *   the product.
 * @property {number} [add_on] - Price before promotion and coupon amount
 *   applied for calculation.
 * @property {number} [effective] - Selling price of the product .
 * @property {number} [marked] - Maximum price of the product .
 */
/**
 * @typedef ProductPricePerUnitInfo
 * @property {ProductPricePerUnit} [base]
 * @property {ProductPricePerUnit} [converted]
 */
/**
 * @typedef ProductAvailabilitySize
 * @property {string} [display] - Display size of the product.
 * @property {string} [value] - Actual value of the size.
 * @property {boolean} [is_available] - Available flag for the size of the
 *   product if that is available.
 */
/**
 * @typedef ProductAvailability
 * @property {boolean} [out_of_stock] - Denotes if the product is available in stock.
 * @property {boolean} [deliverable] - Deliverable flag denotes if the product
 *   is deliverable or not.
 * @property {ProductAvailabilitySize[]} [available_sizes] - Product sizes availability.
 * @property {boolean} [is_valid] - Valid flag for the product if the product
 *   added in cart is valid to place the order.
 * @property {number} [other_store_quantity] - Quantity of the product available
 *   on other store.
 * @property {string[]} [sizes] - All sizes of the product.
 */
/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug] - Contains list of product slug.
 */
/**
 * @typedef ProductAction
 * @property {ActionQuery} [query]
 * @property {string} [url] - Url of the product to render the product .
 * @property {string} [type] - Type of action.
 */
/**
 * @typedef Tags
 * @property {Object} [tags] - Tags is a lable or batch that is attached to a
 *   product in cart.
 */
/**
 * @typedef ProductImage
 * @property {string} [secure_url] - Secured url of the product image.
 * @property {string} [aspect_ratio] - Aspect ratio of the product image.
 * @property {string} [url] - Bucket link url for product image.
 */
/**
 * @typedef CategoryInfo
 * @property {number} [uid] - Product Category Id.
 * @property {string} [name] - Category name of the product .
 */
/**
 * @typedef CartProduct
 * @property {Object} [_custom_json] - Field to add custom json of the product in cart.
 * @property {BaseInfo} [brand]
 * @property {ProductAction} [action]
 * @property {Tags} [teaser_tag]
 * @property {string} [slug] - Unique product url name generated via product
 *   name and other meta data.
 * @property {ProductImage[]} [images] - Product Images urls of different types
 *   like secure url, aspect ration url and url.
 * @property {number} [uid] - Unique identifier of the product in cart.
 * @property {string} [name] - Product name of the product in cart which is
 *   defined on platform.
 * @property {string} [item_code] - Product code of the product while defining
 *   product on platform.
 * @property {CategoryInfo[]} [categories] - Product category information which
 *   incldes category name and category id.
 * @property {string[]} [tags] - Products tags that are added to each product to
 *   identify the set of products.
 * @property {string} [type] - Type of product in cart.
 * @property {Object} [attributes] - Product attributes defined on platform.
 */
/**
 * @typedef CouponDetails
 * @property {number} [discount_single_quantity] - Discout amount applied from
 *   coupon for single quantity of the product.
 * @property {string} [code] - Coupon code of the coupon applied.
 * @property {number} [discount_total_quantity] - Total discount earned from
 *   coupon applied to cart.
 */
/**
 * @typedef CartProductInfo
 * @property {ProductArticle} [article]
 * @property {Object} [moq] - An Integer indication the Minimum Order Quantity
 *   of a product, e.g. 100.
 * @property {CartProductIdentifer} identifiers
 * @property {PromoMeta} [promo_meta]
 * @property {ProductPriceInfo} [price]
 * @property {number} [quantity] - Quantity of the product added in cart.
 * @property {Charges[]} [charges] - Charges information which denotes types of
 *   charges and amount of charge applied to that product in cart.
 * @property {string} [discount] - Discount amount of the product in cart.
 * @property {ProductAvailability} [availability]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartProduct} [product]
 * @property {string} [product_ean_id] - European Article Number of the product
 *   (limited upto 50 EAN identifier in a single request).
 * @property {Object} [bulk_offer] - Bulk offer information for the product
 *   which denotes if any bulk offer is applied to the product in cart.
 * @property {Object} [parent_item_identifiers] - Parent item information of the
 *   product which identifies the parent of the product in cart.
 * @property {CouponDetails} [coupon]
 * @property {Object} [custom_order] - Whether MTO (Make to Order) is enabled or not.
 * @property {string} [coupon_message] - Message for the coupon denotes which
 *   coupon is applied and empty if not applied.
 * @property {string} [key] - The attribute key associated with the size.
 * @property {string} [message] - Product level message which denotes error
 *   information to display over the product in cart.
 * @property {boolean} [is_set] - Whether or not the product is a set of items.
 * @property {ProductPricePerUnitInfo} [price_per_unit]
 * @property {AppliedPromotion[]} [promotions_applied] - List of applicable
 *   promotion for the product in cart.
 */
/**
 * @typedef DisplayBreakup
 * @property {string} [currency_symbol] - Currency symbol for the price.
 * @property {string} [key] - Key of the price like total_mrp, total, subtotal etc.
 * @property {string} [display] - Display key field that to be shown against the value.
 * @property {string[]} [message] - List of message at price level to be displayed.
 * @property {string} [currency_code] - Currency code for the price .
 * @property {number} [value] - Numeric value of the price.
 * @property {number} [preset] - Value for the price which is set from platform
 *   if applicable.
 */
/**
 * @typedef RawBreakup
 * @property {number} [vog] - Total value of goods after all discount, coupons
 *   and promotion applied of all products in cart.
 * @property {number} [subtotal] - Selling price amount of all products in cart.
 * @property {number} [fynd_cash] - Loyalty points applied on cart.
 * @property {number} [discount] - Discount amount recieved on cart.
 * @property {number} [convenience_fee] - Convenience fee amount applied to cart.
 * @property {number} [delivery_charge] - Delivery charge applied to cart.
 * @property {number} [gst_charges] - GST charges applied on cart.
 * @property {number} [mrp_total] - Maximum price total amount of all products in cart.
 * @property {number} [mop_total] - Total of payment modes by which payment is
 *   going to be done.
 * @property {number} [total_charge] - Total amount of charges applied on cart.
 * @property {number} [coupon] - Coupon amount applied to cart.
 * @property {number} [total] - Total payable amount by the customer.
 * @property {number} [gift_card] - Gift cart amount applied on cart.
 * @property {number} [you_saved] - Total amount will be saved if customer
 *   places the order.
 * @property {number} [cod_charge] - Cod charge value applied to cart. This is
 *   applied when user select payment mode as COD.
 */
/**
 * @typedef CouponBreakup
 * @property {number} [coupon_value] - Value of the coupon applied to cart.
 * @property {string} [title] - Coupon Title of the coupon applied denotes name
 *   of the coupon.
 * @property {string} [sub_title] - Coupon subtitle of the coupon applied to
 *   cart which is used to display.
 * @property {number} [minimum_cart_value] - Minumum cart value of cart after
 *   which the coupon can be applied.
 * @property {string} [message] - Coupon message of the coupon applied to cart.
 * @property {string} [coupon_type] - Type of the coupon applied to cart.
 * @property {string} [uid] - Unique identifier of the coupon applied to cart.
 * @property {number} [value] - Coupon value of the coupon applied to cart.
 * @property {number} [max_discount_value] - Maximum discount value of the
 *   coupon applied to cart.
 * @property {boolean} [is_applied] - Applied flag which denotes if any coupon
 *   is applied to cart.
 * @property {string} [description] - Coupon description of the coupon applied to cart.
 * @property {string} [code] - Coupon code of the coupon applied.
 * @property {string} [type] - Type of the coupon applied to cart.
 */
/**
 * @typedef LoyaltyPoints
 * @property {number} [total] - Total loyalty points available with user.
 * @property {string} [description] - Description for loyalty points.
 * @property {number} [applicable] - Whether the loyalty points are applicable
 *   for the cart .
 * @property {boolean} [is_applied] - Whether the loyalty points are applied on the cart .
 */
/**
 * @typedef CartBreakup
 * @property {DisplayBreakup[]} [display] - List of breakup data which is used
 *   to display the breakup to the customer like MRP total, Discount, Sub total,
 *   coupon value, promotion value and final total.
 * @property {RawBreakup} [raw]
 * @property {CouponBreakup} [coupon]
 * @property {LoyaltyPoints} [loyalty_points]
 */
/**
 * @typedef CartCurrency
 * @property {string} [code] - Currency code defined by ISO 4217:2015.
 * @property {string} [symbol] - Currency symbol for currency of user cart prices.
 */
/**
 * @typedef CartDetailCoupon
 * @property {number} [cashback_amount] - Fields denotes cashback amount applied to cart.
 * @property {string} [cashback_message_primary] - Primary cashback message for
 *   coupon applied to cart.
 * @property {string} [cashback_message_secondary] - Secondary cashback message
 *   for coupon applied to cart.
 * @property {string} [coupon_code] - Coupon code to be applied to cart.
 * @property {string} [coupon_description] - Coupon description of the coupon
 *   applied to cart.
 * @property {string} [coupon_id] - Unique identifier of the coupon applied to cart.
 * @property {string} [coupon_subtitle] - Coupon subtitle of the coupon applied to cart.
 * @property {string} [coupon_title] - Coupon Title of the coupon applied.
 * @property {string} [coupon_type] - Type of the coupon applied to cart.
 * @property {number} [coupon_value] - Value of the coupon applied to cart.
 * @property {number} [discount] - Total discount earned from coupon applied to cart.
 * @property {boolean} [is_applied] - Flag to determine where the coupon is
 *   applied to cart or not.
 * @property {boolean} [is_valid] - Determine where the coupon applied to cart is valid.
 * @property {number} [maximum_discount_value] - Maximum discount value of the
 *   coupon applied to cart.
 * @property {string} [message] - Coupon message of the coupon applied to cart.
 * @property {number} [minimum_cart_value] - Minimum cart value of the coupon
 *   applied to cart.
 */
/**
 * @typedef ChargesThreshold
 * @property {number} [charges] - Charges amount to be applied on cart.
 * @property {number} [threshold] - Threshold of cart value on which the charge
 *   should be applied .
 */
/**
 * @typedef DeliveryChargesConfig
 * @property {boolean} [enabled] - Delivery charge enabled for the cart or not.
 * @property {ChargesThreshold[]} [charges] - Charges applicable based on threshold.
 */
/**
 * @typedef CartCommonConfig
 * @property {DeliveryChargesConfig} [delivery_charges_config]
 */
/**
 * @typedef CartDetailResponse
 * @property {number} [cart_id] - Unique identifier of the user cart.
 * @property {string} [uid] - Unique identifier of the user cart.
 * @property {AppliedPromotion[]} [applied_promo_details] - List of applied
 *   promotions data to cart which includes promotion id, promotion name, offer
 *   text, description, buy rules, discount rules and promotion type.
 * @property {string} [checkout_mode] - Checkout mode of user cart.
 * @property {string} [pan_no] - Permanent Account Number of the user.
 * @property {boolean} [is_valid] - Cart validity flag determines the if the
 *   response is valid or not.
 * @property {string} [id] - Unique identifier of the user cart.
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message to be added in user cart.
 * @property {CartProductInfo[]} [items] - Items data list in user cart that
 *   includes item id, item size, store id, available sizes and rest of the item
 *   related data.
 * @property {string} [delivery_charge_info] - Delivery charge in information
 *   message on shipment .
 * @property {CartCommonConfig} [common_config]
 * @property {CartDetailCoupon} [coupon]
 * @property {string} [message] - Message of the get cart detail API response.
 * @property {Object} [notification] - Notification object which denotes
 *   notification data for user cart.
 * @property {string} [staff_user_id] - Staff employee user id if cart is
 *   created by staff employee for the customer.
 * @property {boolean} [success] - Success flag of get cart detail API response.
 * @property {string} [gstin] - GSTIN added in user cart.
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process.
 * @property {string} [last_modified] - Last modified timestamp of cart.
 * @property {CartBreakup} [breakup_values]
 * @property {CartCurrency} [currency]
 * @property {string} [coupon_text] - Coupon text of coupon applied on cart.
 * @property {boolean} [buy_now] - Buy now flag for the cart which denotes user
 *   is doing fast checkout for the cart using buy now.
 * @property {Object} [pan_config] - Pan card config states at what condition
 *   user should enter the pan card.
 * @property {Object} [custom_cart_meta] - Custom meta details added cart
 *   checkout API payload .
 */
/**
 * @typedef AddProductCart
 * @property {Object} [article_assignment] - Field to determine how article
 *   assignment should happen by article assignment level and strategy.
 * @property {string[]} [product_group_tags] - Field to specify the product
 *   groups of the product that the user is trying to add in cart.
 * @property {Object} [extra_meta] - Extra meta data to be added at article
 *   level while add items to cart.
 * @property {number} [quantity] - Field to specify the product quantity that
 *   user wants to buy.
 * @property {Object} [_custom_json] - Field to add custom json at article level
 *   while add items to cart .
 * @property {string} [item_size] - Field to determine size of the product.
 * @property {number} [store_id] - Unique identifier of the store selected by
 *   the user from which user want to buy a product.
 * @property {string} [display] - Display field at article level .
 * @property {string} [article_id] - Unique identifier of an article .
 * @property {Object[]} [parent_item_identifiers] - Fields to determine parent
 *   product of the product.
 * @property {number} [seller_id] - Unique idetifier of the seller selected by
 *   the user from which user want to buy a product .
 * @property {boolean} [pos] - Filed to determine whether user is making request
 *   from pos or not.
 * @property {number} [item_id] - Unique identifier to identify product.
 * @property {Object} [meta] - Field to add meta data at article level.
 * @property {string} [seller_identifier] - Add items using seller identifier
 *   for store os.
 */
/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items] - List of items detail which need to be
 *   added to cart like item id, item size, and item quantity.
 * @property {boolean} [new_cart] - Field to create to new cart whille user adds
 *   item to cart.
 */
/**
 * @typedef AddCartDetailResponse
 * @property {string} [message] - Message of add to cart API response.
 * @property {boolean} [partial] - When adding multiple items check if all
 *   added. True if only few are added.
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [success] - True if all items are added successfully.
 *   False if partially added or not added.
 */
/**
 * @typedef UpdateProductCart
 * @property {Object} [extra_meta] - Field to update extra meta of the product in cart.
 * @property {Object} [_custom_json] - Field to update custom json of the product in cart.
 * @property {number} [quantity] - Field to update the quantity of the item in cart.
 * @property {string} [item_size] - Field to update the size of the product in cart.
 * @property {number} [item_index] - Item index determines on which index the
 *   product falls to be updated.
 * @property {CartProductIdentifer} identifiers
 * @property {string} [article_id] - Article id of the product in cart.
 * @property {Object} [parent_item_identifiers] - Field to update parent product
 *   of the item in cart.
 * @property {number} [item_id] - Item id of the product that needs to be updated.
 * @property {Object} [meta] - Field to update meta of the item in cart.
 */
/**
 * @typedef UpdateCartRequest
 * @property {UpdateProductCart[]} [items] - List items data that needs to be
 *   updated in cart.
 * @property {string} operation - Field to determine if item to be removed from
 *   cart or it needs to be updated.
 */
/**
 * @typedef UpdateCartDetailResponse
 * @property {string} [message] - Message of update cart API response.
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [success] - True if all items are added successfully.
 *   False if partially added or not added.
 */
/**
 * @typedef DeleteCartDetailResponse
 * @property {string} [message] - Message for delete cart response.
 * @property {boolean} [success] - True if cart is archived successfully. False
 *   if not archived.
 */
/**
 * @typedef CartItemCountResponse
 * @property {number} [user_cart_items_count] - Item count present in cart.
 */
/**
 * @typedef PageCoupon
 * @property {number} [total_item_count] - Total coupons are available for the cart.
 * @property {boolean} [has_next] - Denotes if next page of coupon is available.
 * @property {number} [total] - Total pages of coupon availalbe.
 * @property {number} [current] - Current page number.
 * @property {boolean} [has_previous] - Denotes if previous page of the coupon
 *   is available.
 */
/**
 * @typedef Coupon
 * @property {number} [coupon_amount] - The amount based on cart value.
 * @property {number} [coupon_value] - Coupon value of the coupon applied to cart.
 * @property {string} [title] - Coupon Title of the coupon applied denotes name
 *   of the coupon.
 * @property {number} [minimum_cart_value] - Minimum cart value of the coupon
 *   applied to cart.
 * @property {string} [sub_title] - Coupon subtitle of the coupon applied to
 *   cart which is used to display.
 * @property {string} [expires_on] - Message to display to user for expiry of the coupon .
 * @property {string} [message] - Coupon message of the coupon applied to cart.
 * @property {string} [coupon_type] - Type of the coupon applied to cart.
 * @property {number} [max_discount_value] - Maximum discount value of the
 *   coupon applied to cart.
 * @property {string} [coupon_code] - Coupon code of the coupon applied on cart.
 * @property {boolean} [is_applicable] - Flag to determine where the coupon is
 *   applicable to cart or not.
 * @property {string} [description] - Coupon description of the coupon applied to cart.
 * @property {boolean} [is_applied] - Flag to determine where the coupon is
 *   applied to cart or not.
 * @property {string} [start_date] - Start date of the coupon when the coupon
 *   will be live for the users to apply on cart.
 * @property {string} [end_date] - End date of the coupon on which the coupon expires.
 * @property {string} [coupon_applicable_message] - Message which is used to
 *   display to the customer if the coupon is applied successfully.
 * @property {string} [offer_text] - Offer text of the coupon which highligts
 *   coupon offer defined while creating coupon .
 * @property {boolean} [is_bank_offer] - Bank offer flag for the coupon if the
 *   coupon is applicable for only if payment done by bank or mode specified in coupon.
 */
/**
 * @typedef GetCouponResponse
 * @property {PageCoupon} [page]
 * @property {Coupon[]} [available_coupon_list] - List of available coupon which
 *   can be applied on cart.
 */
/**
 * @typedef ApplyCouponRequest
 * @property {string} coupon_code - Coupon code to be applied.
 */
/**
 * @typedef OfferPrice
 * @property {string} [currency_symbol] - Currency symbol for currency.
 * @property {number} [bulk_effective] - Discounted per unit price for current
 *   offer object.
 * @property {string} [currency_code] - The currency code for an offer price is
 *   the three-letter code that corresponds to the currency in which the offer
 *   price is denominated.
 * @property {number} [effective] - The "effective price" is the actual price
 *   paid by the consumer after accounting for product discounts. It represents
 *   the true cost of a product or service after all adjustments have been made.
 * @property {number} [marked] - The price at which the product is sold to the
 *   end consumer, typically the original price before discounts.
 */
/**
 * @typedef OfferItem
 * @property {OfferPrice} [price]
 * @property {number} [margin] - Percentage value of discount.
 * @property {number} [quantity] - Quantity on which offer is applicable.
 * @property {boolean} [best] - Is true for best offer from all offers present
 *   for all sellers.
 * @property {number} [total] - Total price of offer quantity with discount.
 * @property {boolean} [auto_applied] - Whether offer discount is auto applied in cart.
 * @property {string} [type] - Type of the offer.
 */
/**
 * @typedef OfferSeller
 * @property {number} [uid] - Unique identifier for a seller.
 * @property {string} [name] - Name of a seller.
 */
/**
 * @typedef BulkPriceOffer
 * @property {OfferItem[]} [offers] - Offers is the list of Offer item, which
 *   consists of margin percentage, price, quantity, offer type and offer price.
 * @property {OfferSeller} [seller]
 */
/**
 * @typedef BulkPriceResponse
 * @property {BulkPriceOffer[]} [data] - Actual data to be in response consist
 *   of offers from multiple seller.
 */
/**
 * @typedef RewardPointRequest
 * @property {boolean} points - Points to be applied for cart.
 */
/**
 * @typedef GeoLocation
 * @property {number} [latitude] - Latitude coordinate for address.
 * @property {number} [longitude] - Longitude coordinate for address.
 */
/**
 * @typedef Address
 * @property {string} [country_iso_code] - Country iso code for address.
 * @property {string} [area] - Area description for address.
 * @property {string} [phone] - Phone number for address.
 * @property {string} [country_phone_code] - Country phone code for address.
 * @property {string} [checkout_mode] - Checkout mode of address on which
 *   address to be used for which checkout mode of cart.
 * @property {string} [address] - Address description for address data.
 * @property {string} [area_code_slug] - Area code slug for address. example
 *   pincode is slug for India.
 * @property {GeoLocation} [geo_location]
 * @property {string} [id] - Id of the address.
 * @property {Object} [_custom_json] - Custom json of the address.
 * @property {string} [city] - City of the address.
 * @property {string} [sector] - Sector of the address.
 * @property {string} [state_code] - State code for address.
 * @property {string} [created_by_user_id] - Created by user id of address.
 * @property {string} [landmark] - Landmark of address.
 * @property {string} [user_id] - User id of address for which address is created.
 * @property {string} [name] - Name of person in address data to whom it belongs to.
 * @property {Object} [google_map_point] - Google map point of the address.
 * @property {boolean} [is_active] - States whether address is active or not.
 * @property {string[]} [tags] - Tags of address from which it can be identified.
 * @property {string} [country_code] - Country code of address.
 * @property {string} [address_type] - Address type of address.
 * @property {string} [country] - Country of address.
 * @property {boolean} [is_default_address] - Default address flag if no address
 *   selected then this should be the default address selected.
 * @property {string} [area_code] - Area code of the address.
 * @property {string} [email] - Email address for address data.
 * @property {string} [state] - State of the address.
 * @property {Object} [meta] - Metadata of the address.
 */
/**
 * @typedef GetAddressesResponse
 * @property {boolean} [pii_masking] - Personally Identifiable Information
 *   masking flag to denote if the user data in address is masked or not.
 * @property {Address[]} [address] - Address description for address data.
 */
/**
 * @typedef SaveAddressResponse
 * @property {string} [id] - Id of the address.
 * @property {boolean} [success] - Success flag of save address Response.
 * @property {boolean} [is_default_address] - Default address flag if no address
 *   selected then this should be the default address selected.
 */
/**
 * @typedef UpdateAddressResponse
 * @property {boolean} [is_updated] - Updated flag for update address operation
 *   if the address updated or not.
 * @property {string} [id] - ID of an address.
 * @property {boolean} [success] - Success flag of update address response.
 * @property {boolean} [is_default_address] - Default address flag if no address
 *   selected then this should be the default address selected.
 */
/**
 * @typedef DeleteAddressResponse
 * @property {string} [id] - Id of the address.
 * @property {boolean} [is_deleted] - Deleted flag in delete address response
 *   states whether the address was deleted or not.
 */
/**
 * @typedef SelectCartAddressRequest
 * @property {string} [id] - Address is selected by user on which shipment to be
 *   delivered.
 * @property {string} [billing_address_id] - Billing address id selected by user
 *   on which shipment bill to be generated.
 * @property {string} [cart_id] - Cart id of the user cart for which the select
 *   address operation performed.
 */
/**
 * @typedef UpdateCartPaymentRequest
 * @property {string} [id] - Cart id of the user cart for which the update cart
 *   payment operation performed.
 * @property {string} [payment_identifier] - Payment identifier of the payment
 *   mode selected to do the payment.
 * @property {string} [address_id] - Address id of the user address selected to
 *   deliver the shipment.
 * @property {string} [merchant_code] - Merchant code of the payment mode
 *   selected to do the payment.
 * @property {string} [aggregator_name] - Aggregator name of the payment gateway.
 * @property {string} [payment_mode] - Payment mode of the payment selected to
 *   do the payment.
 */
/**
 * @typedef CouponValidity
 * @property {string} [title] - Coupon Title of the coupon applied.
 * @property {number} [discount] - Coupon discount value of the coupon applied.
 * @property {boolean} [next_validation_required] - Flag for coupon validation
 *   required on next page or not.
 * @property {boolean} [valid] - Valid flag which denotes if the applied coupon
 *   is valid or not.
 * @property {string} [display_message_en] - Display message for coupon validity.
 * @property {string} [code] - Coupon code of the coupon applied.
 */
/**
 * @typedef PaymentCouponValidate
 * @property {string} [message] - Payment mode valid message for coupon.
 * @property {CouponValidity} [coupon_validity]
 * @property {boolean} success - Success flag of coupon payment mode validity
 *   API response.
 */
/**
 * @typedef ShipmentResponse
 * @property {number} [shipments] - Count of shipments that will be shipped.
 * @property {ShipmentPromise} [promise]
 * @property {string} [order_type] - Order type of the shipment like pickAtStore
 *   or HomeDelivery.
 * @property {string} [box_type] - Box type of the shipment in which the
 *   shipment will be delivered.
 * @property {string} [shipment_type] - Shipment type of the shipment returned
 *   in get shipments API like single_shipment or multiple shipment. Single
 *   Shipment means 1 item in 1 shipment and vice versa in the other one.
 * @property {Object} [dp_options] - Delivery partner options that are available
 *   to deliver the shipment.
 * @property {string} [dp_id] - Delivery partner id of the shipment.
 * @property {CartProductInfo[]} [items] - Item details in the shipment.
 * @property {string} [fulfillment_type] - Fulfilment type of shipment.
 * @property {number} [fulfillment_id] - Fulfilment id of the shipment.
 */
/**
 * @typedef CartShipmentsResponse
 * @property {string} [delivery_charge_info] - Delivery charge in information
 *   message on shipment.
 * @property {string} [checkout_mode] - Checkout mode of cart.
 * @property {string} [message] - Response message of get shipments API.
 * @property {string} [gstin] - GSTIN number added in cart.
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process.
 * @property {string} [last_modified] - Last modified timestamp of cart.
 * @property {number} [cart_id] - Cart id of the user cart.
 * @property {boolean} [is_valid] - Cart validity flag determines the if the
 *   response is valid or not.
 * @property {CartBreakup} [breakup_values]
 * @property {CartCurrency} [currency]
 * @property {string} [id] - Cart id of the user cart.
 * @property {ShipmentResponse[]} [shipments] - List of Shipments which includes
 *   shipment data like shipment items, shipment promise, Shipment type,
 *   shipment order type, shipment dp options etc.
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [coupon_text] - Coupon text of coupon applied on cart.
 * @property {ShipmentPromise} [delivery_promise]
 * @property {boolean} [error] - Error details if any error occurs which
 *   includes type of error, error code and error message.
 * @property {string} [comment] - Comment message added in cart.
 * @property {boolean} [buy_now] - Buy now flag of user cart.
 * @property {string} [uid] - Cart id of the user cart.
 * @property {Object} [custom_cart_meta] - Custom meta details added cart
 *   checkout API payload.
 */
/**
 * @typedef CartCheckoutCustomMeta
 * @property {string} key - Key name of custom meta.
 * @property {string} value - Value to be added in key.
 */
/**
 * @typedef CustomerDetails
 * @property {string} [email] - Email address of the customer to be added in
 *   customer detail while checkout.
 * @property {string} mobile - Mobile number of customer to be added in customer
 *   detail while checkout.
 * @property {string} [name] - Name of customer to be added in customer detail
 *   while checkout.
 */
/**
 * @typedef StaffCheckout
 * @property {string} [employee_code] - Employee code of staff who does checkout
 *   on behalf of customer.
 * @property {string} user - User id of the employee who does checkout on behalf
 *   of customer.
 * @property {string} last_name - Last name of staff employee who does checkout
 *   on behalf of customer.
 * @property {string} first_name - First name of staff emplyee who does checkout
 *   on behalf of customer.
 * @property {string} _id - Id of staff who does checkout on behalf of customer.
 */
/**
 * @typedef CartCheckoutDetailRequest
 * @property {CartCheckoutCustomMeta[]} [custom_meta] - Custom meta data to be
 *   added in order.
 * @property {Object} [customer_details] - Customer details to be added in order.
 * @property {string} [merchant_code] - Merchant code of the payment mode
 *   selected to do the payment.
 * @property {string} [id] - Cart id of the user cart.
 * @property {boolean} [payment_auto_confirm] - Payment auto confirm flag if
 *   payment need not to be collected from user.
 * @property {string} payment_mode - Payment mode from which the payment to be
 *   done for the order.
 * @property {string} [aggregator] - Aggregator name of the payment gateway.
 * @property {string} [address_id] - Address id of the user on which the order
 *   to be delivered.
 * @property {string} [callback_url] - Callback url to be redirected after
 *   payment received/failed.
 * @property {Object} [delivery_address] - Delivery address data which includes
 *   customer address, customer phone, customer email, customer pincode,
 *   customer landmark and customer name.
 * @property {StaffCheckout} [staff]
 * @property {string} [order_type] - Order type of the order being placed like
 *   pickAtStore or HomeDelivery.
 * @property {number} [ordering_store] - Ordering store id of the store from
 *   which the order is getting placed.
 * @property {Object} [extra_meta] - Extra meta to be added while checkout in order.
 * @property {string} [payment_identifier] - Payment identifier of the payment
 *   mode selected to do the payment.
 * @property {Object} [billing_address] - Billing address json which includes
 *   customer address, customer phone, customer email, customer pincode,
 *   customer landmark and customer name.
 * @property {Object} [payment_params] - Payment params which includes payment
 *   identifier and merchant code.
 * @property {string} [billing_address_id] - Billing address id of the customer
 *   on which the invoice to be generated after the order is placed.
 * @property {Object} [meta] - Meta data to be added in order.
 * @property {Object} [payment_extra_identifiers] - Payment extra identifier for
 *   the payment mode to do the payment.
 * @property {string} [iin] - Issuer Identification Number' number of card if
 *   payment mode is card.
 * @property {string} [network] - Network of card if payment mode is card to do
 *   the payment.
 * @property {string} [type] - Type of cart if payment mode is card to do the payment.
 * @property {string} [card_id] - Saved card id if payment mode is card to do the payment.
 */
/**
 * @typedef CheckCart
 * @property {string} [checkout_mode] - Checkout mode of user cart.
 * @property {string} [user_type] - User type of the cart who places the order.
 * @property {string} [cod_message] - Cash On Delivery message for the order placed.
 * @property {number} [cart_id] - Cart id of the user cart for which the order placed.
 * @property {boolean} [is_valid] - Valid flag fotr the checkout response if
 *   order placed was valid.
 * @property {number} [delivery_charges] - Delivery charges of the order placed
 *   via checkout API.
 * @property {string} [id] - Cart id of the user cart.
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [error_message] - Error details if any error occurs which
 *   includes type of error, error code and error message.
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message added in cart after order placed.
 * @property {CartProductInfo[]} [items] - Items details in cart after order placed.
 * @property {string} [uid] - Cart id of user cart.
 * @property {number} [delivery_charge_order_value] - Delivery charge order value.
 * @property {string} [delivery_charge_info] - Delivery charge in information
 *   message on shipment.
 * @property {boolean} [cod_available] - Whether Cash On Delivery available.
 * @property {boolean} [success] - Success flag of checkout cart API response.
 * @property {string} [store_code] - Store code from which the order placed.
 * @property {string} [message] - Message of the cart checkout API response.
 * @property {string} [gstin] - GSTIN number added in cart.
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process.
 * @property {string} [last_modified] - Last modified timestamp of cart.
 * @property {string} [order_id] - Order id generated after placing order.
 * @property {CartBreakup} [breakup_values]
 * @property {CartCurrency} [currency]
 * @property {Object[]} [store_emps] - Store employees data.
 * @property {string} [coupon_text] - Coupon text of the applied coupon on order placed.
 * @property {boolean} [buy_now] - Buy now flag of user cart.
 * @property {number} [cod_charges] - Cash On Delivery charges of the user cart.
 * @property {Object} [custom_cart_meta] - Meta data for customCart of user.
 */
/**
 * @typedef CartCheckoutResponse
 * @property {string} [payment_confirm_url] - Payment confirm url used to
 *   redirect after payment is confirmed.
 * @property {string} [app_intercept_url] - App intercept url which is used to
 *   redirect on app after payment in confirmed/failed.
 * @property {boolean} [success] - Success flag of cart checkout API response.
 * @property {string} [callback_url] - Callback url to be redirected after
 *   payment received/failed.
 * @property {string} [message] - Message of the cart checkout v2 API response.
 * @property {Object} [data] - Data of the user cart checkout includes cart
 *   data, address, user id, order type etc.
 * @property {string} [order_id] - Order id generated after placing order.
 * @property {CheckCart} [cart]
 */
/**
 * @typedef GiftDetail
 * @property {boolean} [is_gift_applied] - Is gift applied flag which determines
 *   if this is a gift oder not.
 * @property {string} [gift_message] - Gift message for the one while receive
 *   the delivery of the order with this message.
 */
/**
 * @typedef ArticleGiftDetail
 * @property {GiftDetail} [article_id]
 */
/**
 * @typedef CartMetaRequest
 * @property {Object} [delivery_slots] - Delivery slots details includes article
 *   level time slot when the shipment can be delivered.
 * @property {ArticleGiftDetail} [gift_details]
 * @property {Object} [pick_up_customer_details] - Customer contact details for
 *   customer pickup at store.
 * @property {string} [checkout_mode] - Checkout mode of user cart.
 * @property {string} [comment] - Comment message to be added in user cart.
 * @property {string} [gstin] - GSTIN number to be added in user cart.
 * @property {Object} [custom_cart_meta] - Custom cart meta json to be added in
 *   order meta which can be further received in cart API response and order
 *   meta in order detail API or webhook.
 */
/**
 * @typedef CartMetaResponse
 * @property {string} [message] - Detailed message.
 * @property {boolean} [is_valid] - Whether added meta was vaild.
 */
/**
 * @typedef CartMetaMissingResponse
 * @property {string[]} [errors] - Detailed errors for invalid cart meta request.
 */
/**
 * @typedef GetShareCartLinkRequest
 * @property {string} [id] - Cart id of user cart for generating cart sharing token.
 * @property {Object} [meta] - Staff, Ordering store or any other data. This
 *   data will be used to generate link as well as sent as shared details.
 */
/**
 * @typedef GetShareCartLinkResponse
 * @property {string} [token] - Short url unique id of the cart which is opted
 *   to share with other user.
 * @property {string} [share_url] - Short shareable final url which can populate
 *   shared cart items in one's cart or replaced one's cart with shared cart items.
 */
/**
 * @typedef SharedCartDetails
 * @property {string} [token] - Short link id of the user cart that needs to be shared.
 * @property {Object} [user] - User details of who generated share link.
 * @property {string} [created_on] - Created on timestamp of user cart.
 * @property {Object} [source] - Share link device and other source information.
 * @property {Object} [meta] - Meta data sent while generating share cart link.
 */
/**
 * @typedef SharedCart
 * @property {string} [checkout_mode] - Checkout mode of address on which
 *   address to be used for which checkout mode of cart.
 * @property {number} [cart_id] - Cart id of user cart for generating cart sharing token.
 * @property {boolean} [is_valid] - Valid flag for get shared cart detail API.
 * @property {string} [id] - Cart id of shared cart.
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment] - Comment message added in user cart.
 * @property {CartProductInfo[]} [items] - Items data list in user cart that
 *   includes item id, item size, store id, available sizes and rest of the item
 *   related data.
 * @property {string} [uid] - Cart id of the user cart.
 * @property {string} [delivery_charge_info] - Delivery charge info message of
 *   the user cart.
 * @property {string} [message] - Message of the get shared cart API response.
 * @property {string} [gstin] - GSTIN added in user cart.
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {boolean} [restrict_checkout] - Restrict checkout flag to restrict
 *   the checkout process.
 * @property {string} [last_modified] - Last modified timestamp of user cart.
 * @property {CartBreakup} [breakup_values]
 * @property {CartCurrency} [currency]
 * @property {string} [coupon_text] - Coupon text of the applied coupon on user cart.
 * @property {boolean} [buy_now] - Buy now flag of user cart.
 * @property {Object} [custom_cart_meta] - Custom cart meta of user cart added
 *   via update cart meta API.
 */
/**
 * @typedef SharedCartResponse
 * @property {string} [error] - Error details if any error occurs which includes
 *   type of error, error code and error message.
 * @property {SharedCart} [cart]
 */
/**
 * @typedef PriceMinMax
 * @property {number} [min] - Min price of article added in user cart.
 * @property {number} [max] - Max price of article added in user cart.
 */
/**
 * @typedef ItemPriceDetails
 * @property {PriceMinMax} [marked]
 * @property {PriceMinMax} [effective]
 * @property {string} [currency] - Currency of the article added in cart.
 */
/**
 * @typedef FreeGiftItems
 * @property {string} [item_slug] - Slug for an item.
 * @property {string} [item_name] - Name of the free gift item received via free
 *   gift promotion.
 * @property {ItemPriceDetails} [item_price_details]
 * @property {string} [item_brand_name] - Item brand name of the free gift item
 *   promotion applied on cart.
 * @property {number} [item_id] - Item id of the free gift item.
 * @property {string[]} [item_images_url] - Images URLs for free gift items.
 */
/**
 * @typedef PromotionOffer
 * @property {string} [id] - Promotion id of the promotion which is available on product.
 * @property {Object} [buy_rules] - Buy rules of promotion which is available on product.
 * @property {string} [offer_text] - Offer title of the promotion which is
 *   available on product.
 * @property {string} [promotion_type] - Promotion type of the promotion which
 *   is availalbe on product.
 * @property {string} [promotion_name] - Name of the promotion which is
 *   available on product.
 * @property {string} [promotion_group] - Group of the promotion which is
 *   available on product.
 * @property {string} [valid_till] - Datetime ISO String for promotion end date
 *   which is available on product.
 * @property {Object[]} [discount_rules] - Discount rules of promotions which is
 *   avaiable on product.
 * @property {FreeGiftItems[]} [free_gift_items] - Details of free gift items
 *   which included item id, brand name, item name, item slug, item price and
 *   item image url.
 * @property {string} [description] - Offer details including T&C of the
 *   promotion which is avaiable on product.
 */
/**
 * @typedef PromotionOffersResponse
 * @property {PromotionOffer[]} [available_promotions] - Available promotion
 *   details which are available on product which includes promotion data like
 *   promotion id, promotion name, buy rules, discount rules validity dates etc.
 */
/**
 * @typedef PromotionPaymentOffer
 * @property {string} [application_id] - Application id on which the promotion
 *   was created.
 * @property {Object[]} [buy_rules] - Buy rules of promotions which denotes if
 *   the rules matches than only promotion is applicable.
 * @property {string} [calculate_on] - Article Price on which promotion
 *   calculated like effective price or marked price.
 * @property {string} [description] - Offer details including T&C of the
 *   promotion which is avaiable on cart.
 * @property {Object[]} [discount_rules] - Discount rules of promotions which is
 *   avaiable on cart.
 * @property {string} [id] - Promotion id of the promotion which is available on cart.
 * @property {string} [offer_text] - Offer title of the promotion which is
 *   available on cart.
 * @property {string} [promotion_group] - Group promotion which is available on cart.
 * @property {string} [promotion_type] - Promotion type of the promotion which
 *   is availalbe on cart.
 * @property {string} [promotion_name] - Name of the promotion which is available on cart.
 */
/**
 * @typedef PromotionPaymentOffersResponse
 * @property {boolean} [success] - Success flag of get payment offers API response.
 * @property {PromotionPaymentOffer[]} [promotions] - List of promotions data
 *   which are applicable on cart/product.
 */
/**
 * @typedef OperationErrorResponse
 * @property {string} [message] - Message of get payment offer API response.
 * @property {boolean} [success] - Success flag of get payment offer API response.
 */
/**
 * @typedef LadderPrice
 * @property {string} [currency_symbol] - Currency symbol for currency of ladder
 *   price product.
 * @property {number} [offer_price] - Discounted per unit price for current offer object.
 * @property {string} [currency_code] - Currency code for all amounts.
 * @property {number} [effective] - Current per unit price of product after
 *   existing deductions.
 * @property {number} [marked] - Original price of product.
 */
/**
 * @typedef LadderOfferItem
 * @property {LadderPrice} [price]
 * @property {number} [margin] - Percentage value of discount.
 * @property {number} [max_quantity] - Minimum quantity upto which offer is
 *   applicable. If not present that offer is applicable on all quantities.
 * @property {number} [min_quantity] - Minimum quantity from which offer is applicable.
 * @property {string} [type] - Offer type of the ladder promotion.
 */
/**
 * @typedef LadderPriceOffer
 * @property {string} [id] - ID of the promotion.
 * @property {Object} [buy_rules] - Buy rules of ladder price promotion
 *   applicable on product.
 * @property {string} [calculate_on] - If this ladder offer is to be calculated
 *   on MRP or ESP price.
 * @property {string} [offer_text] - Offer title of ladder price promotion
 *   applicable on product.
 * @property {string} [promotion_group] - Group of ladder price promotion
 *   applicable on product.
 * @property {string} [valid_till] - Datetime ISO String for promotion end date.
 * @property {Object[]} [discount_rules] - Discount rules of ladder price
 *   promotion applicable on product.
 * @property {LadderOfferItem[]} [offer_prices] - Offer prices for ladder price
 *   promotion applicable on product.
 * @property {FreeGiftItems[]} [free_gift_items] - Details of free gift items list.
 * @property {string} [description] - Offer details including T&C of ladder
 *   price promotion applicable on product.
 */
/**
 * @typedef CurrencyInfo
 * @property {string} [code] - Currency code of ladder price promotion.
 * @property {string} [symbol] - Currency symbol for currency of ladder price product.
 */
/**
 * @typedef LadderPriceOffers
 * @property {LadderPriceOffer[]} [available_offers] - Available ladder
 *   promotions offers list.
 * @property {CurrencyInfo} [currency]
 */
/**
 * @typedef PaymentMeta
 * @property {string} [merchant_code] - Merchant code of the payment mode
 *   selected to do the payment.
 * @property {string} [type] - Type of card if payment mode is card to do the payment.
 * @property {string} [payment_gateway] - Payment gateway used to do the payment.
 * @property {string} [payment_identifier] - Payment identifier of the payment
 *   mode selected to do the payment.
 */
/**
 * @typedef PaymentMethod
 * @property {PaymentMeta} payment_meta
 * @property {string} mode - Payment mode of payment method used to make payment.
 * @property {string} [payment] - Payment name of payment method used to make payment.
 * @property {number} [amount] - Amount of the payment mode to be paid.
 * @property {string} [name] - Name of the payment mode used to make payment.
 * @property {Object} [payment_extra_identifiers] - Payment extra identifier for
 *   the payment mode to do the payment.
 */
/**
 * @typedef CartCheckoutDetailV2Request
 * @property {Object} [custom_meta] - Custom meta data to be added in order.
 * @property {Object} [customer_details] - Customer details to be added in order.
 * @property {string} [merchant_code] - Merchant code of the payment mode
 *   selected to do the payment.
 * @property {string} [cart_id] - Cart id of the user cart.
 * @property {string} [id] - Cart id of the user cart.
 * @property {boolean} [payment_auto_confirm] - Payment auto confirm flag if
 *   payment need not to be collected from user.
 * @property {PaymentMethod[]} payment_methods - Payment methods list used to
 *   make the payment.
 * @property {string} payment_mode - Payment mode of the payment selected to do
 *   the payment.
 * @property {string} [aggregator] - Aggregator of payment mode to do the payment.
 * @property {string} [address_id] - Address id of the user where the order to
 *   be delivered.
 * @property {string} [callback_url] - Callback url after payment received/failed.
 * @property {Object} [delivery_address] - Delivery address data which includes
 *   customer address, customer phone, customer email, customer pincode,
 *   customer landmark and customer name.
 * @property {StaffCheckout} [staff]
 * @property {string} [order_type] - Order type of the order being placed like
 *   pickAtStore or HomeDelivery.
 * @property {number} [ordering_store] - Ordering store id of the store from
 *   which the order is getting placed.
 * @property {Object} [extra_meta] - Extra meta to be added while checkout in order.
 * @property {string} [payment_identifier] - Payment identifier of the payment
 *   mode selected to do the payment.
 * @property {Object} [billing_address] - Billing address json which includes
 *   customer address, customer phone, customer email, customer pincode,
 *   customer landmark and customer name.
 * @property {Object} [payment_params] - Payment params which includes payment
 *   identifier and merchant code.
 * @property {string} [billing_address_id] - Billing address id selected by user
 *   on which shipment bill to be generated.
 * @property {Object} [meta] - Meta data sent while checkout v2.
 * @property {string} [iin] - Issuer Identification Number' number of card if
 *   payment mode is card to do the payment.
 * @property {string} [network] - Network of card if payment mode is card to do
 *   the payment.
 * @property {string} [type] - Type of cart if payment mode is card to do the payment.
 * @property {string} [card_id] - Saved card id if payment mode is card to do the payment.
 */
declare class CartApplicationModel {
}
declare namespace CartApplicationModel {
    export { BuyRules, DiscountRulesApp, Ownership, AppliedFreeArticles, AppliedPromotion, PaymentSelectionLock, PromiseFormatted, PromiseISOFormat, PromiseTimestamp, ShipmentPromise, BasePrice, ArticlePriceInfo, BaseInfo, StoreInfo, ProductArticle, CartProductIdentifer, PromoMeta, ChargesAmount, Charges, ProductPrice, ProductPriceInfo, ProductPricePerUnit, ProductPricePerUnitInfo, ProductAvailabilitySize, ProductAvailability, ActionQuery, ProductAction, Tags, ProductImage, CategoryInfo, CartProduct, CouponDetails, CartProductInfo, DisplayBreakup, RawBreakup, CouponBreakup, LoyaltyPoints, CartBreakup, CartCurrency, CartDetailCoupon, ChargesThreshold, DeliveryChargesConfig, CartCommonConfig, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, OfferPrice, OfferItem, OfferSeller, BulkPriceOffer, BulkPriceResponse, RewardPointRequest, GeoLocation, Address, GetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, SelectCartAddressRequest, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, ShipmentResponse, CartShipmentsResponse, CartCheckoutCustomMeta, CustomerDetails, StaffCheckout, CartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, GiftDetail, ArticleGiftDetail, CartMetaRequest, CartMetaResponse, CartMetaMissingResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, PriceMinMax, ItemPriceDetails, FreeGiftItems, PromotionOffer, PromotionOffersResponse, PromotionPaymentOffer, PromotionPaymentOffersResponse, OperationErrorResponse, LadderPrice, LadderOfferItem, LadderPriceOffer, CurrencyInfo, LadderPriceOffers, PaymentMeta, PaymentMethod, CartCheckoutDetailV2Request };
}
/** @returns {BuyRules} */
declare function BuyRules(): BuyRules;
type BuyRules = {
    /**
     * - Item criteria of promotion.
     */
    item_criteria?: any;
    /**
     * - Cart conditions details for promotion.
     */
    cart_conditions?: any;
};
/** @returns {DiscountRulesApp} */
declare function DiscountRulesApp(): DiscountRulesApp;
type DiscountRulesApp = {
    /**
     * - Matched buy rules for promotion.
     */
    matched_buy_rules?: string[];
    /**
     * - Raw offer details for promotion.
     */
    raw_offer?: any;
    /**
     * - Offer for promotion.
     */
    offer?: any;
    /**
     * - Item criteria of promotion.
     */
    item_criteria?: any;
};
/** @returns {Ownership} */
declare function Ownership(): Ownership;
type Ownership = {
    /**
     * - Promotion amount payable category.
     */
    payable_category?: string;
    /**
     * - Promotion amount bearable party.
     */
    payable_by?: string;
};
/** @returns {AppliedFreeArticles} */
declare function AppliedFreeArticles(): AppliedFreeArticles;
type AppliedFreeArticles = {
    /**
     * - Free gift items details.
     */
    free_gift_item_details?: FreeGiftItems;
    /**
     * - Parent item identifier for free article.
     */
    parent_item_identifier?: string;
    /**
     * - Quantity of free articles.
     */
    quantity?: number;
    /**
     * - IDs of free articles.
     */
    article_id?: string;
};
/** @returns {AppliedPromotion} */
declare function AppliedPromotion(): AppliedPromotion;
type AppliedPromotion = {
    /**
     * - Promotion id.
     */
    promo_id?: string;
    /**
     * - Buy rules for promotions.
     */
    buy_rules?: BuyRules[];
    /**
     * - Offer text of current promotion.
     */
    offer_text?: string;
    /**
     * - Promotion group for the promotion.
     */
    promotion_group?: string;
    /**
     * - If applied promotion is applied on
     * product MRP or ESP.
     */
    mrp_promotion?: boolean;
    /**
     * - Promotion name of current promotion.
     */
    promotion_name?: string;
    /**
     * - Per unit discount amount applied with current promotion.
     */
    amount?: number;
    /**
     * - Discount rules for promotions.
     */
    discount_rules?: DiscountRulesApp[];
    /**
     * - Ownership of promotion.
     */
    ownership?: Ownership;
    /**
     * - Quantity of article on which
     * promotion is applicable.
     */
    article_quantity?: number;
    /**
     * - Applied free
     * article for free gift item promotions.
     */
    applied_free_articles?: AppliedFreeArticles[];
    /**
     * - Promotion type of current promotion.
     */
    promotion_type?: string;
    /**
     * - Meta object for extra data.
     */
    meta?: any;
    /**
     * - Promotion code.
     */
    code?: string;
};
/** @returns {PaymentSelectionLock} */
declare function PaymentSelectionLock(): PaymentSelectionLock;
type PaymentSelectionLock = {
    /**
     * - Denotes if default payment selection is enable.
     */
    enabled?: boolean;
    /**
     * - Default Selection Payment Mode.
     */
    default_options?: string;
    /**
     * - Identifier for Payment Mode.
     */
    payment_identifier?: string;
};
/** @returns {PromiseFormatted} */
declare function PromiseFormatted(): PromiseFormatted;
type PromiseFormatted = {
    /**
     * - Maximum Delivery promise formatted timestamp.
     */
    max?: string;
    /**
     * - Minimum Delivery promise formatted timestamp.
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
     * - Maximum Promise for the shipment.
     */
    max?: number;
    /**
     * - Minimum delivery promise time for the shipment.
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
/** @returns {BasePrice} */
declare function BasePrice(): BasePrice;
type BasePrice = {
    /**
     * - Current per unit price of product after
     * existing deductions.
     */
    effective?: number;
    /**
     * - Currency symbol of the currncy used for price.
     */
    currency_symbol?: string;
    /**
     * - Original price of product.
     */
    marked?: number;
    /**
     * - Currency code for all amounts.
     */
    currency_code?: string;
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
    /**
     * - Unique identifier of entities like brand or seller.
     */
    uid?: number;
    /**
     * - Name of entities like brand or seller.
     */
    name?: string;
};
/** @returns {StoreInfo} */
declare function StoreInfo(): StoreInfo;
type StoreInfo = {
    /**
     * - A unique code or identifier for the store,
     * often used for internal reference.
     */
    store_code?: string;
    /**
     * - Unique identifiers of the store from where product
     * is fulfileld.
     */
    uid?: number;
    /**
     * - Store name of the store from where the product is
     * fulfiled .
     */
    name?: string;
};
/** @returns {ProductArticle} */
declare function ProductArticle(): ProductArticle;
type ProductArticle = {
    price?: ArticlePriceInfo;
    /**
     * - List fot the unique identifier
     * for the product grouping.
     */
    product_group_tags?: string[];
    /**
     * - Field to update extra meta of the article in cart.
     */
    extra_meta?: any;
    /**
     * - Quantity of the article added in cart.
     */
    quantity?: number;
    /**
     * - Field to update custom json of the article in cart.
     */
    _custom_json?: any;
    /**
     * - Article meta data.
     */
    meta?: any;
    /**
     * - Size of the article added in cart.
     */
    size?: string;
    /**
     * - Quantity of the product which will
     * specially manufactured as not available in stock.
     */
    mto_quantity?: number;
    seller?: BaseInfo;
    /**
     * - List of identifiers used by sellers
     * for the product size.
     */
    seller_identifier?: string;
    /**
     * - Fields to determine parent
     * product of the product.
     */
    parent_item_identifiers?: any;
    /**
     * - Unique identifier of the article.
     */
    identifier?: any;
    store?: StoreInfo;
    /**
     * - Meta details of the article added from cart.
     */
    cart_item_meta?: any;
    /**
     * - This unique identifier is assigned to the specific
     * article. This represents item x size x location.
     */
    uid?: string;
    /**
     * - Gift card detail if gift card applied to the
     * product which indicates gift price, gift applicable flag and display
     * message for the gift.
     */
    gift_card?: any;
    /**
     * - Whether the product can be purchased
     * as a gift. It is true if the product is available for gifting and false otherwise.
     */
    is_gift_visible?: boolean;
    /**
     * - Type of the data sent in response. Possible value
     * is article.
     */
    type?: string;
    /**
     * - A list of article tags.
     */
    tags?: string[];
};
/** @returns {CartProductIdentifer} */
declare function CartProductIdentifer(): CartProductIdentifer;
type CartProductIdentifer = {
    /**
     * - Article idenfier generated by cart.
     */
    identifier?: string;
};
/** @returns {PromoMeta} */
declare function PromoMeta(): PromoMeta;
type PromoMeta = {
    /**
     * - Loyalty points message denotes how much
     * loyalty points and applied and how much left with the user.
     */
    message?: string;
};
/** @returns {ChargesAmount} */
declare function ChargesAmount(): ChargesAmount;
type ChargesAmount = {
    /**
     * - This is the value of amount added.
     */
    value?: number;
    /**
     * - This is destination currency of value.
     */
    currency?: string;
};
/** @returns {Charges} */
declare function Charges(): Charges;
type Charges = {
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
/** @returns {ProductPrice} */
declare function ProductPrice(): ProductPrice;
type ProductPrice = {
    /**
     * - Currency symbol of the price defined
     * for the product.
     */
    currency_symbol?: string;
    /**
     * - Selling price of the product .
     */
    selling?: number;
    /**
     * - Currency code of the price defined for
     * the product.
     */
    currency_code?: string;
    /**
     * - Price before promotion and coupon amount
     * applied for calculation.
     */
    add_on?: number;
    /**
     * - Selling price of the product .
     */
    effective?: number;
    /**
     * - Maximum price of the product .
     */
    marked?: number;
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
    /**
     * - Currency symbol of the price defined
     * for the product.
     */
    currency_symbol?: string;
    /**
     * - Selling price of the product .
     */
    selling_price?: number;
    /**
     * - Currency code of the price defined for
     * the product.
     */
    currency_code?: string;
    /**
     * - Price before promotion and coupon amount
     * applied for calculation.
     */
    add_on?: number;
    /**
     * - Selling price of the product .
     */
    effective?: number;
    /**
     * - Maximum price of the product .
     */
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
    /**
     * - Display size of the product.
     */
    display?: string;
    /**
     * - Actual value of the size.
     */
    value?: string;
    /**
     * - Available flag for the size of the
     * product if that is available.
     */
    is_available?: boolean;
};
/** @returns {ProductAvailability} */
declare function ProductAvailability(): ProductAvailability;
type ProductAvailability = {
    /**
     * - Denotes if the product is available in stock.
     */
    out_of_stock?: boolean;
    /**
     * - Deliverable flag denotes if the product
     * is deliverable or not.
     */
    deliverable?: boolean;
    /**
     * - Product sizes availability.
     */
    available_sizes?: ProductAvailabilitySize[];
    /**
     * - Valid flag for the product if the product
     * added in cart is valid to place the order.
     */
    is_valid?: boolean;
    /**
     * - Quantity of the product available
     * on other store.
     */
    other_store_quantity?: number;
    /**
     * - All sizes of the product.
     */
    sizes?: string[];
};
/** @returns {ActionQuery} */
declare function ActionQuery(): ActionQuery;
type ActionQuery = {
    /**
     * - Contains list of product slug.
     */
    product_slug?: string[];
};
/** @returns {ProductAction} */
declare function ProductAction(): ProductAction;
type ProductAction = {
    query?: ActionQuery;
    /**
     * - Url of the product to render the product .
     */
    url?: string;
    /**
     * - Type of action.
     */
    type?: string;
};
/** @returns {Tags} */
declare function Tags(): Tags;
type Tags = {
    /**
     * - Tags is a lable or batch that is attached to a
     * product in cart.
     */
    tags?: any;
};
/** @returns {ProductImage} */
declare function ProductImage(): ProductImage;
type ProductImage = {
    /**
     * - Secured url of the product image.
     */
    secure_url?: string;
    /**
     * - Aspect ratio of the product image.
     */
    aspect_ratio?: string;
    /**
     * - Bucket link url for product image.
     */
    url?: string;
};
/** @returns {CategoryInfo} */
declare function CategoryInfo(): CategoryInfo;
type CategoryInfo = {
    /**
     * - Product Category Id.
     */
    uid?: number;
    /**
     * - Category name of the product .
     */
    name?: string;
};
/** @returns {CartProduct} */
declare function CartProduct(): CartProduct;
type CartProduct = {
    /**
     * - Field to add custom json of the product in cart.
     */
    _custom_json?: any;
    brand?: BaseInfo;
    action?: ProductAction;
    teaser_tag?: Tags;
    /**
     * - Unique product url name generated via product
     * name and other meta data.
     */
    slug?: string;
    /**
     * - Product Images urls of different types
     * like secure url, aspect ration url and url.
     */
    images?: ProductImage[];
    /**
     * - Unique identifier of the product in cart.
     */
    uid?: number;
    /**
     * - Product name of the product in cart which is
     * defined on platform.
     */
    name?: string;
    /**
     * - Product code of the product while defining
     * product on platform.
     */
    item_code?: string;
    /**
     * - Product category information which
     * incldes category name and category id.
     */
    categories?: CategoryInfo[];
    /**
     * - Products tags that are added to each product to
     * identify the set of products.
     */
    tags?: string[];
    /**
     * - Type of product in cart.
     */
    type?: string;
    /**
     * - Product attributes defined on platform.
     */
    attributes?: any;
};
/** @returns {CouponDetails} */
declare function CouponDetails(): CouponDetails;
type CouponDetails = {
    /**
     * - Discout amount applied from
     * coupon for single quantity of the product.
     */
    discount_single_quantity?: number;
    /**
     * - Coupon code of the coupon applied.
     */
    code?: string;
    /**
     * - Total discount earned from
     * coupon applied to cart.
     */
    discount_total_quantity?: number;
};
/** @returns {CartProductInfo} */
declare function CartProductInfo(): CartProductInfo;
type CartProductInfo = {
    article?: ProductArticle;
    /**
     * - An Integer indication the Minimum Order Quantity
     * of a product, e.g. 100.
     */
    moq?: any;
    identifiers: CartProductIdentifer;
    promo_meta?: PromoMeta;
    price?: ProductPriceInfo;
    /**
     * - Quantity of the product added in cart.
     */
    quantity?: number;
    /**
     * - Charges information which denotes types of
     * charges and amount of charge applied to that product in cart.
     */
    charges?: Charges[];
    /**
     * - Discount amount of the product in cart.
     */
    discount?: string;
    availability?: ProductAvailability;
    delivery_promise?: ShipmentPromise;
    product?: CartProduct;
    /**
     * - European Article Number of the product
     * (limited upto 50 EAN identifier in a single request).
     */
    product_ean_id?: string;
    /**
     * - Bulk offer information for the product
     * which denotes if any bulk offer is applied to the product in cart.
     */
    bulk_offer?: any;
    /**
     * - Parent item information of the
     * product which identifies the parent of the product in cart.
     */
    parent_item_identifiers?: any;
    coupon?: CouponDetails;
    /**
     * - Whether MTO (Make to Order) is enabled or not.
     */
    custom_order?: any;
    /**
     * - Message for the coupon denotes which
     * coupon is applied and empty if not applied.
     */
    coupon_message?: string;
    /**
     * - The attribute key associated with the size.
     */
    key?: string;
    /**
     * - Product level message which denotes error
     * information to display over the product in cart.
     */
    message?: string;
    /**
     * - Whether or not the product is a set of items.
     */
    is_set?: boolean;
    price_per_unit?: ProductPricePerUnitInfo;
    /**
     * - List of applicable
     * promotion for the product in cart.
     */
    promotions_applied?: AppliedPromotion[];
};
/** @returns {DisplayBreakup} */
declare function DisplayBreakup(): DisplayBreakup;
type DisplayBreakup = {
    /**
     * - Currency symbol for the price.
     */
    currency_symbol?: string;
    /**
     * - Key of the price like total_mrp, total, subtotal etc.
     */
    key?: string;
    /**
     * - Display key field that to be shown against the value.
     */
    display?: string;
    /**
     * - List of message at price level to be displayed.
     */
    message?: string[];
    /**
     * - Currency code for the price .
     */
    currency_code?: string;
    /**
     * - Numeric value of the price.
     */
    value?: number;
    /**
     * - Value for the price which is set from platform
     * if applicable.
     */
    preset?: number;
};
/** @returns {RawBreakup} */
declare function RawBreakup(): RawBreakup;
type RawBreakup = {
    /**
     * - Total value of goods after all discount, coupons
     * and promotion applied of all products in cart.
     */
    vog?: number;
    /**
     * - Selling price amount of all products in cart.
     */
    subtotal?: number;
    /**
     * - Loyalty points applied on cart.
     */
    fynd_cash?: number;
    /**
     * - Discount amount recieved on cart.
     */
    discount?: number;
    /**
     * - Convenience fee amount applied to cart.
     */
    convenience_fee?: number;
    /**
     * - Delivery charge applied to cart.
     */
    delivery_charge?: number;
    /**
     * - GST charges applied on cart.
     */
    gst_charges?: number;
    /**
     * - Maximum price total amount of all products in cart.
     */
    mrp_total?: number;
    /**
     * - Total of payment modes by which payment is
     * going to be done.
     */
    mop_total?: number;
    /**
     * - Total amount of charges applied on cart.
     */
    total_charge?: number;
    /**
     * - Coupon amount applied to cart.
     */
    coupon?: number;
    /**
     * - Total payable amount by the customer.
     */
    total?: number;
    /**
     * - Gift cart amount applied on cart.
     */
    gift_card?: number;
    /**
     * - Total amount will be saved if customer
     * places the order.
     */
    you_saved?: number;
    /**
     * - Cod charge value applied to cart. This is
     * applied when user select payment mode as COD.
     */
    cod_charge?: number;
};
/** @returns {CouponBreakup} */
declare function CouponBreakup(): CouponBreakup;
type CouponBreakup = {
    /**
     * - Value of the coupon applied to cart.
     */
    coupon_value?: number;
    /**
     * - Coupon Title of the coupon applied denotes name
     * of the coupon.
     */
    title?: string;
    /**
     * - Coupon subtitle of the coupon applied to
     * cart which is used to display.
     */
    sub_title?: string;
    /**
     * - Minumum cart value of cart after
     * which the coupon can be applied.
     */
    minimum_cart_value?: number;
    /**
     * - Coupon message of the coupon applied to cart.
     */
    message?: string;
    /**
     * - Type of the coupon applied to cart.
     */
    coupon_type?: string;
    /**
     * - Unique identifier of the coupon applied to cart.
     */
    uid?: string;
    /**
     * - Coupon value of the coupon applied to cart.
     */
    value?: number;
    /**
     * - Maximum discount value of the
     * coupon applied to cart.
     */
    max_discount_value?: number;
    /**
     * - Applied flag which denotes if any coupon
     * is applied to cart.
     */
    is_applied?: boolean;
    /**
     * - Coupon description of the coupon applied to cart.
     */
    description?: string;
    /**
     * - Coupon code of the coupon applied.
     */
    code?: string;
    /**
     * - Type of the coupon applied to cart.
     */
    type?: string;
};
/** @returns {LoyaltyPoints} */
declare function LoyaltyPoints(): LoyaltyPoints;
type LoyaltyPoints = {
    /**
     * - Total loyalty points available with user.
     */
    total?: number;
    /**
     * - Description for loyalty points.
     */
    description?: string;
    /**
     * - Whether the loyalty points are applicable
     * for the cart .
     */
    applicable?: number;
    /**
     * - Whether the loyalty points are applied on the cart .
     */
    is_applied?: boolean;
};
/** @returns {CartBreakup} */
declare function CartBreakup(): CartBreakup;
type CartBreakup = {
    /**
     * - List of breakup data which is used
     * to display the breakup to the customer like MRP total, Discount, Sub total,
     * coupon value, promotion value and final total.
     */
    display?: DisplayBreakup[];
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
};
/** @returns {CartCurrency} */
declare function CartCurrency(): CartCurrency;
type CartCurrency = {
    /**
     * - Currency code defined by ISO 4217:2015.
     */
    code?: string;
    /**
     * - Currency symbol for currency of user cart prices.
     */
    symbol?: string;
};
/** @returns {CartDetailCoupon} */
declare function CartDetailCoupon(): CartDetailCoupon;
type CartDetailCoupon = {
    /**
     * - Fields denotes cashback amount applied to cart.
     */
    cashback_amount?: number;
    /**
     * - Primary cashback message for
     * coupon applied to cart.
     */
    cashback_message_primary?: string;
    /**
     * - Secondary cashback message
     * for coupon applied to cart.
     */
    cashback_message_secondary?: string;
    /**
     * - Coupon code to be applied to cart.
     */
    coupon_code?: string;
    /**
     * - Coupon description of the coupon
     * applied to cart.
     */
    coupon_description?: string;
    /**
     * - Unique identifier of the coupon applied to cart.
     */
    coupon_id?: string;
    /**
     * - Coupon subtitle of the coupon applied to cart.
     */
    coupon_subtitle?: string;
    /**
     * - Coupon Title of the coupon applied.
     */
    coupon_title?: string;
    /**
     * - Type of the coupon applied to cart.
     */
    coupon_type?: string;
    /**
     * - Value of the coupon applied to cart.
     */
    coupon_value?: number;
    /**
     * - Total discount earned from coupon applied to cart.
     */
    discount?: number;
    /**
     * - Flag to determine where the coupon is
     * applied to cart or not.
     */
    is_applied?: boolean;
    /**
     * - Determine where the coupon applied to cart is valid.
     */
    is_valid?: boolean;
    /**
     * - Maximum discount value of the
     * coupon applied to cart.
     */
    maximum_discount_value?: number;
    /**
     * - Coupon message of the coupon applied to cart.
     */
    message?: string;
    /**
     * - Minimum cart value of the coupon
     * applied to cart.
     */
    minimum_cart_value?: number;
};
/** @returns {ChargesThreshold} */
declare function ChargesThreshold(): ChargesThreshold;
type ChargesThreshold = {
    /**
     * - Charges amount to be applied on cart.
     */
    charges?: number;
    /**
     * - Threshold of cart value on which the charge
     * should be applied .
     */
    threshold?: number;
};
/** @returns {DeliveryChargesConfig} */
declare function DeliveryChargesConfig(): DeliveryChargesConfig;
type DeliveryChargesConfig = {
    /**
     * - Delivery charge enabled for the cart or not.
     */
    enabled?: boolean;
    /**
     * - Charges applicable based on threshold.
     */
    charges?: ChargesThreshold[];
};
/** @returns {CartCommonConfig} */
declare function CartCommonConfig(): CartCommonConfig;
type CartCommonConfig = {
    delivery_charges_config?: DeliveryChargesConfig;
};
/** @returns {CartDetailResponse} */
declare function CartDetailResponse(): CartDetailResponse;
type CartDetailResponse = {
    /**
     * - Unique identifier of the user cart.
     */
    cart_id?: number;
    /**
     * - Unique identifier of the user cart.
     */
    uid?: string;
    /**
     * - List of applied
     * promotions data to cart which includes promotion id, promotion name, offer
     * text, description, buy rules, discount rules and promotion type.
     */
    applied_promo_details?: AppliedPromotion[];
    /**
     * - Checkout mode of user cart.
     */
    checkout_mode?: string;
    /**
     * - Permanent Account Number of the user.
     */
    pan_no?: string;
    /**
     * - Cart validity flag determines the if the
     * response is valid or not.
     */
    is_valid?: boolean;
    /**
     * - Unique identifier of the user cart.
     */
    id?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_promise?: ShipmentPromise;
    /**
     * - Comment message to be added in user cart.
     */
    comment?: string;
    /**
     * - Items data list in user cart that
     * includes item id, item size, store id, available sizes and rest of the item
     * related data.
     */
    items?: CartProductInfo[];
    /**
     * - Delivery charge in information
     * message on shipment .
     */
    delivery_charge_info?: string;
    common_config?: CartCommonConfig;
    coupon?: CartDetailCoupon;
    /**
     * - Message of the get cart detail API response.
     */
    message?: string;
    /**
     * - Notification object which denotes
     * notification data for user cart.
     */
    notification?: any;
    /**
     * - Staff employee user id if cart is
     * created by staff employee for the customer.
     */
    staff_user_id?: string;
    /**
     * - Success flag of get cart detail API response.
     */
    success?: boolean;
    /**
     * - GSTIN added in user cart.
     */
    gstin?: string;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process.
     */
    restrict_checkout?: boolean;
    /**
     * - Last modified timestamp of cart.
     */
    last_modified?: string;
    breakup_values?: CartBreakup;
    currency?: CartCurrency;
    /**
     * - Coupon text of coupon applied on cart.
     */
    coupon_text?: string;
    /**
     * - Buy now flag for the cart which denotes user
     * is doing fast checkout for the cart using buy now.
     */
    buy_now?: boolean;
    /**
     * - Pan card config states at what condition
     * user should enter the pan card.
     */
    pan_config?: any;
    /**
     * - Custom meta details added cart
     * checkout API payload .
     */
    custom_cart_meta?: any;
};
/** @returns {AddProductCart} */
declare function AddProductCart(): AddProductCart;
type AddProductCart = {
    /**
     * - Field to determine how article
     * assignment should happen by article assignment level and strategy.
     */
    article_assignment?: any;
    /**
     * - Field to specify the product
     * groups of the product that the user is trying to add in cart.
     */
    product_group_tags?: string[];
    /**
     * - Extra meta data to be added at article
     * level while add items to cart.
     */
    extra_meta?: any;
    /**
     * - Field to specify the product quantity that
     * user wants to buy.
     */
    quantity?: number;
    /**
     * - Field to add custom json at article level
     * while add items to cart .
     */
    _custom_json?: any;
    /**
     * - Field to determine size of the product.
     */
    item_size?: string;
    /**
     * - Unique identifier of the store selected by
     * the user from which user want to buy a product.
     */
    store_id?: number;
    /**
     * - Display field at article level .
     */
    display?: string;
    /**
     * - Unique identifier of an article .
     */
    article_id?: string;
    /**
     * - Fields to determine parent
     * product of the product.
     */
    parent_item_identifiers?: any[];
    /**
     * - Unique idetifier of the seller selected by
     * the user from which user want to buy a product .
     */
    seller_id?: number;
    /**
     * - Filed to determine whether user is making request
     * from pos or not.
     */
    pos?: boolean;
    /**
     * - Unique identifier to identify product.
     */
    item_id?: number;
    /**
     * - Field to add meta data at article level.
     */
    meta?: any;
    /**
     * - Add items using seller identifier
     * for store os.
     */
    seller_identifier?: string;
};
/** @returns {AddCartRequest} */
declare function AddCartRequest(): AddCartRequest;
type AddCartRequest = {
    /**
     * - List of items detail which need to be
     * added to cart like item id, item size, and item quantity.
     */
    items?: AddProductCart[];
    /**
     * - Field to create to new cart whille user adds
     * item to cart.
     */
    new_cart?: boolean;
};
/** @returns {AddCartDetailResponse} */
declare function AddCartDetailResponse(): AddCartDetailResponse;
type AddCartDetailResponse = {
    /**
     * - Message of add to cart API response.
     */
    message?: string;
    /**
     * - When adding multiple items check if all
     * added. True if only few are added.
     */
    partial?: boolean;
    cart?: CartDetailResponse;
    /**
     * - True if all items are added successfully.
     * False if partially added or not added.
     */
    success?: boolean;
};
/** @returns {UpdateProductCart} */
declare function UpdateProductCart(): UpdateProductCart;
type UpdateProductCart = {
    /**
     * - Field to update extra meta of the product in cart.
     */
    extra_meta?: any;
    /**
     * - Field to update custom json of the product in cart.
     */
    _custom_json?: any;
    /**
     * - Field to update the quantity of the item in cart.
     */
    quantity?: number;
    /**
     * - Field to update the size of the product in cart.
     */
    item_size?: string;
    /**
     * - Item index determines on which index the
     * product falls to be updated.
     */
    item_index?: number;
    identifiers: CartProductIdentifer;
    /**
     * - Article id of the product in cart.
     */
    article_id?: string;
    /**
     * - Field to update parent product
     * of the item in cart.
     */
    parent_item_identifiers?: any;
    /**
     * - Item id of the product that needs to be updated.
     */
    item_id?: number;
    /**
     * - Field to update meta of the item in cart.
     */
    meta?: any;
};
/** @returns {UpdateCartRequest} */
declare function UpdateCartRequest(): UpdateCartRequest;
type UpdateCartRequest = {
    /**
     * - List items data that needs to be
     * updated in cart.
     */
    items?: UpdateProductCart[];
    /**
     * - Field to determine if item to be removed from
     * cart or it needs to be updated.
     */
    operation: string;
};
/** @returns {UpdateCartDetailResponse} */
declare function UpdateCartDetailResponse(): UpdateCartDetailResponse;
type UpdateCartDetailResponse = {
    /**
     * - Message of update cart API response.
     */
    message?: string;
    cart?: CartDetailResponse;
    /**
     * - True if all items are added successfully.
     * False if partially added or not added.
     */
    success?: boolean;
};
/** @returns {DeleteCartDetailResponse} */
declare function DeleteCartDetailResponse(): DeleteCartDetailResponse;
type DeleteCartDetailResponse = {
    /**
     * - Message for delete cart response.
     */
    message?: string;
    /**
     * - True if cart is archived successfully. False
     * if not archived.
     */
    success?: boolean;
};
/** @returns {CartItemCountResponse} */
declare function CartItemCountResponse(): CartItemCountResponse;
type CartItemCountResponse = {
    /**
     * - Item count present in cart.
     */
    user_cart_items_count?: number;
};
/** @returns {PageCoupon} */
declare function PageCoupon(): PageCoupon;
type PageCoupon = {
    /**
     * - Total coupons are available for the cart.
     */
    total_item_count?: number;
    /**
     * - Denotes if next page of coupon is available.
     */
    has_next?: boolean;
    /**
     * - Total pages of coupon availalbe.
     */
    total?: number;
    /**
     * - Current page number.
     */
    current?: number;
    /**
     * - Denotes if previous page of the coupon
     * is available.
     */
    has_previous?: boolean;
};
/** @returns {Coupon} */
declare function Coupon(): Coupon;
type Coupon = {
    /**
     * - The amount based on cart value.
     */
    coupon_amount?: number;
    /**
     * - Coupon value of the coupon applied to cart.
     */
    coupon_value?: number;
    /**
     * - Coupon Title of the coupon applied denotes name
     * of the coupon.
     */
    title?: string;
    /**
     * - Minimum cart value of the coupon
     * applied to cart.
     */
    minimum_cart_value?: number;
    /**
     * - Coupon subtitle of the coupon applied to
     * cart which is used to display.
     */
    sub_title?: string;
    /**
     * - Message to display to user for expiry of the coupon .
     */
    expires_on?: string;
    /**
     * - Coupon message of the coupon applied to cart.
     */
    message?: string;
    /**
     * - Type of the coupon applied to cart.
     */
    coupon_type?: string;
    /**
     * - Maximum discount value of the
     * coupon applied to cart.
     */
    max_discount_value?: number;
    /**
     * - Coupon code of the coupon applied on cart.
     */
    coupon_code?: string;
    /**
     * - Flag to determine where the coupon is
     * applicable to cart or not.
     */
    is_applicable?: boolean;
    /**
     * - Coupon description of the coupon applied to cart.
     */
    description?: string;
    /**
     * - Flag to determine where the coupon is
     * applied to cart or not.
     */
    is_applied?: boolean;
    /**
     * - Start date of the coupon when the coupon
     * will be live for the users to apply on cart.
     */
    start_date?: string;
    /**
     * - End date of the coupon on which the coupon expires.
     */
    end_date?: string;
    /**
     * - Message which is used to
     * display to the customer if the coupon is applied successfully.
     */
    coupon_applicable_message?: string;
    /**
     * - Offer text of the coupon which highligts
     * coupon offer defined while creating coupon .
     */
    offer_text?: string;
    /**
     * - Bank offer flag for the coupon if the
     * coupon is applicable for only if payment done by bank or mode specified in coupon.
     */
    is_bank_offer?: boolean;
};
/** @returns {GetCouponResponse} */
declare function GetCouponResponse(): GetCouponResponse;
type GetCouponResponse = {
    page?: PageCoupon;
    /**
     * - List of available coupon which
     * can be applied on cart.
     */
    available_coupon_list?: Coupon[];
};
/** @returns {ApplyCouponRequest} */
declare function ApplyCouponRequest(): ApplyCouponRequest;
type ApplyCouponRequest = {
    /**
     * - Coupon code to be applied.
     */
    coupon_code: string;
};
/** @returns {OfferPrice} */
declare function OfferPrice(): OfferPrice;
type OfferPrice = {
    /**
     * - Currency symbol for currency.
     */
    currency_symbol?: string;
    /**
     * - Discounted per unit price for current
     * offer object.
     */
    bulk_effective?: number;
    /**
     * - The currency code for an offer price is
     * the three-letter code that corresponds to the currency in which the offer
     * price is denominated.
     */
    currency_code?: string;
    /**
     * - The "effective price" is the actual price
     * paid by the consumer after accounting for product discounts. It represents
     * the true cost of a product or service after all adjustments have been made.
     */
    effective?: number;
    /**
     * - The price at which the product is sold to the
     * end consumer, typically the original price before discounts.
     */
    marked?: number;
};
/** @returns {OfferItem} */
declare function OfferItem(): OfferItem;
type OfferItem = {
    price?: OfferPrice;
    /**
     * - Percentage value of discount.
     */
    margin?: number;
    /**
     * - Quantity on which offer is applicable.
     */
    quantity?: number;
    /**
     * - Is true for best offer from all offers present
     * for all sellers.
     */
    best?: boolean;
    /**
     * - Total price of offer quantity with discount.
     */
    total?: number;
    /**
     * - Whether offer discount is auto applied in cart.
     */
    auto_applied?: boolean;
    /**
     * - Type of the offer.
     */
    type?: string;
};
/** @returns {OfferSeller} */
declare function OfferSeller(): OfferSeller;
type OfferSeller = {
    /**
     * - Unique identifier for a seller.
     */
    uid?: number;
    /**
     * - Name of a seller.
     */
    name?: string;
};
/** @returns {BulkPriceOffer} */
declare function BulkPriceOffer(): BulkPriceOffer;
type BulkPriceOffer = {
    /**
     * - Offers is the list of Offer item, which
     * consists of margin percentage, price, quantity, offer type and offer price.
     */
    offers?: OfferItem[];
    seller?: OfferSeller;
};
/** @returns {BulkPriceResponse} */
declare function BulkPriceResponse(): BulkPriceResponse;
type BulkPriceResponse = {
    /**
     * - Actual data to be in response consist
     * of offers from multiple seller.
     */
    data?: BulkPriceOffer[];
};
/** @returns {RewardPointRequest} */
declare function RewardPointRequest(): RewardPointRequest;
type RewardPointRequest = {
    /**
     * - Points to be applied for cart.
     */
    points: boolean;
};
/** @returns {GeoLocation} */
declare function GeoLocation(): GeoLocation;
type GeoLocation = {
    /**
     * - Latitude coordinate for address.
     */
    latitude?: number;
    /**
     * - Longitude coordinate for address.
     */
    longitude?: number;
};
/** @returns {Address} */
declare function Address(): Address;
type Address = {
    /**
     * - Country iso code for address.
     */
    country_iso_code?: string;
    /**
     * - Area description for address.
     */
    area?: string;
    /**
     * - Phone number for address.
     */
    phone?: string;
    /**
     * - Country phone code for address.
     */
    country_phone_code?: string;
    /**
     * - Checkout mode of address on which
     * address to be used for which checkout mode of cart.
     */
    checkout_mode?: string;
    /**
     * - Address description for address data.
     */
    address?: string;
    /**
     * - Area code slug for address. example
     * pincode is slug for India.
     */
    area_code_slug?: string;
    geo_location?: GeoLocation;
    /**
     * - Id of the address.
     */
    id?: string;
    /**
     * - Custom json of the address.
     */
    _custom_json?: any;
    /**
     * - City of the address.
     */
    city?: string;
    /**
     * - Sector of the address.
     */
    sector?: string;
    /**
     * - State code for address.
     */
    state_code?: string;
    /**
     * - Created by user id of address.
     */
    created_by_user_id?: string;
    /**
     * - Landmark of address.
     */
    landmark?: string;
    /**
     * - User id of address for which address is created.
     */
    user_id?: string;
    /**
     * - Name of person in address data to whom it belongs to.
     */
    name?: string;
    /**
     * - Google map point of the address.
     */
    google_map_point?: any;
    /**
     * - States whether address is active or not.
     */
    is_active?: boolean;
    /**
     * - Tags of address from which it can be identified.
     */
    tags?: string[];
    /**
     * - Country code of address.
     */
    country_code?: string;
    /**
     * - Address type of address.
     */
    address_type?: string;
    /**
     * - Country of address.
     */
    country?: string;
    /**
     * - Default address flag if no address
     * selected then this should be the default address selected.
     */
    is_default_address?: boolean;
    /**
     * - Area code of the address.
     */
    area_code?: string;
    /**
     * - Email address for address data.
     */
    email?: string;
    /**
     * - State of the address.
     */
    state?: string;
    /**
     * - Metadata of the address.
     */
    meta?: any;
};
/** @returns {GetAddressesResponse} */
declare function GetAddressesResponse(): GetAddressesResponse;
type GetAddressesResponse = {
    /**
     * - Personally Identifiable Information
     * masking flag to denote if the user data in address is masked or not.
     */
    pii_masking?: boolean;
    /**
     * - Address description for address data.
     */
    address?: Address[];
};
/** @returns {SaveAddressResponse} */
declare function SaveAddressResponse(): SaveAddressResponse;
type SaveAddressResponse = {
    /**
     * - Id of the address.
     */
    id?: string;
    /**
     * - Success flag of save address Response.
     */
    success?: boolean;
    /**
     * - Default address flag if no address
     * selected then this should be the default address selected.
     */
    is_default_address?: boolean;
};
/** @returns {UpdateAddressResponse} */
declare function UpdateAddressResponse(): UpdateAddressResponse;
type UpdateAddressResponse = {
    /**
     * - Updated flag for update address operation
     * if the address updated or not.
     */
    is_updated?: boolean;
    /**
     * - ID of an address.
     */
    id?: string;
    /**
     * - Success flag of update address response.
     */
    success?: boolean;
    /**
     * - Default address flag if no address
     * selected then this should be the default address selected.
     */
    is_default_address?: boolean;
};
/** @returns {DeleteAddressResponse} */
declare function DeleteAddressResponse(): DeleteAddressResponse;
type DeleteAddressResponse = {
    /**
     * - Id of the address.
     */
    id?: string;
    /**
     * - Deleted flag in delete address response
     * states whether the address was deleted or not.
     */
    is_deleted?: boolean;
};
/** @returns {SelectCartAddressRequest} */
declare function SelectCartAddressRequest(): SelectCartAddressRequest;
type SelectCartAddressRequest = {
    /**
     * - Address is selected by user on which shipment to be
     * delivered.
     */
    id?: string;
    /**
     * - Billing address id selected by user
     * on which shipment bill to be generated.
     */
    billing_address_id?: string;
    /**
     * - Cart id of the user cart for which the select
     * address operation performed.
     */
    cart_id?: string;
};
/** @returns {UpdateCartPaymentRequest} */
declare function UpdateCartPaymentRequest(): UpdateCartPaymentRequest;
type UpdateCartPaymentRequest = {
    /**
     * - Cart id of the user cart for which the update cart
     * payment operation performed.
     */
    id?: string;
    /**
     * - Payment identifier of the payment
     * mode selected to do the payment.
     */
    payment_identifier?: string;
    /**
     * - Address id of the user address selected to
     * deliver the shipment.
     */
    address_id?: string;
    /**
     * - Merchant code of the payment mode
     * selected to do the payment.
     */
    merchant_code?: string;
    /**
     * - Aggregator name of the payment gateway.
     */
    aggregator_name?: string;
    /**
     * - Payment mode of the payment selected to
     * do the payment.
     */
    payment_mode?: string;
};
/** @returns {CouponValidity} */
declare function CouponValidity(): CouponValidity;
type CouponValidity = {
    /**
     * - Coupon Title of the coupon applied.
     */
    title?: string;
    /**
     * - Coupon discount value of the coupon applied.
     */
    discount?: number;
    /**
     * - Flag for coupon validation
     * required on next page or not.
     */
    next_validation_required?: boolean;
    /**
     * - Valid flag which denotes if the applied coupon
     * is valid or not.
     */
    valid?: boolean;
    /**
     * - Display message for coupon validity.
     */
    display_message_en?: string;
    /**
     * - Coupon code of the coupon applied.
     */
    code?: string;
};
/** @returns {PaymentCouponValidate} */
declare function PaymentCouponValidate(): PaymentCouponValidate;
type PaymentCouponValidate = {
    /**
     * - Payment mode valid message for coupon.
     */
    message?: string;
    coupon_validity?: CouponValidity;
    /**
     * - Success flag of coupon payment mode validity
     * API response.
     */
    success: boolean;
};
/** @returns {ShipmentResponse} */
declare function ShipmentResponse(): ShipmentResponse;
type ShipmentResponse = {
    /**
     * - Count of shipments that will be shipped.
     */
    shipments?: number;
    promise?: ShipmentPromise;
    /**
     * - Order type of the shipment like pickAtStore
     * or HomeDelivery.
     */
    order_type?: string;
    /**
     * - Box type of the shipment in which the
     * shipment will be delivered.
     */
    box_type?: string;
    /**
     * - Shipment type of the shipment returned
     * in get shipments API like single_shipment or multiple shipment. Single
     * Shipment means 1 item in 1 shipment and vice versa in the other one.
     */
    shipment_type?: string;
    /**
     * - Delivery partner options that are available
     * to deliver the shipment.
     */
    dp_options?: any;
    /**
     * - Delivery partner id of the shipment.
     */
    dp_id?: string;
    /**
     * - Item details in the shipment.
     */
    items?: CartProductInfo[];
    /**
     * - Fulfilment type of shipment.
     */
    fulfillment_type?: string;
    /**
     * - Fulfilment id of the shipment.
     */
    fulfillment_id?: number;
};
/** @returns {CartShipmentsResponse} */
declare function CartShipmentsResponse(): CartShipmentsResponse;
type CartShipmentsResponse = {
    /**
     * - Delivery charge in information
     * message on shipment.
     */
    delivery_charge_info?: string;
    /**
     * - Checkout mode of cart.
     */
    checkout_mode?: string;
    /**
     * - Response message of get shipments API.
     */
    message?: string;
    /**
     * - GSTIN number added in cart.
     */
    gstin?: string;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process.
     */
    restrict_checkout?: boolean;
    /**
     * - Last modified timestamp of cart.
     */
    last_modified?: string;
    /**
     * - Cart id of the user cart.
     */
    cart_id?: number;
    /**
     * - Cart validity flag determines the if the
     * response is valid or not.
     */
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    currency?: CartCurrency;
    /**
     * - Cart id of the user cart.
     */
    id?: string;
    /**
     * - List of Shipments which includes
     * shipment data like shipment items, shipment promise, Shipment type,
     * shipment order type, shipment dp options etc.
     */
    shipments?: ShipmentResponse[];
    payment_selection_lock?: PaymentSelectionLock;
    /**
     * - Coupon text of coupon applied on cart.
     */
    coupon_text?: string;
    delivery_promise?: ShipmentPromise;
    /**
     * - Error details if any error occurs which
     * includes type of error, error code and error message.
     */
    error?: boolean;
    /**
     * - Comment message added in cart.
     */
    comment?: string;
    /**
     * - Buy now flag of user cart.
     */
    buy_now?: boolean;
    /**
     * - Cart id of the user cart.
     */
    uid?: string;
    /**
     * - Custom meta details added cart
     * checkout API payload.
     */
    custom_cart_meta?: any;
};
/** @returns {CartCheckoutCustomMeta} */
declare function CartCheckoutCustomMeta(): CartCheckoutCustomMeta;
type CartCheckoutCustomMeta = {
    /**
     * - Key name of custom meta.
     */
    key: string;
    /**
     * - Value to be added in key.
     */
    value: string;
};
/** @returns {CustomerDetails} */
declare function CustomerDetails(): CustomerDetails;
type CustomerDetails = {
    /**
     * - Email address of the customer to be added in
     * customer detail while checkout.
     */
    email?: string;
    /**
     * - Mobile number of customer to be added in customer
     * detail while checkout.
     */
    mobile: string;
    /**
     * - Name of customer to be added in customer detail
     * while checkout.
     */
    name?: string;
};
/** @returns {StaffCheckout} */
declare function StaffCheckout(): StaffCheckout;
type StaffCheckout = {
    /**
     * - Employee code of staff who does checkout
     * on behalf of customer.
     */
    employee_code?: string;
    /**
     * - User id of the employee who does checkout on behalf
     * of customer.
     */
    user: string;
    /**
     * - Last name of staff employee who does checkout
     * on behalf of customer.
     */
    last_name: string;
    /**
     * - First name of staff emplyee who does checkout
     * on behalf of customer.
     */
    first_name: string;
    /**
     * - Id of staff who does checkout on behalf of customer.
     */
    _id: string;
};
/** @returns {CartCheckoutDetailRequest} */
declare function CartCheckoutDetailRequest(): CartCheckoutDetailRequest;
type CartCheckoutDetailRequest = {
    /**
     * - Custom meta data to be
     * added in order.
     */
    custom_meta?: CartCheckoutCustomMeta[];
    /**
     * - Customer details to be added in order.
     */
    customer_details?: any;
    /**
     * - Merchant code of the payment mode
     * selected to do the payment.
     */
    merchant_code?: string;
    /**
     * - Cart id of the user cart.
     */
    id?: string;
    /**
     * - Payment auto confirm flag if
     * payment need not to be collected from user.
     */
    payment_auto_confirm?: boolean;
    /**
     * - Payment mode from which the payment to be
     * done for the order.
     */
    payment_mode: string;
    /**
     * - Aggregator name of the payment gateway.
     */
    aggregator?: string;
    /**
     * - Address id of the user on which the order
     * to be delivered.
     */
    address_id?: string;
    /**
     * - Callback url to be redirected after
     * payment received/failed.
     */
    callback_url?: string;
    /**
     * - Delivery address data which includes
     * customer address, customer phone, customer email, customer pincode,
     * customer landmark and customer name.
     */
    delivery_address?: any;
    staff?: StaffCheckout;
    /**
     * - Order type of the order being placed like
     * pickAtStore or HomeDelivery.
     */
    order_type?: string;
    /**
     * - Ordering store id of the store from
     * which the order is getting placed.
     */
    ordering_store?: number;
    /**
     * - Extra meta to be added while checkout in order.
     */
    extra_meta?: any;
    /**
     * - Payment identifier of the payment
     * mode selected to do the payment.
     */
    payment_identifier?: string;
    /**
     * - Billing address json which includes
     * customer address, customer phone, customer email, customer pincode,
     * customer landmark and customer name.
     */
    billing_address?: any;
    /**
     * - Payment params which includes payment
     * identifier and merchant code.
     */
    payment_params?: any;
    /**
     * - Billing address id of the customer
     * on which the invoice to be generated after the order is placed.
     */
    billing_address_id?: string;
    /**
     * - Meta data to be added in order.
     */
    meta?: any;
    /**
     * - Payment extra identifier for
     * the payment mode to do the payment.
     */
    payment_extra_identifiers?: any;
    /**
     * - Issuer Identification Number' number of card if
     * payment mode is card.
     */
    iin?: string;
    /**
     * - Network of card if payment mode is card to do
     * the payment.
     */
    network?: string;
    /**
     * - Type of cart if payment mode is card to do the payment.
     */
    type?: string;
    /**
     * - Saved card id if payment mode is card to do the payment.
     */
    card_id?: string;
};
/** @returns {CheckCart} */
declare function CheckCart(): CheckCart;
type CheckCart = {
    /**
     * - Checkout mode of user cart.
     */
    checkout_mode?: string;
    /**
     * - User type of the cart who places the order.
     */
    user_type?: string;
    /**
     * - Cash On Delivery message for the order placed.
     */
    cod_message?: string;
    /**
     * - Cart id of the user cart for which the order placed.
     */
    cart_id?: number;
    /**
     * - Valid flag fotr the checkout response if
     * order placed was valid.
     */
    is_valid?: boolean;
    /**
     * - Delivery charges of the order placed
     * via checkout API.
     */
    delivery_charges?: number;
    /**
     * - Cart id of the user cart.
     */
    id?: string;
    payment_selection_lock?: PaymentSelectionLock;
    /**
     * - Error details if any error occurs which
     * includes type of error, error code and error message.
     */
    error_message?: string;
    delivery_promise?: ShipmentPromise;
    /**
     * - Comment message added in cart after order placed.
     */
    comment?: string;
    /**
     * - Items details in cart after order placed.
     */
    items?: CartProductInfo[];
    /**
     * - Cart id of user cart.
     */
    uid?: string;
    /**
     * - Delivery charge order value.
     */
    delivery_charge_order_value?: number;
    /**
     * - Delivery charge in information
     * message on shipment.
     */
    delivery_charge_info?: string;
    /**
     * - Whether Cash On Delivery available.
     */
    cod_available?: boolean;
    /**
     * - Success flag of checkout cart API response.
     */
    success?: boolean;
    /**
     * - Store code from which the order placed.
     */
    store_code?: string;
    /**
     * - Message of the cart checkout API response.
     */
    message?: string;
    /**
     * - GSTIN number added in cart.
     */
    gstin?: string;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process.
     */
    restrict_checkout?: boolean;
    /**
     * - Last modified timestamp of cart.
     */
    last_modified?: string;
    /**
     * - Order id generated after placing order.
     */
    order_id?: string;
    breakup_values?: CartBreakup;
    currency?: CartCurrency;
    /**
     * - Store employees data.
     */
    store_emps?: any[];
    /**
     * - Coupon text of the applied coupon on order placed.
     */
    coupon_text?: string;
    /**
     * - Buy now flag of user cart.
     */
    buy_now?: boolean;
    /**
     * - Cash On Delivery charges of the user cart.
     */
    cod_charges?: number;
    /**
     * - Meta data for customCart of user.
     */
    custom_cart_meta?: any;
};
/** @returns {CartCheckoutResponse} */
declare function CartCheckoutResponse(): CartCheckoutResponse;
type CartCheckoutResponse = {
    /**
     * - Payment confirm url used to
     * redirect after payment is confirmed.
     */
    payment_confirm_url?: string;
    /**
     * - App intercept url which is used to
     * redirect on app after payment in confirmed/failed.
     */
    app_intercept_url?: string;
    /**
     * - Success flag of cart checkout API response.
     */
    success?: boolean;
    /**
     * - Callback url to be redirected after
     * payment received/failed.
     */
    callback_url?: string;
    /**
     * - Message of the cart checkout v2 API response.
     */
    message?: string;
    /**
     * - Data of the user cart checkout includes cart
     * data, address, user id, order type etc.
     */
    data?: any;
    /**
     * - Order id generated after placing order.
     */
    order_id?: string;
    cart?: CheckCart;
};
/** @returns {GiftDetail} */
declare function GiftDetail(): GiftDetail;
type GiftDetail = {
    /**
     * - Is gift applied flag which determines
     * if this is a gift oder not.
     */
    is_gift_applied?: boolean;
    /**
     * - Gift message for the one while receive
     * the delivery of the order with this message.
     */
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
    /**
     * - Delivery slots details includes article
     * level time slot when the shipment can be delivered.
     */
    delivery_slots?: any;
    gift_details?: ArticleGiftDetail;
    /**
     * - Customer contact details for
     * customer pickup at store.
     */
    pick_up_customer_details?: any;
    /**
     * - Checkout mode of user cart.
     */
    checkout_mode?: string;
    /**
     * - Comment message to be added in user cart.
     */
    comment?: string;
    /**
     * - GSTIN number to be added in user cart.
     */
    gstin?: string;
    /**
     * - Custom cart meta json to be added in
     * order meta which can be further received in cart API response and order
     * meta in order detail API or webhook.
     */
    custom_cart_meta?: any;
};
/** @returns {CartMetaResponse} */
declare function CartMetaResponse(): CartMetaResponse;
type CartMetaResponse = {
    /**
     * - Detailed message.
     */
    message?: string;
    /**
     * - Whether added meta was vaild.
     */
    is_valid?: boolean;
};
/** @returns {CartMetaMissingResponse} */
declare function CartMetaMissingResponse(): CartMetaMissingResponse;
type CartMetaMissingResponse = {
    /**
     * - Detailed errors for invalid cart meta request.
     */
    errors?: string[];
};
/** @returns {GetShareCartLinkRequest} */
declare function GetShareCartLinkRequest(): GetShareCartLinkRequest;
type GetShareCartLinkRequest = {
    /**
     * - Cart id of user cart for generating cart sharing token.
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
     * - Short url unique id of the cart which is opted
     * to share with other user.
     */
    token?: string;
    /**
     * - Short shareable final url which can populate
     * shared cart items in one's cart or replaced one's cart with shared cart items.
     */
    share_url?: string;
};
/** @returns {SharedCartDetails} */
declare function SharedCartDetails(): SharedCartDetails;
type SharedCartDetails = {
    /**
     * - Short link id of the user cart that needs to be shared.
     */
    token?: string;
    /**
     * - User details of who generated share link.
     */
    user?: any;
    /**
     * - Created on timestamp of user cart.
     */
    created_on?: string;
    /**
     * - Share link device and other source information.
     */
    source?: any;
    /**
     * - Meta data sent while generating share cart link.
     */
    meta?: any;
};
/** @returns {SharedCart} */
declare function SharedCart(): SharedCart;
type SharedCart = {
    /**
     * - Checkout mode of address on which
     * address to be used for which checkout mode of cart.
     */
    checkout_mode?: string;
    /**
     * - Cart id of user cart for generating cart sharing token.
     */
    cart_id?: number;
    /**
     * - Valid flag for get shared cart detail API.
     */
    is_valid?: boolean;
    /**
     * - Cart id of shared cart.
     */
    id?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_promise?: ShipmentPromise;
    /**
     * - Comment message added in user cart.
     */
    comment?: string;
    /**
     * - Items data list in user cart that
     * includes item id, item size, store id, available sizes and rest of the item
     * related data.
     */
    items?: CartProductInfo[];
    /**
     * - Cart id of the user cart.
     */
    uid?: string;
    /**
     * - Delivery charge info message of
     * the user cart.
     */
    delivery_charge_info?: string;
    /**
     * - Message of the get shared cart API response.
     */
    message?: string;
    /**
     * - GSTIN added in user cart.
     */
    gstin?: string;
    shared_cart_details?: SharedCartDetails;
    /**
     * - Restrict checkout flag to restrict
     * the checkout process.
     */
    restrict_checkout?: boolean;
    /**
     * - Last modified timestamp of user cart.
     */
    last_modified?: string;
    breakup_values?: CartBreakup;
    currency?: CartCurrency;
    /**
     * - Coupon text of the applied coupon on user cart.
     */
    coupon_text?: string;
    /**
     * - Buy now flag of user cart.
     */
    buy_now?: boolean;
    /**
     * - Custom cart meta of user cart added
     * via update cart meta API.
     */
    custom_cart_meta?: any;
};
/** @returns {SharedCartResponse} */
declare function SharedCartResponse(): SharedCartResponse;
type SharedCartResponse = {
    /**
     * - Error details if any error occurs which includes
     * type of error, error code and error message.
     */
    error?: string;
    cart?: SharedCart;
};
/** @returns {PriceMinMax} */
declare function PriceMinMax(): PriceMinMax;
type PriceMinMax = {
    /**
     * - Min price of article added in user cart.
     */
    min?: number;
    /**
     * - Max price of article added in user cart.
     */
    max?: number;
};
/** @returns {ItemPriceDetails} */
declare function ItemPriceDetails(): ItemPriceDetails;
type ItemPriceDetails = {
    marked?: PriceMinMax;
    effective?: PriceMinMax;
    /**
     * - Currency of the article added in cart.
     */
    currency?: string;
};
/** @returns {FreeGiftItems} */
declare function FreeGiftItems(): FreeGiftItems;
type FreeGiftItems = {
    /**
     * - Slug for an item.
     */
    item_slug?: string;
    /**
     * - Name of the free gift item received via free
     * gift promotion.
     */
    item_name?: string;
    item_price_details?: ItemPriceDetails;
    /**
     * - Item brand name of the free gift item
     * promotion applied on cart.
     */
    item_brand_name?: string;
    /**
     * - Item id of the free gift item.
     */
    item_id?: number;
    /**
     * - Images URLs for free gift items.
     */
    item_images_url?: string[];
};
/** @returns {PromotionOffer} */
declare function PromotionOffer(): PromotionOffer;
type PromotionOffer = {
    /**
     * - Promotion id of the promotion which is available on product.
     */
    id?: string;
    /**
     * - Buy rules of promotion which is available on product.
     */
    buy_rules?: any;
    /**
     * - Offer title of the promotion which is
     * available on product.
     */
    offer_text?: string;
    /**
     * - Promotion type of the promotion which
     * is availalbe on product.
     */
    promotion_type?: string;
    /**
     * - Name of the promotion which is
     * available on product.
     */
    promotion_name?: string;
    /**
     * - Group of the promotion which is
     * available on product.
     */
    promotion_group?: string;
    /**
     * - Datetime ISO String for promotion end date
     * which is available on product.
     */
    valid_till?: string;
    /**
     * - Discount rules of promotions which is
     * avaiable on product.
     */
    discount_rules?: any[];
    /**
     * - Details of free gift items
     * which included item id, brand name, item name, item slug, item price and
     * item image url.
     */
    free_gift_items?: FreeGiftItems[];
    /**
     * - Offer details including T&C of the
     * promotion which is avaiable on product.
     */
    description?: string;
};
/** @returns {PromotionOffersResponse} */
declare function PromotionOffersResponse(): PromotionOffersResponse;
type PromotionOffersResponse = {
    /**
     * - Available promotion
     * details which are available on product which includes promotion data like
     * promotion id, promotion name, buy rules, discount rules validity dates etc.
     */
    available_promotions?: PromotionOffer[];
};
/** @returns {PromotionPaymentOffer} */
declare function PromotionPaymentOffer(): PromotionPaymentOffer;
type PromotionPaymentOffer = {
    /**
     * - Application id on which the promotion
     * was created.
     */
    application_id?: string;
    /**
     * - Buy rules of promotions which denotes if
     * the rules matches than only promotion is applicable.
     */
    buy_rules?: any[];
    /**
     * - Article Price on which promotion
     * calculated like effective price or marked price.
     */
    calculate_on?: string;
    /**
     * - Offer details including T&C of the
     * promotion which is avaiable on cart.
     */
    description?: string;
    /**
     * - Discount rules of promotions which is
     * avaiable on cart.
     */
    discount_rules?: any[];
    /**
     * - Promotion id of the promotion which is available on cart.
     */
    id?: string;
    /**
     * - Offer title of the promotion which is
     * available on cart.
     */
    offer_text?: string;
    /**
     * - Group promotion which is available on cart.
     */
    promotion_group?: string;
    /**
     * - Promotion type of the promotion which
     * is availalbe on cart.
     */
    promotion_type?: string;
    /**
     * - Name of the promotion which is available on cart.
     */
    promotion_name?: string;
};
/** @returns {PromotionPaymentOffersResponse} */
declare function PromotionPaymentOffersResponse(): PromotionPaymentOffersResponse;
type PromotionPaymentOffersResponse = {
    /**
     * - Success flag of get payment offers API response.
     */
    success?: boolean;
    /**
     * - List of promotions data
     * which are applicable on cart/product.
     */
    promotions?: PromotionPaymentOffer[];
};
/** @returns {OperationErrorResponse} */
declare function OperationErrorResponse(): OperationErrorResponse;
type OperationErrorResponse = {
    /**
     * - Message of get payment offer API response.
     */
    message?: string;
    /**
     * - Success flag of get payment offer API response.
     */
    success?: boolean;
};
/** @returns {LadderPrice} */
declare function LadderPrice(): LadderPrice;
type LadderPrice = {
    /**
     * - Currency symbol for currency of ladder
     * price product.
     */
    currency_symbol?: string;
    /**
     * - Discounted per unit price for current offer object.
     */
    offer_price?: number;
    /**
     * - Currency code for all amounts.
     */
    currency_code?: string;
    /**
     * - Current per unit price of product after
     * existing deductions.
     */
    effective?: number;
    /**
     * - Original price of product.
     */
    marked?: number;
};
/** @returns {LadderOfferItem} */
declare function LadderOfferItem(): LadderOfferItem;
type LadderOfferItem = {
    price?: LadderPrice;
    /**
     * - Percentage value of discount.
     */
    margin?: number;
    /**
     * - Minimum quantity upto which offer is
     * applicable. If not present that offer is applicable on all quantities.
     */
    max_quantity?: number;
    /**
     * - Minimum quantity from which offer is applicable.
     */
    min_quantity?: number;
    /**
     * - Offer type of the ladder promotion.
     */
    type?: string;
};
/** @returns {LadderPriceOffer} */
declare function LadderPriceOffer(): LadderPriceOffer;
type LadderPriceOffer = {
    /**
     * - ID of the promotion.
     */
    id?: string;
    /**
     * - Buy rules of ladder price promotion
     * applicable on product.
     */
    buy_rules?: any;
    /**
     * - If this ladder offer is to be calculated
     * on MRP or ESP price.
     */
    calculate_on?: string;
    /**
     * - Offer title of ladder price promotion
     * applicable on product.
     */
    offer_text?: string;
    /**
     * - Group of ladder price promotion
     * applicable on product.
     */
    promotion_group?: string;
    /**
     * - Datetime ISO String for promotion end date.
     */
    valid_till?: string;
    /**
     * - Discount rules of ladder price
     * promotion applicable on product.
     */
    discount_rules?: any[];
    /**
     * - Offer prices for ladder price
     * promotion applicable on product.
     */
    offer_prices?: LadderOfferItem[];
    /**
     * - Details of free gift items list.
     */
    free_gift_items?: FreeGiftItems[];
    /**
     * - Offer details including T&C of ladder
     * price promotion applicable on product.
     */
    description?: string;
};
/** @returns {CurrencyInfo} */
declare function CurrencyInfo(): CurrencyInfo;
type CurrencyInfo = {
    /**
     * - Currency code of ladder price promotion.
     */
    code?: string;
    /**
     * - Currency symbol for currency of ladder price product.
     */
    symbol?: string;
};
/** @returns {LadderPriceOffers} */
declare function LadderPriceOffers(): LadderPriceOffers;
type LadderPriceOffers = {
    /**
     * - Available ladder
     * promotions offers list.
     */
    available_offers?: LadderPriceOffer[];
    currency?: CurrencyInfo;
};
/** @returns {PaymentMeta} */
declare function PaymentMeta(): PaymentMeta;
type PaymentMeta = {
    /**
     * - Merchant code of the payment mode
     * selected to do the payment.
     */
    merchant_code?: string;
    /**
     * - Type of card if payment mode is card to do the payment.
     */
    type?: string;
    /**
     * - Payment gateway used to do the payment.
     */
    payment_gateway?: string;
    /**
     * - Payment identifier of the payment
     * mode selected to do the payment.
     */
    payment_identifier?: string;
};
/** @returns {PaymentMethod} */
declare function PaymentMethod(): PaymentMethod;
type PaymentMethod = {
    payment_meta: PaymentMeta;
    /**
     * - Payment mode of payment method used to make payment.
     */
    mode: string;
    /**
     * - Payment name of payment method used to make payment.
     */
    payment?: string;
    /**
     * - Amount of the payment mode to be paid.
     */
    amount?: number;
    /**
     * - Name of the payment mode used to make payment.
     */
    name?: string;
    /**
     * - Payment extra identifier for
     * the payment mode to do the payment.
     */
    payment_extra_identifiers?: any;
};
/** @returns {CartCheckoutDetailV2Request} */
declare function CartCheckoutDetailV2Request(): CartCheckoutDetailV2Request;
type CartCheckoutDetailV2Request = {
    /**
     * - Custom meta data to be added in order.
     */
    custom_meta?: any;
    /**
     * - Customer details to be added in order.
     */
    customer_details?: any;
    /**
     * - Merchant code of the payment mode
     * selected to do the payment.
     */
    merchant_code?: string;
    /**
     * - Cart id of the user cart.
     */
    cart_id?: string;
    /**
     * - Cart id of the user cart.
     */
    id?: string;
    /**
     * - Payment auto confirm flag if
     * payment need not to be collected from user.
     */
    payment_auto_confirm?: boolean;
    /**
     * - Payment methods list used to
     * make the payment.
     */
    payment_methods: PaymentMethod[];
    /**
     * - Payment mode of the payment selected to do
     * the payment.
     */
    payment_mode: string;
    /**
     * - Aggregator of payment mode to do the payment.
     */
    aggregator?: string;
    /**
     * - Address id of the user where the order to
     * be delivered.
     */
    address_id?: string;
    /**
     * - Callback url after payment received/failed.
     */
    callback_url?: string;
    /**
     * - Delivery address data which includes
     * customer address, customer phone, customer email, customer pincode,
     * customer landmark and customer name.
     */
    delivery_address?: any;
    staff?: StaffCheckout;
    /**
     * - Order type of the order being placed like
     * pickAtStore or HomeDelivery.
     */
    order_type?: string;
    /**
     * - Ordering store id of the store from
     * which the order is getting placed.
     */
    ordering_store?: number;
    /**
     * - Extra meta to be added while checkout in order.
     */
    extra_meta?: any;
    /**
     * - Payment identifier of the payment
     * mode selected to do the payment.
     */
    payment_identifier?: string;
    /**
     * - Billing address json which includes
     * customer address, customer phone, customer email, customer pincode,
     * customer landmark and customer name.
     */
    billing_address?: any;
    /**
     * - Payment params which includes payment
     * identifier and merchant code.
     */
    payment_params?: any;
    /**
     * - Billing address id selected by user
     * on which shipment bill to be generated.
     */
    billing_address_id?: string;
    /**
     * - Meta data sent while checkout v2.
     */
    meta?: any;
    /**
     * - Issuer Identification Number' number of card if
     * payment mode is card to do the payment.
     */
    iin?: string;
    /**
     * - Network of card if payment mode is card to do
     * the payment.
     */
    network?: string;
    /**
     * - Type of cart if payment mode is card to do the payment.
     */
    type?: string;
    /**
     * - Saved card id if payment mode is card to do the payment.
     */
    card_id?: string;
};
