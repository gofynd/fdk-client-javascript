const Joi = require("joi");

/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} [shipment_ids] - Shipment Ids to clear cache
 * @property {string[]} [affiliate_bag_ids] - Affiliate Bag Ids to clear cache
 *   of shipment Ids mapped to it
 * @property {string[]} [bag_ids] - Bag Ids to clear cache of shipment Ids mapped to it
 */

/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [shipment_id]
 * @property {number} [status]
 * @property {string} [message]
 * @property {string} [error]
 */

/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */

/**
 * @typedef UpdatePackingErrorResponse
 * @property {number} [status] - Represents the HTTP status code of the API response.
 * @property {string} [error] - Descriptive error message that occurred.
 */

/**
 * @typedef ErrorResponse
 * @property {number} [status] - Represents the HTTP status code of the API response.
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} message - A message describing the error that occurred.
 * @property {string} [error_trace] - Error trace of the error that occurred.
 * @property {string} [error]
 */

/**
 * @typedef StoreReassign
 * @property {number} store_id - Unique id of the store.
 * @property {number} [bag_id] - Identifier for the bag associated with the reassignment.
 * @property {string} [affiliate_order_id] - Identifier for the affiliate order
 *   id associated with the reassignment.
 * @property {string} [affiliate_id] - Identifier for the affiliate id
 *   associated with the reassignment.
 * @property {string} [item_id] - Identifier for the item associated with the
 *   reassignment.
 * @property {string} [fynd_order_id] - Identifier for the fynd order id
 *   associated with the reassignment.
 * @property {string} [set_id] - Identifier for the set of items associated with
 *   the reassignment.
 * @property {string} [affiliate_bag_id] - Identifiers for bags associated with
 *   the reassignment.
 * @property {number[]} [reason_ids] - List of reason ids for the reassignment.
 * @property {string} [mongo_article_id] - Identifier for the article id
 *   associated with the reassignment.
 */

/**
 * @typedef StoreReassignResponse
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 */

/**
 * @typedef LockManagerEntities
 * @property {string} [id] - Shipment ID if 'entity_type': shipments | Bag Id if
 *   'entity_type': bags
 * @property {string} [affiliate_order_id] - External identifier for the order
 *   id associated with shipment.
 * @property {string} [affiliate_id] - Identifier for application associated
 *   with the shipment.
 * @property {string} reason_text - A descriptive reason text for lock/unlock
 *   action of a shipment/bag.
 * @property {string} [affiliate_bag_id] - External identifier for the bag id
 *   associated with orders/shipment.
 * @property {string} [affiliate_shipment_id] - External identifier for the
 *   shipment id associated with orders/shipment.
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} entity_type - Specifies the type of entity being locked or unlocked.
 * @property {string} action - Indicates the action to be performed on the entity.
 * @property {string} action_type - Specifies the type of action being taken.
 * @property {LockManagerEntities[]} entities - List of entities to be locked or unlocked
 * @property {boolean} [resume_tasks_after_unlock] - Indicates whether tasks
 *   should resume automatically after unlocking, such as DP assignment task and
 *   invoicing task.
 * @property {boolean} [lock_after_transition] - Specifies whether the shipment
 *   should be locked automatically after a transition occurs.
 * @property {boolean} [unlock_before_transition] - Specifies whether the
 *   shipment should be unlocked before a transition occurs.
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_shipment_id] - Affiliate Shipment ID
 * @property {string} [affiliate_id] - Affiliate ID
 */

/**
 * @typedef Bags
 * @property {number} [bag_id] - Bag Id
 * @property {string} [affiliate_bag_id] - Application/Affiliate Bag ID,
 *   Required if the ID is missing
 * @property {boolean} [is_locked] - Is Bag Locked
 * @property {string} [affiliate_order_id] - Application/Affiliate Order ID,
 *   Required if the ID is missing
 */

/**
 * @typedef CheckResponse
 * @property {string} [shipment_id] - Shipment ID
 * @property {string} [status] - Status
 * @property {boolean} [is_bag_locked] - Is Bag Locked
 * @property {string} [affiliate_id] - Affiliate ID
 * @property {OriginalFilter} [original_filter] - Filter
 * @property {boolean} [is_shipment_locked] - Is Shipment Locked
 * @property {string} [lock_status] - Lock Status: Expected lock_status:
 *   [complete, operational, financial]
 * @property {string} [affiliate_shipment_id] - Affiliate Shipment ID
 * @property {Bags[]} [bags]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response, such as success confirmation or error details.
 * @property {CheckResponse[]} [check_response] - An array containing the lock
 *   status of entities if the action performed was a 'check'. Each item in the
 *   array represents the status of a specific entity.
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [to_datetime] - The end date and time for the event,
 *   indicating when the issue is expected to be resolved.
 * @property {number} id - A unique identifier for the announcement.
 * @property {string} [description] - A brief description providing additional
 *   context about the announcement.
 * @property {string} [platform_name] - The name of the platform associated with
 *   this announcement.
 * @property {string} [from_datetime] - The start date and time of the
 *   announcement going live.
 * @property {string} [platform_id] - The unique identifier associated with the
 *   platform. In this case, it appears to be the same as the platform name,
 *   which might indicate a specific category or type.
 * @property {string} [title] - The title summarizing the nature of the announcement.
 * @property {number} [company_id] - A unique identifier for the company related
 *   to this announcement.
 * @property {string} [logo_url] - A URL linking to the logo image associated
 *   with the platform or company.
 * @property {string} [created_at] - The timestamp of when this announcement was
 *   created, providing context for its age and relevance.
 */

/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {number} [status] - Represents the HTTP status code of the API response
 */

/**
 * @typedef BaseResponse
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 */

/**
 * @typedef ErrorDetail
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {number} [line_number] - The line number for the product or bag,
 *   which helps identify the specific item in a list or order.
 * @property {string} [identifier] - The unique article or item identifier for
 *   the product or bag.
 * @property {number} [quantity] - The quantity of the product or bag being referenced.
 */

/**
 * @typedef ProductsReasonsData
 * @property {string} [reason_text] - A descriptive text providing the reason
 *   for the action or status associated with the product or bag.
 * @property {number} [reason_id] - A unique identifier for the reason, used to
 *   reference specific reasons in the system.
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsFilters[]} [filters] - A list of filters applied to
 *   specify which products the reasons pertain to.
 * @property {ProductsReasonsData} [data]
 */

/**
 * @typedef EntityReasonData
 * @property {string} [reason_text] - A descriptive text providing the reason
 *   for the action or status associated with the product or bag.
 * @property {number} [reason_id] - A unique identifier for the reason, used to
 *   reference specific reasons in the system.
 */

/**
 * @typedef EntitiesReasons
 * @property {Object[]} [filters] - A list of filters applied to specify which
 *   entities the reasons pertain to.
 * @property {EntityReasonData} [data]
 */

/**
 * @typedef ReasonsData
 * @property {ProductsReasons[]} [products] - A list of reasons specifically
 *   related to products involved in the shipment.
 * @property {EntitiesReasons[]} [entities] - A list of reasons specifically
 *   related to shipment.
 */

/**
 * @typedef Products
 * @property {number} [line_number] - The line number for the product or bag,
 *   which helps identify the specific item in a list or order.
 * @property {string} [identifier] - The unique article or item identifier for
 *   the product or bag.
 * @property {number} [quantity] - The quantity of the product or bag being referenced.
 */

/**
 * @typedef OrderItemDataUpdates
 * @property {Object} [data] - Contains the specific data for updating shipment bags data.
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {number} [line_number] - The line number for the product or bag.
 * @property {string} [identifier] - The unique article or item identifier for
 *   the product or bag.
 */

/**
 * @typedef ProductsDataUpdates
 * @property {ProductsDataUpdatesFilters[]} [filters] - A list of filters
 *   applied to specify which products or bags are targeted for updates.
 * @property {Object} [data] - Contains the specific data for updating the
 *   products or bags.
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object[]} [filters] - A list of filters used to specify which
 *   shipments are targeted for updates.
 * @property {Object} [data] - Contains the specific data for updating the shipment.
 */

/**
 * @typedef DataUpdates
 * @property {OrderItemDataUpdates[]} [order_item_status] - A list of updates
 *   related to the status of order items.
 * @property {ProductsDataUpdates[]} [products] - A list of updates related to
 *   the properties of products or bags.
 * @property {EntitiesDataUpdates[]} [entities] - A list of updates related to
 *   the properties of any relevant entities.
 */

/**
 * @typedef ShipmentsRequest
 * @property {string} identifier - Unique identifier for the shipment.
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products] - A list of products or bags that need to
 *   be updated as part of the shipment status change.
 * @property {DataUpdates} [data_updates]
 */

/**
 * @typedef StatuesRequest
 * @property {string} [status] - The new status to be assigned to the shipment(s).
 * @property {ShipmentsRequest[]} [shipments] - A list of shipments to which the
 *   new status will be applied.
 * @property {string} [exclude_bags_next_state] - Specifies the state to which
 *   remaining bags or products should be changed, effectively excluding them
 *   from the current status update.
 * @property {boolean} [split_shipment] - A flag indicating whether the shipment
 *   should be split into multiple parts. If set to true, the shipment will be
 *   divided according to the specified logic or criteria.
 */

/**
 * @typedef UpdateShipmentStatusRequestSchema
 * @property {boolean} [force_transition] - Indicates whether to force the
 *   status transition, overriding any restrictions or checks that may normally apply.
 * @property {StatuesRequest[]} [statuses] - A list of status updates to be
 *   applied to the shipment.
 * @property {boolean} [lock_after_transition] - Specifies whether the shipment
 *   should be locked automatically after a transition occurs.
 * @property {boolean} [unlock_before_transition] - Specifies whether the
 *   shipment should be unlocked before a transition occurs.
 * @property {boolean} [task] - Indicates whether to run the status update as a
 *   background task, allowing other processes to continue without waiting for
 *   this operation to complete.
 * @property {boolean} [resume_tasks_after_unlock] - Indicates whether tasks
 *   should resume automatically after unlocking, such as DP assignment task and
 *   invoicing task.
 */

/**
 * @typedef ShipmentsResponse
 * @property {number} [status]
 * @property {Object} [final_state]
 * @property {string} [identifier]
 * @property {string} [stack_trace]
 * @property {string} [code]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {string} [exception]
 */

/**
 * @typedef StatuesResponse
 * @property {ShipmentsResponse[]} [shipments]
 */

/**
 * @typedef UpdateShipmentStatusResponseBody
 * @property {StatuesResponse[]} [statuses]
 */

/**
 * @typedef DPConfiguration
 * @property {string} [shipping_by] - Shipping_by denotes dp assignment
 *   strategy- if shipping_by is fynd dp assignment would be handled by OMS
 */

/**
 * @typedef PaymentConfig
 * @property {string} [mode_of_payment] - Specifies the mode through which the
 *   payment was collected, serving as an identifier for the payment's origin.
 * @property {string} [source] - The source field identifies the channel through
 *   which the order was placed, such as MARKETPLACE, ECOMM.
 */

/**
 * @typedef CreateOrderConfig
 * @property {DPConfiguration} dp_configuration
 * @property {string} [integration_type] - Flag denotes integration type which
 *   is used to retrieve specific configurations and application details
 *   relevant to channel fulfillment.
 * @property {boolean} [location_reassignment] - Flag denotes if the location
 *   for the store needs to be reassigned post cancellation.
 * @property {PaymentConfig} [payment]
 * @property {boolean} [optimal_shipment_creation] - Denotes the shipment
 *   breaking strategy. If the flag is set true, the shipment is created using
 *   optimal shipment creation strategy based on the servicability & packaging
 *   dimensions by OMS .If false, shipment details, including location_id, must
 *   be passed to FDK for processing.
 */

/**
 * @typedef CreateOrderResponse
 * @property {string} fynd_order_id - A string that represents the unique
 *   identifier assigned to the order.
 */

/**
 * @typedef DispatchManifest
 * @property {string} manifest_id - The unique identifier for the manifest being
 *   dispatched.
 */

/**
 * @typedef SuccessResponse
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 */

/**
 * @typedef ActionInfo
 * @property {string} display_text - A user-friendly text that represents the
 *   action associated with the permission.
 * @property {number} id - A unique identifier for the permission, used for
 *   referencing within the system.
 * @property {string} description - A detailed explanation of what the
 *   permission allows the user to do.
 * @property {string} slug - A URL-friendly string that serves as a unique
 *   identifier for the permission, often used in routing or API calls.
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo[]} [permissions] - A response object that contains a
 *   list of permissions available to the user.
 */

/**
 * @typedef HistoryReason
 * @property {string} [text] - A reason for the activity or change.
 * @property {string} [category] - Category of the reason for the status change.
 * @property {string} [state] - Current state related to the reason.
 * @property {string} [dislay_name] - Display name of the reason for better user
 *   understanding.
 * @property {number} [code] - Unique code identifying the reason.
 * @property {number} [quantity] - Quantity related to the reason, if applicable.
 */

/**
 * @typedef HistoryMeta
 * @property {number} [store_id] - Unique identifier for the store involved in
 *   the activity.
 * @property {string} [status] - Current status of the activity or item.
 * @property {string} [status1] - Additional status information if necessary.
 * @property {string} [call_id] - Identifier for any related calls, if applicable.
 * @property {string} [starttime] - Start time of the activity.
 * @property {HistoryReason} [reason]
 * @property {string} [short_link] - A shortened link related to the activity,
 *   if available.
 * @property {string} [endtime] - End time of the activity.
 * @property {string} [store_name] - Name of the store involved in the activity.
 * @property {string} [caller] - Name of the caller associated with the activity.
 * @property {string} [store_code] - Code associated with the store.
 * @property {string} [billsec] - Duration of the billable period, if applicable.
 * @property {string} [recordpath] - Path to any related recordings, if applicable.
 * @property {string} [status2] - Additional status information if necessary.
 * @property {string} [callerid] - Caller ID associated with the activity, if applicable.
 * @property {string} [duration] - Total duration of the activity.
 * @property {string} [channel_type] - Type of channel used for the activity, if
 *   applicable.
 * @property {string} [activity_comment] - Comments related to the activity, if
 *   applicable.
 * @property {string} [activity_type] - Type of activity being recorded, if applicable.
 * @property {string} [receiver] - Name of the receiver involved in the
 *   activity, if applicable.
 * @property {string} [recipient] - Recipient of the activity, if applicable.
 * @property {string} [slug] - Slug identifier for the activity.
 * @property {string} [message] - Any additional messages related to the activity.
 */

/**
 * @typedef HistoryDict
 * @property {string} [display_message] - User-friendly message displaying the
 *   activity or status change.
 * @property {number} [bag_id] - Identifier for the bag associated with the activity.
 * @property {string} [ticket_url] - URL for any related tickets.
 * @property {string} [l3_detail] - L3 details regarding the bag or activity.
 * @property {string} createdat - Date and time when the activity was created.
 * @property {string} [created_ts] - Timestamp for when the activity was created
 *   in ISO format.
 * @property {string} [ticket_id] - Unique identifier for the ticket associated
 *   with the activity.
 * @property {string} type - Type of activity history
 * @property {string} [l2_detail] - L2 details regarding the bag or activity.
 * @property {string} [assigned_agent] - Name of the agent assigned to the activity.
 * @property {HistoryMeta} [meta] - Metadata about the activity
 * @property {string} [l1_detail] - L1 details regarding the bag or activity.
 * @property {string} message - Message or comment regarding the history.
 * @property {string} user - Name of the user who created the history record.
 */

/**
 * @typedef ShipmentHistoryResponse
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {HistoryDict[]} activity_history - A list of activity records
 *   related to the shipment, providing details on actions taken, comments
 *   added, or notifications sent.
 */

/**
 * @typedef PostHistoryFilters
 * @property {string} shipment_id - Unique identifier for the shipment
 * @property {string} [line_number] - Optional field to specify a particular
 *   line item in the shipment.
 * @property {string} [identifier] - Optional field for any additional
 *   identifier related to the shipment.
 */

/**
 * @typedef PostHistoryData
 * @property {string} user_name - The name or email of the user who performed
 *   the action or recorded the entry.
 * @property {string} message - A descriptive message detailing the action taken
 *   or the status related to the shipment.
 */

/**
 * @typedef PostHistoryDict
 * @property {PostHistoryFilters[]} filters - A list of filter objects, each
 *   following the PostHistoryFilters schema, used to identify which shipment
 *   history records are relevant.
 * @property {PostHistoryData} data
 */

/**
 * @typedef PostShipmentHistory
 * @property {PostHistoryDict[]} [activity_history] - A list of activity history
 *   records, each adhering to the PostHistoryDict schema.
 */

/**
 * @typedef SmsDataPayload
 * @property {number} shipment_id - Unique identifier for the shipment
 *   associated with the SMS.
 * @property {number} phone_number - The recipient's phone number for communication.
 * @property {number} [amount_paid] - The amount that has been paid, as mapped
 *   in the communication template.
 * @property {string} order_id - Unique identifier for the order associated with
 *   the shipment.
 * @property {string} [payment_mode] - The mode of payment used for the order,
 *   as mapped in the communication template.
 * @property {string} [customer_name] - The name of the customer, as mapped in
 *   the communication template.
 * @property {string} [brand_name] - The name of the brand associated with the
 *   order, as mapped in the communication template.
 * @property {string} message - The content of the SMS to be sent to the recipient.
 * @property {string} country_code - The country code for the recipient's phone
 *   number, necessary for proper SMS delivery.
 */

/**
 * @typedef SendSmsPayload
 * @property {number} bag_id - Unique identifier for the bag, used for tracking
 *   activity history related to this SMS.
 * @property {SmsDataPayload} [data] - Contains the SMS data necessary for communication.
 * @property {string} slug - Slug name for the SMS template mapped in the
 *   communication system, used to identify the specific messaging format or content.
 */

/**
 * @typedef OrderDetails
 * @property {string} [fynd_order_id]
 * @property {string} [created_at]
 * @property {string} [user_id]
 * @property {TaxDetails} [tax_details]
 * @property {number} [mongo_cart_id]
 * @property {number} [delivery_charges]
 * @property {string} [transaction_id]
 * @property {string} [collect_by]
 * @property {Object} [headers]
 * @property {number} [coupon_value]
 * @property {number} [order_value]
 * @property {string} [created_time]
 * @property {string} [currency]
 * @property {number} [total_order_value]
 * @property {string} [ordering_channel]
 * @property {Object} [meta]
 * @property {number} [cod_charges]
 * @property {number} [cashback_value]
 * @property {string} [refund_by]
 * @property {string} [affiliate_order_date]
 * @property {Object} [payment_methods]
 * @property {string} [affiliate_order_id]
 * @property {number} [payment_mode_id]
 * @property {number} [promotion_effective_discount]
 * @property {string} [mode_of_payment]
 * @property {number} [discount]
 * @property {number} [cashback_applied]
 * @property {number} [fynd_credits]
 * @property {string} [affiliate_id]
 * @property {string} [ordering_channel_logo]
 * @property {Prices} [prices]
 */

/**
 * @typedef Meta
 * @property {number} [kafka_emission_status] - An integer representing the
 *   status of the message upon emission to Kafka. 0 indicates success, while 1
 *   indicates failure.
 * @property {string} [state_manager_used] - A string that specifies the state
 *   manager utilized for handling the order's state.
 */

/**
 * @typedef ShipmentDetail
 * @property {string} [shipment_id] - Unique identifier for the shipment
 *   associated with the order.
 * @property {string} [status] - A string representing the current status of the shipment
 * @property {number} id - An integer that serves as a unique identifier for the
 *   shipment detail
 * @property {number[]} [bag_list] - A list of bag identifiers associated with
 *   the shipment.
 * @property {Meta} meta
 * @property {string} [remarks] - A string for any additional comments or notes
 *   related to the shipment,
 */

/**
 * @typedef OrderStatusData
 * @property {OrderDetails} order_details
 * @property {string[]} [errors] - A list of any errors that occurred while
 *   attempting to obtain the order's status.
 * @property {ShipmentDetail[]} [shipment_details] - A list of the individual
 *   shipments associated with the order and their current statuses.
 * @property {string} [text] - A label or description of the delivery status,
 *   such as 'Expected Delivery Date'.
 * @property {string} [value] - The detailed delivery status or time
 *   information, such as 'Arriving on 24 Nov 2022 15:54:00'.
 * @property {string} [color_code] - Hex code for the color representing the
 *   delivery status.
 * @property {string} [expected_delivery_date] - The ISO 8601 formatted date and
 *   time when the delivery is expected, e.g., '2022-11-24T22:15:54+00:00'.
 */

/**
 * @typedef OrderStatusResult
 * @property {string} success - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {OrderStatusData[]} [result] - The order's current status and
 *   related shipment details.
 */

/**
 * @typedef Dimension
 * @property {string} [packaging_type] - Describes the type of packaging used.
 * @property {number} [weight] - The weight of the package in kilograms.
 * @property {number} [height] - The height of the package in centimetres.
 * @property {number} [length] - The length of the package in centimetres.
 * @property {number} [width] - The width of the package in centimetres.
 */

/**
 * @typedef UpdatePackagingDimensionsPayload
 * @property {string} shipment_id - Unique identifier for the shipment for which
 *   the packaging dimensions are being updated.
 * @property {string} current_status - The current status of the shipment.
 * @property {Dimension[]} dimension - A list of dimensions for the packaging.
 */

/**
 * @typedef UpdatePackagingDimensionsResponse
 * @property {string} [message]
 */

/**
 * @typedef Tax
 * @property {string} name - The name of the tax, indicating its purpose (e.g.,
 *   VAT, sales tax).
 * @property {number} rate - The tax rate as a decimal, applied to the transaction amount.
 * @property {Object[]} [breakup] - An array of objects detailing the components
 *   or breakdown of the tax applied.
 * @property {Object} amount - An object representing the total tax amount
 *   calculated for the transaction.
 */

/**
 * @typedef AmountSchema
 * @property {string} [currency] - The value indicating the currency used for
 *   the transactions.
 * @property {number} [value] - The final amount of the charge.
 */

/**
 * @typedef Charge
 * @property {string} name - The name of the charge that indicates its purpose.
 * @property {AmountSchema} amount
 * @property {Tax} [tax]
 * @property {string} [code] - An optional code associated with the charge for
 *   internal tracking.
 * @property {string} type - The category or type of the charge.
 */

/**
 * @typedef LineItem
 * @property {Charge[]} [charges] - An array of Charge objects related to the line item.
 * @property {Object} [meta] - An object containing metadata relevant to
 *   articles or line items.
 * @property {string} [custom_message] - A string for any special instructions
 *   or messages related to the line item.
 * @property {number} [quantity] - Quantity of the articles or line items.
 * @property {string} seller_identifier - Unique identifier of the articles or
 *   line items set by seller.
 * @property {string} [external_line_id] - External unique identifier of the
 *   articles or line items.
 */

/**
 * @typedef ProcessingDates
 * @property {Object} [dp_pickup_slot] - An object that provides details about
 *   the designated pickup time slot for the order.
 * @property {string} [dispatch_after_date] - A string indicating the date after
 *   which the order will be dispatched.
 * @property {string} [dispatch_by_date] - A string representing the latest date
 *   by which the order must be dispatched to meet delivery expectations.
 * @property {string} [confirm_by_date] - A string that indicates the deadline
 *   for the merchant to confirm the order.
 * @property {Object} [customer_pickup_slot] - An object that provides details
 *   of the pick-up time slot set by the customer.
 * @property {string} [pack_by_date] - A string indicating the date by which the
 *   order must be packaged for fulfillment.
 */

/**
 * @typedef Shipment
 * @property {LineItem[]} line_items - An array of LineItem objects that
 *   represent the items included in the shipment.
 * @property {string} [external_shipment_id] - External shipment identifier or
 *   marketplace's unique shipment identifier.
 * @property {ProcessingDates} [processing_dates]
 * @property {Object} [meta] - An object containing metadata related to the shipment.
 * @property {number} [priority] - An integer indicating the priority level of
 *   the shipment.
 * @property {number} [location_id] - Location Identifier or Store/Fulfillment
 *   Identifier of the shipment- This field is mandatory when
 *   optimal_shipment_creation flag is set to false, indicating that shipments
 *   must be associated with a specific location. When
 *   `optimal_shipment_creation` is true, the optimal location for order
 *   creation would be assigned, location_id becomes optional.
 * @property {string} [order_type] - The order type of shipment.
 * @property {string} [parent_type]
 * @property {string} [store_invoice_id]
 * @property {string} [lock_status]
 * @property {string} [type]
 * @property {PlatformDeliveryAddress} [billing_address_json]
 * @property {string} [id]
 * @property {number} [fulfilment_priority]
 * @property {boolean} [is_active]
 * @property {string} [previous_shipment_id]
 * @property {Object} [pdf_links]
 * @property {PlatformDeliveryAddress} [delivery_address_json]
 * @property {string} [eway_bill_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [fynd_order_id]
 * @property {string[]} [tags]
 * @property {string} [created_at]
 * @property {string} [delivery_awb_number]
 * @property {PlatformDeliveryAddress} [hand_over_contact_json]
 * @property {string} [credit_note_id]
 * @property {string} [parent_id]
 * @property {string} [affiliate_id]
 * @property {string} [packaging_type]
 * @property {string} [vertical]
 * @property {number} [quantity]
 * @property {ShipmentStatusData} [status]
 * @property {Prices} [price]
 * @property {ShipmentGstDetails} [gst]
 */

/**
 * @typedef GeoLocationSchema
 * @property {number} [latitude] - A number representing the geographical
 *   latitude of the location.
 * @property {number} [longitude] - A number representing the geographical
 *   longitude of the location
 */

