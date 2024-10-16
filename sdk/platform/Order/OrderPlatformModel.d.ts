export = OrderPlatformModel;
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
 * @typedef ErrorResponseSchema
 * @property {number} [status] - The HTTP status code corresponding to the error.
 * @property {boolean} [success] - Indicates whether the operation was
 *   successful. Always false in the case of an error.
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
 * @property {number} store_id
 * @property {number} [bag_id]
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_id]
 * @property {string} [item_id]
 * @property {string} [fynd_order_id]
 * @property {string} [set_id]
 * @property {string} [affiliate_bag_id]
 * @property {number[]} [reason_ids]
 * @property {string} [mongo_article_id]
 */
/**
 * @typedef StoreReassignResponseSchema
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef Entities
 * @property {string} [id] - Shipment ID if 'entity_type': shipments | Bag Id if
 *   'entity_type': bags
 * @property {string} [affiliate_order_id] - Application/Affiliate Order ID,
 *   Required if the ID is missing
 * @property {string} [affiliate_id] - Application/Affiliate ID, Required if the
 *   ID is missing
 * @property {string} reason_text - Reason For Shipment/Bag Action
 * @property {string} [affiliate_bag_id] - Application/Affiliate Bag ID,
 *   Required if the ID is missing
 * @property {string} [affiliate_shipment_id] - Application/Affiliate Shipment
 *   ID, Required if the ID is missing
 */
/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} entity_type - Type of entity that the tag is associated to
 *   (bag, shipments).
 * @property {string} action - Specifies the operation to be performed on a
 *   shipment, with available actions including 'lock', 'unlock', and 'check'.
 *   Each action triggers a specific transition - lock-- Locks the shipment,
 *   preventing any modifications. - unlock-- Unlocks the shipment, allowing for
 *   modifications. - check-- Verifies the shipment's status or condition.
 * @property {string} action_type - Defines the current lock state or lock type
 *   of a shipment, dictating the types of transitions or actions that can be
 *   performed next.The action_type can be one of the following - complete-
 *   Complete lock specifies that no action can be performed for that shipment.
 *   - operational- The shipment is in an operational phase, during which only
 *   financial-related actions are permissible. - financial- The shipment is in
 *   a financial phase, allowing for operational actions to be taken.
 * @property {Entities[]} entities - Shipment/Entity
 * @property {boolean} [resume_tasks_after_unlock]
 * @property {boolean} [lock_after_transition] - Lock Shipment After Transition
 * @property {boolean} [unlock_before_transition] - Unlock Shipment After Transition
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
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CheckResponseSchema[]} [check_response] - Entity Lock Status, If
 *   the action input as 'check'
 */
/**
 * @typedef AnnouncementResponseSchema
 * @property {string} [to_datetime]
 * @property {number} id
 * @property {string} [description]
 * @property {string} [platform_name]
 * @property {string} [from_datetime]
 * @property {string} [platform_id]
 * @property {string} [title]
 * @property {number} [company_id]
 * @property {string} [logo_url]
 * @property {string} [created_at] - The date and time when the announcement was
 *   created and active.
 */
/**
 * @typedef AnnouncementsResponseSchema
 * @property {AnnouncementResponseSchema[]} [announcements]
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef BaseResponseSchema
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef Click2CallResponseSchema
 * @property {string} call_id - Call ID from the provider
 * @property {boolean} success - Success
 */
/**
 * @typedef ErrorDetail
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef ProductsReasonsFilters
 * @property {number} [line_number] - Product/Bag Line number for the
 *   Product/Bag Identifier
 * @property {string} [identifier] - Product/Bag Article/Item Identifier
 * @property {number} [quantity]
 */
/**
 * @typedef ProductsReasonsData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */
/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsFilters[]} [filters]
 * @property {ProductsReasonsData} [data]
 */
/**
 * @typedef EntityReasonData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */
/**
 * @typedef EntitiesReasons
 * @property {Object[]} [filters]
 * @property {EntityReasonData} [data]
 */
/**
 * @typedef ReasonsData
 * @property {ProductsReasons[]} [products]
 * @property {EntitiesReasons[]} [entities]
 */
/**
 * @typedef Products
 * @property {number} [line_number] - Product/Bag Line number for the
 *   Product/Bag Identifier
 * @property {string} [identifier] - Product/Bag Article/Item Identifier
 * @property {number} [quantity]
 */
/**
 * @typedef OrderItemDataUpdates
 * @property {Object} [data] - Encapsulates a dynamic set of updates and
 *   modifications applied to bag status object.
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
 * @property {ProductsDataUpdatesFilters[]} [filters] - Filter for the Product/Bag
 * @property {Object} [data] - Encapsulates a dynamic set of updates and
 *   modifications applied to a product.
 */
/**
 * @typedef EntitiesDataUpdates
 * @property {Object[]} [filters]
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
 * @property {OrderItemDataUpdates[]} [order_item_status]
 * @property {ProductsDataUpdates[]} [products]
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {OrderDataUpdates[]} [order]
 */
/**
 * @typedef ShipmentsRequestSchema
 * @property {string} identifier - Shipment ID
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products] - Product/Bag to be updated
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
 * @property {string} [status]
 * @property {ShipmentsRequestSchema[]} [shipments] - An array of shipment
 *   objects, each containing identifiers, product details and reasons for the
 *   shipment's current status.
 * @property {string} [exclude_bags_next_state] - State to be change for
 *   Remaining Bag/Products
 * @property {boolean} [split_shipment] - Flag to split shipment
 */
/**
 * @typedef UpdateShipmentStatusRequestSchema
 * @property {boolean} [force_transition] - Indicates whether the transition
 *   should be forced.
 * @property {StatuesRequestSchema[]} [statuses] - An array detailing the
 *   various stages a shipment can undergo, each entry representing a distinct
 *   status. Each status object includes comprehensive details about shipments
 *   under that status, product specifics, reasons for the status (if
 *   applicable), and any updates to shipment or product data.
 * @property {boolean} [lock_after_transition] - Lock Shipment After Transition
 * @property {boolean} [unlock_before_transition] - Unlock Shipment After Transition
 * @property {boolean} [task] - To Run Status Update as a background Task
 * @property {boolean} [resume_tasks_after_unlock] - Resume Tasks After Unlock
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
 * @property {DPConfiguration} [dp_configuration]
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
 * @property {number} [app_company_id]
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
 * @property {string} fynd_order_id
 */
/**
 * @typedef DispatchManifest
 * @property {string} manifest_id - Id of the manifest.
 */
/**
 * @typedef SuccessResponseSchema
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef ActionInfo
 * @property {string} display_text
 * @property {number} id
 * @property {string} description
 * @property {string} slug
 */
/**
 * @typedef GetActionsResponseSchema
 * @property {ActionInfo[]} [permissions]
 */
/**
 * @typedef HistoryReason
 * @property {string} [text]
 * @property {string} [category]
 * @property {string} [state]
 * @property {string} [dislay_name]
 * @property {number} [code]
 * @property {number} [quantity]
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
 * @property {number} [store_id]
 * @property {string} [status]
 * @property {string} [status1]
 * @property {string} [call_id]
 * @property {string} [starttime]
 * @property {HistoryReason} [reason]
 * @property {string} [short_link]
 * @property {string} [endtime]
 * @property {string} [store_name]
 * @property {string} [caller]
 * @property {string} [store_code] - The unique identifier representing the code
 *   for the affiliate's store, often used for internal reference.
 * @property {string} [billsec]
 * @property {string} [recordpath]
 * @property {string} [status2]
 * @property {string} [callerid]
 * @property {string} [duration]
 * @property {string} [channel_type] - This represents the Ordering channel type.
 * @property {string} [activity_comment]
 * @property {string} [activity_type] - Defines the category of event-related
 *   information for a shipment, indicating the nature of the update. This
 *   includes whether the update pertains to the status of the shipment,
 *   comments added to it, or notifications about specific events.
 * @property {string} [receiver]
 * @property {string} [recipient]
 * @property {string} [slug]
 * @property {string} [message]
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
 * @property {string} [display_message] - Display Message
 * @property {number} [bag_id] - Bag ID
 * @property {string} [ticket_url] - Ticket URL
 * @property {string} [l3_detail] - L3 details of bag
 * @property {string} createdat - Create date
 * @property {string} [ticket_id] - Ticket ID
 * @property {string} activity_type - Defines the category of event-related
 *   information for a shipment, indicating the nature of the update. This
 *   includes whether the update pertains to the status of the shipment,
 *   comments added to it, or notifications about specific events.
 * @property {string} [l2_detail] - L2 details of bag
 * @property {string} [assigned_agent] - Assigned Agent
 * @property {HistoryMeta} [meta]
 * @property {string} [l1_detail] - L1 details of bag
 * @property {string} message - History Message or comment
 * @property {string} user - User who created the history
 */
/**
 * @typedef ShipmentHistoryResponseSchema
 * @property {boolean} [success]
 * @property {HistoryDict[]} activity_history
 */
/**
 * @typedef PostHistoryFilters
 * @property {string} shipment_id
 * @property {string} [line_number]
 * @property {string} [identifier]
 */
/**
 * @typedef PostHistoryData
 * @property {string} user_name
 * @property {string} message
 */
/**
 * @typedef PostHistoryDict
 * @property {PostHistoryFilters[]} filters
 * @property {PostHistoryData} data
 */
/**
 * @typedef PostShipmentHistory
 * @property {PostHistoryDict[]} [activity_history]
 */
/**
 * @typedef SmsDataPayload
 * @property {string} shipment_id - Unique identifier which is used to identify
 *   a shipment.
 * @property {string} phone_number - Phone number for communication
 * @property {number} [amount_paid] - Data mapped in Communication template: amount_paid
 * @property {string} order_id - OrderId
 * @property {string} [payment_mode] - Data mapped in Communication template: payment_mode
 * @property {string} [customer_name] - Data mapped in Communication template:
 *   customer_name
 * @property {string} [brand_name] - Data mapped in Communication template: brand_name
 * @property {string} message - Message to be send in SMS
 * @property {string} country_code - Uniquely identifies the country associated
 *   with the mobile number in ISO 3166-1 alpha-2 format. This code is essential
 *   for for correctly formatting and routing the OTP messages to mobile phones
 *   across international borders. Examples include 'US' for the United States,
 *   'IN' for India.
 */
/**
 * @typedef SendSmsPayload
 * @property {string} bag_id - Bag_id for the activity history track
 * @property {SmsDataPayload} [data] - SMS Data
 * @property {string} slug - Slug name for the template mapped in pointblank
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
 * @property {string} [currency]
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
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */
/**
 * @typedef ShipmentDetail
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {number} id
 * @property {number[]} [bag_list]
 * @property {Meta} meta
 * @property {string} [remarks]
 */
/**
 * @typedef OrderStatusData
 * @property {OrderDetails} order_details
 * @property {string[]} [errors]
 * @property {ShipmentDetail[]} [shipment_details]
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
 * @property {string} success
 * @property {OrderStatusData[]} [result]
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
 * @property {string} [weight]
 * @property {string} [height]
 * @property {number} [length]
 * @property {number} [width]
 */
/**
 * @typedef UpdatePackagingDimensionsPayload
 * @property {string} shipment_id
 * @property {string} current_status
 * @property {Dimension[]} dimension
 */
/**
 * @typedef UpdatePackagingDimensionsResponseSchema
 * @property {string} [message]
 */
/**
 * @typedef Tax
 * @property {string} name
 * @property {number} rate
 * @property {Object[]} [breakup]
 * @property {Object} amount - The base amount of the tax.
 */
/**
 * @typedef Charge
 * @property {string} name - The name of the charge.
 * @property {Object} amount - The monetary value of the charge, including value
 *   and currency details.
 * @property {Tax} [tax]
 * @property {string} [code] - An optional code associated with the charge for
 *   internal tracking.
 * @property {string} type - The category or type of the charge.
 */
/**
 * @typedef LineItem
 * @property {Charge[]} [charges]
 * @property {Object} [meta] - Meta data of the articles or line items.
 * @property {string} [custom_message] - Meta data of the articles or line items.
 * @property {number} [quantity] - Quantity of the articles or line items.
 * @property {string} seller_identifier - Seller identifier of the articles or line items.
 * @property {string} [external_line_id] - External unique identifier of the
 *   articles or line items.
 */
/**
 * @typedef ProcessingDates
 * @property {Object} [dp_pickup_slot] - Specifies the designated time slot for
 *   the delivery partner to pick up the package, ensuring efficient
 *   coordination and scheduling.
 * @property {string} [dispatch_after_date] - Indicates the earliest date and
 *   time when the package can be dispatched, helping to manage logistics and
 *   delivery expectations.
 * @property {string} [dispatch_by_date] - Sets the deadline by which the
 *   package must be dispatched to meet delivery timelines, crucial for
 *   maintaining service level agreements.
 * @property {string} [confirm_by_date] - Specifies the deadline for order
 *   confirmation, ensuring that processing begins in a timely manner to meet
 *   dispatch and delivery schedules.
 * @property {Object} [customer_pickup_slot] - Allocates a specific time slot
 *   for the customer to pick up the package, enhancing convenience and customer
 *   satisfaction.
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
 * @property {LineItem[]} line_items
 * @property {string} [external_shipment_id] - External shipment identifier or
 *   marketplace's unique shipment identifier.
 * @property {ProcessingDates} [processing_dates]
 * @property {Object} [meta] - Meta data of the shipment contains additional,
 *   potentially dynamic information about the shipment.
 * @property {number} [priority] - Integer value indicating high and low priority.
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
 * @typedef ShippingInfo
 * @property {string} [alternate_mobile_number]
 * @property {string} [state]
 * @property {string} [customer_code] - A unique identifier assigned to the
 *   customer, facilitating order tracking and service customization.
 * @property {string} [shipping_type] - Specifies the method or service used for
 *   the shipping of the shipment.
 * @property {string} [middle_name]
 * @property {string} [primary_mobile_number]
 * @property {string} [last_name]
 * @property {Object} [geo_location] - Geographic coordinates (latitude and
 *   longitude) of the shipping address
 * @property {string} [gender]
 * @property {string} [house_no]
 * @property {string} [first_name]
 * @property {string} [title]
 * @property {string} [landmark]
 * @property {string} [country]
 * @property {string} [address_type] - The type of the address.
 * @property {string} [state_code] - The code representing the state or region
 *   within the country, if applicable.
 * @property {string} [city]
 * @property {string} [external_customer_code] - A unique identifier assigned to
 *   customers by an external system or partner organization. This code is
 *   crucial for integrating and synchronizing customer information across
 *   different platforms or services.
 * @property {string} [floor_no]
 * @property {string} [alternate_email]
 * @property {Object[]} [slot]
 * @property {string} [address]
 * @property {string} [area]
 * @property {string} [address1]
 * @property {string} [pincode]
 * @property {string} [primary_email]
 * @property {string} [address2]
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
 * @property {string} [area]
 * @property {string} [address1]
 * @property {string} [pincode]
 * @property {string} [primary_email]
 * @property {string} [address2]
 * @property {string} [landmark]
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
 * @property {string} [user_id]
 * @property {string} [user_type] - User type of the user.
 * @property {string} [primary_email]
 * @property {string} [gender]
 * @property {string} first_name
 * @property {string} [last_name]
 * @property {string} primary_mobile_number
 */
/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 * @property {string} [pan_no]
 */
/**
 * @typedef PaymentMethod
 * @property {string} collect_by
 * @property {string} mode
 * @property {string} refund_by
 * @property {string} name
 * @property {number} amount
 * @property {Object} [meta] - An object containing additional metadata for the
 *   Payment Method.
 * @property {Object} [transaction_data] - An object containing transaction data
 *   for the Payment Method.
 */
/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */
/**
 * @typedef CreateOrderAPI
 * @property {Shipment[]} shipments - List of Shipments which includes shipment
 *   data like shipment items, shipment promise, Shipment type, shipment order
 *   type, shipment dp options etc.
 * @property {ShippingInfo} shipping_info
 * @property {BillingInfo} billing_info
 * @property {Object} [currency_info] - This object can accommodate a range of
 *   currency-related information, provides a flexible structure for storing
 *   comprehensive details about the currency or currencies involved in a transaction.
 * @property {string} [external_order_id]
 * @property {Charge[]} [charges]
 * @property {string} [external_creation_date] - Specifies the date and time
 *   when the record was initially created in an external system.
 * @property {Object} [meta] - Meta data of the order that contains additional,
 *   potentially dynamic information about the order.
 * @property {TaxInfo} [tax_info]
 * @property {CreateOrderConfig} [config]
 * @property {PaymentInfo} payment_info
 * @property {UserInfo} [user_info]
 * @property {number} [ordering_store_id]
 * @property {string} [order_platform]
 * @property {string} [status] - Represents the current status of the order,
 *   specifying whether the order is in a 'pendency' state (awaiting further
 *   action) or marked as 'complete'.
 * @property {SystemMessages[]} [system_messages]
 */
/**
 * @typedef CreateOrderErrorReponse
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
 * @property {string} [error]
 */
/**
 * @typedef CreateChannelConfigResponseSchema
 * @property {boolean} [is_inserted]
 * @property {boolean} [is_upserted]
 * @property {boolean} [acknowledged]
 */
/**
 * @typedef UploadConsent
 * @property {string} consent_url
 * @property {string} manifest_id
 */
/**
 * @typedef PlatformOrderUpdate
 * @property {string} order_id
 */
/**
 * @typedef ResponseDetail
 * @property {boolean} [success]
 * @property {string[]} [message]
 */
/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */
/**
 * @typedef OrderStatus
 * @property {FyndOrderIdList[]} [order_details]
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
 * @property {boolean} [success]
 * @property {string[]} [next_statuses]
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
 * @property {string} fynd_order_id
 * @property {number} seller_id
 * @property {string} affiliate_id
 * @property {string} [customer_mobile_number]
 */
