export = OrderApplicationModel;
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
 *   representing the currency used for the value.
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
 * @property {number} [company_id] - The identifier of the company associated
 *   with the store.
 */
/**
 * @typedef ShipmentStatus
 * @property {string} [value] - The internal or code value representing the
 *   shipment status.
 * @property {string} [title] - The title or display name representing the
 *   shipment status.
 * @property {string} [hex_code] - The hexadecimal color code associated with
 *   the shipment status.
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
 * @property {string} [currency_code] - The code of the currency used.
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
 * @property {string[]} [l1_categories] - An array of level 1 categories to
 *   which the item belongs.
 * @property {string[]} [l2_category] - An array of level 2 categories to which
 *   the item belongs.
 * @property {number} [l2_category_id] - ID representing the level 2 category
 *   classification of the item
 * @property {ItemBrand} [brand]
 * @property {string} [seller_identifier] - The identifier for the seller .
 * @property {string} [code] - The code or SKU of the item.
 * @property {number} [id] - The unique identifier of the item.
 * @property {string} [name] - The name of the item.
 * @property {string} [l3_category_name] - The level 3 category name.
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
 * @property {string} [promotion_type] - The type of promotion.
 * @property {AppliedFreeArticles[]} [applied_free_articles] - An array
 *   containing details of free articles applied under the promotion.
 */
/**
 * @typedef Identifiers
 * @property {string} [ean] - The European Article Number (EAN) of the item.
 * @property {string} [sku_code] - The Stock Keeping Unit (SKU) code of the item.
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
 * @property {string} [hsn_code] - The HSN (Harmonized System of Nomenclature)
 *   code of the item.
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
 * @property {string} [journey_type] - The type of journey for the shipment,
 *   indicating the direction of the shipment.
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
 * @property {Object} [meta] - An object containing metadata for the item.
 * @property {string} [currency_code] - The code of the currency used.
 * @property {string} [seller_identifier] - The identifier for the seller.
 * @property {CurrentStatus} [current_status]
 * @property {Article} [article]
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
 * @property {string} [address_type] - The type of address.
 * @property {number} [longitude] - The longitude coordinate.
 * @property {string} [country_iso_code] - The ISO code for the country.
 * @property {string} [state] - The state of the address.
 * @property {string} [created_at] - The date and time when the address was created.
 * @property {string} [address1] - The primary line of the address.
 * @property {string} [display_address] - The formatted display address,
 *   typically used for printing or displaying in user interfaces.
 * @property {string} [name] - The name of the person associated with the address.
 * @property {string} [contact_person] - The name of the contact person.
 * @property {string} [address_category] - The category of the address.
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
 * @property {string} [order_type] - The type of order.
 * @property {string} [gstin_code] - The GSTIN code for the shipment.
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
 * @property {OrderRequest} [order]
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
 * @property {string} [gstin_code] - The GSTIN code for the shipment.
 * @property {UserInfo} [user_info]
 * @property {BreakupValues[]} [breakup_values] - An array containing the
 *   breakup of various charges and discounts.
 * @property {string} [order_created_time] - The date and time when the order was created.
 * @property {string} [order_created_ts] - The timestamp when the order was created.
 * @property {string} [order_id] - The unique identifier for the order.
 * @property {Shipments[]} [shipments] - An array containing details of
 *   individual shipments within the order.
 * @property {BagsForReorder[]} [bags_for_reorder] - An array containing details
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
 * @typedef CustomerDetailsResponse
 * @property {string} [phone] - Customer's phone number.
 * @property {string} [shipment_id] - Unique identifier of the shipment.
 * @property {string} [name] - Customer's name.
 * @property {string} [order_id] - Unique identifier of the order.
 * @property {string} [country] - Country of the customer.
 */
/**
 * @typedef SendOtpToCustomerResponse
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
 * @typedef VerifyOtpResponse
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
 * @property {string[]} [qc_type] - A list of quality check types.
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
 * @property {number} [line_number] - The specific line item of bag.
 * @property {string} [identifier] - The quantity of the product.
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
 * @typedef ShipmentsRequest
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products] - Specific bag to be updated.
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier - The unique identifier for request which is
 *   the shipment_id.
 */
/**
 * @typedef StatuesRequest
 * @property {ShipmentsRequest[]} [shipments] - A list containing information
 *   about shipments.
 * @property {string} [exclude_bags_next_state] - State to be change for
 *   Remaining Bag/Products.
 * @property {string} [status] - The status to which the entity is to be transitioned.
 */
/**
 * @typedef OrderRequest
 * @property {Object} [meta] - Metadata for the order.
 */
/**
 * @typedef UpdateShipmentStatusRequest
 * @property {StatuesRequest[]} [statuses] - An array containing different status details.
 * @property {boolean} [task] - Indicates whether the task is active or required.
 * @property {boolean} [lock_after_transition] - Indicates whether the status
 *   should be locked after the transition.
 * @property {boolean} [force_transition] - Indicates whether the transition
 *   should be forced.
 * @property {boolean} [unlock_before_transition] - Indicates whether the status
 *   should be unlocked before the transition.
 */
/**
 * @typedef StatusesBodyResponse
 * @property {Object[]} [shipments] - List of shipments.
 */
/**
 * @typedef ShipmentApplicationStatusResponse
 * @property {StatusesBodyResponse[]} [statuses] - An array containing different
 *   status options of shipments.
 */
