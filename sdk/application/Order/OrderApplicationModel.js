const Joi = require("joi");

/**
 * @typedef OrderPage
 * @property {string} [type] - Specifies type of pagination. If it is 'cursor'
 *   based or 'number' based.
 * @property {number} [item_total] - Total number of items available across all
 *   pages. It provides a count of all the items that match the query criteria,
 *   regardless of pagination.
 * @property {number} [current] - Specifies the current page number. It helps in
 *   identifying the position within the paginated results.
 * @property {number} [size] - Represents the number of items on the current
 *   page. It indicates how many items are included in each page of the
 *   paginated response.
 * @property {boolean} [has_next] - Indicates whether there is a next page
 *   available. It is true if a next page exists and false if the current page
 *   is the last one.
 */

/**
 * @typedef UserInfo
 * @property {string} [first_name] - First name of the user.
 * @property {string} [gender] - Gender of the user.
 * @property {string} [name] - Full name of the user (including first and last names).
 * @property {string} [last_name] - Last name of the user.
 * @property {string} [mobile] - Mobile number of the user.
 * @property {string} [email] - Email address of the user.
 */

/**
 * @typedef BreakupValues
 * @property {number} [value] - The numerical value associated with the entity.
 * @property {string} [currency_symbol] - Symbol representing the currency used
 *   for the value.
 * @property {string} [name] - The official name of the entity.
 * @property {string} [display] - The name of the entity as it should be displayed.
 * @property {string} [currency_code] - The international currency code
 *   representing the currency used for the value. This specifies the currency
 *   code for all amounts. The currency_code field will hold a string value
 *   representing the code for the currency in which all monetary amounts are
 *   denominated. This code typically follows the ISO 4217 standard, which uses
 *   three-letter alphabetic codes to define different currencies around the
 *   world. For example, 'USD' for United States Dollar, 'INR' for Indian Rupees.
 */

/**
 * @typedef ShipmentPayment
 * @property {string} [mop] - Abbreviation or code for the payment mode.
 * @property {string} [payment_mode] - The specific payment mode used.
 * @property {string} [status] - The current status of the payment.
 * @property {string} [mode] - The payment mode.
 * @property {string} [logo] - URL of the logo representing the payment mode.
 * @property {string} [display_name] - The name to be displayed for the payment mode.
 */

/**
 * @typedef ShipmentPaymentInfo
 * @property {string} [mop] - Stands for "Mode of Payment". This is a short code
 *   (like "COD" for Cash On Delivery) that represents the payment method used.
 * @property {string} [payment_mode] - Information about the payment mode,
 *   indicates whether COD or PREPAID.
 * @property {string} [status] - Indicates the current status of the payment,
 *   Paid or Unpaid.
 * @property {string} [mode] - Information about the payment source. For eg, NB_ICICI.
 * @property {string} [logo] - A URL to an image representing the payment method.
 * @property {string} [display_name] - The name of the payment method as it
 *   should be displayed to the user.
 * @property {number} [amount] - Amount paid using this payment method.
 */

/**
 * @typedef ShipmentUserInfo
 * @property {string} [first_name] - The unique identifier of the store.
 * @property {string} [gender] - A code associated with the store.
 * @property {string} [name] - The name of the store.
 * @property {string} [last_name] - The name of the company associated with the store.
 * @property {string} [mobile] - The identifier of the company associated with the store.
 * @property {string} [email] - Email address of the user.
 */

/**
 * @typedef FulfillingStore
 * @property {number} [id] - The unique identifier of the store.
 * @property {string} [code] - A code associated with the store.
 * @property {string} [name] - The name of the store.
 * @property {string} [company_name] - The name of the company associated with the store.
 * @property {number} [company_id] - Schema for fulfilling store.
 */

/**
 * @typedef ChargeDistributionSchema
 * @property {string} type - This field defines the distribution type, e.g
 *   values('multi', 'single') multi: distribute the changes across all entity
 *   single: distribute the changes across to any one single entity
 * @property {string} logic - This field defines the distribution logic e.g
 *   values('apportion', 'equally') apportion: distribute charge amount based of
 *   weighted average amount of all the entity (like article with [10, 20] will
 *   get charge of 9 as [3, 6]) equally: distribute charge amount 'equally' to
 *   all the entity
 */

/**
 * @typedef ChargeDistributionLogic
 * @property {ChargeDistributionSchema} distribution
 * @property {string} distribution_level - This field defines the distribution
 *   level, e.g distribution level is (order, shipment, article)
 */

/**
 * @typedef ChargeAmountCurrency
 * @property {number} value - Charge currency value or amount
 * @property {string} currency - Charge currency code
 */

/**
 * @typedef ChargeAmount
 * @property {ChargeAmountCurrency} base_currency
 * @property {ChargeAmountCurrency} ordering_currency
 */

/**
 * @typedef PriceAdjustmentCharge
 * @property {string} [code] - Code defined for charge
 * @property {string} name - Display name for charge (charge is unique by the name)
 * @property {string} [type] - Type defined for charge
 * @property {ChargeAmount} amount
 * @property {ChargeDistributionLogic} distribution_logic
 */

/**
 * @typedef ShipmentStatus
 * @property {string} [value] - The internal or code value representing the
 *   shipment status.
 * @property {string} [title] - The title or display name representing the
 *   shipment status.
 * @property {string} [hex_code] - The hexadecimal color code associated with
 *   the shipment status. Each state of a shipment (like "processing",
 *   "cancelled", "delivered", etc.) is associated with a unique color,
 *   represented by a hex code. This color coding makes it visually intuitive
 *   for users to understand the status of their shipment at a glance.
 */

/**
 * @typedef Invoice
 * @property {string} [invoice_url] - URL providing access to the invoice.
 * @property {string} [updated_date] - The date and time when the invoice was
 *   last updated.
 * @property {string} [label_url] - URL providing access to the invoice label.
 */

/**
 * @typedef NestedTrackingDetails
 * @property {boolean} [is_passed] - Indicates whether the tracking event has
 *   passed or occurred.
 * @property {string} [time] - The time associated with the tracking event.
 * @property {boolean} [is_current] - Indicates whether the tracking event is
 *   the current or active status.
 * @property {string} [status] - The status of the tracking event.
 */

/**
 * @typedef TrackingDetails
 * @property {string} [value] - Current value or state of the process.
 * @property {boolean} [is_current] - Indicates whether the tracking event is
 *   the current or active status.
 * @property {boolean} [is_passed] - Indicates whether the tracking event has
 *   passed or occurred.
 * @property {string} [status] - The status of the tracking event.
 * @property {string} [time] - The time associated with the tracking event.
 * @property {string} [created_ts] - Timestamp when this status was created.
 * @property {NestedTrackingDetails[]} [tracking_details] - Nested tracking details.
 */

/**
 * @typedef TimeStampData
 * @property {string} [min] - The minimum timestamp value.
 * @property {string} [max] - The maximum timestamp value.
 */