/**
 * @typedef RefundOption
 * @property {string} [value]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef RefundModeInfo
 * @property {boolean} [is_active]
 * @property {string} [slug]
 * @property {RefundOption[]} [options]
 * @property {string} [display_name]
 */
/**
 * @typedef RefundModeConfigResponsePayload
 * @property {boolean} success
 * @property {RefundModeInfo[]} data
 */
/**
 * @typedef AttachUserOtpData
 * @property {string} request_id
 */
/**
 * @typedef AttachUserInfo
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} mobile
 * @property {string} [country_code] - Uniquely identifies the country
 *   associated with the user information. This code is essential for
 *   international shipments, ensuring accurate routing and delivery across
 *   global postal and customs services. Examples include 'US' for the United
 *   States, 'IN' for India.
 */
/**
 * @typedef AttachOrderUser
 * @property {AttachUserOtpData} otp_data
 * @property {string} fynd_order_id
 * @property {AttachUserInfo} user_info
 */
/**
 * @typedef AttachOrderUserResponseSchema
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef SendUserMobileOTP
 * @property {string} mobile
 * @property {string} [country_code] - Uniquely identifies the country
 *   associated with the mobile number. This code is essential for for correctly
 *   formatting and routing the OTP messages to mobile phones across
 *   international borders. Examples include 'US' for the United States, 'IN' for India.
 */
/**
 * @typedef PointBlankOtpData
 * @property {string} [request_id]
 * @property {number} [resend_timer]
 * @property {string} [message]
 * @property {number} [mobile]
 */
/**
 * @typedef SendUserMobileOtpResponseSchema
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {PointBlankOtpData} [data]
 */
/**
 * @typedef VerifyOtpData
 * @property {string} request_id
 * @property {string} mobile
 * @property {number} otp_code - The OTP entered by the user for verification.
 *   This code is a temporary, numeric password that validates the user's access request.
 */
/**
 * @typedef VerifyMobileOTP
 * @property {VerifyOtpData} otp_data
 * @property {string} fynd_order_id
 */
/**
 * @typedef VerifyOtpResponseData
 * @property {string} [mobile]
 * @property {string} [message]
 * @property {string} [fynd_order_id]
 * @property {string} [country_code] - Uniquely identifies the country
 *   associated with the mobile number. This code is essential for for correctly
 *   formatting and routing the OTP messages to mobile phones across
 *   international borders. Examples include 'US' for the United States, 'IN' for India.
 */
/**
 * @typedef VerifyOtpResponseSchema
 * @property {number} [status]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {VerifyOtpResponseData} [data]
 */
/**
 * @typedef BulkReportsDownloadRequestSchema
 * @property {string[]} [store_ids] - Download for specific store ids.
 * @property {string} [lane_type] - Defines the category or type of lane for
 *   which the report is being requested for download.
 * @property {string} [custom_headers] - Download report with specific headers
 * @property {string} [report_type] - Specifies the type of report to be
 *   fetched. The value must be one of the following- - generation_report-
 *   Retrieves records related to state transition failed shipment attempts from
 *   the BulkAction table. - invoice_report- Retrieves records related to failed
 *   invoiced shipments from the BulkAction table. Based on the provided report
 *   type, the API will fetch the corresponding failed records.
 * @property {string} [start_date] - UTC start date in ISO format
 * @property {string} [end_date] - UTC end date in ISO format
 * @property {string[]} [entities] - Download for specific enitites, entities
 *   can be bag, shipment or order_id, etc.
 * @property {string} [filter_type]
 * @property {boolean} [is_cross_company_enabled] - Download lanes for cross company.
 * @property {Object} [custom_filters_for_lane] - Provides a the option for
 *   defining custom filters specific to a logistics or transportation lane.
 */
/**
 * @typedef BulkReportsDownloadResponseSchema
 * @property {boolean} [success]
 * @property {string} [batch_id]
 */
/**
 * @typedef BulkFailedResponseSchema
 * @property {boolean} [status]
 * @property {string} [error]
 */
/**
 * @typedef BulkStateTransistionRequestSchema
 * @property {string} [url]
 * @property {string} [file_name]
 */
/**
 * @typedef BulkStateTransistionResponseSchema
 * @property {boolean} [status]
 * @property {string} [message]
 * @property {string} [batch_id]
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
 * @property {number} [store_id]
 * @property {string} [uploaded_on]
 * @property {number} [company_id]
 * @property {ShipmentActionInfo} [shipments_action_info]
 * @property {boolean} [is_invoiceable]
 * @property {string} [user_name]
 * @property {string} [file_url]
 * @property {Object} [meta] - Meta data of the bulk action listing data that
 *   contains additional, potentially dynamic information about the shipments.
 * @property {string} [invoice_document_type] - Denotes the format in which the
 *   invoice is streamed.
 * @property {string} [label_document_type] - Denotes the format in which the
 *   label is streamed.
 * @property {string} [file_name]
 * @property {string} [store_name]
 * @property {number} [updated_ts]
 * @property {boolean} [status]
 * @property {string} [store_code] - The unique identifier representing the code
 *   for the affiliate's store, often used for internal reference.
 * @property {string} [bulk_action_type] - Specifies the type of bulk action to
 *   be performed, categorizing the job into distinct operational tasks. Each
 *   option represents a specific automated process designed to handle large
 *   volumes of data or actions efficiently
 * @property {string} [created_ts]
 * @property {string} [invoice_status]
 * @property {boolean} [do_invoice_label_generated]
 * @property {number} [id]
 * @property {string} [user_id]
 * @property {string} [last_selected_invoice_label_type] - Denotes the format in
 *   which the last selected invoice label is streamed.
 * @property {string} [batch_id]
 * @property {string} [uploaded_by]
 */
/**
 * @typedef BulkListinPage
 * @property {number} [current]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [total]
 * @property {number} [item_total]
 * @property {string} [type]
 * @property {number} [size]
 */
/**
 * @typedef BulkListingResponseSchema
 * @property {boolean} [success]
 * @property {BulkActionListingData[]} [data]
 * @property {BulkListinPage} [page]
 * @property {number} [total_count]
 */
/**
 * @typedef JobDetailsData
 * @property {string} [batch_id]
 * @property {number} [total_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [successful_shipments_count]
 * @property {number} [failed_shipments_count]
 * @property {number} [processing_shipments_count]
 * @property {string} [company_id]
 */
/**
 * @typedef JobDetailsResponseSchema
 * @property {boolean} [success]
 * @property {JobDetailsData[]} [data]
 * @property {string} [file_url]
 * @property {string} [message]
 * @property {Object[]} [failed_records]
 * @property {string} [uploaded_by]
 * @property {string} [user_id]
 * @property {string} [created_ts]
 * @property {string} [uploaded_on]
 * @property {string} [status]
 */
/**
 * @typedef JobFailedResponseSchema
 * @property {string} [file_name]
 * @property {string} [url]
 */
/**
 * @typedef ManifestPageInfo
 * @property {number} current
 * @property {number} total
 * @property {boolean} has_next
 * @property {number} size
 * @property {boolean} has_previous
 * @property {string} type
 */
/**
 * @typedef ManifestItemDetails
 * @property {number} [quantity]
 * @property {string} shipment_id
 * @property {string} order_id
 * @property {string} [awb_number]
 * @property {string} [invoice_id]
 * @property {string} [shipment_created_at]
 */
/**
 * @typedef ManifestShipmentListing
 * @property {number} total_count
 * @property {string} [lane]
 * @property {ManifestPageInfo} page
 * @property {boolean} success
 * @property {number} status
 * @property {ManifestItemDetails[]} [items]
 * @property {string} [message]
 */
/**
 * @typedef DateRange
 * @property {string} [from_date] - Start Date in DD-MM-YYYY format
 * @property {string} [to_date] - End Date in DD-MM-YYYY format
 */
/**
 * @typedef Filters
 * @property {DateRange} [date_range]
 * @property {string} [logo] - CDN link of the logo displayed on the manifest page.
 * @property {string} [from_date] - UTC start date in ISO format.
 * @property {number} [stores] - Filter with the specific store.
 * @property {string} [to_date] - UTC end date in ISO format.
 * @property {string} [dp_name] - Filter with the specific courier partner name.
 * @property {string} [dp_ids] - Combination of courier partner ids separated by
 *   byte operator.
 * @property {string} [lane] - Criteria for lane on which shipments must be fetched.
 * @property {string} [selected_shipments] - Selected shipments mapped to the manifest.
 * @property {string} [store_name] - Filter with the specific store name.
 * @property {string} [deselected_shipments] - Deselected shipments unmapped
 *   from the manifest.
 */
/**
 * @typedef ManifestFile
 * @property {string} [key]
 * @property {string} [region]
 * @property {string} [bucket]
 */
/**
 * @typedef ManifestMediaUpdate
 * @property {string} [entity]
 * @property {string} [link]
 * @property {number} [code]
 * @property {string} [media_type] - Specifies the format or type of media being
 *   linked to the manifest.
 * @property {boolean} [status]
 * @property {ManifestFile} [file]
 */
/**
 * @typedef PDFMeta
 * @property {string} [consent]
 * @property {ManifestMediaUpdate[]} [media_updates]
 */
/**
 * @typedef TotalShipmentPricesCount
 * @property {number} [total_price]
 * @property {number} [shipment_count]
 */
/**
 * @typedef ManifestMeta
 * @property {Filters} [filters]
 * @property {TotalShipmentPricesCount} [total_shipment_prices_count]
 */
/**
 * @typedef Manifest
 * @property {number} company_id
 * @property {Filters} [filters]
 * @property {PDFMeta} [pdf_meta]
 * @property {ManifestMeta} [meta]
 * @property {boolean} is_active
 * @property {string} user_id
 * @property {string} created_at - Timestamp when the manifest was created.
 * @property {string} [created_ts]
 * @property {string} manifest_id
 * @property {string} status
 * @property {number} id
 * @property {string} uid
 * @property {string} created_by
 */
/**
 * @typedef ManifestList
 * @property {Manifest[]} [items]
 * @property {ManifestPageInfo} [page]
 */
/**
 * @typedef ManifestDetails
 * @property {ManifestItemDetails[]} [items]
 * @property {ManifestPageInfo} [page]
 * @property {number} [additional_shipment_count]
 * @property {Manifest[]} [manifest_details]
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
 * @property {string} [text]
 * @property {string} [name]
 * @property {string} [placeholder_text]
 * @property {string} [value]
 * @property {number} [min_search_size]
 * @property {boolean} [show_ui]
 */
/**
 * @typedef FiltersInfo
 * @property {FilterInfoOption[]} [options]
 * @property {string} text
 * @property {string} [placeholder_text]
 * @property {string} value
 * @property {boolean} [required]
 * @property {string} type
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
 * @property {string} awb - AWB Number
 * @property {string} [dp_location] - Current location of Courier partner
 * @property {string} dp_name - Courier Partner name
 * @property {string} dp_status - Status at Courier partner end
 * @property {string} dp_status_updated_at - Date Time at which status was
 *   updated at Courier partner
 * @property {string} [estimated_delivery_date] - Estimated delivery date
 *   received from Courier partner
 * @property {number} [id] - Id of Tracking history
 * @property {string} journey - Journey type of the shipment
 * @property {Object} [meta] - Meta field to store Courier partner's meta data
 * @property {string} operational_status - Operational status of OMS
 * @property {string} [promised_delivery_date] - Promised delivery date received
 *   from Courier partner
 * @property {string} [remark] - Remark from courier partner
 * @property {string} shipment_id - Shipment ID
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
 * @property {string} [action] - Expected Actions: [save, process,
 *   pdf_generated,invalidate,pdf_failed,complete]
 * @property {string} [manifest_id] - Id of The Manifest.
 * @property {Filters} [filters]
 * @property {string} [unique_id] - Unique Id.
 */
/**
 * @typedef ManifestItems
 * @property {Filters} [filters]
 * @property {string} [manifest_id] - Id of the manifest.
 * @property {string} [unique_id] - Unique Id.
 * @property {number} [company_id] - Id of the company.
 * @property {string} [dp_id] - Shipment with the specific courier partner Id.
 * @property {string} [courier_partner_slug]
 * @property {string} [action] - Expected Actions: [Save, Process, Pdf
 *   Generated, Invalidate, Pdf Failed, Complete]
 * @property {string} [created_by] - Created date of the manifest.
 * @property {string} [user_id] - Id of user.
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
 *   - "HomeDelivery": The order undergoes all state transitions typical for a
 *       delivery, from processing the shipment to final delivery at the
 *       customer's address.
 *   - "PickAtStore": The order is prepared for pickup and moved to a state where it
 *       is ready to be handed over directly to the customer at the store. This
 *       type streamlines the process by bypassing traditional shipping stages.
 *   - "Digital": This order type refers, when an order is placed for a digital
 *       product, the order directly transitions, bypassing the shipping steps
 *       necessary for physical goods.
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
 * @property {number} [id] - The unique identifier for the reason. This ID helps
 *   in differentiating between various reasons associated with the rule.
 * @property {string} display_name - The display name for the reason. This name
 *   is what users see when selecting a reason during the RMA process.
 * @property {Reason[]} [reasons] - A list of sub-reasons under the main reason.
 *   These provide additional layers of granularity to the main reason.
 * @property {string[]} qc_type - List of QC (Quality Control) types -- having
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
 * @property {QuestionSet[]} question_set - A set of questions associated with
 *   the reason. These questions are often used for gathering additional
 *   information during the RMA process.
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
 * @property {boolean} [show_text_area]
 */
/**
 * @typedef QuestionSet
 * @property {number} [id]
 * @property {string} [display_name]
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
 * @property {number} [rule_id] - The unique identifier for the rule that is
 *   associated with the given reasons. This ID serves as a reference to the
 *   specific rule within the RMA system that governs or influences the reasons listed.
 */
/**
 * @typedef ShipmentStatus
 * @property {string} [current_shipment_status]
 * @property {Object} [meta] - It contains the additional properties related to
 *   shipment status transition like Kafka_emission_status, user_name, etc.
 *   Additionally it is dynamic.
 * @property {number} [shipment_status_id]
 * @property {string[]} [bag_list]
 * @property {string} title
 * @property {string} [created_at] - Timestamp when the shipment was initially
 *   created.This timestamp is crucial for tracking the shipment's age,
 *   scheduling, and historical analysis.
 * @property {string} [created_ts]
 * @property {string} [shipment_id]
 * @property {string} [status_created_at] - Timestamp when the transition for
 *   the status of the shipment was created. Date time in UTC timezone as per ISO format.
 * @property {string} [status_created_ts]
 * @property {string} status - This key denotes the status of the shipment.
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
 * @typedef Address
 * @property {string} [phone] - The phone number at the address.
 * @property {string} [address2] - An optional additional field for the street
 *   address of the address.
 * @property {number} [longitude] - The longitude coordinate of the address.
 * @property {string} [pincode] - The postal code of the address.
 * @property {string} [area] - Area details of the address.
 * @property {string} [address_type] - The type of the address (e.g., home, office).
 * @property {string} [country] - The name of the country of the address.
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
 * @property {string} [email] - The email of the person associated with the order.
 * @property {string} [created_at] - Created at date for address
 * @property {string} [address1] - The primary address dynamically forms based
 *   on a template. If the template includes a single key, Address1 contains
 *   that data. For templates with multiple keys like {address} {address2}
 *   {area} {state} {country}, Address1 compiles all into a single formatted string.
 * @property {string} [display_address] - A formatted version of the address for
 *   display purposes.
 * @property {string} [landmark] - A notable landmark near the address.
 * @property {string} [updated_at] - Updated at date for address
 * @property {string} [version] - The version number of the address schema.
 * @property {number} [latitude] - The latitude coordinate of the address.
 * @property {string} [contact_person] - The full name of the person associated
 *   with the address.
 * @property {string} [state] - The name of the region (for example, province,
 *   state, or prefecture) of the address.
 * @property {string} [city] - The city, town of the address.
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
 * @property {number} [refund_credit] - Refund credits applicable
 * @property {number} [amount_paid_roundoff] - Total Amount paid rounded off to
 *   nearest integer
 * @property {number} [price_effective] - MRP - Discount
 * @property {number} [promotion_effective_discount] - Promotion discount as applicable
 * @property {number} [pm_price_split] - Updated Selling Price of product in
 *   case of repricing
 * @property {number} [refund_amount] - Amount to be refunded on cancellation and return
 * @property {number} [transfer_price] - Fixed selling price applicable for
 *   payouts by brand
 * @property {number} [coupon_effective_discount] - Coupon Discount as applicable
 * @property {number} [tax_collected_at_source] - Tax amount collected at the
 *   source of income or transaction
 * @property {number} [brand_calculated_amount] - Price Effective - Coupon
 *   Discount (Seller) - Promotion (Seller)
 * @property {number} [delivery_charge] - Fee applicable as per delivery partner
 * @property {number} [cashback] - Cashback points provided to the customer
 * @property {number} [value_of_good] - Effective selling price - Product GST Amount
 * @property {number} [cashback_applied] - Effective Cashback value as applicable
 * @property {number} [cod_charges] - Fee applicable for COD order
 * @property {number} [price_marked] - The indicated price or value assigned to
 *   an item before any discounts or adjustments
 * @property {number} [amount_paid] - Total Amount paid by the customer
 * @property {number} [coupon_value] - Effective coupon value as applicable
 * @property {number} [discount] - Total amount discounted from the original
 *   MRP/actual price
 * @property {number} [fynd_credits] - Credits provided by Fynd
 * @property {number} [gift_price] - Gift card amount
 * @property {number} [amount_to_be_collected] - Amount to be collected in case
 *   of multiple mode of payments
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
 * @property {number} [refund_credit] - Refund credits applicable
 * @property {number} [amount_paid_roundoff] - Total Amount paid rounded off to
 *   nearest integer
 * @property {number} [price_effective] - MRP - Discount
 * @property {number} [promotion_effective_discount] - Promotion discount as applicable
 * @property {number} [pm_price_split] - Updated Selling Price of product in
 *   case of repricing
 * @property {number} [refund_amount] - Amount to be refunded on cancellation and return
 * @property {number} [transfer_price] - Fixed selling price applicable for
 *   payouts by brand
 * @property {number} [coupon_effective_discount] - Coupon Discount as applicable
 * @property {number} [tax_collected_at_source] - Tax amount collected at the
 *   source of income or transaction
 * @property {number} [brand_calculated_amount] - Price Effective - Coupon
 *   Discount (Seller) - Promotion (Seller)
 * @property {number} [delivery_charge] - Fee applicable as per delivery partner
 * @property {number} [cashback] - Cashback points provided to the customer
 * @property {number} [value_of_good] - Effective selling price - Product GST Amount
 * @property {number} [cashback_applied] - Effective Cashback value as applicable
 * @property {number} [cod_charges] - Fee applicable for COD order
 * @property {number} [price_marked] - The indicated price or value assigned to
 *   an item before any discounts or adjustments
 * @property {number} [amount_paid] - Total Amount paid by the customer
 * @property {number} [coupon_value] - Effective coupon value as applicable
 * @property {number} [discount] - Total amount discounted from the original
 *   MRP/actual price
 * @property {number} [fynd_credits] - Credits provided by Fynd
 * @property {number} [gift_price] - Gift card amount
 * @property {number} [amount_to_be_collected] - Amount to be collected in case
 *   of multiple mode of payments
 */