/**
 * @typedef ErrorResponse
 * @property {string} [code] - The HTTP status code of the response.
 * @property {string} [message] - A message providing details about the response.
 * @property {number} [status] - An additional code providing more context about
 *   the response.
 * @property {string} [exception] - Details of any exception that occurred.
 * @property {string} [stack_trace] - The stack trace of any exception that occurred.
 */
declare class OrderApplicationModel {
}
declare namespace OrderApplicationModel {
    export { OrderPage, UserInfo, BreakupValues, ShipmentPayment, ShipmentPaymentInfo, ShipmentUserInfo, FulfillingStore, ShipmentStatus, Invoice, NestedTrackingDetails, TrackingDetails, TimeStampData, Promise, ShipmentTotalDetails, Prices, ItemBrand, Item, AppliedFreeArticles, AppliedPromos, Identifiers, FinancialBreakup, CurrentStatus, Bags, FulfillingCompany, Article, Address, Shipments, BagsForReorderArticleAssignment, BagsForReorder, OrderSchema, OrderStatuses, OrderFilters, OrderList, ApefaceApiError, OrderById, ShipmentById, ResponseGetInvoiceShipment, Track, ShipmentTrack, CustomerDetailsResponse, SendOtpToCustomerResponse, VerifyOtp, VerifyOtpResponse, BagReasonMeta, QuestionSet, BagReasons, ShipmentBagReasons, ShipmentReason, ShipmentReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, OrderRequest, UpdateShipmentStatusRequest, StatusesBodyResponse, ShipmentApplicationStatusResponse, ErrorResponse };
}
/** @returns {OrderPage} */
declare function OrderPage(): OrderPage;
type OrderPage = {
    /**
     * - Specifies type of pagination. If it is 'cursor'
     * based or 'number' based.
     */
    type?: string;
    /**
     * - Total number of items available across all
     * pages. It provides a count of all the items that match the query criteria,
     * regardless of pagination.
     */
    item_total?: number;
    /**
     * - Specifies the current page number. It helps in
     * identifying the position within the paginated results.
     */
    current?: number;
    /**
     * - Represents the number of items on the current
     * page. It indicates how many items are included in each page of the
     * paginated response.
     */
    size?: number;
    /**
     * - Indicates whether there is a next page
     * available. It is true if a next page exists and false if the current page
     * is the last one.
     */
    has_next?: boolean;
};
/** @returns {UserInfo} */
declare function UserInfo(): UserInfo;
type UserInfo = {
    /**
     * - First name of the user.
     */
    first_name?: string;
    /**
     * - Gender of the user.
     */
    gender?: string;
    /**
     * - Full name of the user (including first and last names).
     */
    name?: string;
    /**
     * - Last name of the user.
     */
    last_name?: string;
    /**
     * - Mobile number of the user.
     */
    mobile?: string;
    /**
     * - Email address of the user.
     */
    email?: string;
};
/** @returns {BreakupValues} */
declare function BreakupValues(): BreakupValues;
type BreakupValues = {
    /**
     * - The numerical value associated with the entity.
     */
    value?: number;
    /**
     * - Symbol representing the currency used
     * for the value.
     */
    currency_symbol?: string;
    /**
     * - The official name of the entity.
     */
    name?: string;
    /**
     * - The name of the entity as it should be displayed.
     */
    display?: string;
    /**
     * - The international currency code
     * representing the currency used for the value.
     */
    currency_code?: string;
};
/** @returns {ShipmentPayment} */
declare function ShipmentPayment(): ShipmentPayment;
type ShipmentPayment = {
    /**
     * - Abbreviation or code for the payment mode.
     */
    mop?: string;
    /**
     * - The specific payment mode used.
     */
    payment_mode?: string;
    /**
     * - The current status of the payment.
     */
    status?: string;
    /**
     * - The payment mode.
     */
    mode?: string;
    /**
     * - URL of the logo representing the payment mode.
     */
    logo?: string;
    /**
     * - The name to be displayed for the payment mode.
     */
    display_name?: string;
};
/** @returns {ShipmentPaymentInfo} */
declare function ShipmentPaymentInfo(): ShipmentPaymentInfo;
type ShipmentPaymentInfo = {
    /**
     * - Stands for "Mode of Payment". This is a short code
     * (like "COD" for Cash On Delivery) that represents the payment method used.
     */
    mop?: string;
    /**
     * - Information about the payment mode,
     * indicates whether COD or PREPAID.
     */
    payment_mode?: string;
    /**
     * - Indicates the current status of the payment,
     * Paid or Unpaid.
     */
    status?: string;
    /**
     * - Information about the payment source. For eg, NB_ICICI.
     */
    mode?: string;
    /**
     * - A URL to an image representing the payment method.
     */
    logo?: string;
    /**
     * - The name of the payment method as it
     * should be displayed to the user.
     */
    display_name?: string;
    /**
     * - Amount paid using this payment method.
     */
    amount?: number;
};
/** @returns {ShipmentUserInfo} */
declare function ShipmentUserInfo(): ShipmentUserInfo;
type ShipmentUserInfo = {
    /**
     * - The unique identifier of the store.
     */
    first_name?: string;
    /**
     * - A code associated with the store.
     */
    gender?: string;
    /**
     * - The name of the store.
     */
    name?: string;
    /**
     * - The name of the company associated with the store.
     */
    last_name?: string;
    /**
     * - The identifier of the company associated with the store.
     */
    mobile?: string;
    /**
     * - Email address of the user.
     */
    email?: string;
};
/** @returns {FulfillingStore} */
declare function FulfillingStore(): FulfillingStore;
type FulfillingStore = {
    /**
     * - The unique identifier of the store.
     */
    id?: number;
    /**
     * - A code associated with the store.
     */
    code?: string;
    /**
     * - The name of the store.
     */
    name?: string;
    /**
     * - The name of the company associated with the store.
     */
    company_name?: string;
    /**
     * - The identifier of the company associated
     * with the store.
     */
    company_id?: number;
};
/** @returns {ShipmentStatus} */
declare function ShipmentStatus(): ShipmentStatus;
type ShipmentStatus = {
    /**
     * - The internal or code value representing the
     * shipment status.
     */
    value?: string;
    /**
     * - The title or display name representing the
     * shipment status.
     */
    title?: string;
    /**
     * - The hexadecimal color code associated with
     * the shipment status.
     */
    hex_code?: string;
};
/** @returns {Invoice} */
declare function Invoice(): Invoice;
type Invoice = {
    /**
     * - URL providing access to the invoice.
     */
    invoice_url?: string;
    /**
     * - The date and time when the invoice was
     * last updated.
     */
    updated_date?: string;
    /**
     * - URL providing access to the invoice label.
     */
    label_url?: string;
};
/** @returns {NestedTrackingDetails} */
declare function NestedTrackingDetails(): NestedTrackingDetails;
type NestedTrackingDetails = {
    /**
     * - Indicates whether the tracking event has
     * passed or occurred.
     */
    is_passed?: boolean;
    /**
     * - The time associated with the tracking event.
     */
    time?: string;
    /**
     * - Indicates whether the tracking event is
     * the current or active status.
     */
    is_current?: boolean;
    /**
     * - The status of the tracking event.
     */
    status?: string;
};
/** @returns {TrackingDetails} */
declare function TrackingDetails(): TrackingDetails;
type TrackingDetails = {
    /**
     * - Current value or state of the process.
     */
    value?: string;
    /**
     * - Indicates whether the tracking event is
     * the current or active status.
     */
    is_current?: boolean;
    /**
     * - Indicates whether the tracking event has
     * passed or occurred.
     */
    is_passed?: boolean;
    /**
     * - The status of the tracking event.
     */
    status?: string;
    /**
     * - The time associated with the tracking event.
     */
    time?: string;
    /**
     * - Timestamp when this status was created.
     */
    created_ts?: string;
    /**
     * - Nested tracking details.
     */
    tracking_details?: NestedTrackingDetails[];
};
/** @returns {TimeStampData} */
declare function TimeStampData(): TimeStampData;
type TimeStampData = {
    /**
     * - The minimum timestamp value.
     */
    min?: string;
    /**
     * - The maximum timestamp value.
     */
    max?: string;
};
/** @returns {Promise} */
declare function Promise(): Promise;
type Promise = {
    /**
     * - Indicates whether the promise details
     * should be shown.
     */
    show_promise?: boolean;
    timestamp?: TimeStampData;
};
/** @returns {ShipmentTotalDetails} */
declare function ShipmentTotalDetails(): ShipmentTotalDetails;
type ShipmentTotalDetails = {
    /**
     * - The total number of pieces included.
     */
    pieces?: number;
    /**
     * - The total price of the order or item.
     */
    total_price?: number;
    /**
     * - The number of different sizes included.
     */
    sizes?: number;
};
/** @returns {Prices} */
declare function Prices(): Prices;
type Prices = {
    /**
     * - The delivery charge for the order.
     */
    delivery_charge?: number;
    /**
     * - The value of the coupon applied.
     */
    coupon_value?: number;
    /**
     * - The amount calculated by the brand.
     */
    brand_calculated_amount?: number;
    /**
     * - The value of the goods before tax and
     * other charges.
     */
    value_of_good?: number;
    /**
     * - The original marked price of the item.
     */
    price_marked?: number;
    /**
     * - The effective discount from coupons.
     */
    coupon_effective_discount?: number;
    /**
     * - The symbol of the currency used.
     */
    currency_symbol?: string;
    /**
     * - The discount applied to the item.
     */
    discount?: number;
    /**
     * - The GST tax percentage applied.
     */
    gst_tax_percentage?: number;
    /**
     * - The cash on delivery charges, if applicable.
     */
    cod_charges?: number;
    /**
     * - The total amount paid by the customer.
     */
    amount_paid?: number;
    /**
     * - Indicates if the refund amount was
     * added to Fynd Cash.
     */
    added_to_fynd_cash?: boolean;
    /**
     * - The transfer price of the item.
     */
    transfer_price?: number;
    /**
     * - The amount of cashback applied.
     */
    cashback_applied?: number;
    /**
     * - The effective price after all adjustments.
     */
    price_effective?: number;
    /**
     * - The cashback amount earned.
     */
    cashback?: number;
    /**
     * - The amount credited for refund .
     */
    refund_credit?: number;
    /**
     * - The rounded-off amount paid by
     * the customer.
     */
    amount_paid_roundoff?: number;
    /**
     * - The effective discount
     * from promotions.
     */
    promotion_effective_discount?: number;
    /**
     * - The amount refunded to the customer.
     */
    refund_amount?: number;
    /**
     * - The code of the currency used.
     */
    currency_code?: string;
    /**
     * - The amount of Fynd credits used.
     */
    fynd_credits?: number;
    /**
     * - The total amount that needs to
     * be collected from the customer.
     */
    amount_to_be_collected?: number;
};
/** @returns {ItemBrand} */
declare function ItemBrand(): ItemBrand;
type ItemBrand = {
    /**
     * - The URL of the brand's logo.
     */
    logo?: string;
    /**
     * - The name of the brand.
     */
    name?: string;
};
/** @returns {Item} */
declare function Item(): Item;
type Item = {
    /**
     * - An array of URLs pointing to images of the item.
     */
    image?: string[];
    /**
     * - An array of level 1 categories to
     * which the item belongs.
     */
    l1_categories?: string[];
    /**
     * - An array of level 2 categories to which
     * the item belongs.
     */
    l2_category?: string[];
    /**
     * - ID representing the level 2 category
     * classification of the item
     */
    l2_category_id?: number;
    brand?: ItemBrand;
    /**
     * - The identifier for the seller .
     */
    seller_identifier?: string;
    /**
     * - The code or SKU of the item.
     */
    code?: string;
    /**
     * - The unique identifier of the item.
     */
    id?: number;
    /**
     * - The name of the item.
     */
    name?: string;
    /**
     * - The level 3 category name.
     */
    l3_category_name?: string;
    /**
     * - A unique key or identifier for the item slug.
     */
    slug_key?: string;
    /**
     * - An array of level 2 categories the
     * item belongs to.
     */
    l2_categories?: string[];
    /**
     * - The size of the item.
     */
    size?: string;
    /**
     * - An object containing various attributes of the item.
     */
    attributes?: any;
};
/** @returns {AppliedFreeArticles} */
declare function AppliedFreeArticles(): AppliedFreeArticles;
type AppliedFreeArticles = {
    /**
     * - The unique identifier for the article.
     */
    article_id?: string;
    /**
     * - An object containing details
     * about the free gift item.
     */
    free_gift_item_details?: any;
    /**
     * - The identifier for the parent
     * item to which this free article is related.
     */
    parent_item_identifier?: string;
    /**
     * - The quantity of the free article.
     */
    quantity?: number;
};
/** @returns {AppliedPromos} */
declare function AppliedPromos(): AppliedPromos;
type AppliedPromos = {
    /**
     * - Indicates if the promotion is applied to the MRP.
     */
    mrp_promotion?: boolean;
    /**
     * - The name of the promotion .
     */
    promotion_name?: string;
    /**
     * - The quantity of articles required to
     * qualify for the promotion.
     */
    article_quantity?: number;
    /**
     * - The unique identifier for the promotion.
     */
    promo_id?: string;
    /**
     * - The discount amount provided by the promotion.
     */
    amount?: number;
    /**
     * - The type of promotion.
     */
    promotion_type?: string;
    /**
     * - An array
     * containing details of free articles applied under the promotion.
     */
    applied_free_articles?: AppliedFreeArticles[];
};
/** @returns {Identifiers} */
declare function Identifiers(): Identifiers;
type Identifiers = {
    /**
     * - The European Article Number (EAN) of the item.
     */
    ean?: string;
    /**
     * - The Stock Keeping Unit (SKU) code of the item.
     */
    sku_code?: string;
};
/** @returns {FinancialBreakup} */
declare function FinancialBreakup(): FinancialBreakup;
type FinancialBreakup = {
    /**
     * - The value of the coupon applied.
     */
    coupon_value?: number;
    /**
     * - The delivery charge for the order.
     */
    delivery_charge?: number;
    /**
     * - The amount calculated by the brand.
     */
    brand_calculated_amount?: number;
    /**
     * - The value of the goods before tax and
     * other charges.
     */
    value_of_good?: number;
    /**
     * - The original marked price of the item.
     */
    price_marked?: number;
    /**
     * - The effective discount from coupons.
     */
    coupon_effective_discount?: number;
    /**
     * - The HSN (Harmonized System of Nomenclature)
     * code of the item.
     */
    hsn_code?: string;
    /**
     * - The discount applied to the item.
     */
    discount?: number;
    /**
     * - The GST tax percentage applied .
     */
    gst_tax_percentage?: number;
    /**
     * - The cash on delivery charges, if applicable.
     */
    cod_charges?: number;
    /**
     * - The total amount paid by the customer.
     */
    amount_paid?: number;
    /**
     * - Indicates if the refund amount was
     * added to Fynd Cash.
     */
    added_to_fynd_cash?: boolean;
    /**
     * - The size of the item .
     */
    size?: string;
    /**
     * - The transfer price of the item.
     */
    transfer_price?: number;
    /**
     * - The amount of cashback applied.
     */
    cashback_applied?: number;
    /**
     * - The effective price after all adjustments.
     */
    price_effective?: number;
    /**
     * - The cashback amount earned.
     */
    cashback?: number;
    /**
     * - The amount credited for refund .
     */
    refund_credit?: number;
    /**
     * - The rounded-off amount paid by
     * the customer.
     */
    amount_paid_roundoff?: number;
    /**
     * - The total number of units purchased.
     */
    total_units?: number;
    identifiers?: Identifiers;
    /**
     * - The GST tag indicating the type of GST applied.
     */
    gst_tag?: string;
    /**
     * - The name of the item.
     */
    item_name?: string;
    /**
     * - The effective discount
     * from promotions.
     */
    promotion_effective_discount?: number;
    /**
     * - The GST fee applied to the item.
     */
    gst_fee?: number;
    /**
     * - The amount refunded to the customer.
     */
    refund_amount?: number;
    /**
     * - The amount of Fynd credits used.
     */
    fynd_credits?: number;
    /**
     * - The total amount that needs to
     * be collected from the customer.
     */
    amount_to_be_collected?: number;
};
/** @returns {CurrentStatus} */
declare function CurrentStatus(): CurrentStatus;
type CurrentStatus = {
    /**
     * - The date and time when the status was last updated.
     */
    updated_at?: string;
    /**
     * - The name or label indicating the current state or status.
     */
    name?: string;
    /**
     * - The current status of the bag.
     */
    status?: string;
    /**
     * - The type of journey for the shipment,
     * indicating the direction of the shipment.
     */
    journey_type?: string;
};
/** @returns {Bags} */
declare function Bags(): Bags;
type Bags = {
    /**
     * - The date and time when the item is
     * expected to be delivered .
     */
    delivery_date?: string;
    /**
     * - The line number of the item in the order.
     */
    line_number?: number;
    /**
     * - The symbol of the currency used.
     */
    currency_symbol?: string;
    item?: Item;
    /**
     * - An array containing
     * information about applied promotions.
     */
    applied_promos?: AppliedPromos[];
    /**
     * - The quantity of the item.
     */
    quantity?: number;
    prices?: Prices;
    /**
     * - Indicates if the item can be canceled.
     */
    can_cancel?: boolean;
    /**
     * - Indicates if the item can be returned.
     */
    can_return?: boolean;
    /**
     * - The unique identifier for the order item.
     */
    id?: number;
    /**
     * - The last date and time by which the
     * item can be returned.
     */
    returnable_date?: string;
    /**
     * - An array containing
     * financial details of the item.
     */
    financial_breakup?: FinancialBreakup[];
    /**
     * - An object containing details of
     * parent promotional bags.
     */
    parent_promo_bags?: any;
    /**
     * - An object containing metadata for the item.
     */
    meta?: any;
    /**
     * - The code of the currency used.
     */
    currency_code?: string;
    /**
     * - The identifier for the seller.
     */
    seller_identifier?: string;
    current_status?: CurrentStatus;
    article?: Article;
};
/** @returns {FulfillingCompany} */
declare function FulfillingCompany(): FulfillingCompany;
type FulfillingCompany = {
    /**
     * - The unique identifier for the fulfilling company.
     */
    id?: number;
    /**
     * - The name of the fulfilling company.
     */
    name?: string;
};
/** @returns {Article} */
declare function Article(): Article;
type Article = {
    /**
     * - An array of tags associated with the article.
     */
    tags?: string[];
};
/** @returns {Address} */
declare function Address(): Address;
type Address = {
    /**
     * - The postal code of the address.
     */
    pincode?: string;
    /**
     * - The phone number of the person associated with
     * the address.
     */
    phone?: string;
    /**
     * - The latitude coordinate.
     */
    latitude?: number;
    /**
     * - The secondary line of the address.
     */
    address2?: string;
    /**
     * - A nearby landmark.
     */
    landmark?: string;
    /**
     * - The area or locality.
     */
    area?: string;
    /**
     * - The city of the address.
     */
    city?: string;
    /**
     * - The full address.
     */
    address?: string;
    /**
     * - The type of address.
     */
    address_type?: string;
    /**
     * - The longitude coordinate.
     */
    longitude?: number;
    /**
     * - The ISO code for the country.
     */
    country_iso_code?: string;
    /**
     * - The state of the address.
     */
    state?: string;
    /**
     * - The date and time when the address was created.
     */
    created_at?: string;
    /**
     * - The primary line of the address.
     */
    address1?: string;
    /**
     * - The formatted display address,
     * typically used for printing or displaying in user interfaces.
     */
    display_address?: string;
    /**
     * - The name of the person associated with the address.
     */
    name?: string;
    /**
     * - The name of the contact person.
     */
    contact_person?: string;
    /**
     * - The category of the address.
     */
    address_category?: string;
    /**
     * - The email address.
     */
    email?: string;
    /**
     * - The country phone code.
     */
    country_phone_code?: string;
    /**
     * - The version of the address format.
     */
    version?: string;
    /**
     * - The date and time when the address was last updated .
     */
    updated_at?: string;
    /**
     * - The country of the address.
     */
    country?: string;
};
/** @returns {Shipments} */
declare function Shipments(): Shipments;
type Shipments = {
    payment?: ShipmentPayment;
    /**
     * - Array of objects
     * containing payment methods used for placing an order. Each object will
     * provide information about corresponding payment method with relevant details.
     */
    payment_info?: ShipmentPaymentInfo[];
    /**
     * - The type of order.
     */
    order_type?: string;
    /**
     * - The GSTIN code for the shipment.
     */
    gstin_code?: string;
    /**
     * - Indicates if the download
     * invoice option should be shown.
     */
    show_download_invoice?: boolean;
    /**
     * - Indicates if the shipment can be canceled.
     */
    can_cancel?: boolean;
    user_info?: ShipmentUserInfo;
    /**
     * - The unique identifier for the shipment.
     */
    shipment_id?: string;
    fulfilling_store?: FulfillingStore;
    /**
     * - An object containing custom metadata for
     * the shipment.
     */
    custom_meta?: any[];
    shipment_status?: ShipmentStatus;
    /**
     * - Any comments related to the shipment.
     */
    comment?: string;
    invoice?: Invoice;
    /**
     * - Indicates if the track link should be shown.
     */
    show_track_link?: boolean;
    /**
     * - An object containing details of any refunds.
     */
    refund_details?: any;
    /**
     * - An array containing the
     * breakup of various charges and discounts.
     */
    breakup_values?: BreakupValues[];
    /**
     * - An object containing details about the
     * breakability of the shipment.
     */
    can_break?: any;
    /**
     * - The tracking number for the shipment.
     */
    traking_no?: string;
    /**
     * - An array containing
     * details of the tracking history of the shipment.
     */
    tracking_details?: TrackingDetails[];
    promise?: Promise;
    /**
     * - The total number of bags in the shipment.
     */
    total_bags?: number;
    total_details?: ShipmentTotalDetails;
    prices?: Prices;
    /**
     * - The last date by which the item can be returned.
     */
    returnable_date?: string;
    /**
     * - The date and time when the
     * shipment was created.
     */
    shipment_created_at?: string;
    /**
     * - The timestamp when the shipment was created.
     */
    shipment_created_ts?: string;
    /**
     * - An object containing size information for
     * the items in the shipment.
     */
    size_info?: any;
    /**
     * - An array containing details about the individual
     * bags in the shipment.
     */
    bags?: Bags[];
    /**
     * - The name of the delivery partner.
     */
    dp_name?: string;
    /**
     * - The airway bill number for the shipment.
     */
    awb_no?: string;
    /**
     * - Indicates if there are any
     * beneficiary details.
     */
    beneficiary_details?: boolean;
    fulfilling_company?: FulfillingCompany;
    /**
     * - Indicates if the shipment can be returned.
     */
    can_return?: boolean;
    delivery_address?: Address;
    billing_address?: Address;
    /**
     * - The URL for tracking the shipment.
     */
    track_url?: string;
    /**
     * - The unique identifier for the order.
     */
    order_id?: string;
    /**
     * - The URL for customer support or help.
     */
    need_help_url?: string;
    /**
     * - An object containing metadata about the
     * return process.
     */
    return_meta?: any;
    /**
     * - The expected delivery date.
     */
    delivery_date?: string;
    order?: OrderRequest;
};
/** @returns {BagsForReorderArticleAssignment} */
declare function BagsForReorderArticleAssignment(): BagsForReorderArticleAssignment;
type BagsForReorderArticleAssignment = {
    /**
     * - The strategy used for article assignment.
     */
    strategy?: string;
    /**
     * - The level at which the article assignment is made.
     */
    level?: string;
};
/** @returns {BagsForReorder} */
declare function BagsForReorder(): BagsForReorder;
type BagsForReorder = {
    /**
     * - The size of the item.
     */
    item_size?: string;
    /**
     * - The quantity of the item.
     */
    quantity?: number;
    /**
     * - The identifier for the store.
     */
    store_id?: number;
    article_assignment?: BagsForReorderArticleAssignment;
    /**
     * - The identifier for the seller.
     */
    seller_id?: number;
    /**
     * - The unique identifier for the item.
     */
    item_id?: number;
};
/** @returns {OrderSchema} */
declare function OrderSchema(): OrderSchema;
type OrderSchema = {
    /**
     * - The total number of shipments
     * in the order.
     */
    total_shipments_in_order?: number;
    /**
     * - The GSTIN code for the shipment.
     */
    gstin_code?: string;
    user_info?: UserInfo;
    /**
     * - An array containing the
     * breakup of various charges and discounts.
     */
    breakup_values?: BreakupValues[];
    /**
     * - The date and time when the order was created.
     */
    order_created_time?: string;
    /**
     * - The timestamp when the order was created.
     */
    order_created_ts?: string;
    /**
     * - The unique identifier for the order.
     */
    order_id?: string;
    /**
     * - An array containing details of
     * individual shipments within the order.
     */
    shipments?: Shipments[];
    /**
     * - An array containing details
     * of bags available for reorder.
     */
    bags_for_reorder?: BagsForReorder[];
    /**
     * - An object containing additional metadata for the order.
     */
    meta?: any;
};
/** @returns {OrderStatuses} */
declare function OrderStatuses(): OrderStatuses;
type OrderStatuses = {
    /**
     * - The value representing the selection.
     */
    value?: number;
    /**
     * - Indicates whether this option is
     * currently selected.
     */
    is_selected?: boolean;
    /**
     * - The text to display .
     */
    display?: string;
};
/** @returns {OrderFilters} */
declare function OrderFilters(): OrderFilters;
type OrderFilters = {
    /**
     * - An array containing the order statuses.
     */
    statuses?: OrderStatuses[];
};
/** @returns {OrderList} */
declare function OrderList(): OrderList;
type OrderList = {
    page?: OrderPage;
    /**
     * - List of orders, each containing detailed
     * information about individual orders and their respective shipments.
     */
    items?: OrderSchema[];
    filters?: OrderFilters;
};
/** @returns {ApefaceApiError} */
declare function ApefaceApiError(): ApefaceApiError;
type ApefaceApiError = {
    /**
     * - Contains any message related to the operation.
     */
    message?: string;
    /**
     * - Indicates if the operation was successful.
     */
    success?: boolean;
};
/** @returns {OrderById} */
declare function OrderById(): OrderById;
type OrderById = {
    order?: OrderSchema;
};
/** @returns {ShipmentById} */
declare function ShipmentById(): ShipmentById;
type ShipmentById = {
    shipment?: Shipments;
};
/** @returns {ResponseGetInvoiceShipment} */
declare function ResponseGetInvoiceShipment(): ResponseGetInvoiceShipment;
type ResponseGetInvoiceShipment = {
    /**
     * - Type of presigned URL.
     */
    presigned_type: string;
    /**
     * - Indicates if the operation was successful .
     */
    success: boolean;
    /**
     * - Identifier for the shipment.
     */
    shipment_id: string;
    /**
     * - The presigned URL for accessing the
     * shipment data, obtained from the response data.
     */
    presigned_url: string;
};
/** @returns {Track} */
declare function Track(): Track;
type Track = {
    /**
     * - The name of the account handling the shipment.
     */
    account_name?: string;
    /**
     * - The type of shipment.
     */
    shipment_type?: string;
    /**
     * - The current status of the shipment.
     */
    status?: string;
    /**
     * - The last known location of
     * the shipment.
     */
    last_location_recieved_at?: string;
    /**
     * - The timestamp of the last update.
     */
    updated_time?: string;
    /**
     * - The date and time when the shipment was last updated.
     */
    updated_at?: string;
    /**
     * - The reason or additional information about the shipment.
     */
    reason?: string;
    /**
     * - The Air Waybill (AWB) number for the shipment.
     */
    awb?: string;
};
/** @returns {ShipmentTrack} */
declare function ShipmentTrack(): ShipmentTrack;
type ShipmentTrack = {
    /**
     * - A array containing tracking details.
     */
    results?: Track[];
};
/** @returns {CustomerDetailsResponse} */
declare function CustomerDetailsResponse(): CustomerDetailsResponse;
type CustomerDetailsResponse = {
    /**
     * - Customer's phone number.
     */
    phone?: string;
    /**
     * - Unique identifier of the shipment.
     */
    shipment_id?: string;
    /**
     * - Customer's name.
     */
    name?: string;
    /**
     * - Unique identifier of the order.
     */
    order_id?: string;
    /**
     * - Country of the customer.
     */
    country?: string;
};
/** @returns {SendOtpToCustomerResponse} */
declare function SendOtpToCustomerResponse(): SendOtpToCustomerResponse;
type SendOtpToCustomerResponse = {
    /**
     * - Unique identifier for the request.
     */
    request_id?: string;
    /**
     * - Message indicating the result of the request.
     */
    message?: string;
    /**
     * - Indicates whether the request was successful.
     */
    success?: boolean;
    /**
     * - Time in seconds before the OTP can be resent.
     */
    resend_timer?: number;
};
/** @returns {VerifyOtp} */
declare function VerifyOtp(): VerifyOtp;
type VerifyOtp = {
    /**
     * - The OTP code provided by the user for verification.
     */
    otp_code?: string;
    /**
     * - Unique identifier for the request.
     */
    request_id?: string;
};
/** @returns {VerifyOtpResponse} */
declare function VerifyOtpResponse(): VerifyOtpResponse;
type VerifyOtpResponse = {
    /**
     * - Indicates whether the request was successful.
     */
    success?: boolean;
};
/** @returns {BagReasonMeta} */
declare function BagReasonMeta(): BagReasonMeta;
type BagReasonMeta = {
    /**
     * - Indicates whether to display a text
     * box on the front end.
     */
    show_text_area?: boolean;
};
/** @returns {QuestionSet} */
declare function QuestionSet(): QuestionSet;
type QuestionSet = {
    /**
     * - The unique identifier for the question.
     */
    id?: number;
    /**
     * - The text displayed for the question.
     */
    display_name?: string;
};
/** @returns {BagReasons} */
declare function BagReasons(): BagReasons;
type BagReasons = {
    /**
     * - A list of quality check types.
     */
    qc_type?: string[];
    /**
     * - The unique identifier.
     */
    id?: number;
    /**
     * - The text displayed.
     */
    display_name?: string;
    meta?: BagReasonMeta;
    /**
     * - A list of questions for delivery partner.
     */
    question_set?: QuestionSet[];
    /**
     * - A list of reasons.
     */
    reasons?: BagReasons[];
};
/** @returns {ShipmentBagReasons} */
declare function ShipmentBagReasons(): ShipmentBagReasons;
type ShipmentBagReasons = {
    /**
     * - A list of shipment's bag reasons.
     */
    reasons?: BagReasons[];
    /**
     * - Indicates if the operation was successful.
     */
    success?: boolean;
};
/** @returns {ShipmentReason} */
declare function ShipmentReason(): ShipmentReason;
type ShipmentReason = {
    /**
     * - The priority level of the reason.
     */
    priority?: number;
    /**
     * - A flag indicating whether to show a
     * textbox on the frontend.
     */
    show_text_area?: boolean;
    /**
     * - The unique identifier for the reason.
     */
    reason_id?: number;
    /**
     * - The type of feedback.
     */
    feedback_type?: string;
    /**
     * - The text describing the reason.
     */
    reason_text?: string;
    /**
     * - The process flow related to the reason.
     */
    flow?: string;
};
/** @returns {ShipmentReasons} */
declare function ShipmentReasons(): ShipmentReasons;
type ShipmentReasons = {
    /**
     * - A list of shipment reasons.
     */
    reasons?: ShipmentReason[];
};
/** @returns {ProductsReasonsData} */
declare function ProductsReasonsData(): ProductsReasonsData;
type ProductsReasonsData = {
    /**
     * - The unique identifier for the reason.
     */
    reason_id?: number;
    /**
     * - The text describing the reason.
     */
    reason_text?: string;
};
/** @returns {ProductsReasonsFilters} */
declare function ProductsReasonsFilters(): ProductsReasonsFilters;
type ProductsReasonsFilters = {
    /**
     * - The specific line item of bag.
     */
    line_number?: number;
    /**
     * - The quantity of the product.
     */
    quantity?: number;
    /**
     * - The unique identifier for the product.
     */
    identifier?: string;
};
/** @returns {ProductsReasons} */
declare function ProductsReasons(): ProductsReasons;
type ProductsReasons = {
    data?: ProductsReasonsData;
    /**
     * - Criteria applied to filter
     * the products.
     */
    filters?: ProductsReasonsFilters[];
};
/** @returns {EntityReasonData} */
declare function EntityReasonData(): EntityReasonData;
type EntityReasonData = {
    /**
     * - The unique identifier for the reason.
     */
    reason_id?: number;
    /**
     * - The text describing the reason.
     */
    reason_text?: string;
};
/** @returns {EntitiesReasons} */
declare function EntitiesReasons(): EntitiesReasons;
type EntitiesReasons = {
    data?: EntityReasonData;
    /**
     * - Criteria applied to filter the shipment.
     */
    filters?: any[];
};
/** @returns {ReasonsData} */
declare function ReasonsData(): ReasonsData;
type ReasonsData = {
    /**
     * - Reasons data for bags.
     */
    products?: ProductsReasons[];
    /**
     * - Reasons data for shipments.
     */
    entities?: EntitiesReasons[];
};
/** @returns {Products} */
declare function Products(): Products;
type Products = {
    /**
     * - The specific line item of bag.
     */
    line_number?: number;
    /**
     * - The quantity of the product.
     */
    quantity?: number;
    /**
     * - The unique identifier for the product.
     */
    identifier?: string;
};
/** @returns {ProductsDataUpdatesFilters} */
declare function ProductsDataUpdatesFilters(): ProductsDataUpdatesFilters;
type ProductsDataUpdatesFilters = {
    /**
     * - The specific line item of bag.
     */
    line_number?: number;
    /**
     * - The quantity of the product.
     */
    identifier?: string;
};
/** @returns {ProductsDataUpdates} */
declare function ProductsDataUpdates(): ProductsDataUpdates;
type ProductsDataUpdates = {
    /**
     * - Information about the data to be updated.
     */
    data?: any;
    /**
     * - Criteria applied to
     * filter the products.
     */
    filters?: ProductsDataUpdatesFilters[];
};
/** @returns {EntitiesDataUpdates} */
declare function EntitiesDataUpdates(): EntitiesDataUpdates;
type EntitiesDataUpdates = {
    /**
     * - Information about the data to be updated.
     */
    data?: any;
    /**
     * - Criteria applied to filter the shipments.
     */
    filters?: any[];
};
/** @returns {DataUpdates} */
declare function DataUpdates(): DataUpdates;
type DataUpdates = {
    /**
     * - Data updates for bags.
     */
    products?: ProductsDataUpdates[];
    /**
     * - Data updates for shipments.
     */
    entities?: EntitiesDataUpdates[];
};
/** @returns {ShipmentsRequest} */
declare function ShipmentsRequest(): ShipmentsRequest;
type ShipmentsRequest = {
    reasons?: ReasonsData;
    /**
     * - Specific bag to be updated.
     */
    products?: Products[];
    data_updates?: DataUpdates;
    /**
     * - The unique identifier for request which is
     * the shipment_id.
     */
    identifier: string;
};
/** @returns {StatuesRequest} */
declare function StatuesRequest(): StatuesRequest;
type StatuesRequest = {
    /**
     * - A list containing information
     * about shipments.
     */
    shipments?: ShipmentsRequest[];
    /**
     * - State to be change for
     * Remaining Bag/Products.
     */
    exclude_bags_next_state?: string;
    /**
     * - The status to which the entity is to be transitioned.
     */
    status?: string;
};
/** @returns {OrderRequest} */
declare function OrderRequest(): OrderRequest;
type OrderRequest = {
    /**
     * - Metadata for the order.
     */
    meta?: any;
};
/** @returns {UpdateShipmentStatusRequest} */
declare function UpdateShipmentStatusRequest(): UpdateShipmentStatusRequest;
type UpdateShipmentStatusRequest = {
    /**
     * - An array containing different status details.
     */
    statuses?: StatuesRequest[];
    /**
     * - Indicates whether the task is active or required.
     */
    task?: boolean;
    /**
     * - Indicates whether the status
     * should be locked after the transition.
     */
    lock_after_transition?: boolean;
    /**
     * - Indicates whether the transition
     * should be forced.
     */
    force_transition?: boolean;
    /**
     * - Indicates whether the status
     * should be unlocked before the transition.
     */
    unlock_before_transition?: boolean;
};
/** @returns {StatusesBodyResponse} */
declare function StatusesBodyResponse(): StatusesBodyResponse;
type StatusesBodyResponse = {
    /**
     * - List of shipments.
     */
    shipments?: any[];
};
/** @returns {ShipmentApplicationStatusResponse} */
declare function ShipmentApplicationStatusResponse(): ShipmentApplicationStatusResponse;
type ShipmentApplicationStatusResponse = {
    /**
     * - An array containing different
     * status options of shipments.
     */
    statuses?: StatusesBodyResponse[];
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
    /**
     * - The HTTP status code of the response.
     */
    code?: string;
    /**
     * - A message providing details about the response.
     */
    message?: string;
    /**
     * - An additional code providing more context about
     * the response.
     */
    status?: number;
    /**
     * - Details of any exception that occurred.
     */
    exception?: string;
    /**
     * - The stack trace of any exception that occurred.
     */
    stack_trace?: string;
};