/**
 * @typedef Promise
 * @property {boolean} [show_promise] - Indicates whether the promise details
 *   should be shown.
 * @property {TimeStampData} [timestamp]
 */

/**
 * @typedef ShipmentTotalDetails
 * @property {number} [pieces] - The total number of pieces included.
 * @property {number} [total_price] - The total price of the order or item.
 * @property {number} [sizes] - The number of different sizes included.
 */

/**
 * @typedef Prices
 * @property {number} [delivery_charge] - The delivery charge for the order.
 * @property {number} [coupon_value] - The value of the coupon applied.
 * @property {number} [brand_calculated_amount] - The amount calculated by the brand.
 * @property {number} [value_of_good] - The value of the goods before tax and
 *   other charges.
 * @property {number} [price_marked] - The original marked price of the item.
 * @property {number} [coupon_effective_discount] - The effective discount from coupons.
 * @property {string} [currency_symbol] - The symbol of the currency used.
 * @property {number} [discount] - The discount applied to the item.
 * @property {number} [gst_tax_percentage] - The GST tax percentage applied.
 * @property {number} [cod_charges] - The cash on delivery charges, if applicable.
 * @property {number} [amount_paid] - The total amount paid by the customer.
 * @property {boolean} [added_to_fynd_cash] - Indicates if the refund amount was
 *   added to Fynd Cash.
 * @property {number} [transfer_price] - The transfer price of the item.
 * @property {number} [cashback_applied] - The amount of cashback applied.
 * @property {number} [price_effective] - The effective price after all adjustments.
 * @property {number} [cashback] - The cashback amount earned.
 * @property {number} [refund_credit] - The amount credited for refund .
 * @property {number} [amount_paid_roundoff] - The rounded-off amount paid by
 *   the customer.
 * @property {number} [promotion_effective_discount] - The effective discount
 *   from promotions.
 * @property {number} [refund_amount] - The amount refunded to the customer.
 * @property {string} [currency_code] - This specifies the currency code for all
 *   amounts. The currency_code field will hold a string value representing the
 *   code for the currency in which all monetary amounts are denominated. This
 *   code typically follows the ISO 4217 standard, which uses three-letter
 *   alphabetic codes to define different currencies around the world. For
 *   example, 'USD' for United States Dollar, 'INR' for Indian Rupees.
 * @property {number} [fynd_credits] - The amount of Fynd credits used.
 * @property {number} [amount_to_be_collected] - The total amount that needs to
 *   be collected from the customer.
 */

/**
 * @typedef ItemBrand
 * @property {string} [logo] - The URL of the brand's logo.
 * @property {string} [name] - The name of the brand.
 */

/**
 * @typedef Item
 * @property {string[]} [image] - An array of URLs pointing to images of the item.
 * @property {string[]} [l1_categories] - An array of level 1 categories the item belongs.
 * @property {ItemBrand} [brand]
 * @property {string} [seller_identifier] - The identifier for the seller .
 * @property {string} [code] - The code or SKU of the item.
 * @property {number} [id] - The unique identifier of the item.
 * @property {string} [name] - The name of the item.
 * @property {string} [l3_category_name] - This key specifies the name of the
 *   third-level category under which the product is listed, offering a more
 *   detailed classification within the e-commerce platform's hierarchy.
 * @property {string} [slug_key] - A unique key or identifier for the item slug.
 * @property {string[]} [l2_categories] - An array of level 2 categories the
 *   item belongs to.
 * @property {string} [size] - The size of the item.
 * @property {Object} [attributes] - An object containing various attributes of the item.
 */

/**
 * @typedef AppliedFreeArticles
 * @property {string} [article_id] - The unique identifier for the article.
 * @property {Object} [free_gift_item_details] - An object containing details
 *   about the free gift item.
 * @property {string} [parent_item_identifier] - The identifier for the parent
 *   item to which this free article is related.
 * @property {number} [quantity] - The quantity of the free article.
 */

/**
 * @typedef AppliedPromos
 * @property {boolean} [mrp_promotion] - Indicates if the promotion is applied to the MRP.
 * @property {string} [promotion_name] - The name of the promotion .
 * @property {number} [article_quantity] - The quantity of articles required to
 *   qualify for the promotion.
 * @property {string} [promo_id] - The unique identifier for the promotion.
 * @property {number} [amount] - The discount amount provided by the promotion.
 * @property {string} [promotion_type] - Specifies the type of discount or deal
 *   applied to the current promotion, defining how the promotion modifies the
 *   price or adds value to the purchase. Each type represents a different
 *   promotional strategy - percentage- Discount by a percentage of the original
 *   price. - amount- Discount by a specific amount off the original price. -
 *   fixed_price- Sets the price to a specific fixed amount. - bogo- Buy One Get
 *   One or at a discount. - contract_price- Special pricing based on a contract
 *   or agreement. - shipping_price- Discount or deal related to the shipping
 *   cost. - ladder_price- Price changes based on quantity purchased. -
 *   bundle_price_percentage- Discount on a bundle purchase by a percentage. -
 *   bundle_price_amount- Discount on a bundle purchase by a specific amount. -
 *   bundle_amount_percentage- A percentage of the purchase amount is applied as
 *   a discount when buying in a bundle. - custom- A custom promotion not
 *   covered by other types. - free_gift_items- Free gift items are included
 *   with the purchase. - free_non_sellable_items- Free items that are not for
 *   sale are included with the purchase.
 * @property {AppliedFreeArticles[]} [applied_free_articles] - An array
 *   containing details of free articles applied under the promotion.
 */

/**
 * @typedef Identifiers
 * @property {string} [ean] - The European Article Number (EAN) of the item.
 * @property {string} [sku_code] - The Stock Keeping Unit (SKU) code of the item
 *   - uniquely identifies each distinct product. SKUs are used to track
 *   inventory levels, facilitate accurate stocktaking, and streamline order
 *   fulfillment processes. This code is essential for inventory management,
 *   allowing for the differentiation between products based on attributes such
 *   as price, color, and size.
 */