/**
 * @typedef Identifier
 * @property {string} [alu]
 * @property {string} [ean]
 * @property {string} [sku_code] - The Stock Keeping Unit (SKU) code of the item
 *   - uniquely identifies each distinct product. SKUs are used to track
 *   inventory levels, facilitate accurate stocktaking, and streamline order
 *   fulfillment processes. This code is essential for inventory management,
 *   allowing for the differentiation between products based on attributes such
 *   as price, color, and size.
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
 * @property {string} hsn_code - The HSN Code (Harmonized System of Nomenclature
 *   Code) is an internationally standardized system for classifying goods. It
 *   is used in trade and commerce to identify products and services uniformly
 *   across different countries and industries. The system was developed by the
 *   World Customs Organization (WCO) and is widely used in customs processes
 *   and tax systems.
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
 * @property {string} [gstin_code] - A GST Number (Goods and Services Tax
 *   Identification Number, often abbreviated as GSTIN) is a unique identifier
 *   assigned to a business or individual registered under the Goods and
 *   Services Tax (GST) system in countries like India. The GST number is
 *   essential for businesses to comply with tax regulations and for the
 *   government to track tax payments and returns.
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
 * @property {string} [hsn_code] - The HSN Code (Harmonized System of
 *   Nomenclature Code) is an internationally standardized system for
 *   classifying goods. It is used in trade and commerce to identify products
 *   and services uniformly across different countries and industries. The
 *   system was developed by the World Customs Organization (WCO) and is widely
 *   used in customs processes and tax systems.
 */
/**
 * @typedef BagStateMapper
 * @property {boolean} [is_active]
 * @property {string} [app_display_name]
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
 * @property {number} [bsh_id]
 * @property {string} [created_at] - Timestamp when the bag status history
 *   transaction was created.
 * @property {string} [created_ts]
 * @property {string} [shipment_id]
 * @property {string} [updated_at] - Timestamp when the bag status history
 *   transaction was updated.
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
 * @property {Object} [child_details] - Contains a flexible set of key-value
 *   pairs representing detailed information about the article's child entities
 *   which includes dimensions (width, height, length), weight, and unique
 *   identifiers (EAN, article code, seller identifier) for each child entity.
 * @property {string} seller_identifier
 * @property {string} uid
 * @property {Object} [set] - Represents the data related to combination of
 *   articles that, while being the same product, vary by size, color, or other
 *   distinguishing features.
 * @property {Dimensions} [dimensions]
 * @property {Object} [currency] - Currency in which the transaction amount
 *   associated with the article is specified.
 * @property {boolean} [esp_modified]
 * @property {ReturnConfig} [return_config]
 * @property {string} [code]
 * @property {Weight} [weight]
 * @property {string} _id
 * @property {Object} identifiers - Details of Identifiers associated with the
 *   article including sku_code.
 * @property {string} [raw_meta]
 * @property {string} size
 * @property {boolean} [is_set]
 * @property {string[]} [tags]
 */
/**
 * @typedef ShipmentListingBrand
 * @property {string} [logo]
 * @property {string} [created_on] - Timestamp of the transaction when the brand
 *   of the shipment was created.
 * @property {string} [name]
 * @property {string} [logo_base64]
 */
/**
 * @typedef ReplacementDetails
 * @property {string} [replacement_type] - Specifies the nature or category of
 *   the replacement requested or processed for an item.
 * @property {string} [original_affiliate_order_id]
 */
/**
 * @typedef AffiliateMeta
 * @property {string} [order_item_id]
 * @property {string} [channel_order_id]
 * @property {number} [employee_discount]
 * @property {string} [box_type] - Box type of the shipment in which the
 *   shipment will be delivered.
 * @property {number} [quantity]
 * @property {number} [size_level_total_qty]
 * @property {number} [loyalty_discount]
 * @property {ReplacementDetails} [replacement_details]
 * @property {string} [channel_shipment_id]
 * @property {string} [marketplace_invoice_id]
 * @property {string} [due_date] - Specifies the deadline by which a particular
 *   action related to the affiliate shipment needs to be completed.
 * @property {string} [coupon_code] - A unique code provided to customers for
 *   redeeming special offers or discounts on their purchases.
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
 * @property {number} [l3_category] - Represents the product's classification at
 *   the third level in the e-commerce platform's category hierarchy, using an
 *   integer identifier. This finer level of categorization allows for precise
 *   product organization and easier navigation for customers seeking specific items.
 * @property {string} [l3_category_name] - This key specifies the name of the
 *   third-level category under which the product is listed, offering a more
 *   detailed classification within the e-commerce platform's hierarchy.
 * @property {string} [last_updated_at] - Denotes the timestamp when any aspect
 *   of the associated record was modified.
 * @property {string} [name]
 * @property {string[]} [l2_category] - The l2_category field represents the
 *   second level of categorization for items within an e-commerce platform's
 *   hierarchy. This allows for classification beyond the top-tier (level 1)
 *   categories, helping customers to narrow down their search and find products
 * @property {string} [brand]
 * @property {string[]} [image]
 * @property {string} [code]
 * @property {string[]} [l1_category] - The l1_category field represents the
 *   highest or top-tier level of categorization to which a product belongs
 *   within an e-commerce platform.It's an array, indicating that a product can
 *   belong to multiple top-tier categories, which provides a broad
 *   classification of the product.
 * @property {string} [size]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} [branch_url]
 * @property {Object} [meta] - Meta data of the item contains additional,
 *   potentially dynamic information about the item.
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {string[]} [images]
 */
/**
 * @typedef Dates
 * @property {string} [delivery_date] - Represents the scheduled date and time
 *   for the delivery of the entity.
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
 * @property {Object[]} [reasons]
 * @property {number} product_quantity
 * @property {boolean} [can_return]
 * @property {string} [display_name]
 * @property {boolean} [can_cancel]
 * @property {string} [size]
 * @property {number} [line_number]
 * @property {Object} [meta] - Meta data of the bag contains additional,
 *   potentially dynamic information about the bag.
 * @property {Prices} [prices]
 * @property {OrderingCurrencyPrices} [ordering_currency_prices]
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
 * @property {Object} [meta] - Meta data of the fulfilling store contains
 *   additional, potentially dynamic information about the fulfilling store.
 * @property {string} [address] - It contains the address details of the fulfilling store.
 * @property {string} [address1] - The primary address dynamically forms based
 *   on a template. If the template includes a single key, Address1 contains
 *   that data. For templates with multiple keys like Address1 compiles all into
 *   a single formatted string. The address is formed by the template provided
 *   and whichever keys are present in the template are populated as is from
 *   store address fields. Template Example: {address} {address2}_{area}
 *   {state}_{country},
 * @property {string} [display_address]
 * @property {string} [location_type] - Type of location of the fulfilling store.
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
 * @property {string} [currency_code] - This specifies the currency code for all
 *   amounts. The currency_code field will hold a string value representing the
 *   code for the currency in which all monetary amounts are denominated. This
 *   code typically follows the ISO 4217 standard, which uses three-letter
 *   alphabetic codes to define different currencies around the world. For
 *   example, 'USD' for United States Dollar, 'INR' for Indian Rupees.
 * @property {string} [currency_symbol]
 */
/**
 * @typedef OrderingCurrency
 * @property {string} [currency_code] - This specifies the currency code for all amounts.
 * @property {string} [currency_name]
 * @property {string} [currency_symbol]
 * @property {string} [currency_sub_unit]
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
 * @property {string} [order_created_ts]
 * @property {ShipmentStatus} [shipment_status]
 * @property {UserDataInfo} [user]
 * @property {string} [estimated_sla_time]
 * @property {string} [estimated_sla_ts]
 * @property {Address} [delivery_address]
 * @property {Address} [billing_address]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {boolean} [is_active] - This flag denotes whether the shipment is
 *   active or not
 * @property {ShipmentListingChannel} [channel]
 * @property {string} [previous_shipment_id]
 * @property {string} [forward_end_shipment_id] - The forward_end_shipment_id
 *   represents the shipment ID of the original forward journey shipment. When a
 *   shipment is transitioned to a return journey, the original shipment ID from
 *   the forward journey is recorded in the forward_end_shipment_id field of the
 *   return journey shipment. Even if the return shipment is later split into
 *   multiple shipments, each of these shipments will retain the same
 *   forward_end_shipment_id value that was assigned during the initial return
 *   journey initiation. This ensures that all return shipments can be traced
 *   back to the original forward journey shipment.
 * @property {boolean} [lock_status]
 * @property {string} [invoice_id]
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
 * @property {Object[]} [payment_info]
 * @property {string} [status_created_at] - Date time in UTC timezone as per ISO format.
 * @property {string} [status_created_ts]
 * @property {string} [display_name]
 * @property {BagUnit[]} [bags]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {Object} [meta] - Meta data of the item contains additional,
 *   potentially dynamic information about the item.
 * @property {string} [payment_mode]
 * @property {boolean} [can_process]
 * @property {Prices} [prices]
 * @property {OrderingCurrencyPrices} [ordering_currency_prices]
 * @property {string} order_id
 * @property {string} [ordering_channnel]
 * @property {string} [shipment_id]
 * @property {string} [customer_note]
 * @property {number} total_bags - The total number of bags in the shipment.
 * @property {string} shipment_created_at - Timestamp of the shipment created.
 * @property {string} [mode_of_payment]
 * @property {string} [shipment_created_ts]
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
 * @property {string} [updated_date] - Denotes the date and time when the
 *   invoice information was modified or updated.
 * @property {string} [external_invoice_id]
 * @property {string} [label_url]
 * @property {string} [credit_note_id]
 * @property {Object} [links]
 */
/**
 * @typedef OrderDetailsData
 * @property {string} [order_date] - Represents the date and time when the order
 *   was placed by the customer. This timestamp is essential for tracking the
 *   initiation of the order process, scheduling deliveries, and analyzing order
 *   timelines.
 * @property {string} [created_ts]
 * @property {Object} [tax_details] - Contains a flexible and comprehensive set
 *   of key-value pairs detailing the tax calculations and classifications
 *   applicable to the order.
 * @property {string} [cod_charges]
 * @property {string} [source]
 * @property {string} fynd_order_id
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_order_id]
 * @property {Object} [ordering_channel_logo] - Represents the logo of the
 *   channel through which the order was placed, encapsulating branding elements
 *   and any relevant styling attributes. This object is designed to be
 *   flexible, allowing for the inclusion of various properties that define how
 *   the logo should be displayed across different platforms or documents
 *   related to the order.
 * @property {string} [order_value]
 * @property {string} [ordering_channel]
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
 * @property {Object} [address] - It contains the properties for the address of a company.
 * @property {string} [company_cin]
 * @property {number} [company_id]
 * @property {string} [company_gst]
 * @property {ContactDetails} [company_contact]
 */
/**
 * @typedef OrderingStoreDetails
 * @property {string} [phone]
 * @property {string} [pincode]
 * @property {Object} [meta] - Meta data of the ordering store contains
 *   additional, potentially dynamic information about the ordering store.
 * @property {string} [address]
 * @property {string} [address1] - The primary address dynamically forms based
 *   on a template. If the template includes a single key, Address1 contains
 *   that data. For templates with multiple keys like {address} {address2}
 *   {area} {state} {country}, Address1 compiles all into a single formatted string.
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
 * @property {string} address - Provides the comprehensive address details of
 *   the buyer's shipping address.
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
 * @property {Object} [credit_note] - Specifies the reverse einvoice transaction
 *   create on government portal.
 * @property {Object} [invoice] - It specifies the forward einvoice transaction
 *   created on government portal.
 */
/**
 * @typedef Formatted
 * @property {string} [max]
 * @property {string} [min]
 */
/**
 * @typedef ShipmentTags
 * @property {string} [slug]
 * @property {string} [entity_type] - Type of entity that the tag is associated
 *   to (bag, shipments).
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
 * @property {string} [estimated_delivery_date] - Provides a forecasted date and
 *   time by which the shipment is expected to be delivered to the recipient.
 *   This estimation is crucial for planning purposes, both for the sender in
 *   managing expectations and for the recipient in preparing for receipt.
 * @property {boolean} same_store_available
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {Formatted} [formatted]
 * @property {DebugInfo} [debug_info]
 * @property {string} [return_awb_number]
 * @property {boolean} [is_self_ship]
 * @property {string} [box_type] - Box type of the shipment in which the
 *   shipment will be delivered.
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [parent_dp_id]
 * @property {number} [shipment_weight]
 * @property {Dimensions} [dimension]
 * @property {Object} [dp_options] - Delivery partner options that are available
 *   to deliver the shipment.
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [due_date] - Specifies the deadline by which a particular
 *   action related to the affiliate shipment needs to be completed.
 * @property {string} [store_invoice_updated_date] - Denotes the date and time
 *   when the store's invoice related to this shipment was updated. This
 *   timestamp is vital for tracking changes to billing details, adjustments in
 *   charges, or updates in the invoicing status.
 * @property {string} [forward_affiliate_shipment_id]
 * @property {number} [return_store_node]
 * @property {string} [fulfilment_priority_text]
 * @property {ShipmentTags[]} [shipment_tags]
 * @property {Object} [external]
 * @property {string} [awb_number]
 * @property {LockData} [lock_data]
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
 * @property {Object} [ewaybill_info] - Electronic Way Bill details i.e
 *   ewayBillNo, ewayBillDate that are utilized in the transportation of goods.
 * @property {string} [dp_id]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [marketplace_store_id]
 * @property {Object} [return_details] - An object containing the return details
 *   of the shipment.
 * @property {string} [dp_sort_key]
 * @property {string} [packaging_name]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {boolean} [auto_trigger_dp_assignment_acf]
 * @property {string} [dp_name]
 * @property {string} [po_number]
 * @property {number} weight
 * @property {Object} [b2c_buyer_details] - Contains detailed information about
 *   the buyer in a business-to-consumer (B2C) transaction. This object is
 *   designed to capture a wide array of buyer-specific data such as contact
 *   information, shipping address, preferences, and any other relevant details
 *   that enhance the understanding of the buyer's profile and needs.
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [return_affiliate_order_id]
 * @property {Object} [bag_weight] - This object is designed to accommodate a
 *   range of weight-related information. Denotes the weight of the bag,
 *   potentially including various measurements or related details.
 * @property {string} [refund_to]
 */
/**
 * @typedef PDFLinks
 * @property {string} invoice_type - The type of invoice issued, such as 'fynd'
 *   or other classifications.
 * @property {string} [label_a6]
 * @property {string} [invoice]
 * @property {string} [label_pos]
 * @property {string} [invoice_a6]
 * @property {string} [b2b]
 * @property {string} [label]
 * @property {string} [label_a4]
 * @property {string} label_type - Specifies the type of label associated with a
 *   PDF document,indicating its purpose or content. The label_type helps in
 *   organizing and identifying PDF documents quickly, ensuring that users or
 *   systems can efficiently utilize the correct documents for required actions.
 * @property {string} [invoice_export]
 * @property {string} [credit_note_url]
 * @property {string} [delivery_challan_a4]
 * @property {string} [label_export]
 * @property {string} [invoice_a4]
 * @property {string} [invoice_pos]
 * @property {string} [po_invoice]
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
 * @property {string} [ad_id] - Ad_id of an affiliate
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
 * @property {Object} [identifiers] - Details of Identifiers associated with the article.
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
 * @property {string} [created_on] - Timestamp when the brand of the order was created.
 * @property {string} [brand_name]
 * @property {string} [modified_on] - Timestamp when the brand of the order was modified.
 */
/**
 * @typedef AffiliateBagsDetails
 * @property {string} [affiliate_bag_id]
 * @property {string} [coupon_code] - A unique code provided to customers for
 *   redeeming special offers or discounts on their purchases.
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
 * @property {string} [promotion_name]
 * @property {DiscountRules[]} [discount_rules]
 * @property {number} [amount]
 * @property {number} [article_quantity]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promo_id]
 * @property {boolean} [mrp_promotion]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 */
/**
 * @typedef CurrentStatus
 * @property {number} [store_id]
 * @property {string} [delivery_awb_number]
 * @property {boolean} [kafka_sync]
 * @property {number} [delivery_partner_id]
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
 * @property {number} [state_id]
 * @property {number} id
 * @property {string} [created_at] - Denotes the date and time when the bag
 *   status was created.
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
 * @property {number} [quantity]
 * @property {string} [identifier]
 * @property {boolean} [can_return]
 * @property {boolean} [can_cancel]
 * @property {string} [display_name]
 * @property {number} [line_number]
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
 * @property {boolean} [is_parent]
 */