/**
 * @typedef ShippingInfo
 * @property {string} [alternate_mobile_number] - A string for an alternate
 *   mobile number to reach the customer, providing an additional contact method.
 * @property {string} [state] - A string representing the name of the state for
 *   shipping purposes.
 * @property {string} [customer_code] - A string representing the customer's
 *   unique identifier in the seller's system.
 * @property {string} [shipping_type] - A string describing the shipping type.
 * @property {string} [middle_name] - A string containing the customer's middle name.
 * @property {string} [primary_mobile_number] - A string for the customer's
 *   primary mobile number.
 * @property {string} [last_name] - A string containing the customer's last name.
 * @property {GeoLocationSchema} [geo_location]
 * @property {string} [gender] - A string representing the customer's gender.
 * @property {string} [house_no] - A string representing the house or apartment
 *   number of the customer.
 * @property {string} [first_name] - A string representing the customer's first name.
 * @property {string} [title] - A string representing the customer's title or prefix.
 * @property {string} [landmark] - A string representing a landmark or reference
 *   point near the customer's location.
 * @property {string} [country] - A string representing the customer's country.
 * @property {string} [address_type] - A string representing the address type in
 *   the seller's system.
 * @property {string} [state_code] - A string representing the state code of the
 *   customer's location.
 * @property {string} [city] - A string representing the city of the customer's location.
 * @property {string} [external_customer_code] - A string representing an
 *   external customer code in the seller's system.
 * @property {string} [floor_no] - A string representing the floor number of the
 *   customer's location.
 * @property {string} [alternate_email] - A string representing an alternate
 *   email address for the customer.
 * @property {Object[]} [slot] - A list of objects representing available time
 *   slot for delivery or pickup.
 * @property {string} [address] - A comma-separated string representing the address.
 * @property {string} [area] - A string representing the area of the customer's location.
 * @property {string} [address1] - A string representing the first line of the address.
 * @property {string} [pincode] - A string representing the pincode of the
 *   customer's location.
 * @property {string} [primary_email] - A string representing the primary email
 *   address for the customer.
 * @property {string} [address2] - A string representing the second line of the address.
 * @property {string} [country_code] - A string representing the country code of
 *   the customer's location.
 * @property {string} [country_iso_code] - Country Code in ISO 2 format (e.g. US, IN)
 */

/**
 * @typedef UserInfo
 * @property {string} [user_id] - The unique identifier assigned to the user.
 * @property {string} [user_type] - A string representing the type of the user.
 * @property {string} [primary_email] - A string representing the primary email
 *   address for the user.
 * @property {string} [gender] - A string specifying the gender of the user.
 * @property {string} first_name - A string which specifies the user's first name.
 * @property {string} [last_name] - A string which specifies the user's last name.
 * @property {string} primary_mobile_number - A string representing the primary
 *   mobile number for the user.
 */

/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number] - A string representing the GSTIN
 *   (Goods and Services Tax Identification Number) for business-to-business
 *   transactions.
 * @property {string} [gstin] - A string that specifies the GSTIN for the seller.
 * @property {string} [pan_no] - A string representing the PAN assigned to
 *   individuals or entities for tax purposes in India.
 */

/**
 * @typedef PaymentMethod
 * @property {string} collect_by - A string indicating the entity responsible
 *   for collecting the payment.
 * @property {string} mode - A string that specifies the mode of payment.
 * @property {string} refund_by - A string that indicates the entity responsible
 *   for processing refunds.
 * @property {string} name - A string representing the name of the payment method.
 * @property {number} amount - A number representing the monetary value
 *   associated with the payment method.
 * @property {Object} [meta] - An object for any additional metadata related to
 *   the payment method.
 * @property {Object} [transaction_data] - An object that holds
 *   transaction-specific information.
 */

/**
 * @typedef PaymentInfo
 * @property {string} primary_mode - A string that indicates the primary payment
 *   method used for the order.
 * @property {string} [payment_mode] - A string that indicates the payment mode
 *   used for the order.
 * @property {PaymentMethod[]} [payment_methods] - A lists all available payment
 *   methods used in the transaction.
 */

/**
 * @typedef CreateOrderAPI
 * @property {Shipment[]} shipments - An array of shipment objects that detail
 *   the items being shipped as part of the order.
 * @property {ShippingInfo} shipping_info
 * @property {ShippingInfo} billing_info
 * @property {Object} [currency_info] - An object that provides details about
 *   the currency in which the order is processed, including currency code and
 *   conversion rates if applicable.
 * @property {string} [external_order_id] - A unique identifier for the order
 *   assigned by an external system.
 * @property {Charge[]} [charges] - An array of charge objects that detail the
 *   various fees associated with the order.
 * @property {string} [external_creation_date] - A string that specifies the
 *   date and time when the order was created in an external system
 * @property {Object} [meta] - A generic object that can hold any additional
 *   metadata related to the order.
 * @property {TaxInfo} [tax_info]
 * @property {CreateOrderConfig} config
 * @property {PaymentInfo} payment_info
 * @property {UserInfo} [user_info]
 * @property {number} [ordering_store_id] - Unique identifier for the store
 *   where the order was placed.
 * @property {string} [order_platform] - The platform used to place the order.
 * @property {string} [order_type] - A string that specifies the type of order
 *   being placed.
 * @property {string} [fynd_order_id] - Unique identifier for the order.
 * @property {string} [application_id] - A unique identifier for the application
 *   or system that is making the order request.
 * @property {string} [external_shipment_id] - External shipment identifier or
 *   marketplace's unique shipment identifier.
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [errors] - Contains details about the error.
 * @property {number} [status_code] - Represents the HTTP status code of the API response.
 * @property {string} [fynd_order_id] - A string that represents the unique
 *   identifier assigned to the order.
 */

/**
 * @typedef UploadManifestConsent
 * @property {string} consent_url - A URL that directs users to a consent page
 *   or document related to the upload of the manifest.
 * @property {string} manifest_id - The unique identifier for the manifest being uploaded.
 */

/**
 * @typedef PlatformOrderUpdate
 * @property {string} order_id - A string that represents the unique identifier
 *   assigned to the order.
 */

/**
 * @typedef ResponseDetail
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 * @property {number} [status] - Represents the HTTP status code of the API response.
 */

/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id] - An array of strings that represent
 *   unique identifiers assigned to an order.
 * @property {string} [start_date] - A string representing the start date for
 *   the order status query.
 * @property {string} [end_date] - A string representing the end date for the
 *   order status query.
 * @property {number} [mobile] - An integer representing the mobile number
 *   associated with the order.
 */

/**
 * @typedef OrderStatus
 * @property {FyndOrderIdList[]} [order_details] - An array of objects that
 *   provide details about the orders, including their respective order IDs.
 */

/**
 * @typedef BagStateTransitionMap
 * @property {Object} [fynd]
 * @property {Object} [affiliate]
 */

/**
 * @typedef RoleBaseStateTransitionMapping
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string[]} [next_statuses] - A list of possible next statuses that
 *   can be transitioned to from the current status.
 */

/**
 * @typedef RefundModeConfigRequestPayload
 * @property {string} fynd_order_id - A unique identifier for the order placed
 *   through the Fynd platform.
 * @property {number} seller_id - A unique identifier representing the seller
 *   associated with the order.
 * @property {string} affiliate_id - An identifier for the affiliate partner
 *   associated with the order.
 * @property {number} [customer_mobile_number] - The mobile phone number of the
 *   customer who placed the order.
 */

/**
 * @typedef RefundOption
 * @property {string} [value] - The actual value representing the refund option.
 * @property {string} [slug] - A unique identifier for the refund mode
 * @property {string} [name] - A user-friendly name for the refund option.
 * @property {string} [type] - A string indicating the type of refund
 *   information provided.
 */

/**
 * @typedef RefundModeFormat
 * @property {string} [refund_to] - Specifies the destination or method for the refunds.
 */

/**
 * @typedef RefundModeInfo
 * @property {boolean} [is_active] - A flag indicating whether the refund mode
 *   is currently active or not.
 * @property {string} [slug] - A unique identifier for the refund mode.
 * @property {RefundOption[]} [options] - A list of available refund options
 *   associated with this refund mode.
 * @property {string} [display_name] - A user-friendly name for the refund mode.
 * @property {RefundModeFormat} [format]
 */

/**
 * @typedef RefundModeConfigResponsePayload
 * @property {boolean} success - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {RefundModeInfo[]} data - An array of possible refund mode
 *   information objects.
 * @property {number} [status] - Represents the HTTP status code of the API response.
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 */

/**
 * @typedef AttachUserOtpData
 * @property {string} request_id - A string representing a unique identifier for
 *   the OTP request.
 */

/**
 * @typedef AttachUserInfo
 * @property {string} first_name - A string representing the user's first name.
 * @property {string} last_name - A string representing the user's last name.
 * @property {string} mobile - A string representing the user's mobile number.
 * @property {string} [country_code] - A string representing the user's country code.
 */

/**
 * @typedef AttachOrderUser
 * @property {AttachUserOtpData} otp_data
 * @property {string} fynd_order_id - A unique identifier for the order
 *   associated with the user attach.
 * @property {AttachUserInfo} user_info
 */

/**
 * @typedef AttachOrderUserResponse
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 */

/**
 * @typedef SendUserMobileOTP
 * @property {number} mobile - The mobile phone number of the user to whom the
 *   OTP (One-Time Password) will be sent.
 * @property {string} [country_code] - The country code associated with the
 *   user's mobile number.
 */

/**
 * @typedef PointBlankOtpData
 * @property {string} [request_id] - A unique identifier for the OTP request.
 * @property {number} [resend_timer] - The amount of time (in seconds) before
 *   the OTP can be resent to the user.
 * @property {string} [message] - A message providing additional information
 *   about the OTP request.
 * @property {number} [mobile] - The mobile number (in integer format)
 *   associated with the OTP request.
 */

/**
 * @typedef SendUserMobileOtpResponse
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {number} [status] - The HTTP status code of the API response
 *   (200/400/500/503).
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 * @property {PointBlankOtpData} [data]
 */

/**
 * @typedef VerifyOtpData
 * @property {string} request_id - A unique identifier for the OTP verification request.
 * @property {string} mobile - The mobile number associated with the OTP verification.
 * @property {number} otp_code - The OTP code received by the user.
 */

/**
 * @typedef VerifyMobileOTP
 * @property {VerifyOtpData} otp_data
 * @property {string} fynd_order_id - A unique identifier for the order
 *   associated with the OTP verification.
 */

/**
 * @typedef VerifyOtpResponseData
 * @property {string} [mobile] - The mobile number associated with the verified OTP.
 * @property {string} [message] - A string that provides a message about the
 *   outcome of the verification process.
 * @property {string} [fynd_order_id] - Unique identifier for the order
 *   associated with the OTP verification.
 * @property {string} [country_code] - A string indicating the country code
 *   associated with the mobile number.
 */

/**
 * @typedef VerifyOtpResponse
 * @property {number} [status] - Represents the HTTP status code of the API response.
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 * @property {VerifyOtpResponseData} [data]
 */

/**
 * @typedef BulkReportsDownloadRequest
 * @property {string[]} [store_ids] - A list of specific store IDs for which the
 *   reports should be generated.
 * @property {string} [lane_type] - Specifies the type of lane for which the
 *   report is being requested.
 * @property {string[]} [custom_headers] - Allows users to specify custom
 *   headers for the downloaded report.
 * @property {string} [report_type] - Indicates the type of report being requested.
 * @property {string} [start_date] - UTC start date in ISO format, defines the
 *   beginning of the date range for which the report data should be collected.
 * @property {string} [end_date] - UTC end date in ISO format, defines the end
 *   date range for which the report data should be collected.
 * @property {string[]} [entities] - Download for specific enitites or for
 *   search filters applied, entities can be bag, shipment or order_id, etc.
 * @property {string} [filter_type] - Specifies the type of filtering to be
 *   applied to the report data.
 * @property {boolean} [is_cross_company_enabled] - Indicates whether the report
 *   should include data from cross-company operations.
 * @property {Object} [custom_filters_for_lane] - A flexible object that allows
 *   users to define custom filters specific to the lanes being reported on.
 */

/**
 * @typedef BulkReportsDownloadResponse
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [batch_id] - A unique identifier for the batch of reports generated.
 */

/**
 * @typedef APIFailedResponse
 * @property {boolean} [status] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [error] - A descriptive message detailing the error that
 *   occurred during the API call.
 */

/**
 * @typedef BulkStateTransistionRequestSchema
 * @property {string} [url] - Endpoint or resource URL where the bulk state
 *   transition request should be directed.
 * @property {string} [file_name] - Name of the file associated with the bulk operation.
 */

/**
 * @typedef BulkStateTransistionResponse
 * @property {boolean} [status] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 * @property {string} [batch_id] - A unique identifier for the batch of reports generated.
 */

/**
 * @typedef ShipmentActionInfo
 * @property {string[]} [label]
 * @property {string[]} [invoice]
 * @property {Object[]} [failed_shipments]
 * @property {string[]} [processing_shipments]
 * @property {string[]} [successful_shipments]
 * @property {string[]} [invoiceable_shipments]
 * @property {Object} [failed_invoiced_shipments]
 * @property {string[]} [processing_invoice_shipments]
 * @property {string[]} [successful_invoiced_shipments]
 */

/**
 * @typedef BulkActionListingData
 * @property {number} [store_id] - The unique identifier for the store
 *   associated with the bulk action.
 * @property {string} [uploaded_on] - A timestamp indicating when the bulk
 *   action was uploaded.
 * @property {number} [company_id] - Unique identifier of a company on the platform.
 * @property {ShipmentActionInfo} [shipments_action_info]
 * @property {boolean} [is_invoiceable] - Indicates whether the bulk action is
 *   eligible for invoicing.
 * @property {string} [user_name] - The name of the user who initiated or
 *   uploaded the bulk action.
 * @property {string} [file_url] - The URL where the uploaded file can be accessed.
 * @property {Object} [meta] - A flexible object that can contain additional
 *   metadata related to the bulk action.
 * @property {string} [invoice_document_type] - The type of document that is
 *   used for invoicing this bulk action.
 * @property {string} [label_document_type] - The type of document that is used
 *   for creating labels for this bulk action.
 * @property {string} [file_name] - The name of the file that was uploaded as
 *   part of the bulk action.
 * @property {string} [store_name] - The name of the store associated with the
 *   bulk action.
 * @property {number} [updated_ts] - A timestamp (in Unix format) indicating
 *   when the bulk action was last updated.
 * @property {boolean} [status] - Indicates the current status of the bulk action.
 * @property {string} [store_code] - A code representing the store, which can be
 *   used for internal tracking or identification.
 * @property {string} [bulk_action_type] - Specifies the type of bulk action
 *   being performed.
 * @property {string} [created_ts] - A timestamp indicating when the bulk action
 *   was created.
 * @property {string} [invoice_status] - Represents the current status of the
 *   invoice associated with the bulk action.
 * @property {boolean} [do_invoice_label_generated] - Indicates whether an
 *   invoice label has been generated for the bulk action or not.
 * @property {number} [id] - A unique identifier for the bulk action record.
 * @property {string} [user_id] - The unique identifier for the user who
 *   initiated the bulk action.
 * @property {string} [last_selected_invoice_label_type] - Indicates the last
 *   invoice label type selected for the bulk action.
 * @property {string} [batch_id] - A unique identifier for the batch associated
 *   with this bulk action.
 * @property {string} [uploaded_by] - The identifier or name of the individual
 *   or system that uploaded the bulk action.
 * @property {string} [invoicelabel_document_type] - The type of document
 *   generated for invoice labels.
 * @property {number} [failed_sh_count] - The number of failed shipments in this
 *   bulk action.
 * @property {number} [successful_sh_count] - The number of successful shipments
 *   in this bulk action.
 * @property {number} [total_count] - The total number of shipments processed in
 *   this bulk action.
 * @property {string[]} [failed_shipments] - An array of shipment identifiers
 *   that failed during processing.
 * @property {number} [successful_invoiced_count] - The number of shipments
 *   successfully invoiced.
 * @property {number} [failed_invoiced_count] - The number of shipments that
 *   failed during invoicing.
 * @property {number} [total_invoiced_count] - The total number of shipments
 *   that have been invoiced.
 */

/**
 * @typedef BulkListinPage
 * @property {number} [current] - Indicates the current page number being viewed
 *   in the pagination.
 * @property {boolean} [has_previous] - A flag indicating whether there is a
 *   previous page available.
 * @property {boolean} [has_next] - A flag indicating whether there is a next
 *   page available.
 * @property {number} [total] - The total number of items available in the
 *   dataset, regardless of pagination.
 * @property {number} [item_total] - The total number of items present on the
 *   current page.
 * @property {string} [type] - A string that may indicate the type of pagination
 *   or the context of the data being paginated.
 * @property {number} [size] - The number of items per page.
 */

/**
 * @typedef BulkListingResponse
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {BulkActionListingData[]} [data] - An array containing the details
 *   of the bulk actions listed.
 * @property {BulkListinPage} [page]
 * @property {number} [total_count] - Total number of bulk actions available in
 *   the system, regardless of pagination.
 */

/**
 * @typedef JobDetailsData
 * @property {string} [batch_id] - A unique identifier for the batch of bulk
 *   actions associated with this job.
 * @property {number} [total_shipments_count] - The total number of shipments
 *   processed in this job.
 * @property {string[]} [successful_shipment_ids] - An array of identifiers for
 *   shipments that were successfully processed.
 * @property {number} [successful_shipments_count] - The number of successful
 *   shipments processed in this job.
 * @property {number} [failed_shipments_count] - The number of shipments that
 *   failed to process in this job.
 * @property {number} [processing_shipments_count] - The number of shipments
 *   currently being processed for this job.
 * @property {string} [company_id] - Unique identifier of a company on the platform.
 */

/**
 * @typedef JobDetailsResponse
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {JobDetailsData[]} [data] - An array representing the details of a job.
 * @property {string} [file_url] - An URL to download the submitted job file.
 * @property {string} [message] - A message providing additional context about
 *   the request's outcome.
 * @property {Object[]} [failed_records] - An array of records that failed
 *   during processing, with additional properties providing details about each failure.
 * @property {string} [uploaded_by] - The name or identifier of the user who
 *   uploaded the job.
 * @property {string} [user_id] - The unique identifier for the user who
 *   performed the upload.
 * @property {string} [created_ts] - A timestamp indicating when the job was created.
 * @property {string} [uploaded_on] - A timestamp indicating when the job was uploaded.
 * @property {string} [status] - The current status of the job.
 */

/**
 * @typedef JobFailedResponse
 * @property {string} [file_name] - The name of the file associated with the failed job.
 * @property {string} [url] - The URL where the uploaded bulk file can be accessed.
 */

/**
 * @typedef ManifestPageInfo
 * @property {number} current - The current page number being viewed.
 * @property {number} total - The total number of records available across all pages.
 * @property {boolean} has_next - Indicates whether there is a next page available.
 * @property {number} size - The size of the current page's results set.
 * @property {boolean} has_previous - Indicates whether there is a previous page
 *   available.
 * @property {string} type - Indicates whether there is a previous page available.
 */

/**
 * @typedef ManifestItemDetails
 * @property {number} [quantity] - The quantity of items in the shipment.
 * @property {string} shipment_id - Unique identifier for the shipment.
 * @property {string} order_id - Unique identifier for the order.
 * @property {string} [awb_number] - Unique identifier for the shipment's air
 *   waybill number.
 * @property {string} [invoice_id] - Unique identifier for the invoice
 *   associated with the shipment.
 * @property {string} [shipment_created_at] - Timestamp indicating when the
 *   shipment was created.
 */

/**
 * @typedef ManifestShipmentListing
 * @property {number} total_count - Total number of shipment items in the manifest.
 * @property {string} lane - Identifier or name for the lane associated with the
 *   shipments.
 * @property {ManifestPageInfo} page
 * @property {boolean} success - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {number} [status] - Represents the HTTP status code of the API response.
 * @property {ManifestItemDetails[]} items - List of items in the manifest, each
 *   containing detailed shipment information.
 * @property {string} [message] - Additional message or information regarding
 *   the response.
 */

/**
 * @typedef DateRange
 * @property {string} [from_date] - The start date of the range.
 * @property {string} [to_date] - The end date of the range.
 */

/**
 * @typedef Filters
 * @property {DateRange} [date_range]
 * @property {string} [logo] - CDN link of the logo displayed on the manifest page.
 * @property {string} [from_date] - The start date for filtering records,
 *   provided in UTC and formatted in ISO format.
 * @property {number} [stores] - Specifies a specific store ID for filtering the records.
 * @property {string} [to_date] - The end date for filtering records, provided
 *   in UTC and formatted in ISO format.
 * @property {string} [dp_name] - The name of the courier partner to filter records by.
 * @property {string} [dp_ids] - Combination of courier partner ids separated by
 *   comma operator.
 * @property {string} [lane] - Specifies criteria related to the shipment lanes.
 * @property {string} [selected_shipments] - A list of selected shipments that
 *   are mapped to the manifest.
 * @property {string} [store_name] - The name of the store for filtering records.
 * @property {string} [deselected_shipments] - A list of shipments that have
 *   been unmapped from the manifest.
 */

/**
 * @typedef ManifestFile
 * @property {string} [key] - This field represents the unique identifier for
 *   the file within the storage system.
 * @property {string} [region] - Indicates the geographical region where the
 *   file is stored.
 * @property {string} [bucket] - The name of the storage bucket where the file is stored.
 */

/**
 * @typedef ManifestMediaUpdate
 * @property {string} [entity] - The name or type of the media entity being updated.
 * @property {string} [link] - A URL or link to the media resource.
 * @property {number} [code] - A numerical code representing the media update
 *   status or type.
 * @property {string} [media_type] - The type of media being updated.
 * @property {boolean} [status] - Indicate the status of this media update.
 * @property {ManifestFile} [file]
 */

/**
 * @typedef PDFMeta
 * @property {string} [consent] - This field contains information related to user consent.
 * @property {ManifestMediaUpdate[]} [media_updates] - An array of media update
 *   entries associated with the manifest.
 */

/**
 * @typedef TotalShipmentPricesCount
 * @property {number} [total_price] - This field represents the total monetary
 *   value of the shipments.
 * @property {number} [shipment_count] - This field represents the number of
 *   shipments associated with the manifest.
 */

/**
 * @typedef ManifestMeta
 * @property {Filters} [filters]
 * @property {TotalShipmentPricesCount} [total_shipment_prices_count]
 */

/**
 * @typedef Manifest
 * @property {number} company_id - Unique identifier of a company on the platform.
 * @property {Filters} [filters]
 * @property {PDFMeta} [pdf_meta]
 * @property {ManifestMeta} [meta]
 * @property {boolean} is_active - Indicates whether the manifest is currently
 *   active or has been completed/closed.
 * @property {string} user_id - The unique identifier of the user who created or
 *   modified the manifest.
 * @property {string} created_at - The date and time when the manifest was created.
 * @property {string} [created_ts] - A timestamp representing when the manifest
 *   was created, typically in UTC.
 * @property {string} manifest_id - The unique identifier assigned to the manifest.
 * @property {string} status - The current status of the Manifest.
 * @property {number} id - The unique identifier assigned to the manifest item.
 * @property {string} uid - A universally unique identifier for the manifest.
 * @property {string} created_by - The username or identifier of the individual
 *   who created the manifest.
 */

/**
 * @typedef ManifestList
 * @property {Manifest[]} [items] - A list of manifest records.
 * @property {ManifestPageInfo} [page]
 */

/**
 * @typedef ManifestDetails
 * @property {ManifestItemDetails[]} [items] - An list of detailed information
 *   about individual shipments within the manifest.
 * @property {ManifestPageInfo} [page]
 * @property {number} [additional_shipment_count] - Represents the count of
 *   additional shipments associated with the manifest.
 * @property {Manifest[]} [manifest_details] - An array of manifest objects that
 *   provide overarching details about the manifest itself.
 */

/**
 * @typedef FilterInfoOption
 * @property {string} [text] - The option value or text set for the filter option.
 * @property {string} [name] - The option name indicating the type of
 *   information the filter relates to.
 * @property {string} [placeholder_text] - Represents the placeholder text that
 *   might appear in a UI element.
 * @property {string} [value] - A unique value for the filter used in processing
 *   filter selections.
 * @property {number} [min_search_size] - Indicates the minimum size for search
 *   criteria, potentially related to how many items to display or filter.
 * @property {boolean} [show_ui] - Indicates whether this option should be
 *   visible in the user interface.
 */

/**
 * @typedef FiltersInfo
 * @property {FilterInfoOption[]} [options]
 * @property {string} text - The label or name for the filter, which indicates
 *   what the filter is related to.
 * @property {string} [placeholder_text] - A placeholder text that provides
 *   guidance on how to use the filter.
 * @property {string} value - A unique identifier for the filter, used for
 *   processing filter selections.
 * @property {boolean} [required] - Indicates whether the filter is mandatory to
 *   fill out when applying the filter set.
 * @property {string} type - Specifies the type of filter.
 */

/**
 * @typedef ManifestFiltersResponse
 * @property {FiltersInfo[]} [advance_filter]
 * @property {FiltersInfo[]} [global_filter]
 */

/**
 * @typedef PageDetails
 * @property {number} [current] - Current page number
 * @property {boolean} [has_next] - If next page contains any result
 * @property {boolean} [has_previous] - If previous page contains any result
 * @property {number} item_total - Total count of the results present in the
 *   requested filter
 * @property {number} [size] - Page size
 * @property {string} [type] - Type of the page
 */

/**
 * @typedef EInvoiceIrnDetails
 * @property {string} ack_dt
 * @property {string} ack_no
 * @property {string} irn
 * @property {string} signed_invoice
 * @property {string} signed_qr_code
 */

/**
 * @typedef EInvoiceErrorDetails
 * @property {string} [error_code]
 * @property {string} error_message
 */

/**
 * @typedef EInvoiceDetails
 * @property {EInvoiceIrnDetails} [irn_details]
 * @property {EInvoiceErrorDetails[]} [error_details]
 */