/**
 * @typedef FinancialBreakup
 * @property {number} [coupon_value] - The value of the coupon applied.
 * @property {number} [delivery_charge] - The delivery charge for the order.
 * @property {number} [brand_calculated_amount] - The amount calculated by the brand.
 * @property {number} [value_of_good] - The value of the goods before tax and
 *   other charges.
 * @property {number} [price_marked] - The original marked price of the item.
 * @property {number} [coupon_effective_discount] - The effective discount from coupons.
 * @property {string} [hsn_code] - The HSN Code (Harmonized System of
 *   Nomenclature Code) is an internationally standardized system for
 *   classifying goods. It is used in trade and commerce to identify products
 *   and services uniformly across different countries and industries. The
 *   system was developed by the World Customs Organization (WCO) and is widely
 *   used in customs processes and tax systems.
 * @property {number} [discount] - The discount applied to the item.
 * @property {number} [gst_tax_percentage] - The GST tax percentage applied .
 * @property {number} [cod_charges] - The cash on delivery charges, if applicable.
 * @property {number} [amount_paid] - The total amount paid by the customer.
 * @property {boolean} [added_to_fynd_cash] - Indicates if the refund amount was
 *   added to Fynd Cash.
 * @property {string} [size] - The size of the item .
 * @property {number} [transfer_price] - The transfer price of the item.
 * @property {number} [cashback_applied] - The amount of cashback applied.
 * @property {number} [price_effective] - The effective price after all adjustments.
 * @property {number} [cashback] - The cashback amount earned.
 * @property {number} [refund_credit] - The amount credited for refund .
 * @property {number} [amount_paid_roundoff] - The rounded-off amount paid by
 *   the customer.
 * @property {number} [total_units] - The total number of units purchased.
 * @property {Identifiers} [identifiers]
 * @property {string} [gst_tag] - The GST tag indicating the type of GST applied.
 * @property {string} [item_name] - The name of the item.
 * @property {number} [promotion_effective_discount] - The effective discount
 *   from promotions.
 * @property {number} [gst_fee] - The GST fee applied to the item.
 * @property {number} [refund_amount] - The amount refunded to the customer.
 * @property {number} [fynd_credits] - The amount of Fynd credits used.
 * @property {number} [amount_to_be_collected] - The total amount that needs to
 *   be collected from the customer.
 */

/**
 * @typedef CurrentStatus
 * @property {string} [updated_at] - The date and time when the status was last updated.
 * @property {string} [name] - The name or label indicating the current state or status.
 * @property {string} [status] - The current status of the bag.
 * @property {string} [journey_type] - It is a type being used to represent the
 *   journey of shipment through the performed status transition. Forward
 *   Journey: The forward journey encompasses all the stages of shipping,
 *   including order placement, packing, dispatch, in-transit updates, and
 *   delivery. Return Journey: Contrary to the forward journey, the return
 *   journey involves the process of sending items back from the customer to the
 *   original sender or a designated return facility.
 */

/**
 * @typedef Bags
 * @property {string} [delivery_date] - The date and time when the item is
 *   expected to be delivered .
 * @property {number} [line_number] - The line number of the item in the order.
 * @property {string} [currency_symbol] - The symbol of the currency used.
 * @property {Item} [item]
 * @property {AppliedPromos[]} [applied_promos] - An array containing
 *   information about applied promotions.
 * @property {number} [quantity] - The quantity of the item.
 * @property {Prices} [prices]
 * @property {boolean} [can_cancel] - Indicates if the item can be canceled.
 * @property {boolean} [can_return] - Indicates if the item can be returned.
 * @property {number} [id] - The unique identifier for the order item.
 * @property {string} [returnable_date] - The last date and time by which the
 *   item can be returned.
 * @property {FinancialBreakup[]} [financial_breakup] - An array containing
 *   financial details of the item.
 * @property {Object} [parent_promo_bags] - An object containing details of
 *   parent promotional bags.
 * @property {Object} [meta] - It contains the additional properties related to
 *   shipment status transition like Kafka_emission_status, user_name, etc.
 *   Additionally it is dynamic.
 * @property {string} [currency_code] - This specifies the currency code for all
 *   amounts. The currency_code field will hold a string value representing the
 *   code for the currency in which all monetary amounts are denominated. This
 *   code typically follows the ISO 4217 standard, which uses three-letter
 *   alphabetic codes to define different currencies around the world. For
 *   example, 'USD' for United States Dollar, 'INR' for Indian Rupees.
 * @property {string} [seller_identifier] - The identifier for the seller.
 * @property {CurrentStatus} [current_status]
 * @property {Article} [article]
 * @property {PriceAdjustmentCharge[]} [charges]
 */

/**
 * @typedef FulfillingCompany
 * @property {number} [id] - The unique identifier for the fulfilling company.
 * @property {string} [name] - The name of the fulfilling company.
 */

/**
 * @typedef Article
 * @property {string[]} [tags] - An array of tags associated with the article.
 */

/**
 * @typedef Address
 * @property {string} [pincode] - The postal code of the address.
 * @property {string} [phone] - The phone number of the person associated with
 *   the address.
 * @property {number} [latitude] - The latitude coordinate.
 * @property {string} [address2] - The secondary line of the address.
 * @property {string} [landmark] - A nearby landmark.
 * @property {string} [area] - The area or locality.
 * @property {string} [city] - The city of the address.
 * @property {string} [address] - The full address.
 * @property {string} [address_type] - The type of the address (e.g., home, office).
 * @property {number} [longitude] - The longitude coordinate.
 * @property {string} [country_iso_code] - The ISO code for the country.
 * @property {string} [state] - The state of the address.
 * @property {string} [created_at] - The date and time when the address was created.
 * @property {string} [address1] - The primary line of the address.
 * @property {string} [display_address] - The formatted display address,
 *   typically used for printing or displaying in user interfaces.
 * @property {string} [name] - The name of the person associated with the address.
 * @property {string} [contact_person] - The name of the contact person.
 * @property {string} [address_category] - Category or classification of the
 *   address. The address_category field that includes "store", "delivery", and
 *   "billing" serves to classify addresses based on various business processes
 *
 *   - 'store': Identifies addresses associated with physical retail locations or
 *       warehouses which is essential for inventory management, order
 *       fulfillment, and facilitating in-store pickups or returns.
 *   - 'delivery': Identifies addresses where orders are shipped to customers which
 *       ensures successful delivery, enhancing customer satisfaction, and
 *       optimizing logistics operations.
 *   - 'billing': Identifies addresses used for billing and financial transactions
 *       which are essential for payment processing, invoice generation, and
 *       maintaining financial accuracy.
 *
 * @property {string} [email] - The email address.
 * @property {string} [country_phone_code] - The country phone code.
 * @property {string} [version] - The version of the address format.
 * @property {string} [updated_at] - The date and time when the address was last updated .
 * @property {string} [country] - The country of the address.
 */

