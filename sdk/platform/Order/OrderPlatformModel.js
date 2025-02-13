const Joi = require("joi");

/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} [shipment_ids] - Shipment Ids to clear cache
 * @property {string[]} [affiliate_bag_ids] - Affiliate Bag Ids to clear cache
 *   of shipment Ids mapped to it
 * @property {string[]} [bag_ids] - Bag Ids to clear cache of shipment Ids mapped to it
 */

/**
 * @typedef InvalidateShipmentCacheNestedResponseSchema
 * @property {string} [shipment_id]
 * @property {number} [status] - The HTTP status code corresponding to the
 *   overall status of the shipment response.
 * @property {string} [message]
 * @property {string} [error]
 */

/**
 * @typedef InvalidateShipmentCacheResponseSchema
 * @property {InvalidateShipmentCacheNestedResponseSchema[]} [response]
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
 *   product’s identifier, such as a SKU, barcode, or another distinct code.
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
 * @typedef DataUpdates
 * @property {OrderItemDataUpdates[]} [order_item_status] - A list of updates
 *   related to the status of order items.
 * @property {ProductsDataUpdates[]} [products] - A list of updates related to
 *   the properties of products or bags.
 * @property {EntitiesDataUpdates[]} [entities] - A list of updates related to
 *   the properties of any relevant entities.
 * @property {OrderDataUpdates[]} [order]
 */

/**
 * @typedef ShipmentsRequestSchema
 * @property {string} identifier - Unique identifier for the shipment.
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products] - A list of products or bags that need to
 *   be updated as part of the shipment status change.
 * @property {DataUpdates} [data_updates]
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
 * @property {string} [status] - The new status to be assigned to the shipment(s).
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
 * @typedef LockStateMessage
 * @property {string} [state] - The state for which the custom lock message applies.
 * @property {string} [message] - Custom lock message used when the shipment is
 *   locked in the specified state.
 */

/**
 * @typedef CreateOrderConfig
 * @property {DPConfiguration} dp_configuration
 * @property {boolean} [location_reassignment] - Flag denotes if the location
 *   for the store needs to be reassigned post cancellation. If true,location
 *   for the store gets auto reassigned post cancellation, if set false location
 *   reassignment will not be performed as its disabled.
 * @property {PaymentConfig} [payment]
 * @property {boolean} [optimal_shipment_creation] - Denotes the shipment
 *   breaking strategy. If the flag is set true, the shipment is created using
 *   optimal shipment creation strategy based on the servicability & packaging
 *   dimensions by OMS .If false, shipment details, including location_id, must
 *   be passed to FDK for processing.
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
 * @property {string} fynd_order_id - A string that represents the unique
 *   identifier assigned to the order.
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
 * @property {string} [dislay_name] - Display name of the reason for better user
 *   understanding.
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
 * @property {string} [ordering_channel]
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
 * @property {LineItem[]} line_items - An array of LineItem objects that
 *   represent the items included in the shipment.
 * @property {string} [external_shipment_id] - External shipment identifier or
 *   marketplace's unique shipment identifier.
 * @property {ProcessingDates} [processing_dates]
 * @property {Object} [meta] - Meta data of the shipment contains additional,
 *   potentially dynamic information about the shipment.
 * @property {number} [priority] - An integer indicating the priority level of
 *   the shipment.
 * @property {number} [location_id] - Location Identifier or Store/Fulfillment
 *   Identifier of the shipment- This field is mandatory when
 *   optimal_shipment_creation flag is set to false, indicating that shipments
 *   must be associated with a specific location. When
 *   `optimal_shipment_creation` is true, the optimal location for order
 *   creation would be assigned, location_id becomes optional.
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
 *   - "Digital": This order type likely refers to orders that involve digital goods
 *       or services, such as software, digital subscriptions, e-books, online
 *       courses, or any other item that can be delivered electronically.
 *
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
 * @property {string} [alternate_mobile_number] - A string for an alternate
 *   mobile number to reach the customer, providing an additional contact method.
 * @property {string} [state] - A string representing the name of the state for
 *   shipping purposes.
 * @property {string} [customer_code] - A string representing the customer's
 *   unique identifier in the seller's system.
 * @property {string} [shipping_type] - Specifies the method or service used for
 *   the shipping of the shipment.
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
 * @property {string} [country_code] - Uniquely identifies the country
 *   associated with the shipping address. This code is essential for
 *   international shipments, ensuring accurate routing and delivery across
 *   global postal and customs services. Examples include 'US' for the United
 *   States, 'IN' for India.
 * @property {string} [country_iso_code] - Specifies the country's unique
 *   identifier ollowing the ISO 3166-1 alpha-2 standard. This two-letter code
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
 * @property {string} [area] - A string representing the area of the customer's location.
 * @property {string} [address1] - A string representing the first line of the address.
 * @property {string} [pincode] - A string representing the pincode of the
 *   customer's location.
 * @property {string} [primary_email] - A string representing the primary email
 *   address for the customer.
 * @property {string} [address2] - A string representing the second line of the address.
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
 * @property {Shipment[]} shipments - List of Shipments which includes shipment
 *   data like shipment items, shipment promise, Shipment type, shipment order
 *   type, shipment dp options etc.
 * @property {ShippingInfo} shipping_info
 * @property {ShippingInfo} billing_info
 * @property {Object} [currency_info] - This object can accommodate a range of
 *   currency-related information, provides a flexible structure for storing
 *   comprehensive details about the currency or currencies involved in a transaction.
 * @property {string} [external_order_id] - A unique identifier for the order
 *   assigned by an external system.
 * @property {Charge[]} [charges] - An array of charge objects that detail the
 *   various fees associated with the order.
 * @property {string} [external_creation_date] - A string that specifies the
 *   date and time when the order was created in an external system
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
 *       from being packed to arriving at the customer’s address.
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
 * @property {Object} meta - Meta object of the reason. This contains any
 *   additional metadata that might be relevant to the reason.
 * @property {boolean} is_active - Indicates whether the reason is currently
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
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
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
 * @property {string} [meta] - Additional metadata related to the user.
 * @property {boolean} [is_anonymous_user] - Indicates whether the user is an
 *   anonymous user (true) or registered (false).
 * @property {string} [name] - A full name of the user, which may be a
 *   combination of first and last name.
 * @property {string} [gender] - The gender of the user.
 * @property {string} [country_phone_code] - The country-specific phone code,
 *   useful for formatting mobile numbers correctly.
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
 * @property {string} [delivery_address_id] - A unique identifier for the
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
 * @property {Object} [child_details] - Contains a flexible set of key-value
 *   pairs representing detailed information about the article's child entities,
 *   including dimensions (width, height, length), weight, and unique
 *   identifiers (EAN, article code, seller identifier) for each child entity.
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
 *   order was created.
 * @property {ShipmentStatus} [shipment_status]
 * @property {UserDataInfo} [user]
 * @property {string} [estimated_sla_time] - The estimated Service Level
 *   Agreement (SLA) time for the shipment.
 * @property {string} [estimated_sla_ts] - The timestamp for the estimated SLA,
 *   providing a specific time for expected delivery.
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
 * @property {string} [ordering_channnel] - The channel used for ordering the shipment.
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
 *   the order was placed
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
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [identifiers] - Details of Identifiers associated with the article.
 * @property {ReturnConfig} [return_config]
 * @property {string} [uid] - A unique identifier for the article within the order bag.
 * @property {string} [size] - The size of the article, which may be relevant
 *   for clothing.
 * @property {string[]} [tags] - An array of tags associated with the article.
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
 *   sale are included with the purchase.
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
 * @typedef PlatformShipment
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
 * @typedef CurrencySchema
 * @property {string} [currency_code] - The ISO 4217 currency code, such as
 *   'INR' for Indian Rupee. This field represents the standardized three-letter
 *   code of a currency.
 * @property {string} [currency_symbol] - The symbol representing the currency,
 *   such as '₹' for Indian Rupee. This is used for display purposes alongside
 *   currency amounts.
 */