/**
 * @typedef EInvoiceResponseData
 * @property {string} shipment_id
 * @property {string} einvoice_type
 * @property {number} status
 * @property {string} message
 * @property {EInvoiceDetails} [einvoice_info]
 */

/**
 * @typedef EInvoiceRetry
 * @property {EInvoiceRetryShipmentData[]} [shipments_data]
 */

/**
 * @typedef EInvoiceRetryResponse
 * @property {EInvoiceResponseData[]} response_data
 */

/**
 * @typedef EInvoiceErrorInfo
 * @property {EInvoiceErrorDetails[]} [error_details]
 */

/**
 * @typedef EInvoiceErrorResponseData
 * @property {string} shipment_id
 * @property {string} einvoice_type
 * @property {number} status
 * @property {string} message
 * @property {EInvoiceErrorInfo} [einvoice_info]
 */

/**
 * @typedef EInvoiceErrorResponse
 * @property {EInvoiceErrorResponseData[]} [response_data]
 * @property {string} [message]
 */

/**
 * @typedef EInvoiceErrorResponseDetails
 * @property {EInvoiceErrorResponseData[]} response_data
 * @property {string} [message]
 */

/**
 * @typedef EInvoiceRetryShipmentData
 * @property {string} shipment_id
 * @property {string} einvoice_type
 */

/**
 * @typedef CourierPartnerTrackingDetails
 * @property {string} awb - The Air Waybill (AWB) number associated with the
 *   shipment, used for tracking the parcel in transit.
 * @property {string} [dp_location] - The current geographic location of the
 *   courier partner.
 * @property {string} dp_name - The name of the courier partner responsible for
 *   the shipment.
 * @property {string} dp_status - The current status of the shipment as updated
 *   by the courier partner.
 * @property {string} dp_status_updated_at - The timestamp when the status was
 *   last updated by the courier partner.
 * @property {string} [estimated_delivery_date] - The estimated date and time
 *   for delivery as provided by the courier partner.
 * @property {number} [id] - A unique identifier for the tracking history entry.
 * @property {string} journey - Indicates the type of journey the shipment.
 * @property {Object} [meta] - A field to store additional metadata related to
 *   the courier partner's operations or the shipment.
 * @property {string} operational_status - The operational status of the shipment.
 * @property {string} [promised_delivery_date] - PThe promised date and time for
 *   delivery as provided by the courier partner.
 * @property {string} [remark] - Any additional remarks or comments from the
 *   courier partner regarding the shipment.
 * @property {string} shipment_id - The unique identifier for the shipment.
 */

/**
 * @typedef CourierPartnerTrackingResponse
 * @property {CourierPartnerTrackingDetails[]} [items]
 * @property {PageDetails} [page]
 */

/**
 * @typedef LogsChannelDetails
 * @property {string} [channel_id]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [channel_shipment_id]
 */

/**
 * @typedef LogPaymentDetails
 * @property {string} [payment_mode]
 * @property {string} [amount_paid]
 */

/**
 * @typedef FailedOrdersItem
 * @property {number} log_id
 * @property {string} order_id
 * @property {LogsChannelDetails} channel
 * @property {LogPaymentDetails} payment
 * @property {string} created_at
 * @property {string} error_message
 * @property {string} display_message
 * @property {string} method_name
 * @property {Object} meta
 */

/**
 * @typedef FailedOrderLogs
 * @property {FailedOrdersItem} items
 * @property {PageDetails} page
 */

/**
 * @typedef FailedOrderLogDetails
 * @property {string} error_trace
 * @property {string} exception
 */

/**
 * @typedef GenerateInvoiceIDResponseData
 * @property {string} [shipment_id]
 * @property {boolean} [success]
 * @property {string} [invoice_id]
 * @property {boolean} [error_message]
 */

/**
 * @typedef GenerateInvoiceIDErrorResponseData
 * @property {string} [shipment_id]
 * @property {boolean} [success]
 * @property {boolean} [invoice_id]
 * @property {string} [error_message]
 */

/**
 * @typedef GenerateInvoiceIDRequestSchema
 * @property {string[]} shipment_ids
 */

/**
 * @typedef GenerateInvoiceIDResponse
 * @property {GenerateInvoiceIDResponseData[]} [items]
 */

/**
 * @typedef GenerateInvoiceIDErrorResponse
 * @property {GenerateInvoiceIDErrorResponseData[]} [items]
 */

/**
 * @typedef ManifestResponse
 * @property {ManifestItems} [items]
 */

/**
 * @typedef ProcessManifestRequest
 * @property {string} action - Represents the operation to be performed on the manifest.
 * @property {string} [manifest_id] - Represents the identifier for a specific manifest.
 * @property {Filters} filters
 * @property {string} unique_id - A unique identifier for the request or the
 *   operation being performed.
 */

/**
 * @typedef ManifestItems
 * @property {Filters} [filters]
 * @property {string} [manifest_id] - The unique identifier for the manifest.
 * @property {string} [unique_id] - A unique identifier for the request or
 *   operation involving the manifest items.
 * @property {number} [company_id] - Unique identifier of a company on the platform.
 * @property {string} [dp_id] - Unique identifier of the delivery partner.
 * @property {string} [courier_partner_slug] - A slug or unique identifier for
 *   the courier partner.
 * @property {string} [action] - Defines the expected action for the manifest items.
 * @property {string} [created_by] - The identifier for the user or system that
 *   created the manifest.
 * @property {string} [user_id] - The identifier for the user associated with
 *   the manifest items.
 */

/**
 * @typedef ManifestErrorResponse
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [error] - Provides a descriptive error message.
 */

/**
 * @typedef ConfigData
 * @property {boolean} [acknowledged] - Indicates whether the update operation
 *   was acknowledged by the database.
 * @property {boolean} [is_upserted] - Indicates whether the update operation
 *   resulted in an upsert (an update or insert).
 * @property {boolean} [is_inserted] - Indicates whether the update operation
 *   resulted in a new document being inserted.
 */

/**
 * @typedef ConfigUpdatedResponse
 * @property {ConfigData[]} data - The result of the config update operation,
 *   including whether it was acknowledged, upserted, or inserted.
 * @property {boolean} success - Indicates whether the config update operation
 *   was successful.
 */

/**
 * @typedef FlagData
 * @property {Object} [filter]
 */

/**
 * @typedef Flags
 * @property {FlagData[]} [allow_partial_transition] - Indicates whether a
 *   partial transition of bags to the next state is permissible, allowing some
 *   bags to progress while others remain in the current state.
 * @property {FlagData[]} [can_break_entity] - Specifies whether bags within a
 *   shipment, set,cdf or entity can be broken individually or as a group. If
 *   set to false, all bags within the entity must remain together and
 *   transition together to the same state.
 * @property {FlagData[]} [allowed_bag_updates] - Specifies which fields are
 *   permitted to be updated at the bag level. Allowed fields are:
 *
 *   - Meta
 *   - Pdf_links
 *   - Affiliate_meta
 *   - Delivery_awb_number
 *   - Store_invoice_id
 *   - Store_id
 *   - Return_store_id
 *   - Eway_bill_id
 *
 * @property {FlagData[]} [allowed_bag_status_updates] - Specifies which fields
 *   are permitted to be updated at the bag status level. Allowed fields are:
 *
 *   - Json
 *
 * @property {FlagData[]} [allowed_entity_updates] - Specifies which fields are
 *   permitted to be updated at shipment level. Allowed fields are:
 *
 *   - Meta
 *   - Pdf_links
 *   - Affiliate_meta
 *   - Delivery_awb_number
 *   - Store_invoice_id
 *   - Store_id
 *   - Return_store_id
 *   - Eway_bill_id
 *   - Logistics_meta
 *
 * @property {FlagData[]} [allowed_entity_status_updates] - Specifies which
 *   fields are permitted to be updated at the Entity status level. Allowed fields are:
 *
 *   - Json
 *
 * @property {FlagData[]} [status_update_type] - Describes the type of journey
 *   associated with the particular status of the shipment. Possible values are:
 *
 *   - Positive
 *   - Negative
 *
 * @property {FlagData[]} [is_bag_status_reason_allowed] - Indicates whether a
 *   reason at the product level should be allowed for a particular status.
 * @property {FlagData[]} [is_entity_status_reason_allowed] - Indicates whether
 *   a reason at the shipment level should be allowed for a particular status.
 * @property {FlagData[]} [transition_strategy] - This flag is used to define
 *   the shipment breaking strategy. Possible values are:
 *
 *   - Break_shipment_based_on_location_reassignment
 *   - Break_shipment_based_on_groups
 *   - Break_shipment_based_on_stormbreaker
 */

/**
 * @typedef Filter
 * @property {string} [order_type] - Indicates the type or category of the order.
 *
 *   - PickAtStore: Pick from store
 *   - HomeDelivery: Home delivery
 *   - Digital: Digital
 *
 * @property {boolean} [is_partial_transition] - Specifies whether a partial
 *   transition of the order is allowed, allowing some components to progress
 *   while others remain in the current state.
 * @property {boolean} [auto_trigger_dp_assignment_acf] - Indicates whether the
 *   assignment of a designated person is automatically triggered in the context of ACF.
 * @property {string} [lock_status] - Indicates the current locking status of
 *   the shipment.
 *
 *   - `complete`: Complete shipment lock
 *   - `operational`: Operational shipment lock
 *   - `None`: No lock on shipment
 *
 * @property {boolean} [lock_after_transition] - Specifies whether locking is
 *   required after transitioning to the next status. lock_after_transition :
 *   true - Lock Transition enabled lock_after_transition : false - Lock
 *   Transition set false
 * @property {boolean} [resume_tasks_after_unlock] - Indicates whether tasks
 *   should resume automatically after unlocking, such as DP assignment task and
 *   invoicing task.
 * @property {boolean} [is_invoice_id_present] - Indicates whether an invoice ID
 *   is present for the order.
 * @property {boolean} [is_credit_note_generated] - Indicates whether a credit
 *   note has been generated for the order.
 * @property {boolean} [fulfill_virtual_invoice] - Specifies whether an
 *   automated virtual invoice ID is associated with the order.
 * @property {string} [next_status] - Indicates the next status to which the
 *   order will transition.
 * @property {boolean} [is_hook_enabled] - Indicates whether a task is enabled
 *   for the order.
 * @property {boolean} [pos_credit_note_check] - Specifies whether a credit note
 *   check is performed in a point of sale (POS) scenario.
 * @property {string} [order_platform] - Specifies the platform on which the
 *   order was placed.
 *
 *   - `platform-pos`: POS
 *   - `platform-site`: WEB
 *   - `openapi`: OPENAPI
 *   - `marketplace`: MARKETPLACE
 *
 * @property {string} [refund_type] - Indicates the type of refund associated
 *   with the order.
 *
 *   - `credit_note`: CREDIT_NOTE
 *   - `source`: SOURCE
 *   - `bank_transfer`: BANK
 *   - `manual_refund`: MANUAL_REFUND
 *
 * @property {boolean} [is_non_pos_platform] - Specifies whether the platform is
 *   non-point of sale (POS) in nature.
 * @property {boolean} [is_self_ship] - Indicates whether the order is
 *   self-shipped by the seller.
 * @property {string} [seller_country_code] - Specifies the country code of the seller.
 *
 *   - `seller_country_code`: US
 *   - `seller_country_code`: UK
 *   - `seller_country_code`: IN
 *
 * @property {string} [customer_country_code] - Specifies the country code of the seller.
 *
 *   - `customer_country_code`: US
 *   - `customer_country_code`: UK
 *   - `customer_country_code`: IN
 *
 * @property {boolean} [is_test_order] - Indicates whether the order is a test
 *   order used for testing purposes - `is_test_order` : True - indicates test order
 * @property {string[]} [task_trigger_condition] - Specifies trigger conditions:
 *
 *   - `status_update`: Status Update
 *   - `data_update`: Data Update
 */

/**
 * @typedef PostHook
 * @property {string} task - Name of the hook that has to be added
 * @property {Object} [kwargs] - Additional parameters for the hook
 * @property {Filter} [filters] - Filters for scope selection.
 */

/**
 * @typedef PreHook
 * @property {string} task - Name of the hook that has to be added
 * @property {Object} [kwargs] - Additional parameters for the hook
 * @property {Filter} [filters] - Filter
 */

/**
 * @typedef Config
 * @property {string} [from_state] - Source state from which state transition
 *   will take place
 * @property {string} [to_state] - Target state to which state transition will take place
 * @property {PreHook[]} [pre_hooks] - Tasks to be run before state transition
 * @property {PostHook[]} [post_hooks] - Tasks to be run after state transition
 * @property {Flags} [flags] - Various flags related to the transition. These
 *   include options and settings that influence the behavior of the state
 *   transition, such as whether partial transitions are allowed or whether the
 *   transition can break the entity.
 */

/**
 * @typedef TransitionConfigCondition
 * @property {string} app_id - The unique identifier of the application to which
 *   the configuration applies.
 * @property {string} ordering_channel - The channel through which the order was
 *   placed, such as ECOMM or another specified channel.
 * @property {string} entity - The type of entity that the configuration pertains to.
 */

/**
 * @typedef TransitionConfigData
 * @property {TransitionConfigCondition} [conditions] - Conditions that must be
 *   met for the ESM config to be applied.
 * @property {Config[]} [configs] - The configuration settings for the entity
 *   transition. This includes pre_hooks, post_hooks, and flags for each
 *   transition state.
 */

/**
 * @typedef TransitionConfigPayload
 * @property {TransitionConfigData} [data]
 */

/**
 * @typedef CommonErrorResponse
 * @property {number} [status] - The HTTP status code corresponding to the error.
 * @property {string} [message] - A message describing the error that occurred.
 */

/**
 * @typedef ExceptionErrorResponse
 * @property {string} [message] - A message describing the error that occurred.
 * @property {string} [exception] - The class path of the exception that was thrown.
 * @property {string} [stack_trace] - The stack trace from the server for the error.
 */

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 */

/**
 * @typedef BagReasonMeta
 * @property {boolean} [show_text_area]
 */

/**
 * @typedef QuestionSet
 * @property {number} [id]
 * @property {string} [display_name]
 */

/**
 * @typedef BagReasons
 * @property {string[]} [qc_type]
 * @property {number} [id]
 * @property {string} [display_name]
 * @property {BagReasonMeta} [meta]
 * @property {QuestionSet[]} [question_set]
 * @property {BagReasons[]} [reasons]
 */

/**
 * @typedef ShipmentBagReasons
 * @property {BagReasons[]} [reasons]
 * @property {boolean} [success]
 */

/**
 * @typedef ShipmentStatus
 * @property {string} [current_shipment_status]
 * @property {Object} [meta]
 * @property {number} [shipment_status_id]
 * @property {string[]} [bag_list]
 * @property {string} title
 * @property {string} [created_at]
 * @property {string} [created_ts]
 * @property {string} [shipment_id]
 * @property {string} [status_created_at]
 * @property {string} [status_created_ts]
 * @property {string} status
 */

/**
 * @typedef UserDataInfo
 * @property {number} [uid]
 * @property {string} [user_oid]
 * @property {string} [external_customer_id]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [email]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [avis_user_id]
 * @property {string} [name]
 * @property {string} [gender]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [phone]
 * @property {string} [address2]
 * @property {number} [longitude]
 * @property {string} [pincode]
 * @property {string} [area]
 * @property {string} [address_type]
 * @property {string} [country]
 * @property {string} [address_category]
 * @property {string} [email]
 * @property {string} [created_at]
 * @property {string} [address1]
 * @property {string} [display_address]
 * @property {string} [landmark]
 * @property {string} [updated_at]
 * @property {string} [version]
 * @property {number} [latitude]
 * @property {string} [contact_person]
 * @property {string} [state]
 * @property {string} [city]
 */

/**
 * @typedef ShipmentListingChannel
 * @property {string} [channel_shipment_id]
 * @property {boolean} [is_affiliate]
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef Prices
 * @property {number} [refund_credit]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [price_effective]
 * @property {number} [promotion_effective_discount]
 * @property {number} [pm_price_split]
 * @property {number} [refund_amount]
 * @property {number} [transfer_price]
 * @property {number} [coupon_effective_discount]
 * @property {number} [tax_collected_at_source]
 * @property {number} [brand_calculated_amount]
 * @property {number} [delivery_charge]
 * @property {number} [cashback]
 * @property {number} [value_of_good]
 * @property {number} [cashback_applied]
 * @property {number} [cod_charges]
 * @property {number} [price_marked]
 * @property {number} [amount_paid]
 * @property {number} [coupon_value]
 * @property {number} [discount]
 * @property {number} [fynd_credits]
 * @property {number} [gift_price]
 * @property {number} [amount_to_be_collected]
 */

/**
 * @typedef Identifier
 * @property {string} [alu]
 * @property {string} [ean]
 * @property {string} [sku_code]
 * @property {string} [upc]
 * @property {string} [isbn]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} refund_credit
 * @property {number} [amount_paid_roundoff]
 * @property {number} price_effective
 * @property {number} promotion_effective_discount
 * @property {number} transfer_price
 * @property {number} coupon_effective_discount
 * @property {number} gst_fee
 * @property {number} [tax_collected_at_source]
 * @property {number} brand_calculated_amount
 * @property {number} delivery_charge
 * @property {string} gst_tag
 * @property {string} hsn_code
 * @property {number} cashback
 * @property {string} item_name
 * @property {number} value_of_good
 * @property {number} cashback_applied
 * @property {number} cod_charges
 * @property {number} price_marked
 * @property {string} size
 * @property {number} amount_paid
 * @property {number} coupon_value
 * @property {number} discount
 * @property {number} fynd_credits
 * @property {number} gst_tax_percentage
 * @property {number} [amount_to_be_collected]
 * @property {Identifier} identifiers
 * @property {number} total_units
 * @property {boolean} added_to_fynd_cash
 */

/**
 * @typedef GSTDetailsData
 * @property {number} [cgst_tax_percentage]
 * @property {string} [gstin_code]
 * @property {number} value_of_good
 * @property {number} gst_fee
 * @property {number} [igst_tax_percentage]
 * @property {number} [gst_tax_percentage]
 * @property {string} [hsn_code_id]
 * @property {number} [igst_gst_fee]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [sgst_gst_fee]
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 * @property {number} [cgst_gst_fee]
 * @property {string} [gst_tag]
 * @property {number} [sgst_tax_percentage]
 * @property {string} [hsn_code]
 */

/**
 * @typedef BagStateMapper
 * @property {boolean} [is_active]
 * @property {string} [app_display_name]
 * @property {string} state_type
 * @property {number} id
 * @property {string} journey_type
 * @property {string} [app_state_name]
 * @property {string} name
 * @property {boolean} [app_facing]
 * @property {boolean} [notify_customer]
 * @property {string} display_name
 */

/**
 * @typedef BagStatusHistory
 * @property {boolean} [forward]
 * @property {number} [store_id]
 * @property {string} [delivery_awb_number]
 * @property {boolean} [kafka_sync]
 * @property {number} [delivery_partner_id]
 * @property {string} [app_display_name]
 * @property {number} [state_id]
 * @property {string} [state_type]
 * @property {number} [bsh_id]
 * @property {string} [created_at]
 * @property {string} [created_ts]
 * @property {string} [shipment_id]
 * @property {string} [updated_at]
 * @property {string} [updated_ts]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [bag_id]
 * @property {Object[]} [reasons]
 * @property {string} status
 * @property {string} [display_name]
 */

/**
 * @typedef Dimensions
 * @property {number} [height]
 * @property {number} [width]
 * @property {boolean} [is_default]
 * @property {string} [unit]
 * @property {number} [length]
 */

/**
 * @typedef ReturnConfig
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */

/**
 * @typedef Weight
 * @property {boolean} [is_default]
 * @property {number} [shipping]
 * @property {string} [unit]
 */

/**
 * @typedef Article
 * @property {Object} [child_details]
 * @property {string} seller_identifier
 * @property {string} uid
 * @property {Object} [a_set]
 * @property {Dimensions} [dimensions]
 * @property {Object} [currency]
 * @property {boolean} [esp_modified]
 * @property {ReturnConfig} [return_config]
 * @property {string} [code]
 * @property {Weight} [weight]
 * @property {string} _id
 * @property {Object} identifiers
 * @property {string} [raw_meta]
 * @property {string} size
 * @property {boolean} [is_set]
 * @property {string[]} [tags]
 */

/**
 * @typedef ShipmentListingBrand
 * @property {string} [logo]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {string} [logo_base64]
 */

/**
 * @typedef ReplacementDetails
 * @property {string} [replacement_type]
 * @property {string} [original_affiliate_order_id]
 */

/**
 * @typedef AffiliateMeta
 * @property {string} [order_item_id]
 * @property {string} [channel_order_id]
 * @property {number} [employee_discount]
 * @property {string} [box_type]
 * @property {number} [quantity]
 * @property {number} [size_level_total_qty]
 * @property {number} [loyalty_discount]
 * @property {ReplacementDetails} [replacement_details]
 * @property {string} [channel_shipment_id]
 * @property {string} [marketplace_invoice_id]
 * @property {string} [due_date]
 * @property {string} [coupon_code]
 * @property {boolean} [is_priority]
 * @property {boolean} [is_serial_number_required]
 * @property {number} [fulfilment_priority]
 * @property {number} [customer_selling_price]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {number} [employee_discount]
 * @property {string} affiliate_bag_id
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef PlatformArticleAttributes
 * @property {string} [currency]
 */

/**
 * @typedef PlatformItem
 * @property {number} [id]
 * @property {PlatformArticleAttributes} [attributes]
 * @property {number} [brand_id]
 * @property {string} [slug_key]
 * @property {number} [l3_category]
 * @property {string} [l3_category_name]
 * @property {string} [last_updated_at]
 * @property {string} [name]
 * @property {string[]} [l2_category]
 * @property {string} [brand]
 * @property {string[]} [image]
 * @property {string} [code]
 * @property {string[]} [l1_category]
 * @property {string} [size]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} [branch_url]
 * @property {Object} [meta]
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {string[]} [images]
 */

/**
 * @typedef Dates
 * @property {string} [delivery_date]
 * @property {string} [order_created]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_returnable
 * @property {boolean} is_active
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef BagUnit
 * @property {string} [bag_type]
 * @property {GSTDetailsData} [gst]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {string} [bag_expiry_date]
 * @property {BagStatusHistory[]} [bag_status]
 * @property {BagStatusHistory} current_operational_status
 * @property {Article} [article]
 * @property {ShipmentListingBrand} [brand]
 * @property {AffiliateBagDetails} [affiliate_bag_details]
 * @property {PlatformItem} [item]
 * @property {Object[]} [reasons]
 * @property {number} product_quantity
 * @property {boolean} [can_return]
 * @property {string} [display_name]
 * @property {boolean} [can_cancel]
 * @property {string} [size]
 * @property {number} [line_number]
 * @property {Object} [meta]
 * @property {Prices} [prices]
 * @property {Dates} [dates]
 * @property {BagStatusHistory} current_status
 * @property {number} bag_id
 * @property {string} [entity_type]
 * @property {BagReturnableCancelableStatus} status
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} [phone]
 * @property {string[]} [brand_store_tags]
 * @property {string} [pincode]
 * @property {Object} [meta]
 * @property {string} [address]
 * @property {string} [address1]
 * @property {string} [display_address]
 * @property {string} [location_type]
 * @property {number} id
 * @property {string} code
 * @property {string} [store_email]
 * @property {string} [name]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string[]} [tags]
 */

/**
 * @typedef Currency
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef OrderingCurrency
 * @property {string} [currency_code]
 * @property {string} [currency_name]
 * @property {string} [currency_symbol]
 * @property {string} [currency_sub_unit]
 */

/**
 * @typedef ConversionRate
 * @property {string} [base]
 * @property {Object} [rates]
 */

/**
 * @typedef CurrencyInfo
 * @property {OrderingCurrency} [ordering_currency]
 * @property {ConversionRate} [conversion_rate]
 */

/**
 * @typedef ShipmentItem
 * @property {string} [order_date]
 * @property {string} [order_created_ts]
 * @property {ShipmentStatus} [shipment_status]
 * @property {UserDataInfo} [user]
 * @property {string} [estimated_sla_time]
 * @property {string} [estimated_sla_ts]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {ShipmentListingChannel} [channel]
 * @property {string} [previous_shipment_id]
 * @property {boolean} [lock_status]
 * @property {string} [invoice_id]
 * @property {Object} [payment_methods]
 * @property {Object[]} [payment_info]
 * @property {string} [status_created_at]
 * @property {string} [status_created_ts]
 * @property {string} [display_name]
 * @property {BagUnit[]} [bags]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {Object} [meta]
 * @property {string} [payment_mode]
 * @property {boolean} [can_process]
 * @property {Prices} [prices]
 * @property {string} order_id
 * @property {string} [ordering_channnel]
 * @property {string} [shipment_id]
 * @property {string} [customer_note]
 * @property {number} total_bags
 * @property {string} shipment_created_at
 * @property {string} [mode_of_payment]
 * @property {string} [shipment_created_ts]
 * @property {Currency} [currency]
 * @property {CurrencyInfo} [currency_info]
 * @property {boolean} [is_lapa_enabled] - Flag to show NDR actions based on
 *   LAPA (Logistic As Per Actual) plan subscription. If LAPA plan taken, true,
 *   else false.
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {number} [total_count]
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {ShipmentItem[]} [items]
 * @property {string} [lane]
 * @property {Page} [page]
 */

/**
 * @typedef TrackingList
 * @property {boolean} [is_passed]
 * @property {string} text
 * @property {boolean} [is_current]
 * @property {string} [time]
 * @property {string} [created_ts]
 * @property {string} status
 */

/**
 * @typedef InvoiceInfo
 * @property {string} [store_invoice_id]
 * @property {string} [invoice_url]
 * @property {string} [updated_date]
 * @property {string} [external_invoice_id]
 * @property {string} [label_url]
 * @property {string} [credit_note_id]
 * @property {Object} [links]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [order_date]
 * @property {string} [created_ts]
 * @property {Object} [tax_details]
 * @property {string} [cod_charges]
 * @property {string} [source]
 * @property {string} fynd_order_id
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_order_id]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [order_value]
 * @property {string} [ordering_channel]
 * @property {Object} [meta]
 */

