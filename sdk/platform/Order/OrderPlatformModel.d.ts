export = OrderPlatformModel;
/**
 * @typedef PackageSchema
 * @property {string} [id] - Unique identifier of the physical package. If not
 *   provided, the system will auto-generate a unique ID with format 'PK'
 *   followed by a 10-digit number.
 * @property {string} [packaging_id] - Optional reference to a predefined
 *   packaging configuration or template used for creating physical packages.
 * @property {string} [name] - A human-readable name or label for the package,
 *   used for identification and organizational purposes.
 * @property {string} [size] - The size category of the package (e.g., small,
 *   medium, large). Used for logistics and carrier selection.
 * @property {string} [package_type] - The type or category of packaging
 *   material used (e.g., Box, Paper Bag, Poly Mailer, Envelope).
 * @property {number} [length] - The length dimension of the package in
 *   centimeters. Used for volumetric weight calculation and carrier requirements.
 * @property {number} [width] - The width dimension of the package in
 *   centimeters. Used for volumetric weight calculation and carrier requirements.
 * @property {number} [height] - The height dimension of the package in
 *   centimeters. Used for volumetric weight calculation and carrier requirements.
 * @property {number} [weight] - The actual weight of the package in kilograms,
 *   including packaging materials and products.
 * @property {number} [error_rate] - The acceptable error rate or tolerance for
 *   the package weight, expressed as a decimal (e.g., 0.02 for 2% tolerance).
 * @property {number} [package_vol_weight] - The volumetric weight of the
 *   package calculated based on dimensions, used for shipping cost calculation
 *   when greater than actual weight.
 * @property {number} [max_weight] - The maximum weight capacity that this
 *   package can handle, used for validation and logistics planning.
 * @property {string} [awb] - Air Waybill number assigned by the courier partner
 *   for tracking this specific package throughout the delivery process.
 * @property {Object} [pdf_links] - Dictionary containing PDF document links
 *   related to this package (labels, invoices, etc.). Always returns an object
 *   - empty object {} if no links are present, populated object if links exist.
 *   Users can update values by providing new key-value pairs.
 * @property {PackageProduct[]} [products] - List of products contained within
 *   this package. Each product specifies its line number, quantity, and identifier.
 */
/**
 * @typedef UpdatePackingErrorResponseSchema
 * @property {number} [status] - Represents the HTTP status code of the API response.
 * @property {string} [error] - Descriptive error message that occurred.
 */
/**
 * @typedef ErrorResponseSchema
 * @property {number} [status] - Represents the HTTP status code of the API response.
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} message - A message describing the error that occurred.
 * @property {string} [error_trace] - This field is intended to store the error
 *   trace of the error that occurred.For example, "Exception Trace" represents
 *   a placeholder for the actual stack trace data that would be captured when
 *   an exception occurs."Internal Server Error" indicates a generic error
 *   message suggesting that the server encountered an unexpected condition that
 *   prevented it from fulfilling the request.
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
 * @typedef StoreReassignResponseSchema
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
 * @property {string} action_type - Defines the current lock state or lock type
 *   of a shipment, dictating the types of transitions or actions that can be
 *   performed next.The action_type can be one of the following - complete-
 *   Complete lock specifies that no action can be performed for that shipment.
 *   - operational- The shipment is in an operational phase, during which only
 *   financial-related actions are permissible. - financial- The shipment is in
 *   a financial phase, allowing for operational actions to be taken.
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
 * @typedef CheckResponseSchema
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
 * @typedef UpdateShipmentLockResponseSchema
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response, such as success confirmation or error details.
 * @property {CheckResponseSchema[]} [check_response] - An array containing the
 *   lock status of entities if the action performed was a 'check'. Each item in
 *   the array represents the status of a specific entity.
 */
/**
 * @typedef AnnouncementResponseSchema
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
 * @typedef AnnouncementsResponseSchema
 * @property {AnnouncementResponseSchema[]} [announcements]
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {number} [status] - Represents the HTTP status code of the API response
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 */
/**
 * @typedef BaseResponseSchema
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
 * @property {number} [line_number] - Represents the specific line item within a
 *   bag, used to identify and reference a particular product in a list. This
 *   helps in pinpointing the exact item being updated or processed.
 * @property {string} [identifier] - A unique string that serves as the
 *   product's identifier, such as a SKU, barcode, or another distinct code.
 *   This ensures the product is correctly identified and distinguished from
 *   other items in the system.
 * @property {number} [quantity] - The quantity of the product or item,
 *   specified as an integer. This indicates how many units of the product are
 *   being referenced or processed, such as the number of items in a bag or shipment.
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
 * @property {Object} [data] - Encapsulates a dynamic set of updates and
 *   modifications applied to the entity.
 */
/**
 * @typedef OrderDataUpdates
 * @property {Object} [data] - Encapsulates a dynamic set of updates and
 *   modifications applied to the order.
 */
/**
 * @typedef SellerQCDetailsSchema
 * @property {number} line_number - Line_number of the product/bag.
 * @property {number} good_quantity - The number of units marked as good during
 *   the seller QC process for the given line_number/bag item.
 * @property {number} bad_quantity - The number of units marked as bad during
 *   the seller QC process for the given line_number/bag item.
 */
/**
 * @typedef EntityStatusDataSchema
 * @property {SellerQCDetailsSchema[]} [seller_qc_details] - An array of QC
 *   results provided by the seller to indicate the condition of returned items
 *   (e.g., good vs. bad quantity) for each line item. Pass this field such that
 *   if inventory-related data is included, it will be updated accordingly
 *   during the transition.
 */
/**
 * @typedef DataUpdatesFiltersSchema
 * @property {number} [line_number] - Line number of the product/bag.
 * @property {number} [quantity] - Quantity of the line number item.
 * @property {string} [identifier] - Seller identifier of the product/bag.
 */
/**
 * @typedef EntityStatusDataUpdates
 * @property {DataUpdatesFiltersSchema[]} [filters] - A list of filters used to
 *   specify the target for this update. For shipment level or shipment-status
 *   level updates, this should be an empty array ([]) as no filters are
 *   required during shipment/shipment_status transitions. But is still
 *   mandatory due to schema requirements. For product-level updates,
 *   appropriate filters must be provided as per the schema to accurately target
 *   specific items.
 * @property {EntityStatusDataSchema} [data]
 */
/**
 * @typedef DataUpdates
 * @property {OrderItemDataUpdates[]} [order_item_status] - A list of updates
 *   related to the status of order items.
 * @property {ProductsDataUpdates[]} [products] - A list of updates related to
 *   the properties of products or bags.
 * @property {EntitiesDataUpdates[]} [entities] - A list of updates related to
 *   the properties of any relevant entities.
 * @property {OrderDataUpdates[]} [order]
 * @property {EntityStatusDataUpdates[]} [entity_status] - A list of updates to
 *   entity_status properties associated with specific shipment status
 *   transitions (e.g., bag_confirmed, return_accepted). These updates are
 *   optional. Update e.g., inventory-affecting data (like QC data) to be updated.
 */
/**
 * @typedef TransitionComments
 * @property {string} title - Title for the transition message.
 * @property {string} message - Message for the transition.
 */
/**
 * @typedef RefundModeTransitionData
 * @property {string} [refund_mode] - Refund Mode for status transition data.
 * @property {string} [display_name] - Refund Mode display name.
 * @property {string[]} [payment_identifiers] - List of identifiers associated
 *   with the refund transaction.
 */
/**
 * @typedef ShipmentsRequestSchema
 * @property {string} identifier - Unique identifier for the shipment.
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products] - A list of products or bags that need to
 *   be updated as part of the shipment status change.
 * @property {DataUpdates} [data_updates]
 * @property {TransitionComments[]} [transition_comments] - Comments or notes
 *   associated with the transition of shipment status.
 * @property {RefundModeTransitionData[]} [refund_modes] - Refund Mode for
 *   status transition.
 */
/**
 * @typedef UpdatedAddressSchema
 * @property {string} [address] - The complete address.
 * @property {string} [area] - The locality or area associated with the address.
 * @property {string} [landmark] - A prominent nearby landmark for locating the address.
 * @property {string} [pincode] - The postal code (for example, zip, postcode,
 *   or Eircode) of the address.
 * @property {string} [city] - The city, town, or village of the address.
 * @property {string} [state] - The state or province of the address.
 * @property {string} [name] - The name of the person associated with the address.
 * @property {string} [phone] - Phone number associated with the address user.
 * @property {string} [email] - Email address associated with the address user.
 * @property {string} [country] - The country of the address.
 * @property {string} [country_iso_code] - The ISO code representing the country
 *   of the address.
 * @property {number} [latitude] - The latitude of the address.
 * @property {number} [longitude] - The longitude of the address.
 */
/**
 * @typedef UpdateAddressRequestBody
 * @property {UpdatedAddressSchema} [updated_address]
 * @property {string} [address_type] - The type of address (e.g., office, home).
 * @property {string} [address_category] - The category of the address (e.g.,
 *   delivery, billing).
 */
/**
 * @typedef StatuesRequestSchema
 * @property {string} [status] - The new status to be assigned to a shipment.
 *   Also, refer to the <a href='/commerce/getting-started/oms-states/'>OMS
 *   States</a> for the complete status list.
 * @property {ShipmentsRequestSchema[]} [shipments] - A list of shipments to
 *   which the new status will be applied.
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
 * @property {StatuesRequestSchema[]} [statuses] - A list of status updates to
 *   be applied to the shipment.
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
 * @typedef ShipmentsResponseSchema
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
 * @typedef DPConfiguration
 * @property {string} [shipping_by] - It denotes DP assignment strategy. If it
 *   is fynd, DP assignment will be handled by Fynd's OMS.
 */
/**
 * @typedef PaymentConfig
 * @property {string} [mode_of_payment] - Specifies the mode through which the
 *   payment was collected, serving as an identifier for the payment's origin.
 * @property {string} [source] - The source field identifies the channel through
 *   which the order was placed, such as MARKETPLACE, ECOMM.
 */
/**
 * @typedef LockStateMessage
 * @property {string} [state] - The state for which the custom lock message applies.
 * @property {string} [message] - Custom lock message used when the shipment is
 *   locked in the specified state.
 */
/**
 * @typedef CreateOrderConfig
 * @property {DPConfiguration} [dp_configuration]
 * @property {boolean} [location_reassignment] - The flag denotes if the
 *   location for the shipment needs to be reassigned after cancellation. If the
 *   flag is set to true, location for the shipment gets auto reassigned post
 *   cancellation. If set to false, location reassignment will not be performed
 *   as it is disabled.
 * @property {PaymentConfig} [payment]
 * @property {boolean} [optimal_shipment_creation] - Denotes the shipment
 *   breaking strategy. If the flag is set to true, the shipment is created
 *   using an optimal shipment creation strategy based on the serviceability &
 *   packaging dimensions by OMS. If the flag is set to false, shipment details
 *   and location_id, must be passed to FDK for processing.
 * @property {LockStateMessage[]} [lock_state_messages] - A list of
 *   state-specific custom lock messages.
 * @property {string} [integration_type] - Flag denotes integration type which
 *   is used to retrieve specific configurations and application details
 *   relevant to channel fulfillment.
 */
/**
 * @typedef StatuesResponseSchema
 * @property {ShipmentsResponseSchema[]} [shipments] - List of Shipments which
 *   includes data for each shipment, the current status code, final state
 *   information including reasons for cancellation (if applicable), and unique
 *   shipment identifiers are provided.
 */
/**
 * @typedef UpdateShipmentStatusResponseBody
 * @property {StatuesResponseSchema[]} [statuses] - List of statuses of the
 *   shipments after a status update operation. Includes an array of status
 *   objects, each containing details about shipments that have undergone data updates.
 */
/**
 * @typedef OrderUser
 * @property {number} phone
 * @property {string} last_name
 * @property {string} [address1]
 * @property {string} state
 * @property {string} pincode
 * @property {string} first_name
 * @property {number} mobile
 * @property {string} [address2]
 * @property {string} email
 * @property {string} country
 * @property {string} city
 */
/**
 * @typedef OrderPriority
 * @property {string} [fulfilment_priority_text]
 * @property {string} [affiliate_priority_code]
 * @property {number} [fulfilment_priority]
 */
/**
 * @typedef ArticleDetails
 * @property {string} _id - A unique identifier for the article, facilitating
 *   easy reference and management within the system.
 * @property {number} brand_id - Numerical code representing the brand
 *   associated with the article, linking it to its manufacturer or creator.
 * @property {Object} dimension - Specifies the physical dimensions of the
 *   article, including height, width, and depth, providing a comprehensive
 *   understanding of its size.
 * @property {Object} category - Classifies the article into a specific category
 *   or type, aiding in organization and filtering based on its nature or usecase.
 * @property {Object} weight - Details the weight of the article, crucial for
 *   logistics, shipping calculations, and customer information.
 * @property {Object} attributes - Holds additional descriptive details and
 *   characteristics of the article, such as color, material, and style,
 *   enhancing product understanding.
 * @property {number} quantity - Specifies the available or required quantity of
 *   the article, important for inventory management and order fulfillment.
 */
/**
 * @typedef LocationDetails
 * @property {string} fulfillment_type - The method of fulfillment used by the store.
 * @property {ArticleDetails[]} articles
 * @property {number} fulfillment_id
 */
/**
 * @typedef ShipmentDetails
 * @property {string} [box_type] - Box type of the shipment in which the
 *   shipment will be delivered.
 * @property {number} shipments
 * @property {number} fulfillment_id
 * @property {ArticleDetails[]} articles
 * @property {string} [dp_id]
 * @property {Object} [meta]
 * @property {string} affiliate_shipment_id
 * @property {Object} [dp_options] - Delivery partner options that are available
 *   to deliver the shipment.
 * @property {boolean} [lock_status]
 * @property {Object} [action_to_status] - This field maps potential actions
 *   (e.g., downloading an invoice or label) to their corresponding shipment
 *   lock statuses, indicating which operations are allowed depending on the
 *   shipment's current lock status. When an action is set to 'lock', it means
 *   no transitions or updates to the shipment's status can be performed until
 *   the specified action is completed. For instance, if 'download_invoice' is
 *   in a 'lock' state, the shipment cannot undergo any status transitions until
 *   the invoice is either downloaded. Similarly, 'download_label' being in a
 *   'lock' state prevents any shipment status transitions until a new label is
 *   downloaded.
 */
/**
 * @typedef ShipmentConfig
 * @property {LocationDetails} [location_details]
 * @property {string} source
 * @property {string} to_pincode
 * @property {ShipmentDetails[]} shipment
 * @property {string} identifier - The unique identifier for the shipment.
 * @property {string} payment_mode
 * @property {string} action
 * @property {string} journey
 */
/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */
/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */
/**
 * @typedef AffiliateBag
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} store_id
 * @property {string} sku
 * @property {number} discount
 * @property {number} unit_price
 * @property {number} price_effective
 * @property {string} affiliate_store_id
 * @property {Object} identifier - The unique identifier for the bag.
 * @property {string} seller_identifier
 * @property {string} item_size
 * @property {number} amount_paid
 * @property {string} fynd_store_id
 * @property {number} item_id
 * @property {number} delivery_charge
 * @property {number} avl_qty
 * @property {number} price_marked
 * @property {number} quantity
 * @property {number} company_id
 * @property {string} hsn_code_id
 * @property {string} _id
 * @property {Object} affiliate_meta - Sales channel meta data information for the bag.
 * @property {string} modified_on - The date and time when the bag was updated
 *   or modified.
 * @property {number} transfer_price
 */
/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
 */
/**
 * @typedef OrderInfo
 * @property {string} [affiliate_order_id] - A unique identifier assigned to the
 *   order by an affiliate partner or platform, facilitating tracking across
 *   different systems.
 * @property {number} cod_charges
 * @property {Object} items - Contains detailed information about the items
 *   included in the order ensuring comprehensive order management.
 * @property {number} discount
 * @property {OrderUser} billing_address
 * @property {Object} [payment] - Outlines the payment details for the order,
 *   including payment method, transaction status, and any related financial
 *   information, supporting secure and efficient payment processing.
 * @property {OrderPriority} [order_priority]
 * @property {ShipmentData} [shipment]
 * @property {number} delivery_charges
 * @property {OrderUser} shipping_address
 * @property {number} order_value
 * @property {string} payment_mode
 * @property {AffiliateBag[]} bags
 * @property {UserData} user
 * @property {string} [coupon]
 */
/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} value
 * @property {string} name
 */
/**
 * @typedef AffiliateAppConfig
 * @property {string} id
 * @property {string} [description]
 * @property {string} updated_at - The date and time when the app config was updated.
 * @property {string} name
 * @property {string} token
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} owner
 * @property {string} secret
 * @property {string} created_at - Timestamp when the app config was created.
 */
/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */
/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */
/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store] - Fulfilling store information related to the shipment.
 */
/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */
/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */
/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 */
/**
 * @typedef AffiliateConfig
 * @property {AffiliateAppConfig} [app]
 * @property {AffiliateInventoryConfig} [inventory]
 * @property {number} [app_company_id] - A unique identifier for the company
 *   associated with the affiliate app, used for tracking and managing affiliate
 *   relationships.
 */
/**
 * @typedef Affiliate
 * @property {string} id
 * @property {AffiliateConfig} [config]
 * @property {string} token
 */
/**
 * @typedef AffiliateStoreIdMapping
 * @property {number} store_id
 * @property {string} marketplace_store_id
 */
/**
 * @typedef OrderConfig
 * @property {boolean} [create_user]
 * @property {string} [article_lookup]
 * @property {string} [bag_end_state]
 * @property {Affiliate} affiliate
 * @property {string} [store_lookup]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 */
/**
 * @typedef CreateOrderResponseSchema
 * @property {string} fynd_order_id - Unique identifier assigned to the order
 */
/**
 * @typedef DispatchManifest
 * @property {string} manifest_id - The unique identifier for the manifest being
 *   dispatched.
 */
/**
 * @typedef SuccessResponseSchema
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
 * @typedef GetActionsResponseSchema
 * @property {ActionInfo[]} [permissions] - A response object that contains a
 *   list of permissions available to the user.
 */
/**
 * @typedef HistoryReason
 * @property {string} [text] - A reason for the activity or change.
 * @property {string} [category] - Category of the reason for the status change.
 * @property {string} [state] - Current state related to the reason.
 * @property {string} [display_name] - Display name of the reason for better
 *   user understanding.
 * @property {number} [code] - Unique code identifying the reason.
 * @property {number} [quantity] - Quantity related to the reason, if applicable.
 */
/**
 * @typedef RefundInformation
 * @property {string} [mode] - The payment method used for the order, such as
 *   CARD, Net Banking (NB), or other options. This field indicates how the
 *   original payment was made and will determine how the refund is processed.
 * @property {number} [amount] - The amount to be refunded, represented as a
 *   floating-point number. This specifies the exact value that will be returned
 *   to the customer.
 * @property {string} [merchant_transaction_id] - A unique identifier associated
 *   with the payment transaction, such as TR669796C0012CF31BBD. This ID helps
 *   track and reference the specific transaction within the merchant's system.
 * @property {string} [refund_status] - The current status of the refund
 *   process, indicating whether the refund has been completed, is pending, or
 *   has encountered an issue (e.g., 'refund_done', 'refund_failed'). This field
 *   reflects the state of the refund operation.
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
 * @property {string} [activity_type] - Defines the category of event-related
 *   information for a shipment, indicating the nature of the update. This
 *   includes whether the update pertains to the status of the shipment,
 *   comments added to it, or notifications about specific events.
 * @property {string} [receiver] - Name of the receiver involved in the
 *   activity, if applicable.
 * @property {string} [recipient] - Recipient of the activity, if applicable.
 * @property {string} [slug] - Slug identifier for the activity.
 * @property {string} [message] - Any additional messages related to the activity.
 * @property {string} [prev_store_name] - The name of the store where the item
 *   was previously located before being transferred or processed. This field
 *   can be null if the previous store information is not applicable or available.
 * @property {string} [prev_store_code] - The unique code associated with the
 *   previous store. This code helps identify the store in the system and can be
 *   null if the previous store code is not recorded or required.
 * @property {string} [prev_store_id] - The unique identifier (ID) of the
 *   previous store in the database or system. This ID can be null if the
 *   previous store information is not relevant or if the store did not have a
 *   designated ID.
 * @property {string} [refund_to] - The destination or method by which a refund
 *   will be issued. This indicates where the refunded amount will be sent, such
 *   as back to the original payment source (e.g., 'Back To Source').
 * @property {RefundInformation[]} [refund_information]
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
 * @property {string} activity_type - Defines the category of event-related
 *   information for a shipment, indicating the nature of the update. This
 *   includes whether the update pertains to the status of the shipment,
 *   comments added to it, or notifications about specific events.
 * @property {string} [l2_detail] - L2 details regarding the bag or activity.
 * @property {string} [assigned_agent] - Name of the agent assigned to the activity.
 * @property {HistoryMeta} [meta]
 * @property {string} [l1_detail] - L1 details regarding the bag or activity.
 * @property {string} message - Message or comment regarding the history.
 * @property {string} user - Name of the user who created the history record.
 */
/**
 * @typedef ShipmentHistoryResponseSchema
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
 * @property {string} shipment_id - Unique identifier which is used to identify
 *   a shipment.
 * @property {string} phone_number - The recipient's phone number for communication.
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
 * @property {string} [created_at] - Date and time when the order was created.
 * @property {string} [user_id]
 * @property {TaxDetails} [tax_details]
 * @property {number} [mongo_cart_id]
 * @property {number} [delivery_charges]
 * @property {string} [transaction_id]
 * @property {string} [collect_by]
 * @property {Object} [headers] - Header details of the order.
 * @property {number} [coupon_value]
 * @property {number} [order_value]
 * @property {string} [created_time]
 * @property {string} [currency] - The currency in which the prices details
 *   associated with the item is specified.
 * @property {number} [total_order_value]
 * @property {string} [ordering_channel] - The specific channel through which
 *   your order was placed. This field will be phased out after version 2.4.0.
 *   Please use ordering_source instead to ensure accurate order tracking and processing.
 * @property {string} [ordering_source] - Ordering source, to be used to
 *   identify source of order creation.
 * @property {Object} [meta] - Meta data of the order data contains additional,
 *   potentially dynamic information about the order data.
 * @property {number} [cod_charges]
 * @property {number} [cashback_value]
 * @property {string} [refund_by]
 * @property {string} [affiliate_order_date] - Specifies the date and time of
 *   the order when it was created within the affiliate's system. It specifies
 *   that the date and time are recorded in ISO 8601 format.
 * @property {Object} [payment_methods] - This field stores a collection of
 *   payment method objects used in a transaction. Each key within this object
 *   represents a unique payment method code (e.g., "COD" for Cash On Delivery),
 *   and its value is an object containing detailed information about that
 *   payment method. The structure is designed to accommodate any number of
 *   payment methods,providing flexibility and comprehensive insights into each
 *   transaction's payment aspect.
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
 * @property {PriceAdjustmentCharge[]} [charges]
 * @property {LoyaltyDiscountDetails} [loyalty_discount_details]
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
 * @typedef SendSmsResponseSchema
 * @property {boolean} success - Indicates whether the SMS was sent
 *   successfully. A value of `true` means the SMS was sent without errors,
 *   while `false` indicates there was an issue.
 * @property {string} message - Provides additional information about the
 *   success or failure of the SMS sending operation. If `success` is `false`,
 *   this message may contain error details.
 */
/**
 * @typedef Dimension
 * @property {string} [packaging_type] - Defines the type of packaging used for
 *   the product, encompassing materials, design, and form factors.
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
 * @typedef UpdatePackagingDimensionsResponseSchema
 * @property {string} [message]
 */
/**
 * @typedef Tax
 * @property {string} name - The name of the tax indicating its purpose (e.g.,
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
 * @property {AmountSchema} amount
 * @property {string} type - The category or type of the charge.
 * @property {string} name - The name of the charge that indicates its purpose.
 * @property {string} [code] - An optional code associated with the charge for
 *   internal tracking.
 * @property {Tax} [tax]
 */
/**
 * @typedef LineItem
 * @property {Charge[]} [charges] - An array of Charge objects related to the
 *   line item. This array must include three mandatory charge types:
 *   amount_paid, price_effective and price_marked. Formula to calculate
 *   amount_paid = price_effective + cod_charges + delivery_charges -
 *   coupon_discount - promo_discount
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
 * @property {string} [pack_by_date] - Defines the deadline for having the
 *   package fully packed and ready for dispatch or pickup, integral to
 *   streamlining the fulfillment process.
 */
/**
 * @typedef Tag
 * @property {string} [slug] - A unique identifier or short label for the tag
 *   for shipment reference.
 * @property {string} [display_text] - Label of the tag. This text is shown to
 *   users, representing the tag in an human-readable format.
 */
/**
 * @typedef ProcessAfterConfig
 * @property {boolean} [is_scheduled_shipment] - Indicates whether the shipment
 *   is scheduled for later processing.
 * @property {string} [enable_processing_after] - Specifies the UTC time after
 *   which the shipment will be automatically processed.
 */
/**
 * @typedef SystemMessages
 * @property {string} message_type - Specifies the type of message.
 * @property {number} priority - This will determine the sequence of messages (1
 *   being the highest priority).
 * @property {string} message - Message to be displayed at Platform's Order Details.
 * @property {string[]} [inject_at] - Holds the list of OMS status at which the
 *   message should be visible.
 */
/**
 * @typedef Shipment
 * @property {LineItem[]} line_items - An array of objects that represent the
 *   items included in the shipment.
 * @property {string} [external_shipment_id] - External shipment identifier or
 *   marketplace's unique shipment identifier.
 * @property {ProcessingDates} [processing_dates]
 * @property {Object} [meta] - Meta data of the shipment contains additional,
 *   potentially dynamic information about the shipment.
 * @property {number} [priority] - Priority level of the shipment.
 * @property {number} [location_id] - Location/store/fulfillment identifier of
 *   the shipment. This field is mandatory when optimal_shipment_creation flag
 *   is set to false, indicating that shipments must be associated with a
 *   specific location. When optimal_shipment_creation is true, location_id
 *   becomes optional and the system automatically assigns the optimal location
 *   for order creation.
 * @property {string} [order_type] - Defines the specific journey a shipment
 *   will follow based on the application's operational needs and customer
 *   preferences. This field categorizes orders into distinct types, each
 *   associated with a unique processing flow. For example, "HomeDelivery": The
 *   order undergoes all state transitions typical for a delivery, from
 *   processing the shipment to final delivery at the customer's address.
 *   "PickAtStore": The order is prepared for pickup and moved to a state where
 *   it is ready to be handed over directly to the customer at the store. This
 *   type streamlines the process by bypassing traditional shipping stages and
 *   facilitating a quicker transition to the final handover stage. "Digital":
 *   This order type likely refers to orders that involve digital goods or
 *   services, such as software, digital subscriptions, e-books, online courses,
 *   or any other item that can be delivered electronically.
 * @property {string[]} [tags]
 * @property {SystemMessages[]} [system_messages]
 * @property {ProcessAfterConfig} [process_after_config]
 * @property {string} [parent_type]
 * @property {string} [store_invoice_id]
 * @property {string} [lock_status]
 * @property {string} [type]
 * @property {Address} [billing_address_json]
 * @property {string} [id]
 * @property {number} [fulfilment_priority]
 * @property {boolean} [is_active]
 * @property {string} [previous_shipment_id]
 * @property {Object} [pdf_links] - PDF Links associated with the shipment.
 * @property {Address} [delivery_address_json]
 * @property {string} [eway_bill_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [fynd_order_id]
 * @property {string} [created_at] - Specifies the date and time when the
 *   shipment was created.
 * @property {string} [delivery_awb_number]
 * @property {Address} [hand_over_contact_json]
 * @property {string} [credit_note_id]
 * @property {string} [parent_id]
 * @property {string} [affiliate_id]
 * @property {string} [packaging_type] - Defines the type of packaging used for
 *   the product, encompassing materials, design, and form factors.
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
 * @property {string} [alternate_mobile_number] - Alternate mobile number to
 *   reach the customer, providing an additional contact method.
 * @property {string} [state] - The name of the state for shipping purposes.
 * @property {string} [customer_code] - Customer's unique identifier in the
 *   seller's system.
 * @property {string} [shipping_type] - Specifies the method or service used for
 *   the shipping of the shipment.
 * @property {string} [middle_name] - Customer's middle name
 * @property {string} [primary_mobile_number] - Customer's primary mobile number
 * @property {string} [last_name] - Customer's last name
 * @property {GeoLocationSchema} [geo_location]
 * @property {string} [gender] - Customer's gender
 * @property {string} [house_no] - The house or apartment number of the customer.
 * @property {string} [first_name] - Customer's first name
 * @property {string} [title] - Customer's title or prefix
 * @property {string} [landmark] - Landmark or reference point near the
 *   customer's location
 * @property {string} [country] - Customer's country
 * @property {string} [address_type] - Address type in the seller's system
 * @property {string} [state_code] - State code of the customer's location
 * @property {string} [city] - City of the customer's location
 * @property {string} [external_customer_code] - External customer code in the
 *   seller's system
 * @property {string} [floor_no] - Floor number of the customer's location
 * @property {string} [alternate_email] - Alternate email address for the customer
 * @property {Object[]} [slot] - A list of objects representing available time
 *   slot for delivery or pickup.
 * @property {string} [address] - A comma-separated string representing the address.
 * @property {string} [area] - Area of the customer's location
 * @property {string} [address1] - First line of the address
 * @property {string} [pincode] - Pincode of the customer's location
 * @property {string} [primary_email] - Primary email address for the customer
 * @property {string} [address2] - Second line of the address
 * @property {string} [country_code] - Uniquely identifies the country
 *   associated with the shipping address. This code is essential for
 *   international shipments, ensuring accurate routing and delivery across
 *   global postal and customs services. Examples include 'US' for the United
 *   States, 'IN' for India.
 * @property {string} [country_iso_code] - Specifies the country's unique
 *   identifier allowing the ISO 3166-1 alpha-2 standard. This two-letter code
 *   is crucial for distinguishing countries in international transactions, data
 *   processing, and shipping logistics.
 */
/**
 * @typedef BillingInfo
 * @property {string} [alternate_mobile_number]
 * @property {string} [state]
 * @property {string} [customer_code] - A unique identifier assigned to the
 *   customer, facilitating order tracking and service customization.
 * @property {string} [middle_name]
 * @property {string} [primary_mobile_number]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [house_no]
 * @property {string} [first_name]
 * @property {string} [title]
 * @property {string} [country]
 * @property {string} [state_code] - The code representing the state or region
 *   within the country, if applicable.
 * @property {string} [city]
 * @property {string} [external_customer_code] - A unique identifier assigned to
 *   customers by an external system or partner organization. This code is
 *   crucial for integrating and synchronizing customer information across
 *   different platforms or services.
 * @property {string} [floor_no]
 * @property {string} [alternate_email]
 * @property {string} [address]
 * @property {string} [area] - Area of the customer's location
 * @property {string} [address1] - First line of the address
 * @property {string} [pincode] - Pincode of the customer's location
 * @property {string} [primary_email] - Primary email address for the customer
 * @property {string} [address2] - Second line of the address
 * @property {string} [country_code] - Uniquely identifies the country
 *   associated with the billing address details. This code is essential for
 *   international shipments, ensuring accurate routing and delivery across
 *   global postal and customs services. Examples include 'US' for the United
 *   States, 'IN' for India.
 * @property {string} [country_iso_code] - The ISO 3166-1 alpha-2 code for the
 *   country, consisting of two uppercase letters. This standardized format
 *   ensures consistent identification of countries across systems.
 */
/**
 * @typedef UserInfo
 * @property {string} [user_id] - The unique identifier assigned to the user.
 * @property {string} [user_type] - Type of the user
 * @property {string} [primary_email] - Primary email address for the user
 * @property {string} [gender] - Gender of the user
 * @property {string} first_name - User's first name
 * @property {string} [last_name] - User's last name
 * @property {string} primary_mobile_number - Primary mobile number for the user
 */
/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number] - Goods and Services Tax Identification
 *   Number (GSTIN) for business-to-business transactions
 * @property {string} [gstin] - GSTIN of the customer
 * @property {string} [pan_no] - PAN assigned to individuals or entities for tax
 *   purposes in India
 */
/**
 * @typedef PaymentMethod
 * @property {string} collect_by - Entity responsible for collecting the payment
 * @property {string} mode - Mode of payment. Refer to [API & references (in Nav
 *   bar) → Payment Modes] for a list of valid payment methods.
 * @property {string} refund_by - Entity responsible for processing refunds
 * @property {string} name - Name of the payment method
 * @property {number} amount - A number representing the monetary value
 *   associated with the payment method.
 * @property {Object} [meta] - An object for any additional metadata related to
 *   the payment method.
 * @property {Object} [transaction_data] - An object that holds
 *   transaction-specific information.
 */
/**
 * @typedef PaymentInfo
 * @property {string} primary_mode - Primary payment method used for the order
 * @property {string} [payment_mode] - Payment mode used for the order
 * @property {PaymentMethod[]} [payment_methods] - A lists all available payment
 *   methods used in the transaction.
 */
/**
 * @typedef CreateOrderAPI
 * @property {Shipment[]} shipments - List of Shipments which includes shipment
 *   data like shipment items, shipment promise, shipment type, shipment order
 *   type, shipment DP options etc.
 * @property {ShippingInfo} shipping_info
 * @property {ShippingInfo} billing_info
 * @property {Object} [currency_info] - This object can accommodate a range of
 *   currency-related information, provides a flexible structure for storing
 *   comprehensive details about the currency or currencies involved in a transaction.
 * @property {string} [external_order_id] - A unique identifier for the order
 *   assigned by an external system.
 * @property {Charge[]} [charges] - It details the various fees associated with the order.
 * @property {string} [external_creation_date] - Date and time when the order
 *   was created in an external system
 * @property {Object} [meta] - Meta data of the order that contains additional,
 *   potentially dynamic information about the order.
 * @property {TaxInfo} [tax_info]
 * @property {CreateOrderConfig} config
 * @property {PaymentInfo} payment_info
 * @property {UserInfo} [user_info]
 * @property {number} [ordering_store_id] - Unique identifier for the store
 *   where the order was placed.
 * @property {string} [order_platform] - The platform used to place the order.
 * @property {string} [status] - Represents the current status of the order,
 *   specifying whether the order is in a 'pendency' state (awaiting further
 *   action) or marked as 'complete'.
 * @property {SystemMessages[]} [system_messages]
 * @property {string} [order_type] - Type of order being placed
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
 * @typedef PaymentMethods
 * @property {string} [collect_by]
 * @property {string} [refund_by]
 * @property {string} [mode]
 */
/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [source]
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [mode_of_payment]
 */
/**
 * @typedef CreateChannelConfig
 * @property {DPConfiguration} [dp_configuration]
 * @property {string} [shipment_assignment]
 * @property {boolean} [location_reassignment]
 * @property {Object} [logo_url]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {string[]} [lock_states]
 */
/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */
/**
 * @typedef CreateChannelConifgErrorResponseSchema
 * @property {string} [error] - A string that represents the unique identifier
 *   assigned to the order.
 * @property {string} [request_id]
 * @property {number} status
 * @property {Object} [info]
 * @property {string} [stack_trace]
 * @property {string} [code]
 * @property {string} [meta]
 * @property {string} message
 * @property {string} [exception]
 */
/**
 * @typedef UploadManifestConsent
 * @property {string} consent_url - A URL that directs users to a consent page
 *   or document related to the upload of the manifest.
 * @property {string} manifest_id - The unique identifier for the manifest being uploaded.
 */
/**
 * @typedef CreateChannelConfigResponseSchema
 * @property {boolean} [is_inserted]
 * @property {boolean} [is_upserted]
 * @property {boolean} [acknowledged]
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
 * @property {string} start_date - Denotes the start date and time when the
 *   order was created.
 * @property {string} end_date - Specifies the deadline by which a particular
 *   action related to the order needs to be completed.
 * @property {number} mobile
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
 * @typedef FetchCreditBalanceRequestPayload
 * @property {string} affiliate_id
 * @property {string} seller_id
 * @property {string} customer_mobile_number
 */
/**
 * @typedef CreditBalanceInfo
 * @property {string} [total_credited_balance]
 * @property {string} [reason]
 * @property {string} [customer_mobile_number]
 */
/**
 * @typedef FetchCreditBalanceResponsePayload
 * @property {boolean} success
 * @property {CreditBalanceInfo} data
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
 * @property {string} [country_code] - Uniquely identifies the country
 *   associated with the user information. This code is essential for
 *   international shipments, ensuring accurate routing and delivery across
 *   global postal and customs services. Examples include 'US' for the United
 *   States, 'IN' for India.
 */
/**
 * @typedef AttachOrderUser
 * @property {AttachUserOtpData} otp_data
 * @property {string} fynd_order_id - A unique identifier for the order
 *   associated with the user attach.
 * @property {AttachUserInfo} user_info
 */
/**
 * @typedef AttachOrderUserResponseSchema
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 */
/**
 * @typedef SendUserMobileOTP
 * @property {number} mobile - The mobile phone number of the user to whom the
 *   OTP (One-Time Password) will be sent.
 * @property {string} [country_code] - Uniquely identifies the country
 *   associated with the mobile number. This code is essential for for correctly
 *   formatting and routing the OTP messages to mobile phones across
 *   international borders. Examples include 'US' for the United States, 'IN' for India.
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
 * @typedef SendUserMobileOtpResponseSchema
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
 * @typedef VerifyOtpResponseSchema
 * @property {number} [status] - Represents the HTTP status code of the API response.
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 * @property {VerifyOtpResponseData} [data]
 */
/**
 * @typedef BulkReportsFiltersSchema
 * @property {string} [bag_status] - Comma separated values of bag statuses(to
 *   be deprecated).
 * @property {string} [operational_status] - Comma separated values of
 *   shipment's operational statuses.
 * @property {string} [stores] - Comma separated values of store ids.
 * @property {string} [time_to_dispatch] - Specifies the type of shipments to
 *   retrieve. Use "1" for non-breached shipments and "-1" for breached shipments.
 * @property {string} [payment_methods] - Filters shipments by payment method.
 *   Use "PREPAID" for shipments paid in advance, and "COD" for cash-on-delivery
 *   shipments.
 * @property {string} [dp_ids] - Comma separated values of delivery partners.
 *   Either dp_id or slug(extension_id|scheme_id).
 * @property {string} [sales_channels] - Comma separated values of sales channels ids.
 * @property {string} [tags] - A comma-separated list of tags associated with
 *   the entity. Each tag is a keyword or label that categorizes or describes the entity.
 * @property {string} [lock_status] - Indicates the lock status of the entity.
 *   "true" means the shipment is in a complete or partial lock state, while
 *   "false" means it is unlocked.
 */
/**
 * @typedef BulkReportsDownloadRequestSchema
 * @property {string[]} [store_ids] - A list of specific store IDs for which the
 *   reports should be generated.
 * @property {string} [lane_type] - Defines the category or type of lane for
 *   which the report is being requested for download.
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
 * @property {BulkReportsFiltersSchema} [filters]
 */
/**
 * @typedef BulkReportsDownloadResponseSchema
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [batch_id] - A unique identifier for the batch of reports generated.
 */
/**
 * @typedef APIFailedResponseSchema
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
 * @typedef BulkStateTransistionResponseSchema
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
 * @property {Object[]} [failed_shipments] - List of Failed Shipments which
 *   includes shipment data like shipment items, shipment promise, Shipment
 *   type, shipment order type, shipment dp options etc.
 * @property {string[]} [processing_shipments]
 * @property {string[]} [successful_shipments]
 * @property {string[]} [invoiceable_shipments]
 * @property {Object} [failed_invoiced_shipments] - Specifies the shipment
 *   records that have encountered issues during the invoicing process.
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
 * @property {string} [status] - Indicates the current status of the bulk action.
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
 * @typedef BulkListingResponseSchema
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
 * @typedef JobDetailsResponseSchema
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
 * @typedef JobFailedResponseSchema
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
 * @typedef FiltersRequestSchema
 * @property {DateRange} [date_range]
 * @property {string} [logo]
 * @property {number} stores
 * @property {string} dp_name
 * @property {number} dp_ids
 * @property {string} lane
 * @property {string} store_name
 */
/**
 * @typedef ProcessManifest
 * @property {FiltersRequestSchema} filters
 * @property {string} action
 * @property {string} unique_id
 * @property {string} [manifest_id]
 */
/**
 * @typedef ProcessManifestResponseSchema
 * @property {number} [company_id] - Id of the company.
 * @property {Filters} [filters]
 * @property {string} [user_id] - Id of the user.
 * @property {string} [manifest_id] - Id of the manifest.
 * @property {string} [action]
 * @property {string} [uid]
 * @property {string} [created_by]
 */
/**
 * @typedef ProcessManifestItemResponseSchema
 * @property {ProcessManifestResponseSchema} [items]
 */
/**
 * @typedef FilterInfoOption
 * @property {string} [text] - The display text of the option.
 * @property {string} [name] - Name of the option.
 * @property {string} [placeholder_text] - Placeholder text of the option.
 * @property {string} [value] - The value of the option.
 * @property {number} [min_search_size] - Minimum search size of the option.
 * @property {boolean} [show_ui] - Specifies whether the option should be shown in the UI.
 */
/**
 * @typedef FiltersInfo
 * @property {FilterInfoOption[]} [options] - Options of the filter.[dropdown]
 * @property {string} text - Display text of filter
 * @property {string} [placeholder_text] - Placeholder text of filter.
 * @property {string} value - The value of the filter.
 * @property {boolean} [required] - Specifies whether the filter is required or not.
 * @property {string} type - Single_select/multi_select
 */
/**
 * @typedef ManifestFiltersResponseSchema
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
 * @property {string} signed_qr_code - QR code containing the signed e-invoice
 *   data for quick and secure verification purposes.
 */
/**
 * @typedef EInvoiceErrorDetails
 * @property {string} [error_code] - Represents an identifier for the specific
 *   error encountered during the e-invoice generation or processing. This code
 *   facilitates quick identification and troubleshooting of issues, allowing
 *   for more efficient resolution.
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
 * @property {string} einvoice_type - Defines the category or type of e-invoice
 *   generated for the shipment. This property must be set to one of the
 *   following values to qualify the shipment for e-invoice generation. invoice-
 *   A document detailing the sale, including goods, services, prices, and
 *   taxes, requesting payment. credit_note- Issued as an adjustment or
 *   correction to a previously issued invoice. It may indicate a reduction in
 *   the amount often due to reasons such as returned goods, overbilling, or a
 *   post-sale discount. A credit note effectively reverses or alters the
 *   charges outlined in the original invoice, either partially or in full.
 * @property {number} status
 * @property {string} message
 * @property {EInvoiceDetails} [einvoice_info]
 */
/**
 * @typedef EInvoiceRetry
 * @property {EInvoiceRetryShipmentData[]} [shipments_data]
 */
/**
 * @typedef EInvoiceRetryResponseSchema
 * @property {EInvoiceResponseData[]} response_data
 */
/**
 * @typedef EInvoiceErrorInfo
 * @property {EInvoiceErrorDetails[]} [error_details]
 */
/**
 * @typedef EInvoiceErrorResponseData
 * @property {string} shipment_id
 * @property {string} einvoice_type - Defines the category or type of e-invoice
 *   generated for the shipment. This property must be set to one of the
 *   following values to qualify the shipment for e-invoice generation. invoice-
 *   A document detailing the sale, including goods, services, prices, and
 *   taxes, requesting payment. credit_note- Issued as an adjustment or
 *   correction to a previously issued invoice. It may indicate a reduction in
 *   the amount often due to reasons such as returned goods, overbilling, or a
 *   post-sale discount. A credit note effectively reverses or alters the
 *   charges outlined in the original invoice, either partially or in full.
 * @property {number} status
 * @property {string} message
 * @property {EInvoiceErrorInfo} [einvoice_info]
 */
/**
 * @typedef EInvoiceErrorResponseSchema
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
 * @property {string} einvoice_type - Defines the category or type of e-invoice
 *   generated for the shipment. This property must be set to one of the
 *   following values to qualify the shipment for e-invoice generation. invoice-
 *   A document detailing the sale, including goods, services, prices, and
 *   taxes, requesting payment. credit_note- Issued as an adjustment or
 *   correction to a previously issued invoice. It may indicate a reduction in
 *   the amount often due to reasons such as returned goods, overbilling, or a
 *   post-sale discount. A credit note effectively reverses or alters the
 *   charges outlined in the original invoice, either partially or in full.
 */
/**
 * @typedef CourierPartnerTrackingDetails
 * @property {string} awb - The Air Waybill (AWB) number associated with the
 *   shipment, used for tracking the parcel in transit.
 * @property {string} [dp_location] - The current geographic location of the
 *   courier partner.
 * @property {string} dp_name - The name of the courier partner responsible for
 *   the shipment.
 * @property {string} [dp_status] - The current status of the shipment as
 *   updated by the courier partner.
 * @property {string} dp_status_updated_at - The timestamp when the status was
 *   last updated by the courier partner.
 * @property {string} [estimated_delivery_date] - The estimated date and time
 *   for delivery as provided by the courier partner.
 * @property {number} [id] - A unique identifier for the tracking history entry.
 * @property {string} journey - Indicates the type of journey the shipment.
 * @property {Object} [meta] - A field to store additional metadata related to
 *   the courier partner's operations or the shipment.
 * @property {string} [operational_status] - The operational status of the shipment.
 * @property {string} [promised_delivery_date] - PThe promised date and time for
 *   delivery as provided by the courier partner.
 * @property {string} [remark] - Any additional remarks or comments from the
 *   courier partner regarding the shipment.
 * @property {string} shipment_id - The unique identifier for the shipment.
 */
/**
 * @typedef CourierPartnerTrackingResponseSchema
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
 * @property {string} created_at - Created date and time of the failed order.
 * @property {string} error_message - A technical description of the error that
 *   occurred, intended for debugging purposes.
 * @property {string} display_message - A user-friendly message that can be
 *   displayed to the end-user, explaining the failure in a more general and
 *   understandable manner.
 * @property {string} method_name
 * @property {Object} meta - Meta data of the failed orders that contains
 *   additional, potentially dynamic information about the order.
 */
/**
 * @typedef FailedOrderLogs
 * @property {FailedOrdersItem} items
 * @property {PageDetails} page
 */
/**
 * @typedef FailedOrderLogDetails
 * @property {string} error_trace - This field is intended to store the error
 *   trace of the error that occurred.For example, "Exception Trace" represents
 *   a placeholder for the actual stack trace data that would be captured when
 *   an exception occurs."Internal Server Error" indicates a generic error
 *   message suggesting that the server encountered an unexpected condition that
 *   prevented it from fulfilling the request.
 * @property {string} exception - This field captures the exception raised by
 *   the system during an Order Failure. It indicates an event that disrupts the
 *   normal flow of the program's instructions.
 */
/**
 * @typedef GenerateInvoiceIDResponseData
 * @property {string} [shipment_id] - The unique identifier for the shipment
 *   associated with the invoice.
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {string} [invoice_id] - The generated invoice ID, or null if the
 *   generation failed.
 * @property {boolean} [error_message] - Provides a descriptive error message.
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
 * @property {string[]} shipment_ids - List of shipment IDs for which invoice
 *   need to be generated.
 */
/**
 * @typedef GenerateInvoiceIDResponseSchema
 * @property {GenerateInvoiceIDResponseData[]} [items]
 */
/**
 * @typedef GenerateInvoiceIDErrorResponseSchema
 * @property {GenerateInvoiceIDErrorResponseData[]} [items]
 */
/**
 * @typedef ManifestResponseSchema
 * @property {ManifestItems} [items]
 */
/**
 * @typedef ProcessManifestRequestSchema
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
 * @typedef ManifestErrorResponseSchema
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
 * @typedef ConfigUpdatedResponseSchema
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
 * @property {string} [order_type] - Defines the specific journey a shipment
 *   will follow based on the application's operational needs and customer
 *   preferences. This field categorizes orders into distinct types, each
 *   associated with a unique processing flow. For example:
 *
 *   - "HomeDelivery": The order goes through all the steps needed for delivery,
 *       from being packed to arriving at the customer's address.
 *   - "PickAtStore": The order is prepared for pickup at the store, skipping
 *       shipping steps to make it ready faster for the customer to collect in person.
 *   - "Digital": This order type likely refers to orders that involve digital goods
 *       or services, such as software, digital subscriptions, e-books, online
 *       courses, or any other item that can be delivered electronically.
 *
 * @property {boolean} [is_partial_transition] - Specifies whether a partial
 *   transition of the order is allowed, allowing some components to progress
 *   while others remain in the current state.
 * @property {boolean} [auto_trigger_dp_assignment_acf] - Indicates whether the
 *   assignment of a designated person is automatically triggered in the context of ACF.
 * @property {string} [lock_status] - Indicates the current locking status of
 *   the shipment.
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
 * @property {string} [refund_type] - Indicates the type of refund associated
 *   with the order.
 * @property {boolean} [is_non_pos_platform] - Specifies whether the platform is
 *   non-point of sale (POS) in nature.
 * @property {boolean} [is_self_ship] - Indicates whether the order is
 *   self-shipped by the seller.
 * @property {string} [seller_country_code] - Specifies the country code of the
 *   seller in ISO 3166-1 alpha-2 format.
 *
 *   - `seller_country_code`: US
 *   - `seller_country_code`: UK
 *   - `seller_country_code`: IN
 *
 * @property {string} [customer_country_code] - Specifies the country code of
 *   the seller in ISO 3166-1 alpha-2 format.
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
 *
 * @property {string} [fulfillment_option_slug] - Represents the unique slug
 *   associated with the fulfillment option attached to the shipment. This slug
 *   helps determine the fulfillment method and operational flow used to deliver
 *   the shipment. Examples:
 *
 *   - "standard-delivery"
 *   - "hyperlocal-delivery"
 */
/**
 * @typedef PostHook
 * @property {string} task - Name of the hook that has to be added
 * @property {Object} [kwargs] - Additional parameters for the hook
 * @property {Filter} [filters] - Criteria to filter which hooks are applied
 *   based on certain conditions.
 */
/**
 * @typedef PreHook
 * @property {string} task - Name of the hook that has to be added
 * @property {Object} [kwargs] - Additional parameters for the hook
 * @property {Filter} [filters] - Criteria to filter which hooks are applied
 *   based on certain conditions.
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
 * @property {string} [ordering_channel] - The specific channel through which
 *   your order was placed. This field will be phased out after version 2.4.0.
 *   Please use ordering_source instead to ensure accurate order tracking and processing.
 * @property {string} [ordering_source] - Ordering source, to be used to
 *   identify source of order creation.
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
 * @typedef RuleListRequestSchema
 * @property {number} [page_no] - The page number to be retrieved. This
 *   determines the starting point for the list of rules to be returned.
 * @property {string[]} [channel] - An array of channel (application ID)
 *   identifiers. These channels represent the specific application contexts for
 *   which the rules are being requested.
 * @property {string[]} [department] - An array of department identifiers. The
 *   rules returned will be applicable to these specified departments.
 * @property {string[]} [id] - An array of rule identifiers. This allows for
 *   retrieving specific rules based on their unique IDs.
 * @property {boolean} [is_active] - Indicates whether the rules to be retrieved
 *   are active. This flag helps filter the rules based on their current status.
 */
/**
 * @typedef RuleErrorResponseSchema
 * @property {boolean} [success] - A flag that indicates whether the request was
 *   successful. It returns `false` if an error occurred.
 * @property {string} [error] - The error message that provides details about
 *   why the request failed.
 */
/**
 * @typedef RMAPageInfo
 * @property {string} [type] - The type of pagination used. Common values could
 *   be "number" for numeric pagination, which indicates that the pages are
 *   numbered sequentially.
 * @property {number} [current] - The current page number being displayed. This
 *   reflects the page of data currently being viewed.
 * @property {number} [size] - The number of items per page. This sets the limit
 *   on how many rule items are shown on each page.
 * @property {number} [item_total] - The total number of items available. This
 *   provides an overview of the entire dataset from which the rules are being paginated.
 * @property {boolean} [has_previous] - Indicates whether there are previous
 *   pages available before the current page. It helps in navigating backward
 *   through the data.
 * @property {boolean} [has_next] - Indicates whether there are more pages
 *   available after the current page. It helps in determining if there is more
 *   data to be viewed.
 */
/**
 * @typedef RuleAction
 * @property {Reason[]} [reasons]
 */
/**
 * @typedef QuestionSetItem
 * @property {number} id - The unique identifier for the question. This ID is
 *   used to distinguish between different questions.
 * @property {string} display_name - The display name or text of the question.
 *   This is what is shown to the user during interactions.
 */
/**
 * @typedef Reason
 * @property {number} [id] - A unique identifier for the reason.
 * @property {string} display_name - The display name for the reason, used for
 *   user-facing purposes.
 * @property {Reason[]} [reasons] - A list of sub-reasons under the main reason.
 *   These provide additional layers of granularity to the main reason.
 * @property {string[]} qc_type - List of QC (Quality Control) types -- having
 *   return reason types indicating the stage at which QC is performed. -
 *   "Doorstep QC" refers involves inspecting products for damages at the
 *   customer's location before delivery. - "Pre QC" requires customers to
 *   upload product photos for a preliminary quality check by the operations
 *   team before a return or exchange pickup is arranged, ensuring criteria are
 *   met and optimizing logistics.
 * @property {QuestionSet[]} question_set - An array of question sets linked to
 *   the reason, defining the questions to be answered.
 * @property {Object} [meta] - Meta object of the reason. This contains any
 *   additional metadata that might be relevant to the reason.
 * @property {boolean} [is_active] - Indicates whether the reason is currently
 *   active. Active reasons are those that are currently in use within the system.
 */
/**
 * @typedef Conditions
 * @property {string} [department] - The department ID to which the rule
 *   applies. This helps in filtering the rules based on specific departments.
 * @property {string} [l3] - The Level 3 category ID to which the rule applies.
 *   This further refines the application of the rule within a specific category.
 */
/**
 * @typedef RuleItem
 * @property {string} id - The unique identifier for the rule item. This ID is
 *   essential for referencing and managing individual rules.
 * @property {string} entity_type - The type of entity the rule applies to, such
 *   as "department" or "l3". This specifies the scope of the rule.
 * @property {string} value - The value associated with the entity type, such as
 *   a department ID or L3 category ID. This value determines the specific
 *   context in which the rule is applied.
 * @property {string} channel - The channel (application ID) to which the rule
 *   applies. This links the rule to a specific sales channel or application.
 * @property {RuleAction} actions - The actions and reasons associated with the
 *   rule. These define what happens when the rule is triggered.
 * @property {boolean} qc_enabled - Indicates whether quality checks are enabled
 *   for this rule. If enabled, the rule includes quality control mechanisms.
 * @property {boolean} is_deleted - Indicates whether the rule is deleted.
 *   Deleted rules are no longer active or enforceable.
 * @property {Conditions} conditions
 * @property {Object} meta - Metadata associated with the rule. This provides
 *   additional context and information related to the rule.
 * @property {string} rule_type - The type of rule, such as "custom" or
 *   "global". This specifies whether the rule is a custom one or a global standard.
 * @property {boolean} is_active - Indicates whether the rule is currently
 *   active. Active rules are those that are currently being enforced.
 */
/**
 * @typedef RuleError
 * @property {string} type - The type of error encountered. This could be
 *   related to validation, processing, or other issues.
 * @property {string} value - A specific value related to the error. This
 *   provides context to the error, such as which input was problematic.
 * @property {string} message - The error message that describes what went
 *   wrong. This message is intended for developers or users to understand the issue.
 */
/**
 * @typedef RuleListResponseSchema
 * @property {RMAPageInfo} [page] - Provides information about the pagination of
 *   the rule list. This includes details like the current page, the total
 *   number of items, and whether there are previous or next pages available.
 * @property {RuleItem[]} [items] - A list of rule items included in the
 *   response. Each item represents a specific RMA rule, detailing its unique
 *   identifier, entity type, associated actions, conditions, and other relevant
 *   attributes. This list is essential for understanding the individual rules
 *   that are applied within the system for return merchandise authorization.
 * @property {boolean} [success] - Indicates whether the request was successful.
 *   A value of `true` means the rules were retrieved successfully, while
 *   `false` indicates an error occurred during the request.
 * @property {RuleError} [error] - Contains error details if the request was not
 *   successful. This includes the type of error, the value that caused the
 *   issue, and a message explaining the error. These details help in diagnosing
 *   and resolving issues that may arise when retrieving the rules.
 */
/**
 * @typedef UpdateShipmentPaymentMode
 * @property {string} shipment_id - Unique identifier used to filter the shipment.
 * @property {ProductSchema[]} [products] - List of products attached with the
 *   shipment against which the payment methods needs to be overridden.
 * @property {PaymentMethodSchema[]} [payment_methods] - List of payment methods
 *   that needs to be updated on shipment level.
 */
/**
 * @typedef CommonErrorResponseSchema
 * @property {number} [status] - The HTTP status code corresponding to the error.
 * @property {string} [message] - A message describing the error that occurred.
 */
/**
 * @typedef ExceptionErrorResponseSchema
 * @property {string} [message] - A message describing the error that occurred.
 * @property {string} [exception] - The class path of the exception that was thrown.
 * @property {string} [stack_trace] - The stack trace from the server for the error.
 */
/**
 * @typedef ProductSchema
 * @property {number} line_number - The line number of a product used to
 *   uniquely identify and filter the specific product within the shipment.
 * @property {PaymentMethodSchema[]} payment_methods - List of payment methods
 *   that needs to be updated against filtered product.
 */
/**
 * @typedef PaymentMethodSchema
 * @property {string} name - The name of the payment method (e.g., "Credit
 *   Card", "PayPal").
 * @property {string} mode - The mode of payment (e.g., "PREPAID", "COD").
 * @property {number} amount - The amount to be paid using this payment method.
 * @property {PaymentMetaDataSchema} [meta]
 * @property {string} identifier - Unique identifier for this payment method.
 * @property {string} display_name - The name to be displayed for this payment method.
 * @property {string} aggregator - The payment aggregator or service provider
 *   used for this payment method.
 * @property {ActionDetailSchema} action
 * @property {string} refund_by - Payment refund by for the customer and seller
 *   (e.g fynd, seller).
 * @property {string} collect_by - Payment collected by for the customer and
 *   seller (e.g fynd, seller).
 */
/**
 * @typedef ActionDetailSchema
 * @property {Object} name - The type of action to be performed (currently only
 *   "override" is supported).
 * @property {string} current_mode - The current payment mode before the action
 *   is applied.
 * @property {string} current_identifier - The current identifier of the payment
 *   method before the action is applied.
 * @property {string} [refund_to] - Specifies where the refund should be
 *   directed to, if applicable.
 */
/**
 * @typedef PaymentMetaDataSchema
 * @property {string} [payment_gateway] - The name or identifier of the payment
 *   gateway used.
 * @property {string} [payment_identifier] - A unique identifier for this
 *   payment transaction.
 * @property {PaymentMetaLogoURLSchema} [logo_url]
 */
/**
 * @typedef PaymentMetaLogoURLSchema
 * @property {string} large - URL for the large version of the payment method's logo.
 * @property {string} small - URL for the small version of the payment method's logo.
 */
/**
 * @typedef FulfillmentOptionSchema
 * @property {string} [name] - The name of the fulfillment option (e.g.,
 *   'Standard Shipping', 'Express Delivery').
 * @property {string} [slug] - A unique identifier for the fulfillment option.
 * @property {boolean} [is_default] - The category or method of fulfillment
 *   (e.g., 'Pickup', 'Delivery', 'Courier').
 * @property {string} [type] - Indicates whether this fulfillment option is the
 *   default choice for customers.
 */
/**
 * @typedef PaymentMethodGatewaySchema
 * @property {string} name - Payment gateway name e.g., Razorpay, Stripe, etc.
 * @property {string} [logo]
 */
/**
 * @typedef SubModeOfPaymentSchema
 * @property {string} name - Name of the sub-mode of payment. For example, if
 *   the payment mode is 'Paytm', a sub-mode could be 'Paytm Wallet'.
 */
/**
 * @typedef PaymentMethodModeOfPaymentSchema
 * @property {string} name - Payment mode name e.g., Credit Card, Debit Card,
 *   Net Banking, Wallet, etc.
 * @property {string} slug - Slug of the payment mode e.g., cc, dc, nb, wl, etc.
 * @property {SubModeOfPaymentSchema} [sub_mode_of_payment]
 */
/**
 * @typedef PaymentMethodTransactionPartySchema
 * @property {string} refund_bearer - Entity responsible for refunding the
 *   amount paid by the customer
 * @property {string} collection_bearer - Entity responsible for collection of
 *   amount paid by the customer
 */
/**
 * @typedef LineItemPaymentMethodSchema
 * @property {PaymentMethodGatewaySchema} [gateway]
 * @property {PaymentMethodModeOfPaymentSchema} [mode_of_payment]
 * @property {number} [amount_paid] - Total amount paid by this payment method
 * @property {string} [payment_identifier] - Transaction id
 * @property {PaymentMethodTransactionPartySchema} [transaction_party]
 */
/**
 * @typedef PackagesSchema
 * @property {PackageSchema[]} packages - Array of packages to be created or
 *   updated for the shipment. At least two packages are required for MPS functionality.
 */
/**
 * @typedef PackagesResponseSchema
 * @property {boolean} success - Indicates whether the API call was successful
 *   (true) or failed (false).
 * @property {PackagesSchema} data
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 */
/**
 * @typedef PackagesErrorResponseSchema
 * @property {boolean} success - Indicates whether the API call was successful.
 *   Will always be false for error responses.
 * @property {string} error - A detailed error message describing what went
 *   wrong during the API call.
 */
/**
 * @typedef BundleDetailsSchema
 * @property {boolean} [is_base] - This serves as the base item, with all other
 *   items acting as child elements within the bundle to display the hero
 *   product prominently at the top.
 * @property {string[]} [images] - An array of image URLs associated with the bundle.
 * @property {string} [group_id] - Unique group identifier for the bundle
 *   generated by seller to club the articles
 * @property {string} [name] - Name of the bundle.
 * @property {string} [item_type] - Type of the bundle item
 * @property {number} [item_id] - Unique identifier of the item.
 * @property {string} [item_code] - Item code for the item.
 * @property {string} [item_name] - Name of the item.
 * @property {string} [seller_identifier] - Identifier for the seller of the bundle.
 * @property {number} [bundle_article_quantity] - In orders with multiple
 *   quantities of the same line item, the line item count remains constant, but
 *   multiple bundles can exist. To distinguish between these bundles, the
 *   article quantity must be used.
 * @property {string} [brand_name] - Identifier for the brand name.
 * @property {string} [size] - Size associated with the bundle item.
 */
/**
 * @typedef LineItemMonetaryValuesSchema
 * @property {number} amount_paid - Amount paid by the customer
 * @property {number} price_effective - The final effective price after applying
 *   discounts, promotional offers, and adjustments.
 * @property {number} [discount] - Discount amount apart from promo and coupon discount
 * @property {number} price_marked - The original marked price of the item
 *   before any discounts or promotions.
 * @property {number} [coupon_discount] - Coupon discount applied for this article
 * @property {number} [cod_charges] - Cash on Delivery Charges Applied for this Article.
 * @property {number} [promo_discount] - Promotion Discount
 * @property {number} [gift_price] - Gift Price
 * @property {number} [delivery_charges] - Delivery Charges Applied for this Article.
 */
/**
 * @typedef DimensionSchema
 * @property {number} height - Height of the product.
 * @property {number} length - Length of the product.
 * @property {number} width - Width of the product
 * @property {boolean} is_default - Not Modified, meaning these are same as
 *   product uploaded while loading catelogue.
 * @property {string} unit - Unit of the measurement used.
 */
/**
 * @typedef GiftDetailsSchema
 * @property {number} amount - Specifies the value or cost of the gift
 *   associated with the order line item.
 * @property {string} display_text - A short description or label intended for
 *   display purposes. This can be a message to the customer, such as "Gift wrap
 *   included" or "Gift card value applied."
 */
/**
 * @typedef CPRiderDetailsSchema
 * @property {string} name
 * @property {string} phone
 */
/**
 * @typedef CPAreaCodeSchema
 * @property {string} source
 * @property {string} destination
 */
/**
 * @typedef CPTatToDeliverTheShipmentSchema
 * @property {number} min
 * @property {number} max
 */
/**
 * @typedef CPOptionsSchema
 * @property {string} [extension_id] - A string that uniquely identifies the
 *   courier partner extension. Refer <a
 *   href='/commerce/sdk/latest/platform/company/serviceability#getCourierPartnerAccount'>Get
 *   courier partner account</a> to get the extension id.
 * @property {string} [scheme_id] - A string that specifies the unique
 *   identifier for the scheme associated with the account. Refer <a
 *   href='/commerce/sdk/latest/platform/company/serviceability#getCourierPartnerAccount'>Get
 *   courier partner account</a> to get the scheme id.
 * @property {CPAreaCodeSchema} [area_code]
 * @property {boolean} [is_self_ship]
 * @property {number} [max_reattempts_for_delivery_allowed]
 * @property {string} [cp_sort_key] - A sorting key used for categorizing or
 *   sorting courier partners, often related to their performance, costs, or
 *   some other factor, (example: E-17A-4, E-17A-6, etc.).
 * @property {string} [name] - The name of the courier partner or the delivery
 *   agent handling the shipment.
 * @property {CPRiderDetailsSchema} [rider_details]
 * @property {boolean} [using_own_creds] - Specifies whether the seller's
 *   credentials are being used for the courier partner.
 * @property {boolean} [qc_supported] - Specifies that Assigned CP support's
 *   quality checks
 */
/**
 * @typedef CourierPartnerDetailsSchema
 * @property {string} [cp_sort_key] - A sorting key used for categorizing or
 *   sorting courier partners, often related to their performance, costs, or
 *   some other factor. (example: E-17A-4, E-17A-6, etc.).
 * @property {CPOptionsSchema[]} [cp_options] - Other Available CP's
 * @property {string} scheme_id
 * @property {string} name - The name of the courier partner or the delivery
 *   agent handling the shipment.
 * @property {string} extension_id
 * @property {CPRiderDetailsSchema} [rider_details]
 * @property {boolean} [qc_supported] - Specifies that Assigned CP support's
 *   quality checks
 * @property {boolean} using_own_creds - Specifies weather the Seller's Creds or
 *   Fynd's Creds are being used.
 * @property {number} [max_reattempts_for_delivery_allowed] - Reattempts Allowed
 *   (required for NDR)
 * @property {CPTatToDeliverTheShipmentSchema} [tat_to_deliver_the_shipment]
 * @property {boolean} [is_self_ship] - Is every logistic action handled by seller.
 */
/**
 * @typedef TaxDetailsSchema
 * @property {string} hs_code - The HS code of the product
 * @property {string} tax_rule_id - Tax identifier.
 */
/**
 * @typedef PromiseDetailsSchema
 * @property {number} min_sla - Min TimeStamp (EPOCH) that will be taken to
 *   deliver the product
 * @property {number} max_sla - Max TimeStamp (EPOCH) that will be taken to
 *   deliver the product.
 */
/**
 * @typedef CustomerPickupSlotSchema
 * @property {string} start_time
 * @property {string} end_time
 */
/**
 * @typedef DpPickupSlotSchema
 * @property {string} start_time
 * @property {string} end_time
 */
/**
 * @typedef OrderFulfillmentTimelineSchema
 * @property {DpPickupSlotSchema} [dp_pickup_slot]
 * @property {string} [dispatch_after_date] - A date indicating when the order
 *   can be dispatched (e.g., the earliest possible dispatch date).
 * @property {string} [dispatch_by_date] - The latest date the order must be
 *   dispatched to meet delivery expectations.
 * @property {string} [confirm_by_date] - The deadline by which the seller must
 *   confirm the order.
 * @property {CustomerPickupSlotSchema} [customer_pickup_slot]
 * @property {string} [pack_by_date] - The latest time the package should be
 *   packed and ready to dispatch.
 */
/**
 * @typedef LineItemSchema
 * @property {string} [seller_identifier] - Identifier of the seller selling the item.
 * @property {LineItemPaymentMethodSchema[]} payment_methods - Payment methods
 *   used to sell this order.
 * @property {LineItemMonetaryValuesSchema} monetary_values
 * @property {GiftDetailsSchema} [gift_details]
 * @property {string} [special_instructions] - These instructions are added by
 *   the customer at checkout for the seller's reference.
 * @property {DimensionSchema} [dimension]
 * @property {number} [quantity] - Quantity of the Line Item
 * @property {string} [external_line_id] - Unique identifier for the LineItem as
 *   assigned by an external system. You can use this to map external id to
 *   Fynd's generated id
 * @property {BundleDetailsSchema} [bundle_details]
 * @property {Object} [meta] - Contains metadata related to the shipment
 */
/**
 * @typedef CreateOrderShipmentSchema
 * @property {boolean} [is_mto] - Indicates if the shipment belongs to the
 *   made-to-order category, i.e., the seller will start creating this order
 *   after receiving an order creation request.
 * @property {LifecycleMessageSchema[]} [shipment_lifecycle_messages] - List of
 *   general-purpose messages shown across different points in the shipment's
 *   journey at Order Details screen.
 * @property {string[]} [tags] - Tags that can be attached to the shipment for
 *   filtering and categorization.
 * @property {string} [type] - The shipment type defining the fulfillment method
 *   and processing flow. Each type determines the specific journey a shipment
 *   will follow based on operational needs and customer preferences:
 *   "HomeDelivery": Standard delivery to the customer's address, undergoing all
 *   typical state transitions from processing to final delivery. "PickAtStore":
 *   Order prepared for in-store pickup, bypassing traditional shipping stages
 *   for direct handover to the customer. "Digital": Orders involving digital
 *   goods or services (e.g., software, e-books, subscriptions) delivered electronically.
 * @property {FulfillmentOptionSchema} [fulfillment_option]
 * @property {string} [external_shipment_id] - Unique identifier for the
 *   shipment as assigned by an external system. Use this to map the external ID
 *   to Fynd's generated ID.
 * @property {string} [invoice_id] - Indicates whether the order was created in
 *   offline mode. Used to enable offline-specific processing and sync behavior.
 * @property {LineItemSchema[]} [line_items] - A list of items included in the shipment.
 * @property {OrderFulfillmentTimelineSchema} [order_fulfillment_timeline]
 * @property {number} [location_id] - The location ID from which this shipment
 *   is being fulfilled.
 * @property {string} [external_location_id] - The external location ID from
 *   which this shipment is being fulfilled.
 * @property {number} [return_location_id] - Overrides the article's default
 *   return location.
 * @property {CourierPartnerDetailsSchema} [courier_partner_details]
 * @property {TaxDetailsSchema} [tax_details]
 * @property {PromiseDetailsSchema} [promise_details]
 * @property {string} [allow_processing_after] - Defines the UTC time at which
 *   the shipment will automatically move to the placed state.
 * @property {Object} [meta] - Additional metadata related to the shipment.
 */
/**
 * @typedef OrderingCurrencySchema
 * @property {string} currency_code - The <a
 *   href='https://www.iso.org/iso-4217-currency-codes.html'>ISO 4217</a>
 *   currency code, such as 'INR' for Indian Rupee. This field represents the
 *   standardized three-letter code of a currency.
 * @property {string} currency_symbol - The symbol representing the currency,
 *   such as '₹' for Indian Rupee. This is used for display purposes alongside
 *   currency amounts.
 */
/**
 * @typedef ConversionRateSchema
 * @property {number} rate - The exchange rate used to convert monetary values
 *   from the ordering currency to the seller's currency.
 * @property {number} timestamp_ms - The timestamp (in milliseconds) when the
 *   conversion rate was applied.
 */
/**
 * @typedef CurrencySchema
 * @property {OrderingCurrencySchema} ordering_currency
 * @property {ConversionRateSchema} conversion_rate
 * @property {string} [currency_code] - The ISO 4217 currency code, such as
 *   'INR' for Indian Rupee. This field represents the standardized three-letter
 *   code of a currency.
 * @property {string} [currency_symbol] - The symbol representing the currency,
 *   such as '₹' for Indian Rupee. This is used for display purposes alongside
 *   currency amounts.
 */
/**
 * @typedef CouponOwnershipSchema
 * @property {string} payable_category - Indicates who issued the coupon
 */
/**
 * @typedef CouponSchema
 * @property {string} code - The coupon code that was applied.
 * @property {string} id - Unique identifier of the coupon.
 * @property {CouponOwnershipSchema} ownership
 * @property {boolean} is_return_allowed - Indicates whether returns are allowed
 *   when this coupon is applied.
 * @property {boolean} is_cancellation_allowed - Indicates whether cancellations
 *   are allowed when this coupon is applied.
 */
/**
 * @typedef BillingDetailsSchema
 * @property {string} [first_name] - First name of the customer
 * @property {string} [phone_code] - Country phone code ex: +91
 * @property {string} [country] - Country of the customer
 * @property {string} [city] - City of the customer
 * @property {string} [pincode] - Pincode of the customer
 * @property {string} [last_name] - Last name of the customer
 * @property {string} [mobile_number] - Primary phone number of the customer
 * @property {string} [email] - Primary email of the customer
 * @property {string} [state] - State of the customer
 * @property {string} [alternate_mobile_number] - Alternate mobile number
 * @property {string} [address] - Billing address of the customer
 * @property {string} [middle_name] - Customer's middle name.
 * @property {string} [title] - Customer's title or prefix.
 * @property {string} [house_no] - House or apartment number of the customer.
 * @property {GeoLocationSchema} [geo_location]
 * @property {string} [gender] - Gender of customer
 * @property {string} [landmark] - Landmark or reference point near the
 *   customer's location.
 * @property {string} [address_type] - Address type in the seller's system.
 * @property {string} [state_code] - State code of the customer's location.
 * @property {string} [floor_no] - Floor number of the customer's location.
 * @property {string} [alternate_email] - Alternate Email Address
 * @property {string} [address1] - First line of the address.
 * @property {string} [address2] - Second line of the address.
 * @property {string} [country_iso_code] - Specifies the country's unique
 *   identifier allowing the ISO 3166-1 alpha-2 standard. This two-letter code
 *   is crucial for distinguishing countries in international transactions, data
 *   processing, and shipping logistics.
 * @property {string} [user_id] - The unique identifier assigned to the
 *   customer. Refer <a
 *   href='/commerce/sdk/latest/platform/application/user#customer'>Customer</a>
 *   to get more details.
 * @property {string} [area_code] - Area Code
 * @property {string} [area_code_slug]
 * @property {string} [country_phone_code]
 */
/**
 * @typedef CPConfigurationSchema
 * @property {string} shipping_by - Shipping Handled by FYND or SELLER
 */
/**
 * @typedef ShippingDetailsSchema
 * @property {string} [first_name] - First name of the customer
 * @property {string} [phone_code] - Country phone code ex: +91
 * @property {string} [country] - Country of the customer
 * @property {string} [city] - City of the customer
 * @property {string} [pincode] - Pincode of the customer
 * @property {string} [last_name] - Last name of the customer
 * @property {string} [mobile_number] - Primary phone number of the customer
 * @property {string} [email] - Primary email of the customer
 * @property {string} [state] - State of the customer
 * @property {string} [alternate_mobile_number] - Alternate mobile number
 * @property {string} [address] - Shipping address of the customer
 * @property {string} [middle_name] - Customer's middle name.
 * @property {string} [title] - Customer's title or prefix.
 * @property {string} [house_no] - House or apartment number of the customer.
 * @property {GeoLocationSchema} [geo_location]
 * @property {string} [gender] - Gender of customer
 * @property {string} [landmark] - Landmark or reference point near the
 *   customer's location.
 * @property {string} [address_type] - A string representing the address type in
 *   the seller's system.
 * @property {string} [state_code] - State code of the customer's location.
 * @property {string} [floor_no] - Floor number of the customer's location.
 * @property {string} [alternate_email] - Alternate Email Address
 * @property {string} [address1] - First line of the address
 * @property {string} [address2] - Second line of the address
 * @property {string} [country_iso_code] - Specifies the country's unique
 *   identifier allowing the ISO 3166-1 alpha-2 standard. This two-letter code
 *   is crucial for distinguishing countries in international transactions, data
 *   processing, and shipping logistics.
 * @property {string} [user_id] - The unique identifier assigned to the
 *   customer. Refer <a
 *   href='/commerce/sdk/latest/platform/application/user#customer'>Customer</a>
 *   in platform documentation to get more details. details.
 * @property {string} [area_code] - Area Code
 * @property {string} [area_code_slug]
 * @property {string} [country_phone_code]
 */
/**
 * @typedef UserDetailsSchema
 * @property {string} [gstin] - The customer's GSTIN (Goods and Services Tax
 *   Identification Number).
 * @property {string} [pan_no] - The customer's PAN (Permanent Account Number).
 */
/**
 * @typedef LifecycleMessageSchema
 * @property {string} message - The message text to display to users at specific
 *   order states (e.g., PLACED, SHIPPED).
 * @property {string} type - The message type, which determines the color of the
 *   message bar.
 * @property {string[]} states - List of OMS states at which the message should
 *   be visible.
 * @property {number} priority - Determines the message display sequence, with
 *   '1' being the highest priority.
 */
/**
 * @typedef CreateOrderRequestSchema
 * @property {CreateOrderShipmentSchema[]} [shipments] - List of shipments
 *   included in the order.
 * @property {string[]} [tags] - Tags that can be used to filter and categorize
 *   orders and shipments.
 * @property {CurrencySchema} currency_details
 * @property {string} [external_creation_date] - Timestamp indicating when the
 *   order was created in an external system.
 * @property {CouponSchema} [coupon_details]
 * @property {BillingDetailsSchema} billing_details
 * @property {string} primary_payment_mode - The primary payment method used for
 *   the entire order transaction.
 * @property {CPConfigurationSchema} [cp_configuration]
 * @property {number} [ordering_location_id] - The location ID where the order
 *   is placed. Required when the order is placed from one location but
 *   fulfilled by another.
 * @property {boolean} [allow_location_reassignment] - Allows location
 *   reassignment before order confirmation.
 * @property {ShippingDetailsSchema} shipping_details
 * @property {string} [external_order_id] - A unique identifier assigned to the
 *   order by an external system or service.
 * @property {UserDetailsSchema} [user_details]
 * @property {LifecycleMessageSchema[]} [order_lifecycle_messages] - List of
 *   order lifecycle messages to be displayed to the seller at Order Details.
 * @property {string} [channel_application_id] - Identifies the application from
 *   which the order was created. Pass this when it differs from the fulfilling
 *   company's application.
 * @property {string} [b2b_gstin_number] - The GSTIN (Goods and Services Tax
 *   Identification Number) for business-to-business transactions.
 * @property {string} [channel_company_id] - The company ID where the order is
 *   placed. Required when the order is placed from one company but fulfilled by another.
 * @property {boolean} [is_draft] - Indicates whether the order is a draft.
 *   Draft orders will be moved to upcoming state instead of placed status.
 * @property {boolean} [is_offline_order] - Indicates whether the order is an
 *   offline order placed through a physical store or offline channel.
 * @property {Object} [meta] - Metadata related to the order may include
 *   additional, dynamic information that provides further context about the
 *   order. This information can also be viewed on the Order or Shipment Details page.
 */
/**
 * @typedef Page
 * @property {number} [item_total] - The total number of all items across all pages.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, can be 'cursor' or 'number'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */
/**
 * @typedef OrderingSourceConfig
 * @property {string} [slug] - Slug of the ordering source.
 * @property {OrderingSourceFeature[]} [configs]
 * @property {string} [logo] - Logo of the ordering source.
 */
/**
 * @typedef OrderingSourceFeature
 * @property {string} [name] - Name of the ordering source config item.
 * @property {string} [slug] - Slug of the ordering source config item.
 * @property {string} [description] - Description of the ordering source config item.
 * @property {boolean} [enabled] - Whether the config/feature is enabled or not.
 */
/**
 * @typedef ListOrderingSources
 * @property {OrderingSourceSummary[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OrderingSourceSummary
 * @property {string} [text] - Display Text of the ordering source.
 * @property {string} [value] - Value of the ordering source.
 */
/**
 * @typedef CreateAccount
 * @property {string} channel_account_name - Unique name identifier for the
 *   channel account. This represents the sales channel or marketplace through
 *   which orders are received and processed.
 */
/**
 * @typedef Account
 * @property {string} [channel_account_id] - Unique identifier for the channel
 *   account. This is a system-generated identifier used to reference the
 *   account across the platform.
 * @property {number} [company_id] - Unique identifier of the company on the
 *   platform to which this channel account belongs.
 * @property {string} [channel_account_name] - Name of the channel account. This
 *   identifies the specific sales channel or marketplace (e.g., SHOPIFY,
 *   MARKETPLACE, etc.) through which the company receives and processes orders.
 */
/**
 * @typedef AccountsList
 * @property {Account[]} [data] - List of channel accounts associated with the
 *   company. Each account represents a different sales channel or marketplace
 *   integration.
 * @property {Page} [page]
 */
/**
 * @typedef PackageProduct
 * @property {number} line_number - The line number of the product within the
 *   shipment, used for tracking and identification purposes.
 * @property {number} quantity - The quantity of the product included in this package.
 * @property {string} identifier - The unique identifier or SKU (Stock Keeping
 *   Unit) of the product. This is used to match products across packages and bags.
 */
/**
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
 */
/**
 * @typedef BagReasonMeta
 * @property {boolean} [show_text_area] - Indicates whether a text area should
 *   be displayed for additional input related to the bag reason.
 */
/**
 * @typedef QuestionSet
 * @property {number} [id] - A unique identifier for the question set.
 * @property {string} [display_name] - The display name for the question set,
 *   used for user-facing purposes.
 */
/**
 * @typedef BagReasons
 * @property {string[]} [qc_type] - List of QC (Quality Control) types -- having
 *   return reason types indicating the stage at which QC is performed. -
 *   "Doorstep QC" refers involves inspecting products for damages at the
 *   customer's location before delivery. - "Pre QC" requires customers to
 *   upload product photos for a preliminary quality check by the operations
 *   team before a return or exchange pickup is arranged, ensuring criteria are
 *   met and optimizing logistics.
 * @property {number} [id] - A unique identifier for the bag reason.
 * @property {string} [display_name] - The display name for the bag reason, used
 *   for user-facing purposes.
 * @property {BagReasonMeta} [meta]
 * @property {QuestionSet[]} [question_set] - An array of question sets linked
 *   to the bag reason, defining the questions to be answered.
 * @property {BagReasons[]} [reasons] - An array of nested bag reasons that can
 *   further explain the primary reason.
 */
/**
 * @typedef ShipmentBagReasons
 * @property {BagReasons[]} [reasons] - List of bag reasons for a shipment with
 *   a corresponding shipment status.
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {number} [rule_id] - The unique identifier for the rule that is
 *   associated with the given reasons. This ID serves as a reference to the
 *   specific rule within the RMA system that governs or influences the reasons listed.
 */
/**
 * @typedef ShipmentStatus
 * @property {string} [current_shipment_status] - The current status of the shipment.
 * @property {Object} [meta] - It contains the additional properties related to
 *   shipment status transition like Kafka_emission_status, user_name, etc.
 *   Additionally it is dynamic.
 * @property {number} [id] - A unique identifier for the shipment status.
 * @property {string[]} [bag_list] - A list of bags associated with the
 *   shipment, useful for tracking individual items within the shipment.
 * @property {string} title - A brief title or label for the shipment status,
 *   summarizing its current state.
 * @property {string} [display_name] - A user-friendly name or identifier for
 *   the shipment status.
 * @property {string} [created_at] - Timestamp when the shipment was initially
 *   created.This timestamp is crucial for tracking the shipment's age,
 *   scheduling, and historical analysis.
 * @property {string} [created_ts] - A general timestamp for when the shipment
 *   was created, formatted for internal processing.
 * @property {string} [shipment_id] - A unique identifier for the shipment.
 * @property {string} [status_created_at] - Timestamp when the transition for
 *   the status of the shipment was created. Date time in UTC timezone as per ISO format.
 * @property {string} [updated_ts] - A general timestamp indicating when the
 *   status was updated, useful for processing and tracking.
 * @property {string} status - This key denotes the status of the shipment,
 *   providing a clear indication of its current processing stage.
 */
/**
 * @typedef OrderingSourceDetails
 * @property {string} [type] - Type of the ordering source.
 * @property {string} [slug] - Slug identifier of the ordering source.
 * @property {string} [display_name] - Display name of the ordering source.
 * @property {boolean} [is_active] - Indicates whether the ordering source is active.
 * @property {string} [logo] - Logo URL of the ordering source.
 */
/**
 * @typedef UserDataInfo
 * @property {number} [id] - The unique identifier associated with the user.
 * @property {string} [user_oid] - The object ID for the user, used for
 *   referencing the user in various operations.
 * @property {string} [mongo_user_id] - The identifier for the user.
 * @property {string} [external_customer_id] - The identifier for the user in
 *   external systems.
 * @property {string} [first_name] - The first name of the user.
 * @property {string} [last_name] - The last name of the user.
 * @property {string} [mobile] - The mobile phone number of the user.
 * @property {string} [email] - The email address of the user.
 * @property {Object} [meta] - Additional metadata related to the user.
 * @property {boolean} [is_anonymous_user] - Indicates whether the user is an
 *   anonymous user (true) or registered (false).
 * @property {string} [name] - A full name of the user, which may be a
 *   combination of first and last name.
 * @property {string} [gender] - The gender of the user.
 * @property {string} [country_phone_code] - The country-specific phone code,
 *   useful for formatting mobile numbers correctly.
 */
/**
 * @typedef BundleReturnConfig
 * @property {boolean} [allow_partial_return] - Indicates whether partial
 *   returns are allowed for bundle products.
 * @property {boolean} [returnable] - Indicates whether the bundle product is returnable.
 * @property {boolean} [unit] - Time unit for the return window (e.g., "week",
 *   "day", "hour").
 * @property {boolean} [time] - Duration value for the return window, expressed
 *   in the specified unit.
 */
/**
 * @typedef BundleDetails
 * @property {string} [bundle_group_id] - Unique group identifier for the bundle.
 * @property {string} [name] - Name of the bundle.
 * @property {string} [slug] - URL-friendly identifier for the bundle.
 * @property {number} [bundle_count] - Indicates bundle count of the bag.
 * @property {string} [article_bundle_id] - Unique identifier for the article bundle.
 * @property {number} [bundle_article_quantity] - Article net_quantity in bundle Product.
 * @property {boolean} [is_base] - A flag that determines if bag is base bag of bundle.
 * @property {number} [price_marked] - Maximum Retail Price of the bundle.
 * @property {number} [price_effective] - Current selling price of the bundle.
 * @property {number} [item_id] - Unique identifier for the item.
 * @property {string} [item_type] - Type of the item (physical_bundle, virtual_bundle).
 * @property {BundleReturnConfig} [return_config]
 * @property {string} [seller_identifier] - Identifier for the seller of the bundle.
 * @property {string[]} [images] - An array of image URLs associated with the bundle.
 * @property {string} [brand_name] - Identifier for the brand name.
 * @property {string} [size] - Size associated with the bundle item.
 */
/**
 * @typedef Address
 * @property {string} [phone] - The phone number at the address, used for
 *   contact purposes.
 * @property {string} [address2] - An optional additional field for the street
 *   address of the address.
 * @property {string} [address] - An optional additional field for the street
 *   address of the address.
 * @property {number} [longitude] - The longitude coordinate of the address.
 * @property {string} [pincode] - The postal code of the address.
 * @property {string} [area] - Area details of the address.
 * @property {string} [address_type] - The type of the address.
 * @property {string} [country] - The name of the country of the address.
 * @property {string} [address_category] - Category or classification of the
 *   address. The address_category field that includes "store", "delivery", and
 *   "billing" serves to classify addresses based on various business processes.
 *   addresses based on various business processes
 *
 *   - 'store': Identifies addresses associated with physical retail locations or
 *       warehouses which is essential for inventory management, order
 *       fulfillment, and facilitating in-store pickups or returns.
 *   - 'delivery': Identifies addresses where orders are shipped to customers which
 *       ensures successful delivery, enhancing customer satisfaction, and
 *       optimizing logistics operations.
 *   - 'billing': Identifies addresses used for billing and financial transactions
 *       which are essential for payment processing, invoice generation, and
 *       maintaining financial accuracy
 *
 * @property {string} [email] - The email of the person associated with the order.
 * @property {string} [created_at] - Created at date for address
 * @property {string} [address1] - The primary address dynamically forms based
 *   on a template. If the template includes a single key, Address1 contains
 *   that data. For templates with multiple keys like {address} {address2}
 *   {area} {state} {country}, Address1 compiles all into a single formatted string.
 * @property {string} [display_address] - A formatted version of the address for
 *   display purposes.
 * @property {string} [landmark] - A notable landmark near the address, aiding
 *   in location identification.
 * @property {string} [updated_at] - Updated at date for address
 * @property {string} [version] - The version number of the address record
 * @property {number} [latitude] - The latitude coordinate of the address.
 * @property {string} [contact_person] - The full name of the person associated
 *   with the address.
 * @property {string} [state] - The name of the region (for example, province,
 *   state, or prefecture) of the address.
 * @property {string} [city] - The city, town of the address.
 * @property {string} [area_code_slug] - A slug representation of the area code.
 * @property {string} [country_code] - A code representing the country for the address.
 * @property {string} [country_iso_code] - The ISO code representing the country
 *   for the address.
 * @property {string} [country_phone_code] - The country-specific phone code for
 *   formatting phone numbers.
 * @property {number} [delivery_address_id] - A unique identifier for the
 *   delivery address.
 * @property {Object} [geo_location] - An object containing additional
 *   geographical information related to the address.
 * @property {string} [name] - A unique identifier for the name associated with
 *   the address.
 * @property {string} [sector] - The sector or zone of the address, if applicable.
 * @property {string} [state_code] - A code representing the state or region for
 *   the address.
 * @property {string} [uid] - A unique identifier for the user associated with
 *   the address.
 * @property {string} [user_id] - The unique identifier of the user in the system.
 * @property {string} [code] - A unique identifier associated with store.
 */
/**
 * @typedef ShipmentListingChannel
 * @property {string} [channel_shipment_id] - A unique identifier for the
 *   shipment associated with a specific channel, facilitating tracking and management.
 * @property {boolean} [is_affiliate] - Indicates whether the shipment is
 *   associated with an affiliate program, which may affect processing and fulfillment.
 * @property {string} [logo] - A URL or path to the logo of the shipment
 *   channel, used for branding and identification purposes.
 * @property {string} [name] - The name of the shipment channel, providing a
 *   human-readable reference for the channel through which the shipment is processed.
 */
/**
 * @typedef Prices
 * @property {number} [refund_credit] - Refund credits applicable to the
 *   customer in case of returns or cancellations.
 * @property {number} [amount_paid_roundoff] - Total amount paid, rounded off to
 *   the nearest integer.
 * @property {number} [price_effective] - Effective price after applying
 *   discounts to the MRP (Maximum Retail Price).
 * @property {number} [promotion_effective_discount] - Discount amount provided
 *   through promotions applicable to the purchase.
 * @property {number} [pm_price_split] - Updated selling price of the product in
 *   the event of repricing.
 * @property {number} [refund_amount] - Total amount to be refunded in case of
 *   cancellation or return.
 * @property {number} [transfer_price] - Fixed selling price applicable for
 *   payouts by the brand to the platform.
 * @property {number} [coupon_effective_discount] - Discount amount applicable
 *   when using a coupon.
 * @property {number} [tax_collected_at_source] - Tax amount collected at the
 *   source during the transaction.
 * @property {number} [brand_calculated_amount] - Calculated price after
 *   deducting coupon and promotion discounts from the effective price.
 * @property {number} [delivery_charge] - Fee charged for delivery, as
 *   stipulated by the delivery partner.
 * @property {number} [cashback] - Cashback points or amount provided to the
 *   customer post-purchase.
 * @property {number} [value_of_good] - Effective selling price minus the GST
 *   amount applicable to the product.
 * @property {number} [cashback_applied] - Actual cashback value that has been
 *   applied to the purchase.
 * @property {number} [cod_charges] - Charges applicable for Cash on Delivery
 *   (COD) orders.
 * @property {number} [price_marked] - The marked price of the item before any
 *   discounts or adjustments.
 * @property {number} [amount_paid] - Total amount actually paid by the customer
 *   for the purchase.
 * @property {number} [coupon_value] - The effective value of the coupon applied
 *   to the transaction.
 * @property {number} [discount] - Total discount amount deducted from the
 *   original price of the product.
 * @property {number} [fynd_credits] - Credits awarded by Fynd, which can be
 *   used for future purchases.
 * @property {number} [gift_price] - The amount associated with any gift card
 *   used in the transaction.
 * @property {number} [amount_to_be_collected] - Total amount to be collected in
 *   scenarios involving multiple payment methods.
 * @property {number} [cost_price] - The base cost incurred by the seller to
 *   acquire or produce the product before margin or discount.
 * @property {number} [loyalty_discount] - Amount reduced from the payable price
 *   when the customer applies loyalty program points while placing the order.
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
 * @typedef OrderingCurrencyPrices
 * @property {number} [refund_credit] - Amount of refund credits applicable to
 *   the customer's account for returned items or cancellations.
 * @property {number} [amount_paid_roundoff] - Total amount paid by the
 *   customer, rounded off to the nearest integer for ease of processing.
 * @property {number} [price_effective] - Final effective price of the product
 *   after applying discounts to the marked retail price (MRP).
 * @property {number} [promotion_effective_discount] - Total discount amount
 *   applied through promotional offers specific to the customer's purchase.
 * @property {number} [pm_price_split] - Updated selling price of the product
 *   after any repricing adjustments made before the sale.
 * @property {number} [refund_amount] - Amount that will be refunded to the
 *   customer in case of order cancellation or product return.
 * @property {number} [transfer_price] - Fixed price set for payouts by the
 *   brand, representing the cost to the retailer or affiliate.
 * @property {number} [coupon_effective_discount] - Discount value realized
 *   through the use of a coupon code applied at the time of purchase.
 * @property {number} [tax_collected_at_source] - Total tax amount that is
 *   collected at the point of sale, often applicable for tax regulations.
 * @property {number} [brand_calculated_amount] - Amount calculated by the brand
 *   after applying any relevant coupons and promotions to the base price.
 * @property {number} [delivery_charge] - Cost charged for the delivery service,
 *   as determined by the delivery partner handling the shipment.
 * @property {number} [cashback] - Points or monetary value returned to the
 *   customer as a reward for their purchase, which can be used for future transactions.
 * @property {number} [value_of_good] - Net selling price of the product after
 *   excluding the GST (Goods and Services Tax) amount from the total.
 * @property {number} [cashback_applied] - Total cashback value that has been
 *   applied to the customer's account or to the current transaction.
 * @property {number} [cod_charges] - Additional fee charged for orders placed
 *   via cash on delivery (COD) payment method.
 * @property {number} [price_marked] - The original price indicated for the
 *   product before any discounts or promotions are applied.
 * @property {number} [amount_paid] - The total amount the customer has paid for
 *   their order, including all applicable charges and discounts.
 * @property {number} [coupon_value] - The specific value of the coupon used in
 *   the transaction, reflecting its impact on the total price.
 * @property {number} [discount] - Total amount discounted from the original
 *   price of the product, reflecting savings for the customer.
 * @property {number} [fynd_credits] - Credits provided by Fynd, which can be
 *   used for discounts on future purchases.
 * @property {number} [gift_price] - Monetary value assigned to a gift card
 *   purchased by the customer, usable for future transactions.
 * @property {number} [amount_to_be_collected] - Amount to be collected from the
 *   customer when multiple payment methods are utilized for a single order.
 * @property {number} [cost_price] - The base cost incurred by the seller to
 *   acquire or produce the product before margin or discount.
 * @property {number} [loyalty_discount] - Amount reduced from the payable price
 *   when the customer applies loyalty program points while placing the order.
 */
/**
 * @typedef Identifier
 * @property {string} [alu] - The ALU (Article Level Unit) code used to identify
 *   the item at a detailed level, often specific to certain retail or
 *   distribution systems.
 * @property {string} [ean] - The European Article Number (EAN) is a unique
 *   identifier for products, primarily used in retail and logistics. It helps
 *   in tracking and managing inventory across various platforms.
 * @property {string} [sku_code] - The Stock Keeping Unit (SKU) code of the item
 *   - uniquely identifies each distinct product. SKUs are used to track
 *   inventory levels, facilitate accurate stocktaking, and streamline order
 *   fulfillment processes. This code is essential for inventory management,
 *   allowing for the differentiation between products based on attributes such
 *   as price, color, and size.
 * @property {string} [upc] - The Universal Product Code (UPC) is a barcode
 *   symbol used for tracking trade items in stores. It is widely used in North
 *   America and helps in identifying products quickly during point-of-sale transactions.
 * @property {string} [isbn] - The International Standard Book Number (ISBN) is
 *   a unique identifier for books, allowing for easier management and tracking
 *   of book inventories in retail and library systems.
 */
/**
 * @typedef TaxComponent
 * @property {string} [name] - The name or type of the tax component (e.g., GST,
 *   VAT, Service Tax). This helps in identifying the specific tax being applied
 *   to the transaction or item.
 * @property {number} [rate] - The percentage rate at which the tax is applied
 *   to the taxable amount. This value is typically represented as a decimal
 *   (e.g., 0.18 for 18% tax).
 * @property {number} [tax_amount] - The total monetary value of the tax
 *   calculated for this component. This is derived by applying the tax rate to
 *   the taxable amount.
 * @property {number} [taxable_amount] - The base amount on which the tax is
 *   calculated, excluding the tax itself. This represents the value of goods or
 *   services before tax is applied.
 */
/**
 * @typedef SellerQcDetails
 * @property {number} [line_number] - Represents the line number in an order or
 *   transaction associated with the bag.
 * @property {number} [bad_quantity] - Represents the total number of items in a
 *   bag that have failed quality control and are marked as bad QC.
 * @property {number} [good_quantity] - Represents the total number of items in
 *   a bag that have passed quality control and are marked as good QC.
 */
/**
 * @typedef FinancialBreakup
 * @property {number} refund_credit - The amount of refund credits applicable
 *   for the transaction.
 * @property {number} [amount_paid_roundoff] - Total amount paid, rounded off to
 *   the nearest integer for billing purposes.
 * @property {number} price_effective - The effective price after applying
 *   discounts and before any taxes.
 * @property {number} promotion_effective_discount - The amount of discount
 *   applied from promotional offers.
 * @property {number} transfer_price - The fixed selling price applicable for
 *   payouts by the brand.
 * @property {number} coupon_effective_discount - The discount applied through a
 *   coupon code, if applicable.
 * @property {number} gst_fee - Total Goods and Services Tax (GST) fee charged
 *   on the goods or services.
 * @property {number} [tax_collected_at_source] - Tax amount collected at the
 *   source of income or transaction.
 * @property {number} brand_calculated_amount - Amount calculated by the brand,
 *   possibly reflecting various costs or fees.
 * @property {number} delivery_charge - Fee applicable for the delivery of the goods.
 * @property {string} gst_tag - A tag used to denote GST-related attributes or
 *   classifications.
 * @property {string} hsn_code - The HSN Code (Harmonized System of Nomenclature
 *   Code) is an internationally standardized system for classifying goods, used
 *   in trade and commerce for uniform identification across different countries.
 * @property {number} cashback - The cashback amount provided to the customer,
 *   if applicable.
 * @property {string} item_name - The name or description of the item related to
 *   the financial breakup.
 * @property {number} value_of_good - The assessed value of the goods before
 *   applying any taxes or fees.
 * @property {number} cashback_applied - The effective cashback value that has
 *   been applied to the transaction.
 * @property {number} cod_charges - Charges applicable for Cash on Delivery (COD) orders.
 * @property {number} price_marked - The indicated price or value assigned to an
 *   item before any discounts or adjustments.
 * @property {string} size - The size of the item, if applicable.
 * @property {number} amount_paid - Total amount paid by the customer for the transaction.
 * @property {number} coupon_value - The effective value of the coupon used in
 *   the transaction.
 * @property {number} discount - Total amount discounted from the original price
 *   of the goods.
 * @property {number} fynd_credits - Credits provided by Fynd to the customer,
 *   possibly as part of a rewards program.
 * @property {number} gst_tax_percentage - The percentage of GST applicable on
 *   the goods or services.
 * @property {number} [amount_to_be_collected] - Amount to be collected in case
 *   of multiple modes of payments.
 * @property {Identifier} identifiers
 * @property {number} total_units - The total number of units involved in the transaction.
 * @property {boolean} added_to_fynd_cash - Indicates whether the amount has
 *   been added to Fynd cash for future use.
 * @property {TaxComponent[]} [taxes] - Applied Tax Components
 * @property {number} [loyalty_discount] - Amount reduced from the payable price
 *   when the customer applies loyalty program points while placing the order.
 */
/**
 * @typedef GSTDetailsData
 * @property {number} [cgst_tax_percentage] - The percentage of Central Goods
 *   and Services Tax (CGST) applicable on the goods or services.
 * @property {string} [gstin_code] - A GST Number (Goods and Services Tax
 *   Identification Number, often abbreviated as GSTIN) is a unique identifier
 *   assigned to a business or individual registered under the Goods and
 *   Services Tax (GST) system in countries like India. The GST number is
 *   essential for businesses to comply with tax regulations and for the
 *   government to track tax payments and returns.
 * @property {number} value_of_good - The assessed value of the goods before
 *   applying any taxes or fees.
 * @property {number} gst_fee - The total GST fee charged on the goods or services.
 * @property {number} [igst_tax_percentage] - The percentage of Integrated Goods
 *   and Services Tax (IGST) applicable for inter-state transactions.
 * @property {number} [gst_tax_percentage] - The overall GST tax percentage
 *   applicable to the goods or services.
 * @property {string} [hsn_code_id] - Unique identifier for the Harmonized
 *   System of Nomenclature (HSN) code used to classify goods.
 * @property {number} [igst_gst_fee] - The GST fee applicable for IGST, usually
 *   for inter-state transactions.
 * @property {boolean} [is_default_hsn_code] - Indicates whether this HSN code
 *   is the default classification for the goods.
 * @property {number} [sgst_gst_fee] - The GST fee applicable for State Goods
 *   and Services Tax (SGST).
 * @property {number} tax_collected_at_source - Tax amount collected at the
 *   source of income or transaction, often for compliance and revenue tracking.
 * @property {number} brand_calculated_amount - Amount calculated by the brand,
 *   potentially reflecting costs, fees, or pricing structures.
 * @property {number} [cgst_gst_fee] - The GST fee applicable for CGST.
 * @property {string} [gst_tag] - A tag or label used to denote GST-related
 *   attributes or classifications.
 * @property {number} [sgst_tax_percentage] - The percentage of State Goods and
 *   Services Tax (SGST) applicable on the goods or services.
 * @property {string} [hsn_code] - The HSN Code (Harmonized System of
 *   Nomenclature Code) is an internationally standardized system for
 *   classifying goods. It is used in trade and commerce to identify products
 *   and services uniformly across different countries and industries. The
 *   system was developed by the World Customs Organization (WCO) and is widely
 *   used in customs processes and tax systems.
 */
/**
 * @typedef BagStateMapper
 * @property {boolean} [is_active] - Indicates whether the state is currently
 *   active in the shipment process.
 * @property {string} [app_display_name] - Display name used in the application
 *   to represent this state.
 * @property {string} state_type - Serves as a key identifier to differentiate
 *   among the diverse types of states a shipment can undergo throughout its journey.
 *
 *   - 'operational': Pertains to states that involve the physical handling and
 *       movement of the shipment, such as packing, in transit, and delivery.
 *   - 'financial': Relates to states associated with the payment, invoicing, and
 *       any monetary transactions or obligations tied to the shipment.
 *   - 'logistics': Encompasses states that deal with the broader logistical
 *       planning and coordination necessary for the shipment's journey,
 *       including route optimization and carrier selection.
 *
 * @property {number} id
 * @property {string} journey_type - It is a type being used to represent the
 *   journey of shipment through the performed status transition. Forward
 *   Journey: The forward journey encompasses all the stages of shipping,
 *   including order placement, packing, dispatch, in-transit updates, and
 *   delivery. Return Journey: Contrary to the forward journey, the return
 *   journey involves the process of sending items back from the customer to the
 *   original sender or a designated return facility.
 * @property {string} [app_state_name] - The name of the state as used within
 *   the application, providing a clear reference.
 * @property {string} name - Official name of the state in the context of the
 *   shipment process.
 * @property {boolean} [app_facing] - Indicates if this state is visible to the
 *   customer in the application.
 * @property {boolean} [notify_customer] - Indicates whether the customer should
 *   be notified upon reaching this state.
 * @property {string} display_name - User-friendly name for the state, suitable
 *   for display purposes.
 */
/**
 * @typedef BagStatusHistory
 * @property {boolean} [forward] - Indicates whether the bag is being forwarded
 *   to the next stage in the shipment process.
 * @property {number} [store_id] - Unique identifier for the store associated
 *   with the bag's current status.
 * @property {string} [delivery_awb_number] - The Air Waybill (AWB) number used
 *   for tracking the delivery of the bag.
 * @property {boolean} [kafka_sync] - Indicates if the status update has been
 *   synchronized with Kafka for real-time processing.
 * @property {number} [delivery_partner_id] - Identifier for the delivery
 *   partner responsible for the shipment.
 * @property {string} [app_display_name] - The display name of the application
 *   that is handling the bag status update.
 * @property {number} [state_id] - Unique identifier for the current state of
 *   the bag in the shipment process.
 * @property {string} [state_type] - Serves as a key identifier to differentiate
 *   among the diverse types of states a shipment can undergo throughout its journey.
 * @property {number} [bsh_id] - Unique identifier for the bag status history entry.
 * @property {string} [created_at] - Timestamp when the bag status history
 *   transaction was created.
 * @property {string} [created_ts] - Timestamp of creation in a different
 *   format, if applicable.
 * @property {string} [shipment_id] - Identifier for the shipment associated
 *   with this bag status entry.
 * @property {string} [updated_at] - Timestamp when the bag status history
 *   transaction was last updated.
 * @property {string} [updated_ts] - Timestamp of last update in a different
 *   format, if applicable.
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [bag_id] - Unique identifier for the bag whose status is
 *   being tracked.
 * @property {Object[]} [reasons] - List of reasons associated with the current
 *   status of the bag.
 * @property {string} status - Current status of the bag in the shipment process.
 * @property {string} [display_name] - User-friendly name that describes the
 *   current state of the bag.
 */
/**
 * @typedef Dimensions
 * @property {number} [height] - The height measurement of the object, typically
 *   representing the vertical dimension.
 * @property {number} [width] - The width measurement of the object, indicating
 *   the horizontal dimension.
 * @property {boolean} [is_default] - A flag indicating whether these dimensions
 *   are the default measurements for the object.
 * @property {string} [unit] - The unit of measurement used for the dimensions
 *   (e.g., centimeters, inches).
 * @property {number} [length] - The length measurement of the object,
 *   representing the longest dimension.
 */
/**
 * @typedef ReturnConfig
 * @property {boolean} [returnable] - Indicates whether the article is eligible
 *   for return, allowing customers to send it back under specified conditions.
 * @property {number} [time] - The time frame within which the return must be
 *   initiated, typically measured in days.
 * @property {string} [unit] - The unit of time for the return period (e.g., days, weeks).
 */
/**
 * @typedef Weight
 * @property {boolean} [is_default] - Indicates whether this weight value is the
 *   default weight used for the article.
 * @property {number} [shipping] - The weight of the article specifically for
 *   shipping purposes, usually measured in grams or kilograms.
 * @property {string} [unit] - The unit of measurement for the weight (e.g.,
 *   grams, kilograms, pounds).
 */
/**
 * @typedef Article
 * @property {string} seller_identifier - Unique identifier assigned by the
 *   seller to the article, used for inventory management.
 * @property {string} uid - A unique identifier for the article within the system.
 * @property {Object} [set] - Represents the data related to combinations of
 *   articles that, while being the same product, vary by size, color, or other
 *   distinguishing features.
 * @property {Dimensions} [dimensions]
 * @property {Object} [currency] - Currency in which the transaction amount
 *   associated with the article is specified.
 * @property {boolean} [esp_modified] - Indicates whether the article has been
 *   modified by the ESP (e-commerce service provider).
 * @property {ReturnConfig} [return_config] - Configuration related to the
 *   return policy for the article.
 * @property {string} [code] - Internal code or identifier for the article, used
 *   for reference.
 * @property {Weight} [weight]
 * @property {string} _id - The unique identifier for the article within the database.
 * @property {Object} identifiers - Details of identifiers associated with the
 *   article, including SKU codes and other relevant identifiers.
 * @property {string} [raw_meta] - Raw metadata associated with the article,
 *   providing additional context or information.
 * @property {string} size - Size of the article, which may vary for clothing,
 *   accessories, etc.
 * @property {boolean} [is_set] - Indicates whether the article is part of a set
 *   or collection.
 * @property {string[]} [tags] - Tags associated with the article for
 *   categorization and search optimization.
 * @property {Object} [_custom_json] - A custom JSON object containing
 *   additional details or configurations specific to the article.
 */
/**
 * @typedef ShipmentListingBrand
 * @property {string} [logo] - URL or path to the logo image of the brand
 *   associated with the shipment.
 * @property {string} [created_on] - Timestamp indicating when the brand of the
 *   shipment was created, formatted as date-time.
 * @property {string} [name] - The name of the brand linked to the shipment.
 * @property {string} [logo_base64] - Base64 encoded string of the brand's logo
 *   image, allowing for direct embedding in documents or applications.
 */
/**
 * @typedef ReplacementDetails
 * @property {string} [replacement_type] - Specifies the nature or category of
 *   the replacement requested or processed for an item.
 * @property {string} [original_affiliate_order_id] - The original order ID
 *   associated with the item that is being replaced.
 */
/**
 * @typedef AffiliateMeta
 * @property {string} [order_item_id] - A unique identifier for the order item
 *   associated with the affiliate shipment.
 * @property {string} [channel_order_id] - The order ID assigned by the sales
 *   channel for tracking purposes.
 * @property {number} [employee_discount] - The discount percentage or amount
 *   applied to the order for employees.
 * @property {string} [box_type] - Box type of the shipment in which the
 *   shipment will be delivered.
 * @property {number} [quantity] - The total quantity of items in the order.
 * @property {number} [size_level_total_qty] - The total quantity of items
 *   grouped by size level for the order.
 * @property {number} [loyalty_discount] - The discount percentage or amount
 *   applied to the order based on customer loyalty.
 * @property {ReplacementDetails} [replacement_details]
 * @property {string} [channel_shipment_id] - The shipment ID assigned by the
 *   sales channel for tracking purposes.
 * @property {string} [marketplace_invoice_id] - The invoice ID related to the
 *   marketplace for the transaction.
 * @property {string} [due_date] - Specifies the deadline by which a particular
 *   action related to the affiliate shipment needs to be completed.
 * @property {string} [coupon_code] - A unique code provided to customers for
 *   redeeming special offers or discounts on their purchases.
 * @property {boolean} [is_priority] - Indicates whether the shipment is a
 *   priority for fulfillment.
 * @property {boolean} [is_serial_number_required] - Indicates whether a serial
 *   number is required for the items in the shipment.
 * @property {number} [fulfilment_priority] - A value indicating the priority
 *   level of order fulfillment.
 * @property {number} [customer_selling_price] - The selling price at which the
 *   product is offered to the customer.
 */
/**
 * @typedef AffiliateBagDetails
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id - Unique identifier for the affiliate
 *   order associated with the bag.
 * @property {number} [employee_discount] - Discount percentage or amount
 *   applicable to employees for this order.
 * @property {string} affiliate_bag_id - Unique identifier for the affiliate
 *   bag, used for tracking and reference.
 * @property {number} [loyalty_discount] - Discount amount applied based on
 *   customer loyalty, if applicable.
 */
/**
 * @typedef PlatformArticleAttributes
 * @property {string} [currency] - The currency in which the price of the
 *   article is specified.
 */
/**
 * @typedef PlatformItem
 * @property {number} [id] - Unique identifier for the platform item.
 * @property {PlatformArticleAttributes} [attributes]
 * @property {number} [brand_id] - Identifier for the brand associated with the item.
 * @property {string} [slug_key] - A user-friendly string that represents the
 *   item, often used in URLs.
 * @property {number} [l3_category] - Represents the product's classification at
 *   the third level in the e-commerce platform's category hierarchy, using an
 *   integer identifier.
 * @property {string} [l3_category_name] - Name of the third-level category
 *   under which the product is listed.
 * @property {string} [last_updated_at] - Timestamp when any aspect of the
 *   associated record was modified, formatted as date-time.
 * @property {string} [name] - The name of the product item.
 * @property {string[]} [l2_category] - Represents the second level of
 *   categorization for items, helping customers narrow down their search.
 * @property {string} [brand] - Name of the brand associated with the item.
 * @property {string[]} [image] - Array of image URLs representing the item.
 * @property {string} [code] - Unique code for the item, often used for
 *   inventory management.
 * @property {string[]} [l1_category] - Represents the highest or top-tier level
 *   of categorization for the product.
 * @property {string} [size] - Size specification of the product, if applicable.
 * @property {boolean} [can_cancel] - Indicates whether the item can be canceled
 *   after order placement.
 * @property {boolean} [can_return] - Indicates whether the item is eligible for return.
 * @property {string} [branch_url] - URL linking to a specific branch or store
 *   where the item is available.
 * @property {Object} [meta] - Meta data containing additional, dynamic
 *   information about the item.
 * @property {string} [color] - Color specification of the product, if applicable.
 * @property {number} [department_id] - Identifier for the department associated
 *   with the product.
 * @property {string[]} [images] - Array of image URLs representing different
 *   views or angles of the item.
 * @property {string[]} [tags] - Custom labels or keywords associated with the
 *   item for categorization, filtering, or business logic purposes.
 */
/**
 * @typedef Dates
 * @property {string} [delivery_date] - Represents the scheduled date and time
 *   for the delivery of the entity.
 * @property {string} [order_created]
 */
/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_returnable - Indicates whether the bag can be returned
 *   by the customer.
 * @property {boolean} is_active - Specifies if the current status of the bag is
 *   active, affecting its eligibility for return or cancellation.
 * @property {boolean} can_be_cancelled - Indicates if the bag order can be
 *   cancelled by the customer.
 * @property {boolean} enable_tracking - Indicates whether tracking is enabled
 *   for the bag, allowing customers to monitor its status.
 * @property {boolean} is_customer_return_allowed - Specifies if the customer is
 *   permitted to return the bag, based on the return policy.
 */
/**
 * @typedef BagUnit
 * @property {string} [bag_type] - Specifies the type or category of the bag.
 * @property {GSTDetailsData} [gst]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {string} [bag_expiry_date] - Indicates the date and time when the
 *   contents of a bag, or the bag itself, are no longer considered valid or
 *   safe for use. This is particularly relevant in contexts where the bag
 *   contains perishable goods, sensitive materials, or items with a limited shelf life
 * @property {BagStatusHistory[]} [bag_status]
 * @property {BagStatusHistory} current_operational_status
 * @property {Article} [article]
 * @property {ShipmentListingBrand} [brand]
 * @property {AffiliateBagDetails} [affiliate_bag_details]
 * @property {PlatformItem} [item]
 * @property {Object[]} [reasons] - A collection of reasons associated with the
 *   bag, which could pertain to returns, cancellations, or other relevant contexts.
 * @property {number} product_quantity - The total quantity of products
 *   contained within the bag.
 * @property {boolean} [can_return] - Indicates whether the items in the bag are
 *   eligible for return.
 * @property {string} [display_name] - A user-friendly name or label for the
 *   bag, which may be displayed in interfaces.
 * @property {boolean} [can_cancel] - Indicates whether the bag or its contents
 *   can be canceled.
 * @property {string} [size] - Specifies the size of the bag, which may be
 *   relevant for packaging or shipping considerations.
 * @property {number} [line_number] - Represents the line number in an order or
 *   transaction associated with the bag.
 * @property {Object} [meta] - Meta data of the bag contains additional,
 *   potentially dynamic information about the bag.
 * @property {Prices} [prices]
 * @property {OrderingCurrencyPrices} [ordering_currency_prices]
 * @property {Dates} [dates]
 * @property {BagStatusHistory} current_status
 * @property {number} bag_id - Unique identifier for the bag.
 * @property {string} [entity_type] - Specifies the type of entity.
 * @property {BagReturnableCancelableStatus} status
 */
/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} [phone] - Contact number for the fulfilling store,
 *   allowing customers to reach out for inquiries or assistance.
 * @property {string[]} [brand_store_tags] - Tags associated with the brand
 *   store, providing additional categorization or identification of the store's
 *   attributes.
 * @property {string} [pincode] - Postal code for the fulfilling store's
 *   location, essential for identifying the specific area and ensuring accurate
 *   deliveries.
 * @property {Object} [meta] - Meta data of the fulfilling store that contains
 *   additional, potentially dynamic information about the fulfilling store.
 * @property {string} [address] - Comprehensive address details of the
 *   fulfilling store, including all necessary components for locating the store.
 * @property {string} [address1] - The primary address dynamically forms based
 *   on a template. If the template includes a single key, Address1 contains
 *   that data. For templates with multiple keys like Address1 compiles all into
 *   a single formatted string. The address is formed by the template provided
 *   and whichever keys are present in the template are populated as is from
 *   store address fields. Template Example: {address} {address2}_{area}
 *   {state}_{country},
 * @property {string} [display_address] - A user-friendly formatted version of
 *   the store's address for display purposes, making it easier for customers to read.
 * @property {string} [location_type] - Type of location of the fulfilling store.
 * @property {number} id - Unique identifier for the fulfilling store in the database.
 * @property {string} code - A specific code assigned to the store, often used
 *   for internal tracking or categorization purposes.
 * @property {string} [store_email] - Email address for the fulfilling store,
 *   allowing for electronic communication and inquiries.
 * @property {string} [name] - The name of the fulfilling store, which helps
 *   customers identify the store.
 * @property {string} [state] - The state where the fulfilling store is located,
 *   important for regional identification.
 * @property {string} [city] - The city where the fulfilling store is situated,
 *   providing more specific location details.
 * @property {string[]} [tags] - Additional tags associated with the store, used
 *   for categorization and filtering purposes.
 */
/**
 * @typedef Currency
 * @property {string} [currency_code] - This specifies the currency code for all
 *   amounts. The currency_code field will hold a string value representing the
 *   code for the currency in which all monetary amounts are denominated. This
 *   code typically follows the ISO 4217 standard, which uses three-letter
 *   alphabetic codes to define different currencies around the world. For
 *   example, 'USD' for United States Dollar, 'INR' for Indian Rupees.
 * @property {string} [currency_symbol] - The symbol representing the currency.
 */
/**
 * @typedef OrderingCurrency
 * @property {string} [currency_code] - This specifies the currency code for all amounts.
 * @property {string} [currency_name] - The full name of the currency.
 * @property {string} [currency_symbol] - The symbol representing the currency.
 * @property {string} [currency_sub_unit] - The sub-unit of the currency
 */
/**
 * @typedef ConversionRate
 * @property {string} [base] - The base currency code, example 'INR' for Indian
 *   Rupee, against which all conversion rates are calculated. Follows the ISO
 *   4217 standard.This includes the currency's name, its conversion rate
 *   relative to the base currency ('value'), the currency symbol, and any
 *   sub-unit of the currency. This setup not only facilitates currency
 *   conversion but also enriches the data with useful currency descriptors,
 *   enhancing financial operations and analyses.
 * @property {Object} [rates] - An object , where each key is a currency code
 *   and its value is an object containing detailed information about that
 *   currency. This includes the currency's name, its conversion rate relative
 *   to the base currency ('value'), the currency symbol, and any sub-unit of
 *   the currency. This setup not only facilitates currency conversion but also
 *   enriches the data with useful currency descriptors.
 */
/**
 * @typedef CurrencyInfo
 * @property {OrderingCurrency} [ordering_currency]
 * @property {ConversionRate} [conversion_rate]
 */
/**
 * @typedef ShipmentItem
 * @property {string} [order_date] - Denotes the date and time when an order was
 *   placed by the customer. This timestamp is crucial for tracking the order'
 * @property {string} [order_created_ts] - The timestamp indicating when the
 *   order was created in UTC format.
 * @property {OrderingSourceDetails} [ordering_source_details]
 * @property {ShipmentStatus} [shipment_status]
 * @property {UserDataInfo} [user]
 * @property {string} [estimated_sla_time] - The estimated Service Level
 *   Agreement (SLA) time for the shipment.
 * @property {string} [estimated_sla_ts] - The timestamp for the estimated SLA,
 *   providing a specific time for expected delivery in UTC format.
 * @property {Address} [delivery_address]
 * @property {Address} [billing_address]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {boolean} [is_active] - This flag denotes whether the shipment is
 *   active or not.
 * @property {ShipmentListingChannel} [channel]
 * @property {string} [previous_shipment_id] - The ID of any previous shipment
 *   related to this order.
 * @property {string} [forward_end_shipment_id] - The forward_end_shipment_id
 *   represents the shipment ID of the original forward journey shipment. When a
 *   shipment is transitioned to a return journey, the original shipment ID from
 *   the forward journey is recorded in the forward_end_shipment_id field of the
 *   return journey shipment. Even if the return shipment is later split into
 *   multiple shipments, each of these shipments will retain the same
 *   forward_end_shipment_id value that was assigned during the initial return
 *   journey initiation. This ensures that all return shipments can be traced
 *   back to the original forward journey shipment.
 * @property {boolean} [lock_status] - Indicates whether the shipment is
 *   currently locked for processing (true) or not (false).
 * @property {string} [invoice_id] - The ID of the invoice associated with the shipment.
 * @property {Object} [payment_methods] - This field stores a collection of
 *   payment method objects used in a transaction. Each key within this object
 *   represents a unique payment method code (e.g., "COD" for Cash On Delivery),
 *   and its value is an object containing detailed information about that
 *   payment method. This includes metadata such as logos, payment IDs, and
 *   merchant codes, as well as transaction-specific details like the payment
 *   mode, name, amount, and entities responsible for refunds and collections.
 *   The structure is designed to accommodate any number of payment methods,
 *   providing flexibility and comprehensive insights into each transaction's
 *   payment aspect.
 * @property {Object[]} [payment_info] - An array of payment information items
 *   related to the shipment, detailing transaction specifics.
 * @property {string} [status_created_at] - Date time in UTC timezone as per ISO format.
 * @property {string} [status_created_ts] - The timestamp indicating when the
 *   current status was logged, usually in ISO 8601 format.
 * @property {string} [display_name] - A user-friendly name or identifier for
 *   the shipment, useful for display purposes.
 * @property {BagUnit[]} [bags] - An array of bags included in the shipment.
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {Object} [meta] - Meta data of the item contains additional,
 *   potentially dynamic information about the item.
 * @property {string} [payment_mode] - The mode of payment used for the shipment.
 * @property {boolean} [can_process] - Indicates whether the shipment can
 *   currently be processed (true) or not (false).
 * @property {Prices} [prices]
 * @property {OrderingCurrencyPrices} [ordering_currency_prices]
 * @property {string} order_id - The unique identifier of the order for the shipment.
 * @property {string} [ordering_channnel] - The specific channel through which
 *   your order was placed. This field will be phased out after version 2.4.0.
 *   Please use ordering_source instead to ensure accurate order tracking and processing.
 * @property {string} [ordering_source] - Ordering source, to be used to
 *   identify source of order creation.
 * @property {string} [shipment_id] - The unique identifier for the shipment itself.
 * @property {string} [customer_note] - Any special notes or instructions
 *   provided by the customer related to the shipment.
 * @property {number} total_bags - The total number of bags in the shipment.
 * @property {string} shipment_created_at - Timestamp of the shipment created.
 * @property {string} [mode_of_payment] - The method of payment used to create the order.
 * @property {string} [shipment_created_ts] - The timestamp indicating when the
 *   shipment was created.
 * @property {Currency} [currency]
 * @property {CurrencyInfo} [currency_info]
 * @property {boolean} [is_lapa_enabled] - Flag to show NDR actions based on
 *   LAPA (Logistic As Per Actual) plan subscription. If LAPA plan taken, true,
 *   else false.
 * @property {Object} [logistics_meta] - An object storing detailed
 *   logistics-related information, including courier partner details and other
 *   relevant metadata.
 * @property {FulfillmentOption} [fulfillment_option]
 */
/**
 * @typedef ShipmentInternalPlatformViewResponseSchema
 * @property {number} [total_count] - The total number of shipments matching the
 *   query criteria.
 * @property {string} [message] - A message providing additional context about
 *   the response.
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {ShipmentItem[]} [items] - An array of shipment items returned as
 *   part of the response.
 * @property {string} [lane] - The lane associated with the shipment.
 * @property {Page} [page]
 */
/**
 * @typedef TrackingList
 * @property {boolean} [is_passed] - A flag indicating whether the tracking
 *   event has already occurred. If true, it means the event is in the past;
 *   otherwise, it is either current or future.
 * @property {string} text - A descriptive message or status update associated
 *   with the tracking event, providing context about the shipment's progress or
 *   condition.
 * @property {boolean} [is_current] - A flag indicating whether this tracking
 *   event is the most recent update. If true, it reflects the latest status of
 *   the shipment.
 * @property {string} [time] - A timestamp representing when the tracking event
 *   occurred. This helps in understanding the timeline of the shipment's journey.
 * @property {string} [created_ts] - A timestamp indicating when the tracking
 *   information was created or logged in the system. This may differ from the
 *   event time.
 * @property {string} status - The specific status associated with the tracking
 *   event, such as "In Transit," "Delivered," or "Out for Delivery," providing
 *   clarity on the shipment's current phase.
 */
/**
 * @typedef InvoiceInfo
 * @property {string} [store_invoice_id] - A unique identifier for the invoice
 *   generated by the store or platform, used for internal tracking and reference.
 * @property {string} [invoice_url] - A URL linking to the digital version of
 *   the invoice, allowing users to view or download the invoice document online.
 * @property {string} [updated_date] - Denotes the date and time when the
 *   invoice information was modified or updated, providing a record of the most
 *   recent changes.
 * @property {string} [external_invoice_id] - An identifier for the invoice used
 *   by external systems or partners, facilitating cross-system tracking and
 *   reconciliation.
 * @property {string} [label_url] - A URL linking to the shipping label
 *   associated with the invoice, which may be used for shipment tracking and logistics.
 * @property {string} [credit_note_id] - The identifier for any credit note
 *   related to the invoice, used in cases of refunds or adjustments to the
 *   original billing.
 * @property {Object} [links] - An object containing additional links relevant
 *   to the invoice, which may include related documents or resources.
 */
/**
 * @typedef LoyaltyDiscountDetails
 * @property {number} [discount] - Discount amount applied by redeeming loyalty
 *   points while placing the order. Represents the monetary value of loyalty
 *   points redeemed.
 * @property {string} [ownership] - Indicates who bears the cost of the loyalty
 *   discount, such as the seller or the marketplace.
 * @property {boolean} [is_applied] - Specifies whether the loyalty discount has
 *   been applied to the order.
 */
/**
 * @typedef OrderDetailsData
 * @property {string} [order_date] - Represents the date and time when the order
 *   was placed by the customer. This timestamp is essential for tracking the
 *   initiation of the order process, scheduling deliveries, and analyzing order
 *   timelines.
 * @property {string} [created_ts] - A timestamp indicating when the order was
 *   created in the system.
 * @property {Object} [tax_details] - Contains a flexible and comprehensive set
 *   of key-value pairs detailing the tax calculations and classifications
 *   applicable to the order.
 * @property {string} [cod_charges] - The charges associated with Cash on
 *   Delivery (COD) payments.
 * @property {string} [source] - The source from which the order originated.
 * @property {string} fynd_order_id - An unique identifier for the order.
 * @property {string} [affiliate_id] - Affiliate id associated with order.
 * @property {string} [affiliate_order_id] - Affiliate order id associated with order.
 * @property {Object} [ordering_channel_logo] - Represents the logo of the
 *   channel through which the order was placed, encapsulating branding elements
 *   and any relevant styling attributes. This object is designed to be
 *   flexible, allowing for the inclusion of various properties that define how
 *   the logo should be displayed across different platforms or documents
 *   related to the order.
 * @property {string} [order_value] - The total monetary value of the order
 * @property {string} [ordering_channel] - The specific channel through which
 *   your order was placed. This field will be phased out after version 2.4.0.
 *   Please use ordering_source instead to ensure accurate order tracking and processing.
 * @property {string} [ordering_source] - Ordering source, to be used to
 *   identify source of order creation.
 * @property {LoyaltyDiscountDetails} [loyalty_discount_details]
 * @property {Object} [meta] - Meta data of the order contains additional,
 *   potentially dynamic information about the order.
 */
/**
 * @typedef UserDetailsData
 * @property {string} phone
 * @property {string} pincode
 * @property {string} address
 * @property {string} [area]
 * @property {string} [address_type] - The type of the address (e.g., home, office).
 * @property {string} country
 * @property {string} [email]
 * @property {string} [address1] - The primary address dynamically forms based
 *   on a template. If the template includes a single key, Address1 contains
 *   that data. For templates with multiple keys like {address} {address2}
 *   {area} {state} {country}, Address1 compiles all into a single formatted string.
 * @property {string} [landmark]
 * @property {string} state
 * @property {string} name
 * @property {string} city
 * @property {string} [state_code] - The code representing the state or region
 *   within the country, if applicable.
 * @property {string} [country_iso_code] - The country ISO code, a two-character
 *   standard (ISO 3166-1 alpha-2) code, uniquely identifies the country. This
 *   field is used to specify countries in a standardized format, facilitating
 *   global data interoperability. Examples include 'US' for the United States
 *   and 'IN' for India.
 * @property {string} [country_phone_code] - This is the two-digit standard code
 *   representing the dialing prefix for the user's country, associated with the
 *   user's mobile number.
 * @property {string} [display_address]
 */
/**
 * @typedef PhoneDetails
 * @property {number} [country_code] - Identifies the country of the user's
 *   phone number using the two-character standard ISO 3166-1 alpha-2 country
 *   codes. Examples include 'US' for the United States and 'IN' for India.
 * @property {string} [number] - The actual phone number of the user.
 */
/**
 * @typedef ContactDetails
 * @property {PhoneDetails[]} [phone] - An array of phone numbers associated
 *   with the contact.
 * @property {string[]} [emails] - An array of email addresses associated with
 *   the contact.
 */
/**
 * @typedef CompanyDetails
 * @property {string} [company_name] - The name of the company.
 * @property {Object} [address] - It contains the properties for the address of a company.
 * @property {string} [company_cin] - The Corporate Identification Number (CIN)
 *   of the company.
 * @property {number} [company_id] - A unique identifier for the company on the platform.
 * @property {string} [company_gst] - The Goods and Services Tax (GST) number of
 *   the company.
 * @property {ContactDetails} [company_contact]
 */
/**
 * @typedef OrderingStoreDetails
 * @property {string} [phone] - The contact phone number for the ordering store.
 * @property {string} [pincode] - The postal code associated with the ordering
 *   store's location.
 * @property {Object} [meta] - Meta data of the ordering store contains
 *   additional, potentially dynamic information about the ordering store.
 * @property {string} [address] - The complete address of the ordering store.
 * @property {string} [address1] - The primary address dynamically forms based
 *   on a template. If the template includes a single key, Address1 contains
 *   that data. For templates with multiple keys like {address} {address2}
 *   {area} {state} {country}, Address1 compiles all into a single formatted string.
 * @property {string} [display_address] - Formatted address based on the
 *   title-template provided by the partner.
 * @property {number} [id] - A unique identifier for the ordering store.
 * @property {string} [code] - A specific code associated with the ordering store.
 * @property {string} [store_name] - The name of the ordering store.
 * @property {string} [country] - The country in which the ordering store is located.
 * @property {string} [contact_person] - The name of the primary contact person
 *   at the ordering store.
 * @property {string} [state] - The state or region where the ordering store is situated.
 * @property {string} [city] - The city in which the ordering store is located.
 * @property {string} [name] - The name of the ordering store.
 * @property {string} [store_email] - The email address of the ordering store.
 */
/**
 * @typedef DPDetailsData
 * @property {string} [pincode] - The postal code associated with the delivery
 *   partner's location
 * @property {string} [track_url] - A URL that provides access to real-time
 *   tracking information for the shipment.
 * @property {string} [eway_bill_id] - The unique identifier for the e-way bill
 *   generated for the shipment.
 * @property {number} [id] - A unique identifier for the delivery partner details.
 * @property {string} [country] - The country in which the delivery partner operates.
 * @property {string} [awb_no] - The Air Waybill number, a tracking number used
 *   for air freight shipments, allowing for the identification and tracking of
 *   the package in transit.
 * @property {string} [gst_tag] - A tag associated with the Goods and Services
 *   Tax (GST) for the shipment.
 * @property {string} [name] - The name of the delivery partner or service
 *   provider responsible for transporting the shipment.
 */
/**
 * @typedef BuyerDetails
 * @property {string} [ajio_site_id] - The unique identifier for the buyer on
 *   the Ajio platform.
 * @property {number} pincode - The postal code for the buyer's shipping
 *   address, used for delivery location identification.
 * @property {string} address - Provides the comprehensive address details of
 *   the buyer's shipping address.
 * @property {string} gstin - The Goods and Services Tax Identification Number
 *   (GSTIN) of the buyer.
 * @property {string} name - The full name of the buyer, essential for
 *   personalizing communication and delivery.
 * @property {string} state - The name of the state where the buyer's shipping
 *   address is located, important for logistical purposes.
 * @property {string} city - The name of the city where the buyer's shipping
 *   address is located, which helps in identifying delivery zones.
 */
/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid] - A unique identifier (UUID)
 *   associated with the Stormbreaker system, used for tracking and debugging
 *   purposes in the application.
 */
/**
 * @typedef EinvoiceInfo
 * @property {Object} [credit_note] - Specifies the reverse einvoice transaction
 *   create on government portal.
 * @property {Object} [invoice] - It specifies the forward einvoice transaction
 *   created on government portal.
 */
/**
 * @typedef Formatted
 * @property {string} [max] - Represents the maximum formatted value, providing
 *   a limit for the associated data, such as dimensions or weights.
 * @property {string} [min] - Represents the minimum formatted value,
 *   establishing a lower limit for the associated data, ensuring it meets
 *   certain criteria or standards.
 */
/**
 * @typedef ShipmentTags
 * @property {string} [slug] - A URL-friendly string representing the tag, often
 *   used for routing or categorization.
 * @property {string} [entity_type] - Type of entity that the tag is associated
 *   to (bag, shipments).
 * @property {string} [display_text] - A human-readable text representation of
 *   the tag, used for display purposes in user interfaces.
 */
/**
 * @typedef LockData
 * @property {boolean} [locked] - Indicates whether the shipment is currently
 *   locked for processing (true) or not (false).
 * @property {boolean} [mto] - A flag indicating whether the shipment is part of
 *   a multi-modal transport operation.
 * @property {string} [lock_message] - An optional message providing additional
 *   context or information regarding the lock status.
 */
/**
 * @typedef ShipmentTimeStamp
 * @property {number} [max] - Represents the maximum timestamp value, indicating
 *   the latest time relevant to the shipment.
 * @property {number} [min] - Represents the minimum timestamp value, indicating
 *   the earliest time relevant to the shipment.
 */
/**
 * @typedef ShipmentMeta
 * @property {string} [tracking_url] - A URL for tracking the shipment.
 * @property {string} [estimated_delivery_date] - Provides a forecasted date and
 *   time by which the shipment is expected to be delivered to the recipient.
 *   This estimation is crucial for planning purposes, both for the sender in
 *   managing expectations and for the recipient in preparing for receipt.
 * @property {boolean} same_store_available - Indicates whether the shipment is
 *   available for pickup from the same store.
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {Formatted} [formatted]
 * @property {DebugInfo} [debug_info]
 * @property {string} [return_awb_number] - The Air Waybill (AWB) number
 *   associated with a return shipment.
 * @property {boolean} [is_self_ship] - Indicates whether the shipment is a
 *   self-shipped order.
 * @property {string} [box_type] - Box type of the shipment in which the
 *   shipment will be delivered.
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [return_affiliate_shipment_id] - The shipment ID
 *   associated with a return from an affiliate.
 * @property {string} [parent_dp_id] - The unique identifier for the parent
 *   delivery partner.
 * @property {number} [shipment_weight] - The total weight of the shipment.
 * @property {Dimensions} [dimension]
 * @property {Object} [dp_options] - Delivery partner options that are available
 *   to deliver the shipment.
 * @property {boolean} [assign_dp_from_sb] - Indicates whether to assign the
 *   delivery partner from the store’s basket.
 * @property {string} [due_date] - Specifies the deadline by which a particular
 *   action related to the affiliate shipment needs to be completed.
 * @property {string} [store_invoice_updated_date] - Denotes the date and time
 *   when the store's invoice related to this shipment was updated. This
 *   timestamp is vital for tracking changes to billing details, adjustments in
 *   charges, or updates in the invoicing status.
 * @property {string} [forward_affiliate_shipment_id] - The shipment ID for the
 *   forward journey of an affiliate shipment.
 * @property {number} [return_store_node] - The identifier for the store node
 *   involved in the return process.
 * @property {string} [fulfilment_priority_text] - Textual representation of the
 *   fulfillment priority for the shipment.
 * @property {ShipmentTags[]} [shipment_tags] - Tags associated with the
 *   shipment for categorization and filtering.
 * @property {Object} [external] - External metadata related to the shipment.
 * @property {string} [awb_number] - The Air Waybill number associated with the shipment.
 * @property {LockData} [lock_data]
 * @property {string} [order_type] - Defines the specific journey a shipment
 *   will follow based on the application's operational needs and customer
 *   preferences. This field categorizes orders into distinct types, each
 *   associated with a unique processing flow.
 * @property {Object} [ewaybill_info] - Electronic Way Bill details i.e
 *   ewayBillNo, ewayBillDate that are utilized in the transportation of goods.
 * @property {string} [dp_id] - The unique identifier for the delivery partner
 *   associated with the shipment.
 * @property {number} [shipment_volumetric_weight] - The volumetric weight of
 *   the shipment, which may differ from its actual weight.
 * @property {string} [marketplace_store_id] - The unique identifier for the
 *   marketplace store associated with the shipment.
 * @property {Object} [return_details] - An object containing the return details
 *   of the shipment.
 * @property {string} [dp_sort_key] - A sort key for the delivery partner, used
 *   for prioritization.
 * @property {string} [packaging_name] - The name of the packaging used for the shipment.
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {boolean} [auto_trigger_dp_assignment_acf] - Indicates whether
 *   automatic delivery partner assignment is triggered for this shipment.
 * @property {string} [dp_name] - The name of the delivery partner associated
 *   with the shipment.
 * @property {string} [po_number] - The purchase order number associated with
 *   the shipment.
 * @property {number} weight - The weight of the shipment, typically measured in
 *   grams or kilograms.
 * @property {Object} [b2c_buyer_details] - Contains detailed information about
 *   the buyer in a business-to-consumer (B2C) transaction. This object is
 *   designed to capture a wide array of buyer-specific data such as contact
 *   information, shipping address, preferences, and any other relevant details
 *   that enhance the understanding of the buyer's profile and needs.
 * @property {string} [forward_affiliate_order_id] - The order ID for the
 *   forward journey of an affiliate shipment.
 * @property {string} [return_affiliate_order_id] - The order ID for the return
 *   journey of an affiliate shipment.
 * @property {Object} [bag_weight] - This object is designed to accommodate a
 *   range of weight-related information. Denotes the weight of the bag,
 *   potentially including various measurements or related details.
 * @property {string} [refund_to] - Specifies the recipient of any refunds
 *   related to the shipment.
 */
/**
 * @typedef PDFLinks
 * @property {string} invoice_type - The type of invoice issued, such as 'fynd'
 *   or other classifications.
 * @property {string} [label_a6] - URL or path to the A6 size label document.
 * @property {string} [invoice] - URL or path to the main invoice document.
 * @property {string} [label_pos] - URL or path to the POS label document.
 * @property {string} [invoice_a6] - URL or path to the A6 size invoice document.
 * @property {string} [b2b] - URL or path to the B2B document related to the transaction.
 * @property {string} [label] - URL or path to the general label document.
 * @property {string} [label_a4] - URL or path to the A4 size label document.
 * @property {string} label_type - Specifies the type of label associated with a
 *   PDF document,indicating its purpose or content. The label_type helps in
 *   organizing and identifying PDF documents quickly, ensuring that users or
 *   systems can efficiently utilize the correct documents for required actions.
 * @property {string} [invoice_export] - URL or path to the exported invoice document.
 * @property {string} [credit_note_url] - URL or path to the credit note document.
 * @property {string} [delivery_challan_a4] - URL or path to the A4 delivery
 *   challan document.
 * @property {string} [label_export] - URL or path to the exported label document.
 * @property {string} [invoice_a4] - URL or path to the A4 size invoice document.
 * @property {string} [invoice_pos] - URL or path to the POS invoice document.
 * @property {string} [po_invoice] - URL or path to the purchase order invoice document.
 */
/**
 * @typedef AffiliateDetails
 * @property {ShipmentMeta} shipment_meta
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_shipment_id - The shipment ID specific to this affiliate.
 * @property {string} [company_affiliate_tag] - An optional tag representing the
 *   company's affiliate association.
 * @property {string} affiliate_order_id - The order ID associated with the
 *   affiliate shipment.
 * @property {PDFLinks} [pdf_links]
 * @property {AffiliateConfig} [config]
 * @property {string} [affiliate_id] - The unique identifier for the affiliate.
 * @property {string} affiliate_store_id - The unique identifier for the
 *   affiliate's store.
 * @property {string} affiliate_bag_id - The unique identifier for the affiliate's bag.
 * @property {string} [id] - The unique identifier for the affiliate.
 */
/**
 * @typedef BagConfigs
 * @property {boolean} is_returnable - Indicates whether the bag is eligible for
 *   return by the customer.
 * @property {boolean} allow_force_return - A flag that determines if a forced
 *   return can be initiated for the bag.
 * @property {boolean} is_active - A flag indicating whether the bag is active or not.
 * @property {boolean} can_be_cancelled - A flag that determines if the bag can
 *   be cancelled.
 * @property {boolean} enable_tracking - A flag that determines if shipment
 *   tracking is enabled for the bag.
 * @property {boolean} is_customer_return_allowed - A flag that determines if
 *   customer return is allowed for the bag.
 * @property {boolean} [is_bundle_item] - Flag to indicate whether the bag is
 *   part of a bundle.
 * @property {BundleDetails} [bundle_details]
 */
/**
 * @typedef OrderBagArticle
 * @property {Object} [identifiers] - Details of Identifiers associated with the article.
 * @property {ReturnConfig} [return_config]
 * @property {string} [uid] - A unique identifier for the article within the order bag.
 * @property {string} [size] - The size of the article, which may be relevant
 *   for clothing.
 * @property {string[]} [tags] - An array of tags associated with the article.
 * @property {Object} [_custom_json] - A custom JSON object containing
 *   additional details or configurations specific to the article.
 */
/**
 * @typedef OrderBrandName
 * @property {string} [logo] - A URL or path to the logo image associated with the brand.
 * @property {number} [company] - A unique identifier for the company associated
 *   with the brand.
 * @property {number} id - A unique identifier for the brand within the system.
 * @property {string} [created_on] - Timestamp when the brand of the order was created.
 * @property {string} [brand_name] - The name of the brand associated with the order.
 * @property {string} [modified_on] - Timestamp when the brand of the order was modified.
 */
/**
 * @typedef AffiliateBagsDetails
 * @property {string} [affiliate_bag_id] - A unique identifier for the affiliate bag.
 * @property {string} [coupon_code] - A unique code provided to customers for
 *   redeeming special offers or discounts on their purchases.
 * @property {AffiliateMeta} [affiliate_meta]
 */
/**
 * @typedef BagPaymentMethods
 * @property {string} [mode] - The payment mode used for the transaction.
 * @property {number} [amount] - The total amount associated with the payment method
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
 * @property {Object} [cart_conditions] - Specifies the rules that must be met
 *   at the cart level for any purchasing rules or promotional discounts to be
 *   applied. Specifically, it includes criteria such as the total quantity of
 *   items in the cart. For instance, a rule might require that the cart
 *   contains at least one item for the promotion to apply. This setup allows
 *   for the dynamic application of discounts or special buying rules based on
 *   cart conditions.
 */
/**
 * @typedef PriceMinMax
 * @property {number} [min] - The minimum price value. Represents the lowest
 *   price in the price range.
 * @property {number} [max] - The maximum price value. Represents the highest
 *   price in the price range.
 */
/**
 * @typedef ItemPriceDetails
 * @property {PriceMinMax} [marked]
 * @property {PriceMinMax} [effective]
 * @property {string} [currency] - The currency in which the prices details
 *   associated with the item is specified.
 */
/**
 * @typedef FreeGiftItems
 * @property {string} [item_slug] - A unique identifier for the item, typically
 *   used in URLs for SEO purposes.
 * @property {string} [item_name] - The name of the item.
 * @property {ItemPriceDetails} [item_price_details]
 * @property {string} [item_brand_name] - The brand name of the item.
 * @property {number} [item_id] - A unique numerical identifier for the item.
 * @property {string[]} [item_images_url] - A list of URLs pointing to images of the item.
 */
/**
 * @typedef AppliedFreeArticles
 * @property {string} [article_id] - A unique identifier for the article to
 *   which the free gift is applied.
 * @property {Object} [free_gift_item_details] - Details of the free gift item
 *   associated with the article, including relevant attributes like name,
 *   description, and any other specifications.
 * @property {string} [parent_item_identifier] - An identifier for the parent
 *   item with which the free gift is associated, typically used to link the
 *   free gift to the original purchased item.
 * @property {number} [quantity] - The quantity of the free gift items applied
 *   to the article.
 */
/**
 * @typedef AppliedPromos
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
 *   sale are included with the purchase. - item_based_discount- Specific
 *   percentage discounts on selected items based on their position after
 *   sorting by price in descending order.
 * @property {string} [promotion_name] - The name of the promotional campaign or offer.
 * @property {DiscountRules[]} [discount_rules] - A list of rules that define
 *   the conditions under which discounts are applied.
 * @property {number} [amount] - The total monetary value of the discount or promotion.
 * @property {number} [article_quantity] - The quantity of articles required to
 *   qualify for the promotion.
 * @property {BuyRules[]} [buy_rules] - A list of rules that outline the
 *   conditions for purchasing items under the promotion.
 * @property {string} [promo_id] - A unique identifier for the promotion.
 * @property {boolean} [mrp_promotion] - A flag that designates whether or not
 *   the promotion is an MRP (manufacturer's reduced price) promotion.
 * @property {AppliedFreeArticles[]} [applied_free_articles] - A list of
 *   articles that are eligible for free under the promotion.
 */
/**
 * @typedef CurrentStatus
 * @property {number} [store_id] - A unique identifier for the store associated
 *   with the shipment.
 * @property {string} [delivery_awb_number] - The Air Waybill (AWB) number for
 *   the delivery.
 * @property {boolean} [kafka_sync] - A flag indicating whether the current
 *   status is synchronized with Kafka or not.
 * @property {number} [delivery_partner_id] - A unique identifier for the
 *   delivery partner responsible for handling the shipment.
 * @property {string} [state_type] - Serves as a key identifier to differentiate
 *   among the diverse types of states a shipment can undergo throughout its journey.
 *
 *   - 'operational': Pertains to states that involve the physical handling and
 *       movement of the shipment, such as packing, in transit, and delivery.
 *   - 'financial': Relates to states associated with the payment, invoicing, and
 *       any monetary transactions or obligations tied to the shipment.
 *   - 'logistics': Encompasses states that deal with the broader logistical
 *       planning and coordination necessary for the shipment's journey,
 *       including route optimization and carrier selection.
 *
 * @property {number} [state_id] - A unique identifier for the specific state of
 *   the shipment.
 * @property {number} id - A unique identifier for the current status entry
 * @property {string} [created_at] - Denotes the date and time when the bag
 *   status was created.
 * @property {string} [created_ts] - A timestamp indicating when the status was created
 * @property {string} [shipment_id] - A unique identifier for the shipment.
 * @property {string} [updated_at] - The date and time when the current status
 *   was last updated.
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [bag_id] - A unique identifier for the bag associated with
 *   the shipment.
 * @property {string} [status] - A descriptive label representing the current
 *   status of the shipment.
 */
/**
 * @typedef OrderBags
 * @property {GSTDetailsData} [gst_details]
 * @property {BagStatusHistory[]} [bag_status]
 * @property {Object} [parent_promo_bags] - An object containing details of
 *   parent promotional bags.
 * @property {SellerQcDetails} [seller_qc_details]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {BagConfigs} [bag_configs]
 * @property {string} [seller_identifier]
 * @property {Address} [delivery_address]
 * @property {OrderBagArticle} [article]
 * @property {OrderBrandName} [brand]
 * @property {string} [group_id]
 * @property {AffiliateBagsDetails} [affiliate_bag_details]
 * @property {PlatformItem} [item]
 * @property {BagPaymentMethods[]} [payment_methods] - An array detailing the
 *   various payment methods utilized for the transaction. Each item within this
 *   array represents a distinct method of payment. It encapsulates the details
 *   of various payment methods available for completing a transaction. It
 *   includes comprehensive information such as the payment mode, amount,
 *   transaction status, and identifiers for each payment method.
 * @property {BagPaymentMethods[]} [payment_info]
 * @property {number} [quantity] - The number of items contained in the bag.
 * @property {string} [identifier] - A unique identifier for the bag.
 * @property {boolean} [can_return] - Indicates whether the items in the bag are
 *   eligible for return by the customer.
 * @property {boolean} [can_cancel] - Indicates whether the bag is eligible for
 *   cancellation by the customer.
 * @property {string} [display_name] - A user-friendly name for the bag.
 * @property {number} [line_number] - A unique identifier for each line item in a bag.
 * @property {Object} [meta] - Meta data of the bags contains additional,
 *   potentially dynamic information about the bags.
 * @property {AppliedPromos[]} [applied_promos]
 * @property {Prices} [prices]
 * @property {PriceAdjustmentCharge[]} [charges]
 * @property {OrderingCurrencyPrices} [ordering_currency_prices]
 * @property {CurrentStatus} [current_status]
 * @property {number} bag_id
 * @property {string} [entity_type] - Type of entity that the tag is associated
 *   to (bag, shipments).
 * @property {boolean} [is_parent] - A flag indicating whether the current bag
 *   is a parent entity or not.
 */
/**
 * @typedef FulfillingStore
 * @property {string} phone - The contact phone number for the fulfilling store.
 * @property {string} pincode - The postal code for the fulfilling store's location.
 * @property {Object} meta - Meta data of the fulfilling store contains
 *   additional, potentially dynamic information about the fulfilling store.
 * @property {string} address - The complete address of the fulfilling store.
 * @property {string} [address1] - The primary address dynamically forms based
 *   on a template. If the template includes a single key, Address1 contains
 *   that data. For templates with multiple keys like {address} {address2}
 *   {area} {state} {country}, Address1 compiles all into a single formatted string.
 * @property {string} [display_address] - Display friendly version of the
 *   Fulfilment Store Address.
 * @property {number} id - The unique id or identifier of a fulfilment store.
 * @property {string} code - The unique code of the fulfilment store.
 * @property {string} store_name - The unique name of a fulfillment store.
 * @property {string} country - The name of the country associated with a
 *   specific fulfilment store.
 * @property {string} fulfillment_channel - The channel through which
 *   fulfillment is managed.
 * @property {string} contact_person - The name of the contact person associated
 *   with a fulfilling store.
 * @property {string} state - The state or region where the fulfilling store is located.
 * @property {string} city - The city in which the fulfilling store is situated.
 * @property {string} [store_email] - The email address of the fulfilling store.
 */
/**
 * @typedef ShipmentPayments
 * @property {string} [mode] - The payment mode used for the shipment.
 * @property {string} [logo] - A URL or path to the logo associated with the
 *   payment method.
 * @property {string} [source] - The source or origin of the payment
 */
/**
 * @typedef ShipmentStatusData
 * @property {Object} [meta] - It contains the additional properties related to
 *   shipment status transition like Kafka_emission_status, user_name, etc.
 *   Additionally it is dynamic.
 * @property {string[]} [bag_list] - The list of bags that are in this shipment
 *   status transition.
 * @property {number} [id] - Unique identifier for a shipment status.
 * @property {string} [created_at] - Denotes the date and time when the
 *   transition was created.
 * @property {string} [created_ts] - A timestamp indicating when the status
 *   entry was created.
 * @property {string} [shipment_id] - The unique identifier for the shipment.
 * @property {string} [status] - The current status of the shipment.
 * @property {string} [display_name] - A user-friendly name or description of
 *   the current shipment status.
 * @property {string} [current_shipment_status] - Reflects the most recent
 *   status of the shipment.
 * @property {string} [status_created_at] - Denotes the date and time when the
 *   transition of the status of the shipment was created.
 */
/**
 * @typedef ShipmentLockDetails
 * @property {boolean} [lock_status] - Represents the lock status of the shipment.
 * @property {string} [lock_message] - A user-friendly message that explains the
 *   reason for locking the shipment.
 * @property {Object} [action_to_status] - This field maps potential actions
 *   (e.g., downloading an invoice or label) to their corresponding shipment
 *   lock statuses, indicating which operations are allowed depending on the
 *   shipment's current lock status. When an action is set to 'lock', it means
 *   no transitions or updates to the shipment's status can be performed until
 *   the specified action is completed. For instance, if 'download_invoice' is
 *   in a 'lock' state, the shipment cannot undergo any status transitions until
 *   the invoice is either downloaded. Similarly, 'download_label' being in a
 *   'lock' state prevents any shipment status transitions until a new label is
 *   downloaded.
 */
/**
 * @typedef FulfillmentOption
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {boolean} [is_default]
 */
/**
 * @typedef PlatformShipment
 * @property {FulfillmentOption} [fulfillment_option]
 * @property {string} [picked_date] - Indicates the date and time when the
 *   shipment was physically picked up from the sender or the origin point by
 *   the delivery service. This timestamp is crucial for tracking the
 *   commencement of the shipment's journey.
 * @property {TrackingList[]} [tracking_list] - A list of tracking updates
 *   associated with the shipment.
 * @property {InvoiceInfo} [invoice]
 * @property {string} [shipment_status] - Represents the current status of the shipment.
 * @property {GSTDetailsData} [gst_details]
 * @property {OrderStatusData} [order_status]
 * @property {Object} [delivery_slot] - Represents a specific time window
 *   allocated for the delivery of an order or shipment.
 * @property {OrderDetailsData} [order]
 * @property {UserDataInfo} [user]
 * @property {boolean} [enable_dp_tracking] - A flag indicating whether the
 *   delivery partner tracking feature is enabled for this shipment.
 * @property {string} [custom_message] - A custom message or note associated
 *   with the shipment.
 * @property {string} [estimated_sla_time] - The estimated service level
 *   agreement (SLA) time for the shipment, indicating expected delivery timelines.
 * @property {string} [estimated_sla_ts] - A timestamp indicating when the
 *   estimated SLA time is expected to be met.
 * @property {boolean} [can_update_dimension] - Indicates whether the dimensions
 *   of the shipment can be updated after creation.
 * @property {string[]} [shipment_images] - A list of URLs for images related to
 *   the shipment.
 * @property {Object} [delivery_details] - A list of details about the delivery
 *   of an order.
 * @property {Object} [billing_details] - Information regarding the billing for
 *   the shipment, including billing address and payment method.
 * @property {string} [forward_shipment_id] - The ID of the parent forward
 *   journey shipment.
 * @property {number} [fulfilment_priority] - The fulfilment priority, with
 *   lower numbers indicating a higher priority.
 * @property {ShipmentLockDetails} [shipment_details]
 * @property {Object[]} [custom_meta] - An array of custom metadata objects that
 *   may contain additional, dynamic information specific to the shipment.
 * @property {number} [shipment_quantity] - The total quantity of items included
 *   in the shipment.
 * @property {CompanyDetails} [company_details]
 * @property {OrderingStoreDetails} [ordering_store]
 * @property {string} [order_platform] - The platform used to place the order.
 * @property {boolean} [lock_status] - Indicates whether the shipment is
 *   currently locked or not for modifications or updates.
 * @property {string} [platform_logo] - The URL of the ordering platform's logo.
 * @property {string} [user_agent] - Information about the user agent string,
 *   typically containing details about the browser or application used to place
 *   the order.
 * @property {DPDetailsData} [dp_details]
 * @property {string} [invoice_id] - The unique identifier for the invoice
 *   associated with the shipment.
 * @property {Object} [payment_methods] - This field stores a collection of
 *   payment method objects used in a transaction. Each key within this object
 *   represents a unique payment method code (e.g., "COD" for Cash On Delivery),
 *   and its value is an object containing detailed information about that
 *   payment method. The structure is designed to accommodate any number of
 *   payment methods,providing flexibility and comprehensive insights into each
 *   transaction's payment aspect.
 * @property {Object[]} [payment_info] - An array of objects containing detailed
 *   information about the payments made for the shipment.
 * @property {Object} [coupon] - Coupon data of the shipment which denotes if
 *   coupon is applied, coupon code, coupon amount, coupon title and coupon message.
 * @property {AffiliateDetails} [affiliate_details]
 * @property {string} [priority_text] - Text that indicates the priority level
 *   of the shipment.
 * @property {BagStatusHistory[]} [bag_status_history] - A history of status
 *   changes for bags associated with the shipment.
 * @property {boolean} [is_dp_assign_enabled] - A flag indicating whether
 *   delivery partner assignment features are enabled for the shipment.
 * @property {OrderBags[]} [bags] - A list of bags included in the shipment
 * @property {boolean} [dp_assignment] - Indicates whether a delivery partner
 *   has been assigned to the shipment.
 * @property {number} [total_items] - The total number of items contained within
 *   the shipment,
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object} [meta] - Meta data of the shipment contains additional,
 *   potentially dynamic information about the shipment.
 * @property {Object} [pdf_links] - PDF Links associated with the shipment.
 * @property {string} [payment_mode] - The mode of payment used for the shipment.
 * @property {string} [packaging_type] - Defines the type of packaging used for
 *   the product, encompassing materials, design, and form factors.
 * @property {string} [journey_type] - It is a type being used to represent the
 *   journey of shipment through the performed status transition. Forward
 *   Journey: The forward journey encompasses all the stages of shipping,
 *   including order placement, packing, dispatch, in-transit updates, and
 *   delivery. Return Journey: Contrary to the forward journey, the return
 *   journey involves the process of sending items back from the customer to the
 *   original sender or a designated return facility.
 * @property {Prices} [prices]
 * @property {PriceAdjustmentCharge[]} [charges] - An array of charges applied
 *   to the shipment.
 * @property {OrderingCurrencyPrices} [ordering_currency_prices]
 * @property {string} [vertical] - The business vertical or category to which
 *   the shipment belongs.
 * @property {string} shipment_id - A unique identifier for the shipment.
 * @property {ShipmentPayments} [payments]
 * @property {string} [operational_status] - The operational status of the shipment.
 * @property {ShipmentStatusData} [status]
 * @property {number} [total_bags] - The total number of bags in the shipment.
 * @property {string} [shipment_created_at] - Denotes the date and time when the
 *   shipment was created.
 * @property {string} [shipment_created_ts] - A timestamp representing when the
 *   shipment was created.
 * @property {Currency} [currency]
 * @property {CurrencyInfo} [currency_info]
 * @property {string} [previous_shipment_id] - The ID of the previous shipment
 *   in the sequence.
 * @property {number} [shipment_update_time] - A numerical representation of the
 *   last update time for the shipment
 * @property {Address} [rto_address]
 * @property {string} [credit_note_id] - The identifier for any credit note
 *   issued for the shipment
 * @property {boolean} [is_self_ship] - A flag indicating whether the shipment
 *   is being self-shipped by the seller or vendor.
 * @property {string} [mode_of_payment] - The specific mode of payment used for
 *   the transaction
 * @property {boolean} [is_lapa_enabled] - Flag to show NDR actions based on
 *   LAPA (Logistic As Per Actual) plan subscription. If LAPA plan taken, true,
 *   else false.
 * @property {string} [forward_end_shipment_id] - The forward_end_shipment_id
 *   represents the shipment ID of the original forward journey shipment. When a
 *   shipment is transitioned to a return journey, the original shipment ID from
 *   the forward journey is recorded in the forward_end_shipment_id field of the
 *   return journey shipment. Even if the return shipment is later split into
 *   multiple shipments, each of these shipments will retain the same
 *   forward_end_shipment_id value that was assigned during the initial return
 *   journey initiation. This ensures that all return shipments can be traced
 *   back to the original forward journey shipment.
 * @property {Object} [logistics_meta] - An object storing detailed
 *   logistics-related information, including courier partner details and other
 *   relevant metadata.
 * @property {PackageSchema[]} [packages] - Array of packages to be created or
 *   updated for the shipment. At least two packages are required for MPS functionality.
 */
/**
 * @typedef ShipmentInfoResponseSchema
 * @property {string} [message] - A descriptive message providing additional
 *   information about the API response.
 * @property {boolean} success - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {PlatformShipment[]} [shipments] - A list of platform shipment
 *   objects, containing information related to a shipment.
 */
/**
 * @typedef TaxDetails
 * @property {string} [pan_no]
 * @property {string} [gstin]
 */
/**
 * @typedef PaymentInfoData
 * @property {Object} [meta] - It contains the additional properties related to
 *   shipment status transition like Kafka_emission_status, user_name, etc.
 *   Additionally it is dynamic.
 * @property {string} [mode] - Information about the payment source. For eg, NB_ICICI.
 * @property {string} [name] - The name of the payment method (e.g., "Credit
 *   Card", "PayPal").
 * @property {number} [amount] - Amount paid using this payment method.
 * @property {boolean} [collected] - Indicates whether this payment method has
 *   been collected or not.
 * @property {string} [refund_by] - Payment refund by for the customer and
 *   seller (e.g fynd, seller).
 * @property {string} [collect_by] - Payment collected by for the customer and
 *   seller (e.g fynd, seller).
 * @property {string} [display_name] - The name of the payment method as it
 *   should be displayed to the user.
 * @property {string} [merchant_transaction_id] - A unique identifier associated
 *   with the payment transaction, such as TR669796C0012CF31BBD. This ID helps
 *   track and reference the specific transaction within the merchant's system.
 */
/**
 * @typedef OrderData
 * @property {string} [ordering_channel] - The specific channel through which
 *   your order was placed. This field will be phased out after version 2.4.0.
 *   Please use ordering_source instead to ensure accurate order tracking and processing.
 * @property {string} [ordering_source] - Ordering source, to be used to
 *   identify source of order creation.
 * @property {OrderingSourceDetails} [ordering_source_details]
 * @property {string} order_date - Specifies the exact date and time when the
 *   order was placed by the customer, serving as a key timestamp for the
 *   initiation of the order processing cycle.
 * @property {string} [created_ts]
 * @property {TaxDetails} [tax_details]
 * @property {Object} [meta] - Meta data of the order contains additional,
 *   potentially dynamic information about the order.
 * @property {string} fynd_order_id
 * @property {Prices} [prices]
 * @property {PriceAdjustmentCharge[]} [charges]
 * @property {OrderingCurrencyPrices} [ordering_currency_prices]
 * @property {Object} [payment_methods] - This field stores a collection of
 *   payment method objects used in a transaction. Each key within this object
 *   represents a unique payment method code (e.g., "COD" for Cash On Delivery),
 *   and its value is an object containing detailed information about that
 *   payment method. This includes metadata such as logos, payment IDs, and
 *   merchant codes, as well as transaction-specific details like the payment
 *   mode, name, amount, and entities responsible for refunds and collections.
 *   The structure is designed to accommodate any number of payment methods,
 *   providing flexibility and comprehensive insights into each transaction's
 *   payment aspect.
 * @property {PaymentInfoData[]} [payment_info]
 * @property {string} [affiliate_order_id] - External Order id
 * @property {string} [affiliate_id] - Unique identifier for the sales channel.
 * @property {string} [source] - Specifies the origin from from which the order
 *   is created, including mobile applications, web interfaces, social media
 *   integrations, or external APIs.
 * @property {CurrencySchema} [currency]
 * @property {LoyaltyDiscountDetails} [loyalty_discount_details]
 */
/**
 * @typedef OrderDetailsResponseSchema
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
 * @typedef LaneConfigResponseSchema
 * @property {SuperLane[]} [super_lanes]
 */
/**
 * @typedef PlatformBreakupValues
 * @property {string} [value] - Represents the value associated with a specific
 *   component of the price breakdown.
 * @property {string} [name] - Represents the name associated with a specific
 *   component of the price breakdown.
 * @property {string} [display] - A user-friendly display name for the
 *   component, intended for presentation in user interfaces.
 */
/**
 * @typedef PlatformChannel
 * @property {string} [logo] - Represents the logo of the channel through which
 *   the order was placed.
 * @property {string} [name] - Represents the name of the channel through which
 *   the order was placed
 */
/**
 * @typedef PlatformOrderItems
 * @property {PlatformBreakupValues[]} [breakup_values] - The breakup_values
 *   array contains detailed breakdowns of different pricing components related
 *   to an order. Each item in the array is a reference to the
 *   PlatformBreakupValues schema, which provides specific details about each
 *   component such as loyalty points, coupon discounts, raw pricing data, and
 *   display information.
 * @property {number} [total_order_value]
 * @property {Object} [meta] - It contains the additional properties related to
 *   order transition like Kafka_emission_status, user_name, etc. Additionally
 *   it is dynamic, potentially.
 * @property {string} [order_created_time] - The Date and time when the order was created.
 * @property {string} [order_created_ts] - The timestamp indicating when the
 *   order was created.
 * @property {string} [ordering_source] - Ordering source, to be used to
 *   identify source of order creation.
 * @property {OrderingSourceDetails} [ordering_source_details]
 * @property {string} [payment_mode] - The payment mode used for the order.
 * @property {PlatformShipment[]} [shipments] - An array of shipment items
 *   returned as part of the order.
 * @property {string} [order_id] - A unique identifier associated with the order.
 * @property {PlatformChannel} [channel]
 * @property {UserDataInfo} [user_info]
 * @property {number} [order_value]
 * @property {Currency} [currency]
 * @property {CurrencyInfo} [currency_info]
 * @property {Prices} [prices]
 * @property {OrderingCurrencyPrices} [ordering_currency_prices]
 * @property {LoyaltyDiscountDetails} [loyalty_discount_details]
 */
/**
 * @typedef OrderListingResponseSchema
 * @property {number} [total_count] - The total number of orders matching the
 *   query criteria.
 * @property {string} [message] - A message providing additional context about
 *   the response.
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 * @property {PlatformOrderItems[]} [items] - An array of shipment items
 *   returned as part of the response.
 * @property {string} [lane] - The lane associated with the order.
 * @property {Page} [page]
 */
/**
 * @typedef PlatformTrack
 * @property {string} [last_location_recieved_at] - The current geographic
 *   location of the courier partner.
 * @property {Object} [meta] - A field to store additional metadata related to
 *   the courier partner's operations or the shipment.
 * @property {string} [raw_status] - The current status of the shipment as
 *   updated by the courier partner.
 * @property {string} [updated_at] - Human readable timestamp when the status
 *   was last updated by the courier partner.
 * @property {string} [updated_time] - The timestamp when the status was last
 *   updated by the courier partner.
 * @property {string} [awb] - The Air Waybill (AWB) number associated with the
 *   shipment, used for tracking the parcel in transit.
 * @property {string} [shipment_type] - Indicates the type of journey the shipment.
 * @property {string} [status] - The operational status of the shipment.
 * @property {string} [reason] - Any additional remarks or comments from the
 *   courier partner regarding the shipment.
 * @property {string} [account_name] - The name of the courier partner
 *   responsible for the shipment.
 */
/**
 * @typedef PlatformShipmentTrack
 * @property {Object} [meta] - Meta data of the shipment contains additional,
 *   potentially dynamic information about the shipment.
 * @property {PlatformTrack[]} [results] - A list of tracking details at various status.
 */
/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [action_centre]
 * @property {FiltersInfo[]} [unfulfilled]
 * @property {FiltersInfo[]} [filters]
 * @property {FiltersInfo[]} [processed]
 * @property {Object} [applied_filters] - Specifies the set of filters currently
 *   applied , search result, or view, detailing the criteria used to narrow
 *   down or sort the information presented. This object is designed to be
 *   highly flexible, allowing for the inclusion of various filter types such as
 *   date ranges, categories, status flags, or custom search terms.
 * @property {Object} [page] - An object representing a page with pagination details.
 */
/**
 * @typedef FiltersResponseSchema
 * @property {AdvanceFilterInfo} [advance]
 * @property {FiltersInfo} [global_1]
 * @property {AdvanceFilterInfo} [advance_filter]
 * @property {FiltersInfo[]} [global_filter]
 */
/**
 * @typedef URL
 * @property {string} [url]
 */
/**
 * @typedef FileResponseSchema
 * @property {string} [file_name] - Name of the file
 * @property {URL} [cdn]
 */
/**
 * @typedef BulkActionTemplate
 * @property {string} [value]
 * @property {string} [text]
 */
/**
 * @typedef BulkActionTemplateResponseSchema
 * @property {BulkActionTemplate[]} [template_x_slug] - Allowed bulk action template slugs
 */
/**
 * @typedef PlatformShipmentReasonsResponseSchema
 * @property {Reason[]} [reasons] - An array of reasons associated with the platform.
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 */
/**
 * @typedef ShipmentResponseReasons
 * @property {number} [reason_id]
 * @property {string} [reason]
 */
/**
 * @typedef ShipmentReasonsResponseSchema
 * @property {ShipmentResponseReasons[]} reasons
 * @property {string} message
 * @property {boolean} success
 */
/**
 * @typedef StoreAddress
 * @property {string} phone
 * @property {string} created_at - Denotes the date and time when the transition
 *   of the store address was created.
 * @property {string} contact_person
 * @property {number} pincode
 * @property {string} address_type - The type of the address (e.g., home, office).
 * @property {string} address1 - The primary address dynamically forms based on
 *   a template. If the template includes a single key, Address1 contains that
 *   data. For templates with multiple keys like {address} {address2} {area}
 *   {state} {country}, Address1 compiles all into a single formatted string.
 * @property {string} [display_address]
 * @property {string} [version]
 * @property {string} address_category - Category or classification of the
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
 * @property {string} city
 * @property {number} longitude
 * @property {string} [address2]
 * @property {string} [area]
 * @property {string} [email]
 * @property {string} updated_at - Denotes the date and time when any
 *   modifications were made to the store.
 * @property {string} country_code - Uniquely identifies the country of the
 *   store addressds_type using the two-character standard ISO 3166-1 alpha-2
 *   country codes. Examples include 'US' for the United States and 'IN' for India.
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
 * @property {string} type - Type of the document.
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
 * @property {Object} [additional_contact_details] - Provides a flexible
 *   structure for storing extra contact information related to the store.
 * @property {Object[]} [timing]
 * @property {string[]} [notification_emails]
 * @property {string} [gst_number]
 * @property {Object} [ewaybill_portal_details] - Contains essential information
 *   and settings related to the e-Way Bill portal, which is used for generating
 *   and managing e-waybills for the transportation of goods under specific tax
 *   regulations.
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {StoreGstCredentials} gst_credentials
 * @property {string} stage
 * @property {Object} [product_return_config] - Product return configuration
 *   details for the location. It can include details like on_same_store
 *   denoting whether return can be initiated at the same store.
 * @property {StoreDocuments} [documents]
 * @property {string} display_name
 */
/**
 * @typedef Store
 * @property {string} phone
 * @property {boolean} [is_active]
 * @property {number} company_id
 * @property {number} [alohomora_user_id]
 * @property {string} created_at - Denotes the date and time when the store was created.
 * @property {string} contact_person
 * @property {string} store_email
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} pincode
 * @property {string} [mall_area]
 * @property {string} [vat_no]
 * @property {string} address1 - The primary address dynamically forms based on
 *   a template. If the template includes a single key, Address1 contains that
 *   data. For templates with multiple keys like {address} {address2} {area}
 *   {state} {country}, Address1 compiles all into a single formatted string.
 * @property {string} [display_address]
 * @property {string} [store_active_from]
 * @property {string} city
 * @property {string} name
 * @property {number} [longitude]
 * @property {string[]} [brand_store_tags]
 * @property {string} [order_integration_id]
 * @property {number} [parent_store_id]
 * @property {string} location_type - Type of location of the fulfilling store.
 * @property {string} [code]
 * @property {string} fulfillment_channel
 * @property {string} [updated_at] - Denotes the date and time when any
 *   modifications were made to the store.
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
 * @property {string} [start_date] - Denotes the start date and time when the
 *   brand was created.
 * @property {string} [company]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} [script_last_ran]
 * @property {string} [pickup_location]
 * @property {string} [created_on] - Timestamp when the brand was created.
 * @property {string} brand_name
 * @property {number} [brand_id]
 * @property {string} [modified_on] - Timestamp when the brand of the order was modified.
 * @property {number} [id]
 */
/**
 * @typedef Item
 * @property {Object} attributes - A dictionary of product attributes
 * @property {number} brand_id
 * @property {string} slug_key
 * @property {string} [webstore_product_url]
 * @property {number} [l3_category] - Represents the product's classification at
 *   the third level in the e-commerce platform's category hierarchy, using an
 *   integer identifier. This finer level of categorization allows for precise
 *   product organization and easier navigation for customers seeking specific items.
 * @property {string} [l3_category_name] - This key specifies the name of the
 *   third-level category under which the product is listed, offering a more
 *   detailed classification within the e-commerce platform's hierarchy.
 * @property {string} [last_updated_at] - Denotes the date and time when the
 *   item was updated.
 * @property {string} name
 * @property {string[]} [l2_category] - The l2_category field represents the
 *   second level of categorization for items within an e-commerce platform's
 *   hierarchy. This allows for classification beyond the top-tier (level 1)
 *   categories, helping customers to narrow down their search and find products
 * @property {string} brand
 * @property {string[]} image
 * @property {string} [code]
 * @property {number} [l1_category_id] - The unique identifier of the defines
 *   the top-tier categories to which a product belongs within the e-commerce
 *   platform's hierarchy.
 * @property {number} item_id
 * @property {string[]} [l1_category] - This array defines the top-tier
 *   categories to which a product belongs within the e-commerce platform's hierarchy.
 * @property {string} [gender]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} size
 * @property {string} [branch_url]
 * @property {Object} [meta] - Meta data of the item contains additional,
 *   potentially dynamic information about the item.
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {number} [l2_category_id]
 */
/**
 * @typedef ArticleStatusDetails
 * @property {Object} [status] - Captures comprehensive status information for
 *   an article. Each status type, such as 'cancelled_fynd', contains objects
 *   keyed by unique identifiers (UIDs). These objects detail the specific
 *   status, including associated bag IDs with their quantities, total quantity
 *   affected, and reasons for the status if applicable. This structure allows
 *   for tracking multiple status conditions and their details for a single article.
 */
/**
 * @typedef Company
 * @property {string} [pan_no]
 * @property {string} [created_on] - Timestamp when the company was created.
 * @property {number} [id]
 * @property {string} [company_name]
 * @property {string} [gst_number]
 * @property {string} [company_type] - The type of company, which can be one of
 *   the following: - `distributor`: Distributor - `franchise`: Franchise -
 *   `mbo`: MBO (Managed Business Operations) - `manufacturer-owner`: Owner/Manufacturer
 * @property {string} [modified_on] - Timestamp when the company was modified.
 * @property {Object} [meta] - Meta data of the company contains additional,
 *   potentially dynamic information about the company.
 * @property {string} [business_type] - The type of business structure, which
 *   can be one of the following: - `Private`: Private Limited Company -
 *   `LLP/Partnership`: Limited Liability Partnership or Partnership -
 *   `HUF/Proprietorship`: Hindu Undivided Family or Proprietorship.
 * @property {string} [agreement_start_date] - Specifies the official beginning
 *   date and time of an agreement or contract associated with the company.
 */
/**
 * @typedef ShipmentGstDetails
 * @property {number} [value_of_good]
 * @property {number} [gst_fee]
 * @property {number} [brand_calculated_amount]
 * @property {number} [tax_collected_at_source]
 * @property {string} [gstin_code] - A GST Number (Goods and Services Tax
 *   Identification Number, often abbreviated as GSTIN) is a unique identifier
 *   assigned to a business or individual registered under the Goods and
 *   Services Tax (GST) system in countries like India. The GST number is
 *   essential for businesses to comply with tax regulations and for the
 *   government to track tax payments and returns.
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
 * @property {string} [updated_date] - Specifies the date and time when the
 *   invoice was last updated.
 * @property {string} [store_invoice_id]
 * @property {string} [invoice_url]
 * @property {string} [label_url]
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
 * @property {Object} [meta] - Meta data of the user details contains
 *   additional, potentially dynamic information about the user details.
 */
/**
 * @typedef WeightData
 * @property {number} [value]
 * @property {string} [unit]
 */
/**
 * @typedef BagDetails
 * @property {number} [bag_update_time] - The timestamp indicating when the
 *   bag's information was last updated
 * @property {string} [id] - A unique identifier for the bag record within the system.
 * @property {number} [bag_id] - A unique identifier specifically for the bag
 *   itself, used for tracking purposes.
 * @property {AffiliateBagDetails} [affiliate_bag_details]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {Object[]} [applied_promos] - A list of promotional discounts that
 *   were applied to the bag's contents.
 * @property {Article} [article]
 * @property {ArticleStatusDetails} [article_details]
 * @property {BagStatusHistory[]} [bag_status] - An array of current status
 *   records associated with the bag, reflecting its lifecycle stages (e.g.,
 *   pending, placed, delivered).
 * @property {BagStatusHistory[]} [bag_status_history] - An array of current
 *   status records associated with the bag, reflecting its lifecycle stages
 *   (e.g., pending, placed, delivered).
 * @property {Brand} [brand]
 * @property {Company} [company]
 * @property {BagStatusHistory} [current_operational_status]
 * @property {BagStatusHistory} [current_status]
 * @property {Dates} [dates]
 * @property {Address} [delivery_address]
 * @property {DeliverySlotDetails} [delivery_slot]
 * @property {string} [display_name] - Name of the bag intended for user display.
 * @property {Object} [dp_details] - Additional information about the delivery
 *   partner (DP) handling the bag.
 * @property {Object} [einvoice_info]
 * @property {string} [entity_type] - Type of entity that the tag is associated
 *   to (bag, shipments).
 * @property {Object} [fallback_user] - Details of the fallback user associated
 *   with the bag .
 * @property {FinancialBreakup[]} [financial_breakup] - A breakdown of the
 *   financial aspects associated with the bag, such as product prices, taxes,
 *   discounts, and total cost.
 * @property {Store} [fulfilling_store]
 * @property {Object} [fyndstore_emp] - Fynd store employee details.
 * @property {GSTDetailsData} [gst_details]
 * @property {InvoiceDetails} [invoice]
 * @property {Item} [item]
 * @property {string} [journey_type] - It is a type being used to represent the
 *   journey of shipment through the performed status transition. Forward
 *   Journey: The forward journey encompasses all the stages of shipping,
 *   including order placement, packing, dispatch, in-transit updates, and
 *   delivery. Return Journey: Contrary to the forward journey, the return
 *   journey involves the process of sending items back from the customer to the
 *   original sender or a designated return facility.
 * @property {number} [line_number] - A unique identifying number associated
 *   with the bag. It is generated sequentially as bags are created.
 * @property {boolean} [lock_status] - Indicates whether the bag is locked from
 *   further changes (true/false). A locked bag cannot undergo modifications
 *   until unlocked.
 * @property {string} [manifest_id] - The identifier-assigned bags receive after
 *   they are manifest (thereby creating a shipment in conjunction with the
 *   allocated manifest).
 * @property {Object} [meta] - Meta data of the bag details contains additional,
 *   potentially dynamic information about the bag details.
 * @property {string} [mode_of_payment] - This field reflects the payment method
 *   used in the transaction for a particular bag.
 * @property {number} [no_of_bags_order] - The total number of bags in this bag's order.
 * @property {string} [operational_status] - The particular state a bag occupies
 *   in the shipment life-cycle.
 * @property {OrderDetails} [order]
 * @property {string} [order_integration_id] - A unique identifier used for
 *   integrating this order with external systems or services.
 * @property {string} [order_type] - Defines the specific journey a shipment
 *   will follow based on the application's operational needs and customer
 *   preferences. This field categorizes orders into distinct types, each
 *   associated with a unique processing flow. For example:
 *
 *   - "HomeDelivery": The order goes through all the steps needed for delivery,
 *       from being packed to arriving at the customer’s address.
 *   - "PickAtStore": The order is prepared for pickup at the store, skipping
 *       shipping steps to make it ready faster for the customer to collect in person.
 *   - "Digital": This order type likely refers to orders that involve digital goods
 *       or services, such as software, digital subscriptions, e-books, online
 *       courses, or any other item that can be delivered electronically.
 *
 * @property {number} [order_value] - An estimated value of the order at the
 *   time of placement or sale.
 * @property {Store} [ordering_store]
 * @property {Object} [parent_promo_bags] - An object containing details of
 *   parent promotional bags.
 * @property {Object} [payment_methods] - This field stores a collection of
 *   payment method objects used in a transaction. Each key within this object
 *   represents a unique payment method code (e.g., "COD" for Cash On Delivery),
 *   and its value is an object containing detailed information about that
 *   payment method. The structure is designed to accommodate any number of
 *   payment methods,providing flexibility and comprehensive insights into each
 *   transaction's payment aspect.
 * @property {string} [payment_type] - The Specific type of payment.
 * @property {Object} [payments] - Defines allowed payment details for the item.
 * @property {Prices} [prices]
 * @property {PriceAdjustmentCharge[]} [charges] - Defines any additional
 *   charges for the product.
 * @property {boolean} [qc_required] - Indicates whether quality check is
 *   required for the product.
 * @property {number} [quantity] - The quantity of the product.
 * @property {Object[]} [reasons] - Information about why the Bag's
 *   item/products are being cancelled or returned or exchanged. This keys
 *   within this object represent unique
 * @property {boolean} [restore_coupon] - Indicates whether voucher/wallet
 *   points can be reapplied to the product.
 * @property {Object} [restore_promos] - Provides a flexible structure for
 *   storing information about promotion details or offers that are eligible for
 *   restoration. This can include details such as promo codes, descriptions of
 *   the offers, eligibility criteria, restoration conditions, and any other
 *   relevant data that supports the reactivation of previously paused or
 *   expired promotions.
 * @property {Address} [rto_address]
 * @property {string} [seller_identifier] - A unique identifier assigned by the
 *   seller to represent a specific transaction in their order processing system.
 * @property {Shipment} [shipment]
 * @property {ShipmentDetails} [shipment_details]
 * @property {string} [shipment_id] - Unique identifier of the shipment.
 * @property {ShipmentGstDetails} [shipment_gst]
 * @property {ShipmentStatusData} [shipment_status]
 * @property {ShipmentStatusData[]} [shipment_status_history] - Status history
 *   of the shipment item in the order.
 * @property {BagReturnableCancelableStatus} [status]
 * @property {string[]} [tags] - A list of tags or labels associated with the
 *   bag, which might be used for filtering, sorting, or categorizing purposes.
 * @property {number} [total_shipment_bags] - The total number of shipped bags.
 * @property {number} [total_shipments_in_order] - The total number of shipments
 *   in the order.
 * @property {string} [transaction_type] - Specifies the type of the transaction
 *   being processed. This classification helps in distinguishing between
 *   different operational processes and allows for tailored handling of each
 *   transaction type. For example, a 'shipment' transaction type refers to
 *   operations related to the shipping of goods.
 * @property {string} [type] - The type of the bag.
 * @property {string} [updated_at] - The date and time when the bag was last updated.
 * @property {UserDetails} [user]
 * @property {WeightData} [weight]
 * @property {number[]} [original_bag_list] - Specifies the list of integers
 *   that specify the bag number
 * @property {string} [identifier] - The unique identifier for the bag.
 */
/**
 * @typedef BagDetailsPlatformResponseSchema
 * @property {number} [status_code] - Response status_code.
 * @property {BagDetails} [data]
 */
/**
 * @typedef BagsPage
 * @property {number} item_total
 * @property {boolean} has_next
 * @property {string} page_type - The type of the page.
 * @property {number} current
 * @property {number} size
 */
/**
 * @typedef BagData
 * @property {BagDetails[]} [items]
 * @property {BagsPage} [page]
 */
/**
 * @typedef GetBagsPlatformResponseSchema
 * @property {number} [status_code] - Response status_code.
 * @property {BagData} [data]
 */
/**
 * @typedef GeneratePosOrderReceiptResponseSchema
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
 * @typedef AllowedTemplatesResponseSchema
 * @property {Templates[]} [template_x_slug]
 */
/**
 * @typedef TemplateDownloadResponseSchema
 * @property {string} [file_name]
 * @property {string} [url]
 */
/**
 * @typedef Error
 * @property {string} [message] - A message describing the error that occurred.
 * @property {boolean} [success] - Indicates whether the API call was successful
 *   (true) or not (false).
 */
/**
 * @typedef BulkFailedResponseSchema
 * @property {boolean} [status]
 * @property {string} [error]
 */
declare class OrderPlatformModel {
}
declare namespace OrderPlatformModel {
    export { PackageSchema, UpdatePackingErrorResponseSchema, ErrorResponseSchema, StoreReassign, StoreReassignResponseSchema, LockManagerEntities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponseSchema, UpdateShipmentLockResponseSchema, AnnouncementResponseSchema, AnnouncementsResponseSchema, BaseResponseSchema, ErrorDetail, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, OrderItemDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, OrderDataUpdates, SellerQCDetailsSchema, EntityStatusDataSchema, DataUpdatesFiltersSchema, EntityStatusDataUpdates, DataUpdates, TransitionComments, RefundModeTransitionData, ShipmentsRequestSchema, UpdatedAddressSchema, UpdateAddressRequestBody, StatuesRequestSchema, UpdateShipmentStatusRequestSchema, ShipmentsResponseSchema, DPConfiguration, PaymentConfig, LockStateMessage, CreateOrderConfig, StatuesResponseSchema, UpdateShipmentStatusResponseBody, OrderUser, OrderPriority, ArticleDetails, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, UserData, OrderInfo, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderResponseSchema, DispatchManifest, SuccessResponseSchema, ActionInfo, GetActionsResponseSchema, HistoryReason, RefundInformation, HistoryMeta, HistoryDict, ShipmentHistoryResponseSchema, PostHistoryFilters, PostHistoryData, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, SendSmsResponseSchema, Dimension, UpdatePackagingDimensionsPayload, UpdatePackagingDimensionsResponseSchema, Tax, AmountSchema, Charge, LineItem, ProcessingDates, Tag, ProcessAfterConfig, SystemMessages, Shipment, GeoLocationSchema, ShippingInfo, BillingInfo, UserInfo, TaxInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponseSchema, UploadManifestConsent, CreateChannelConfigResponseSchema, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, BagStateTransitionMap, RoleBaseStateTransitionMapping, FetchCreditBalanceRequestPayload, CreditBalanceInfo, FetchCreditBalanceResponsePayload, RefundModeConfigRequestPayload, RefundOption, RefundModeFormat, RefundModeInfo, RefundModeConfigResponsePayload, AttachUserOtpData, AttachUserInfo, AttachOrderUser, AttachOrderUserResponseSchema, SendUserMobileOTP, PointBlankOtpData, SendUserMobileOtpResponseSchema, VerifyOtpData, VerifyMobileOTP, VerifyOtpResponseData, VerifyOtpResponseSchema, BulkReportsFiltersSchema, BulkReportsDownloadRequestSchema, BulkReportsDownloadResponseSchema, APIFailedResponseSchema, BulkStateTransistionRequestSchema, BulkStateTransistionResponseSchema, ShipmentActionInfo, BulkActionListingData, BulkListinPage, BulkListingResponseSchema, JobDetailsData, JobDetailsResponseSchema, JobFailedResponseSchema, ManifestPageInfo, ManifestItemDetails, ManifestShipmentListing, DateRange, Filters, ManifestFile, ManifestMediaUpdate, PDFMeta, TotalShipmentPricesCount, ManifestMeta, Manifest, ManifestList, ManifestDetails, FiltersRequestSchema, ProcessManifest, ProcessManifestResponseSchema, ProcessManifestItemResponseSchema, FilterInfoOption, FiltersInfo, ManifestFiltersResponseSchema, PageDetails, EInvoiceIrnDetails, EInvoiceErrorDetails, EInvoiceDetails, EInvoiceResponseData, EInvoiceRetry, EInvoiceRetryResponseSchema, EInvoiceErrorInfo, EInvoiceErrorResponseData, EInvoiceErrorResponseSchema, EInvoiceErrorResponseDetails, EInvoiceRetryShipmentData, CourierPartnerTrackingDetails, CourierPartnerTrackingResponseSchema, LogsChannelDetails, LogPaymentDetails, FailedOrdersItem, FailedOrderLogs, FailedOrderLogDetails, GenerateInvoiceIDResponseData, GenerateInvoiceIDErrorResponseData, GenerateInvoiceIDRequestSchema, GenerateInvoiceIDResponseSchema, GenerateInvoiceIDErrorResponseSchema, ManifestResponseSchema, ProcessManifestRequestSchema, ManifestItems, ManifestErrorResponseSchema, ConfigData, ConfigUpdatedResponseSchema, FlagData, Flags, Filter, PostHook, PreHook, Config, TransitionConfigCondition, TransitionConfigData, TransitionConfigPayload, RuleListRequestSchema, RuleErrorResponseSchema, RMAPageInfo, RuleAction, QuestionSetItem, Reason, Conditions, RuleItem, RuleError, RuleListResponseSchema, UpdateShipmentPaymentMode, CommonErrorResponseSchema, ExceptionErrorResponseSchema, ProductSchema, PaymentMethodSchema, ActionDetailSchema, PaymentMetaDataSchema, PaymentMetaLogoURLSchema, FulfillmentOptionSchema, PaymentMethodGatewaySchema, SubModeOfPaymentSchema, PaymentMethodModeOfPaymentSchema, PaymentMethodTransactionPartySchema, LineItemPaymentMethodSchema, PackagesSchema, PackagesResponseSchema, PackagesErrorResponseSchema, BundleDetailsSchema, LineItemMonetaryValuesSchema, DimensionSchema, GiftDetailsSchema, CPRiderDetailsSchema, CPAreaCodeSchema, CPTatToDeliverTheShipmentSchema, CPOptionsSchema, CourierPartnerDetailsSchema, TaxDetailsSchema, PromiseDetailsSchema, CustomerPickupSlotSchema, DpPickupSlotSchema, OrderFulfillmentTimelineSchema, LineItemSchema, CreateOrderShipmentSchema, OrderingCurrencySchema, ConversionRateSchema, CurrencySchema, CouponOwnershipSchema, CouponSchema, BillingDetailsSchema, CPConfigurationSchema, ShippingDetailsSchema, UserDetailsSchema, LifecycleMessageSchema, CreateOrderRequestSchema, Page, OrderingSourceConfig, OrderingSourceFeature, ListOrderingSources, OrderingSourceSummary, CreateAccount, Account, AccountsList, PackageProduct, ValidationError, BagReasonMeta, QuestionSet, BagReasons, ShipmentBagReasons, ShipmentStatus, OrderingSourceDetails, UserDataInfo, BundleReturnConfig, BundleDetails, Address, ShipmentListingChannel, Prices, ChargeDistributionSchema, ChargeDistributionLogic, ChargeAmountCurrency, ChargeAmount, PriceAdjustmentCharge, OrderingCurrencyPrices, Identifier, TaxComponent, SellerQcDetails, FinancialBreakup, GSTDetailsData, BagStateMapper, BagStatusHistory, Dimensions, ReturnConfig, Weight, Article, ShipmentListingBrand, ReplacementDetails, AffiliateMeta, AffiliateBagDetails, PlatformArticleAttributes, PlatformItem, Dates, BagReturnableCancelableStatus, BagUnit, ShipmentItemFulFillingStore, Currency, OrderingCurrency, ConversionRate, CurrencyInfo, ShipmentItem, ShipmentInternalPlatformViewResponseSchema, TrackingList, InvoiceInfo, LoyaltyDiscountDetails, OrderDetailsData, UserDetailsData, PhoneDetails, ContactDetails, CompanyDetails, OrderingStoreDetails, DPDetailsData, BuyerDetails, DebugInfo, EinvoiceInfo, Formatted, ShipmentTags, LockData, ShipmentTimeStamp, ShipmentMeta, PDFLinks, AffiliateDetails, BagConfigs, OrderBagArticle, OrderBrandName, AffiliateBagsDetails, BagPaymentMethods, DiscountRules, ItemCriterias, BuyRules, PriceMinMax, ItemPriceDetails, FreeGiftItems, AppliedFreeArticles, AppliedPromos, CurrentStatus, OrderBags, FulfillingStore, ShipmentPayments, ShipmentStatusData, ShipmentLockDetails, FulfillmentOption, PlatformShipment, ShipmentInfoResponseSchema, TaxDetails, PaymentInfoData, OrderData, OrderDetailsResponseSchema, SubLane, SuperLane, LaneConfigResponseSchema, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponseSchema, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponseSchema, URL, FileResponseSchema, BulkActionTemplate, BulkActionTemplateResponseSchema, PlatformShipmentReasonsResponseSchema, ShipmentResponseReasons, ShipmentReasonsResponseSchema, StoreAddress, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, StoreMeta, Store, Brand, Item, ArticleStatusDetails, Company, ShipmentGstDetails, DeliverySlotDetails, InvoiceDetails, UserDetails, WeightData, BagDetails, BagDetailsPlatformResponseSchema, BagsPage, BagData, GetBagsPlatformResponseSchema, GeneratePosOrderReceiptResponseSchema, Templates, AllowedTemplatesResponseSchema, TemplateDownloadResponseSchema, Error, BulkFailedResponseSchema };
}
/** @returns {PackageSchema} */
declare function PackageSchema(): PackageSchema;
type PackageSchema = {
    /**
     * - Unique identifier of the physical package. If not
     * provided, the system will auto-generate a unique ID with format 'PK'
     * followed by a 10-digit number.
     */
    id?: string;
    /**
     * - Optional reference to a predefined
     * packaging configuration or template used for creating physical packages.
     */
    packaging_id?: string;
    /**
     * - A human-readable name or label for the package,
     * used for identification and organizational purposes.
     */
    name?: string;
    /**
     * - The size category of the package (e.g., small,
     * medium, large). Used for logistics and carrier selection.
     */
    size?: string;
    /**
     * - The type or category of packaging
     * material used (e.g., Box, Paper Bag, Poly Mailer, Envelope).
     */
    package_type?: string;
    /**
     * - The length dimension of the package in
     * centimeters. Used for volumetric weight calculation and carrier requirements.
     */
    length?: number;
    /**
     * - The width dimension of the package in
     * centimeters. Used for volumetric weight calculation and carrier requirements.
     */
    width?: number;
    /**
     * - The height dimension of the package in
     * centimeters. Used for volumetric weight calculation and carrier requirements.
     */
    height?: number;
    /**
     * - The actual weight of the package in kilograms,
     * including packaging materials and products.
     */
    weight?: number;
    /**
     * - The acceptable error rate or tolerance for
     * the package weight, expressed as a decimal (e.g., 0.02 for 2% tolerance).
     */
    error_rate?: number;
    /**
     * - The volumetric weight of the
     * package calculated based on dimensions, used for shipping cost calculation
     * when greater than actual weight.
     */
    package_vol_weight?: number;
    /**
     * - The maximum weight capacity that this
     * package can handle, used for validation and logistics planning.
     */
    max_weight?: number;
    /**
     * - Air Waybill number assigned by the courier partner
     * for tracking this specific package throughout the delivery process.
     */
    awb?: string;
    /**
     * - Dictionary containing PDF document links
     * related to this package (labels, invoices, etc.). Always returns an object
     * - empty object {} if no links are present, populated object if links exist.
     * Users can update values by providing new key-value pairs.
     */
    pdf_links?: any;
    /**
     * - List of products contained within
     * this package. Each product specifies its line number, quantity, and identifier.
     */
    products?: PackageProduct[];
};
/** @returns {UpdatePackingErrorResponseSchema} */
declare function UpdatePackingErrorResponseSchema(): UpdatePackingErrorResponseSchema;
type UpdatePackingErrorResponseSchema = {
    /**
     * - Represents the HTTP status code of the API response.
     */
    status?: number;
    /**
     * - Descriptive error message that occurred.
     */
    error?: string;
};
/** @returns {ErrorResponseSchema} */
declare function ErrorResponseSchema(): ErrorResponseSchema;
type ErrorResponseSchema = {
    /**
     * - Represents the HTTP status code of the API response.
     */
    status?: number;
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - A message describing the error that occurred.
     */
    message: string;
    /**
     * - This field is intended to store the error
     * trace of the error that occurred.For example, "Exception Trace" represents
     * a placeholder for the actual stack trace data that would be captured when
     * an exception occurs."Internal Server Error" indicates a generic error
     * message suggesting that the server encountered an unexpected condition that
     * prevented it from fulfilling the request.
     */
    error_trace?: string;
    error?: string;
};
/** @returns {StoreReassign} */
declare function StoreReassign(): StoreReassign;
type StoreReassign = {
    /**
     * - Unique id of the store.
     */
    store_id: number;
    /**
     * - Identifier for the bag associated with the reassignment.
     */
    bag_id?: number;
    /**
     * - Identifier for the affiliate order
     * id associated with the reassignment.
     */
    affiliate_order_id?: string;
    /**
     * - Identifier for the affiliate id
     * associated with the reassignment.
     */
    affiliate_id?: string;
    /**
     * - Identifier for the item associated with the
     * reassignment.
     */
    item_id?: string;
    /**
     * - Identifier for the fynd order id
     * associated with the reassignment.
     */
    fynd_order_id?: string;
    /**
     * - Identifier for the set of items associated with
     * the reassignment.
     */
    set_id?: string;
    /**
     * - Identifiers for bags associated with
     * the reassignment.
     */
    affiliate_bag_id?: string;
    /**
     * - List of reason ids for the reassignment.
     */
    reason_ids?: number[];
    /**
     * - Identifier for the article id
     * associated with the reassignment.
     */
    mongo_article_id?: string;
};
/** @returns {StoreReassignResponseSchema} */
declare function StoreReassignResponseSchema(): StoreReassignResponseSchema;
type StoreReassignResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - A descriptive message providing additional
     * information about the API response.
     */
    message?: string;
};
/** @returns {LockManagerEntities} */
declare function LockManagerEntities(): LockManagerEntities;
type LockManagerEntities = {
    /**
     * - Shipment ID if 'entity_type': shipments | Bag Id if
     * 'entity_type': bags
     */
    id?: string;
    /**
     * - External identifier for the order
     * id associated with shipment.
     */
    affiliate_order_id?: string;
    /**
     * - Identifier for application associated
     * with the shipment.
     */
    affiliate_id?: string;
    /**
     * - A descriptive reason text for lock/unlock
     * action of a shipment/bag.
     */
    reason_text: string;
    /**
     * - External identifier for the bag id
     * associated with orders/shipment.
     */
    affiliate_bag_id?: string;
    /**
     * - External identifier for the
     * shipment id associated with orders/shipment.
     */
    affiliate_shipment_id?: string;
};
/** @returns {UpdateShipmentLockPayload} */
declare function UpdateShipmentLockPayload(): UpdateShipmentLockPayload;
type UpdateShipmentLockPayload = {
    /**
     * - Specifies the type of entity being locked or unlocked.
     */
    entity_type: string;
    /**
     * - Indicates the action to be performed on the entity.
     */
    action: string;
    /**
     * - Defines the current lock state or lock type
     * of a shipment, dictating the types of transitions or actions that can be
     * performed next.The action_type can be one of the following - complete-
     * Complete lock specifies that no action can be performed for that shipment.
     * - operational- The shipment is in an operational phase, during which only
     * financial-related actions are permissible. - financial- The shipment is in
     * a financial phase, allowing for operational actions to be taken.
     */
    action_type: string;
    /**
     * - List of entities to be locked or unlocked
     */
    entities: LockManagerEntities[];
    /**
     * - Indicates whether tasks
     * should resume automatically after unlocking, such as DP assignment task and
     * invoicing task.
     */
    resume_tasks_after_unlock?: boolean;
    /**
     * - Specifies whether the shipment
     * should be locked automatically after a transition occurs.
     */
    lock_after_transition?: boolean;
    /**
     * - Specifies whether the
     * shipment should be unlocked before a transition occurs.
     */
    unlock_before_transition?: boolean;
};
/** @returns {OriginalFilter} */
declare function OriginalFilter(): OriginalFilter;
type OriginalFilter = {
    /**
     * - Affiliate Shipment ID
     */
    affiliate_shipment_id?: string;
    /**
     * - Affiliate ID
     */
    affiliate_id?: string;
};
/** @returns {Bags} */
declare function Bags(): Bags;
type Bags = {
    /**
     * - Bag Id
     */
    bag_id?: number;
    /**
     * - Application/Affiliate Bag ID,
     * Required if the ID is missing
     */
    affiliate_bag_id?: string;
    /**
     * - Is Bag Locked
     */
    is_locked?: boolean;
    /**
     * - Application/Affiliate Order ID,
     * Required if the ID is missing
     */
    affiliate_order_id?: string;
};
/** @returns {CheckResponseSchema} */
declare function CheckResponseSchema(): CheckResponseSchema;
type CheckResponseSchema = {
    /**
     * - Shipment ID
     */
    shipment_id?: string;
    /**
     * - Status
     */
    status?: string;
    /**
     * - Is Bag Locked
     */
    is_bag_locked?: boolean;
    /**
     * - Affiliate ID
     */
    affiliate_id?: string;
    /**
     * - Filter
     */
    original_filter?: OriginalFilter;
    /**
     * - Is Shipment Locked
     */
    is_shipment_locked?: boolean;
    /**
     * - Lock Status: Expected lock_status:
     * [complete, operational, financial]
     */
    lock_status?: string;
    /**
     * - Affiliate Shipment ID
     */
    affiliate_shipment_id?: string;
    bags?: Bags[];
};
/** @returns {UpdateShipmentLockResponseSchema} */
declare function UpdateShipmentLockResponseSchema(): UpdateShipmentLockResponseSchema;
type UpdateShipmentLockResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - A descriptive message providing additional
     * information about the API response, such as success confirmation or error details.
     */
    message?: string;
    /**
     * - An array containing the
     * lock status of entities if the action performed was a 'check'. Each item in
     * the array represents the status of a specific entity.
     */
    check_response?: CheckResponseSchema[];
};
/** @returns {AnnouncementResponseSchema} */
declare function AnnouncementResponseSchema(): AnnouncementResponseSchema;
type AnnouncementResponseSchema = {
    /**
     * - The end date and time for the event,
     * indicating when the issue is expected to be resolved.
     */
    to_datetime?: string;
    /**
     * - A unique identifier for the announcement.
     */
    id: number;
    /**
     * - A brief description providing additional
     * context about the announcement.
     */
    description?: string;
    /**
     * - The name of the platform associated with
     * this announcement.
     */
    platform_name?: string;
    /**
     * - The start date and time of the
     * announcement going live.
     */
    from_datetime?: string;
    /**
     * - The unique identifier associated with the
     * platform. In this case, it appears to be the same as the platform name,
     * which might indicate a specific category or type.
     */
    platform_id?: string;
    /**
     * - The title summarizing the nature of the announcement.
     */
    title?: string;
    /**
     * - A unique identifier for the company related
     * to this announcement.
     */
    company_id?: number;
    /**
     * - A URL linking to the logo image associated
     * with the platform or company.
     */
    logo_url?: string;
    /**
     * - The timestamp of when this announcement was
     * created, providing context for its age and relevance.
     */
    created_at?: string;
};
/** @returns {AnnouncementsResponseSchema} */
declare function AnnouncementsResponseSchema(): AnnouncementsResponseSchema;
type AnnouncementsResponseSchema = {
    announcements?: AnnouncementResponseSchema[];
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - Represents the HTTP status code of the API response
     */
    status?: number;
    /**
     * - A descriptive message providing additional
     * information about the API response.
     */
    message?: string;
};
/** @returns {BaseResponseSchema} */
declare function BaseResponseSchema(): BaseResponseSchema;
type BaseResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - A descriptive message providing additional
     * information about the API response.
     */
    message?: string;
};
/** @returns {ErrorDetail} */
declare function ErrorDetail(): ErrorDetail;
type ErrorDetail = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - A descriptive message providing additional
     * information about the API response.
     */
    message?: string;
};
/** @returns {ProductsReasonsFilters} */
declare function ProductsReasonsFilters(): ProductsReasonsFilters;
type ProductsReasonsFilters = {
    /**
     * - The line number for the product or bag,
     * which helps identify the specific item in a list or order.
     */
    line_number?: number;
    /**
     * - The unique article or item identifier for
     * the product or bag.
     */
    identifier?: string;
    /**
     * - The quantity of the product or bag being referenced.
     */
    quantity?: number;
};
/** @returns {ProductsReasonsData} */
declare function ProductsReasonsData(): ProductsReasonsData;
type ProductsReasonsData = {
    /**
     * - A descriptive text providing the reason
     * for the action or status associated with the product or bag.
     */
    reason_text?: string;
    /**
     * - A unique identifier for the reason, used to
     * reference specific reasons in the system.
     */
    reason_id?: number;
};
/** @returns {ProductsReasons} */
declare function ProductsReasons(): ProductsReasons;
type ProductsReasons = {
    /**
     * - A list of filters applied to
     * specify which products the reasons pertain to.
     */
    filters?: ProductsReasonsFilters[];
    data?: ProductsReasonsData;
};
/** @returns {EntityReasonData} */
declare function EntityReasonData(): EntityReasonData;
type EntityReasonData = {
    /**
     * - A descriptive text providing the reason
     * for the action or status associated with the product or bag.
     */
    reason_text?: string;
    /**
     * - A unique identifier for the reason, used to
     * reference specific reasons in the system.
     */
    reason_id?: number;
};
/** @returns {EntitiesReasons} */
declare function EntitiesReasons(): EntitiesReasons;
type EntitiesReasons = {
    /**
     * - A list of filters applied to specify which
     * entities the reasons pertain to.
     */
    filters?: any[];
    data?: EntityReasonData;
};
/** @returns {ReasonsData} */
declare function ReasonsData(): ReasonsData;
type ReasonsData = {
    /**
     * - A list of reasons specifically
     * related to products involved in the shipment.
     */
    products?: ProductsReasons[];
    /**
     * - A list of reasons specifically
     * related to shipment.
     */
    entities?: EntitiesReasons[];
};
/** @returns {Products} */
declare function Products(): Products;
type Products = {
    /**
     * - The line number for the product or bag,
     * which helps identify the specific item in a list or order.
     */
    line_number?: number;
    /**
     * - The unique article or item identifier for
     * the product or bag.
     */
    identifier?: string;
    /**
     * - The quantity of the product or bag being referenced.
     */
    quantity?: number;
};
/** @returns {OrderItemDataUpdates} */
declare function OrderItemDataUpdates(): OrderItemDataUpdates;
type OrderItemDataUpdates = {
    /**
     * - Contains the specific data for updating shipment bags data.
     */
    data?: any;
};
/** @returns {ProductsDataUpdatesFilters} */
declare function ProductsDataUpdatesFilters(): ProductsDataUpdatesFilters;
type ProductsDataUpdatesFilters = {
    /**
     * - Represents the specific line item within a
     * bag, used to identify and reference a particular product in a list. This
     * helps in pinpointing the exact item being updated or processed.
     */
    line_number?: number;
    /**
     * - A unique string that serves as the
     * product's identifier, such as a SKU, barcode, or another distinct code.
     * This ensures the product is correctly identified and distinguished from
     * other items in the system.
     */
    identifier?: string;
    /**
     * - The quantity of the product or item,
     * specified as an integer. This indicates how many units of the product are
     * being referenced or processed, such as the number of items in a bag or shipment.
     */
    quantity?: number;
};
/** @returns {ProductsDataUpdates} */
declare function ProductsDataUpdates(): ProductsDataUpdates;
type ProductsDataUpdates = {
    /**
     * - A list of filters
     * applied to specify which products or bags are targeted for updates.
     */
    filters?: ProductsDataUpdatesFilters[];
    /**
     * - Contains the specific data for updating the
     * products or bags.
     */
    data?: any;
};
/** @returns {EntitiesDataUpdates} */
declare function EntitiesDataUpdates(): EntitiesDataUpdates;
type EntitiesDataUpdates = {
    /**
     * - A list of filters used to specify which
     * shipments are targeted for updates.
     */
    filters?: any[];
    /**
     * - Encapsulates a dynamic set of updates and
     * modifications applied to the entity.
     */
    data?: any;
};
/** @returns {OrderDataUpdates} */
declare function OrderDataUpdates(): OrderDataUpdates;
type OrderDataUpdates = {
    /**
     * - Encapsulates a dynamic set of updates and
     * modifications applied to the order.
     */
    data?: any;
};
/** @returns {SellerQCDetailsSchema} */
declare function SellerQCDetailsSchema(): SellerQCDetailsSchema;
type SellerQCDetailsSchema = {
    /**
     * - Line_number of the product/bag.
     */
    line_number: number;
    /**
     * - The number of units marked as good during
     * the seller QC process for the given line_number/bag item.
     */
    good_quantity: number;
    /**
     * - The number of units marked as bad during
     * the seller QC process for the given line_number/bag item.
     */
    bad_quantity: number;
};
/** @returns {EntityStatusDataSchema} */
declare function EntityStatusDataSchema(): EntityStatusDataSchema;
type EntityStatusDataSchema = {
    /**
     * - An array of QC
     * results provided by the seller to indicate the condition of returned items
     * (e.g., good vs. bad quantity) for each line item. Pass this field such that
     * if inventory-related data is included, it will be updated accordingly
     * during the transition.
     */
    seller_qc_details?: SellerQCDetailsSchema[];
};
/** @returns {DataUpdatesFiltersSchema} */
declare function DataUpdatesFiltersSchema(): DataUpdatesFiltersSchema;
type DataUpdatesFiltersSchema = {
    /**
     * - Line number of the product/bag.
     */
    line_number?: number;
    /**
     * - Quantity of the line number item.
     */
    quantity?: number;
    /**
     * - Seller identifier of the product/bag.
     */
    identifier?: string;
};
/** @returns {EntityStatusDataUpdates} */
declare function EntityStatusDataUpdates(): EntityStatusDataUpdates;
type EntityStatusDataUpdates = {
    /**
     * - A list of filters used to
     * specify the target for this update. For shipment level or shipment-status
     * level updates, this should be an empty array ([]) as no filters are
     * required during shipment/shipment_status transitions. But is still
     * mandatory due to schema requirements. For product-level updates,
     * appropriate filters must be provided as per the schema to accurately target
     * specific items.
     */
    filters?: DataUpdatesFiltersSchema[];
    data?: EntityStatusDataSchema;
};
/** @returns {DataUpdates} */
declare function DataUpdates(): DataUpdates;
type DataUpdates = {
    /**
     * - A list of updates
     * related to the status of order items.
     */
    order_item_status?: OrderItemDataUpdates[];
    /**
     * - A list of updates related to
     * the properties of products or bags.
     */
    products?: ProductsDataUpdates[];
    /**
     * - A list of updates related to
     * the properties of any relevant entities.
     */
    entities?: EntitiesDataUpdates[];
    order?: OrderDataUpdates[];
    /**
     * - A list of updates to
     * entity_status properties associated with specific shipment status
     * transitions (e.g., bag_confirmed, return_accepted). These updates are
     * optional. Update e.g., inventory-affecting data (like QC data) to be updated.
     */
    entity_status?: EntityStatusDataUpdates[];
};
/** @returns {TransitionComments} */
declare function TransitionComments(): TransitionComments;
type TransitionComments = {
    /**
     * - Title for the transition message.
     */
    title: string;
    /**
     * - Message for the transition.
     */
    message: string;
};
/** @returns {RefundModeTransitionData} */
declare function RefundModeTransitionData(): RefundModeTransitionData;
type RefundModeTransitionData = {
    /**
     * - Refund Mode for status transition data.
     */
    refund_mode?: string;
    /**
     * - Refund Mode display name.
     */
    display_name?: string;
    /**
     * - List of identifiers associated
     * with the refund transaction.
     */
    payment_identifiers?: string[];
};
/** @returns {ShipmentsRequestSchema} */
declare function ShipmentsRequestSchema(): ShipmentsRequestSchema;
type ShipmentsRequestSchema = {
    /**
     * - Unique identifier for the shipment.
     */
    identifier: string;
    reasons?: ReasonsData;
    /**
     * - A list of products or bags that need to
     * be updated as part of the shipment status change.
     */
    products?: Products[];
    data_updates?: DataUpdates;
    /**
     * - Comments or notes
     * associated with the transition of shipment status.
     */
    transition_comments?: TransitionComments[];
    /**
     * - Refund Mode for
     * status transition.
     */
    refund_modes?: RefundModeTransitionData[];
};
/** @returns {UpdatedAddressSchema} */
declare function UpdatedAddressSchema(): UpdatedAddressSchema;
type UpdatedAddressSchema = {
    /**
     * - The complete address.
     */
    address?: string;
    /**
     * - The locality or area associated with the address.
     */
    area?: string;
    /**
     * - A prominent nearby landmark for locating the address.
     */
    landmark?: string;
    /**
     * - The postal code (for example, zip, postcode,
     * or Eircode) of the address.
     */
    pincode?: string;
    /**
     * - The city, town, or village of the address.
     */
    city?: string;
    /**
     * - The state or province of the address.
     */
    state?: string;
    /**
     * - The name of the person associated with the address.
     */
    name?: string;
    /**
     * - Phone number associated with the address user.
     */
    phone?: string;
    /**
     * - Email address associated with the address user.
     */
    email?: string;
    /**
     * - The country of the address.
     */
    country?: string;
    /**
     * - The ISO code representing the country
     * of the address.
     */
    country_iso_code?: string;
    /**
     * - The latitude of the address.
     */
    latitude?: number;
    /**
     * - The longitude of the address.
     */
    longitude?: number;
};
/** @returns {UpdateAddressRequestBody} */
declare function UpdateAddressRequestBody(): UpdateAddressRequestBody;
type UpdateAddressRequestBody = {
    updated_address?: UpdatedAddressSchema;
    /**
     * - The type of address (e.g., office, home).
     */
    address_type?: string;
    /**
     * - The category of the address (e.g.,
     * delivery, billing).
     */
    address_category?: string;
};
/** @returns {StatuesRequestSchema} */
declare function StatuesRequestSchema(): StatuesRequestSchema;
type StatuesRequestSchema = {
    /**
     * - The new status to be assigned to a shipment.
     * Also, refer to the <a href='/commerce/getting-started/oms-states/'>OMS
     * States</a> for the complete status list.
     */
    status?: string;
    /**
     * - A list of shipments to
     * which the new status will be applied.
     */
    shipments?: ShipmentsRequestSchema[];
    /**
     * - Specifies the state to which
     * remaining bags or products should be changed, effectively excluding them
     * from the current status update.
     */
    exclude_bags_next_state?: string;
    /**
     * - A flag indicating whether the shipment
     * should be split into multiple parts. If set to true, the shipment will be
     * divided according to the specified logic or criteria.
     */
    split_shipment?: boolean;
};
/** @returns {UpdateShipmentStatusRequestSchema} */
declare function UpdateShipmentStatusRequestSchema(): UpdateShipmentStatusRequestSchema;
type UpdateShipmentStatusRequestSchema = {
    /**
     * - Indicates whether to force the
     * status transition, overriding any restrictions or checks that may normally apply.
     */
    force_transition?: boolean;
    /**
     * - A list of status updates to
     * be applied to the shipment.
     */
    statuses?: StatuesRequestSchema[];
    /**
     * - Specifies whether the shipment
     * should be locked automatically after a transition occurs.
     */
    lock_after_transition?: boolean;
    /**
     * - Specifies whether the
     * shipment should be unlocked before a transition occurs.
     */
    unlock_before_transition?: boolean;
    /**
     * - Indicates whether to run the status update as a
     * background task, allowing other processes to continue without waiting for
     * this operation to complete.
     */
    task?: boolean;
    /**
     * - Indicates whether tasks
     * should resume automatically after unlocking, such as DP assignment task and
     * invoicing task.
     */
    resume_tasks_after_unlock?: boolean;
};
/** @returns {ShipmentsResponseSchema} */
declare function ShipmentsResponseSchema(): ShipmentsResponseSchema;
type ShipmentsResponseSchema = {
    status?: number;
    final_state?: any;
    identifier?: string;
    stack_trace?: string;
    code?: string;
    meta?: any;
    message?: string;
    exception?: string;
};
/** @returns {DPConfiguration} */
declare function DPConfiguration(): DPConfiguration;
type DPConfiguration = {
    /**
     * - It denotes DP assignment strategy. If it
     * is fynd, DP assignment will be handled by Fynd's OMS.
     */
    shipping_by?: string;
};
/** @returns {PaymentConfig} */
declare function PaymentConfig(): PaymentConfig;
type PaymentConfig = {
    /**
     * - Specifies the mode through which the
     * payment was collected, serving as an identifier for the payment's origin.
     */
    mode_of_payment?: string;
    /**
     * - The source field identifies the channel through
     * which the order was placed, such as MARKETPLACE, ECOMM.
     */
    source?: string;
};
/** @returns {LockStateMessage} */
declare function LockStateMessage(): LockStateMessage;
type LockStateMessage = {
    /**
     * - The state for which the custom lock message applies.
     */
    state?: string;
    /**
     * - Custom lock message used when the shipment is
     * locked in the specified state.
     */
    message?: string;
};
/** @returns {CreateOrderConfig} */
declare function CreateOrderConfig(): CreateOrderConfig;
type CreateOrderConfig = {
    dp_configuration?: DPConfiguration;
    /**
     * - The flag denotes if the
     * location for the shipment needs to be reassigned after cancellation. If the
     * flag is set to true, location for the shipment gets auto reassigned post
     * cancellation. If set to false, location reassignment will not be performed
     * as it is disabled.
     */
    location_reassignment?: boolean;
    payment?: PaymentConfig;
    /**
     * - Denotes the shipment
     * breaking strategy. If the flag is set to true, the shipment is created
     * using an optimal shipment creation strategy based on the serviceability &
     * packaging dimensions by OMS. If the flag is set to false, shipment details
     * and location_id, must be passed to FDK for processing.
     */
    optimal_shipment_creation?: boolean;
    /**
     * - A list of
     * state-specific custom lock messages.
     */
    lock_state_messages?: LockStateMessage[];
    /**
     * - Flag denotes integration type which
     * is used to retrieve specific configurations and application details
     * relevant to channel fulfillment.
     */
    integration_type?: string;
};
/** @returns {StatuesResponseSchema} */
declare function StatuesResponseSchema(): StatuesResponseSchema;
type StatuesResponseSchema = {
    /**
     * - List of Shipments which
     * includes data for each shipment, the current status code, final state
     * information including reasons for cancellation (if applicable), and unique
     * shipment identifiers are provided.
     */
    shipments?: ShipmentsResponseSchema[];
};
/** @returns {UpdateShipmentStatusResponseBody} */
declare function UpdateShipmentStatusResponseBody(): UpdateShipmentStatusResponseBody;
type UpdateShipmentStatusResponseBody = {
    /**
     * - List of statuses of the
     * shipments after a status update operation. Includes an array of status
     * objects, each containing details about shipments that have undergone data updates.
     */
    statuses?: StatuesResponseSchema[];
};
/** @returns {OrderUser} */
declare function OrderUser(): OrderUser;
type OrderUser = {
    phone: number;
    last_name: string;
    address1?: string;
    state: string;
    pincode: string;
    first_name: string;
    mobile: number;
    address2?: string;
    email: string;
    country: string;
    city: string;
};
/** @returns {OrderPriority} */
declare function OrderPriority(): OrderPriority;
type OrderPriority = {
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
};
/** @returns {ArticleDetails} */
declare function ArticleDetails(): ArticleDetails;
type ArticleDetails = {
    /**
     * - A unique identifier for the article, facilitating
     * easy reference and management within the system.
     */
    _id: string;
    /**
     * - Numerical code representing the brand
     * associated with the article, linking it to its manufacturer or creator.
     */
    brand_id: number;
    /**
     * - Specifies the physical dimensions of the
     * article, including height, width, and depth, providing a comprehensive
     * understanding of its size.
     */
    dimension: any;
    /**
     * - Classifies the article into a specific category
     * or type, aiding in organization and filtering based on its nature or usecase.
     */
    category: any;
    /**
     * - Details the weight of the article, crucial for
     * logistics, shipping calculations, and customer information.
     */
    weight: any;
    /**
     * - Holds additional descriptive details and
     * characteristics of the article, such as color, material, and style,
     * enhancing product understanding.
     */
    attributes: any;
    /**
     * - Specifies the available or required quantity of
     * the article, important for inventory management and order fulfillment.
     */
    quantity: number;
};
/** @returns {LocationDetails} */
declare function LocationDetails(): LocationDetails;
type LocationDetails = {
    /**
     * - The method of fulfillment used by the store.
     */
    fulfillment_type: string;
    articles: ArticleDetails[];
    fulfillment_id: number;
};
/** @returns {ShipmentDetails} */
declare function ShipmentDetails(): ShipmentDetails;
type ShipmentDetails = {
    /**
     * - Box type of the shipment in which the
     * shipment will be delivered.
     */
    box_type?: string;
    shipments: number;
    fulfillment_id: number;
    articles: ArticleDetails[];
    dp_id?: string;
    meta?: any;
    affiliate_shipment_id: string;
    /**
     * - Delivery partner options that are available
     * to deliver the shipment.
     */
    dp_options?: any;
    lock_status?: boolean;
    /**
     * - This field maps potential actions
     * (e.g., downloading an invoice or label) to their corresponding shipment
     * lock statuses, indicating which operations are allowed depending on the
     * shipment's current lock status. When an action is set to 'lock', it means
     * no transitions or updates to the shipment's status can be performed until
     * the specified action is completed. For instance, if 'download_invoice' is
     * in a 'lock' state, the shipment cannot undergo any status transitions until
     * the invoice is either downloaded. Similarly, 'download_label' being in a
     * 'lock' state prevents any shipment status transitions until a new label is
     * downloaded.
     */
    action_to_status?: any;
};
/** @returns {ShipmentConfig} */
declare function ShipmentConfig(): ShipmentConfig;
type ShipmentConfig = {
    location_details?: LocationDetails;
    source: string;
    to_pincode: string;
    shipment: ShipmentDetails[];
    /**
     * - The unique identifier for the shipment.
     */
    identifier: string;
    payment_mode: string;
    action: string;
    journey: string;
};
/** @returns {ShipmentData} */
declare function ShipmentData(): ShipmentData;
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
/** @returns {MarketPlacePdf} */
declare function MarketPlacePdf(): MarketPlacePdf;
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
/** @returns {AffiliateBag} */
declare function AffiliateBag(): AffiliateBag;
type AffiliateBag = {
    pdf_links?: MarketPlacePdf;
    store_id: number;
    sku: string;
    discount: number;
    unit_price: number;
    price_effective: number;
    affiliate_store_id: string;
    /**
     * - The unique identifier for the bag.
     */
    identifier: any;
    seller_identifier: string;
    item_size: string;
    amount_paid: number;
    fynd_store_id: string;
    item_id: number;
    delivery_charge: number;
    avl_qty: number;
    price_marked: number;
    quantity: number;
    company_id: number;
    hsn_code_id: string;
    _id: string;
    /**
     * - Sales channel meta data information for the bag.
     */
    affiliate_meta: any;
    /**
     * - The date and time when the bag was updated
     * or modified.
     */
    modified_on: string;
    transfer_price: number;
};
/** @returns {UserData} */
declare function UserData(): UserData;
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
/** @returns {OrderInfo} */
declare function OrderInfo(): OrderInfo;
type OrderInfo = {
    /**
     * - A unique identifier assigned to the
     * order by an affiliate partner or platform, facilitating tracking across
     * different systems.
     */
    affiliate_order_id?: string;
    cod_charges: number;
    /**
     * - Contains detailed information about the items
     * included in the order ensuring comprehensive order management.
     */
    items: any;
    discount: number;
    billing_address: OrderUser;
    /**
     * - Outlines the payment details for the order,
     * including payment method, transaction status, and any related financial
     * information, supporting secure and efficient payment processing.
     */
    payment?: any;
    order_priority?: OrderPriority;
    shipment?: ShipmentData;
    delivery_charges: number;
    shipping_address: OrderUser;
    order_value: number;
    payment_mode: string;
    bags: AffiliateBag[];
    user: UserData;
    coupon?: string;
};
/** @returns {AffiliateAppConfigMeta} */
declare function AffiliateAppConfigMeta(): AffiliateAppConfigMeta;
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
/** @returns {AffiliateAppConfig} */
declare function AffiliateAppConfig(): AffiliateAppConfig;
type AffiliateAppConfig = {
    id: string;
    description?: string;
    /**
     * - The date and time when the app config was updated.
     */
    updated_at: string;
    name: string;
    token: string;
    meta?: AffiliateAppConfigMeta[];
    owner: string;
    secret: string;
    /**
     * - Timestamp when the app config was created.
     */
    created_at: string;
};
/** @returns {AffiliateInventoryArticleAssignmentConfig} */
declare function AffiliateInventoryArticleAssignmentConfig(): AffiliateInventoryArticleAssignmentConfig;
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
/** @returns {AffiliateInventoryPaymentConfig} */
declare function AffiliateInventoryPaymentConfig(): AffiliateInventoryPaymentConfig;
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
/** @returns {AffiliateInventoryStoreConfig} */
declare function AffiliateInventoryStoreConfig(): AffiliateInventoryStoreConfig;
type AffiliateInventoryStoreConfig = {
    /**
     * - Fulfilling store information related to the shipment.
     */
    store?: any;
};
/** @returns {AffiliateInventoryOrderConfig} */
declare function AffiliateInventoryOrderConfig(): AffiliateInventoryOrderConfig;
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
/** @returns {AffiliateInventoryLogisticsConfig} */
declare function AffiliateInventoryLogisticsConfig(): AffiliateInventoryLogisticsConfig;
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
/** @returns {AffiliateInventoryConfig} */
declare function AffiliateInventoryConfig(): AffiliateInventoryConfig;
type AffiliateInventoryConfig = {
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
/** @returns {AffiliateConfig} */
declare function AffiliateConfig(): AffiliateConfig;
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
    /**
     * - A unique identifier for the company
     * associated with the affiliate app, used for tracking and managing affiliate
     * relationships.
     */
    app_company_id?: number;
};
/** @returns {Affiliate} */
declare function Affiliate(): Affiliate;
type Affiliate = {
    id: string;
    config?: AffiliateConfig;
    token: string;
};
/** @returns {AffiliateStoreIdMapping} */
declare function AffiliateStoreIdMapping(): AffiliateStoreIdMapping;
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
/** @returns {OrderConfig} */
declare function OrderConfig(): OrderConfig;
type OrderConfig = {
    create_user?: boolean;
    article_lookup?: string;
    bag_end_state?: string;
    affiliate: Affiliate;
    store_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
};
/** @returns {CreateOrderResponseSchema} */
declare function CreateOrderResponseSchema(): CreateOrderResponseSchema;
type CreateOrderResponseSchema = {
    /**
     * - Unique identifier assigned to the order
     */
    fynd_order_id: string;
};
/** @returns {DispatchManifest} */
declare function DispatchManifest(): DispatchManifest;
type DispatchManifest = {
    /**
     * - The unique identifier for the manifest being
     * dispatched.
     */
    manifest_id: string;
};
/** @returns {SuccessResponseSchema} */
declare function SuccessResponseSchema(): SuccessResponseSchema;
type SuccessResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - A descriptive message providing additional
     * information about the API response.
     */
    message?: string;
};
/** @returns {ActionInfo} */
declare function ActionInfo(): ActionInfo;
type ActionInfo = {
    /**
     * - A user-friendly text that represents the
     * action associated with the permission.
     */
    display_text: string;
    /**
     * - A unique identifier for the permission, used for
     * referencing within the system.
     */
    id: number;
    /**
     * - A detailed explanation of what the
     * permission allows the user to do.
     */
    description: string;
    /**
     * - A URL-friendly string that serves as a unique
     * identifier for the permission, often used in routing or API calls.
     */
    slug: string;
};
/** @returns {GetActionsResponseSchema} */
declare function GetActionsResponseSchema(): GetActionsResponseSchema;
type GetActionsResponseSchema = {
    /**
     * - A response object that contains a
     * list of permissions available to the user.
     */
    permissions?: ActionInfo[];
};
/** @returns {HistoryReason} */
declare function HistoryReason(): HistoryReason;
type HistoryReason = {
    /**
     * - A reason for the activity or change.
     */
    text?: string;
    /**
     * - Category of the reason for the status change.
     */
    category?: string;
    /**
     * - Current state related to the reason.
     */
    state?: string;
    /**
     * - Display name of the reason for better
     * user understanding.
     */
    display_name?: string;
    /**
     * - Unique code identifying the reason.
     */
    code?: number;
    /**
     * - Quantity related to the reason, if applicable.
     */
    quantity?: number;
};
/** @returns {RefundInformation} */
declare function RefundInformation(): RefundInformation;
type RefundInformation = {
    /**
     * - The payment method used for the order, such as
     * CARD, Net Banking (NB), or other options. This field indicates how the
     * original payment was made and will determine how the refund is processed.
     */
    mode?: string;
    /**
     * - The amount to be refunded, represented as a
     * floating-point number. This specifies the exact value that will be returned
     * to the customer.
     */
    amount?: number;
    /**
     * - A unique identifier associated
     * with the payment transaction, such as TR669796C0012CF31BBD. This ID helps
     * track and reference the specific transaction within the merchant's system.
     */
    merchant_transaction_id?: string;
    /**
     * - The current status of the refund
     * process, indicating whether the refund has been completed, is pending, or
     * has encountered an issue (e.g., 'refund_done', 'refund_failed'). This field
     * reflects the state of the refund operation.
     */
    refund_status?: string;
};
/** @returns {HistoryMeta} */
declare function HistoryMeta(): HistoryMeta;
type HistoryMeta = {
    /**
     * - Unique identifier for the store involved in
     * the activity.
     */
    store_id?: number;
    /**
     * - Current status of the activity or item.
     */
    status?: string;
    /**
     * - Additional status information if necessary.
     */
    status1?: string;
    /**
     * - Identifier for any related calls, if applicable.
     */
    call_id?: string;
    /**
     * - Start time of the activity.
     */
    starttime?: string;
    reason?: HistoryReason;
    /**
     * - A shortened link related to the activity,
     * if available.
     */
    short_link?: string;
    /**
     * - End time of the activity.
     */
    endtime?: string;
    /**
     * - Name of the store involved in the activity.
     */
    store_name?: string;
    /**
     * - Name of the caller associated with the activity.
     */
    caller?: string;
    /**
     * - Code associated with the store.
     */
    store_code?: string;
    /**
     * - Duration of the billable period, if applicable.
     */
    billsec?: string;
    /**
     * - Path to any related recordings, if applicable.
     */
    recordpath?: string;
    /**
     * - Additional status information if necessary.
     */
    status2?: string;
    /**
     * - Caller ID associated with the activity, if applicable.
     */
    callerid?: string;
    /**
     * - Total duration of the activity.
     */
    duration?: string;
    /**
     * - Type of channel used for the activity, if
     * applicable.
     */
    channel_type?: string;
    /**
     * - Comments related to the activity, if
     * applicable.
     */
    activity_comment?: string;
    /**
     * - Defines the category of event-related
     * information for a shipment, indicating the nature of the update. This
     * includes whether the update pertains to the status of the shipment,
     * comments added to it, or notifications about specific events.
     */
    activity_type?: string;
    /**
     * - Name of the receiver involved in the
     * activity, if applicable.
     */
    receiver?: string;
    /**
     * - Recipient of the activity, if applicable.
     */
    recipient?: string;
    /**
     * - Slug identifier for the activity.
     */
    slug?: string;
    /**
     * - Any additional messages related to the activity.
     */
    message?: string;
    /**
     * - The name of the store where the item
     * was previously located before being transferred or processed. This field
     * can be null if the previous store information is not applicable or available.
     */
    prev_store_name?: string;
    /**
     * - The unique code associated with the
     * previous store. This code helps identify the store in the system and can be
     * null if the previous store code is not recorded or required.
     */
    prev_store_code?: string;
    /**
     * - The unique identifier (ID) of the
     * previous store in the database or system. This ID can be null if the
     * previous store information is not relevant or if the store did not have a
     * designated ID.
     */
    prev_store_id?: string;
    /**
     * - The destination or method by which a refund
     * will be issued. This indicates where the refunded amount will be sent, such
     * as back to the original payment source (e.g., 'Back To Source').
     */
    refund_to?: string;
    refund_information?: RefundInformation[];
};
/** @returns {HistoryDict} */
declare function HistoryDict(): HistoryDict;
type HistoryDict = {
    /**
     * - User-friendly message displaying the
     * activity or status change.
     */
    display_message?: string;
    /**
     * - Identifier for the bag associated with the activity.
     */
    bag_id?: number;
    /**
     * - URL for any related tickets.
     */
    ticket_url?: string;
    /**
     * - L3 details regarding the bag or activity.
     */
    l3_detail?: string;
    /**
     * - Date and time when the activity was created.
     */
    createdat: string;
    /**
     * - Timestamp for when the activity was created
     * in ISO format.
     */
    created_ts?: string;
    /**
     * - Unique identifier for the ticket associated
     * with the activity.
     */
    ticket_id?: string;
    /**
     * - Defines the category of event-related
     * information for a shipment, indicating the nature of the update. This
     * includes whether the update pertains to the status of the shipment,
     * comments added to it, or notifications about specific events.
     */
    activity_type: string;
    /**
     * - L2 details regarding the bag or activity.
     */
    l2_detail?: string;
    /**
     * - Name of the agent assigned to the activity.
     */
    assigned_agent?: string;
    meta?: HistoryMeta;
    /**
     * - L1 details regarding the bag or activity.
     */
    l1_detail?: string;
    /**
     * - Message or comment regarding the history.
     */
    message: string;
    /**
     * - Name of the user who created the history record.
     */
    user: string;
};
/** @returns {ShipmentHistoryResponseSchema} */
declare function ShipmentHistoryResponseSchema(): ShipmentHistoryResponseSchema;
type ShipmentHistoryResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - A list of activity records
     * related to the shipment, providing details on actions taken, comments
     * added, or notifications sent.
     */
    activity_history: HistoryDict[];
};
/** @returns {PostHistoryFilters} */
declare function PostHistoryFilters(): PostHistoryFilters;
type PostHistoryFilters = {
    /**
     * - Unique identifier for the shipment
     */
    shipment_id: string;
    /**
     * - Optional field to specify a particular
     * line item in the shipment.
     */
    line_number?: string;
    /**
     * - Optional field for any additional
     * identifier related to the shipment.
     */
    identifier?: string;
};
/** @returns {PostHistoryData} */
declare function PostHistoryData(): PostHistoryData;
type PostHistoryData = {
    /**
     * - The name or email of the user who performed
     * the action or recorded the entry.
     */
    user_name: string;
    /**
     * - A descriptive message detailing the action taken
     * or the status related to the shipment.
     */
    message: string;
};
/** @returns {PostHistoryDict} */
declare function PostHistoryDict(): PostHistoryDict;
type PostHistoryDict = {
    /**
     * - A list of filter objects, each
     * following the PostHistoryFilters schema, used to identify which shipment
     * history records are relevant.
     */
    filters: PostHistoryFilters[];
    data: PostHistoryData;
};
/** @returns {PostShipmentHistory} */
declare function PostShipmentHistory(): PostShipmentHistory;
type PostShipmentHistory = {
    /**
     * - A list of activity history
     * records, each adhering to the PostHistoryDict schema.
     */
    activity_history?: PostHistoryDict[];
};
/** @returns {SmsDataPayload} */
declare function SmsDataPayload(): SmsDataPayload;
type SmsDataPayload = {
    /**
     * - Unique identifier which is used to identify
     * a shipment.
     */
    shipment_id: string;
    /**
     * - The recipient's phone number for communication.
     */
    phone_number: string;
    /**
     * - The amount that has been paid, as mapped
     * in the communication template.
     */
    amount_paid?: number;
    /**
     * - Unique identifier for the order associated with
     * the shipment.
     */
    order_id: string;
    /**
     * - The mode of payment used for the order,
     * as mapped in the communication template.
     */
    payment_mode?: string;
    /**
     * - The name of the customer, as mapped in
     * the communication template.
     */
    customer_name?: string;
    /**
     * - The name of the brand associated with the
     * order, as mapped in the communication template.
     */
    brand_name?: string;
    /**
     * - The content of the SMS to be sent to the recipient.
     */
    message: string;
    /**
     * - The country code for the recipient's phone
     * number, necessary for proper SMS delivery.
     */
    country_code: string;
};
/** @returns {SendSmsPayload} */
declare function SendSmsPayload(): SendSmsPayload;
type SendSmsPayload = {
    /**
     * - Unique identifier for the bag, used for tracking
     * activity history related to this SMS.
     */
    bag_id: number;
    /**
     * - Contains the SMS data necessary for communication.
     */
    data?: SmsDataPayload;
    /**
     * - Slug name for the SMS template mapped in the
     * communication system, used to identify the specific messaging format or content.
     */
    slug: string;
};
/** @returns {OrderDetails} */
declare function OrderDetails(): OrderDetails;
type OrderDetails = {
    fynd_order_id?: string;
    /**
     * - Date and time when the order was created.
     */
    created_at?: string;
    user_id?: string;
    tax_details?: TaxDetails;
    mongo_cart_id?: number;
    delivery_charges?: number;
    transaction_id?: string;
    collect_by?: string;
    /**
     * - Header details of the order.
     */
    headers?: any;
    coupon_value?: number;
    order_value?: number;
    created_time?: string;
    /**
     * - The currency in which the prices details
     * associated with the item is specified.
     */
    currency?: string;
    total_order_value?: number;
    /**
     * - The specific channel through which
     * your order was placed. This field will be phased out after version 2.4.0.
     * Please use ordering_source instead to ensure accurate order tracking and processing.
     */
    ordering_channel?: string;
    /**
     * - Ordering source, to be used to
     * identify source of order creation.
     */
    ordering_source?: string;
    /**
     * - Meta data of the order data contains additional,
     * potentially dynamic information about the order data.
     */
    meta?: any;
    cod_charges?: number;
    cashback_value?: number;
    refund_by?: string;
    /**
     * - Specifies the date and time of
     * the order when it was created within the affiliate's system. It specifies
     * that the date and time are recorded in ISO 8601 format.
     */
    affiliate_order_date?: string;
    /**
     * - This field stores a collection of
     * payment method objects used in a transaction. Each key within this object
     * represents a unique payment method code (e.g., "COD" for Cash On Delivery),
     * and its value is an object containing detailed information about that
     * payment method. The structure is designed to accommodate any number of
     * payment methods,providing flexibility and comprehensive insights into each
     * transaction's payment aspect.
     */
    payment_methods?: any;
    affiliate_order_id?: string;
    payment_mode_id?: number;
    promotion_effective_discount?: number;
    mode_of_payment?: string;
    discount?: number;
    cashback_applied?: number;
    fynd_credits?: number;
    affiliate_id?: string;
    ordering_channel_logo?: string;
    prices?: Prices;
    charges?: PriceAdjustmentCharge[];
    loyalty_discount_details?: LoyaltyDiscountDetails;
};
/** @returns {Meta} */
declare function Meta(): Meta;
type Meta = {
    /**
     * - An integer representing the
     * status of the message upon emission to Kafka. 0 indicates success, while 1
     * indicates failure.
     */
    kafka_emission_status?: number;
    /**
     * - A string that specifies the state
     * manager utilized for handling the order's state.
     */
    state_manager_used?: string;
};
/** @returns {ShipmentDetail} */
declare function ShipmentDetail(): ShipmentDetail;
type ShipmentDetail = {
    /**
     * - Unique identifier for the shipment
     * associated with the order.
     */
    shipment_id?: string;
    /**
     * - A string representing the current status of the shipment
     */
    status?: string;
    /**
     * - An integer that serves as a unique identifier for the
     * shipment detail
     */
    id: number;
    /**
     * - A list of bag identifiers associated with
     * the shipment.
     */
    bag_list?: number[];
    meta: Meta;
    /**
     * - A string for any additional comments or notes
     * related to the shipment,
     */
    remarks?: string;
};
/** @returns {OrderStatusData} */
declare function OrderStatusData(): OrderStatusData;
type OrderStatusData = {
    order_details: OrderDetails;
    /**
     * - A list of any errors that occurred while
     * attempting to obtain the order's status.
     */
    errors?: string[];
    /**
     * - A list of the individual
     * shipments associated with the order and their current statuses.
     */
    shipment_details?: ShipmentDetail[];
    /**
     * - A label or description of the delivery status,
     * such as 'Expected Delivery Date'.
     */
    text?: string;
    /**
     * - The detailed delivery status or time
     * information, such as 'Arriving on 24 Nov 2022 15:54:00'.
     */
    value?: string;
    /**
     * - Hex code for the color representing the
     * delivery status.
     */
    color_code?: string;
    /**
     * - The ISO 8601 formatted date and
     * time when the delivery is expected, e.g., '2022-11-24T22:15:54+00:00'.
     */
    expected_delivery_date?: string;
};
/** @returns {OrderStatusResult} */
declare function OrderStatusResult(): OrderStatusResult;
type OrderStatusResult = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success: string;
    /**
     * - The order's current status and
     * related shipment details.
     */
    result?: OrderStatusData[];
};
/** @returns {SendSmsResponseSchema} */
declare function SendSmsResponseSchema(): SendSmsResponseSchema;
type SendSmsResponseSchema = {
    /**
     * - Indicates whether the SMS was sent
     * successfully. A value of `true` means the SMS was sent without errors,
     * while `false` indicates there was an issue.
     */
    success: boolean;
    /**
     * - Provides additional information about the
     * success or failure of the SMS sending operation. If `success` is `false`,
     * this message may contain error details.
     */
    message: string;
};
/** @returns {Dimension} */
declare function Dimension(): Dimension;
type Dimension = {
    /**
     * - Defines the type of packaging used for
     * the product, encompassing materials, design, and form factors.
     */
    packaging_type?: string;
    /**
     * - The weight of the package in kilograms.
     */
    weight?: number;
    /**
     * - The height of the package in centimetres.
     */
    height?: number;
    /**
     * - The length of the package in centimetres.
     */
    length?: number;
    /**
     * - The width of the package in centimetres.
     */
    width?: number;
};
/** @returns {UpdatePackagingDimensionsPayload} */
declare function UpdatePackagingDimensionsPayload(): UpdatePackagingDimensionsPayload;
type UpdatePackagingDimensionsPayload = {
    /**
     * - Unique identifier for the shipment for which
     * the packaging dimensions are being updated.
     */
    shipment_id: string;
    /**
     * - The current status of the shipment.
     */
    current_status: string;
    /**
     * - A list of dimensions for the packaging.
     */
    dimension: Dimension[];
};
/** @returns {UpdatePackagingDimensionsResponseSchema} */
declare function UpdatePackagingDimensionsResponseSchema(): UpdatePackagingDimensionsResponseSchema;
type UpdatePackagingDimensionsResponseSchema = {
    message?: string;
};
/** @returns {Tax} */
declare function Tax(): Tax;
type Tax = {
    /**
     * - The name of the tax indicating its purpose (e.g.,
     * VAT, sales tax).
     */
    name: string;
    /**
     * - The tax rate as a decimal, applied to the transaction amount.
     */
    rate: number;
    /**
     * - An array of objects detailing the components
     * or breakdown of the tax applied.
     */
    breakup?: any[];
    /**
     * - An object representing the total tax amount
     * calculated for the transaction.
     */
    amount: any;
};
/** @returns {AmountSchema} */
declare function AmountSchema(): AmountSchema;
type AmountSchema = {
    /**
     * - The value indicating the currency used for
     * the transactions.
     */
    currency?: string;
    /**
     * - The final amount of the charge.
     */
    value?: number;
};
/** @returns {Charge} */
declare function Charge(): Charge;
type Charge = {
    amount: AmountSchema;
    /**
     * - The category or type of the charge.
     */
    type: string;
    /**
     * - The name of the charge that indicates its purpose.
     */
    name: string;
    /**
     * - An optional code associated with the charge for
     * internal tracking.
     */
    code?: string;
    tax?: Tax;
};
/** @returns {LineItem} */
declare function LineItem(): LineItem;
type LineItem = {
    /**
     * - An array of Charge objects related to the
     * line item. This array must include three mandatory charge types:
     * amount_paid, price_effective and price_marked. Formula to calculate
     * amount_paid = price_effective + cod_charges + delivery_charges -
     * coupon_discount - promo_discount
     */
    charges?: Charge[];
    /**
     * - An object containing metadata relevant to
     * articles or line items.
     */
    meta?: any;
    /**
     * - A string for any special instructions
     * or messages related to the line item.
     */
    custom_message?: string;
    /**
     * - Quantity of the articles or line items.
     */
    quantity?: number;
    /**
     * - Unique identifier of the articles or
     * line items set by seller.
     */
    seller_identifier: string;
    /**
     * - External unique identifier of the
     * articles or line items.
     */
    external_line_id?: string;
};
/** @returns {ProcessingDates} */
declare function ProcessingDates(): ProcessingDates;
type ProcessingDates = {
    /**
     * - An object that provides details about
     * the designated pickup time slot for the order.
     */
    dp_pickup_slot?: any;
    /**
     * - A string indicating the date after
     * which the order will be dispatched.
     */
    dispatch_after_date?: string;
    /**
     * - A string representing the latest date
     * by which the order must be dispatched to meet delivery expectations.
     */
    dispatch_by_date?: string;
    /**
     * - A string that indicates the deadline
     * for the merchant to confirm the order.
     */
    confirm_by_date?: string;
    /**
     * - An object that provides details
     * of the pick-up time slot set by the customer.
     */
    customer_pickup_slot?: any;
    /**
     * - Defines the deadline for having the
     * package fully packed and ready for dispatch or pickup, integral to
     * streamlining the fulfillment process.
     */
    pack_by_date?: string;
};
/** @returns {Tag} */
declare function Tag(): Tag;
type Tag = {
    /**
     * - A unique identifier or short label for the tag
     * for shipment reference.
     */
    slug?: string;
    /**
     * - Label of the tag. This text is shown to
     * users, representing the tag in an human-readable format.
     */
    display_text?: string;
};
/** @returns {ProcessAfterConfig} */
declare function ProcessAfterConfig(): ProcessAfterConfig;
type ProcessAfterConfig = {
    /**
     * - Indicates whether the shipment
     * is scheduled for later processing.
     */
    is_scheduled_shipment?: boolean;
    /**
     * - Specifies the UTC time after
     * which the shipment will be automatically processed.
     */
    enable_processing_after?: string;
};
/** @returns {SystemMessages} */
declare function SystemMessages(): SystemMessages;
type SystemMessages = {
    /**
     * - Specifies the type of message.
     */
    message_type: string;
    /**
     * - This will determine the sequence of messages (1
     * being the highest priority).
     */
    priority: number;
    /**
     * - Message to be displayed at Platform's Order Details.
     */
    message: string;
    /**
     * - Holds the list of OMS status at which the
     * message should be visible.
     */
    inject_at?: string[];
};
/** @returns {Shipment} */
declare function Shipment(): Shipment;
type Shipment = {
    /**
     * - An array of objects that represent the
     * items included in the shipment.
     */
    line_items: LineItem[];
    /**
     * - External shipment identifier or
     * marketplace's unique shipment identifier.
     */
    external_shipment_id?: string;
    processing_dates?: ProcessingDates;
    /**
     * - Meta data of the shipment contains additional,
     * potentially dynamic information about the shipment.
     */
    meta?: any;
    /**
     * - Priority level of the shipment.
     */
    priority?: number;
    /**
     * - Location/store/fulfillment identifier of
     * the shipment. This field is mandatory when optimal_shipment_creation flag
     * is set to false, indicating that shipments must be associated with a
     * specific location. When optimal_shipment_creation is true, location_id
     * becomes optional and the system automatically assigns the optimal location
     * for order creation.
     */
    location_id?: number;
    /**
     * - Defines the specific journey a shipment
     * will follow based on the application's operational needs and customer
     * preferences. This field categorizes orders into distinct types, each
     * associated with a unique processing flow. For example, "HomeDelivery": The
     * order undergoes all state transitions typical for a delivery, from
     * processing the shipment to final delivery at the customer's address.
     * "PickAtStore": The order is prepared for pickup and moved to a state where
     * it is ready to be handed over directly to the customer at the store. This
     * type streamlines the process by bypassing traditional shipping stages and
     * facilitating a quicker transition to the final handover stage. "Digital":
     * This order type likely refers to orders that involve digital goods or
     * services, such as software, digital subscriptions, e-books, online courses,
     * or any other item that can be delivered electronically.
     */
    order_type?: string;
    tags?: string[];
    system_messages?: SystemMessages[];
    process_after_config?: ProcessAfterConfig;
    parent_type?: string;
    store_invoice_id?: string;
    lock_status?: string;
    type?: string;
    billing_address_json?: Address;
    id?: string;
    fulfilment_priority?: number;
    is_active?: boolean;
    previous_shipment_id?: string;
    /**
     * - PDF Links associated with the shipment.
     */
    pdf_links?: any;
    delivery_address_json?: Address;
    eway_bill_id?: string;
    affiliate_shipment_id?: string;
    fynd_order_id?: string;
    /**
     * - Specifies the date and time when the
     * shipment was created.
     */
    created_at?: string;
    delivery_awb_number?: string;
    hand_over_contact_json?: Address;
    credit_note_id?: string;
    parent_id?: string;
    affiliate_id?: string;
    /**
     * - Defines the type of packaging used for
     * the product, encompassing materials, design, and form factors.
     */
    packaging_type?: string;
    vertical?: string;
    quantity?: number;
    status?: ShipmentStatusData;
    price?: Prices;
    gst?: ShipmentGstDetails;
};
/** @returns {GeoLocationSchema} */
declare function GeoLocationSchema(): GeoLocationSchema;
type GeoLocationSchema = {
    /**
     * - A number representing the geographical
     * latitude of the location.
     */
    latitude?: number;
    /**
     * - A number representing the geographical
     * longitude of the location
     */
    longitude?: number;
};
/** @returns {ShippingInfo} */
declare function ShippingInfo(): ShippingInfo;
type ShippingInfo = {
    /**
     * - Alternate mobile number to
     * reach the customer, providing an additional contact method.
     */
    alternate_mobile_number?: string;
    /**
     * - The name of the state for shipping purposes.
     */
    state?: string;
    /**
     * - Customer's unique identifier in the
     * seller's system.
     */
    customer_code?: string;
    /**
     * - Specifies the method or service used for
     * the shipping of the shipment.
     */
    shipping_type?: string;
    /**
     * - Customer's middle name
     */
    middle_name?: string;
    /**
     * - Customer's primary mobile number
     */
    primary_mobile_number?: string;
    /**
     * - Customer's last name
     */
    last_name?: string;
    geo_location?: GeoLocationSchema;
    /**
     * - Customer's gender
     */
    gender?: string;
    /**
     * - The house or apartment number of the customer.
     */
    house_no?: string;
    /**
     * - Customer's first name
     */
    first_name?: string;
    /**
     * - Customer's title or prefix
     */
    title?: string;
    /**
     * - Landmark or reference point near the
     * customer's location
     */
    landmark?: string;
    /**
     * - Customer's country
     */
    country?: string;
    /**
     * - Address type in the seller's system
     */
    address_type?: string;
    /**
     * - State code of the customer's location
     */
    state_code?: string;
    /**
     * - City of the customer's location
     */
    city?: string;
    /**
     * - External customer code in the
     * seller's system
     */
    external_customer_code?: string;
    /**
     * - Floor number of the customer's location
     */
    floor_no?: string;
    /**
     * - Alternate email address for the customer
     */
    alternate_email?: string;
    /**
     * - A list of objects representing available time
     * slot for delivery or pickup.
     */
    slot?: any[];
    /**
     * - A comma-separated string representing the address.
     */
    address?: string;
    /**
     * - Area of the customer's location
     */
    area?: string;
    /**
     * - First line of the address
     */
    address1?: string;
    /**
     * - Pincode of the customer's location
     */
    pincode?: string;
    /**
     * - Primary email address for the customer
     */
    primary_email?: string;
    /**
     * - Second line of the address
     */
    address2?: string;
    /**
     * - Uniquely identifies the country
     * associated with the shipping address. This code is essential for
     * international shipments, ensuring accurate routing and delivery across
     * global postal and customs services. Examples include 'US' for the United
     * States, 'IN' for India.
     */
    country_code?: string;
    /**
     * - Specifies the country's unique
     * identifier allowing the ISO 3166-1 alpha-2 standard. This two-letter code
     * is crucial for distinguishing countries in international transactions, data
     * processing, and shipping logistics.
     */
    country_iso_code?: string;
};
/** @returns {BillingInfo} */
declare function BillingInfo(): BillingInfo;
type BillingInfo = {
    alternate_mobile_number?: string;
    state?: string;
    /**
     * - A unique identifier assigned to the
     * customer, facilitating order tracking and service customization.
     */
    customer_code?: string;
    middle_name?: string;
    primary_mobile_number?: string;
    last_name?: string;
    gender?: string;
    house_no?: string;
    first_name?: string;
    title?: string;
    country?: string;
    /**
     * - The code representing the state or region
     * within the country, if applicable.
     */
    state_code?: string;
    city?: string;
    /**
     * - A unique identifier assigned to
     * customers by an external system or partner organization. This code is
     * crucial for integrating and synchronizing customer information across
     * different platforms or services.
     */
    external_customer_code?: string;
    floor_no?: string;
    alternate_email?: string;
    address?: string;
    /**
     * - Area of the customer's location
     */
    area?: string;
    /**
     * - First line of the address
     */
    address1?: string;
    /**
     * - Pincode of the customer's location
     */
    pincode?: string;
    /**
     * - Primary email address for the customer
     */
    primary_email?: string;
    /**
     * - Second line of the address
     */
    address2?: string;
    /**
     * - Uniquely identifies the country
     * associated with the billing address details. This code is essential for
     * international shipments, ensuring accurate routing and delivery across
     * global postal and customs services. Examples include 'US' for the United
     * States, 'IN' for India.
     */
    country_code?: string;
    /**
     * - The ISO 3166-1 alpha-2 code for the
     * country, consisting of two uppercase letters. This standardized format
     * ensures consistent identification of countries across systems.
     */
    country_iso_code?: string;
};
/** @returns {UserInfo} */
declare function UserInfo(): UserInfo;
type UserInfo = {
    /**
     * - The unique identifier assigned to the user.
     */
    user_id?: string;
    /**
     * - Type of the user
     */
    user_type?: string;
    /**
     * - Primary email address for the user
     */
    primary_email?: string;
    /**
     * - Gender of the user
     */
    gender?: string;
    /**
     * - User's first name
     */
    first_name: string;
    /**
     * - User's last name
     */
    last_name?: string;
    /**
     * - Primary mobile number for the user
     */
    primary_mobile_number: string;
};
/** @returns {TaxInfo} */
declare function TaxInfo(): TaxInfo;
type TaxInfo = {
    /**
     * - Goods and Services Tax Identification
     * Number (GSTIN) for business-to-business transactions
     */
    b2b_gstin_number?: string;
    /**
     * - GSTIN of the customer
     */
    gstin?: string;
    /**
     * - PAN assigned to individuals or entities for tax
     * purposes in India
     */
    pan_no?: string;
};
/** @returns {PaymentMethod} */
declare function PaymentMethod(): PaymentMethod;
type PaymentMethod = {
    /**
     * - Entity responsible for collecting the payment
     */
    collect_by: string;
    /**
     * - Mode of payment. Refer to [API & references (in Nav
     * bar) → Payment Modes] for a list of valid payment methods.
     */
    mode: string;
    /**
     * - Entity responsible for processing refunds
     */
    refund_by: string;
    /**
     * - Name of the payment method
     */
    name: string;
    /**
     * - A number representing the monetary value
     * associated with the payment method.
     */
    amount: number;
    /**
     * - An object for any additional metadata related to
     * the payment method.
     */
    meta?: any;
    /**
     * - An object that holds
     * transaction-specific information.
     */
    transaction_data?: any;
};
/** @returns {PaymentInfo} */
declare function PaymentInfo(): PaymentInfo;
type PaymentInfo = {
    /**
     * - Primary payment method used for the order
     */
    primary_mode: string;
    /**
     * - Payment mode used for the order
     */
    payment_mode?: string;
    /**
     * - A lists all available payment
     * methods used in the transaction.
     */
    payment_methods?: PaymentMethod[];
};
/** @returns {CreateOrderAPI} */
declare function CreateOrderAPI(): CreateOrderAPI;
type CreateOrderAPI = {
    /**
     * - List of Shipments which includes shipment
     * data like shipment items, shipment promise, shipment type, shipment order
     * type, shipment DP options etc.
     */
    shipments: Shipment[];
    shipping_info: ShippingInfo;
    billing_info: ShippingInfo;
    /**
     * - This object can accommodate a range of
     * currency-related information, provides a flexible structure for storing
     * comprehensive details about the currency or currencies involved in a transaction.
     */
    currency_info?: any;
    /**
     * - A unique identifier for the order
     * assigned by an external system.
     */
    external_order_id?: string;
    /**
     * - It details the various fees associated with the order.
     */
    charges?: Charge[];
    /**
     * - Date and time when the order
     * was created in an external system
     */
    external_creation_date?: string;
    /**
     * - Meta data of the order that contains additional,
     * potentially dynamic information about the order.
     */
    meta?: any;
    tax_info?: TaxInfo;
    config: CreateOrderConfig;
    payment_info: PaymentInfo;
    user_info?: UserInfo;
    /**
     * - Unique identifier for the store
     * where the order was placed.
     */
    ordering_store_id?: number;
    /**
     * - The platform used to place the order.
     */
    order_platform?: string;
    /**
     * - Represents the current status of the order,
     * specifying whether the order is in a 'pendency' state (awaiting further
     * action) or marked as 'complete'.
     */
    status?: string;
    system_messages?: SystemMessages[];
    /**
     * - Type of order being placed
     */
    order_type?: string;
    /**
     * - Unique identifier for the order.
     */
    fynd_order_id?: string;
    /**
     * - A unique identifier for the application
     * or system that is making the order request.
     */
    application_id?: string;
    /**
     * - External shipment identifier or
     * marketplace's unique shipment identifier.
     */
    external_shipment_id?: string;
};
/** @returns {CreateOrderErrorReponse} */
declare function CreateOrderErrorReponse(): CreateOrderErrorReponse;
type CreateOrderErrorReponse = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - Contains details about the error.
     */
    errors?: string;
    /**
     * - Represents the HTTP status code of the API response.
     */
    status_code?: number;
    /**
     * - A string that represents the unique
     * identifier assigned to the order.
     */
    fynd_order_id?: string;
};
/** @returns {PaymentMethods} */
declare function PaymentMethods(): PaymentMethods;
type PaymentMethods = {
    collect_by?: string;
    refund_by?: string;
    mode?: string;
};
/** @returns {CreateChannelPaymentInfo} */
declare function CreateChannelPaymentInfo(): CreateChannelPaymentInfo;
type CreateChannelPaymentInfo = {
    source?: string;
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
};
/** @returns {CreateChannelConfig} */
declare function CreateChannelConfig(): CreateChannelConfig;
type CreateChannelConfig = {
    dp_configuration?: DPConfiguration;
    shipment_assignment?: string;
    location_reassignment?: boolean;
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
};
/** @returns {CreateChannelConfigData} */
declare function CreateChannelConfigData(): CreateChannelConfigData;
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
/** @returns {CreateChannelConifgErrorResponseSchema} */
declare function CreateChannelConifgErrorResponseSchema(): CreateChannelConifgErrorResponseSchema;
type CreateChannelConifgErrorResponseSchema = {
    /**
     * - A string that represents the unique identifier
     * assigned to the order.
     */
    error?: string;
    request_id?: string;
    status: number;
    info?: any;
    stack_trace?: string;
    code?: string;
    meta?: string;
    message: string;
    exception?: string;
};
/** @returns {UploadManifestConsent} */
declare function UploadManifestConsent(): UploadManifestConsent;
type UploadManifestConsent = {
    /**
     * - A URL that directs users to a consent page
     * or document related to the upload of the manifest.
     */
    consent_url: string;
    /**
     * - The unique identifier for the manifest being uploaded.
     */
    manifest_id: string;
};
/** @returns {CreateChannelConfigResponseSchema} */
declare function CreateChannelConfigResponseSchema(): CreateChannelConfigResponseSchema;
type CreateChannelConfigResponseSchema = {
    is_inserted?: boolean;
    is_upserted?: boolean;
    acknowledged?: boolean;
};
/** @returns {PlatformOrderUpdate} */
declare function PlatformOrderUpdate(): PlatformOrderUpdate;
type PlatformOrderUpdate = {
    /**
     * - A string that represents the unique identifier
     * assigned to the order.
     */
    order_id: string;
};
/** @returns {ResponseDetail} */
declare function ResponseDetail(): ResponseDetail;
type ResponseDetail = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - A descriptive message providing additional
     * information about the API response.
     */
    message?: string;
    /**
     * - Represents the HTTP status code of the API response.
     */
    status?: number;
};
/** @returns {FyndOrderIdList} */
declare function FyndOrderIdList(): FyndOrderIdList;
type FyndOrderIdList = {
    /**
     * - An array of strings that represent
     * unique identifiers assigned to an order.
     */
    fynd_order_id?: string[];
    /**
     * - A string representing the start date for
     * the order status query.
     */
    start_date?: string;
    /**
     * - A string representing the end date for the
     * order status query.
     */
    end_date?: string;
    /**
     * - An integer representing the mobile number
     * associated with the order.
     */
    mobile?: number;
};
/** @returns {OrderStatus} */
declare function OrderStatus(): OrderStatus;
type OrderStatus = {
    /**
     * - An array of objects that
     * provide details about the orders, including their respective order IDs.
     */
    order_details?: FyndOrderIdList[];
    /**
     * - Denotes the start date and time when the
     * order was created.
     */
    start_date: string;
    /**
     * - Specifies the deadline by which a particular
     * action related to the order needs to be completed.
     */
    end_date: string;
    mobile: number;
};
/** @returns {BagStateTransitionMap} */
declare function BagStateTransitionMap(): BagStateTransitionMap;
type BagStateTransitionMap = {
    fynd?: any;
    affiliate?: any;
};
/** @returns {RoleBaseStateTransitionMapping} */
declare function RoleBaseStateTransitionMapping(): RoleBaseStateTransitionMapping;
type RoleBaseStateTransitionMapping = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - A list of possible next statuses that
     * can be transitioned to from the current status.
     */
    next_statuses?: string[];
};
/** @returns {FetchCreditBalanceRequestPayload} */
declare function FetchCreditBalanceRequestPayload(): FetchCreditBalanceRequestPayload;
type FetchCreditBalanceRequestPayload = {
    affiliate_id: string;
    seller_id: string;
    customer_mobile_number: string;
};
/** @returns {CreditBalanceInfo} */
declare function CreditBalanceInfo(): CreditBalanceInfo;
type CreditBalanceInfo = {
    total_credited_balance?: string;
    reason?: string;
    customer_mobile_number?: string;
};
/** @returns {FetchCreditBalanceResponsePayload} */
declare function FetchCreditBalanceResponsePayload(): FetchCreditBalanceResponsePayload;
type FetchCreditBalanceResponsePayload = {
    success: boolean;
    data: CreditBalanceInfo;
};
/** @returns {RefundModeConfigRequestPayload} */
declare function RefundModeConfigRequestPayload(): RefundModeConfigRequestPayload;
type RefundModeConfigRequestPayload = {
    /**
     * - A unique identifier for the order placed
     * through the Fynd platform.
     */
    fynd_order_id: string;
    /**
     * - A unique identifier representing the seller
     * associated with the order.
     */
    seller_id: number;
    /**
     * - An identifier for the affiliate partner
     * associated with the order.
     */
    affiliate_id: string;
    /**
     * - The mobile phone number of the
     * customer who placed the order.
     */
    customer_mobile_number?: number;
};
/** @returns {RefundOption} */
declare function RefundOption(): RefundOption;
type RefundOption = {
    /**
     * - The actual value representing the refund option.
     */
    value?: string;
    /**
     * - A unique identifier for the refund mode
     */
    slug?: string;
    /**
     * - A user-friendly name for the refund option.
     */
    name?: string;
    /**
     * - A string indicating the type of refund
     * information provided.
     */
    type?: string;
};
/** @returns {RefundModeFormat} */
declare function RefundModeFormat(): RefundModeFormat;
type RefundModeFormat = {
    /**
     * - Specifies the destination or method for the refunds.
     */
    refund_to?: string;
};
/** @returns {RefundModeInfo} */
declare function RefundModeInfo(): RefundModeInfo;
type RefundModeInfo = {
    /**
     * - A flag indicating whether the refund mode
     * is currently active or not.
     */
    is_active?: boolean;
    /**
     * - A unique identifier for the refund mode.
     */
    slug?: string;
    /**
     * - A list of available refund options
     * associated with this refund mode.
     */
    options?: RefundOption[];
    /**
     * - A user-friendly name for the refund mode.
     */
    display_name?: string;
    format?: RefundModeFormat;
};
/** @returns {RefundModeConfigResponsePayload} */
declare function RefundModeConfigResponsePayload(): RefundModeConfigResponsePayload;
type RefundModeConfigResponsePayload = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success: boolean;
    /**
     * - An array of possible refund mode
     * information objects.
     */
    data: RefundModeInfo[];
    /**
     * - Represents the HTTP status code of the API response.
     */
    status?: number;
    /**
     * - A descriptive message providing additional
     * information about the API response.
     */
    message?: string;
};
/** @returns {AttachUserOtpData} */
declare function AttachUserOtpData(): AttachUserOtpData;
type AttachUserOtpData = {
    /**
     * - A string representing a unique identifier for
     * the OTP request.
     */
    request_id: string;
};
/** @returns {AttachUserInfo} */
declare function AttachUserInfo(): AttachUserInfo;
type AttachUserInfo = {
    /**
     * - A string representing the user's first name.
     */
    first_name: string;
    /**
     * - A string representing the user's last name.
     */
    last_name: string;
    /**
     * - A string representing the user's mobile number.
     */
    mobile: string;
    /**
     * - Uniquely identifies the country
     * associated with the user information. This code is essential for
     * international shipments, ensuring accurate routing and delivery across
     * global postal and customs services. Examples include 'US' for the United
     * States, 'IN' for India.
     */
    country_code?: string;
};
/** @returns {AttachOrderUser} */
declare function AttachOrderUser(): AttachOrderUser;
type AttachOrderUser = {
    otp_data: AttachUserOtpData;
    /**
     * - A unique identifier for the order
     * associated with the user attach.
     */
    fynd_order_id: string;
    user_info: AttachUserInfo;
};
/** @returns {AttachOrderUserResponseSchema} */
declare function AttachOrderUserResponseSchema(): AttachOrderUserResponseSchema;
type AttachOrderUserResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - A descriptive message providing additional
     * information about the API response.
     */
    message?: string;
};
/** @returns {SendUserMobileOTP} */
declare function SendUserMobileOTP(): SendUserMobileOTP;
type SendUserMobileOTP = {
    /**
     * - The mobile phone number of the user to whom the
     * OTP (One-Time Password) will be sent.
     */
    mobile: number;
    /**
     * - Uniquely identifies the country
     * associated with the mobile number. This code is essential for for correctly
     * formatting and routing the OTP messages to mobile phones across
     * international borders. Examples include 'US' for the United States, 'IN' for India.
     */
    country_code?: string;
};
/** @returns {PointBlankOtpData} */
declare function PointBlankOtpData(): PointBlankOtpData;
type PointBlankOtpData = {
    /**
     * - A unique identifier for the OTP request.
     */
    request_id?: string;
    /**
     * - The amount of time (in seconds) before
     * the OTP can be resent to the user.
     */
    resend_timer?: number;
    /**
     * - A message providing additional information
     * about the OTP request.
     */
    message?: string;
    /**
     * - The mobile number (in integer format)
     * associated with the OTP request.
     */
    mobile?: number;
};
/** @returns {SendUserMobileOtpResponseSchema} */
declare function SendUserMobileOtpResponseSchema(): SendUserMobileOtpResponseSchema;
type SendUserMobileOtpResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - The HTTP status code of the API response
     * (200/400/500/503).
     */
    status?: number;
    /**
     * - A descriptive message providing additional
     * information about the API response.
     */
    message?: string;
    data?: PointBlankOtpData;
};
/** @returns {VerifyOtpData} */
declare function VerifyOtpData(): VerifyOtpData;
type VerifyOtpData = {
    /**
     * - A unique identifier for the OTP verification request.
     */
    request_id: string;
    /**
     * - The mobile number associated with the OTP verification.
     */
    mobile: string;
    /**
     * - The OTP code received by the user.
     */
    otp_code: number;
};
/** @returns {VerifyMobileOTP} */
declare function VerifyMobileOTP(): VerifyMobileOTP;
type VerifyMobileOTP = {
    otp_data: VerifyOtpData;
    /**
     * - A unique identifier for the order
     * associated with the OTP verification.
     */
    fynd_order_id: string;
};
/** @returns {VerifyOtpResponseData} */
declare function VerifyOtpResponseData(): VerifyOtpResponseData;
type VerifyOtpResponseData = {
    /**
     * - The mobile number associated with the verified OTP.
     */
    mobile?: string;
    /**
     * - A string that provides a message about the
     * outcome of the verification process.
     */
    message?: string;
    /**
     * - Unique identifier for the order
     * associated with the OTP verification.
     */
    fynd_order_id?: string;
    /**
     * - A string indicating the country code
     * associated with the mobile number.
     */
    country_code?: string;
};
/** @returns {VerifyOtpResponseSchema} */
declare function VerifyOtpResponseSchema(): VerifyOtpResponseSchema;
type VerifyOtpResponseSchema = {
    /**
     * - Represents the HTTP status code of the API response.
     */
    status?: number;
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - A descriptive message providing additional
     * information about the API response.
     */
    message?: string;
    data?: VerifyOtpResponseData;
};
/** @returns {BulkReportsFiltersSchema} */
declare function BulkReportsFiltersSchema(): BulkReportsFiltersSchema;
type BulkReportsFiltersSchema = {
    /**
     * - Comma separated values of bag statuses(to
     * be deprecated).
     */
    bag_status?: string;
    /**
     * - Comma separated values of
     * shipment's operational statuses.
     */
    operational_status?: string;
    /**
     * - Comma separated values of store ids.
     */
    stores?: string;
    /**
     * - Specifies the type of shipments to
     * retrieve. Use "1" for non-breached shipments and "-1" for breached shipments.
     */
    time_to_dispatch?: string;
    /**
     * - Filters shipments by payment method.
     * Use "PREPAID" for shipments paid in advance, and "COD" for cash-on-delivery
     * shipments.
     */
    payment_methods?: string;
    /**
     * - Comma separated values of delivery partners.
     * Either dp_id or slug(extension_id|scheme_id).
     */
    dp_ids?: string;
    /**
     * - Comma separated values of sales channels ids.
     */
    sales_channels?: string;
    /**
     * - A comma-separated list of tags associated with
     * the entity. Each tag is a keyword or label that categorizes or describes the entity.
     */
    tags?: string;
    /**
     * - Indicates the lock status of the entity.
     * "true" means the shipment is in a complete or partial lock state, while
     * "false" means it is unlocked.
     */
    lock_status?: string;
};
/** @returns {BulkReportsDownloadRequestSchema} */
declare function BulkReportsDownloadRequestSchema(): BulkReportsDownloadRequestSchema;
type BulkReportsDownloadRequestSchema = {
    /**
     * - A list of specific store IDs for which the
     * reports should be generated.
     */
    store_ids?: string[];
    /**
     * - Defines the category or type of lane for
     * which the report is being requested for download.
     */
    lane_type?: string;
    /**
     * - Allows users to specify custom
     * headers for the downloaded report.
     */
    custom_headers?: string[];
    /**
     * - Indicates the type of report being requested.
     */
    report_type?: string;
    /**
     * - UTC start date in ISO format, defines the
     * beginning of the date range for which the report data should be collected.
     */
    start_date?: string;
    /**
     * - UTC end date in ISO format, defines the end
     * date range for which the report data should be collected.
     */
    end_date?: string;
    /**
     * - Download for specific enitites or for
     * search filters applied, entities can be bag, shipment or order_id, etc.
     */
    entities?: string[];
    /**
     * - Specifies the type of filtering to be
     * applied to the report data.
     */
    filter_type?: string;
    /**
     * - Indicates whether the report
     * should include data from cross-company operations.
     */
    is_cross_company_enabled?: boolean;
    /**
     * - A flexible object that allows
     * users to define custom filters specific to the lanes being reported on.
     */
    custom_filters_for_lane?: any;
    filters?: BulkReportsFiltersSchema;
};
/** @returns {BulkReportsDownloadResponseSchema} */
declare function BulkReportsDownloadResponseSchema(): BulkReportsDownloadResponseSchema;
type BulkReportsDownloadResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - A unique identifier for the batch of reports generated.
     */
    batch_id?: string;
};
/** @returns {APIFailedResponseSchema} */
declare function APIFailedResponseSchema(): APIFailedResponseSchema;
type APIFailedResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    status?: boolean;
    /**
     * - A descriptive message detailing the error that
     * occurred during the API call.
     */
    error?: string;
};
/** @returns {BulkStateTransistionRequestSchema} */
declare function BulkStateTransistionRequestSchema(): BulkStateTransistionRequestSchema;
type BulkStateTransistionRequestSchema = {
    /**
     * - Endpoint or resource URL where the bulk state
     * transition request should be directed.
     */
    url?: string;
    /**
     * - Name of the file associated with the bulk operation.
     */
    file_name?: string;
};
/** @returns {BulkStateTransistionResponseSchema} */
declare function BulkStateTransistionResponseSchema(): BulkStateTransistionResponseSchema;
type BulkStateTransistionResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    status?: boolean;
    /**
     * - A descriptive message providing additional
     * information about the API response.
     */
    message?: string;
    /**
     * - A unique identifier for the batch of reports generated.
     */
    batch_id?: string;
};
/** @returns {ShipmentActionInfo} */
declare function ShipmentActionInfo(): ShipmentActionInfo;
type ShipmentActionInfo = {
    label?: string[];
    invoice?: string[];
    /**
     * - List of Failed Shipments which
     * includes shipment data like shipment items, shipment promise, Shipment
     * type, shipment order type, shipment dp options etc.
     */
    failed_shipments?: any[];
    processing_shipments?: string[];
    successful_shipments?: string[];
    invoiceable_shipments?: string[];
    /**
     * - Specifies the shipment
     * records that have encountered issues during the invoicing process.
     */
    failed_invoiced_shipments?: any;
    processing_invoice_shipments?: string[];
    successful_invoiced_shipments?: string[];
};
/** @returns {BulkActionListingData} */
declare function BulkActionListingData(): BulkActionListingData;
type BulkActionListingData = {
    /**
     * - The unique identifier for the store
     * associated with the bulk action.
     */
    store_id?: number;
    /**
     * - A timestamp indicating when the bulk
     * action was uploaded.
     */
    uploaded_on?: string;
    /**
     * - Unique identifier of a company on the platform.
     */
    company_id?: number;
    shipments_action_info?: ShipmentActionInfo;
    /**
     * - Indicates whether the bulk action is
     * eligible for invoicing.
     */
    is_invoiceable?: boolean;
    /**
     * - The name of the user who initiated or
     * uploaded the bulk action.
     */
    user_name?: string;
    /**
     * - The URL where the uploaded file can be accessed.
     */
    file_url?: string;
    /**
     * - A flexible object that can contain additional
     * metadata related to the bulk action.
     */
    meta?: any;
    /**
     * - The type of document that is
     * used for invoicing this bulk action.
     */
    invoice_document_type?: string;
    /**
     * - The type of document that is used
     * for creating labels for this bulk action.
     */
    label_document_type?: string;
    /**
     * - The name of the file that was uploaded as
     * part of the bulk action.
     */
    file_name?: string;
    /**
     * - The name of the store associated with the
     * bulk action.
     */
    store_name?: string;
    /**
     * - A timestamp (in Unix format) indicating
     * when the bulk action was last updated.
     */
    updated_ts?: number;
    /**
     * - Indicates the current status of the bulk action.
     */
    status?: string;
    /**
     * - A code representing the store, which can be
     * used for internal tracking or identification.
     */
    store_code?: string;
    /**
     * - Specifies the type of bulk action
     * being performed.
     */
    bulk_action_type?: string;
    /**
     * - A timestamp indicating when the bulk action
     * was created.
     */
    created_ts?: string;
    /**
     * - Represents the current status of the
     * invoice associated with the bulk action.
     */
    invoice_status?: string;
    /**
     * - Indicates whether an
     * invoice label has been generated for the bulk action or not.
     */
    do_invoice_label_generated?: boolean;
    /**
     * - A unique identifier for the bulk action record.
     */
    id?: number;
    /**
     * - The unique identifier for the user who
     * initiated the bulk action.
     */
    user_id?: string;
    /**
     * - Indicates the last
     * invoice label type selected for the bulk action.
     */
    last_selected_invoice_label_type?: string;
    /**
     * - A unique identifier for the batch associated
     * with this bulk action.
     */
    batch_id?: string;
    /**
     * - The identifier or name of the individual
     * or system that uploaded the bulk action.
     */
    uploaded_by?: string;
    /**
     * - The type of document
     * generated for invoice labels.
     */
    invoicelabel_document_type?: string;
    /**
     * - The number of failed shipments in this
     * bulk action.
     */
    failed_sh_count?: number;
    /**
     * - The number of successful shipments
     * in this bulk action.
     */
    successful_sh_count?: number;
    /**
     * - The total number of shipments processed in
     * this bulk action.
     */
    total_count?: number;
    /**
     * - An array of shipment identifiers
     * that failed during processing.
     */
    failed_shipments?: string[];
    /**
     * - The number of shipments
     * successfully invoiced.
     */
    successful_invoiced_count?: number;
    /**
     * - The number of shipments that
     * failed during invoicing.
     */
    failed_invoiced_count?: number;
    /**
     * - The total number of shipments
     * that have been invoiced.
     */
    total_invoiced_count?: number;
};
/** @returns {BulkListinPage} */
declare function BulkListinPage(): BulkListinPage;
type BulkListinPage = {
    /**
     * - Indicates the current page number being viewed
     * in the pagination.
     */
    current?: number;
    /**
     * - A flag indicating whether there is a
     * previous page available.
     */
    has_previous?: boolean;
    /**
     * - A flag indicating whether there is a next
     * page available.
     */
    has_next?: boolean;
    /**
     * - The total number of items available in the
     * dataset, regardless of pagination.
     */
    total?: number;
    /**
     * - The total number of items present on the
     * current page.
     */
    item_total?: number;
    /**
     * - A string that may indicate the type of pagination
     * or the context of the data being paginated.
     */
    type?: string;
    /**
     * - The number of items per page.
     */
    size?: number;
};
/** @returns {BulkListingResponseSchema} */
declare function BulkListingResponseSchema(): BulkListingResponseSchema;
type BulkListingResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - An array containing the details
     * of the bulk actions listed.
     */
    data?: BulkActionListingData[];
    page?: BulkListinPage;
    /**
     * - Total number of bulk actions available in
     * the system, regardless of pagination.
     */
    total_count?: number;
};
/** @returns {JobDetailsData} */
declare function JobDetailsData(): JobDetailsData;
type JobDetailsData = {
    /**
     * - A unique identifier for the batch of bulk
     * actions associated with this job.
     */
    batch_id?: string;
    /**
     * - The total number of shipments
     * processed in this job.
     */
    total_shipments_count?: number;
    /**
     * - An array of identifiers for
     * shipments that were successfully processed.
     */
    successful_shipment_ids?: string[];
    /**
     * - The number of successful
     * shipments processed in this job.
     */
    successful_shipments_count?: number;
    /**
     * - The number of shipments that
     * failed to process in this job.
     */
    failed_shipments_count?: number;
    /**
     * - The number of shipments
     * currently being processed for this job.
     */
    processing_shipments_count?: number;
    /**
     * - Unique identifier of a company on the platform.
     */
    company_id?: string;
};
/** @returns {JobDetailsResponseSchema} */
declare function JobDetailsResponseSchema(): JobDetailsResponseSchema;
type JobDetailsResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - An array representing the details of a job.
     */
    data?: JobDetailsData[];
    /**
     * - An URL to download the submitted job file.
     */
    file_url?: string;
    /**
     * - A message providing additional context about
     * the request's outcome.
     */
    message?: string;
    /**
     * - An array of records that failed
     * during processing, with additional properties providing details about each failure.
     */
    failed_records?: any[];
    /**
     * - The name or identifier of the user who
     * uploaded the job.
     */
    uploaded_by?: string;
    /**
     * - The unique identifier for the user who
     * performed the upload.
     */
    user_id?: string;
    /**
     * - A timestamp indicating when the job was created.
     */
    created_ts?: string;
    /**
     * - A timestamp indicating when the job was uploaded.
     */
    uploaded_on?: string;
    /**
     * - The current status of the job.
     */
    status?: string;
};
/** @returns {JobFailedResponseSchema} */
declare function JobFailedResponseSchema(): JobFailedResponseSchema;
type JobFailedResponseSchema = {
    /**
     * - The name of the file associated with the failed job.
     */
    file_name?: string;
    /**
     * - The URL where the uploaded bulk file can be accessed.
     */
    url?: string;
};
/** @returns {ManifestPageInfo} */
declare function ManifestPageInfo(): ManifestPageInfo;
type ManifestPageInfo = {
    /**
     * - The current page number being viewed.
     */
    current: number;
    /**
     * - The total number of records available across all pages.
     */
    total: number;
    /**
     * - Indicates whether there is a next page available.
     */
    has_next: boolean;
    /**
     * - The size of the current page's results set.
     */
    size: number;
    /**
     * - Indicates whether there is a previous page
     * available.
     */
    has_previous: boolean;
    /**
     * - Indicates whether there is a previous page available.
     */
    type: string;
};
/** @returns {ManifestItemDetails} */
declare function ManifestItemDetails(): ManifestItemDetails;
type ManifestItemDetails = {
    /**
     * - The quantity of items in the shipment.
     */
    quantity?: number;
    /**
     * - Unique identifier for the shipment.
     */
    shipment_id: string;
    /**
     * - Unique identifier for the order.
     */
    order_id: string;
    /**
     * - Unique identifier for the shipment's air
     * waybill number.
     */
    awb_number?: string;
    /**
     * - Unique identifier for the invoice
     * associated with the shipment.
     */
    invoice_id?: string;
    /**
     * - Timestamp indicating when the
     * shipment was created.
     */
    shipment_created_at?: string;
};
/** @returns {ManifestShipmentListing} */
declare function ManifestShipmentListing(): ManifestShipmentListing;
type ManifestShipmentListing = {
    /**
     * - Total number of shipment items in the manifest.
     */
    total_count: number;
    /**
     * - Identifier or name for the lane associated with the
     * shipments.
     */
    lane: string;
    page: ManifestPageInfo;
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success: boolean;
    /**
     * - Represents the HTTP status code of the API response.
     */
    status?: number;
    /**
     * - List of items in the manifest, each
     * containing detailed shipment information.
     */
    items: ManifestItemDetails[];
    /**
     * - Additional message or information regarding
     * the response.
     */
    message?: string;
};
/** @returns {DateRange} */
declare function DateRange(): DateRange;
type DateRange = {
    /**
     * - The start date of the range.
     */
    from_date?: string;
    /**
     * - The end date of the range.
     */
    to_date?: string;
};
/** @returns {Filters} */
declare function Filters(): Filters;
type Filters = {
    date_range?: DateRange;
    /**
     * - CDN link of the logo displayed on the manifest page.
     */
    logo?: string;
    /**
     * - The start date for filtering records,
     * provided in UTC and formatted in ISO format.
     */
    from_date?: string;
    /**
     * - Specifies a specific store ID for filtering the records.
     */
    stores?: number;
    /**
     * - The end date for filtering records, provided
     * in UTC and formatted in ISO format.
     */
    to_date?: string;
    /**
     * - The name of the courier partner to filter records by.
     */
    dp_name?: string;
    /**
     * - Combination of courier partner ids separated by
     * comma operator.
     */
    dp_ids?: string;
    /**
     * - Specifies criteria related to the shipment lanes.
     */
    lane?: string;
    /**
     * - A list of selected shipments that
     * are mapped to the manifest.
     */
    selected_shipments?: string;
    /**
     * - The name of the store for filtering records.
     */
    store_name?: string;
    /**
     * - A list of shipments that have
     * been unmapped from the manifest.
     */
    deselected_shipments?: string;
};
/** @returns {ManifestFile} */
declare function ManifestFile(): ManifestFile;
type ManifestFile = {
    /**
     * - This field represents the unique identifier for
     * the file within the storage system.
     */
    key?: string;
    /**
     * - Indicates the geographical region where the
     * file is stored.
     */
    region?: string;
    /**
     * - The name of the storage bucket where the file is stored.
     */
    bucket?: string;
};
/** @returns {ManifestMediaUpdate} */
declare function ManifestMediaUpdate(): ManifestMediaUpdate;
type ManifestMediaUpdate = {
    /**
     * - The name or type of the media entity being updated.
     */
    entity?: string;
    /**
     * - A URL or link to the media resource.
     */
    link?: string;
    /**
     * - A numerical code representing the media update
     * status or type.
     */
    code?: number;
    /**
     * - The type of media being updated.
     */
    media_type?: string;
    /**
     * - Indicate the status of this media update.
     */
    status?: boolean;
    file?: ManifestFile;
};
/** @returns {PDFMeta} */
declare function PDFMeta(): PDFMeta;
type PDFMeta = {
    /**
     * - This field contains information related to user consent.
     */
    consent?: string;
    /**
     * - An array of media update
     * entries associated with the manifest.
     */
    media_updates?: ManifestMediaUpdate[];
};
/** @returns {TotalShipmentPricesCount} */
declare function TotalShipmentPricesCount(): TotalShipmentPricesCount;
type TotalShipmentPricesCount = {
    /**
     * - This field represents the total monetary
     * value of the shipments.
     */
    total_price?: number;
    /**
     * - This field represents the number of
     * shipments associated with the manifest.
     */
    shipment_count?: number;
};
/** @returns {ManifestMeta} */
declare function ManifestMeta(): ManifestMeta;
type ManifestMeta = {
    filters?: Filters;
    total_shipment_prices_count?: TotalShipmentPricesCount;
};
/** @returns {Manifest} */
declare function Manifest(): Manifest;
type Manifest = {
    /**
     * - Unique identifier of a company on the platform.
     */
    company_id: number;
    filters?: Filters;
    pdf_meta?: PDFMeta;
    meta?: ManifestMeta;
    /**
     * - Indicates whether the manifest is currently
     * active or has been completed/closed.
     */
    is_active: boolean;
    /**
     * - The unique identifier of the user who created or
     * modified the manifest.
     */
    user_id: string;
    /**
     * - The date and time when the manifest was created.
     */
    created_at: string;
    /**
     * - A timestamp representing when the manifest
     * was created, typically in UTC.
     */
    created_ts?: string;
    /**
     * - The unique identifier assigned to the manifest.
     */
    manifest_id: string;
    /**
     * - The current status of the Manifest.
     */
    status: string;
    /**
     * - The unique identifier assigned to the manifest item.
     */
    id: number;
    /**
     * - A universally unique identifier for the manifest.
     */
    uid: string;
    /**
     * - The username or identifier of the individual
     * who created the manifest.
     */
    created_by: string;
};
/** @returns {ManifestList} */
declare function ManifestList(): ManifestList;
type ManifestList = {
    /**
     * - A list of manifest records.
     */
    items?: Manifest[];
    page?: ManifestPageInfo;
};
/** @returns {ManifestDetails} */
declare function ManifestDetails(): ManifestDetails;
type ManifestDetails = {
    /**
     * - An list of detailed information
     * about individual shipments within the manifest.
     */
    items?: ManifestItemDetails[];
    page?: ManifestPageInfo;
    /**
     * - Represents the count of
     * additional shipments associated with the manifest.
     */
    additional_shipment_count?: number;
    /**
     * - An array of manifest objects that
     * provide overarching details about the manifest itself.
     */
    manifest_details?: Manifest[];
};
/** @returns {FiltersRequestSchema} */
declare function FiltersRequestSchema(): FiltersRequestSchema;
type FiltersRequestSchema = {
    date_range?: DateRange;
    logo?: string;
    stores: number;
    dp_name: string;
    dp_ids: number;
    lane: string;
    store_name: string;
};
/** @returns {ProcessManifest} */
declare function ProcessManifest(): ProcessManifest;
type ProcessManifest = {
    filters: FiltersRequestSchema;
    action: string;
    unique_id: string;
    manifest_id?: string;
};
/** @returns {ProcessManifestResponseSchema} */
declare function ProcessManifestResponseSchema(): ProcessManifestResponseSchema;
type ProcessManifestResponseSchema = {
    /**
     * - Id of the company.
     */
    company_id?: number;
    filters?: Filters;
    /**
     * - Id of the user.
     */
    user_id?: string;
    /**
     * - Id of the manifest.
     */
    manifest_id?: string;
    action?: string;
    uid?: string;
    created_by?: string;
};
/** @returns {ProcessManifestItemResponseSchema} */
declare function ProcessManifestItemResponseSchema(): ProcessManifestItemResponseSchema;
type ProcessManifestItemResponseSchema = {
    items?: ProcessManifestResponseSchema;
};
/** @returns {FilterInfoOption} */
declare function FilterInfoOption(): FilterInfoOption;
type FilterInfoOption = {
    /**
     * - The display text of the option.
     */
    text?: string;
    /**
     * - Name of the option.
     */
    name?: string;
    /**
     * - Placeholder text of the option.
     */
    placeholder_text?: string;
    /**
     * - The value of the option.
     */
    value?: string;
    /**
     * - Minimum search size of the option.
     */
    min_search_size?: number;
    /**
     * - Specifies whether the option should be shown in the UI.
     */
    show_ui?: boolean;
};
/** @returns {FiltersInfo} */
declare function FiltersInfo(): FiltersInfo;
type FiltersInfo = {
    /**
     * - Options of the filter.[dropdown]
     */
    options?: FilterInfoOption[];
    /**
     * - Display text of filter
     */
    text: string;
    /**
     * - Placeholder text of filter.
     */
    placeholder_text?: string;
    /**
     * - The value of the filter.
     */
    value: string;
    /**
     * - Specifies whether the filter is required or not.
     */
    required?: boolean;
    /**
     * - Single_select/multi_select
     */
    type: string;
};
/** @returns {ManifestFiltersResponseSchema} */
declare function ManifestFiltersResponseSchema(): ManifestFiltersResponseSchema;
type ManifestFiltersResponseSchema = {
    advance_filter?: FiltersInfo[];
    global_filter?: FiltersInfo[];
};
/** @returns {PageDetails} */
declare function PageDetails(): PageDetails;
type PageDetails = {
    /**
     * - Current page number
     */
    current?: number;
    /**
     * - If next page contains any result
     */
    has_next?: boolean;
    /**
     * - If previous page contains any result
     */
    has_previous?: boolean;
    /**
     * - Total count of the results present in the
     * requested filter
     */
    item_total: number;
    /**
     * - Page size
     */
    size?: number;
    /**
     * - Type of the page
     */
    type?: string;
};
/** @returns {EInvoiceIrnDetails} */
declare function EInvoiceIrnDetails(): EInvoiceIrnDetails;
type EInvoiceIrnDetails = {
    ack_dt: string;
    ack_no: string;
    irn: string;
    signed_invoice: string;
    /**
     * - QR code containing the signed e-invoice
     * data for quick and secure verification purposes.
     */
    signed_qr_code: string;
};
/** @returns {EInvoiceErrorDetails} */
declare function EInvoiceErrorDetails(): EInvoiceErrorDetails;
type EInvoiceErrorDetails = {
    /**
     * - Represents an identifier for the specific
     * error encountered during the e-invoice generation or processing. This code
     * facilitates quick identification and troubleshooting of issues, allowing
     * for more efficient resolution.
     */
    error_code?: string;
    error_message: string;
};
/** @returns {EInvoiceDetails} */
declare function EInvoiceDetails(): EInvoiceDetails;
type EInvoiceDetails = {
    irn_details?: EInvoiceIrnDetails;
    error_details?: EInvoiceErrorDetails[];
};
/** @returns {EInvoiceResponseData} */
declare function EInvoiceResponseData(): EInvoiceResponseData;
type EInvoiceResponseData = {
    shipment_id: string;
    /**
     * - Defines the category or type of e-invoice
     * generated for the shipment. This property must be set to one of the
     * following values to qualify the shipment for e-invoice generation. invoice-
     * A document detailing the sale, including goods, services, prices, and
     * taxes, requesting payment. credit_note- Issued as an adjustment or
     * correction to a previously issued invoice. It may indicate a reduction in
     * the amount often due to reasons such as returned goods, overbilling, or a
     * post-sale discount. A credit note effectively reverses or alters the
     * charges outlined in the original invoice, either partially or in full.
     */
    einvoice_type: string;
    status: number;
    message: string;
    einvoice_info?: EInvoiceDetails;
};
/** @returns {EInvoiceRetry} */
declare function EInvoiceRetry(): EInvoiceRetry;
type EInvoiceRetry = {
    shipments_data?: EInvoiceRetryShipmentData[];
};
/** @returns {EInvoiceRetryResponseSchema} */
declare function EInvoiceRetryResponseSchema(): EInvoiceRetryResponseSchema;
type EInvoiceRetryResponseSchema = {
    response_data: EInvoiceResponseData[];
};
/** @returns {EInvoiceErrorInfo} */
declare function EInvoiceErrorInfo(): EInvoiceErrorInfo;
type EInvoiceErrorInfo = {
    error_details?: EInvoiceErrorDetails[];
};
/** @returns {EInvoiceErrorResponseData} */
declare function EInvoiceErrorResponseData(): EInvoiceErrorResponseData;
type EInvoiceErrorResponseData = {
    shipment_id: string;
    /**
     * - Defines the category or type of e-invoice
     * generated for the shipment. This property must be set to one of the
     * following values to qualify the shipment for e-invoice generation. invoice-
     * A document detailing the sale, including goods, services, prices, and
     * taxes, requesting payment. credit_note- Issued as an adjustment or
     * correction to a previously issued invoice. It may indicate a reduction in
     * the amount often due to reasons such as returned goods, overbilling, or a
     * post-sale discount. A credit note effectively reverses or alters the
     * charges outlined in the original invoice, either partially or in full.
     */
    einvoice_type: string;
    status: number;
    message: string;
    einvoice_info?: EInvoiceErrorInfo;
};
/** @returns {EInvoiceErrorResponseSchema} */
declare function EInvoiceErrorResponseSchema(): EInvoiceErrorResponseSchema;
type EInvoiceErrorResponseSchema = {
    response_data?: EInvoiceErrorResponseData[];
    message?: string;
};
/** @returns {EInvoiceErrorResponseDetails} */
declare function EInvoiceErrorResponseDetails(): EInvoiceErrorResponseDetails;
type EInvoiceErrorResponseDetails = {
    response_data: EInvoiceErrorResponseData[];
    message?: string;
};
/** @returns {EInvoiceRetryShipmentData} */
declare function EInvoiceRetryShipmentData(): EInvoiceRetryShipmentData;
type EInvoiceRetryShipmentData = {
    shipment_id: string;
    /**
     * - Defines the category or type of e-invoice
     * generated for the shipment. This property must be set to one of the
     * following values to qualify the shipment for e-invoice generation. invoice-
     * A document detailing the sale, including goods, services, prices, and
     * taxes, requesting payment. credit_note- Issued as an adjustment or
     * correction to a previously issued invoice. It may indicate a reduction in
     * the amount often due to reasons such as returned goods, overbilling, or a
     * post-sale discount. A credit note effectively reverses or alters the
     * charges outlined in the original invoice, either partially or in full.
     */
    einvoice_type: string;
};
/** @returns {CourierPartnerTrackingDetails} */
declare function CourierPartnerTrackingDetails(): CourierPartnerTrackingDetails;
type CourierPartnerTrackingDetails = {
    /**
     * - The Air Waybill (AWB) number associated with the
     * shipment, used for tracking the parcel in transit.
     */
    awb: string;
    /**
     * - The current geographic location of the
     * courier partner.
     */
    dp_location?: string;
    /**
     * - The name of the courier partner responsible for
     * the shipment.
     */
    dp_name: string;
    /**
     * - The current status of the shipment as
     * updated by the courier partner.
     */
    dp_status?: string;
    /**
     * - The timestamp when the status was
     * last updated by the courier partner.
     */
    dp_status_updated_at: string;
    /**
     * - The estimated date and time
     * for delivery as provided by the courier partner.
     */
    estimated_delivery_date?: string;
    /**
     * - A unique identifier for the tracking history entry.
     */
    id?: number;
    /**
     * - Indicates the type of journey the shipment.
     */
    journey: string;
    /**
     * - A field to store additional metadata related to
     * the courier partner's operations or the shipment.
     */
    meta?: any;
    /**
     * - The operational status of the shipment.
     */
    operational_status?: string;
    /**
     * - PThe promised date and time for
     * delivery as provided by the courier partner.
     */
    promised_delivery_date?: string;
    /**
     * - Any additional remarks or comments from the
     * courier partner regarding the shipment.
     */
    remark?: string;
    /**
     * - The unique identifier for the shipment.
     */
    shipment_id: string;
};
/** @returns {CourierPartnerTrackingResponseSchema} */
declare function CourierPartnerTrackingResponseSchema(): CourierPartnerTrackingResponseSchema;
type CourierPartnerTrackingResponseSchema = {
    items?: CourierPartnerTrackingDetails[];
    page?: PageDetails;
};
/** @returns {LogsChannelDetails} */
declare function LogsChannelDetails(): LogsChannelDetails;
type LogsChannelDetails = {
    channel_id?: string;
    name?: string;
    logo?: string;
    channel_shipment_id?: string;
};
/** @returns {LogPaymentDetails} */
declare function LogPaymentDetails(): LogPaymentDetails;
type LogPaymentDetails = {
    payment_mode?: string;
    amount_paid?: string;
};
/** @returns {FailedOrdersItem} */
declare function FailedOrdersItem(): FailedOrdersItem;
type FailedOrdersItem = {
    log_id: number;
    order_id: string;
    channel: LogsChannelDetails;
    payment: LogPaymentDetails;
    /**
     * - Created date and time of the failed order.
     */
    created_at: string;
    /**
     * - A technical description of the error that
     * occurred, intended for debugging purposes.
     */
    error_message: string;
    /**
     * - A user-friendly message that can be
     * displayed to the end-user, explaining the failure in a more general and
     * understandable manner.
     */
    display_message: string;
    method_name: string;
    /**
     * - Meta data of the failed orders that contains
     * additional, potentially dynamic information about the order.
     */
    meta: any;
};
/** @returns {FailedOrderLogs} */
declare function FailedOrderLogs(): FailedOrderLogs;
type FailedOrderLogs = {
    items: FailedOrdersItem;
    page: PageDetails;
};
/** @returns {FailedOrderLogDetails} */
declare function FailedOrderLogDetails(): FailedOrderLogDetails;
type FailedOrderLogDetails = {
    /**
     * - This field is intended to store the error
     * trace of the error that occurred.For example, "Exception Trace" represents
     * a placeholder for the actual stack trace data that would be captured when
     * an exception occurs."Internal Server Error" indicates a generic error
     * message suggesting that the server encountered an unexpected condition that
     * prevented it from fulfilling the request.
     */
    error_trace: string;
    /**
     * - This field captures the exception raised by
     * the system during an Order Failure. It indicates an event that disrupts the
     * normal flow of the program's instructions.
     */
    exception: string;
};
/** @returns {GenerateInvoiceIDResponseData} */
declare function GenerateInvoiceIDResponseData(): GenerateInvoiceIDResponseData;
type GenerateInvoiceIDResponseData = {
    /**
     * - The unique identifier for the shipment
     * associated with the invoice.
     */
    shipment_id?: string;
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - The generated invoice ID, or null if the
     * generation failed.
     */
    invoice_id?: string;
    /**
     * - Provides a descriptive error message.
     */
    error_message?: boolean;
};
/** @returns {GenerateInvoiceIDErrorResponseData} */
declare function GenerateInvoiceIDErrorResponseData(): GenerateInvoiceIDErrorResponseData;
type GenerateInvoiceIDErrorResponseData = {
    shipment_id?: string;
    success?: boolean;
    invoice_id?: boolean;
    error_message?: string;
};
/** @returns {GenerateInvoiceIDRequestSchema} */
declare function GenerateInvoiceIDRequestSchema(): GenerateInvoiceIDRequestSchema;
type GenerateInvoiceIDRequestSchema = {
    /**
     * - List of shipment IDs for which invoice
     * need to be generated.
     */
    shipment_ids: string[];
};
/** @returns {GenerateInvoiceIDResponseSchema} */
declare function GenerateInvoiceIDResponseSchema(): GenerateInvoiceIDResponseSchema;
type GenerateInvoiceIDResponseSchema = {
    items?: GenerateInvoiceIDResponseData[];
};
/** @returns {GenerateInvoiceIDErrorResponseSchema} */
declare function GenerateInvoiceIDErrorResponseSchema(): GenerateInvoiceIDErrorResponseSchema;
type GenerateInvoiceIDErrorResponseSchema = {
    items?: GenerateInvoiceIDErrorResponseData[];
};
/** @returns {ManifestResponseSchema} */
declare function ManifestResponseSchema(): ManifestResponseSchema;
type ManifestResponseSchema = {
    items?: ManifestItems;
};
/** @returns {ProcessManifestRequestSchema} */
declare function ProcessManifestRequestSchema(): ProcessManifestRequestSchema;
type ProcessManifestRequestSchema = {
    /**
     * - Represents the operation to be performed on the manifest.
     */
    action: string;
    /**
     * - Represents the identifier for a specific manifest.
     */
    manifest_id?: string;
    filters: Filters;
    /**
     * - A unique identifier for the request or the
     * operation being performed.
     */
    unique_id: string;
};
/** @returns {ManifestItems} */
declare function ManifestItems(): ManifestItems;
type ManifestItems = {
    filters?: Filters;
    /**
     * - The unique identifier for the manifest.
     */
    manifest_id?: string;
    /**
     * - A unique identifier for the request or
     * operation involving the manifest items.
     */
    unique_id?: string;
    /**
     * - Unique identifier of a company on the platform.
     */
    company_id?: number;
    /**
     * - Unique identifier of the delivery partner.
     */
    dp_id?: string;
    /**
     * - A slug or unique identifier for
     * the courier partner.
     */
    courier_partner_slug?: string;
    /**
     * - Defines the expected action for the manifest items.
     */
    action?: string;
    /**
     * - The identifier for the user or system that
     * created the manifest.
     */
    created_by?: string;
    /**
     * - The identifier for the user associated with
     * the manifest items.
     */
    user_id?: string;
};
/** @returns {ManifestErrorResponseSchema} */
declare function ManifestErrorResponseSchema(): ManifestErrorResponseSchema;
type ManifestErrorResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - Provides a descriptive error message.
     */
    error?: string;
};
/** @returns {ConfigData} */
declare function ConfigData(): ConfigData;
type ConfigData = {
    /**
     * - Indicates whether the update operation
     * was acknowledged by the database.
     */
    acknowledged?: boolean;
    /**
     * - Indicates whether the update operation
     * resulted in an upsert (an update or insert).
     */
    is_upserted?: boolean;
    /**
     * - Indicates whether the update operation
     * resulted in a new document being inserted.
     */
    is_inserted?: boolean;
};
/** @returns {ConfigUpdatedResponseSchema} */
declare function ConfigUpdatedResponseSchema(): ConfigUpdatedResponseSchema;
type ConfigUpdatedResponseSchema = {
    /**
     * - The result of the config update operation,
     * including whether it was acknowledged, upserted, or inserted.
     */
    data: ConfigData[];
    /**
     * - Indicates whether the config update operation
     * was successful.
     */
    success: boolean;
};
/** @returns {FlagData} */
declare function FlagData(): FlagData;
type FlagData = {
    filter?: any;
};
/** @returns {Flags} */
declare function Flags(): Flags;
type Flags = {
    /**
     * - Indicates whether a
     * partial transition of bags to the next state is permissible, allowing some
     * bags to progress while others remain in the current state.
     */
    allow_partial_transition?: FlagData[];
    /**
     * - Specifies whether bags within a
     * shipment, set,cdf or entity can be broken individually or as a group. If
     * set to false, all bags within the entity must remain together and
     * transition together to the same state.
     */
    can_break_entity?: FlagData[];
    /**
     * - Specifies which fields are
     * permitted to be updated at the bag level. Allowed fields are:
     *
     * - Meta
     * - Pdf_links
     * - Affiliate_meta
     * - Delivery_awb_number
     * - Store_invoice_id
     * - Store_id
     * - Return_store_id
     * - Eway_bill_id
     */
    allowed_bag_updates?: FlagData[];
    /**
     * - Specifies which fields
     * are permitted to be updated at the bag status level. Allowed fields are:
     *
     * - Json
     */
    allowed_bag_status_updates?: FlagData[];
    /**
     * - Specifies which fields are
     * permitted to be updated at shipment level. Allowed fields are:
     *
     * - Meta
     * - Pdf_links
     * - Affiliate_meta
     * - Delivery_awb_number
     * - Store_invoice_id
     * - Store_id
     * - Return_store_id
     * - Eway_bill_id
     * - Logistics_meta
     */
    allowed_entity_updates?: FlagData[];
    /**
     * - Specifies which
     * fields are permitted to be updated at the Entity status level. Allowed fields are:
     *
     * - Json
     */
    allowed_entity_status_updates?: FlagData[];
    /**
     * - Describes the type of journey
     * associated with the particular status of the shipment. Possible values are:
     *
     * - Positive
     * - Negative
     */
    status_update_type?: FlagData[];
    /**
     * - Indicates whether a
     * reason at the product level should be allowed for a particular status.
     */
    is_bag_status_reason_allowed?: FlagData[];
    /**
     * - Indicates whether
     * a reason at the shipment level should be allowed for a particular status.
     */
    is_entity_status_reason_allowed?: FlagData[];
    /**
     * - This flag is used to define
     * the shipment breaking strategy. Possible values are:
     *
     * - Break_shipment_based_on_location_reassignment
     * - Break_shipment_based_on_groups
     * - Break_shipment_based_on_stormbreaker
     */
    transition_strategy?: FlagData[];
};
/** @returns {Filter} */
declare function Filter(): Filter;
type Filter = {
    /**
     * - Defines the specific journey a shipment
     * will follow based on the application's operational needs and customer
     * preferences. This field categorizes orders into distinct types, each
     * associated with a unique processing flow. For example:
     *
     * - "HomeDelivery": The order goes through all the steps needed for delivery,
     * from being packed to arriving at the customer's address.
     * - "PickAtStore": The order is prepared for pickup at the store, skipping
     * shipping steps to make it ready faster for the customer to collect in person.
     * - "Digital": This order type likely refers to orders that involve digital goods
     * or services, such as software, digital subscriptions, e-books, online
     * courses, or any other item that can be delivered electronically.
     */
    order_type?: string;
    /**
     * - Specifies whether a partial
     * transition of the order is allowed, allowing some components to progress
     * while others remain in the current state.
     */
    is_partial_transition?: boolean;
    /**
     * - Indicates whether the
     * assignment of a designated person is automatically triggered in the context of ACF.
     */
    auto_trigger_dp_assignment_acf?: boolean;
    /**
     * - Indicates the current locking status of
     * the shipment.
     */
    lock_status?: string;
    /**
     * - Specifies whether locking is
     * required after transitioning to the next status. lock_after_transition :
     * true - Lock Transition enabled lock_after_transition : false - Lock
     * Transition set false
     */
    lock_after_transition?: boolean;
    /**
     * - Indicates whether tasks
     * should resume automatically after unlocking, such as DP assignment task and
     * invoicing task.
     */
    resume_tasks_after_unlock?: boolean;
    /**
     * - Indicates whether an invoice ID
     * is present for the order.
     */
    is_invoice_id_present?: boolean;
    /**
     * - Indicates whether a credit
     * note has been generated for the order.
     */
    is_credit_note_generated?: boolean;
    /**
     * - Specifies whether an
     * automated virtual invoice ID is associated with the order.
     */
    fulfill_virtual_invoice?: boolean;
    /**
     * - Indicates the next status to which the
     * order will transition.
     */
    next_status?: string;
    /**
     * - Indicates whether a task is enabled
     * for the order.
     */
    is_hook_enabled?: boolean;
    /**
     * - Specifies whether a credit note
     * check is performed in a point of sale (POS) scenario.
     */
    pos_credit_note_check?: boolean;
    /**
     * - Specifies the platform on which the
     * order was placed.
     */
    order_platform?: string;
    /**
     * - Indicates the type of refund associated
     * with the order.
     */
    refund_type?: string;
    /**
     * - Specifies whether the platform is
     * non-point of sale (POS) in nature.
     */
    is_non_pos_platform?: boolean;
    /**
     * - Indicates whether the order is
     * self-shipped by the seller.
     */
    is_self_ship?: boolean;
    /**
     * - Specifies the country code of the
     * seller in ISO 3166-1 alpha-2 format.
     *
     * - `seller_country_code`: US
     * - `seller_country_code`: UK
     * - `seller_country_code`: IN
     */
    seller_country_code?: string;
    /**
     * - Specifies the country code of
     * the seller in ISO 3166-1 alpha-2 format.
     *
     * - `customer_country_code`: US
     * - `customer_country_code`: UK
     * - `customer_country_code`: IN
     */
    customer_country_code?: string;
    /**
     * - Indicates whether the order is a test
     * order used for testing purposes - `is_test_order` : True - indicates test order
     */
    is_test_order?: boolean;
    /**
     * - Specifies trigger conditions:
     *
     * - `status_update`: Status Update
     * - `data_update`: Data Update
     */
    task_trigger_condition?: string[];
    /**
     * - Represents the unique slug
     * associated with the fulfillment option attached to the shipment. This slug
     * helps determine the fulfillment method and operational flow used to deliver
     * the shipment. Examples:
     *
     * - "standard-delivery"
     * - "hyperlocal-delivery"
     */
    fulfillment_option_slug?: string;
};
/** @returns {PostHook} */
declare function PostHook(): PostHook;
type PostHook = {
    /**
     * - Name of the hook that has to be added
     */
    task: string;
    /**
     * - Additional parameters for the hook
     */
    kwargs?: any;
    /**
     * - Criteria to filter which hooks are applied
     * based on certain conditions.
     */
    filters?: Filter;
};
/** @returns {PreHook} */
declare function PreHook(): PreHook;
type PreHook = {
    /**
     * - Name of the hook that has to be added
     */
    task: string;
    /**
     * - Additional parameters for the hook
     */
    kwargs?: any;
    /**
     * - Criteria to filter which hooks are applied
     * based on certain conditions.
     */
    filters?: Filter;
};
/** @returns {Config} */
declare function Config(): Config;
type Config = {
    /**
     * - Source state from which state transition
     * will take place
     */
    from_state?: string;
    /**
     * - Target state to which state transition will take place
     */
    to_state?: string;
    /**
     * - Tasks to be run before state transition
     */
    pre_hooks?: PreHook[];
    /**
     * - Tasks to be run after state transition
     */
    post_hooks?: PostHook[];
    /**
     * - Various flags related to the transition. These
     * include options and settings that influence the behavior of the state
     * transition, such as whether partial transitions are allowed or whether the
     * transition can break the entity.
     */
    flags?: Flags;
};
/** @returns {TransitionConfigCondition} */
declare function TransitionConfigCondition(): TransitionConfigCondition;
type TransitionConfigCondition = {
    /**
     * - The unique identifier of the application to which
     * the configuration applies.
     */
    app_id: string;
    /**
     * - The specific channel through which
     * your order was placed. This field will be phased out after version 2.4.0.
     * Please use ordering_source instead to ensure accurate order tracking and processing.
     */
    ordering_channel?: string;
    /**
     * - Ordering source, to be used to
     * identify source of order creation.
     */
    ordering_source?: string;
    /**
     * - The type of entity that the configuration pertains to.
     */
    entity: string;
};
/** @returns {TransitionConfigData} */
declare function TransitionConfigData(): TransitionConfigData;
type TransitionConfigData = {
    /**
     * - Conditions that must be
     * met for the ESM config to be applied.
     */
    conditions?: TransitionConfigCondition;
    /**
     * - The configuration settings for the entity
     * transition. This includes pre_hooks, post_hooks, and flags for each
     * transition state.
     */
    configs?: Config[];
};
/** @returns {TransitionConfigPayload} */
declare function TransitionConfigPayload(): TransitionConfigPayload;
type TransitionConfigPayload = {
    data?: TransitionConfigData;
};
/** @returns {RuleListRequestSchema} */
declare function RuleListRequestSchema(): RuleListRequestSchema;
type RuleListRequestSchema = {
    /**
     * - The page number to be retrieved. This
     * determines the starting point for the list of rules to be returned.
     */
    page_no?: number;
    /**
     * - An array of channel (application ID)
     * identifiers. These channels represent the specific application contexts for
     * which the rules are being requested.
     */
    channel?: string[];
    /**
     * - An array of department identifiers. The
     * rules returned will be applicable to these specified departments.
     */
    department?: string[];
    /**
     * - An array of rule identifiers. This allows for
     * retrieving specific rules based on their unique IDs.
     */
    id?: string[];
    /**
     * - Indicates whether the rules to be retrieved
     * are active. This flag helps filter the rules based on their current status.
     */
    is_active?: boolean;
};
/** @returns {RuleErrorResponseSchema} */
declare function RuleErrorResponseSchema(): RuleErrorResponseSchema;
type RuleErrorResponseSchema = {
    /**
     * - A flag that indicates whether the request was
     * successful. It returns `false` if an error occurred.
     */
    success?: boolean;
    /**
     * - The error message that provides details about
     * why the request failed.
     */
    error?: string;
};
/** @returns {RMAPageInfo} */
declare function RMAPageInfo(): RMAPageInfo;
type RMAPageInfo = {
    /**
     * - The type of pagination used. Common values could
     * be "number" for numeric pagination, which indicates that the pages are
     * numbered sequentially.
     */
    type?: string;
    /**
     * - The current page number being displayed. This
     * reflects the page of data currently being viewed.
     */
    current?: number;
    /**
     * - The number of items per page. This sets the limit
     * on how many rule items are shown on each page.
     */
    size?: number;
    /**
     * - The total number of items available. This
     * provides an overview of the entire dataset from which the rules are being paginated.
     */
    item_total?: number;
    /**
     * - Indicates whether there are previous
     * pages available before the current page. It helps in navigating backward
     * through the data.
     */
    has_previous?: boolean;
    /**
     * - Indicates whether there are more pages
     * available after the current page. It helps in determining if there is more
     * data to be viewed.
     */
    has_next?: boolean;
};
/** @returns {RuleAction} */
declare function RuleAction(): RuleAction;
type RuleAction = {
    reasons?: Reason[];
};
/** @returns {QuestionSetItem} */
declare function QuestionSetItem(): QuestionSetItem;
type QuestionSetItem = {
    /**
     * - The unique identifier for the question. This ID is
     * used to distinguish between different questions.
     */
    id: number;
    /**
     * - The display name or text of the question.
     * This is what is shown to the user during interactions.
     */
    display_name: string;
};
/** @returns {Reason} */
declare function Reason(): Reason;
type Reason = {
    /**
     * - A unique identifier for the reason.
     */
    id?: number;
    /**
     * - The display name for the reason, used for
     * user-facing purposes.
     */
    display_name: string;
    /**
     * - A list of sub-reasons under the main reason.
     * These provide additional layers of granularity to the main reason.
     */
    reasons?: Reason[];
    /**
     * - List of QC (Quality Control) types -- having
     * return reason types indicating the stage at which QC is performed. -
     * "Doorstep QC" refers involves inspecting products for damages at the
     * customer's location before delivery. - "Pre QC" requires customers to
     * upload product photos for a preliminary quality check by the operations
     * team before a return or exchange pickup is arranged, ensuring criteria are
     * met and optimizing logistics.
     */
    qc_type: string[];
    /**
     * - An array of question sets linked to
     * the reason, defining the questions to be answered.
     */
    question_set: QuestionSet[];
    /**
     * - Meta object of the reason. This contains any
     * additional metadata that might be relevant to the reason.
     */
    meta?: any;
    /**
     * - Indicates whether the reason is currently
     * active. Active reasons are those that are currently in use within the system.
     */
    is_active?: boolean;
};
/** @returns {Conditions} */
declare function Conditions(): Conditions;
type Conditions = {
    /**
     * - The department ID to which the rule
     * applies. This helps in filtering the rules based on specific departments.
     */
    department?: string;
    /**
     * - The Level 3 category ID to which the rule applies.
     * This further refines the application of the rule within a specific category.
     */
    l3?: string;
};
/** @returns {RuleItem} */
declare function RuleItem(): RuleItem;
type RuleItem = {
    /**
     * - The unique identifier for the rule item. This ID is
     * essential for referencing and managing individual rules.
     */
    id: string;
    /**
     * - The type of entity the rule applies to, such
     * as "department" or "l3". This specifies the scope of the rule.
     */
    entity_type: string;
    /**
     * - The value associated with the entity type, such as
     * a department ID or L3 category ID. This value determines the specific
     * context in which the rule is applied.
     */
    value: string;
    /**
     * - The channel (application ID) to which the rule
     * applies. This links the rule to a specific sales channel or application.
     */
    channel: string;
    /**
     * - The actions and reasons associated with the
     * rule. These define what happens when the rule is triggered.
     */
    actions: RuleAction;
    /**
     * - Indicates whether quality checks are enabled
     * for this rule. If enabled, the rule includes quality control mechanisms.
     */
    qc_enabled: boolean;
    /**
     * - Indicates whether the rule is deleted.
     * Deleted rules are no longer active or enforceable.
     */
    is_deleted: boolean;
    conditions: Conditions;
    /**
     * - Metadata associated with the rule. This provides
     * additional context and information related to the rule.
     */
    meta: any;
    /**
     * - The type of rule, such as "custom" or
     * "global". This specifies whether the rule is a custom one or a global standard.
     */
    rule_type: string;
    /**
     * - Indicates whether the rule is currently
     * active. Active rules are those that are currently being enforced.
     */
    is_active: boolean;
};
/** @returns {RuleError} */
declare function RuleError(): RuleError;
type RuleError = {
    /**
     * - The type of error encountered. This could be
     * related to validation, processing, or other issues.
     */
    type: string;
    /**
     * - A specific value related to the error. This
     * provides context to the error, such as which input was problematic.
     */
    value: string;
    /**
     * - The error message that describes what went
     * wrong. This message is intended for developers or users to understand the issue.
     */
    message: string;
};
/** @returns {RuleListResponseSchema} */
declare function RuleListResponseSchema(): RuleListResponseSchema;
type RuleListResponseSchema = {
    /**
     * - Provides information about the pagination of
     * the rule list. This includes details like the current page, the total
     * number of items, and whether there are previous or next pages available.
     */
    page?: RMAPageInfo;
    /**
     * - A list of rule items included in the
     * response. Each item represents a specific RMA rule, detailing its unique
     * identifier, entity type, associated actions, conditions, and other relevant
     * attributes. This list is essential for understanding the individual rules
     * that are applied within the system for return merchandise authorization.
     */
    items?: RuleItem[];
    /**
     * - Indicates whether the request was successful.
     * A value of `true` means the rules were retrieved successfully, while
     * `false` indicates an error occurred during the request.
     */
    success?: boolean;
    /**
     * - Contains error details if the request was not
     * successful. This includes the type of error, the value that caused the
     * issue, and a message explaining the error. These details help in diagnosing
     * and resolving issues that may arise when retrieving the rules.
     */
    error?: RuleError;
};
/** @returns {UpdateShipmentPaymentMode} */
declare function UpdateShipmentPaymentMode(): UpdateShipmentPaymentMode;
type UpdateShipmentPaymentMode = {
    /**
     * - Unique identifier used to filter the shipment.
     */
    shipment_id: string;
    /**
     * - List of products attached with the
     * shipment against which the payment methods needs to be overridden.
     */
    products?: ProductSchema[];
    /**
     * - List of payment methods
     * that needs to be updated on shipment level.
     */
    payment_methods?: PaymentMethodSchema[];
};
/** @returns {CommonErrorResponseSchema} */
declare function CommonErrorResponseSchema(): CommonErrorResponseSchema;
type CommonErrorResponseSchema = {
    /**
     * - The HTTP status code corresponding to the error.
     */
    status?: number;
    /**
     * - A message describing the error that occurred.
     */
    message?: string;
};
/** @returns {ExceptionErrorResponseSchema} */
declare function ExceptionErrorResponseSchema(): ExceptionErrorResponseSchema;
type ExceptionErrorResponseSchema = {
    /**
     * - A message describing the error that occurred.
     */
    message?: string;
    /**
     * - The class path of the exception that was thrown.
     */
    exception?: string;
    /**
     * - The stack trace from the server for the error.
     */
    stack_trace?: string;
};
/** @returns {ProductSchema} */
declare function ProductSchema(): ProductSchema;
type ProductSchema = {
    /**
     * - The line number of a product used to
     * uniquely identify and filter the specific product within the shipment.
     */
    line_number: number;
    /**
     * - List of payment methods
     * that needs to be updated against filtered product.
     */
    payment_methods: PaymentMethodSchema[];
};
/** @returns {PaymentMethodSchema} */
declare function PaymentMethodSchema(): PaymentMethodSchema;
type PaymentMethodSchema = {
    /**
     * - The name of the payment method (e.g., "Credit
     * Card", "PayPal").
     */
    name: string;
    /**
     * - The mode of payment (e.g., "PREPAID", "COD").
     */
    mode: string;
    /**
     * - The amount to be paid using this payment method.
     */
    amount: number;
    meta?: PaymentMetaDataSchema;
    /**
     * - Unique identifier for this payment method.
     */
    identifier: string;
    /**
     * - The name to be displayed for this payment method.
     */
    display_name: string;
    /**
     * - The payment aggregator or service provider
     * used for this payment method.
     */
    aggregator: string;
    action: ActionDetailSchema;
    /**
     * - Payment refund by for the customer and seller
     * (e.g fynd, seller).
     */
    refund_by: string;
    /**
     * - Payment collected by for the customer and
     * seller (e.g fynd, seller).
     */
    collect_by: string;
};
/** @returns {ActionDetailSchema} */
declare function ActionDetailSchema(): ActionDetailSchema;
type ActionDetailSchema = {
    /**
     * - The type of action to be performed (currently only
     * "override" is supported).
     */
    name: any;
    /**
     * - The current payment mode before the action
     * is applied.
     */
    current_mode: string;
    /**
     * - The current identifier of the payment
     * method before the action is applied.
     */
    current_identifier: string;
    /**
     * - Specifies where the refund should be
     * directed to, if applicable.
     */
    refund_to?: string;
};
/** @returns {PaymentMetaDataSchema} */
declare function PaymentMetaDataSchema(): PaymentMetaDataSchema;
type PaymentMetaDataSchema = {
    /**
     * - The name or identifier of the payment
     * gateway used.
     */
    payment_gateway?: string;
    /**
     * - A unique identifier for this
     * payment transaction.
     */
    payment_identifier?: string;
    logo_url?: PaymentMetaLogoURLSchema;
};
/** @returns {PaymentMetaLogoURLSchema} */
declare function PaymentMetaLogoURLSchema(): PaymentMetaLogoURLSchema;
type PaymentMetaLogoURLSchema = {
    /**
     * - URL for the large version of the payment method's logo.
     */
    large: string;
    /**
     * - URL for the small version of the payment method's logo.
     */
    small: string;
};
/** @returns {FulfillmentOptionSchema} */
declare function FulfillmentOptionSchema(): FulfillmentOptionSchema;
type FulfillmentOptionSchema = {
    /**
     * - The name of the fulfillment option (e.g.,
     * 'Standard Shipping', 'Express Delivery').
     */
    name?: string;
    /**
     * - A unique identifier for the fulfillment option.
     */
    slug?: string;
    /**
     * - The category or method of fulfillment
     * (e.g., 'Pickup', 'Delivery', 'Courier').
     */
    is_default?: boolean;
    /**
     * - Indicates whether this fulfillment option is the
     * default choice for customers.
     */
    type?: string;
};
/** @returns {PaymentMethodGatewaySchema} */
declare function PaymentMethodGatewaySchema(): PaymentMethodGatewaySchema;
type PaymentMethodGatewaySchema = {
    /**
     * - Payment gateway name e.g., Razorpay, Stripe, etc.
     */
    name: string;
    logo?: string;
};
/** @returns {SubModeOfPaymentSchema} */
declare function SubModeOfPaymentSchema(): SubModeOfPaymentSchema;
type SubModeOfPaymentSchema = {
    /**
     * - Name of the sub-mode of payment. For example, if
     * the payment mode is 'Paytm', a sub-mode could be 'Paytm Wallet'.
     */
    name: string;
};
/** @returns {PaymentMethodModeOfPaymentSchema} */
declare function PaymentMethodModeOfPaymentSchema(): PaymentMethodModeOfPaymentSchema;
type PaymentMethodModeOfPaymentSchema = {
    /**
     * - Payment mode name e.g., Credit Card, Debit Card,
     * Net Banking, Wallet, etc.
     */
    name: string;
    /**
     * - Slug of the payment mode e.g., cc, dc, nb, wl, etc.
     */
    slug: string;
    sub_mode_of_payment?: SubModeOfPaymentSchema;
};
/** @returns {PaymentMethodTransactionPartySchema} */
declare function PaymentMethodTransactionPartySchema(): PaymentMethodTransactionPartySchema;
type PaymentMethodTransactionPartySchema = {
    /**
     * - Entity responsible for refunding the
     * amount paid by the customer
     */
    refund_bearer: string;
    /**
     * - Entity responsible for collection of
     * amount paid by the customer
     */
    collection_bearer: string;
};
/** @returns {LineItemPaymentMethodSchema} */
declare function LineItemPaymentMethodSchema(): LineItemPaymentMethodSchema;
type LineItemPaymentMethodSchema = {
    gateway?: PaymentMethodGatewaySchema;
    mode_of_payment?: PaymentMethodModeOfPaymentSchema;
    /**
     * - Total amount paid by this payment method
     */
    amount_paid?: number;
    /**
     * - Transaction id
     */
    payment_identifier?: string;
    transaction_party?: PaymentMethodTransactionPartySchema;
};
/** @returns {PackagesSchema} */
declare function PackagesSchema(): PackagesSchema;
type PackagesSchema = {
    /**
     * - Array of packages to be created or
     * updated for the shipment. At least two packages are required for MPS functionality.
     */
    packages: PackageSchema[];
};
/** @returns {PackagesResponseSchema} */
declare function PackagesResponseSchema(): PackagesResponseSchema;
type PackagesResponseSchema = {
    /**
     * - Indicates whether the API call was successful
     * (true) or failed (false).
     */
    success: boolean;
    data: PackagesSchema;
    /**
     * - A descriptive message providing additional
     * information about the API response.
     */
    message?: string;
};
/** @returns {PackagesErrorResponseSchema} */
declare function PackagesErrorResponseSchema(): PackagesErrorResponseSchema;
type PackagesErrorResponseSchema = {
    /**
     * - Indicates whether the API call was successful.
     * Will always be false for error responses.
     */
    success: boolean;
    /**
     * - A detailed error message describing what went
     * wrong during the API call.
     */
    error: string;
};
/** @returns {BundleDetailsSchema} */
declare function BundleDetailsSchema(): BundleDetailsSchema;
type BundleDetailsSchema = {
    /**
     * - This serves as the base item, with all other
     * items acting as child elements within the bundle to display the hero
     * product prominently at the top.
     */
    is_base?: boolean;
    /**
     * - An array of image URLs associated with the bundle.
     */
    images?: string[];
    /**
     * - Unique group identifier for the bundle
     * generated by seller to club the articles
     */
    group_id?: string;
    /**
     * - Name of the bundle.
     */
    name?: string;
    /**
     * - Type of the bundle item
     */
    item_type?: string;
    /**
     * - Unique identifier of the item.
     */
    item_id?: number;
    /**
     * - Item code for the item.
     */
    item_code?: string;
    /**
     * - Name of the item.
     */
    item_name?: string;
    /**
     * - Identifier for the seller of the bundle.
     */
    seller_identifier?: string;
    /**
     * - In orders with multiple
     * quantities of the same line item, the line item count remains constant, but
     * multiple bundles can exist. To distinguish between these bundles, the
     * article quantity must be used.
     */
    bundle_article_quantity?: number;
    /**
     * - Identifier for the brand name.
     */
    brand_name?: string;
    /**
     * - Size associated with the bundle item.
     */
    size?: string;
};
/** @returns {LineItemMonetaryValuesSchema} */
declare function LineItemMonetaryValuesSchema(): LineItemMonetaryValuesSchema;
type LineItemMonetaryValuesSchema = {
    /**
     * - Amount paid by the customer
     */
    amount_paid: number;
    /**
     * - The final effective price after applying
     * discounts, promotional offers, and adjustments.
     */
    price_effective: number;
    /**
     * - Discount amount apart from promo and coupon discount
     */
    discount?: number;
    /**
     * - The original marked price of the item
     * before any discounts or promotions.
     */
    price_marked: number;
    /**
     * - Coupon discount applied for this article
     */
    coupon_discount?: number;
    /**
     * - Cash on Delivery Charges Applied for this Article.
     */
    cod_charges?: number;
    /**
     * - Promotion Discount
     */
    promo_discount?: number;
    /**
     * - Gift Price
     */
    gift_price?: number;
    /**
     * - Delivery Charges Applied for this Article.
     */
    delivery_charges?: number;
};
/** @returns {DimensionSchema} */
declare function DimensionSchema(): DimensionSchema;
type DimensionSchema = {
    /**
     * - Height of the product.
     */
    height: number;
    /**
     * - Length of the product.
     */
    length: number;
    /**
     * - Width of the product
     */
    width: number;
    /**
     * - Not Modified, meaning these are same as
     * product uploaded while loading catelogue.
     */
    is_default: boolean;
    /**
     * - Unit of the measurement used.
     */
    unit: string;
};
/** @returns {GiftDetailsSchema} */
declare function GiftDetailsSchema(): GiftDetailsSchema;
type GiftDetailsSchema = {
    /**
     * - Specifies the value or cost of the gift
     * associated with the order line item.
     */
    amount: number;
    /**
     * - A short description or label intended for
     * display purposes. This can be a message to the customer, such as "Gift wrap
     * included" or "Gift card value applied."
     */
    display_text: string;
};
/** @returns {CPRiderDetailsSchema} */
declare function CPRiderDetailsSchema(): CPRiderDetailsSchema;
type CPRiderDetailsSchema = {
    name: string;
    phone: string;
};
/** @returns {CPAreaCodeSchema} */
declare function CPAreaCodeSchema(): CPAreaCodeSchema;
type CPAreaCodeSchema = {
    source: string;
    destination: string;
};
/** @returns {CPTatToDeliverTheShipmentSchema} */
declare function CPTatToDeliverTheShipmentSchema(): CPTatToDeliverTheShipmentSchema;
type CPTatToDeliverTheShipmentSchema = {
    min: number;
    max: number;
};
/** @returns {CPOptionsSchema} */
declare function CPOptionsSchema(): CPOptionsSchema;
type CPOptionsSchema = {
    /**
     * - A string that uniquely identifies the
     * courier partner extension. Refer <a
     * href='/commerce/sdk/latest/platform/company/serviceability#getCourierPartnerAccount'>Get
     * courier partner account</a> to get the extension id.
     */
    extension_id?: string;
    /**
     * - A string that specifies the unique
     * identifier for the scheme associated with the account. Refer <a
     * href='/commerce/sdk/latest/platform/company/serviceability#getCourierPartnerAccount'>Get
     * courier partner account</a> to get the scheme id.
     */
    scheme_id?: string;
    area_code?: CPAreaCodeSchema;
    is_self_ship?: boolean;
    max_reattempts_for_delivery_allowed?: number;
    /**
     * - A sorting key used for categorizing or
     * sorting courier partners, often related to their performance, costs, or
     * some other factor, (example: E-17A-4, E-17A-6, etc.).
     */
    cp_sort_key?: string;
    /**
     * - The name of the courier partner or the delivery
     * agent handling the shipment.
     */
    name?: string;
    rider_details?: CPRiderDetailsSchema;
    /**
     * - Specifies whether the seller's
     * credentials are being used for the courier partner.
     */
    using_own_creds?: boolean;
    /**
     * - Specifies that Assigned CP support's
     * quality checks
     */
    qc_supported?: boolean;
};
/** @returns {CourierPartnerDetailsSchema} */
declare function CourierPartnerDetailsSchema(): CourierPartnerDetailsSchema;
type CourierPartnerDetailsSchema = {
    /**
     * - A sorting key used for categorizing or
     * sorting courier partners, often related to their performance, costs, or
     * some other factor. (example: E-17A-4, E-17A-6, etc.).
     */
    cp_sort_key?: string;
    /**
     * - Other Available CP's
     */
    cp_options?: CPOptionsSchema[];
    scheme_id: string;
    /**
     * - The name of the courier partner or the delivery
     * agent handling the shipment.
     */
    name: string;
    extension_id: string;
    rider_details?: CPRiderDetailsSchema;
    /**
     * - Specifies that Assigned CP support's
     * quality checks
     */
    qc_supported?: boolean;
    /**
     * - Specifies weather the Seller's Creds or
     * Fynd's Creds are being used.
     */
    using_own_creds: boolean;
    /**
     * - Reattempts Allowed
     * (required for NDR)
     */
    max_reattempts_for_delivery_allowed?: number;
    tat_to_deliver_the_shipment?: CPTatToDeliverTheShipmentSchema;
    /**
     * - Is every logistic action handled by seller.
     */
    is_self_ship?: boolean;
};
/** @returns {TaxDetailsSchema} */
declare function TaxDetailsSchema(): TaxDetailsSchema;
type TaxDetailsSchema = {
    /**
     * - The HS code of the product
     */
    hs_code: string;
    /**
     * - Tax identifier.
     */
    tax_rule_id: string;
};
/** @returns {PromiseDetailsSchema} */
declare function PromiseDetailsSchema(): PromiseDetailsSchema;
type PromiseDetailsSchema = {
    /**
     * - Min TimeStamp (EPOCH) that will be taken to
     * deliver the product
     */
    min_sla: number;
    /**
     * - Max TimeStamp (EPOCH) that will be taken to
     * deliver the product.
     */
    max_sla: number;
};
/** @returns {CustomerPickupSlotSchema} */
declare function CustomerPickupSlotSchema(): CustomerPickupSlotSchema;
type CustomerPickupSlotSchema = {
    start_time: string;
    end_time: string;
};
/** @returns {DpPickupSlotSchema} */
declare function DpPickupSlotSchema(): DpPickupSlotSchema;
type DpPickupSlotSchema = {
    start_time: string;
    end_time: string;
};
/** @returns {OrderFulfillmentTimelineSchema} */
declare function OrderFulfillmentTimelineSchema(): OrderFulfillmentTimelineSchema;
type OrderFulfillmentTimelineSchema = {
    dp_pickup_slot?: DpPickupSlotSchema;
    /**
     * - A date indicating when the order
     * can be dispatched (e.g., the earliest possible dispatch date).
     */
    dispatch_after_date?: string;
    /**
     * - The latest date the order must be
     * dispatched to meet delivery expectations.
     */
    dispatch_by_date?: string;
    /**
     * - The deadline by which the seller must
     * confirm the order.
     */
    confirm_by_date?: string;
    customer_pickup_slot?: CustomerPickupSlotSchema;
    /**
     * - The latest time the package should be
     * packed and ready to dispatch.
     */
    pack_by_date?: string;
};
/** @returns {LineItemSchema} */
declare function LineItemSchema(): LineItemSchema;
type LineItemSchema = {
    /**
     * - Identifier of the seller selling the item.
     */
    seller_identifier?: string;
    /**
     * - Payment methods
     * used to sell this order.
     */
    payment_methods: LineItemPaymentMethodSchema[];
    monetary_values: LineItemMonetaryValuesSchema;
    gift_details?: GiftDetailsSchema;
    /**
     * - These instructions are added by
     * the customer at checkout for the seller's reference.
     */
    special_instructions?: string;
    dimension?: DimensionSchema;
    /**
     * - Quantity of the Line Item
     */
    quantity?: number;
    /**
     * - Unique identifier for the LineItem as
     * assigned by an external system. You can use this to map external id to
     * Fynd's generated id
     */
    external_line_id?: string;
    bundle_details?: BundleDetailsSchema;
    /**
     * - Contains metadata related to the shipment
     */
    meta?: any;
};
/** @returns {CreateOrderShipmentSchema} */
declare function CreateOrderShipmentSchema(): CreateOrderShipmentSchema;
type CreateOrderShipmentSchema = {
    /**
     * - Indicates if the shipment belongs to the
     * made-to-order category, i.e., the seller will start creating this order
     * after receiving an order creation request.
     */
    is_mto?: boolean;
    /**
     * - List of
     * general-purpose messages shown across different points in the shipment's
     * journey at Order Details screen.
     */
    shipment_lifecycle_messages?: LifecycleMessageSchema[];
    /**
     * - Tags that can be attached to the shipment for
     * filtering and categorization.
     */
    tags?: string[];
    /**
     * - The shipment type defining the fulfillment method
     * and processing flow. Each type determines the specific journey a shipment
     * will follow based on operational needs and customer preferences:
     * "HomeDelivery": Standard delivery to the customer's address, undergoing all
     * typical state transitions from processing to final delivery. "PickAtStore":
     * Order prepared for in-store pickup, bypassing traditional shipping stages
     * for direct handover to the customer. "Digital": Orders involving digital
     * goods or services (e.g., software, e-books, subscriptions) delivered electronically.
     */
    type?: string;
    fulfillment_option?: FulfillmentOptionSchema;
    /**
     * - Unique identifier for the
     * shipment as assigned by an external system. Use this to map the external ID
     * to Fynd's generated ID.
     */
    external_shipment_id?: string;
    /**
     * - Indicates whether the order was created in
     * offline mode. Used to enable offline-specific processing and sync behavior.
     */
    invoice_id?: string;
    /**
     * - A list of items included in the shipment.
     */
    line_items?: LineItemSchema[];
    order_fulfillment_timeline?: OrderFulfillmentTimelineSchema;
    /**
     * - The location ID from which this shipment
     * is being fulfilled.
     */
    location_id?: number;
    /**
     * - The external location ID from
     * which this shipment is being fulfilled.
     */
    external_location_id?: string;
    /**
     * - Overrides the article's default
     * return location.
     */
    return_location_id?: number;
    courier_partner_details?: CourierPartnerDetailsSchema;
    tax_details?: TaxDetailsSchema;
    promise_details?: PromiseDetailsSchema;
    /**
     * - Defines the UTC time at which
     * the shipment will automatically move to the placed state.
     */
    allow_processing_after?: string;
    /**
     * - Additional metadata related to the shipment.
     */
    meta?: any;
};
/** @returns {OrderingCurrencySchema} */
declare function OrderingCurrencySchema(): OrderingCurrencySchema;
type OrderingCurrencySchema = {
    /**
     * - The <a
     * href='https://www.iso.org/iso-4217-currency-codes.html'>ISO 4217</a>
     * currency code, such as 'INR' for Indian Rupee. This field represents the
     * standardized three-letter code of a currency.
     */
    currency_code: string;
    /**
     * - The symbol representing the currency,
     * such as '₹' for Indian Rupee. This is used for display purposes alongside
     * currency amounts.
     */
    currency_symbol: string;
};
/** @returns {ConversionRateSchema} */
declare function ConversionRateSchema(): ConversionRateSchema;
type ConversionRateSchema = {
    /**
     * - The exchange rate used to convert monetary values
     * from the ordering currency to the seller's currency.
     */
    rate: number;
    /**
     * - The timestamp (in milliseconds) when the
     * conversion rate was applied.
     */
    timestamp_ms: number;
};
/** @returns {CurrencySchema} */
declare function CurrencySchema(): CurrencySchema;
type CurrencySchema = {
    ordering_currency: OrderingCurrencySchema;
    conversion_rate: ConversionRateSchema;
    /**
     * - The ISO 4217 currency code, such as
     * 'INR' for Indian Rupee. This field represents the standardized three-letter
     * code of a currency.
     */
    currency_code?: string;
    /**
     * - The symbol representing the currency,
     * such as '₹' for Indian Rupee. This is used for display purposes alongside
     * currency amounts.
     */
    currency_symbol?: string;
};
/** @returns {CouponOwnershipSchema} */
declare function CouponOwnershipSchema(): CouponOwnershipSchema;
type CouponOwnershipSchema = {
    /**
     * - Indicates who issued the coupon
     */
    payable_category: string;
};
/** @returns {CouponSchema} */
declare function CouponSchema(): CouponSchema;
type CouponSchema = {
    /**
     * - The coupon code that was applied.
     */
    code: string;
    /**
     * - Unique identifier of the coupon.
     */
    id: string;
    ownership: CouponOwnershipSchema;
    /**
     * - Indicates whether returns are allowed
     * when this coupon is applied.
     */
    is_return_allowed: boolean;
    /**
     * - Indicates whether cancellations
     * are allowed when this coupon is applied.
     */
    is_cancellation_allowed: boolean;
};
/** @returns {BillingDetailsSchema} */
declare function BillingDetailsSchema(): BillingDetailsSchema;
type BillingDetailsSchema = {
    /**
     * - First name of the customer
     */
    first_name?: string;
    /**
     * - Country phone code ex: +91
     */
    phone_code?: string;
    /**
     * - Country of the customer
     */
    country?: string;
    /**
     * - City of the customer
     */
    city?: string;
    /**
     * - Pincode of the customer
     */
    pincode?: string;
    /**
     * - Last name of the customer
     */
    last_name?: string;
    /**
     * - Primary phone number of the customer
     */
    mobile_number?: string;
    /**
     * - Primary email of the customer
     */
    email?: string;
    /**
     * - State of the customer
     */
    state?: string;
    /**
     * - Alternate mobile number
     */
    alternate_mobile_number?: string;
    /**
     * - Billing address of the customer
     */
    address?: string;
    /**
     * - Customer's middle name.
     */
    middle_name?: string;
    /**
     * - Customer's title or prefix.
     */
    title?: string;
    /**
     * - House or apartment number of the customer.
     */
    house_no?: string;
    geo_location?: GeoLocationSchema;
    /**
     * - Gender of customer
     */
    gender?: string;
    /**
     * - Landmark or reference point near the
     * customer's location.
     */
    landmark?: string;
    /**
     * - Address type in the seller's system.
     */
    address_type?: string;
    /**
     * - State code of the customer's location.
     */
    state_code?: string;
    /**
     * - Floor number of the customer's location.
     */
    floor_no?: string;
    /**
     * - Alternate Email Address
     */
    alternate_email?: string;
    /**
     * - First line of the address.
     */
    address1?: string;
    /**
     * - Second line of the address.
     */
    address2?: string;
    /**
     * - Specifies the country's unique
     * identifier allowing the ISO 3166-1 alpha-2 standard. This two-letter code
     * is crucial for distinguishing countries in international transactions, data
     * processing, and shipping logistics.
     */
    country_iso_code?: string;
    /**
     * - The unique identifier assigned to the
     * customer. Refer <a
     * href='/commerce/sdk/latest/platform/application/user#customer'>Customer</a>
     * to get more details.
     */
    user_id?: string;
    /**
     * - Area Code
     */
    area_code?: string;
    area_code_slug?: string;
    country_phone_code?: string;
};
/** @returns {CPConfigurationSchema} */
declare function CPConfigurationSchema(): CPConfigurationSchema;
type CPConfigurationSchema = {
    /**
     * - Shipping Handled by FYND or SELLER
     */
    shipping_by: string;
};
/** @returns {ShippingDetailsSchema} */
declare function ShippingDetailsSchema(): ShippingDetailsSchema;
type ShippingDetailsSchema = {
    /**
     * - First name of the customer
     */
    first_name?: string;
    /**
     * - Country phone code ex: +91
     */
    phone_code?: string;
    /**
     * - Country of the customer
     */
    country?: string;
    /**
     * - City of the customer
     */
    city?: string;
    /**
     * - Pincode of the customer
     */
    pincode?: string;
    /**
     * - Last name of the customer
     */
    last_name?: string;
    /**
     * - Primary phone number of the customer
     */
    mobile_number?: string;
    /**
     * - Primary email of the customer
     */
    email?: string;
    /**
     * - State of the customer
     */
    state?: string;
    /**
     * - Alternate mobile number
     */
    alternate_mobile_number?: string;
    /**
     * - Shipping address of the customer
     */
    address?: string;
    /**
     * - Customer's middle name.
     */
    middle_name?: string;
    /**
     * - Customer's title or prefix.
     */
    title?: string;
    /**
     * - House or apartment number of the customer.
     */
    house_no?: string;
    geo_location?: GeoLocationSchema;
    /**
     * - Gender of customer
     */
    gender?: string;
    /**
     * - Landmark or reference point near the
     * customer's location.
     */
    landmark?: string;
    /**
     * - A string representing the address type in
     * the seller's system.
     */
    address_type?: string;
    /**
     * - State code of the customer's location.
     */
    state_code?: string;
    /**
     * - Floor number of the customer's location.
     */
    floor_no?: string;
    /**
     * - Alternate Email Address
     */
    alternate_email?: string;
    /**
     * - First line of the address
     */
    address1?: string;
    /**
     * - Second line of the address
     */
    address2?: string;
    /**
     * - Specifies the country's unique
     * identifier allowing the ISO 3166-1 alpha-2 standard. This two-letter code
     * is crucial for distinguishing countries in international transactions, data
     * processing, and shipping logistics.
     */
    country_iso_code?: string;
    /**
     * - The unique identifier assigned to the
     * customer. Refer <a
     * href='/commerce/sdk/latest/platform/application/user#customer'>Customer</a>
     * in platform documentation to get more details. details.
     */
    user_id?: string;
    /**
     * - Area Code
     */
    area_code?: string;
    area_code_slug?: string;
    country_phone_code?: string;
};
/** @returns {UserDetailsSchema} */
declare function UserDetailsSchema(): UserDetailsSchema;
type UserDetailsSchema = {
    /**
     * - The customer's GSTIN (Goods and Services Tax
     * Identification Number).
     */
    gstin?: string;
    /**
     * - The customer's PAN (Permanent Account Number).
     */
    pan_no?: string;
};
/** @returns {LifecycleMessageSchema} */
declare function LifecycleMessageSchema(): LifecycleMessageSchema;
type LifecycleMessageSchema = {
    /**
     * - The message text to display to users at specific
     * order states (e.g., PLACED, SHIPPED).
     */
    message: string;
    /**
     * - The message type, which determines the color of the
     * message bar.
     */
    type: string;
    /**
     * - List of OMS states at which the message should
     * be visible.
     */
    states: string[];
    /**
     * - Determines the message display sequence, with
     * '1' being the highest priority.
     */
    priority: number;
};
/** @returns {CreateOrderRequestSchema} */
declare function CreateOrderRequestSchema(): CreateOrderRequestSchema;
type CreateOrderRequestSchema = {
    /**
     * - List of shipments
     * included in the order.
     */
    shipments?: CreateOrderShipmentSchema[];
    /**
     * - Tags that can be used to filter and categorize
     * orders and shipments.
     */
    tags?: string[];
    currency_details: CurrencySchema;
    /**
     * - Timestamp indicating when the
     * order was created in an external system.
     */
    external_creation_date?: string;
    coupon_details?: CouponSchema;
    billing_details: BillingDetailsSchema;
    /**
     * - The primary payment method used for
     * the entire order transaction.
     */
    primary_payment_mode: string;
    cp_configuration?: CPConfigurationSchema;
    /**
     * - The location ID where the order
     * is placed. Required when the order is placed from one location but
     * fulfilled by another.
     */
    ordering_location_id?: number;
    /**
     * - Allows location
     * reassignment before order confirmation.
     */
    allow_location_reassignment?: boolean;
    shipping_details: ShippingDetailsSchema;
    /**
     * - A unique identifier assigned to the
     * order by an external system or service.
     */
    external_order_id?: string;
    user_details?: UserDetailsSchema;
    /**
     * - List of
     * order lifecycle messages to be displayed to the seller at Order Details.
     */
    order_lifecycle_messages?: LifecycleMessageSchema[];
    /**
     * - Identifies the application from
     * which the order was created. Pass this when it differs from the fulfilling
     * company's application.
     */
    channel_application_id?: string;
    /**
     * - The GSTIN (Goods and Services Tax
     * Identification Number) for business-to-business transactions.
     */
    b2b_gstin_number?: string;
    /**
     * - The company ID where the order is
     * placed. Required when the order is placed from one company but fulfilled by another.
     */
    channel_company_id?: string;
    /**
     * - Indicates whether the order is a draft.
     * Draft orders will be moved to upcoming state instead of placed status.
     */
    is_draft?: boolean;
    /**
     * - Indicates whether the order is an
     * offline order placed through a physical store or offline channel.
     */
    is_offline_order?: boolean;
    /**
     * - Metadata related to the order may include
     * additional, dynamic information that provides further context about the
     * order. This information can also be viewed on the Order or Shipment Details page.
     */
    meta?: any;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of all items across all pages.
     */
    item_total?: number;
    /**
     * - The identifier for the next page.
     */
    next_id?: string;
    /**
     * - Indicates whether there is a previous page.
     */
    has_previous?: boolean;
    /**
     * - Indicates whether there is a next page.
     */
    has_next?: boolean;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - The type of the page, can be 'cursor' or 'number'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
    /**
     * - The number of items per page.
     */
    page_size?: number;
};
/** @returns {OrderingSourceConfig} */
declare function OrderingSourceConfig(): OrderingSourceConfig;
type OrderingSourceConfig = {
    /**
     * - Slug of the ordering source.
     */
    slug?: string;
    configs?: OrderingSourceFeature[];
    /**
     * - Logo of the ordering source.
     */
    logo?: string;
};
/** @returns {OrderingSourceFeature} */
declare function OrderingSourceFeature(): OrderingSourceFeature;
type OrderingSourceFeature = {
    /**
     * - Name of the ordering source config item.
     */
    name?: string;
    /**
     * - Slug of the ordering source config item.
     */
    slug?: string;
    /**
     * - Description of the ordering source config item.
     */
    description?: string;
    /**
     * - Whether the config/feature is enabled or not.
     */
    enabled?: boolean;
};
/** @returns {ListOrderingSources} */
declare function ListOrderingSources(): ListOrderingSources;
type ListOrderingSources = {
    items?: OrderingSourceSummary[];
    page?: Page;
};
/** @returns {OrderingSourceSummary} */
declare function OrderingSourceSummary(): OrderingSourceSummary;
type OrderingSourceSummary = {
    /**
     * - Display Text of the ordering source.
     */
    text?: string;
    /**
     * - Value of the ordering source.
     */
    value?: string;
};
/** @returns {CreateAccount} */
declare function CreateAccount(): CreateAccount;
type CreateAccount = {
    /**
     * - Unique name identifier for the
     * channel account. This represents the sales channel or marketplace through
     * which orders are received and processed.
     */
    channel_account_name: string;
};
/** @returns {Account} */
declare function Account(): Account;
type Account = {
    /**
     * - Unique identifier for the channel
     * account. This is a system-generated identifier used to reference the
     * account across the platform.
     */
    channel_account_id?: string;
    /**
     * - Unique identifier of the company on the
     * platform to which this channel account belongs.
     */
    company_id?: number;
    /**
     * - Name of the channel account. This
     * identifies the specific sales channel or marketplace (e.g., SHOPIFY,
     * MARKETPLACE, etc.) through which the company receives and processes orders.
     */
    channel_account_name?: string;
};
/** @returns {AccountsList} */
declare function AccountsList(): AccountsList;
type AccountsList = {
    /**
     * - List of channel accounts associated with the
     * company. Each account represents a different sales channel or marketplace
     * integration.
     */
    data?: Account[];
    page?: Page;
};
/** @returns {PackageProduct} */
declare function PackageProduct(): PackageProduct;
type PackageProduct = {
    /**
     * - The line number of the product within the
     * shipment, used for tracking and identification purposes.
     */
    line_number: number;
    /**
     * - The quantity of the product included in this package.
     */
    quantity: number;
    /**
     * - The unique identifier or SKU (Stock Keeping
     * Unit) of the product. This is used to match products across packages and bags.
     */
    identifier: string;
};
/** @returns {ValidationError} */
declare function ValidationError(): ValidationError;
type ValidationError = {
    /**
     * - A brief description of the error encountered.
     */
    message: string;
    /**
     * - The field in the request that caused the error.
     */
    field: string;
};
/** @returns {BagReasonMeta} */
declare function BagReasonMeta(): BagReasonMeta;
type BagReasonMeta = {
    /**
     * - Indicates whether a text area should
     * be displayed for additional input related to the bag reason.
     */
    show_text_area?: boolean;
};
/** @returns {QuestionSet} */
declare function QuestionSet(): QuestionSet;
type QuestionSet = {
    /**
     * - A unique identifier for the question set.
     */
    id?: number;
    /**
     * - The display name for the question set,
     * used for user-facing purposes.
     */
    display_name?: string;
};
/** @returns {BagReasons} */
declare function BagReasons(): BagReasons;
type BagReasons = {
    /**
     * - List of QC (Quality Control) types -- having
     * return reason types indicating the stage at which QC is performed. -
     * "Doorstep QC" refers involves inspecting products for damages at the
     * customer's location before delivery. - "Pre QC" requires customers to
     * upload product photos for a preliminary quality check by the operations
     * team before a return or exchange pickup is arranged, ensuring criteria are
     * met and optimizing logistics.
     */
    qc_type?: string[];
    /**
     * - A unique identifier for the bag reason.
     */
    id?: number;
    /**
     * - The display name for the bag reason, used
     * for user-facing purposes.
     */
    display_name?: string;
    meta?: BagReasonMeta;
    /**
     * - An array of question sets linked
     * to the bag reason, defining the questions to be answered.
     */
    question_set?: QuestionSet[];
    /**
     * - An array of nested bag reasons that can
     * further explain the primary reason.
     */
    reasons?: BagReasons[];
};
/** @returns {ShipmentBagReasons} */
declare function ShipmentBagReasons(): ShipmentBagReasons;
type ShipmentBagReasons = {
    /**
     * - List of bag reasons for a shipment with
     * a corresponding shipment status.
     */
    reasons?: BagReasons[];
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - The unique identifier for the rule that is
     * associated with the given reasons. This ID serves as a reference to the
     * specific rule within the RMA system that governs or influences the reasons listed.
     */
    rule_id?: number;
};
/** @returns {ShipmentStatus} */
declare function ShipmentStatus(): ShipmentStatus;
type ShipmentStatus = {
    /**
     * - The current status of the shipment.
     */
    current_shipment_status?: string;
    /**
     * - It contains the additional properties related to
     * shipment status transition like Kafka_emission_status, user_name, etc.
     * Additionally it is dynamic.
     */
    meta?: any;
    /**
     * - A unique identifier for the shipment status.
     */
    id?: number;
    /**
     * - A list of bags associated with the
     * shipment, useful for tracking individual items within the shipment.
     */
    bag_list?: string[];
    /**
     * - A brief title or label for the shipment status,
     * summarizing its current state.
     */
    title: string;
    /**
     * - A user-friendly name or identifier for
     * the shipment status.
     */
    display_name?: string;
    /**
     * - Timestamp when the shipment was initially
     * created.This timestamp is crucial for tracking the shipment's age,
     * scheduling, and historical analysis.
     */
    created_at?: string;
    /**
     * - A general timestamp for when the shipment
     * was created, formatted for internal processing.
     */
    created_ts?: string;
    /**
     * - A unique identifier for the shipment.
     */
    shipment_id?: string;
    /**
     * - Timestamp when the transition for
     * the status of the shipment was created. Date time in UTC timezone as per ISO format.
     */
    status_created_at?: string;
    /**
     * - A general timestamp indicating when the
     * status was updated, useful for processing and tracking.
     */
    updated_ts?: string;
    /**
     * - This key denotes the status of the shipment,
     * providing a clear indication of its current processing stage.
     */
    status: string;
};
/** @returns {OrderingSourceDetails} */
declare function OrderingSourceDetails(): OrderingSourceDetails;
type OrderingSourceDetails = {
    /**
     * - Type of the ordering source.
     */
    type?: string;
    /**
     * - Slug identifier of the ordering source.
     */
    slug?: string;
    /**
     * - Display name of the ordering source.
     */
    display_name?: string;
    /**
     * - Indicates whether the ordering source is active.
     */
    is_active?: boolean;
    /**
     * - Logo URL of the ordering source.
     */
    logo?: string;
};
/** @returns {UserDataInfo} */
declare function UserDataInfo(): UserDataInfo;
type UserDataInfo = {
    /**
     * - The unique identifier associated with the user.
     */
    id?: number;
    /**
     * - The object ID for the user, used for
     * referencing the user in various operations.
     */
    user_oid?: string;
    /**
     * - The identifier for the user.
     */
    mongo_user_id?: string;
    /**
     * - The identifier for the user in
     * external systems.
     */
    external_customer_id?: string;
    /**
     * - The first name of the user.
     */
    first_name?: string;
    /**
     * - The last name of the user.
     */
    last_name?: string;
    /**
     * - The mobile phone number of the user.
     */
    mobile?: string;
    /**
     * - The email address of the user.
     */
    email?: string;
    /**
     * - Additional metadata related to the user.
     */
    meta?: any;
    /**
     * - Indicates whether the user is an
     * anonymous user (true) or registered (false).
     */
    is_anonymous_user?: boolean;
    /**
     * - A full name of the user, which may be a
     * combination of first and last name.
     */
    name?: string;
    /**
     * - The gender of the user.
     */
    gender?: string;
    /**
     * - The country-specific phone code,
     * useful for formatting mobile numbers correctly.
     */
    country_phone_code?: string;
};
/** @returns {BundleReturnConfig} */
declare function BundleReturnConfig(): BundleReturnConfig;
type BundleReturnConfig = {
    /**
     * - Indicates whether partial
     * returns are allowed for bundle products.
     */
    allow_partial_return?: boolean;
    /**
     * - Indicates whether the bundle product is returnable.
     */
    returnable?: boolean;
    /**
     * - Time unit for the return window (e.g., "week",
     * "day", "hour").
     */
    unit?: boolean;
    /**
     * - Duration value for the return window, expressed
     * in the specified unit.
     */
    time?: boolean;
};
/** @returns {BundleDetails} */
declare function BundleDetails(): BundleDetails;
type BundleDetails = {
    /**
     * - Unique group identifier for the bundle.
     */
    bundle_group_id?: string;
    /**
     * - Name of the bundle.
     */
    name?: string;
    /**
     * - URL-friendly identifier for the bundle.
     */
    slug?: string;
    /**
     * - Indicates bundle count of the bag.
     */
    bundle_count?: number;
    /**
     * - Unique identifier for the article bundle.
     */
    article_bundle_id?: string;
    /**
     * - Article net_quantity in bundle Product.
     */
    bundle_article_quantity?: number;
    /**
     * - A flag that determines if bag is base bag of bundle.
     */
    is_base?: boolean;
    /**
     * - Maximum Retail Price of the bundle.
     */
    price_marked?: number;
    /**
     * - Current selling price of the bundle.
     */
    price_effective?: number;
    /**
     * - Unique identifier for the item.
     */
    item_id?: number;
    /**
     * - Type of the item (physical_bundle, virtual_bundle).
     */
    item_type?: string;
    return_config?: BundleReturnConfig;
    /**
     * - Identifier for the seller of the bundle.
     */
    seller_identifier?: string;
    /**
     * - An array of image URLs associated with the bundle.
     */
    images?: string[];
    /**
     * - Identifier for the brand name.
     */
    brand_name?: string;
    /**
     * - Size associated with the bundle item.
     */
    size?: string;
};
/** @returns {Address} */
declare function Address(): Address;
type Address = {
    /**
     * - The phone number at the address, used for
     * contact purposes.
     */
    phone?: string;
    /**
     * - An optional additional field for the street
     * address of the address.
     */
    address2?: string;
    /**
     * - An optional additional field for the street
     * address of the address.
     */
    address?: string;
    /**
     * - The longitude coordinate of the address.
     */
    longitude?: number;
    /**
     * - The postal code of the address.
     */
    pincode?: string;
    /**
     * - Area details of the address.
     */
    area?: string;
    /**
     * - The type of the address.
     */
    address_type?: string;
    /**
     * - The name of the country of the address.
     */
    country?: string;
    /**
     * - Category or classification of the
     * address. The address_category field that includes "store", "delivery", and
     * "billing" serves to classify addresses based on various business processes.
     * addresses based on various business processes
     *
     * - 'store': Identifies addresses associated with physical retail locations or
     * warehouses which is essential for inventory management, order
     * fulfillment, and facilitating in-store pickups or returns.
     * - 'delivery': Identifies addresses where orders are shipped to customers which
     * ensures successful delivery, enhancing customer satisfaction, and
     * optimizing logistics operations.
     * - 'billing': Identifies addresses used for billing and financial transactions
     * which are essential for payment processing, invoice generation, and
     * maintaining financial accuracy
     */
    address_category?: string;
    /**
     * - The email of the person associated with the order.
     */
    email?: string;
    /**
     * - Created at date for address
     */
    created_at?: string;
    /**
     * - The primary address dynamically forms based
     * on a template. If the template includes a single key, Address1 contains
     * that data. For templates with multiple keys like {address} {address2}
     * {area} {state} {country}, Address1 compiles all into a single formatted string.
     */
    address1?: string;
    /**
     * - A formatted version of the address for
     * display purposes.
     */
    display_address?: string;
    /**
     * - A notable landmark near the address, aiding
     * in location identification.
     */
    landmark?: string;
    /**
     * - Updated at date for address
     */
    updated_at?: string;
    /**
     * - The version number of the address record
     */
    version?: string;
    /**
     * - The latitude coordinate of the address.
     */
    latitude?: number;
    /**
     * - The full name of the person associated
     * with the address.
     */
    contact_person?: string;
    /**
     * - The name of the region (for example, province,
     * state, or prefecture) of the address.
     */
    state?: string;
    /**
     * - The city, town of the address.
     */
    city?: string;
    /**
     * - A slug representation of the area code.
     */
    area_code_slug?: string;
    /**
     * - A code representing the country for the address.
     */
    country_code?: string;
    /**
     * - The ISO code representing the country
     * for the address.
     */
    country_iso_code?: string;
    /**
     * - The country-specific phone code for
     * formatting phone numbers.
     */
    country_phone_code?: string;
    /**
     * - A unique identifier for the
     * delivery address.
     */
    delivery_address_id?: number;
    /**
     * - An object containing additional
     * geographical information related to the address.
     */
    geo_location?: any;
    /**
     * - A unique identifier for the name associated with
     * the address.
     */
    name?: string;
    /**
     * - The sector or zone of the address, if applicable.
     */
    sector?: string;
    /**
     * - A code representing the state or region for
     * the address.
     */
    state_code?: string;
    /**
     * - A unique identifier for the user associated with
     * the address.
     */
    uid?: string;
    /**
     * - The unique identifier of the user in the system.
     */
    user_id?: string;
    /**
     * - A unique identifier associated with store.
     */
    code?: string;
};
/** @returns {ShipmentListingChannel} */
declare function ShipmentListingChannel(): ShipmentListingChannel;
type ShipmentListingChannel = {
    /**
     * - A unique identifier for the
     * shipment associated with a specific channel, facilitating tracking and management.
     */
    channel_shipment_id?: string;
    /**
     * - Indicates whether the shipment is
     * associated with an affiliate program, which may affect processing and fulfillment.
     */
    is_affiliate?: boolean;
    /**
     * - A URL or path to the logo of the shipment
     * channel, used for branding and identification purposes.
     */
    logo?: string;
    /**
     * - The name of the shipment channel, providing a
     * human-readable reference for the channel through which the shipment is processed.
     */
    name?: string;
};
/** @returns {Prices} */
declare function Prices(): Prices;
type Prices = {
    /**
     * - Refund credits applicable to the
     * customer in case of returns or cancellations.
     */
    refund_credit?: number;
    /**
     * - Total amount paid, rounded off to
     * the nearest integer.
     */
    amount_paid_roundoff?: number;
    /**
     * - Effective price after applying
     * discounts to the MRP (Maximum Retail Price).
     */
    price_effective?: number;
    /**
     * - Discount amount provided
     * through promotions applicable to the purchase.
     */
    promotion_effective_discount?: number;
    /**
     * - Updated selling price of the product in
     * the event of repricing.
     */
    pm_price_split?: number;
    /**
     * - Total amount to be refunded in case of
     * cancellation or return.
     */
    refund_amount?: number;
    /**
     * - Fixed selling price applicable for
     * payouts by the brand to the platform.
     */
    transfer_price?: number;
    /**
     * - Discount amount applicable
     * when using a coupon.
     */
    coupon_effective_discount?: number;
    /**
     * - Tax amount collected at the
     * source during the transaction.
     */
    tax_collected_at_source?: number;
    /**
     * - Calculated price after
     * deducting coupon and promotion discounts from the effective price.
     */
    brand_calculated_amount?: number;
    /**
     * - Fee charged for delivery, as
     * stipulated by the delivery partner.
     */
    delivery_charge?: number;
    /**
     * - Cashback points or amount provided to the
     * customer post-purchase.
     */
    cashback?: number;
    /**
     * - Effective selling price minus the GST
     * amount applicable to the product.
     */
    value_of_good?: number;
    /**
     * - Actual cashback value that has been
     * applied to the purchase.
     */
    cashback_applied?: number;
    /**
     * - Charges applicable for Cash on Delivery
     * (COD) orders.
     */
    cod_charges?: number;
    /**
     * - The marked price of the item before any
     * discounts or adjustments.
     */
    price_marked?: number;
    /**
     * - Total amount actually paid by the customer
     * for the purchase.
     */
    amount_paid?: number;
    /**
     * - The effective value of the coupon applied
     * to the transaction.
     */
    coupon_value?: number;
    /**
     * - Total discount amount deducted from the
     * original price of the product.
     */
    discount?: number;
    /**
     * - Credits awarded by Fynd, which can be
     * used for future purchases.
     */
    fynd_credits?: number;
    /**
     * - The amount associated with any gift card
     * used in the transaction.
     */
    gift_price?: number;
    /**
     * - Total amount to be collected in
     * scenarios involving multiple payment methods.
     */
    amount_to_be_collected?: number;
    /**
     * - The base cost incurred by the seller to
     * acquire or produce the product before margin or discount.
     */
    cost_price?: number;
    /**
     * - Amount reduced from the payable price
     * when the customer applies loyalty program points while placing the order.
     */
    loyalty_discount?: number;
};
/** @returns {ChargeDistributionSchema} */
declare function ChargeDistributionSchema(): ChargeDistributionSchema;
type ChargeDistributionSchema = {
    /**
     * - This field defines the distribution type, e.g
     * values('multi', 'single') multi: distribute the changes across all entity
     * single: distribute the changes across to any one single entity
     */
    type: string;
    /**
     * - This field defines the distribution logic e.g
     * values('apportion', 'equally') apportion: distribute charge amount based of
     * weighted average amount of all the entity (like article with [10, 20] will
     * get charge of 9 as [3, 6]) equally: distribute charge amount 'equally' to
     * all the entity
     */
    logic: string;
};
/** @returns {ChargeDistributionLogic} */
declare function ChargeDistributionLogic(): ChargeDistributionLogic;
type ChargeDistributionLogic = {
    distribution: ChargeDistributionSchema;
    /**
     * - This field defines the distribution
     * level, e.g distribution level is (order, shipment, article)
     */
    distribution_level: string;
};
/** @returns {ChargeAmountCurrency} */
declare function ChargeAmountCurrency(): ChargeAmountCurrency;
type ChargeAmountCurrency = {
    /**
     * - Charge currency value or amount
     */
    value: number;
    /**
     * - Charge currency code
     */
    currency: string;
};
/** @returns {ChargeAmount} */
declare function ChargeAmount(): ChargeAmount;
type ChargeAmount = {
    base_currency: ChargeAmountCurrency;
    ordering_currency: ChargeAmountCurrency;
};
/** @returns {PriceAdjustmentCharge} */
declare function PriceAdjustmentCharge(): PriceAdjustmentCharge;
type PriceAdjustmentCharge = {
    /**
     * - Code defined for charge
     */
    code?: string;
    /**
     * - Display name for charge (charge is unique by the name)
     */
    name: string;
    /**
     * - Type defined for charge
     */
    type?: string;
    amount: ChargeAmount;
    distribution_logic: ChargeDistributionLogic;
};
/** @returns {OrderingCurrencyPrices} */
declare function OrderingCurrencyPrices(): OrderingCurrencyPrices;
type OrderingCurrencyPrices = {
    /**
     * - Amount of refund credits applicable to
     * the customer's account for returned items or cancellations.
     */
    refund_credit?: number;
    /**
     * - Total amount paid by the
     * customer, rounded off to the nearest integer for ease of processing.
     */
    amount_paid_roundoff?: number;
    /**
     * - Final effective price of the product
     * after applying discounts to the marked retail price (MRP).
     */
    price_effective?: number;
    /**
     * - Total discount amount
     * applied through promotional offers specific to the customer's purchase.
     */
    promotion_effective_discount?: number;
    /**
     * - Updated selling price of the product
     * after any repricing adjustments made before the sale.
     */
    pm_price_split?: number;
    /**
     * - Amount that will be refunded to the
     * customer in case of order cancellation or product return.
     */
    refund_amount?: number;
    /**
     * - Fixed price set for payouts by the
     * brand, representing the cost to the retailer or affiliate.
     */
    transfer_price?: number;
    /**
     * - Discount value realized
     * through the use of a coupon code applied at the time of purchase.
     */
    coupon_effective_discount?: number;
    /**
     * - Total tax amount that is
     * collected at the point of sale, often applicable for tax regulations.
     */
    tax_collected_at_source?: number;
    /**
     * - Amount calculated by the brand
     * after applying any relevant coupons and promotions to the base price.
     */
    brand_calculated_amount?: number;
    /**
     * - Cost charged for the delivery service,
     * as determined by the delivery partner handling the shipment.
     */
    delivery_charge?: number;
    /**
     * - Points or monetary value returned to the
     * customer as a reward for their purchase, which can be used for future transactions.
     */
    cashback?: number;
    /**
     * - Net selling price of the product after
     * excluding the GST (Goods and Services Tax) amount from the total.
     */
    value_of_good?: number;
    /**
     * - Total cashback value that has been
     * applied to the customer's account or to the current transaction.
     */
    cashback_applied?: number;
    /**
     * - Additional fee charged for orders placed
     * via cash on delivery (COD) payment method.
     */
    cod_charges?: number;
    /**
     * - The original price indicated for the
     * product before any discounts or promotions are applied.
     */
    price_marked?: number;
    /**
     * - The total amount the customer has paid for
     * their order, including all applicable charges and discounts.
     */
    amount_paid?: number;
    /**
     * - The specific value of the coupon used in
     * the transaction, reflecting its impact on the total price.
     */
    coupon_value?: number;
    /**
     * - Total amount discounted from the original
     * price of the product, reflecting savings for the customer.
     */
    discount?: number;
    /**
     * - Credits provided by Fynd, which can be
     * used for discounts on future purchases.
     */
    fynd_credits?: number;
    /**
     * - Monetary value assigned to a gift card
     * purchased by the customer, usable for future transactions.
     */
    gift_price?: number;
    /**
     * - Amount to be collected from the
     * customer when multiple payment methods are utilized for a single order.
     */
    amount_to_be_collected?: number;
    /**
     * - The base cost incurred by the seller to
     * acquire or produce the product before margin or discount.
     */
    cost_price?: number;
    /**
     * - Amount reduced from the payable price
     * when the customer applies loyalty program points while placing the order.
     */
    loyalty_discount?: number;
};
/** @returns {Identifier} */
declare function Identifier(): Identifier;
type Identifier = {
    /**
     * - The ALU (Article Level Unit) code used to identify
     * the item at a detailed level, often specific to certain retail or
     * distribution systems.
     */
    alu?: string;
    /**
     * - The European Article Number (EAN) is a unique
     * identifier for products, primarily used in retail and logistics. It helps
     * in tracking and managing inventory across various platforms.
     */
    ean?: string;
    /**
     * - The Stock Keeping Unit (SKU) code of the item
     * - uniquely identifies each distinct product. SKUs are used to track
     * inventory levels, facilitate accurate stocktaking, and streamline order
     * fulfillment processes. This code is essential for inventory management,
     * allowing for the differentiation between products based on attributes such
     * as price, color, and size.
     */
    sku_code?: string;
    /**
     * - The Universal Product Code (UPC) is a barcode
     * symbol used for tracking trade items in stores. It is widely used in North
     * America and helps in identifying products quickly during point-of-sale transactions.
     */
    upc?: string;
    /**
     * - The International Standard Book Number (ISBN) is
     * a unique identifier for books, allowing for easier management and tracking
     * of book inventories in retail and library systems.
     */
    isbn?: string;
};
/** @returns {TaxComponent} */
declare function TaxComponent(): TaxComponent;
type TaxComponent = {
    /**
     * - The name or type of the tax component (e.g., GST,
     * VAT, Service Tax). This helps in identifying the specific tax being applied
     * to the transaction or item.
     */
    name?: string;
    /**
     * - The percentage rate at which the tax is applied
     * to the taxable amount. This value is typically represented as a decimal
     * (e.g., 0.18 for 18% tax).
     */
    rate?: number;
    /**
     * - The total monetary value of the tax
     * calculated for this component. This is derived by applying the tax rate to
     * the taxable amount.
     */
    tax_amount?: number;
    /**
     * - The base amount on which the tax is
     * calculated, excluding the tax itself. This represents the value of goods or
     * services before tax is applied.
     */
    taxable_amount?: number;
};
/** @returns {SellerQcDetails} */
declare function SellerQcDetails(): SellerQcDetails;
type SellerQcDetails = {
    /**
     * - Represents the line number in an order or
     * transaction associated with the bag.
     */
    line_number?: number;
    /**
     * - Represents the total number of items in a
     * bag that have failed quality control and are marked as bad QC.
     */
    bad_quantity?: number;
    /**
     * - Represents the total number of items in
     * a bag that have passed quality control and are marked as good QC.
     */
    good_quantity?: number;
};
/** @returns {FinancialBreakup} */
declare function FinancialBreakup(): FinancialBreakup;
type FinancialBreakup = {
    /**
     * - The amount of refund credits applicable
     * for the transaction.
     */
    refund_credit: number;
    /**
     * - Total amount paid, rounded off to
     * the nearest integer for billing purposes.
     */
    amount_paid_roundoff?: number;
    /**
     * - The effective price after applying
     * discounts and before any taxes.
     */
    price_effective: number;
    /**
     * - The amount of discount
     * applied from promotional offers.
     */
    promotion_effective_discount: number;
    /**
     * - The fixed selling price applicable for
     * payouts by the brand.
     */
    transfer_price: number;
    /**
     * - The discount applied through a
     * coupon code, if applicable.
     */
    coupon_effective_discount: number;
    /**
     * - Total Goods and Services Tax (GST) fee charged
     * on the goods or services.
     */
    gst_fee: number;
    /**
     * - Tax amount collected at the
     * source of income or transaction.
     */
    tax_collected_at_source?: number;
    /**
     * - Amount calculated by the brand,
     * possibly reflecting various costs or fees.
     */
    brand_calculated_amount: number;
    /**
     * - Fee applicable for the delivery of the goods.
     */
    delivery_charge: number;
    /**
     * - A tag used to denote GST-related attributes or
     * classifications.
     */
    gst_tag: string;
    /**
     * - The HSN Code (Harmonized System of Nomenclature
     * Code) is an internationally standardized system for classifying goods, used
     * in trade and commerce for uniform identification across different countries.
     */
    hsn_code: string;
    /**
     * - The cashback amount provided to the customer,
     * if applicable.
     */
    cashback: number;
    /**
     * - The name or description of the item related to
     * the financial breakup.
     */
    item_name: string;
    /**
     * - The assessed value of the goods before
     * applying any taxes or fees.
     */
    value_of_good: number;
    /**
     * - The effective cashback value that has
     * been applied to the transaction.
     */
    cashback_applied: number;
    /**
     * - Charges applicable for Cash on Delivery (COD) orders.
     */
    cod_charges: number;
    /**
     * - The indicated price or value assigned to an
     * item before any discounts or adjustments.
     */
    price_marked: number;
    /**
     * - The size of the item, if applicable.
     */
    size: string;
    /**
     * - Total amount paid by the customer for the transaction.
     */
    amount_paid: number;
    /**
     * - The effective value of the coupon used in
     * the transaction.
     */
    coupon_value: number;
    /**
     * - Total amount discounted from the original price
     * of the goods.
     */
    discount: number;
    /**
     * - Credits provided by Fynd to the customer,
     * possibly as part of a rewards program.
     */
    fynd_credits: number;
    /**
     * - The percentage of GST applicable on
     * the goods or services.
     */
    gst_tax_percentage: number;
    /**
     * - Amount to be collected in case
     * of multiple modes of payments.
     */
    amount_to_be_collected?: number;
    identifiers: Identifier;
    /**
     * - The total number of units involved in the transaction.
     */
    total_units: number;
    /**
     * - Indicates whether the amount has
     * been added to Fynd cash for future use.
     */
    added_to_fynd_cash: boolean;
    /**
     * - Applied Tax Components
     */
    taxes?: TaxComponent[];
    /**
     * - Amount reduced from the payable price
     * when the customer applies loyalty program points while placing the order.
     */
    loyalty_discount?: number;
};
/** @returns {GSTDetailsData} */
declare function GSTDetailsData(): GSTDetailsData;
type GSTDetailsData = {
    /**
     * - The percentage of Central Goods
     * and Services Tax (CGST) applicable on the goods or services.
     */
    cgst_tax_percentage?: number;
    /**
     * - A GST Number (Goods and Services Tax
     * Identification Number, often abbreviated as GSTIN) is a unique identifier
     * assigned to a business or individual registered under the Goods and
     * Services Tax (GST) system in countries like India. The GST number is
     * essential for businesses to comply with tax regulations and for the
     * government to track tax payments and returns.
     */
    gstin_code?: string;
    /**
     * - The assessed value of the goods before
     * applying any taxes or fees.
     */
    value_of_good: number;
    /**
     * - The total GST fee charged on the goods or services.
     */
    gst_fee: number;
    /**
     * - The percentage of Integrated Goods
     * and Services Tax (IGST) applicable for inter-state transactions.
     */
    igst_tax_percentage?: number;
    /**
     * - The overall GST tax percentage
     * applicable to the goods or services.
     */
    gst_tax_percentage?: number;
    /**
     * - Unique identifier for the Harmonized
     * System of Nomenclature (HSN) code used to classify goods.
     */
    hsn_code_id?: string;
    /**
     * - The GST fee applicable for IGST, usually
     * for inter-state transactions.
     */
    igst_gst_fee?: number;
    /**
     * - Indicates whether this HSN code
     * is the default classification for the goods.
     */
    is_default_hsn_code?: boolean;
    /**
     * - The GST fee applicable for State Goods
     * and Services Tax (SGST).
     */
    sgst_gst_fee?: number;
    /**
     * - Tax amount collected at the
     * source of income or transaction, often for compliance and revenue tracking.
     */
    tax_collected_at_source: number;
    /**
     * - Amount calculated by the brand,
     * potentially reflecting costs, fees, or pricing structures.
     */
    brand_calculated_amount: number;
    /**
     * - The GST fee applicable for CGST.
     */
    cgst_gst_fee?: number;
    /**
     * - A tag or label used to denote GST-related
     * attributes or classifications.
     */
    gst_tag?: string;
    /**
     * - The percentage of State Goods and
     * Services Tax (SGST) applicable on the goods or services.
     */
    sgst_tax_percentage?: number;
    /**
     * - The HSN Code (Harmonized System of
     * Nomenclature Code) is an internationally standardized system for
     * classifying goods. It is used in trade and commerce to identify products
     * and services uniformly across different countries and industries. The
     * system was developed by the World Customs Organization (WCO) and is widely
     * used in customs processes and tax systems.
     */
    hsn_code?: string;
};
/** @returns {BagStateMapper} */
declare function BagStateMapper(): BagStateMapper;
type BagStateMapper = {
    /**
     * - Indicates whether the state is currently
     * active in the shipment process.
     */
    is_active?: boolean;
    /**
     * - Display name used in the application
     * to represent this state.
     */
    app_display_name?: string;
    /**
     * - Serves as a key identifier to differentiate
     * among the diverse types of states a shipment can undergo throughout its journey.
     *
     * - 'operational': Pertains to states that involve the physical handling and
     * movement of the shipment, such as packing, in transit, and delivery.
     * - 'financial': Relates to states associated with the payment, invoicing, and
     * any monetary transactions or obligations tied to the shipment.
     * - 'logistics': Encompasses states that deal with the broader logistical
     * planning and coordination necessary for the shipment's journey,
     * including route optimization and carrier selection.
     */
    state_type: string;
    id: number;
    /**
     * - It is a type being used to represent the
     * journey of shipment through the performed status transition. Forward
     * Journey: The forward journey encompasses all the stages of shipping,
     * including order placement, packing, dispatch, in-transit updates, and
     * delivery. Return Journey: Contrary to the forward journey, the return
     * journey involves the process of sending items back from the customer to the
     * original sender or a designated return facility.
     */
    journey_type: string;
    /**
     * - The name of the state as used within
     * the application, providing a clear reference.
     */
    app_state_name?: string;
    /**
     * - Official name of the state in the context of the
     * shipment process.
     */
    name: string;
    /**
     * - Indicates if this state is visible to the
     * customer in the application.
     */
    app_facing?: boolean;
    /**
     * - Indicates whether the customer should
     * be notified upon reaching this state.
     */
    notify_customer?: boolean;
    /**
     * - User-friendly name for the state, suitable
     * for display purposes.
     */
    display_name: string;
};
/** @returns {BagStatusHistory} */
declare function BagStatusHistory(): BagStatusHistory;
type BagStatusHistory = {
    /**
     * - Indicates whether the bag is being forwarded
     * to the next stage in the shipment process.
     */
    forward?: boolean;
    /**
     * - Unique identifier for the store associated
     * with the bag's current status.
     */
    store_id?: number;
    /**
     * - The Air Waybill (AWB) number used
     * for tracking the delivery of the bag.
     */
    delivery_awb_number?: string;
    /**
     * - Indicates if the status update has been
     * synchronized with Kafka for real-time processing.
     */
    kafka_sync?: boolean;
    /**
     * - Identifier for the delivery
     * partner responsible for the shipment.
     */
    delivery_partner_id?: number;
    /**
     * - The display name of the application
     * that is handling the bag status update.
     */
    app_display_name?: string;
    /**
     * - Unique identifier for the current state of
     * the bag in the shipment process.
     */
    state_id?: number;
    /**
     * - Serves as a key identifier to differentiate
     * among the diverse types of states a shipment can undergo throughout its journey.
     */
    state_type?: string;
    /**
     * - Unique identifier for the bag status history entry.
     */
    bsh_id?: number;
    /**
     * - Timestamp when the bag status history
     * transaction was created.
     */
    created_at?: string;
    /**
     * - Timestamp of creation in a different
     * format, if applicable.
     */
    created_ts?: string;
    /**
     * - Identifier for the shipment associated
     * with this bag status entry.
     */
    shipment_id?: string;
    /**
     * - Timestamp when the bag status history
     * transaction was last updated.
     */
    updated_at?: string;
    /**
     * - Timestamp of last update in a different
     * format, if applicable.
     */
    updated_ts?: string;
    bag_state_mapper?: BagStateMapper;
    /**
     * - Unique identifier for the bag whose status is
     * being tracked.
     */
    bag_id?: number;
    /**
     * - List of reasons associated with the current
     * status of the bag.
     */
    reasons?: any[];
    /**
     * - Current status of the bag in the shipment process.
     */
    status: string;
    /**
     * - User-friendly name that describes the
     * current state of the bag.
     */
    display_name?: string;
};
/** @returns {Dimensions} */
declare function Dimensions(): Dimensions;
type Dimensions = {
    /**
     * - The height measurement of the object, typically
     * representing the vertical dimension.
     */
    height?: number;
    /**
     * - The width measurement of the object, indicating
     * the horizontal dimension.
     */
    width?: number;
    /**
     * - A flag indicating whether these dimensions
     * are the default measurements for the object.
     */
    is_default?: boolean;
    /**
     * - The unit of measurement used for the dimensions
     * (e.g., centimeters, inches).
     */
    unit?: string;
    /**
     * - The length measurement of the object,
     * representing the longest dimension.
     */
    length?: number;
};
/** @returns {ReturnConfig} */
declare function ReturnConfig(): ReturnConfig;
type ReturnConfig = {
    /**
     * - Indicates whether the article is eligible
     * for return, allowing customers to send it back under specified conditions.
     */
    returnable?: boolean;
    /**
     * - The time frame within which the return must be
     * initiated, typically measured in days.
     */
    time?: number;
    /**
     * - The unit of time for the return period (e.g., days, weeks).
     */
    unit?: string;
};
/** @returns {Weight} */
declare function Weight(): Weight;
type Weight = {
    /**
     * - Indicates whether this weight value is the
     * default weight used for the article.
     */
    is_default?: boolean;
    /**
     * - The weight of the article specifically for
     * shipping purposes, usually measured in grams or kilograms.
     */
    shipping?: number;
    /**
     * - The unit of measurement for the weight (e.g.,
     * grams, kilograms, pounds).
     */
    unit?: string;
};
/** @returns {Article} */
declare function Article(): Article;
type Article = {
    /**
     * - Unique identifier assigned by the
     * seller to the article, used for inventory management.
     */
    seller_identifier: string;
    /**
     * - A unique identifier for the article within the system.
     */
    uid: string;
    /**
     * - Represents the data related to combinations of
     * articles that, while being the same product, vary by size, color, or other
     * distinguishing features.
     */
    set?: any;
    dimensions?: Dimensions;
    /**
     * - Currency in which the transaction amount
     * associated with the article is specified.
     */
    currency?: any;
    /**
     * - Indicates whether the article has been
     * modified by the ESP (e-commerce service provider).
     */
    esp_modified?: boolean;
    /**
     * - Configuration related to the
     * return policy for the article.
     */
    return_config?: ReturnConfig;
    /**
     * - Internal code or identifier for the article, used
     * for reference.
     */
    code?: string;
    weight?: Weight;
    /**
     * - The unique identifier for the article within the database.
     */
    _id: string;
    /**
     * - Details of identifiers associated with the
     * article, including SKU codes and other relevant identifiers.
     */
    identifiers: any;
    /**
     * - Raw metadata associated with the article,
     * providing additional context or information.
     */
    raw_meta?: string;
    /**
     * - Size of the article, which may vary for clothing,
     * accessories, etc.
     */
    size: string;
    /**
     * - Indicates whether the article is part of a set
     * or collection.
     */
    is_set?: boolean;
    /**
     * - Tags associated with the article for
     * categorization and search optimization.
     */
    tags?: string[];
    /**
     * - A custom JSON object containing
     * additional details or configurations specific to the article.
     */
    _custom_json?: any;
};
/** @returns {ShipmentListingBrand} */
declare function ShipmentListingBrand(): ShipmentListingBrand;
type ShipmentListingBrand = {
    /**
     * - URL or path to the logo image of the brand
     * associated with the shipment.
     */
    logo?: string;
    /**
     * - Timestamp indicating when the brand of the
     * shipment was created, formatted as date-time.
     */
    created_on?: string;
    /**
     * - The name of the brand linked to the shipment.
     */
    name?: string;
    /**
     * - Base64 encoded string of the brand's logo
     * image, allowing for direct embedding in documents or applications.
     */
    logo_base64?: string;
};
/** @returns {ReplacementDetails} */
declare function ReplacementDetails(): ReplacementDetails;
type ReplacementDetails = {
    /**
     * - Specifies the nature or category of
     * the replacement requested or processed for an item.
     */
    replacement_type?: string;
    /**
     * - The original order ID
     * associated with the item that is being replaced.
     */
    original_affiliate_order_id?: string;
};
/** @returns {AffiliateMeta} */
declare function AffiliateMeta(): AffiliateMeta;
type AffiliateMeta = {
    /**
     * - A unique identifier for the order item
     * associated with the affiliate shipment.
     */
    order_item_id?: string;
    /**
     * - The order ID assigned by the sales
     * channel for tracking purposes.
     */
    channel_order_id?: string;
    /**
     * - The discount percentage or amount
     * applied to the order for employees.
     */
    employee_discount?: number;
    /**
     * - Box type of the shipment in which the
     * shipment will be delivered.
     */
    box_type?: string;
    /**
     * - The total quantity of items in the order.
     */
    quantity?: number;
    /**
     * - The total quantity of items
     * grouped by size level for the order.
     */
    size_level_total_qty?: number;
    /**
     * - The discount percentage or amount
     * applied to the order based on customer loyalty.
     */
    loyalty_discount?: number;
    replacement_details?: ReplacementDetails;
    /**
     * - The shipment ID assigned by the
     * sales channel for tracking purposes.
     */
    channel_shipment_id?: string;
    /**
     * - The invoice ID related to the
     * marketplace for the transaction.
     */
    marketplace_invoice_id?: string;
    /**
     * - Specifies the deadline by which a particular
     * action related to the affiliate shipment needs to be completed.
     */
    due_date?: string;
    /**
     * - A unique code provided to customers for
     * redeeming special offers or discounts on their purchases.
     */
    coupon_code?: string;
    /**
     * - Indicates whether the shipment is a
     * priority for fulfillment.
     */
    is_priority?: boolean;
    /**
     * - Indicates whether a serial
     * number is required for the items in the shipment.
     */
    is_serial_number_required?: boolean;
    /**
     * - A value indicating the priority
     * level of order fulfillment.
     */
    fulfilment_priority?: number;
    /**
     * - The selling price at which the
     * product is offered to the customer.
     */
    customer_selling_price?: number;
};
/** @returns {AffiliateBagDetails} */
declare function AffiliateBagDetails(): AffiliateBagDetails;
type AffiliateBagDetails = {
    affiliate_meta: AffiliateMeta;
    /**
     * - Unique identifier for the affiliate
     * order associated with the bag.
     */
    affiliate_order_id: string;
    /**
     * - Discount percentage or amount
     * applicable to employees for this order.
     */
    employee_discount?: number;
    /**
     * - Unique identifier for the affiliate
     * bag, used for tracking and reference.
     */
    affiliate_bag_id: string;
    /**
     * - Discount amount applied based on
     * customer loyalty, if applicable.
     */
    loyalty_discount?: number;
};
/** @returns {PlatformArticleAttributes} */
declare function PlatformArticleAttributes(): PlatformArticleAttributes;
type PlatformArticleAttributes = {
    /**
     * - The currency in which the price of the
     * article is specified.
     */
    currency?: string;
};
/** @returns {PlatformItem} */
declare function PlatformItem(): PlatformItem;
type PlatformItem = {
    /**
     * - Unique identifier for the platform item.
     */
    id?: number;
    attributes?: PlatformArticleAttributes;
    /**
     * - Identifier for the brand associated with the item.
     */
    brand_id?: number;
    /**
     * - A user-friendly string that represents the
     * item, often used in URLs.
     */
    slug_key?: string;
    /**
     * - Represents the product's classification at
     * the third level in the e-commerce platform's category hierarchy, using an
     * integer identifier.
     */
    l3_category?: number;
    /**
     * - Name of the third-level category
     * under which the product is listed.
     */
    l3_category_name?: string;
    /**
     * - Timestamp when any aspect of the
     * associated record was modified, formatted as date-time.
     */
    last_updated_at?: string;
    /**
     * - The name of the product item.
     */
    name?: string;
    /**
     * - Represents the second level of
     * categorization for items, helping customers narrow down their search.
     */
    l2_category?: string[];
    /**
     * - Name of the brand associated with the item.
     */
    brand?: string;
    /**
     * - Array of image URLs representing the item.
     */
    image?: string[];
    /**
     * - Unique code for the item, often used for
     * inventory management.
     */
    code?: string;
    /**
     * - Represents the highest or top-tier level
     * of categorization for the product.
     */
    l1_category?: string[];
    /**
     * - Size specification of the product, if applicable.
     */
    size?: string;
    /**
     * - Indicates whether the item can be canceled
     * after order placement.
     */
    can_cancel?: boolean;
    /**
     * - Indicates whether the item is eligible for return.
     */
    can_return?: boolean;
    /**
     * - URL linking to a specific branch or store
     * where the item is available.
     */
    branch_url?: string;
    /**
     * - Meta data containing additional, dynamic
     * information about the item.
     */
    meta?: any;
    /**
     * - Color specification of the product, if applicable.
     */
    color?: string;
    /**
     * - Identifier for the department associated
     * with the product.
     */
    department_id?: number;
    /**
     * - Array of image URLs representing different
     * views or angles of the item.
     */
    images?: string[];
    /**
     * - Custom labels or keywords associated with the
     * item for categorization, filtering, or business logic purposes.
     */
    tags?: string[];
};
/** @returns {Dates} */
declare function Dates(): Dates;
type Dates = {
    /**
     * - Represents the scheduled date and time
     * for the delivery of the entity.
     */
    delivery_date?: string;
    order_created?: string;
};
/** @returns {BagReturnableCancelableStatus} */
declare function BagReturnableCancelableStatus(): BagReturnableCancelableStatus;
type BagReturnableCancelableStatus = {
    /**
     * - Indicates whether the bag can be returned
     * by the customer.
     */
    is_returnable: boolean;
    /**
     * - Specifies if the current status of the bag is
     * active, affecting its eligibility for return or cancellation.
     */
    is_active: boolean;
    /**
     * - Indicates if the bag order can be
     * cancelled by the customer.
     */
    can_be_cancelled: boolean;
    /**
     * - Indicates whether tracking is enabled
     * for the bag, allowing customers to monitor its status.
     */
    enable_tracking: boolean;
    /**
     * - Specifies if the customer is
     * permitted to return the bag, based on the return policy.
     */
    is_customer_return_allowed: boolean;
};
/** @returns {BagUnit} */
declare function BagUnit(): BagUnit;
type BagUnit = {
    /**
     * - Specifies the type or category of the bag.
     */
    bag_type?: string;
    gst?: GSTDetailsData;
    financial_breakup: FinancialBreakup[];
    /**
     * - Indicates the date and time when the
     * contents of a bag, or the bag itself, are no longer considered valid or
     * safe for use. This is particularly relevant in contexts where the bag
     * contains perishable goods, sensitive materials, or items with a limited shelf life
     */
    bag_expiry_date?: string;
    bag_status?: BagStatusHistory[];
    current_operational_status: BagStatusHistory;
    article?: Article;
    brand?: ShipmentListingBrand;
    affiliate_bag_details?: AffiliateBagDetails;
    item?: PlatformItem;
    /**
     * - A collection of reasons associated with the
     * bag, which could pertain to returns, cancellations, or other relevant contexts.
     */
    reasons?: any[];
    /**
     * - The total quantity of products
     * contained within the bag.
     */
    product_quantity: number;
    /**
     * - Indicates whether the items in the bag are
     * eligible for return.
     */
    can_return?: boolean;
    /**
     * - A user-friendly name or label for the
     * bag, which may be displayed in interfaces.
     */
    display_name?: string;
    /**
     * - Indicates whether the bag or its contents
     * can be canceled.
     */
    can_cancel?: boolean;
    /**
     * - Specifies the size of the bag, which may be
     * relevant for packaging or shipping considerations.
     */
    size?: string;
    /**
     * - Represents the line number in an order or
     * transaction associated with the bag.
     */
    line_number?: number;
    /**
     * - Meta data of the bag contains additional,
     * potentially dynamic information about the bag.
     */
    meta?: any;
    prices?: Prices;
    ordering_currency_prices?: OrderingCurrencyPrices;
    dates?: Dates;
    current_status: BagStatusHistory;
    /**
     * - Unique identifier for the bag.
     */
    bag_id: number;
    /**
     * - Specifies the type of entity.
     */
    entity_type?: string;
    status: BagReturnableCancelableStatus;
};
/** @returns {ShipmentItemFulFillingStore} */
declare function ShipmentItemFulFillingStore(): ShipmentItemFulFillingStore;
type ShipmentItemFulFillingStore = {
    /**
     * - Contact number for the fulfilling store,
     * allowing customers to reach out for inquiries or assistance.
     */
    phone?: string;
    /**
     * - Tags associated with the brand
     * store, providing additional categorization or identification of the store's
     * attributes.
     */
    brand_store_tags?: string[];
    /**
     * - Postal code for the fulfilling store's
     * location, essential for identifying the specific area and ensuring accurate
     * deliveries.
     */
    pincode?: string;
    /**
     * - Meta data of the fulfilling store that contains
     * additional, potentially dynamic information about the fulfilling store.
     */
    meta?: any;
    /**
     * - Comprehensive address details of the
     * fulfilling store, including all necessary components for locating the store.
     */
    address?: string;
    /**
     * - The primary address dynamically forms based
     * on a template. If the template includes a single key, Address1 contains
     * that data. For templates with multiple keys like Address1 compiles all into
     * a single formatted string. The address is formed by the template provided
     * and whichever keys are present in the template are populated as is from
     * store address fields. Template Example: {address} {address2}_{area}
     * {state}_{country},
     */
    address1?: string;
    /**
     * - A user-friendly formatted version of
     * the store's address for display purposes, making it easier for customers to read.
     */
    display_address?: string;
    /**
     * - Type of location of the fulfilling store.
     */
    location_type?: string;
    /**
     * - Unique identifier for the fulfilling store in the database.
     */
    id: number;
    /**
     * - A specific code assigned to the store, often used
     * for internal tracking or categorization purposes.
     */
    code: string;
    /**
     * - Email address for the fulfilling store,
     * allowing for electronic communication and inquiries.
     */
    store_email?: string;
    /**
     * - The name of the fulfilling store, which helps
     * customers identify the store.
     */
    name?: string;
    /**
     * - The state where the fulfilling store is located,
     * important for regional identification.
     */
    state?: string;
    /**
     * - The city where the fulfilling store is situated,
     * providing more specific location details.
     */
    city?: string;
    /**
     * - Additional tags associated with the store, used
     * for categorization and filtering purposes.
     */
    tags?: string[];
};
/** @returns {Currency} */
declare function Currency(): Currency;
type Currency = {
    /**
     * - This specifies the currency code for all
     * amounts. The currency_code field will hold a string value representing the
     * code for the currency in which all monetary amounts are denominated. This
     * code typically follows the ISO 4217 standard, which uses three-letter
     * alphabetic codes to define different currencies around the world. For
     * example, 'USD' for United States Dollar, 'INR' for Indian Rupees.
     */
    currency_code?: string;
    /**
     * - The symbol representing the currency.
     */
    currency_symbol?: string;
};
/** @returns {OrderingCurrency} */
declare function OrderingCurrency(): OrderingCurrency;
type OrderingCurrency = {
    /**
     * - This specifies the currency code for all amounts.
     */
    currency_code?: string;
    /**
     * - The full name of the currency.
     */
    currency_name?: string;
    /**
     * - The symbol representing the currency.
     */
    currency_symbol?: string;
    /**
     * - The sub-unit of the currency
     */
    currency_sub_unit?: string;
};
/** @returns {ConversionRate} */
declare function ConversionRate(): ConversionRate;
type ConversionRate = {
    /**
     * - The base currency code, example 'INR' for Indian
     * Rupee, against which all conversion rates are calculated. Follows the ISO
     * 4217 standard.This includes the currency's name, its conversion rate
     * relative to the base currency ('value'), the currency symbol, and any
     * sub-unit of the currency. This setup not only facilitates currency
     * conversion but also enriches the data with useful currency descriptors,
     * enhancing financial operations and analyses.
     */
    base?: string;
    /**
     * - An object , where each key is a currency code
     * and its value is an object containing detailed information about that
     * currency. This includes the currency's name, its conversion rate relative
     * to the base currency ('value'), the currency symbol, and any sub-unit of
     * the currency. This setup not only facilitates currency conversion but also
     * enriches the data with useful currency descriptors.
     */
    rates?: any;
};
/** @returns {CurrencyInfo} */
declare function CurrencyInfo(): CurrencyInfo;
type CurrencyInfo = {
    ordering_currency?: OrderingCurrency;
    conversion_rate?: ConversionRate;
};
/** @returns {ShipmentItem} */
declare function ShipmentItem(): ShipmentItem;
type ShipmentItem = {
    /**
     * - Denotes the date and time when an order was
     * placed by the customer. This timestamp is crucial for tracking the order'
     */
    order_date?: string;
    /**
     * - The timestamp indicating when the
     * order was created in UTC format.
     */
    order_created_ts?: string;
    ordering_source_details?: OrderingSourceDetails;
    shipment_status?: ShipmentStatus;
    user?: UserDataInfo;
    /**
     * - The estimated Service Level
     * Agreement (SLA) time for the shipment.
     */
    estimated_sla_time?: string;
    /**
     * - The timestamp for the estimated SLA,
     * providing a specific time for expected delivery in UTC format.
     */
    estimated_sla_ts?: string;
    delivery_address?: Address;
    billing_address?: Address;
    affiliate_details?: AffiliateDetails;
    /**
     * - This flag denotes whether the shipment is
     * active or not.
     */
    is_active?: boolean;
    channel?: ShipmentListingChannel;
    /**
     * - The ID of any previous shipment
     * related to this order.
     */
    previous_shipment_id?: string;
    /**
     * - The forward_end_shipment_id
     * represents the shipment ID of the original forward journey shipment. When a
     * shipment is transitioned to a return journey, the original shipment ID from
     * the forward journey is recorded in the forward_end_shipment_id field of the
     * return journey shipment. Even if the return shipment is later split into
     * multiple shipments, each of these shipments will retain the same
     * forward_end_shipment_id value that was assigned during the initial return
     * journey initiation. This ensures that all return shipments can be traced
     * back to the original forward journey shipment.
     */
    forward_end_shipment_id?: string;
    /**
     * - Indicates whether the shipment is
     * currently locked for processing (true) or not (false).
     */
    lock_status?: boolean;
    /**
     * - The ID of the invoice associated with the shipment.
     */
    invoice_id?: string;
    /**
     * - This field stores a collection of
     * payment method objects used in a transaction. Each key within this object
     * represents a unique payment method code (e.g., "COD" for Cash On Delivery),
     * and its value is an object containing detailed information about that
     * payment method. This includes metadata such as logos, payment IDs, and
     * merchant codes, as well as transaction-specific details like the payment
     * mode, name, amount, and entities responsible for refunds and collections.
     * The structure is designed to accommodate any number of payment methods,
     * providing flexibility and comprehensive insights into each transaction's
     * payment aspect.
     */
    payment_methods?: any;
    /**
     * - An array of payment information items
     * related to the shipment, detailing transaction specifics.
     */
    payment_info?: any[];
    /**
     * - Date time in UTC timezone as per ISO format.
     */
    status_created_at?: string;
    /**
     * - The timestamp indicating when the
     * current status was logged, usually in ISO 8601 format.
     */
    status_created_ts?: string;
    /**
     * - A user-friendly name or identifier for
     * the shipment, useful for display purposes.
     */
    display_name?: string;
    /**
     * - An array of bags included in the shipment.
     */
    bags?: BagUnit[];
    fulfilling_store?: ShipmentItemFulFillingStore;
    /**
     * - Meta data of the item contains additional,
     * potentially dynamic information about the item.
     */
    meta?: any;
    /**
     * - The mode of payment used for the shipment.
     */
    payment_mode?: string;
    /**
     * - Indicates whether the shipment can
     * currently be processed (true) or not (false).
     */
    can_process?: boolean;
    prices?: Prices;
    ordering_currency_prices?: OrderingCurrencyPrices;
    /**
     * - The unique identifier of the order for the shipment.
     */
    order_id: string;
    /**
     * - The specific channel through which
     * your order was placed. This field will be phased out after version 2.4.0.
     * Please use ordering_source instead to ensure accurate order tracking and processing.
     */
    ordering_channnel?: string;
    /**
     * - Ordering source, to be used to
     * identify source of order creation.
     */
    ordering_source?: string;
    /**
     * - The unique identifier for the shipment itself.
     */
    shipment_id?: string;
    /**
     * - Any special notes or instructions
     * provided by the customer related to the shipment.
     */
    customer_note?: string;
    /**
     * - The total number of bags in the shipment.
     */
    total_bags: number;
    /**
     * - Timestamp of the shipment created.
     */
    shipment_created_at: string;
    /**
     * - The method of payment used to create the order.
     */
    mode_of_payment?: string;
    /**
     * - The timestamp indicating when the
     * shipment was created.
     */
    shipment_created_ts?: string;
    currency?: Currency;
    currency_info?: CurrencyInfo;
    /**
     * - Flag to show NDR actions based on
     * LAPA (Logistic As Per Actual) plan subscription. If LAPA plan taken, true,
     * else false.
     */
    is_lapa_enabled?: boolean;
    /**
     * - An object storing detailed
     * logistics-related information, including courier partner details and other
     * relevant metadata.
     */
    logistics_meta?: any;
    fulfillment_option?: FulfillmentOption;
};
/** @returns {ShipmentInternalPlatformViewResponseSchema} */
declare function ShipmentInternalPlatformViewResponseSchema(): ShipmentInternalPlatformViewResponseSchema;
type ShipmentInternalPlatformViewResponseSchema = {
    /**
     * - The total number of shipments matching the
     * query criteria.
     */
    total_count?: number;
    /**
     * - A message providing additional context about
     * the response.
     */
    message?: string;
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - An array of shipment items returned as
     * part of the response.
     */
    items?: ShipmentItem[];
    /**
     * - The lane associated with the shipment.
     */
    lane?: string;
    page?: Page;
};
/** @returns {TrackingList} */
declare function TrackingList(): TrackingList;
type TrackingList = {
    /**
     * - A flag indicating whether the tracking
     * event has already occurred. If true, it means the event is in the past;
     * otherwise, it is either current or future.
     */
    is_passed?: boolean;
    /**
     * - A descriptive message or status update associated
     * with the tracking event, providing context about the shipment's progress or
     * condition.
     */
    text: string;
    /**
     * - A flag indicating whether this tracking
     * event is the most recent update. If true, it reflects the latest status of
     * the shipment.
     */
    is_current?: boolean;
    /**
     * - A timestamp representing when the tracking event
     * occurred. This helps in understanding the timeline of the shipment's journey.
     */
    time?: string;
    /**
     * - A timestamp indicating when the tracking
     * information was created or logged in the system. This may differ from the
     * event time.
     */
    created_ts?: string;
    /**
     * - The specific status associated with the tracking
     * event, such as "In Transit," "Delivered," or "Out for Delivery," providing
     * clarity on the shipment's current phase.
     */
    status: string;
};
/** @returns {InvoiceInfo} */
declare function InvoiceInfo(): InvoiceInfo;
type InvoiceInfo = {
    /**
     * - A unique identifier for the invoice
     * generated by the store or platform, used for internal tracking and reference.
     */
    store_invoice_id?: string;
    /**
     * - A URL linking to the digital version of
     * the invoice, allowing users to view or download the invoice document online.
     */
    invoice_url?: string;
    /**
     * - Denotes the date and time when the
     * invoice information was modified or updated, providing a record of the most
     * recent changes.
     */
    updated_date?: string;
    /**
     * - An identifier for the invoice used
     * by external systems or partners, facilitating cross-system tracking and
     * reconciliation.
     */
    external_invoice_id?: string;
    /**
     * - A URL linking to the shipping label
     * associated with the invoice, which may be used for shipment tracking and logistics.
     */
    label_url?: string;
    /**
     * - The identifier for any credit note
     * related to the invoice, used in cases of refunds or adjustments to the
     * original billing.
     */
    credit_note_id?: string;
    /**
     * - An object containing additional links relevant
     * to the invoice, which may include related documents or resources.
     */
    links?: any;
};
/** @returns {LoyaltyDiscountDetails} */
declare function LoyaltyDiscountDetails(): LoyaltyDiscountDetails;
type LoyaltyDiscountDetails = {
    /**
     * - Discount amount applied by redeeming loyalty
     * points while placing the order. Represents the monetary value of loyalty
     * points redeemed.
     */
    discount?: number;
    /**
     * - Indicates who bears the cost of the loyalty
     * discount, such as the seller or the marketplace.
     */
    ownership?: string;
    /**
     * - Specifies whether the loyalty discount has
     * been applied to the order.
     */
    is_applied?: boolean;
};
/** @returns {OrderDetailsData} */
declare function OrderDetailsData(): OrderDetailsData;
type OrderDetailsData = {
    /**
     * - Represents the date and time when the order
     * was placed by the customer. This timestamp is essential for tracking the
     * initiation of the order process, scheduling deliveries, and analyzing order
     * timelines.
     */
    order_date?: string;
    /**
     * - A timestamp indicating when the order was
     * created in the system.
     */
    created_ts?: string;
    /**
     * - Contains a flexible and comprehensive set
     * of key-value pairs detailing the tax calculations and classifications
     * applicable to the order.
     */
    tax_details?: any;
    /**
     * - The charges associated with Cash on
     * Delivery (COD) payments.
     */
    cod_charges?: string;
    /**
     * - The source from which the order originated.
     */
    source?: string;
    /**
     * - An unique identifier for the order.
     */
    fynd_order_id: string;
    /**
     * - Affiliate id associated with order.
     */
    affiliate_id?: string;
    /**
     * - Affiliate order id associated with order.
     */
    affiliate_order_id?: string;
    /**
     * - Represents the logo of the
     * channel through which the order was placed, encapsulating branding elements
     * and any relevant styling attributes. This object is designed to be
     * flexible, allowing for the inclusion of various properties that define how
     * the logo should be displayed across different platforms or documents
     * related to the order.
     */
    ordering_channel_logo?: any;
    /**
     * - The total monetary value of the order
     */
    order_value?: string;
    /**
     * - The specific channel through which
     * your order was placed. This field will be phased out after version 2.4.0.
     * Please use ordering_source instead to ensure accurate order tracking and processing.
     */
    ordering_channel?: string;
    /**
     * - Ordering source, to be used to
     * identify source of order creation.
     */
    ordering_source?: string;
    loyalty_discount_details?: LoyaltyDiscountDetails;
    /**
     * - Meta data of the order contains additional,
     * potentially dynamic information about the order.
     */
    meta?: any;
};
/** @returns {UserDetailsData} */
declare function UserDetailsData(): UserDetailsData;
type UserDetailsData = {
    phone: string;
    pincode: string;
    address: string;
    area?: string;
    /**
     * - The type of the address (e.g., home, office).
     */
    address_type?: string;
    country: string;
    email?: string;
    /**
     * - The primary address dynamically forms based
     * on a template. If the template includes a single key, Address1 contains
     * that data. For templates with multiple keys like {address} {address2}
     * {area} {state} {country}, Address1 compiles all into a single formatted string.
     */
    address1?: string;
    landmark?: string;
    state: string;
    name: string;
    city: string;
    /**
     * - The code representing the state or region
     * within the country, if applicable.
     */
    state_code?: string;
    /**
     * - The country ISO code, a two-character
     * standard (ISO 3166-1 alpha-2) code, uniquely identifies the country. This
     * field is used to specify countries in a standardized format, facilitating
     * global data interoperability. Examples include 'US' for the United States
     * and 'IN' for India.
     */
    country_iso_code?: string;
    /**
     * - This is the two-digit standard code
     * representing the dialing prefix for the user's country, associated with the
     * user's mobile number.
     */
    country_phone_code?: string;
    display_address?: string;
};
/** @returns {PhoneDetails} */
declare function PhoneDetails(): PhoneDetails;
type PhoneDetails = {
    /**
     * - Identifies the country of the user's
     * phone number using the two-character standard ISO 3166-1 alpha-2 country
     * codes. Examples include 'US' for the United States and 'IN' for India.
     */
    country_code?: number;
    /**
     * - The actual phone number of the user.
     */
    number?: string;
};
/** @returns {ContactDetails} */
declare function ContactDetails(): ContactDetails;
type ContactDetails = {
    /**
     * - An array of phone numbers associated
     * with the contact.
     */
    phone?: PhoneDetails[];
    /**
     * - An array of email addresses associated with
     * the contact.
     */
    emails?: string[];
};
/** @returns {CompanyDetails} */
declare function CompanyDetails(): CompanyDetails;
type CompanyDetails = {
    /**
     * - The name of the company.
     */
    company_name?: string;
    /**
     * - It contains the properties for the address of a company.
     */
    address?: any;
    /**
     * - The Corporate Identification Number (CIN)
     * of the company.
     */
    company_cin?: string;
    /**
     * - A unique identifier for the company on the platform.
     */
    company_id?: number;
    /**
     * - The Goods and Services Tax (GST) number of
     * the company.
     */
    company_gst?: string;
    company_contact?: ContactDetails;
};
/** @returns {OrderingStoreDetails} */
declare function OrderingStoreDetails(): OrderingStoreDetails;
type OrderingStoreDetails = {
    /**
     * - The contact phone number for the ordering store.
     */
    phone?: string;
    /**
     * - The postal code associated with the ordering
     * store's location.
     */
    pincode?: string;
    /**
     * - Meta data of the ordering store contains
     * additional, potentially dynamic information about the ordering store.
     */
    meta?: any;
    /**
     * - The complete address of the ordering store.
     */
    address?: string;
    /**
     * - The primary address dynamically forms based
     * on a template. If the template includes a single key, Address1 contains
     * that data. For templates with multiple keys like {address} {address2}
     * {area} {state} {country}, Address1 compiles all into a single formatted string.
     */
    address1?: string;
    /**
     * - Formatted address based on the
     * title-template provided by the partner.
     */
    display_address?: string;
    /**
     * - A unique identifier for the ordering store.
     */
    id?: number;
    /**
     * - A specific code associated with the ordering store.
     */
    code?: string;
    /**
     * - The name of the ordering store.
     */
    store_name?: string;
    /**
     * - The country in which the ordering store is located.
     */
    country?: string;
    /**
     * - The name of the primary contact person
     * at the ordering store.
     */
    contact_person?: string;
    /**
     * - The state or region where the ordering store is situated.
     */
    state?: string;
    /**
     * - The city in which the ordering store is located.
     */
    city?: string;
    /**
     * - The name of the ordering store.
     */
    name?: string;
    /**
     * - The email address of the ordering store.
     */
    store_email?: string;
};
/** @returns {DPDetailsData} */
declare function DPDetailsData(): DPDetailsData;
type DPDetailsData = {
    /**
     * - The postal code associated with the delivery
     * partner's location
     */
    pincode?: string;
    /**
     * - A URL that provides access to real-time
     * tracking information for the shipment.
     */
    track_url?: string;
    /**
     * - The unique identifier for the e-way bill
     * generated for the shipment.
     */
    eway_bill_id?: string;
    /**
     * - A unique identifier for the delivery partner details.
     */
    id?: number;
    /**
     * - The country in which the delivery partner operates.
     */
    country?: string;
    /**
     * - The Air Waybill number, a tracking number used
     * for air freight shipments, allowing for the identification and tracking of
     * the package in transit.
     */
    awb_no?: string;
    /**
     * - A tag associated with the Goods and Services
     * Tax (GST) for the shipment.
     */
    gst_tag?: string;
    /**
     * - The name of the delivery partner or service
     * provider responsible for transporting the shipment.
     */
    name?: string;
};
/** @returns {BuyerDetails} */
declare function BuyerDetails(): BuyerDetails;
type BuyerDetails = {
    /**
     * - The unique identifier for the buyer on
     * the Ajio platform.
     */
    ajio_site_id?: string;
    /**
     * - The postal code for the buyer's shipping
     * address, used for delivery location identification.
     */
    pincode: number;
    /**
     * - Provides the comprehensive address details of
     * the buyer's shipping address.
     */
    address: string;
    /**
     * - The Goods and Services Tax Identification Number
     * (GSTIN) of the buyer.
     */
    gstin: string;
    /**
     * - The full name of the buyer, essential for
     * personalizing communication and delivery.
     */
    name: string;
    /**
     * - The name of the state where the buyer's shipping
     * address is located, important for logistical purposes.
     */
    state: string;
    /**
     * - The name of the city where the buyer's shipping
     * address is located, which helps in identifying delivery zones.
     */
    city: string;
};
/** @returns {DebugInfo} */
declare function DebugInfo(): DebugInfo;
type DebugInfo = {
    /**
     * - A unique identifier (UUID)
     * associated with the Stormbreaker system, used for tracking and debugging
     * purposes in the application.
     */
    stormbreaker_uuid?: string;
};
/** @returns {EinvoiceInfo} */
declare function EinvoiceInfo(): EinvoiceInfo;
type EinvoiceInfo = {
    /**
     * - Specifies the reverse einvoice transaction
     * create on government portal.
     */
    credit_note?: any;
    /**
     * - It specifies the forward einvoice transaction
     * created on government portal.
     */
    invoice?: any;
};
/** @returns {Formatted} */
declare function Formatted(): Formatted;
type Formatted = {
    /**
     * - Represents the maximum formatted value, providing
     * a limit for the associated data, such as dimensions or weights.
     */
    max?: string;
    /**
     * - Represents the minimum formatted value,
     * establishing a lower limit for the associated data, ensuring it meets
     * certain criteria or standards.
     */
    min?: string;
};
/** @returns {ShipmentTags} */
declare function ShipmentTags(): ShipmentTags;
type ShipmentTags = {
    /**
     * - A URL-friendly string representing the tag, often
     * used for routing or categorization.
     */
    slug?: string;
    /**
     * - Type of entity that the tag is associated
     * to (bag, shipments).
     */
    entity_type?: string;
    /**
     * - A human-readable text representation of
     * the tag, used for display purposes in user interfaces.
     */
    display_text?: string;
};
/** @returns {LockData} */
declare function LockData(): LockData;
type LockData = {
    /**
     * - Indicates whether the shipment is currently
     * locked for processing (true) or not (false).
     */
    locked?: boolean;
    /**
     * - A flag indicating whether the shipment is part of
     * a multi-modal transport operation.
     */
    mto?: boolean;
    /**
     * - An optional message providing additional
     * context or information regarding the lock status.
     */
    lock_message?: string;
};
/** @returns {ShipmentTimeStamp} */
declare function ShipmentTimeStamp(): ShipmentTimeStamp;
type ShipmentTimeStamp = {
    /**
     * - Represents the maximum timestamp value, indicating
     * the latest time relevant to the shipment.
     */
    max?: number;
    /**
     * - Represents the minimum timestamp value, indicating
     * the earliest time relevant to the shipment.
     */
    min?: number;
};
/** @returns {ShipmentMeta} */
declare function ShipmentMeta(): ShipmentMeta;
type ShipmentMeta = {
    /**
     * - A URL for tracking the shipment.
     */
    tracking_url?: string;
    /**
     * - Provides a forecasted date and
     * time by which the shipment is expected to be delivered to the recipient.
     * This estimation is crucial for planning purposes, both for the sender in
     * managing expectations and for the recipient in preparing for receipt.
     */
    estimated_delivery_date?: string;
    /**
     * - Indicates whether the shipment is
     * available for pickup from the same store.
     */
    same_store_available: boolean;
    b2b_buyer_details?: BuyerDetails;
    formatted?: Formatted;
    debug_info?: DebugInfo;
    /**
     * - The Air Waybill (AWB) number
     * associated with a return shipment.
     */
    return_awb_number?: string;
    /**
     * - Indicates whether the shipment is a
     * self-shipped order.
     */
    is_self_ship?: boolean;
    /**
     * - Box type of the shipment in which the
     * shipment will be delivered.
     */
    box_type?: string;
    einvoice_info?: EinvoiceInfo;
    /**
     * - The shipment ID
     * associated with a return from an affiliate.
     */
    return_affiliate_shipment_id?: string;
    /**
     * - The unique identifier for the parent
     * delivery partner.
     */
    parent_dp_id?: string;
    /**
     * - The total weight of the shipment.
     */
    shipment_weight?: number;
    dimension?: Dimensions;
    /**
     * - Delivery partner options that are available
     * to deliver the shipment.
     */
    dp_options?: any;
    /**
     * - Indicates whether to assign the
     * delivery partner from the store’s basket.
     */
    assign_dp_from_sb?: boolean;
    /**
     * - Specifies the deadline by which a particular
     * action related to the affiliate shipment needs to be completed.
     */
    due_date?: string;
    /**
     * - Denotes the date and time
     * when the store's invoice related to this shipment was updated. This
     * timestamp is vital for tracking changes to billing details, adjustments in
     * charges, or updates in the invoicing status.
     */
    store_invoice_updated_date?: string;
    /**
     * - The shipment ID for the
     * forward journey of an affiliate shipment.
     */
    forward_affiliate_shipment_id?: string;
    /**
     * - The identifier for the store node
     * involved in the return process.
     */
    return_store_node?: number;
    /**
     * - Textual representation of the
     * fulfillment priority for the shipment.
     */
    fulfilment_priority_text?: string;
    /**
     * - Tags associated with the
     * shipment for categorization and filtering.
     */
    shipment_tags?: ShipmentTags[];
    /**
     * - External metadata related to the shipment.
     */
    external?: any;
    /**
     * - The Air Waybill number associated with the shipment.
     */
    awb_number?: string;
    lock_data?: LockData;
    /**
     * - Defines the specific journey a shipment
     * will follow based on the application's operational needs and customer
     * preferences. This field categorizes orders into distinct types, each
     * associated with a unique processing flow.
     */
    order_type?: string;
    /**
     * - Electronic Way Bill details i.e
     * ewayBillNo, ewayBillDate that are utilized in the transportation of goods.
     */
    ewaybill_info?: any;
    /**
     * - The unique identifier for the delivery partner
     * associated with the shipment.
     */
    dp_id?: string;
    /**
     * - The volumetric weight of
     * the shipment, which may differ from its actual weight.
     */
    shipment_volumetric_weight?: number;
    /**
     * - The unique identifier for the
     * marketplace store associated with the shipment.
     */
    marketplace_store_id?: string;
    /**
     * - An object containing the return details
     * of the shipment.
     */
    return_details?: any;
    /**
     * - A sort key for the delivery partner, used
     * for prioritization.
     */
    dp_sort_key?: string;
    /**
     * - The name of the packaging used for the shipment.
     */
    packaging_name?: string;
    timestamp?: ShipmentTimeStamp;
    /**
     * - Indicates whether
     * automatic delivery partner assignment is triggered for this shipment.
     */
    auto_trigger_dp_assignment_acf?: boolean;
    /**
     * - The name of the delivery partner associated
     * with the shipment.
     */
    dp_name?: string;
    /**
     * - The purchase order number associated with
     * the shipment.
     */
    po_number?: string;
    /**
     * - The weight of the shipment, typically measured in
     * grams or kilograms.
     */
    weight: number;
    /**
     * - Contains detailed information about
     * the buyer in a business-to-consumer (B2C) transaction. This object is
     * designed to capture a wide array of buyer-specific data such as contact
     * information, shipping address, preferences, and any other relevant details
     * that enhance the understanding of the buyer's profile and needs.
     */
    b2c_buyer_details?: any;
    /**
     * - The order ID for the
     * forward journey of an affiliate shipment.
     */
    forward_affiliate_order_id?: string;
    /**
     * - The order ID for the return
     * journey of an affiliate shipment.
     */
    return_affiliate_order_id?: string;
    /**
     * - This object is designed to accommodate a
     * range of weight-related information. Denotes the weight of the bag,
     * potentially including various measurements or related details.
     */
    bag_weight?: any;
    /**
     * - Specifies the recipient of any refunds
     * related to the shipment.
     */
    refund_to?: string;
};
/** @returns {PDFLinks} */
declare function PDFLinks(): PDFLinks;
type PDFLinks = {
    /**
     * - The type of invoice issued, such as 'fynd'
     * or other classifications.
     */
    invoice_type: string;
    /**
     * - URL or path to the A6 size label document.
     */
    label_a6?: string;
    /**
     * - URL or path to the main invoice document.
     */
    invoice?: string;
    /**
     * - URL or path to the POS label document.
     */
    label_pos?: string;
    /**
     * - URL or path to the A6 size invoice document.
     */
    invoice_a6?: string;
    /**
     * - URL or path to the B2B document related to the transaction.
     */
    b2b?: string;
    /**
     * - URL or path to the general label document.
     */
    label?: string;
    /**
     * - URL or path to the A4 size label document.
     */
    label_a4?: string;
    /**
     * - Specifies the type of label associated with a
     * PDF document,indicating its purpose or content. The label_type helps in
     * organizing and identifying PDF documents quickly, ensuring that users or
     * systems can efficiently utilize the correct documents for required actions.
     */
    label_type: string;
    /**
     * - URL or path to the exported invoice document.
     */
    invoice_export?: string;
    /**
     * - URL or path to the credit note document.
     */
    credit_note_url?: string;
    /**
     * - URL or path to the A4 delivery
     * challan document.
     */
    delivery_challan_a4?: string;
    /**
     * - URL or path to the exported label document.
     */
    label_export?: string;
    /**
     * - URL or path to the A4 size invoice document.
     */
    invoice_a4?: string;
    /**
     * - URL or path to the POS invoice document.
     */
    invoice_pos?: string;
    /**
     * - URL or path to the purchase order invoice document.
     */
    po_invoice?: string;
};
/** @returns {AffiliateDetails} */
declare function AffiliateDetails(): AffiliateDetails;
type AffiliateDetails = {
    shipment_meta: ShipmentMeta;
    affiliate_meta: AffiliateMeta;
    /**
     * - The shipment ID specific to this affiliate.
     */
    affiliate_shipment_id: string;
    /**
     * - An optional tag representing the
     * company's affiliate association.
     */
    company_affiliate_tag?: string;
    /**
     * - The order ID associated with the
     * affiliate shipment.
     */
    affiliate_order_id: string;
    pdf_links?: PDFLinks;
    config?: AffiliateConfig;
    /**
     * - The unique identifier for the affiliate.
     */
    affiliate_id?: string;
    /**
     * - The unique identifier for the
     * affiliate's store.
     */
    affiliate_store_id: string;
    /**
     * - The unique identifier for the affiliate's bag.
     */
    affiliate_bag_id: string;
    /**
     * - The unique identifier for the affiliate.
     */
    id?: string;
};
/** @returns {BagConfigs} */
declare function BagConfigs(): BagConfigs;
type BagConfigs = {
    /**
     * - Indicates whether the bag is eligible for
     * return by the customer.
     */
    is_returnable: boolean;
    /**
     * - A flag that determines if a forced
     * return can be initiated for the bag.
     */
    allow_force_return: boolean;
    /**
     * - A flag indicating whether the bag is active or not.
     */
    is_active: boolean;
    /**
     * - A flag that determines if the bag can
     * be cancelled.
     */
    can_be_cancelled: boolean;
    /**
     * - A flag that determines if shipment
     * tracking is enabled for the bag.
     */
    enable_tracking: boolean;
    /**
     * - A flag that determines if
     * customer return is allowed for the bag.
     */
    is_customer_return_allowed: boolean;
    /**
     * - Flag to indicate whether the bag is
     * part of a bundle.
     */
    is_bundle_item?: boolean;
    bundle_details?: BundleDetails;
};
/** @returns {OrderBagArticle} */
declare function OrderBagArticle(): OrderBagArticle;
type OrderBagArticle = {
    /**
     * - Details of Identifiers associated with the article.
     */
    identifiers?: any;
    return_config?: ReturnConfig;
    /**
     * - A unique identifier for the article within the order bag.
     */
    uid?: string;
    /**
     * - The size of the article, which may be relevant
     * for clothing.
     */
    size?: string;
    /**
     * - An array of tags associated with the article.
     */
    tags?: string[];
    /**
     * - A custom JSON object containing
     * additional details or configurations specific to the article.
     */
    _custom_json?: any;
};
/** @returns {OrderBrandName} */
declare function OrderBrandName(): OrderBrandName;
type OrderBrandName = {
    /**
     * - A URL or path to the logo image associated with the brand.
     */
    logo?: string;
    /**
     * - A unique identifier for the company associated
     * with the brand.
     */
    company?: number;
    /**
     * - A unique identifier for the brand within the system.
     */
    id: number;
    /**
     * - Timestamp when the brand of the order was created.
     */
    created_on?: string;
    /**
     * - The name of the brand associated with the order.
     */
    brand_name?: string;
    /**
     * - Timestamp when the brand of the order was modified.
     */
    modified_on?: string;
};
/** @returns {AffiliateBagsDetails} */
declare function AffiliateBagsDetails(): AffiliateBagsDetails;
type AffiliateBagsDetails = {
    /**
     * - A unique identifier for the affiliate bag.
     */
    affiliate_bag_id?: string;
    /**
     * - A unique code provided to customers for
     * redeeming special offers or discounts on their purchases.
     */
    coupon_code?: string;
    affiliate_meta?: AffiliateMeta;
};
/** @returns {BagPaymentMethods} */
declare function BagPaymentMethods(): BagPaymentMethods;
type BagPaymentMethods = {
    /**
     * - The payment mode used for the transaction.
     */
    mode?: string;
    /**
     * - The total amount associated with the payment method
     */
    amount?: number;
};
/** @returns {DiscountRules} */
declare function DiscountRules(): DiscountRules;
type DiscountRules = {
    value?: number;
    type?: string;
};
/** @returns {ItemCriterias} */
declare function ItemCriterias(): ItemCriterias;
type ItemCriterias = {
    item_brand?: number[];
};
/** @returns {BuyRules} */
declare function BuyRules(): BuyRules;
type BuyRules = {
    item_criteria?: ItemCriterias;
    /**
     * - Specifies the rules that must be met
     * at the cart level for any purchasing rules or promotional discounts to be
     * applied. Specifically, it includes criteria such as the total quantity of
     * items in the cart. For instance, a rule might require that the cart
     * contains at least one item for the promotion to apply. This setup allows
     * for the dynamic application of discounts or special buying rules based on
     * cart conditions.
     */
    cart_conditions?: any;
};
/** @returns {PriceMinMax} */
declare function PriceMinMax(): PriceMinMax;
type PriceMinMax = {
    /**
     * - The minimum price value. Represents the lowest
     * price in the price range.
     */
    min?: number;
    /**
     * - The maximum price value. Represents the highest
     * price in the price range.
     */
    max?: number;
};
/** @returns {ItemPriceDetails} */
declare function ItemPriceDetails(): ItemPriceDetails;
type ItemPriceDetails = {
    marked?: PriceMinMax;
    effective?: PriceMinMax;
    /**
     * - The currency in which the prices details
     * associated with the item is specified.
     */
    currency?: string;
};
/** @returns {FreeGiftItems} */
declare function FreeGiftItems(): FreeGiftItems;
type FreeGiftItems = {
    /**
     * - A unique identifier for the item, typically
     * used in URLs for SEO purposes.
     */
    item_slug?: string;
    /**
     * - The name of the item.
     */
    item_name?: string;
    item_price_details?: ItemPriceDetails;
    /**
     * - The brand name of the item.
     */
    item_brand_name?: string;
    /**
     * - A unique numerical identifier for the item.
     */
    item_id?: number;
    /**
     * - A list of URLs pointing to images of the item.
     */
    item_images_url?: string[];
};
/** @returns {AppliedFreeArticles} */
declare function AppliedFreeArticles(): AppliedFreeArticles;
type AppliedFreeArticles = {
    /**
     * - A unique identifier for the article to
     * which the free gift is applied.
     */
    article_id?: string;
    /**
     * - Details of the free gift item
     * associated with the article, including relevant attributes like name,
     * description, and any other specifications.
     */
    free_gift_item_details?: any;
    /**
     * - An identifier for the parent
     * item with which the free gift is associated, typically used to link the
     * free gift to the original purchased item.
     */
    parent_item_identifier?: string;
    /**
     * - The quantity of the free gift items applied
     * to the article.
     */
    quantity?: number;
};
/** @returns {AppliedPromos} */
declare function AppliedPromos(): AppliedPromos;
type AppliedPromos = {
    /**
     * - Specifies the type of discount or deal
     * applied to the current promotion, defining how the promotion modifies the
     * price or adds value to the purchase. Each type represents a different
     * promotional strategy - percentage- Discount by a percentage of the original
     * price. - amount- Discount by a specific amount off the original price. -
     * fixed_price- Sets the price to a specific fixed amount. - bogo- Buy One Get
     * One or at a discount. - contract_price- Special pricing based on a contract
     * or agreement. - shipping_price- Discount or deal related to the shipping
     * cost. - ladder_price- Price changes based on quantity purchased. -
     * bundle_price_percentage- Discount on a bundle purchase by a percentage. -
     * bundle_price_amount- Discount on a bundle purchase by a specific amount. -
     * bundle_amount_percentage- A percentage of the purchase amount is applied as
     * a discount when buying in a bundle. - custom- A custom promotion not
     * covered by other types. - free_gift_items- Free gift items are included
     * with the purchase. - free_non_sellable_items- Free items that are not for
     * sale are included with the purchase. - item_based_discount- Specific
     * percentage discounts on selected items based on their position after
     * sorting by price in descending order.
     */
    promotion_type?: string;
    /**
     * - The name of the promotional campaign or offer.
     */
    promotion_name?: string;
    /**
     * - A list of rules that define
     * the conditions under which discounts are applied.
     */
    discount_rules?: DiscountRules[];
    /**
     * - The total monetary value of the discount or promotion.
     */
    amount?: number;
    /**
     * - The quantity of articles required to
     * qualify for the promotion.
     */
    article_quantity?: number;
    /**
     * - A list of rules that outline the
     * conditions for purchasing items under the promotion.
     */
    buy_rules?: BuyRules[];
    /**
     * - A unique identifier for the promotion.
     */
    promo_id?: string;
    /**
     * - A flag that designates whether or not
     * the promotion is an MRP (manufacturer's reduced price) promotion.
     */
    mrp_promotion?: boolean;
    /**
     * - A list of
     * articles that are eligible for free under the promotion.
     */
    applied_free_articles?: AppliedFreeArticles[];
};
/** @returns {CurrentStatus} */
declare function CurrentStatus(): CurrentStatus;
type CurrentStatus = {
    /**
     * - A unique identifier for the store associated
     * with the shipment.
     */
    store_id?: number;
    /**
     * - The Air Waybill (AWB) number for
     * the delivery.
     */
    delivery_awb_number?: string;
    /**
     * - A flag indicating whether the current
     * status is synchronized with Kafka or not.
     */
    kafka_sync?: boolean;
    /**
     * - A unique identifier for the
     * delivery partner responsible for handling the shipment.
     */
    delivery_partner_id?: number;
    /**
     * - Serves as a key identifier to differentiate
     * among the diverse types of states a shipment can undergo throughout its journey.
     *
     * - 'operational': Pertains to states that involve the physical handling and
     * movement of the shipment, such as packing, in transit, and delivery.
     * - 'financial': Relates to states associated with the payment, invoicing, and
     * any monetary transactions or obligations tied to the shipment.
     * - 'logistics': Encompasses states that deal with the broader logistical
     * planning and coordination necessary for the shipment's journey,
     * including route optimization and carrier selection.
     */
    state_type?: string;
    /**
     * - A unique identifier for the specific state of
     * the shipment.
     */
    state_id?: number;
    /**
     * - A unique identifier for the current status entry
     */
    id: number;
    /**
     * - Denotes the date and time when the bag
     * status was created.
     */
    created_at?: string;
    /**
     * - A timestamp indicating when the status was created
     */
    created_ts?: string;
    /**
     * - A unique identifier for the shipment.
     */
    shipment_id?: string;
    /**
     * - The date and time when the current status
     * was last updated.
     */
    updated_at?: string;
    bag_state_mapper?: BagStateMapper;
    /**
     * - A unique identifier for the bag associated with
     * the shipment.
     */
    bag_id?: number;
    /**
     * - A descriptive label representing the current
     * status of the shipment.
     */
    status?: string;
};
/** @returns {OrderBags} */
declare function OrderBags(): OrderBags;
type OrderBags = {
    gst_details?: GSTDetailsData;
    bag_status?: BagStatusHistory[];
    /**
     * - An object containing details of
     * parent promotional bags.
     */
    parent_promo_bags?: any;
    seller_qc_details?: SellerQcDetails;
    financial_breakup?: FinancialBreakup;
    bag_configs?: BagConfigs;
    seller_identifier?: string;
    delivery_address?: Address;
    article?: OrderBagArticle;
    brand?: OrderBrandName;
    group_id?: string;
    affiliate_bag_details?: AffiliateBagsDetails;
    item?: PlatformItem;
    /**
     * - An array detailing the
     * various payment methods utilized for the transaction. Each item within this
     * array represents a distinct method of payment. It encapsulates the details
     * of various payment methods available for completing a transaction. It
     * includes comprehensive information such as the payment mode, amount,
     * transaction status, and identifiers for each payment method.
     */
    payment_methods?: BagPaymentMethods[];
    payment_info?: BagPaymentMethods[];
    /**
     * - The number of items contained in the bag.
     */
    quantity?: number;
    /**
     * - A unique identifier for the bag.
     */
    identifier?: string;
    /**
     * - Indicates whether the items in the bag are
     * eligible for return by the customer.
     */
    can_return?: boolean;
    /**
     * - Indicates whether the bag is eligible for
     * cancellation by the customer.
     */
    can_cancel?: boolean;
    /**
     * - A user-friendly name for the bag.
     */
    display_name?: string;
    /**
     * - A unique identifier for each line item in a bag.
     */
    line_number?: number;
    /**
     * - Meta data of the bags contains additional,
     * potentially dynamic information about the bags.
     */
    meta?: any;
    applied_promos?: AppliedPromos[];
    prices?: Prices;
    charges?: PriceAdjustmentCharge[];
    ordering_currency_prices?: OrderingCurrencyPrices;
    current_status?: CurrentStatus;
    bag_id: number;
    /**
     * - Type of entity that the tag is associated
     * to (bag, shipments).
     */
    entity_type?: string;
    /**
     * - A flag indicating whether the current bag
     * is a parent entity or not.
     */
    is_parent?: boolean;
};
/** @returns {FulfillingStore} */
declare function FulfillingStore(): FulfillingStore;
type FulfillingStore = {
    /**
     * - The contact phone number for the fulfilling store.
     */
    phone: string;
    /**
     * - The postal code for the fulfilling store's location.
     */
    pincode: string;
    /**
     * - Meta data of the fulfilling store contains
     * additional, potentially dynamic information about the fulfilling store.
     */
    meta: any;
    /**
     * - The complete address of the fulfilling store.
     */
    address: string;
    /**
     * - The primary address dynamically forms based
     * on a template. If the template includes a single key, Address1 contains
     * that data. For templates with multiple keys like {address} {address2}
     * {area} {state} {country}, Address1 compiles all into a single formatted string.
     */
    address1?: string;
    /**
     * - Display friendly version of the
     * Fulfilment Store Address.
     */
    display_address?: string;
    /**
     * - The unique id or identifier of a fulfilment store.
     */
    id: number;
    /**
     * - The unique code of the fulfilment store.
     */
    code: string;
    /**
     * - The unique name of a fulfillment store.
     */
    store_name: string;
    /**
     * - The name of the country associated with a
     * specific fulfilment store.
     */
    country: string;
    /**
     * - The channel through which
     * fulfillment is managed.
     */
    fulfillment_channel: string;
    /**
     * - The name of the contact person associated
     * with a fulfilling store.
     */
    contact_person: string;
    /**
     * - The state or region where the fulfilling store is located.
     */
    state: string;
    /**
     * - The city in which the fulfilling store is situated.
     */
    city: string;
    /**
     * - The email address of the fulfilling store.
     */
    store_email?: string;
};
/** @returns {ShipmentPayments} */
declare function ShipmentPayments(): ShipmentPayments;
type ShipmentPayments = {
    /**
     * - The payment mode used for the shipment.
     */
    mode?: string;
    /**
     * - A URL or path to the logo associated with the
     * payment method.
     */
    logo?: string;
    /**
     * - The source or origin of the payment
     */
    source?: string;
};
/** @returns {ShipmentStatusData} */
declare function ShipmentStatusData(): ShipmentStatusData;
type ShipmentStatusData = {
    /**
     * - It contains the additional properties related to
     * shipment status transition like Kafka_emission_status, user_name, etc.
     * Additionally it is dynamic.
     */
    meta?: any;
    /**
     * - The list of bags that are in this shipment
     * status transition.
     */
    bag_list?: string[];
    /**
     * - Unique identifier for a shipment status.
     */
    id?: number;
    /**
     * - Denotes the date and time when the
     * transition was created.
     */
    created_at?: string;
    /**
     * - A timestamp indicating when the status
     * entry was created.
     */
    created_ts?: string;
    /**
     * - The unique identifier for the shipment.
     */
    shipment_id?: string;
    /**
     * - The current status of the shipment.
     */
    status?: string;
    /**
     * - A user-friendly name or description of
     * the current shipment status.
     */
    display_name?: string;
    /**
     * - Reflects the most recent
     * status of the shipment.
     */
    current_shipment_status?: string;
    /**
     * - Denotes the date and time when the
     * transition of the status of the shipment was created.
     */
    status_created_at?: string;
};
/** @returns {ShipmentLockDetails} */
declare function ShipmentLockDetails(): ShipmentLockDetails;
type ShipmentLockDetails = {
    /**
     * - Represents the lock status of the shipment.
     */
    lock_status?: boolean;
    /**
     * - A user-friendly message that explains the
     * reason for locking the shipment.
     */
    lock_message?: string;
    /**
     * - This field maps potential actions
     * (e.g., downloading an invoice or label) to their corresponding shipment
     * lock statuses, indicating which operations are allowed depending on the
     * shipment's current lock status. When an action is set to 'lock', it means
     * no transitions or updates to the shipment's status can be performed until
     * the specified action is completed. For instance, if 'download_invoice' is
     * in a 'lock' state, the shipment cannot undergo any status transitions until
     * the invoice is either downloaded. Similarly, 'download_label' being in a
     * 'lock' state prevents any shipment status transitions until a new label is
     * downloaded.
     */
    action_to_status?: any;
};
/** @returns {FulfillmentOption} */
declare function FulfillmentOption(): FulfillmentOption;
type FulfillmentOption = {
    name?: string;
    slug?: string;
    type?: string;
    is_default?: boolean;
};
/** @returns {PlatformShipment} */
declare function PlatformShipment(): PlatformShipment;
type PlatformShipment = {
    fulfillment_option?: FulfillmentOption;
    /**
     * - Indicates the date and time when the
     * shipment was physically picked up from the sender or the origin point by
     * the delivery service. This timestamp is crucial for tracking the
     * commencement of the shipment's journey.
     */
    picked_date?: string;
    /**
     * - A list of tracking updates
     * associated with the shipment.
     */
    tracking_list?: TrackingList[];
    invoice?: InvoiceInfo;
    /**
     * - Represents the current status of the shipment.
     */
    shipment_status?: string;
    gst_details?: GSTDetailsData;
    order_status?: OrderStatusData;
    /**
     * - Represents a specific time window
     * allocated for the delivery of an order or shipment.
     */
    delivery_slot?: any;
    order?: OrderDetailsData;
    user?: UserDataInfo;
    /**
     * - A flag indicating whether the
     * delivery partner tracking feature is enabled for this shipment.
     */
    enable_dp_tracking?: boolean;
    /**
     * - A custom message or note associated
     * with the shipment.
     */
    custom_message?: string;
    /**
     * - The estimated service level
     * agreement (SLA) time for the shipment, indicating expected delivery timelines.
     */
    estimated_sla_time?: string;
    /**
     * - A timestamp indicating when the
     * estimated SLA time is expected to be met.
     */
    estimated_sla_ts?: string;
    /**
     * - Indicates whether the dimensions
     * of the shipment can be updated after creation.
     */
    can_update_dimension?: boolean;
    /**
     * - A list of URLs for images related to
     * the shipment.
     */
    shipment_images?: string[];
    /**
     * - A list of details about the delivery
     * of an order.
     */
    delivery_details?: any;
    /**
     * - Information regarding the billing for
     * the shipment, including billing address and payment method.
     */
    billing_details?: any;
    /**
     * - The ID of the parent forward
     * journey shipment.
     */
    forward_shipment_id?: string;
    /**
     * - The fulfilment priority, with
     * lower numbers indicating a higher priority.
     */
    fulfilment_priority?: number;
    shipment_details?: ShipmentLockDetails;
    /**
     * - An array of custom metadata objects that
     * may contain additional, dynamic information specific to the shipment.
     */
    custom_meta?: any[];
    /**
     * - The total quantity of items included
     * in the shipment.
     */
    shipment_quantity?: number;
    company_details?: CompanyDetails;
    ordering_store?: OrderingStoreDetails;
    /**
     * - The platform used to place the order.
     */
    order_platform?: string;
    /**
     * - Indicates whether the shipment is
     * currently locked or not for modifications or updates.
     */
    lock_status?: boolean;
    /**
     * - The URL of the ordering platform's logo.
     */
    platform_logo?: string;
    /**
     * - Information about the user agent string,
     * typically containing details about the browser or application used to place
     * the order.
     */
    user_agent?: string;
    dp_details?: DPDetailsData;
    /**
     * - The unique identifier for the invoice
     * associated with the shipment.
     */
    invoice_id?: string;
    /**
     * - This field stores a collection of
     * payment method objects used in a transaction. Each key within this object
     * represents a unique payment method code (e.g., "COD" for Cash On Delivery),
     * and its value is an object containing detailed information about that
     * payment method. The structure is designed to accommodate any number of
     * payment methods,providing flexibility and comprehensive insights into each
     * transaction's payment aspect.
     */
    payment_methods?: any;
    /**
     * - An array of objects containing detailed
     * information about the payments made for the shipment.
     */
    payment_info?: any[];
    /**
     * - Coupon data of the shipment which denotes if
     * coupon is applied, coupon code, coupon amount, coupon title and coupon message.
     */
    coupon?: any;
    affiliate_details?: AffiliateDetails;
    /**
     * - Text that indicates the priority level
     * of the shipment.
     */
    priority_text?: string;
    /**
     * - A history of status
     * changes for bags associated with the shipment.
     */
    bag_status_history?: BagStatusHistory[];
    /**
     * - A flag indicating whether
     * delivery partner assignment features are enabled for the shipment.
     */
    is_dp_assign_enabled?: boolean;
    /**
     * - A list of bags included in the shipment
     */
    bags?: OrderBags[];
    /**
     * - Indicates whether a delivery partner
     * has been assigned to the shipment.
     */
    dp_assignment?: boolean;
    /**
     * - The total number of items contained within
     * the shipment,
     */
    total_items?: number;
    fulfilling_store?: FulfillingStore;
    /**
     * - Meta data of the shipment contains additional,
     * potentially dynamic information about the shipment.
     */
    meta?: any;
    /**
     * - PDF Links associated with the shipment.
     */
    pdf_links?: any;
    /**
     * - The mode of payment used for the shipment.
     */
    payment_mode?: string;
    /**
     * - Defines the type of packaging used for
     * the product, encompassing materials, design, and form factors.
     */
    packaging_type?: string;
    /**
     * - It is a type being used to represent the
     * journey of shipment through the performed status transition. Forward
     * Journey: The forward journey encompasses all the stages of shipping,
     * including order placement, packing, dispatch, in-transit updates, and
     * delivery. Return Journey: Contrary to the forward journey, the return
     * journey involves the process of sending items back from the customer to the
     * original sender or a designated return facility.
     */
    journey_type?: string;
    prices?: Prices;
    /**
     * - An array of charges applied
     * to the shipment.
     */
    charges?: PriceAdjustmentCharge[];
    ordering_currency_prices?: OrderingCurrencyPrices;
    /**
     * - The business vertical or category to which
     * the shipment belongs.
     */
    vertical?: string;
    /**
     * - A unique identifier for the shipment.
     */
    shipment_id: string;
    payments?: ShipmentPayments;
    /**
     * - The operational status of the shipment.
     */
    operational_status?: string;
    status?: ShipmentStatusData;
    /**
     * - The total number of bags in the shipment.
     */
    total_bags?: number;
    /**
     * - Denotes the date and time when the
     * shipment was created.
     */
    shipment_created_at?: string;
    /**
     * - A timestamp representing when the
     * shipment was created.
     */
    shipment_created_ts?: string;
    currency?: Currency;
    currency_info?: CurrencyInfo;
    /**
     * - The ID of the previous shipment
     * in the sequence.
     */
    previous_shipment_id?: string;
    /**
     * - A numerical representation of the
     * last update time for the shipment
     */
    shipment_update_time?: number;
    rto_address?: Address;
    /**
     * - The identifier for any credit note
     * issued for the shipment
     */
    credit_note_id?: string;
    /**
     * - A flag indicating whether the shipment
     * is being self-shipped by the seller or vendor.
     */
    is_self_ship?: boolean;
    /**
     * - The specific mode of payment used for
     * the transaction
     */
    mode_of_payment?: string;
    /**
     * - Flag to show NDR actions based on
     * LAPA (Logistic As Per Actual) plan subscription. If LAPA plan taken, true,
     * else false.
     */
    is_lapa_enabled?: boolean;
    /**
     * - The forward_end_shipment_id
     * represents the shipment ID of the original forward journey shipment. When a
     * shipment is transitioned to a return journey, the original shipment ID from
     * the forward journey is recorded in the forward_end_shipment_id field of the
     * return journey shipment. Even if the return shipment is later split into
     * multiple shipments, each of these shipments will retain the same
     * forward_end_shipment_id value that was assigned during the initial return
     * journey initiation. This ensures that all return shipments can be traced
     * back to the original forward journey shipment.
     */
    forward_end_shipment_id?: string;
    /**
     * - An object storing detailed
     * logistics-related information, including courier partner details and other
     * relevant metadata.
     */
    logistics_meta?: any;
    /**
     * - Array of packages to be created or
     * updated for the shipment. At least two packages are required for MPS functionality.
     */
    packages?: PackageSchema[];
};
/** @returns {ShipmentInfoResponseSchema} */
declare function ShipmentInfoResponseSchema(): ShipmentInfoResponseSchema;
type ShipmentInfoResponseSchema = {
    /**
     * - A descriptive message providing additional
     * information about the API response.
     */
    message?: string;
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success: boolean;
    /**
     * - A list of platform shipment
     * objects, containing information related to a shipment.
     */
    shipments?: PlatformShipment[];
};
/** @returns {TaxDetails} */
declare function TaxDetails(): TaxDetails;
type TaxDetails = {
    pan_no?: string;
    gstin?: string;
};
/** @returns {PaymentInfoData} */
declare function PaymentInfoData(): PaymentInfoData;
type PaymentInfoData = {
    /**
     * - It contains the additional properties related to
     * shipment status transition like Kafka_emission_status, user_name, etc.
     * Additionally it is dynamic.
     */
    meta?: any;
    /**
     * - Information about the payment source. For eg, NB_ICICI.
     */
    mode?: string;
    /**
     * - The name of the payment method (e.g., "Credit
     * Card", "PayPal").
     */
    name?: string;
    /**
     * - Amount paid using this payment method.
     */
    amount?: number;
    /**
     * - Indicates whether this payment method has
     * been collected or not.
     */
    collected?: boolean;
    /**
     * - Payment refund by for the customer and
     * seller (e.g fynd, seller).
     */
    refund_by?: string;
    /**
     * - Payment collected by for the customer and
     * seller (e.g fynd, seller).
     */
    collect_by?: string;
    /**
     * - The name of the payment method as it
     * should be displayed to the user.
     */
    display_name?: string;
    /**
     * - A unique identifier associated
     * with the payment transaction, such as TR669796C0012CF31BBD. This ID helps
     * track and reference the specific transaction within the merchant's system.
     */
    merchant_transaction_id?: string;
};
/** @returns {OrderData} */
declare function OrderData(): OrderData;
type OrderData = {
    /**
     * - The specific channel through which
     * your order was placed. This field will be phased out after version 2.4.0.
     * Please use ordering_source instead to ensure accurate order tracking and processing.
     */
    ordering_channel?: string;
    /**
     * - Ordering source, to be used to
     * identify source of order creation.
     */
    ordering_source?: string;
    ordering_source_details?: OrderingSourceDetails;
    /**
     * - Specifies the exact date and time when the
     * order was placed by the customer, serving as a key timestamp for the
     * initiation of the order processing cycle.
     */
    order_date: string;
    created_ts?: string;
    tax_details?: TaxDetails;
    /**
     * - Meta data of the order contains additional,
     * potentially dynamic information about the order.
     */
    meta?: any;
    fynd_order_id: string;
    prices?: Prices;
    charges?: PriceAdjustmentCharge[];
    ordering_currency_prices?: OrderingCurrencyPrices;
    /**
     * - This field stores a collection of
     * payment method objects used in a transaction. Each key within this object
     * represents a unique payment method code (e.g., "COD" for Cash On Delivery),
     * and its value is an object containing detailed information about that
     * payment method. This includes metadata such as logos, payment IDs, and
     * merchant codes, as well as transaction-specific details like the payment
     * mode, name, amount, and entities responsible for refunds and collections.
     * The structure is designed to accommodate any number of payment methods,
     * providing flexibility and comprehensive insights into each transaction's
     * payment aspect.
     */
    payment_methods?: any;
    payment_info?: PaymentInfoData[];
    /**
     * - External Order id
     */
    affiliate_order_id?: string;
    /**
     * - Unique identifier for the sales channel.
     */
    affiliate_id?: string;
    /**
     * - Specifies the origin from from which the order
     * is created, including mobile applications, web interfaces, social media
     * integrations, or external APIs.
     */
    source?: string;
    currency?: CurrencySchema;
    loyalty_discount_details?: LoyaltyDiscountDetails;
};
/** @returns {OrderDetailsResponseSchema} */
declare function OrderDetailsResponseSchema(): OrderDetailsResponseSchema;
type OrderDetailsResponseSchema = {
    order?: OrderData;
    success: boolean;
    shipments?: PlatformShipment[];
};
/** @returns {SubLane} */
declare function SubLane(): SubLane;
type SubLane = {
    value?: string;
    text?: string;
    total_items?: number;
    actions?: any[];
    index?: number;
};
/** @returns {SuperLane} */
declare function SuperLane(): SuperLane;
type SuperLane = {
    value: string;
    options?: SubLane[];
    text: string;
    total_items?: number;
};
/** @returns {LaneConfigResponseSchema} */
declare function LaneConfigResponseSchema(): LaneConfigResponseSchema;
type LaneConfigResponseSchema = {
    super_lanes?: SuperLane[];
};
/** @returns {PlatformBreakupValues} */
declare function PlatformBreakupValues(): PlatformBreakupValues;
type PlatformBreakupValues = {
    /**
     * - Represents the value associated with a specific
     * component of the price breakdown.
     */
    value?: string;
    /**
     * - Represents the name associated with a specific
     * component of the price breakdown.
     */
    name?: string;
    /**
     * - A user-friendly display name for the
     * component, intended for presentation in user interfaces.
     */
    display?: string;
};
/** @returns {PlatformChannel} */
declare function PlatformChannel(): PlatformChannel;
type PlatformChannel = {
    /**
     * - Represents the logo of the channel through which
     * the order was placed.
     */
    logo?: string;
    /**
     * - Represents the name of the channel through which
     * the order was placed
     */
    name?: string;
};
/** @returns {PlatformOrderItems} */
declare function PlatformOrderItems(): PlatformOrderItems;
type PlatformOrderItems = {
    /**
     * - The breakup_values
     * array contains detailed breakdowns of different pricing components related
     * to an order. Each item in the array is a reference to the
     * PlatformBreakupValues schema, which provides specific details about each
     * component such as loyalty points, coupon discounts, raw pricing data, and
     * display information.
     */
    breakup_values?: PlatformBreakupValues[];
    total_order_value?: number;
    /**
     * - It contains the additional properties related to
     * order transition like Kafka_emission_status, user_name, etc. Additionally
     * it is dynamic, potentially.
     */
    meta?: any;
    /**
     * - The Date and time when the order was created.
     */
    order_created_time?: string;
    /**
     * - The timestamp indicating when the
     * order was created.
     */
    order_created_ts?: string;
    /**
     * - Ordering source, to be used to
     * identify source of order creation.
     */
    ordering_source?: string;
    ordering_source_details?: OrderingSourceDetails;
    /**
     * - The payment mode used for the order.
     */
    payment_mode?: string;
    /**
     * - An array of shipment items
     * returned as part of the order.
     */
    shipments?: PlatformShipment[];
    /**
     * - A unique identifier associated with the order.
     */
    order_id?: string;
    channel?: PlatformChannel;
    user_info?: UserDataInfo;
    order_value?: number;
    currency?: Currency;
    currency_info?: CurrencyInfo;
    prices?: Prices;
    ordering_currency_prices?: OrderingCurrencyPrices;
    loyalty_discount_details?: LoyaltyDiscountDetails;
};
/** @returns {OrderListingResponseSchema} */
declare function OrderListingResponseSchema(): OrderListingResponseSchema;
type OrderListingResponseSchema = {
    /**
     * - The total number of orders matching the
     * query criteria.
     */
    total_count?: number;
    /**
     * - A message providing additional context about
     * the response.
     */
    message?: string;
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
    /**
     * - An array of shipment items
     * returned as part of the response.
     */
    items?: PlatformOrderItems[];
    /**
     * - The lane associated with the order.
     */
    lane?: string;
    page?: Page;
};
/** @returns {PlatformTrack} */
declare function PlatformTrack(): PlatformTrack;
type PlatformTrack = {
    /**
     * - The current geographic
     * location of the courier partner.
     */
    last_location_recieved_at?: string;
    /**
     * - A field to store additional metadata related to
     * the courier partner's operations or the shipment.
     */
    meta?: any;
    /**
     * - The current status of the shipment as
     * updated by the courier partner.
     */
    raw_status?: string;
    /**
     * - Human readable timestamp when the status
     * was last updated by the courier partner.
     */
    updated_at?: string;
    /**
     * - The timestamp when the status was last
     * updated by the courier partner.
     */
    updated_time?: string;
    /**
     * - The Air Waybill (AWB) number associated with the
     * shipment, used for tracking the parcel in transit.
     */
    awb?: string;
    /**
     * - Indicates the type of journey the shipment.
     */
    shipment_type?: string;
    /**
     * - The operational status of the shipment.
     */
    status?: string;
    /**
     * - Any additional remarks or comments from the
     * courier partner regarding the shipment.
     */
    reason?: string;
    /**
     * - The name of the courier partner
     * responsible for the shipment.
     */
    account_name?: string;
};
/** @returns {PlatformShipmentTrack} */
declare function PlatformShipmentTrack(): PlatformShipmentTrack;
type PlatformShipmentTrack = {
    /**
     * - Meta data of the shipment contains additional,
     * potentially dynamic information about the shipment.
     */
    meta?: any;
    /**
     * - A list of tracking details at various status.
     */
    results?: PlatformTrack[];
};
/** @returns {AdvanceFilterInfo} */
declare function AdvanceFilterInfo(): AdvanceFilterInfo;
type AdvanceFilterInfo = {
    returned?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    filters?: FiltersInfo[];
    processed?: FiltersInfo[];
    /**
     * - Specifies the set of filters currently
     * applied , search result, or view, detailing the criteria used to narrow
     * down or sort the information presented. This object is designed to be
     * highly flexible, allowing for the inclusion of various filter types such as
     * date ranges, categories, status flags, or custom search terms.
     */
    applied_filters?: any;
    /**
     * - An object representing a page with pagination details.
     */
    page?: any;
};
/** @returns {FiltersResponseSchema} */
declare function FiltersResponseSchema(): FiltersResponseSchema;
type FiltersResponseSchema = {
    advance?: AdvanceFilterInfo;
    global_1?: FiltersInfo;
    advance_filter?: AdvanceFilterInfo;
    global_filter?: FiltersInfo[];
};
/** @returns {URL} */
declare function URL(): URL;
type URL = {
    url?: string;
};
/** @returns {FileResponseSchema} */
declare function FileResponseSchema(): FileResponseSchema;
type FileResponseSchema = {
    /**
     * - Name of the file
     */
    file_name?: string;
    cdn?: URL;
};
/** @returns {BulkActionTemplate} */
declare function BulkActionTemplate(): BulkActionTemplate;
type BulkActionTemplate = {
    value?: string;
    text?: string;
};
/** @returns {BulkActionTemplateResponseSchema} */
declare function BulkActionTemplateResponseSchema(): BulkActionTemplateResponseSchema;
type BulkActionTemplateResponseSchema = {
    /**
     * - Allowed bulk action template slugs
     */
    template_x_slug?: BulkActionTemplate[];
};
/** @returns {PlatformShipmentReasonsResponseSchema} */
declare function PlatformShipmentReasonsResponseSchema(): PlatformShipmentReasonsResponseSchema;
type PlatformShipmentReasonsResponseSchema = {
    /**
     * - An array of reasons associated with the platform.
     */
    reasons?: Reason[];
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
};
/** @returns {ShipmentResponseReasons} */
declare function ShipmentResponseReasons(): ShipmentResponseReasons;
type ShipmentResponseReasons = {
    reason_id?: number;
    reason?: string;
};
/** @returns {ShipmentReasonsResponseSchema} */
declare function ShipmentReasonsResponseSchema(): ShipmentReasonsResponseSchema;
type ShipmentReasonsResponseSchema = {
    reasons: ShipmentResponseReasons[];
    message: string;
    success: boolean;
};
/** @returns {StoreAddress} */
declare function StoreAddress(): StoreAddress;
type StoreAddress = {
    phone: string;
    /**
     * - Denotes the date and time when the transition
     * of the store address was created.
     */
    created_at: string;
    contact_person: string;
    pincode: number;
    /**
     * - The type of the address (e.g., home, office).
     */
    address_type: string;
    /**
     * - The primary address dynamically forms based on
     * a template. If the template includes a single key, Address1 contains that
     * data. For templates with multiple keys like {address} {address2} {area}
     * {state} {country}, Address1 compiles all into a single formatted string.
     */
    address1: string;
    display_address?: string;
    version?: string;
    /**
     * - Category or classification of the
     * address. The address_category field that includes "store", "delivery", and
     * "billing" serves to classify addresses based on various business processes
     *
     * - 'store': Identifies addresses associated with physical retail locations or
     * warehouses which is essential for inventory management, order
     * fulfillment, and facilitating in-store pickups or returns.
     * - 'delivery': Identifies addresses where orders are shipped to customers which
     * ensures successful delivery, enhancing customer satisfaction, and
     * optimizing logistics operations.
     * - 'billing': Identifies addresses used for billing and financial transactions
     * which are essential for payment processing, invoice generation, and
     * maintaining financial accuracy.
     */
    address_category: string;
    city: string;
    longitude: number;
    address2?: string;
    area?: string;
    email?: string;
    /**
     * - Denotes the date and time when any
     * modifications were made to the store.
     */
    updated_at: string;
    /**
     * - Uniquely identifies the country of the
     * store addressds_type using the two-character standard ISO 3166-1 alpha-2
     * country codes. Examples include 'US' for the United States and 'IN' for India.
     */
    country_code: string;
    country: string;
    landmark?: string;
    latitude: number;
    state: string;
};
/** @returns {EInvoicePortalDetails} */
declare function EInvoicePortalDetails(): EInvoicePortalDetails;
type EInvoicePortalDetails = {
    username?: string;
    user?: string;
    password?: string;
};
/** @returns {StoreEinvoice} */
declare function StoreEinvoice(): StoreEinvoice;
type StoreEinvoice = {
    username?: string;
    user?: string;
    password?: string;
    enabled: boolean;
};
/** @returns {StoreEwaybill} */
declare function StoreEwaybill(): StoreEwaybill;
type StoreEwaybill = {
    enabled?: boolean;
};
/** @returns {StoreGstCredentials} */
declare function StoreGstCredentials(): StoreGstCredentials;
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
/** @returns {Document} */
declare function Document(): Document;
type Document = {
    value: string;
    /**
     * - Type of the document.
     */
    type: string;
    verified: boolean;
    legal_name: string;
    url?: string;
};
/** @returns {StoreDocuments} */
declare function StoreDocuments(): StoreDocuments;
type StoreDocuments = {
    gst?: Document;
};
/** @returns {StoreMeta} */
declare function StoreMeta(): StoreMeta;
type StoreMeta = {
    /**
     * - Provides a flexible
     * structure for storing extra contact information related to the store.
     */
    additional_contact_details?: any;
    timing?: any[];
    notification_emails?: string[];
    gst_number?: string;
    /**
     * - Contains essential information
     * and settings related to the e-Way Bill portal, which is used for generating
     * and managing e-waybills for the transportation of goods under specific tax
     * regulations.
     */
    ewaybill_portal_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    gst_credentials: StoreGstCredentials;
    stage: string;
    /**
     * - Product return configuration
     * details for the location. It can include details like on_same_store
     * denoting whether return can be initiated at the same store.
     */
    product_return_config?: any;
    documents?: StoreDocuments;
    display_name: string;
};
/** @returns {Store} */
declare function Store(): Store;
type Store = {
    phone: string;
    is_active?: boolean;
    company_id: number;
    alohomora_user_id?: number;
    /**
     * - Denotes the date and time when the store was created.
     */
    created_at: string;
    contact_person: string;
    store_email: string;
    is_enabled_for_recon?: boolean;
    pincode: string;
    mall_area?: string;
    vat_no?: string;
    /**
     * - The primary address dynamically forms based on
     * a template. If the template includes a single key, Address1 contains that
     * data. For templates with multiple keys like {address} {address2} {area}
     * {state} {country}, Address1 compiles all into a single formatted string.
     */
    address1: string;
    display_address?: string;
    store_active_from?: string;
    city: string;
    name: string;
    longitude?: number;
    brand_store_tags?: string[];
    order_integration_id?: string;
    parent_store_id?: number;
    /**
     * - Type of location of the fulfilling store.
     */
    location_type: string;
    code?: string;
    fulfillment_channel: string;
    /**
     * - Denotes the date and time when any
     * modifications were made to the store.
     */
    updated_at?: string;
    store_address_json?: StoreAddress;
    meta: StoreMeta;
    s_id?: string;
    state: string;
    country: string;
    packaging_material_count?: number;
    is_archived?: boolean;
    login_username?: string;
    mall_name?: string;
    latitude?: number;
    address2?: string;
};
/** @returns {Brand} */
declare function Brand(): Brand;
type Brand = {
    credit_note_expiry_days?: number;
    logo?: string;
    invoice_prefix?: string;
    credit_note_allowed?: boolean;
    /**
     * - Denotes the start date and time when the
     * brand was created.
     */
    start_date?: string;
    company?: string;
    is_virtual_invoice?: boolean;
    script_last_ran?: string;
    pickup_location?: string;
    /**
     * - Timestamp when the brand was created.
     */
    created_on?: string;
    brand_name: string;
    brand_id?: number;
    /**
     * - Timestamp when the brand of the order was modified.
     */
    modified_on?: string;
    id?: number;
};
/** @returns {Item} */
declare function Item(): Item;
type Item = {
    /**
     * - A dictionary of product attributes
     */
    attributes: any;
    brand_id: number;
    slug_key: string;
    webstore_product_url?: string;
    /**
     * - Represents the product's classification at
     * the third level in the e-commerce platform's category hierarchy, using an
     * integer identifier. This finer level of categorization allows for precise
     * product organization and easier navigation for customers seeking specific items.
     */
    l3_category?: number;
    /**
     * - This key specifies the name of the
     * third-level category under which the product is listed, offering a more
     * detailed classification within the e-commerce platform's hierarchy.
     */
    l3_category_name?: string;
    /**
     * - Denotes the date and time when the
     * item was updated.
     */
    last_updated_at?: string;
    name: string;
    /**
     * - The l2_category field represents the
     * second level of categorization for items within an e-commerce platform's
     * hierarchy. This allows for classification beyond the top-tier (level 1)
     * categories, helping customers to narrow down their search and find products
     */
    l2_category?: string[];
    brand: string;
    image: string[];
    code?: string;
    /**
     * - The unique identifier of the defines
     * the top-tier categories to which a product belongs within the e-commerce
     * platform's hierarchy.
     */
    l1_category_id?: number;
    item_id: number;
    /**
     * - This array defines the top-tier
     * categories to which a product belongs within the e-commerce platform's hierarchy.
     */
    l1_category?: string[];
    gender?: string;
    can_cancel?: boolean;
    can_return?: boolean;
    size: string;
    branch_url?: string;
    /**
     * - Meta data of the item contains additional,
     * potentially dynamic information about the item.
     */
    meta?: any;
    color?: string;
    department_id?: number;
    l2_category_id?: number;
};
/** @returns {ArticleStatusDetails} */
declare function ArticleStatusDetails(): ArticleStatusDetails;
type ArticleStatusDetails = {
    /**
     * - Captures comprehensive status information for
     * an article. Each status type, such as 'cancelled_fynd', contains objects
     * keyed by unique identifiers (UIDs). These objects detail the specific
     * status, including associated bag IDs with their quantities, total quantity
     * affected, and reasons for the status if applicable. This structure allows
     * for tracking multiple status conditions and their details for a single article.
     */
    status?: any;
};
/** @returns {Company} */
declare function Company(): Company;
type Company = {
    pan_no?: string;
    /**
     * - Timestamp when the company was created.
     */
    created_on?: string;
    id?: number;
    company_name?: string;
    gst_number?: string;
    /**
     * - The type of company, which can be one of
     * the following: - `distributor`: Distributor - `franchise`: Franchise -
     * `mbo`: MBO (Managed Business Operations) - `manufacturer-owner`: Owner/Manufacturer
     */
    company_type?: string;
    /**
     * - Timestamp when the company was modified.
     */
    modified_on?: string;
    /**
     * - Meta data of the company contains additional,
     * potentially dynamic information about the company.
     */
    meta?: any;
    /**
     * - The type of business structure, which
     * can be one of the following: - `Private`: Private Limited Company -
     * `LLP/Partnership`: Limited Liability Partnership or Partnership -
     * `HUF/Proprietorship`: Hindu Undivided Family or Proprietorship.
     */
    business_type?: string;
    /**
     * - Specifies the official beginning
     * date and time of an agreement or contract associated with the company.
     */
    agreement_start_date?: string;
};
/** @returns {ShipmentGstDetails} */
declare function ShipmentGstDetails(): ShipmentGstDetails;
type ShipmentGstDetails = {
    value_of_good?: number;
    gst_fee?: number;
    brand_calculated_amount?: number;
    tax_collected_at_source?: number;
    /**
     * - A GST Number (Goods and Services Tax
     * Identification Number, often abbreviated as GSTIN) is a unique identifier
     * assigned to a business or individual registered under the Goods and
     * Services Tax (GST) system in countries like India. The GST number is
     * essential for businesses to comply with tax regulations and for the
     * government to track tax payments and returns.
     */
    gstin_code?: string;
};
/** @returns {DeliverySlotDetails} */
declare function DeliverySlotDetails(): DeliverySlotDetails;
type DeliverySlotDetails = {
    slot?: string;
    upper_bound?: string;
    lower_bound?: string;
    date?: string;
    type?: string;
};
/** @returns {InvoiceDetails} */
declare function InvoiceDetails(): InvoiceDetails;
type InvoiceDetails = {
    /**
     * - Specifies the date and time when the
     * invoice was last updated.
     */
    updated_date?: string;
    store_invoice_id?: string;
    invoice_url?: string;
    label_url?: string;
};
/** @returns {UserDetails} */
declare function UserDetails(): UserDetails;
type UserDetails = {
    user_oid?: string;
    external_customer_id?: string;
    first_name?: string;
    last_name?: string;
    mobile?: string;
    email?: string;
    is_anonymous_user?: boolean;
    gender?: string;
    mongo_user_id?: string;
    /**
     * - Meta data of the user details contains
     * additional, potentially dynamic information about the user details.
     */
    meta?: any;
};
/** @returns {WeightData} */
declare function WeightData(): WeightData;
type WeightData = {
    value?: number;
    unit?: string;
};
/** @returns {BagDetails} */
declare function BagDetails(): BagDetails;
type BagDetails = {
    /**
     * - The timestamp indicating when the
     * bag's information was last updated
     */
    bag_update_time?: number;
    /**
     * - A unique identifier for the bag record within the system.
     */
    id?: string;
    /**
     * - A unique identifier specifically for the bag
     * itself, used for tracking purposes.
     */
    bag_id?: number;
    affiliate_bag_details?: AffiliateBagDetails;
    affiliate_details?: AffiliateDetails;
    /**
     * - A list of promotional discounts that
     * were applied to the bag's contents.
     */
    applied_promos?: any[];
    article?: Article;
    article_details?: ArticleStatusDetails;
    /**
     * - An array of current status
     * records associated with the bag, reflecting its lifecycle stages (e.g.,
     * pending, placed, delivered).
     */
    bag_status?: BagStatusHistory[];
    /**
     * - An array of current
     * status records associated with the bag, reflecting its lifecycle stages
     * (e.g., pending, placed, delivered).
     */
    bag_status_history?: BagStatusHistory[];
    brand?: Brand;
    company?: Company;
    current_operational_status?: BagStatusHistory;
    current_status?: BagStatusHistory;
    dates?: Dates;
    delivery_address?: Address;
    delivery_slot?: DeliverySlotDetails;
    /**
     * - Name of the bag intended for user display.
     */
    display_name?: string;
    /**
     * - Additional information about the delivery
     * partner (DP) handling the bag.
     */
    dp_details?: any;
    einvoice_info?: any;
    /**
     * - Type of entity that the tag is associated
     * to (bag, shipments).
     */
    entity_type?: string;
    /**
     * - Details of the fallback user associated
     * with the bag .
     */
    fallback_user?: any;
    /**
     * - A breakdown of the
     * financial aspects associated with the bag, such as product prices, taxes,
     * discounts, and total cost.
     */
    financial_breakup?: FinancialBreakup[];
    fulfilling_store?: Store;
    /**
     * - Fynd store employee details.
     */
    fyndstore_emp?: any;
    gst_details?: GSTDetailsData;
    invoice?: InvoiceDetails;
    item?: Item;
    /**
     * - It is a type being used to represent the
     * journey of shipment through the performed status transition. Forward
     * Journey: The forward journey encompasses all the stages of shipping,
     * including order placement, packing, dispatch, in-transit updates, and
     * delivery. Return Journey: Contrary to the forward journey, the return
     * journey involves the process of sending items back from the customer to the
     * original sender or a designated return facility.
     */
    journey_type?: string;
    /**
     * - A unique identifying number associated
     * with the bag. It is generated sequentially as bags are created.
     */
    line_number?: number;
    /**
     * - Indicates whether the bag is locked from
     * further changes (true/false). A locked bag cannot undergo modifications
     * until unlocked.
     */
    lock_status?: boolean;
    /**
     * - The identifier-assigned bags receive after
     * they are manifest (thereby creating a shipment in conjunction with the
     * allocated manifest).
     */
    manifest_id?: string;
    /**
     * - Meta data of the bag details contains additional,
     * potentially dynamic information about the bag details.
     */
    meta?: any;
    /**
     * - This field reflects the payment method
     * used in the transaction for a particular bag.
     */
    mode_of_payment?: string;
    /**
     * - The total number of bags in this bag's order.
     */
    no_of_bags_order?: number;
    /**
     * - The particular state a bag occupies
     * in the shipment life-cycle.
     */
    operational_status?: string;
    order?: OrderDetails;
    /**
     * - A unique identifier used for
     * integrating this order with external systems or services.
     */
    order_integration_id?: string;
    /**
     * - Defines the specific journey a shipment
     * will follow based on the application's operational needs and customer
     * preferences. This field categorizes orders into distinct types, each
     * associated with a unique processing flow. For example:
     *
     * - "HomeDelivery": The order goes through all the steps needed for delivery,
     * from being packed to arriving at the customer’s address.
     * - "PickAtStore": The order is prepared for pickup at the store, skipping
     * shipping steps to make it ready faster for the customer to collect in person.
     * - "Digital": This order type likely refers to orders that involve digital goods
     * or services, such as software, digital subscriptions, e-books, online
     * courses, or any other item that can be delivered electronically.
     */
    order_type?: string;
    /**
     * - An estimated value of the order at the
     * time of placement or sale.
     */
    order_value?: number;
    ordering_store?: Store;
    /**
     * - An object containing details of
     * parent promotional bags.
     */
    parent_promo_bags?: any;
    /**
     * - This field stores a collection of
     * payment method objects used in a transaction. Each key within this object
     * represents a unique payment method code (e.g., "COD" for Cash On Delivery),
     * and its value is an object containing detailed information about that
     * payment method. The structure is designed to accommodate any number of
     * payment methods,providing flexibility and comprehensive insights into each
     * transaction's payment aspect.
     */
    payment_methods?: any;
    /**
     * - The Specific type of payment.
     */
    payment_type?: string;
    /**
     * - Defines allowed payment details for the item.
     */
    payments?: any;
    prices?: Prices;
    /**
     * - Defines any additional
     * charges for the product.
     */
    charges?: PriceAdjustmentCharge[];
    /**
     * - Indicates whether quality check is
     * required for the product.
     */
    qc_required?: boolean;
    /**
     * - The quantity of the product.
     */
    quantity?: number;
    /**
     * - Information about why the Bag's
     * item/products are being cancelled or returned or exchanged. This keys
     * within this object represent unique
     */
    reasons?: any[];
    /**
     * - Indicates whether voucher/wallet
     * points can be reapplied to the product.
     */
    restore_coupon?: boolean;
    /**
     * - Provides a flexible structure for
     * storing information about promotion details or offers that are eligible for
     * restoration. This can include details such as promo codes, descriptions of
     * the offers, eligibility criteria, restoration conditions, and any other
     * relevant data that supports the reactivation of previously paused or
     * expired promotions.
     */
    restore_promos?: any;
    rto_address?: Address;
    /**
     * - A unique identifier assigned by the
     * seller to represent a specific transaction in their order processing system.
     */
    seller_identifier?: string;
    shipment?: Shipment;
    shipment_details?: ShipmentDetails;
    /**
     * - Unique identifier of the shipment.
     */
    shipment_id?: string;
    shipment_gst?: ShipmentGstDetails;
    shipment_status?: ShipmentStatusData;
    /**
     * - Status history
     * of the shipment item in the order.
     */
    shipment_status_history?: ShipmentStatusData[];
    status?: BagReturnableCancelableStatus;
    /**
     * - A list of tags or labels associated with the
     * bag, which might be used for filtering, sorting, or categorizing purposes.
     */
    tags?: string[];
    /**
     * - The total number of shipped bags.
     */
    total_shipment_bags?: number;
    /**
     * - The total number of shipments
     * in the order.
     */
    total_shipments_in_order?: number;
    /**
     * - Specifies the type of the transaction
     * being processed. This classification helps in distinguishing between
     * different operational processes and allows for tailored handling of each
     * transaction type. For example, a 'shipment' transaction type refers to
     * operations related to the shipping of goods.
     */
    transaction_type?: string;
    /**
     * - The type of the bag.
     */
    type?: string;
    /**
     * - The date and time when the bag was last updated.
     */
    updated_at?: string;
    user?: UserDetails;
    weight?: WeightData;
    /**
     * - Specifies the list of integers
     * that specify the bag number
     */
    original_bag_list?: number[];
    /**
     * - The unique identifier for the bag.
     */
    identifier?: string;
};
/** @returns {BagDetailsPlatformResponseSchema} */
declare function BagDetailsPlatformResponseSchema(): BagDetailsPlatformResponseSchema;
type BagDetailsPlatformResponseSchema = {
    /**
     * - Response status_code.
     */
    status_code?: number;
    data?: BagDetails;
};
/** @returns {BagsPage} */
declare function BagsPage(): BagsPage;
type BagsPage = {
    item_total: number;
    has_next: boolean;
    /**
     * - The type of the page.
     */
    page_type: string;
    current: number;
    size: number;
};
/** @returns {BagData} */
declare function BagData(): BagData;
type BagData = {
    items?: BagDetails[];
    page?: BagsPage;
};
/** @returns {GetBagsPlatformResponseSchema} */
declare function GetBagsPlatformResponseSchema(): GetBagsPlatformResponseSchema;
type GetBagsPlatformResponseSchema = {
    /**
     * - Response status_code.
     */
    status_code?: number;
    data?: BagData;
};
/** @returns {GeneratePosOrderReceiptResponseSchema} */
declare function GeneratePosOrderReceiptResponseSchema(): GeneratePosOrderReceiptResponseSchema;
type GeneratePosOrderReceiptResponseSchema = {
    customer_cn_receipt?: string;
    success?: boolean;
    order_id?: string;
    invoice_receipt?: string;
    payment_receipt?: string;
    merchant_cn_receipt?: string;
    payment_receipt_template?: string;
    customer_cn_receipt_template?: string;
    invoice_receipt_template?: string;
};
/** @returns {Templates} */
declare function Templates(): Templates;
type Templates = {
    text?: string;
    value?: string;
};
/** @returns {AllowedTemplatesResponseSchema} */
declare function AllowedTemplatesResponseSchema(): AllowedTemplatesResponseSchema;
type AllowedTemplatesResponseSchema = {
    template_x_slug?: Templates[];
};
/** @returns {TemplateDownloadResponseSchema} */
declare function TemplateDownloadResponseSchema(): TemplateDownloadResponseSchema;
type TemplateDownloadResponseSchema = {
    file_name?: string;
    url?: string;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    /**
     * - A message describing the error that occurred.
     */
    message?: string;
    /**
     * - Indicates whether the API call was successful
     * (true) or not (false).
     */
    success?: boolean;
};
/** @returns {BulkFailedResponseSchema} */
declare function BulkFailedResponseSchema(): BulkFailedResponseSchema;
type BulkFailedResponseSchema = {
    status?: boolean;
    error?: string;
};