/**
 * @typedef OrderData
 * @property {string} [ordering_channel] - The specific channel through which
 *   the order was placed.
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

class OrderPlatformModel {
  /** @returns {InvalidateShipmentCachePayload} */
  static InvalidateShipmentCachePayload() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")),
      affiliate_bag_ids: Joi.array().items(Joi.string().allow("")),
      bag_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {InvalidateShipmentCacheNestedResponseSchema} */
  static InvalidateShipmentCacheNestedResponseSchema() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),
      status: Joi.number(),
      message: Joi.string().allow(""),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {InvalidateShipmentCacheResponseSchema} */
  static InvalidateShipmentCacheResponseSchema() {
    return Joi.object({
      response: Joi.array().items(
        OrderPlatformModel.InvalidateShipmentCacheNestedResponseSchema()
      ),
    });
  }

  /** @returns {UpdatePackingErrorResponseSchema} */
  static UpdatePackingErrorResponseSchema() {
    return Joi.object({
      status: Joi.number().allow(null),
      error: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ErrorResponseSchema} */
  static ErrorResponseSchema() {
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

  /** @returns {StoreReassignResponseSchema} */
  static StoreReassignResponseSchema() {
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

  /** @returns {CheckResponseSchema} */
  static CheckResponseSchema() {
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

  /** @returns {UpdateShipmentLockResponseSchema} */
  static UpdateShipmentLockResponseSchema() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      check_response: Joi.array().items(
        OrderPlatformModel.CheckResponseSchema()
      ),
    });
  }

  /** @returns {AnnouncementResponseSchema} */
  static AnnouncementResponseSchema() {
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

  /** @returns {AnnouncementsResponseSchema} */
  static AnnouncementsResponseSchema() {
    return Joi.object({
      announcements: Joi.array().items(
        OrderPlatformModel.AnnouncementResponseSchema()
      ),
      success: Joi.boolean(),
      status: Joi.number(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {BaseResponseSchema} */
  static BaseResponseSchema() {
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
      data: Joi.object().pattern(/\S/, Joi.any()),
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
      filters: Joi.array().items(
        OrderPlatformModel.ProductsDataUpdatesFilters()
      ),
      data: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {EntitiesDataUpdates} */
  static EntitiesDataUpdates() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),
      data: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {OrderDataUpdates} */
  static OrderDataUpdates() {
    return Joi.object({
      data: Joi.object().pattern(/\S/, Joi.any()),
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
      order: Joi.array().items(OrderPlatformModel.OrderDataUpdates()),
    });
  }

  /** @returns {ShipmentsRequestSchema} */
  static ShipmentsRequestSchema() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),
      reasons: OrderPlatformModel.ReasonsData(),
      products: Joi.array().items(OrderPlatformModel.Products()),
      data_updates: OrderPlatformModel.DataUpdates(),
    });
  }

  /** @returns {UpdatedAddressSchema} */
  static UpdatedAddressSchema() {
    return Joi.object({
      address: Joi.string().allow(""),
      area: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      email: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_iso_code: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }

  /** @returns {UpdateAddressRequestBody} */
  static UpdateAddressRequestBody() {
    return Joi.object({
      updated_address: OrderPlatformModel.UpdatedAddressSchema(),
      address_type: Joi.string().allow(""),
      address_category: Joi.string().allow(""),
    });
  }

  /** @returns {StatuesRequestSchema} */
  static StatuesRequestSchema() {
    return Joi.object({
      status: Joi.string().allow(""),
      shipments: Joi.array().items(OrderPlatformModel.ShipmentsRequestSchema()),
      exclude_bags_next_state: Joi.string().allow(""),
      split_shipment: Joi.boolean(),
    });
  }

  /** @returns {UpdateShipmentStatusRequestSchema} */
  static UpdateShipmentStatusRequestSchema() {
    return Joi.object({
      force_transition: Joi.boolean(),
      statuses: Joi.array().items(OrderPlatformModel.StatuesRequestSchema()),
      lock_after_transition: Joi.boolean(),
      unlock_before_transition: Joi.boolean(),
      task: Joi.boolean(),
      resume_tasks_after_unlock: Joi.boolean(),
    });
  }

  /** @returns {ShipmentsResponseSchema} */
  static ShipmentsResponseSchema() {
    return Joi.object({
      status: Joi.number().allow(null),
      final_state: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      identifier: Joi.string().allow("").allow(null),
      stack_trace: Joi.string().allow("").allow(null),
      code: Joi.string().allow("").allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      message: Joi.string().allow("").allow(null),
      exception: Joi.string().allow("").allow(null),
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

  /** @returns {LockStateMessage} */
  static LockStateMessage() {
    return Joi.object({
      state: Joi.string().allow(""),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CreateOrderConfig} */
  static CreateOrderConfig() {
    return Joi.object({
      dp_configuration: OrderPlatformModel.DPConfiguration().required(),
      location_reassignment: Joi.boolean(),
      payment: OrderPlatformModel.PaymentConfig(),
      optimal_shipment_creation: Joi.boolean(),
      lock_state_messages: Joi.array().items(
        OrderPlatformModel.LockStateMessage()
      ),
      integration_type: Joi.string().allow(""),
    });
  }

  /** @returns {StatuesResponseSchema} */
  static StatuesResponseSchema() {
    return Joi.object({
      shipments: Joi.array().items(
        OrderPlatformModel.ShipmentsResponseSchema()
      ),
    });
  }

  /** @returns {UpdateShipmentStatusResponseBody} */
  static UpdateShipmentStatusResponseBody() {
    return Joi.object({
      statuses: Joi.array().items(OrderPlatformModel.StatuesResponseSchema()),
    });
  }

  /** @returns {OrderUser} */
  static OrderUser() {
    return Joi.object({
      phone: Joi.number().required(),
      last_name: Joi.string().allow("").required(),
      address1: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      first_name: Joi.string().allow("").required(),
      mobile: Joi.number().required(),
      address2: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
    });
  }

  /** @returns {OrderPriority} */
  static OrderPriority() {
    return Joi.object({
      fulfilment_priority_text: Joi.string().allow(""),
      affiliate_priority_code: Joi.string().allow("").allow(null),
      fulfilment_priority: Joi.number().allow(null),
    });
  }

  /** @returns {ArticleDetails} */
  static ArticleDetails() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      brand_id: Joi.number().required(),
      dimension: Joi.object().pattern(/\S/, Joi.any()).required(),
      category: Joi.object().pattern(/\S/, Joi.any()).required(),
      weight: Joi.object().pattern(/\S/, Joi.any()).required(),
      attributes: Joi.object().pattern(/\S/, Joi.any()).required(),
      quantity: Joi.number().required(),
    });
  }

  /** @returns {LocationDetails} */
  static LocationDetails() {
    return Joi.object({
      fulfillment_type: Joi.string().allow("").required(),
      articles: Joi.array()
        .items(OrderPlatformModel.ArticleDetails())
        .required(),
      fulfillment_id: Joi.number().required(),
    });
  }

  /** @returns {ShipmentDetails} */
  static ShipmentDetails() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),
      shipments: Joi.number().required(),
      fulfillment_id: Joi.number().required(),
      articles: Joi.array()
        .items(OrderPlatformModel.ArticleDetails())
        .required(),
      dp_id: Joi.string().allow("").allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      affiliate_shipment_id: Joi.string().allow("").required(),
      dp_options: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      lock_status: Joi.boolean().allow(null),
      action_to_status: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
    }).allow(null);
  }

  /** @returns {ShipmentConfig} */
  static ShipmentConfig() {
    return Joi.object({
      location_details: OrderPlatformModel.LocationDetails(),
      source: Joi.string().allow("").required(),
      to_pincode: Joi.string().allow("").required(),
      shipment: Joi.array()
        .items(OrderPlatformModel.ShipmentDetails())
        .required(),
      identifier: Joi.string().allow("").required(),
      payment_mode: Joi.string().allow("").required(),
      action: Joi.string().allow("").required(),
      journey: Joi.string().allow("").required(),
    });
  }

  /** @returns {ShipmentData} */
  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderPlatformModel.ShipmentConfig().required(),
    });
  }

  /** @returns {MarketPlacePdf} */
  static MarketPlacePdf() {
    return Joi.object({
      invoice: Joi.string().allow("").allow(null),
      label: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {AffiliateBag} */
  static AffiliateBag() {
    return Joi.object({
      pdf_links: OrderPlatformModel.MarketPlacePdf(),
      store_id: Joi.number().required(),
      sku: Joi.string().allow("").required(),
      discount: Joi.number().required(),
      unit_price: Joi.number().required(),
      price_effective: Joi.number().required(),
      affiliate_store_id: Joi.string().allow("").required(),
      identifier: Joi.object().pattern(/\S/, Joi.any()).required(),
      seller_identifier: Joi.string().allow("").required(),
      item_size: Joi.string().allow("").required(),
      amount_paid: Joi.number().required(),
      fynd_store_id: Joi.string().allow("").required(),
      item_id: Joi.number().required(),
      delivery_charge: Joi.number().required(),
      avl_qty: Joi.number().required(),
      price_marked: Joi.number().required(),
      quantity: Joi.number().required(),
      company_id: Joi.number().required(),
      hsn_code_id: Joi.string().allow("").required(),
      _id: Joi.string().allow("").required(),
      affiliate_meta: Joi.object().pattern(/\S/, Joi.any()).required(),
      modified_on: Joi.string().allow("").required(),
      transfer_price: Joi.number().required(),
    });
  }

  /** @returns {UserData} */
  static UserData() {
    return Joi.object({
      shipping_user: OrderPlatformModel.OrderUser(),
      billing_user: OrderPlatformModel.OrderUser(),
    });
  }

  /** @returns {OrderInfo} */
  static OrderInfo() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),
      cod_charges: Joi.number().required(),
      items: Joi.object().pattern(/\S/, Joi.any()).required(),
      discount: Joi.number().required(),
      billing_address: OrderPlatformModel.OrderUser().required(),
      payment: Joi.object().pattern(/\S/, Joi.any()),
      order_priority: OrderPlatformModel.OrderPriority(),
      shipment: OrderPlatformModel.ShipmentData(),
      delivery_charges: Joi.number().required(),
      shipping_address: OrderPlatformModel.OrderUser().required(),
      order_value: Joi.number().required(),
      payment_mode: Joi.string().allow("").required(),
      bags: Joi.array().items(OrderPlatformModel.AffiliateBag()).required(),
      user: OrderPlatformModel.UserData().required(),
      coupon: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {AffiliateAppConfigMeta} */
  static AffiliateAppConfigMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {AffiliateAppConfig} */
  static AffiliateAppConfig() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      description: Joi.string().allow(""),
      updated_at: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      token: Joi.string().allow("").required(),
      meta: Joi.array().items(OrderPlatformModel.AffiliateAppConfigMeta()),
      owner: Joi.string().allow("").required(),
      secret: Joi.string().allow("").required(),
      created_at: Joi.string().allow("").required(),
    });
  }

  /** @returns {AffiliateInventoryArticleAssignmentConfig} */
  static AffiliateInventoryArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
    });
  }

  /** @returns {AffiliateInventoryPaymentConfig} */
  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),
      mode_of_payment: Joi.string().allow(""),
    });
  }

  /** @returns {AffiliateInventoryStoreConfig} */
  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {AffiliateInventoryOrderConfig} */
  static AffiliateInventoryOrderConfig() {
    return Joi.object({
      force_reassignment: Joi.boolean(),
    });
  }

  /** @returns {AffiliateInventoryLogisticsConfig} */
  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
    });
  }

  /** @returns {AffiliateInventoryConfig} */
  static AffiliateInventoryConfig() {
    return Joi.object({
      article_assignment: OrderPlatformModel.AffiliateInventoryArticleAssignmentConfig(),
      payment: OrderPlatformModel.AffiliateInventoryPaymentConfig(),
      inventory: OrderPlatformModel.AffiliateInventoryStoreConfig(),
      order: OrderPlatformModel.AffiliateInventoryOrderConfig(),
      logistics: OrderPlatformModel.AffiliateInventoryLogisticsConfig(),
    });
  }

  /** @returns {AffiliateConfig} */
  static AffiliateConfig() {
    return Joi.object({
      app: OrderPlatformModel.AffiliateAppConfig(),
      inventory: OrderPlatformModel.AffiliateInventoryConfig(),
      app_company_id: Joi.number().allow(null),
    });
  }

  /** @returns {Affiliate} */
  static Affiliate() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      config: OrderPlatformModel.AffiliateConfig(),
      token: Joi.string().allow("").required(),
    });
  }

  /** @returns {AffiliateStoreIdMapping} */
  static AffiliateStoreIdMapping() {
    return Joi.object({
      store_id: Joi.number().required(),
      marketplace_store_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {OrderConfig} */
  static OrderConfig() {
    return Joi.object({
      create_user: Joi.boolean(),
      article_lookup: Joi.string().allow(""),
      bag_end_state: Joi.string().allow(""),
      affiliate: OrderPlatformModel.Affiliate().required(),
      store_lookup: Joi.string().allow(""),
      affiliate_store_id_mapping: Joi.array()
        .items(OrderPlatformModel.AffiliateStoreIdMapping())
        .required(),
    });
  }

  /** @returns {CreateOrderResponseSchema} */
  static CreateOrderResponseSchema() {
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

  /** @returns {SuccessResponseSchema} */
  static SuccessResponseSchema() {
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

  /** @returns {GetActionsResponseSchema} */
  static GetActionsResponseSchema() {
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

  /** @returns {RefundInformation} */
  static RefundInformation() {
    return Joi.object({
      mode: Joi.string().allow(""),
      amount: Joi.number(),
      merchant_transaction_id: Joi.string().allow(""),
      refund_status: Joi.string().allow(""),
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
      prev_store_name: Joi.string().allow("").allow(null),
      prev_store_code: Joi.string().allow("").allow(null),
      prev_store_id: Joi.string().allow("").allow(null),
      refund_to: Joi.string().allow("").allow(null),
      refund_information: Joi.array().items(
        OrderPlatformModel.RefundInformation()
      ),
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
      activity_type: Joi.string().allow("").required(),
      l2_detail: Joi.string().allow(""),
      assigned_agent: Joi.string().allow(""),
      meta: OrderPlatformModel.HistoryMeta(),
      l1_detail: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      user: Joi.string().allow("").required(),
    });
  }

  /** @returns {ShipmentHistoryResponseSchema} */
  static ShipmentHistoryResponseSchema() {
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
      shipment_id: Joi.string().allow("").required(),
      phone_number: Joi.string().allow("").required(),
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
      headers: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      coupon_value: Joi.number().allow(null),
      order_value: Joi.number(),
      created_time: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      total_order_value: Joi.number(),
      ordering_channel: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      cod_charges: Joi.number().allow(null),
      cashback_value: Joi.number().allow(null),
      refund_by: Joi.string().allow(""),
      affiliate_order_date: Joi.string().allow("").allow(null),
      payment_methods: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      charges: Joi.array().items(OrderPlatformModel.PriceAdjustmentCharge()),
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

  /** @returns {SendSmsResponseSchema} */
  static SendSmsResponseSchema() {
    return Joi.object({
      success: Joi.boolean().required(),
      message: Joi.string().allow("").required(),
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

  /** @returns {UpdatePackagingDimensionsResponseSchema} */
  static UpdatePackagingDimensionsResponseSchema() {
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
      amount: Joi.object().pattern(/\S/, Joi.any()).required(),
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
      custom_message: Joi.string().allow(""),
      quantity: Joi.number(),
      seller_identifier: Joi.string().allow("").required(),
      external_line_id: Joi.string().allow(""),
    });
  }

  /** @returns {ProcessingDates} */
  static ProcessingDates() {
    return Joi.object({
      dp_pickup_slot: Joi.object().pattern(/\S/, Joi.any()),
      dispatch_after_date: Joi.string().allow(""),
      dispatch_by_date: Joi.string().allow(""),
      confirm_by_date: Joi.string().allow(""),
      customer_pickup_slot: Joi.object().pattern(/\S/, Joi.any()),
      pack_by_date: Joi.string().allow(""),
    });
  }

  /** @returns {Tag} */
  static Tag() {
    return Joi.object({
      slug: Joi.string().allow(""),
      display_text: Joi.string().allow(""),
    });
  }

  /** @returns {ProcessAfterConfig} */
  static ProcessAfterConfig() {
    return Joi.object({
      is_scheduled_shipment: Joi.boolean(),
      enable_processing_after: Joi.string().allow(""),
    });
  }

  /** @returns {SystemMessages} */
  static SystemMessages() {
    return Joi.object({
      message_type: Joi.string().allow("").required(),
      priority: Joi.number().required(),
      message: Joi.string().allow("").required(),
      inject_at: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Shipment} */
  static Shipment() {
    return Joi.object({
      line_items: Joi.array().items(OrderPlatformModel.LineItem()).required(),
      external_shipment_id: Joi.string().allow(""),
      processing_dates: OrderPlatformModel.ProcessingDates(),
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      priority: Joi.number(),
      location_id: Joi.number(),
      order_type: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      system_messages: Joi.array().items(OrderPlatformModel.SystemMessages()),
      process_after_config: OrderPlatformModel.ProcessAfterConfig(),
      parent_type: Joi.string().allow("").allow(null),
      store_invoice_id: Joi.string().allow("").allow(null),
      lock_status: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
      billing_address_json: OrderPlatformModel.Address(),
      id: Joi.string().allow(""),
      fulfilment_priority: Joi.number().allow(null),
      is_active: Joi.boolean(),
      previous_shipment_id: Joi.string().allow("").allow(null),
      pdf_links: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      delivery_address_json: OrderPlatformModel.Address(),
      eway_bill_id: Joi.string().allow("").allow(null),
      affiliate_shipment_id: Joi.string().allow("").allow(null),
      fynd_order_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      delivery_awb_number: Joi.string().allow("").allow(null),
      hand_over_contact_json: OrderPlatformModel.Address(),
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

  /** @returns {BillingInfo} */
  static BillingInfo() {
    return Joi.object({
      alternate_mobile_number: Joi.string().allow(""),
      state: Joi.string().allow(""),
      customer_code: Joi.string().allow(""),
      middle_name: Joi.string().allow(""),
      primary_mobile_number: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      house_no: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      title: Joi.string().allow(""),
      country: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      city: Joi.string().allow(""),
      external_customer_code: Joi.string().allow(""),
      floor_no: Joi.string().allow(""),
      alternate_email: Joi.string().allow(""),
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
      transaction_data: Joi.object().pattern(/\S/, Joi.any()),
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
      currency_info: Joi.object().pattern(/\S/, Joi.any()),
      external_order_id: Joi.string().allow(""),
      charges: Joi.array().items(OrderPlatformModel.Charge()),
      external_creation_date: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      tax_info: OrderPlatformModel.TaxInfo(),
      config: OrderPlatformModel.CreateOrderConfig().required(),
      payment_info: OrderPlatformModel.PaymentInfo().required(),
      user_info: OrderPlatformModel.UserInfo(),
      ordering_store_id: Joi.number(),
      order_platform: Joi.string().allow(""),
      status: Joi.string().allow(""),
      system_messages: Joi.array().items(OrderPlatformModel.SystemMessages()),
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

  /** @returns {PaymentMethods} */
  static PaymentMethods() {
    return Joi.object({
      collect_by: Joi.string().allow(""),
      refund_by: Joi.string().allow(""),
      mode: Joi.string().allow(""),
    });
  }

  /** @returns {CreateChannelPaymentInfo} */
  static CreateChannelPaymentInfo() {
    return Joi.object({
      source: Joi.string().allow(""),
      payment_methods: Joi.array().items(OrderPlatformModel.PaymentMethods()),
      mode_of_payment: Joi.string().allow(""),
    });
  }

  /** @returns {CreateChannelConfig} */
  static CreateChannelConfig() {
    return Joi.object({
      dp_configuration: OrderPlatformModel.DPConfiguration(),
      shipment_assignment: Joi.string().allow(""),
      location_reassignment: Joi.boolean(),
      logo_url: Joi.object().pattern(/\S/, Joi.any()),
      payment_info: OrderPlatformModel.CreateChannelPaymentInfo(),
      lock_states: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CreateChannelConfigData} */
  static CreateChannelConfigData() {
    return Joi.object({
      config_data: OrderPlatformModel.CreateChannelConfig(),
    });
  }

  /** @returns {CreateChannelConifgErrorResponseSchema} */
  static CreateChannelConifgErrorResponseSchema() {
    return Joi.object({
      error: Joi.string().allow(""),
      request_id: Joi.string().allow("").allow(null),
      status: Joi.number().required(),
      info: Joi.any(),
      stack_trace: Joi.string().allow("").allow(null),
      code: Joi.string().allow("").allow(null),
      meta: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").required(),
      exception: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {UploadManifestConsent} */
  static UploadManifestConsent() {
    return Joi.object({
      consent_url: Joi.string().allow("").required(),
      manifest_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreateChannelConfigResponseSchema} */
  static CreateChannelConfigResponseSchema() {
    return Joi.object({
      is_inserted: Joi.boolean(),
      is_upserted: Joi.boolean(),
      acknowledged: Joi.boolean(),
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
      start_date: Joi.string().allow("").required(),
      end_date: Joi.string().allow("").required(),
      mobile: Joi.number().required(),
    });
  }

  /** @returns {BagStateTransitionMap} */
  static BagStateTransitionMap() {
    return Joi.object({
      fynd: Joi.object().pattern(/\S/, Joi.any()),
      affiliate: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {RoleBaseStateTransitionMapping} */
  static RoleBaseStateTransitionMapping() {
    return Joi.object({
      success: Joi.boolean(),
      next_statuses: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {FetchCreditBalanceRequestPayload} */
  static FetchCreditBalanceRequestPayload() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").required(),
      seller_id: Joi.string().allow("").required(),
      customer_mobile_number: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreditBalanceInfo} */
  static CreditBalanceInfo() {
    return Joi.object({
      total_credited_balance: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      customer_mobile_number: Joi.string().allow(""),
    });
  }

  /** @returns {FetchCreditBalanceResponsePayload} */
  static FetchCreditBalanceResponsePayload() {
    return Joi.object({
      success: Joi.boolean().required(),
      data: OrderPlatformModel.CreditBalanceInfo().required(),
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

  /** @returns {AttachOrderUserResponseSchema} */
  static AttachOrderUserResponseSchema() {
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

  /** @returns {SendUserMobileOtpResponseSchema} */
  static SendUserMobileOtpResponseSchema() {
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

  /** @returns {VerifyOtpResponseSchema} */
  static VerifyOtpResponseSchema() {
    return Joi.object({
      status: Joi.number(),
      success: Joi.boolean(),
      message: Joi.string().allow(""),
      data: OrderPlatformModel.VerifyOtpResponseData(),
    });
  }

  /** @returns {BulkReportsDownloadRequestSchema} */
  static BulkReportsDownloadRequestSchema() {
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
      custom_filters_for_lane: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {BulkReportsDownloadResponseSchema} */
  static BulkReportsDownloadResponseSchema() {
    return Joi.object({
      success: Joi.boolean(),
      batch_id: Joi.string().allow(""),
    });
  }

  /** @returns {APIFailedResponseSchema} */
  static APIFailedResponseSchema() {
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

  /** @returns {BulkStateTransistionResponseSchema} */
  static BulkStateTransistionResponseSchema() {
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
      failed_invoiced_shipments: Joi.object().pattern(/\S/, Joi.any()),
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
      invoice_document_type: Joi.string().allow(""),
      label_document_type: Joi.string().allow(""),
      file_name: Joi.string().allow(""),
      store_name: Joi.string().allow(""),
      updated_ts: Joi.number(),
      status: Joi.string().allow(""),
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

  /** @returns {BulkListingResponseSchema} */
  static BulkListingResponseSchema() {
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

  /** @returns {JobDetailsResponseSchema} */
  static JobDetailsResponseSchema() {
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

  /** @returns {JobFailedResponseSchema} */
  static JobFailedResponseSchema() {
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

  /** @returns {FiltersRequestSchema} */
  static FiltersRequestSchema() {
    return Joi.object({
      date_range: OrderPlatformModel.DateRange(),
      logo: Joi.string().allow(""),
      stores: Joi.number().required(),
      dp_name: Joi.string().allow("").required(),
      dp_ids: Joi.number().required(),
      lane: Joi.string().allow("").required(),
      store_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {ProcessManifest} */
  static ProcessManifest() {
    return Joi.object({
      filters: OrderPlatformModel.FiltersRequestSchema().required(),
      action: Joi.string().allow("").required(),
      unique_id: Joi.string().allow("").required(),
      manifest_id: Joi.string().allow(""),
    });
  }

  /** @returns {ProcessManifestResponseSchema} */
  static ProcessManifestResponseSchema() {
    return Joi.object({
      company_id: Joi.number(),
      filters: OrderPlatformModel.Filters(),
      user_id: Joi.string().allow(""),
      manifest_id: Joi.string().allow(""),
      action: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
    });
  }

  /** @returns {ProcessManifestItemResponseSchema} */
  static ProcessManifestItemResponseSchema() {
    return Joi.object({
      items: OrderPlatformModel.ProcessManifestResponseSchema(),
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

  /** @returns {ManifestFiltersResponseSchema} */
  static ManifestFiltersResponseSchema() {
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
      item_total: Joi.number().required(),
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

  /** @returns {EInvoiceRetryResponseSchema} */
  static EInvoiceRetryResponseSchema() {
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

  /** @returns {EInvoiceErrorResponseSchema} */
  static EInvoiceErrorResponseSchema() {
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
      operational_status: Joi.string().allow("").required(),
      promised_delivery_date: Joi.string().allow("").allow(null),
      remark: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CourierPartnerTrackingResponseSchema} */
  static CourierPartnerTrackingResponseSchema() {
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
      error_message: Joi.string().allow("").required(),
      display_message: Joi.string().allow("").required(),
      method_name: Joi.string().allow("").required(),
      meta: Joi.object().pattern(/\S/, Joi.any()).required(),
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
      error_trace: Joi.string().allow("").required(),
      exception: Joi.string().allow("").required(),
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

  /** @returns {GenerateInvoiceIDResponseSchema} */
  static GenerateInvoiceIDResponseSchema() {
    return Joi.object({
      items: Joi.array().items(
        OrderPlatformModel.GenerateInvoiceIDResponseData()
      ),
    });
  }

  /** @returns {GenerateInvoiceIDErrorResponseSchema} */
  static GenerateInvoiceIDErrorResponseSchema() {
    return Joi.object({
      items: Joi.array().items(
        OrderPlatformModel.GenerateInvoiceIDErrorResponseData()
      ),
    });
  }

  /** @returns {ManifestResponseSchema} */
  static ManifestResponseSchema() {
    return Joi.object({
      items: OrderPlatformModel.ManifestItems(),
    });
  }

  /** @returns {ProcessManifestRequestSchema} */
  static ProcessManifestRequestSchema() {
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

  /** @returns {ManifestErrorResponseSchema} */
  static ManifestErrorResponseSchema() {
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

  /** @returns {ConfigUpdatedResponseSchema} */
  static ConfigUpdatedResponseSchema() {
    return Joi.object({
      data: Joi.array().items(OrderPlatformModel.ConfigData()).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {FlagData} */
  static FlagData() {
    return Joi.object({
      filter: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {RuleListRequestSchema} */
  static RuleListRequestSchema() {
    return Joi.object({
      page_no: Joi.number(),
      channel: Joi.array().items(Joi.string().allow("")),
      department: Joi.array().items(Joi.string().allow("")),
      id: Joi.array().items(Joi.string().allow("")),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {RuleErrorResponseSchema} */
  static RuleErrorResponseSchema() {
    return Joi.object({
      success: Joi.boolean(),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {RMAPageInfo} */
  static RMAPageInfo() {
    return Joi.object({
      type: Joi.string().allow(""),
      current: Joi.number(),
      size: Joi.number(),
      item_total: Joi.number(),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
    });
  }

  /** @returns {RuleAction} */
  static RuleAction() {
    return Joi.object({
      reasons: Joi.array().items(OrderPlatformModel.Reason()),
    });
  }

  /** @returns {QuestionSetItem} */
  static QuestionSetItem() {
    return Joi.object({
      id: Joi.number().required(),
      display_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {Reason} */
  static Reason() {
    return Joi.object({
      id: Joi.number(),
      display_name: Joi.string().allow("").required(),
      reasons: Joi.array().items(Joi.link("#Reason")),
      qc_type: Joi.array().items(Joi.string().allow("")).required(),
      question_set: Joi.array()
        .items(OrderPlatformModel.QuestionSet())
        .required(),
      meta: Joi.object().pattern(/\S/, Joi.any()).required(),
      is_active: Joi.boolean().required(),
    }).id("Reason");
  }

  /** @returns {Conditions} */
  static Conditions() {
    return Joi.object({
      department: Joi.string().allow(""),
      l3: Joi.string().allow(""),
    });
  }

  /** @returns {RuleItem} */
  static RuleItem() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      entity_type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
      channel: Joi.string().allow("").required(),
      actions: OrderPlatformModel.RuleAction().required(),
      qc_enabled: Joi.boolean().required(),
      is_deleted: Joi.boolean().required(),
      conditions: OrderPlatformModel.Conditions().required(),
      meta: Joi.object().pattern(/\S/, Joi.any()).required(),
      rule_type: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
    });
  }

  /** @returns {RuleError} */
  static RuleError() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {RuleListResponseSchema} */
  static RuleListResponseSchema() {
    return Joi.object({
      page: OrderPlatformModel.RMAPageInfo(),
      items: Joi.array().items(OrderPlatformModel.RuleItem()),
      success: Joi.boolean(),
      error: OrderPlatformModel.RuleError(),
    });
  }

  /** @returns {UpdateShipmentPaymentMode} */
  static UpdateShipmentPaymentMode() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),
      products: Joi.array().items(OrderPlatformModel.ProductSchema()),
      payment_methods: Joi.array().items(
        OrderPlatformModel.PaymentMethodSchema()
      ),
    });
  }

  /** @returns {CommonErrorResponseSchema} */
  static CommonErrorResponseSchema() {
    return Joi.object({
      status: Joi.number(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ExceptionErrorResponseSchema} */
  static ExceptionErrorResponseSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      stack_trace: Joi.string().allow(""),
    });
  }

  /** @returns {ProductSchema} */
  static ProductSchema() {
    return Joi.object({
      line_number: Joi.number().required(),
      payment_methods: Joi.array()
        .items(OrderPlatformModel.PaymentMethodSchema())
        .required(),
    });
  }

  /** @returns {PaymentMethodSchema} */
  static PaymentMethodSchema() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      mode: Joi.string().allow("").required(),
      amount: Joi.number().required(),
      meta: OrderPlatformModel.PaymentMetaDataSchema(),
      identifier: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
      aggregator: Joi.string().allow("").required(),
      action: OrderPlatformModel.ActionDetailSchema().required(),
      refund_by: Joi.string().allow("").required(),
      collect_by: Joi.string().allow("").required(),
    });
  }

  /** @returns {ActionDetailSchema} */
  static ActionDetailSchema() {
    return Joi.object({
      name: Joi.any().required(),
      current_mode: Joi.string().allow("").required(),
      current_identifier: Joi.string().allow("").required(),
      refund_to: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentMetaDataSchema} */
  static PaymentMetaDataSchema() {
    return Joi.object({
      payment_gateway: Joi.string().allow(""),
      payment_identifier: Joi.string().allow(""),
      logo_url: OrderPlatformModel.PaymentMetaLogoURLSchema(),
    });
  }

  /** @returns {PaymentMetaLogoURLSchema} */
  static PaymentMetaLogoURLSchema() {
    return Joi.object({
      large: Joi.string().allow("").required(),
      small: Joi.string().allow("").required(),
    });
  }

  /** @returns {ValidationError} */
  static ValidationError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      field: Joi.string().allow("").required(),
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
      rule_id: Joi.number().allow(null),
    });
  }

  /** @returns {ShipmentStatus} */
  static ShipmentStatus() {
    return Joi.object({
      current_shipment_status: Joi.string().allow("").allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      id: Joi.number().allow(null),
      bag_list: Joi.array().items(Joi.string().allow("")).allow(null, ""),
      title: Joi.string().allow("").required(),
      display_name: Joi.string().allow(""),
      created_at: Joi.string().allow("").allow(null),
      created_ts: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").allow(null),
      status_created_at: Joi.string().allow("").allow(null),
      updated_ts: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").required(),
    });
  }

  /** @returns {UserDataInfo} */
  static UserDataInfo() {
    return Joi.object({
      id: Joi.number().allow(null),
      user_oid: Joi.string().allow("").allow(null),
      mongo_user_id: Joi.string().allow("").allow(null),
      external_customer_id: Joi.string().allow("").allow(null),
      first_name: Joi.string().allow("").allow(null),
      last_name: Joi.string().allow("").allow(null),
      mobile: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      meta: Joi.string().allow("").allow(null),
      is_anonymous_user: Joi.boolean().allow(null),
      name: Joi.string().allow("").allow(null),
      gender: Joi.string().allow("").allow(null),
      country_phone_code: Joi.string().allow(""),
    });
  }

  /** @returns {Address} */
  static Address() {
    return Joi.object({
      phone: Joi.string().allow("").allow(null),
      address2: Joi.string().allow("").allow(null),
      address: Joi.string().allow("").allow(null),
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
      area_code_slug: Joi.string().allow("").allow(null),
      country_code: Joi.string().allow("").allow(null),
      country_iso_code: Joi.string().allow("").allow(null),
      country_phone_code: Joi.string().allow("").allow(null),
      delivery_address_id: Joi.string().allow(""),
      geo_location: Joi.object().pattern(/\S/, Joi.any()),
      name: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
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
      distribution: OrderPlatformModel.ChargeDistributionSchema().required(),
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
      base_currency: OrderPlatformModel.ChargeAmountCurrency().required(),
      ordering_currency: OrderPlatformModel.ChargeAmountCurrency().required(),
    });
  }

  /** @returns {PriceAdjustmentCharge} */
  static PriceAdjustmentCharge() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").required(),
      type: Joi.string().allow("").allow(null),
      amount: OrderPlatformModel.ChargeAmount().required(),
      distribution_logic: OrderPlatformModel.ChargeDistributionLogic().required(),
    });
  }

  /** @returns {OrderingCurrencyPrices} */
  static OrderingCurrencyPrices() {
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
      state_type: Joi.string().allow(""),
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
      child_details: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      seller_identifier: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
      set: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      dimensions: OrderPlatformModel.Dimensions(),
      currency: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      esp_modified: Joi.boolean().allow(null),
      return_config: OrderPlatformModel.ReturnConfig(),
      code: Joi.string().allow("").allow(null),
      weight: OrderPlatformModel.Weight(),
      _id: Joi.string().allow("").required(),
      identifiers: Joi.object().pattern(/\S/, Joi.any()).required(),
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
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      prices: OrderPlatformModel.Prices(),
      ordering_currency_prices: OrderPlatformModel.OrderingCurrencyPrices(),
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
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      rates: Joi.object().pattern(/\S/, Joi.any()),
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
      delivery_address: OrderPlatformModel.Address(),
      billing_address: OrderPlatformModel.Address(),
      affiliate_details: OrderPlatformModel.AffiliateDetails(),
      is_active: Joi.boolean(),
      channel: OrderPlatformModel.ShipmentListingChannel(),
      previous_shipment_id: Joi.string().allow("").allow(null),
      forward_end_shipment_id: Joi.string().allow("").allow(null),
      lock_status: Joi.boolean().allow(null),
      invoice_id: Joi.string().allow("").allow(null),
      payment_methods: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      ordering_currency_prices: OrderPlatformModel.OrderingCurrencyPrices(),
      order_id: Joi.string().allow("").required(),
      ordering_channnel: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").allow(null),
      customer_note: Joi.string().allow("").allow(null),
      total_bags: Joi.number().required(),
      shipment_created_at: Joi.string().allow("").required(),
      mode_of_payment: Joi.string().allow(""),
      shipment_created_ts: Joi.string().allow(""),
      currency: OrderPlatformModel.Currency(),
      currency_info: OrderPlatformModel.CurrencyInfo(),
      is_lapa_enabled: Joi.boolean(),
      logistics_meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {ShipmentInternalPlatformViewResponseSchema} */
  static ShipmentInternalPlatformViewResponseSchema() {
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
      tax_details: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      cod_charges: Joi.string().allow("").allow(null),
      source: Joi.string().allow("").allow(null),
      fynd_order_id: Joi.string().allow("").required(),
      affiliate_id: Joi.string().allow("").allow(null),
      affiliate_order_id: Joi.string().allow("").allow(null),
      ordering_channel_logo: Joi.object()
        .pattern(/\S/, Joi.any())
        .allow(null, ""),
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
      address: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      address: Joi.string().allow("").required(),
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
      credit_note: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      invoice: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      dp_options: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      assign_dp_from_sb: Joi.boolean().allow(null),
      due_date: Joi.string().allow("").allow(null),
      store_invoice_updated_date: Joi.string().allow("").allow(null),
      forward_affiliate_shipment_id: Joi.string().allow("").allow(null),
      return_store_node: Joi.number().allow(null),
      fulfilment_priority_text: Joi.string().allow("").allow(null),
      shipment_tags: Joi.array().items(OrderPlatformModel.ShipmentTags()),
      external: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      awb_number: Joi.string().allow("").allow(null),
      lock_data: OrderPlatformModel.LockData(),
      order_type: Joi.string().allow("").allow(null),
      ewaybill_info: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      dp_id: Joi.string().allow("").allow(null),
      shipment_volumetric_weight: Joi.number().allow(null),
      marketplace_store_id: Joi.string().allow("").allow(null),
      return_details: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      dp_sort_key: Joi.string().allow("").allow(null),
      packaging_name: Joi.string().allow("").allow(null),
      timestamp: OrderPlatformModel.ShipmentTimeStamp(),
      auto_trigger_dp_assignment_acf: Joi.boolean().allow(null),
      dp_name: Joi.string().allow("").allow(null),
      po_number: Joi.string().allow("").allow(null),
      weight: Joi.number().required(),
      b2c_buyer_details: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      forward_affiliate_order_id: Joi.string().allow("").allow(null),
      return_affiliate_order_id: Joi.string().allow("").allow(null),
      bag_weight: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      id: Joi.string().allow("").allow(null),
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
      identifiers: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      cart_conditions: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      marked: OrderPlatformModel.PriceMinMax(),
      effective: OrderPlatformModel.PriceMinMax(),
      currency: Joi.string().allow(""),
    });
  }

  /** @returns {FreeGiftItems} */
  static FreeGiftItems() {
    return Joi.object({
      item_slug: Joi.string().allow(""),
      item_name: Joi.string().allow(""),
      item_price_details: OrderPlatformModel.ItemPriceDetails(),
      item_brand_name: Joi.string().allow(""),
      item_id: Joi.number(),
      item_images_url: Joi.array().items(Joi.string().allow("")),
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
      promotion_type: Joi.string().allow("").allow(null),
      promotion_name: Joi.string().allow("").allow(null),
      discount_rules: Joi.array().items(OrderPlatformModel.DiscountRules()),
      amount: Joi.number().allow(null),
      article_quantity: Joi.number().allow(null),
      buy_rules: Joi.array().items(OrderPlatformModel.BuyRules()),
      promo_id: Joi.string().allow("").allow(null),
      mrp_promotion: Joi.boolean().allow(null),
      applied_free_articles: Joi.array().items(
        OrderPlatformModel.AppliedFreeArticles()
      ),
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
      parent_promo_bags: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      financial_breakup: OrderPlatformModel.FinancialBreakup(),
      bag_configs: OrderPlatformModel.BagConfigs(),
      seller_identifier: Joi.string().allow("").allow(null),
      delivery_address: OrderPlatformModel.Address(),
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
      charges: Joi.array().items(OrderPlatformModel.PriceAdjustmentCharge()),
      ordering_currency_prices: OrderPlatformModel.OrderingCurrencyPrices(),
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
      meta: Joi.object().pattern(/\S/, Joi.any()).required(),
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
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      action_to_status: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      delivery_slot: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      delivery_details: Joi.object().pattern(/\S/, Joi.any()),
      billing_details: Joi.object().pattern(/\S/, Joi.any()),
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
      payment_methods: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      payment_info: Joi.array().items(Joi.any()).allow(null, ""),
      coupon: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      pdf_links: Joi.object().pattern(/\S/, Joi.any()),
      payment_mode: Joi.string().allow("").allow(null),
      packaging_type: Joi.string().allow("").allow(null),
      journey_type: Joi.string().allow("").allow(null),
      prices: OrderPlatformModel.Prices(),
      charges: Joi.array().items(OrderPlatformModel.PriceAdjustmentCharge()),
      ordering_currency_prices: OrderPlatformModel.OrderingCurrencyPrices(),
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
      rto_address: OrderPlatformModel.Address(),
      credit_note_id: Joi.string().allow("").allow(null),
      is_self_ship: Joi.boolean().allow(null),
      mode_of_payment: Joi.string().allow("").allow(null),
      is_lapa_enabled: Joi.boolean(),
      forward_end_shipment_id: Joi.string().allow("").allow(null),
      logistics_meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {ShipmentInfoResponseSchema} */
  static ShipmentInfoResponseSchema() {
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {CurrencySchema} */
  static CurrencySchema() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
    });
  }

  /** @returns {OrderData} */
  static OrderData() {
    return Joi.object({
      ordering_channel: Joi.string().allow(""),
      order_date: Joi.string().allow("").required(),
      created_ts: Joi.string().allow(""),
      tax_details: OrderPlatformModel.TaxDetails(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      fynd_order_id: Joi.string().allow("").required(),
      prices: OrderPlatformModel.Prices(),
      charges: Joi.array().items(OrderPlatformModel.PriceAdjustmentCharge()),
      ordering_currency_prices: OrderPlatformModel.OrderingCurrencyPrices(),
      payment_methods: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      payment_info: Joi.array()
        .items(OrderPlatformModel.PaymentInfoData())
        .allow(null, ""),
      affiliate_order_id: Joi.string().allow(""),
      affiliate_id: Joi.string().allow(""),
      source: Joi.string().allow(""),
      currency: OrderPlatformModel.CurrencySchema(),
    });
  }

  /** @returns {OrderDetailsResponseSchema} */
  static OrderDetailsResponseSchema() {
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

  /** @returns {LaneConfigResponseSchema} */
  static LaneConfigResponseSchema() {
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
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      prices: OrderPlatformModel.Prices(),
      ordering_currency_prices: OrderPlatformModel.OrderingCurrencyPrices(),
    });
  }

  /** @returns {OrderListingResponseSchema} */
  static OrderListingResponseSchema() {
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
      last_location_recieved_at: Joi.string().allow("").allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      raw_status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_time: Joi.string().allow(""),
      awb: Joi.string().allow(""),
      shipment_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      reason: Joi.string().allow("").allow(null),
      account_name: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformShipmentTrack} */
  static PlatformShipmentTrack() {
    return Joi.object({
      meta: Joi.object().pattern(/\S/, Joi.any()),
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
      applied_filters: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      page: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
    });
  }

  /** @returns {FiltersResponseSchema} */
  static FiltersResponseSchema() {
    return Joi.object({
      advance: OrderPlatformModel.AdvanceFilterInfo(),
      global_1: OrderPlatformModel.FiltersInfo(),
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

  /** @returns {FileResponseSchema} */
  static FileResponseSchema() {
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

  /** @returns {BulkActionTemplateResponseSchema} */
  static BulkActionTemplateResponseSchema() {
    return Joi.object({
      template_x_slug: Joi.array().items(
        OrderPlatformModel.BulkActionTemplate()
      ),
    });
  }

  /** @returns {PlatformShipmentReasonsResponseSchema} */
  static PlatformShipmentReasonsResponseSchema() {
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

  /** @returns {ShipmentReasonsResponseSchema} */
  static ShipmentReasonsResponseSchema() {
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
      phone: Joi.string().allow("").required(),
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
      type: Joi.string().allow("").required(),
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
      additional_contact_details: Joi.object()
        .pattern(/\S/, Joi.any())
        .allow(null, ""),
      timing: Joi.array().items(Joi.any()).allow(null, ""),
      notification_emails: Joi.array()
        .items(Joi.string().allow(""))
        .allow(null, ""),
      gst_number: Joi.string().allow("").allow(null),
      ewaybill_portal_details: Joi.object()
        .pattern(/\S/, Joi.any())
        .allow(null, ""),
      einvoice_portal_details: OrderPlatformModel.EInvoicePortalDetails(),
      gst_credentials: OrderPlatformModel.StoreGstCredentials().required(),
      stage: Joi.string().allow("").required(),
      product_return_config: Joi.object()
        .pattern(/\S/, Joi.any())
        .allow(null, ""),
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
      address1: Joi.string().allow("").required(),
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
      attributes: Joi.object().pattern(/\S/, Joi.any()).required(),
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
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      color: Joi.string().allow("").allow(null),
      department_id: Joi.number().allow(null),
      l2_category_id: Joi.number().allow(null),
    });
  }

  /** @returns {ArticleStatusDetails} */
  static ArticleStatusDetails() {
    return Joi.object({
      status: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      meta: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      delivery_address: OrderPlatformModel.Address(),
      delivery_slot: OrderPlatformModel.DeliverySlotDetails(),
      display_name: Joi.string().allow("").allow(null),
      dp_details: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      einvoice_info: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      entity_type: Joi.string().allow("").allow(null),
      fallback_user: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      financial_breakup: Joi.array().items(
        OrderPlatformModel.FinancialBreakup()
      ),
      fulfilling_store: OrderPlatformModel.Store(),
      fyndstore_emp: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
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
      parent_promo_bags: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      payment_methods: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      payment_type: Joi.string().allow("").allow(null),
      payments: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      prices: OrderPlatformModel.Prices(),
      charges: Joi.array().items(OrderPlatformModel.PriceAdjustmentCharge()),
      qc_required: Joi.boolean().allow(null),
      quantity: Joi.number().allow(null),
      reasons: Joi.array().items(Joi.any()).allow(null, ""),
      restore_coupon: Joi.boolean().allow(null),
      restore_promos: Joi.object().pattern(/\S/, Joi.any()).allow(null, ""),
      rto_address: OrderPlatformModel.Address(),
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

  /** @returns {BagDetailsPlatformResponseSchema} */
  static BagDetailsPlatformResponseSchema() {
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

  /** @returns {GetBagsPlatformResponseSchema} */
  static GetBagsPlatformResponseSchema() {
    return Joi.object({
      status_code: Joi.number(),
      data: OrderPlatformModel.BagData(),
    });
  }

  /** @returns {GeneratePosOrderReceiptResponseSchema} */
  static GeneratePosOrderReceiptResponseSchema() {
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

  /** @returns {AllowedTemplatesResponseSchema} */
  static AllowedTemplatesResponseSchema() {
    return Joi.object({
      template_x_slug: Joi.array().items(OrderPlatformModel.Templates()),
    });
  }

  /** @returns {TemplateDownloadResponseSchema} */
  static TemplateDownloadResponseSchema() {
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

  /** @returns {BulkFailedResponseSchema} */
  static BulkFailedResponseSchema() {
    return Joi.object({
      status: Joi.boolean(),
      error: Joi.string().allow(""),
    });
  }
}
module.exports = OrderPlatformModel;