/**
 * @typedef UserDetailsData
 * @property {string} phone
 * @property {string} pincode
 * @property {string} address
 * @property {string} [area]
 * @property {string} [address_type]
 * @property {string} country
 * @property {string} [email]
 * @property {string} [address1]
 * @property {string} [landmark]
 * @property {string} state
 * @property {string} name
 * @property {string} city
 * @property {string} [state_code]
 * @property {string} [country_iso_code]
 * @property {string} [country_phone_code]
 * @property {string} [display_address]
 */

/**
 * @typedef PhoneDetails
 * @property {number} [country_code]
 * @property {string} [number]
 */

/**
 * @typedef ContactDetails
 * @property {PhoneDetails[]} [phone]
 * @property {string[]} [emails]
 */

/**
 * @typedef CompanyDetails
 * @property {string} [company_name]
 * @property {Object} [address]
 * @property {string} [company_cin]
 * @property {number} [company_id]
 * @property {string} [company_gst]
 * @property {ContactDetails} [company_contact]
 */

/**
 * @typedef OrderingStoreDetails
 * @property {string} [phone]
 * @property {string} [pincode]
 * @property {Object} [meta]
 * @property {string} [address]
 * @property {string} [address1]
 * @property {string} [display_address]
 * @property {number} [id]
 * @property {string} [code]
 * @property {string} [store_name]
 * @property {string} [country]
 * @property {string} [contact_person]
 * @property {string} [state]
 * @property {string} [city]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [pincode]
 * @property {string} [track_url]
 * @property {string} [eway_bill_id]
 * @property {number} [id]
 * @property {string} [country]
 * @property {string} [awb_no]
 * @property {string} [gst_tag]
 * @property {string} [name]
 */

/**
 * @typedef BuyerDetails
 * @property {string} [ajio_site_id]
 * @property {number} pincode
 * @property {string} address
 * @property {string} gstin
 * @property {string} name
 * @property {string} state
 * @property {string} city
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef EinvoiceInfo
 * @property {Object} [credit_note]
 * @property {Object} [invoice]
 */

/**
 * @typedef Formatted
 * @property {string} [max]
 * @property {string} [min]
 */

/**
 * @typedef ShipmentTags
 * @property {string} [slug]
 * @property {string} [entity_type]
 * @property {string} [display_text]
 */

/**
 * @typedef LockData
 * @property {boolean} [locked]
 * @property {boolean} [mto]
 * @property {string} [lock_message]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef ShipmentMeta
 * @property {string} [tracking_url]
 * @property {string} [estimated_delivery_date]
 * @property {boolean} same_store_available
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {Formatted} [formatted]
 * @property {DebugInfo} [debug_info]
 * @property {string} [return_awb_number]
 * @property {boolean} [is_self_ship]
 * @property {string} [box_type]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [parent_dp_id]
 * @property {number} [shipment_weight]
 * @property {Dimensions} [dimension]
 * @property {Object} [dp_options]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [due_date]
 * @property {string} [store_invoice_updated_date]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {number} [return_store_node]
 * @property {string} [fulfilment_priority_text]
 * @property {ShipmentTags[]} [shipment_tags]
 * @property {Object} [external]
 * @property {string} [awb_number]
 * @property {LockData} [lock_data]
 * @property {string} [order_type]
 * @property {Object} [ewaybill_info]
 * @property {string} [dp_id]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [marketplace_store_id]
 * @property {Object} [return_details]
 * @property {string} [dp_sort_key]
 * @property {string} [packaging_name]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {boolean} [auto_trigger_dp_assignment_acf]
 * @property {string} [dp_name]
 * @property {string} [po_number]
 * @property {number} weight
 * @property {Object} [b2c_buyer_details]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [return_affiliate_order_id]
 * @property {Object} [bag_weight]
 * @property {string} [refund_to]
 */

/**
 * @typedef PDFLinks
 * @property {string} invoice_type
 * @property {string} [label_a6]
 * @property {string} [invoice]
 * @property {string} [label_pos]
 * @property {string} [invoice_a6]
 * @property {string} [b2b]
 * @property {string} [label]
 * @property {string} [label_a4]
 * @property {string} label_type
 * @property {string} [invoice_export]
 * @property {string} [credit_note_url]
 * @property {string} [delivery_challan_a4]
 * @property {string} [label_export]
 * @property {string} [invoice_a4]
 * @property {string} [invoice_pos]
 * @property {string} [po_invoice]
 */

/**
 * @typedef AffiliateConfig
 * @property {number} [app_company_id]
 */

/**
 * @typedef AffiliateDetails
 * @property {ShipmentMeta} shipment_meta
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_shipment_id
 * @property {string} [company_affiliate_tag]
 * @property {string} affiliate_order_id
 * @property {PDFLinks} [pdf_links]
 * @property {AffiliateConfig} [config]
 * @property {string} [affiliate_id]
 * @property {string} affiliate_store_id
 * @property {string} affiliate_bag_id
 * @property {string} [ad_id]
 */

/**
 * @typedef BagConfigs
 * @property {boolean} is_returnable
 * @property {boolean} allow_force_return
 * @property {boolean} is_active
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [identifiers]
 * @property {ReturnConfig} [return_config]
 * @property {string} [uid]
 * @property {string} [size]
 * @property {string[]} [tags]
 */

/**
 * @typedef OrderBrandName
 * @property {string} [logo]
 * @property {number} [company]
 * @property {number} id
 * @property {string} [created_on]
 * @property {string} [brand_name]
 * @property {string} [modified_on]
 */

/**
 * @typedef AffiliateBagsDetails
 * @property {string} [affiliate_bag_id]
 * @property {string} [coupon_code]
 * @property {AffiliateMeta} [affiliate_meta]
 */

/**
 * @typedef BagPaymentMethods
 * @property {string} [mode]
 * @property {number} [amount]
 */

/**
 * @typedef DiscountRules
 * @property {number} [value]
 * @property {string} [type]
 */

/**
 * @typedef ItemCriterias
 * @property {number[]} [item_brand]
 */

/**
 * @typedef BuyRules
 * @property {ItemCriterias} [item_criteria]
 * @property {Object} [cart_conditions]
 */

/**
 * @typedef AppliedPromos
 * @property {string} [promotion_type]
 * @property {string} [promotion_name]
 * @property {DiscountRules[]} [discount_rules]
 * @property {number} [amount]
 * @property {number} [article_quantity]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promo_id]
 * @property {boolean} [mrp_promotion]
 */

/**
 * @typedef CurrentStatus
 * @property {number} [store_id]
 * @property {string} [delivery_awb_number]
 * @property {boolean} [kafka_sync]
 * @property {number} [delivery_partner_id]
 * @property {string} [state_type]
 * @property {number} [state_id]
 * @property {number} id
 * @property {string} [created_at]
 * @property {string} [created_ts]
 * @property {string} [shipment_id]
 * @property {string} [updated_at]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [bag_id]
 * @property {string} [status]
 */

/**
 * @typedef OrderBags
 * @property {GSTDetailsData} [gst_details]
 * @property {BagStatusHistory[]} [bag_status]
 * @property {Object} [parent_promo_bags]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {BagConfigs} [bag_configs]
 * @property {string} [seller_identifier]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {OrderBagArticle} [article]
 * @property {OrderBrandName} [brand]
 * @property {string} [group_id]
 * @property {AffiliateBagsDetails} [affiliate_bag_details]
 * @property {PlatformItem} [item]
 * @property {BagPaymentMethods[]} [payment_methods]
 * @property {BagPaymentMethods[]} [payment_info]
 * @property {number} [quantity]
 * @property {string} [identifier]
 * @property {boolean} [can_return]
 * @property {boolean} [can_cancel]
 * @property {string} [display_name]
 * @property {number} [line_number]
 * @property {Object} [meta]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {Prices} [prices]
 * @property {CurrentStatus} [current_status]
 * @property {number} bag_id
 * @property {string} [entity_type]
 * @property {boolean} [is_parent]
 */

/**
 * @typedef FulfillingStore
 * @property {string} phone
 * @property {string} pincode
 * @property {Object} meta
 * @property {string} address
 * @property {string} [address1]
 * @property {string} [display_address]
 * @property {number} id
 * @property {string} code
 * @property {string} store_name
 * @property {string} country
 * @property {string} fulfillment_channel
 * @property {string} contact_person
 * @property {string} state
 * @property {string} city
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [mode]
 * @property {string} [logo]
 * @property {string} [source]
 */

/**
 * @typedef ShipmentStatusData
 * @property {Object} [meta]
 * @property {string[]} [bag_list]
 * @property {number} [id]
 * @property {string} [created_at]
 * @property {string} [created_ts]
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {string} [display_name]
 * @property {string} [current_shipment_status]
 * @property {string} [status_created_at]
 */

/**
 * @typedef ShipmentLockDetails
 * @property {boolean} [lock_status]
 * @property {string} [lock_message]
 * @property {Object} [action_to_status]
 */

/**
 * @typedef PlatformShipment
 * @property {string} [picked_date]
 * @property {TrackingList[]} [tracking_list]
 * @property {InvoiceInfo} [invoice]
 * @property {string} [shipment_status]
 * @property {GSTDetailsData} [gst_details]
 * @property {OrderStatusData} [order_status]
 * @property {Object} [delivery_slot]
 * @property {OrderDetailsData} [order]
 * @property {UserDataInfo} [user]
 * @property {boolean} [enable_dp_tracking]
 * @property {string} [custom_message]
 * @property {string} [estimated_sla_time]
 * @property {string} [estimated_sla_ts]
 * @property {boolean} [can_update_dimension]
 * @property {string[]} [shipment_images]
 * @property {UserDetailsData} [delivery_details]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [forward_shipment_id]
 * @property {number} [fulfilment_priority]
 * @property {ShipmentLockDetails} [shipment_details]
 * @property {Object[]} [custom_meta]
 * @property {number} [shipment_quantity]
 * @property {CompanyDetails} [company_details]
 * @property {OrderingStoreDetails} [ordering_store]
 * @property {string} [order_platform]
 * @property {boolean} [lock_status]
 * @property {string} [platform_logo]
 * @property {string} [user_agent]
 * @property {DPDetailsData} [dp_details]
 * @property {string} [invoice_id]
 * @property {Object} [payment_methods]
 * @property {Object[]} [payment_info]
 * @property {Object} [coupon]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {string} [priority_text]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {boolean} [is_dp_assign_enabled]
 * @property {OrderBags[]} [bags]
 * @property {boolean} [dp_assignment]
 * @property {number} [total_items]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object} [meta]
 * @property {Object} [pdf_links]
 * @property {string} [payment_mode]
 * @property {string} [packaging_type]
 * @property {string} [journey_type]
 * @property {Prices} [prices]
 * @property {string} [vertical]
 * @property {string} shipment_id
 * @property {ShipmentPayments} [payments]
 * @property {string} [operational_status]
 * @property {ShipmentStatusData} [status]
 * @property {number} [total_bags]
 * @property {string} [shipment_created_at]
 * @property {string} [shipment_created_ts]
 * @property {Currency} [currency]
 * @property {CurrencyInfo} [currency_info]
 * @property {string} [previous_shipment_id]
 * @property {number} [shipment_update_time]
 * @property {PlatformDeliveryAddress} [rto_address]
 * @property {string} [credit_note_id]
 * @property {boolean} [is_self_ship]
 * @property {string} [mode_of_payment]
 * @property {boolean} [is_lapa_enabled] - Flag to show NDR actions based on
 *   LAPA (Logistic As Per Actual) plan subscription. If LAPA plan taken, true,
 *   else false.
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {string} [message]
 * @property {boolean} success
 * @property {PlatformShipment[]} [shipments]
 */

/**
 * @typedef TaxDetails
 * @property {string} [pan_no]
 * @property {string} [gstin]
 */

/**
 * @typedef PaymentInfoData
 * @property {Object} [meta]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {number} [amount]
 * @property {boolean} [collected]
 * @property {string} [refund_by]
 * @property {string} [collect_by]
 * @property {string} [display_name]
 * @property {string} [merchant_transaction_id]
 */

/**
 * @typedef OrderData
 * @property {string} order_date
 * @property {string} [created_ts]
 * @property {TaxDetails} [tax_details]
 * @property {Object} [meta]
 * @property {string} fynd_order_id
 * @property {Prices} [prices]
 * @property {Object} [payment_methods]
 * @property {PaymentInfoData[]} [payment_info]
 */

/**
 * @typedef OrderDetailsResponse
 * @property {OrderData} [order]
 * @property {boolean} success
 * @property {PlatformShipment[]} [shipments]
 */

/**
 * @typedef SubLane
 * @property {string} [value]
 * @property {string} [text]
 * @property {number} [total_items]
 * @property {Object[]} [actions]
 * @property {number} [index]
 */

/**
 * @typedef SuperLane
 * @property {string} value
 * @property {SubLane[]} [options]
 * @property {string} text
 * @property {number} [total_items]
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [value]
 * @property {string} [name]
 * @property {string} [display]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef PlatformOrderItems
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {number} [total_order_value]
 * @property {Object} [meta]
 * @property {string} [order_created_time]
 * @property {string} [order_created_ts]
 * @property {string} [payment_mode]
 * @property {PlatformShipment[]} [shipments]
 * @property {string} [order_id]
 * @property {PlatformChannel} [channel]
 * @property {UserDataInfo} [user_info]
 * @property {number} [order_value]
 * @property {Currency} [currency]
 * @property {CurrencyInfo} [currency_info]
 */

/**
 * @typedef OrderListingResponse
 * @property {number} [total_count]
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {PlatformOrderItems[]} [items]
 * @property {string} [lane]
 * @property {Page} [page]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [last_location_recieved_at]
 * @property {Object} [meta]
 * @property {string} [raw_status]
 * @property {string} [updated_at]
 * @property {string} [updated_time]
 * @property {string} [awb]
 * @property {string} [shipment_type]
 * @property {string} [status]
 * @property {string} [reason]
 * @property {string} [account_name]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {Object} [meta]
 * @property {PlatformTrack[]} [results]
 */

/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [action_centre]
 * @property {FiltersInfo[]} [unfulfilled]
 * @property {FiltersInfo[]} [filters]
 * @property {FiltersInfo[]} [processed]
 * @property {Object} [applied_filters]
 * @property {Object} [page]
 */

/**
 * @typedef FiltersResponse
 * @property {AdvanceFilterInfo} [advance_filter]
 * @property {FiltersInfo[]} [global_filter]
 */

/**
 * @typedef URL
 * @property {string} [url]
 */

/**
 * @typedef FileResponse
 * @property {string} [file_name] - Name of the file
 * @property {URL} [cdn]
 */

/**
 * @typedef BulkActionTemplate
 * @property {string} [value]
 * @property {string} [text]
 */

/**
 * @typedef BulkActionTemplateResponse
 * @property {BulkActionTemplate[]} [template_x_slug] - Allowed bulk action template slugs
 */

/**
 * @typedef Reason
 * @property {string[]} [qc_type]
 * @property {number} [id]
 * @property {QuestionSet[]} [question_set]
 * @property {string} [display_name]
 */

/**
 * @typedef PlatformShipmentReasonsResponse
 * @property {Reason[]} [reasons]
 * @property {boolean} [success]
 */

/**
 * @typedef ShipmentResponseReasons
 * @property {number} [reason_id]
 * @property {string} [reason]
 */

/**
 * @typedef ShipmentReasonsResponse
 * @property {ShipmentResponseReasons[]} reasons
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef StoreAddress
 * @property {string} phone
 * @property {string} created_at
 * @property {string} contact_person
 * @property {number} pincode
 * @property {string} address_type
 * @property {string} address1
 * @property {string} [display_address]
 * @property {string} [version]
 * @property {string} address_category
 * @property {string} city
 * @property {number} longitude
 * @property {string} [address2]
 * @property {string} [area]
 * @property {string} [email]
 * @property {string} updated_at
 * @property {string} country_code
 * @property {string} country
 * @property {string} [landmark]
 * @property {number} latitude
 * @property {string} state
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [username]
 * @property {string} [user]
 * @property {string} [password]
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [username]
 * @property {string} [user]
 * @property {string} [password]
 * @property {boolean} enabled
 */

/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEinvoice} [e_invoice]
 * @property {StoreEwaybill} [e_waybill]
 */

/**
 * @typedef Document
 * @property {string} value
 * @property {string} ds_type
 * @property {boolean} verified
 * @property {string} legal_name
 * @property {string} [url]
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef StoreMeta
 * @property {Object} [additional_contact_details]
 * @property {Object[]} [timing]
 * @property {string[]} [notification_emails]
 * @property {string} [gst_number]
 * @property {Object} [ewaybill_portal_details]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {StoreGstCredentials} gst_credentials
 * @property {string} stage
 * @property {Object} [product_return_config]
 * @property {StoreDocuments} [documents]
 * @property {string} display_name
 */

/**
 * @typedef Store
 * @property {string} phone
 * @property {boolean} [is_active]
 * @property {number} company_id
 * @property {number} [alohomora_user_id]
 * @property {string} created_at
 * @property {string} contact_person
 * @property {string} store_email
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} pincode
 * @property {string} [mall_area]
 * @property {string} [vat_no]
 * @property {string} address1
 * @property {string} [display_address]
 * @property {string} [store_active_from]
 * @property {string} city
 * @property {string} name
 * @property {number} [longitude]
 * @property {string[]} [brand_store_tags]
 * @property {string} [order_integration_id]
 * @property {number} [parent_store_id]
 * @property {string} location_type
 * @property {string} [code]
 * @property {string} fulfillment_channel
 * @property {string} [updated_at]
 * @property {StoreAddress} [store_address_json]
 * @property {StoreMeta} meta
 * @property {string} [s_id]
 * @property {string} state
 * @property {string} country
 * @property {number} [packaging_material_count]
 * @property {boolean} [is_archived]
 * @property {string} [login_username]
 * @property {string} [mall_name]
 * @property {number} [latitude]
 * @property {string} [address2]
 */

/**
 * @typedef Brand
 * @property {number} [credit_note_expiry_days]
 * @property {string} [logo]
 * @property {string} [invoice_prefix]
 * @property {boolean} [credit_note_allowed]
 * @property {string} [start_date]
 * @property {string} [company]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} [script_last_ran]
 * @property {string} [pickup_location]
 * @property {string} [created_on]
 * @property {string} brand_name
 * @property {number} [brand_id]
 * @property {string} [modified_on]
 * @property {number} [id]
 */

/**
 * @typedef Item
 * @property {Object} attributes - A dictionary of product attributes
 * @property {number} brand_id
 * @property {string} slug_key
 * @property {string} [webstore_product_url]
 * @property {number} [l3_category]
 * @property {string} [l3_category_name]
 * @property {string} [last_updated_at]
 * @property {string} name
 * @property {string[]} [l2_category]
 * @property {string} brand
 * @property {string[]} image
 * @property {string} [code]
 * @property {number} [l1_category_id]
 * @property {number} item_id
 * @property {string[]} [l1_category]
 * @property {string} [gender]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} size
 * @property {string} [branch_url]
 * @property {Object} [meta]
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {number} [l2_category_id]
 */

/**
 * @typedef ArticleStatusDetails
 * @property {Object} [status]
 */

/**
 * @typedef Company
 * @property {string} [pan_no]
 * @property {string} [created_on]
 * @property {number} [id]
 * @property {string} [company_name]
 * @property {string} [gst_number]
 * @property {string} [company_type]
 * @property {string} [modified_on]
 * @property {Object} [meta]
 * @property {string} [business_type]
 * @property {string} [agreement_start_date]
 */

/**
 * @typedef ShipmentGstDetails
 * @property {number} [value_of_good]
 * @property {number} [gst_fee]
 * @property {number} [brand_calculated_amount]
 * @property {number} [tax_collected_at_source]
 * @property {string} [gstin_code]
 */

/**
 * @typedef DeliverySlotDetails
 * @property {string} [slot]
 * @property {string} [upper_bound]
 * @property {string} [lower_bound]
 * @property {string} [date]
 * @property {string} [type]
 */

/**
 * @typedef InvoiceDetails
 * @property {string} [updated_date]
 * @property {string} [store_invoice_id]
 * @property {string} [invoice_url]
 * @property {string} [label_url]
 */

/**
 * @typedef ShipmentDetails
 * @property {string} [dp_id]
 * @property {Object} [dp_options]
 * @property {boolean} [lock_status]
 * @property {Object} [action_to_status]
 */

/**
 * @typedef UserDetails
 * @property {string} [user_oid]
 * @property {string} [external_customer_id]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [email]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [gender]
 * @property {string} [mongo_user_id]
 * @property {Object} [meta]
 */

/**
 * @typedef WeightData
 * @property {number} [value]
 * @property {string} [unit]
 */

/**
 * @typedef BagDetails
 * @property {number} [bag_update_time]
 * @property {string} [id]
 * @property {number} [bag_id]
 * @property {AffiliateBagDetails} [affiliate_bag_details]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {Object[]} [applied_promos]
 * @property {Article} [article]
 * @property {ArticleStatusDetails} [article_details]
 * @property {BagStatusHistory[]} [bag_status]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {Brand} [brand]
 * @property {Company} [company]
 * @property {BagStatusHistory} [current_operational_status]
 * @property {BagStatusHistory} [current_status]
 * @property {Dates} [dates]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {DeliverySlotDetails} [delivery_slot]
 * @property {string} [display_name]
 * @property {Object} [dp_details]
 * @property {Object} [einvoice_info]
 * @property {string} [entity_type]
 * @property {Object} [fallback_user]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {Store} [fulfilling_store]
 * @property {Object} [fyndstore_emp]
 * @property {GSTDetailsData} [gst_details]
 * @property {InvoiceDetails} [invoice]
 * @property {Item} [item]
 * @property {string} [journey_type]
 * @property {number} [line_number]
 * @property {boolean} [lock_status]
 * @property {string} [manifest_id]
 * @property {Object} [meta]
 * @property {string} [mode_of_payment]
 * @property {number} [no_of_bags_order]
 * @property {string} [operational_status]
 * @property {OrderDetails} [order]
 * @property {string} [order_integration_id]
 * @property {string} [order_type]
 * @property {number} [order_value]
 * @property {Store} [ordering_store]
 * @property {Object} [parent_promo_bags]
 * @property {Object} [payment_methods]
 * @property {string} [payment_type]
 * @property {Object} [payments]
 * @property {Prices} [prices]
 * @property {boolean} [qc_required]
 * @property {number} [quantity]
 * @property {Object[]} [reasons]
 * @property {boolean} [restore_coupon]
 * @property {Object} [restore_promos]
 * @property {PlatformDeliveryAddress} [rto_address]
 * @property {string} [seller_identifier]
 * @property {Shipment} [shipment]
 * @property {ShipmentDetails} [shipment_details]
 * @property {string} [shipment_id]
 * @property {ShipmentGstDetails} [shipment_gst]
 * @property {ShipmentStatusData} [shipment_status]
 * @property {ShipmentStatusData[]} [shipment_status_history]
 * @property {BagReturnableCancelableStatus} [status]
 * @property {string[]} [tags]
 * @property {number} [total_shipment_bags]
 * @property {number} [total_shipments_in_order]
 * @property {string} [transaction_type]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {UserDetails} [user]
 * @property {WeightData} [weight]
 * @property {number[]} [original_bag_list]
 * @property {string} [identifier]
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {number} [status_code]
 * @property {BagDetails} [data]
 */

/**
 * @typedef BagsPage
 * @property {number} item_total
 * @property {boolean} has_next
 * @property {string} page_type
 * @property {number} current
 * @property {number} size
 */

/**
 * @typedef BagData
 * @property {BagDetails[]} [items]
 * @property {BagsPage} [page]
 */

/**
 * @typedef GetBagsPlatformResponse
 * @property {number} [status_code]
 * @property {BagData} [data]
 */

/**
 * @typedef GeneratePosOrderReceiptResponse
 * @property {string} [customer_cn_receipt]
 * @property {boolean} [success]
 * @property {string} [order_id]
 * @property {string} [invoice_receipt]
 * @property {string} [payment_receipt]
 * @property {string} [merchant_cn_receipt]
 * @property {string} [payment_receipt_template]
 * @property {string} [customer_cn_receipt_template]
 * @property {string} [invoice_receipt_template]
 */

/**
 * @typedef Templates
 * @property {string} [text]
 * @property {string} [value]
 */

/**
 * @typedef AllowedTemplatesResponse
 * @property {Templates[]} [template_x_slug]
 */

/**
 * @typedef TemplateDownloadResponse
 * @property {string} [file_name]
 * @property {string} [url]
 */

/**
 * @typedef Error
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef BulkFailedResponse
 * @property {boolean} [status]
 * @property {string} [error]
 */