/**
 * @typedef Shipments
 * @property {ShipmentPayment} [payment]
 * @property {ShipmentPaymentInfo[]} [payment_info] - Array of objects
 *   containing payment methods used for placing an order. Each object will
 *   provide information about corresponding payment method with relevant details.
 * @property {string} [order_type] - Defines the specific journey a shipment
 *   will follow based on the application's operational needs and customer
 *   preferences. This field categorizes orders into distinct types, each
 *   associated with a unique processing flow. For example:
 *
 *   - "HomeDelivery": The order undergoes all state transitions typical for a
 *       delivery, from processing the shipment to final delivery at the
 *       customer's address.
 *   - "PickAtStore": The order is prepared for pickup and moved to a state where it
 *       is ready to be handed over directly to the customer at the store. This
 *       type streamlines the process by bypassing traditional shipping stages
 *       and facilitating a quicker transition to the final handover stage.
 *
 * @property {string} [gstin_code] - A GST Number (Goods and Services Tax
 *   Identification Number, often abbreviated as GSTIN) is a unique identifier
 *   assigned to a business or individual registered under the Goods and
 *   Services Tax (GST) system in countries like India. The GST number is
 *   essential for businesses to comply with tax regulations and for the
 *   government to track tax payments and returns.
 * @property {boolean} [show_download_invoice] - Indicates if the download
 *   invoice option should be shown.
 * @property {boolean} [can_cancel] - Indicates if the shipment can be canceled.
 * @property {ShipmentUserInfo} [user_info]
 * @property {string} [shipment_id] - The unique identifier for the shipment.
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object[]} [custom_meta] - An object containing custom metadata for
 *   the shipment.
 * @property {ShipmentStatus} [shipment_status]
 * @property {string} [comment] - Any comments related to the shipment.
 * @property {Invoice} [invoice]
 * @property {boolean} [show_track_link] - Indicates if the track link should be shown.
 * @property {Object} [refund_details] - An object containing details of any refunds.
 * @property {BreakupValues[]} [breakup_values] - An array containing the
 *   breakup of various charges and discounts.
 * @property {Object} [can_break] - An object containing details about the
 *   breakability of the shipment.
 * @property {string} [traking_no] - The tracking number for the shipment.
 * @property {TrackingDetails[]} [tracking_details] - An array containing
 *   details of the tracking history of the shipment.
 * @property {Promise} [promise]
 * @property {number} [total_bags] - The total number of bags in the shipment.
 * @property {ShipmentTotalDetails} [total_details]
 * @property {Prices} [prices]
 * @property {string} [returnable_date] - The last date by which the item can be returned.
 * @property {string} [shipment_created_at] - The date and time when the
 *   shipment was created.
 * @property {string} [shipment_created_ts] - The timestamp when the shipment was created.
 * @property {Object} [size_info] - An object containing size information for
 *   the items in the shipment.
 * @property {Bags[]} [bags] - An array containing details about the individual
 *   bags in the shipment.
 * @property {string} [dp_name] - The name of the delivery partner.
 * @property {string} [awb_no] - The airway bill number for the shipment.
 * @property {boolean} [beneficiary_details] - Indicates if there are any
 *   beneficiary details.
 * @property {FulfillingCompany} [fulfilling_company]
 * @property {boolean} [can_return] - Indicates if the shipment can be returned.
 * @property {Address} [delivery_address]
 * @property {Address} [billing_address]
 * @property {string} [track_url] - The URL for tracking the shipment.
 * @property {string} [order_id] - The unique identifier for the order.
 * @property {string} [need_help_url] - The URL for customer support or help.
 * @property {Object} [return_meta] - An object containing metadata about the
 *   return process.
 * @property {string} [delivery_date] - The expected delivery date.
 * @property {OrderRequestSchema} [order]
 * @property {PriceAdjustmentCharge[]} [charges]
 */

/**
 * @typedef BagsForReorderArticleAssignment
 * @property {string} [strategy] - The strategy used for article assignment.
 * @property {string} [level] - The level at which the article assignment is made.
 */

/**
 * @typedef BagsForReorder
 * @property {string} [item_size] - The size of the item.
 * @property {number} [quantity] - The quantity of the item.
 * @property {number} [store_id] - The identifier for the store.
 * @property {BagsForReorderArticleAssignment} [article_assignment]
 * @property {number} [seller_id] - The identifier for the seller.
 * @property {number} [item_id] - The unique identifier for the item.
 */

/**
 * @typedef OrderSchema
 * @property {number} [total_shipments_in_order] - The total number of shipments
 *   in the order.
 * @property {string} [gstin_code] - A GST Number (Goods and Services Tax
 *   Identification Number, often abbreviated as GSTIN) is a unique identifier
 *   assigned to a business or individual registered under the Goods and
 *   Services Tax (GST) system in countries like India. The GST number is
 *   essential for businesses to comply with tax regulations and for the
 *   government to track tax payments and returns.
 * @property {UserInfo} [user_info]
 * @property {BreakupValues[]} [breakup_values] - An array containing the
 *   breakup of various charges and discounts.
 * @property {string} [order_created_time] - The date and time when the order was created.
 * @property {string} [order_created_ts] - The timestamp when the order was created.
 * @property {string} [order_id] - The unique identifier for the order.
 * @property {Shipments[]} [shipments] - An array containing details of
 *   individual shipments within the order.
 * @property {BagsForReorder[]} [bags_for_reorder] - Order details.
 * @property {PriceAdjustmentCharge[]} [charges] - An array containing details
 *   of bags available for reorder.
 * @property {Object} [meta] - An object containing additional metadata for the order.
 */

/**
 * @typedef OrderStatuses
 * @property {number} [value] - The value representing the selection.
 * @property {boolean} [is_selected] - Indicates whether this option is
 *   currently selected.
 * @property {string} [display] - The text to display .
 */

/**
 * @typedef OrderFilters
 * @property {OrderStatuses[]} [statuses] - An array containing the order statuses.
 */

/**
 * @typedef OrderList
 * @property {OrderPage} [page]
 * @property {OrderSchema[]} [items] - List of orders, each containing detailed
 *   information about individual orders and their respective shipments.
 * @property {OrderFilters} [filters]
 */

/**
 * @typedef ApefaceApiError
 * @property {string} [message] - Contains any message related to the operation.
 * @property {boolean} [success] - Indicates if the operation was successful.
 */

/**
 * @typedef OrderById
 * @property {OrderSchema} [order]
 */

/**
 * @typedef ShipmentById
 * @property {Shipments} [shipment]
 */

/**
 * @typedef ResponseGetInvoiceShipment
 * @property {string} presigned_type - Type of presigned URL.
 * @property {boolean} success - Indicates if the operation was successful .
 * @property {string} shipment_id - Identifier for the shipment.
 * @property {string} presigned_url - The presigned URL for accessing the
 *   shipment data, obtained from the response data.
 */

/**
 * @typedef Track
 * @property {string} [account_name] - The name of the account handling the shipment.
 * @property {string} [shipment_type] - The type of shipment.
 * @property {string} [status] - The current status of the shipment.
 * @property {string} [last_location_recieved_at] - The last known location of
 *   the shipment.
 * @property {string} [updated_time] - The timestamp of the last update.
 * @property {string} [updated_at] - The date and time when the shipment was last updated.
 * @property {string} [reason] - The reason or additional information about the shipment.
 * @property {string} [awb] - The Air Waybill (AWB) number for the shipment.
 */

/**
 * @typedef ShipmentTrack
 * @property {Track[]} [results] - A array containing tracking details.
 */