/**
 * @typedef FulfillingStore
 * @property {string} phone
 * @property {string} pincode
 * @property {Object} meta - Meta data of the fulfilling store contains
 *   additional, potentially dynamic information about the fulfilling store.
 * @property {string} address
 * @property {string} [address1] - The primary address dynamically forms based
 *   on a template. If the template includes a single key, Address1 contains
 *   that data. For templates with multiple keys like {address} {address2}
 *   {area} {state} {country}, Address1 compiles all into a single formatted string.
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
 * @property {Object} [meta] - It contains the additional properties related to
 *   shipment status transition like Kafka_emission_status, user_name, etc.
 *   Additionally it is dynamic.
 * @property {string[]} [bag_list]
 * @property {number} [id]
 * @property {string} [created_at] - Denotes the date and time when the
 *   transition was created.
 * @property {string} [created_ts]
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {string} [display_name]
 * @property {string} [current_shipment_status]
 * @property {string} [status_created_at] - Denotes the date and time when the
 *   transition of the status of the shipment was created.
 */
/**
 * @typedef ShipmentLockDetails
 * @property {boolean} [lock_status]
 * @property {string} [lock_message]
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
 * @property {TrackingList[]} [tracking_list]
 * @property {InvoiceInfo} [invoice]
 * @property {string} [shipment_status]
 * @property {GSTDetailsData} [gst_details]
 * @property {OrderStatusData} [order_status]
 * @property {Object} [delivery_slot] - Represents a specific time window
 *   allocated for the delivery of an order or shipment.
 * @property {OrderDetailsData} [order]
 * @property {UserDataInfo} [user]
 * @property {boolean} [enable_dp_tracking]
 * @property {string} [custom_message]
 * @property {string} [estimated_sla_time]
 * @property {string} [estimated_sla_ts]
 * @property {boolean} [can_update_dimension]
 * @property {string[]} [shipment_images]
 * @property {Object} [delivery_details] - Delivery Details of user
 * @property {Object} [billing_details] - Billing Details of user
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
 * @property {Object} [payment_methods] - This field stores a collection of
 *   payment method objects used in a transaction. Each key within this object
 *   represents a unique payment method code (e.g., "COD" for Cash On Delivery),
 *   and its value is an object containing detailed information about that
 *   payment method. The structure is designed to accommodate any number of
 *   payment methods,providing flexibility and comprehensive insights into each
 *   transaction's payment aspect.
 * @property {Object[]} [payment_info]
 * @property {Object} [coupon] - Coupon data of the shipment which denotes if
 *   coupon is applied, coupon code, coupon amount, coupon title and coupon message.
 * @property {AffiliateDetails} [affiliate_details]
 * @property {string} [priority_text]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {boolean} [is_dp_assign_enabled]
 * @property {OrderBags[]} [bags]
 * @property {boolean} [dp_assignment]
 * @property {number} [total_items]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object} [meta] - Meta data of the shipment contains additional,
 *   potentially dynamic information about the shipment.
 * @property {Object} [pdf_links] - PDF Links associated with the shipment.
 * @property {string} [payment_mode]
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
 * @property {PriceAdjustmentCharge[]} [charges]
 * @property {OrderingCurrencyPrices} [ordering_currency_prices]
 * @property {string} [vertical]
 * @property {string} shipment_id
 * @property {ShipmentPayments} [payments]
 * @property {string} [operational_status]
 * @property {ShipmentStatusData} [status]
 * @property {number} [total_bags] - The total number of bags in the shipment.
 * @property {string} [shipment_created_at] - Denotes the date and time when the
 *   shipment was created.
 * @property {string} [shipment_created_ts]
 * @property {Currency} [currency]
 * @property {CurrencyInfo} [currency_info]
 * @property {string} [previous_shipment_id]
 * @property {number} [shipment_update_time]
 * @property {Address} [rto_address]
 * @property {string} [credit_note_id]
 * @property {boolean} [is_self_ship]
 * @property {string} [mode_of_payment]
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
 * @property {Object} [meta] - It contains the additional properties related to
 *   shipment status transition like Kafka_emission_status, user_name, etc.
 *   Additionally it is dynamic.
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
 * @property {Object} [meta] - It contains the additional properties related to
 *   order transition like Kafka_emission_status, user_name, etc. Additionally
 *   it is dynamic, potentially.
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
 * @property {Prices} [prices]
 * @property {OrderingCurrencyPrices} [ordering_currency_prices]
 */
/**
 * @typedef OrderListingResponseSchema
 * @property {number} [total_count]
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {PlatformOrderItems[]} [items]
 * @property {string} [lane]
 * @property {Page} [page]
 */
/**
 * @typedef PlatformTrack
 * @property {string} [last_location_recieved_at] - Specifies the date and time
 *   when an update on the shipment's fulfilling store was received on the platform.
 * @property {Object} [meta] - It contains the additional properties related to
 *   shipment transition like Kafka_emission_status, user_name, etc.
 *   Additionally it is dynamic.
 * @property {string} [raw_status]
 * @property {string} [updated_at] - Records the date and time when the platform
 *   received an update on the shipment's location.
 * @property {string} [updated_time]
 * @property {string} [awb]
 * @property {string} [shipment_type] - Shipment type of the shipment.
 * @property {string} [status]
 * @property {string} [reason]
 * @property {string} [account_name]
 */
/**
 * @typedef PlatformShipmentTrack
 * @property {Object} [meta] - Meta data of the shipment contains additional,
 *   potentially dynamic information about the shipment.
 * @property {PlatformTrack[]} [results]
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
 * @property {Reason[]} [reasons]
 * @property {boolean} [success]
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
 * @property {Address} [delivery_address]
 * @property {DeliverySlotDetails} [delivery_slot]
 * @property {string} [display_name]
 * @property {Object} [dp_details]
 * @property {Object} [einvoice_info]
 * @property {string} [entity_type] - Type of entity that the tag is associated
 *   to (bag, shipments).
 * @property {Object} [fallback_user] - Details of the fallback user associated
 *   with the bag .
 * @property {FinancialBreakup[]} [financial_breakup]
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
 * @property {number} [line_number]
 * @property {boolean} [lock_status]
 * @property {string} [manifest_id]
 * @property {Object} [meta] - Meta data of the bag details contains additional,
 *   potentially dynamic information about the bag details.
 * @property {string} [mode_of_payment]
 * @property {number} [no_of_bags_order]
 * @property {string} [operational_status]
 * @property {OrderDetails} [order]
 * @property {string} [order_integration_id]
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
 * @property {number} [order_value]
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
 * @property {PriceAdjustmentCharge[]} [charges]
 * @property {boolean} [qc_required]
 * @property {number} [quantity]
 * @property {Object[]} [reasons]
 * @property {boolean} [restore_coupon]
 * @property {Object} [restore_promos] - Provides a flexible structure for
 *   storing information about promotion details or offers that are eligible for
 *   restoration. This can include details such as promo codes, descriptions of
 *   the offers, eligibility criteria, restoration conditions, and any other
 *   relevant data that supports the reactivation of previously paused or
 *   expired promotions.
 * @property {Address} [rto_address]
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
 * @property {string} [transaction_type] - Specifies the type of the transaction
 *   being processed. This classification helps in distinguishing between
 *   different operational processes and allows for tailored handling of each
 *   transaction type. For example, a 'shipment' transaction type refers to
 *   operations related to the shipping of goods.
 * @property {string} [type]
 * @property {string} [updated_at] - The date and time when the bag was last updated.
 * @property {UserDetails} [user]
 * @property {WeightData} [weight]
 * @property {number[]} [original_bag_list]
 * @property {string} [identifier]
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
 * @property {string} [message]
 * @property {boolean} [success]
 */