class OrderPlatformModel {
  /** @returns {InvalidateShipmentCachePayload} */
  static InvalidateShipmentCachePayload() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")),
      affiliate_bag_ids: Joi.array().items(Joi.string().allow("")),
      bag_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {InvalidateShipmentCacheNestedResponse} */
  static InvalidateShipmentCacheNestedResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),
      status: Joi.number(),
      message: Joi.string().allow(""),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {InvalidateShipmentCacheResponse} */
  static InvalidateShipmentCacheResponse() {
    return Joi.object({
      response: Joi.array().items(
        OrderPlatformModel.InvalidateShipmentCacheNestedResponse()
      ),
    });
  }

  /** @returns {UpdatePackingErrorResponse} */
  static UpdatePackingErrorResponse() {
    return Joi.object({
      status: Joi.number().allow(null),
      error: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      status: Joi.number().allow(null),
      success: Joi.boolean().allow(null),
      message: Joi.string().allow("").allow(null).required(),
      error_trace: Joi.string().allow("").allow(null),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {StoreReassign} */
  static StoreReassign() {
    return Joi.object({
      store_id: Joi.number().required(),
      bag_id: Joi.number().allow(null),
      affiliate_order_id: Joi.string().allow("").allow(null),
      affiliate_id: Joi.string().allow("").allow(null),
      item_id: Joi.string().allow("").allow(null),
      fynd_order_id: Joi.string().allow("").allow(null),
      set_id: Joi.string().allow("").allow(null),
      affiliate_bag_id: Joi.string().allow("").allow(null),
      reason_ids: Joi.array().items(Joi.number()).allow(null, ""),
      mongo_article_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {StoreReassignResponse} */
  static StoreReassignResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {LockManagerEntities} */
  static LockManagerEntities() {
    return Joi.object({
      id: Joi.string().allow(""),
      affiliate_order_id: Joi.string().allow(""),
      affiliate_id: Joi.string().allow(""),
      reason_text: Joi.string().allow("").required(),
      affiliate_bag_id: Joi.string().allow(""),
      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateShipmentLockPayload} */
  static UpdateShipmentLockPayload() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      action_type: Joi.string().allow("").required(),
      entities: Joi.array()
        .items(OrderPlatformModel.LockManagerEntities())
        .required(),
      resume_tasks_after_unlock: Joi.boolean().allow(null),
      lock_after_transition: Joi.boolean(),
      unlock_before_transition: Joi.boolean(),
    });
  }

  /** @returns {OriginalFilter} */
  static OriginalFilter() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),
      affiliate_id: Joi.string().allow(""),
    });
  }

  /** @returns {Bags} */
  static Bags() {
    return Joi.object({
      bag_id: Joi.number(),
      affiliate_bag_id: Joi.string().allow(""),
      is_locked: Joi.boolean(),
      affiliate_order_id: Joi.string().allow(""),
    });
  }

  /** @returns {CheckResponse} */
  static CheckResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      is_bag_locked: Joi.boolean(),
      affiliate_id: Joi.string().allow(""),
      original_filter: OrderPlatformModel.OriginalFilter(),
      is_shipment_locked: Joi.boolean(),
      lock_status: Joi.string().allow("").allow(null),
      affiliate_shipment_id: Joi.string().allow(""),
      bags: Joi.array().items(OrderPlatformModel.Bags()),
    });
  }

  /** @returns {UpdateShipmentLockResponse} */
  static UpdateShipmentLockResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      check_response: Joi.array().items(OrderPlatformModel.CheckResponse()),
    });
  }

  /** @returns {AnnouncementResponse} */
  static AnnouncementResponse() {
    return Joi.object({
      to_datetime: Joi.string().allow(""),
      id: Joi.number().required(),
      description: Joi.string().allow(""),
      platform_name: Joi.string().allow(""),
      from_datetime: Joi.string().allow(""),
      platform_id: Joi.string().allow(""),
      title: Joi.string().allow(""),
      company_id: Joi.number(),
      logo_url: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
    });
  }

  /** @returns {AnnouncementsResponse} */
  static AnnouncementsResponse() {
    return Joi.object({
      announcements: Joi.array().items(
        OrderPlatformModel.AnnouncementResponse()
      ),
      success: Joi.boolean(),
      status: Joi.number(),
    });
  }

  /** @returns {BaseResponse} */
  static BaseResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ErrorDetail} */
  static ErrorDetail() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ProductsReasonsFilters} */
  static ProductsReasonsFilters() {
    return Joi.object({
      line_number: Joi.number(),
      identifier: Joi.string().allow(""),
      quantity: Joi.number(),
    });
  }

  /** @returns {ProductsReasonsData} */
  static ProductsReasonsData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),
      reason_id: Joi.number(),
    });
  }

  /** @returns {ProductsReasons} */
  static ProductsReasons() {
    return Joi.object({
      filters: Joi.array().items(OrderPlatformModel.ProductsReasonsFilters()),
      data: OrderPlatformModel.ProductsReasonsData(),
    });
  }

  /** @returns {EntityReasonData} */
  static EntityReasonData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),
      reason_id: Joi.number(),
    });
  }

  /** @returns {EntitiesReasons} */
  static EntitiesReasons() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),
      data: OrderPlatformModel.EntityReasonData(),
    });
  }

  /** @returns {ReasonsData} */
  static ReasonsData() {
    return Joi.object({
      products: Joi.array().items(OrderPlatformModel.ProductsReasons()),
      entities: Joi.array().items(OrderPlatformModel.EntitiesReasons()),
    });
  }

  /** @returns {Products} */
  static Products() {
    return Joi.object({
      line_number: Joi.number(),
      identifier: Joi.string().allow(""),
      quantity: Joi.number(),
    });
  }

  /** @returns {OrderItemDataUpdates} */
  static OrderItemDataUpdates() {
    return Joi.object({
      data: Joi.any(),
    });
  }

  /** @returns {ProductsDataUpdatesFilters} */
  static ProductsDataUpdatesFilters() {
    return Joi.object({
      line_number: Joi.number(),
      identifier: Joi.string().allow(""),
    });
  }

  /** @returns {ProductsDataUpdates} */
  static ProductsDataUpdates() {
    return Joi.object({
      filters: Joi.array().items(
        OrderPlatformModel.ProductsDataUpdatesFilters()
      ),
      data: Joi.any(),
    });
  }

  /** @returns {EntitiesDataUpdates} */
  static EntitiesDataUpdates() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),
      data: Joi.any(),
    });
  }

  /** @returns {DataUpdates} */
  static DataUpdates() {
    return Joi.object({
      order_item_status: Joi.array().items(
        OrderPlatformModel.OrderItemDataUpdates()
      ),
      products: Joi.array().items(OrderPlatformModel.ProductsDataUpdates()),
      entities: Joi.array().items(OrderPlatformModel.EntitiesDataUpdates()),
    });
  }

  /** @returns {ShipmentsRequest} */
  static ShipmentsRequest() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),
      reasons: OrderPlatformModel.ReasonsData(),
      products: Joi.array().items(OrderPlatformModel.Products()),
      data_updates: OrderPlatformModel.DataUpdates(),
    });
  }

  /** @returns {StatuesRequest} */
  static StatuesRequest() {
    return Joi.object({
      status: Joi.string().allow(""),
      shipments: Joi.array().items(OrderPlatformModel.ShipmentsRequest()),
      exclude_bags_next_state: Joi.string().allow(""),
      split_shipment: Joi.boolean(),
    });
  }

  /** @returns {UpdateShipmentStatusRequestSchema} */
  static UpdateShipmentStatusRequestSchema() {
    return Joi.object({
      force_transition: Joi.boolean(),
      statuses: Joi.array().items(OrderPlatformModel.StatuesRequest()),
      lock_after_transition: Joi.boolean(),
      unlock_before_transition: Joi.boolean(),
      task: Joi.boolean(),
      resume_tasks_after_unlock: Joi.boolean(),
    });
  }

  /** @returns {ShipmentsResponse} */
  static ShipmentsResponse() {
    return Joi.object({
      status: Joi.number().allow(null),
      final_state: Joi.any().allow(null),
      identifier: Joi.string().allow("").allow(null),
      stack_trace: Joi.string().allow("").allow(null),
      code: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      message: Joi.string().allow("").allow(null),
      exception: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {StatuesResponse} */
  static StatuesResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderPlatformModel.ShipmentsResponse()),
    });
  }

  /** @returns {UpdateShipmentStatusResponseBody} */
  static UpdateShipmentStatusResponseBody() {
    return Joi.object({
      statuses: Joi.array().items(OrderPlatformModel.StatuesResponse()),
    });
  }

  /** @returns {DPConfiguration} */
  static DPConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentConfig} */
  static PaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),
      source: Joi.string().allow(""),
    });
  }

  /** @returns {CreateOrderConfig} */
  static CreateOrderConfig() {
    return Joi.object({
      dp_configuration: OrderPlatformModel.DPConfiguration().required(),
      integration_type: Joi.string().allow(""),
      location_reassignment: Joi.boolean(),
      payment: OrderPlatformModel.PaymentConfig(),
      optimal_shipment_creation: Joi.boolean(),
    });
  }

  /** @returns {CreateOrderResponse} */
  static CreateOrderResponse() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {DispatchManifest} */
  static DispatchManifest() {
    return Joi.object({
      manifest_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {SuccessResponse} */
  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ActionInfo} */
  static ActionInfo() {
    return Joi.object({
      display_text: Joi.string().allow("").required(),
      id: Joi.number().required(),
      description: Joi.string().allow("").required(),
      slug: Joi.string().allow("").required(),
    });
  }

  /** @returns {GetActionsResponse} */
  static GetActionsResponse() {
    return Joi.object({
      permissions: Joi.array().items(OrderPlatformModel.ActionInfo()),
    });
  }

  /** @returns {HistoryReason} */
  static HistoryReason() {
    return Joi.object({
      text: Joi.string().allow("").allow(null),
      category: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      dislay_name: Joi.string().allow("").allow(null),
      code: Joi.number().allow(null),
      quantity: Joi.number().allow(null),
    });
  }

  /** @returns {HistoryMeta} */
  static HistoryMeta() {
    return Joi.object({
      store_id: Joi.number().allow(null),
      status: Joi.string().allow("").allow(null),
      status1: Joi.string().allow("").allow(null),
      call_id: Joi.string().allow("").allow(null),
      starttime: Joi.string().allow("").allow(null),
      reason: OrderPlatformModel.HistoryReason(),
      short_link: Joi.string().allow("").allow(null),
      endtime: Joi.string().allow("").allow(null),
      store_name: Joi.string().allow("").allow(null),
      caller: Joi.string().allow("").allow(null),
      store_code: Joi.string().allow("").allow(null),
      billsec: Joi.string().allow("").allow(null),
      recordpath: Joi.string().allow("").allow(null),
      status2: Joi.string().allow("").allow(null),
      callerid: Joi.string().allow("").allow(null),
      duration: Joi.string().allow("").allow(null),
      channel_type: Joi.string().allow("").allow(null),
      activity_comment: Joi.string().allow("").allow(null),
      activity_type: Joi.string().allow("").allow(null),
      receiver: Joi.string().allow("").allow(null),
      recipient: Joi.string().allow("").allow(null),
      slug: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {HistoryDict} */
  static HistoryDict() {
    return Joi.object({
      display_message: Joi.string().allow(""),
      bag_id: Joi.number(),
      ticket_url: Joi.string().allow(""),
      l3_detail: Joi.string().allow(""),
      createdat: Joi.string().allow("").required(),
      created_ts: Joi.string().allow(""),
      ticket_id: Joi.string().allow(""),
      type: Joi.string().allow("").required(),
      l2_detail: Joi.string().allow(""),
      assigned_agent: Joi.string().allow(""),
      meta: OrderPlatformModel.HistoryMeta(),
      l1_detail: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      user: Joi.string().allow("").required(),
    });
  }

  /** @returns {ShipmentHistoryResponse} */
  static ShipmentHistoryResponse() {
    return Joi.object({
      success: Joi.boolean(),
      activity_history: Joi.array()
        .items(OrderPlatformModel.HistoryDict())
        .required(),
    });
  }

  /** @returns {PostHistoryFilters} */
  static PostHistoryFilters() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),
      line_number: Joi.string().allow(""),
      identifier: Joi.string().allow(""),
    });
  }

  /** @returns {PostHistoryData} */
  static PostHistoryData() {
    return Joi.object({
      user_name: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {PostHistoryDict} */
  static PostHistoryDict() {
    return Joi.object({
      filters: Joi.array()
        .items(OrderPlatformModel.PostHistoryFilters())
        .required(),
      data: OrderPlatformModel.PostHistoryData().required(),
    });
  }

  /** @returns {PostShipmentHistory} */
  static PostShipmentHistory() {
    return Joi.object({
      activity_history: Joi.array().items(OrderPlatformModel.PostHistoryDict()),
    });
  }

  /** @returns {SmsDataPayload} */
  static SmsDataPayload() {
    return Joi.object({
      shipment_id: Joi.number().required(),
      phone_number: Joi.number().required(),
      amount_paid: Joi.number(),
      order_id: Joi.string().allow("").required(),
      payment_mode: Joi.string().allow(""),
      customer_name: Joi.string().allow(""),
      brand_name: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      country_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {SendSmsPayload} */
  static SendSmsPayload() {
    return Joi.object({
      bag_id: Joi.number().required(),
      data: OrderPlatformModel.SmsDataPayload(),
      slug: Joi.string().allow("").required(),
    });
  }

  /** @returns {OrderDetails} */
  static OrderDetails() {
    return Joi.object({
      fynd_order_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      user_id: Joi.string().allow("").allow(null),
      tax_details: OrderPlatformModel.TaxDetails(),
      mongo_cart_id: Joi.number().allow(null),
      delivery_charges: Joi.number().allow(null),
      transaction_id: Joi.string().allow("").allow(null),
      collect_by: Joi.string().allow(""),
      headers: Joi.any().allow(null),
      coupon_value: Joi.number().allow(null),
      order_value: Joi.number(),
      created_time: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      total_order_value: Joi.number(),
      ordering_channel: Joi.string().allow(""),
      meta: Joi.any().allow(null),
      cod_charges: Joi.number().allow(null),
      cashback_value: Joi.number().allow(null),
      refund_by: Joi.string().allow(""),
      affiliate_order_date: Joi.string().allow("").allow(null),
      payment_methods: Joi.any().allow(null),
      affiliate_order_id: Joi.string().allow(""),
      payment_mode_id: Joi.number().allow(null),
      promotion_effective_discount: Joi.number().allow(null),
      mode_of_payment: Joi.string().allow(""),
      discount: Joi.number().allow(null),
      cashback_applied: Joi.number().allow(null),
      fynd_credits: Joi.number().allow(null),
      affiliate_id: Joi.string().allow(""),
      ordering_channel_logo: Joi.string().allow("").allow(null),
      prices: OrderPlatformModel.Prices(),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      kafka_emission_status: Joi.number(),
      state_manager_used: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentDetail} */
  static ShipmentDetail() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      id: Joi.number().required(),
      bag_list: Joi.array().items(Joi.number()),
      meta: OrderPlatformModel.Meta().required(),
      remarks: Joi.string().allow(""),
    });
  }

  /** @returns {OrderStatusData} */
  static OrderStatusData() {
    return Joi.object({
      order_details: OrderPlatformModel.OrderDetails().required(),
      errors: Joi.array().items(Joi.string().allow("")),
      shipment_details: Joi.array().items(OrderPlatformModel.ShipmentDetail()),
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
      color_code: Joi.string().allow(""),
      expected_delivery_date: Joi.string().allow(""),
    });
  }

  /** @returns {OrderStatusResult} */
  static OrderStatusResult() {
    return Joi.object({
      success: Joi.string().allow("").required(),
      result: Joi.array().items(OrderPlatformModel.OrderStatusData()),
    });
  }

  /** @returns {Dimension} */
  static Dimension() {
    return Joi.object({
      packaging_type: Joi.string().allow(""),
      weight: Joi.number(),
      height: Joi.number(),
      length: Joi.number(),
      width: Joi.number(),
    });
  }

  /** @returns {UpdatePackagingDimensionsPayload} */
  static UpdatePackagingDimensionsPayload() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),
      current_status: Joi.string().allow("").required(),
      dimension: Joi.array().items(OrderPlatformModel.Dimension()).required(),
    });
  }

  /** @returns {UpdatePackagingDimensionsResponse} */
  static UpdatePackagingDimensionsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Tax} */
  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      rate: Joi.number().required(),
      breakup: Joi.array().items(Joi.any()),
      amount: Joi.any().required(),
    });
  }

  /** @returns {AmountSchema} */
  static AmountSchema() {
    return Joi.object({
      currency: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {Charge} */
  static Charge() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      amount: OrderPlatformModel.AmountSchema().required(),
      tax: OrderPlatformModel.Tax(),
      code: Joi.string().allow(""),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {LineItem} */
  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderPlatformModel.Charge()),
      meta: Joi.any(),
      custom_message: Joi.string().allow(""),
      quantity: Joi.number(),
      seller_identifier: Joi.string().allow("").required(),
      external_line_id: Joi.string().allow(""),
    });
  }

  /** @returns {ProcessingDates} */
  static ProcessingDates() {
    return Joi.object({
      dp_pickup_slot: Joi.any(),
      dispatch_after_date: Joi.string().allow(""),
      dispatch_by_date: Joi.string().allow(""),
      confirm_by_date: Joi.string().allow(""),
      customer_pickup_slot: Joi.any(),
      pack_by_date: Joi.string().allow(""),
    });
  }

  /** @returns {Shipment} */
  static Shipment() {
    return Joi.object({
      line_items: Joi.array().items(OrderPlatformModel.LineItem()).required(),
      external_shipment_id: Joi.string().allow(""),
      processing_dates: OrderPlatformModel.ProcessingDates(),
      meta: Joi.any().allow(null),
      priority: Joi.number(),
      location_id: Joi.number(),
      order_type: Joi.string().allow(""),
      parent_type: Joi.string().allow("").allow(null),
      store_invoice_id: Joi.string().allow("").allow(null),
      lock_status: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
      billing_address_json: OrderPlatformModel.PlatformDeliveryAddress(),
      id: Joi.string().allow(""),
      fulfilment_priority: Joi.number().allow(null),
      is_active: Joi.boolean(),
      previous_shipment_id: Joi.string().allow("").allow(null),
      pdf_links: Joi.any().allow(null),
      delivery_address_json: OrderPlatformModel.PlatformDeliveryAddress(),
      eway_bill_id: Joi.string().allow("").allow(null),
      affiliate_shipment_id: Joi.string().allow("").allow(null),
      fynd_order_id: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      created_at: Joi.string().allow(""),
      delivery_awb_number: Joi.string().allow("").allow(null),
      hand_over_contact_json: OrderPlatformModel.PlatformDeliveryAddress(),
      credit_note_id: Joi.string().allow("").allow(null),
      parent_id: Joi.string().allow("").allow(null),
      affiliate_id: Joi.string().allow(""),
      packaging_type: Joi.string().allow("").allow(null),
      vertical: Joi.string().allow("").allow(null),
      quantity: Joi.number().allow(null),
      status: OrderPlatformModel.ShipmentStatusData(),
      price: OrderPlatformModel.Prices(),
      gst: OrderPlatformModel.ShipmentGstDetails(),
    });
  }

  /** @returns {GeoLocationSchema} */
  static GeoLocationSchema() {
    return Joi.object({
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }

  /** @returns {ShippingInfo} */
  static ShippingInfo() {
    return Joi.object({
      alternate_mobile_number: Joi.string().allow(""),
      state: Joi.string().allow(""),
      customer_code: Joi.string().allow(""),
      shipping_type: Joi.string().allow(""),
      middle_name: Joi.string().allow(""),
      primary_mobile_number: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      geo_location: OrderPlatformModel.GeoLocationSchema(),
      gender: Joi.string().allow(""),
      house_no: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      title: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      country: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      city: Joi.string().allow(""),
      external_customer_code: Joi.string().allow(""),
      floor_no: Joi.string().allow(""),
      alternate_email: Joi.string().allow(""),
      slot: Joi.array().items(Joi.any()),
      address: Joi.string().allow(""),
      area: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      primary_email: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
    });
  }

  /** @returns {UserInfo} */
  static UserInfo() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      user_type: Joi.string().allow(""),
      primary_email: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      first_name: Joi.string().allow("").required(),
      last_name: Joi.string().allow(""),
      primary_mobile_number: Joi.string().allow("").required(),
    });
  }

  /** @returns {TaxInfo} */
  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      pan_no: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentMethod} */
  static PaymentMethod() {
    return Joi.object({
      collect_by: Joi.string().allow("").required(),
      mode: Joi.string().allow("").required(),
      refund_by: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      meta: Joi.any(),
      transaction_data: Joi.any(),
    });
  }

  /** @returns {PaymentInfo} */
  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),
      payment_mode: Joi.string().allow(""),
      payment_methods: Joi.array().items(OrderPlatformModel.PaymentMethod()),
    });
  }

  /** @returns {CreateOrderAPI} */
  static CreateOrderAPI() {
    return Joi.object({
      shipments: Joi.array().items(OrderPlatformModel.Shipment()).required(),
      shipping_info: OrderPlatformModel.ShippingInfo().required(),
      billing_info: OrderPlatformModel.ShippingInfo().required(),
      currency_info: Joi.any(),
      external_order_id: Joi.string().allow(""),
      charges: Joi.array().items(OrderPlatformModel.Charge()),
      external_creation_date: Joi.string().allow(""),
      meta: Joi.any(),
      tax_info: OrderPlatformModel.TaxInfo(),
      config: OrderPlatformModel.CreateOrderConfig().required(),
      payment_info: OrderPlatformModel.PaymentInfo().required(),
      user_info: OrderPlatformModel.UserInfo(),
      ordering_store_id: Joi.number(),
      order_platform: Joi.string().allow(""),
      order_type: Joi.string().allow(""),
      fynd_order_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      external_shipment_id: Joi.string().allow(""),
    });
  }

  /** @returns {CreateOrderErrorReponse} */
  static CreateOrderErrorReponse() {
    return Joi.object({
      success: Joi.boolean(),
      errors: Joi.string().allow(""),
      status_code: Joi.number(),
      fynd_order_id: Joi.string().allow(""),
    });
  }

  /** @returns {UploadManifestConsent} */
  static UploadManifestConsent() {
    return Joi.object({
      consent_url: Joi.string().allow("").required(),
      manifest_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {PlatformOrderUpdate} */
  static PlatformOrderUpdate() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ResponseDetail} */
  static ResponseDetail() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      status: Joi.number(),
    });
  }

  /** @returns {FyndOrderIdList} */
  static FyndOrderIdList() {
    return Joi.object({
      fynd_order_id: Joi.array().items(Joi.string().allow("")),
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      mobile: Joi.number(),
    });
  }

  /** @returns {OrderStatus} */
  static OrderStatus() {
    return Joi.object({
      order_details: Joi.array().items(OrderPlatformModel.FyndOrderIdList()),
    });
  }

  /** @returns {BagStateTransitionMap} */
  static BagStateTransitionMap() {
    return Joi.object({
      fynd: Joi.any(),
      affiliate: Joi.any(),
    });
  }

  /** @returns {RoleBaseStateTransitionMapping} */
  static RoleBaseStateTransitionMapping() {
    return Joi.object({
      success: Joi.boolean(),
      next_statuses: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {RefundModeConfigRequestPayload} */
  static RefundModeConfigRequestPayload() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),
      seller_id: Joi.number().required(),
      affiliate_id: Joi.string().allow("").required(),
      customer_mobile_number: Joi.number(),
    });
  }

  /** @returns {RefundOption} */
  static RefundOption() {
    return Joi.object({
      value: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {RefundModeFormat} */
  static RefundModeFormat() {
    return Joi.object({
      refund_to: Joi.string().allow(""),
    });
  }

  /** @returns {RefundModeInfo} */
  static RefundModeInfo() {
    return Joi.object({
      is_active: Joi.boolean(),
      slug: Joi.string().allow(""),
      options: Joi.array().items(OrderPlatformModel.RefundOption()),
      display_name: Joi.string().allow(""),
      format: OrderPlatformModel.RefundModeFormat(),
    });
  }

  /** @returns {RefundModeConfigResponsePayload} */
  static RefundModeConfigResponsePayload() {
    return Joi.object({
      success: Joi.boolean().required(),
      data: Joi.array().items(OrderPlatformModel.RefundModeInfo()).required(),
      status: Joi.number(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {AttachUserOtpData} */
  static AttachUserOtpData() {
    return Joi.object({
      request_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {AttachUserInfo} */
  static AttachUserInfo() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),
      last_name: Joi.string().allow("").required(),
      mobile: Joi.string().allow("").required(),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {AttachOrderUser} */
  static AttachOrderUser() {
    return Joi.object({
      otp_data: OrderPlatformModel.AttachUserOtpData().required(),
      fynd_order_id: Joi.string().allow("").required(),
      user_info: OrderPlatformModel.AttachUserInfo().required(),
    });
  }

  /** @returns {AttachOrderUserResponse} */
  static AttachOrderUserResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {SendUserMobileOTP} */
  static SendUserMobileOTP() {
    return Joi.object({
      mobile: Joi.number().required(),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {PointBlankOtpData} */
  static PointBlankOtpData() {
    return Joi.object({
      request_id: Joi.string().allow(""),
      resend_timer: Joi.number(),
      message: Joi.string().allow(""),
      mobile: Joi.number(),
    });
  }

  /** @returns {SendUserMobileOtpResponse} */
  static SendUserMobileOtpResponse() {
    return Joi.object({
      success: Joi.boolean(),
      status: Joi.number(),
      message: Joi.string().allow(""),
      data: OrderPlatformModel.PointBlankOtpData(),
    });
  }

  /** @returns {VerifyOtpData} */
  static VerifyOtpData() {
    return Joi.object({
      request_id: Joi.string().allow("").required(),
      mobile: Joi.string().allow("").required(),
      otp_code: Joi.number().required(),
    });
  }

  /** @returns {VerifyMobileOTP} */
  static VerifyMobileOTP() {
    return Joi.object({
      otp_data: OrderPlatformModel.VerifyOtpData().required(),
      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {VerifyOtpResponseData} */
  static VerifyOtpResponseData() {
    return Joi.object({
      mobile: Joi.string().allow(""),
      message: Joi.string().allow(""),
      fynd_order_id: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyOtpResponse} */
  static VerifyOtpResponse() {
    return Joi.object({
      status: Joi.number(),
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      data: OrderPlatformModel.VerifyOtpResponseData(),
    });
  }

  /** @returns {BulkReportsDownloadRequest} */
  static BulkReportsDownloadRequest() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.string().allow("")),
      lane_type: Joi.string().allow(""),
      custom_headers: Joi.array().items(Joi.string().allow("")),
      report_type: Joi.string().allow(""),
      start_date: Joi.string().allow(""),
      end_date: Joi.string().allow(""),
      entities: Joi.array().items(Joi.string().allow("")),
      filter_type: Joi.string().allow(""),
      is_cross_company_enabled: Joi.boolean(),
      custom_filters_for_lane: Joi.any(),
    });
  }

  /** @returns {BulkReportsDownloadResponse} */
  static BulkReportsDownloadResponse() {
    return Joi.object({
      success: Joi.boolean(),
      batch_id: Joi.string().allow(""),
    });
  }

  /** @returns {APIFailedResponse} */
  static APIFailedResponse() {
    return Joi.object({
      status: Joi.boolean(),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {BulkStateTransistionRequestSchema} */
  static BulkStateTransistionRequestSchema() {
    return Joi.object({
      url: Joi.string().allow(""),
      file_name: Joi.string().allow(""),
    });
  }

  /** @returns {BulkStateTransistionResponse} */
  static BulkStateTransistionResponse() {
    return Joi.object({
      status: Joi.boolean(),
      message: Joi.string().allow(""),
      batch_id: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentActionInfo} */
  static ShipmentActionInfo() {
    return Joi.object({
      label: Joi.array().items(Joi.string().allow("")),
      invoice: Joi.array().items(Joi.string().allow("")),
      failed_shipments: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.string().allow(""))
      ),
      processing_shipments: Joi.array().items(Joi.string().allow("")),
      successful_shipments: Joi.array().items(Joi.string().allow("")),
      invoiceable_shipments: Joi.array().items(Joi.string().allow("")),
      failed_invoiced_shipments: Joi.object().pattern(
        /\S/,
        Joi.string().allow("")
      ),
      processing_invoice_shipments: Joi.array().items(Joi.string().allow("")),
      successful_invoiced_shipments: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {BulkActionListingData} */
  static BulkActionListingData() {
    return Joi.object({
      store_id: Joi.number(),
      uploaded_on: Joi.string().allow(""),
      company_id: Joi.number(),
      shipments_action_info: OrderPlatformModel.ShipmentActionInfo(),
      is_invoiceable: Joi.boolean(),
      user_name: Joi.string().allow(""),
      file_url: Joi.string().allow(""),
      meta: Joi.any(),
      invoice_document_type: Joi.string().allow(""),
      label_document_type: Joi.string().allow(""),
      file_name: Joi.string().allow(""),
      store_name: Joi.string().allow(""),
      updated_ts: Joi.number(),
      status: Joi.boolean(),
      store_code: Joi.string().allow(""),
      bulk_action_type: Joi.string().allow(""),
      created_ts: Joi.string().allow(""),
      invoice_status: Joi.string().allow(""),
      do_invoice_label_generated: Joi.boolean(),
      id: Joi.number(),
      user_id: Joi.string().allow(""),
      last_selected_invoice_label_type: Joi.string().allow(""),
      batch_id: Joi.string().allow(""),
      uploaded_by: Joi.string().allow(""),
      invoicelabel_document_type: Joi.string().allow(""),
      failed_sh_count: Joi.number(),
      successful_sh_count: Joi.number(),
      total_count: Joi.number(),
      failed_shipments: Joi.array().items(Joi.string().allow("")),
      successful_invoiced_count: Joi.number(),
      failed_invoiced_count: Joi.number(),
      total_invoiced_count: Joi.number(),
    });
  }

  /** @returns {BulkListinPage} */
  static BulkListinPage() {
    return Joi.object({
      current: Joi.number(),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      total: Joi.number(),
      item_total: Joi.number(),
      type: Joi.string().allow(""),
      size: Joi.number(),
    });
  }

  /** @returns {BulkListingResponse} */
  static BulkListingResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: Joi.array().items(OrderPlatformModel.BulkActionListingData()),
      page: OrderPlatformModel.BulkListinPage(),
      total_count: Joi.number(),
    });
  }

  /** @returns {JobDetailsData} */
  static JobDetailsData() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      total_shipments_count: Joi.number(),
      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),
      successful_shipments_count: Joi.number(),
      failed_shipments_count: Joi.number(),
      processing_shipments_count: Joi.number(),
      company_id: Joi.string().allow(""),
    });
  }

  /** @returns {JobDetailsResponse} */
  static JobDetailsResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: Joi.array().items(OrderPlatformModel.JobDetailsData()),
      file_url: Joi.string().allow(""),
      message: Joi.string().allow(""),
      failed_records: Joi.array().items(
        Joi.object().pattern(/\S/, Joi.string().allow(""))
      ),
      uploaded_by: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      created_ts: Joi.string().allow(""),
      uploaded_on: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {JobFailedResponse} */
  static JobFailedResponse() {
    return Joi.object({
      file_name: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {ManifestPageInfo} */
  static ManifestPageInfo() {
    return Joi.object({
      current: Joi.number().required(),
      total: Joi.number().required(),
      has_next: Joi.boolean().required(),
      size: Joi.number().required(),
      has_previous: Joi.boolean().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ManifestItemDetails} */
  static ManifestItemDetails() {
    return Joi.object({
      quantity: Joi.number(),
      shipment_id: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      awb_number: Joi.string().allow(""),
      invoice_id: Joi.string().allow(""),
      shipment_created_at: Joi.string().allow(""),
    });
  }

  /** @returns {ManifestShipmentListing} */
  static ManifestShipmentListing() {
    return Joi.object({
      total_count: Joi.number().required(),
      lane: Joi.string().allow("").required(),
      page: OrderPlatformModel.ManifestPageInfo().required(),
      success: Joi.boolean().required(),
      status: Joi.number(),
      items: Joi.array()
        .items(OrderPlatformModel.ManifestItemDetails())
        .required(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {DateRange} */
  static DateRange() {
    return Joi.object({
      from_date: Joi.string().allow(""),
      to_date: Joi.string().allow(""),
    });
  }

  /** @returns {Filters} */
  static Filters() {
    return Joi.object({
      date_range: OrderPlatformModel.DateRange(),
      logo: Joi.string().allow(""),
      from_date: Joi.string().allow(""),
      stores: Joi.number(),
      to_date: Joi.string().allow(""),
      dp_name: Joi.string().allow(""),
      dp_ids: Joi.string().allow(""),
      lane: Joi.string().allow(""),
      selected_shipments: Joi.string().allow(""),
      store_name: Joi.string().allow(""),
      deselected_shipments: Joi.string().allow(""),
    });
  }

  /** @returns {ManifestFile} */
  static ManifestFile() {
    return Joi.object({
      key: Joi.string().allow(""),
      region: Joi.string().allow(""),
      bucket: Joi.string().allow(""),
    });
  }

  /** @returns {ManifestMediaUpdate} */
  static ManifestMediaUpdate() {
    return Joi.object({
      entity: Joi.string().allow(""),
      link: Joi.string().allow(""),
      code: Joi.number(),
      media_type: Joi.string().allow(""),
      status: Joi.boolean(),
      file: OrderPlatformModel.ManifestFile(),
    });
  }

  /** @returns {PDFMeta} */
  static PDFMeta() {
    return Joi.object({
      consent: Joi.string().allow("").allow(null),
      media_updates: Joi.array().items(
        OrderPlatformModel.ManifestMediaUpdate()
      ),
    });
  }

  /** @returns {TotalShipmentPricesCount} */
  static TotalShipmentPricesCount() {
    return Joi.object({
      total_price: Joi.number(),
      shipment_count: Joi.number(),
    });
  }

  /** @returns {ManifestMeta} */
  static ManifestMeta() {
    return Joi.object({
      filters: OrderPlatformModel.Filters(),
      total_shipment_prices_count: OrderPlatformModel.TotalShipmentPricesCount(),
    });
  }

  /** @returns {Manifest} */
  static Manifest() {
    return Joi.object({
      company_id: Joi.number().required(),
      filters: OrderPlatformModel.Filters(),
      pdf_meta: OrderPlatformModel.PDFMeta(),
      meta: OrderPlatformModel.ManifestMeta(),
      is_active: Joi.boolean().required(),
      user_id: Joi.string().allow("").required(),
      created_at: Joi.string().allow("").required(),
      created_ts: Joi.string().allow(""),
      manifest_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      id: Joi.number().required(),
      uid: Joi.string().allow("").required(),
      created_by: Joi.string().allow("").required(),
    });
  }

  /** @returns {ManifestList} */
  static ManifestList() {
    return Joi.object({
      items: Joi.array().items(OrderPlatformModel.Manifest()),
      page: OrderPlatformModel.ManifestPageInfo(),
    });
  }

  /** @returns {ManifestDetails} */
  static ManifestDetails() {
    return Joi.object({
      items: Joi.array().items(OrderPlatformModel.ManifestItemDetails()),
      page: OrderPlatformModel.ManifestPageInfo(),
      additional_shipment_count: Joi.number(),
      manifest_details: Joi.array().items(OrderPlatformModel.Manifest()),
    });
  }

  /** @returns {FilterInfoOption} */
  static FilterInfoOption() {
    return Joi.object({
      text: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      placeholder_text: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      min_search_size: Joi.number().allow(null),
      show_ui: Joi.boolean().allow(null),
    });
  }

  /** @returns {FiltersInfo} */
  static FiltersInfo() {
    return Joi.object({
      options: Joi.array()
        .items(OrderPlatformModel.FilterInfoOption())
        .allow(null, ""),
      text: Joi.string().allow("").required(),
      placeholder_text: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").required(),
      required: Joi.boolean().allow(null),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ManifestFiltersResponse} */
  static ManifestFiltersResponse() {
    return Joi.object({
      advance_filter: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      global_filter: Joi.array().items(OrderPlatformModel.FiltersInfo()),
    });
  }

  /** @returns {PageDetails} */
  static PageDetails() {
    return Joi.object({
      current: Joi.number().allow(null),
      has_next: Joi.boolean().allow(null),
      has_previous: Joi.boolean().allow(null),
      item_total: Joi.number().allow(null).required(),
      size: Joi.number().allow(null),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {EInvoiceIrnDetails} */
  static EInvoiceIrnDetails() {
    return Joi.object({
      ack_dt: Joi.string().allow("").required(),
      ack_no: Joi.string().allow("").required(),
      irn: Joi.string().allow("").required(),
      signed_invoice: Joi.string().allow("").required(),
      signed_qr_code: Joi.string().allow("").required(),
    });
  }

  /** @returns {EInvoiceErrorDetails} */
  static EInvoiceErrorDetails() {
    return Joi.object({
      error_code: Joi.string().allow(""),
      error_message: Joi.string().allow("").required(),
    });
  }

  /** @returns {EInvoiceDetails} */
  static EInvoiceDetails() {
    return Joi.object({
      irn_details: OrderPlatformModel.EInvoiceIrnDetails(),
      error_details: Joi.array().items(
        OrderPlatformModel.EInvoiceErrorDetails()
      ),
    });
  }

  /** @returns {EInvoiceResponseData} */
  static EInvoiceResponseData() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),
      einvoice_type: Joi.string().allow("").required(),
      status: Joi.number().required(),
      message: Joi.string().allow("").required(),
      einvoice_info: OrderPlatformModel.EInvoiceDetails(),
    });
  }

  /** @returns {EInvoiceRetry} */
  static EInvoiceRetry() {
    return Joi.object({
      shipments_data: Joi.array().items(
        OrderPlatformModel.EInvoiceRetryShipmentData()
      ),
    });
  }

  /** @returns {EInvoiceRetryResponse} */
  static EInvoiceRetryResponse() {
    return Joi.object({
      response_data: Joi.array()
        .items(OrderPlatformModel.EInvoiceResponseData())
        .required(),
    });
  }

  /** @returns {EInvoiceErrorInfo} */
  static EInvoiceErrorInfo() {
    return Joi.object({
      error_details: Joi.array().items(
        OrderPlatformModel.EInvoiceErrorDetails()
      ),
    });
  }

  /** @returns {EInvoiceErrorResponseData} */
  static EInvoiceErrorResponseData() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),
      einvoice_type: Joi.string().allow("").required(),
      status: Joi.number().required(),
      message: Joi.string().allow("").required(),
      einvoice_info: OrderPlatformModel.EInvoiceErrorInfo(),
    });
  }

  /** @returns {EInvoiceErrorResponse} */
  static EInvoiceErrorResponse() {
    return Joi.object({
      response_data: Joi.array().items(
        OrderPlatformModel.EInvoiceErrorResponseData()
      ),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {EInvoiceErrorResponseDetails} */
  static EInvoiceErrorResponseDetails() {
    return Joi.object({
      response_data: Joi.array()
        .items(OrderPlatformModel.EInvoiceErrorResponseData())
        .required(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {EInvoiceRetryShipmentData} */
  static EInvoiceRetryShipmentData() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),
      einvoice_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {CourierPartnerTrackingDetails} */
  static CourierPartnerTrackingDetails() {
    return Joi.object({
      awb: Joi.string().allow("").required(),
      dp_location: Joi.string().allow("").allow(null),
      dp_name: Joi.string().allow("").required(),
      dp_status: Joi.string().allow("").required(),
      dp_status_updated_at: Joi.string().allow("").required(),
      estimated_delivery_date: Joi.string().allow("").allow(null),
      id: Joi.number(),
      journey: Joi.string().allow("").required(),
      meta: Joi.any(),
      operational_status: Joi.string().allow("").required(),
      promised_delivery_date: Joi.string().allow("").allow(null),
      remark: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CourierPartnerTrackingResponse} */
  static CourierPartnerTrackingResponse() {
    return Joi.object({
      items: Joi.array().items(
        OrderPlatformModel.CourierPartnerTrackingDetails()
      ),
      page: OrderPlatformModel.PageDetails(),
    });
  }

  /** @returns {LogsChannelDetails} */
  static LogsChannelDetails() {
    return Joi.object({
      channel_id: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      logo: Joi.string().allow("").allow(null),
      channel_shipment_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {LogPaymentDetails} */
  static LogPaymentDetails() {
    return Joi.object({
      payment_mode: Joi.string().allow("").allow(null),
      amount_paid: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {FailedOrdersItem} */
  static FailedOrdersItem() {
    return Joi.object({
      log_id: Joi.number().required(),
      order_id: Joi.string().allow("").required(),
      channel: OrderPlatformModel.LogsChannelDetails().required(),
      payment: OrderPlatformModel.LogPaymentDetails().required(),
      created_at: Joi.string().allow("").required(),
      error_message: Joi.string().allow("").allow(null).required(),
      display_message: Joi.string().allow("").allow(null).required(),
      method_name: Joi.string().allow("").required(),
      meta: Joi.any().allow(null).required(),
    });
  }

  /** @returns {FailedOrderLogs} */
  static FailedOrderLogs() {
    return Joi.object({
      items: OrderPlatformModel.FailedOrdersItem().required(),
      page: OrderPlatformModel.PageDetails().required(),
    });
  }

  /** @returns {FailedOrderLogDetails} */
  static FailedOrderLogDetails() {
    return Joi.object({
      error_trace: Joi.string().allow("").allow(null).required(),
      exception: Joi.string().allow("").allow(null).required(),
    });
  }

  /** @returns {GenerateInvoiceIDResponseData} */
  static GenerateInvoiceIDResponseData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),
      success: Joi.boolean(),
      invoice_id: Joi.string().allow("").allow(null),
      error_message: Joi.boolean().allow(null),
    });
  }

  /** @returns {GenerateInvoiceIDErrorResponseData} */
  static GenerateInvoiceIDErrorResponseData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),
      success: Joi.boolean(),
      invoice_id: Joi.boolean().allow(null),
      error_message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {GenerateInvoiceIDRequestSchema} */
  static GenerateInvoiceIDRequestSchema() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {GenerateInvoiceIDResponse} */
  static GenerateInvoiceIDResponse() {
    return Joi.object({
      items: Joi.array().items(
        OrderPlatformModel.GenerateInvoiceIDResponseData()
      ),
    });
  }

  /** @returns {GenerateInvoiceIDErrorResponse} */
  static GenerateInvoiceIDErrorResponse() {
    return Joi.object({
      items: Joi.array().items(
        OrderPlatformModel.GenerateInvoiceIDErrorResponseData()
      ),
    });
  }

  /** @returns {ManifestResponse} */
  static ManifestResponse() {
    return Joi.object({
      items: OrderPlatformModel.ManifestItems(),
    });
  }

  /** @returns {ProcessManifestRequest} */
  static ProcessManifestRequest() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      manifest_id: Joi.string().allow(""),
      filters: OrderPlatformModel.Filters().required(),
      unique_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ManifestItems} */
  static ManifestItems() {
    return Joi.object({
      filters: OrderPlatformModel.Filters(),
      manifest_id: Joi.string().allow(""),
      unique_id: Joi.string().allow(""),
      company_id: Joi.number(),
      dp_id: Joi.string().allow("").allow(null),
      courier_partner_slug: Joi.string().allow(""),
      action: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {ManifestErrorResponse} */
  static ManifestErrorResponse() {
    return Joi.object({
      success: Joi.boolean(),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {ConfigData} */
  static ConfigData() {
    return Joi.object({
      acknowledged: Joi.boolean(),
      is_upserted: Joi.boolean(),
      is_inserted: Joi.boolean(),
    });
  }

  /** @returns {ConfigUpdatedResponse} */
  static ConfigUpdatedResponse() {
    return Joi.object({
      data: Joi.array().items(OrderPlatformModel.ConfigData()).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {FlagData} */
  static FlagData() {
    return Joi.object({
      filter: Joi.any(),
    });
  }

  /** @returns {Flags} */
  static Flags() {
    return Joi.object({
      allow_partial_transition: Joi.array().items(
        OrderPlatformModel.FlagData()
      ),
      can_break_entity: Joi.array().items(OrderPlatformModel.FlagData()),
      allowed_bag_updates: Joi.array().items(OrderPlatformModel.FlagData()),
      allowed_bag_status_updates: Joi.array().items(
        OrderPlatformModel.FlagData()
      ),
      allowed_entity_updates: Joi.array().items(OrderPlatformModel.FlagData()),
      allowed_entity_status_updates: Joi.array().items(
        OrderPlatformModel.FlagData()
      ),
      status_update_type: Joi.array().items(OrderPlatformModel.FlagData()),
      is_bag_status_reason_allowed: Joi.array().items(
        OrderPlatformModel.FlagData()
      ),
      is_entity_status_reason_allowed: Joi.array().items(
        OrderPlatformModel.FlagData()
      ),
      transition_strategy: Joi.array().items(OrderPlatformModel.FlagData()),
    });
  }

  /** @returns {Filter} */
  static Filter() {
    return Joi.object({
      order_type: Joi.string().allow(""),
      is_partial_transition: Joi.boolean(),
      auto_trigger_dp_assignment_acf: Joi.boolean(),
      lock_status: Joi.string().allow(""),
      lock_after_transition: Joi.boolean(),
      resume_tasks_after_unlock: Joi.boolean(),
      is_invoice_id_present: Joi.boolean(),
      is_credit_note_generated: Joi.boolean(),
      fulfill_virtual_invoice: Joi.boolean(),
      next_status: Joi.string().allow(""),
      is_hook_enabled: Joi.boolean(),
      pos_credit_note_check: Joi.boolean(),
      order_platform: Joi.string().allow(""),
      refund_type: Joi.string().allow(""),
      is_non_pos_platform: Joi.boolean(),
      is_self_ship: Joi.boolean(),
      seller_country_code: Joi.string().allow(""),
      customer_country_code: Joi.string().allow(""),
      is_test_order: Joi.boolean(),
      task_trigger_condition: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PostHook} */
  static PostHook() {
    return Joi.object({
      task: Joi.string().allow("").required(),
      kwargs: Joi.object().pattern(/\S/, Joi.any()),
      filters: OrderPlatformModel.Filter(),
    });
  }

  /** @returns {PreHook} */
  static PreHook() {
    return Joi.object({
      task: Joi.string().allow("").required(),
      kwargs: Joi.object().pattern(/\S/, Joi.any()),
      filters: OrderPlatformModel.Filter(),
    });
  }

  /** @returns {Config} */
  static Config() {
    return Joi.object({
      from_state: Joi.string().allow(""),
      to_state: Joi.string().allow(""),
      pre_hooks: Joi.array().items(OrderPlatformModel.PreHook()),
      post_hooks: Joi.array().items(OrderPlatformModel.PostHook()),
      flags: OrderPlatformModel.Flags(),
    });
  }

  /** @returns {TransitionConfigCondition} */
  static TransitionConfigCondition() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),
      ordering_channel: Joi.string().allow("").required(),
      entity: Joi.string().allow("").required(),
    });
  }

  /** @returns {TransitionConfigData} */
  static TransitionConfigData() {
    return Joi.object({
      conditions: OrderPlatformModel.TransitionConfigCondition(),
      configs: Joi.array().items(OrderPlatformModel.Config()),
    });
  }

  /** @returns {TransitionConfigPayload} */
  static TransitionConfigPayload() {
    return Joi.object({
      data: OrderPlatformModel.TransitionConfigData(),
    });
  }

  /** @returns {CommonErrorResponse} */
  static CommonErrorResponse() {
    return Joi.object({
      status: Joi.number(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ExceptionErrorResponse} */
  static ExceptionErrorResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      stack_trace: Joi.string().allow(""),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
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
      meta: OrderPlatformModel.BagReasonMeta(),
      question_set: Joi.array().items(OrderPlatformModel.QuestionSet()),
      reasons: Joi.array().items(Joi.link("#BagReasons")),
    }).id("BagReasons");
  }

  /** @returns {ShipmentBagReasons} */
  static ShipmentBagReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderPlatformModel.BagReasons()),
      success: Joi.boolean(),
    });
  }

  /** @returns {ShipmentStatus} */
  static ShipmentStatus() {
    return Joi.object({
      current_shipment_status: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      shipment_status_id: Joi.number().allow(null),
      bag_list: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      title: Joi.string().allow("").required(),
      created_at: Joi.string().allow("").allow(null),
      created_ts: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").allow(null),
      status_created_at: Joi.string().allow("").allow(null),
      status_created_ts: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").allow(null).required(),
    });
  }

  /** @returns {UserDataInfo} */
  static UserDataInfo() {
    return Joi.object({
      uid: Joi.number().allow(null),
      user_oid: Joi.string().allow("").allow(null),
      external_customer_id: Joi.string().allow("").allow(null),
      first_name: Joi.string().allow("").allow(null),
      last_name: Joi.string().allow("").allow(null),
      mobile: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      is_anonymous_user: Joi.boolean().allow(null),
      avis_user_id: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      gender: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformDeliveryAddress} */
  static PlatformDeliveryAddress() {
    return Joi.object({
      phone: Joi.string().allow("").allow(null),
      address2: Joi.string().allow("").allow(null),
      longitude: Joi.number().allow(null),
      pincode: Joi.string().allow("").allow(null),
      area: Joi.string().allow("").allow(null),
      address_type: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").allow(null),
      address_category: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      created_at: Joi.string().allow("").allow(null),
      address1: Joi.string().allow("").allow(null),
      display_address: Joi.string().allow("").allow(null),
      landmark: Joi.string().allow("").allow(null),
      updated_at: Joi.string().allow("").allow(null),
      version: Joi.string().allow("").allow(null),
      latitude: Joi.number().allow(null),
      contact_person: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
    }).allow(null);
  }

  /** @returns {ShipmentListingChannel} */
  static ShipmentListingChannel() {
    return Joi.object({
      channel_shipment_id: Joi.string().allow("").allow(null),
      is_affiliate: Joi.boolean().allow(null),
      logo: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Prices} */
  static Prices() {
    return Joi.object({
      refund_credit: Joi.number().allow(null),
      amount_paid_roundoff: Joi.number().allow(null),
      price_effective: Joi.number().allow(null),
      promotion_effective_discount: Joi.number().allow(null),
      pm_price_split: Joi.number().allow(null),
      refund_amount: Joi.number().allow(null),
      transfer_price: Joi.number().allow(null),
      coupon_effective_discount: Joi.number().allow(null),
      tax_collected_at_source: Joi.number().allow(null),
      brand_calculated_amount: Joi.number().allow(null),
      delivery_charge: Joi.number().allow(null),
      cashback: Joi.number().allow(null),
      value_of_good: Joi.number().allow(null),
      cashback_applied: Joi.number().allow(null),
      cod_charges: Joi.number().allow(null),
      price_marked: Joi.number().allow(null),
      amount_paid: Joi.number().allow(null),
      coupon_value: Joi.number().allow(null),
      discount: Joi.number().allow(null),
      fynd_credits: Joi.number().allow(null),
      gift_price: Joi.number().allow(null),
      amount_to_be_collected: Joi.number().allow(null),
    });
  }

  /** @returns {Identifier} */
  static Identifier() {
    return Joi.object({
      alu: Joi.string().allow("").allow(null),
      ean: Joi.string().allow("").allow(null),
      sku_code: Joi.string().allow("").allow(null),
      upc: Joi.string().allow("").allow(null),
      isbn: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {FinancialBreakup} */
  static FinancialBreakup() {
    return Joi.object({
      refund_credit: Joi.number().required(),
      amount_paid_roundoff: Joi.number().allow(null),
      price_effective: Joi.number().required(),
      promotion_effective_discount: Joi.number().required(),
      transfer_price: Joi.number().required(),
      coupon_effective_discount: Joi.number().required(),
      gst_fee: Joi.number().required(),
      tax_collected_at_source: Joi.number().allow(null),
      brand_calculated_amount: Joi.number().required(),
      delivery_charge: Joi.number().required(),
      gst_tag: Joi.string().allow("").required(),
      hsn_code: Joi.string().allow("").required(),
      cashback: Joi.number().required(),
      item_name: Joi.string().allow("").required(),
      value_of_good: Joi.number().required(),
      cashback_applied: Joi.number().required(),
      cod_charges: Joi.number().required(),
      price_marked: Joi.number().required(),
      size: Joi.string().allow("").required(),
      amount_paid: Joi.number().required(),
      coupon_value: Joi.number().required(),
      discount: Joi.number().required(),
      fynd_credits: Joi.number().required(),
      gst_tax_percentage: Joi.number().required(),
      amount_to_be_collected: Joi.number(),
      identifiers: OrderPlatformModel.Identifier().required(),
      total_units: Joi.number().required(),
      added_to_fynd_cash: Joi.boolean().required(),
    });
  }

  /** @returns {GSTDetailsData} */
  static GSTDetailsData() {
    return Joi.object({
      cgst_tax_percentage: Joi.number().allow(null),
      gstin_code: Joi.string().allow("").allow(null),
      value_of_good: Joi.number().required(),
      gst_fee: Joi.number().required(),
      igst_tax_percentage: Joi.number().allow(null),
      gst_tax_percentage: Joi.number().allow(null),
      hsn_code_id: Joi.string().allow("").allow(null),
      igst_gst_fee: Joi.number().allow(null),
      is_default_hsn_code: Joi.boolean().allow(null),
      sgst_gst_fee: Joi.number().allow(null),
      tax_collected_at_source: Joi.number().required(),
      brand_calculated_amount: Joi.number().required(),
      cgst_gst_fee: Joi.number().allow(null),
      gst_tag: Joi.string().allow("").allow(null),
      sgst_tax_percentage: Joi.number().allow(null),
      hsn_code: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BagStateMapper} */
  static BagStateMapper() {
    return Joi.object({
      is_active: Joi.boolean().allow(null),
      app_display_name: Joi.string().allow("").allow(null),
      state_type: Joi.string().allow("").required(),
      id: Joi.number().required(),
      journey_type: Joi.string().allow("").required(),
      app_state_name: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").required(),
      app_facing: Joi.boolean().allow(null),
      notify_customer: Joi.boolean().allow(null),
      display_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {BagStatusHistory} */
  static BagStatusHistory() {
    return Joi.object({
      forward: Joi.boolean().allow(null),
      store_id: Joi.number().allow(null),
      delivery_awb_number: Joi.string().allow("").allow(null),
      kafka_sync: Joi.boolean().allow(null),
      delivery_partner_id: Joi.number().allow(null),
      app_display_name: Joi.string().allow("").allow(null),
      state_id: Joi.number().allow(null),
      state_type: Joi.string().allow("").allow(null),
      bsh_id: Joi.number().allow(null),
      created_at: Joi.string().allow("").allow(null),
      created_ts: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").allow(null),
      updated_at: Joi.string().allow("").allow(null),
      updated_ts: Joi.string().allow("").allow(null),
      bag_state_mapper: OrderPlatformModel.BagStateMapper(),
      bag_id: Joi.number().allow(null),
      reasons: Joi.array().items(Joi.any()).allow(null, ""),
      status: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Dimensions} */
  static Dimensions() {
    return Joi.object({
      height: Joi.number().allow(null),
      width: Joi.number().allow(null),
      is_default: Joi.boolean().allow(null),
      unit: Joi.string().allow("").allow(null),
      length: Joi.number().allow(null),
    });
  }

  /** @returns {ReturnConfig} */
  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean().allow(null),
      time: Joi.number().allow(null),
      unit: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Weight} */
  static Weight() {
    return Joi.object({
      is_default: Joi.boolean().allow(null),
      shipping: Joi.number().allow(null),
      unit: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Article} */
  static Article() {
    return Joi.object({
      child_details: Joi.any().allow(null),
      seller_identifier: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
      a_set: Joi.any().allow(null),
      dimensions: OrderPlatformModel.Dimensions(),
      currency: Joi.any().allow(null),
      esp_modified: Joi.boolean().allow(null),
      return_config: OrderPlatformModel.ReturnConfig(),
      code: Joi.string().allow("").allow(null),
      weight: OrderPlatformModel.Weight(),
      _id: Joi.string().allow("").required(),
      identifiers: Joi.any().required(),
      raw_meta: Joi.string().allow("").allow(null),
      size: Joi.string().allow("").required(),
      is_set: Joi.boolean().allow(null),
      tags: Joi.array().items(Joi.string().allow("")).allow(null, ""),
    });
  }

  /** @returns {ShipmentListingBrand} */
  static ShipmentListingBrand() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),
      created_on: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      logo_base64: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ReplacementDetails} */
  static ReplacementDetails() {
    return Joi.object({
      replacement_type: Joi.string().allow("").allow(null),
      original_affiliate_order_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {AffiliateMeta} */
  static AffiliateMeta() {
    return Joi.object({
      order_item_id: Joi.string().allow("").allow(null),
      channel_order_id: Joi.string().allow("").allow(null),
      employee_discount: Joi.number().allow(null),
      box_type: Joi.string().allow("").allow(null),
      quantity: Joi.number().allow(null),
      size_level_total_qty: Joi.number().allow(null),
      loyalty_discount: Joi.number().allow(null),
      replacement_details: OrderPlatformModel.ReplacementDetails(),
      channel_shipment_id: Joi.string().allow("").allow(null),
      marketplace_invoice_id: Joi.string().allow("").allow(null),
      due_date: Joi.string().allow("").allow(null),
      coupon_code: Joi.string().allow("").allow(null),
      is_priority: Joi.boolean().allow(null),
      is_serial_number_required: Joi.boolean().allow(null),
      fulfilment_priority: Joi.number().allow(null),
      customer_selling_price: Joi.number().allow(null),
    });
  }

  /** @returns {AffiliateBagDetails} */
  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_meta: OrderPlatformModel.AffiliateMeta().required(),
      affiliate_order_id: Joi.string().allow("").required(),
      employee_discount: Joi.number().allow(null),
      affiliate_bag_id: Joi.string().allow("").required(),
      loyalty_discount: Joi.number().allow(null),
    });
  }

  /** @returns {PlatformArticleAttributes} */
  static PlatformArticleAttributes() {
    return Joi.object({
      currency: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformItem} */
  static PlatformItem() {
    return Joi.object({
      id: Joi.number().allow(null),
      attributes: OrderPlatformModel.PlatformArticleAttributes(),
      brand_id: Joi.number().allow(null),
      slug_key: Joi.string().allow("").allow(null),
      l3_category: Joi.number().allow(null),
      l3_category_name: Joi.string().allow("").allow(null),
      last_updated_at: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      l2_category: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      brand: Joi.string().allow("").allow(null),
      image: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      code: Joi.string().allow("").allow(null),
      l1_category: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      size: Joi.string().allow("").allow(null),
      can_cancel: Joi.boolean().allow(null),
      can_return: Joi.boolean().allow(null),
      branch_url: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      color: Joi.string().allow("").allow(null),
      department_id: Joi.number().allow(null),
      images: Joi.array().items(Joi.string().allow("")).allow(null, ""),
    });
  }

  /** @returns {Dates} */
  static Dates() {
    return Joi.object({
      delivery_date: Joi.string().allow("").allow(null),
      order_created: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BagReturnableCancelableStatus} */
  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      can_be_cancelled: Joi.boolean().required(),
      enable_tracking: Joi.boolean().required(),
      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  /** @returns {BagUnit} */
  static BagUnit() {
    return Joi.object({
      bag_type: Joi.string().allow("").allow(null),
      gst: OrderPlatformModel.GSTDetailsData(),
      financial_breakup: Joi.array()
        .items(OrderPlatformModel.FinancialBreakup())
        .required(),
      bag_expiry_date: Joi.string().allow("").allow(null),
      bag_status: Joi.array().items(OrderPlatformModel.BagStatusHistory()),
      current_operational_status: OrderPlatformModel.BagStatusHistory().required(),
      article: OrderPlatformModel.Article(),
      brand: OrderPlatformModel.ShipmentListingBrand(),
      affiliate_bag_details: OrderPlatformModel.AffiliateBagDetails(),
      item: OrderPlatformModel.PlatformItem(),
      reasons: Joi.array().items(Joi.any()).allow(null, ""),
      product_quantity: Joi.number().required(),
      can_return: Joi.boolean().allow(null),
      display_name: Joi.string().allow("").allow(null),
      can_cancel: Joi.boolean().allow(null),
      size: Joi.string().allow("").allow(null),
      line_number: Joi.number().allow(null),
      meta: Joi.any().allow(null),
      prices: OrderPlatformModel.Prices(),
      dates: OrderPlatformModel.Dates(),
      current_status: OrderPlatformModel.BagStatusHistory().required(),
      bag_id: Joi.number().required(),
      entity_type: Joi.string().allow("").allow(null),
      status: OrderPlatformModel.BagReturnableCancelableStatus().required(),
    });
  }

  /** @returns {ShipmentItemFulFillingStore} */
  static ShipmentItemFulFillingStore() {
    return Joi.object({
      phone: Joi.string().allow("").allow(null),
      brand_store_tags: Joi.array()
        .items(Joi.string().allow(""))
        .allow(null, ""),
      pincode: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      address: Joi.string().allow("").allow(null),
      address1: Joi.string().allow("").allow(null),
      display_address: Joi.string().allow("").allow(null),
      location_type: Joi.string().allow("").allow(null),
      id: Joi.number().required(),
      code: Joi.string().allow("").required(),
      store_email: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
      tags: Joi.array().items(Joi.string().allow("")).allow(null, ""),
    });
  }

  /** @returns {Currency} */
  static Currency() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
    });
  }

  /** @returns {OrderingCurrency} */
  static OrderingCurrency() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_name: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      currency_sub_unit: Joi.string().allow(""),
    });
  }

  /** @returns {ConversionRate} */
  static ConversionRate() {
    return Joi.object({
      base: Joi.string().allow(""),
      rates: Joi.any(),
    });
  }

  /** @returns {CurrencyInfo} */
  static CurrencyInfo() {
    return Joi.object({
      ordering_currency: OrderPlatformModel.OrderingCurrency(),
      conversion_rate: OrderPlatformModel.ConversionRate(),
    });
  }

  /** @returns {ShipmentItem} */
  static ShipmentItem() {
    return Joi.object({
      order_date: Joi.string().allow("").allow(null),
      order_created_ts: Joi.string().allow("").allow(null),
      shipment_status: OrderPlatformModel.ShipmentStatus(),
      user: OrderPlatformModel.UserDataInfo(),
      estimated_sla_time: Joi.string().allow("").allow(null),
      estimated_sla_ts: Joi.string().allow("").allow(null),
      delivery_address: OrderPlatformModel.PlatformDeliveryAddress(),
      channel: OrderPlatformModel.ShipmentListingChannel(),
      previous_shipment_id: Joi.string().allow("").allow(null),
      lock_status: Joi.boolean().allow(null),
      invoice_id: Joi.string().allow("").allow(null),
      payment_methods: Joi.any().allow(null),
      payment_info: Joi.array().items(Joi.any()).allow(null, ""),
      status_created_at: Joi.string().allow(""),
      status_created_ts: Joi.string().allow(""),
      display_name: Joi.string().allow("").allow(null),
      bags: Joi.array().items(OrderPlatformModel.BagUnit()),
      fulfilling_store: OrderPlatformModel.ShipmentItemFulFillingStore(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      payment_mode: Joi.string().allow("").allow(null),
      can_process: Joi.boolean().allow(null),
      prices: OrderPlatformModel.Prices(),
      order_id: Joi.string().allow("").required(),
      ordering_channnel: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").allow(null),
      customer_note: Joi.string().allow("").allow(null),
      total_bags: Joi.number().allow(null).required(),
      shipment_created_at: Joi.string().allow("").required(),
      mode_of_payment: Joi.string().allow(""),
      shipment_created_ts: Joi.string().allow(""),
      currency: OrderPlatformModel.Currency(),
      currency_info: OrderPlatformModel.CurrencyInfo(),
      is_lapa_enabled: Joi.boolean(),
    });
  }

  /** @returns {ShipmentInternalPlatformViewResponse} */
  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      total_count: Joi.number().allow(null),
      message: Joi.string().allow("").allow(null),
      success: Joi.boolean().allow(null),
      items: Joi.array().items(OrderPlatformModel.ShipmentItem()),
      lane: Joi.string().allow("").allow(null),
      page: OrderPlatformModel.Page(),
    });
  }

  /** @returns {TrackingList} */
  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean().allow(null),
      text: Joi.string().allow("").required(),
      is_current: Joi.boolean().allow(null),
      time: Joi.string().allow("").allow(null),
      created_ts: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").required(),
    });
  }

  /** @returns {InvoiceInfo} */
  static InvoiceInfo() {
    return Joi.object({
      store_invoice_id: Joi.string().allow("").allow(null),
      invoice_url: Joi.string().allow("").allow(null),
      updated_date: Joi.string().allow("").allow(null),
      external_invoice_id: Joi.string().allow("").allow(null),
      label_url: Joi.string().allow("").allow(null),
      credit_note_id: Joi.string().allow("").allow(null),
      links: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {OrderDetailsData} */
  static OrderDetailsData() {
    return Joi.object({
      order_date: Joi.string().allow("").allow(null),
      created_ts: Joi.string().allow("").allow(null),
      tax_details: Joi.any().allow(null),
      cod_charges: Joi.string().allow("").allow(null),
      source: Joi.string().allow("").allow(null),
      fynd_order_id: Joi.string().allow("").required(),
      affiliate_id: Joi.string().allow("").allow(null),
      affiliate_order_id: Joi.string().allow("").allow(null),
      ordering_channel_logo: Joi.any().allow(null),
      order_value: Joi.string().allow("").allow(null),
      ordering_channel: Joi.string().allow("").allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {UserDetailsData} */
  static UserDetailsData() {
    return Joi.object({
      phone: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      address: Joi.string().allow("").required(),
      area: Joi.string().allow("").allow(null),
      address_type: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").required(),
      email: Joi.string().allow("").allow(null),
      address1: Joi.string().allow("").allow(null),
      landmark: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
      state_code: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
      country_phone_code: Joi.string().allow(""),
      display_address: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PhoneDetails} */
  static PhoneDetails() {
    return Joi.object({
      country_code: Joi.number().allow(null),
      number: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ContactDetails} */
  static ContactDetails() {
    return Joi.object({
      phone: Joi.array()
        .items(OrderPlatformModel.PhoneDetails())
        .allow(null, ""),
      emails: Joi.array().items(Joi.string().allow("")).allow(null, ""),
    });
  }

  /** @returns {CompanyDetails} */
  static CompanyDetails() {
    return Joi.object({
      company_name: Joi.string().allow("").allow(null),
      address: Joi.any().allow(null),
      company_cin: Joi.string().allow("").allow(null),
      company_id: Joi.number().allow(null),
      company_gst: Joi.string().allow("").allow(null),
      company_contact: OrderPlatformModel.ContactDetails(),
    });
  }

  /** @returns {OrderingStoreDetails} */
  static OrderingStoreDetails() {
    return Joi.object({
      phone: Joi.string().allow("").allow(null),
      pincode: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      address: Joi.string().allow("").allow(null),
      address1: Joi.string().allow("").allow(null),
      display_address: Joi.string().allow("").allow(null),
      id: Joi.number().allow(null),
      code: Joi.string().allow("").allow(null),
      store_name: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").allow(null),
      contact_person: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {DPDetailsData} */
  static DPDetailsData() {
    return Joi.object({
      pincode: Joi.string().allow("").allow(null),
      track_url: Joi.string().allow("").allow(null),
      eway_bill_id: Joi.string().allow("").allow(null),
      id: Joi.number().allow(null),
      country: Joi.string().allow("").allow(null),
      awb_no: Joi.string().allow("").allow(null),
      gst_tag: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BuyerDetails} */
  static BuyerDetails() {
    return Joi.object({
      ajio_site_id: Joi.string().allow("").allow(null),
      pincode: Joi.number().required(),
      address: Joi.string().allow("").allow(null).required(),
      gstin: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
    });
  }

  /** @returns {DebugInfo} */
  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {EinvoiceInfo} */
  static EinvoiceInfo() {
    return Joi.object({
      credit_note: Joi.any().allow(null),
      invoice: Joi.any().allow(null),
    });
  }

  /** @returns {Formatted} */
  static Formatted() {
    return Joi.object({
      max: Joi.string().allow("").allow(null),
      min: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentTags} */
  static ShipmentTags() {
    return Joi.object({
      slug: Joi.string().allow("").allow(null),
      entity_type: Joi.string().allow("").allow(null),
      display_text: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {LockData} */
  static LockData() {
    return Joi.object({
      locked: Joi.boolean().allow(null),
      mto: Joi.boolean().allow(null),
      lock_message: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentTimeStamp} */
  static ShipmentTimeStamp() {
    return Joi.object({
      max: Joi.number().allow(null),
      min: Joi.number().allow(null),
    });
  }

  /** @returns {ShipmentMeta} */
  static ShipmentMeta() {
    return Joi.object({
      tracking_url: Joi.string().allow("").allow(null),
      estimated_delivery_date: Joi.string().allow("").allow(null),
      same_store_available: Joi.boolean().required(),
      b2b_buyer_details: OrderPlatformModel.BuyerDetails(),
      formatted: OrderPlatformModel.Formatted(),
      debug_info: OrderPlatformModel.DebugInfo(),
      return_awb_number: Joi.string().allow("").allow(null),
      is_self_ship: Joi.boolean().allow(null),
      box_type: Joi.string().allow("").allow(null),
      einvoice_info: OrderPlatformModel.EinvoiceInfo(),
      return_affiliate_shipment_id: Joi.string().allow("").allow(null),
      parent_dp_id: Joi.string().allow("").allow(null),
      shipment_weight: Joi.number().allow(null),
      dimension: OrderPlatformModel.Dimensions(),
      dp_options: Joi.any().allow(null),
      assign_dp_from_sb: Joi.boolean().allow(null),
      due_date: Joi.string().allow("").allow(null),
      store_invoice_updated_date: Joi.string().allow("").allow(null),
      forward_affiliate_shipment_id: Joi.string().allow("").allow(null),
      return_store_node: Joi.number().allow(null),
      fulfilment_priority_text: Joi.string().allow("").allow(null),
      shipment_tags: Joi.array().items(OrderPlatformModel.ShipmentTags()),
      external: Joi.any().allow(null),
      awb_number: Joi.string().allow("").allow(null),
      lock_data: OrderPlatformModel.LockData(),
      order_type: Joi.string().allow("").allow(null),
      ewaybill_info: Joi.any().allow(null),
      dp_id: Joi.string().allow("").allow(null),
      shipment_volumetric_weight: Joi.number().allow(null),
      marketplace_store_id: Joi.string().allow("").allow(null),
      return_details: Joi.any().allow(null),
      dp_sort_key: Joi.string().allow("").allow(null),
      packaging_name: Joi.string().allow("").allow(null),
      timestamp: OrderPlatformModel.ShipmentTimeStamp(),
      auto_trigger_dp_assignment_acf: Joi.boolean().allow(null),
      dp_name: Joi.string().allow("").allow(null),
      po_number: Joi.string().allow("").allow(null),
      weight: Joi.number().required(),
      b2c_buyer_details: Joi.any().allow(null),
      forward_affiliate_order_id: Joi.string().allow("").allow(null),
      return_affiliate_order_id: Joi.string().allow("").allow(null),
      bag_weight: Joi.any().allow(null),
      refund_to: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PDFLinks} */
  static PDFLinks() {
    return Joi.object({
      invoice_type: Joi.string().allow("").required(),
      label_a6: Joi.string().allow("").allow(null),
      invoice: Joi.string().allow("").allow(null),
      label_pos: Joi.string().allow("").allow(null),
      invoice_a6: Joi.string().allow("").allow(null),
      b2b: Joi.string().allow("").allow(null),
      label: Joi.string().allow("").allow(null),
      label_a4: Joi.string().allow("").allow(null),
      label_type: Joi.string().allow("").required(),
      invoice_export: Joi.string().allow("").allow(null),
      credit_note_url: Joi.string().allow("").allow(null),
      delivery_challan_a4: Joi.string().allow("").allow(null),
      label_export: Joi.string().allow("").allow(null),
      invoice_a4: Joi.string().allow("").allow(null),
      invoice_pos: Joi.string().allow("").allow(null),
      po_invoice: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {AffiliateConfig} */
  static AffiliateConfig() {
    return Joi.object({
      app_company_id: Joi.number().allow(null),
    });
  }

  /** @returns {AffiliateDetails} */
  static AffiliateDetails() {
    return Joi.object({
      shipment_meta: OrderPlatformModel.ShipmentMeta().required(),
      affiliate_meta: OrderPlatformModel.AffiliateMeta().required(),
      affiliate_shipment_id: Joi.string().allow("").required(),
      company_affiliate_tag: Joi.string().allow("").allow(null),
      affiliate_order_id: Joi.string().allow("").required(),
      pdf_links: OrderPlatformModel.PDFLinks(),
      config: OrderPlatformModel.AffiliateConfig(),
      affiliate_id: Joi.string().allow("").allow(null),
      affiliate_store_id: Joi.string().allow("").required(),
      affiliate_bag_id: Joi.string().allow("").required(),
      ad_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BagConfigs} */
  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),
      allow_force_return: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      can_be_cancelled: Joi.boolean().required(),
      enable_tracking: Joi.boolean().required(),
      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  /** @returns {OrderBagArticle} */
  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any().allow(null),
      return_config: OrderPlatformModel.ReturnConfig(),
      uid: Joi.string().allow("").allow(null),
      size: Joi.string().allow("").allow(null),
      tags: Joi.array().items(Joi.string().allow("")).allow(null, ""),
    });
  }

  /** @returns {OrderBrandName} */
  static OrderBrandName() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),
      company: Joi.number().allow(null),
      id: Joi.number().required(),
      created_on: Joi.string().allow("").allow(null),
      brand_name: Joi.string().allow("").allow(null),
      modified_on: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {AffiliateBagsDetails} */
  static AffiliateBagsDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").allow(null),
      coupon_code: Joi.string().allow("").allow(null),
      affiliate_meta: OrderPlatformModel.AffiliateMeta(),
    });
  }

  /** @returns {BagPaymentMethods} */
  static BagPaymentMethods() {
    return Joi.object({
      mode: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
    });
  }

  /** @returns {DiscountRules} */
  static DiscountRules() {
    return Joi.object({
      value: Joi.number().allow(null),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ItemCriterias} */
  static ItemCriterias() {
    return Joi.object({
      item_brand: Joi.array().items(Joi.number()).allow(null, ""),
    });
  }

  /** @returns {BuyRules} */
  static BuyRules() {
    return Joi.object({
      item_criteria: OrderPlatformModel.ItemCriterias(),
      cart_conditions: Joi.any().allow(null),
    });
  }

  /** @returns {AppliedPromos} */
  static AppliedPromos() {
    return Joi.object({
      promotion_type: Joi.string().allow("").allow(null),
      promotion_name: Joi.string().allow("").allow(null),
      discount_rules: Joi.array().items(OrderPlatformModel.DiscountRules()),
      amount: Joi.number().allow(null),
      article_quantity: Joi.number().allow(null),
      buy_rules: Joi.array().items(OrderPlatformModel.BuyRules()),
      promo_id: Joi.string().allow("").allow(null),
      mrp_promotion: Joi.boolean().allow(null),
    });
  }

  /** @returns {CurrentStatus} */
  static CurrentStatus() {
    return Joi.object({
      store_id: Joi.number().allow(null),
      delivery_awb_number: Joi.string().allow("").allow(null),
      kafka_sync: Joi.boolean().allow(null),
      delivery_partner_id: Joi.number().allow(null),
      state_type: Joi.string().allow("").allow(null),
      state_id: Joi.number().allow(null),
      id: Joi.number().required(),
      created_at: Joi.string().allow("").allow(null),
      created_ts: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").allow(null),
      updated_at: Joi.string().allow("").allow(null),
      bag_state_mapper: OrderPlatformModel.BagStateMapper(),
      bag_id: Joi.number().allow(null),
      status: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {OrderBags} */
  static OrderBags() {
    return Joi.object({
      gst_details: OrderPlatformModel.GSTDetailsData(),
      bag_status: Joi.array().items(OrderPlatformModel.BagStatusHistory()),
      parent_promo_bags: Joi.any().allow(null),
      financial_breakup: OrderPlatformModel.FinancialBreakup(),
      bag_configs: OrderPlatformModel.BagConfigs(),
      seller_identifier: Joi.string().allow("").allow(null),
      delivery_address: OrderPlatformModel.PlatformDeliveryAddress(),
      article: OrderPlatformModel.OrderBagArticle(),
      brand: OrderPlatformModel.OrderBrandName(),
      group_id: Joi.string().allow("").allow(null),
      affiliate_bag_details: OrderPlatformModel.AffiliateBagsDetails(),
      item: OrderPlatformModel.PlatformItem(),
      payment_methods: Joi.array().items(
        OrderPlatformModel.BagPaymentMethods()
      ),
      payment_info: Joi.array().items(OrderPlatformModel.BagPaymentMethods()),
      quantity: Joi.number().allow(null),
      identifier: Joi.string().allow("").allow(null),
      can_return: Joi.boolean().allow(null),
      can_cancel: Joi.boolean().allow(null),
      display_name: Joi.string().allow("").allow(null),
      line_number: Joi.number().allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      applied_promos: Joi.array().items(OrderPlatformModel.AppliedPromos()),
      prices: OrderPlatformModel.Prices(),
      current_status: OrderPlatformModel.CurrentStatus(),
      bag_id: Joi.number().required(),
      entity_type: Joi.string().allow("").allow(null),
      is_parent: Joi.boolean().allow(null),
    });
  }

  /** @returns {FulfillingStore} */
  static FulfillingStore() {
    return Joi.object({
      phone: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      meta: Joi.any().required(),
      address: Joi.string().allow("").required(),
      address1: Joi.string().allow("").allow(null),
      display_address: Joi.string().allow("").allow(null),
      id: Joi.number().required(),
      code: Joi.string().allow("").required(),
      store_name: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      fulfillment_channel: Joi.string().allow("").required(),
      contact_person: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
    });
  }

  /** @returns {ShipmentPayments} */
  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow("").allow(null),
      logo: Joi.string().allow("").allow(null),
      source: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentStatusData} */
  static ShipmentStatusData() {
    return Joi.object({
      meta: Joi.any().allow(null),
      bag_list: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      id: Joi.number().allow(null),
      created_at: Joi.string().allow("").allow(null),
      created_ts: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").allow(null),
      current_shipment_status: Joi.string().allow("").allow(null),
      status_created_at: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentLockDetails} */
  static ShipmentLockDetails() {
    return Joi.object({
      lock_status: Joi.boolean().allow(null),
      lock_message: Joi.string().allow("").allow(null),
      action_to_status: Joi.any().allow(null),
    });
  }

  /** @returns {PlatformShipment} */
  static PlatformShipment() {
    return Joi.object({
      picked_date: Joi.string().allow("").allow(null),
      tracking_list: Joi.array().items(OrderPlatformModel.TrackingList()),
      invoice: OrderPlatformModel.InvoiceInfo(),
      shipment_status: Joi.string().allow("").allow(null),
      gst_details: OrderPlatformModel.GSTDetailsData(),
      order_status: OrderPlatformModel.OrderStatusData(),
      delivery_slot: Joi.any().allow(null),
      order: OrderPlatformModel.OrderDetailsData(),
      user: OrderPlatformModel.UserDataInfo(),
      enable_dp_tracking: Joi.boolean().allow(null),
      custom_message: Joi.string().allow("").allow(null),
      estimated_sla_time: Joi.string().allow("").allow(null),
      estimated_sla_ts: Joi.string().allow("").allow(null),
      can_update_dimension: Joi.boolean().allow(null),
      shipment_images: Joi.array()
        .items(Joi.string().allow(""))
        .allow(null, ""),
      delivery_details: OrderPlatformModel.UserDetailsData(),
      billing_details: OrderPlatformModel.UserDetailsData(),
      forward_shipment_id: Joi.string().allow("").allow(null),
      fulfilment_priority: Joi.number().allow(null),
      shipment_details: OrderPlatformModel.ShipmentLockDetails(),
      custom_meta: Joi.array().items(Joi.any()).allow(null, ""),
      shipment_quantity: Joi.number().allow(null),
      company_details: OrderPlatformModel.CompanyDetails(),
      ordering_store: OrderPlatformModel.OrderingStoreDetails(),
      order_platform: Joi.string().allow(""),
      lock_status: Joi.boolean().allow(null),
      platform_logo: Joi.string().allow("").allow(null),
      user_agent: Joi.string().allow("").allow(null),
      dp_details: OrderPlatformModel.DPDetailsData(),
      invoice_id: Joi.string().allow("").allow(null),
      payment_methods: Joi.any().allow(null),
      payment_info: Joi.array().items(Joi.any()).allow(null, ""),
      coupon: Joi.any().allow(null),
      affiliate_details: OrderPlatformModel.AffiliateDetails(),
      priority_text: Joi.string().allow("").allow(null),
      bag_status_history: Joi.array().items(
        OrderPlatformModel.BagStatusHistory()
      ),
      is_dp_assign_enabled: Joi.boolean().allow(null),
      bags: Joi.array().items(OrderPlatformModel.OrderBags()),
      dp_assignment: Joi.boolean().allow(null),
      total_items: Joi.number().allow(null),
      fulfilling_store: OrderPlatformModel.FulfillingStore(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      pdf_links: Joi.any(),
      payment_mode: Joi.string().allow("").allow(null),
      packaging_type: Joi.string().allow("").allow(null),
      journey_type: Joi.string().allow("").allow(null),
      prices: OrderPlatformModel.Prices(),
      vertical: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").required(),
      payments: OrderPlatformModel.ShipmentPayments(),
      operational_status: Joi.string().allow("").allow(null),
      status: OrderPlatformModel.ShipmentStatusData(),
      total_bags: Joi.number().allow(null),
      shipment_created_at: Joi.string().allow("").allow(null),
      shipment_created_ts: Joi.string().allow("").allow(null),
      currency: OrderPlatformModel.Currency(),
      currency_info: OrderPlatformModel.CurrencyInfo(),
      previous_shipment_id: Joi.string().allow("").allow(null),
      shipment_update_time: Joi.number().allow(null),
      rto_address: OrderPlatformModel.PlatformDeliveryAddress(),
      credit_note_id: Joi.string().allow("").allow(null),
      is_self_ship: Joi.boolean().allow(null),
      mode_of_payment: Joi.string().allow("").allow(null),
      is_lapa_enabled: Joi.boolean(),
    });
  }

  /** @returns {ShipmentInfoResponse} */
  static ShipmentInfoResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      success: Joi.boolean().required(),
      shipments: Joi.array().items(OrderPlatformModel.PlatformShipment()),
    });
  }

  /** @returns {TaxDetails} */
  static TaxDetails() {
    return Joi.object({
      pan_no: Joi.string().allow("").allow(null),
      gstin: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PaymentInfoData} */
  static PaymentInfoData() {
    return Joi.object({
      meta: Joi.any(),
      mode: Joi.string().allow(""),
      name: Joi.string().allow(""),
      amount: Joi.number(),
      collected: Joi.boolean(),
      refund_by: Joi.string().allow(""),
      collect_by: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      merchant_transaction_id: Joi.string().allow(""),
    });
  }

  /** @returns {OrderData} */
  static OrderData() {
    return Joi.object({
      order_date: Joi.string().allow("").required(),
      created_ts: Joi.string().allow(""),
      tax_details: OrderPlatformModel.TaxDetails(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      fynd_order_id: Joi.string().allow("").required(),
      prices: OrderPlatformModel.Prices(),
      payment_methods: Joi.any().allow(null),
      payment_info: Joi.array()
        .items(OrderPlatformModel.PaymentInfoData())
        .allow(null, ""),
    });
  }

  /** @returns {OrderDetailsResponse} */
  static OrderDetailsResponse() {
    return Joi.object({
      order: OrderPlatformModel.OrderData(),
      success: Joi.boolean().required(),
      shipments: Joi.array().items(OrderPlatformModel.PlatformShipment()),
    });
  }

  /** @returns {SubLane} */
  static SubLane() {
    return Joi.object({
      value: Joi.string().allow(""),
      text: Joi.string().allow(""),
      total_items: Joi.number(),
      actions: Joi.array().items(Joi.any()),
      index: Joi.number(),
    });
  }

  /** @returns {SuperLane} */
  static SuperLane() {
    return Joi.object({
      value: Joi.string().allow("").required(),
      options: Joi.array().items(OrderPlatformModel.SubLane()),
      text: Joi.string().allow("").required(),
      total_items: Joi.number(),
    });
  }

  /** @returns {LaneConfigResponse} */
  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderPlatformModel.SuperLane()),
    });
  }

  /** @returns {PlatformBreakupValues} */
  static PlatformBreakupValues() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      display: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformChannel} */
  static PlatformChannel() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformOrderItems} */
  static PlatformOrderItems() {
    return Joi.object({
      breakup_values: Joi.array().items(
        OrderPlatformModel.PlatformBreakupValues()
      ),
      total_order_value: Joi.number().allow(null),
      meta: Joi.any().allow(null),
      order_created_time: Joi.string().allow("").allow(null),
      order_created_ts: Joi.string().allow("").allow(null),
      payment_mode: Joi.string().allow("").allow(null),
      shipments: Joi.array().items(OrderPlatformModel.PlatformShipment()),
      order_id: Joi.string().allow("").allow(null),
      channel: OrderPlatformModel.PlatformChannel(),
      user_info: OrderPlatformModel.UserDataInfo(),
      order_value: Joi.number().allow(null),
      currency: OrderPlatformModel.Currency(),
      currency_info: OrderPlatformModel.CurrencyInfo(),
    });
  }

  /** @returns {OrderListingResponse} */
  static OrderListingResponse() {
    return Joi.object({
      total_count: Joi.number().allow(null),
      message: Joi.string().allow("").allow(null),
      success: Joi.boolean().allow(null),
      items: Joi.array().items(OrderPlatformModel.PlatformOrderItems()),
      lane: Joi.string().allow("").allow(null),
      page: OrderPlatformModel.Page(),
    });
  }

  /** @returns {PlatformTrack} */
  static PlatformTrack() {
    return Joi.object({
      last_location_recieved_at: Joi.string().allow(""),
      meta: Joi.any(),
      raw_status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_time: Joi.string().allow(""),
      awb: Joi.string().allow(""),
      shipment_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      account_name: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformShipmentTrack} */
  static PlatformShipmentTrack() {
    return Joi.object({
      meta: Joi.any(),
      results: Joi.array().items(OrderPlatformModel.PlatformTrack()),
    });
  }

  /** @returns {AdvanceFilterInfo} */
  static AdvanceFilterInfo() {
    return Joi.object({
      returned: Joi.array()
        .items(OrderPlatformModel.FiltersInfo())
        .allow(null, ""),
      action_centre: Joi.array()
        .items(OrderPlatformModel.FiltersInfo())
        .allow(null, ""),
      unfulfilled: Joi.array()
        .items(OrderPlatformModel.FiltersInfo())
        .allow(null, ""),
      filters: Joi.array()
        .items(OrderPlatformModel.FiltersInfo())
        .allow(null, ""),
      processed: Joi.array()
        .items(OrderPlatformModel.FiltersInfo())
        .allow(null, ""),
      applied_filters: Joi.any().allow(null),
      page: Joi.any().allow(null),
    });
  }

  /** @returns {FiltersResponse} */
  static FiltersResponse() {
    return Joi.object({
      advance_filter: OrderPlatformModel.AdvanceFilterInfo(),
      global_filter: Joi.array().items(OrderPlatformModel.FiltersInfo()),
    });
  }

  /** @returns {URL} */
  static URL() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  /** @returns {FileResponse} */
  static FileResponse() {
    return Joi.object({
      file_name: Joi.string().allow(""),
      cdn: OrderPlatformModel.URL(),
    });
  }

  /** @returns {BulkActionTemplate} */
  static BulkActionTemplate() {
    return Joi.object({
      value: Joi.string().allow(""),
      text: Joi.string().allow(""),
    });
  }

  /** @returns {BulkActionTemplateResponse} */
  static BulkActionTemplateResponse() {
    return Joi.object({
      template_x_slug: Joi.array().items(
        OrderPlatformModel.BulkActionTemplate()
      ),
    });
  }

  /** @returns {Reason} */
  static Reason() {
    return Joi.object({
      qc_type: Joi.array().items(Joi.string().allow("")),
      id: Joi.number(),
      question_set: Joi.array().items(OrderPlatformModel.QuestionSet()),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformShipmentReasonsResponse} */
  static PlatformShipmentReasonsResponse() {
    return Joi.object({
      reasons: Joi.array().items(OrderPlatformModel.Reason()),
      success: Joi.boolean(),
    });
  }

  /** @returns {ShipmentResponseReasons} */
  static ShipmentResponseReasons() {
    return Joi.object({
      reason_id: Joi.number(),
      reason: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentReasonsResponse} */
  static ShipmentReasonsResponse() {
    return Joi.object({
      reasons: Joi.array()
        .items(OrderPlatformModel.ShipmentResponseReasons())
        .required(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {StoreAddress} */
  static StoreAddress() {
    return Joi.object({
      phone: Joi.string().allow("").allow(null).required(),
      created_at: Joi.string().allow("").required(),
      contact_person: Joi.string().allow("").required(),
      pincode: Joi.number().required(),
      address_type: Joi.string().allow("").required(),
      address1: Joi.string().allow("").required(),
      display_address: Joi.string().allow("").allow(null),
      version: Joi.string().allow("").allow(null),
      address_category: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
      longitude: Joi.number().required(),
      address2: Joi.string().allow(""),
      area: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      updated_at: Joi.string().allow("").required(),
      country_code: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      landmark: Joi.string().allow(""),
      latitude: Joi.number().required(),
      state: Joi.string().allow("").required(),
    });
  }

  /** @returns {EInvoicePortalDetails} */
  static EInvoicePortalDetails() {
    return Joi.object({
      username: Joi.string().allow("").allow(null),
      user: Joi.string().allow("").allow(null),
      password: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {StoreEinvoice} */
  static StoreEinvoice() {
    return Joi.object({
      username: Joi.string().allow("").allow(null),
      user: Joi.string().allow("").allow(null),
      password: Joi.string().allow("").allow(null),
      enabled: Joi.boolean().required(),
    });
  }

  /** @returns {StoreEwaybill} */
  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean().allow(null),
    });
  }

  /** @returns {StoreGstCredentials} */
  static StoreGstCredentials() {
    return Joi.object({
      e_invoice: OrderPlatformModel.StoreEinvoice(),
      e_waybill: OrderPlatformModel.StoreEwaybill(),
    });
  }

  /** @returns {Document} */
  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),
      ds_type: Joi.string().allow("").required(),
      verified: Joi.boolean().required(),
      legal_name: Joi.string().allow("").required(),
      url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {StoreDocuments} */
  static StoreDocuments() {
    return Joi.object({
      gst: OrderPlatformModel.Document(),
    });
  }

  /** @returns {StoreMeta} */
  static StoreMeta() {
    return Joi.object({
      additional_contact_details: Joi.any().allow(null),
      timing: Joi.array().items(Joi.any()).allow(null, ""),
      notification_emails: Joi.array()
        .items(Joi.string().allow(""))
        .allow(null, ""),
      gst_number: Joi.string().allow("").allow(null),
      ewaybill_portal_details: Joi.any().allow(null),
      einvoice_portal_details: OrderPlatformModel.EInvoicePortalDetails(),
      gst_credentials: OrderPlatformModel.StoreGstCredentials().required(),
      stage: Joi.string().allow("").required(),
      product_return_config: Joi.any().allow(null),
      documents: OrderPlatformModel.StoreDocuments(),
      display_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {Store} */
  static Store() {
    return Joi.object({
      phone: Joi.string().allow("").required(),
      is_active: Joi.boolean().allow(null),
      company_id: Joi.number().required(),
      alohomora_user_id: Joi.number().allow(null),
      created_at: Joi.string().allow("").required(),
      contact_person: Joi.string().allow("").required(),
      store_email: Joi.string().allow("").required(),
      is_enabled_for_recon: Joi.boolean().allow(null),
      pincode: Joi.string().allow("").required(),
      mall_area: Joi.string().allow("").allow(null),
      vat_no: Joi.string().allow("").allow(null),
      address1: Joi.string().allow("").allow(null).required(),
      display_address: Joi.string().allow("").allow(null),
      store_active_from: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      longitude: Joi.number().allow(null),
      brand_store_tags: Joi.array()
        .items(Joi.string().allow(""))
        .allow(null, ""),
      order_integration_id: Joi.string().allow("").allow(null),
      parent_store_id: Joi.number().allow(null),
      location_type: Joi.string().allow("").required(),
      code: Joi.string().allow("").allow(null),
      fulfillment_channel: Joi.string().allow("").required(),
      updated_at: Joi.string().allow("").allow(null),
      store_address_json: OrderPlatformModel.StoreAddress(),
      meta: OrderPlatformModel.StoreMeta().required(),
      s_id: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      packaging_material_count: Joi.number().allow(null),
      is_archived: Joi.boolean().allow(null),
      login_username: Joi.string().allow("").allow(null),
      mall_name: Joi.string().allow("").allow(null),
      latitude: Joi.number().allow(null),
      address2: Joi.string().allow("").allow(null),
    }).allow(null);
  }

  /** @returns {Brand} */
  static Brand() {
    return Joi.object({
      credit_note_expiry_days: Joi.number().allow(null),
      logo: Joi.string().allow("").allow(null),
      invoice_prefix: Joi.string().allow("").allow(null),
      credit_note_allowed: Joi.boolean().allow(null),
      start_date: Joi.string().allow("").allow(null),
      company: Joi.string().allow("").allow(null),
      is_virtual_invoice: Joi.boolean().allow(null),
      script_last_ran: Joi.string().allow("").allow(null),
      pickup_location: Joi.string().allow("").allow(null),
      created_on: Joi.string().allow("").allow(null),
      brand_name: Joi.string().allow("").required(),
      brand_id: Joi.number(),
      modified_on: Joi.string().allow("").allow(null),
      id: Joi.number().allow(null),
    });
  }

  /** @returns {Item} */
  static Item() {
    return Joi.object({
      attributes: Joi.any().required(),
      brand_id: Joi.number().required(),
      slug_key: Joi.string().allow("").required(),
      webstore_product_url: Joi.string().allow("").allow(null),
      l3_category: Joi.number().allow(null),
      l3_category_name: Joi.string().allow("").allow(null),
      last_updated_at: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").required(),
      l2_category: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      brand: Joi.string().allow("").required(),
      image: Joi.array().items(Joi.string().allow("")).required(),
      code: Joi.string().allow("").allow(null),
      l1_category_id: Joi.number().allow(null),
      item_id: Joi.number().required(),
      l1_category: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      gender: Joi.string().allow("").allow(null),
      can_cancel: Joi.boolean().allow(null),
      can_return: Joi.boolean().allow(null),
      size: Joi.string().allow("").required(),
      branch_url: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      color: Joi.string().allow("").allow(null),
      department_id: Joi.number().allow(null),
      l2_category_id: Joi.number().allow(null),
    });
  }

  /** @returns {ArticleStatusDetails} */
  static ArticleStatusDetails() {
    return Joi.object({
      status: Joi.any().allow(null),
    });
  }

  /** @returns {Company} */
  static Company() {
    return Joi.object({
      pan_no: Joi.string().allow("").allow(null),
      created_on: Joi.string().allow("").allow(null),
      id: Joi.number().allow(null),
      company_name: Joi.string().allow("").allow(null),
      gst_number: Joi.string().allow("").allow(null),
      company_type: Joi.string().allow("").allow(null),
      modified_on: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      business_type: Joi.string().allow("").allow(null),
      agreement_start_date: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentGstDetails} */
  static ShipmentGstDetails() {
    return Joi.object({
      value_of_good: Joi.number().allow(null),
      gst_fee: Joi.number().allow(null),
      brand_calculated_amount: Joi.number().allow(null),
      tax_collected_at_source: Joi.number().allow(null),
      gstin_code: Joi.string().allow("").allow(null),
    }).allow(null);
  }

  /** @returns {DeliverySlotDetails} */
  static DeliverySlotDetails() {
    return Joi.object({
      slot: Joi.string().allow("").allow(null),
      upper_bound: Joi.string().allow("").allow(null),
      lower_bound: Joi.string().allow("").allow(null),
      date: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
    }).allow(null);
  }

  /** @returns {InvoiceDetails} */
  static InvoiceDetails() {
    return Joi.object({
      updated_date: Joi.string().allow("").allow(null),
      store_invoice_id: Joi.string().allow("").allow(null),
      invoice_url: Joi.string().allow("").allow(null),
      label_url: Joi.string().allow("").allow(null),
    }).allow(null);
  }

  /** @returns {ShipmentDetails} */
  static ShipmentDetails() {
    return Joi.object({
      dp_id: Joi.string().allow("").allow(null),
      dp_options: Joi.any().allow(null),
      lock_status: Joi.boolean().allow(null),
      action_to_status: Joi.any().allow(null),
    }).allow(null);
  }

  /** @returns {UserDetails} */
  static UserDetails() {
    return Joi.object({
      user_oid: Joi.string().allow("").allow(null),
      external_customer_id: Joi.string().allow("").allow(null),
      first_name: Joi.string().allow("").allow(null),
      last_name: Joi.string().allow("").allow(null),
      mobile: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      is_anonymous_user: Joi.boolean().allow(null),
      gender: Joi.string().allow("").allow(null),
      mongo_user_id: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
    }).allow(null);
  }

  /** @returns {WeightData} */
  static WeightData() {
    return Joi.object({
      value: Joi.number().allow(null),
      unit: Joi.string().allow("").allow(null),
    }).allow(null);
  }

  /** @returns {BagDetails} */
  static BagDetails() {
    return Joi.object({
      bag_update_time: Joi.number().allow(null),
      id: Joi.string().allow("").allow(null),
      bag_id: Joi.number().allow(null),
      affiliate_bag_details: OrderPlatformModel.AffiliateBagDetails(),
      affiliate_details: OrderPlatformModel.AffiliateDetails(),
      applied_promos: Joi.array().items(Joi.any()).allow(null, ""),
      article: OrderPlatformModel.Article(),
      article_details: OrderPlatformModel.ArticleStatusDetails(),
      bag_status: Joi.array().items(OrderPlatformModel.BagStatusHistory()),
      bag_status_history: Joi.array().items(
        OrderPlatformModel.BagStatusHistory()
      ),
      brand: OrderPlatformModel.Brand(),
      company: OrderPlatformModel.Company(),
      current_operational_status: OrderPlatformModel.BagStatusHistory(),
      current_status: OrderPlatformModel.BagStatusHistory(),
      dates: OrderPlatformModel.Dates(),
      delivery_address: OrderPlatformModel.PlatformDeliveryAddress(),
      delivery_slot: OrderPlatformModel.DeliverySlotDetails(),
      display_name: Joi.string().allow("").allow(null),
      dp_details: Joi.any().allow(null),
      einvoice_info: Joi.any().allow(null),
      entity_type: Joi.string().allow("").allow(null),
      fallback_user: Joi.any().allow(null),
      financial_breakup: Joi.array().items(
        OrderPlatformModel.FinancialBreakup()
      ),
      fulfilling_store: OrderPlatformModel.Store(),
      fyndstore_emp: Joi.any().allow(null),
      gst_details: OrderPlatformModel.GSTDetailsData(),
      invoice: OrderPlatformModel.InvoiceDetails(),
      item: OrderPlatformModel.Item(),
      journey_type: Joi.string().allow(""),
      line_number: Joi.number(),
      lock_status: Joi.boolean().allow(null),
      manifest_id: Joi.string().allow("").allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      mode_of_payment: Joi.string().allow("").allow(null),
      no_of_bags_order: Joi.number().allow(null),
      operational_status: Joi.string().allow("").allow(null),
      order: OrderPlatformModel.OrderDetails(),
      order_integration_id: Joi.string().allow("").allow(null),
      order_type: Joi.string().allow("").allow(null),
      order_value: Joi.number().allow(null),
      ordering_store: OrderPlatformModel.Store(),
      parent_promo_bags: Joi.any().allow(null),
      payment_methods: Joi.any().allow(null),
      payment_type: Joi.string().allow("").allow(null),
      payments: Joi.any().allow(null),
      prices: OrderPlatformModel.Prices(),
      qc_required: Joi.boolean().allow(null),
      quantity: Joi.number().allow(null),
      reasons: Joi.array().items(Joi.any()).allow(null, ""),
      restore_coupon: Joi.boolean().allow(null),
      restore_promos: Joi.any().allow(null),
      rto_address: OrderPlatformModel.PlatformDeliveryAddress(),
      seller_identifier: Joi.string().allow("").allow(null),
      shipment: OrderPlatformModel.Shipment(),
      shipment_details: OrderPlatformModel.ShipmentDetails(),
      shipment_id: Joi.string().allow("").allow(null),
      shipment_gst: OrderPlatformModel.ShipmentGstDetails(),
      shipment_status: OrderPlatformModel.ShipmentStatusData(),
      shipment_status_history: Joi.array()
        .items(OrderPlatformModel.ShipmentStatusData())
        .allow(null, ""),
      status: OrderPlatformModel.BagReturnableCancelableStatus(),
      tags: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      total_shipment_bags: Joi.number().allow(null),
      total_shipments_in_order: Joi.number().allow(null),
      transaction_type: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
      updated_at: Joi.string().allow("").allow(null),
      user: OrderPlatformModel.UserDetails(),
      weight: OrderPlatformModel.WeightData(),
      original_bag_list: Joi.array().items(Joi.number()).allow(null, ""),
      identifier: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BagDetailsPlatformResponse} */
  static BagDetailsPlatformResponse() {
    return Joi.object({
      status_code: Joi.number(),
      data: OrderPlatformModel.BagDetails(),
    });
  }

  /** @returns {BagsPage} */
  static BagsPage() {
    return Joi.object({
      item_total: Joi.number().required(),
      has_next: Joi.boolean().required(),
      page_type: Joi.string().allow("").required(),
      current: Joi.number().required(),
      size: Joi.number().required(),
    });
  }

  /** @returns {BagData} */
  static BagData() {
    return Joi.object({
      items: Joi.array().items(OrderPlatformModel.BagDetails()),
      page: OrderPlatformModel.BagsPage(),
    }).allow(null);
  }

  /** @returns {GetBagsPlatformResponse} */
  static GetBagsPlatformResponse() {
    return Joi.object({
      status_code: Joi.number(),
      data: OrderPlatformModel.BagData(),
    });
  }

  /** @returns {GeneratePosOrderReceiptResponse} */
  static GeneratePosOrderReceiptResponse() {
    return Joi.object({
      customer_cn_receipt: Joi.string().allow(""),
      success: Joi.boolean(),
      order_id: Joi.string().allow(""),
      invoice_receipt: Joi.string().allow(""),
      payment_receipt: Joi.string().allow(""),
      merchant_cn_receipt: Joi.string().allow(""),
      payment_receipt_template: Joi.string().allow(""),
      customer_cn_receipt_template: Joi.string().allow(""),
      invoice_receipt_template: Joi.string().allow(""),
    });
  }

  /** @returns {Templates} */
  static Templates() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {AllowedTemplatesResponse} */
  static AllowedTemplatesResponse() {
    return Joi.object({
      template_x_slug: Joi.array().items(OrderPlatformModel.Templates()),
    });
  }

  /** @returns {TemplateDownloadResponse} */
  static TemplateDownloadResponse() {
    return Joi.object({
      file_name: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {BulkFailedResponse} */
  static BulkFailedResponse() {
    return Joi.object({
      status: Joi.boolean(),
      error: Joi.string().allow(""),
    });
  }
}
module.exports = OrderPlatformModel;