/**
 * @typedef CustomerDetailsResponseSchema
 * @property {string} [phone] - Customer's phone number.
 * @property {string} [shipment_id] - Unique identifier of the shipment.
 * @property {string} [name] - Customer's name.
 * @property {string} [order_id] - Unique identifier of the order.
 * @property {string} [country] - Country of the customer.
 */

/**
 * @typedef SendOtpToCustomerResponseSchema
 * @property {string} [request_id] - Unique identifier for the request.
 * @property {string} [message] - Message indicating the result of the request.
 * @property {boolean} [success] - Indicates whether the request was successful.
 * @property {number} [resend_timer] - Time in seconds before the OTP can be resent.
 */

/**
 * @typedef VerifyOtp
 * @property {string} [otp_code] - The OTP code provided by the user for verification.
 * @property {string} [request_id] - Unique identifier for the request.
 */

/**
 * @typedef VerifyOtpResponseSchema
 * @property {boolean} [success] - Indicates whether the request was successful.
 */

/**
 * @typedef BagReasonMeta
 * @property {boolean} [show_text_area] - Indicates whether to display a text
 *   box on the front end.
 */

/**
 * @typedef QuestionSet
 * @property {number} [id] - The unique identifier for the question.
 * @property {string} [display_name] - The text displayed for the question.
 */

/**
 * @typedef BagReasons
 * @property {string[]} [qc_type] - List of QC (Quality Control) types -- having
 *   return reason types indicating the stage at which QC is performed. -
 *   "Doorstep QC" refers to the quality control checks that occur at the
 *   customer's doorstep. This could be part of a delivery process where the
 *   product is inspected for any damages, defects, or discrepancies in the
 *   presence of the customer before the final handover. - "Pre QC" represents a
 *   proactive quality control approach where the customer plays an active role
 *   in the QC process before the product is collected for return or exchange.
 *   In this procedure, customers are required to upload photos of the product
 *   for a preliminary quality check by the operations team. Approval from this
 *   team is necessary before a delivery partner is dispatched to pick up the
 *   product. This innovative method ensures that the product meets return or
 *   exchange criteria, streamlining the process for both the customer and the
 *   operations team, and minimizing unnecessary logistics movements.
 * @property {number} [id] - The unique identifier.
 * @property {string} [display_name] - The text displayed.
 * @property {BagReasonMeta} [meta]
 * @property {QuestionSet[]} [question_set] - A list of questions for delivery partner.
 * @property {BagReasons[]} [reasons] - A list of reasons.
 */

/**
 * @typedef ShipmentBagReasons
 * @property {BagReasons[]} [reasons] - A list of shipment's bag reasons.
 * @property {boolean} [success] - Indicates if the operation was successful.
 * @property {number} [rule_id] - The unique identifier for the rule that is
 *   associated with the given reasons. This ID serves as a reference to the
 *   specific rule within the RMA system that governs or influences the reasons listed.
 */

/**
 * @typedef ShipmentReason
 * @property {number} [priority] - The priority level of the reason.
 * @property {boolean} [show_text_area] - A flag indicating whether to show a
 *   textbox on the frontend.
 * @property {number} [reason_id] - The unique identifier for the reason.
 * @property {string} [feedback_type] - The type of feedback.
 * @property {string} [reason_text] - The text describing the reason.
 * @property {string} [flow] - The process flow related to the reason.
 */

/**
 * @typedef ShipmentReasons
 * @property {ShipmentReason[]} [reasons] - A list of shipment reasons.
 */

/**
 * @typedef ProductsReasonsData
 * @property {number} [reason_id] - The unique identifier for the reason.
 * @property {string} [reason_text] - The text describing the reason.
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {number} [line_number] - The specific line item of bag.
 * @property {number} [quantity] - The quantity of the product.
 * @property {string} [identifier] - The unique identifier for the product.
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters] - Criteria applied to filter
 *   the products.
 */

/**
 * @typedef EntityReasonData
 * @property {number} [reason_id] - The unique identifier for the reason.
 * @property {string} [reason_text] - The text describing the reason.
 */

/**
 * @typedef EntitiesReasons
 * @property {EntityReasonData} [data]
 * @property {Object[]} [filters] - Criteria applied to filter the shipment.
 */

/**
 * @typedef ReasonsData
 * @property {ProductsReasons[]} [products] - Reasons data for bags.
 * @property {EntitiesReasons[]} [entities] - Reasons data for shipments.
 */

/**
 * @typedef Products
 * @property {number} [line_number] - The specific line item of bag.
 * @property {number} [quantity] - The quantity of the product.
 * @property {string} [identifier] - The unique identifier for the product.
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {number} [line_number] - Represents the specific line item within a
 *   bag, used to identify and reference a particular product in a list. This
 *   helps in pinpointing the exact item being updated or processed.
 * @property {string} [identifier] - A unique string that serves as the
 *   product’s identifier, such as a SKU, barcode, or another distinct code.
 *   This ensures the product is correctly identified and distinguished from
 *   other items in the system.
 * @property {number} [quantity] - The quantity of the product or item,
 *   specified as an integer. This indicates how many units of the product are
 *   being referenced or processed, such as the number of items in a bag or shipment.
 */

/**
 * @typedef ProductsDataUpdates
 * @property {Object} [data] - Information about the data to be updated.
 * @property {ProductsDataUpdatesFilters[]} [filters] - Criteria applied to
 *   filter the products.
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data] - Information about the data to be updated.
 * @property {Object[]} [filters] - Criteria applied to filter the shipments.
 */

/**
 * @typedef DataUpdates
 * @property {ProductsDataUpdates[]} [products] - Data updates for bags.
 * @property {EntitiesDataUpdates[]} [entities] - Data updates for shipments.
 */

/**
 * @typedef ShipmentsRequestSchema
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products] - Specific bag to be updated.
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier - The unique identifier for request which is
 *   the shipment_id.
 */

/**
 * @typedef StatuesRequestSchema
 * @property {ShipmentsRequestSchema[]} [shipments] - A list containing
 *   information about shipments.
 * @property {string} [exclude_bags_next_state] - State to be change for
 *   Remaining Bag/Products.
 * @property {string} [status] - The status to which the entity is to be transitioned.
 */

/**
 * @typedef OrderRequestSchema
 * @property {Object} [meta] - Metadata for the order.
 */

/**
 * @typedef UpdateShipmentStatusRequestSchema
 * @property {StatuesRequestSchema[]} [statuses] - An array containing different
 *   status details.
 * @property {boolean} [task] - Indicates whether the task is active or required.
 * @property {boolean} [lock_after_transition] - Indicates whether the status
 *   should be locked after the transition.
 * @property {boolean} [force_transition] - Indicates whether the transition
 *   should be forced.
 * @property {boolean} [unlock_before_transition] - Indicates whether the status
 *   should be unlocked before the transition.
 */

/**
 * @typedef StatusesBodyResponseSchema
 * @property {Object[]} [shipments] - List of shipments.
 */