declare class OrderPlatformModel {
}
declare namespace OrderPlatformModel {
    export { InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponseSchema, InvalidateShipmentCacheResponseSchema, ErrorResponseSchema, StoreReassign, StoreReassignResponseSchema, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponseSchema, UpdateShipmentLockResponseSchema, AnnouncementResponseSchema, AnnouncementsResponseSchema, BaseResponseSchema, Click2CallResponseSchema, ErrorDetail, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, OrderItemDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, OrderDataUpdates, DataUpdates, ShipmentsRequestSchema, UpdatedAddressSchema, UpdateAddressRequestBody, StatuesRequestSchema, UpdateShipmentStatusRequestSchema, ShipmentsResponseSchema, DPConfiguration, PaymentConfig, LockStateMessage, CreateOrderConfig, StatuesResponseSchema, UpdateShipmentStatusResponseBody, OrderUser, OrderPriority, ArticleDetails, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, UserData, OrderInfo, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderResponseSchema, DispatchManifest, SuccessResponseSchema, ActionInfo, GetActionsResponseSchema, HistoryReason, RefundInformation, HistoryMeta, HistoryDict, ShipmentHistoryResponseSchema, PostHistoryFilters, PostHistoryData, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, SendSmsResponseSchema, Dimension, UpdatePackagingDimensionsPayload, UpdatePackagingDimensionsResponseSchema, Tax, Charge, LineItem, ProcessingDates, Tag, ProcessAfterConfig, SystemMessages, Shipment, ShippingInfo, BillingInfo, UserInfo, TaxInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponseSchema, CreateChannelConfigResponseSchema, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, BagStateTransitionMap, RoleBaseStateTransitionMapping, FetchCreditBalanceRequestPayload, CreditBalanceInfo, FetchCreditBalanceResponsePayload, RefundModeConfigRequestPayload, RefundOption, RefundModeInfo, RefundModeConfigResponsePayload, AttachUserOtpData, AttachUserInfo, AttachOrderUser, AttachOrderUserResponseSchema, SendUserMobileOTP, PointBlankOtpData, SendUserMobileOtpResponseSchema, VerifyOtpData, VerifyMobileOTP, VerifyOtpResponseData, VerifyOtpResponseSchema, BulkReportsDownloadRequestSchema, BulkReportsDownloadResponseSchema, BulkFailedResponseSchema, BulkStateTransistionRequestSchema, BulkStateTransistionResponseSchema, ShipmentActionInfo, BulkActionListingData, BulkListinPage, BulkListingResponseSchema, JobDetailsData, JobDetailsResponseSchema, JobFailedResponseSchema, ManifestPageInfo, ManifestItemDetails, ManifestShipmentListing, DateRange, Filters, ManifestFile, ManifestMediaUpdate, PDFMeta, TotalShipmentPricesCount, ManifestMeta, Manifest, ManifestList, ManifestDetails, FiltersRequestSchema, ProcessManifest, ProcessManifestResponseSchema, ProcessManifestItemResponseSchema, FilterInfoOption, FiltersInfo, ManifestFiltersResponseSchema, PageDetails, EInvoiceIrnDetails, EInvoiceErrorDetails, EInvoiceDetails, EInvoiceResponseData, EInvoiceRetry, EInvoiceRetryResponseSchema, EInvoiceErrorInfo, EInvoiceErrorResponseData, EInvoiceErrorResponseSchema, EInvoiceErrorResponseDetails, EInvoiceRetryShipmentData, CourierPartnerTrackingDetails, CourierPartnerTrackingResponseSchema, LogsChannelDetails, LogPaymentDetails, FailedOrdersItem, FailedOrderLogs, FailedOrderLogDetails, GenerateInvoiceIDResponseData, GenerateInvoiceIDErrorResponseData, GenerateInvoiceIDRequestSchema, GenerateInvoiceIDResponseSchema, GenerateInvoiceIDErrorResponseSchema, ManifestResponseSchema, ProcessManifestRequestSchema, ManifestItems, ConfigData, ConfigUpdatedResponseSchema, FlagData, Flags, Filter, PostHook, PreHook, Config, TransitionConfigCondition, TransitionConfigData, TransitionConfigPayload, RuleListRequestSchema, RuleErrorResponseSchema, RMAPageInfo, RuleAction, QuestionSetItem, Reason, Conditions, RuleItem, RuleError, RuleListResponseSchema, UpdateShipmentPaymentMode, ProductSchema, PaymentMethodSchema, ActionDetailSchema, PaymentMetaDataSchema, PaymentMetaLogoURLSchema, ValidationError, Page, BagReasonMeta, QuestionSet, BagReasons, ShipmentBagReasons, ShipmentStatus, UserDataInfo, Address, ShipmentListingChannel, Prices, ChargeDistributionSchema, ChargeDistributionLogic, ChargeAmountCurrency, ChargeAmount, PriceAdjustmentCharge, OrderingCurrencyPrices, Identifier, FinancialBreakup, GSTDetailsData, BagStateMapper, BagStatusHistory, Dimensions, ReturnConfig, Weight, Article, ShipmentListingBrand, ReplacementDetails, AffiliateMeta, AffiliateBagDetails, PlatformArticleAttributes, PlatformItem, Dates, BagReturnableCancelableStatus, BagUnit, ShipmentItemFulFillingStore, Currency, OrderingCurrency, ConversionRate, CurrencyInfo, ShipmentItem, ShipmentInternalPlatformViewResponseSchema, TrackingList, InvoiceInfo, OrderDetailsData, UserDetailsData, PhoneDetails, ContactDetails, CompanyDetails, OrderingStoreDetails, DPDetailsData, BuyerDetails, DebugInfo, EinvoiceInfo, Formatted, ShipmentTags, LockData, ShipmentTimeStamp, ShipmentMeta, PDFLinks, AffiliateDetails, BagConfigs, OrderBagArticle, OrderBrandName, AffiliateBagsDetails, BagPaymentMethods, DiscountRules, ItemCriterias, BuyRules, PriceMinMax, ItemPriceDetails, FreeGiftItems, AppliedFreeArticles, AppliedPromos, CurrentStatus, OrderBags, FulfillingStore, ShipmentPayments, ShipmentStatusData, ShipmentLockDetails, PlatformShipment, ShipmentInfoResponseSchema, TaxDetails, PaymentInfoData, OrderData, OrderDetailsResponseSchema, SubLane, SuperLane, LaneConfigResponseSchema, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponseSchema, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponseSchema, URL, FileResponseSchema, BulkActionTemplate, BulkActionTemplateResponseSchema, PlatformShipmentReasonsResponseSchema, ShipmentResponseReasons, ShipmentReasonsResponseSchema, StoreAddress, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, StoreMeta, Store, Brand, Item, ArticleStatusDetails, Company, ShipmentGstDetails, DeliverySlotDetails, InvoiceDetails, UserDetails, WeightData, BagDetails, BagDetailsPlatformResponseSchema, BagsPage, BagData, GetBagsPlatformResponseSchema, GeneratePosOrderReceiptResponseSchema, Templates, AllowedTemplatesResponseSchema, TemplateDownloadResponseSchema, Error };
}
/** @returns {InvalidateShipmentCachePayload} */
declare function InvalidateShipmentCachePayload(): InvalidateShipmentCachePayload;
type InvalidateShipmentCachePayload = {
    /**
     * - Shipment Ids to clear cache
     */
    shipment_ids?: string[];
    /**
     * - Affiliate Bag Ids to clear cache
     * of shipment Ids mapped to it
     */
    affiliate_bag_ids?: string[];
    /**
     * - Bag Ids to clear cache of shipment Ids mapped to it
     */
    bag_ids?: string[];
};
/** @returns {InvalidateShipmentCacheNestedResponseSchema} */
declare function InvalidateShipmentCacheNestedResponseSchema(): InvalidateShipmentCacheNestedResponseSchema;
type InvalidateShipmentCacheNestedResponseSchema = {
    shipment_id?: string;
    /**
     * - The HTTP status code corresponding to the
     * overall status of the shipment response.
     */
    status?: number;
    message?: string;
    error?: string;
};
/** @returns {InvalidateShipmentCacheResponseSchema} */
declare function InvalidateShipmentCacheResponseSchema(): InvalidateShipmentCacheResponseSchema;
type InvalidateShipmentCacheResponseSchema = {
    response?: InvalidateShipmentCacheNestedResponseSchema[];
};
/** @returns {ErrorResponseSchema} */
declare function ErrorResponseSchema(): ErrorResponseSchema;
type ErrorResponseSchema = {
    /**
     * - The HTTP status code corresponding to the error.
     */
    status?: number;
    /**
     * - Indicates whether the operation was
     * successful. Always false in the case of an error.
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
    store_id: number;
    bag_id?: number;
    affiliate_order_id?: string;
    affiliate_id?: string;
    item_id?: string;
    fynd_order_id?: string;
    set_id?: string;
    affiliate_bag_id?: string;
    reason_ids?: number[];
    mongo_article_id?: string;
};
/** @returns {StoreReassignResponseSchema} */
declare function StoreReassignResponseSchema(): StoreReassignResponseSchema;
type StoreReassignResponseSchema = {
    success?: boolean;
    message?: string;
};
/** @returns {Entities} */
declare function Entities(): Entities;
type Entities = {
    /**
     * - Shipment ID if 'entity_type': shipments | Bag Id if
     * 'entity_type': bags
     */
    id?: string;
    /**
     * - Application/Affiliate Order ID,
     * Required if the ID is missing
     */
    affiliate_order_id?: string;
    /**
     * - Application/Affiliate ID, Required if the
     * ID is missing
     */
    affiliate_id?: string;
    /**
     * - Reason For Shipment/Bag Action
     */
    reason_text: string;
    /**
     * - Application/Affiliate Bag ID,
     * Required if the ID is missing
     */
    affiliate_bag_id?: string;
    /**
     * - Application/Affiliate Shipment
     * ID, Required if the ID is missing
     */
    affiliate_shipment_id?: string;
};
/** @returns {UpdateShipmentLockPayload} */
declare function UpdateShipmentLockPayload(): UpdateShipmentLockPayload;
type UpdateShipmentLockPayload = {
    /**
     * - Type of entity that the tag is associated to
     * (bag, shipments).
     */
    entity_type: string;
    /**
     * - Specifies the operation to be performed on a
     * shipment, with available actions including 'lock', 'unlock', and 'check'.
     * Each action triggers a specific transition - lock-- Locks the shipment,
     * preventing any modifications. - unlock-- Unlocks the shipment, allowing for
     * modifications. - check-- Verifies the shipment's status or condition.
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
     * - Shipment/Entity
     */
    entities: Entities[];
    resume_tasks_after_unlock?: boolean;
    /**
     * - Lock Shipment After Transition
     */
    lock_after_transition?: boolean;
    /**
     * - Unlock Shipment After Transition
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
    success?: boolean;
    message?: string;
    /**
     * - Entity Lock Status, If
     * the action input as 'check'
     */
    check_response?: CheckResponseSchema[];
};
/** @returns {AnnouncementResponseSchema} */
declare function AnnouncementResponseSchema(): AnnouncementResponseSchema;
type AnnouncementResponseSchema = {
    to_datetime?: string;
    id: number;
    description?: string;
    platform_name?: string;
    from_datetime?: string;
    platform_id?: string;
    title?: string;
    company_id?: number;
    logo_url?: string;
    /**
     * - The date and time when the announcement was
     * created and active.
     */
    created_at?: string;
};
/** @returns {AnnouncementsResponseSchema} */
declare function AnnouncementsResponseSchema(): AnnouncementsResponseSchema;
type AnnouncementsResponseSchema = {
    announcements?: AnnouncementResponseSchema[];
    success?: boolean;
    message?: string;
};
/** @returns {BaseResponseSchema} */
declare function BaseResponseSchema(): BaseResponseSchema;
type BaseResponseSchema = {
    success?: boolean;
    message?: string;
};
/** @returns {Click2CallResponseSchema} */
declare function Click2CallResponseSchema(): Click2CallResponseSchema;
type Click2CallResponseSchema = {
    /**
     * - Call ID from the provider
     */
    call_id: string;
    /**
     * - Success
     */
    success: boolean;
};
/** @returns {ErrorDetail} */
declare function ErrorDetail(): ErrorDetail;
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
/** @returns {ProductsReasonsFilters} */
declare function ProductsReasonsFilters(): ProductsReasonsFilters;
type ProductsReasonsFilters = {
    /**
     * - Product/Bag Line number for the
     * Product/Bag Identifier
     */
    line_number?: number;
    /**
     * - Product/Bag Article/Item Identifier
     */
    identifier?: string;
    quantity?: number;
};
/** @returns {ProductsReasonsData} */
declare function ProductsReasonsData(): ProductsReasonsData;
type ProductsReasonsData = {
    reason_text?: string;
    reason_id?: number;
};
/** @returns {ProductsReasons} */
declare function ProductsReasons(): ProductsReasons;
type ProductsReasons = {
    filters?: ProductsReasonsFilters[];
    data?: ProductsReasonsData;
};
/** @returns {EntityReasonData} */
declare function EntityReasonData(): EntityReasonData;
type EntityReasonData = {
    reason_text?: string;
    reason_id?: number;
};
/** @returns {EntitiesReasons} */
declare function EntitiesReasons(): EntitiesReasons;
type EntitiesReasons = {
    filters?: any[];
    data?: EntityReasonData;
};
/** @returns {ReasonsData} */
declare function ReasonsData(): ReasonsData;
type ReasonsData = {
    products?: ProductsReasons[];
    entities?: EntitiesReasons[];
};
/** @returns {Products} */
declare function Products(): Products;
type Products = {
    /**
     * - Product/Bag Line number for the
     * Product/Bag Identifier
     */
    line_number?: number;
    /**
     * - Product/Bag Article/Item Identifier
     */
    identifier?: string;
    quantity?: number;
};
/** @returns {OrderItemDataUpdates} */
declare function OrderItemDataUpdates(): OrderItemDataUpdates;
type OrderItemDataUpdates = {
    /**
     * - Encapsulates a dynamic set of updates and
     * modifications applied to bag status object.
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
     * product’s identifier, such as a SKU, barcode, or another distinct code.
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
     * - Filter for the Product/Bag
     */
    filters?: ProductsDataUpdatesFilters[];
    /**
     * - Encapsulates a dynamic set of updates and
     * modifications applied to a product.
     */
    data?: any;
};
/** @returns {EntitiesDataUpdates} */
declare function EntitiesDataUpdates(): EntitiesDataUpdates;
type EntitiesDataUpdates = {
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
/** @returns {DataUpdates} */
declare function DataUpdates(): DataUpdates;
type DataUpdates = {
    order_item_status?: OrderItemDataUpdates[];
    products?: ProductsDataUpdates[];
    entities?: EntitiesDataUpdates[];
    order?: OrderDataUpdates[];
};
/** @returns {ShipmentsRequestSchema} */
declare function ShipmentsRequestSchema(): ShipmentsRequestSchema;
type ShipmentsRequestSchema = {
    /**
     * - Shipment ID
     */
    identifier: string;
    reasons?: ReasonsData;
    /**
     * - Product/Bag to be updated
     */
    products?: Products[];
    data_updates?: DataUpdates;
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
    status?: string;
    /**
     * - An array of shipment
     * objects, each containing identifiers, product details and reasons for the
     * shipment's current status.
     */
    shipments?: ShipmentsRequestSchema[];
    /**
     * - State to be change for
     * Remaining Bag/Products
     */
    exclude_bags_next_state?: string;
    /**
     * - Flag to split shipment
     */
    split_shipment?: boolean;
};
/** @returns {UpdateShipmentStatusRequestSchema} */
declare function UpdateShipmentStatusRequestSchema(): UpdateShipmentStatusRequestSchema;
type UpdateShipmentStatusRequestSchema = {
    /**
     * - Indicates whether the transition
     * should be forced.
     */
    force_transition?: boolean;
    /**
     * - An array detailing the
     * various stages a shipment can undergo, each entry representing a distinct
     * status. Each status object includes comprehensive details about shipments
     * under that status, product specifics, reasons for the status (if
     * applicable), and any updates to shipment or product data.
     */
    statuses?: StatuesRequestSchema[];
    /**
     * - Lock Shipment After Transition
     */
    lock_after_transition?: boolean;
    /**
     * - Unlock Shipment After Transition
     */
    unlock_before_transition?: boolean;
    /**
     * - To Run Status Update as a background Task
     */
    task?: boolean;
    /**
     * - Resume Tasks After Unlock
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
     * - Shipping_by denotes dp assignment
     * strategy- if shipping_by is fynd dp assignment would be handled by OMS
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
     * - Flag denotes if the location
     * for the store needs to be reassigned post cancellation. If true,location
     * for the store gets auto reassigned post cancellation, if set false location
     * reassignment will not be performed as its disabled.
     */
    location_reassignment?: boolean;
    payment?: PaymentConfig;
    /**
     * - Denotes the shipment
     * breaking strategy. If the flag is set true, the shipment is created using
     * optimal shipment creation strategy based on the servicability & packaging
     * dimensions by OMS .If false, shipment details, including location_id, must
     * be passed to FDK for processing.
     */
    optimal_shipment_creation?: boolean;
    /**
     * - A list of
     * state-specific custom lock messages.
     */
    lock_state_messages?: LockStateMessage[];
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
    fynd_order_id: string;
};
/** @returns {DispatchManifest} */
declare function DispatchManifest(): DispatchManifest;
type DispatchManifest = {
    /**
     * - Id of the manifest.
     */
    manifest_id: string;
};
/** @returns {SuccessResponseSchema} */
declare function SuccessResponseSchema(): SuccessResponseSchema;
type SuccessResponseSchema = {
    success?: boolean;
    message?: string;
};
/** @returns {ActionInfo} */
declare function ActionInfo(): ActionInfo;
type ActionInfo = {
    display_text: string;
    id: number;
    description: string;
    slug: string;
};
/** @returns {GetActionsResponseSchema} */
declare function GetActionsResponseSchema(): GetActionsResponseSchema;
type GetActionsResponseSchema = {
    permissions?: ActionInfo[];
};
/** @returns {HistoryReason} */
declare function HistoryReason(): HistoryReason;
type HistoryReason = {
    text?: string;
    category?: string;
    state?: string;
    dislay_name?: string;
    code?: number;
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
    store_id?: number;
    status?: string;
    status1?: string;
    call_id?: string;
    starttime?: string;
    reason?: HistoryReason;
    short_link?: string;
    endtime?: string;
    store_name?: string;
    caller?: string;
    /**
     * - The unique identifier representing the code
     * for the affiliate's store, often used for internal reference.
     */
    store_code?: string;
    billsec?: string;
    recordpath?: string;
    status2?: string;
    callerid?: string;
    duration?: string;
    /**
     * - This represents the Ordering channel type.
     */
    channel_type?: string;
    activity_comment?: string;
    /**
     * - Defines the category of event-related
     * information for a shipment, indicating the nature of the update. This
     * includes whether the update pertains to the status of the shipment,
     * comments added to it, or notifications about specific events.
     */
    activity_type?: string;
    receiver?: string;
    recipient?: string;
    slug?: string;
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
     * - Display Message
     */
    display_message?: string;
    /**
     * - Bag ID
     */
    bag_id?: number;
    /**
     * - Ticket URL
     */
    ticket_url?: string;
    /**
     * - L3 details of bag
     */
    l3_detail?: string;
    /**
     * - Create date
     */
    createdat: string;
    /**
     * - Ticket ID
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
     * - L2 details of bag
     */
    l2_detail?: string;
    /**
     * - Assigned Agent
     */
    assigned_agent?: string;
    meta?: HistoryMeta;
    /**
     * - L1 details of bag
     */
    l1_detail?: string;
    /**
     * - History Message or comment
     */
    message: string;
    /**
     * - User who created the history
     */
    user: string;
};
/** @returns {ShipmentHistoryResponseSchema} */
declare function ShipmentHistoryResponseSchema(): ShipmentHistoryResponseSchema;
type ShipmentHistoryResponseSchema = {
    success?: boolean;
    activity_history: HistoryDict[];
};
/** @returns {PostHistoryFilters} */
declare function PostHistoryFilters(): PostHistoryFilters;
type PostHistoryFilters = {
    shipment_id: string;
    line_number?: string;
    identifier?: string;
};
/** @returns {PostHistoryData} */
declare function PostHistoryData(): PostHistoryData;
type PostHistoryData = {
    user_name: string;
    message: string;
};
/** @returns {PostHistoryDict} */
declare function PostHistoryDict(): PostHistoryDict;
type PostHistoryDict = {
    filters: PostHistoryFilters[];
    data: PostHistoryData;
};
/** @returns {PostShipmentHistory} */
declare function PostShipmentHistory(): PostShipmentHistory;
type PostShipmentHistory = {
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
     * - Phone number for communication
     */
    phone_number: string;
    /**
     * - Data mapped in Communication template: amount_paid
     */
    amount_paid?: number;
    /**
     * - OrderId
     */
    order_id: string;
    /**
     * - Data mapped in Communication template: payment_mode
     */
    payment_mode?: string;
    /**
     * - Data mapped in Communication template:
     * customer_name
     */
    customer_name?: string;
    /**
     * - Data mapped in Communication template: brand_name
     */
    brand_name?: string;
    /**
     * - Message to be send in SMS
     */
    message: string;
    /**
     * - Uniquely identifies the country associated
     * with the mobile number in ISO 3166-1 alpha-2 format. This code is essential
     * for for correctly formatting and routing the OTP messages to mobile phones
     * across international borders. Examples include 'US' for the United States,
     * 'IN' for India.
     */
    country_code: string;
};
/** @returns {SendSmsPayload} */
declare function SendSmsPayload(): SendSmsPayload;
type SendSmsPayload = {
    /**
     * - Bag_id for the activity history track
     */
    bag_id: string;
    /**
     * - SMS Data
     */
    data?: SmsDataPayload;
    /**
     * - Slug name for the template mapped in pointblank
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
    currency?: string;
    total_order_value?: number;
    ordering_channel?: string;
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
};
/** @returns {Meta} */
declare function Meta(): Meta;
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
/** @returns {ShipmentDetail} */
declare function ShipmentDetail(): ShipmentDetail;
type ShipmentDetail = {
    shipment_id?: string;
    status?: string;
    id: number;
    bag_list?: number[];
    meta: Meta;
    remarks?: string;
};
/** @returns {OrderStatusData} */
declare function OrderStatusData(): OrderStatusData;
type OrderStatusData = {
    order_details: OrderDetails;
    errors?: string[];
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
    success: string;
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
    weight?: string;
    height?: string;
    length?: number;
    width?: number;
};
/** @returns {UpdatePackagingDimensionsPayload} */
declare function UpdatePackagingDimensionsPayload(): UpdatePackagingDimensionsPayload;
type UpdatePackagingDimensionsPayload = {
    shipment_id: string;
    current_status: string;
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
    name: string;
    rate: number;
    breakup?: any[];
    /**
     * - The base amount of the tax.
     */
    amount: any;
};
/** @returns {Charge} */
declare function Charge(): Charge;
type Charge = {
    /**
     * - The name of the charge.
     */
    name: string;
    /**
     * - The monetary value of the charge, including value
     * and currency details.
     */
    amount: any;
    tax?: Tax;
    /**
     * - An optional code associated with the charge for
     * internal tracking.
     */
    code?: string;
    /**
     * - The category or type of the charge.
     */
    type: string;
};
/** @returns {LineItem} */
declare function LineItem(): LineItem;
type LineItem = {
    charges?: Charge[];
    /**
     * - Meta data of the articles or line items.
     */
    meta?: any;
    /**
     * - Meta data of the articles or line items.
     */
    custom_message?: string;
    /**
     * - Quantity of the articles or line items.
     */
    quantity?: number;
    /**
     * - Seller identifier of the articles or line items.
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
     * - Specifies the designated time slot for
     * the delivery partner to pick up the package, ensuring efficient
     * coordination and scheduling.
     */
    dp_pickup_slot?: any;
    /**
     * - Indicates the earliest date and
     * time when the package can be dispatched, helping to manage logistics and
     * delivery expectations.
     */
    dispatch_after_date?: string;
    /**
     * - Sets the deadline by which the
     * package must be dispatched to meet delivery timelines, crucial for
     * maintaining service level agreements.
     */
    dispatch_by_date?: string;
    /**
     * - Specifies the deadline for order
     * confirmation, ensuring that processing begins in a timely manner to meet
     * dispatch and delivery schedules.
     */
    confirm_by_date?: string;
    /**
     * - Allocates a specific time slot
     * for the customer to pick up the package, enhancing convenience and customer
     * satisfaction.
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
     * - Integer value indicating high and low priority.
     */
    priority?: number;
    /**
     * - Location Identifier or Store/Fulfillment
     * Identifier of the shipment- This field is mandatory when
     * optimal_shipment_creation flag is set to false, indicating that shipments
     * must be associated with a specific location. When
     * `optimal_shipment_creation` is true, the optimal location for order
     * creation would be assigned, location_id becomes optional.
     */
    location_id?: number;
    /**
     * - Defines the specific journey a shipment
     * will follow based on the application's operational needs and customer
     * preferences. This field categorizes orders into distinct types, each
     * associated with a unique processing flow. For example:
     *
     * - "HomeDelivery": The order undergoes all state transitions typical for a
     * delivery, from processing the shipment to final delivery at the
     * customer's address.
     * - "PickAtStore": The order is prepared for pickup and moved to a state where it
     * is ready to be handed over directly to the customer at the store. This
     * type streamlines the process by bypassing traditional shipping stages
     * and facilitating a quicker transition to the final handover stage.
     * - "Digital": This order type likely refers to orders that involve digital goods
     * or services, such as software, digital subscriptions, e-books, online
     * courses, or any other item that can be delivered electronically.
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
/** @returns {ShippingInfo} */
declare function ShippingInfo(): ShippingInfo;
type ShippingInfo = {
    alternate_mobile_number?: string;
    state?: string;
    /**
     * - A unique identifier assigned to the
     * customer, facilitating order tracking and service customization.
     */
    customer_code?: string;
    /**
     * - Specifies the method or service used for
     * the shipping of the shipment.
     */
    shipping_type?: string;
    middle_name?: string;
    primary_mobile_number?: string;
    last_name?: string;
    /**
     * - Geographic coordinates (latitude and
     * longitude) of the shipping address
     */
    geo_location?: any;
    gender?: string;
    house_no?: string;
    first_name?: string;
    title?: string;
    landmark?: string;
    country?: string;
    /**
     * - The type of the address.
     */
    address_type?: string;
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
    slot?: any[];
    address?: string;
    area?: string;
    address1?: string;
    pincode?: string;
    primary_email?: string;
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
     * identifier ollowing the ISO 3166-1 alpha-2 standard. This two-letter code
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
    area?: string;
    address1?: string;
    pincode?: string;
    primary_email?: string;
    address2?: string;
    landmark?: string;
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
    user_id?: string;
    /**
     * - User type of the user.
     */
    user_type?: string;
    primary_email?: string;
    gender?: string;
    first_name: string;
    last_name?: string;
    primary_mobile_number: string;
};
/** @returns {TaxInfo} */
declare function TaxInfo(): TaxInfo;
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
    pan_no?: string;
};
/** @returns {PaymentMethod} */
declare function PaymentMethod(): PaymentMethod;
type PaymentMethod = {
    collect_by: string;
    mode: string;
    refund_by: string;
    name: string;
    amount: number;
    /**
     * - An object containing additional metadata for the
     * Payment Method.
     */
    meta?: any;
    /**
     * - An object containing transaction data
     * for the Payment Method.
     */
    transaction_data?: any;
};
/** @returns {PaymentInfo} */
declare function PaymentInfo(): PaymentInfo;
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
/** @returns {CreateOrderAPI} */
declare function CreateOrderAPI(): CreateOrderAPI;
type CreateOrderAPI = {
    /**
     * - List of Shipments which includes shipment
     * data like shipment items, shipment promise, Shipment type, shipment order
     * type, shipment dp options etc.
     */
    shipments: Shipment[];
    shipping_info: ShippingInfo;
    billing_info: BillingInfo;
    /**
     * - This object can accommodate a range of
     * currency-related information, provides a flexible structure for storing
     * comprehensive details about the currency or currencies involved in a transaction.
     */
    currency_info?: any;
    external_order_id?: string;
    charges?: Charge[];
    /**
     * - Specifies the date and time
     * when the record was initially created in an external system.
     */
    external_creation_date?: string;
    /**
     * - Meta data of the order that contains additional,
     * potentially dynamic information about the order.
     */
    meta?: any;
    tax_info?: TaxInfo;
    config?: CreateOrderConfig;
    payment_info: PaymentInfo;
    user_info?: UserInfo;
    ordering_store_id?: number;
    order_platform?: string;
    /**
     * - Represents the current status of the order,
     * specifying whether the order is in a 'pendency' state (awaiting further
     * action) or marked as 'complete'.
     */
    status?: string;
    system_messages?: SystemMessages[];
};
/** @returns {CreateOrderErrorReponse} */
declare function CreateOrderErrorReponse(): CreateOrderErrorReponse;
type CreateOrderErrorReponse = {
    request_id?: string;
    status: number;
    info?: any;
    stack_trace?: string;
    code?: string;
    meta?: string;
    message: string;
    exception?: string;
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
    error?: string;
};
/** @returns {CreateChannelConfigResponseSchema} */
declare function CreateChannelConfigResponseSchema(): CreateChannelConfigResponseSchema;
type CreateChannelConfigResponseSchema = {
    is_inserted?: boolean;
    is_upserted?: boolean;
    acknowledged?: boolean;
};
/** @returns {UploadConsent} */
declare function UploadConsent(): UploadConsent;
type UploadConsent = {
    consent_url: string;
    manifest_id: string;
};
/** @returns {PlatformOrderUpdate} */
declare function PlatformOrderUpdate(): PlatformOrderUpdate;
type PlatformOrderUpdate = {
    order_id: string;
};
/** @returns {ResponseDetail} */
declare function ResponseDetail(): ResponseDetail;
type ResponseDetail = {
    success?: boolean;
    message?: string[];
};
/** @returns {FyndOrderIdList} */
declare function FyndOrderIdList(): FyndOrderIdList;
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
/** @returns {OrderStatus} */
declare function OrderStatus(): OrderStatus;
type OrderStatus = {
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
    success?: boolean;
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
    fynd_order_id: string;
    seller_id: number;
    affiliate_id: string;
    customer_mobile_number?: string;
};
/** @returns {RefundOption} */
declare function RefundOption(): RefundOption;
type RefundOption = {
    value?: string;
    slug?: string;
    name?: string;
    type?: string;
};
/** @returns {RefundModeInfo} */
declare function RefundModeInfo(): RefundModeInfo;
type RefundModeInfo = {
    is_active?: boolean;
    slug?: string;
    options?: RefundOption[];
    display_name?: string;
};
/** @returns {RefundModeConfigResponsePayload} */
declare function RefundModeConfigResponsePayload(): RefundModeConfigResponsePayload;
type RefundModeConfigResponsePayload = {
    success: boolean;
    data: RefundModeInfo[];
};
/** @returns {AttachUserOtpData} */
declare function AttachUserOtpData(): AttachUserOtpData;
type AttachUserOtpData = {
    request_id: string;
};
/** @returns {AttachUserInfo} */
declare function AttachUserInfo(): AttachUserInfo;
type AttachUserInfo = {
    first_name: string;
    last_name: string;
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
    fynd_order_id: string;
    user_info: AttachUserInfo;
};
/** @returns {AttachOrderUserResponseSchema} */
declare function AttachOrderUserResponseSchema(): AttachOrderUserResponseSchema;
type AttachOrderUserResponseSchema = {
    success?: boolean;
    message?: string;
};
/** @returns {SendUserMobileOTP} */
declare function SendUserMobileOTP(): SendUserMobileOTP;
type SendUserMobileOTP = {
    mobile: string;
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
    request_id?: string;
    resend_timer?: number;
    message?: string;
    mobile?: number;
};
/** @returns {SendUserMobileOtpResponseSchema} */
declare function SendUserMobileOtpResponseSchema(): SendUserMobileOtpResponseSchema;
type SendUserMobileOtpResponseSchema = {
    success?: boolean;
    message?: string;
    data?: PointBlankOtpData;
};
/** @returns {VerifyOtpData} */
declare function VerifyOtpData(): VerifyOtpData;
type VerifyOtpData = {
    request_id: string;
    mobile: string;
    /**
     * - The OTP entered by the user for verification.
     * This code is a temporary, numeric password that validates the user's access request.
     */
    otp_code: number;
};
/** @returns {VerifyMobileOTP} */
declare function VerifyMobileOTP(): VerifyMobileOTP;
type VerifyMobileOTP = {
    otp_data: VerifyOtpData;
    fynd_order_id: string;
};
/** @returns {VerifyOtpResponseData} */
declare function VerifyOtpResponseData(): VerifyOtpResponseData;
type VerifyOtpResponseData = {
    mobile?: string;
    message?: string;
    fynd_order_id?: string;
    /**
     * - Uniquely identifies the country
     * associated with the mobile number. This code is essential for for correctly
     * formatting and routing the OTP messages to mobile phones across
     * international borders. Examples include 'US' for the United States, 'IN' for India.
     */
    country_code?: string;
};
/** @returns {VerifyOtpResponseSchema} */
declare function VerifyOtpResponseSchema(): VerifyOtpResponseSchema;
type VerifyOtpResponseSchema = {
    status?: number;
    success?: boolean;
    message?: string;
    data?: VerifyOtpResponseData;
};
/** @returns {BulkReportsDownloadRequestSchema} */
declare function BulkReportsDownloadRequestSchema(): BulkReportsDownloadRequestSchema;
type BulkReportsDownloadRequestSchema = {
    /**
     * - Download for specific store ids.
     */
    store_ids?: string[];
    /**
     * - Defines the category or type of lane for
     * which the report is being requested for download.
     */
    lane_type?: string;
    /**
     * - Download report with specific headers
     */
    custom_headers?: string;
    /**
     * - Specifies the type of report to be
     * fetched. The value must be one of the following- - generation_report-
     * Retrieves records related to state transition failed shipment attempts from
     * the BulkAction table. - invoice_report- Retrieves records related to failed
     * invoiced shipments from the BulkAction table. Based on the provided report
     * type, the API will fetch the corresponding failed records.
     */
    report_type?: string;
    /**
     * - UTC start date in ISO format
     */
    start_date?: string;
    /**
     * - UTC end date in ISO format
     */
    end_date?: string;
    /**
     * - Download for specific enitites, entities
     * can be bag, shipment or order_id, etc.
     */
    entities?: string[];
    filter_type?: string;
    /**
     * - Download lanes for cross company.
     */
    is_cross_company_enabled?: boolean;
    /**
     * - Provides a the option for
     * defining custom filters specific to a logistics or transportation lane.
     */
    custom_filters_for_lane?: any;
};
/** @returns {BulkReportsDownloadResponseSchema} */
declare function BulkReportsDownloadResponseSchema(): BulkReportsDownloadResponseSchema;
type BulkReportsDownloadResponseSchema = {
    success?: boolean;
    batch_id?: string;
};
/** @returns {BulkFailedResponseSchema} */
declare function BulkFailedResponseSchema(): BulkFailedResponseSchema;
type BulkFailedResponseSchema = {
    status?: boolean;
    error?: string;
};
/** @returns {BulkStateTransistionRequestSchema} */
declare function BulkStateTransistionRequestSchema(): BulkStateTransistionRequestSchema;
type BulkStateTransistionRequestSchema = {
    url?: string;
    file_name?: string;
};
/** @returns {BulkStateTransistionResponseSchema} */
declare function BulkStateTransistionResponseSchema(): BulkStateTransistionResponseSchema;
type BulkStateTransistionResponseSchema = {
    status?: boolean;
    message?: string;
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
    store_id?: number;
    uploaded_on?: string;
    company_id?: number;
    shipments_action_info?: ShipmentActionInfo;
    is_invoiceable?: boolean;
    user_name?: string;
    file_url?: string;
    /**
     * - Meta data of the bulk action listing data that
     * contains additional, potentially dynamic information about the shipments.
     */
    meta?: any;
    /**
     * - Denotes the format in which the
     * invoice is streamed.
     */
    invoice_document_type?: string;
    /**
     * - Denotes the format in which the
     * label is streamed.
     */
    label_document_type?: string;
    file_name?: string;
    store_name?: string;
    updated_ts?: number;
    status?: boolean;
    /**
     * - The unique identifier representing the code
     * for the affiliate's store, often used for internal reference.
     */
    store_code?: string;
    /**
     * - Specifies the type of bulk action to
     * be performed, categorizing the job into distinct operational tasks. Each
     * option represents a specific automated process designed to handle large
     * volumes of data or actions efficiently
     */
    bulk_action_type?: string;
    created_ts?: string;
    invoice_status?: string;
    do_invoice_label_generated?: boolean;
    id?: number;
    user_id?: string;
    /**
     * - Denotes the format in
     * which the last selected invoice label is streamed.
     */
    last_selected_invoice_label_type?: string;
    batch_id?: string;
    uploaded_by?: string;
};
/** @returns {BulkListinPage} */
declare function BulkListinPage(): BulkListinPage;
type BulkListinPage = {
    current?: number;
    has_previous?: boolean;
    has_next?: boolean;
    total?: number;
    item_total?: number;
    type?: string;
    size?: number;
};
/** @returns {BulkListingResponseSchema} */
declare function BulkListingResponseSchema(): BulkListingResponseSchema;
type BulkListingResponseSchema = {
    success?: boolean;
    data?: BulkActionListingData[];
    page?: BulkListinPage;
    total_count?: number;
};
/** @returns {JobDetailsData} */
declare function JobDetailsData(): JobDetailsData;
type JobDetailsData = {
    batch_id?: string;
    total_shipments_count?: number;
    successful_shipment_ids?: string[];
    successful_shipments_count?: number;
    failed_shipments_count?: number;
    processing_shipments_count?: number;
    company_id?: string;
};
/** @returns {JobDetailsResponseSchema} */
declare function JobDetailsResponseSchema(): JobDetailsResponseSchema;
type JobDetailsResponseSchema = {
    success?: boolean;
    data?: JobDetailsData[];
    file_url?: string;
    message?: string;
    failed_records?: any[];
    uploaded_by?: string;
    user_id?: string;
    created_ts?: string;
    uploaded_on?: string;
    status?: string;
};
/** @returns {JobFailedResponseSchema} */
declare function JobFailedResponseSchema(): JobFailedResponseSchema;
type JobFailedResponseSchema = {
    file_name?: string;
    url?: string;
};
/** @returns {ManifestPageInfo} */
declare function ManifestPageInfo(): ManifestPageInfo;
type ManifestPageInfo = {
    current: number;
    total: number;
    has_next: boolean;
    size: number;
    has_previous: boolean;
    type: string;
};
/** @returns {ManifestItemDetails} */
declare function ManifestItemDetails(): ManifestItemDetails;
type ManifestItemDetails = {
    quantity?: number;
    shipment_id: string;
    order_id: string;
    awb_number?: string;
    invoice_id?: string;
    shipment_created_at?: string;
};
/** @returns {ManifestShipmentListing} */
declare function ManifestShipmentListing(): ManifestShipmentListing;
type ManifestShipmentListing = {
    total_count: number;
    lane?: string;
    page: ManifestPageInfo;
    success: boolean;
    status: number;
    items?: ManifestItemDetails[];
    message?: string;
};
/** @returns {DateRange} */
declare function DateRange(): DateRange;
type DateRange = {
    /**
     * - Start Date in DD-MM-YYYY format
     */
    from_date?: string;
    /**
     * - End Date in DD-MM-YYYY format
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
     * - UTC start date in ISO format.
     */
    from_date?: string;
    /**
     * - Filter with the specific store.
     */
    stores?: number;
    /**
     * - UTC end date in ISO format.
     */
    to_date?: string;
    /**
     * - Filter with the specific courier partner name.
     */
    dp_name?: string;
    /**
     * - Combination of courier partner ids separated by
     * byte operator.
     */
    dp_ids?: string;
    /**
     * - Criteria for lane on which shipments must be fetched.
     */
    lane?: string;
    /**
     * - Selected shipments mapped to the manifest.
     */
    selected_shipments?: string;
    /**
     * - Filter with the specific store name.
     */
    store_name?: string;
    /**
     * - Deselected shipments unmapped
     * from the manifest.
     */
    deselected_shipments?: string;
};
/** @returns {ManifestFile} */
declare function ManifestFile(): ManifestFile;
type ManifestFile = {
    key?: string;
    region?: string;
    bucket?: string;
};
/** @returns {ManifestMediaUpdate} */
declare function ManifestMediaUpdate(): ManifestMediaUpdate;
type ManifestMediaUpdate = {
    entity?: string;
    link?: string;
    code?: number;
    /**
     * - Specifies the format or type of media being
     * linked to the manifest.
     */
    media_type?: string;
    status?: boolean;
    file?: ManifestFile;
};
/** @returns {PDFMeta} */
declare function PDFMeta(): PDFMeta;
type PDFMeta = {
    consent?: string;
    media_updates?: ManifestMediaUpdate[];
};
/** @returns {TotalShipmentPricesCount} */
declare function TotalShipmentPricesCount(): TotalShipmentPricesCount;
type TotalShipmentPricesCount = {
    total_price?: number;
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
    company_id: number;
    filters?: Filters;
    pdf_meta?: PDFMeta;
    meta?: ManifestMeta;
    is_active: boolean;
    user_id: string;
    /**
     * - Timestamp when the manifest was created.
     */
    created_at: string;
    created_ts?: string;
    manifest_id: string;
    status: string;
    id: number;
    uid: string;
    created_by: string;
};
/** @returns {ManifestList} */
declare function ManifestList(): ManifestList;
type ManifestList = {
    items?: Manifest[];
    page?: ManifestPageInfo;
};
/** @returns {ManifestDetails} */
declare function ManifestDetails(): ManifestDetails;
type ManifestDetails = {
    items?: ManifestItemDetails[];
    page?: ManifestPageInfo;
    additional_shipment_count?: number;
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
    text?: string;
    name?: string;
    placeholder_text?: string;
    value?: string;
    min_search_size?: number;
    show_ui?: boolean;
};
/** @returns {FiltersInfo} */
declare function FiltersInfo(): FiltersInfo;
type FiltersInfo = {
    options?: FilterInfoOption[];
    text: string;
    placeholder_text?: string;
    value: string;
    required?: boolean;
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
     * - AWB Number
     */
    awb: string;
    /**
     * - Current location of Courier partner
     */
    dp_location?: string;
    /**
     * - Courier Partner name
     */
    dp_name: string;
    /**
     * - Status at Courier partner end
     */
    dp_status: string;
    /**
     * - Date Time at which status was
     * updated at Courier partner
     */
    dp_status_updated_at: string;
    /**
     * - Estimated delivery date
     * received from Courier partner
     */
    estimated_delivery_date?: string;
    /**
     * - Id of Tracking history
     */
    id?: number;
    /**
     * - Journey type of the shipment
     */
    journey: string;
    /**
     * - Meta field to store Courier partner's meta data
     */
    meta?: any;
    /**
     * - Operational status of OMS
     */
    operational_status: string;
    /**
     * - Promised delivery date received
     * from Courier partner
     */
    promised_delivery_date?: string;
    /**
     * - Remark from courier partner
     */
    remark?: string;
    /**
     * - Shipment ID
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
    shipment_id?: string;
    success?: boolean;
    invoice_id?: string;
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
     * - Expected Actions: [save, process,
     * pdf_generated,invalidate,pdf_failed,complete]
     */
    action?: string;
    /**
     * - Id of The Manifest.
     */
    manifest_id?: string;
    filters?: Filters;
    /**
     * - Unique Id.
     */
    unique_id?: string;
};
/** @returns {ManifestItems} */
declare function ManifestItems(): ManifestItems;
type ManifestItems = {
    filters?: Filters;
    /**
     * - Id of the manifest.
     */
    manifest_id?: string;
    /**
     * - Unique Id.
     */
    unique_id?: string;
    /**
     * - Id of the company.
     */
    company_id?: number;
    /**
     * - Shipment with the specific courier partner Id.
     */
    dp_id?: string;
    courier_partner_slug?: string;
    /**
     * - Expected Actions: [Save, Process, Pdf
     * Generated, Invalidate, Pdf Failed, Complete]
     */
    action?: string;
    /**
     * - Created date of the manifest.
     */
    created_by?: string;
    /**
     * - Id of user.
     */
    user_id?: string;
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
     * - "HomeDelivery": The order undergoes all state transitions typical for a
     * delivery, from processing the shipment to final delivery at the
     * customer's address.
     * - "PickAtStore": The order is prepared for pickup and moved to a state where it
     * is ready to be handed over directly to the customer at the store. This
     * type streamlines the process by bypassing traditional shipping stages.
     * - "Digital": This order type refers, when an order is placed for a digital
     * product, the order directly transitions, bypassing the shipping steps
     * necessary for physical goods.
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
     *
     * - `complete`: Complete shipment lock
     * - `operational`: Operational shipment lock
     * - `None`: No lock on shipment
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
     *
     * - `platform-pos`: POS
     * - `platform-site`: WEB
     * - `openapi`: OPENAPI
     * - `marketplace`: MARKETPLACE
     */
    order_platform?: string;
    /**
     * - Indicates the type of refund associated
     * with the order.
     *
     * - `credit_note`: CREDIT_NOTE
     * - `source`: SOURCE
     * - `bank_transfer`: BANK
     * - `manual_refund`: MANUAL_REFUND
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
     * - Filters for scope selection.
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
     * - Filter
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
     * - The channel through which the order was
     * placed, such as ECOMM or another specified channel.
     */
    ordering_channel: string;
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
     * - The unique identifier for the reason. This ID helps
     * in differentiating between various reasons associated with the rule.
     */
    id?: number;
    /**
     * - The display name for the reason. This name
     * is what users see when selecting a reason during the RMA process.
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
     * "Doorstep QC" refers to the quality control checks that occur at the
     * customer's doorstep. This could be part of a delivery process where the
     * product is inspected for any damages, defects, or discrepancies in the
     * presence of the customer before the final handover. - "Pre QC" represents a
     * proactive quality control approach where the customer plays an active role
     * in the QC process before the product is collected for return or exchange.
     * In this procedure, customers are required to upload photos of the product
     * for a preliminary quality check by the operations team. Approval from this
     * team is necessary before a delivery partner is dispatched to pick up the
     * product. This innovative method ensures that the product meets return or
     * exchange criteria, streamlining the process for both the customer and the
     * operations team, and minimizing unnecessary logistics movements.
     */
    qc_type: string[];
    /**
     * - A set of questions associated with
     * the reason. These questions are often used for gathering additional
     * information during the RMA process.
     */
    question_set: QuestionSet[];
    /**
     * - Meta object of the reason. This contains any
     * additional metadata that might be relevant to the reason.
     */
    meta: any;
    /**
     * - Indicates whether the reason is currently
     * active. Active reasons are those that are currently in use within the system.
     */
    is_active: boolean;
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
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of items on the page.
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
     * - The type of the page, such as 'PageType'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
};
/** @returns {BagReasonMeta} */
declare function BagReasonMeta(): BagReasonMeta;
type BagReasonMeta = {
    show_text_area?: boolean;
};
/** @returns {QuestionSet} */
declare function QuestionSet(): QuestionSet;
type QuestionSet = {
    id?: number;
    display_name?: string;
};
/** @returns {BagReasons} */
declare function BagReasons(): BagReasons;
type BagReasons = {
    /**
     * - List of QC (Quality Control) types -- having
     * return reason types indicating the stage at which QC is performed. -
     * "Doorstep QC" refers to the quality control checks that occur at the
     * customer's doorstep. This could be part of a delivery process where the
     * product is inspected for any damages, defects, or discrepancies in the
     * presence of the customer before the final handover. - "Pre QC" represents a
     * proactive quality control approach where the customer plays an active role
     * in the QC process before the product is collected for return or exchange.
     * In this procedure, customers are required to upload photos of the product
     * for a preliminary quality check by the operations team. Approval from this
     * team is necessary before a delivery partner is dispatched to pick up the
     * product. This innovative method ensures that the product meets return or
     * exchange criteria, streamlining the process for both the customer and the
     * operations team, and minimizing unnecessary logistics movements.
     */
    qc_type?: string[];
    id?: number;
    display_name?: string;
    meta?: BagReasonMeta;
    question_set?: QuestionSet[];
    reasons?: BagReasons[];
};
/** @returns {ShipmentBagReasons} */
declare function ShipmentBagReasons(): ShipmentBagReasons;
type ShipmentBagReasons = {
    reasons?: BagReasons[];
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
    current_shipment_status?: string;
    /**
     * - It contains the additional properties related to
     * shipment status transition like Kafka_emission_status, user_name, etc.
     * Additionally it is dynamic.
     */
    meta?: any;
    shipment_status_id?: number;
    bag_list?: string[];
    title: string;
    /**
     * - Timestamp when the shipment was initially
     * created.This timestamp is crucial for tracking the shipment's age,
     * scheduling, and historical analysis.
     */
    created_at?: string;
    created_ts?: string;
    shipment_id?: string;
    /**
     * - Timestamp when the transition for
     * the status of the shipment was created. Date time in UTC timezone as per ISO format.
     */
    status_created_at?: string;
    status_created_ts?: string;
    /**
     * - This key denotes the status of the shipment.
     */
    status: string;
};
/** @returns {UserDataInfo} */
declare function UserDataInfo(): UserDataInfo;
type UserDataInfo = {
    uid?: number;
    user_oid?: string;
    external_customer_id?: string;
    first_name?: string;
    last_name?: string;
    mobile?: string;
    email?: string;
    is_anonymous_user?: boolean;
    avis_user_id?: string;
    name?: string;
    gender?: string;
};
/** @returns {Address} */
declare function Address(): Address;
type Address = {
    /**
     * - The phone number at the address.
     */
    phone?: string;
    /**
     * - An optional additional field for the street
     * address of the address.
     */
    address2?: string;
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
     * - The type of the address (e.g., home, office).
     */
    address_type?: string;
    /**
     * - The name of the country of the address.
     */
    country?: string;
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
     * - A notable landmark near the address.
     */
    landmark?: string;
    /**
     * - Updated at date for address
     */
    updated_at?: string;
    /**
     * - The version number of the address schema.
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
};
/** @returns {ShipmentListingChannel} */
declare function ShipmentListingChannel(): ShipmentListingChannel;
type ShipmentListingChannel = {
    channel_shipment_id?: string;
    is_affiliate?: boolean;
    logo?: string;
    name?: string;
};
/** @returns {Prices} */
declare function Prices(): Prices;
type Prices = {
    /**
     * - Refund credits applicable
     */
    refund_credit?: number;
    /**
     * - Total Amount paid rounded off to
     * nearest integer
     */
    amount_paid_roundoff?: number;
    /**
     * - MRP - Discount
     */
    price_effective?: number;
    /**
     * - Promotion discount as applicable
     */
    promotion_effective_discount?: number;
    /**
     * - Updated Selling Price of product in
     * case of repricing
     */
    pm_price_split?: number;
    /**
     * - Amount to be refunded on cancellation and return
     */
    refund_amount?: number;
    /**
     * - Fixed selling price applicable for
     * payouts by brand
     */
    transfer_price?: number;
    /**
     * - Coupon Discount as applicable
     */
    coupon_effective_discount?: number;
    /**
     * - Tax amount collected at the
     * source of income or transaction
     */
    tax_collected_at_source?: number;
    /**
     * - Price Effective - Coupon
     * Discount (Seller) - Promotion (Seller)
     */
    brand_calculated_amount?: number;
    /**
     * - Fee applicable as per delivery partner
     */
    delivery_charge?: number;
    /**
     * - Cashback points provided to the customer
     */
    cashback?: number;
    /**
     * - Effective selling price - Product GST Amount
     */
    value_of_good?: number;
    /**
     * - Effective Cashback value as applicable
     */
    cashback_applied?: number;
    /**
     * - Fee applicable for COD order
     */
    cod_charges?: number;
    /**
     * - The indicated price or value assigned to
     * an item before any discounts or adjustments
     */
    price_marked?: number;
    /**
     * - Total Amount paid by the customer
     */
    amount_paid?: number;
    /**
     * - Effective coupon value as applicable
     */
    coupon_value?: number;
    /**
     * - Total amount discounted from the original
     * MRP/actual price
     */
    discount?: number;
    /**
     * - Credits provided by Fynd
     */
    fynd_credits?: number;
    /**
     * - Gift card amount
     */
    gift_price?: number;
    /**
     * - Amount to be collected in case
     * of multiple mode of payments
     */
    amount_to_be_collected?: number;
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
     * - Refund credits applicable
     */
    refund_credit?: number;
    /**
     * - Total Amount paid rounded off to
     * nearest integer
     */
    amount_paid_roundoff?: number;
    /**
     * - MRP - Discount
     */
    price_effective?: number;
    /**
     * - Promotion discount as applicable
     */
    promotion_effective_discount?: number;
    /**
     * - Updated Selling Price of product in
     * case of repricing
     */
    pm_price_split?: number;
    /**
     * - Amount to be refunded on cancellation and return
     */
    refund_amount?: number;
    /**
     * - Fixed selling price applicable for
     * payouts by brand
     */
    transfer_price?: number;
    /**
     * - Coupon Discount as applicable
     */
    coupon_effective_discount?: number;
    /**
     * - Tax amount collected at the
     * source of income or transaction
     */
    tax_collected_at_source?: number;
    /**
     * - Price Effective - Coupon
     * Discount (Seller) - Promotion (Seller)
     */
    brand_calculated_amount?: number;
    /**
     * - Fee applicable as per delivery partner
     */
    delivery_charge?: number;
    /**
     * - Cashback points provided to the customer
     */
    cashback?: number;
    /**
     * - Effective selling price - Product GST Amount
     */
    value_of_good?: number;
    /**
     * - Effective Cashback value as applicable
     */
    cashback_applied?: number;
    /**
     * - Fee applicable for COD order
     */
    cod_charges?: number;
    /**
     * - The indicated price or value assigned to
     * an item before any discounts or adjustments
     */
    price_marked?: number;
    /**
     * - Total Amount paid by the customer
     */
    amount_paid?: number;
    /**
     * - Effective coupon value as applicable
     */
    coupon_value?: number;
    /**
     * - Total amount discounted from the original
     * MRP/actual price
     */
    discount?: number;
    /**
     * - Credits provided by Fynd
     */
    fynd_credits?: number;
    /**
     * - Gift card amount
     */
    gift_price?: number;
    /**
     * - Amount to be collected in case
     * of multiple mode of payments
     */
    amount_to_be_collected?: number;
};
/** @returns {Identifier} */
declare function Identifier(): Identifier;
type Identifier = {
    alu?: string;
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
    upc?: string;
    isbn?: string;
};
/** @returns {FinancialBreakup} */
declare function FinancialBreakup(): FinancialBreakup;
type FinancialBreakup = {
    refund_credit: number;
    amount_paid_roundoff?: number;
    price_effective: number;
    promotion_effective_discount: number;
    transfer_price: number;
    coupon_effective_discount: number;
    gst_fee: number;
    tax_collected_at_source?: number;
    brand_calculated_amount: number;
    delivery_charge: number;
    gst_tag: string;
    /**
     * - The HSN Code (Harmonized System of Nomenclature
     * Code) is an internationally standardized system for classifying goods. It
     * is used in trade and commerce to identify products and services uniformly
     * across different countries and industries. The system was developed by the
     * World Customs Organization (WCO) and is widely used in customs processes
     * and tax systems.
     */
    hsn_code: string;
    cashback: number;
    item_name: string;
    value_of_good: number;
    cashback_applied: number;
    cod_charges: number;
    price_marked: number;
    size: string;
    amount_paid: number;
    coupon_value: number;
    discount: number;
    fynd_credits: number;
    gst_tax_percentage: number;
    amount_to_be_collected?: number;
    identifiers: Identifier;
    total_units: number;
    added_to_fynd_cash: boolean;
};
/** @returns {GSTDetailsData} */
declare function GSTDetailsData(): GSTDetailsData;
type GSTDetailsData = {
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
    value_of_good: number;
    gst_fee: number;
    igst_tax_percentage?: number;
    gst_tax_percentage?: number;
    hsn_code_id?: string;
    igst_gst_fee?: number;
    is_default_hsn_code?: boolean;
    sgst_gst_fee?: number;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    cgst_gst_fee?: number;
    gst_tag?: string;
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
    is_active?: boolean;
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
    app_state_name?: string;
    name: string;
    app_facing?: boolean;
    notify_customer?: boolean;
    display_name: string;
};
/** @returns {BagStatusHistory} */
declare function BagStatusHistory(): BagStatusHistory;
type BagStatusHistory = {
    forward?: boolean;
    store_id?: number;
    delivery_awb_number?: string;
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    app_display_name?: string;
    state_id?: number;
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
    bsh_id?: number;
    /**
     * - Timestamp when the bag status history
     * transaction was created.
     */
    created_at?: string;
    created_ts?: string;
    shipment_id?: string;
    /**
     * - Timestamp when the bag status history
     * transaction was updated.
     */
    updated_at?: string;
    updated_ts?: string;
    bag_state_mapper?: BagStateMapper;
    bag_id?: number;
    reasons?: any[];
    status: string;
    display_name?: string;
};
/** @returns {Dimensions} */
declare function Dimensions(): Dimensions;
type Dimensions = {
    height?: number;
    width?: number;
    is_default?: boolean;
    unit?: string;
    length?: number;
};
/** @returns {ReturnConfig} */
declare function ReturnConfig(): ReturnConfig;
type ReturnConfig = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
/** @returns {Weight} */
declare function Weight(): Weight;
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
/** @returns {Article} */
declare function Article(): Article;
type Article = {
    /**
     * - Contains a flexible set of key-value
     * pairs representing detailed information about the article's child entities
     * which includes dimensions (width, height, length), weight, and unique
     * identifiers (EAN, article code, seller identifier) for each child entity.
     */
    child_details?: any;
    seller_identifier: string;
    uid: string;
    /**
     * - Represents the data related to combination of
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
    esp_modified?: boolean;
    return_config?: ReturnConfig;
    code?: string;
    weight?: Weight;
    _id: string;
    /**
     * - Details of Identifiers associated with the
     * article including sku_code.
     */
    identifiers: any;
    raw_meta?: string;
    size: string;
    is_set?: boolean;
    tags?: string[];
};
/** @returns {ShipmentListingBrand} */
declare function ShipmentListingBrand(): ShipmentListingBrand;
type ShipmentListingBrand = {
    logo?: string;
    /**
     * - Timestamp of the transaction when the brand
     * of the shipment was created.
     */
    created_on?: string;
    name?: string;
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
    original_affiliate_order_id?: string;
};
/** @returns {AffiliateMeta} */
declare function AffiliateMeta(): AffiliateMeta;
type AffiliateMeta = {
    order_item_id?: string;
    channel_order_id?: string;
    employee_discount?: number;
    /**
     * - Box type of the shipment in which the
     * shipment will be delivered.
     */
    box_type?: string;
    quantity?: number;
    size_level_total_qty?: number;
    loyalty_discount?: number;
    replacement_details?: ReplacementDetails;
    channel_shipment_id?: string;
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
    is_priority?: boolean;
    is_serial_number_required?: boolean;
    fulfilment_priority?: number;
    customer_selling_price?: number;
};
/** @returns {AffiliateBagDetails} */
declare function AffiliateBagDetails(): AffiliateBagDetails;
type AffiliateBagDetails = {
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    employee_discount?: number;
    affiliate_bag_id: string;
    loyalty_discount?: number;
};
/** @returns {PlatformArticleAttributes} */
declare function PlatformArticleAttributes(): PlatformArticleAttributes;
type PlatformArticleAttributes = {
    currency?: string;
};
/** @returns {PlatformItem} */
declare function PlatformItem(): PlatformItem;
type PlatformItem = {
    id?: number;
    attributes?: PlatformArticleAttributes;
    brand_id?: number;
    slug_key?: string;
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
     * - Denotes the timestamp when any aspect
     * of the associated record was modified.
     */
    last_updated_at?: string;
    name?: string;
    /**
     * - The l2_category field represents the
     * second level of categorization for items within an e-commerce platform's
     * hierarchy. This allows for classification beyond the top-tier (level 1)
     * categories, helping customers to narrow down their search and find products
     */
    l2_category?: string[];
    brand?: string;
    image?: string[];
    code?: string;
    /**
     * - The l1_category field represents the
     * highest or top-tier level of categorization to which a product belongs
     * within an e-commerce platform.It's an array, indicating that a product can
     * belong to multiple top-tier categories, which provides a broad
     * classification of the product.
     */
    l1_category?: string[];
    size?: string;
    can_cancel?: boolean;
    can_return?: boolean;
    branch_url?: string;
    /**
     * - Meta data of the item contains additional,
     * potentially dynamic information about the item.
     */
    meta?: any;
    color?: string;
    department_id?: number;
    images?: string[];
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
    is_returnable: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
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
    reasons?: any[];
    product_quantity: number;
    can_return?: boolean;
    display_name?: string;
    can_cancel?: boolean;
    size?: string;
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
    bag_id: number;
    entity_type?: string;
    status: BagReturnableCancelableStatus;
};
/** @returns {ShipmentItemFulFillingStore} */
declare function ShipmentItemFulFillingStore(): ShipmentItemFulFillingStore;
type ShipmentItemFulFillingStore = {
    phone?: string;
    brand_store_tags?: string[];
    pincode?: string;
    /**
     * - Meta data of the fulfilling store contains
     * additional, potentially dynamic information about the fulfilling store.
     */
    meta?: any;
    /**
     * - It contains the address details of the fulfilling store.
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
    display_address?: string;
    /**
     * - Type of location of the fulfilling store.
     */
    location_type?: string;
    id: number;
    code: string;
    store_email?: string;
    name?: string;
    state?: string;
    city?: string;
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
    currency_symbol?: string;
};
/** @returns {OrderingCurrency} */
declare function OrderingCurrency(): OrderingCurrency;
type OrderingCurrency = {
    /**
     * - This specifies the currency code for all amounts.
     */
    currency_code?: string;
    currency_name?: string;
    currency_symbol?: string;
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
    order_created_ts?: string;
    shipment_status?: ShipmentStatus;
    user?: UserDataInfo;
    estimated_sla_time?: string;
    estimated_sla_ts?: string;
    delivery_address?: Address;
    billing_address?: Address;
    affiliate_details?: AffiliateDetails;
    /**
     * - This flag denotes whether the shipment is
     * active or not
     */
    is_active?: boolean;
    channel?: ShipmentListingChannel;
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
    lock_status?: boolean;
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
    payment_info?: any[];
    /**
     * - Date time in UTC timezone as per ISO format.
     */
    status_created_at?: string;
    status_created_ts?: string;
    display_name?: string;
    bags?: BagUnit[];
    fulfilling_store?: ShipmentItemFulFillingStore;
    /**
     * - Meta data of the item contains additional,
     * potentially dynamic information about the item.
     */
    meta?: any;
    payment_mode?: string;
    can_process?: boolean;
    prices?: Prices;
    ordering_currency_prices?: OrderingCurrencyPrices;
    order_id: string;
    ordering_channnel?: string;
    shipment_id?: string;
    customer_note?: string;
    /**
     * - The total number of bags in the shipment.
     */
    total_bags: number;
    /**
     * - Timestamp of the shipment created.
     */
    shipment_created_at: string;
    mode_of_payment?: string;
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
};
/** @returns {ShipmentInternalPlatformViewResponseSchema} */
declare function ShipmentInternalPlatformViewResponseSchema(): ShipmentInternalPlatformViewResponseSchema;
type ShipmentInternalPlatformViewResponseSchema = {
    total_count?: number;
    message?: string;
    success?: boolean;
    items?: ShipmentItem[];
    lane?: string;
    page?: Page;
};
/** @returns {TrackingList} */
declare function TrackingList(): TrackingList;
type TrackingList = {
    is_passed?: boolean;
    text: string;
    is_current?: boolean;
    time?: string;
    created_ts?: string;
    status: string;
};
/** @returns {InvoiceInfo} */
declare function InvoiceInfo(): InvoiceInfo;
type InvoiceInfo = {
    store_invoice_id?: string;
    invoice_url?: string;
    /**
     * - Denotes the date and time when the
     * invoice information was modified or updated.
     */
    updated_date?: string;
    external_invoice_id?: string;
    label_url?: string;
    credit_note_id?: string;
    links?: any;
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
    created_ts?: string;
    /**
     * - Contains a flexible and comprehensive set
     * of key-value pairs detailing the tax calculations and classifications
     * applicable to the order.
     */
    tax_details?: any;
    cod_charges?: string;
    source?: string;
    fynd_order_id: string;
    affiliate_id?: string;
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
    order_value?: string;
    ordering_channel?: string;
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
    number?: string;
};
/** @returns {ContactDetails} */
declare function ContactDetails(): ContactDetails;
type ContactDetails = {
    phone?: PhoneDetails[];
    emails?: string[];
};
/** @returns {CompanyDetails} */
declare function CompanyDetails(): CompanyDetails;
type CompanyDetails = {
    company_name?: string;
    /**
     * - It contains the properties for the address of a company.
     */
    address?: any;
    company_cin?: string;
    company_id?: number;
    company_gst?: string;
    company_contact?: ContactDetails;
};
/** @returns {OrderingStoreDetails} */
declare function OrderingStoreDetails(): OrderingStoreDetails;
type OrderingStoreDetails = {
    phone?: string;
    pincode?: string;
    /**
     * - Meta data of the ordering store contains
     * additional, potentially dynamic information about the ordering store.
     */
    meta?: any;
    address?: string;
    /**
     * - The primary address dynamically forms based
     * on a template. If the template includes a single key, Address1 contains
     * that data. For templates with multiple keys like {address} {address2}
     * {area} {state} {country}, Address1 compiles all into a single formatted string.
     */
    address1?: string;
    display_address?: string;
    id?: number;
    code?: string;
    store_name?: string;
    country?: string;
    contact_person?: string;
    state?: string;
    city?: string;
};
/** @returns {DPDetailsData} */
declare function DPDetailsData(): DPDetailsData;
type DPDetailsData = {
    pincode?: string;
    track_url?: string;
    eway_bill_id?: string;
    id?: number;
    country?: string;
    awb_no?: string;
    gst_tag?: string;
    name?: string;
};
/** @returns {BuyerDetails} */
declare function BuyerDetails(): BuyerDetails;
type BuyerDetails = {
    ajio_site_id?: string;
    pincode: number;
    /**
     * - Provides the comprehensive address details of
     * the buyer's shipping address.
     */
    address: string;
    gstin: string;
    name: string;
    state: string;
    city: string;
};
/** @returns {DebugInfo} */
declare function DebugInfo(): DebugInfo;
type DebugInfo = {
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
    max?: string;
    min?: string;
};
/** @returns {ShipmentTags} */
declare function ShipmentTags(): ShipmentTags;
type ShipmentTags = {
    slug?: string;
    /**
     * - Type of entity that the tag is associated
     * to (bag, shipments).
     */
    entity_type?: string;
    display_text?: string;
};
/** @returns {LockData} */
declare function LockData(): LockData;
type LockData = {
    locked?: boolean;
    mto?: boolean;
    lock_message?: string;
};
/** @returns {ShipmentTimeStamp} */
declare function ShipmentTimeStamp(): ShipmentTimeStamp;
type ShipmentTimeStamp = {
    max?: number;
    min?: number;
};
/** @returns {ShipmentMeta} */
declare function ShipmentMeta(): ShipmentMeta;
type ShipmentMeta = {
    tracking_url?: string;
    /**
     * - Provides a forecasted date and
     * time by which the shipment is expected to be delivered to the recipient.
     * This estimation is crucial for planning purposes, both for the sender in
     * managing expectations and for the recipient in preparing for receipt.
     */
    estimated_delivery_date?: string;
    same_store_available: boolean;
    b2b_buyer_details?: BuyerDetails;
    formatted?: Formatted;
    debug_info?: DebugInfo;
    return_awb_number?: string;
    is_self_ship?: boolean;
    /**
     * - Box type of the shipment in which the
     * shipment will be delivered.
     */
    box_type?: string;
    einvoice_info?: EinvoiceInfo;
    return_affiliate_shipment_id?: string;
    parent_dp_id?: string;
    shipment_weight?: number;
    dimension?: Dimensions;
    /**
     * - Delivery partner options that are available
     * to deliver the shipment.
     */
    dp_options?: any;
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
    forward_affiliate_shipment_id?: string;
    return_store_node?: number;
    fulfilment_priority_text?: string;
    shipment_tags?: ShipmentTags[];
    external?: any;
    awb_number?: string;
    lock_data?: LockData;
    /**
     * - Defines the specific journey a shipment
     * will follow based on the application's operational needs and customer
     * preferences. This field categorizes orders into distinct types, each
     * associated with a unique processing flow. For example:
     *
     * - "HomeDelivery": The order undergoes all state transitions typical for a
     * delivery, from processing the shipment to final delivery at the
     * customer's address.
     * - "PickAtStore": The order is prepared for pickup and moved to a state where it
     * is ready to be handed over directly to the customer at the store. This
     * type streamlines the process by bypassing traditional shipping stages
     * and facilitating a quicker transition to the final handover stage.
     */
    order_type?: string;
    /**
     * - Electronic Way Bill details i.e
     * ewayBillNo, ewayBillDate that are utilized in the transportation of goods.
     */
    ewaybill_info?: any;
    dp_id?: string;
    shipment_volumetric_weight?: number;
    marketplace_store_id?: string;
    /**
     * - An object containing the return details
     * of the shipment.
     */
    return_details?: any;
    dp_sort_key?: string;
    packaging_name?: string;
    timestamp?: ShipmentTimeStamp;
    auto_trigger_dp_assignment_acf?: boolean;
    dp_name?: string;
    po_number?: string;
    weight: number;
    /**
     * - Contains detailed information about
     * the buyer in a business-to-consumer (B2C) transaction. This object is
     * designed to capture a wide array of buyer-specific data such as contact
     * information, shipping address, preferences, and any other relevant details
     * that enhance the understanding of the buyer's profile and needs.
     */
    b2c_buyer_details?: any;
    forward_affiliate_order_id?: string;
    return_affiliate_order_id?: string;
    /**
     * - This object is designed to accommodate a
     * range of weight-related information. Denotes the weight of the bag,
     * potentially including various measurements or related details.
     */
    bag_weight?: any;
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
    label_a6?: string;
    invoice?: string;
    label_pos?: string;
    invoice_a6?: string;
    b2b?: string;
    label?: string;
    label_a4?: string;
    /**
     * - Specifies the type of label associated with a
     * PDF document,indicating its purpose or content. The label_type helps in
     * organizing and identifying PDF documents quickly, ensuring that users or
     * systems can efficiently utilize the correct documents for required actions.
     */
    label_type: string;
    invoice_export?: string;
    credit_note_url?: string;
    delivery_challan_a4?: string;
    label_export?: string;
    invoice_a4?: string;
    invoice_pos?: string;
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
     * - Ad_id of an affiliate
     */
    ad_id?: string;
};
/** @returns {BagConfigs} */
declare function BagConfigs(): BagConfigs;
type BagConfigs = {
    is_returnable: boolean;
    allow_force_return: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
};
/** @returns {OrderBagArticle} */
declare function OrderBagArticle(): OrderBagArticle;
type OrderBagArticle = {
    /**
     * - Details of Identifiers associated with the article.
     */
    identifiers?: any;
    return_config?: ReturnConfig;
    uid?: string;
    size?: string;
    tags?: string[];
};
/** @returns {OrderBrandName} */
declare function OrderBrandName(): OrderBrandName;
type OrderBrandName = {
    logo?: string;
    company?: number;
    id: number;
    /**
     * - Timestamp when the brand of the order was created.
     */
    created_on?: string;
    brand_name?: string;
    /**
     * - Timestamp when the brand of the order was modified.
     */
    modified_on?: string;
};
/** @returns {AffiliateBagsDetails} */
declare function AffiliateBagsDetails(): AffiliateBagsDetails;
type AffiliateBagsDetails = {
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
    mode?: string;
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
     * sale are included with the purchase.
     */
    promotion_type?: string;
    promotion_name?: string;
    discount_rules?: DiscountRules[];
    amount?: number;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    promo_id?: string;
    mrp_promotion?: boolean;
    applied_free_articles?: AppliedFreeArticles[];
};
/** @returns {CurrentStatus} */
declare function CurrentStatus(): CurrentStatus;
type CurrentStatus = {
    store_id?: number;
    delivery_awb_number?: string;
    kafka_sync?: boolean;
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
    state_id?: number;
    id: number;
    /**
     * - Denotes the date and time when the bag
     * status was created.
     */
    created_at?: string;
    created_ts?: string;
    shipment_id?: string;
    updated_at?: string;
    bag_state_mapper?: BagStateMapper;
    bag_id?: number;
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
    quantity?: number;
    identifier?: string;
    can_return?: boolean;
    can_cancel?: boolean;
    display_name?: string;
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
    is_parent?: boolean;
};
/** @returns {FulfillingStore} */
declare function FulfillingStore(): FulfillingStore;
type FulfillingStore = {
    phone: string;
    pincode: string;
    /**
     * - Meta data of the fulfilling store contains
     * additional, potentially dynamic information about the fulfilling store.
     */
    meta: any;
    address: string;
    /**
     * - The primary address dynamically forms based
     * on a template. If the template includes a single key, Address1 contains
     * that data. For templates with multiple keys like {address} {address2}
     * {area} {state} {country}, Address1 compiles all into a single formatted string.
     */
    address1?: string;
    display_address?: string;
    id: number;
    code: string;
    store_name: string;
    country: string;
    fulfillment_channel: string;
    contact_person: string;
    state: string;
    city: string;
};
/** @returns {ShipmentPayments} */
declare function ShipmentPayments(): ShipmentPayments;
type ShipmentPayments = {
    mode?: string;
    logo?: string;
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
    bag_list?: string[];
    id?: number;
    /**
     * - Denotes the date and time when the
     * transition was created.
     */
    created_at?: string;
    created_ts?: string;
    shipment_id?: string;
    status?: string;
    display_name?: string;
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
    lock_status?: boolean;
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
/** @returns {PlatformShipment} */
declare function PlatformShipment(): PlatformShipment;
type PlatformShipment = {
    /**
     * - Indicates the date and time when the
     * shipment was physically picked up from the sender or the origin point by
     * the delivery service. This timestamp is crucial for tracking the
     * commencement of the shipment's journey.
     */
    picked_date?: string;
    tracking_list?: TrackingList[];
    invoice?: InvoiceInfo;
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
    enable_dp_tracking?: boolean;
    custom_message?: string;
    estimated_sla_time?: string;
    estimated_sla_ts?: string;
    can_update_dimension?: boolean;
    shipment_images?: string[];
    /**
     * - Delivery Details of user
     */
    delivery_details?: any;
    /**
     * - Billing Details of user
     */
    billing_details?: any;
    forward_shipment_id?: string;
    fulfilment_priority?: number;
    shipment_details?: ShipmentLockDetails;
    custom_meta?: any[];
    shipment_quantity?: number;
    company_details?: CompanyDetails;
    ordering_store?: OrderingStoreDetails;
    order_platform?: string;
    lock_status?: boolean;
    platform_logo?: string;
    user_agent?: string;
    dp_details?: DPDetailsData;
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
    payment_info?: any[];
    /**
     * - Coupon data of the shipment which denotes if
     * coupon is applied, coupon code, coupon amount, coupon title and coupon message.
     */
    coupon?: any;
    affiliate_details?: AffiliateDetails;
    priority_text?: string;
    bag_status_history?: BagStatusHistory[];
    is_dp_assign_enabled?: boolean;
    bags?: OrderBags[];
    dp_assignment?: boolean;
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
    charges?: PriceAdjustmentCharge[];
    ordering_currency_prices?: OrderingCurrencyPrices;
    vertical?: string;
    shipment_id: string;
    payments?: ShipmentPayments;
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
    shipment_created_ts?: string;
    currency?: Currency;
    currency_info?: CurrencyInfo;
    previous_shipment_id?: string;
    shipment_update_time?: number;
    rto_address?: Address;
    credit_note_id?: string;
    is_self_ship?: boolean;
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
};
/** @returns {ShipmentInfoResponseSchema} */
declare function ShipmentInfoResponseSchema(): ShipmentInfoResponseSchema;
type ShipmentInfoResponseSchema = {
    message?: string;
    success: boolean;
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
    mode?: string;
    name?: string;
    amount?: number;
    collected?: boolean;
    refund_by?: string;
    collect_by?: string;
    display_name?: string;
    merchant_transaction_id?: string;
};
/** @returns {OrderData} */
declare function OrderData(): OrderData;
type OrderData = {
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
    value?: string;
    name?: string;
    display?: string;
};
/** @returns {PlatformChannel} */
declare function PlatformChannel(): PlatformChannel;
type PlatformChannel = {
    logo?: string;
    name?: string;
};
/** @returns {PlatformOrderItems} */
declare function PlatformOrderItems(): PlatformOrderItems;
type PlatformOrderItems = {
    breakup_values?: PlatformBreakupValues[];
    total_order_value?: number;
    /**
     * - It contains the additional properties related to
     * order transition like Kafka_emission_status, user_name, etc. Additionally
     * it is dynamic, potentially.
     */
    meta?: any;
    order_created_time?: string;
    order_created_ts?: string;
    payment_mode?: string;
    shipments?: PlatformShipment[];
    order_id?: string;
    channel?: PlatformChannel;
    user_info?: UserDataInfo;
    order_value?: number;
    currency?: Currency;
    currency_info?: CurrencyInfo;
    prices?: Prices;
    ordering_currency_prices?: OrderingCurrencyPrices;
};
/** @returns {OrderListingResponseSchema} */
declare function OrderListingResponseSchema(): OrderListingResponseSchema;
type OrderListingResponseSchema = {
    total_count?: number;
    message?: string;
    success?: boolean;
    items?: PlatformOrderItems[];
    lane?: string;
    page?: Page;
};
/** @returns {PlatformTrack} */
declare function PlatformTrack(): PlatformTrack;
type PlatformTrack = {
    /**
     * - Specifies the date and time
     * when an update on the shipment's fulfilling store was received on the platform.
     */
    last_location_recieved_at?: string;
    /**
     * - It contains the additional properties related to
     * shipment transition like Kafka_emission_status, user_name, etc.
     * Additionally it is dynamic.
     */
    meta?: any;
    raw_status?: string;
    /**
     * - Records the date and time when the platform
     * received an update on the shipment's location.
     */
    updated_at?: string;
    updated_time?: string;
    awb?: string;
    /**
     * - Shipment type of the shipment.
     */
    shipment_type?: string;
    status?: string;
    reason?: string;
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
    reasons?: Reason[];
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
    bag_update_time?: number;
    id?: string;
    bag_id?: number;
    affiliate_bag_details?: AffiliateBagDetails;
    affiliate_details?: AffiliateDetails;
    applied_promos?: any[];
    article?: Article;
    article_details?: ArticleStatusDetails;
    bag_status?: BagStatusHistory[];
    bag_status_history?: BagStatusHistory[];
    brand?: Brand;
    company?: Company;
    current_operational_status?: BagStatusHistory;
    current_status?: BagStatusHistory;
    dates?: Dates;
    delivery_address?: Address;
    delivery_slot?: DeliverySlotDetails;
    display_name?: string;
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
    line_number?: number;
    lock_status?: boolean;
    manifest_id?: string;
    /**
     * - Meta data of the bag details contains additional,
     * potentially dynamic information about the bag details.
     */
    meta?: any;
    mode_of_payment?: string;
    no_of_bags_order?: number;
    operational_status?: string;
    order?: OrderDetails;
    order_integration_id?: string;
    /**
     * - Defines the specific journey a shipment
     * will follow based on the application's operational needs and customer
     * preferences. This field categorizes orders into distinct types, each
     * associated with a unique processing flow. For example:
     *
     * - "HomeDelivery": The order undergoes all state transitions typical for a
     * delivery, from processing the shipment to final delivery at the
     * customer's address.
     * - "PickAtStore": The order is prepared for pickup and moved to a state where it
     * is ready to be handed over directly to the customer at the store. This
     * type streamlines the process by bypassing traditional shipping stages
     * and facilitating a quicker transition to the final handover stage.
     */
    order_type?: string;
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
    charges?: PriceAdjustmentCharge[];
    qc_required?: boolean;
    quantity?: number;
    reasons?: any[];
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
    seller_identifier?: string;
    shipment?: Shipment;
    shipment_details?: ShipmentDetails;
    shipment_id?: string;
    shipment_gst?: ShipmentGstDetails;
    shipment_status?: ShipmentStatusData;
    shipment_status_history?: ShipmentStatusData[];
    status?: BagReturnableCancelableStatus;
    tags?: string[];
    total_shipment_bags?: number;
    total_shipments_in_order?: number;
    /**
     * - Specifies the type of the transaction
     * being processed. This classification helps in distinguishing between
     * different operational processes and allows for tailored handling of each
     * transaction type. For example, a 'shipment' transaction type refers to
     * operations related to the shipping of goods.
     */
    transaction_type?: string;
    type?: string;
    /**
     * - The date and time when the bag was last updated.
     */
    updated_at?: string;
    user?: UserDetails;
    weight?: WeightData;
    original_bag_list?: number[];
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
    message?: string;
    success?: boolean;
};
