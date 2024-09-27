const Joi = require("joi");

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

class CartApplicationModel {
  /** @returns {BuyRules} */
  static BuyRules() {
    return Joi.object({
      item_criteria: Joi.any(),
      cart_conditions: Joi.any(),
    });
  }

  /** @returns {DiscountRulesApp} */
  static DiscountRulesApp() {
    return Joi.object({
      matched_buy_rules: Joi.array().items(Joi.string().allow("")),
      raw_offer: Joi.any(),
      offer: Joi.any(),
      item_criteria: Joi.any(),
    });
  }

  /** @returns {Ownership} */
  static Ownership() {
    return Joi.object({
      payable_category: Joi.string().allow(""),
      payable_by: Joi.string().allow(""),
    });
  }

  /** @returns {AppliedFreeArticles} */
  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: CartApplicationModel.FreeGiftItems(),
      parent_item_identifier: Joi.string().allow(""),
      quantity: Joi.number(),
      article_id: Joi.string().allow(""),
    });
  }

  /** @returns {AppliedPromotion} */
  static AppliedPromotion() {
    return Joi.object({
      promo_id: Joi.string().allow(""),
      buy_rules: Joi.array().items(CartApplicationModel.BuyRules()),
      offer_text: Joi.string().allow(""),
      promotion_group: Joi.string().allow(""),
      mrp_promotion: Joi.boolean(),
      promotion_name: Joi.string().allow(""),
      amount: Joi.number(),
      discount_rules: Joi.array().items(
        CartApplicationModel.DiscountRulesApp()
      ),
      ownership: CartApplicationModel.Ownership(),
      article_quantity: Joi.number(),
      applied_free_articles: Joi.array().items(
        CartApplicationModel.AppliedFreeArticles()
      ),
      promotion_type: Joi.string().allow(""),
      meta: Joi.any(),
      code: Joi.string().allow("").allow(null),
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

  /** @returns {PromiseTimestamp} */
  static PromiseTimestamp() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
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
      currency_symbol: Joi.string().allow(""),
      marked: Joi.number(),
      currency_code: Joi.string().allow(""),
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
      name: Joi.string().allow(""),
    });
  }

  /** @returns {StoreInfo} */
  static StoreInfo() {
    return Joi.object({
      store_code: Joi.string().allow(""),
      uid: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ProductArticle} */
  static ProductArticle() {
    return Joi.object({
      price: CartApplicationModel.ArticlePriceInfo(),
      product_group_tags: Joi.array().items(Joi.string().allow("")),
      extra_meta: Joi.any(),
      quantity: Joi.number(),
      _custom_json: Joi.any(),
      meta: Joi.any(),
      size: Joi.string().allow(""),
      mto_quantity: Joi.number(),
      seller: CartApplicationModel.BaseInfo(),
      seller_identifier: Joi.string().allow(""),
      parent_item_identifiers: Joi.any(),
      identifier: Joi.any(),
      store: CartApplicationModel.StoreInfo(),
      cart_item_meta: Joi.any(),
      uid: Joi.string().allow(""),
      gift_card: Joi.any(),
      is_gift_visible: Joi.boolean(),
      type: Joi.string().allow(""),
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
      currency_symbol: Joi.string().allow(""),
      selling: Joi.number(),
      currency_code: Joi.string().allow(""),
      add_on: Joi.number(),
      effective: Joi.number(),
      marked: Joi.number(),
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
      _custom_json: Joi.any(),
      brand: CartApplicationModel.BaseInfo(),
      action: CartApplicationModel.ProductAction(),
      teaser_tag: CartApplicationModel.Tags(),
      slug: Joi.string().allow(""),
      images: Joi.array().items(CartApplicationModel.ProductImage()),
      uid: Joi.number(),
      name: Joi.string().allow(""),
      item_code: Joi.string().allow("").allow(null),
      categories: Joi.array().items(CartApplicationModel.CategoryInfo()),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      attributes: Joi.any(),
    });
  }

  /** @returns {CouponDetails} */
  static CouponDetails() {
    return Joi.object({
      discount_single_quantity: Joi.number(),
      code: Joi.string().allow(""),
      discount_total_quantity: Joi.number(),
    });
  }

  /** @returns {CartProductInfo} */
  static CartProductInfo() {
    return Joi.object({
      article: CartApplicationModel.ProductArticle(),
      moq: Joi.any(),
      identifiers: CartApplicationModel.CartProductIdentifer().required(),
      promo_meta: CartApplicationModel.PromoMeta(),
      price: CartApplicationModel.ProductPriceInfo(),
      quantity: Joi.number(),
      charges: Joi.array().items(CartApplicationModel.Charges()),
      discount: Joi.string().allow(""),
      availability: CartApplicationModel.ProductAvailability(),
      delivery_promise: CartApplicationModel.ShipmentPromise(),
      product: CartApplicationModel.CartProduct(),
      product_ean_id: Joi.string().allow(""),
      bulk_offer: Joi.any(),
      parent_item_identifiers: Joi.any(),
      coupon: CartApplicationModel.CouponDetails(),
      custom_order: Joi.any(),
      coupon_message: Joi.string().allow(""),
      key: Joi.string().allow(""),
      message: Joi.string().allow(""),
      is_set: Joi.boolean(),
      price_per_unit: CartApplicationModel.ProductPricePerUnitInfo(),
      promotions_applied: Joi.array().items(
        CartApplicationModel.AppliedPromotion()
      ),
    });
  }

  /** @returns {DisplayBreakup} */
  static DisplayBreakup() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),
      key: Joi.string().allow(""),
      display: Joi.string().allow(""),
      message: Joi.array().items(Joi.string().allow("")),
      currency_code: Joi.string().allow(""),
      value: Joi.number(),
      preset: Joi.number(),
    });
  }

  /** @returns {RawBreakup} */
  static RawBreakup() {
    return Joi.object({
      vog: Joi.number(),
      subtotal: Joi.number(),
      fynd_cash: Joi.number(),
      discount: Joi.number(),
      convenience_fee: Joi.number(),
      delivery_charge: Joi.number(),
      gst_charges: Joi.number(),
      mrp_total: Joi.number(),
      mop_total: Joi.number(),
      total_charge: Joi.number(),
      coupon: Joi.number(),
      total: Joi.number(),
      gift_card: Joi.number(),
      you_saved: Joi.number(),
      cod_charge: Joi.number(),
    });
  }

  /** @returns {CouponBreakup} */
  static CouponBreakup() {
    return Joi.object({
      coupon_value: Joi.number(),
      title: Joi.string().allow("").allow(null),
      sub_title: Joi.string().allow("").allow(null),
      minimum_cart_value: Joi.number(),
      message: Joi.string().allow(""),
      coupon_type: Joi.string().allow("").allow(null),
      uid: Joi.string().allow(""),
      value: Joi.number(),
      max_discount_value: Joi.number(),
      is_applied: Joi.boolean(),
      description: Joi.string().allow("").allow(null),
      code: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {LoyaltyPoints} */
  static LoyaltyPoints() {
    return Joi.object({
      total: Joi.number(),
      description: Joi.string().allow(""),
      applicable: Joi.number(),
      is_applied: Joi.boolean(),
    });
  }

  /** @returns {CartBreakup} */
  static CartBreakup() {
    return Joi.object({
      display: Joi.array().items(CartApplicationModel.DisplayBreakup()),
      raw: CartApplicationModel.RawBreakup(),
      coupon: CartApplicationModel.CouponBreakup(),
      loyalty_points: CartApplicationModel.LoyaltyPoints(),
    });
  }

  /** @returns {CartCurrency} */
  static CartCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
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
      coupon_id: Joi.string().allow(""),
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

  /** @returns {CartDetailResponse} */
  static CartDetailResponse() {
    return Joi.object({
      cart_id: Joi.number(),
      uid: Joi.string().allow(""),
      applied_promo_details: Joi.array().items(
        CartApplicationModel.AppliedPromotion()
      ),
      checkout_mode: Joi.string().allow(""),
      pan_no: Joi.string().allow(""),
      is_valid: Joi.boolean(),
      id: Joi.string().allow(""),
      payment_selection_lock: CartApplicationModel.PaymentSelectionLock(),
      delivery_promise: CartApplicationModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartApplicationModel.CartProductInfo()),
      delivery_charge_info: Joi.string().allow(""),
      common_config: CartApplicationModel.CartCommonConfig(),
      coupon: CartApplicationModel.CartDetailCoupon(),
      message: Joi.string().allow(""),
      notification: Joi.any(),
      staff_user_id: Joi.string().allow(""),
      success: Joi.boolean(),
      gstin: Joi.string().allow(""),
      restrict_checkout: Joi.boolean(),
      last_modified: Joi.string().allow(""),
      breakup_values: CartApplicationModel.CartBreakup(),
      currency: CartApplicationModel.CartCurrency(),
      coupon_text: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      pan_config: Joi.any(),
      custom_cart_meta: Joi.any(),
    });
  }

  /** @returns {AddProductCart} */
  static AddProductCart() {
    return Joi.object({
      article_assignment: Joi.any(),
      product_group_tags: Joi.array().items(Joi.string().allow("").allow(null)),
      extra_meta: Joi.any(),
      quantity: Joi.number(),
      _custom_json: Joi.any(),
      item_size: Joi.string().allow(""),
      store_id: Joi.number(),
      display: Joi.string().allow(""),
      article_id: Joi.string().allow(""),
      parent_item_identifiers: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.string().allow(""))
      ),
      seller_id: Joi.number(),
      pos: Joi.boolean(),
      item_id: Joi.number(),
      meta: Joi.any(),
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
      message: Joi.string().allow(""),
      partial: Joi.boolean(),
      cart: CartApplicationModel.CartDetailResponse(),
      success: Joi.boolean(),
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

  /** @returns {PageCoupon} */
  static PageCoupon() {
    return Joi.object({
      total_item_count: Joi.number(),
      has_next: Joi.boolean(),
      total: Joi.number(),
      current: Joi.number(),
      has_previous: Joi.boolean(),
    });
  }

  /** @returns {Coupon} */
  static Coupon() {
    return Joi.object({
      coupon_amount: Joi.number(),
      coupon_value: Joi.number(),
      title: Joi.string().allow(""),
      minimum_cart_value: Joi.number(),
      sub_title: Joi.string().allow(""),
      expires_on: Joi.string().allow(""),
      message: Joi.string().allow(""),
      coupon_type: Joi.string().allow("").allow(null),
      max_discount_value: Joi.number(),
      coupon_code: Joi.string().allow(""),
      is_applicable: Joi.boolean(),
      description: Joi.string().allow("").allow(null),
      is_applied: Joi.boolean(),
      start_date: Joi.string().allow("").allow(null),
      end_date: Joi.string().allow("").allow(null),
      coupon_applicable_message: Joi.string().allow(""),
      offer_text: Joi.string().allow(""),
      is_bank_offer: Joi.boolean(),
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
      country_iso_code: Joi.string().allow(""),
      area: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      address: Joi.string().allow(""),
      area_code_slug: Joi.string().allow(""),
      geo_location: CartApplicationModel.GeoLocation(),
      id: Joi.string().allow(""),
      _custom_json: Joi.any(),
      city: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      created_by_user_id: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      google_map_point: Joi.any(),
      is_active: Joi.boolean(),
      tags: Joi.array().items(Joi.string().allow("")),
      country_code: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      country: Joi.string().allow(""),
      is_default_address: Joi.boolean(),
      area_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      state: Joi.string().allow(""),
      meta: Joi.any(),
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
    });
  }

  /** @returns {UpdateAddressResponse} */
  static UpdateAddressResponse() {
    return Joi.object({
      is_updated: Joi.boolean(),
      id: Joi.string().allow(""),
      success: Joi.boolean(),
      is_default_address: Joi.boolean(),
    });
  }

  /** @returns {DeleteAddressResponse} */
  static DeleteAddressResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      is_deleted: Joi.boolean(),
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
      discount: Joi.number(),
      next_validation_required: Joi.boolean().allow(null),
      valid: Joi.boolean(),
      display_message_en: Joi.string().allow("").allow(null),
      code: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentCouponValidate} */
  static PaymentCouponValidate() {
    return Joi.object({
      message: Joi.string().allow(""),
      coupon_validity: CartApplicationModel.CouponValidity(),
      success: Joi.boolean().required(),
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
    });
  }

  /** @returns {CartShipmentsResponse} */
  static CartShipmentsResponse() {
    return Joi.object({
      delivery_charge_info: Joi.string().allow(""),
      checkout_mode: Joi.string().allow(""),
      message: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      restrict_checkout: Joi.boolean(),
      last_modified: Joi.string().allow(""),
      cart_id: Joi.number(),
      is_valid: Joi.boolean(),
      breakup_values: CartApplicationModel.CartBreakup(),
      currency: CartApplicationModel.CartCurrency(),
      id: Joi.string().allow(""),
      shipments: Joi.array().items(CartApplicationModel.ShipmentResponse()),
      payment_selection_lock: CartApplicationModel.PaymentSelectionLock(),
      coupon_text: Joi.string().allow(""),
      delivery_promise: CartApplicationModel.ShipmentPromise(),
      error: Joi.boolean(),
      comment: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      uid: Joi.string().allow(""),
      custom_cart_meta: Joi.any(),
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

  /** @returns {CheckCart} */
  static CheckCart() {
    return Joi.object({
      checkout_mode: Joi.string().allow(""),
      user_type: Joi.string().allow(""),
      cod_message: Joi.string().allow(""),
      cart_id: Joi.number(),
      is_valid: Joi.boolean(),
      delivery_charges: Joi.number(),
      id: Joi.string().allow(""),
      payment_selection_lock: CartApplicationModel.PaymentSelectionLock(),
      error_message: Joi.string().allow(""),
      delivery_promise: CartApplicationModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartApplicationModel.CartProductInfo()),
      uid: Joi.string().allow(""),
      delivery_charge_order_value: Joi.number(),
      delivery_charge_info: Joi.string().allow(""),
      cod_available: Joi.boolean(),
      success: Joi.boolean(),
      store_code: Joi.string().allow(""),
      message: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      restrict_checkout: Joi.boolean(),
      last_modified: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      breakup_values: CartApplicationModel.CartBreakup(),
      currency: CartApplicationModel.CartCurrency(),
      store_emps: Joi.array().items(Joi.any()),
      coupon_text: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      cod_charges: Joi.number(),
      custom_cart_meta: Joi.any(),
    });
  }

  /** @returns {CartCheckoutResponse} */
  static CartCheckoutResponse() {
    return Joi.object({
      payment_confirm_url: Joi.string().allow(""),
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
      delivery_slots: Joi.any(),
      gift_details: CartApplicationModel.ArticleGiftDetail(),
      pick_up_customer_details: Joi.any(),
      checkout_mode: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      custom_cart_meta: Joi.any(),
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
      checkout_mode: Joi.string().allow(""),
      cart_id: Joi.number(),
      is_valid: Joi.boolean(),
      id: Joi.string().allow(""),
      payment_selection_lock: CartApplicationModel.PaymentSelectionLock(),
      delivery_promise: CartApplicationModel.ShipmentPromise(),
      comment: Joi.string().allow(""),
      items: Joi.array().items(CartApplicationModel.CartProductInfo()),
      uid: Joi.string().allow(""),
      delivery_charge_info: Joi.string().allow(""),
      message: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      shared_cart_details: CartApplicationModel.SharedCartDetails(),
      restrict_checkout: Joi.boolean(),
      last_modified: Joi.string().allow(""),
      breakup_values: CartApplicationModel.CartBreakup(),
      currency: CartApplicationModel.CartCurrency(),
      coupon_text: Joi.string().allow(""),
      buy_now: Joi.boolean(),
      custom_cart_meta: Joi.any(),
    });
  }

  /** @returns {SharedCartResponse} */
  static SharedCartResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
      cart: CartApplicationModel.SharedCart(),
    });
  }

  /** @returns {PriceMinMax} */
  static PriceMinMax() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {ItemPriceDetails} */
  static ItemPriceDetails() {
    return Joi.object({
      marked: CartApplicationModel.PriceMinMax(),
      effective: CartApplicationModel.PriceMinMax(),
      currency: Joi.string().allow(""),
    });
  }

  /** @returns {FreeGiftItems} */
  static FreeGiftItems() {
    return Joi.object({
      item_slug: Joi.string().allow(""),
      item_name: Joi.string().allow(""),
      item_price_details: CartApplicationModel.ItemPriceDetails(),
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
      promotion_type: Joi.string().allow(""),
      promotion_name: Joi.string().allow(""),
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

  /** @returns {PromotionPaymentOffer} */
  static PromotionPaymentOffer() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      buy_rules: Joi.array().items(Joi.any()),
      calculate_on: Joi.string().allow(""),
      description: Joi.string().allow(""),
      discount_rules: Joi.array().items(Joi.any()),
      id: Joi.string().allow(""),
      offer_text: Joi.string().allow(""),
      promotion_group: Joi.string().allow(""),
      promotion_type: Joi.string().allow(""),
      promotion_name: Joi.string().allow(""),
    });
  }

  /** @returns {PromotionPaymentOffersResponse} */
  static PromotionPaymentOffersResponse() {
    return Joi.object({
      success: Joi.boolean(),
      promotions: Joi.array().items(
        CartApplicationModel.PromotionPaymentOffer()
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
}
module.exports = CartApplicationModel;