/**
 * @typedef ShipmentApplicationStatusResponseSchema
 * @property {StatusesBodyResponseSchema[]} [statuses] - An array containing
 *   different status options of shipments.
 */

/**
 * @typedef ErrorResponseSchema
 * @property {string} [code] - The HTTP status code of the response.
 * @property {string} [message] - A message providing details about the response.
 * @property {number} [status] - An additional code providing more context about
 *   the response.
 * @property {string} [exception] - Details of any exception that occurred.
 * @property {string} [stack_trace] - The stack trace of any exception that occurred.
 */

class OrderApplicationModel {
  /** @returns {OrderPage} */
  static OrderPage() {
    return Joi.object({
      type: Joi.string().allow(""),
      item_total: Joi.number(),
      current: Joi.number(),
      size: Joi.number(),
      has_next: Joi.boolean(),
    });
  }

  /** @returns {UserInfo} */
  static UserInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      email: Joi.string().allow(""),
    });
  }

  /** @returns {BreakupValues} */
  static BreakupValues() {
    return Joi.object({
      value: Joi.number(),
      currency_symbol: Joi.string().allow(""),
      name: Joi.string().allow(""),
      display: Joi.string().allow(""),
      currency_code: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentPayment} */
  static ShipmentPayment() {
    return Joi.object({
      mop: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      status: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentPaymentInfo} */
  static ShipmentPaymentInfo() {
    return Joi.object({
      mop: Joi.string().allow(""),
      payment_mode: Joi.string().allow(""),
      status: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      amount: Joi.number(),
    });
  }

  /** @returns {ShipmentUserInfo} */
  static ShipmentUserInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      email: Joi.string().allow(""),
    });
  }

  /** @returns {FulfillingStore} */
  static FulfillingStore() {
    return Joi.object({
      id: Joi.number(),
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
      company_name: Joi.string().allow(""),
      company_id: Joi.number(),
    });
  }

  /** @returns {ChargeDistributionSchema} */
  static ChargeDistributionSchema() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      logic: Joi.string().allow("").required(),
    });
  }

  /** @returns {ChargeDistributionLogic} */
  static ChargeDistributionLogic() {
    return Joi.object({
      distribution: OrderApplicationModel.ChargeDistributionSchema().required(),
      distribution_level: Joi.string().allow("").required(),
    });
  }

  /** @returns {ChargeAmountCurrency} */
  static ChargeAmountCurrency() {
    return Joi.object({
      value: Joi.number().required(),
      currency: Joi.string().allow("").required(),
    });
  }

  /** @returns {ChargeAmount} */
  static ChargeAmount() {
    return Joi.object({
      base_currency: OrderApplicationModel.ChargeAmountCurrency().required(),
      ordering_currency: OrderApplicationModel.ChargeAmountCurrency().required(),
    });
  }

  /** @returns {PriceAdjustmentCharge} */
  static PriceAdjustmentCharge() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").required(),
      type: Joi.string().allow("").allow(null),
      amount: OrderApplicationModel.ChargeAmount().required(),
      distribution_logic: OrderApplicationModel.ChargeDistributionLogic().required(),
    });
  }

  /** @returns {ShipmentStatus} */
  static ShipmentStatus() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),
      title: Joi.string().allow(""),
      hex_code: Joi.string().allow(""),
    });
  }

  /** @returns {Invoice} */
  static Invoice() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),
      updated_date: Joi.string().allow(""),
      label_url: Joi.string().allow(""),
    });
  }

  /** @returns {NestedTrackingDetails} */
  static NestedTrackingDetails() {
    return Joi.object({
      is_passed: Joi.boolean(),
      time: Joi.string().allow(""),
      is_current: Joi.boolean(),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {TrackingDetails} */
  static TrackingDetails() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),
      is_current: Joi.boolean(),
      is_passed: Joi.boolean(),
      status: Joi.string().allow(""),
      time: Joi.string().allow(""),
      created_ts: Joi.string().allow(""),
      tracking_details: Joi.array().items(
        OrderApplicationModel.NestedTrackingDetails()
      ),
    });
  }

  /** @returns {TimeStampData} */
  static TimeStampData() {
    return Joi.object({
      min: Joi.string().allow(""),
      max: Joi.string().allow(""),
    });
  }

  /** @returns {Promise} */
  static Promise() {
    return Joi.object({
      show_promise: Joi.boolean(),
      timestamp: OrderApplicationModel.TimeStampData(),
    });
  }

  /** @returns {ShipmentTotalDetails} */
  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),
      total_price: Joi.number(),
      sizes: Joi.number(),
    });
  }

  /** @returns {Prices} */
  static Prices() {
    return Joi.object({
      delivery_charge: Joi.number(),
      coupon_value: Joi.number(),
      brand_calculated_amount: Joi.number(),
      value_of_good: Joi.number(),
      price_marked: Joi.number(),
      coupon_effective_discount: Joi.number(),
      currency_symbol: Joi.string().allow(""),
      discount: Joi.number(),
      gst_tax_percentage: Joi.number(),
      cod_charges: Joi.number(),
      amount_paid: Joi.number(),
      added_to_fynd_cash: Joi.boolean(),
      transfer_price: Joi.number(),
      cashback_applied: Joi.number(),
      price_effective: Joi.number(),
      cashback: Joi.number(),
      refund_credit: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      promotion_effective_discount: Joi.number(),
      refund_amount: Joi.number(),
      currency_code: Joi.string().allow(""),
      fynd_credits: Joi.number(),
      amount_to_be_collected: Joi.number(),
    });
  }

  /** @returns {ItemBrand} */
  static ItemBrand() {
    return Joi.object({
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Item} */
  static Item() {
    return Joi.object({
      image: Joi.array().items(Joi.string().allow("")),
      l1_categories: Joi.array().items(Joi.string().allow("")),
      brand: OrderApplicationModel.ItemBrand(),
      seller_identifier: Joi.string().allow(""),
      code: Joi.string().allow(""),
      id: Joi.number(),
      name: Joi.string().allow(""),
      l3_category_name: Joi.string().allow(""),
      slug_key: Joi.string().allow(""),
      l2_categories: Joi.array().items(Joi.string().allow("")),
      size: Joi.string().allow(""),
      attributes: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {AppliedFreeArticles} */
  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),
      free_gift_item_details: Joi.object().pattern(/\S/, Joi.any()),
      parent_item_identifier: Joi.string().allow(""),
      quantity: Joi.number(),
    });
  }

  /** @returns {AppliedPromos} */
  static AppliedPromos() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),
      promotion_name: Joi.string().allow(""),
      article_quantity: Joi.number(),
      promo_id: Joi.string().allow(""),
      amount: Joi.number(),
      promotion_type: Joi.string().allow(""),
      applied_free_articles: Joi.array().items(
        OrderApplicationModel.AppliedFreeArticles()
      ),
    });
  }

  /** @returns {Identifiers} */
  static Identifiers() {
    return Joi.object({
      ean: Joi.string().allow(""),
      sku_code: Joi.string().allow(""),
    });
  }

  /** @returns {FinancialBreakup} */
  static FinancialBreakup() {
    return Joi.object({
      coupon_value: Joi.number(),
      delivery_charge: Joi.number(),
      brand_calculated_amount: Joi.number(),
      value_of_good: Joi.number(),
      price_marked: Joi.number(),
      coupon_effective_discount: Joi.number(),
      hsn_code: Joi.string().allow(""),
      discount: Joi.number(),
      gst_tax_percentage: Joi.number(),
      cod_charges: Joi.number(),
      amount_paid: Joi.number(),
      added_to_fynd_cash: Joi.boolean(),
      size: Joi.string().allow(""),
      transfer_price: Joi.number(),
      cashback_applied: Joi.number(),
      price_effective: Joi.number(),
      cashback: Joi.number(),
      refund_credit: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      total_units: Joi.number(),
      identifiers: OrderApplicationModel.Identifiers(),
      gst_tag: Joi.string().allow(""),
      item_name: Joi.string().allow(""),
      promotion_effective_discount: Joi.number(),
      gst_fee: Joi.number(),
      refund_amount: Joi.number(),
      fynd_credits: Joi.number(),
      amount_to_be_collected: Joi.number(),
    });
  }

  /** @returns {CurrentStatus} */
  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      journey_type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Bags} */
  static Bags() {
    return Joi.object({
      delivery_date: Joi.string().allow("").allow(null),
      line_number: Joi.number(),
      currency_symbol: Joi.string().allow(""),
      item: OrderApplicationModel.Item(),
      applied_promos: Joi.array().items(OrderApplicationModel.AppliedPromos()),
      quantity: Joi.number(),
      prices: OrderApplicationModel.Prices(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      id: Joi.number(),
      returnable_date: Joi.string().allow("").allow(null),
      financial_breakup: Joi.array().items(
        OrderApplicationModel.FinancialBreakup()
      ),
      parent_promo_bags: Joi.object().pattern(/\S/, Joi.any()),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      currency_code: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      current_status: OrderApplicationModel.CurrentStatus(),
      article: OrderApplicationModel.Article(),
      charges: Joi.array().items(OrderApplicationModel.PriceAdjustmentCharge()),
    });
  }

  /** @returns {FulfillingCompany} */
  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Article} */
  static Article() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
    }).allow(null);
  }

  /** @returns {Address} */
  static Address() {
    return Joi.object({
      pincode: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      latitude: Joi.number().allow(null),
      address2: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow(""),
      address: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      longitude: Joi.number().allow(null),
      country_iso_code: Joi.string().allow(""),
      state: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      display_address: Joi.string().allow(""),
      name: Joi.string().allow(""),
      contact_person: Joi.string().allow(""),
      address_category: Joi.string().allow(""),
      email: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      version: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      country: Joi.string().allow(""),
    });
  }

  /** @returns {Shipments} */
  static Shipments() {
    return Joi.object({
      payment: OrderApplicationModel.ShipmentPayment(),
      payment_info: Joi.array().items(
        OrderApplicationModel.ShipmentPaymentInfo()
      ),
      order_type: Joi.string().allow("").allow(null),
      gstin_code: Joi.string().allow(""),
      show_download_invoice: Joi.boolean(),
      can_cancel: Joi.boolean(),
      user_info: OrderApplicationModel.ShipmentUserInfo(),
      shipment_id: Joi.string().allow(""),
      fulfilling_store: OrderApplicationModel.FulfillingStore(),
      custom_meta: Joi.array().items(Joi.any()),
      shipment_status: OrderApplicationModel.ShipmentStatus(),
      comment: Joi.string().allow(""),
      invoice: OrderApplicationModel.Invoice(),
      show_track_link: Joi.boolean(),
      refund_details: Joi.object().pattern(/\S/, Joi.any()),
      breakup_values: Joi.array().items(OrderApplicationModel.BreakupValues()),
      can_break: Joi.object().pattern(/\S/, Joi.any()),
      traking_no: Joi.string().allow(""),
      tracking_details: Joi.array().items(
        OrderApplicationModel.TrackingDetails()
      ),
      promise: OrderApplicationModel.Promise(),
      total_bags: Joi.number(),
      total_details: OrderApplicationModel.ShipmentTotalDetails(),
      prices: OrderApplicationModel.Prices(),
      returnable_date: Joi.string().allow("").allow(null),
      shipment_created_at: Joi.string().allow(""),
      shipment_created_ts: Joi.string().allow(""),
      size_info: Joi.object().pattern(/\S/, Joi.any()),
      bags: Joi.array().items(OrderApplicationModel.Bags()),
      dp_name: Joi.string().allow(""),
      awb_no: Joi.string().allow(""),
      beneficiary_details: Joi.boolean(),
      fulfilling_company: OrderApplicationModel.FulfillingCompany(),
      can_return: Joi.boolean(),
      delivery_address: OrderApplicationModel.Address(),
      billing_address: OrderApplicationModel.Address(),
      track_url: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      need_help_url: Joi.string().allow(""),
      return_meta: Joi.object().pattern(/\S/, Joi.any()),
      delivery_date: Joi.string().allow("").allow(null),
      order: OrderApplicationModel.OrderRequestSchema(),
      charges: Joi.array().items(OrderApplicationModel.PriceAdjustmentCharge()),
    });
  }

  /** @returns {BagsForReorderArticleAssignment} */
  static BagsForReorderArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),
      level: Joi.string().allow(""),
    });
  }

  /** @returns {BagsForReorder} */
  static BagsForReorder() {
    return Joi.object({
      item_size: Joi.string().allow(""),
      quantity: Joi.number(),
      store_id: Joi.number(),
      article_assignment: OrderApplicationModel.BagsForReorderArticleAssignment(),
      seller_id: Joi.number(),
      item_id: Joi.number(),
    });
  }

  /** @returns {OrderSchema} */
  static OrderSchema() {
    return Joi.object({
      total_shipments_in_order: Joi.number(),
      gstin_code: Joi.string().allow(""),
      user_info: OrderApplicationModel.UserInfo(),
      breakup_values: Joi.array().items(OrderApplicationModel.BreakupValues()),
      order_created_time: Joi.string().allow(""),
      order_created_ts: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      shipments: Joi.array().items(OrderApplicationModel.Shipments()),
      bags_for_reorder: Joi.array().items(
        OrderApplicationModel.BagsForReorder()
      ),
      charges: Joi.array().items(OrderApplicationModel.PriceAdjustmentCharge()),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {OrderStatuses} */
  static OrderStatuses() {
    return Joi.object({
      value: Joi.number(),
      is_selected: Joi.boolean(),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {OrderFilters} */
  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(OrderApplicationModel.OrderStatuses()),
    });
  }

  /** @returns {OrderList} */
  static OrderList() {
    return Joi.object({
      page: OrderApplicationModel.OrderPage(),
      items: Joi.array().items(OrderApplicationModel.OrderSchema()),
      filters: OrderApplicationModel.OrderFilters(),
    });
  }

  /** @returns {ApefaceApiError} */
  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {OrderById} */
  static OrderById() {
    return Joi.object({
      order: OrderApplicationModel.OrderSchema(),
    });
  }

  /** @returns {ShipmentById} */
  static ShipmentById() {
    return Joi.object({
      shipment: OrderApplicationModel.Shipments(),
    });
  }

  /** @returns {ResponseGetInvoiceShipment} */
  static ResponseGetInvoiceShipment() {
    return Joi.object({
      presigned_type: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      shipment_id: Joi.string().allow("").required(),
      presigned_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {Track} */
  static Track() {
    return Joi.object({
      account_name: Joi.string().allow(""),
      shipment_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      last_location_recieved_at: Joi.string().allow(""),
      updated_time: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      awb: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentTrack} */
  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderApplicationModel.Track()),
    });
  }

  /** @returns {CustomerDetailsResponseSchema} */
  static CustomerDetailsResponseSchema() {
    return Joi.object({
      phone: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      country: Joi.string().allow(""),
    });
  }

  /** @returns {SendOtpToCustomerResponseSchema} */
  static SendOtpToCustomerResponseSchema() {
    return Joi.object({
      request_id: Joi.string().allow(""),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
      resend_timer: Joi.number(),
    });
  }

  /** @returns {VerifyOtp} */
  static VerifyOtp() {
    return Joi.object({
      otp_code: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyOtpResponseSchema} */
  static VerifyOtpResponseSchema() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {BagReasonMeta} */
  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  /** @returns {QuestionSet} */
  static QuestionSet() {
    return Joi.object({
      id: Joi.number(),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {BagReasons} */
  static BagReasons() {
    return Joi.object({
      qc_type: Joi.array().items(Joi.string().allow("")),
      id: Joi.number(),
      display_name: Joi.string().allow(""),
      meta: OrderApplicationModel.BagReasonMeta(),
      question_set: Joi.array().items(OrderApplicationModel.QuestionSet()),
      reasons: Joi.array().items(Joi.link("#BagReasons")),
    }).id("BagReasons");
  }

  /** @returns {ShipmentBagReasons} */
  static ShipmentBagReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderApplicationModel.BagReasons()),
      success: Joi.boolean(),
      rule_id: Joi.number().allow(null),
    });
  }

  /** @returns {ShipmentReason} */
  static ShipmentReason() {
    return Joi.object({
      priority: Joi.number(),
      show_text_area: Joi.boolean(),
      reason_id: Joi.number(),
      feedback_type: Joi.string().allow(""),
      reason_text: Joi.string().allow(""),
      flow: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentReasons} */
  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderApplicationModel.ShipmentReason()),
    });
  }

  /** @returns {ProductsReasonsData} */
  static ProductsReasonsData() {
    return Joi.object({
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
    });
  }

  /** @returns {ProductsReasonsFilters} */
  static ProductsReasonsFilters() {
    return Joi.object({
      line_number: Joi.number(),
      quantity: Joi.number(),
      identifier: Joi.string().allow(""),
    });
  }

  /** @returns {ProductsReasons} */
  static ProductsReasons() {
    return Joi.object({
      data: OrderApplicationModel.ProductsReasonsData(),
      filters: Joi.array().items(
        OrderApplicationModel.ProductsReasonsFilters()
      ),
    });
  }

  /** @returns {EntityReasonData} */
  static EntityReasonData() {
    return Joi.object({
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
    });
  }

  /** @returns {EntitiesReasons} */
  static EntitiesReasons() {
    return Joi.object({
      data: OrderApplicationModel.EntityReasonData(),
      filters: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {ReasonsData} */
  static ReasonsData() {
    return Joi.object({
      products: Joi.array().items(OrderApplicationModel.ProductsReasons()),
      entities: Joi.array().items(OrderApplicationModel.EntitiesReasons()),
    });
  }

  /** @returns {Products} */
  static Products() {
    return Joi.object({
      line_number: Joi.number(),
      quantity: Joi.number(),
      identifier: Joi.string().allow(""),
    });
  }

  /** @returns {ProductsDataUpdatesFilters} */
  static ProductsDataUpdatesFilters() {
    return Joi.object({
      line_number: Joi.number(),
      identifier: Joi.string().allow(""),
      quantity: Joi.number(),
    });
  }

  /** @returns {ProductsDataUpdates} */
  static ProductsDataUpdates() {
    return Joi.object({
      data: Joi.object().pattern(/\S/, Joi.any()),
      filters: Joi.array().items(
        OrderApplicationModel.ProductsDataUpdatesFilters()
      ),
    });
  }

  /** @returns {EntitiesDataUpdates} */
  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.object().pattern(/\S/, Joi.any()),
      filters: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {DataUpdates} */
  static DataUpdates() {
    return Joi.object({
      products: Joi.array().items(OrderApplicationModel.ProductsDataUpdates()),
      entities: Joi.array().items(OrderApplicationModel.EntitiesDataUpdates()),
    });
  }

  /** @returns {ShipmentsRequestSchema} */
  static ShipmentsRequestSchema() {
    return Joi.object({
      reasons: OrderApplicationModel.ReasonsData(),
      products: Joi.array().items(OrderApplicationModel.Products()),
      data_updates: OrderApplicationModel.DataUpdates(),
      identifier: Joi.string().allow("").required(),
    });
  }

  /** @returns {StatuesRequestSchema} */
  static StatuesRequestSchema() {
    return Joi.object({
      shipments: Joi.array().items(
        OrderApplicationModel.ShipmentsRequestSchema()
      ),
      exclude_bags_next_state: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {OrderRequestSchema} */
  static OrderRequestSchema() {
    return Joi.object({
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {UpdateShipmentStatusRequestSchema} */
  static UpdateShipmentStatusRequestSchema() {
    return Joi.object({
      statuses: Joi.array().items(OrderApplicationModel.StatuesRequestSchema()),
      task: Joi.boolean(),
      lock_after_transition: Joi.boolean(),
      force_transition: Joi.boolean(),
      unlock_before_transition: Joi.boolean(),
    });
  }

  /** @returns {StatusesBodyResponseSchema} */
  static StatusesBodyResponseSchema() {
    return Joi.object({
      shipments: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {ShipmentApplicationStatusResponseSchema} */
  static ShipmentApplicationStatusResponseSchema() {
    return Joi.object({
      statuses: Joi.array().items(
        OrderApplicationModel.StatusesBodyResponseSchema()
      ),
    });
  }

  /** @returns {ErrorResponseSchema} */
  static ErrorResponseSchema() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
      status: Joi.number(),
      exception: Joi.string().allow("").allow(null),
      stack_trace: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderApplicationModel;
